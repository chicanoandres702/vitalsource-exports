import { chromium } from 'playwright';
import fs from 'fs';

async function main() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  
  const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json'));
  await context.addCookies(cookies);
  
  const page = await context.newPage();
  await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(8000);

  const getContentFrame = () => {
    for (const p of context.pages()) {
      for (const f of p.frames()) {
        if (f.url().includes('jigsaw.vitalsource.com/books/') && f.url().includes('epub/OPS')) return f;
      }
    }
    return null;
  };

  let frame = getContentFrame();
  console.log('Initial frame:', frame?.url()?.substring(0, 80));

  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));
  
  // Test navigation to 5 pages using epubcfi URL
  const testIndices = [0, 25, 50, 100, 200, 249];
  
  for (const pageIdx of testIndices) {
    const targetPage = pages[pageIdx];
    const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(targetPage.cfi);
    console.log(`\nPage ${pageIdx + 1}: ${targetPage.chapterTitle}`);
    
    try {
      await page.goto(cfiUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(4000);
      
      frame = getContentFrame();
      if (frame) {
        console.log('  Frame:', frame.url().substring(60, 120));
        const content = await frame.evaluate(() => {
          const body = document.body;
          if (!body || !body.innerHTML) return null;
          return {
            htmlLen: body.innerHTML.length,
            hasP: body.innerHTML.includes('<p'),
            pCount: document.querySelectorAll('p').length,
            imgCount: document.querySelectorAll('img').length,
            text: body.innerText?.substring(0, 100) || '',
          };
        });
        console.log('  Content:', JSON.stringify(content));
      } else {
        console.log('  No frame found');
        // Check all frames
        const allFrames = context.pages().flatMap(p => p.frames());
        for (const f of allFrames) {
          if (f.url().includes('jigsaw') || f.url().includes('capella')) {
            console.log('  ', f.url().substring(0, 80));
          }
        }
      }
    } catch(e) {
      console.log('  Error:', e.message);
    }
  }

  // Test timing for 10 sequential pages
  console.log('\n=== Timing test: 10 sequential pages ===');
  const startTime = Date.now();
  let successCount = 0;
  
  for (let i = 0; i < 10; i++) {
    const pageIdx = 50 + i;
    const targetPage = pages[pageIdx];
    const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(targetPage.cfi);
    
    try {
      await page.goto(cfiUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(2000);
      
      frame = getContentFrame();
      if (frame) {
        const content = await frame.evaluate(() => {
          const body = document.body;
          if (!body || !body.innerHTML || body.innerHTML.length < 50) return null;
          return {
            htmlLen: body.innerHTML.length,
            pCount: document.querySelectorAll('p').length,
          };
        });
        if (content) {
          successCount++;
          console.log(`  Page ${pageIdx + 1}: ${content.pCount}p, ${content.htmlLen}b`);
        } else {
          console.log(`  Page ${pageIdx + 1}: empty content`);
        }
      } else {
        console.log(`  Page ${pageIdx + 1}: no frame`);
      }
    } catch(e) {
      console.log(`  Page ${pageIdx + 1}: error - ${e.message.substring(0, 50)}`);
    }
  }
  
  const elapsed = Date.now() - startTime;
  console.log(`\nTiming: ${successCount}/10 pages in ${(elapsed/1000).toFixed(1)}s (${(elapsed/10).toFixed(1)}s per page)`);
  
  await browser.close();
}

main().catch(console.error);
