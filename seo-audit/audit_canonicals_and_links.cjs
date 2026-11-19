const fs = require('fs');
const path = require('path');

function glob(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(glob(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(full);
    }
  });
  return results;
}

const files = glob('travel-compass-hub-main/src');
console.log(`Auditing ${files.length} TypeScript/TSX source files...`);

let helmetCount = 0;
let canonicalUrlsFound = new Map();
let invalidCanonicals = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('Helmet') || content.includes('react-helmet')) {
    helmetCount++;
  }
  
  // match canonical href
  const canonicalRegex = /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/g;
  let match;
  while ((match = canonicalRegex.exec(content)) !== null) {
    const url = match[1];
    canonicalUrlsFound.set(url, f);
    if (!url.startsWith('https://rudrakshsafar.com')) {
      invalidCanonicals.push({ file: f, url, reason: 'Does not start with canonical domain https://rudrakshsafar.com' });
    }
    if (url.endsWith('/') && url !== 'https://rudrakshsafar.com/') {
      invalidCanonicals.push({ file: f, url, reason: 'Trailing slash present on non-root URL' });
    }
  }
});

console.log(`Pages with Helmet: ${helmetCount}`);
console.log(`Unique canonical URLs found in components: ${canonicalUrlsFound.size}`);
console.log(`Invalid canonical URLs: ${invalidCanonicals.length}`);
if (invalidCanonicals.length > 0) {
  console.log(invalidCanonicals);
}

// Check internal link audit across all files: look for href="..." or to="..."
const internalLinkRegex = /(?:href|to)=["'](\/[^"']*)["']/g;
const linksFound = new Set();
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = internalLinkRegex.exec(content)) !== null) {
    linksFound.add(m[1]);
  }
});

console.log(`Total unique internal href/to paths found: ${linksFound.size}`);

// Read App.tsx routes and vercel redirects
const appFile = fs.readFileSync('travel-compass-hub-main/src/App.tsx', 'utf8');
const routeRegex = /path=["']([^"']+)["']/g;
const appRoutes = new Set();
let rMatch;
while ((rMatch = routeRegex.exec(appFile)) !== null) {
  appRoutes.add(rMatch[1]);
}

const vercel = JSON.parse(fs.readFileSync('travel-compass-hub-main/vercel.json', 'utf8'));
const redirectMap = new Map();
vercel.redirects.forEach(r => redirectMap.set(r.source, r.destination));

// Also check public files (e.g. /favicon.ico, /images/..., /pdf/..., etc.)
const publicFiles = new Set();
function scanPublic(dir, prefix = '') {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    const rel = prefix + '/' + file;
    if (fs.statSync(full).isDirectory()) {
      scanPublic(full, rel);
    } else {
      publicFiles.add(rel);
    }
  });
}
scanPublic('travel-compass-hub-main/public');

const brokenLinks = [];
const redirectedLinks = [];

for (const link of linksFound) {
  const cleanPath = link.split('#')[0].split('?')[0];
  if (!cleanPath || cleanPath === '/') continue;

  // Check if static route in appRoutes
  if (appRoutes.has(cleanPath)) continue;

  // Check if matches dynamic route like /blog/:slug, /packages/:slug, etc.
  if (cleanPath.startsWith('/blog/') || cleanPath.startsWith('/packages/') || cleanPath.startsWith('/destinations/') || cleanPath.startsWith('/tours/')) {
    continue;
  }

  // Check if matches public static file
  if (publicFiles.has(cleanPath)) continue;

  // Check if in redirects
  if (redirectMap.has(cleanPath)) {
    redirectedLinks.push({ link, destination: redirectMap.get(cleanPath) });
    continue;
  }

  // Otherwise, potentially broken
  brokenLinks.push(cleanPath);
}

console.log(`Potential broken links found: ${brokenLinks.length}`);
if (brokenLinks.length > 0) {
  console.log('Sample broken links:', brokenLinks.slice(0, 15));
}

console.log(`Links pointing to 301 redirects (should ideally be updated in source): ${redirectedLinks.length}`);
if (redirectedLinks.length > 0) {
  console.log('Sample redirected links:', redirectedLinks.slice(0, 10));
}
