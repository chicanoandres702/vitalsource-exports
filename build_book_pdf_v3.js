const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const BOOKISBN = '9781266607752';
const OUTPUT_DIR = `/root/vitalsource_captures/output_${BOOKISBN}`;

(async () => {
  const bookInfo = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/bookInfo.json`, 'utf8'));
  const tocData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/toc.json`, 'utf8'));
  const pagesData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/pages.json`, 'utf8'));

  const book = bookInfo.books[0];
  console.log(`Book: ${book.title} by ${book.author}`);
  console.log(`Total pages in book: ${pagesData.length}`);

  // Load and authenticate
  console.log('Authenticating browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });
  const page = await context.newPage();

  const bcUrl = `https://bc.vitalsource.com/books/9781266431227?bc_token=61bfec10-aae6-013f-f189-1eb286fc39a0&relaunch_vbid=9781266431227&course_dash_relaunch=true`;
  await page.goto(bcUrl, { timeout: 60000, waitUntil: 'networkidle' });
  await page.waitForTimeout(15000);
  console.log('Authenticated');

  // Filter main content pages
  const mainPages = pagesData.filter(p => {
    return !p.path.includes('accessibility') &&
           !p.path.includes('index.xhtml') &&
           p.linear !== false;
  });
  console.log(`Content pages to convert: ${mainPages.length}`);

  // Generate TOC
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
        h2 { border-bottom: 2px solid #333; padding-bottom: 0.5em; margin-top: 1em; }
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

  await page.setContent(tocHtml, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(500);

  // Generate page PDFs in batches
  const pagePdfs = [];
  const CHUNK_SIZE = 10;
  
  for (let chunkStart = 0; chunkStart < mainPages.length; chunkStart += CHUNK_SIZE) {
    const chunk = mainPages.slice(chunkStart, chunkStart + CHUNK_SIZE);
    console.log(`Processing chunk: pages ${chunkStart+1}-${chunkStart + chunk.length}...`);
    
    // Build combined HTML for this chunk
    let chunkHTMLParts = [];
    for (let j = 0; j < chunk.length; j++) {
      const p = chunk[j];
      const fullUrl = `https://jigsaw.vitalsource.com${p.absoluteURL}`;
      
      try {
        await page.goto(fullUrl, { timeout: 30000, waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(500);
        
        // Extract the page content
        const pageContent = await page.evaluate(() => {
          // Strip head and body tags, just get inner content
          // Also fix image URLs to be absolute
          const clone = document.body.cloneNode(true);
          
          // Fix image sources to be absolute
          const imgs = clone.querySelectorAll('img');
          imgs.forEach(img => {
            if (img.src && img.src.startsWith('/')) {
              img.src = 'https://jigsaw.vitalsource.com' + img.src;
            }
          });
          
          // Fix other resource URLs
          const links = clone.querySelectorAll('link[href^="/"]');
          links.forEach(link => {
            link.href = 'https://jigsaw.vitalsource.com' + link.href;
          });
          
          // Remove scripts
          const scripts = clone.querySelectorAll('script');
          scripts.forEach(s => s.remove());
          
          // Get the EPUB CSS from the page's stylesheets
          let cssText = '';
          const sheets = document.styleSheets;
          for (let i = 0; i < sheets.length; i++) {
            try {
              const rules = sheets[i].cssRules || sheets[i].rules;
              if (rules) {
                for (let r = 0; r < rules.length; r++) {
                  cssText += rules[r].cssText + '\n';
                }
              }
            } catch (e) {
              // Cross-origin CSS might fail
            }
          }
          
          return {
            html: clone.innerHTML,
            css: cssText
          };
        });
        
        chunkHTMLParts.push({
          title: p.chapterTitle,
          page: p.page,
          html: pageContent.html,
          css: pageContent.css
        });
        
      } catch (e) {
        console.log(`  Failed to load ${p.chapterTitle}: ${e.message}`);
        chunkHTMLParts.push({
          title: p.chapterTitle,
          page: p.page,
          html: '<p>Content could not be loaded</p>',
          css: ''
        });
      }
    }
    
    // Build chunk HTML
    const chunkHtml = `
      <html><head>
        <style>
          @page { margin: 0.5in; size: A4; }
          body { font-family: Arial, sans-serif; line-height: 1.4; }
          .page-break { page-break-before: always; }
          .page-title { 
            text-align: center; 
            font-size: 0.8em; 
            color: #666; 
            margin: 0.5em 0; 
            border-bottom: 1px solid #ccc;
          }
          img { max-width: 100%; height: auto; }
          table { width: 100%; border-collapse: collapse; }
          figure { margin: 0.5em 0; text-align: center; }
          figcaption { font-size: 0.8em; color: #555; }
        </style>
        ${chunkHTMLParts.map(p => `<style>${p.css}</style>`).join('')}
      </head><body>
        ${chunkHTMLParts.map((pc, idx) => `
          <div ${idx > 0 ? 'class="page-break"' : ''}>
            <div class="page-title">${pc.title} (p. ${pc.page})</div>
            ${pc.html}
          </div>
        `).join('')}
      </body></html>
    `;
    
    const chunkPdfPath = `${OUTPUT_DIR}/chunk_${chunkStart / CHUNK_SIZE + 1}.pdf`;
    try {
      await page.setContent(chunkHtml, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(2000);
      await page.pdf({
        path: chunkPdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
      });
      pagePdfs.push(chunkPdfPath);
      console.log(`  Generated PDF chunk`);
    } catch (e) {
      console.log(`  PDF generation failed: ${e.message}`);
    }
  }

  // Generate TOC PDF
  const tocPdfPath = `${OUTPUT_DIR}/toc.pdf`;
  await page.setContent(tocHtml, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(500);
  await page.pdf({
    path: tocPdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
  });
  console.log('TOC PDF generated');

  await browser.close();

  // Merge all PDFs
  console.log('Merging PDFs...');
  const mergedPdf = await PDFDocument.create();
  const pdfOrder = [tocPdfPath, ...pagePdfs];

  for (const pdfPath of pdfOrder) {
    if (fs.existsSync(pdfPath)) {
      try {
        const existingPdf = await PDFDocument.load(fs.readFileSync(pdfPath));
        const copiedPages = await mergedPdf.copyPages(existingPdf, existingPdf.getPageIndices());
        copiedPages.forEach(p => mergedPdf.addPage(p));
        console.log(`Merged: ${path.basename(pdfPath)} (${copiedPages.length} pages)`);
      } catch (e) {
        console.log(`Merge failed for ${pdfPath}: ${e.message}`);
      }
    }
  }

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

  // Cleanup temp files
  [tocPdfPath, ...pagePdfs].forEach(f => {
    if (fs.existsSync(f)) fs.unlinkSync(f);
  });
  console.log('Temp files cleaned');
})();
