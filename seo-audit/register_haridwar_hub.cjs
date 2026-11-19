const fs = require('fs');

// 1. Update App.tsx
const appFile = 'travel-compass-hub-main/src/App.tsx';
let appContent = fs.readFileSync(appFile, 'utf8');

const importTarget = 'const ManaliSnowPackingList = lazy(() => import("./pages/guides/ManaliSnowPackingList"));';
const newImport = '\nconst HaridwarRishikeshMaster = lazy(() => import("./pages/domestic/haridwar/HaridwarRishikeshMaster"));';

if (!appContent.includes('HaridwarRishikeshMaster')) {
    appContent = appContent.replace(importTarget, importTarget + newImport);
}

const routeTarget = '<Route path="/guides/manali-snow-packing-list" element={<ManaliSnowPackingList />} />';
const newRoute = '\n                    <Route path="/domestic-tours/haridwar-rishikesh" element={<HaridwarRishikeshMaster />} />';

if (!appContent.includes('/domestic-tours/haridwar-rishikesh')) {
    appContent = appContent.replace(routeTarget, routeTarget + newRoute);
}

fs.writeFileSync(appFile, appContent, 'utf8');
console.log('Registered HaridwarRishikeshMaster in App.tsx');

// 2. Update sitemap-main.xml
const sitemapFile = 'travel-compass-hub-main/public/sitemap-main.xml';
let sitemapXml = fs.readFileSync(sitemapFile, 'utf8');

const newUrl = 'https://rudrakshsafar.com/domestic-tours/haridwar-rishikesh';
if (!sitemapXml.includes(newUrl)) {
    const addition = `  <url>\n    <loc>${newUrl}</loc>\n    <lastmod>2026-11-19</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    sitemapXml = sitemapXml.replace('</urlset>', `${addition}</urlset>`);
    fs.writeFileSync(sitemapFile, sitemapXml, 'utf8');
    console.log('Added /domestic-tours/haridwar-rishikesh to sitemap-main.xml');
}
