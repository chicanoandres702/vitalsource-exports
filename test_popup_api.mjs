import { chromium } from 'playwright';
import fs from 'fs';

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
  viewport: { width: 400, height: 600 }
});

// First, let's find the extension ID
// We can use CDP to list all targets
const page = await context.newPage();

// Navigate to a page to get the CDP session
await page.goto('about:blank');

const client = await page.context().newCDPSession(page);

// List all targets
const targets = await client.send('Target.getTargets').catch(() => ({ targetInfos: [] }));
const extensionTargets = targets.targetInfos?.filter(t => 
  t.type === 'service_worker' && t.url?.includes('background.js')
) || [];

console.log('Extension targets found:', extensionTargets.length);

// Find the extension ID
let extensionId = null;
for (const target of extensionTargets) {
  // Extract extension ID from URL like chrome-extension://<id>/background.js
  const match = target.url?.match(/chrome-extension:\/\/([a-z]+)/);
  if (match) {
    extensionId = match[1];
    console.log('Found extension ID:', extensionId);
  }
}

// If we found the extension, try to load its popup
if (extensionId) {
  console.log('\nLoading extension popup...');
  
  // The popup is loaded as chrome-extension://<id>/popup.html
  // But popups have a special lifecycle - they're created when clicked
  // Let's try loading it directly
  const popupUrl = `chrome-extension://${extensionId}/popup.html`;
  
  const popupPage = await context.newPage({
    viewport: { width: 400, height: 600 }
  });
  
  popupPage.on('console', msg => console.log(`[POPUP] ${msg.text()}`));
  
  try {
    await popupPage.goto(popupUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });
    console.log('Popup loaded:', popupPage.url());
  } catch(e) {
    console.log('Popup load failed:', e.message);
  }
  
  // Now test the popup
  // The popup should have chrome.* API access
  const popupTest = await popupPage.evaluate(async () => {
    try {
      // Test background script communication
      const tokenResp = await chrome.runtime.sendMessage({ type: 'VS_PDF_GET_TOKEN' });
      const token = tokenResp?.result;
      
      return {
        hasChrome: typeof chrome !== 'undefined',
        hasRuntime: typeof chrome?.runtime !== 'undefined',
        token: token ? token.substring(0, 50) + '...' : null,
        rawTokenResp: JSON.stringify(tokenResp).substring(0, 200)
      };
    } catch(e) {
      return { error: e.message };
    }
  });
  
  console.log('Popup test result:', JSON.stringify(popupTest, null, 2));
  
  // If we have a token, test the full API
  if (popupTest.token) {
    console.log('\n=== Testing Full API Flow ===');
    
    const fullTest = await popupPage.evaluate(async () => {
      const logs = [];
      const token = await chrome.runtime.sendMessage({ type: 'VS_PDF_GET_TOKEN' }).then(r => r?.result);
      
      // Get ISBNs
      const isbnsResp = await chrome.runtime.sendMessage({ type: 'VS_PDF_GET_ISBNS' });
      const isbns = isbnsResp?.result?.isbns || [];
      logs.push('ISBNs: ' + JSON.stringify(isbns));
      
      const testIsbn = isbns[0] || '9781266607752';
      logs.push('Using ISBN: ' + testIsbn);
      
      // Fetch book info
      const bookResp = await chrome.runtime.sendMessage({ 
        type: 'VS_PDF_FETCH_BOOKINFO', 
        isbn: testIsbn,
        token 
      });
      const bookInfo = bookResp?.result;
      logs.push('Book info: ' + JSON.stringify(bookInfo));
      
      // Fetch pages
      const pagesResp = await chrome.runtime.sendMessage({ 
        type: 'VS_PDF_FETCH_PAGES', 
        isbn: testIsbn,
        token 
      });
      const pages = pagesResp?.result;
      logs.push('Pages: ' + (pages ? pages.length + ' pages' : 'null'));
      
      // Fetch TOC
      const tocResp = await chrome.runtime.sendMessage({ 
        type: 'VS_PDF_FETCH_TOC', 
        isbn: testIsbn,
        token 
      });
      const toc = tocResp?.result;
      logs.push('TOC entries: ' + (toc ? toc.length : 'null'));
      
      return logs;
    });
    
    console.log('Full API test results:');
    fullTest.forEach(log => console.log('  ' + log));
  }
  
  await popupPage.close();
}

await browser.close();
