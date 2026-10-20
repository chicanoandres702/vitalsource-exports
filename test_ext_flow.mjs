import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process',
    '--load-extension=/root/vitalsource_pdf_extension'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

// Capture console logs and errors
page.on('console', msg => {
  if (msg.type() === 'error' || msg.text().includes('VS-')) {
    console.log(`[PAGE CONSOLE] ${msg.text()}`);
  }
});
page.on('pageerror', err => console.log(`[PAGE ERROR] ${err.message}`));

await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5', {
  waitUntil: 'networkidle',
  timeout: 30000
});

// Wait for page to settle
await page.waitForTimeout(3000);

// Get secure token and test APIs to verify they work
const results = await page.evaluate(async () => {
  const logs = [];
  
  async function log(msg) {
    logs.push(msg);
    console.log('[Test]', msg);
  }
  
  try {
    // Get secure token
    log('Fetching secure token...');
    const r = await fetch('https://jigsaw.vitalsource.com/secure-token', {
      credentials: 'include',
      headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
    });
    const text = await r.text();
    log(`Secure token response: ${r.status}, body: ${text.substring(0, 100)}`);
    const match = text.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
    const token = match ? match[1] : null;
    
    if (!token) {
      return { error: 'No token', logs };
    }
    
    log(`Got token: ${token.substring(0, 50)}...`);
    
    const isbn = '9781266607752';
    const headers = { 
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': token,
      'x-requested-with': 'XMLHttpRequest'
    };
    
    // Test pages.json
    log(`Fetching pages for ${isbn}...`);
    try {
      const pr = await fetch(`https://jigsaw.vitalsource.com/books/${isbn}/pages.json`, { credentials: 'include', headers });
      log(`Pages response: ${pr.status}`);
      if (pr.ok) {
        const data = await pr.json();
        log(`Got ${data.length} pages`);
      } else {
        log(`Pages failed: ${pr.status}`);
      }
    } catch(e) { 
      log(`Pages fetch error: ${e.message}`); 
    }
    
    // Test info/books.json
    log(`Fetching book info...`);
    try {
      const ir = await fetch(`https://jigsaw.vitalsource.com/info/books.json?isbns=${isbn}`, { credentials: 'include', headers });
      log(`Book info response: ${ir.status}`);
      if (ir.ok) {
        const data = await ir.json();
        log(`Book: ${data.books?.[0]?.title || 'N/A'}`);
      }
    } catch(e) { 
      log(`Book info error: ${e.message}`); 
    }
    
    // Test toc
    log('Fetching TOC...');
    try {
      const tr = await fetch(`https://jigsaw.vitalsource.com/books/${isbn}/toc`, { credentials: 'include', headers });
      log(`TOC response: ${tr.status}`);
      if (tr.ok) {
        const data = await tr.json();
        log(`Got ${data.length} TOC entries`);
      }
    } catch(e) {
      log(`TOC error: ${e.message}`);
    }
    
    return { token: token.substring(0, 50) + '...', logs };
  } catch(e) {
    log(`Exception: ${e.message}`);
    return { error: e.message, logs };
  }
});

console.log('\n=== API Test Results ===');
console.log(JSON.stringify(results, null, 2));

// Check if extension content script loaded
const contentScriptStatus = await page.evaluate(() => {
  return {
    hasVsElements: !!document.querySelector('[id*="vs"]') || !!document.querySelector('[class*="vitalsource"]'),
    cookies: document.cookie.split(';').filter(c => c.includes('vitalsource') || c.includes('jig')).map(c => c.trim().substring(0, 50)),
    url: window.location.href
  };
});

console.log('\n=== Page Status ===');
console.log(JSON.stringify(contentScriptStatus, null, 2));

await browser.close();
