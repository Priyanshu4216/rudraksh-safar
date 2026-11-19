const fs = require('fs');

const vercelFile = 'travel-compass-hub-main/vercel.json';
const vercel = JSON.parse(fs.readFileSync(vercelFile, 'utf8'));
const currentSources = new Set(vercel.redirects.map(r => r.source));

const finalRedirects = [
  { source: '/uae/sheikh-zayed-mosque', destination: '/international-tours/dubai', permanent: true },
  { source: '/uae/ferrari-world', destination: '/international-tours/dubai', permanent: true },
  { source: '/package/thailand', destination: '/destinations/thailand', permanent: true },
  { source: '/package/phuket', destination: '/destinations/thailand/phuket', permanent: true },
  { source: '/budget-tours', destination: '/budget-tour-packages', permanent: true },
  { source: '/luxury-tours', destination: '/luxury-tour-packages', permanent: true },
  { source: '/domestic-tours/goa-package-from-durg', destination: '/domestic-tours/goa-from-durg', permanent: true }
];

let added = 0;
finalRedirects.forEach(r => {
  if (!currentSources.has(r.source)) {
    vercel.redirects.push(r);
    currentSources.add(r.source);
    added++;
  }
});

console.log(`Added ${added} redirects to vercel.json. Total redirects now: ${vercel.redirects.length}`);
fs.writeFileSync(vercelFile, JSON.stringify(vercel, null, 2), 'utf8');

const lines = [];
vercel.redirects.forEach(r => {
  if (r.has) return;
  const code = r.permanent ? '301' : '302';
  lines.push(`${r.source} ${r.destination} ${code}`);
});
fs.writeFileSync('travel-compass-hub-main/public/_redirects', lines.join('\n') + '\n', 'utf8');
console.log(`Updated public/_redirects with ${lines.length} entries`);
