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

  // Check the Viewer object
  console.log('=== Viewer object ===');
  const viewerInfo = await page.evaluate(() => {
    if (!window.Viewer) return { exists: false };
    const info = { exists: true, keys: Object.keys(window.Viewer), constructor: window.Viewer.constructor?.name };
    
    // Check for navigation methods
    try {
      const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(window.Viewer))
        .filter(k => typeof window.Viewer[k] === 'function');
      info.methods = methods;
    } catch(e) {
      info.methodsError = e.message;
    }
    
    // Check if Viewer has currentLocation or page info
    try {
      for (const key of Object.keys(window.Viewer)) {
        if (/loc|page|cfi|cur|pos|index/i.test(key)) {
          info[key] = window.Viewer[key];
        }
      }
    } catch(e) {}
    
    return info;
  });
  console.log(JSON.stringify(viewerInfo, null, 2));

  // Check the MOSAIC-BOOK element
  console.log('\n=== MOSAIC-BOOK element ===');
  const mosaicInfo = await page.evaluate(() => {
    const el = document.querySelector('mosaic-book');
    if (!el) return { exists: false };
    
    const info = {
      tagName: el.tagName,
      attributes: Array.from(el.attributes).slice(0, 10).map(a => ({ name: a.name, value: a.value?.substring(0, 100) })),
    };
    
    // Check for data attributes
    for (const attr of el.attributes) {
      if (attr.name.startsWith('data-')) {
        info[attr.name] = attr.value;
      }
    }
    
    // Check shadow DOM
    try {
      if (el.shadowRoot) {
        info.shadowRootExists = true;
        info.shadowContent = el.shadowRoot.innerHTML?.substring(0, 500);
      } else {
        info.shadowRootExists = false;
      }
    } catch(e) {
      info.shadowRootError = e.message;
    }
    
    // Check for event listeners or custom methods
    try {
      for (const key of Object.keys(el)) {
        if (typeof el[key] === 'function' && /nav|page|cfi|jump|go|render|load|display/i.test(key)) {
          info['method_' + key] = 'function';
        }
      }
    } catch(e) {}
    
    return info;
  });
  console.log(JSON.stringify(mosaicInfo, null, 2));

  // Now test: use epubcfi URL format to navigate
  console.log('\n=== Testing epubcfi URL navigation ===');
  const targetPage = pages[49];
  // EPUB CFI format: /reader/books/{ISBN}/epubcfi/{cfi}
  const epubcfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(targetPage.cfi);
  console.log('EPUBCFI URL:', epubcfiUrl.substring(0, 120));

  try {
    await page.goto(epubcfiUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(5000);

    console.log('Page URL:', page.url());

    // Check frames
    const allFrames = (await context.pages().flatMap(p => p.frames()));
    const epubFrames = allFrames.filter(f => f.url().includes('epub'));
    console.log('EPUB frames:', epubFrames.length);
    for (const f of epubFrames) {
      console.log('  ', f.url().substring(0, 150));
      try {
        const content = await f.evaluate(() => ({
          text: document.body.innerText?.substring(0, 200) || '',
          pCount: document.querySelectorAll('p').length,
          hasImg: document.body.innerHTML.includes('<img'),
        }));
        console.log('  Content:', JSON.stringify(content));
      } catch(e) {
        console.log('  Eval error:', e.message);
      }
    }
  } catch(e) {
    console.log('Navigation error:', e.message);
  }

  await browser.close();
}

test().catch(console.error);
