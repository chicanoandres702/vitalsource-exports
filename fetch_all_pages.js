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

  // Get page list from the already captured pages.json
  const pagesData = JSON.parse(fs.readFileSync(`${OUTPUT_DIR}/pages.json`, 'utf8'));
  console.log(`Total pages to fetch: ${pagesData.length}`);

  // Fetch each page's HTML content using the browser context
  const results = await page.evaluate(async (pages) => {
    const results = [];
    let count = 0;
    for (const p of pages) {
      try {
        const fullUrl = `https://jigsaw.vitalsource.com${p.absoluteURL}`;
        // Fetch with cache-busting
        const resp = await fetch(fullUrl + '?_t=' + Date.now(), {
          credentials: 'include',
          headers: { 'x-vitalsource-brand': 'capella' }
        });
        if (resp.ok) {
          const html = await resp.text();
          results.push({ 
            url: fullUrl, 
            title: p.chapterTitle,
            page: p.page,
            html, 
            status: 'ok',
            size: html.length 
          });
        } else {
          results.push({ url: fullUrl, title: p.chapterTitle, page: p.page, status: 'fail', error: resp.status });
        }
      } catch (e) {
        results.push({ url: p.absoluteURL, title: p.chapterTitle, page: p.page, status: 'error', error: e.message });
      }
      count++;
      if (count % 25 === 0) {
        console.log(`Fetched ${count}/${pages.length} pages...`);
      }
      // Small delay
      await new Promise(r => setTimeout(r, 10));
    }
    return results;
  }, pagesData);

  console.log('\n=== Fetch Summary ===');
  const okCount = results.filter(r => r.status === 'ok').length;
  const failCount = results.filter(r => r.status !== 'ok').length;
  console.log(`Success: ${okCount}, Failed: ${failCount}`);

  // Save all page content
  const pagesDir = path.join(OUTPUT_DIR, 'epub_pages');
  fs.mkdirSync(pagesDir, { recursive: true });
  
  for (const result of results) {
    if (result.status === 'ok') {
      const filename = result.url.replace(/https:\/\/jigsaw.vitalsource.com\/books\/9781266607752\/epub\//, '').replace(/\//g, '_').replace(/[^\w._-]/g, '_') + '.html';
      fs.writeFileSync(path.join(pagesDir, filename), result.html);
    }
  }

  // Save summary
  fs.writeFileSync(path.join(OUTPUT_DIR, 'fetch_results.json'), JSON.stringify(results, null, 2));
  
  console.log(`\nPages saved to: ${pagesDir}`);
  console.log(`Results saved to: ${path.join(OUTPUT_DIR, 'fetch_results.json')}`);

  await browser.close();
})();
