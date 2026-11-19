const fs = require('fs');
const app = fs.readFileSync('travel-compass-hub-main/src/App.tsx', 'utf8');
const themes = ['honeymoon', 'family', 'group', 'budget', 'luxury', 'pilgrimage', 'senior', 'corporate', 'visa', 'insurance', 'forex', 'flight', 'hotel'];

themes.forEach(t => {
  const re = new RegExp('path="([^"]*' + t + '[^"]*)"[^>]*element={<([A-Za-z0-9_]+)', 'gi');
  let match;
  const matches = [];
  while ((match = re.exec(app)) !== null) {
    matches.push({ path: match[1], comp: match[2] });
  }
  console.log(t.toUpperCase() + ' (' + matches.length + ' routes):');
  matches.forEach(m => console.log('  ' + m.path + ' -> ' + m.comp));
});
