const fs = require('fs');
const path = require('path');

function glob(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(glob(full));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(full);
    }
  });
  return results;
}

const appFile = fs.readFileSync('travel-compass-hub-main/src/App.tsx', 'utf8');
const routeRegex = /path=["']([^"']+)["']/g;
const appRoutes = new Set();
let rMatch;
while ((rMatch = routeRegex.exec(appFile)) !== null) {
  appRoutes.add(rMatch[1]);
}

const vercel = JSON.parse(fs.readFileSync('travel-compass-hub-main/vercel.json', 'utf8'));
const redirectMap = new Map();
vercel.redirects.forEach(r => redirectMap.set(r.source, r.destination));

const files = glob('travel-compass-hub-main/src');
const linkRegex = /(?:href|to)=["'](\/[^"']*)["']/g;

const brokenMap = new Map(); // brokenLink -> array of { file, line }

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    let m;
    while ((m = linkRegex.exec(line)) !== null) {
      const link = m[1];
      const cleanPath = link.split('#')[0].split('?')[0];
      if (!cleanPath || cleanPath === '/') return;
      if (appRoutes.has(cleanPath)) return;
      if (cleanPath.startsWith('/blog/') || cleanPath.startsWith('/packages/') || cleanPath.startsWith('/destinations/') || cleanPath.startsWith('/tours/')) return;
      if (redirectMap.has(cleanPath)) return;
      
      if (!brokenMap.has(cleanPath)) {
        brokenMap.set(cleanPath, []);
      }
      brokenMap.get(cleanPath).push({ file: f, line: idx + 1 });
    }
  });
});

console.log('Total broken paths found in source code:', brokenMap.size);
for (const [link, occurrences] of brokenMap.entries()) {
  console.log(`\nLink: "${link}" (${occurrences.length} occurrences)`);
  occurrences.slice(0, 3).forEach(occ => {
    console.log(`   -> ${occ.file}:${occ.line}`);
  });
}
