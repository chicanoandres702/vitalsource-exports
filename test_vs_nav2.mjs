import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const ISBN = '9781266607752';
const BOOK_URL = 'https://bc.vitalsource.com/books/9781266431227?bc_token=20d783c0-abea-013f-889a-6ecc5aef212c&relaunch_vbid=9781266431227&course_dash_relaunch=true';
const JIGSAW = 'https://jigsaw.vitalsource.com';
const OUTPUT_DIR = '/root/vitalsource_captures/test_output';

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu']
});

const context = await browser.newContext({
  viewport: { width: 1200, height: 1600 }
});

const page = await context.newPage();

console.log('Loading reader...');
await page.goto(BOOK_URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
try {
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 20000 });
} catch(e) {}

console.log('Waiting for content...');
await page.waitForTimeout(15000);

// Get the secure token and TOC
const req = context.request;
const tokenResp = await req.get(`${JIGSAW}/secure-token`, {
  headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
});
const tokenBody = await tokenResp.text();
const tokenMatch = tokenBody.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
const token = tokenMatch ? tokenMatch[1] : null;

const tocResp = await req.get(`${JIGSAW}/books/${ISBN}/toc`, {
  headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-vitalsource-secure-token': token, 'x-requested-with': 'XMLHttpRequest' }
});
const toc = await tocResp.json();

// Get pages.json for CFI data
const pagesResp = await req.get(`${JIGSAW}/books/${ISBN}/pages.json`, {
  headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-vitalsource-secure-token': token, 'x-requested-with': 'XMLHttpRequest' }
});
const pages = await pagesResp.json();

// Save TOC for the server to use
fs.writeFileSync(path.join(OUTPUT_DIR, 'toc_data.json'), JSON.stringify(toc, null, 2));
fs.writeFileSync(path.join(OUTPUT_DIR, 'pages_data.json'), JSON.stringify(pages, null, 2));
console.log(`TOC: ${toc.length} entries, Pages: ${pages.length} entries`);

// Function to get content from the EPUB frame
async function extractFrameContent() {
  const frames = context.pages().flatMap(p => p.frames());
  const contentFrame = frames.find(f => f.url().includes('epub/OPS') && f.url().includes('favre=brett'));
  if (!contentFrame) return null;

  return await contentFrame.evaluate(() => {
    const body = document.body;
    const html = body.innerHTML;
    const text = body.innerText || '';
    const imgs = Array.from(document.querySelectorAll('img')).map(img => img.src);
    const cssLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href);
    const inlineCss = Array.from(document.querySelectorAll('style')).map(s => s.textContent?.substring(0, 500));
    return {
      url: window.location.href,
      html,
      text: text.substring(0, 300),
      paragraphs: document.querySelectorAll('p').length,
      images: imgs,
      cssLinks,
      inlineStylesCount: inlineCss.length,
    };
  });
}

// Test 1: CFI endpoint
console.log('\n=== Test 1: CFI endpoint ===');
const cfiPath = toc[5].cfi; // "About Living with Art" - /6/12[data-uuid...]
console.log(`CFI from TOC: ${cfiPath}`);

