import { chromium } from 'playwright';
import http from 'http';
import { URL } from 'url';

const ISBN = '9781266607752';
const JIGSAW = 'https://jigsaw.vitalsource.com';
const PORT = 3001;
let bookUrl = process.argv[2] || null;

let browser, context, page;
let secureToken;
let tocData, pagesData;
let cssCache = {};
let navLock = false;
let exportState = { inProgress: false, completed: 0, total: 0, html: null, error: null };

async function getSecureToken(force = false) {
  if (secureToken && !force) return secureToken;
  const tokenResp = await context.request.get(`${JIGSAW}/secure-token`, {
    headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-requested-with': 'XMLHttpRequest' }
  });
  const tokenBody = await tokenResp.text();
  const match = tokenBody.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
  secureToken = match ? match[1] : null;
  return secureToken;
}

async function getToc() {
  if (tocData) return tocData;
  const token = await getSecureToken();
  const resp = await context.request.get(`${JIGSAW}/books/${ISBN}/toc`, {
    headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-vitalsource-secure-token': token, 'x-requested-with': 'XMLHttpRequest' }
  });
  tocData = await resp.json();
  return tocData;
}

async function getPages() {
  if (pagesData) return pagesData;
  const token = await getSecureToken();
  const resp = await context.request.get(`${JIGSAW}/books/${ISBN}/pages.json`, {
    headers: { 'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure', 'x-vitalsource-secure-token': token, 'x-requested-with': 'XMLHttpRequest' }
  });
  pagesData = await resp.json();
  return pagesData;
}

function findContentFrame(targetContext) {
  const ctx = targetContext || context;
  if (ctx) {
    for (const p of ctx.pages()) {
      for (const f of p.frames()) {
        if (f.url().includes('epub/OPS')) {
          return f;
        }
      }
    }
  }
  return null;
}

async function extractFrameContent(targetContext) {
  const frame = findContentFrame(targetContext);
  if (!frame) return null;

  return await frame.evaluate(() => {
    const body = document.body;
    if (!body || !body.innerHTML) return null;

    // Resolve all relative URLs to absolute before extracting HTML
    Array.from(document.images).forEach(img => {
      img.setAttribute('src', img.src);
    });
    Array.from(document.querySelectorAll('source')).forEach(src => {
      if (src.srcset) src.setAttribute('srcset', src.srcset);
    });

    const html = body.innerHTML;
    const text = body.innerText || '';
    const cssLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href);
    const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
    const frameUrl = window.location.href;
    let cfi = '';
    const cfiMatch = frameUrl.match(/#cfi=([^!]+)/);
    if (cfiMatch) cfi = decodeURIComponent(cfiMatch[1]);
    const firstLines = text.split('\n').filter(l => l.trim()).slice(0, 3);

    return { html, text: text.substring(0, 500), paragraphs: document.querySelectorAll('p').length, images, cssLinks, frameUrl, cfi, firstLines, chapterPath: window.location.pathname };
  });
}

async function extractPageAtCFI(cfi, pageContext) {
  if (!cfi) {
    console.log('[PARALLEL] No CFI provided, skipping');
    return null;
  }

  const ctxCookies = pageContext ? await pageContext.cookies() : null;
  let newContext = null;
  let newPage = null;
  
  try {
    newContext = await browser.newContext({
      viewport: { width: 1200, height: 1600 }
    });

    if (ctxCookies && ctxCookies.length > 0) {
      await newContext.addCookies(ctxCookies);
    }

    newPage = await newContext.newPage();
    const readerUrl = `https://capella.vitalsource.com/reader/books/${ISBN}/${encodeURIComponent(cfi)}`;
    console.log(`[PARALLEL] Loading: ${readerUrl.substring(0, 80)}...`);
    
    await newPage.goto(readerUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Wait for reader to load and frame to appear
    let waitStart = Date.now();
    let frame = null;
    while (!frame && Date.now() - waitStart < 25000) {
      await new Promise(r => setTimeout(r, 500));
      frame = findContentFrame(newContext);
    }

    if (!frame) {
      console.log(`[PARALLEL] No content frame found for CFI: ${cfi.substring(0, 40)}`);
      return null;
    }

    // Extract with retries
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const content = await frame.evaluate(() => {
          const body = document.body;
          if (!body || !body.innerHTML) return null;

          Array.from(document.images).forEach(img => {
            img.setAttribute('src', img.src);
          });
          Array.from(document.querySelectorAll('source')).forEach(src => {
            if (src.srcset) src.setAttribute('srcset', src.srcset);
          });

          const html = body.innerHTML;
          const text = body.innerText || '';
          const cssLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href);
          const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
          const frameUrl = window.location.href;
          let cfi = '';
          const cfiMatch = frameUrl.match(/#cfi=([^!]+)/);
          if (cfiMatch) cfi = decodeURIComponent(cfiMatch[1]);
          const firstLines = text.split('\n').filter(l => l.trim()).slice(0, 3);

          return { html, text: text.substring(0, 500), paragraphs: document.querySelectorAll('p').length, images, cssLinks, frameUrl, cfi, firstLines, chapterPath: window.location.pathname };
        });

        if (content) {
          console.log(`[PARALLEL] Extracted CFI: ${cfi.substring(0, 40)} (attempt ${attempt + 1})`);
          return content;
        }
      } catch(e) {
        console.log(`[PARALLEL] Extract attempt ${attempt + 1} failed: ${e.message}`);
      }
      await new Promise(r => setTimeout(r, 500));
    }
    
    return null;
  } finally {
    if (newContext) {
      try { await newContext.close(); } catch(e) {}
    }
  }
}

