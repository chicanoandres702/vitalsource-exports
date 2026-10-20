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

page.on('console', msg => console.log(`[PAGE] ${msg.text()}`));
page.on('pageerror', err => console.log(`[ERROR] ${err.message}`));

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

await page.waitForTimeout(3000);

// Test if content script can actually fetch (bypassing CORS)
// We need to test this by having the content script do the fetch
console.log('\n=== Testing content script fetch via message ===');

const testResult = await page.evaluate(async () => {
  return new Promise((resolve) => {
    const msgId = 'test-' + Date.now();
    const timeout = setTimeout(() => {
      window.removeEventListener('message', handler);
      resolve({ error: 'timeout waiting for response' });
    }, 10000);
    
    function handler(event) {
      const msg = event.data;
      if (msg.type === 'VS_PDF_LOG' && msg.data?.includes?.('test')) {
        clearTimeout(timeout);
        window.removeEventListener('message', handler);
        resolve({ success: true, log: msg.data });
      }
      // Also catch any result messages
      if (msg.type === 'VS_PDF_BOOKINFO_RESULT') {
        clearTimeout(timeout);
        resolve({ result: msg });
      }
      if (msg.type === 'VS_PDF_TOKEN_RESULT') {
        clearTimeout(timeout);
        resolve({ tokenResult: msg });
      }
    }
    
    window.addEventListener('message', handler);
    
    // First, let's see if content script processed VS_PDF_READY
    window.postMessage({ type: 'VS_PDF_READY' }, '*');
    
    // Also try getting token through the content script bridge
    setTimeout(() => {
      window.postMessage({ type: 'VS_PDF_GET_TOKEN', msgId }, '*');
    }, 500);
  });
});

console.log('Test result:', JSON.stringify(testResult, null, 2));

await browser.close();
