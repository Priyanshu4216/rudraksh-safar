const fs = require('fs');

const appTsx = fs.readFileSync('src/App.tsx', 'utf8');
const sitemapXml = fs.readFileSync('public/sitemap.xml', 'utf8');

// Parse App.tsx
const routeRegex = /<Route\s+(?:exact\s+)?path="([^"]+)"/g;
let match;
const appRoutes = new Set();
while ((match = routeRegex.exec(appTsx)) !== null) {
    let path = match[1];
    if (path === '*' || path.includes(':') || path.startsWith('/*')) continue;
    appRoutes.add(path);
}

// Parse sitemap.xml
// format is like \n    <loc>https://rudrakshsafar.com/some/path</loc>\n
const locRegex = /<loc>(https?:\/\/[^\/]+)?([^<]+)<\/loc>/g;
const sitemapRoutes = new Set();
while ((match = locRegex.exec(sitemapXml)) !== null) {
    let path = match[2];
    if (path === '') path = '/';
    if (path.endsWith('/') && path !== '/') path = path.slice(0, -1);
    sitemapRoutes.add(path);
}

console.log(`Routes in App.tsx: ${appRoutes.size}`);
console.log(`Routes in sitemap.xml: ${sitemapRoutes.size}`);

const missing = [];
for (const route of appRoutes) {
    let testRoute = route;
    if (testRoute.endsWith('/') && testRoute !== '/') testRoute = testRoute.slice(0, -1);
    if (!sitemapRoutes.has(testRoute) && !sitemapRoutes.has(testRoute + '/')) {
        missing.push(route);
    }
}

console.log(`Missing routes (${missing.length}):`);
missing.forEach(r => console.log(r));

// Generate the new <url> blocks
let newBlocks = '';
const today = new Date().toISOString();
for (const route of missing) {
    newBlocks += `  <url>\n    <loc>https://rudrakshsafar.com${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

// Insert before </urlset>
if (missing.length > 0) {
    const updatedSitemap = sitemapXml.replace('</urlset>', `${newBlocks}</urlset>`);
    fs.writeFileSync('public/sitemap.xml', updatedSitemap);
    console.log('Successfully added missing routes to sitemap.xml');
} else {
    console.log('No missing routes to add.');
}
