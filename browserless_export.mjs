import https from 'https';
import { URL } from 'url';
import fs from 'fs';

const ISBN = '9781266607752';
const JIGSAW = 'https://jigsaw.vitalsource.com';

let allCookies = '';

function collectCookies(setCookieHeaders) {
  if (!setCookieHeaders) return;
  for (const cookie of setCookieHeaders) {
    const cookiePart = cookie.split(';')[0];
    allCookies += cookiePart + '; ';
  }
}

function httpRequest(url, method = 'GET', headers = {}) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      port: 443,
      path: parsedUrl.pathname + parsedUrl.search,
      method: method,
      headers: {
        'Accept': '*/*',
        ...headers
      }
    };
    
    if (allCookies) {
      options.headers['Cookie'] = allCookies;
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        collectCookies(res.headers['set-cookie']);
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: body
        });
      });
    });

    req.on('error', reject);
    req.end();
  });
}

async function followRedirectChain(bcTokenUrl) {
  console.log('Following redirect chain...');
  let currentUrl = bcTokenUrl;
  
  for (let i = 0; i < 15; i++) {
    console.log(`Step ${i + 1}: ${currentUrl.substring(0, 80)}`);
    const resp = await httpRequest(currentUrl);
    console.log(`Status: ${resp.status}`);
    
    if (resp.status >= 300 && resp.status < 400) {
      const location = resp.headers.location;
      if (!location) break;
      currentUrl = location.startsWith('http') ? location : 'https://' + new URL(currentUrl).hostname + location;
    } else {
      console.log(`Final status: ${resp.status}`);
      break;
    }
  }

  console.log(`Collected ${allCookies.split(';').filter(c => c.trim()).length} cookies`);
  fs.writeFileSync('/tmp/fresh_cookies.txt', allCookies);
  return allCookies;
}

async function getSecureToken() {
  const resp = await httpRequest(`${JIGSAW}/secure-token`, 'GET', {
    'x-vitalsource-brand': 'capella',
    'x-vitalsource-sed': 'secure',
    'x-requested-with': 'XMLHttpRequest',
    'Accept': '*/*'
  });
  
  if (resp.status !== 200) {
    console.log('Secure token failed:', resp.status);
    return null;
  }
  
  const match = resp.body.match(/Jigsaw\.setupSecureToken\(['"]([^'"]+)['"]\)/);
  return match ? match[1] : null;
}

async function fetchPagesJson(secureToken) {
  const resp = await httpRequest(
    `${JIGSAW}/books/${ISBN}/pages.json`, 'GET', {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': secureToken,
      'x-requested-with': 'XMLHttpRequest',
      'Accept': 'application/json'
    }
  );
  return resp;
}

async function fetchXhtml(path, secureToken) {
  const resp = await httpRequest(
    `${JIGSAW}/books/${ISBN}${path}?favre=brett`, 'GET', {
      'x-vitalsource-brand': 'capella',
      'x-vitalsource-sed': 'secure',
      'x-vitalsource-secure-token': secureToken,
      'x-requested-with': 'XMLHttpRequest',
      'Accept': 'text/html'
    }
  );
  return resp;
}

async function main() {
  // Step 1: Follow bc_token redirect chain
  await followRedirectChain(
    'https://bc.vitalsource.com/books/9781266607752?bc_token=a04c8e50-af18-013f-9242-0e86b2f47384&relaunch_vbid=9781266607752&course_dash_relaunch=true'
  );

  // Step 2: Get secure token
  console.log('\nGetting secure token...');
  const secureToken = await getSecureToken();
  if (!secureToken) {
    console.log('Failed to get secure token');
    return;
  }
  console.log('Got secure token:', secureToken.substring(0, 50) + '...');

  // Step 3: Try pages.json
  console.log('\nFetching pages.json...');
  const pagesResp = await fetchPagesJson(secureToken);
  console.log('Status:', pagesResp.status);
  
  if (pagesResp.status === 200) {
    const pages = JSON.parse(pagesResp.body);
    console.log('Total pages:', pages.length);
    fs.writeFileSync('/tmp/pages_data.json', JSON.stringify(pages, null, 2));
    console.log('Saved pages data');
    
    // Step 4: Test fetching a single XHTML page
    console.log('\nFetching test page...');
    const testPath = pages[1].absoluteURL.replace(`/books/${ISBN}`, '');
    const xhtmlResp = await fetchXhtml(testPath, secureToken);
    console.log('XHTML Status:', xhtmlResp.status);
    console.log('Content (first 500):', xhtmlResp.body.substring(0, 500));
  } else {
    console.log('pages.json response:', pagesResp.body.substring(0, 300));
  }
}

main().catch(console.error);
