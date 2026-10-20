import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu']
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 1600 }
});

const page = await context.newPage();

const pageErrors = [];
const consoleMsgs = [];
page.on('pageerror', err => pageErrors.push(err.message));
page.on('console', msg => consoleMsgs.push(`${msg.type()}: ${msg.text().substring(0, 300)}`));

console.log('Navigating to focustv.online/vs/...');
await page.goto('http://focustv.online/vs/', { waitUntil: 'networkidle', timeout: 60000 });

console.log('Waiting 15s for API to load...');
await page.waitForTimeout(15000);

const content = await page.evaluate(() => {
  const el = document.getElementById('bookContent');
  const info = document.getElementById('pageInfo');
  return {
    bookContent: el ? el.innerHTML.substring(0, 200) : 'not found',
    pageInfo: info ? info.textContent : 'not found',
    hasParagraphs: document.querySelector('p') !== null,
    imageCount: document.querySelectorAll('img').length,
    images: Array.from(document.querySelectorAll('img')).map(img => ({ src: img.src.substring(0, 80), broken: !img.complete || img.naturalWidth === 0 })),
  };
});

console.log('bookContent:', content.bookContent);
console.log('pageInfo:', content.pageInfo);
console.log('hasParagraphs:', content.hasParagraphs);
console.log('images:', content.imageCount, 'total,', content.images.filter(i => i.broken).length, 'broken');
content.images.slice(0, 3).forEach(img => console.log('  img:', img.src, 'broken:', img.broken));

if (pageErrors.length > 0) {
  console.log('\nPage errors:', pageErrors.length);
  pageErrors.forEach(e => console.log('  ', e));
}
if (consoleMsgs.length > 0) {
  console.log('\nConsole messages:', consoleMsgs.length);
  consoleMsgs.slice(0, 10).forEach(m => console.log('  ', m));
}

// Test Next if page loaded
if (content.pageInfo && content.pageInfo !== '-- / --') {
  console.log('\n=== Testing Next button ===');
  const nextBtn = await page.$('button#nextBtn');
  if (nextBtn) {
    const oldInfo = content.pageInfo;
    await nextBtn.click();
    await page.waitForFunction(
      (old) => {
        const el = document.getElementById('pageInfo');
        return el && el.textContent !== old;
      },
      oldInfo,
      { timeout: 90000 }
    );
    const newInfo = await page.textContent('#pageInfo');
    console.log(`After Next: ${newInfo} (was: ${oldInfo})`);

    // Check images after navigation
    const imgCheck = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return { total: imgs.length, broken: imgs.filter(i => !i.complete || i.naturalWidth === 0).length };
    });
    console.log(`Images: ${imgCheck.total} total, ${imgCheck.broken} broken`);
  }
} else {
  console.log('\nPage content not loaded - checking for init prompt');
  const initPrompt = await page.$('div.init-prompt');
  if (initPrompt) {
    console.log('Init prompt is visible - browser may need re-initialization');
  }
}

await browser.close();
console.log('\n=== Test complete ===');
