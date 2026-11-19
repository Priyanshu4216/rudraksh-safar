const fs = require('fs');
const app = fs.readFileSync('travel-compass-hub-main/src/App.tsx', 'utf8');
const targets = ['bhilai', 'raipur', 'bilaspur', 'durg'];
targets.forEach(t => {
  const re = new RegExp('path="([^"]*' + t + '[^"]*)"[^>]*element={<([A-Za-z0-9_]+)', 'gi');
  let match;
  const matches = [];
  while ((match = re.exec(app)) !== null) {
    matches.push({ path: match[1], comp: match[2] });
  }
  console.log(t.toUpperCase() + ' (' + matches.length + ' routes):');
  matches.forEach(m => console.log('  ' + m.path + ' -> ' + m.comp));
});
