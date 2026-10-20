const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BOOKISBN = '9781266607752';
const OUTPUT_DIR = `/root/vitalsource_captures/output_${BOOKISBN}`;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });
  
  const page = await context.newPage();
  
  // Collect all API responses
  const responses = {
    pagebreaks: null,
    pages: null,
    toc: null,
    bookInfo: null
  };
  
  const allEpubPages = new Set();
  const pageContent = {};

  page.on('response', async (response) => {
    const url = response.url();
    
    // Capture pagebreaks
    if (url.includes(`/books/${BOOKISBN}/pagebreaks`)) {
      const body = await response.text();
      responses.pagebreaks = body;
      console.log('GOT PAGEBREAKS:', body.substring(0, 200));
    }
    
    // Capture pages.json
    if (url.includes(`/books/${BOOKISBN}/pages.json`) || (url.includes(`/books/${BOOKISBN}/pages`) && !url.includes('recent') && !url.includes('epub'))) {
      const body = await response.text();
      responses.pages = body;
      console.log('GOT PAGES:', body.substring(0, 200));
    }
    
    // Capture toc
    if (url.includes(`/books/${BOOKISBN}/toc`)) {
      const body = await response.text();
      responses.toc = body;
      console.log('GOT TOC:', body.substring(0, 200));
    }
    
    // Capture book info
    if (url.includes('/info/books.json') && url.includes(BOOKISBN)) {
      const body = await response.text();
      responses.bookInfo = body;
      console.log('GOT BOOK INFO:', body.substring(0, 200));
    }
    
    // Capture EPUB pages
    if (url.includes(`/books/${BOOKISBN}/epub/`) && url.endsWith('.xhtml')) {
      const body = await response.text();
      allEpubPages.add(url);
      pageContent[url] = body;
      console.log('GOT EPAGES:', url, body.length, 'bytes');
    }
  });

  const bcUrl = `https://bc.vitalsource.com/books/9781266431227?bc_token=61bfec10-aae6-013f-f189-1eb286fc39a0&relaunch_vbid=9781266431227&course_dash_relaunch=true`;
  console.log('Navigating to reader page...');
  await page.goto(bcUrl, { timeout: 60000, waitUntil: 'networkidle' });
  
  // Wait for the reader to load
  console.log('Waiting for reader to initialize...');
  await page.waitForTimeout(20000);
  
  // Save captured data
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUTPUT_DIR, 'pagebreaks.json'), responses.pagebreaks || 'null');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'pages.json'), responses.pages || 'null');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'toc.json'), responses.toc || 'null');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'bookInfo.json'), responses.bookInfo || 'null');
  
  // Save all EPUB page content
  const pagesDir = path.join(OUTPUT_DIR, 'pages');
  fs.mkdirSync(pagesDir, { recursive: true });
  for (const [url, content] of Object.entries(pageContent)) {
    const filename = url.replace(/https:\/\/jigsaw.vitalsource.com\/books\/9781266607752\/epub\//, '').replace(/\//g, '_') + '.html';
    fs.writeFileSync(path.join(pagesDir, filename), content);
  }
  
  console.log('\n=== SUMMARY ===');
  console.log('Pagebreaks:', responses.pagebreaks ? 'captured' : 'MISSING');
  console.log('Pages:', responses.pages ? 'captured' : 'MISSING');
  console.log('TOC:', responses.toc ? 'captured' : 'MISSING');
  console.log('Book Info:', responses.bookInfo ? 'captured' : 'MISSING');
  console.log('EPUB pages captured:', allEpubPages.size);
  console.log('Output dir:', OUTPUT_DIR);

  await browser.close();
})();
