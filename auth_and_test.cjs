const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('Starting browser...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  // Try with the latest bc_token
  const bcUrl = 'https://bc.vitalsource.com/books/9781266607752?bc_token=ec2daf40-af5a-013f-9248-0e86b2f47384&relaunch_vbid=9781266607752&course_dash_relaunch=true';
  console.log('Authenticating...');
  await page.goto(bcUrl, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(8000);
  
  console.log('URL:', page.url().substring(0, 80));
  
  if (page.url().includes('capella') && !page.url().includes('login')) {
    console.log('AUTH SUCCESS');
    
    // Save cookies immediately
    const cookies = await context.cookies();
    const vitalCookies = cookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
    fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(vitalCookies, null, 2));
    console.log('Saved', vitalCookies.length, 'cookies');
    
    // Now access the reader
    console.log('Accessing reader...');
    await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(15000);
    
    console.log('Reader URL:', page.url().substring(0, 80));
    
    // Check for content frame
    let frame = null;
    for (const f of context.pages().flatMap(p => p.frames())) {
      if (f.url().includes('jigsaw') && f.url().includes('OPS')) {
        frame = f;
        console.log('Frame URL:', f.url().substring(0, 100));
        break;
      }
    }
    
    if (frame) {
      // Try to extract content
      try {
        const html = await frame.evaluate(() => document.body.innerHTML);
        console.log('HTML length:', html.length);
        if (html.length > 100) {
          console.log('Content:', html.substring(0, 200));
        } else {
          console.log('Empty frame content - waiting more...');
          await page.waitForTimeout(10000);
          const html2 = await frame.evaluate(() => document.body.innerHTML);
          console.log('After wait:', html2.length);
        }
      } catch(e) {
        console.log('Frame eval error:', e.message);
      }
      
      // Try getting pages via frame
      console.log('\n=== Getting pages list ===');
      const pages = await frame.evaluate(async () => {
        const resp = await fetch('https://jigsaw.vitalsource.com/books/9781266607752/pages.json', {
          headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
        });
        return resp.ok ? await resp.json() : {error: resp.status};
      }).catch(e => ({error: e.message}));
      
      if (Array.isArray(pages)) {
        console.log('Pages:', pages.length);
        fs.writeFileSync('/tmp/pages_data.json', JSON.stringify(pages, null, 2));
        console.log('Saved pages data');
        
        // Test CFI navigation
        console.log('\n=== Testing CFI navigation ===');
        const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752/epubcfi/' + encodeURIComponent(pages[1].cfi);
        console.log('Navigating to page 2...');
        await page.goto(cfiUrl, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(() => {});
        await page.waitForTimeout(5000);
        
        // Find updated frame
        let pageFrame = null;
        for (const f of context.pages().flatMap(p => p.frames())) {
          if (f.url().includes('jigsaw') && f.url().includes('OPS') && !f.url().endsWith('OPS/')) {
            pageFrame = f;
            console.log('Page 2 frame:', f.url().substring(60, 120));
            break;
          }
        }
        
        if (pageFrame) {
          const html = await pageFrame.evaluate(() => document.body.innerHTML);
          console.log('Page 2 HTML:', html.length, 'chars');
          if (html.length > 100) {
            console.log('Content:', html.substring(0, 200));
          }
        }
      } else {
        console.log('pages.json result:', JSON.stringify(pages));
      }
    }
    
    // Save final cookies
    const freshCookies = await context.cookies();
    const freshVital = freshCookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
    fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(freshVital, null, 2));
    console.log('\nFinal cookies:', freshVital.length);
    
  } else {
    console.log('AUTH FAILED - bc_token expired');
  }
  
  await browser.close();
  console.log('Done');
})().catch(e => console.error('Fatal:', e));
