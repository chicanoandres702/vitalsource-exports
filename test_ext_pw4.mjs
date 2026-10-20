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

const response = await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5&relaunch_vbid=9781266431227&course_dash_relaunch=true', {
  waitUntil: 'networkidle',
  timeout: 30000
});

// Get secure token
const token = await page.evaluate(async () => {
  const r = await fetch('https://jigsaw.vitalsource.com/secure-token', {
    credentials: 'include',
    headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
  });
  const text = await r.text();
  const match = text.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
  return match ? match[1] : null;
});

console.log('Token obtained:', token ? token.substring(0, 50) + '...' : 'FAILED');

// Test with the CORRECT ISBN: 9781266607752
const correctIsbn = '9781266607752';

// Test pages.json
const pagesResult = await page.evaluate(async (isbn, jwtoken) => {
  const r = await fetch(`https://jigsaw.vitalsource.com/books/${isbn}/pages.json`, {
    credentials: 'include',
    headers: { 
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': jwtoken,
      'x-requested-with': 'XMLHttpRequest',
      'accept': 'application/json'
    }
  });
  return { status: r.status, count: (await r.clone().json()).length, first: JSON.stringify((await r.clone().json())[0]).substring(0, 200) };
}, correctIsbn, token);

console.log(`\npages.json (${correctIsbn}):`);
console.log(`  Status: ${pagesResult.status}`);
console.log(`  Pages: ${pagesResult.count}`);
console.log(`  First page: ${pagesResult.first}`);

// Test book info
const infoResult = await page.evaluate(async (isbn, jwtoken) => {
  const r = await fetch(`https://jigsaw.vitalsource.com/info/books.json?isbns=${isbn}`, {
    credentials: 'include',
    headers: { 
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': jwtoken,
      'x-requested-with': 'XMLHttpRequest',
      'accept': 'application/json'
    }
  });
  return { status: r.status, body: await r.text() };
}, correctIsbn, token);

console.log(`\ninfo/books.json (${correctIsbn}):`);
console.log(`  Status: ${infoResult.status}`);
console.log(`  Body: ${infoResult.body.substring(0, 300)}`);

// Test TOC
const tocResult = await page.evaluate(async (isbn, jwtoken) => {
  const r = await fetch(`https://jigsaw.vitalsource.com/books/${isbn}/toc`, {
    credentials: 'include',
    headers: { 
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': jwtoken,
      'x-requested-with': 'XMLHttpRequest',
      'accept': 'application/json'
    }
  });
  return { status: r.status, body: await r.text() };
}, correctIsbn, token);

console.log(`\ntoc (${correctIsbn}):`);
console.log(`  Status: ${tocResult.status}`);
console.log(`  Body: ${tocResult.body.substring(0, 300)}`);

await browser.close();
