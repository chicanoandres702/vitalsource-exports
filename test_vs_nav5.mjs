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
console.log(`Reader at: ${page.url()}`);

console.log('Waiting for content...');
await page.waitForTimeout(15000);

function findContentFrame() {
  for (const p of context.pages()) {
    for (const f of p.frames()) {
      if (f.url().includes('epub/OPS') && f.url().includes('favre=brett')) {
        return f;
      }
    }
  }
  return null;
}

async function extractContent(frame) {
  return await frame.evaluate(() => {
    const body = document.body;
    return {
      url: window.location.href,
      html: body.innerHTML,
      text: body.innerText?.substring(0, 200),
      paragraphs: document.querySelectorAll('p').length,
      images: Array.from(document.querySelectorAll('img')).map(img => img.src),
      cssLinks: Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href),
    };
  });
}

async function waitForFrameChange(oldUrl) {
  const start = Date.now();
  while (Date.now() - start < 30000) {
    const f = findContentFrame();
    if (f) {
      const content = await extractContent(f);
      if (content.url !== oldUrl) {
        return content;
      }
    }
    await page.waitForTimeout(1000);
  }
  return null;
}

// Test 1: Previous button
console.log('\n=== Test 1: Previous button ===');
let frame = findContentFrame();
let content = await extractContent(frame);
console.log(`Current: ${content.url}`);
console.log(`  Text: ${content.text}`);

// Click Previous
const prevBtn = await page.$('button[aria-label="Previous"]');
if (prevBtn) {
  console.log('Found Previous button!');
  await prevBtn.click();
  console.log('Clicked Previous, waiting for change...');

  const newContent = await waitForFrameChange(content.url);
  if (newContent) {
    console.log(`New: ${newContent.url}`);
    console.log(`  Text: ${newContent.text}`);
    console.log('  SUCCESS - Navigated backwards!');
  } else {
    console.log('Frame did not change');
  }
} else {
  console.log('Previous button not found');
}

// Test 2: TOC access via JavaScript
console.log('\n=== Test 2: TOC access via JavaScript ===');
frame = findContentFrame();
if (frame) {
  // Try to access the reader's internal navigation
  const readerInfo = await page.evaluate(() => {
    // Look for reader objects
    const checks = {
      VST: typeof window.VST !== 'undefined',
      jigsaw: typeof window.jigsaw !== 'undefined',
      Reader: typeof window.Reader !== 'undefined',
      Book: typeof window.Book !== 'undefined',
      Mosaic: typeof window.Mosaic !== 'undefined',
    };

    // Look for navigation elements with event listeners
    const navButtons = Array.from(document.querySelectorAll('button')).map(b => ({
      ariaLabel: b.getAttribute('aria-label'),
      title: b.title,
      text: b.textContent?.trim().substring(0, 20),
      class: b.className,
      onclick: b.getAttribute('onclick'),
    })).filter(b => b.ariaLabel || b.onclick || b.text);

    // Look for links that might be TOC-related
    const tocLinks = Array.from(document.querySelectorAll('a')).map(a => ({
      text: a.textContent?.trim().substring(0, 40),
      href: a.href,
      class: a.className,
    })).filter(a => a.href.includes('toc') || a.href.includes('content') || a.text.toLowerCase().includes('table') || a.text.toLowerCase().includes('contents') || a.text.toLowerCase().includes('chapter'));

    return { checks, navButtons: navButtons.slice(0, 20), tocLinks: tocLinks.slice(0, 20) };
  });
  console.log(`  Reader objects: ${JSON.stringify(readerInfo.checks)}`);
  console.log(`  Nav buttons: ${JSON.stringify(readerInfo.navButtons.slice(0, 10))}`);
    console.log(`  TOC links: ${JSON.stringify(readerInfo.tocLinks)}`);

  // Try JavaScript click on TOC-related elements
  const tocClickResult = await page.evaluate(() => {
    const selectors = [
      '[aria-label*="able"]', '[aria-label*="ontent"]',
      '[class*="toc"]', '[class*="Toc"]', '[class*="TOC"]',
      '[class*="table-of-contents"]', '[class*="contents"]',
      'button[title*="able"]', 'button[title*="ontent"]',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) {
        el.click();
        return { selector: sel, found: true };
      }
    }
    return { found: false };
  });
  console.log(`  TOC click result: ${JSON.stringify(tocClickResult)}`);

  if (tocClickResult.found) {
    await page.waitForTimeout(5000);
    // Look for chapter links
    const chapterLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'));
      return links.map(a => ({
        text: a.textContent?.trim().substring(0, 40),
        href: a.href,
        class: a.className.substring(0, 50),
      })).filter(l => l.text.length > 2).slice(0, 20);
    });
    console.log(`  Chapter links after TOC click: ${JSON.stringify(chapterLinks)}`);
  }
}

