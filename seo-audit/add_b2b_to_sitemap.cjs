const fs = require('fs');

const sitemapFile = 'travel-compass-hub-main/public/sitemap-main.xml';
let c = fs.readFileSync(sitemapFile, 'utf8');

const newUrls = [
  '/b2b/chardham',
  '/b2b/kashmir',
  '/b2b/ladakh',
  '/b2b/manali',
  '/b2b/nainital',
  '/b2b/mussoorie',
  '/b2b/puri',
  '/b2b/andaman',
  '/b2b/dubai',
  '/b2b/vietnam'
];

let entries = '';
newUrls.forEach(url => {
  if (!c.includes(`<loc>https://rudrakshsafar.com${url}</loc>`)) {
    entries += `  <url>\n    <loc>https://rudrakshsafar.com${url}</loc>\n    <lastmod>2026-11-20</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
  }
});

if (entries) {
  c = c.replace('</urlset>', entries + '</urlset>');
  fs.writeFileSync(sitemapFile, c, 'utf8');
  console.log(`Added ${newUrls.length} new B2B URLs to sitemap-main.xml`);
} else {
  console.log('All URLs already present in sitemap-main.xml');
}

// Update lastmod in sitemap-index.xml and sitemap.xml
['sitemap-index.xml', 'sitemap.xml'].forEach(file => {
  const p = 'travel-compass-hub-main/public/' + file;
  if (fs.existsSync(p)) {
    let sm = fs.readFileSync(p, 'utf8');
    sm = sm.replace(/<lastmod>[^<]+<\/lastmod>/g, '<lastmod>2026-11-20</lastmod>');
    fs.writeFileSync(p, sm, 'utf8');
    console.log(`Updated lastmod to 2026-11-20 in ${file}`);
  }
});
