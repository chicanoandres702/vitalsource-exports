const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  
  const page = await context.newPage();
  
  // Intercept API requests
  page.on('request', (request) => {
    const url = request.url();
    if (url.includes('jigsaw.vitalsource.com/books/') || url.includes('/info/books') || url.includes('/pagebreaks') || url.includes('/pages.json')) {
      console.log('REQ:', url);
      console.log('REQ_HEADERS:', JSON.stringify(request.headers(), null, 2));
    }
  });

  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('/books/9781266') || url.includes('/info/books') || url.includes('/pagebreaks') || url.includes('/pages.json')) {
      const body = await response.text().catch(() => '');
      console.log('RESP:', url, response.status(), body.substring(0, 200));
    }
  });

  const bcUrl = 'https://bc.vitalsource.com/books/9781266431227?bc_token=61bfec10-aae6-013f-f189-1eb286fc39a0&relaunch_vbid=9781266431227&course_dash_relaunch=true';
  await page.goto(bcUrl, { timeout: 60000 });
  await page.waitForTimeout(15000);

  // Save all cookies
  const cookies = await context.cookies();
  fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(cookies, null, 2));
  
  // Convert to Netscape format for curl
  let cookieFile = '# Netscape HTTP Cookie File\n';
  for (const c of cookies) {
    const domain = c.domain.startsWith('.') ? c.domain : '.' + c.domain;
    const expires = c.expires || (Math.floor(Date.now()/1000) + 3600);
    cookieFile += `${c.httpOnly ? '#HttpOnly_' : ''}${c.domain}\t${c.sameSite === 'Strict' ? 'FALSE' : 'TRUE'}\t${c.path}\t${c.secure ? 'TRUE' : 'FALSE'}\t${expires}\t${c.name}\t${c.value}\n`;
  }
  fs.writeFileSync('/tmp/vs_netscape.txt', cookieFile);
  
  console.log('Cookies saved:', cookies.length);
  console.log('Domains:', cookies.map(c => c.domain).filter((v, i, a) => a.indexOf(v) === i));

  await browser.close();
})();
