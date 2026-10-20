const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const BOOKISBN = '9781266607752';
const OUTPUT_DIR = `/root/vitalsource_captures/output_${BOOKISBN}`;
const PAGE_PDF_DIR = path.join(OUTPUT_DIR, 'page_pdfs');

(async () => {
  const bookInfo = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/bookInfo.json`, 'utf8'));
  const tocData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/toc.json`, 'utf8'));
  const pagesData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/pages.json`, 'utf8'));

  const book = bookInfo.books[0];
  console.log(`Book: ${book.title} by ${book.author}`);

  // Filter main content pages
  const mainPages = pagesData.filter(p => {
    return !p.path.includes('accessibility') &&
           !p.path.includes('index.xhtml') &&
           p.linear !== false;
  });
  console.log(`Content pages: ${mainPages.length}`);

  // Authenticate
  console.log('Authenticating...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });
  const page = await context.newPage();

  const bcUrl = `https://bc.vitalsource.com/books/9781266431227?bc_token=61bfec10-aae6-013f-f189-1eb286fc39a0&relaunch_vbid=9781266431227&course_dash_relaunch=true`;
  await page.goto(bcUrl, { timeout: 60000, waitUntil: 'networkidle' });
  await page.waitForTimeout(15000);

  // Generate TOC PDF first
  console.log('Generating TOC...');
  const tocHtml = `
    <html>
    <head>
      <style>
        @page { margin: 0.5in; size: A4; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.4; }
        .cover { text-align: center; padding: 2in 1in; page-break-after: always; }
        .title { font-size: 2.5em; margin: 0.5em 0; }
        .author { font-size: 1.5em; margin: 0.25em 0; color: #555; }
        h2 { border-bottom: 2px solid #333; padding-bottom: 0.5em; margin-top: 1.5em; }
        .toc-item { margin: 0.2em 0; border-bottom: 1px dotted #ccc; font-size: 0.9em; }
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
  await page.setContent(tocHtml, { timeout: 30000 });
  await page.waitForTimeout(500);
  await page.pdf({
    path: path.join(OUTPUT_DIR, 'toc.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
  });
  console.log('TOC PDF generated');

  // Inject header script for page numbers and titles
  await page.addInitScript(() => {
    window._pageHeader = { title: '', pageNum: '' };
  });

  fs.mkdirSync(PAGE_PDF_DIR, { recursive: true });

  let success = 0;
  let failed = 0;
  
  for (let i = 0; i < mainPages.length; i++) {
    const p = mainPages[i];
    const fullUrl = `https://jigsaw.vitalsource.com${p.absoluteURL}`;
    const pdfPath = path.join(PAGE_PDF_DIR, `page_${String(i + 1).padStart(3, '0')}.pdf`);

    try {
      await page.goto(fullUrl, { timeout: 30000, waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1000);

      // Inject page header
      await page.evaluate((title, pageNum) => {
        // Remove any existing header
        const existing = document.getElementById('pdf-page-header');
        if (existing) existing.remove();
        
        const header = document.createElement('div');
        header.id = 'pdf-page-header';
        header.style.cssText = `
          position: fixed;
          top: 10px;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
          z-index: 9999;
        `;
        header.textContent = `${title} (p. ${pageNum})`;
        document.body.insertBefore(header, document.body.firstChild);
        
        // Adjust body margin to account for header
        document.body.style.marginTop = '40px';
      }, p.chapterTitle, p.page);

      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
      });
      success++;
    } catch (e) {
      console.log(`Failed: ${p.chapterTitle} - ${e.message}`);
      failed++;
    }

    if ((i + 1) % 20 === 0) {
      console.log(`Progress: ${i + 1}/${mainPages.length} - Success: ${success}, Failed: ${failed}`);
    }
  }

  await browser.close();
  console.log(`\nPage PDFs: ${success} ok, ${failed} failed`);

  // Merge all PDFs
  console.log('Merging PDFs...');
  const mergedPdf = await PDFDocument.create();

  // Add metadata
  mergedPdf.setTitle(book.title);
  mergedPdf.setAuthor(book.author);
  mergedPdf.setSubject(`${book.title} - ${book.edition}th Edition`);
  mergedPdf.setCreator('VitalSource Book PDF Generator');
  mergedPdf.setProducer('Kilo PDF Generator');

  const pdfOrder = [
    path.join(OUTPUT_DIR, 'toc.pdf'),
    ...Array.from({ length: mainPages.length }, (_, i) => 
      path.join(PAGE_PDF_DIR, `page_${String(i + 1).padStart(3, '0')}.pdf`)
    )
  ];

  let totalPages = 0;
  for (const pdfPath of pdfOrder) {
    if (fs.existsSync(pdfPath)) {
      try {
        const existingPdf = await PDFDocument.load(fs.readFileSync(pdfPath));
        const copiedPages = await mergedPdf.copyPages(existingPdf, existingPdf.getPageIndices());
        copiedPages.forEach(pg => mergedPdf.addPage(pg));
        totalPages += copiedPages.length;
        console.log(`Merged: ${path.basename(pdfPath)} (${copiedPages.length} pages)`);
      } catch (e) {
        console.log(`Merge failed: ${path.basename(pdfPath)} - ${e.message}`);
      }
    }
  }

  const finalPdfPath = path.join(OUTPUT_DIR, `Living_with_Art_Complete_${BOOKISBN}.pdf`);
  const pdfBytes = await mergedPdf.save();
  fs.writeFileSync(finalPdfPath, pdfBytes);

  const stats = fs.statSync(finalPdfPath);
  console.log(`\n=== Book PDF Complete ===`);
  console.log(`File: ${finalPdfPath}`);
  console.log(`Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total PDF pages: ${mergedPdf.getPageCount()}`);

  // Cleanup
  fs.unlinkSync(path.join(OUTPUT_DIR, 'toc.pdf'));
  fs.rmSync(PAGE_PDF_DIR, { recursive: true, force: true });
  console.log('Temporary files cleaned up');
})();