async function inlineCss(content) {
  if (!content.cssLinks || content.cssLinks.length === 0) return content;
  let token = await getSecureToken();
  const inlinedCss = [];
  for (const cssUrl of content.cssLinks) {
    const cacheKey = cssUrl + '|' + token;
    if (cssCache[cacheKey]) {
      inlinedCss.push(cssCache[cacheKey]);
      continue;
    }
    try {
      const resp = await context.request.get(cssUrl, {
        headers: {
          'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure',
          'x-vitalsource-secure-token': token, 'x-requested-with': 'XMLHttpRequest',
          'Accept': 'text/css',
        }
      });
      if (resp.status() === 200) {
        const cssText = await resp.text();
        cssCache[cacheKey] = cssText;
        inlinedCss.push(cssText);
      }
    } catch(e) {
      console.error(`CSS error: ${cssUrl} - ${e.message}`);
    }
  }
  if (inlinedCss.length > 0) content.inlinedCss = inlinedCss.join('\n');
  return content;
}

function buildFullHtml(content) {
  let cssTags = '';
  if (content.inlinedCss) {
    cssTags = `<style>${content.inlinedCss}</style>`;
  }
  let html = content.html || '';
  const baseUrl = content.frameUrl || `https://jigsaw.vitalsource.com/books/${ISBN}/epub/`;
  // Rewrite both absolute and relative image URLs to use proxy
  html = html.replace(/src="([^"]*)"/g, (match, src) => {
    if (src.startsWith('/vs/image') || src.startsWith('data:')) return match;
    try {
      const url = new URL(src, baseUrl);
      if (url.hostname === 'jigsaw.vitalsource.com') {
        return `src="/vs/image${url.pathname}"`;
      }
    } catch(e) {}
    return match;
  });
  html = html.replace(/srcset="https?:\/\/jigsaw\.vitalsource\.com/g, 'srcset="/vs/image');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Book Reader - ${ISBN}</title>
${cssTags}
<style>
  body { margin: 0; padding: 0; font-family: Georgia, serif; line-height: 1.6; color: #000; background: #fff; }
  .book-content-wrap { max-width: 800px; margin: 0 auto; padding: 20px 40px; page-break-after: always; }
  .book-content-wrap h1, h2, h3 { page-break-after: avoid; page-break-inside: avoid; margin-top: 24px; margin-bottom: 16px; }
  .book-content-wrap p { margin: 0 0 12px 0; page-break-inside: avoid; }
  .book-content-wrap img { max-width: 100%; height: auto; display: block; margin: 10px 0; }
  @media print {
    .book-content-wrap { padding: 0; }
    body { background: white; }
  }
</style>
</head>
<body>
<div class="book-content-wrap">
${html}
</div>
</body>
</html>`;
}

async function waitForFrameChange(oldUrl, timeoutMs = 30000, oldCfi = '') {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const frame = findContentFrame();
      if (frame) {
        const currentUrl = frame.url();
        if (currentUrl !== oldUrl) {
          try {
            await frame.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => {});
          } catch(e) {}
          await new Promise(r => setTimeout(r, 500));
          const content = await extractFrameContentSafe();
          if (content && (!oldCfi || content.cfi !== oldCfi)) return content;
        }
      }
    } catch(e) {}
    await new Promise(r => setTimeout(r, 300));
  }
  return null;
}

async function extractFrameContentSafe() {
  try {
    return await extractFrameContent();
  } catch(e) {
    console.error(`extractFrameContentSafe error: ${e.message}`);
    return null;
  }
}

async function extractAndFormat() {
  let content = await extractFrameContent();
  if (!content) return null;
  content = await inlineCss(content);

  let pageNumber = 0;
  if (pagesData && content.cfi) {
    for (let i = 0; i < pagesData.length; i++) {
      if (pagesData[i].cfi === content.cfi) { pageNumber = i + 1; break; }
    }
  }
  if (!pageNumber && pagesData && content.chapterPath) {
    for (let i = 0; i < pagesData.length; i++) {
      if (content.chapterPath.includes(pagesData[i].path) ||
          pagesData[i].absoluteURL === content.chapterPath ||
          content.chapterPath.endsWith(pagesData[i].path)) { pageNumber = i + 1; break; }
    }
  }
  if (!pageNumber && tocData && content.cfi) {
    for (let i = 0; i < tocData.length; i++) {
      if (tocData[i].cfi === content.cfi) { pageNumber = i + 1; break; }
    }
  }

  return {
    isbn: ISBN,
    html: buildFullHtml(content),
    text: content.text,
    paragraphs: content.paragraphs,
    images: content.images,
    frameUrl: content.frameUrl,
    cfi: content.cfi,
    page_number: pageNumber || 1,
    total_pages: pagesData ? pagesData.length : 0,
    toc_entries: tocData ? tocData.length : 0,
    firstLines: content.firstLines,
  };
}

async function initBrowser(url, cookies = []) {
  if (browser) await browser.close();
  secureToken = null;
  tocData = null;
  pagesData = null;
  cssCache = {};

  browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-gpu', '--disable-setuid-sandbox']
  });

  context = await browser.newContext({
    viewport: { width: 1200, height: 1600 }
  });

  if (cookies && cookies.length > 0) {
    await context.addCookies(cookies);
    console.log(`Loaded ${cookies.length} cookies`);
  }

  page = await context.newPage();

  console.log('Loading VitalSource reader...');
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  try {
    await page.waitForURL(/capella\.vitalsource\.com/, { timeout: 30000 });
  } catch(e) {}
  console.log(`Reader at: ${page.url()}`);

  await page.waitForTimeout(15000);

  let frame = findContentFrame();
  let waitStart = Date.now();
  while (!frame && Date.now() - waitStart < 60000) {
    await page.waitForTimeout(2000);
    frame = findContentFrame();
    if (!frame) console.log(`Waiting for frame... (${Date.now() - waitStart}ms)`);
  }

  if (!frame) {
    const currentUrl = page.url();
    if (currentUrl.includes('error') || currentUrl.includes('login')) {
      throw new Error('Authentication failed. bc_token may have expired. Use /vs/api/init with a fresh URL.');
    }
    throw new Error('Could not find content frame');
  }

  console.log(`Content frame found: ${frame.url()}`);

  // Go to first page
  const firstPageBtn = await page.$('button[aria-label="Go to First Page"]');
  if (firstPageBtn) {
    console.log('Navigating to first page...');
    const oldUrl = frame.url();
    await firstPageBtn.click();
    await waitForFrameChange(oldUrl, 30000);
    console.log(`At first page.`);
  }

  // Get TOC and pages
  await getToc();
  await getPages();
  console.log(`Loaded TOC: ${tocData.length} entries, Pages: ${pagesData.length}`);
  console.log('Browser initialized and ready.');
}

function checkBrowser(req, res) {
  if (!browser || !page) {
    res.writeHead(503, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      error: 'Browser not initialized',
      message: 'POST a bc_token URL to /vs/api/init first'
    }));
    return false;
  }
  return true;
}

async function handleApiInit(req, res) {
  if (exportState.inProgress) {
    res.writeHead(409, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      error: 'Export in progress. Wait for export to complete before reinitializing.',
      status: 'export_in_progress',
      export_completed: exportState.completed,
      export_total: exportState.total,
    }));
    return;
  }
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      let url = bookUrl;
      let cookies = null;
      try {
        const json = JSON.parse(body);
        url = json.url || json.bc_token || json.token || bookUrl;
        cookies = json.cookies || null;
      } catch(e) {
        url = body || bookUrl;
      }
      if (!url && cookies) {
        url = `https://capella.vitalsource.com/reader/books/${ISBN}`;
      }

      if (!url) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'No URL or cookies provided' }));
        return;
      }

      try {
        await initBrowser(url, cookies);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          status: 'ok',
          message: 'Browser initialized',
          reader_url: page.url(),
          toc_entries: tocData?.length || 0,
          total_pages: pagesData?.length || 0,
        }));
      } catch(e) {
        console.error('Init error:', e.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    } catch(e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
  });
}

