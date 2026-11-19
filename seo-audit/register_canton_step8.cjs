const fs = require('fs');
const path = require('path');

// 1. Update App.tsx
const appPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const importTarget = 'const HaridwarRishikeshMaster = lazy(() => import("./pages/domestic/haridwar/HaridwarRishikeshMaster"));';
const newImports = `const HaridwarRishikeshMaster = lazy(() => import("./pages/domestic/haridwar/HaridwarRishikeshMaster"));
const CantonFairMaster = lazy(() => import("./pages/international/canton/CantonFairMaster"));
const CantonFairVisaGuide = lazy(() => import("./pages/guides/CantonFairVisaGuide"));
const CantonFairDatesGuide = lazy(() => import("./pages/guides/CantonFairDatesGuide"));
const CantonFairBuyerBadgeGuide = lazy(() => import("./pages/guides/CantonFairBuyerBadgeGuide"));`;

if (appContent.includes(importTarget) && !appContent.includes('CantonFairMaster')) {
  appContent = appContent.replace(importTarget, newImports);
  console.log('App.tsx imports added.');
} else {
  console.log('App.tsx imports already present or target not found.');
}

const routeTarget = '<Route path="/domestic-tours/haridwar-rishikesh" element={<HaridwarRishikeshMaster />} />';
const newRoutes = `<Route path="/domestic-tours/haridwar-rishikesh" element={<HaridwarRishikeshMaster />} />
                    <Route path="/international-tours/canton-fair-china" element={<CantonFairMaster />} />
                    <Route path="/guides/canton-fair-visa-for-indians" element={<CantonFairVisaGuide />} />
                    <Route path="/guides/canton-fair-dates-and-phases" element={<CantonFairDatesGuide />} />
                    <Route path="/guides/canton-fair-buyer-registration-guide" element={<CantonFairBuyerBadgeGuide />} />`;

if (appContent.includes(routeTarget) && !appContent.includes('/international-tours/canton-fair-china')) {
  appContent = appContent.replace(routeTarget, newRoutes);
  console.log('App.tsx routes added.');
} else {
  console.log('App.tsx routes already present or target not found.');
}

fs.writeFileSync(appPath, appContent, 'utf8');

// 2. Update sitemap-main.xml
const sitemapPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'public', 'sitemap-main.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const cantonUrls = [
  {
    url: 'https://rudrakshsafar.com/international-tours/canton-fair-china',
    freq: 'weekly',
    priority: '0.9'
  },
  {
    url: 'https://rudrakshsafar.com/guides/canton-fair-visa-for-indians',
    freq: 'monthly',
    priority: '0.8'
  },
  {
    url: 'https://rudrakshsafar.com/guides/canton-fair-dates-and-phases',
    freq: 'monthly',
    priority: '0.8'
  },
  {
    url: 'https://rudrakshsafar.com/guides/canton-fair-buyer-registration-guide',
    freq: 'monthly',
    priority: '0.8'
  }
];

let xmlBlocksToAdd = '';
for (const item of cantonUrls) {
  if (!sitemapContent.includes(`<loc>${item.url}</loc>`)) {
    xmlBlocksToAdd += `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>2026-11-19</lastmod>\n    <changefreq>${item.freq}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>\n`;
  }
}

if (xmlBlocksToAdd) {
  sitemapContent = sitemapContent.replace('</urlset>', xmlBlocksToAdd + '</urlset>');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Added 4 Canton Fair URLs to sitemap-main.xml.');
} else {
  console.log('Canton Fair URLs already in sitemap-main.xml.');
}

// 3. Update page_registry.csv
const registryPath = path.join(__dirname, '..', 'seo-data', 'page_registry.csv');
let registryContent = fs.readFileSync(registryPath, 'utf8');

// Update planned -> existing for canton URLs
registryContent = registryContent.replace(
  '"/international-tours/canton-fair-china","planned"',
  '"/international-tours/canton-fair-china","existing"'
);
registryContent = registryContent.replace(
  '"/guides/canton-fair-visa-for-indians","planned"',
  '"/guides/canton-fair-visa-for-indians","existing"'
);
registryContent = registryContent.replace(
  '"/guides/canton-fair-dates-and-phases","planned"',
  '"/guides/canton-fair-dates-and-phases","existing"'
);

// Add buyer badge guide if not present
if (!registryContent.includes('/guides/canton-fair-buyer-registration-guide')) {
  registryContent += '\n"/guides/canton-fair-buyer-registration-guide","existing","Informational Guide","China (Canton Fair)","All-India","Canton Fair buyer badge registration BEST tutorial","Informational","/guides/canton-fair-buyer-registration-guide","1350","0","0","Keyword Map Parent: /international-tours/canton-fair-china"';
  console.log('Added buyer badge guide to page_registry.csv');
} else {
  registryContent = registryContent.replace(
    '"/guides/canton-fair-buyer-registration-guide","planned"',
    '"/guides/canton-fair-buyer-registration-guide","existing"'
  );
}

fs.writeFileSync(registryPath, registryContent, 'utf8');
console.log('Updated page_registry.csv successfully.');
