const fs = require('fs');

const vercel = JSON.parse(fs.readFileSync('travel-compass-hub-main/vercel.json', 'utf8'));
const redirectsPath = 'travel-compass-hub-main/public/_redirects';

let lines = [];
vercel.redirects.forEach(r => {
  if (r.has) return; // skip host-based
  const code = r.permanent ? '301' : '302';
  lines.push(`${r.source} ${r.destination} ${code}`);
});

fs.writeFileSync(redirectsPath, lines.join('\n') + '\n', 'utf8');
console.log(`Synced ${lines.length} rules to public/_redirects`);
