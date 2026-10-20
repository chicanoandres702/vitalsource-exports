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

// Debug: list all frames
console.log('Debug: All frames/pages');
for (const p of context.pages()) {
  console.log(`  Page: ${p.url()}`);
  for (const f of p.frames()) {
    console.log(`    Frame: ${f.url()}`);
  }
}

function findContentFrame() {
  for (const p of context.pages()) {
    for (const f of p.frames()) {
      if (f.url().includes('epub/OPS') && f.url().includes('favre=brett')) {
        return f;
      }
      if (f.url().includes('epub/OPS')) {
        console.log(`  Found EPUB frame (no favre): ${f.url()}`);
      }
    }
  }
  return null;
}

async function waitForContentFrame(maxWait = 30000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    const f = findContentFrame();
    if (f) return f;
    await page.waitForTimeout(1000);
    console.log(`  Waiting for frame... (${Date.now() - start}ms)`);
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
      styles: Array.from(document.querySelectorAll('style')).map(s => s.textContent?.substring(0, 200)),
    };
  });
}

// Get current content
let frame = findContentFrame();
let content = await extractContent(frame);
console.log(`\nInitial content: ${content.url}`);
console.log(`  Text: ${content.text}`);
console.log(`  Paragraphs: ${content.paragraphs}`);
fs.writeFileSync(path.join(OUTPUT_DIR, 'initial_content.html'), content.html);

// Find and click the Next button
console.log('\n=== Finding Next button ===');
const nextSelector = 'button[aria-label="Next"]';
const nextBtn = await page.$(nextSelector);
if (nextBtn) {
  console.log('Found Next button!');

  // Click and wait for content to change
  const oldUrl = content.url;
  console.log('Clicking Next...');

  await Promise.all([
    page.waitForFunction(() => {
      const frames = Array.from(window.frames || []);
      for (const f of frames) {
        try {
          if (f.location && f.location.href && f.location.href.includes('epub/OPS')) {
            return true;
          }
        } catch(e) {}
      }
      return false;
    }, null, { timeout: 30000 }).catch(() => {}),
    nextBtn.click()
  ]);
  await page.waitForTimeout(8000);

  frame = findContentFrame();
  if (frame) {
    content = await extractContent(frame);
    console.log(`New content: ${content.url}`);
    console.log(`  Text: ${content.text}`);
    console.log(`  Paragraphs: ${content.paragraphs}`);
    if (content.url !== oldUrl) {
      console.log('  SUCCESS - Page changed!');
      fs.writeFileSync(path.join(OUTPUT_DIR, 'after_next_click.html'), content.html);
    } else {
      console.log('  URL unchanged');
    }
  }
} else {
  console.log('Next button not found, trying different selectors...');

  // Try to find pagination controls
  const pagination = await page.evaluate(() => {
    // Look for any buttons with aria-label Next or containing next/forward text
    const allButtons = Array.from(document.querySelectorAll('button'));
    return allButtons
      .filter(b => {
        const label = b.getAttribute('aria-label') || '';
        const text = b.textContent?.trim() || '';
        return label.toLowerCase().includes('next') || label.toLowerCase().includes('forward') ||
               text.toLowerCase().includes('next') || text.toLowerCase().includes('>');
      })
      .map(b => ({
        aria: b.getAttribute('aria-label'),
        text: b.textContent?.trim(),
        class: b.className,
        visible: b.offsetWidth > 0 && b.offsetHeight > 0
      }));
  });
  console.log(`  Found: ${JSON.stringify(pagination)}`);

  // Try clicking by position - common reader layouts have next/prev on left/right
  const clickableArea = await page.evaluate(() => {
    // Look for overlay or navigation areas
    const overlays = Array.from(document.querySelectorAll('[class*="overlay"], [class*="navigation"], [class*="pager"], [class*="pagination"]'));
    return overlays.map(o => ({ class: o.className, tag: o.tagName }));
  });
  console.log(`  Overlays: ${JSON.stringify(clickableArea)}`);
}

