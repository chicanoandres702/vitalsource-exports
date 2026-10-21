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

  // Wait for frame to have actual content
  async function waitForContentFrame(expectedUrlPart, timeout = 15000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      const frame = getContentFrame();
      if (frame) {
        try {
          const html = await frame.evaluate(() => document.body.innerHTML || '');
          if (html && html.length > 50) return frame;
        } catch(e) {
          // Frame might be navigating
        }
      }
      await new Promise(r => setTimeout(r, 200));
    }
    return null;
  }

  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));
  
  // Test 10 sequential pages with proper waiting
  console.log('=== Testing with proper frame waiting ===');
  const startTime = Date.now();
  let successCount = 0;
  
  for (let i = 0; i < 10; i++) {
    const pageIdx = 50 + i;
    const targetPage = pages[pageIdx];
    const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(targetPage.cfi);
    
    try {
      await page.goto(cfiUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      
      // Wait for frame to have content
      const frame = await waitForContentFrame(targetPage.path, 10000);
      
      if (frame) {
        const content = await frame.evaluate(() => {
          const body = document.body;
          return {
            htmlLen: body.innerHTML.length,
            pCount: document.querySelectorAll('p').length,
            imgCount: document.querySelectorAll('img').length,
            text: body.innerText?.substring(0, 100) || '',
          };
        });
        console.log(`Page ${pageIdx + 1}: ${content.pCount}p, ${content.imgCount}img, ${content.htmlLen}b`);
        successCount++;
      } else {
        console.log(`Page ${pageIdx + 1}: no content frame`);
      }
    } catch(e) {
      console.log(`Page ${pageIdx + 1}: error - ${e.message.substring(0, 60)}`);
    }
  }
  
  const elapsed = Date.now() - startTime;
  console.log(`\nTiming: ${successCount}/10 pages in ${(elapsed/1000).toFixed(1)}s (${(elapsed/10).toFixed(1)}s per page)`);
  
  await browser.close();
}

main().catch(console.error);
