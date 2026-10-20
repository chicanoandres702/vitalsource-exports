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

  // Load the reader page to get authenticated cookies
  const bcUrl = `https://bc.vitalsource.com/books/9781266431227?bc_token=61bfec10-aae6-013f-f189-1eb286fc39a0&relaunch_vbid=9781266431227&course_dash_relaunch=true`;
  console.log('Loading reader page to authenticate...');
  await page.goto(bcUrl, { timeout: 60000, waitUntil: 'networkidle' });
  await page.waitForTimeout(15000);

  // Use the context's APIRequestContext which shares cookies with the browser
  const requestContext = await context.request;

  // Get page list
  const pagesData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/pages.json`, 'utf8'));
  console.log(`Total pages to fetch: ${pagesData.length}`);

  const pagesDir = path.join(OUTPUT_DIR, 'epub_pages');
  fs.mkdirSync(pagesDir, { recursive: true });
  
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < pagesData.length; i++) {
    const p = pagesData[i];
    const fullUrl = `https://jigsaw.vitalsource.com${p.absoluteURL}`;
    const safeFilename = p.absoluteURL.replace(/https:\/\/jigsaw.vitalsource.com\/books\/9781266607752\/epub\//, '').replace(/\//g, '_').replace(/[^\w._-]/g, '_') + '.html';
    
    try {
      const response = await requestContext.get(fullUrl, {
        headers: {
          'x-vitalsource-brand': 'capella',
          'x-vitalsource-sed': 'secure'
        }
      });
      
      if (response.ok()) {
        const html = await response.text();
        fs.writeFileSync(path.join(pagesDir, safeFilename), html);
        successCount++;
      } else {
        console.log(`Failed (${response.status()}): ${p.chapterTitle}`);
        failCount++;
      }
    } catch (e) {
      console.log(`Error: ${p.chapterTitle} - ${e.message}`);
      failCount++;
    }
    
    if ((i + 1) % 25 === 0) {
      console.log(`Progress: ${i + 1}/${pagesData.length} - Success: ${successCount}, Failed: ${failCount}`);
    }
  }

  console.log(`\n=== Final Summary ===`);
  console.log(`Success: ${successCount}, Failed: ${failCount}`);
  console.log(`Pages saved to: ${pagesDir}`);
  
  await browser.close();
})();
