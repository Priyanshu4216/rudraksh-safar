const fs = require('fs');
const path = require('path');

// 1. Update App.tsx
const appPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const importTarget = 'const PuriMaster = lazy(() => import("./pages/domestic/puri/PuriMaster"));';
const newImports = `const PuriMaster = lazy(() => import("./pages/domestic/puri/PuriMaster"));
const PilgrimagePackages = lazy(() => import("./pages/PilgrimagePackages"));
const SeniorCitizenTourPackages = lazy(() => import("./pages/SeniorCitizenTourPackages"));
const TravelInsurance = lazy(() => import("./pages/services/TravelInsurance"));`;

if (appContent.includes(importTarget) && !appContent.includes('PilgrimagePackages')) {
  appContent = appContent.replace(importTarget, newImports);
  console.log('App.tsx step 11 imports added.');
}

const routeTarget = '<Route path="/domestic-tours/puri-jagannath-dham" element={<PuriMaster />} />';
const newRoutes = `<Route path="/domestic-tours/puri-jagannath-dham" element={<PuriMaster />} />
                    <Route path="/pilgrimage-packages" element={<PilgrimagePackages />} />
                    <Route path="/senior-citizen-tour-packages" element={<SeniorCitizenTourPackages />} />
                    <Route path="/travel-services/travel-insurance" element={<TravelInsurance />} />
                    <Route path="/corporate-tours" element={<CorporateTourPackagesBhilai />} />
                    <Route path="/mice-tours" element={<CorporateTourPackagesBhilai />} />
                    <Route path="/travel-services/forex-assistance" element={<CurrencyGuide />} />`;

if (appContent.includes(routeTarget) && !appContent.includes('/pilgrimage-packages')) {
  appContent = appContent.replace(routeTarget, newRoutes);
  console.log('App.tsx step 11 routes added.');
}

fs.writeFileSync(appPath, appContent, 'utf8');

// 2. Update sitemap-main.xml
const sitemapPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'public', 'sitemap-main.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const newUrls = [
  {
    url: 'https://rudrakshsafar.com/pilgrimage-packages',
    freq: 'weekly',
    priority: '0.9'
  },
  {
    url: 'https://rudrakshsafar.com/senior-citizen-tour-packages',
    freq: 'weekly',
    priority: '0.85'
  },
  {
    url: 'https://rudrakshsafar.com/travel-services/travel-insurance',
    freq: 'monthly',
    priority: '0.8'
  },
  {
    url: 'https://rudrakshsafar.com/corporate-tours',
    freq: 'monthly',
    priority: '0.8'
  },
  {
    url: 'https://rudrakshsafar.com/travel-services/forex-assistance',
    freq: 'monthly',
    priority: '0.75'
  }
];

let xmlBlocksToAdd = '';
for (const item of newUrls) {
  if (!sitemapContent.includes(`<loc>${item.url}</loc>`)) {
    xmlBlocksToAdd += `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>2026-11-19</lastmod>\n    <changefreq>${item.freq}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>\n`;
  }
}

if (xmlBlocksToAdd) {
  sitemapContent = sitemapContent.replace('</urlset>', xmlBlocksToAdd + '</urlset>');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Added 5 Step 11 URLs to sitemap-main.xml.');
}

// 3. Update page_registry.csv
const registryPath = path.join(__dirname, '..', 'seo-data', 'page_registry.csv');
let registryContent = fs.readFileSync(registryPath, 'utf8');

const newRegistryRows = [
  '"/pilgrimage-packages","existing","Theme Hub","India Pilgrimage","All-India","Pilgrimage tour packages in India","Commercial","/pilgrimage-packages","1650","0","0","Sacred Tirtha Yatra master hub"',
  '"/senior-citizen-tour-packages","existing","Theme Hub","General","All-India","Senior citizen tour packages India","Commercial","/senior-citizen-tour-packages","1550","0","0","Elder care and parents vacation master hub"',
  '"/travel-services/travel-insurance","existing","Service Hub","General","All-India","International travel insurance for Indian travelers","Commercial","/travel-services/travel-insurance","1450","0","0","Overseas & domestic medical insurance desk"',
  '"/corporate-tours","existing","Theme Hub","General","All-India","Corporate tour packages and MICE travel","Commercial","/corporate-tours","1800","0","0","Dealer incentives and corporate retreats"',
  '"/travel-services/forex-assistance","existing","Service Hub","General","All-India","Foreign exchange and currency card assistance","Informational","/travel-services/forex-assistance","1200","0","0","Currency guidance and multi-currency card support"'
];

for (const row of newRegistryRows) {
  const urlPart = row.split(',')[0];
  if (!registryContent.includes(urlPart)) {
    registryContent += '\n' + row;
    console.log(`Added ${urlPart} to page_registry.csv`);
  }
}

fs.writeFileSync(registryPath, registryContent, 'utf8');
console.log('Updated page_registry.csv successfully.');
