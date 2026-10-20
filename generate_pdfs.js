const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

const BOOKISBN = '9781266607752';
const OUTPUT_DIR = `/root/vitalsource_captures/output_${BOOKISBN}`;
const PAGES_DIR = path.join(OUTPUT_DIR, 'epub_pages');
const PDF_DIR = path.join(OUTPUT_DIR, 'pdfs');

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

(async () => {
  fs.mkdirSync(PDF_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });

  const page = await context.newPage();

  // Load the pages.json to get metadata
  const pagesData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/pages.json`, 'utf8'));

  // Create lookup from filename to page metadata
  const pageMap = {};
  for (const p of pagesData) {
    const safeFilename = p.absoluteURL.replace(/https:\/\/jigsaw.vitalsource.com\/books\/9781266607752\/epub\//, '').replace(/\//g, '_').replace(/[^\w._-]/g, '_') + '.html';
    pageMap[safeFilename] = p;
  }

  // Get all HTML files and sort them by page number
  const files = fs.readdirSync(PAGES_DIR)
    .filter(f => f.endsWith('.html'))
    .map(f => ({
      filename: f,
      pageNum: parseInt(pageMap[f]?.page) || 0,
      title: pageMap[f]?.chapterTitle || 'Unknown'
    }))
    .sort((a, b) => a.pageNum - b.pageNum);

  console.log(`Generating PDFs for ${files.length} pages...`);

  // Process in batches to avoid memory issues
  const BATCH_SIZE = 10;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const htmlPath = path.join(PAGES_DIR, file.filename);
    const pdfPath = path.join(PDF_DIR, file.filename.replace('.html', '.pdf'));

    try {
      const htmlContent = fs.readFileSync(htmlPath, 'utf8');
      
      // Load HTML into the page
      await page.setContent(htmlContent, {
        waitUntil: 'networkidle',
        timeout: 30000
      }).catch(() => {}); // Ignore timeout errors from networkidle

      // Wait a bit for any dynamic content
      await sleep(500);

      // Generate PDF
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '0.75in',
          right: '0.75in',
          bottom: '0.75in',
          left: '0.75in'
        }
      });

      successCount++;
    } catch (e) {
      console.log(`Failed: ${file.title} - ${e.message}`);
      failCount++;
    }

    if ((i + 1) % 10 === 0) {
      console.log(`Progress: ${i + 1}/${files.length} - Success: ${successCount}, Failed: ${failCount}`);
    }
  }

  console.log(`\n=== Final Summary ===`);
  console.log(`PDFs generated: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Output: ${PDF_DIR}`);

  await browser.close();
})();
