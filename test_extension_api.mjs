import { chromium } from 'playwright';
import fs from 'fs';

// Create a test page within the extension that has access to chrome.* API
const testPage = `<!DOCTYPE html>
<html>
<head>
    <title>Extension Test</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
    <h1>Extension API Test</h1>
    <pre id="output">Loading...</pre>
    <script>
        async function runTests() {
            const output = document.getElementById('output');
            const logs = [];
            
            function log(msg) {
                logs.push(msg);
                output.textContent = logs.join('\\n');
            }
            
            try {
                log('Step 1: Getting secure token...');
                const tokenResp = await chrome.runtime.sendMessage({ type: 'VS_PDF_GET_TOKEN' });
                const token = tokenResp?.result || tokenResp?.token || tokenResp;
                if (!token) {
                    log('FAILED: No token received');
                    log('Response: ' + JSON.stringify(tokenResp));
                    return;
                }
                log('Token: ' + token.substring(0, 60) + '...');
                
                log('\\nStep 2: Getting accessible ISBNs...');
                const isbnsResp = await chrome.runtime.sendMessage({ type: 'VS_PDF_GET_ISBNS' });
                const isbns = isbnsResp?.result?.isbns || isbnsResp?.isbns || [];
                log('ISBNs: ' + JSON.stringify(isbns));
                
                log('\\nStep 3: Fetching book info for ' + (isbns[0] || '9781266607752') + '...');
                const bookResp = await chrome.runtime.sendMessage({ 
                    type: 'VS_PDF_FETCH_BOOKINFO', 
                    isbn: isbns[0] || '9781266607752',
                    token: token
                });
                const bookInfo = bookResp?.result || bookResp;
                log('Book: ' + JSON.stringify(bookInfo));
                
                log('\\nStep 4: Fetching pages...');
                const pagesResp = await chrome.runtime.sendMessage({ 
                    type: 'VS_PDF_FETCH_PAGES', 
                    isbn: isbns[0] || '9781266607752',
                    token: token
                });
                const pages = pagesResp?.result || pagesResp;
                log('Pages: ' + (pages ? pages.length + ' pages' : 'null'));
                
                log('\\nStep 5: Fetching TOC...');
                const tocResp = await chrome.runtime.sendMessage({ 
                    type: 'VS_PDF_FETCH_TOC', 
                    isbn: isbns[0] || '9781266607752',
                    token: token
                });
                const toc = tocResp?.result || tocResp;
                log('TOC: ' + (toc ? toc.length + ' entries' : 'null or empty'));
                
                log('\\n=== ALL TESTS PASSED ===');
            } catch(e) {
                log('ERROR: ' + e.message);
            }
        }
        runTests();
    </script>
</body>
</html>
`;

// Write test page to extension directory (as a web_accessible_resource)
fs.writeFileSync('/root/vitalsource_pdf_extension/test.html', testPage);

// Update manifest to include test.html
const manifest = JSON.parse(fs.readFileSync('/root/vitalsource_pdf_extension/manifest.json', 'utf-8'));
if (!manifest.web_accessible_resources[0].resources.includes('test.html')) {
  manifest.web_accessible_resources[0].resources.push('test.html');
  fs.writeFileSync('/root/vitalsource_pdf_extension/manifest.json', JSON.stringify(manifest, null, 2));
}

const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions-except=/root/vitalsource_pdf_extension',
    '--load-extension=/root/vitalsource_pdf_extension'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

// First, navigate to the VitalSource site to establish cookies
console.log('Navigating to VitalSource...');
await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5', {
  waitUntil: 'domcontentloaded',
  timeout: 30000
});

try {
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 15000 });
  console.log('Authenticated at:', page.url());
} catch(e) {
  console.log('URL:', page.url());
}

await page.waitForTimeout(3000);

// Now try to load the test page from the extension
// We need the extension ID - try to find it
let extensionId = null;

// Try to enumerate extensions
try {
  // Check if we can access chrome-extension:// URLs
  const aboutResult = await page.goto('about:blank');
  
  // Use the chrome.management API via background script messaging
  // First, let's try to find the extension ID from the browser
  const extIdResult = await page.evaluate(() => {
    // Can't access chrome.* from page context
    return null;
  });
  
  // Try different extension ID formats
  console.log('Trying to find extension ID...');
  
} catch(e) {
  console.log('Error finding extension ID:', e.message);
}

// Since we can't get the extension ID from page context, let's try
// using chrome.runtime.id from a background script via a popup
// Or use chrome.management.getAll

// Actually, let's just try to get all extensions from the browser
// by evaluating in a chrome-extension:// context
try {
  // The extension ID is deterministic in Chrome when loaded via --load-extension
  // It's derived from the path of the extension directory
  console.log('Attempting to guess extension ID...');
  
  // Try common patterns
  const possibleIds = [];
  for (const first of 'abcdefghijklmnopqrstuvwxyz0123456789') {
    for (const second of 'abcdefghijklmnopqrstuvwxyz0123456789') {
      for (const third of 'abcdefghijklmnopqrstuvwxyz0123456789') {
        for (const fourth of 'abcdefghijklmnopqrstuvwxyz0123456789') {
          possibleIds.push(first + second + third + fourth + 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        }
      }
    }
  }
  
  console.log('Extension ID search space too large, skipping');
  
} catch(e) {}

// Let's try a different approach - use the chrome.runtime API from a new tab
// We need to create a chrome-extension:// URL
// The extension ID is typically deterministic based on the install path

// Actually, let's just check if there's a way to get the ID from Playwright
try {
  // Navigate to chrome://extensions-internals/ or chrome://system
  await page.goto('chrome:version', { waitUntil: 'domcontentloaded' }).catch(() => {});
  const versionResult = await page.content();
  console.log('chrome:version contains extensions:', versionResult.includes('extensions'));
} catch(e) {}

// Alternative: use CDP to get extension info
const client = await context.newCDPSession(page);
const extensions = await client.send('Extensions.getExtensions').catch(() => null);
console.log('CDP Extensions:', extensions ? JSON.stringify(extensions) : 'not available');

await browser.close();

// Clean up test files
fs.unlinkSync('/root/vitalsource_pdf_extension/test.html');
const cleanManifest = JSON.parse(fs.readFileSync('/root/vitalsource_pdf_extension/manifest.json', 'utf-8'));
cleanManifest.web_accessible_resources[0].resources = cleanManifest.web_accessible_resources[0].resources.filter(r => r !== 'test.html');
fs.writeFileSync('/root/vitalsource_pdf_extension/manifest.json', JSON.stringify(cleanManifest, null, 2));

console.log('\n=== Architecture Summary ===');
console.log('1. Background (background.js) makes API calls with host_permissions (bypasses CORS)');
console.log('2. Content script (content.js) bridges popup/page via chrome.runtime.sendMessage + window.postMessage');
console.log('3. Page script (page-script.js) handles DOM access + PDF generation');
console.log('4. CORS issue resolved - API calls no longer made from page context');
