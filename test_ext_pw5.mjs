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

await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5&relaunch_vbid=9781266431227&course_dash_relaunch=true', {
  waitUntil: 'networkidle',
  timeout: 30000
});

// Get secure token and test APIs all in one browser context evaluation
const results = await page.evaluate(async () => {
  // Get secure token
  const r = await fetch('https://jigsaw.vitalsource.com/secure-token', {
    credentials: 'include',
    headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
  });
  const text = await r.text();
  const match = text.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
  const token = match ? match[1] : null;
  
  if (!token) return { error: 'No token' };
  
  const isbn = '9781266607752';
  const headers = { 
    'x-vitalsource-brand': 'capella',
    'x-vitalsource-sed': 'secure',
    'x-vitalsource-secure-token': token,
    'x-requested-with': 'XMLHttpRequest',
    'accept': 'application/json'
  };
  
  // Test pages.json
  let pagesStatus = 0, pagesCount = 0, pagesBody = '';
  try {
    const pr = await fetch(`https://jigsaw.vitalsource.com/books/${isbn}/pages.json`, { credentials: 'include', headers });
    pagesStatus = pr.status;
    pagesBody = await pr.text();
    if (pr.ok) {
      const data = JSON.parse(pagesBody);
      pagesCount = data.length;
    }
  } catch(e) { pagesBody = e.message; }
  
  // Test info/books.json
  let infoStatus = 0, infoBody = '';
  try {
    const ir = await fetch(`https://jigsaw.vitalsource.com/info/books.json?isbns=${isbn}`, { credentials: 'include', headers });
    infoStatus = ir.status;
    infoBody = await ir.text();
  } catch(e) { infoBody = e.message; }
  
  // Test toc
  let tocStatus = 0, tocBody = '';
  try {
    const tr = await fetch(`https://jigsaw.vitalsource.com/books/${isbn}/toc`, { credentials: 'include', headers });
    tocStatus = tr.status;
    tocBody = await tr.text();
    if (tr.ok && tocBody.length > 0) {
      const data = JSON.parse(tocBody);
      tocBody = `Got ${data.length} entries`;
    }
  } catch(e) { tocBody = e.message; }
  
  return {
    token: token.substring(0, 50) + '...',
    pages: { status: pagesStatus, count: pagesCount, preview: pagesBody.substring(0, 200) },
    info: { status: infoStatus, preview: infoBody.substring(0, 300) },
    toc: { status: tocStatus, body: tocBody }
  };
});

console.log(JSON.stringify(results, null, 2));
await browser.close();
