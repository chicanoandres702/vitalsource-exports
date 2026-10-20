import { chromium } from 'playwright';

// Use chromium.launch with headless and load extension
const browser = await chromium.launch({
  headless: false,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions-except=/root/vitalsource_pdf_extension',
    '--load-extension=/root/vitalsource_pdf_extension',
    '--enable-features=ManifestV3'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

// Test on a simple page first
console.log('Loading test page...');
await page.goto('https://vitalsource.com', {
  waitUntil: 'domcontentloaded',
  timeout: 15000
});

await page.waitForTimeout(3000);

// Check for content script
const result = await page.evaluate(() => {
  let received = false;
  const handler = (event) => {
    if (event.data?.type === 'VS_CONTENT_SCRIPT_LOADED') {
      received = true;
    }
  };
  window.addEventListener('message', handler);
  // Wait sync
  return { 
    receivedInitially: received,
    url: window.location.href,
    // Check if we can see the extension
    checkExt: document.querySelector('script[src*="chrome-extension"]') ? true : false
  };
});

console.log('Result:', JSON.stringify(result, null, 2));

// Also wait and check again
await page.waitForTimeout(2000);

const result2 = await page.evaluate(() => {
  let received = false;
  const handler = (event) => {
    if (event.data?.type === 'VS_CONTENT_SCRIPT_LOADED') {
      received = true;
      console.log('Got CS loaded message!');
    }
  };
  window.addEventListener('message', handler);
  return { received, url: window.location.href };
});

console.log('Result 2:', JSON.stringify(result2, null, 2));

// Check extension pages
console.log('\nChecking extension loaded...');
console.log('Browser contexts:', browser.contexts().length);

// Try to access the extension's dev-mode
try {
  await page.goto('chrome-extension://*manifest.json', { waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => {});
} catch(e) {}

await browser.close();
