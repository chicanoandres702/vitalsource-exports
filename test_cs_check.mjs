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

page.on('console', msg => {
  if (msg.text().includes('VS-') || msg.text().includes('content')) console.log(`[PAGE] ${msg.text()}`);
});
page.on('pageerror', err => console.log(`[ERROR] ${err.message}`));

// Navigate to capella directly with the context_token
console.log('Navigating to capella...');
await page.goto('https://capella.vitalsource.com/?context_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5', {
  waitUntil: 'domcontentloaded',
  timeout: 30000
});

console.log('Current URL:', page.url());

await page.waitForTimeout(3000);

// Check if content script is loaded by looking for console messages
console.log('\n=== Content Script Check ===');

// Try to verify content script is loaded via chrome.runtime
const csCheck = await page.evaluate(async () => {
  // Check if we can communicate with content script
  let messages = [];
  
  const listener = (event) => {
    messages.push(event.data);
  };
  window.addEventListener('message', listener);
  
  // Send a test message
  window.postMessage({ type: 'VS_PDF_LOG', data: 'test message from page' }, '*');
  
  await new Promise(r => setTimeout(r, 1000));
  window.removeEventListener('message', listener);
  
  return { messages, url: window.location.href };
});

console.log('Content script check:', JSON.stringify(csCheck, null, 2));

// Get extension info
console.log('\n=== Extension Info ===');
const extInfo = await context.evaluateHandle(() => {
  return typeof chrome !== 'undefined' ? 'chrome available in page' : 'no chrome';
});
console.log(extInfo);

console.log('\n=== Test: Fetch from page context ===');
const fetchTest = await page.evaluate(async () => {
  try {
    const r = await fetch('https://jigsaw.vitalsource.com/info/books.json?isbns=9781266607752', {
      credentials: 'include',
      headers: { 
        'x-vitalsource-brand': 'capella',
        'x-vitalsource-sed': 'secure',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    return { status: r.status, ok: r.ok };
  } catch(e) {
    return { error: e.message };
  }
});
console.log('Fetch from page:', JSON.stringify(fetchTest, null, 2));

await browser.close();
