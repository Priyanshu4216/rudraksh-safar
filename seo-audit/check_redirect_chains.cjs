const fs = require('fs');

const vercel = JSON.parse(fs.readFileSync('travel-compass-hub-main/vercel.json', 'utf8'));
const map = new Map();
vercel.redirects.forEach(r => {
  if (!r.has) map.set(r.source, r.destination);
});

console.log('Checking for redirect chains and loops across', map.size, 'redirects...');

let chains = 0;
let loops = 0;

for (const [src, dest] of map.entries()) {
  if (map.has(dest)) {
    const nextDest = map.get(dest);
    console.log(`[CHAIN] ${src} -> ${dest} -> ${nextDest}`);
    chains++;
    if (nextDest === src) {
      console.log(`[LOOP DETECTED] ${src} <-> ${dest}`);
      loops++;
    }
  }
}

if (chains === 0 && loops === 0) {
  console.log('SUCCESS: ZERO redirect chains and ZERO redirect loops detected!');
} else {
  console.log(`Found ${chains} chains and ${loops} loops.`);
}
