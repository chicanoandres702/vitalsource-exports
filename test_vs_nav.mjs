import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const ISBN = '9781266607752';
const BOOK_URL = 'https://bc.vitalsource.com/books/9781266431227?bc_token=20d783c0-abea-013f-889a-6ecc5aef212c&relaunch_vbid=9781266431227&course_dash_relaunch=true';
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
  console.log('Reader loaded at:', page.url());
} catch(e) {
  console.log('Current URL:', page.url());
}

console.log('Waiting for initial content to render...');
await page.waitForTimeout(15000);

// Get the content frame and try navigating to a different chapter
const contentFrame = await page.frame({ url: /epub\/OPS/ });
if (!contentFrame) {
  console.log('No content frame found!');
  // Try to find it after waiting more
  await page.waitForTimeout(10000);
}

// Get the current content frame
const frames = context.pages().flatMap(p => p.frames());
const epubFrames = frames.filter(f => f.url().includes('epub/OPS'));
console.log(`\nFound ${epubFrames.length} EPUB frames`);

if (epubFrames.length > 0) {
  const frame = epubFrames[0];
  console.log(`Initial frame: ${frame.url()}`);

  // Extract current chapter content
  let content = await frame.evaluate(() => {
    const body = document.body;
    return {
      text: body.innerText?.substring(0, 200) || '',
      paragraphs: document.querySelectorAll('p').length,
      images: document.querySelectorAll('img').length,
    };
  });
  console.log(`Current content: ${JSON.stringify(content)}`);

  // Try navigating the frame to a different chapter
  // Chapter 2 (chapter02)
  const chapters = [
    { name: 'move_beyond', path: 's9ml/chapter01/move_beyond.xhtml' },
    { name: 'chapter4', path: 's9ml/chapter02/chapter4.xhtml' },
  ];

  for (const ch of chapters) {
    const chapterUrl = `https://jigsaw.vitalsource.com/books/${ISBN}/epub/OPS/${ch.path}?favre=brett`;
    console.log(`\nNavigating frame to: ${chapterUrl}`);

    try {
      await frame.goto(chapterUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(3000);

      const newContent = await frame.evaluate(() => {
        const body = document.body;
        const html = body.innerHTML;
        return {
          url: window.location.href,
          text: body.innerText?.substring(0, 300) || '',
          paragraphs: document.querySelectorAll('p').length,
          images: document.querySelectorAll('img').length,
          headings: document.querySelectorAll('h1,h2,h3,h4').length,
          htmlLength: html.length,
        };
      });
      console.log(`  Content: ${JSON.stringify(newContent)}`);

      // Save the HTML
      const fullHtml = await frame.evaluate(() => document.documentElement.outerHTML);
      const safeName = ch.name + '_' + Date.now();
      fs.writeFileSync(path.join(OUTPUT_DIR, `chapter_${safeName}.html`), fullHtml);
      console.log(`  Saved: chapter_${safeName}.html (${fullHtml.length} bytes)`);
    } catch(e) {
      console.log(`  Error: ${e.message}`);
    }
  }
}

// Also test using the reader's navigation API (page.evaluate)
console.log('\n=== Testing reader navigation API ===');
const navResult = await page.evaluate(async () => {
  try {
    // Try to access VST or reader API
    if (window.VST) {
      return { hasVST: true, keys: Object.keys(window.VST) };
    }
    // Try common reader APIs
    const checks = {};
    ['Book', 'Reader', 'Mosaic', 'VST', 'EPUB'].forEach(name => {
      checks[name] = typeof window[name] !== 'undefined';
    });
    return { hasVST: false, checks };
  } catch(e) {
    return { error: e.message };
  }
});
console.log('Nav result:', JSON.stringify(navResult, null, 2));

await browser.close();
console.log('\n=== Done ===');
