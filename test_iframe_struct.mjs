import { chromium } from 'playwright';
import fs from 'fs';

async function test() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json', 'utf8'));
  await context.addCookies(cookies);

  const page = await context.newPage();
  await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(10000);

  // Examine ALL iframes in detail
  console.log('=== All iframes ===');
  const iframeDetails = await page.evaluate(() => {
    const iframes = Array.from(document.querySelectorAll('iframe'));
    return iframes.map((iframe, i) => {
      const rect = iframe.getBoundingClientRect();
      return {
        index: i,
        src: iframe.src,
        id: iframe.id,
        name: iframe.name,
        className: iframe.className,
        style: iframe.style.cssText,
        width: iframe.width,
        height: iframe.height,
        boundingRect: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
        },
      };
    });
  });
  console.log(JSON.stringify(iframeDetails, null, 2));

  // Check what the wrapper.html iframe contains
  const wrapperFrame = (await context.pages().flatMap(p => p.frames()))
    .find(f => f.url().includes('wrapper.html'));
  
  if (wrapperFrame) {
    console.log('\n=== Wrapper frame content ===');
    const wrapperContent = await wrapperFrame.evaluate(() => {
      const body = document.body;
      return {
        htmlLength: body.innerHTML?.length || 0,
        text: body.innerText?.substring(0, 200) || '',
        hasIframe: !!document.querySelector('iframe'),
        iframeSrcs: Array.from(document.querySelectorAll('iframe')).map(f => f.src),
      };
    });
    console.log(JSON.stringify(wrapperContent, null, 2));

    // If wrapper has an iframe, check its src
    const innerIframeSrc = await wrapperFrame.evaluate(() => {
      const iframe = document.querySelector('iframe');
      return iframe ? iframe.src : null;
    });
    console.log('\nWrapper inner iframe src:', innerIframeSrc);
  }

  // Now test: use page.goto to navigate to a specific page URL
  console.log('\n=== Testing page.goto to jigsaw URL ===');
  const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));
  const targetPage = pages[49]; // Page 50

  // Try navigating the main reader page to a CFI URL
  const cfiUrl = 'https://capella.vitalsource.com/reader/books/9781266607752' + targetPage.path + '#cfi=' + encodeURIComponent(targetPage.cfi);
  console.log('Navigating to:', cfiUrl.substring(0, 100));

  await page.goto(cfiUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(8000);

  console.log('New page URL:', page.url());

  // Check frames
  const allFramesAfter = (await context.pages().flatMap(p => p.frames()));
  console.log('All frames after navigation:', allFramesAfter.length);
  for (const f of allFramesAfter) {
    const url = f.url();
    if (url.includes('epub') || url.includes('jigsaw')) {
      console.log('  ', url.substring(0, 100));
    }
  }

  // Try extracting from any frame with epub
  const epubFrame = allFramesAfter.find(f => f.url().includes('epub'));
  if (epubFrame) {
    console.log('\nEPUB frame URL:', epubFrame.url());
    const content = await epubFrame.evaluate(() => ({
      text: document.body.innerText?.substring(0, 200) || '',
      hasP: document.body.innerHTML.includes('<p'),
      pCount: document.querySelectorAll('p').length,
    }));
    console.log('Content:', JSON.stringify(content));
  }

  await browser.close();
}

test().catch(console.error);
