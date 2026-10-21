import { chromium } from 'playwright';
import fs from 'fs';

async function main() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  
  const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json'));
  await context.addCookies(cookies);

  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));
  const totalPages = pages.length;

  // Initialize 3 parallel readers
  const readers = [];
  for (let i = 0; i < 3; i++) {
    const readerPage = await context.newPage();
    await readerPage.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await readerPage.waitForTimeout(5000);
    readers.push(readerPage);
    console.log(`Reader ${i + 1} ready`);
  }

  // Each reader navigates to its assigned pages via CFI
  const PARALLEL_WORKERS = 3;
  const results = [];
  const startTime = Date.now();

  const workerPromises = readers.map(async (reader, workerId) => {
    const assignedPages = [];
    for (let i = workerId; i < totalPages; i += PARALLEL_WORKERS) {
      assignedPages.push(i);
    }

    let successCount = 0;
    for (const pageIdx of assignedPages) {
      const targetPage = pages[pageIdx];
      const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(targetPage.cfi);

      try {
        await reader.goto(cfiUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await reader.waitForTimeout(2500);

        // Find content frame
        let frame = null;
        for (const p of context.pages()) {
          for (const f of p.frames()) {
            if (f.url().includes('jigsaw.vitalsource.com/books/') && f.url().includes('epub/OPS')) {
              frame = f;
              break;
            }
          }
          if (frame) break;
        }

        if (frame) {
          // Extract with retry
          let content = null;
          for (let attempt = 0; attempt < 3; attempt++) {
            try {
              content = await frame.evaluate(() => {
                const body = document.body;
                if (!body || !body.innerHTML || body.innerHTML.length < 50) return null;
                return {
                  htmlLen: body.innerHTML.length,
                  pCount: document.querySelectorAll('p').length,
                  imgCount: document.querySelectorAll('img').length,
                  text: body.innerText?.substring(0, 50) || '',
                };
              });
              if (content) break;
            } catch(e) {
              // Frame changed, find new one
              for (const p of context.pages()) {
                for (const f of p.frames()) {
                  if (f.url().includes('jigsaw.vitalsource.com/books/') && f.url().includes('epub/OPS')) {
                    frame = f;
                  }
                }
              }
            }
            await new Promise(r => setTimeout(r, 300));
          }
          
          if (content) {
            successCount++;
            if (successCount % 20 === 0) {
              console.log(`Worker ${workerId}: ${successCount} pages done`);
            }
          }
        }
      } catch(e) {
        // Ignore navigation errors
      }
    }
    return successCount;
  });

  const workerResults = await Promise.all(workerPromises);
  const totalSuccess = workerResults.reduce((a, b) => a + b, 0);
  const elapsed = Date.now() - startTime;

  console.log(`\n=== Results ===`);
  console.log(`Total: ${totalSuccess}/${totalPages} pages in ${(elapsed/1000).toFixed(0)}s`);
  console.log(`Estimated total time for 250 pages: ${(elapsed / totalSuccess * totalPages / 1000).toFixed(0)}s`);

  await browser.close();
}

main().catch(console.error);
