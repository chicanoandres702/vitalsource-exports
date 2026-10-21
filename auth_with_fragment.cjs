const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('Starting browser...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  // Get the context_token from the bc_token
  const bcUrl = 'https://bc.vitalsource.com/books/9781266607752?bc_token=ec2daf40-af5a-013f-9248-0e86b2f47384&relaunch_vbid=9781266607752&course_dash_relaunch=true';
  console.log('Authenticating...');
  await page.goto(bcUrl, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  
  // Wait for redirect to capella - get the context_token from the URL
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 30000 }).catch(() => {});
  
  const currentUrl = new URL(page.url());
  const contextToken = currentUrl.searchParams.get('context_token');
  console.log('Context token:', contextToken);
  
  if (contextToken) {
    // Navigate with the fragment to load the book reader directly!
    const readerUrl = `https://capella.vitalsource.com/?context_token=${contextToken}#/books/9781266607752?context_token=${contextToken}`;
    console.log('Navigating to reader with fragment URL...');
    await page.goto(readerUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(15000);
    
    console.log('Reader URL:', page.url().substring(0, 80));
    
    // Check frames
    console.log('\n=== Frames ===');
    for (const f of context.pages().flatMap(p => p.frames())) {
      if (f.url().includes('jigsaw')) {
        console.log('Jigsaw frame:', f.url().substring(0, 100));
        try {
          const html = await f.evaluate(() => document.body.innerHTML.substring(0, 200));
          console.log('Content:', html);
        } catch(e) {
          console.log('Error:', e.message);
        }
      }
    }
    
    // Also check via the capella URL directly
    if (page.url().includes('login')) {
      console.log('Still on login page');
    }
    
    // Save cookies
    const cookies = await context.cookies();
    const vitalCookies = cookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
    fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(vitalCookies, null, 2));
    console.log('Saved', vitalCookies.length, 'cookies');
  }
  
  await browser.close();
})().catch(e => console.error('Fatal:', e));