// Test: Use "Skip to book navigation" to access TOC
console.log('\n=== Testing TOC access via "Skip to book navigation" ===');
const skipNav = await page.$('button:has-text("Skip to book navigation")');
if (skipNav) {
  console.log('Found skip nav button, clicking...');
  await skipNav.click();
  await page.waitForTimeout(5000);

  // Look for chapter entries or navigation panel
  const navElements = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('*'));
    const navLike = all.filter(el => {
      const cls = el.className || '';
      const tag = el.tagName;
      return cls.includes('nav') || cls.includes('toc') || cls.includes('chapter') ||
             cls.includes('contents') || cls.includes('bookmark') || cls.includes('page');
    });
    return navLike.slice(0, 30).map(el => ({ tag: el.tagName, class: el.className }));
  });
  console.log(`  Nav-like elements: ${JSON.stringify(navElements, null, 2)}`);

  // Try to find and click the TOC button
  const tocBtn = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    return buttons.map((b, i) => ({
      index: i,
      text: b.textContent?.trim().substring(0, 30),
      aria: b.getAttribute('aria-label'),
      class: b.className,
      visible: b.offsetWidth > 0
    })).filter(b => b.aria || (b.text && b.text.length > 0));
  });
  console.log(`\n  Visible buttons with text/aria: ${JSON.stringify(tocBtn.slice(0, 20), null, 2)}`);
}

// Test: Navigate frame directly with different CFI approach
console.log('\n=== Test: Navigate frame with CFI via reader API ===');
frame = findContentFrame();
if (frame) {
  // Try to use the reader's internal navigation
  const frameContent = await frame.evaluate(() => {
    // Look for navigation or API objects in the frame
    const checks = {
      body: !!document.body,
      bodyContent: document.body ? document.body.innerHTML.substring(0, 100) : null,
      hasChapterNav: !!document.querySelector('[class*="chapter"], [class*="nav"]'),
      hasLinks: Array.from(document.querySelectorAll('a')).length,
      hasScript: Array.from(document.querySelectorAll('script')).length,
      scripts: Array.from(document.querySelectorAll('script')).map(s => ({
        src: s.src,
        content: s.textContent?.substring(0, 100)
      })).filter(s => s.src || s.content),
    };
    return checks;
  });
  console.log(`  Frame content: ${JSON.stringify(frameContent, null, 2)}`);

  // Try using the frame's location to navigate to a different page
  // The reader might respond to location changes
  const currentPage = pages.find(p => p.path.includes('chapter020'));
  console.log(`\n  Current page CFI: ${currentPage?.cfi}`);

  // Try setting location.href within the frame
  const ch1 = frameContent.hasLinks > 0 ? null : null;
  console.log(`  Frame has ${frameContent.hasLinks} links`);

  // Try clicking on links within the frame
  const links = await frame.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href]')).map(a => ({
      text: a.textContent?.trim().substring(0, 30),
      href: a.href,
      class: a.className
    })).filter(l => l.text.length > 0 || l.href);
  });
  console.log(`\n  Links in frame: ${JSON.stringify(links?.slice(0, 10), null, 2)}`);
}

// Test: Click on the page area to see if we can navigate
console.log('\n=== Test: Click right side of reader for next page ===');
const box = await page.viewport_size;
console.log(`  Viewport: ${box.width}x${box.height}`);

// The reader might have click areas for prev/next
for (let i = 0; i < 3; i++) {
  const oldUrl = (findContentFrame() || {}).url || '';
  // Click on right side (next page area)
  await page.mouse.click(box.width - 50, box.height / 2);
  await page.waitForTimeout(8000);
  let newFrame = findContentFrame();
  if (newFrame) {
    const c = await extractContent(newFrame);
    const urlChanged = c.url !== oldUrl;
    console.log(`  Click ${i+1}: ${c.url}`);
    if (urlChanged) {
      console.log(`  SUCCESS! Changed to: ${c.text}`);
      fs.writeFileSync(path.join(OUTPUT_DIR, `click_nav_${i+1}.html`), c.html);
    }
  } else {
    console.log(`  Click ${i+1}: No frame found`);
  }
}

await browser.close();
console.log('\n=== Done ===');
