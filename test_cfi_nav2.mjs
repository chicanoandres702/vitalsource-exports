import { chromium } from 'playwright';
import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('/root/vitalsource_captures/output_9781266607752/pages.json'));
const targetPage = pages[49]; // Page 50

async function test() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

  const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json', 'utf8'));
  await context.addCookies(cookies);

  const page = await context.newPage();
  await page.goto('https://capella.vitalsource.com/reader/books/9781266607752', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(8000);

  // Find initial frame - look in ALL pages and frames
  console.log('=== Initial state ===');
  for (const p of context.pages()) {
    console.log('Page:', p.url());
    for (const f of p.frames()) {
      const url = f.url();
      if (url.includes('epub/OPS') || url.includes('reader/books')) {
        console.log('  Frame:', url.substring(0, 100));
      }
    }
  }

  // Look for navigation buttons - try various selectors
  console.log('\n=== Navigation elements ===');
  const navInfo = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    return buttons.map(b => ({
      text: b.textContent?.trim().substring(0, 30),
      ariaLabel: b.getAttribute('aria-label'),
      className: b.className?.substring(0, 50),
      id: b.id,
    }));
  });
  console.log('Buttons found:', navInfo.length);
  navInfo.forEach(b => console.log('  ', JSON.stringify(b)));

  // Try to find iframe and access its content
  console.log('\n=== Looking for reader navigation API ===');
  const apiInfo = await page.evaluate(() => {
    const iframes = document.querySelectorAll('iframe');
    const info = { iframeCount: iframes.length };
    
    iframes.forEach((iframe, i) => {
      info['iframe' + i] = {
        src: iframe.src,
        id: iframe.id,
        name: iframe.name,
        title: iframe.title,
      };
    });
    
    // Check for any global navigation functions
    const navFunctions = [];
    for (const key of Object.keys(window)) {
      if (typeof window[key] === 'function' && /nav|page|cfi|jump|go|reader|book/i.test(key)) {
        navFunctions.push(key);
      }
    }
    info.navFunctions = navFunctions;
    
    return info;
  });
  console.log('API info:', JSON.stringify(apiInfo, null, 2));

  // Try the direct jigsaw URL with CFI
  console.log('\n=== Testing direct jigsaw URL ===');
  const directUrl = 'https://jigsaw.vitalsource.com/books/9781266607752' + targetPage.path + '#cfi=' + encodeURIComponent(targetPage.cfi);
  console.log('URL:', directUrl.substring(0, 100));

  try {
    const resp = await page.goto(directUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
    console.log('Response status:', resp?.status());
    await page.waitForTimeout(4000);
    console.log('Current URL:', page.url().substring(0, 100));
    
    // Check frames
    for (const p of context.pages()) {
      for (const f of p.frames()) {
        if (f.url().includes('epub')) {
          console.log('Frame:', f.url().substring(0, 120));
          try {
            const content = await f.evaluate(() => {
              const body = document.body;
              return {
                htmlLength: body.innerHTML?.length || 0,
                text: body.innerText?.substring(0, 200) || '',
                hasP: body.innerHTML?.includes('<p') || false,
                hasImg: body.innerHTML?.includes('<img') || false,
              };
            });
            console.log('Content:', JSON.stringify(content));
          } catch(e) {
            console.log('Eval error:', e.message);
          }
        }
      }
    }
  } catch(e) {
    console.log('Navigation error:', e.message);
  }

  await browser.close();
}

test().catch(console.error);
