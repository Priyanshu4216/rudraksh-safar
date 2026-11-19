const fs = require('fs');
const app = fs.readFileSync('travel-compass-hub-main/src/App.tsx', 'utf8');
const dests = ['thailand', 'bali', 'dubai', 'vietnam', 'kashmir', 'manali', 'ladakh', 'kerala', 'goa', 'rajasthan', 'gujarat', 'puri', 'almaty', 'seychelles', 'macau', 'philippines', 'srilanka', 'japan', 'malaysia', 'singapore'];

dests.forEach(d => {
  const re = new RegExp('path="([^"]*' + d + '[^"]*)"[^>]*element={<([A-Za-z0-9_]+)', 'gi');
  let match;
  const matches = [];
  while ((match = re.exec(app)) !== null) {
    matches.push({ path: match[1], comp: match[2] });
  }
  console.log(d.toUpperCase() + ' (' + matches.length + ' routes):');
  matches.forEach(m => console.log('  ' + m.path + ' -> ' + m.comp));
});
