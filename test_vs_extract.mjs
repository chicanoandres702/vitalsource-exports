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
  viewport: { width: 1280, height: 800 }
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

console.log('Waiting for content to render...');
await page.waitForTimeout(15000);

// Get all frames
const allFrames = context.pages().flatMap(p => p.frames());
console.log('\nAll frames:');
for (const frame of allFrames) {
  console.log(`  ${frame.url()}`);
}

// Try to find the EPUB content frame
const contentFrames = allFrames.filter(f => f.url().includes('epub/OPS'));
console.log(`\nEPUB content frames: ${contentFrames.length}`);

if (contentFrames.length > 0) {
  const contentFrame = contentFrames[0];
  console.log(`Content frame URL: ${contentFrame.url()}`);

  // Extract rendered content from the frame
  const frameContent = await contentFrame.evaluate(() => {
    const body = document.body;
    const html = body.innerHTML;
    const text = body.innerText || '';

    // Check for real content elements
    const elements = {
      paragraphs: document.querySelectorAll('p').length,
      images: document.querySelectorAll('img').length,
      headings: document.querySelectorAll('h1, h2, h3, h4').length,
      sections: document.querySelectorAll('section').length,
      figures: document.querySelectorAll('figure').length,
    };

    return {
      url: window.location.href,
      htmlLength: html.length,
      textLength: text.length,
      elements,
      htmlPreview: html.substring(0, 2000),
      textPreview: text.substring(0, 500),
    };
  });

  console.log(`\nFrame content:`);
  console.log(`  URL: ${frameContent.url}`);
  console.log(`  HTML length: ${frameContent.htmlLength}`);
  console.log(`  Text length: ${frameContent.textLength}`);
  console.log(`  Elements: ${JSON.stringify(frameContent.elements)}`);
  console.log(`  Text preview: ${frameContent.textPreview}`);

  // Save full HTML
  const fullHtml = await contentFrame.evaluate(() => document.documentElement.outerHTML);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'rendered_chapter.html'), fullHtml);
  console.log(`  Full HTML saved: rendered_chapter.html (${fullHtml.length} bytes)`);

  // Check if images have proper src
  const imgInfo = await contentFrame.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      width: img.width,
      height: img.height,
    }));
  });
  console.log(`\n  Images: ${imgInfo.length}`);
  if (imgInfo.length > 0) {
    console.log(`  First image: ${JSON.stringify(imgInfo[0])}`);
    console.log(`  All image srcs:`, imgInfo.map(i => i.src));
  }

  // Check CSS links
  const cssLinks = await contentFrame.evaluate(() => {
    return Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => link.href);
  });
  console.log(`\n  CSS links: ${cssLinks.length}`);
  if (cssLinks.length > 0) {
    console.log(`  CSS: ${cssLinks.join(', ')}`);
  }
}

// Also test: navigate directly to a chapter URL
console.log('\n=== Testing direct chapter navigation ===');
const chapterUrl = `https://jigsaw.vitalsource.com/books/${ISBN}/epub/OPS/s9ml/chapter01/move_beyond.xhtml`;
console.log(`Navigating to: ${chapterUrl}`);

// Use a new page for this
const page2 = await context.newPage();
try {
  const resp2 = await page2.goto(chapterUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  console.log(`  Status: ${resp2?.status()}`);
  console.log(`  Content-Type: ${resp2?.headers()['content-type']}`);

  const content = await page2.evaluate(() => {
    const body = document.body;
    const html = body.innerHTML;
    return {
      htmlLength: html.length,
      hasP: html.includes('<p'),
      hasImg: html.includes('<img'),
      hasPageContent: !!document.getElementById('page-content'),
      pageContentText: document.getElementById('page-content')?.innerText?.substring(0, 200) || '',
    };
  });
  console.log(`  Content:`, JSON.stringify(content, null, 2));
} catch(e) {
  console.log(`  Error: ${e.message}`);
}

await page2.close();
await browser.close();
console.log('\n=== Done ===');
