const fs = require('fs');
const file = 'travel-compass-hub-main/src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const importTarget = 'const AfterBookingGuide = lazy(() => import("./pages/guides/AfterBookingGuide"));';
const importAddition = '\nconst ManaliInWinter = lazy(() => import("./pages/guides/ManaliInWinter"));\nconst AtalTunnelSolangGuide = lazy(() => import("./pages/guides/AtalTunnelSolangGuide"));\nconst ManaliWeatherByMonth = lazy(() => import("./pages/guides/ManaliWeatherByMonth"));\nconst ManaliSnowPackingList = lazy(() => import("./pages/guides/ManaliSnowPackingList"));';

if (!content.includes('ManaliInWinter')) {
    content = content.replace(importTarget, importTarget + importAddition);
}

const routeTarget = '<Route path="/guides/after-booking-guide" element={<AfterBookingGuide />} />';
const routeAddition = '\n                    <Route path="/guides/manali-in-winter" element={<ManaliInWinter />} />\n                    <Route path="/guides/atal-tunnel-solang-guide" element={<AtalTunnelSolangGuide />} />\n                    <Route path="/guides/manali-weather-by-month" element={<ManaliWeatherByMonth />} />\n                    <Route path="/guides/manali-snow-packing-list" element={<ManaliSnowPackingList />} />';

if (!content.includes('/guides/manali-in-winter')) {
    content = content.replace(routeTarget, routeTarget + routeAddition);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated App.tsx with Manali guides!');
