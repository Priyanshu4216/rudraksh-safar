const fs = require('fs');
const path = require('path');

// 1. Read App.tsx routes
const appFile = fs.readFileSync('travel-compass-hub-main/src/App.tsx', 'utf8');
const routeRegex = /path=["']([^"']+)["']/g;
const appRoutes = new Set();
let match;
while ((match = routeRegex.exec(appFile)) !== null) {
  appRoutes.add(match[1]);
}
console.log('App.tsx unique defined routes:', appRoutes.size);

// 2. Read all sitemaps in public/
const publicDir = 'travel-compass-hub-main/public';
const sitemapFiles = fs.readdirSync(publicDir).filter(f => f.startsWith('sitemap-') && f.endsWith('.xml'));
console.log('Sitemap files found:', sitemapFiles);

const sitemapUrls = new Map(); // url -> sitemapFile
sitemapFiles.forEach(file => {
  const content = fs.readFileSync(path.join(publicDir, file), 'utf8');
  const locRegex = /<loc>(https:\/\/rudrakshsafar\.com(\/[^<]*))<\/loc>/g;
  let locMatch;
  while ((locMatch = locRegex.exec(content)) !== null) {
    const fullUrl = locMatch[1];
    const pathPart = locMatch[2] === '' ? '/' : locMatch[2];
    sitemapUrls.set(pathPart, file);
  }
});
console.log('Total URLs indexed in sitemaps:', sitemapUrls.size);

// 3. New hubs and guides from Sprints 1 to 6
const newlyCreatedRoutes = [
  '/international-tours/canton-fair-china',
  '/guides/canton-fair-visa-indian-citizens',
  '/guides/canton-fair-dates-phases-guide',
  '/guides/canton-fair-buyer-badge-registration',
  '/tours/haridwar-rishikesh',
  '/guides/manali-in-winter',
  '/guides/atal-tunnel-solang-guide',
  '/guides/manali-weather-by-month',
  '/guides/manali-snow-packing-list',
  '/tours/vietnam',
  '/tours/rajasthan',
  '/tours/puri',
  '/tours/almaty',
  '/tours/kashmir',
  '/tours/kerala',
  '/tours/goa',
  '/international-tours/bali',
  '/international-tours/dubai',
  '/tour-packages-from-bhilai',
  '/tour-packages-from-raipur',
  '/tour-packages-from-bilaspur',
  '/pilgrimage-packages',
  '/senior-citizen-tour-packages',
  '/travel-services/travel-insurance',
  '/travel-services/forex-assistance',
  '/corporate-tours'
];

console.log('\n--- Checking New Sprint Hubs & Guides in Sitemaps ---');
const missingInSitemap = [];
newlyCreatedRoutes.forEach(r => {
  if (sitemapUrls.has(r)) {
    console.log(`[FOUND in ${sitemapUrls.get(r)}] ${r}`);
  } else {
    console.log(`[MISSING in sitemaps] ${r}`);
    missingInSitemap.push(r);
  }
});

console.log('\nTotal Missing from sitemaps:', missingInSitemap.length);

// Check all routes in App.tsx vs sitemaps
const validAppRoutes = Array.from(appRoutes).filter(r => !r.includes(':') && r !== '*');
console.log('\nStatic App.tsx routes to audit:', validAppRoutes.length);

const allMissingFromSitemaps = validAppRoutes.filter(r => !sitemapUrls.has(r));
console.log('Total App routes missing from sitemaps:', allMissingFromSitemaps.length);
console.log('Missing routes list:', allMissingFromSitemaps);

// Check if any sitemap URLs don't exist in App.tsx or redirects
const vercel = JSON.parse(fs.readFileSync('travel-compass-hub-main/vercel.json', 'utf8'));
const redirectedSources = new Set(vercel.redirects.map(r => r.source));

const orphanedSitemapUrls = [];
for (const [pathPart, file] of sitemapUrls.entries()) {
  if (!appRoutes.has(pathPart) && !redirectedSources.has(pathPart)) {
    // Check if it's dynamic or wildcard
    orphanedSitemapUrls.push({ pathPart, file });
  }
}
console.log('\nSitemap URLs not in App.tsx routes:', orphanedSitemapUrls.length);
if (orphanedSitemapUrls.length > 0) {
  console.log(orphanedSitemapUrls.slice(0, 20));
}
