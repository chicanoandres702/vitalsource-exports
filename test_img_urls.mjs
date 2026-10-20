import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu']
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 1600 }
});

const page = await context.newPage();

// Get the bc_token from process.argv or use the one from server
const bcUrl = process.argv[2] || 'https://bc.vitalsource.com/books/9781266431227?bc_token=0afb0860-ae7d-013f-e43e-42830cd31bd4&relaunch_vbid=9781266431227&course_dash_relaunch=true';

console.log('Loading reader...');
await page.goto(bcUrl, { waitUntil: 'domcontentloaded', timeout: 90000 });
await page.waitForTimeout(15000);

// Find content frame
const frames = context.pages().flatMap(p => p.frames());
const contentFrame = frames.find(f => f.url().includes('epub/OPS') && f.url().includes('favre=brett'));
if (!contentFrame) {
  console.log('No content frame found');
  process.exit(1);
}

console.log(`Frame URL: ${contentFrame.url()}`);

// Get raw HTML of the frame
const rawHtml = await contentFrame.evaluate(() => {
  const body = document.body;
  if (!body) return 'no body';
  
  // Show raw img tags
  const imgs = Array.from(document.querySelectorAll('img'));
  console.log('Images in frame:');
  imgs.forEach((img, i) => {
    console.log(`  [${i}] src="${img.getAttribute('src')}" resolved="${img.src}" complete="${img.complete}"`);
  });
  
  return body.innerHTML.substring(0, 500);
});

console.log('\nBody HTML (first 500 chars):');
console.log(rawHtml);

// Now try the setAttribute approach
await contentFrame.evaluate(() => {
  Array.from(document.images).forEach(img => {
    const abs = img.src;
    img.setAttribute('src', abs);
  });
  const html = document.body.innerHTML;
  return html.substring(0, 1000);
});

console.log('\nAfter setAttribute, body HTML (first 1000 chars):');
const modifiedHtml = await contentFrame.evaluate(() => document.body.innerHTML);
console.log(modifiedHtml.substring(0, 1000));

// Check the resolved URLs
console.log('\n=== All img src attributes after setAttribute ===');
await contentFrame.evaluate(() => {
  const imgs = Array.from(document.querySelectorAll('img'));
  imgs.forEach((img, i) => {
    console.log(`  [${i}] src="${img.getAttribute('src')}"`);
  });
});

await browser.close();
