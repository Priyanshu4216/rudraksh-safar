const fs = require('fs');

const vercelFile = 'travel-compass-hub-main/vercel.json';
const vercel = JSON.parse(fs.readFileSync(vercelFile, 'utf8'));
const currentSources = new Set(vercel.redirects.map(r => r.source));

const moreRedirects = [
  { source: '/BestTimeToVisit', destination: '/best-time-to-visit', permanent: true },
  { source: '/CurrencyGuide', destination: '/currency-guide', permanent: true },
  { source: '/char-dham/registration', destination: '/chardham-yatra-registration-process', permanent: true },
  { source: '/chardham/CharDhamRegistration', destination: '/chardham-yatra-registration-process', permanent: true },
  { source: '/chardham/CharDhamPillar', destination: '/chardham-yatra-package', permanent: true },
  { source: '/chardham/CharDhamRouteMap', destination: '/chardham-yatra-route-map', permanent: true },
  { source: '/chardham/BhilaiToKedarnath', destination: '/bhilai-to-kedarnath-yatra-package-2026', permanent: true },
  { source: '/chardham/IsCharDhamSafe', destination: '/is-chardham-yatra-safe', permanent: true },
  { source: '/chardham/GangotriTemple', destination: '/chardham-yatra-package', permanent: true },
  { source: '/chardham/YamunotriTemple', destination: '/chardham-yatra-package', permanent: true },
  { source: '/domestic/kashmir/KashmirTripCost', destination: '/tours/kashmir', permanent: true },
  { source: '/uae/burj-khalifa', destination: '/international-tours/dubai', permanent: true },
  { source: '/international/thailand/guides', destination: '/destinations/thailand', permanent: true },
  { source: '/guides/ladakh/altitude-sickness-ams-protocol', destination: '/is-ladakh-safe', permanent: true },
  { source: '/guides/ladakh/ladakh-vs-spiti', destination: '/destinations/spiti-valley', permanent: true },
  { source: '/guides/ladakh/mobile-network-internet-connectivity', destination: '/is-ladakh-safe', permanent: true },
  { source: '/cheapest-trips-from-bhilai', destination: '/tour-packages-from-bhilai', permanent: true },
  { source: '/visa/vietnam', destination: '/international-tours/vietnam', permanent: true },
  { source: '/tour-packages-from-raipur/spiti-valley', destination: '/destinations/spiti-valley', permanent: true },
  { source: '/tour-packages-from-raipur/kashmir', destination: '/domestic-tours/kashmir-from-raipur', permanent: true },
  { source: '/tour-packages-from-raipur/ladakh', destination: '/domestic-tours/ladakh-from-raipur', permanent: true },
  { source: '/about/founder', destination: '/about-rudraksh-safar', permanent: true },
  { source: '/uae/dubai-itinerary-4-days', destination: '/dubai-4-day-itinerary', permanent: true },
  { source: '/uae/dubai-itinerary-5-days', destination: '/dubai-5-day-itinerary', permanent: true },
  { source: '/places-to-visit-in-ladakh/pangong-lake', destination: '/domestic-tours/ladakh', permanent: true },
  { source: '/places-to-visit-in-ladakh/nubra-valley', destination: '/domestic-tours/ladakh', permanent: true },
  { source: '/places-to-visit-in-ladakh/umling-la-pass', destination: '/domestic-tours/ladakh', permanent: true },
  { source: '/ladakh-tour-packages-from-raipur', destination: '/domestic-tours/ladakh-from-raipur', permanent: true },
  { source: '/package/kerala-family', destination: '/domestic-tours/kerala', permanent: true },
  { source: '/package/shimla-manali', destination: '/domestic-tours/manali', permanent: true }
];

let added = 0;
moreRedirects.forEach(r => {
  if (!currentSources.has(r.source)) {
    vercel.redirects.push(r);
    currentSources.add(r.source);
    added++;
  }
});

console.log(`Added ${added} redirects to vercel.json. Total redirects now: ${vercel.redirects.length}`);
fs.writeFileSync(vercelFile, JSON.stringify(vercel, null, 2), 'utf8');

// Also update _redirects
const lines = [];
vercel.redirects.forEach(r => {
  if (r.has) return;
  const code = r.permanent ? '301' : '302';
  lines.push(`${r.source} ${r.destination} ${code}`);
});
fs.writeFileSync('travel-compass-hub-main/public/_redirects', lines.join('\n') + '\n', 'utf8');
console.log(`Updated public/_redirects with ${lines.length} entries`);
