const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('Starting browser...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  // Authenticate with bc_token
  const bcUrl = 'https://bc.vitalsource.com/books/9781266607752?bc_token=ec2daf40-af5a-013f-9248-0e86b2f47384&relaunch_vbid=9781266607752&course_dash_relaunch=true';
  console.log('Authenticating...');
  await page.goto(bcUrl, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(8000);
  
  console.log('After bc_token URL:', page.url().substring(0, 80));
  
  // If we're on capella reader, start extracting immediately
  if (page.url().includes('capella') && !page.url().includes('login')) {
    console.log('On reader page - starting immediate extraction');
    
    // Wait for content frame
    let frame = null;
    const waitStart = Date.now();
    while (!frame && Date.now() - waitStart < 30000) {
      for (const f of context.pages().flatMap(p => p.frames())) {
        if (f.url().includes('jigsaw') && f.url().includes('OPS')) {
          frame = f;
          break;
        }
      }
      if (!frame) await new Promise(r => setTimeout(r, 500));
    }
    
    if (frame) {
      console.log('Content frame found:', frame.url().substring(0, 80));
      
      // Wait for frame to have content
      await page.waitForTimeout(5000);
      
      // Check frame content
      try {
        const html = await frame.evaluate(() => document.body.innerHTML);
        if (html && html.length > 100) {
          console.log('Frame has content: ' + html.length + ' chars');
        } else {
          console.log('Frame has no content, waiting more...');
          await page.waitForTimeout(10000);
          const html2 = await frame.evaluate(() => document.body.innerHTML);
          console.log('After wait: ' + html2.length + ' chars');
        }
      } catch(e) {
        console.log('Frame eval error:', e.message);
      }
      
      // Save cookies
      const cookies = await context.cookies();
      const vitalCookies = cookies.filter(c => c.domain.includes('vitalsource') || c.domain.includes('jigsaw'));
      fs.writeFileSync('/root/vitalsource_captures/cookies_full.json', JSON.stringify(vitalCookies, null, 2));
      console.log('Saved', vitalCookies.length, 'cookies');
      
      // Try to get pages.json via frame.evaluate
      console.log('\n=== Getting pages list ===');
      try {
        const pages = await frame.evaluate(async () => {
          const resp = await fetch('https://jigsaw.vitalsource.com/books/9781266607752/pages.json', {
            headers: { 
              'x-vitalsource-brand': 'capella', 
              'x-vitalsource-sed': 'secure', 
              'x-requested-with': 'XMLHttpRequest' 
            }
          });
          return resp.ok ? await resp.json() : {error: resp.status};
        });
        
        if (Array.isArray(pages)) {
          console.log('Got pages:', pages.length);
          fs.writeFileSync('/tmp/pages_data.json', JSON.stringify(pages, null, 2));
          
          // Test extracting content via frame.evaluate
          console.log('\n=== Testing content extraction ===');
          const content = await frame.evaluate(() => {
            const body = document.body;
            if (!body || !body.innerHTML) return null;
            return {
              htmlLen: body.innerHTML.length,
              pCount: document.querySelectorAll('p').length,
              text: body.innerText?.substring(0, 100) || ''
            };
          });
          console.log('Content:', JSON.stringify(content));
        } else {
          console.log('pages.json error:', JSON.stringify(pages));
        }
      } catch(e) {
        console.log('Error getting pages:', e.message);
      }
    } else {
      console.log('No content frame found');
      // List all frames
      for (const f of context.pages().flatMap(p => p.frames())) {
        console.log('  Frame:', f.url().substring(0, 80));
      }
    }
  } else {
    console.log('Not on reader page');
  }
  
  await browser.close();
  console.log('Done');
})().catch(e => console.error('Fatal:', e));
