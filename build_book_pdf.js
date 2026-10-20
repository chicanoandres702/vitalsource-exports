const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const BOOKISBN = '9781266607752';
const OUTPUT_DIR = `/root/vitalsource_captures/output_${BOOKISBN}`;
const PAGES_DIR = path.join(OUTPUT_DIR, 'epub_pages');
const CHUNK_SIZE = 50; // pages per PDF chunk

const CSS_STYLES = `
  <style>
    @page { margin: 0.5in; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.4; color: #000; }
    .page-break { page-break-before: always; }
    h1 { page-break-before: always; }
    .cover-page { text-align: center; padding: 2in 1in; page-break-after: always; }
    .book-title { font-size: 2.5em; margin: 0.5em 0; }
    .book-author { font-size: 1.5em; margin: 0.25em 0; color: #555; }
    .book-meta { font-size: 1.2em; margin: 0.25em 0; color: #666; }
    img { max-width: 100%; height: auto; display: block; margin: 0.5em auto; }
    table { width: 100%; border-collapse: collapse; margin: 0.5em 0; }
    figure { margin: 1em 0; text-align: center; }
    figcaption { font-size: 0.9em; color: #555; margin-top: 0.25em; }
  </style>
`;

async function generateChunkPDF(browser, htmlContent, outputPath) {
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });
  const page = await context.newPage();
  
    await page.setContent(htmlContent, {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });
  
  await page.waitForTimeout(1000);
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
  });
  
  await context.close();
  console.log(`Generated: ${outputPath}`);
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

(async () => {
  const bookInfo = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/bookInfo.json`, 'utf8'));
  const tocData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/toc.json`, 'utf8'));
  const pagesData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/pages.json`, 'utf8'));
  
  const book = bookInfo.books[0];
  console.log(`Book: ${book.title} by ${book.author}`);

  // Build pages map
  const pagesMap = {};
  const allFiles = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
  for (const f of allFiles) {
    const html = fs.readFileSync(path.join(PAGES_DIR, f), 'utf8');
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    pagesMap[f.replace('.html', '')] = bodyMatch ? bodyMatch[1] : html;
  }

  // Filter main content pages
  const mainPages = pagesData.filter(p => {
    return !p.path.includes('accessibility') && 
           !p.path.includes('index.xhtml') &&
           p.linear !== false;
  });

  console.log(`Main content pages: ${mainPages.length}`);

  // Build page contents with metadata
  let pageContents = [];
  for (const p of mainPages) {
    const safeFilename = p.absoluteURL
      .replace(/https:\/\/jigsaw.vitalsource.com\/books\/9781266607752\/epub\//, '')
      .replace(/\//g, '_')
      .replace(/[^\w._-]/g, '_');
    
    const html = pagesMap[safeFilename] || '<p>Content not available</p>';
    pageContents.push({
      title: p.chapterTitle,
      pageNum: p.page,
      path: p.path,
      html: html
    });
  }

  const browser = await chromium.launch({ headless: true });
  
  // 1. Generate TOC PDF
  console.log('Generating TOC...');
  let tocHTML = `
    <html><head>${CSS_STYLES}</head><body>
      <div class="cover-page">
        <h1 class="book-title">${book.title}</h1>
        <p class="book-author">by ${book.author}</p>
        <p class="book-meta">${book.edition}th Edition</p>
        <p class="book-meta">ISBN: ${book.isbn}</p>
      </div>
      <h2>Table of Contents</h2>
      ${tocData.map(item => `
        <div style="margin: 0.1em 0; margin-left: ${(item.level || 1) * 0.5}em; border-bottom: 1px dotted #ccc;">
          ${item.title} ${item.page ? '<span style="float: right;">' + item.page + '</span>' : ''}
        </div>
      `).join('')}
      <div class="page-break"></div>
    </body></html>
  `;

  await generateChunkPDF(browser, tocHTML, `${OUTPUT_DIR}/toc.pdf`);

  // 2. Generate content pages in chunks
  console.log(`Generating ${pageContents.length} content pages in chunks of ${CHUNK_SIZE}...`);
  
  const chunkFiles = [];
  for (let i = 0; i < pageContents.length; i += CHUNK_SIZE) {
    const chunk = pageContents.slice(i, i + CHUNK_SIZE);
    const chunkNum = Math.floor(i / CHUNK_SIZE) + 1;
    
    let chunkHTML = `
      <html><head>${CSS_STYLES}</head><body>
        ${chunk.map((pc, idx) => `
          <div ${i + idx > 0 ? 'class="page-break"' : ''}>
            <h3 style="color: #444; border-bottom: 1px solid #ccc; padding-bottom: 0.25em;">
              ${pc.title || 'Untitled'} ${pc.pageNum ? '(p. ' + pc.pageNum + ')' : ''}
            </h3>
            ${pc.html}
          </div>
        `).join('')}
      </body></html>
    `;
    
    const chunkPath = `${OUTPUT_DIR}/chunk_${chunkNum}.pdf`;
    await generateChunkPDF(browser, chunkHTML, chunkPath);
    chunkFiles.push(chunkPath);
    
    // Clean up HTML to save memory
    chunkHTML = null;
    
    await sleep(500);
  }

  await browser.close();
  console.log('All pages generated, merging PDFs...');

  // 3. Merge all PDFs
  const mergedPdf = await PDFDocument.create();
  const pdfOrder = [`${OUTPUT_DIR}/toc.pdf`, ...chunkFiles];

  for (const pdfPath of pdfOrder) {
    if (fs.existsSync(pdfPath)) {
      const existingPdf = await PDFDocument.load(fs.readFileSync(pdfPath));
      const copiedPages = await mergedPdf.copyPages(existingPdf, existingPdf.getPageIndices());
      copiedPages.forEach(page => mergedPdf.addPage(page));
      console.log(`Merged: ${path.basename(pdfPath)} (${copiedPages.length} pages)`);
    }
  }

  // Set PDF metadata
  mergedPdf.setTitle(book.title);
  mergedPdf.setAuthor(book.author);
  mergedPdf.setSubject(`${book.title} - ${book.edition}th Edition`);
  mergedPdf.setCreator('VitalSource Book PDF Generator');
  mergedPdf.setProducer('Kilo PDF Generator');

  const finalPdfPath = path.join(OUTPUT_DIR, `Living_with_Art_${book.title.replace(/\s+/g, '_')}_${BOOKISBN}.pdf`);
  const pdfBytes = await mergedPdf.save({ useObjectStreams: false });
  fs.writeFileSync(finalPdfPath, pdfBytes);

  const stats = fs.statSync(finalPdfPath);
  console.log(`\n=== Book PDF Complete ===`);
  console.log(`File: ${finalPdfPath}`);
  console.log(`Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total pages: ${mergedPdf.getPageCount()}`);

  // Clean up temp PDFs
  fs.unlinkSync(`${OUTPUT_DIR}/toc.pdf`);
  chunkFiles.forEach(f => fs.unlinkSync(f));
  console.log('Cleaned up temporary files');
})();
