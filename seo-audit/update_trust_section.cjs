const fs = require('fs');

const file = 'travel-compass-hub-main/src/components/home-redesign/TrustSection.tsx';
let c = fs.readFileSync(file, 'utf8');

c = c.replace(
  /<Link to="\/reviews"([^>]*)>([\s\S]*?)<\/Link>/,
  '<a href="https://maps.app.goo.gl/rudrakshsafar" target="_blank" rel="noopener noreferrer"$1>$2</a>'
);

fs.writeFileSync(file, c, 'utf8');
console.log('Successfully updated TrustSection.tsx');
