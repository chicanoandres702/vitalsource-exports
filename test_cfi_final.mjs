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

  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));
  
  // Method 1: Use page.goto with epubcfi URL, then wait for frame
  console.log('=== Method: page.goto + waitForFrame ===');
  
  const targetPage = pages[50]; // Page 51
  const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(targetPage.cfi);
  console.log('Navigating to:', targetPage.chapterTitle);
  
  await page.goto(cfiUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
  
  // Wait for any frame navigation to complete
  await page.waitForLoadState('load', { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(3000);

  // Find and extract content with retries
  let content = null;
  let attempts = 0;
  while (!content && attempts < 5) {
    const frame = getContentFrame();
    if (frame) {
      try {
        // Wait for frame to load
        await frame.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => {});
        await new Promise(r => setTimeout(r, 1000));
        
        content = await frame.evaluate(() => {
          const body = document.body;
          if (!body || !body.innerHTML) return null;
          const html = body.innerHTML;
          const text = body.innerText || '';
          const cssLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href);
          const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
          const frameUrl = window.location.href;
          let cfi = '';
          const cfiMatch = frameUrl.match(/#cfi=([^!]+)/);
          if (cfiMatch) cfi = decodeURIComponent(cfiMatch[1]);
          const firstLines = text.split('\n').filter(l => l.trim()).slice(0, 3);
          return { html, text: text.substring(0, 500), paragraphs: document.querySelectorAll('p').length, images, cssLinks, frameUrl, cfi, firstLines, chapterPath: window.location.pathname };
        });
        
        if (content && content.html && content.html.length > 50) break;
      } catch(e) {
        console.log(`Attempt ${attempts + 1}: ${e.message}`);
      }
    }
    attempts++;
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log('Content:', content ? `SUCCESS (${content.paragraphs}p, ${content.images.length}img)` : 'FAILED');

  // Method 2: Test rapid sequential navigation with fixed URL
  console.log('\n=== Method 2: Sequential navigation ===');
  const startTime = Date.now();
  let successCount = 0;
  
  for (let i = 0; i < 10; i++) {
    const pageIdx = 100 + i;
    const target = pages[pageIdx];
    const url = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(target.cfi);
    
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(3000);
      
      let frame = getContentFrame();
      if (!frame) {
        // Wait a bit more
        await new Promise(r => setTimeout(r, 2000));
        frame = getContentFrame();
      }
      
      if (frame) {
        // Extract with simple retry
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            const content = await frame.evaluate(() => {
              const body = document.body;
              if (!body || !body.innerHTML || body.innerHTML.length < 50) return null;
              return {
                htmlLen: body.innerHTML.length,
                pCount: document.querySelectorAll('p').length,
                imgCount: document.querySelectorAll('img').length,
              };
            });
            if (content) {
              console.log(`Page ${pageIdx + 1}: ${content.pCount}p, ${content.imgCount}img`);
              successCount++;
              break;
            }
          } catch(e) {
            // Frame might have changed - get new one
            frame = getContentFrame();
            if (!frame) break;
            await new Promise(r => setTimeout(r, 500));
          }
        }
      } else {
        console.log(`Page ${pageIdx + 1}: no frame`);
      }
    } catch(e) {
      console.log(`Page ${pageIdx + 1}: ${e.message.substring(0, 50)}`);
    }
  }
  
  const elapsed = Date.now() - startTime;
  console.log(`\nTiming: ${successCount}/10 pages in ${(elapsed/1000).toFixed(1)}s (${(elapsed/10).toFixed(0)}s per page estimated)`);
  
  await browser.close();
}

main().catch(console.error);
