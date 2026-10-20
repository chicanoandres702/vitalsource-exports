import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--load-extension=/root/vitalsource_pdf_extension',
    '--disable-extensions-except=/root/vitalsource_pdf_extension'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

// Check if extension is loaded by checking chrome://extensions
console.log('Checking extension status...');

// Get the background page of the extension
const extensionId = await page.evaluate(() => {
  return new Promise((resolve) => {
    // Check if chrome API is available in page context
    if (typeof chrome !== 'undefined' && chrome.runtime) {
      resolve(chrome.runtime.id);
    } else {
      resolve(null);
    }
  });
});

console.log('Extension ID in page context:', extensionId);

// Try to check via extension popup
const popupUrl = await page.evaluate(async () => {
  try {
    const [tab] = await chrome.tabs?.query?.({active: true, currentWindow: true});
    return tab ? tab.url : null;
  } catch(e) {
    return 'error: ' + e.message;
  }
});

console.log('Active tab:', popupUrl);

// Let's try a completely different approach - use chrome.scripting to execute
// Actually, let's check the extension's service worker
// Navigate to a test page first
await page.goto('about:blank', { waitUntil: 'domcontentloaded' });

// Try loading a vitalsource page
console.log('\nLoading capella.vitalsource.com test page...');
await page.goto('https://capella.vitalsource.com/home/', {
  waitUntil: 'domcontentloaded',
  timeout: 15000
});

await page.waitForTimeout(2000);

// Check for content script by looking at document structure
const csTest = await page.evaluate(async () => {
  const results = {
    url: window.location.href,
    hasChromeAPI: typeof chrome !== 'undefined',
    chromeVersion: typeof chrome?.runtime?.getManifest !== 'undefined' ? 'has manifest' : 'no manifest',
    documentScripts: document.querySelectorAll('script[src*="chrome-extension"]').length,
  };
  
  // Try to detect if content script ran by checking for marker
  let receivedMessage = false;
  
  const handler = (event) => {
    if (event.data?.type === 'VS_CONTENT_SCRIPT_LOADED') {
      receivedMessage = true;
    }
  };
  window.addEventListener('message', handler);
  await new Promise(r => setTimeout(r, 2000));
  window.removeEventListener('message', handler);
  
  results.csMessageReceived = receivedMessage;
  return results;
});

console.log('Test results:', JSON.stringify(csTest, null, 2));

await browser.close();
