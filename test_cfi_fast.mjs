import { chromium } from 'playwright';
import fs from 'fs';

async function test() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json', 'utf8'));
  await context.addCookies(cookies);

  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));

  const getContentFrame = () => {
    for (const p of context.pages()) {
      for (const f of p.frames()) {
        if (f.url().includes('jigsaw.vitalsource.com/books/') && f.url().includes('epub/OPS')) return f;
      }
    }
    return null;
  };

  const page = await context.newPage();
  await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(10000);

  const testPages = [0, 1, 2, 50, 100, 200, 249];
  const results = [];

  console.log('=== Testing CFI navigation ===\n');

  for (const pageIdx of testPages) {
    const targetPage = pages[pageIdx];
    const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(targetPage.cfi);

    console.log(`Page ${pageIdx + 1}: ${targetPage.chapterTitle}`);

    try {
      // Use domcontentloaded instead of networkidle
      await page.goto(cfiUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });

      // Wait for content frame
      let frame = getContentFrame();
      let waitStart = Date.now();
      while (!frame && Date.now() - waitStart < 10000) {
        await new Promise(r => setTimeout(r, 300));
        frame = getContentFrame();
      }

      if (!frame) {
        console.log('  FAILED: no frame');
        results.push({ pageIdx, success: false, reason: 'no frame' });
        continue;
      }

      // Try to extract content with retries
      let content = null;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          await new Promise(r => setTimeout(r, 500));
          content = await frame.evaluate(() => {
            const body = document.body;
            if (!body || !body.innerHTML || body.innerHTML.length < 50) return null;
            return {
              text: body.innerText?.substring(0, 100) || '',
              pCount: document.querySelectorAll('p').length,
              imgCount: document.querySelectorAll('img').length,
              htmlLength: body.innerHTML.length,
            };
          });
          if (content && content.htmlLength > 50) break;
        } catch(e) {
          if (attempt === 0) console.log(`  Attempt ${attempt + 1}: ${e.message}`);
          // Frame might have been replaced - get new frame
          frame = getContentFrame();
          if (!frame) break;
        }
      }

      if (content) {
        console.log(`  SUCCESS: ${content.pCount}p, ${content.imgCount}img, ${content.htmlLength}b`);
        results.push({ pageIdx, success: true, ...content });
      } else {
        console.log('  FAILED: no content');
        results.push({ pageIdx, success: false, reason: 'no content' });
      }
    } catch(e) {
      console.log(`  ERROR: ${e.message}`);
      results.push({ pageIdx, success: false, reason: e.message });
    }
  }

  console.log('\n=== Summary ===');
  console.log('Success:', results.filter(r => r.success).length);
  console.log('Failed:', results.filter(r => !r.success).length);

  await browser.close();
}

test().catch(console.error);
