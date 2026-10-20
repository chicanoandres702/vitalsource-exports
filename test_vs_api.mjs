import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BOOK_URL = 'https://bc.vitalsource.com/books/9781266431227?bc_token=20d783c0-abea-013f-889a-6ecc5aef212c&relaunch_vbid=9781266431227&course_dash_relaunch=true';
const ISBN = '9781266607752';
const OUTPUT_DIR = '/root/vitalsource_captures/test_output';

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu']
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  bypassHTTPHeaders: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  }
});

const page = await context.newPage();

console.log('Navigating to VitalSource book...');
await page.goto(BOOK_URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
console.log('Final URL:', page.url());

// Wait for redirect to capella
try {
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 20000 });
  console.log('Redirected to:', page.url());
} catch(e) {
  console.log('Current URL:', page.url());
}

await page.waitForTimeout(10000);

// Use context.request to fetch APIs (shares cookies automatically)
const req = context.request;

console.log('\n=== Testing with context.request (shares browser cookies) ===');

// Test secure-token
console.log('1. Secure-token...');
try {
  const resp = await req.get('https://jigsaw.vitalsource.com/secure-token', {
    headers: {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-requested-with': 'XMLHttpRequest',
    }
  });
  const body = await resp.text();
  const match = body.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
  const token = match ? match[1] : null;
  console.log(`  Status: ${resp.status()}, Token: ${token ? 'YES' : 'NO'}`);
  if (token) {
    fs.writeFileSync(path.join(OUTPUT_DIR, 'ctx_token.json'), JSON.stringify({ token }, null, 2));

    // Test pages.json
    console.log('2. Pages.json...');
    const pagesResp = await req.get(`https://jigsaw.vitalsource.com/books/${ISBN}/pages.json`, {
      headers: {
        'x-vitalsource-brand': 'capella',
        'x-vitalsource-sed': 'secure',
        'x-vitalsource-secure-token': token,
        'x-requested-with': 'XMLHttpRequest',
        'Accept': 'application/json',
      }
    });
    console.log(`  Status: ${pagesResp.status()}`);
    if (pagesResp.ok()) {
      const pagesData = await pagesResp.json();
      console.log(`  Pages: ${pagesData.length}`);
      console.log(`  First: ${pagesData[0]?.chapterTitle} - ${pagesData[0]?.path}`);
      console.log(`  First URL: ${pagesData[0]?.absoluteURL}`);
    }

    // Test page content via context.request
    console.log('\n3. Page content (context.request)...');
    const pageUrl = `https://jigsaw.vitalsource.com/books/${ISBN}/epub/OPS/s9ml/chapter01/move_beyond.xhtml`;
    const pageResp = await req.get(pageUrl, {
      headers: {
        'x-vitalsource-brand': 'capella',
        'x-vitalsource-sed': 'secure',
        'x-vitalsource-secure-token': token,
        'x-requested-with': 'XMLHttpRequest',
      }
    });
    console.log(`  Status: ${pageResp.status()}`);
    const pageText = await pageResp.text();
    console.log(`  Content length: ${pageText.length}`);
    console.log(`  Has real <p>: ${pageText.includes('<p')}`);
    console.log(`  Has <img: ${pageText.includes('<img')}`);
    console.log(`  Has #page-content: ${pageText.includes('page-content')}`);
    console.log(`  Preview (first 500 chars): ${pageText.substring(0, 500)}`);

    if (!pageText.includes('<p') && pageText.includes('page-content')) {
      console.log('\n  [NOTE] Got encoded content, trying with favre=brett...');
      const pageResp2 = await req.get(`${pageUrl}?favre=brett`, {
        headers: {
          'x-vitalsource-brand': 'capella',
          'x-vitalsource-sed': 'secure',
          'x-vitalsource-secure-token': token,
          'x-requested-with': 'XMLHttpRequest',
        }
      });
      const pageText2 = await pageResp2.text();
      console.log(`  Status: ${pageResp2.status()}, Length: ${pageText2.length}`);
      console.log(`  Has real <p>: ${pageText2.includes('<p')}`);
      console.log(`  Has <img: ${pageText2.includes('<img')}`);
      console.log(`  Preview: ${pageText2.substring(0, 500)}`);
    }

    // Test page content via page.evaluate (browser fetch)
    console.log('\n4. Page content (page.evaluate fetch)...');
    const evalResult = await page.evaluate(async () => {
      try {
        const r = await fetch('https://jigsaw.vitalsource.com/books/9781266607752/epub/OPS/s9ml/chapter01/move_beyond.xhtml', {
          credentials: 'include',
          headers: {
            'x-vitalsource-brand': 'capella',
            'x-vitalsource-sed': 'secure',
            'x-requested-with': 'XMLHttpRequest'
          }
        });
        const text = await r.text();
        return { status: r.status, length: text.length, hasP: text.includes('<p'), preview: text.substring(0, 300) };
      } catch(e) {
        return { error: e.message };
      }
    });
    console.log('  Result:', JSON.stringify(evalResult, null, 2));
  }
} catch (e) {
  console.log('Secure-token error:', e.message);
}

await browser.close();
console.log('\n=== Done ===');
