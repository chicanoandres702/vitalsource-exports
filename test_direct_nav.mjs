import { chromium } from 'playwright';
import fs from 'fs';

async function test() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json', 'utf8'));
  await context.addCookies(cookies);

  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));

  // Test: For each page, construct the jigsaw URL and navigate via iframe src
  console.log('=== Testing direct iframe navigation ===');

  const page = await context.newPage();
  await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(8000);

  // Test 3 different pages
  for (const pageIdx of [0, 50, 100, 200]) {
    const targetPage = pages[pageIdx];
    const iframeSrc = 'https://jigsaw.vitalsource.com/books/9781266607752' + targetPage.path + '?favre=brett';

    console.log(`\n--- Page ${pageIdx + 1}: ${targetPage.chapterTitle} ---`);

    // Set iframe src
    const oldSrcSet = await page.evaluate((src) => {
      const iframes = Array.from(document.querySelectorAll('iframe'));
      for (const iframe of iframes) {
        if (iframe.src && iframe.src.includes('jigsaw')) {
          const old = iframe.src;
          iframe.src = src;
          return old;
        }
      }
      return 'no iframe';
    }, iframeSrc);

    // Wait for frame to load
    await new Promise(r => setTimeout(r, 3000));

    // Find the content frame and extract
    const allFrames = context.pages().flatMap(p => p.frames());
    const epubFrames = allFrames.filter(f => f.url().includes('epub/OPS'));
    console.log('EPUB frames:', epubFrames.length);

    if (epubFrames.length > 0) {
      const frame = epubFrames[epubFrames.length - 1]; // Get the latest
      console.log('Frame URL:', frame.url().substring(0, 100));

      try {
        const content = await frame.evaluate(() => {
          const body = document.body;
          if (!body || !body.innerHTML) return null;
          return {
            htmlLength: body.innerHTML.length,
            text: body.innerText?.substring(0, 200) || '',
            hasP: body.innerHTML.includes('<p'),
            hasImg: body.innerHTML.includes('<img'),
            pCount: document.querySelectorAll('p').length,
            imgCount: document.querySelectorAll('img').length,
          };
        });
        console.log('Content:', JSON.stringify(content));
      } catch(e) {
        console.log('Evaluate error:', e.message);
      }
    } else {
      console.log('No epub frame found');
      console.log('All frames:', allFrames.map(f => f.url().substring(0, 80)));
    }
  }

  await browser.close();
  console.log('\nDone');
}

test().catch(console.error);
