const fs = require('fs');
const path = require('path');

// 1. Fix BilaspurSchema.tsx
const bilaspurSchemaPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'components', 'seo', 'BilaspurSchema.tsx');
let bilaspurSchemaContent = fs.readFileSync(bilaspurSchemaPath, 'utf8');

const oldBspAddress = `"address": {
      "@type": "PostalAddress",
      "streetAddress": "Vyapar Vihar",
      "addressLocality": "Bilaspur",
      "addressRegion": "Chhattisgarh",
      "postalCode": "495001",
      "addressCountry": "IN"
    },`;

const newBspAddress = `"address": {
      "@type": "PostalAddress",
      "streetAddress": "Sanjeev Enterprises, GE Road, In Front of Petrol Pump, Bhilai-3",
      "addressLocality": "Durg",
      "addressRegion": "Chhattisgarh",
      "postalCode": "490021",
      "addressCountry": "IN"
    },`;

if (bilaspurSchemaContent.includes(oldBspAddress)) {
  bilaspurSchemaContent = bilaspurSchemaContent.replace(oldBspAddress, newBspAddress);
  fs.writeFileSync(bilaspurSchemaPath, bilaspurSchemaContent, 'utf8');
  console.log('Fixed fake PostalAddress in BilaspurSchema.tsx');
} else {
  console.log('BilaspurSchema.tsx address check skipped or already updated.');
}

// 2. Fix TourPackagesFromRaipur.tsx
const rprPackagesPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'pages', 'local', 'TourPackagesFromRaipur.tsx');
let rprPackagesContent = fs.readFileSync(rprPackagesPath, 'utf8');

const oldRprAddress = `"address": {
                "@type": "PostalAddress",
                "addressLocality": "Raipur",
                "addressRegion": "Chhattisgarh",
                "addressCountry": "IN"
            }`;

const newRprAddress = `"address": {
                "@type": "PostalAddress",
                "streetAddress": "Sanjeev Enterprises, GE Road, In Front of Petrol Pump, Bhilai-3",
                "addressLocality": "Durg",
                "addressRegion": "Chhattisgarh",
                "postalCode": "490021",
                "addressCountry": "IN"
            },
            "areaServed": {
                "@type": "City",
                "name": "Raipur"
            }`;

if (rprPackagesContent.includes(oldRprAddress)) {
  rprPackagesContent = rprPackagesContent.replace(oldRprAddress, newRprAddress);
  console.log('Fixed fake PostalAddress in TourPackagesFromRaipur.tsx');
}

// Add DepartureLogisticsEngine import & usage in TourPackagesFromRaipur.tsx
if (!rprPackagesContent.includes('DepartureLogisticsEngine')) {
  rprPackagesContent = rprPackagesContent.replace(
    "import LogisticsSection from '@/components/LogisticsSection';",
    "import LogisticsSection from '@/components/LogisticsSection';\nimport DepartureLogisticsEngine from '@/components/DepartureLogisticsEngine';"
  );
  rprPackagesContent = rprPackagesContent.replace(
    "<LogisticsSection bestTimeData={bestTimeData} />",
    "<DepartureLogisticsEngine originCity=\"Raipur\" />\n                <LogisticsSection bestTimeData={bestTimeData} />"
  );
  console.log('Added DepartureLogisticsEngine to TourPackagesFromRaipur.tsx');
}
fs.writeFileSync(rprPackagesPath, rprPackagesContent, 'utf8');

// 3. Update TourPackagesFromBhilai.tsx
const bhilaiPackagesPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'pages', 'local', 'TourPackagesFromBhilai.tsx');
let bhilaiPackagesContent = fs.readFileSync(bhilaiPackagesPath, 'utf8');

if (!bhilaiPackagesContent.includes('DepartureLogisticsEngine')) {
  bhilaiPackagesContent = bhilaiPackagesContent.replace(
    "import LogisticsSection from '@/components/LogisticsSection';",
    "import LogisticsSection from '@/components/LogisticsSection';\nimport DepartureLogisticsEngine from '@/components/DepartureLogisticsEngine';"
  );
  bhilaiPackagesContent = bhilaiPackagesContent.replace(
    "<LogisticsSection bestTimeData={bestTimeData} />",
    "<DepartureLogisticsEngine originCity=\"Bhilai\" />\n                <LogisticsSection bestTimeData={bestTimeData} />"
  );
  fs.writeFileSync(bhilaiPackagesPath, bhilaiPackagesContent, 'utf8');
  console.log('Added DepartureLogisticsEngine to TourPackagesFromBhilai.tsx');
}

// 4. Update BilaspurHub.tsx
const bilaspurHubPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'pages', 'bilaspur', 'BilaspurHub.tsx');
let bilaspurHubContent = fs.readFileSync(bilaspurHubPath, 'utf8');

if (!bilaspurHubContent.includes('DepartureLogisticsEngine')) {
  bilaspurHubContent = bilaspurHubContent.replace(
    "import { BilaspurSchema } from '../../components/seo/BilaspurSchema';",
    "import { BilaspurSchema } from '../../components/seo/BilaspurSchema';\nimport DepartureLogisticsEngine from '../../components/DepartureLogisticsEngine';"
  );
  bilaspurHubContent = bilaspurHubContent.replace(
    "{/* Top Destinations Grid */}",
    "<DepartureLogisticsEngine originCity=\"Bilaspur\" />\n\n          {/* Top Destinations Grid */}"
  );
  fs.writeFileSync(bilaspurHubPath, bilaspurHubContent, 'utf8');
  console.log('Added DepartureLogisticsEngine to BilaspurHub.tsx');
}

// 5. Update TourPackagesBilaspur.tsx
const tourBspPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'pages', 'local', 'TourPackagesBilaspur.tsx');
let tourBspContent = fs.readFileSync(tourBspPath, 'utf8');

if (!tourBspContent.includes('DepartureLogisticsEngine')) {
  tourBspContent = tourBspContent.replace(
    "import RelatedServices from '@/components/RelatedServices';",
    "import RelatedServices from '@/components/RelatedServices';\nimport DepartureLogisticsEngine from '@/components/DepartureLogisticsEngine';"
  );
  tourBspContent = tourBspContent.replace(
    "<FAQsSection faqs={faqs} />",
    "<DepartureLogisticsEngine originCity=\"Bilaspur\" />\n\n      <FAQsSection faqs={faqs} />"
  );
  fs.writeFileSync(tourBspPath, tourBspContent, 'utf8');
  console.log('Added DepartureLogisticsEngine to TourPackagesBilaspur.tsx');
}
