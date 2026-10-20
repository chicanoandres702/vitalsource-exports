const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const BOOKISBN = '9781266607752';
const OUTPUT_DIR = `/root/vitalsource_captures/output_${BOOKISBN}`;
const CHUNK_SIZE = 30;

(async () => {
  const bookInfo = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/bookInfo.json`, 'utf8'));
  const tocData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/toc.json`, 'utf8'));
  const pagesData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/pages.json`, 'utf8'));

  const book = bookInfo.books[0];
  console.log(`Book: ${book.title} by ${book.author}`);

  // Load and authenticate the browser context
  console.log('Authenticating browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });
  const page = await context.newPage();

  const bcUrl = `https://bc.vitalsource.com/books/9781266431227?bc_token=61bfec10-aae6-013f-f189-1eb286fc39a0&relaunch_vbid=9781266431227&course_dash_relaunch=true`;
  await page.goto(bcUrl, { timeout: 60000, waitUntil: 'networkidle' });
  await page.waitForTimeout(15000);
  console.log('Authenticated successfully');

  // Filter main content pages
  const mainPages = pagesData.filter(p => {
    return !p.path.includes('accessibility') &&
           !p.path.includes('index.xhtml') &&
           p.linear !== false;
  });
  console.log(`Main content pages: ${mainPages.length}`);

  let successCount = 0;
  let failCount = 0;

  // Generate TOC PDF
  console.log('Generating TOC...');
  const tocHtml = `
    <html>
    <head>
      <style>
        @page { margin: 0.5in; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.4; }
        .cover { text-align: center; padding: 2in 1in; page-break-after: always; }
        .title { font-size: 2.5em; margin: 0.5em 0; }
        .author { font-size: 1.5em; margin: 0.25em 0; color: #555; }
        h2 { border-bottom: 2px solid #333; padding-bottom: 0.5em; }
        .toc-item { margin: 0.2em 0; border-bottom: 1px dotted #ccc; }
      </style>
    </head>
    <body>
      <div class="cover">
        <h1 class="title">${book.title}</h1>
        <p class="author">by ${book.author}</p>
        <p style="font-size: 1.2em; color: #666;">${book.edition}th Edition</p>
        <p style="font-size: 1em; color: #666;">ISBN: ${book.isbn}</p>
      </div>
      <h2>Table of Contents</h2>
      ${tocData.map(item => `
        <div class="toc-item" style="margin-left: ${(item.level || 1) * 0.5}em;">
          ${item.title}
          <span style="float: right;">${item.page || ''}</span>
        </div>
      `).join('')}
      <div style="page-break-after: always;"></div>
    </body>
    </html>
  `;

  await page.setContent(tocHtml, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1000);
  await page.pdf({
    path: `${OUTPUT_DIR}/toc.pdf`,
    format: 'A4',
    printBackground: true,
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
  });
  console.log('TOC PDF generated');

  // Generate content PDFs in chunks
  const chunkFiles = [];
  for (let i = 0; i < mainPages.length; i += CHUNK_SIZE) {
    const chunk = mainPages.slice(i, i + CHUNK_SIZE);
    const chunkNum = Math.floor(i / CHUNK_SIZE) + 1;
    console.log(`Processing chunk ${chunkNum} (pages ${i+1}-${i+chunk.length})...`);

    for (let j = 0; j < chunk.length; j++) {
      const p = chunk[j];
      try {
        const fullUrl = `https://jigsaw.vitalsource.com${p.absoluteURL}`;
        await page.goto(fullUrl, { timeout: 30000, waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(500);

        // Inject page title header
        await page.evaluate((title, pageNum) => {
          const style = document.createElement('style');
          style.textContent = `
            body { margin-top: 40px !important; }
            .page-header {
              position: fixed;
              top: 10px;
              left: 0;
              right: 0;
              text-align: center;
              font-size: 14px;
              color: #666;
              border-bottom: 1px solid #ccc;
              padding-bottom: 5px;
              z-index: 9999;
            }
          `;
          document.head.appendChild(style);

          const header = document.createElement('div');
          header.className = 'page-header';
          header.textContent = `${title} (p. ${pageNum})`;
          document.body.insertBefore(header, document.body.firstChild);
        }, p.chapterTitle, p.page);

      } catch (e) {
        console.log(`  Failed to load page: ${p.chapterTitle} - ${e.message}`);
        failCount++;
      }
    }

    // Generate PDF for this chunk
    const chunkPath = `${OUTPUT_DIR}/chunk_${chunkNum}.pdf`;
    try {
      await page.pdf({
        path: chunkPath,
        format: 'A4',
        printBackground: true,
        displayWidth: 1200,
        margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
      });
      chunkFiles.push(chunkPath);
      successCount += chunk.length;
      console.log(`  Chunk PDF generated: ${chunk.length} pages`);
    } catch (e) {
      console.log(`  Chunk PDF failed: ${e.message}`);
      failCount += chunk.length;
    }
  }

  await browser.close();
  console.log(`\nPages: ${successCount} ok, ${failCount} failed`);

  // Merge PDFs
  console.log('Merging PDFs...');
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

  const finalPdfPath = path.join(OUTPUT_DIR, `${book.title.replace(/\s+/g, '_')}_${BOOKISBN}.pdf`);
  const pdfBytes = await mergedPdf.save();
  fs.writeFileSync(finalPdfPath, pdfBytes);

  const stats = fs.statSync(finalPdfPath);
  console.log(`\n=== Book PDF Complete ===`);
  console.log(`File: ${finalPdfPath}`);
  console.log(`Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total PDF pages: ${mergedPdf.getPageCount()}`);

  // Cleanup
  fs.unlinkSync(`${OUTPUT_DIR}/toc.pdf`);
  chunkFiles.forEach(f => { if (fs.existsSync(f)) fs.unlinkSync(f); });
  console.log('Temporary files cleaned up');
})();
