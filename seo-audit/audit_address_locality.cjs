const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
  });
  return results;
}

const all = walk('travel-compass-hub-main/src');
all.forEach(file => {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/"addressLocality":\s*"([^"]+)"/g);
  if (m) {
    console.log(file, '->', m);
  }
});
