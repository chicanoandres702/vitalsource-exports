import { chromium } from 'playwright';
import { Buffer } from 'buffer';

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

console.log('Navigating...');
const response = await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5&relaunch_vbid=9781266431227&course_dash_relaunch=true', {
  waitUntil: 'networkidle',
  timeout: 30000
});

// Decode jig_isbns cookie
const cookies = await context.cookies();
const jigIsbns = cookies.find(c => c.name === 'jig_isbns');
if (jigIsbns) {
  const decoded = decodeURIComponent(jigIsbns.value);
  const parts = decoded.split('--');
  if (parts[0]) {
    try {
      const payload = Buffer.from(parts[0], 'base64').toString();
      console.log('jig_isbns payload:', payload);
    } catch(e) {
      console.log('jig_isbns raw:', decoded.substring(0, 200));
    }
  }
}

// Get the secure token from page context
const tokenResult = await page.evaluate(async () => {
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
  return match ? match[1] : null;
});

if (tokenResult) {
  console.log('Secure token obtained:', tokenResult.substring(0, 60) + '...');
  
  // Try the token-based API calls
  const testApis = [
    'https://jigsaw.vitalsource.com/books/9781266431227/pages.json',
    'https://jigsaw.vitalsource.com/info/books.json?isbns=9781266431227',
    'https://jigsaw.vitalsource.com/books.json',
    'https://jigsaw.vitalsource.com/books/9781266431227',
  ];
  
  for (const apiUrl of testApis) {
    const result = await page.evaluate(async (url, token) => {
      const r = await fetch(url, {
        credentials: 'include',
        headers: { 
          'x-vitalsource-brand': 'capella',
          'x-vitalsource-sed': 'secure',
          'x-vitalsource-secure-token': token,
          'x-requested-with': 'XMLHttpRequest',
          'accept': 'application/json'
        }
      });
      return { status: r.status, body: await r.text() };
    }, apiUrl, tokenResult);
    
    console.log(`\n${apiUrl}`);
    console.log(`  Status: ${result.status}`);
    console.log(`  Body: ${result.body.substring(0, 300)}`);
  }
  
  // Try fetching the capella page to find the actual book vbid
  console.log('\n=== Looking for book vbid in page ===');
  const vbidInfo = await page.evaluate(() => {
    // Check various places where vbid might be
    const vbidSelectors = [
      '[data-vbid]', '[data-book-id]', '[data-book-isbn]',
      'meta[property="og:book:isbn"]', 'meta[name="citation_isbn"]',
      '.product-details', '[data-isbn]', '#book-data',
      '[data-product-id]', '.product-id'
    ];
    const found = {};
    for (const sel of vbidSelectors) {
      const el = document.querySelector(sel);
      if (el) {
        found[sel] = el.textContent.substring(0, 100) || el.getAttribute('content') || el.getAttribute('data-vbid') || el.getAttribute('data-book-id');
      }
    }
    
    // Check for any JS variables with vbid/isbn
    const scripts = Array.from(document.querySelectorAll('script')).map(s => s.textContent || '');
    for (const js of scripts) {
      const matches = js.match(/[vb]id[\\"'\s:=]+(\d{13})/g);
      if (matches) found.js_matches = matches;
    }
    
    return found;
  });
  console.log('Vbid info:', JSON.stringify(vbidInfo, null, 2));
}

await browser.close();
