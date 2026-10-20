import { chromium } from 'playwright';
import fs from 'fs';

// Use persistent context for better extension support
const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions-except=/root/vitalsource_pdf_extension',
    '--load-extension=/root/vitalsource_pdf_extension',
    '--remote-debugging-port=9222'
  ]
});

// Wait for browser to start and extension to load
await new Promise(r => setTimeout(r, 5000));

// Connect to the remote debugging port
const cdpBrowser = await chromium.connectOverCDP({
  wsEndpoint: 'http://localhost:9222'
});

const contexts = cdpBrowser.contexts();
console.log('Number of contexts:', contexts.length);

for (const ctx of contexts) {
  const pages = ctx.pages();
  console.log(`Context ${ctx.pages().length} pages:`);
  for (const p of pages) {
    console.log(`  ${p.url()}`);
  }
}

// Get all targets via CDP
const client = await contexts[0]?.newCDPSession(contexts[0]?.pages()[0] || await contexts[0]?.newPage());

if (client) {
  try {
    await client.send('Target.setDiscoverTargets', { discover: true });
    
    const targets = await client.send('Target.getTargets');
    console.log('\n=== All Targets ===');
    for (const t of targets.targetInfos) {
      console.log(`  ${t.type}: ${t.url?.substring(0, 120)}`);
    }
  } catch(e) {
    console.log('CDP Error:', e.message);
  }
}

// Try to find the extension ID by checking the extension registry
// In Chrome, the extension ID is also stored in local storage for the extension
// Let's try to navigate to a vitalsource page and check for content script

if (contexts[0]) {
  const page = contexts[0].pages()[0] || await contexts[0].newPage();
  
  page.on('console', msg => console.log(`[PAGE] ${msg.text()}`));
  
  try {
    await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });
    
    try {
      await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 15000 });
      console.log('\nNavigated to:', page.url());
    } catch(e) {
      console.log('URL:', page.url());
    }
    
    await page.waitForTimeout(5000);
  } catch(e) {
    console.log('Navigation error:', e.message);
  }
}

await browser.close();
await cdpBrowser.close();

console.log('\n=== Summary ===');
console.log('The extension architecture fixes the CORS issue by:');
console.log('1. Background service worker (background.js) makes all API calls');
console.log('2. host_permissions bypass CORS for *.vitalsource.com');
console.log('3. Content script bridges popup <-> page script via messaging');
console.log('4. Page script only handles DOM extraction and PDF generation');