async function handleApiPage(req, res) {
  if (!checkBrowser(req, res)) return;
  try {
    const result = await extractAndFormat();
    if (!result) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No content available' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
}

async function handleApiExport(req, res) {
  if (!checkBrowser(req, res)) return;
  if (exportState.inProgress) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'in_progress', completed: exportState.completed, total: exportState.total }));
    return;
  }

   const totalPages = pagesData ? pagesData.length : 0;
  const startTime = Date.now();

  if (totalPages === 0) {
    console.error('Export error: pagesData is empty - book not initialized properly');
      exportState = { inProgress: false, completed: 0, total: totalPages, ready: false, error: 'Book not initialized', html: null, startTime };
    res.writeHead(422, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'error', error: 'Book not initialized. Call /vs/api/init first.' }));
    return;
  }

  // Start export in background
    exportState = { inProgress: true, completed: 0, total: totalPages, html: null, error: null, startTime };
  console.log(`Starting background export of ${totalPages} pages...`);

  res.writeHead(202, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'started', total: totalPages }));

    (async () => {
    try {
      const pages = [];
      const PARALLEL_WORKERS = 4; // Number of parallel browser contexts

      console.log(`Starting background export of ${totalPages} pages with ${PARALLEL_WORKERS} parallel workers...`);

      const ctxCookies = await context.cookies();

      async function initParallelContext() {
        const newContext = await browser.newContext({
          viewport: { width: 1200, height: 1600 }
        });
        
        if (ctxCookies && ctxCookies.length > 0) {
          await newContext.addCookies(ctxCookies);
        }

        const newPage = await newContext.newPage();
        const readerUrl = `https://capella.vitalsource.com/reader/books/${ISBN}`;
        await newPage.goto(readerUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await newPage.waitForTimeout(15000);

        // Find content frame
        let frame = null;
        let waitStart = Date.now();
        while (!frame && Date.now() - waitStart < 30000) {
          await new Promise(r => setTimeout(r, 500));
          for (const p of newContext.pages()) {
            for (const f of p.frames()) {
              if (f.url().includes('epub/OPS')) {
                frame = f;
                break;
              }
            }
            if (frame) break;
          }
        }

        if (!frame) {
          console.log('[PARALLEL] Failed to find content frame in new context');
          await newContext.close();
          return null;
        }

        // Go to first page
        const firstBtn = await newPage.$('button[aria-label="Go to First Page"]');
        if (firstBtn) {
          await firstBtn.click();
          await new Promise(r => setTimeout(r, 3000));
        }

        return { context: newContext, page: newPage, frame };
      }

      async function navigateToPage(ctxInfo, targetIndex) {
        // Navigate via Next clicks to reach the target page index
        const startIndex = ctxInfo.currentPageIndex || 0;
        for (let i = startIndex; i < targetIndex; i++) {
          const nextBtn = await ctxInfo.page.$('button[aria-label="Next"]');
          if (!nextBtn) {
            console.log(`[PARALLEL] Next button not found at page ${i}`);
            return false;
          }
          await nextBtn.click();
          await new Promise(r => setTimeout(r, 200));
        }
        ctxInfo.currentPageIndex = targetIndex;

        // Wait for frame to update
        await new Promise(r => setTimeout(r, 1200));
        return true;
      }

      async function extractFromContext(ctxInfo) {
        let frame = null;
        let waitStart = Date.now();
        while (!frame && Date.now() - waitStart < 10000) {
          for (const f of ctxInfo.page.frames()) {
            if (f.url().includes('epub/OPS')) {
              frame = f;
              break;
            }
          }
          if (!frame) await new Promise(r => setTimeout(r, 300));
        }
        if (!frame) return null;

        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            const content = await frame.evaluate(() => {
              const body = document.body;
              if (!body || !body.innerHTML) return null;

              Array.from(document.images).forEach(img => {
                img.setAttribute('src', img.src);
              });
              Array.from(document.querySelectorAll('source')).forEach(src => {
                if (src.srcset) src.setAttribute('srcset', src.srcset);
              });

              const html = body.innerHTML;
              const text = body.innerText || '';
              const cssLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href);
              const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
              const frameUrl = window.location.href;
              let cfi = '';
              const cfiMatch = frameUrl.match(/#cfi=([^!]+)/);
              if (cfiMatch) cfi = decodeURIComponent(cfiMatch[1]);
              const firstLines = text.split('\n').filter(l => l.trim()).slice(0, 3);

              return { html, text: text.substring(0, 500), paragraphs: document.querySelectorAll('p').length, images, cssLinks, frameUrl, cfi, firstLines, chapterPath: window.location.pathname };
            });

            if (content) return content;
          } catch(e) {
            console.log(`[PARALLEL] Extract attempt ${attempt + 1} failed: ${e.message}`);
          }
          await new Promise(r => setTimeout(r, 300));
        }
        return null;
      }

      // Initialize parallel worker contexts
      console.log('[PARALLEL] Initializing parallel worker contexts...');
      const workers = [];
      for (let i = 0; i < PARALLEL_WORKERS; i++) {
        console.log(`[PARALLEL] Initializing worker ${i + 1}/${PARALLEL_WORKERS}...`);
        const ctxInfo = await initParallelContext();
        if (ctxInfo) {
          ctxInfo.workerId = i;
          ctxInfo.currentPageIndex = 0;
          workers.push(ctxInfo);
          console.log(`[PARALLEL] Worker ${i + 1} ready at first page`);
        } else {
          console.log(`[PARALLEL] Worker ${i + 1} failed to initialize`);
        }
      }

      if (workers.length === 0) {
        throw new Error('Failed to initialize any parallel workers');
      }

      console.log(`[PARALLEL] ${workers.length} workers active. Starting parallel extraction...`);

      // Distribute pages across workers
      const workerQueues = Array.from({ length: workers.length }, () => []);
      for (let i = 0; i < totalPages; i++) {
        workerQueues[i % workers.length].push(i);
      }

      // Process each worker's queue in parallel
      const workerPromises = workers.map(async (worker, wi) => {
        const queue = workerQueues[wi];
        if (queue.length === 0) {
          // This worker has no pages - just navigate to its starting page
          return [];
        }

        // Navigate to the first page in this worker's queue
        const firstTarget = queue[0];
        if (firstTarget > 0) {
          const navOk = await navigateToPage(worker, firstTarget);
          if (!navOk) {
            console.log(`[PARALLEL] Worker ${worker.workerId}: navigation to page ${firstTarget + 1} failed`);
          }
        }

        const results = [];
        for (let qi = 0; qi < queue.length; qi++) {
          const pageIndex = queue[qi];
          const isLast = qi === queue.length - 1;

          // If not the last page, navigate to next page for the next iteration
          if (!isLast) {
            const navigatePromise = navigateToPage(worker, queue[qi + 1]).catch(() => false);

            // Extract current page while navigating
            const content = await extractFromContext(worker);
            if (content) {
              results.push({ pageIndex, content });
              exportState.completed = pages.filter(p => p !== undefined).length + 1;
              const doneCount = results.length + (qi > 0 ? 0 : 0);
              if (doneCount % 5 === 0 || doneCount === queue.length) {
                console.log(`[PARALLEL] Worker ${worker.workerId}: page ${pageIndex + 1}/${totalPages} extracted`);
              }
            }

            // Wait for navigation to complete before next extraction
            const navOk = await navigatePromise;
            if (!navOk) {
              console.log(`[PARALLEL] Worker ${worker.workerId}: navigation failed at page ${queue[qi + 1] + 1}`);
            }
          } else {
            // Last page - just extract
            const content = await extractFromContext(worker);
            if (content) {
              results.push({ pageIndex, content });
            }
          }
        }
        return results;
      });

      const allResults = await Promise.all(workerPromises);
      const flatResults = allResults.flat();

      // Process results (inline CSS + build HTML)
      console.log(`[PARALLEL] Processing ${flatResults.length} pages...`);
      const processPromises = flatResults.map(async ({ pageIndex, content }) => {
        const processed = await inlineCss(content);
        const pageHtml = buildFullHtml(processed);
        return {
          page: pageIndex + 1,
          cfi: processed.cfi,
          title: processed.firstLines ? processed.firstLines[0] : '',
          html: pageHtml,
        };
      });

      const processedPages = await Promise.all(processPromises);
      processedPages.forEach(p => {
        pages[p.page - 1] = p;
      });

      console.log(`All pages extracted. Pages collected: ${pages.filter(p => p !== undefined).length}/${totalPages}`);

      // Filter out any failed pages
      const validPages = pages.filter(p => p !== undefined);
      if (validPages.length < totalPages) {
        console.log(`WARNING: ${totalPages - validPages.length} pages failed extraction`);
      }

      let allHtml = validPages.map(p => p.html.replace(/<!DOCTYPE html>[\s\S]*<body>/, '').replace(/<\/body>[\s\S]*<\/html>/, '').replace(/<\/div>\s*$/, '')).join('\n');
      allHtml = allHtml.replace(/src="https?:\/\/jigsaw\.vitalsource\.com([^"]*)"/g, 'src="/vs/image$1"');

      const fullExport = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Book: ${ISBN} - Full Export</title>
<style>
  body { font-family: Georgia, serif; line-height: 1.6; color: #000; background: #fff; margin: 0; padding: 0; }
  .book-content-wrap { max-width: 800px; margin: 0 auto; padding: 30px 50px; page-break-after: always; }
  .page-number { text-align: center; font-size: 10px; color: #666; margin: 10px 0; }
  img { max-width: 100%; height: auto; display: block; margin: 10px 0; }
  @media print { .book-content-wrap { padding: 0 20px; page-break-after: always; } }
</style>
</head>
<body>
${allHtml}
</body>
</html>`;

       exportState.html = fullExport;
       exportState.completed = totalPages;
       console.log(`Export complete. ${validPages.length} pages. Took ${(Date.now() - startTime)/1000}s`);
    } catch(e) {
      console.error('Export error:', e);
      exportState.error = e.message;
    } finally {
      // Cleanup worker contexts
      for (const w of workers) {
        try { await w.context.close(); } catch(e) {}
      }
      console.log('[PARALLEL] Worker contexts cleaned up');
      exportState.inProgress = false;
    }
    })();
}

async function handleApiExportStatus(req, res) {
  if (!checkBrowser(req, res)) return;
  const status = {
    in_progress: exportState.inProgress,
    completed: exportState.completed,
    total: exportState.total,
    ready: !!exportState.html,
    error: exportState.error,
    elapsed: exportState.startTime ? Math.floor((Date.now() - exportState.startTime) / 1000) : 0,
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(status));
}

async function handleApiExportDownload(req, res) {
  if (!checkBrowser(req, res)) return;
  if (!exportState.html) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Export not complete' }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(exportState.html);
}

async function handleImageProxy(req, res) {
  const urlObj = new URL(req.url, `http://localhost:${PORT}`);
  const imgPath = urlObj.pathname.replace('/vs/image', '') + urlObj.search;
  const fullUrl = `${JIGSAW}${imgPath}`;

  try {
    const token = await getSecureToken();
    const resp = await context.request.get(fullUrl, {
      headers: {
        'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure',
        'x-vitalsource-secure-token': token,
      }
    });
    const arrayBuffer = await resp.body();
    const contentType = resp.headers()['content-type'] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400',
    });
    res.end(Buffer.from(arrayBuffer));
  } catch(e) {
    console.error('Image proxy error:', e.message);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error fetching image');
  }
}

