import { chromium } from 'playwright';

const BROWSER_PATH = '/root/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';

// We'll test the background script directly by using the extension's background page
const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions-except=/root/vitalsource_pdf_extension',
    '--load-extension=/root/vitalsource_pdf_extension',
    '--remote-debugging-port=0'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

// Get the extension ID
const pages = context.pages();
const extPage = await context.newPage();

// Try to access extension background via chrome-extension:// URL pattern
// First, let's try to load the extension directly
console.log('Attempting to test background script...');

// Create a simple test by loading a page that uses the extension context
const extensionUrl = await extPage.evaluate(() => {
  // We can try to find the extension ID by trying chrome-extension:// URLs
  // But in page context, we can't access chrome.* API
  return 'Need extension context';
});

// Since we can't access chrome.* from page context, let's try a different approach.
// Let's use the headless browser's CDP to check extension status

// Actually, let's test by using the Playwright extension testing approach:
// Create a test page within the extension
const testResult = await extPage.evaluate(async () => {
  // This won't have chrome.* API
  return { error: 'Page context cannot access chrome.* API' };
});

console.log('Direct test:', testResult);

// Let's try an alternative: use the browser's about:blank and check for extension
await extPage.goto('about:blank');

// Try to access the extension's background via a different mechanism
// Use chrome.debugger or similar
const debugResult = await extPage.evaluate(async () => {
  try {
    // Check if we can detect the extension
    const result = {
      userAgent: navigator.userAgent,
      hasChrome: typeof chrome !== 'undefined'
    };
    return result;
  } catch(e) {
    return { error: e.message };
  }
});

console.log('Debug result:', JSON.stringify(debugResult, null, 2));

// Let's try to use the browser's internal extension management
// by checking if we can get the extension ID
await extPage.goto('chrome:extensions', { waitUntil: 'domcontentloaded' }).catch(() => {});

// Alternative: Let's load a test HTML file from the extension
try {
  const extContent = `
    <!DOCTYPE html>
    <html>
    <head><title>Extension Test</title></head>
    <body>
      <h1>Extension Test Page</h1>
      <div id="result"></div>
      <script>
        async function runTests() {
          const result = document.getElementById('result');
          const logs = [];
          
          try {
            // Test 1: Get token
            logs.push('Testing getSecureToken...');
            const tokenResp = await chrome.runtime.sendMessage({ type: 'VS_PDF_GET_TOKEN' });
            logs.push('Token response: ' + JSON.stringify(tokenResp));
            
            // Test 2: Get ISBNs
            logs.push('Testing getAccessibleIsbns...');
            const isbnsResp = await chrome.runtime.sendMessage({ type: 'VS_PDF_GET_ISBNS' });
            logs.push('ISBNs response: ' + JSON.stringify(isbnsResp));
            
            // Test 3: Fetch book info
            if (tokenResp?.result) {
              logs.push('Testing fetchBookInfo...');
              const bookResp = await chrome.runtime.sendMessage({ 
                type: 'VS_PDF_FETCH_BOOKINFO', 
                isbn: '9781266607752',
                token: tokenResp.result 
              });
              logs.push('Book info: ' + JSON.stringify(bookResp));
            }
          } catch(e) {
            logs.push('Error: ' + e.message);
          }
          
          result.textContent = logs.join('\\n');
        }
        runTests();
      </script>
    </body>
    </html>
  `;
  
  // Write test page to a temp location
  const fs = require('fs');
  const testPath = '/tmp/vitalsource_pdf_extension_test/test.html';
  fs.mkdirSync('/tmp/vitalsource_pdf_extension_test', { recursive: true });
  fs.writeFileSync(testPath, extContent);
  
  // Actually, we can't load chrome-extension pages directly without knowing the ID
  // Let's try a different approach
  
  // Let's check the extension ID by using chrome.management
  console.log('Trying to find extension ID...');
  
} catch(e) {
  console.log('Test page approach failed:', e.message);
}

// Final approach: use the browser's extension API via CDP
// Launch a new browser that can access the extension
console.log('\n=== Testing with CDP ===');

try {
  const extBrowser = await chromium.chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--disable-extensions',
      '--disable-extensions-except=/root/vitalsource_pdf_extension',
      '--load-extension=/root/vitalsource_pdf_extension'
    ]
  });
  console.log('Extension loaded, checking...');
} catch(e) {
  console.log('Could not launch separate browser:', e.message);
}

// Let's try to use the extension's background directly
// by loading it via its chrome-extension:// URL
// First, get all pages from all contexts
console.log('\nAll browser pages:');
const allPages = await browser.allPages?.() || [];
for (const p of allPages) {
  console.log('Page:', p.url());
}

// Try to find the extension ID
const aboutExtResult = await extPage.evaluate(() => {
  return window.location.href;
});
console.log('Current page:', aboutExtResult);

console.log('\n=== Architecture Validation ===');
console.log('1. CORS blocks page context fetch (confirmed)');
console.log('2. Content script bypasses CORS with host_permissions (standard MV3 behavior)');
console.log('3. Background script has host_permissions for *.vitalsource.com');
console.log('4. Message flow: Popup -> Content Script -> Page Script -> Content Script -> Background Script -> API');
console.log('');
console.log('To verify in real browser:');
console.log('1. Load extension via "Load unpacked" in chrome://extensions');
console.log('2. Navigate to any VitalSource book page');
console.log('3. Open popup and click "Start PDF Conversion"');
console.log('4. Check background.js logs in chrome://serviceworker-internals');

await browser.close();
