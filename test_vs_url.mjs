import { chromium } from 'playwright';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const BOOK_URL = 'https://bc.vitalsource.com/books/9781266431227?bc_token=20d783c0-abea-013f-889a-6ecc5aef212c&relaunch_vbid=9781266431227&course_dash_relaunch=true';
const ISBN = '9781266607752';
const OUTPUT_DIR = path.join(process.cwd(), 'test_output');
const JIGSAW_BASE = 'https://jigsaw.vitalsource.com';

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu']
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

context.on('request', req => {
  const url = req.url();
  if (url.includes('jigsaw.vitalsource.com') && (url.includes('pages.json') || url.includes('/toc') || url.includes('secure-token') || url.includes('info/books'))) {
    console.log(`[REQ] ${req.method()} ${url}`);
  }
});

context.on('response', res => {
  const url = res.url();
  if (url.includes('jigsaw.vitalsource.com') && (url.includes('pages.json') || url.includes('/toc') || url.includes('secure-token') || url.includes('info/books'))) {
    console.log(`[RES] ${res.status()} ${url}`);
  }
});

const page = await context.newPage();

page.on('console', msg => {
  const text = msg.text();
  if (text.includes('VS') || text.includes('error') || text.includes('Error') || text.includes('token') || text.includes('book')) {
    console.log(`[PAGE] ${text}`);
  }
});

page.on('pageerror', err => console.log(`[ERROR] ${err.message}`));

console.log('=== VitalSource URL Test ===');
console.log(`Testing URL: ${BOOK_URL}`);
console.log(`ISBN: ${ISBN}`);
console.log('');

// Step 1: Navigate to the book URL
console.log('Step 1: Navigating to bc.vitalsource.com...');
try {
  const response = await page.goto(BOOK_URL, { waitUntil: 'networkidle', timeout: 60000 });
  console.log(`  Response status: ${response?.status()}`);
  console.log(`  Final URL: ${page.url()}`);
} catch (e) {
  console.log(`  Navigation error: ${e.message}`);
}

// Step 2: Wait for redirect to capella
console.log('\nStep 2: Checking redirect...');
try {
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 15000 });
  console.log(`  Redirected to: ${page.url()}`);
} catch (e) {
  console.log(`  Current URL: ${page.url()}`);
  console.log(`  Note: ${e.message}`);
}

// Step 3: Wait for reader to load
console.log('\nStep 3: Waiting for reader to load...');
await page.waitForTimeout(8000);

// Step 4: Capture cookies
console.log('\nStep 4: Capturing cookies...');
const cookies = await context.cookies();
const vitalSourceCookies = cookies.filter(c => c.domain.includes('vitalsource'));
console.log(`  Total cookies: ${cookies.length}`);
console.log(`  VitalSource cookies: ${vitalSourceCookies.length}`);
for (const c of vitalSourceCookies) {
  console.log(`    ${c.name}@${c.domain} (${c.value.substring(0, 40)}...)`);
}

// Save cookies
fs.writeFileSync(path.join(OUTPUT_DIR, 'test_cookies.json'), JSON.stringify(cookies, null, 2));

// Step 5: Extract cookies as header string for axios
const cookieHeader = cookies
  .filter(c => c.domain.includes('vitalsource'))
  .map(c => `${c.name}=${c.value}`)
  .join('; ');

const jigsawCookies = cookies
  .filter(c => c.domain.includes('jigsaw'))
  .map(c => `${c.name}=${c.value}`)
  .join('; ');

