const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('Starting browser...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  
  const bcUrl = 'https://bc.vitalsource.com/books/9781266607752?bc_token=f54b49c0-af22-013f-3b37-62a213093e48&relaunch_vbid=9781266607752&course_dash_relaunch=true';
  console.log('Auth URL:', bcUrl.substring(0, 60) + '...');
  
  const page = await context.newPage();
  
  try {
    await page.goto(bcUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log('After bc_token redirect:', page.url().substring(0, 80));
    
    await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 30000 }).catch(() => {
      console.log('Did not reach capella');
    });
    
    await page.waitForTimeout(10000);
    const url = page.url();
    
    if (url.includes('login') || url.includes('error')) {
      console.log('AUTH FAILED');
    } else {
      console.log('AUTH SUCCESS - on:', url.substring(0, 80));
      
      // Save cookies
      const cookies = await context.cookies();
      const vitalCookies = cookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
      fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(vitalCookies, null, 2));
      console.log('Saved', vitalCookies.length, 'cookies');
      
      // Check content
      for (const f of context.pages().flatMap(p => p.frames())) {
        if (f.url().includes('jigsaw') && f.url().includes('OPS') && !f.url().endsWith('OPS/')) {
          console.log('Frame found:', f.url().substring(0, 80));
          const html = await f.evaluate(() => document.body.innerHTML.substring(0, 200));
          console.log('Content preview:', html.substring(0, 200));
        }
      }
    }
  } catch(e) {
    console.log('Error:', e.message);
  }
  
  await browser.close();
})().catch(e => console.error('Fatal:', e.message));