async function handleCssProxy(req, res) {
  const urlObj = new URL(req.url, `http://localhost:${PORT}`);
  const cssPath = urlObj.pathname.replace('/vs/css', '') + urlObj.search;
  const fullUrl = `${JIGSAW}${cssPath}`;

  try {
    const token = await getSecureToken();
    const resp = await context.request.get(fullUrl, {
      headers: {
        'x-vitalsource-brand': 'capella', 'x-vitalsource-sed': 'secure',
        'x-vitalsource-secure-token': token,
        'x-requested-with': 'XMLHttpRequest',
        'Accept': 'text/css',
      }
    });
    const cssText = await resp.text();
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(cssText);
  } catch(e) {
    console.error('CSS proxy error:', e);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error fetching CSS');
  }
}

async function matchPageNumber(content) {
  if (pagesData && content.cfi) {
    for (let i = 0; i < pagesData.length; i++) {
      if (pagesData[i].cfi === content.cfi) return i + 1;
    }
  }
  if (pagesData && content.chapterPath) {
    for (let i = 0; i < pagesData.length; i++) {
      const p = pagesData[i];
      if (content.chapterPath.includes(p.path) || p.absoluteURL === content.chapterPath || content.chapterPath.endsWith(p.path)) {
        return i + 1;
      }
    }
  }
  return 0;
}

