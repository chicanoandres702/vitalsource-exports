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

page.on('console', msg => {
  const text = msg.text();
  if (text.includes('VS') || text.includes('[VS')) console.log(`[PAGE] ${text}`);
});

console.log('Navigating to VitalSource...');
const response = await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5&relaunch_vbid=9781266431227&course_dash_relaunch=true', {
  waitUntil: 'networkidle',
  timeout: 30000
});

console.log(`Final URL: ${response?.url()}`);
console.log(`Status: ${response?.status()}`);

// Get cookies
const cookies = await context.cookies();
const alohaCookie = cookies.find(c => c.name === '_aloha_universal');
if (alohaCookie) {
  console.log(`_aloha_universal cookie: ${alohaCookie.value.substring(0, 100)}...`);
  
  // Decode JWT payload
  const parts = alohaCookie.value.split('.');
  if (parts.length === 3) {
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
    console.log('JWT payload:', JSON.stringify(payload, null, 2));
  }
}

// Check jig_isbns cookie
const isbnsCookie = cookies.find(c => c.name === 'jig_isbns');
if (isbnsCookie) console.log(`jig_isbns: ${isbnsCookie.value}`);

await page.waitForTimeout(2000);

// Try the secure-token endpoint
console.log('\n=== Testing secure-token endpoint ===');
const tokenResp = await page.evaluate(async () => {
  const r = await fetch('https://jigsaw.vitalsource.com/secure-token', {
    credentials: 'include',
    headers: { 
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-requested-with': 'XMLHttpRequest'
    }
  });
  return await r.text();
});
console.log('secure-token response:', tokenResp.substring(0, 200));

// Try pages.json
console.log('\n=== Testing pages.json ===');
const pagesResp = await page.evaluate(async () => {
  const r = await fetch('https://jigsaw.vitalsource.com/books/9781266431227/pages.json', {
    credentials: 'include',
    headers: { 
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-requested-with': 'XMLHttpRequest'
    }
  });
  return { status: r.status, text: await r.text(), headers: [...r.headers.entries()] };
});
console.log('pages status:', pagesResp.status);
console.log('pages response:', pagesResp.text.substring(0, 300));
console.log('pages headers:', pagesResp.headers.filter(h => h[0].includes('access') || h[0].includes('content-type')));

// Try book info
console.log('\n=== Testing book info ===');
const infoResp = await page.evaluate(async () => {
  const r = await fetch('https://capella.vitalsource.com/api/v1/books/9781266431227', {
    credentials: 'include',
    headers: { 
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-requested-with': 'XMLHttpRequest',
      'accept': 'application/json'
    }
  });
  return { status: r.status, text: await r.text() };
});
console.log('book info status:', infoResp.status);
console.log('book info response:', infoResp.text.substring(0, 500));

// Try fetching the secure token as the page script would
console.log('\n=== Testing in page context ===');
const pageResult = await page.evaluate(async () => {
  // Check document.cookie from page context
  const cookies = document.cookie;
  let token = null;
  
  // Try to find _aloha_universal
  const alohaMatch = cookies.match(/_aloha_universal=([^;]+)/);
  if (alohaMatch) {
    const val = decodeURIComponent(alohaMatch[1]);
    if (val.match(/^eyJ[a-zA-Z0-9_-]+\.eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/)) {
      token = val;
    }
  }
  
  return { cookies: cookies.substring(0, 200), hasToken: !!token, tokenPrefix: token ? token.substring(0, 50) : null };
});
console.log('Page context result:', JSON.stringify(pageResult, null, 2));

await browser.close();