// Step 6: Test the secure-token endpoint
console.log('\nStep 5: Testing secure-token endpoint...');
try {
  const tokenResp = await axios.get(`${JIGSAW_BASE}/secure-token`, {
    headers: {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-requested-with': 'XMLHttpRequest',
      'Cookie': jigsawCookies,
      'Referer': 'https://capella.vitalsource.com/reader/books/' + ISBN,
    }
  });

  const tokenMatch = tokenResp.data.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
  const secureToken = tokenMatch ? tokenMatch[1] : null;
  console.log(`  Status: ${tokenResp.status}`);
  console.log(`  Secure token found: ${secureToken ? 'YES (' + secureToken.substring(0, 50) + '...)' : 'NO'}`);

  if (secureToken) {
    fs.writeFileSync(path.join(OUTPUT_DIR, 'secure_token.json'), JSON.stringify({ token: secureToken }, null, 2));

    // Step 7: Test book info endpoint
    console.log('\nStep 6: Testing book info endpoint...');
    try {
      const bookResp = await axios.get(`${JIGSAW_BASE}/info/books.json?isbns=${ISBN}`, {
        headers: {
          'Cookie': jigsawCookies,
          'x-vitalsource-brand': 'capella',
          'x-vitalsource-sed': 'secure',
          'x-vitalsource-secure-token': secureToken,
          'x-requested-with': 'XMLHttpRequest',
          'Referer': 'https://capella.vitalsource.com/reader/books/' + ISBN,
        }
      });
      const book = bookResp.data.books?.[0];
      console.log(`  Status: ${bookResp.status}`);
      console.log(`  Title: ${book?.title || 'N/A'}`);
      console.log(`  Author: ${book?.author || 'N/A'}`);
      console.log(`  ISBN: ${book?.isbn || 'N/A'}`);
      console.log(`  Has license: ${book?.hasLicense || false}`);
      fs.writeFileSync(path.join(OUTPUT_DIR, 'book_info.json'), JSON.stringify(bookResp.data, null, 2));
    } catch (e) {
      console.log(`  Book info error: ${e.response?.status || e.message}`);
    }

    // Step 8: Test pages.json endpoint
    console.log('\nStep 7: Testing pages.json endpoint...');
    try {
      const pagesResp = await axios.get(`${JIGSAW_BASE}/books/${ISBN}/pages.json`, {
        headers: {
          'Cookie': jigsawCookies,
          'x-vitalsource-brand': 'capella',
          'x-vitalsource-sed': 'secure',
          'x-vitalsource-secure-token': secureToken,
          'x-requested-with': 'XMLHttpRequest',
          'Referer': 'https://capella.vitalsource.com/reader/books/' + ISBN,
        }
      });
      const pages = pagesResp.data;
      console.log(`  Status: ${pagesResp.status}`);
      console.log(`  Total pages: ${pages.length}`);
      console.log(`  First page: ${pages[0]?.chapterTitle || 'N/A'} (${pages[0]?.path || 'N/A'})`);
      console.log(`  Last page: ${pages[pages.length-1]?.chapterTitle || 'N/A'}`);
      fs.writeFileSync(path.join(OUTPUT_DIR, 'pages_meta.json'), JSON.stringify({ count: pages.length, sample: pages.slice(0, 3) }, null, 2));
    } catch (e) {
      console.log(`  Pages error: ${e.response?.status || e.message}`);
    }

    // Step 9: Test TOC endpoint
    console.log('\nStep 8: Testing TOC endpoint...');
    try {
      const tocResp = await axios.get(`${JIGSAW_BASE}/books/${ISBN}/toc`, {
        headers: {
          'Cookie': jigsawCookies,
          'x-vitalsource-brand': 'capella',
          'x-vitalsource-sed': 'secure',
          'x-vitalsource-secure-token': secureToken,
          'x-requested-with': 'XMLHttpRequest',
          'Referer': 'https://capella.vitalsource.com/reader/books/' + ISBN,
        }
      });
      const toc = tocResp.data;
      console.log(`  Status: ${tocResp.status}`);
      console.log(`  TOC entries: ${toc.length}`);
      console.log(`  First entry: ${toc[0]?.title || 'N/A'}`);
      fs.writeFileSync(path.join(OUTPUT_DIR, 'toc_meta.json'), JSON.stringify({ count: toc.length, sample: toc.slice(0, 3) }, null, 2));
    } catch (e) {
      console.log(`  TOC error: ${e.response?.status || e.message}`);
    }

    // Step 10: Test fetching actual page content
    console.log('\nStep 9: Testing page content fetch...');
    try {
      const pageUrl = `${JIGSAW_BASE}/books/${ISBN}/epub/OPS/s9ml/chapter01/move_beyond.xhtml`;
      const contentResp = await axios.get(pageUrl, {
        headers: {
          'Cookie': jigsawCookies,
          'x-vitalsource-brand': 'capella',
          'x-vitalsource-sed': 'secure',
          'x-vitalsource-secure-token': secureToken,
          'x-requested-with': 'XMLHttpRequest',
          'Referer': 'https://capella.vitalsource.com/reader/books/' + ISBN,
        },
        responseType: 'text',
        timeout: 15000,
      });
      console.log(`  Status: ${contentResp.status}`);
      console.log(`  Content length: ${contentResp.data.length}`);
      console.log(`  Has <body>: ${contentResp.data.includes('<body')}`);
      console.log(`  Has <img: ${contentResp.data.includes('<img')}`);
      console.log(`  Has <p>: ${contentResp.data.includes('<p')}`);
      const preview = contentResp.data.substring(0, 300);
      console.log(`  Preview: ${preview}`);
      fs.writeFileSync(path.join(OUTPUT_DIR, 'sample_page.html'), contentResp.data);
    } catch (e) {
      console.log(`  Page content error: ${e.response?.status || e.message}`);
      if (e.response?.data) {
        console.log(`  Response: ${e.response.data.substring(0, 200)}`);
      }
    }
  }
} catch (e) {
  console.log(`  Secure token error: ${e.response?.status || e.message}`);
  if (e.response?.data) {
    console.log(`  Response: ${e.response.data.substring(0, 200)}`);
  }
}

// Step 11: Check the reader page
console.log('\nStep 10: Checking reader page state...');
const readerState = await page.evaluate(() => {
  return {
    title: document.title,
    url: window.location.href,
    hasBody: !!document.body,
    bodyText: document.body.innerText?.substring(0, 200) || '',
    hasIframe: !!document.querySelector('iframe'),
    iframeSrcs: Array.from(document.querySelectorAll('iframe')).map(f => f.src),
    hasCanvas: !!document.querySelector('canvas'),
    bodyClasses: document.body.className,
    imgCount: document.querySelectorAll('img').length,
  };
});
console.log(`  Title: ${readerState.title}`);
console.log(`  URL: ${readerState.url}`);
console.log(`  Has iframes: ${readerState.iframeSrcs.length}`);
console.log(`  Iframe srcs: ${JSON.stringify(readerState.iframeSrcs)}`);
console.log(`  Body text: ${readerState.bodyText}`);

// Screenshot
await page.screenshot({ path: path.join(OUTPUT_DIR, 'test_screenshot.png'), fullPage: true });
console.log(`\nScreenshot saved to: ${path.join(OUTPUT_DIR, 'test_screenshot.png')}`);

console.log('\n=== Test Complete ===');

await browser.close();
