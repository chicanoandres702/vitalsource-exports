import { chromium } from 'playwright';
import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));

async function test() {
  const targetPage = pages[49];
  console.log('Target page:', targetPage.page, targetPage.chapterTitle);

  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json', 'utf8'));
  await context.addCookies(cookies);

  const page = await context.newPage();
  await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(8000);

  // Find initial frame
  let contentFrame = context.pages().flatMap(p => p.frames()).find(f => f.url().includes('epub/OPS'));
  console.log('Initial frame:', contentFrame?.url()?.substring(0, 80));

  // Try Next button navigation - click 50 times
  console.log('\nClicking Next 50 times...');
  let success = 0;
  for (let i = 0; i < 50; i++) {
    const nextBtn = await page.$('button[aria-label="Next"]');
    if (!nextBtn) {
      console.log('Next button not found at iteration', i);
      break;
    }
    try {
      await nextBtn.click();
      await page.waitForTimeout(200);
      success++;
    } catch(e) {
      console.log('Click error at', i, ':', e.message);
    }
  }

  await page.waitForTimeout(2000);

  contentFrame = context.pages().flatMap(p => p.frames()).find(f => f.url().includes('epub/OPS'));
  if (contentFrame) {
    console.log('\nFrame after 50 Next clicks:', contentFrame.url().substring(0, 100));
    const content = await contentFrame.evaluate(() => {
      const body = document.body;
      return {
        textPreview: body.innerText?.substring(0, 200) || '',
        hasP: body.innerHTML.includes('<p'),
        htmlLength: body.innerHTML.length,
      };
    });
    console.log('Content:', JSON.stringify(content));
  } else {
    console.log('No frame found after Next clicks');
  }

  // Now test direct CFI URL navigation
  console.log('\n\n=== Testing direct CFI navigation ===');
  const directUrl = 'https://capella.vitalsource.com/reader/books/9781266607752' + targetPage.path + '#cfi=' + encodeURIComponent(targetPage.cfi);
  console.log('Navigating to:', directUrl.substring(0, 120));

  try {
    await page.goto(directUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(5000);

    console.log('Page URL:', page.url().substring(0, 100));

    // List all frames
    const allFrames = context.pages().flatMap(p => p.frames());
    console.log('Frames found:', allFrames.length);
    for (const f of allFrames) {
      console.log('  Frame:', f.url().substring(0, 120));
    }

    // Try extracting from any epub/OPS frame
    const epubFrame = allFrames.find(f => f.url().includes('epub/OPS'));
    if (epubFrame) {
      console.log('  Content frame:', epubFrame.url().substring(0, 120));
      const txt = await epubFrame.evaluate(() => document.body.innerText?.substring(0, 200) || '');
      console.log('  Text:', txt);
    } else {
      console.log('  No epub frame found - checking all frame URLs');
    }

  } catch(e) {
    console.log('Navigation error:', e.message);
  }

  // Wait and check again
  console.log('\nWaiting 5s then re-checking...');
  await page.waitForTimeout(5000);
  const finalFrames = context.pages().flatMap(p => p.frames()).filter(f => f.url().includes('epub'));
  console.log('EPUB frames after wait:', finalFrames.length);
  for (const f of finalFrames) {
    console.log('  ', f.url().substring(0, 120));
  }

  await browser.close();
}

test().catch(console.error);
