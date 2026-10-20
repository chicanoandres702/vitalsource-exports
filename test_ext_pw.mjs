import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process',
    '--load-extension=/root/vitalsource_pdf_extension'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

page.on('console', msg => {
  const text = msg.text();
  if (text.includes('VS-PDF') || text.includes('VS-Extension') || text.includes('[VS')) {
    console.log(`[PAGE] ${text}`);
  }
});
page.on('pageerror', err => console.log(`[ERROR] ${err.message}`));

console.log('Navigating to VitalSource...');
try {
  const response = await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5&relaunch_vbid=9781266431227&course_dash_relaunch=true', {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });
  
  console.log(`Final URL: ${response?.url()}`);
  console.log(`Status: ${response?.status()}`);
  
  const title = await page.title();
  console.log(`Title: ${title}`);
  
  const cookies = await context.cookies();
  console.log(`Cookies: ${cookies.map(c => c.name).join(', ')}`);
  
  // Wait for extension scripts
  await page.waitForTimeout(5000);
  
  console.log('Test complete');
} catch(e) {
  console.log(`Error: ${e.message}`);
}

await browser.close();