async function handleApiNav(req, res, direction) {
  if (!checkBrowser(req, res)) return;
  if (navLock) {
    res.writeHead(429, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Navigation in progress' }));
    return;
  }
  navLock = true;
  try {
    const selector = direction === 'next' ? 'button[aria-label="Next"]' : 'button[aria-label="Previous"]';
    const btn = await page.$(selector);
    if (!btn) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: `${direction} button not found` }));
      return;
    }

    const oldFrame = findContentFrame();
    const oldUrl = oldFrame ? oldFrame.url() : '';
    await btn.click();
    console.log(`Clicked ${direction}`);

    let content = await waitForFrameChange(oldUrl, 30000);
    if (!content) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Frame did not change' }));
      return;
    }

    content = await inlineCss(content);
    const result = {
      isbn: ISBN,
      html: buildFullHtml(content),
      text: content.text,
      paragraphs: content.paragraphs,
      images: content.images,
      frameUrl: content.frameUrl,
      cfi: content.cfi,
      page_number: 1,
      total_pages: pagesData ? pagesData.length : 0,
      firstLines: content.firstLines,
    };
    let foundPage = false;
    if (pagesData && content.cfi) {
      for (let i = 0; i < pagesData.length; i++) {
        if (pagesData[i].cfi === content.cfi) { result.page_number = i + 1; foundPage = true; break; }
      }
    }
    if (!foundPage && pagesData && content.chapterPath) {
      for (let i = 0; i < pagesData.length; i++) {
        if (content.chapterPath.includes(pagesData[i].path) ||
            pagesData[i].absoluteURL === content.chapterPath ||
            content.chapterPath.endsWith(pagesData[i].path)) {
          result.page_number = i + 1; foundPage = true; break;
        }
      }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } catch(e) {
    console.error(`Nav error: ${e.message}`);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  } finally {
    navLock = false;
  }
}

