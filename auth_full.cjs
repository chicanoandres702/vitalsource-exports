const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('Starting browser...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  // Authenticate with bc_token
  const bcUrl = 'https://bc.vitalsource.com/books/9781266607752?bc_token=ec2daf40-af5a-013f-9248-0e86b2f47384&relaunch_vbid=9781266607752&course_dash_relaunch=true';
  console.log('Step 1: Authenticating...');
  await page.goto(bcUrl, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  console.log('URL:', page.url().substring(0, 80));
  
  // Wait for redirect to capella
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 30000 }).catch(() => {});
  console.log('Step 2: On capella:', page.url().substring(0, 80));
  await page.waitForTimeout(5000);
  
  // Now manually navigate to the reader book page
  console.log('Step 3: Navigating to reader book page...');
  await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(15000);
  
  console.log('Reader URL:', page.url().substring(0, 80));
  
  // Check if we're still on capella or redirected to login
  const url = page.url();
  if (url.includes('login')) {
    console.log('Redirected to login - session expired');
  } else if (url.includes('reader')) {
    console.log('On reader page!');
    
    // List all frames
    console.log('\n=== All frames ===');
    for (const f of context.pages().flatMap(p => p.frames())) {
      console.log('  Frame:', f.url().substring(0, 100));
    }
    
    // Find content frame
    let frame = null;
    for (const f of context.pages().flatMap(p => p.frames())) {
      if (f.url().includes('jigsaw') && f.url().includes('OPS')) {
        frame = f;
        console.log('\nContent frame:', f.url().substring(0, 100));
        try {
          const html = await frame.evaluate(() => document.body.innerHTML);
          console.log('HTML length:', html.length);
          if (html.length > 100) console.log('Content:', html.substring(0, 200));
        } catch(e) {
          console.log('Error:', e.message);
        }
        break;
      }
    }
    
    if (!frame) {
      console.log('No content frame - trying to find jigsaw frames...');
      for (const f of context.pages().flatMap(p => p.frames())) {
        if (f.url().includes('jigsaw')) {
          console.log('Jigsaw frame:', f.url().substring(0, 100));
          try {
            const html = await f.evaluate(() => document.body.innerHTML);
            console.log('HTML:', html.substring(0, 200));
          } catch(e) {
            console.log('Error:', e.message);
          }
        }
      }
    }
  }
  
  // Save cookies
  const cookies = await context.cookies();
  const vitalCookies = cookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
  fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(vitalCookies, null, 2));
  console.log('\nSaved', vitalCookies.length, 'cookies');
  
  await browser.close();
})().catch(e => console.error('Fatal:', e));