// Test 3: Click through 5 pages with Next to see patterns
console.log('\n=== Test 3: Navigate through 5 pages with Next ===');
frame = findContentFrame();
content = await extractContent(frame);
console.log(`Start: ${content.url}`);

for (let i = 0; i < 5; i++) {
  const nextBtn = await page.$('button[aria-label="Next"]');
  if (!nextBtn) {
    console.log('No Next button found');
    break;
  }
  await nextBtn.click();
  const newContent = await waitForFrameChange(content.url);
  if (newContent) {
    console.log(`  Page ${i+1}: ${newContent.url}`);
    console.log(`  Text: ${newContent.text}`);
    console.log(`  Para: ${newContent.paragraphs}`);
    console.log(`  CSS: ${newContent.cssLinks.length}, Images: ${newContent.images.length}`);
    content = newContent;
  } else {
    console.log(`  Page ${i+1}: No change`);
    break;
  }
}

// Test 4: Check CSS availability
console.log('\n=== Test 4: CSS availability ===');
frame = findContentFrame();
if (frame) {
  const cssInfo = await page.evaluate(() => {
    // Get CSS links from the content frame via the reader
    const epubFrames = Array.from(window.frames || []).filter(f => {
      try { return f.location?.href?.includes('epub/OPS'); } catch(e) { return false; }
    });
    // Can't access frame content cross-origin from main page, but we can check the frame directly
    return { epubFrames: epubFrames.length };
  });
  console.log(`  ${JSON.stringify(cssInfo)}`);

  // Check if CSS is available via context.request
  const content = await extractContent(frame);
  console.log(`  CSS links in current page: ${content.cssLinks.length}`);
  if (content.cssLinks.length > 0) {
    console.log(`  Sample CSS URL: ${content.cssLinks[0]}`);
    // Extract CSS URL path
    const cssUrl = new URL(content.cssLinks[0]);
    const cssPath = cssUrl.pathname;

    const tokenResp = await context.request.get(`${JIGSAW}/secure-token`, {
      headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
    });
    const tokenBody = await tokenResp.text();
    const tokenMatch = tokenBody.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
    const token = tokenMatch ? tokenMatch[1] : null;

    try {
      const cssResp = await context.request.get(`${JIGSAW}${cssPath}`, {
        headers: {
          'x-vitalsource-brand': 'capella',
          'x-vitalsource-sed': 'secure',
          'x-vitalsource-secure-token': token,
          'x-requested-with': 'XMLHttpRequest',
          'Accept': 'text/css',
        }
      });
      console.log(`  CSS fetch status: ${cssResp.status()}`);
      const cssText = await cssResp.text();
      console.log(`  CSS size: ${cssText.length} bytes`);
      fs.writeFileSync(path.join(OUTPUT_DIR, 'reader_css.css'), cssText);
      console.log(`  Saved: reader_css.css`);
    } catch(e) {
      console.log(`  CSS fetch error: ${e.message}`);
    }
  }
}

await browser.close();
console.log('\n=== Done ===');