// Convert CFI to endpoint path
// CFI format: /6/12[data-uuid-...] -> /6/12!/4/2/2 (from original URL)
const cfiClean = cfiPath.replace(/\[.*?\]/, '').replace(/\[.*$/, '');
console.log(`Clean CFI: ${cfiClean}`);

// Try the CFI endpoint
try {
  const cfiUrl = `${JIGSAW}/books/${ISBN}/epub/cfi${cfiPath}?brand=vitalsource&create=true`;
  console.log(`CFI URL: ${cfiUrl}`);
  const cfiResp = await req.get(cfiUrl, {
    headers: {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': token,
      'x-requested-with': 'XMLHttpRequest',
      'Accept': 'application/xhtml+xml',
    }
  });
  console.log(`  Status: ${cfiResp.status()}`);
  const cfiText = await cfiResp.text();
  console.log(`  Length: ${cfiText.length}`);
  console.log(`  Has <p: ${cfiText.includes('<p')}`);
  console.log(`  Has #page-content: ${cfiText.includes('page-content')}`);
  console.log(`  Preview: ${cfiText.substring(0, 300)}`);
} catch(e) {
  console.log(`  Error: ${e.message}`);
}

// Test 2: Keyboard navigation (right arrow)
console.log('\n=== Test 2: Keyboard navigation (right arrow) ===');
let initialContent = await extractFrameContent();
if (initialContent) {
  console.log(`Initial page: ${initialContent.url}`);
  console.log(`  Text: ${initialContent.text}`);
  console.log(`  Paragraphs: ${initialContent.paragraphs}`);
}

// Press right arrow to go to next page
await page.keyboard.press('ArrowRight');
console.log('Pressed right arrow, waiting...');
await page.waitForTimeout(5000);

let nextContent = await extractFrameContent();
if (nextContent && nextContent.url !== initialContent?.url) {
  console.log(`\nNext page: ${nextContent.url}`);
  console.log(`  Text: ${nextContent.text}`);
  console.log(`  Paragraphs: ${nextContent.paragraphs}`);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'next_page.html'), nextContent.html);
  console.log(`  Saved: next_page.html (${nextContent.html.length} bytes)`);
} else {
  console.log('Frame did not change, trying again...');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(5000);
  nextContent = await extractFrameContent();
  if (nextContent) {
    console.log(`Frame URL: ${nextContent.url}`);
    console.log(`  Text: ${nextContent.text}`);
  }
}

// Test 3: Try loading reader with specific CFI
console.log('\n=== Test 3: Load reader with CFI ===');
const chapter02 = pages.find(p => p.path.includes('chapter02') && !p.path.includes('chapter01'));
console.log(`Chapter 2 page: ${chapter02?.path} - CFI: ${chapter02?.cfi}`);

const cfiClean2 = chapter02?.cfi?.replace(/\[.*?\]/, '').replace(/\[.*$/, '');
console.log(`Clean CFI for ch2: ${cfiClean2}`);

// Try CFI endpoint with chapter02's CFI
try {
  const cfiUrl2 = `${JIGSAW}/books/${ISBN}/epub/cfi${cfiClean2}?brand=vitalsource&create=true`;
  const cfiResp2 = await req.get(cfiUrl2, {
    headers: {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': token,
      'x-requested-with': 'XMLHttpRequest',
      'Accept': 'application/xhtml+xml',
    }
  });
  console.log(`  Status: ${cfiResp2.status()}`);
  const cfiText2 = await cfiResp2.text();
  console.log(`  Length: ${cfiText2.length}`);
  console.log(`  Has <p: ${cfiText2.includes('<p')}`);
  console.log(`  Preview: ${cfiText2.substring(0, 300)}`);
} catch(e) {
  console.log(`  Error: ${e.message}`);
}

// Test 4: Try loading reader with hash-based CFI
console.log('\n=== Test 4: Reader URL with CFI hash ===');
const page2 = await context.newPage();
const readerUrl = `https://capella.vitalsource.com/reader/books/${ISBN}`;
console.log(`Loading: ${readerUrl}`);
try {
  await page2.goto(readerUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log(`  Loaded: ${page2.url()}`);
  await page.waitForTimeout(5000);

  // Try clicking TOC button
  const tocButton = await page2.$('[aria-label="Table of Contents"], button[title*="Contents"], button[title*="TOC"], [class*="toc-button"], [class*="ToC"]');
  if (tocButton) {
    console.log('Found TOC button, clicking...');
    await tocButton.click();
    await page.waitForTimeout(3000);

    // Find chapter links in TOC
    const tocLinks = await page2.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'));
      return links.map(a => ({ text: a.textContent?.trim().substring(0, 50), href: a.href, class: a.className })).filter(l => l.text);
    });
    console.log(`  TOC links found: ${tocLinks.length}`);
    if (tocLinks.length > 0) {
      console.log(`  Sample: ${JSON.stringify(tocLinks.slice(0, 5))}`);
    }
  } else {
    console.log('No TOC button found, trying to find TOC elements...');
    const allButtons = await page2.evaluate(() => {
      return Array.from(document.querySelectorAll('button')).map(b => ({ text: b.textContent?.trim(), title: b.title, class: b.className, aria: b.getAttribute('aria-label') }));
    });
    console.log(`  Buttons: ${JSON.stringify(allButtons.slice(0, 20))}`);
  }
} catch(e) {
  console.log(`  Error: ${e.message}`);
}
await page2.close();

await browser.close();
console.log('\n=== Done ===');
