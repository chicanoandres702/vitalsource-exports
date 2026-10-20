import { chromium } from 'playwright';

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

// Capture all console messages including page context
page.on('console', msg => {
  const text = msg.text();
  if (text.includes('VS') || text.includes('[VS')) {
    console.log(`[PAGE] ${text}`);
  }
});
page.on('pageerror', err => console.log(`[ERROR] ${err.message}`));

console.log('1. Navigating to VitalSource...');
const response = await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5&relaunch_vbid=9781266431227&course_dash_relaunch=true', {
  waitUntil: 'networkidle',
  timeout: 30000
});

console.log(`2. Final URL: ${response?.url()}`);
console.log(`3. Status: ${response?.status()}`);

// Wait for extension scripts to inject
console.log('4. Waiting for extension to initialize...');
await page.waitForTimeout(5000);

// Check if page script was injected
const scriptExists = await page.evaluate(() => document.getElementById('vs-pdf-btn') !== null);
console.log(`5. Floating button exists: ${scriptExists}`);

// Check cookies
const cookies = await context.cookies();
console.log(`6. Available cookies: ${cookies.map(c => c.name).join(', ')}`);

// Test the secure-token endpoint from page context
console.log('\n7. Testing secure-token endpoint (as page script would)...');
const tokenTest = await page.evaluate(async () => {
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
    return match ? { ok: true, token: match[1].substring(0, 50) + '...' } : { ok: false, text: text.substring(0, 200) };
  } catch(e) {
    return { ok: false, error: e.message };
  }
});
console.log(`   Token result: ${JSON.stringify(tokenTest)}`);

// Test pages.json with the CORRECT isbn (9781266607752 from jig_isbns)
console.log('\n8. Testing pages.json with correct ISBN...');
const pagesTest = await page.evaluate(async () => {
  const token = await (async () => {
    const r = await fetch('https://jigsaw.vitalsource.com/secure-token', {
      credentials: 'include',
      headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
    });
    const text = await r.text();
    const match = text.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
    return match ? match[1] : null;
  })();
  
  if (!token) return { ok: false, error: 'No token' };
  
  const r = await fetch('https://jigsaw.vitalsource.com/books/9781266607752/pages.json', {
    credentials: 'include',
    headers: {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': token,
      'x-requested-with': 'XMLHttpRequest',
      'accept': 'application/json'
    }
  });
  
  if (!r.ok) return { ok: false, status: r.status, text: await r.text() };
  const data = await r.json();
  return { ok: true, pages: data.length };
});
console.log(`   Pages result: ${JSON.stringify(pagesTest)}`);

// Check if content script can read cookies via chrome.cookies
console.log('\n9. Testing chrome.cookies access...');
// The content script has 'cookies' permission now

await browser.close();
console.log('\n=== Test Complete ===');
