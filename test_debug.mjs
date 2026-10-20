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

await page.waitForTimeout(5000);

// Direct test: try to manually trigger the content script
console.log('\n=== Testing content script injection ===');
const injectionResult = await page.evaluate(async () => {
  return new Promise((resolve) => {
    // Check if chrome is available
    const hasChrome = typeof chrome !== 'undefined';
    const hasRuntime = hasChrome && typeof chrome.runtime !== 'undefined';
    const hasRuntimeId = hasChrome && chrome.runtime?.id;
    
    // Try to get extension ID
    let extId = null;
    if (hasChrome && chrome.runtime) {
      extId = chrome.runtime.id;
    }
    
    // Post a message and see if content script responds
    let response = null;
    const timeout = setTimeout(() => {
      window.removeEventListener('message', handler);
      resolve({ hasChrome, hasRuntime, extId, response });
    }, 5000);
    
    function handler(event) {
      if (event.data?.type && event.data.type.startsWith('VS_PDF_')) {
        clearTimeout(timeout);
        window.removeEventListener('message', handler);
        response = event.data;
        resolve({ hasChrome, hasRuntime, extId, response });
      }
    }
    
    window.addEventListener('message', handler);
    
    // Try to trigger the content script by simulating popup click
    window.postMessage({ type: 'VS_PDF_READY' }, '*');
    
    // Also try using chrome.runtime to send message to content script
    if (hasRuntime) {
      chrome.runtime.sendMessage({ type: 'INJECT_BUTTON' });
    }
  });
});

console.log('Injection result:', JSON.stringify(injectionResult, null, 2));

// Try using chrome.tabs.sendMessage to directly talk to content script
console.log('\n=== Testing via chrome.tabs.sendMessage ===');
const tabsResult = await page.evaluate(async () => {
  try {
    const [tab] = await chrome.tabs?.query?.({active: true, currentWindow: true});
    if (!tab) return { error: 'No active tab' };
    
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        resolve({ error: 'timeout' });
      }, 5000);
      
      try {
        chrome.tabs.sendMessage(tab.id, { type: 'PING' }, (response) => {
          clearTimeout(timeout);
          resolve({ response });
        });
      } catch(e) {
        clearTimeout(timeout);
        resolve({ error: e.message });
      }
    });
  } catch(e) {
    return { error: e.message };
  }
});

console.log('tabs.sendMessage result:', JSON.stringify(tabsResult, null, 2));

await browser.close();
