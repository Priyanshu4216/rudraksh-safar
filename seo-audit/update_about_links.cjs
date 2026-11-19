const fs = require('fs');

const file = 'travel-compass-hub-main/src/pages/AboutUs.tsx';
let c = fs.readFileSync(file, 'utf8');

c = c.replace('<Link to="/domestic-tours"', '<Link to="/domestic-packages"');
c = c.replace(/<Link to="\/b2b"/g, '<Link to="/b2b-travel-partners"');
c = c.replace('<Link to="/Contact"', '<Link to="/contact"');

fs.writeFileSync(file, c, 'utf8');
console.log('Successfully updated AboutUs.tsx internal links');
