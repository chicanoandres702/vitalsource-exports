import https from 'https';
import { URL } from 'url';
import fs from 'fs';

const ISBN = '9781266607752';
const JIGSAW = 'https://jigsaw.vitalsource.com';
const BC = 'https://bc.vitalsource.com';

// Store cookies globally
let cookies = '';

function parseCookies(setCookieHeaders) {
  for (const cookie of setCookieHeaders) {
    const cookiePart = cookie.split(';')[0];
    cookies += cookiePart + '; ';
  }
}

function httpRequest(url, method = 'GET', postData = null, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      port: 443,
      path: parsedUrl.pathname + parsedUrl.search,
      method: method,
      headers: {
        'Accept': '*/*',
        'Cookie': cookies,
        ...extraHeaders
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        // Save any new cookies
        if (res.headers['set-cookie']) {
          parseCookies(res.headers['set-cookie']);
        }
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: body
        });
      });
    });

    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function followRedirectChain(bcTokenUrl) {
  console.log('Following redirect chain...');
  let currentUrl = bcTokenUrl;
  const maxRedirects = 15;

  for (let i = 0; i < maxRedirects; i++) {
    console.log(`Step ${i + 1}: ${currentUrl.substring(0, 80)}...`);
    const resp = await httpRequest(currentUrl);
    console.log(`Status: ${resp.status}`);

    if (resp.status >= 300 && resp.status < 400) {
      const location = resp.headers.location;
      if (!location) break;
      
      // Check for new cookies
      if (resp.headers['set-cookie']) {
        for (const c of resp.headers['set-cookie']) {
          console.log('  New cookie:', c.split(';')[0]);
        }
      }
      
      currentUrl = location.startsWith('http') ? location : 'https://' + new URL(currentUrl).hostname + location;
    } else {
      console.log(`Final status: ${resp.status}`);
      if (resp.status === 200) {
        const title = resp.body.match(/<title>([^<]+)<\/title>/i);
        console.log('Page title:', title ? title[1] : 'no title');
        if (resp.body.includes('reader') || resp.body.includes('capella')) {
          console.log('Reader page loaded!');
        }
      }
      break;
    }
  }

  console.log('\n=== Final cookies count:', cookies.split(';').filter(c => c.trim()).length);
  
  // Save cookies to file
  fs.writeFileSync('/tmp/fresh_vitalsource_cookies.txt', cookies);
  console.log('Cookies saved to /tmp/fresh_vitalsource_cookies.txt');
  
  return cookies;
}

async function getSecureToken() {
  const resp = await httpRequest(`${JIGSAW}/secure-token`, 'GET', null, {
    'x-vitalsource-brand': 'capella',
    'x-vitalsource-sed': 'secure',
    'x-requested-with': 'XMLHttpRequest',
    'Accept': '*/*'
  });
  
  if (resp.status !== 200) {
    console.log('Secure token request failed:', resp.status, resp.body.substring(0, 200));
    return null;
  }
  
  const match = resp.body.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
  return match ? match[1] : null;
}

async function fetchXhtml(path, secureToken) {
  const url = `${JIGSAW}/books/${ISBN}${path}?favre=brett`;
  const resp = await httpRequest(url, 'GET', null, {
    'x-vitalsource-brand': 'capella',
    'x-vitalsource-sed': 'secure',
    'x-vitalsource-secure-token': secureToken,
    'x-requested-with': 'XMLHttpRequest',
    'Accept': 'text/html'
  });
  return resp;
}

async function fetchPagesJson(secureToken) {
  const url = `${JIGSAW}/books/${ISBN}/pages.json`;
  const resp = await httpRequest(url, 'GET', null, {
    'x-vitalsource-brand': 'capella',
    'x-vitalsource-sed': 'secure',
    'x-vitalsource-secure-token': secureToken,
    'x-requested-with': 'XMLHttpRequest',
    'Accept': 'application/json'
  });
  return resp;
}

async function main() {
  // Step 1: Follow bc_token redirect chain to get authentication
  await followRedirectChain('https://bc.vitalsource.com/books/9781266607752?bc_token=a04c8e50-af18-013f-9242-0e86b2f47384&relaunch_vbid=9781266607752&course_dash_relaunch=true');
  
  // Step 2: Get secure token
  console.log('\n=== Getting secure token ===');
  const secureToken = await getSecureToken();
  if (!secureToken) {
    console.log('Failed to get secure token');
    return;
  }
  console.log('Got secure token:', secureToken.substring(0, 50) + '...');
  
  // Step 3: Try fetching pages.json
  console.log('\n=== Fetching pages.json ===');
  const pagesResp = await fetchPagesJson(secureToken);
  console.log('Status:', pagesResp.status);
  if (pagesResp.status === 200) {
    console.log('Content (first 500):', pagesResp.body.substring(0, 500));
    const pages = JSON.parse(pagesResp.body);
    console.log('Total pages:', pages.length);
    
    // Save pages data
    fs.writeFileSync('/tmp/pages_data.json', JSON.stringify(pages, null, 2));
    console.log('Pages data saved to /tmp/pages_data.json');
    
    // Step 4: Try fetching a single XHTML page
    const testPath = pages[1].absoluteURL.replace(`/books/${ISBN}`, '') || pages[1].path;
    console.log(`\n=== Fetching test page: ${testPath} ===`);
    const xhtmlResp = await fetchXhtml(testPath, secureToken);
    console.log('Status:', xhtmlResp.status);
    console.log('Content (first 500):', xhtmlResp.body.substring(0, 500));
    
  } else {
    console.log('pages.json response:', pagesResp.body.substring(0, 500));
  }
}

main().catch(console.error);
