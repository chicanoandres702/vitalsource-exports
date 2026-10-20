import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--load-extension=/root/vitalsource_pdf_extension'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

page.on('console', msg => console.log(`[PAGE] ${msg.text()}`));

// Test 1: Check if content script loads on vitalsource.com
console.log('Test 1: Loading vitalource.com page...');
await page.goto('https://vitalsource.com', {
  waitUntil: 'domcontentloaded',
  timeout: 20000
});

await page.waitForTimeout(2000);

const test1 = await page.evaluate(async () => {
  let ready = false;
  const handler = (event) => {
    if (event.data?.type === 'VS_CONTENT_SCRIPT_LOADED') {
      ready = true;
      window.removeEventListener('message', handler);
    }
  };
  window.addEventListener('message', handler);
  await new Promise(r => setTimeout(r, 1500));
  window.removeEventListener('message', handler);
  return { ready, url: window.location.href };
});

console.log('Test 1 result:', JSON.stringify(test1));

// Test 2: Navigate to bc.vitalsource.com and check content script after redirect
console.log('\nTest 2: Navigating to bc.vitalsource.com...');
await page.goto('https://bc.vitalsource.com/books/9781266431227?bc_token=9a4cc0e0-ab05-013f-414c-4e9eb4b1afe5', {
  waitUntil: 'domcontentloaded',
  timeout: 30000
});

console.log('Initial URL:', page.url());
await page.waitForTimeout(5000);
console.log('Final URL:', page.url());

const test2 = await page.evaluate(async () => {
  let ready = false;
  const handler = (event) => {
    if (event.data?.type === 'VS_CONTENT_SCRIPT_LOADED') {
      ready = true;
      window.removeEventListener('message', handler);
    }
  };
  window.addEventListener('message', handler);
  await new Promise(r => setTimeout(r, 2000));
  window.removeEventListener('message', handler);
  return { ready, url: window.location.href };
});

console.log('Test 2 result:', JSON.stringify(test2));

// Test 3: Try loading the book reader URL directly
console.log('\nTest 3: Loading capella.vitalsource.com directly...');
await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', {
  waitUntil: 'domcontentloaded',
  timeout: 20000
});

await page.waitForTimeout(3000);

const test3 = await page.evaluate(async () => {
  let ready = false;
  const handler = (event) => {
    if (event.data?.type === 'VS_CONTENT_SCRIPT_LOADED') {
      ready = true;
      window.removeEventListener('message', handler);
    }
  };
  window.addEventListener('message', handler);
  await new Promise(r => setTimeout(r, 2000));
  window.removeEventListener('message', handler);
  return { ready, url: window.location.href };
});

console.log('Test 3 result:', JSON.stringify(test3));

await browser.close();
