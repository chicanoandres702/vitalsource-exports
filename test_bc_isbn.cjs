const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  // Try the latest bc_token (for ISBN 9781266431227)
  const bcUrl = 'https://bc.vitalsource.com/books/9781266431227?bc_token=f54b49c0-af22-013f-3b37-62a213093e48&relaunch_vbid=9781266431227&course_dash_relaunch=true';
  console.log('Authenticating with bc_token for ISBN 9781266431227...');
  await page.goto(bcUrl, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  
  // Wait for redirect
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 30000 }).catch(() => {});
  console.log('URL:', page.url().substring(0, 100));
  
  // Get context token
  const url = new URL(page.url());
  const ct = url.searchParams.get('context_token');
  console.log('Context token:', ct);
  
  // Save cookies
  const cookies = await context.cookies();
  const vitalCookies = cookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
  fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(vitalCookies, null, 2));
  console.log('Saved', vitalCookies.length, 'cookies');
  
  // Wait for reader
  await page.waitForTimeout(10000);
  
  // Check URL
  const finalUrl = page.url();
  console.log('Final URL:', finalUrl.substring(0, 100));
  
  if (finalUrl.includes('reader')) {
    console.log('On reader page!');
    
    // Check if it's our book or different
    for (const f of context.pages().flatMap(p => p.frames())) {
      if (f.url().includes('jigsaw') && f.url().includes('OPS')) {
        console.log('Content frame:', f.url().substring(0, 100));
        try {
          const html = await f.evaluate(() => document.body.innerHTML.substring(0, 200));
          console.log('Content:', html);
        } catch(e) { console.log('Error:', e.message); }
      }
    }
  }
  
  await browser.close();
})().catch(e => console.error(e));
