const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  
  const page = await context.newPage();
  
  // Intercept all API requests
  const requests = [];
  page.on('request', (request) => {
    const url = request.url();
    const reqData = {
      url: url,
      method: request.method(),
      headers: request.headers(),
    };
    if (url.includes('jigsaw.vitalsource.com') || url.includes('api') || url.includes('books')) {
      requests.push(reqData);
      console.log('REQUEST:', JSON.stringify({ url, method: request.method(), headers: Object.entries(request.headers()).filter(([k]) => k.toLowerCase().startsWith('x-')).map(([k,v]) => `${k}: ${v}`) }, null, 2));
    }
  });

  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('jigsaw.vitalsource.com') || (url.includes('vitalsource') && url.includes('book'))) {
      const body = await response.text().catch(() => '');
      console.log('RESPONSE:', url, response.status(), body.substring(0, 500));
    }
  });

  page.on('console', (msg) => {
    if (msg.text().includes('secureToken') || msg.text().includes('token') || msg.text().toLowerCase().includes('error')) {
      console.log('CONSOLE:', msg.text());
    }
  });

  try {
    const bcUrl = 'https://bc.vitalsource.com/books/9781266431227?bc_token=61bfec10-aae6-013f-f189-1eb286fc39a0&relaunch_vbid=9781266431227&course_dash_relaunch=true';
    console.log('Navigating to:', bcUrl);
    await page.goto(bcUrl, { timeout: 60000 });
    await page.waitForTimeout(10000); // Wait for JS to load and make API calls
    console.log('Done waiting. Page title:', await page.title());
  } catch (e) {
    console.log('Error:', e.message);
  }

  // Save all requests
  fs.writeFileSync('/root/vitalsource_captures/playwright_requests.json', JSON.stringify(requests.filter(r => r.url.includes('jigsaw')), null, 2));
  
  await browser.close();
})();
