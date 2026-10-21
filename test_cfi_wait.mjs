import { chromium } from 'playwright';
import fs from 'fs';

async function test() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json', 'utf8'));
  await context.addCookies(cookies);

  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));

  const page = await context.newPage();
  await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(10000);

  // Helper: wait for and get content frame
  async function getContentFrame(retries = 10) {
    for (let i = 0; i < retries; i++) {
      const frames = context.pages().flatMap(p => p.frames());
      const frame = frames.find(f => f.url().includes('jigsaw.vitalsource.com/books/') && f.url().includes('epub/OPS'));
      if (frame) return frame;
      await new Promise(r => setTimeout(r, 500));
    }
    return null;
  }

  // Test pages
  const testPages = [0, 1, 25, 50, 100, 150, 200, 249];

  console.log('=== Testing CFI navigation with proper waits ===\n');

  for (const pageIdx of testPages) {
    const targetPage = pages[pageIdx];
    const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(targetPage.cfi);

    console.log(`Page ${pageIdx + 1}: ${targetPage.chapterTitle}`);

    try {
      // Navigate and wait for network to be idle
      await page.goto(cfiUrl, { waitUntil: 'networkidle', timeout: 30000 });

      // Wait for content frame to be ready
      const frame = await getContentFrame(10);

      if (frame) {
        // Wait for frame to have content
        let content = null;
        for (let attempt = 0; attempt < 5; attempt++) {
          try {
            await frame.waitForLoadState('domcontentloaded', { timeout: 3000 }).catch(() => {});
            await new Promise(r => setTimeout(r, 500));
            content = await frame.evaluate(() => {
              const body = document.body;
              if (!body || !body.innerHTML) return null;
              const text = body.innerText || '';
              const paragraphs = body.querySelectorAll('p');
              const images = body.querySelectorAll('img');
              const cssLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href);
              return {
                text: text.substring(0, 200),
                pCount: paragraphs.length,
                imgCount: images.length,
                htmlLength: body.innerHTML.length,
                cssLinks: cssLinks.length,
                frameUrl: window.location.href,
              };
            });
            if (content) break;
          } catch(e) {
            if (attempt === 0) console.log(`  Attempt ${attempt + 1} failed: ${e.message}`);
          }
          await new Promise(r => setTimeout(r, 500));
        }

        if (content) {
          console.log(`  SUCCESS: ${content.pCount}p, ${content.imgCount}img, ${content.htmlLength}b, CSS: ${content.cssLinks}`);
        } else {
          console.log('  FAILED: no content after retries');
        }
      } else {
        console.log('  FAILED: no content frame');
      }
    } catch(e) {
      console.log(`  ERROR: ${e.message}`);
    }
  }

  await browser.close();
}

test().catch(console.error);
