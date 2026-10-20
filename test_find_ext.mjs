import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-gpu',
    '--disable-extensions-except=/root/vitalsource_pdf_extension',
    '--load-extension=/root/vitalsource_pdf_extension'
  ]
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 800 }
});

const page = await context.newPage();

// Try to access extension info via chrome://extensions
console.log('Checking extension ID...');

// Approach 1: Try navigation to chrome://extensions
try {
  await page.goto('chrome://extensions', { waitUntil: 'networkidle', timeout: 5000 });
  const content = await page.content();
  const extIdMatch = content.match(/[a-f]{32}/g);
  if (extIdMatch) {
    const extId = extIdMatch.find(id => id.length === 32);
    console.log('Found extension ID:', extId);
  } else {
    console.log('No extension ID found in chrome://extensions');
  }
} catch(e) {
  console.log('Could not access chrome://extensions:', e.message);
}

// Approach 2: Use CDP to get extension info
await page.goto('about:blank');
const client = await context.newCDPSession(page);

// Enable the Target domain
try {
  await client.send('Target.setDiscoverTargets', { discover: true });
  
  const targets = await client.send('Target.getTargets');
  console.log('\nAll targets:');
  for (const t of targets.targetInfos) {
    console.log(`  ${t.type}: ${t.url?.substring(0, 100)}`);
  }
} catch(e) {
  console.log('CDP Target failed:', e.message);
}

// Approach 3: Try to use chrome.runtime API via extension context
// First, let's get all targets including extension targets
console.log('\nSearching for service worker...');
try {
  await client.send('Runtime.enable');
  
  // Try to evaluate in the service worker context
  const targets2 = await client.send('Target.getTargets');
  const swTargets = targets2.targetInfos?.filter(t => t.type === 'service_worker');
  console.log('Service workers:', swTargets?.length || 0);
  
  for (const sw of swTargets || []) {
    console.log('  SW URL:', sw.url);
    const extMatch = sw.url?.match(/chrome-extension:\/\/([a-f]{32})/);
    if (extMatch) {
      const extId = extMatch[1];
      console.log('  Extension ID:', extId);
      
      // Try to connect to this target
      const targetId = sw.targetId;
      const session = await client.send('Target.attachToTarget', {
        targetId: targetId,
        flatten: true
      }).catch(() => null);
      
      if (session) {
        console.log('  Connected to SW');
      }
    }
  }
} catch(e) {
  console.log('Service worker check failed:', e.message);
}

// Approach 4: Simply verify the background script can be tested by
// evaluating in a dedicated chrome-extension page
// Try to navigate to a new tab and check
console.log('\n=== Trying extension popup ===');

// The popup needs the extension ID. Let's try to discover it.
// In Chromium, loaded extensions have IDs that are hashed from the path.
// We can try all possible IDs, but that's too many.
// Instead, let's just check the extension directory for a key file.
const crypto = await import('crypto');

// Actually, let's use the filesystem to find if there's a cached extension ID
try {
  const fs = await import('fs');
  const basePath = '/tmp/playwright_chromium';
  const dirs = fs.readdirSync('/tmp').filter(d => d.startsWith('playwright_chromium'));
  console.log('Chromium profile dirs:', dirs);
  
  // Check extension path in the profile
  for (const dir of dirs) {
    const extPath = `/tmp/${dir}/Default/Extensions`;
    if (fs.existsSync(extPath)) {
      console.log('Extensions dir found:', extPath);
      const extDirs = fs.readdirSync(extPath);
      for (const ext of extDir) {
        console.log('  Extension:', ext);
        const versions = fs.readdirSync(`${extPath}/${ext}`);
        for (const ver of versions) {
          console.log(`    Version dir: ${ver}, path: ${extPath}/${ext}/${ver}`);
        }
      }
    }
  }
} catch(e) {
  console.log('Filesystem check failed:', e.message);
}

// Approach 5: Use chrome.management API indirectly
// The content script can call chrome.runtime.sendMessage to the background
// Let's check if a new page can have content script
console.log('\n=== Checking if content scripts load with extension ===');
await page.goto('https://example.com', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(2000);

// Check if the content script was injected
const injected = await page.evaluate(() => {
  const scripts = Array.from(document.querySelectorAll('script[src*="chrome-extension"]'));
  return {
    extensionScripts: scripts.length,
    urls: scripts.map(s => s.src)
  };
});

console.log('Injection check:', JSON.stringify(injected));

await browser.close();
