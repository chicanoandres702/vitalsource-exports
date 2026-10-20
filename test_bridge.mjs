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
  if (msg.text().includes('VS-')) console.log(`[PAGE] ${msg.text()}`);
});
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

await page.waitForTimeout(2000);

// Test: Can the content script receive messages from page script?
console.log('\n=== Testing content script <-> page script bridge ===');

const bridgeTest = await page.evaluate(async () => {
  let received = false;
  let logMessages = [];
  
  const listener = (event) => {
    if (event.data?.type === 'VS_PDF_LOG') {
      received = true;
      logMessages.push(event.data.data);
    }
  };
  window.addEventListener('message', listener);
  
  // Simulate page script posting ready message
  window.postMessage({ type: 'VS_PDF_READY', _fromPageScript: true }, '*');
  
  await new Promise(r => setTimeout(r, 1000));
  window.removeEventListener('message', listener);
  
  return { received, logMessages };
});

console.log('Bridge test result:', JSON.stringify(bridgeTest, null, 2));

// Test: Does the content script's fetch actually work (bypasses CORS)?
console.log('\n=== Testing content script fetch (CORS bypass) ===');
console.log('Note: This test uses chrome.runtime.sendMessage which only works in the extension context');
console.log('Testing page-context fetch for comparison...');

const pageFetchTest = await page.evaluate(async () => {
  const tests = [];
  
  // Test 1: Secure token via page context (should fail due to CORS)
  try {
    const r = await fetch('https://jigsaw.vitalsource.com/secure-token', {
      credentials: 'include',
      headers: { 
        'x-vitalsource-brand': 'capella',
        'x-vitalsource-sed': 'secure',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    tests.push({ name: 'secure-token', success: true, status: r.status });
  } catch(e) {
    tests.push({ name: 'secure-token', success: false, error: e.message });
  }
  
  return tests;
});

console.log('Page context fetch results:', JSON.stringify(pageFetchTest, null, 2));

console.log('\n=== Summary ===');
console.log('If bridge test shows "received: true", the content script <-> page script messaging works');
console.log('If page context fetch fails with "Failed to fetch", that confirms CORS is the issue');
console.log('The content script has host_permissions and should bypass CORS for *.vitalsource.com');

await browser.close();
