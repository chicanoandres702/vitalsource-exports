import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--load-extension=/root/vitalsource_pdf_extension'
    // NOTE: No --disable-web-security to simulate real browser
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

// Wait for redirect to capella
try {
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 15000 });
  console.log('Redirected to:', page.url());
} catch(e) {
  console.log('Did not redirect to capella, current URL:', page.url());
}

await page.waitForTimeout(3000);

console.log('Testing page-context fetch (should fail due to CORS)...');
const pageFetchTest = await page.evaluate(async () => {
  try {
    const r = await fetch('https://jigsaw.vitalsource.com/secure-token', {
      credentials: 'include',
      headers: { 
        'x-vitalsource-brand': 'capella',
        'x-vitalsource-sed': 'secure',
        'x-requested-with': 'XMLHttpRequest'
      }
    });
    const text = await r.text();
    const match = text.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
    return { 
      success: true, 
      status: r.status, 
      hasToken: !!match,
      url: window.location.href,
      origin: window.location.origin
    };
  } catch(e) {
    return { 
      success: false, 
      error: e.message,
      url: window.location.href,
      origin: window.location.origin
    };
  }
});

console.log('Page context fetch result:', JSON.stringify(pageFetchTest, null, 2));

// Test if content script can inject and communicate
console.log('\nTesting content script communication...');
const csTest = await page.evaluate(async () => {
  let csReady = false;
  let receivedMessage = false;
  
  const listener = (event) => {
    if (event.data?.type === 'VS_PDF_LOG') {
      receivedMessage = true;
    }
  };
  window.addEventListener('message', listener);
  
  // Simulate calling the content script
  window.postMessage({ type: 'VS_PDF_READY' }, '*');
  
  await new Promise(r => setTimeout(r, 2000));
  window.removeEventListener('message', listener);
  
  return { csReady, receivedMessage };
});

console.log('Content script test:', JSON.stringify(csTest, null, 2));

await browser.close();
