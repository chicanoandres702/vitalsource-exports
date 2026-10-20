const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BOOKISBN = '9781266607752';
const OUTPUT_DIR = `/root/vitalsource_captures/output_${BOOKISBN}`;
const PAGES_DIR = path.join(OUTPUT_DIR, 'epub_pages');

// CSS to ensure proper page breaks and styling
const CSS_STYLES = `
  <style>
    @page { 
      size: A4; 
      margin: 0.75in;
      @bottom-center { content: counter(page); } 
    }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      line-height: 1.4; 
      color: #000; 
      background: #fff;
    }
    .page-break { 
      page-break-before: always; 
    }
    h1 { page-break-before: always; }
    h2 { page-break-after: always; }
    .toc-item { margin-left: 1em; }
    .toc-item.level-1 { margin-left: 0.5em; }
    .toc-item.level-2 { margin-left: 1.5em; }
    .toc-item.level-3 { margin-left: 2.5em; }
    img { max-width: 100%; height: auto; }
    table { width: 100%; border-collapse: collapse; }
    .cover-page { 
      text-align: center; 
      padding: 2in 1in; 
      page-break-after: always; 
    }
    .book-title { font-size: 2.5em; margin: 0.5em 0; }
    .book-author { font-size: 1.5em; margin: 0.25em 0; color: #555; }
    .book-meta { font-size: 1.2em; margin: 0.25em 0; color: #666; }
  </style>
`;

(async () => {
  // Load metadata
  const bookInfo = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/bookInfo.json`, 'utf8'));
  const tocData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/toc.json`, 'utf8'));
  const pagesData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/pages.json`, 'utf8'));
  
  const book = bookInfo.books[0];
  console.log(`Book: ${book.title} by ${book.author}`);

  // Create lookup from filename to page HTML
  const pagesMap = {};
  const allFiles = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
  for (const f of allFiles) {
    const html = fs.readFileSync(path.join(PAGES_DIR, f), 'utf8');
    // Extract the body content (strip epub HTML structure)
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    pagesMap[f.replace('.html', '')] = bodyMatch ? bodyMatch[1] : html;
  }

  // Build complete HTML document
  console.log('Building complete book HTML...');

  // Generate TOC HTML
  let tocHTML = `
    <div class="toc-section">
      <h2>Table of Contents</h2>
      ${tocData.map(item => `
        <div class="toc-item level-${(item.level || 1) - 1}" style="margin-left: ${(item.level || 1) * 0.5}em;">
          ${item.title} ${item.page ? '(p. ' + item.page + ')' : ''}
        </div>
      `).join('')}
    </div>
    <div class="page-break"></div>
  `;

  // Build page content - filter out accessibility content and index
  const mainPages = pagesData.filter(p => {
    return !p.path.includes('accessibility') && 
           !p.path.includes('index.xhtml') &&
           p.linear !== false;
  });

  console.log(`Pages to include: ${mainPages.length}`);

  let pageContents = [];
  for (const p of mainPages) {
    const safeFilename = p.absoluteURL
      .replace(/https:\/\/jigsaw.vitalsource.com\/books\/9781266607752\/epub\//, '')
      .replace(/\//g, '_')
      .replace(/[^\w._-]/g, '_');
    
    const html = pagesMap[safeFilename] || '';
    pageContents.push({
      title: p.chapterTitle,
      page: p.page,
      html: html
    });
  }

  // Build full HTML
  const fullHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${book.title}</title>
      ${CSS_STYLES}
    </head>
    <body>
      <div class="cover-page">
        <h1 class="book-title">${book.title}</h1>
        <p class="book-author">by ${book.author}</p>
        <p class="book-meta">${book.edition}th Edition</p>
        <p class="book-meta">ISBN: ${book.isbn}</p>
        <p style="margin-top: 2em; color: #888; font-size: 0.9em;">Generated from VitalSource EPUB</p>
      </div>
      
      ${tocHTML}
      
      ${pageContents.map((pc, idx) => `
        <div class="page-content ${idx > 0 ? 'page-break' : ''}">
          ${pc.html}
        </div>
      `).join('\n')}
    </body>
    </html>
  `;

  // Save the combined HTML for reference
  fs.writeFileSync(`${OUTPUT_DIR}/combined_book.html`, fullHTML);
  console.log(`Combined HTML saved: ${fullHTML.length} bytes`);

  // Generate PDF with Playwright
  console.log('Launching browser for PDF generation...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });

  const page = await context.newPage();
  
  // Set the HTML content
  await page.setContent(fullHTML, {
    waitUntil: 'networkidle',
    timeout: 60000
  }).catch(e => console.log('Content load warning:', e.message));

  // Wait for a moment
  await page.waitForTimeout(2000);

  // Generate the single PDF
  const pdfPath = path.join(OUTPUT_DIR, `living_with_art_${BOOKISBN}.pdf`);
  console.log('Generating PDF...');
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    includeTags: true,
    displayWidth: 1200,
    displayHeight: 1600,
    margin: {
      top: '0.75in',
      right: '0.75in',
      bottom: '0.75in',
      left: '0.75in'
    }
  });

  const stats = fs.statSync(pdfPath);
  console.log(`\n=== PDF Generated ===`);
  console.log(`Path: ${pdfPath}`);
  console.log(`Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

  await browser.close();
  console.log('Done!');
})();
