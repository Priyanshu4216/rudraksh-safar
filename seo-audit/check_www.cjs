const fs = require('fs');
const path = require('path');

function glob(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(glob(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html') || file.endsWith('.json')) {
      results.push(full);
    }
  });
  return results;
}

const files = glob('travel-compass-hub-main/src');
const wwwMatches = [];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('https://www.rudrakshsafar.com')) {
    wwwMatches.push(f);
  }
});
console.log('Files with www.rudrakshsafar.com in src/:', wwwMatches.length);
wwwMatches.forEach(f => console.log(' - ' + f));
