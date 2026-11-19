import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const appTsxPath = path.join(projectRoot, 'src', 'App.tsx');
const publicDir = path.join(projectRoot, 'public');

const content = fs.readFileSync(appTsxPath, 'utf8');

// Regex to capture path and element
// Handles multi-line or single-line <Route path="..." element={...} />
const routeRegex = /<Route\s+path=["']([^"']+)["']\s+element=\{([\s\S]*?)\}/g;
let match;
const activeStatic = new Set();
const activeDynamic = new Set();
const redirects = new Map();

while ((match = routeRegex.exec(content)) !== null) {
    const routePath = match[1].trim();
    const element = match[2].trim();

    if (routePath === '*') continue;

    if (element.includes('Navigate')) {
        const toMatch = element.match(/to=["']([^"']+)["']/);
        const target = toMatch ? toMatch[1] : 'unknown';
        redirects.set(routePath, target);
    } else if (routePath.includes(':')) {
        activeDynamic.add(routePath);
    } else {
        activeStatic.add(routePath);
    }
}

// Extract URLs from all existing XML sitemaps
const sitemaps = [
    'sitemap-main.xml',
    'sitemap-packages.xml',
    'sitemap-local.xml',
    'sitemap-blog.xml',
    'sitemap-kumbh.xml'
];

const sitemapUrls = new Map(); // url -> sitemap filename

for (const s of sitemaps) {
    const p = path.join(publicDir, s);
    if (!fs.existsSync(p)) continue;
    const xml = fs.readFileSync(p, 'utf8');
    const locRegex = /<loc>https:\/\/rudrakshsafar\.com([^<]*)<\/loc>/g;
    let m;
    while ((m = locRegex.exec(xml)) !== null) {
        let u = m[1].trim();
        if (!u.startsWith('/')) u = '/' + u;
        if (u.length > 1 && u.endsWith('/')) u = u.slice(0, -1);
        if (u === '') u = '/';
        sitemapUrls.set(u, s);
    }
}

console.log('=== ROUTE ANALYSIS ===');
console.log(`Active Canonical Static Routes: ${activeStatic.size}`);
console.log(`Active Dynamic Routes: ${activeDynamic.size}`);
console.log(`Redirect Routes (Must NOT be in sitemaps): ${redirects.size}`);
console.log(`Total URLs in XML Sitemaps: ${sitemapUrls.size}`);

// 1. Missing static routes that should be in XML
const missingInXml = [];
for (const route of activeStatic) {
    // Ignore internal user/booking pages
    if (route === '/bookings' || route === '/booking/confirm') continue;

    if (!sitemapUrls.has(route)) {
        missingInXml.push(route);
    }
}

// 2. Sitemaps containing redirects (Errors!)
const redirectsInXml = [];
for (const [url, file] of sitemapUrls.entries()) {
    if (redirects.has(url)) {
        redirectsInXml.push({ url, file, redirectsTo: redirects.get(url) });
    }
}

console.log('\n=== AUDIT RESULTS ===');
console.log(`Missing Canonical Pages in XML Sitemaps: ${missingInXml.length}`);
missingInXml.forEach(r => console.log(`  + MISSING: ${r}`));

console.log(`\nRedirects wrongly included in XML Sitemaps: ${redirectsInXml.length}`);
redirectsInXml.forEach(r => console.log(`  ! REDIRECT IN ${r.file}: ${r.url} -> ${r.redirectsTo}`));

console.log('\nDynamic Routes to check for expansion:');
activeDynamic.forEach(r => console.log(`  * DYNAMIC: ${r}`));
