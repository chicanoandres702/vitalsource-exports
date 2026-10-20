import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--load-extension=/root/vitalsource_pdf_extension'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

const allMessages = [];
page.on('console', msg => {
  allMessages.push(msg.text());
  if (msg.text().includes('VS-') || msg.text().includes('content')) {
    console.log(`[PAGE] ${msg.text()}`);
  }
});

console.log('Navigating to VitalSource...');
await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5', {
  waitUntil: 'domcontentloaded',
  timeout: 30000
});

try {
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 15000 });
  console.log('Redirected to:', page.url());
} catch(e) {
  console.log('URL:', page.url());
}

// Wait for content script to load
console.log('\nWaiting for content script...');
await page.waitForTimeout(5000);

// Check if content script loaded
const readyCheck = await page.evaluate(async () => {
  let ready = false;
  let url = null;
  
  const handler = (event) => {
    if (event.data?.type === 'VS_CONTENT_SCRIPT_LOADED') {
      ready = true;
      url = event.data.url;
    }
  };
  window.addEventListener('message', handler);
  
  await new Promise(r => setTimeout(r, 2000));
  window.removeEventListener('message', handler);
  
  return { ready, url };
});

console.log('Content script loaded?', readyCheck);

// Now test the full flow
if (readyCheck.ready) {
  console.log('\n=== Content script is running! ===');
  console.log('=== Testing full conversion flow ===');
  
  const result = await page.evaluate(async () => {
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        resolve({ error: 'timeout after 30s' });
      }, 30000);
      
      function handler(event) {
        const msg = event.data;
        if (msg.type === 'VS_PDF_LOG') {
          console.log('[ContentScript Log]', msg.data);
        }
        if (msg.type === 'VS_PDF_BOOKINFO_RESULT') {
          clearTimeout(timeout);
          resolve({ type: 'bookinfo', data: msg.data });
        }
        if (msg.type === 'VS_PDF_TOKEN_RESULT') {
          clearTimeout(timeout);
          resolve({ type: 'token', data: msg.data });
        }
        if (msg.type === 'VS_PDF_PAGES_RESULT') {
          clearTimeout(timeout);
          resolve({ type: 'pages', data: msg.data });
        }
        if (msg.type === 'VS_PDF_STATUS') {
          console.log('[Status]', msg.data.text);
        }
        if (msg.type === 'VS_PDF_COMPLETE') {
          clearTimeout(timeout);
          resolve({ type: 'complete', data: msg.data });
        }
        if (msg.type === 'VS_PDF_BOOK_DATA') {
          console.log('[BookData]', msg.data);
        }
      }
      
      window.addEventListener('message', handler);
      
      // Start the conversion
      const msgId = 'test-start-' + Date.now();
      window.postMessage({ type: 'VS_PDF_START', options: { includeToc: true, includeCover: true } }, '*');
    });
  });
  
  console.log('Flow result:', JSON.stringify(result, null, 2));
} else {
  console.log('Content script did not load. Checking page URL:', page.url());
  console.log('Checking if content script exists...');
  
  // Try to check content script status
  const scriptCheck = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script'));
    const pageScript = scripts.find(s => s.src?.includes('page-script'));
    return {
      totalScripts: scripts.length,
      hasPageScript: !!pageScript,
      pageScriptSrc: pageScript?.src || null
    };
  });
  console.log('Script check:', JSON.stringify(scriptCheck, null, 2));
}

await browser.close();
