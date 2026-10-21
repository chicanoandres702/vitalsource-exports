import { chromium } from 'playwright';
import fs from 'fs';

async function test() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json', 'utf8'));
  await context.addCookies(cookies);

  const page = await context.newPage();
  await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(8000);

  const getContentFrame = () => {
    for (const p of context.pages()) {
      for (const f of p.frames()) {
        if (f.url().includes('epub/OPS')) return f;
      }
    }
    return null;
  };

  // Click Next a few times and track the CFI in the URL
  console.log('=== Tracking CFI during Next navigation ===');
  for (let i = 0; i < 10; i++) {
    const frame = getContentFrame();
    if (frame) {
      const url = frame.url();
      const cfiMatch = url.match(/#cfi=([^!]+)/);
      const cfi = cfiMatch ? cfiMatch[1] : 'no cfi';
      console.log(`Step ${i}: ${url.substring(80)} | CFI: ${decodeURIComponent(cfiMatch ? cfiMatch[1] : '').substring(0, 60)}`);
    }

    if (i < 9) {
      const nextBtn = await page.$('button[aria-label="Next"]');
      if (nextBtn) {
        await nextBtn.click();
        await page.waitForTimeout(500);
      }
    }
  }

  // Now try to navigate to a specific CFI by modifying the iframe src
  console.log('\n=== Testing direct CFI navigation via iframe src ===');
  // Load pages data
  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));

  // Try setting the iframe src directly
  const frame = getContentFrame();
  if (frame) {
    console.log('Current iframe URL:', frame.url().substring(0, 100));

    // Try navigating to page 50's CFI
    const targetPage = pages[49];
    const iframeSrc = 'https://jigsaw.vitalsource.com/books/9781266607752' + targetPage.path + '?favre=brett#cfi=' + encodeURIComponent(targetPage.cfi);
    console.log('Target iframe src:', iframeSrc.substring(0, 120));

    // Try setting it via JavaScript on the reader page
    try {
      await page.evaluate((src) => {
        const iframes = document.querySelectorAll('iframe');
        for (const iframe of iframes) {
          if (iframe.src && iframe.src.includes('jigsaw')) {
            console.log('Found jigsaw iframe:', iframe.src.substring(0, 80));
            iframe.src = src;
            return true;
          }
        }
        return false;
      }, iframeSrc);

      await page.waitForTimeout(5000);

      const newFrame = getContentFrame();
      if (newFrame) {
        console.log('Frame after src change:', newFrame.url().substring(0, 120));
        const text = await newFrame.evaluate(() => document.body.innerText?.substring(0, 200) || '');
        console.log('Content:', text);
      }
    } catch(e) {
      console.log('Error setting iframe src:', e.message);
    }
  }

  await browser.close();
}

test().catch(console.error);
