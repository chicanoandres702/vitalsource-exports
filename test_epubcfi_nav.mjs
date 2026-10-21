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
  await page.waitForTimeout(8000);

  // Test: Navigate to 5 pages using epubcfi URL and extract content
  const getContentFrame = () => {
    for (const p of context.pages()) {
      for (const f of p.frames()) {
        if (f.url().includes('jigsaw.vitalsource.com/books/') && f.url().includes('epub/OPS')) return f;
      }
    }
    return null;
  };

  console.log('=== Testing epubcfi navigation + extraction ===\n');

  const testPages = [0, 25, 50, 100, 200];
  const extractedPages = [];

  for (const pageIdx of testPages) {
    const targetPage = pages[pageIdx];
    const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(targetPage.cfi);

    console.log(`Page ${pageIdx + 1}: ${targetPage.chapterTitle}`);

    try {
      await page.goto(cfiUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(3000);

      const frame = getContentFrame();
      if (frame) {
        const content = await frame.evaluate(() => {
          const body = document.body;
          const text = body.innerText || '';
          const paragraphs = body.querySelectorAll('p');
          const images = body.querySelectorAll('img');
          return {
            text: text.substring(0, 200),
            pCount: paragraphs.length,
            imgCount: images.length,
            htmlLength: body.innerHTML.length,
          };
        });
        console.log(`  Content: ${content.pCount} paragraphs, ${content.imgCount} images, ${content.htmlLength} bytes`);
        console.log(`  Text: ${content.text}`);
        extractedPages.push({ pageIdx, success: true, ...content });
      } else {
        console.log('  No content frame found');
        extractedPages.push({ pageIdx, success: false, reason: 'no frame' });
      }
    } catch(e) {
      console.log(`  Error: ${e.message}`);
      extractedPages.push({ pageIdx, success: false, reason: e.message });
    }
  }

  console.log('\n=== Summary ===');
  console.log('Successful:', extractedPages.filter(p => p.success).length);
  console.log('Failed:', extractedPages.filter(p => !p.success).length);
  console.log(JSON.stringify(extractedPages.filter(p => !p.success), null, 2));

  // Test: Can we navigate without page.goto by using Viewer.callMethod?
  console.log('\n=== Testing Viewer.callMethod ===');
  const viewerInfo = await page.evaluate(() => {
    if (!window.Viewer) return { exists: false };

    // Check callMethod signature
    const info = { exists: true };

    // Try to find what methods are available
    try {
      // The Viewer has callMethod - try calling it with 'next' or 'navigate'
      info.callMethodType = typeof window.Viewer.callMethod;
      info.resolveType = typeof window.Viewer.resolve;
      info.promise = window.Viewer instanceof Promise;
      info.isPromise = window.Viewer?.constructor?.name;
      info.uuid = window.Viewer.uuid;
      info.wrapperType = typeof window.Viewer.wrapper;
    } catch(e) {
      info.error = e.message;
    }

    return info;
  });
  console.log('Viewer info:', JSON.stringify(viewerInfo, null, 2));

  // Check if there's a resolve method that returns a promise
  if (window.Viewer && window.Viewer.callMethod) {
    try {
      // Try calling navigate method with CFI
      const result = await page.evaluate(async () => {
        try {
          // Viewer is a Thenable/Promise-like object
          const viewer = window.Viewer;
          // Try to resolve the viewer
          if (viewer.resolve && typeof viewer.resolve === 'function') {
            const resolved = await viewer.resolve();
            return { resolved: typeof resolved, keys: Object.keys(resolved || {}).slice(0, 20) };
          }
          return { error: 'no resolve method' };
        } catch(e) {
          return { error: e.message };
        }
      });
      console.log('Viewer resolve result:', JSON.stringify(result));
    } catch(e) {
      console.log('Viewer resolve error:', e.message);
    }
  }

  await browser.close();
}

test().catch(console.error);