async function handleApiFirst(req, res) {
  if (!checkBrowser(req, res)) return;
  if (navLock) {
    res.writeHead(429, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Navigation in progress' }));
    return;
  }
  navLock = true;
  try {
    const btn = await page.$('button[aria-label="Go to First Page"]');
    if (!btn) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'First page button not found' }));
      return;
    }
    const oldFrame = findContentFrame();
    const oldUrl = oldFrame ? oldFrame.url() : '';
    await btn.click();
    let content = await waitForFrameChange(oldUrl, 30000);
    if (!content) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Frame did not change' }));
      return;
    }
    content = await inlineCss(content);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      isbn: ISBN, html: buildFullHtml(content), text: content.text,
      paragraphs: content.paragraphs, images: content.images,
      frameUrl: content.frameUrl, cfi: content.cfi,
      page_number: 1, total_pages: pagesData ? pagesData.length : 0,
      firstLines: content.firstLines,
    }));
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  } finally {
    navLock = false;
  }
}

async function handleApiToc(req, res) {
  if (!checkBrowser(req, res)) return;
  try {
    const toc = await getToc();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      isbn: ISBN,
      total_entries: toc.length,
      entries: toc.map(e => ({ title: e.title, level: e.level, path: e.path, cfi: e.cfi }))
    }));
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  }
}

