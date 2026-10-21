const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ISBN = '9781266607752';
const JIGSAW = 'https://jigsaw.vitalsource.com';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });
  
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });
  
  // Load the JWT cookie directly
  const cookies = JSON.parse(fs.readFileSync(path.join(__dirname, 'cookies_full.json')));
  console.log('Loaded', cookies.length, 'cookies');
  
  // Add cookies
  await context.addCookies(cookies);
  
  const page = await context.newPage();
  
  // First visit jigsaw to pass Cloudflare challenge
  console.log('Visiting jigsaw to solve Cloudflare...');
  await page.goto('https://jigsaw.vitalsource.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);
  
  // Then visit capella to establish session
  console.log('Loading capella...');
  await page.goto('https://capella.vitalsource.com/reader/books/' + ISBN, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(15000);
  
  console.log('URL:', page.url().substring(0, 80));
  
  if (page.url().includes('login')) {
    console.log('AUTH FAILED - session expired');
    await browser.close();
    process.exit(1);
  }
  
  // Save fresh cookies
  const freshCookies = await context.cookies();
  const vitalCookies = freshCookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
  fs.writeFileSync(path.join(__dirname, 'cookies_full.json'), JSON.stringify(vitalCookies, null, 2));
  console.log('Saved', vitalCookies.length, 'fresh cookies');
  
  // Find content frame
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
    console.log('Waiting for content frame...');
    const waitStart = Date.now();
    while (!frame && Date.now() - waitStart < 30000) {
      await new Promise(r => setTimeout(r, 1000));
      frame = findFrame();
    }
  }
  
  if (!frame) {
    console.log('No content frame found');
    console.log('All frames:');
    for (const f of context.pages().flatMap(p => p.frames())) {
      console.log('  ' + f.url().substring(0, 80));
    }
    await browser.close();
    process.exit(1);
  }
  
  console.log('Content frame:', frame.url().substring(0, 80));
  
  // Get pages.json via context.request
  console.log('Getting pages data...');
  const pagesResp = await context.request.get(`${JIGSAW}/books/${ISBN}/pages.json`, {
    headers: {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-requested-with': 'XMLHttpRequest',
      'Accept': 'application/json'
    }
  });
  
  let pages = null;
  if (pagesResp.status() === 200) {
    pages = await pagesResp.json();
    console.log('Pages:', pages.length);
  } else {
    console.log('pages.json failed:', pagesResp.status());
    // Try via frame
    pages = await frame.evaluate(async () => {
      const resp = await fetch('https://jigsaw.vitalsource.com/books/9781266607752/pages.json', {
        headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
      });
      return resp.ok ? await resp.json() : null;
    }).catch(() => null);
    
    if (pages) {
      console.log('Got pages via frame');
    }
  }
  
  if (!pages) {
    console.log('Using cached pages data');
    const pagesFile = path.join(__dirname, 'output_' + ISBN, 'pages.json');
    if (fs.existsSync(pagesFile)) {
      pages = JSON.parse(fs.readFileSync(pagesFile, 'utf8'));
      console.log('Cached pages:', pages.length);
    }
  }
  
  if (!pages || pages.length === 0) {
    console.log('No pages data');
    await browser.close();
    process.exit(1);
  }
  
  // Save pages
  fs.writeFileSync('/tmp/pages_' + ISBN + '.json', JSON.stringify(pages, null, 2));
  
  // Start export
  console.log('Starting export of ' + pages.length + ' pages...');
  const allResults = [];
  
  for (let i = 0; i < pages.length; i++) {
    const pageData = pages[i];
    const cfiEncoded = encodeURIComponent(pageData.cfi);
    const navUrl = `https://capella.vitalsource.com/reader/books/${ISBN}/epubcfi/${cfiEncoded}`;
    
    console.log('Page ' + (i + 1) + '/' + pages.length + ': ' + pageData.chapterTitle);
    
    try {
      await page.goto(navUrl, { waitUntil: 'domcontentloaded', timeout: 20000 }).catch(() => {});
      
      // Wait for frame
      let frameReady = false;
      const waitStart = Date.now();
      while (Date.now() - waitStart < 15000) {
        frame = findFrame();
        if (frame) {
          try {
            await frame.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => {});
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
        console.log('  Page ' + (i + 1) + ': FAILED');
        allResults.push({ pageIndex: i, content: null });
      }
    } catch(e) {
      console.log('  Page ' + (i + 1) + ': error -', e.message);
      allResults.push({ pageIndex: i, content: null });
    }
  }
  
  console.log('Export complete. Got ' + allResults.filter(r => r.content).length + '/' + pages.length + ' pages.');
  
  // Save results
  fs.writeFileSync('/tmp/export_' + ISBN + '_pages.json', JSON.stringify(allResults.map(r => r.content), null, 2));
  console.log('Saved to /tmp/export_' + ISBN + '_pages.json');
  
  await browser.close();
  console.log('Done');
})().catch(e => console.error('Fatal:', e));
