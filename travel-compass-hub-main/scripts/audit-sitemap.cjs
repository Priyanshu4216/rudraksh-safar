const fs = require('fs');
const path = require('path');

// Configuration
const APP_tsx_PATH = path.join(__dirname, '../src/App.tsx');
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_FILES = [
    'sitemap-main.xml',
    'sitemap-packages.xml',
    'sitemap-local.xml',
    'sitemap-blog.xml'
];

// Helpers
function extractRoutesFromApp() {
    const content = fs.readFileSync(APP_tsx_PATH, 'utf8');
    const simpleRouteRegex = /<Route path="([^"]+)"/g;
    const routes = new Set();
    let match;

    while ((match = simpleRouteRegex.exec(content)) !== null) {
        let route = match[1];
        if (route === '*' || route === '/') {
            // Keep / but skip *
            if (route === '*') continue;
        }
        // Normalize: ensure leading slash
        if (!route.startsWith('/')) route = '/' + route;
        routes.add(route);
    }
    return Array.from(routes).sort();
}

function extractUrlsFromSitemap(filename) {
    const filePath = path.join(PUBLIC_DIR, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`Warning: Sitemap file not found: ${filename}`);
        return [];
    }
    const content = fs.readFileSync(filePath, 'utf8');
    const locRegex = /<loc>https:\/\/rudrakshsafar\.com([^<]+)<\/loc>/g;
    const urls = new Set();
    let match;

    while ((match = locRegex.exec(content)) !== null) {
        let urlPath = match[1];
        // Normalize
        if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
        // Remove trailing slash if present (unless it's just /)
        if (urlPath.length > 1 && urlPath.endsWith('/')) {
            urlPath = urlPath.slice(0, -1);
        }
        urls.add(urlPath);
    }
    return Array.from(urls);
}

// Main execution
console.log('Starting Sitemap Audit...');

// 1. Get App Routes
const appRoutes = extractRoutesFromApp();
console.log(`Found ${appRoutes.length} routes in App.tsx`);

// 2. Get Sitemap URLs
const sitemapUrls = new Set();
const sitemapSource = {}; // Map URL to source filename

SITEMAP_FILES.forEach(file => {
    const urls = extractUrlsFromSitemap(file);
    console.log(`Found ${urls.length} URLs in ${file}`);
    urls.forEach(u => {
        sitemapUrls.add(u);
        sitemapSource[u] = file;
    });
});

// 3. Compare
const missingInSitemap = [];
const dynamicRoutes = [];

appRoutes.forEach(route => {
    if (route.includes(':')) {
        dynamicRoutes.push(route);
        return;
    }

    // Exact match check
    if (!sitemapUrls.has(route)) {
        // Try checking with trailing slash just in case
        if (!sitemapUrls.has(route + '/')) {
            missingInSitemap.push(route);
        }
    }
});

// 4. Report
const report = [];
report.push('--- AUDIT REPORT ---');

if (missingInSitemap.length > 0) {
    report.push(`[MISSING] ${missingInSitemap.length} Static Routes are NOT in any sitemap:`);
    missingInSitemap.forEach(r => report.push(` - ${r}`));
} else {
    report.push('[OK] All static routes are present in sitemaps.');
}

report.push(`\n[INFO] ${dynamicRoutes.length} Dynamic Routes found (cannot automatically verify):`);
dynamicRoutes.forEach(r => report.push(` - ${r}`));

report.push('\nAudit Complete.');

const reportText = report.join('\\n');
console.log(reportText);
fs.writeFileSync(path.join(__dirname, '../audit_report.txt'), reportText, 'utf8');
