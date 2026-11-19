const fs = require('fs');

const app = fs.readFileSync('travel-compass-hub-main/src/App.tsx', 'utf8');
const routes = [];
app.split('\n').forEach(l => {
  const m = l.match(/path=["']([^"']+)["']/);
  if (m) routes.push(m[1]);
});

console.log('Ladakh routes in App.tsx:');
routes.filter(r => r.includes('ladakh')).forEach(r => console.log('  ' + r));

console.log('\nThailand routes in App.tsx:');
routes.filter(r => r.includes('thailand')).forEach(r => console.log('  ' + r));

console.log('\nDubai routes in App.tsx:');
routes.filter(r => r.includes('dubai')).forEach(r => console.log('  ' + r));
