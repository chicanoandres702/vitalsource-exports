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

page.on('console', msg => {
  const text = msg.text();
  if (text.length < 500) console.log(`[PAGE] ${text}`);
});

page.on('pageerror', err => console.log(`[ERROR] ${err.message}`));

console.log('Loading reader...');
await page.goto(BOOK_URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
await page.waitForTimeout(10000);

// Get the iframe
const iframeInfo = await page.evaluate(() => {
  const iframes = Array.from(document.querySelectorAll('iframe'));
  return iframes.map(f => ({ src: f.src, id: f.id, title: f.title, name: f.name, width: f.width, height: f.height }));
});
console.log('Iframes:', JSON.stringify(iframeInfo, null, 2));

// Find the mosaic iframe
const mosaicIframe = iframeInfo.find(f => f.src.includes('mosaic'));
console.log('Mosaic iframe:', mosaicIframe?.src);

if (mosaicIframe) {
  // Wait for the iframe to load and check its content
  console.log('\nWaiting for iframe to load content...');
  await page.waitForTimeout(8000);

  // Try to access the iframe content
  const iframeContent = await page.evaluate((src) => {
    const iframe = Array.from(document.querySelectorAll('iframe')).find(f => f.src.includes('mosaic'));
    if (!iframe) return { error: 'No mosaic iframe found' };

    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) return { error: 'Cannot access iframe document' };

      const body = doc.body;
      if (!body) return { error: 'No body in iframe' };

      return {
        html: body.innerHTML.substring(0, 2000),
        text: body.innerText?.substring(0, 500) || '',
        title: doc.title,
        bodyClasses: body.className,
        elementCount: body.children.length,
      };
    } catch(e) {
      return { error: e.message };
    }
  }, mosaicIframe.src);

  console.log('Iframe content:', JSON.stringify(iframeContent, null, 2));

  // Also try to find content elements in the iframe
  const contentCheck = await page.evaluate(() => {
    const iframe = Array.from(document.querySelectorAll('iframe')).find(f => f.src.includes('mosaic'));
    if (!iframe) return { error: 'No iframe' };
    try {
      const doc = iframe.contentDocument;
      const selectors = [
        '[class*="page"]',
        '[id*="content"]',
        '[class*="epub"]',
        '[class*="chapter"]',
        '.page-content',
        '#page-content',
        '[data-uuid]',
        'section',
        '.mosaic-page',
        '.folio',
        '.reader-content',
      ];
      const found = [];
      for (const sel of selectors) {
        const el = doc?.querySelector(sel);
        if (el) found.push({ selector: sel, tag: el.tagName, classes: el.className, textPreview: el.innerText?.substring(0, 100) || '' });
      }
      return { found, iframeUrl: iframe.src };
    } catch(e) {
      return { error: e.message };
    }
  });
  console.log('Content elements found:', JSON.stringify(contentCheck, null, 2));

  // Try using the Playwright frame API
  const frames = context.pages().flatMap(p => p.frames());
  console.log('\nFrames:', frames.map(f => ({ url: f.url(), name: f.name() })));

  // Wait more for JS rendering
  console.log('\nWaiting more for rendering...');
  await page.waitForTimeout(10000);

  // Check for rendered content again
  const renderedContent = await page.evaluate(() => {
    const iframe = Array.from(document.querySelectorAll('iframe')).find(f => f.src.includes('mosaic'));
    if (!iframe) return { error: 'No iframe' };
    try {
      const doc = iframe.contentDocument;
      const allDivs = doc?.querySelectorAll('div');
      const contentDiv = Array.from(allDivs || []).find(d => d.id === 'page-content' || d.className?.includes('content') || d.className?.includes('page'));
      return {
        totalDivs: allDivs?.length || 0,
        hasPageContent: !!doc?.getElementById('page-content'),
        pageContentHTML: doc?.getElementById('page-content')?.innerHTML?.substring(0, 1000) || '',
        pageContentText: doc?.getElementById('page-content')?.innerText?.substring(0, 200) || '',
        bodyText: doc?.body?.innerText?.substring(0, 500) || '',
      };
    } catch(e) {
      return { error: e.message };
    }
  });
  console.log('Rendered content:', JSON.stringify(renderedContent, null, 2));

  // Take a screenshot of the reader area
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'reader_screenshot.png'), fullPage: true });
  console.log('Screenshot saved: reader_screenshot.png');
}

// Try fetching the TOC and pages directly for API verification
const req = context.request;
try {
  const tocResp = await req.get(`https://jigsaw.vitalsource.com/books/${ISBN}/toc`, {
    headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
  });
  const toc = await tocResp.json();
  console.log(`\nTOC fetched: ${toc.length} entries`);
  console.log(`  Sample entries:`);
  toc.slice(0, 10).forEach((entry, i) => {
    console.log(`    ${i + 1}. [L${entry.level}] ${entry.title} -> ${entry.path}`);
  });
} catch(e) {
  console.log('TOC fetch error:', e.message);
}

await browser.close();
console.log('\n=== Done ===');
