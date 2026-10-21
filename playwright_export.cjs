const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ISBN = '9781266607752';
const JIGSAW = 'https://jigsaw.vitalsource.com';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-gpu', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });
  
  const page = await context.newPage();
  
  // Authenticate with bc_token URL
  const bcUrl = process.argv[2];
  if (!bcUrl) {
    console.log('Usage: node playwright_export.cjs "<bc_token_url>"');
    process.exit(1);
  }
  
  console.log('Authenticating with bc_token...');
  await page.goto(bcUrl, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  
  // Wait for redirect to capella
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 30000 }).catch(() => {});
  console.log('On:', page.url().substring(0, 80));
  
  // Wait for reader to load
  await page.waitForTimeout(15000);
  
  // Check for content frame
  let frame = null;
  const findFrame = () => {
    for (const f of context.pages().flatMap(p => p.frames())) {
      if (f.url().includes('jigsaw') && f.url().includes('OPS') && !f.url().endsWith('OPS/')) {
        return f;
      }
    }
    return null;
  };
  
  frame = findFrame();
  
  if (!frame) {
    console.log('No content frame - waiting more...');
    await page.waitForTimeout(20000);
    frame = findFrame();
  }
  
  if (!frame) {
    console.log('AUTH FAILED - no content frame');
    console.log('URL:', page.url());
    console.log('All frames:');
    for (const f of context.pages().flatMap(p => p.frames())) {
      console.log('  ' + f.url().substring(0, 100));
    }
    await browser.close();
    process.exit(1);
  }
  
  console.log('Content frame:', frame.url().substring(0, 100));
  
  // Save cookies
  const cookies = await context.cookies();
  const vitalCookies = cookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
  fs.writeFileSync(path.join(__dirname, 'cookies_full.json'), JSON.stringify(vitalCookies, null, 2));
  console.log('Saved', vitalCookies.length, 'cookies');
  
  // Get pages data - try using existing data first
  let pagesData = null;
  try {
    pagesData = JSON.parse(fs.readFileSync('/tmp/pages_' + ISBN + '.json', 'utf8'));
    console.log('Using cached pages data:', pagesData.length);
  } catch(e) {
    // Get from page.json if available
    const localPagesPath = path.join(__dirname, 'output_' + ISBN, 'pages.json');
    if (fs.existsSync(localPagesPath)) {
      pagesData = JSON.parse(fs.readFileSync(localPagesPath, 'utf8'));
      console.log('Using local pages data:', pagesData.length);
    }
  }
  
  if (!pagesData || pagesData.length === 0) {
    console.log('No pages data available');
    await browser.close();
    process.exit(1);
  }
  
  // Also save pages data
  fs.writeFileSync('/tmp/pages_' + ISBN + '.json', JSON.stringify(pagesData, null, 2));
  
  // Export all pages using CFI-direct navigation
  console.log('Starting export of ' + pagesData.length + ' pages...');
  const allResults = [];
  
  for (let i = 0; i < pagesData.length; i++) {
    const pageData = pagesData[i];
    
    // Navigate to CFI URL
    const cfiEncoded = encodeURIComponent(pageData.cfi);
    const navUrl = `https://capella.vitalsource.com/reader/books/${ISBN}/epubcfi/${cfiEncoded}`;
    
    try {
      await page.goto(navUrl, { waitUntil: 'domcontentloaded', timeout: 20000 }).catch(() => {});
      
      // Wait for frame content
      let frameReady = false;
      const waitStart = Date.now();
      while (Date.now() - waitStart < 15000) {
        frame = findFrame();
        if (frame) {
          try {
            const html = await frame.evaluate(() => document.body.innerHTML);
            if (html && html.length > 100) {
              frameReady = true;
              allResults.push({ pageIndex: i, content: { html, url: frame.url() } });
              break;
            }
          } catch(e) {}
        }
        await new Promise(r => setTimeout(r, 300));
      }
      
      if (!frameReady) {
        console.log('Page ' + (i + 1) + ': FAILED');
        allResults.push({ pageIndex: i, content: null });
      }
    } catch(e) {
      console.log('Page ' + (i + 1) + ': error -', e.message);
      allResults.push({ pageIndex: i, content: null });
    }
    
    // Update progress every 10 pages
    if ((i + 1) % 10 === 0) {
      console.log('Progress:', i + 1 + '/' + pagesData.length);
    }
  }
  
  console.log('Export complete. Got ' + allResults.filter(r => r.content).length + '/' + pagesData.length + ' pages.');
  
  // Save results
  const outputPath = '/tmp/export_' + ISBN + '_pages.json';
  fs.writeFileSync(outputPath, JSON.stringify(allResults.map(r => r.content), null, 2));
  console.log('Saved to', outputPath);
  
  // Also update cookies
  const freshCookies = await context.cookies();
  const freshVital = freshCookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
  fs.writeFileSync(path.join(__dirname, 'cookies_full.json'), JSON.stringify(freshVital, null, 2));
  
  await browser.close();
  console.log('Done');
})().catch(e => console.error('Fatal:', e));
