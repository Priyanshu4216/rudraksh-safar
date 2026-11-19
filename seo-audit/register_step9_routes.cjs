const fs = require('fs');
const path = require('path');

// 1. Update App.tsx
const appPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const importTarget = 'const CantonFairBuyerBadgeGuide = lazy(() => import("./pages/guides/CantonFairBuyerBadgeGuide"));';
const newImports = `const CantonFairBuyerBadgeGuide = lazy(() => import("./pages/guides/CantonFairBuyerBadgeGuide"));
const VietnamMaster = lazy(() => import("./pages/international/vietnam/VietnamMaster"));
const AlmatyMaster = lazy(() => import("./pages/international/almaty/AlmatyMaster"));
const RajasthanMaster = lazy(() => import("./pages/domestic/rajasthan/RajasthanMaster"));
const PuriMaster = lazy(() => import("./pages/domestic/puri/PuriMaster"));`;

if (appContent.includes(importTarget) && !appContent.includes('VietnamMaster')) {
  appContent = appContent.replace(importTarget, newImports);
  console.log('App.tsx step 9 imports added.');
} else {
  console.log('App.tsx step 9 imports already present or target not found.');
}

const routeTarget = '<Route path="/guides/canton-fair-buyer-registration-guide" element={<CantonFairBuyerBadgeGuide />} />';
const newRoutes = `<Route path="/guides/canton-fair-buyer-registration-guide" element={<CantonFairBuyerBadgeGuide />} />
                    <Route path="/international-tours/vietnam" element={<VietnamMaster />} />
                    <Route path="/international-tours/almaty-kazakhstan" element={<AlmatyMaster />} />
                    <Route path="/domestic-tours/rajasthan" element={<RajasthanMaster />} />
                    <Route path="/domestic-tours/puri-jagannath-dham" element={<PuriMaster />} />`;

if (appContent.includes(routeTarget) && !appContent.includes('/international-tours/vietnam')) {
  appContent = appContent.replace(routeTarget, newRoutes);
  console.log('App.tsx step 9 routes added.');
} else {
  console.log('App.tsx step 9 routes already present or target not found.');
}

// Also update rajasthan from bhilai to point to RajasthanMaster instead of domestic-packages
appContent = appContent.replace(
  '<Route path="/rajasthan-tour-package-from-bhilai" element={<Navigate to="/domestic-packages" replace />} />',
  '<Route path="/rajasthan-tour-package-from-bhilai" element={<RajasthanMaster />} />'
);

fs.writeFileSync(appPath, appContent, 'utf8');

// 2. Update sitemap-main.xml
const sitemapPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'public', 'sitemap-main.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const newUrls = [
  {
    url: 'https://rudrakshsafar.com/international-tours/vietnam',
    freq: 'weekly',
    priority: '0.9'
  },
  {
    url: 'https://rudrakshsafar.com/international-tours/almaty-kazakhstan',
    freq: 'weekly',
    priority: '0.9'
  },
  {
    url: 'https://rudrakshsafar.com/domestic-tours/rajasthan',
    freq: 'weekly',
    priority: '0.9'
  },
  {
    url: 'https://rudrakshsafar.com/domestic-tours/puri-jagannath-dham',
    freq: 'weekly',
    priority: '0.9'
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
  console.log('Added 4 Step 9 URLs to sitemap-main.xml.');
} else {
  console.log('Step 9 URLs already in sitemap-main.xml.');
}

// 3. Update page_registry.csv
const registryPath = path.join(__dirname, '..', 'seo-data', 'page_registry.csv');
let registryContent = fs.readFileSync(registryPath, 'utf8');

registryContent = registryContent.replace(
  '"/international-tours/vietnam","planned"',
  '"/international-tours/vietnam","existing"'
);
registryContent = registryContent.replace(
  '"/international-tours/almaty-kazakhstan","planned"',
  '"/international-tours/almaty-kazakhstan","existing"'
);
registryContent = registryContent.replace(
  '"/domestic-tours/rajasthan","planned"',
  '"/domestic-tours/rajasthan","existing"'
);
registryContent = registryContent.replace(
  '"/domestic-tours/puri-jagannath-dham","planned"',
  '"/domestic-tours/puri-jagannath-dham","existing"'
);

// Update word counts and notes
registryContent = registryContent.replace(
  '"/domestic-tours/kashmir","existing","Destination Hub","General","All-India","Kashmir tour packages","Commercial","/domestic-tours/kashmir","150"',
  '"/domestic-tours/kashmir","existing","Destination Hub","General","All-India","Kashmir tour packages","Commercial","/domestic-tours/kashmir","1850"'
);

fs.writeFileSync(registryPath, registryContent, 'utf8');
console.log('Updated page_registry.csv successfully.');
