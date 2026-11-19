const fs = require('fs');

const vercelFile = 'travel-compass-hub-main/vercel.json';
const vercel = JSON.parse(fs.readFileSync(vercelFile, 'utf8'));
const currentSources = new Set(vercel.redirects.map(r => r.source));

console.log('Current redirects in vercel.json:', vercel.redirects.length);

const redirectsToAdd = [
  { source: '/domestic-tours', destination: '/domestic-packages', permanent: true },
  { source: '/international-tours', destination: '/international-packages', permanent: true },
  { source: '/b2b', destination: '/b2b-travel-partners', permanent: true },
  { source: '/reviews', destination: 'https://maps.app.goo.gl/rudrakshsafar', permanent: false },
  { source: '/Contact', destination: '/contact', permanent: true },
  { source: '/best-time-to-visit-goa', destination: '/destinations/goa', permanent: true },
  { source: '/best-time-to-visit-dubai', destination: '/dubai-travel-guide', permanent: true },
  { source: '/dubai-trip-cost', destination: '/uae/dubai-trip-cost', permanent: true },
  { source: '/dubai-food-guide', destination: '/dubai-travel-guide', permanent: true },
  { source: '/dubai/burj-khalifa', destination: '/international-tours/dubai', permanent: true },
  { source: '/domestic-tours/rishikesh', destination: '/domestic-tours/haridwar-rishikesh', permanent: true },
  { source: '/domestic-tours/uttarakhand', destination: '/domestic-packages', permanent: true },
  { source: '/domestic-tours/himachal', destination: '/domestic-packages', permanent: true },
  { source: '/domestic-tours/himachal-pradesh', destination: '/domestic-packages', permanent: true },
  { source: '/international-tours/maldives', destination: '/international-packages', permanent: true },
  { source: '/international-tours/europe', destination: '/international-packages', permanent: true },
  { source: '/international-tours/nepal', destination: '/international-packages', permanent: true },
  { source: '/international-tours/thailand/bangkok', destination: '/destinations/thailand/bangkok', permanent: true },
  { source: '/family-holiday-packages', destination: '/family-tour-packages', permanent: true },
  { source: '/cab-booking', destination: '/travel-services/cab-rental', permanent: true },
  { source: '/chardham/KedarnathTemple', destination: '/chardham/kedarnath-temple', permanent: true },
  { source: '/chardham/BadrinathTemple', destination: '/chardham/badrinath-temple', permanent: true },
  { source: '/chardham/CharDhamPrice', destination: '/chardham-yatra-package-cost', permanent: true },
  { source: '/package/dubai', destination: '/international-tours/dubai', permanent: true },
  { source: '/package/goa', destination: '/domestic-tours/goa', permanent: true },
  { source: '/package/kashmir', destination: '/domestic-tours/kashmir', permanent: true },
  { source: '/package/manali', destination: '/domestic-tours/manali', permanent: true },
  { source: '/package/pattaya', destination: '/destinations/thailand/pattaya', permanent: true },
  { source: '/domestic/andaman/AndamanMaster', destination: '/domestic-tours/andaman', permanent: true },
  { source: '/international/dubai/DubaiMaster', destination: '/international-tours/dubai', permanent: true },
  { source: '/domestic/kashmir/KashmirMaster', destination: '/domestic-tours/kashmir', permanent: true },
  { source: '/domestic/ladakh/LadakhMaster', destination: '/domestic-tours/ladakh', permanent: true },
  { source: '/international/bali', destination: '/international-tours/bali', permanent: true },
  { source: '/international/thailand', destination: '/destinations/thailand', permanent: true },
  { source: '/international/singapore', destination: '/international-tours/singapore', permanent: true },
  { source: '/international/maldives', destination: '/international-packages', permanent: true },
  { source: '/ladakh-travel-safety-tips', destination: '/is-ladakh-safe', permanent: true },
  { source: '/ladakh-packing-checklist', destination: '/ladakh-packing-list', permanent: true },
  { source: '/ladakh-travel-guide', destination: '/domestic-tours/ladakh', permanent: true }
];

let added = 0;
redirectsToAdd.forEach(r => {
  if (!currentSources.has(r.source)) {
    vercel.redirects.push(r);
    currentSources.add(r.source);
    added++;
  }
});

console.log(`Added ${added} safety redirects to vercel.json. Total redirects now: ${vercel.redirects.length}`);
fs.writeFileSync(vercelFile, JSON.stringify(vercel, null, 2), 'utf8');