function handleReaderPage(req, res) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VitalSource Book Reader</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Georgia, serif; background: #f5f1e6; color: #333; }
  .header { background: #2c3e50; color: white; padding: 12px 20px; display: flex; align-items: center; gap: 15px; }
  .header h1 { font-size: 18px; }
  .header .book-title { font-size: 14px; opacity: 0.8; }
  .controls { display: flex; gap: 10px; align-items: center; }
  .controls button { background: #3498db; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px; }
  .controls button:disabled { background: #95a5a6; cursor: not-allowed; }
  .controls button:hover:not(:disabled) { background: #2980b9; }
  .page-info { font-size: 12px; opacity: 0.8; }
  .reader-container { max-width: 800px; margin: 20px auto; padding: 0 20px; }
  .book-content { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); min-height: 400px; }
  .book-content h1, h2, h3 { margin: 20px 0 10px; }
  .book-content p { margin: 10px 0; }
  .book-content img { max-width: 100%; height: auto; }
  .loading { text-align: center; padding: 60px; color: #999; }
  .init-prompt { text-align: center; padding: 60px; }
  .init-prompt input { width: 500px; padding: 10px; margin-bottom: 10px; font-size: 14px; border: 1px solid #ccc; border-radius: 4px; }
  .init-prompt button { padding: 10px 20px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; }
  .init-prompt button:hover { background: #219a52; }
  .init-prompt label { display: block; margin-bottom: 8px; font-weight: bold; color: #555; }
</style>
</head>
<body>
<div class="header">
  <h1>VitalSource Book Reader</h1>
  <span class="book-title">ISBN: ${ISBN}</span>
  <div class="controls">
    <button id="firstPageBtn">First Page</button>
    <button id="prevBtn">Previous</button>
    <span id="pageInput" style="display:none">
      <input type="number" id="gotoPage" min="1" style="width:50px;padding:4px;font-size:14px;" placeholder="pg">
      <button id="goToPageBtn">Go</button>
    </span>
    <button id="nextBtn">Next</button>
    <span class="page-info" id="pageInfo">-- / --</span>
    <button id="printBtn" style="background:#27ae60;">Print to PDF</button>
  </div>
</div>
<div class="reader-container">
  <div class="book-content" id="bookContent">
    <div class="loading">Initializing...</div>
  </div>
</div>
<script>
window.onerror = function(msg, src, line, col, err) {
  console.error('Window error:', msg, 'at', line, 'in', src);
};
let currentPage = 0, totalPages = 0, isLoading = false;

function disableNav(d) {
  document.getElementById('prevBtn').disabled = d;
  document.getElementById('nextBtn').disabled = d;
  document.getElementById('firstPageBtn').disabled = d;
}

async function fetchApi(url, opts = {}) {
  const resp = await fetch(url, { headers: { 'Accept': 'application/json' }, ...opts });
  if (!resp.ok) throw new Error('API error: ' + resp.status);
  return resp.json();
}

function setContent(data) {
  const el = document.getElementById('bookContent');
  let bodyContent = data.html || '';
  const bodyStart = bodyContent.indexOf('<body');
  const bodyEnd = bodyContent.indexOf('</body>');
  if (bodyStart !== -1 && bodyEnd !== -1) {
    const bodyOpenEnd = bodyContent.indexOf('>', bodyStart);
    bodyContent = bodyContent.substring(bodyOpenEnd + 1, bodyEnd);
  }
  bodyContent = bodyContent.trim();
  if (bodyContent.startsWith('<div class="book-content-wrap">')) {
    bodyContent = bodyContent.substring('<div class="book-content-wrap">'.length);
    if (bodyContent.endsWith('</div>')) bodyContent = bodyContent.slice(0, -6);
  }
  el.innerHTML = bodyContent;
  document.getElementById('pageInfo').textContent = (data.page_number || 1) + ' / ' + (data.total_pages || 0);
  currentPage = data.page_number || 1;
  totalPages = data.total_pages || 0;
  currentCfi = data.cfi || '';
  document.getElementById('pageInput').style.display = 'inline';
  document.getElementById('pageInfo').textContent = currentPage + ' / ' + totalPages;
}

async function loadPage() {
  if (isLoading) return;
  isLoading = true; disableNav(true);
  document.getElementById('bookContent').innerHTML = '<div class="loading">Loading...</div>';
  try {
    const data = await fetchApi('/vs/api/page');
    setContent(data);
  } catch(e) {
    showInitPrompt(e.message);
  }
  isLoading = false; disableNav(false);
}

function showInitPrompt(errorMsg) {
  document.getElementById('pageInput').style.display = 'none';
  document.getElementById('bookContent').innerHTML =
    '<div class="init-prompt">' +
    '<label>Enter bc_token URL to initialize the reader:</label>' +
    '<input id="bcTokenUrl" type="text" placeholder="https://bc.vitalsource.com/books/9781266431227?bc_token=...&relaunch_vbid=...&course_dash_relaunch=true" size="60">' +
    '<br><button onclick="initServer()">Initialize Reader</button>' +
    (errorMsg ? '<div style="margin-top:10px;color:#e74c3c">Error: ' + errorMsg + '</div>' : '') +
    '</div>';
}

async function navigateNext() {
  if (isLoading) return;
  isLoading = true; disableNav(true);
  try {
    const data = await fetchApi('/vs/api/next');
    setContent(data);
  } catch(e) { alert('Error: ' + e.message); }
  isLoading = false; disableNav(false);
}

async function navigatePrev() {
  if (isLoading) return;
  isLoading = true; disableNav(true);
  try {
    const data = await fetchApi('/vs/api/prev');
    setContent(data);
  } catch(e) { alert('Error: ' + e.message); }
  isLoading = false; disableNav(false);
}

async function goToFirstPage() {
  if (isLoading) return;
  isLoading = true; disableNav(true);
  try {
    const data = await fetchApi('/vs/api/first');
    setContent(data);
  } catch(e) { alert('Error: ' + e.message); }
  isLoading = false; disableNav(false);
}

async function initServer() {
  const url = document.getElementById('bcTokenUrl').value;
  isLoading = true; disableNav(true);
  document.getElementById('bookContent').innerHTML = '<div class="loading">Initializing reader...</div>';
  try {
    const initResp = await fetch('/vs/api/init', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: url })
    });
    if (!initResp.ok) {
      const initErr = await initResp.json();
      throw new Error(initErr.error || 'Init failed');
    }
    const data = await fetchApi('/vs/api/page');
    setContent(data);
  } catch(e) {
    showInitPrompt(e.message);
  }
  isLoading = false; disableNav(false);
}

async function goToPage() {
  const target = parseInt(document.getElementById('gotoPage').value);
  if (!target || target < 1) return;
  const current = currentPage || 1;
  isLoading = true; disableNav(true);
  try {
    if (target > current) {
      for (let i = current; i < target; i++) {
        await fetchApi('/vs/api/next');
      }
    } else if (target < current) {
      for (let i = current; i > target; i--) {
        await fetchApi('/vs/api/prev');
      }
    }
    const data = await fetchApi('/vs/api/page');
    setContent(data);
  } catch(e) { alert('Error: ' + e.message); }
  isLoading = false; disableNav(false);
}

async function exportAll() {
  isLoading = true; disableNav(true);
  document.getElementById('bookContent').innerHTML = '<div class="loading">Starting export...<br>This will take several minutes for all 250 pages.</div>';

  // Start background export
  try {
    await fetch('/vs/api/export', { method: 'POST' });
    // Poll for progress
    const progressEl = document.getElementById('bookContent');
    while (isLoading) {
      const status = await fetchApi('/vs/api/export/status');
      if (status.ready) {
        // Export complete - open in new window for printing
        const downloadResp = await fetch('/vs/api/export/download');
        const html = await downloadResp.text();
        const printWindow = window.open('', '_blank');
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => printWindow.print(), 500);
        progressEl.innerHTML = '<div class="loading">Export complete! Print dialog opened in new tab.</div>';
        isLoading = false; disableNav(false);
        return;
      }
      if (status.error) {
        progressEl.innerHTML = '<div class="loading">Export error: ' + status.error + '</div>';
        isLoading = false; disableNav(false);
        return;
      }
      if (status.in_progress) {
        progressEl.innerHTML = '<div class="loading">Exporting... ' + status.completed + ' / ' + status.total + ' pages (' + Math.round(status.completed / status.total * 100) + '%)<br>Elapsed: ' + status.elapsed + 's</div>';
      }
      await new Promise(r => setTimeout(r, 3000));
    }
  } catch(e) {
    document.getElementById('bookContent').innerHTML = '<div class="loading">Export error: ' + e.message + '</div>';
    isLoading = false; disableNav(false);
  }
}

async function printCurrentPage() {
  const printWindow = window.open('', '_blank');
  const data = await fetchApi('/vs/api/page');
  printWindow.document.write(data.html);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => printWindow.print(), 500);
}

document.getElementById('nextBtn').addEventListener('click', navigateNext);
document.getElementById('prevBtn').addEventListener('click', navigatePrev);
document.getElementById('firstPageBtn').addEventListener('click', goToFirstPage);
document.getElementById('goToPageBtn').addEventListener('click', goToPage);
document.getElementById('printBtn').addEventListener('click', exportAll);
document.getElementById('printBtn').innerHTML = 'Export to PDF';
loadPage();
</script>
</body>
</html>`;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = urlObj.pathname;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  try {
    if (pathname === '/vs/') return handleReaderPage(req, res);
    if (pathname === '/vs/api/init') return await handleApiInit(req, res);
    if (pathname === '/vs/api/page') return await handleApiPage(req, res);
    if (pathname === '/vs/api/next') return await handleApiNav(req, res, 'next');
    if (pathname === '/vs/api/prev') return await handleApiNav(req, res, 'prev');
    if (pathname === '/vs/api/first') return await handleApiFirst(req, res);
    if (pathname === '/vs/api/export') return await handleApiExport(req, res);
    if (pathname === '/vs/api/export/status') return await handleApiExportStatus(req, res);
    if (pathname === '/vs/api/export/download') return await handleApiExportDownload(req, res);
    if (pathname.startsWith('/vs/image')) return await handleImageProxy(req, res);
    if (pathname.startsWith('/vs/css')) return await handleCssProxy(req, res);
    if (pathname === '/vs/api/toc') return await handleApiToc(req, res);
    if (pathname === '/vs/api/pages') return await getPages().then(p => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ isbn: ISBN, total_pages: p.length, pages: p.map(pg => ({ path: pg.path, cfi: pg.cfi, page: pg.page, chapterTitle: pg.chapterTitle })) }));
    }).catch(e => { res.writeHead(500, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: e.message })); });
    if (pathname === '/vs/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ initialized: !!browser, page_count: pagesData?.length || 0, toc_count: tocData?.length || 0 }));
      return;
    }
  } catch(e) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

async function startServer() {
  server.listen(PORT, () => {
    console.log(`VitalSource Reader Server on port ${PORT}`);
    if (!bookUrl) {
      console.log('No bc_token URL provided at startup. Use /vs/api/init to set one.');
      console.log('POST JSON {"url":"https://bc.vitalsource.com/..."} to initialize');
    } else {
      initBrowser(bookUrl).catch(e => console.error('Init error:', e.message));
    }
  });
}

startServer();

process.on('SIGINT', async () => {
  console.log('\nShutting down...');
  if (browser) await browser.close();
  process.exit(0);
});
