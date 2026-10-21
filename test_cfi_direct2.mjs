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

  // Click Next 10 times, re-finding the button each time
  console.log('=== Next navigation (re-finding button) ===');
  for (let i = 0; i < 10; i++) {
    const frame = getContentFrame();
    if (frame) {
      const url = frame.url();
      const cfiMatch = url.match(/#cfi=([^!]+)/);
      const path = url.split('?')[0].split('/').slice(-1)[0];
      console.log(`Step ${i}: file=${path} | CFI=${decodeURIComponent(cfiMatch ? cfiMatch[1] : '').substring(0, 50)}`);
    }

    // Click Next using page.evaluate to avoid stale handle
    const clicked = await page.evaluate(() => {
      const btn = document.querySelector('button[aria-label="Next"]');
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });

    if (!clicked) {
      console.log('Next button not found at step', i);
      break;
    }
    await page.waitForTimeout(500);
  }

  // Now test: Can we set iframe src directly?
  console.log('\n=== Direct iframe src test ===');
  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));

  // Find the iframe element
  const iframeInfo = await page.evaluate(() => {
    const iframes = Array.from(document.querySelectorAll('iframe'));
    return iframes.map(f => ({ src: f.src?.substring(0, 100), id: f.id, name: f.name }));
  });
  console.log('IFrames:', JSON.stringify(iframeInfo, null, 2));

  // Try to set iframe src directly to jump to page 50
  const targetPage = pages[49];
  const newSrc = 'https://jigsaw.vitalsource.com/books/9781266607752' + targetPage.path + '?favre=brett';
  console.log('\nSetting iframe src to:', newSrc.substring(0, 100));

  const setResult = await page.evaluate((src) => {
    const iframes = Array.from(document.querySelectorAll('iframe'));
    for (const iframe of iframes) {
      if (iframe.src && iframe.src.includes('jigsaw')) {
        iframe.src = src;
        return iframe.src;
      }
    }
    return 'no iframe found';
  }, newSrc);
  console.log('Set result:', setResult);

  await page.waitForTimeout(5000);

  const frame = getContentFrame();
  if (frame) {
    console.log('Frame after src change:', frame.url().substring(0, 150));
    const content = await frame.evaluate(() => ({
      text: document.body.innerText?.substring(0, 300) || '',
      hasP: document.body.innerHTML.includes('<p'),
      hasImg: document.body.innerHTML.includes('<img'),
    }));
    console.log('Content:', JSON.stringify(content));
  } else {
    console.log('No frame found after src change');
    // List all frames
    for (const p of context.pages()) {
      for (const f of p.frames()) {
        console.log('Frame:', f.url().substring(0, 100));
      }
    }
  }

  await browser.close();
}

test().catch(console.error);
