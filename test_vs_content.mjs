import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BOOK_URL = 'https://bc.vitalsource.com/books/9781266431227?bc_token=20d783c0-abea-013f-889a-6ecc5aef212c&relaunch_vbid=9781266431227&course_dash_relaunch=true';
const ISBN = '9781266607752';
const OUTPUT_DIR = '/root/vitalsource_captures/test_output';
const JIGSAW = 'https://jigsaw.vitalsource.com';

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu']
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

console.log('Navigating to VitalSource book...');
await page.goto(BOOK_URL, { waitUntil: 'domcontentloaded', timeout: 90000 });

try {
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 20000 });
  console.log('Redirected to:', page.url());
} catch(e) {
  console.log('Current URL:', page.url());
}

await page.waitForTimeout(10000);

const cookies = await context.cookies();
const jigsawCookies = cookies.filter(c => c.domain.includes('jigsaw')).map(c => `${c.name}=${c.value}`).join('; ');

// Get secure token via context.request
console.log('\nGetting secure token...');
const req = context.request;
const tokenResp = await req.get(`${JIGSAW}/secure-token`, {
  headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
});
const tokenBody = await tokenResp.text();
const tokenMatch = tokenBody.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
const token = tokenMatch ? tokenMatch[1] : null;
console.log('Token:', token ? 'YES (' + token.substring(0, 40) + '...)' : 'NO');

// Test with different Accept headers
const testUrl = `${JIGSAW}/books/${ISBN}/epub/OPS/s9ml/chapter01/move_beyond.xhtml`;

const acceptHeaders = [
  'application/xhtml+xml',
  'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  '*/*',
];

for (const accept of acceptHeaders) {
  console.log(`\n=== Accept: ${accept} ===`);
  try {
    const resp = await req.get(testUrl, {
      headers: {
        'x-vitalsource-brand': 'capella',
        'x-vitalsource-sed': 'secure',
        'x-vitalsource-secure-token': token,
        'x-requested-with': 'XMLHttpRequest',
        'Accept': accept,
      }
    });
    const text = await resp.text();
    const contentType = resp.headers()['content-type'] || 'unknown';
    console.log(`  Status: ${resp.status()}, Content-Type: ${contentType}`);
    console.log(`  Length: ${text.length}`);
    console.log(`  Has <p>: ${text.includes('<p')}`);
    console.log(`  Has <img: ${text.includes('<img')}`);
    console.log(`  Has page-content: ${text.includes('page-content')}`);
    console.log(`  Preview: ${text.substring(0, 200)}`);

    if (text.includes('<p') && text.includes('<img')) {
      fs.writeFileSync(path.join(OUTPUT_DIR, 'page_content_real.html'), text);
      console.log('  >>> Saved real XHTML content!');
    }
  } catch (e) {
    console.log(`  Error: ${e.message}`);
  }
}

// Also test fetching CSS
console.log('\n=== Testing CSS fetch ===');
try {
  const cssUrl = `${JIGSAW}/books/${ISBN}/epub/OPS/assets/modules/mhe.mhhe-blk2/css/blk-base-page.css`;
  const cssResp = await req.get(cssUrl, {
    headers: {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': token,
      'x-requested-with': 'XMLHttpRequest',
    }
  });
  const cssText = await cssResp.text();
  console.log(`  Status: ${cssResp.status()}, Length: ${cssText.length}`);
  console.log(`  Preview: ${cssText.substring(0, 200)}`);
} catch(e) {
  console.log(`  CSS error: ${e.message}`);
}

// Test fetching an image
console.log('\n=== Testing image fetch ===');
try {
  const imgUrl = `${JIGSAW}/books/${ISBN}/epub/OPS/img/chapter01/get94856_fm01a.png`;
  const imgResp = await req.get(imgUrl, {
    headers: {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': token,
      'x-requested-with': 'XMLHttpRequest',
    },
    responseType: 'arrayBuffer'
  });
  console.log(`  Status: ${imgResp.status()}, Size: ${imgResp.body.byteSize || imgResp.body.length} bytes`);
} catch(e) {
  console.log(`  Image error: ${e.message}`);
}

await browser.close();
console.log('\n=== Done ===');
