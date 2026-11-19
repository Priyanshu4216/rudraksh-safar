const fs = require('fs');

const app = fs.readFileSync('travel-compass-hub-main/src/App.tsx', 'utf8');
const routes = [];
app.split('\n').forEach(l => {
  const m = l.match(/path=["']([^"']+)["']/);
  if (m) routes.push(m[1]);
});

console.log('Chardham routes in App.tsx:');
routes.filter(r => r.includes('chardham') || r.includes('char-dham') || r.includes('kedarnath') || r.includes('badrinath')).forEach(r => console.log('  ' + r));

console.log('\nCurrency / Best time:');
routes.filter(r => r.includes('currency') || r.includes('best-time')).forEach(r => console.log('  ' + r));
