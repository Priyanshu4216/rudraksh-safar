const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json')) results.push(file);
    }
  });
  return results;
}

const all = walk('travel-compass-hub-main/src');
all.forEach(file => {
  const c = fs.readFileSync(file, 'utf8');
  if (c.includes('Vyapar Vihar') || c.includes('"addressLocality": "Raipur"') || c.includes('"addressLocality": "Bilaspur"')) {
    console.log('FAKE ADDRESS FOUND in:', file);
  }
});
