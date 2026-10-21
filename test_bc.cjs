const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  const bcUrl = process.argv[2];
  console.log('Authenticating...');
  await page.goto(bcUrl, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 30000 }).catch(() => {});
  
  console.log('URL:', page.url());
  const url = new URL(page.url());
  const ct = url.searchParams.get('context_token');
  console.log('Context token:', ct);
  
  if (ct && !page.url().includes('login')) {
    console.log('AUTH SUCCESS');
    await page.waitForTimeout(10000);
    
    // Save cookies
    const cookies = await context.cookies();
    const vitalCookies = cookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
    fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(vitalCookies, null, 2));
    console.log('Saved', vitalCookies.length, 'cookies');
    
    // Navigate to target ISBN reader
    console.log('Loading reader...');
    await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(15000);
    
    console.log('Reader URL:', page.url().substring(0, 80));
    
    if (page.url().includes('reader')) {
      console.log('SUCCESS - on reader page');
      
      // Start server with the cookies
      console.log('Starting server...');
      const { spawn } = require('child_process');
      const server = spawn('node', ['server.mjs'], {
        cwd: '/root/vitalsource_captures',
        stdio: 'pipe'
      });
      
      server.stdout.on('data', data => process.stdout.write(data.toString()));
      server.stderr.on('data', data => process.stderr.write(data.toString()));
      
      // Wait for server to start
      await new Promise(r => setTimeout(r, 5000));
      
      // Save cookies for server to use
      const freshCookies = await context.cookies();
      const freshVital = freshCookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
      fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(freshVital, null, 2));
      
      console.log('Server should be running. Checking...');
    } else {
      console.log('Still on login page');
    }
  } else {
    console.log('AUTH FAILED');
  }
  
  await browser.close();
})().catch(e => console.error('Fatal:', e.message));
