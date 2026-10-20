import { chromium } from 'playwright';

// Try with --headless=new which has better extension support
const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--headless=new',
    '--disable-extensions-except=/root/vitalsource_pdf_extension',
    '--load-extension=/root/vitalsource_pdf_extension'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

page.on('console', msg => {
  if (msg.text().includes('VS-') || msg.text().includes('content')) {
    console.log(`[PAGE] ${msg.text()}`);
  }
});

console.log('Loading vitalsource.com...');
await page.goto('https://www.vitalsource.com', {
  waitUntil: 'domcontentloaded',
  timeout: 15000
});

await page.waitForTimeout(3000);

// The content script adds a DOM marker - check for it
const csCheck = await page.evaluate(() => {
  // Check if our test marker element exists
  const marker = document.getElementById('vs-extension-marker');
  // Also check for any injected page script
  const injectedScripts = Array.from(document.querySelectorAll('script[src*="page-script"]'));
  // Check for VS_CONTENT_SCRIPT_LOADED message
  let received = false;
  const handler = (event) => {
    if (event.data?.type === 'VS_CONTENT_SCRIPT_LOADED') {
      received = true;
    }
  };
  window.addEventListener('message', handler);
  return { 
    marker: !!marker, 
    injectedScripts: injectedScripts.length,
    url: window.location.href
  };
});

console.log('Content script check:', JSON.stringify(csCheck, null, 2));

// Also try a more direct approach - use chrome.runtime.sendMessage
const directTest = await page.evaluate(async () => {
  // The page context shouldn't have chrome, but let's try
  try {
    const result = await new Promise((resolve) => {
      if (typeof chrome === 'undefined') {
        resolve({ error: 'chrome not defined in page context' });
        return;
      }
      chrome.runtime.sendMessage({ type: 'PING' }, (response) => {
        resolve({ response });
      });
    });
    return result;
  } catch(e) {
    return { error: e.message };
  }
});

console.log('Direct test:', JSON.stringify(directTest, null, 2));

console.log('\n=== Now testing on bc.vitalsource.com ===');
await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5', {
  waitUntil: 'domcontentloaded',
  timeout: 30000
});

try {
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 10000 });
} catch(e) {}

console.log('URL after redirect:', page.url());
await page.waitForTimeout(3000);

// Final test - try to communicate with extension
console.log('\n=== Trying chrome.runtime.connect from background ===');
const bgTest = await page.evaluate(() => {
  // Try creating an offscreen page or checking extension state
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve({ error: 'timeout' });
    }, 5000);
    
    // Try to use the extension's messaging API if available in isolated world
    // We can check by seeing if postMessage works back
    const handler = (event) => {
      if (event.data?.type?.startsWith('VS_PDF_') || event.data?.type === 'VS_CONTENT_SCRIPT_LOADED') {
        clearTimeout(timeout);
        window.removeEventListener('message', handler);
        resolve({ received: event.data });
      }
    };
    window.addEventListener('message', handler);
  });
});

console.log('Background test:', JSON.stringify(bgTest, null, 2));

await browser.close();
