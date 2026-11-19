const fs = require('fs');

const lines = fs.readFileSync('seo-data/page_registry.csv', 'utf8').split('\n');
console.log('Total entries in seo-data/page_registry.csv:', lines.length);
console.log('Header:', lines[0]);
console.log('Sample row:', lines[1]);
