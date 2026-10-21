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

  // Find the reader's internal API for navigation
  console.log('=== Searching for reader navigation API ===');

  // Check if there's a global reader object or if we can access the iframe's contentWindow
  const apiInfo = await page.evaluate(() => {
    const info = {};

    // Check for viewer objects
    for (const key of Object.keys(window)) {
      const val = window[key];
      if (val && typeof val === 'object') {
        const keys = Object.keys(val).filter(k => /nav|page|cfi|jump|go|reader|book|view|render|load/i.test(k));
        if (keys.length > 0) {
          info[key] = keys;
        }
      }
    }

    // Check the wrapper iframe for its contentWindow
    // The wrapper.html is in an iframe - we need to access its content
    const iframes = document.querySelectorAll('iframe');
    for (const iframe of iframes) {
      if (iframe.src && iframe.src.includes('wrapper.html')) {
        info.wrapperIframe = iframe.src;
        try {
          // Try accessing contentWindow (might be cross-origin)
          const cw = iframe.contentWindow;
          if (cw) {
            info.wrapperContentWindow = 'accessible';
            const innerKeys = Object.keys(cw).filter(k => /nav|page|cfi|jump|go|reader|book|view/i.test(k));
            info.wrapperContentWindowKeys = innerKeys;
          } else {
            info.wrapperContentWindow = 'cross-origin';
          }
        } catch(e) {
          info.wrapperContentWindow = 'error: ' + e.message;
        }
      }
    }

    return info;
  });
  console.log('API info:', JSON.stringify(apiInfo, null, 2));

  // Try to access the wrapper iframe as a frame
  const wrapperFrame = (await context.pages().flatMap(p => p.frames()))
    .find(f => f.url().includes('wrapper.html'));

  if (wrapperFrame) {
    console.log('\n=== Wrapper frame evaluation ===');
    const wrapperApi = await wrapperFrame.evaluate(() => {
      const info = {};

      // Check window
      for (const key of Object.keys(window).slice(0, 50)) {
        if (/nav|page|cfi|jump|go|reader|book|view|render|load/i.test(key)) {
          info[key] = typeof window[key];
        }
      }

      // Check for any objects with navigation methods
      const allObjs = Object.keys(window).map(k => window[k]).filter(v => v && typeof v === 'object');
      for (const obj of allObjs) {
        try {
          if (obj && typeof obj === 'object') {
            const methods = Object.getOwnPropertyNames(obj).filter(k => /nav|page|cfi|jump|go|reader|render|load/i.test(k));
            if (methods.length > 0) {
              info[obj.constructor?.name || 'unknown'] = methods;
            }
          }
        } catch(e) {}
      }

      return info;
    });
    console.log('Wrapper API:', JSON.stringify(wrapperApi, null, 2));

    // Try to find the EPUB iframe inside the wrapper
    console.log('\n=== Checking wrapper internals ===');
    const wrapperInternals = await wrapperFrame.evaluate(() => {
      return {
        html: document.documentElement.outerHTML.substring(0, 500),
        body: document.body.innerHTML.substring(0, 500),
        iframes: Array.from(document.querySelectorAll('iframe')).map(f => f.src),
        bodyChildren: Array.from(document.body.children).map(el => el.tagName + '.' + el.className),
      };
    });
    console.log('Wrapper internals:', JSON.stringify(wrapperInternals, null, 2));
  }

  // Alternative: Check the main page for the reader's React state or any data we can use
  console.log('\n=== Checking reader state ===');
  const readerState = await page.evaluate(() => {
    const info = {};

    // Check localStorage/sessionStorage for reader state
    try {
      info.localStorage = Object.keys(localStorage).filter(k => /vs|vitalsource|reader|book|cfi|page/i.test(k));
    } catch(e) { info.localStorageError = e.message; }

    try {
      info.sessionStorage = Object.keys(sessionStorage).filter(k => /vs|vitalsource|reader|book|cfi|page/i.test(k));
    } catch(e) { info.sessionStorageError = e.message; }

    // Check for any script tags with reader config
    const scripts = Array.from(document.querySelectorAll('script'));
    for (const script of scripts) {
      const content = script.innerHTML || script.src;
      if (content && content.includes('cfi')) {
        info.cfiScripts = content.substring(0, 200);
      }
    }

    return info;
  });
  console.log('Reader state:', JSON.stringify(readerState, null, 2));

  // Final approach: Try using URL with full CFI including assertions
  console.log('\n=== Testing full CFI URL ===');
  const targetPage = pages[49];
  // Try using the cfiWithoutAssertions
  const urlWithCfi = 'https://capella.vitalsource.com/reader/books/9781266607752' + targetPage.path + '#cfi=' + encodeURIComponent(targetPage.cfi);

  // Instead of page.goto, try dispatching a popstate event or using history.pushState
  const navResult = await page.evaluate((url) => {
    // Try using the History API
    try {
      history.pushState({}, '', url);
      // Dispatch popstate to trigger reader's route handler
      const event = new PopStateEvent('popstate', { state: {} });
      window.dispatchEvent(event);
      return 'histroy.pushState done';
    } catch(e) {
      return 'Error: ' + e.message;
    }
  }, urlWithCfi);
  console.log('History API result:', navResult);

  await page.waitForTimeout(5000);

  // Check frames
  const allFrames = (await context.pages().flatMap(p => p.frames()));
  for (const f of allFrames) {
    if (f.url().includes('epub')) {
      console.log('EPUB frame:', f.url().substring(0, 120));
    }
  }

  await browser.close();
}

test().catch(console.error);
