const fs = require('fs');
const path = require('path');

const rprPackagesPath = path.join(__dirname, '..', 'travel-compass-hub-main', 'src', 'pages', 'local', 'TourPackagesFromRaipur.tsx');
let content = fs.readFileSync(rprPackagesPath, 'utf8');

const target = `"address": {
                "@type": "PostalAddress",
                "addressLocality": "Raipur",
                "addressRegion": "Chhattisgarh",
                "addressCountry": "IN"
            }`;

const replacement = `"address": {
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

// normalize \r\n to \n for matching, or match regex
content = content.replace(/"address":\s*\{\s*"@type":\s*"PostalAddress",\s*"addressLocality":\s*"Raipur",\s*"addressRegion":\s*"Chhattisgarh",\s*"addressCountry":\s*"IN"\s*\}/, replacement);

fs.writeFileSync(rprPackagesPath, content, 'utf8');
console.log('Regex address replacement completed in TourPackagesFromRaipur.tsx');
