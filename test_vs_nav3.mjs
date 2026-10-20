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
console.log(`Reader loaded at: ${page.url()}`);

console.log('Waiting for content to render...');
await page.waitForTimeout(15000);

// Get tokens and TOC
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

const pagesResp = await req.get(`${JIGSAW}/books/${ISBN}/pages.json`, {
  headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-vitalsource-secure-token': token, 'x-requested-with': 'XMLHttpRequest' }
});
const pages = await pagesResp.json();

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
    const html = body.innerHTML;
    const text = body.innerText || '';
    const imgs = Array.from(document.querySelectorAll('img')).map(img => img.src);
    return {
      url: window.location.href,
      html,
      text: text.substring(0, 200),
      paragraphs: document.querySelectorAll('p').length,
      images: imgs,
    };
  });
}

// Test 1: CFI-based navigation via frame.evaluate
console.log('\n=== Test 1: CFI-based navigation via hash change ===');
let frame = findContentFrame();
if (frame) {
  let initialContent = await extractContent(frame);
  console.log(`Initial: ${initialContent.url}`);
  console.log(`  Text: ${initialContent.text}`);

  // Try changing the hash to navigate to chapter 2
  const ch2 = toc.find(e => e.path && e.path.includes('ch02_reader_00'));
  console.log(`\nNavigating to: ${ch2?.title} (${ch2?.cfi})`);

  try {
    const newCfi = ch2.cfi;
    // Set the hash to new CFI
    await frame.evaluate((cfi) => {
      // Try setting location.hash
      window.location.hash = `#cfi=${encodeURIComponent(cfi)}`;
      // Also try dispatching hashchange
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }, newCfi);
    console.log('  Changed hash, waiting...');
    await page.waitForTimeout(10000);

    let newContent = await extractContent(frame);
    if (newContent.url !== initialContent.url) {
      console.log(`  SUCCESS! New page: ${newContent.url}`);
      console.log(`  Text: ${newContent.text}`);
      console.log(`  Paragraphs: ${newContent.paragraphs}`);
    } else {
      console.log('  Frame URL unchanged, trying location.assign...');
      // Try a different approach: use the reader's location to navigate
      const newUrl = `https://jigsaw.vitalsource.com/books/${ISBN}/epub/OPS/s9ml/chapter002/ch02_reader_00.xhtml?favre=brett#cfi=${encodeURIComponent(ch2.cfi)}`;
      console.log(`  Trying URL: ${newUrl.substring(0, 100)}...`);
      await frame.evaluate((url) => {
        window.location.href = url;
      }, newUrl);
      await page.waitForTimeout(10000);
      newContent = await extractContent(frame);
      if (newContent.url !== initialContent.url) {
        console.log(`  SUCCESS! New page: ${newContent.url}`);
        console.log(`  Text: ${newContent.text}`);
      } else {
        console.log(`  Still: ${newContent.url}`);
      }
    }
  } catch(e) {
    console.log(`  Error: ${e.message}`);
  }
}

// Test 2: Click the "next page" button in reader UI
console.log('\n=== Test 2: Find and click next page button ===');
frame = findContentFrame();
frame = null; // Reset for new test

// Look for navigation elements on the main page
console.log('Looking for reader controls...');
const controls = await page.evaluate(() => {
  // Look for various navigation buttons
  const selectors = [
    '[aria-label*="next"]', '[aria-label*="Next"]',
    '[title*="next"]', '[title*="Next"]',
    '.next-page', '.next', '.forward',
    '[class*="next"]', '[class*="forward"]',
    '.navigation', '.nav-controls',
    '.page-turn', '.turn-page',
    'button[data-action*="next"]',
    'button[data-action*="turn"]',
  ];
  const found = [];
  for (const sel of selectors) {
    const el = document.querySelector(sel);
    if (el) {
      found.push({ selector: sel, text: el.textContent?.trim(), tag: el.tagName, class: el.className, aria: el.getAttribute('aria-label'), title: el.title });
    }
  }
  return found;
});
console.log(`  Controls found: ${JSON.stringify(controls, null, 2)}`);

// Look for clickable navigation by looking at the page structure
const allButtons = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('button, [onclick], [role="button"]'))
    .filter(el => {
      const style = window.getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden';
    })
    .map(el => ({
      tag: el.tagName,
      text: el.textContent?.trim().substring(0, 30),
      class: el.className,
      onclick: el.getAttribute('onclick'),
      role: el.getAttribute('role'),
    }));
});
console.log(`\n  All visible buttons: ${allButtons.length}`);
if (allButtons.length > 0) {
  console.log(`  Sample: ${JSON.stringify(allButtons.slice(0, 10), null, 2)}`);
}

