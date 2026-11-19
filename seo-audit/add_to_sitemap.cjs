const fs = require('fs');
const file = 'travel-compass-hub-main/public/sitemap-main.xml';
let xml = fs.readFileSync(file, 'utf8');

const newUrls = [
    'https://rudrakshsafar.com/guides/manali-in-winter',
    'https://rudrakshsafar.com/guides/atal-tunnel-solang-guide',
    'https://rudrakshsafar.com/guides/manali-weather-by-month',
    'https://rudrakshsafar.com/guides/manali-snow-packing-list'
];

let additions = '';
for (const u of newUrls) {
    if (!xml.includes(u)) {
        additions += `  <url>\n    <loc>${u}</loc>\n    <lastmod>2026-11-19</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    }
}

if (additions) {
    xml = xml.replace('</urlset>', `${additions}</urlset>`);
    fs.writeFileSync(file, xml, 'utf8');
    console.log('Added 4 new guide URLs to sitemap-main.xml');
} else {
    console.log('URLs already in sitemap-main.xml');
}
