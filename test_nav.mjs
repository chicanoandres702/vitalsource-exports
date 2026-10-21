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

  // Find content frame
  const getContentFrame = () => {
    for (const p of context.pages()) {
      for (const f of p.frames()) {
        if (f.url().includes('epub/OPS')) return f;
      }
    }
    return null;
  };

  let frame = getContentFrame();
  if (frame) {
    console.log('Initial frame:', frame.url().substring(0, 100));
    const content = await frame.evaluate(() => document.body.innerText.substring(0, 100));
    console.log('Initial content:', content);
  }

  // Test: Click Next button 5 times
  console.log('\n=== Testing Next button ===');
  for (let i = 0; i < 5; i++) {
    const nextBtn = await page.$('button[aria-label="Next"]');
    if (!nextBtn) {
      console.log('Next button not found at iteration', i);
      break;
    }
    await nextBtn.click();
    await page.waitForTimeout(1500);

    frame = getContentFrame();
    if (frame) {
      console.log(`After ${i+1} Next:`, frame.url().substring(80, 150));
    }
  }

  // Test: Use TOC to jump to Chapter 10
  console.log('\n=== Testing TOC jump ===');
  const tocButton = await page.$('button[aria-label="Table of Contents"]');
  if (tocButton) {
    await tocButton.click();
    await page.waitForTimeout(3000);

    // Click Chapter 10
    const chapterBtn = await page.$('[aria-label*="Chapter 10"]');
    if (chapterBtn) {
      console.log('Clicking Chapter 10...');
      await chapterBtn.click();
      await page.waitForTimeout(5000);

      frame = getContentFrame();
      if (frame) {
        console.log('Frame after TOC jump:', frame.url().substring(0, 120));
        const content = await frame.evaluate(() => ({
          text: document.body.innerText?.substring(0, 200) || '',
          hasP: document.body.innerHTML.includes('<p'),
        }));
        console.log('Content:', JSON.stringify(content));
      } else {
        console.log('No frame after TOC jump');
      }
    }
  }

  await browser.close();
  console.log('\nDone');
}

test().catch(console.error);
