import { chromium } from 'playwright';
import { execSync } from 'child_process';

// Method 1: Try loading from unpacked directory
console.log('=== Test 1: Load unpacked extension ===');
try {
  const browser1 = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process',
      '--load-extension=/root/vitalsource_pdf_extension'
    ]
  });
  const ctx1 = await browser1.newContext();
  const page1 = await ctx1.newPage();
  await page1.goto('data:text/html,<html><body>OK</body></html>');
  const content = await page1.content();
  console.log('Content:', content.includes('OK') ? 'Loaded OK' : 'Failed');
  await browser1.close();
  console.log('PASS: Extension loads from unpacked directory\n');
} catch(e) {
  console.log('FAIL:', e.message, '\n');
}

// Method 2: Try installing the CRX file
console.log('=== Test 2: Install CRX file ===');
try {
  const browser2 = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--disable-web-security',
      `--load-extension=/tmp/vitalsource_pdf_converter.crx`
    ]
  });
  const ctx2 = await browser2.newContext();
  const page2 = await ctx2.newPage();
  await page2.goto('data:text/html,<html><body>OK</body></html>');
  const content = await page2.content();
  console.log('Content:', content.includes('OK') ? 'Loaded OK' : 'Failed');
  await browser2.close();
  console.log('PASS: CRX loads\n');
} catch(e) {
  console.log('FAIL:', e.message, '\n');
}

