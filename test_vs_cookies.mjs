import { chromium } from 'playwright';
import fs from 'fs';

const ISBN = '9781266607752';
const JIGSAW = 'https://jigsaw.vitalsource.com';

const browser = await chromium.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu']
});

const context = await browser.newContext({
  viewport: { width: 1200, height: 1600 }
});

// Load saved cookies
const cookies = JSON.parse(fs.readFileSync('/root/vitalsource_captures/cookies_full.json', 'utf8'));
console.log('Setting cookies...');
await context.addCookies(cookies);

// Try loading reader directly with cookies
const page = await context.newPage();

console.log('\n=== Test 1: Reader URL with cookies ===');
try {
  await page.goto(`https://capella.vitalsource.com/reader/books/${ISBN}`, {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });
  console.log(`URL: ${page.url()}`);
  console.log(`Title: ${await page.title()}`);
  await page.waitForTimeout(10000);
  
  // Check frames
  for (const p of context.pages()) {
    for (const f of p.frames()) {
      if (f.url().includes('jigsaw') || f.url().includes('vitalsource')) {
        console.log(`Frame: ${f.url()}`);
      }
    }
  }
} catch(e) {
  console.log(`Error: ${e.message}`);
}

// Test 2: Try loading the mosaic wrapper directly with cookies
console.log('\n=== Test 2: Load jigsaw book page directly ===');
try {
  await page.goto(`${JIGSAW}/books/${ISBN}/epub/OPS/s9ml/chapter01/move_beyond.xhtml?favre=brett`, {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });
  console.log(`URL: ${page.url()}`);
  console.log(`Title: ${await page.title()}`);
  
  // Check if we can access the content
  const hasBody = await page.evaluate(() => !!document.body && document.body.innerHTML.length > 0);
  const bodyText = await page.evaluate(() => document.body?.innerText?.substring(0, 200) || 'empty');
  console.log(`Has body: ${hasBody}`);
  console.log(`Body text: ${bodyText}`);
} catch(e) {
  console.log(`Error: ${e.message}`);
}

// Test 3: Try loading the context_token URL with cookies
console.log('\n=== Test 3: Load capella with context_token + cookies ===');
const contextToken = '20d783c0-abea-013f-883a-6ecc5aef212c';
const readerUrl = `https://capella.vitalsource.com/?context_token=${contextToken}#/books/${ISBN}?context_token=${contextToken}`;
try {
  await page.goto(readerUrl, {
    waitUntil: 'domcontentloaded',
    timeout: 45000
  });
  console.log(`URL: ${page.url()}`);
  console.log(`Title: ${await page.title()}`);
  await page.waitForTimeout(15000);
  
  // List all frames
  console.log('Frames:');
  for (const p of context.pages()) {
    console.log(`  Page: ${p.url()}`);
    for (const f of p.frames()) {
      console.log(`    Frame: ${f.url()}`);
    }
  }
} catch(e) {
  console.log(`Error: ${e.message}`);
}

// Test 4: Try loading bc_token URL with cookies
console.log('\n=== Test 4: bc_token URL with cookies ===');
try {
  const bcUrl = `https://bc.vitalsource.com/books/9781266431227?bc_token=${contextToken}&relaunch_vbid=9781266431227&course_dash_relaunch=true`;
  await page.goto(bcUrl, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  console.log(`URL: ${page.url()}`);
  console.log(`Title: ${await page.title()}`);
  await page.waitForTimeout(15000);
  
  // List all frames
  for (const p of context.pages()) {
    for (const f of p.frames()) {
      if (f.url().includes('jigsaw') || f.url().includes('vitalsource')) {
        console.log(`Frame: ${f.url()}`);
      }
    }
  }
} catch(e) {
  console.log(`Error: ${e.message}`);
}

await browser.close();
console.log('\n=== Done ===');