// Test 3: Load reader at reader URL WITH cookies
console.log('\n=== Test 3: Load reader at /reader/books/{isbn} with cookies ===');
// First get cookies from current page
const cookies = await context.cookies();
console.log(`  Cookies: ${cookies.length} (${cookies.filter(c => c.domain.includes('vitalsource')).length} vital)`);

const page2 = await context.newPage();
try {
  await page2.goto(`https://capella.vitalsource.com/reader/books/${ISBN}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  console.log(`  URL: ${page2.url()}`);
  console.log(`  Title: ${await page2.title()}`);

  // Check if TOC is available
  await page2.waitForTimeout(5000);
  const tocElements = await page2.evaluate(() => {
    // Look for TOC elements
    const tocSelectors = [
      '[class*="table-of-contents"]',
      '[class*="toc"]',
      '[aria-label*="ontent"]',
      '[aria-label*="able"]',
      '.sidebar',
      '[class*="sidebar"]',
      '[class*="chapters"]',
      '[class*="pagination"]',
    ];
    const found = [];
    for (const sel of tocSelectors) {
      const el = document.querySelector(sel);
      if (el) found.push({ selector: sel, text: el.textContent?.trim().substring(0, 50) });
    }
    return found;
  });
  console.log(`  TOC elements: ${JSON.stringify(tocElements)}`);

  // If we see a chapter list, try clicking a chapter
  if (tocElements.length > 0) {
    console.log('  Expanding TOC and clicking a chapter...');
    // Try to find and click the TOC toggle
    await page2.click('[aria-label*="ontent"], [class*="toc"], button[title*="ontent"], button[title*="able"]', { timeout: 5000 }).catch(() => {});
    await page2.waitForTimeout(3000);

    // Look for chapter links
    const chapterLinks = await page2.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'));
      return links.map(a => ({ text: a.textContent?.trim().substring(0, 50), href: a.href })).filter(l => l.text.length > 2);
    });
    console.log(`  Chapter links: ${chapterLinks.length}`);
    if (chapterLinks.length > 0) {
      console.log(`  First 5: ${JSON.stringify(chapterLinks.slice(0, 5), null, 2)}`);

      // Try clicking on "Art in Daily Life" link
      const targetLink = chapterLinks.find(l => l.text.toLowerCase().includes('art in daily life'));
      if (targetLink) {
        console.log(`  Clicking: ${targetLink.text}`);
        await page2.evaluate((href) => {
          const link = Array.from(document.querySelectorAll('a')).find(a => a.href === href);
          if (link) link.click();
        }, targetLink.href);
        await page2.waitForTimeout(10000);

        // Check if content changed
        const newFrame = findContentFrame();
        if (newFrame) {
          const content = await extractContent(newFrame);
          console.log(`  Content after click: ${content.url}`);
          console.log(`  Text: ${content.text}`);
          console.log(`  Paragraphs: ${content.paragraphs}`);
        }
      }
    }
  }
} catch(e) {
  console.log(`  Error: ${e.message}`);
}
await page2.close();

// Test 4: Use ArrowRight with focus on the page
console.log('\n=== Test 4: Keyboard navigation on reader page ===');
frame = findContentFrame();
if (frame) {
  console.log(`  Current: ${frame.url().split('?')[0]}`);

  // Try different keyboard shortcuts
  const shortcuts = ['ArrowRight', 'PageDown', ' '];
  for (const key of shortcuts) {
    console.log(`  Pressing: ${key}`);
    await page.keyboard.press(key);
    await page.waitForTimeout(5000);
    const newFrame = findContentFrame();
    if (newFrame) {
      const content = await extractContent(newFrame);
      console.log(`  URL: ${content.url}`);
      console.log(`  Changed: ${content.url.split('#')[0] !== frame.url().split('#')[0]}`);
      if (content.url.split('#')[0] !== frame.url().split('#')[0]) {
        console.log(`  NEW CONTENT: ${content.text.substring(0, 200)}`);
        fs.writeFileSync(path.join(OUTPUT_DIR, 'keyboard_nav_result.html'), content.html);
        console.log(`  Saved!`);
        break;
      }
    } else {
      console.log('  No frame found');
    }
  }
}

await browser.close();
console.log('\n=== Done ===');
