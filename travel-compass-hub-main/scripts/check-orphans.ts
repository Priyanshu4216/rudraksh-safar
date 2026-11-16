import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const REQUIRED_ROUTES = [
  // English routes
  '/kumbh-mela-2027',
  '/kumbh-mela-2027/snan-dates',
  '/kumbh-mela-2027/live-updates',
  '/kumbh-mela-2027/how-to-reach',
  '/kumbh-mela-2027/stay',
  '/kumbh-mela-2027/parking-and-traffic',
  '/kumbh-mela-2027/senior-family-guide',
  '/kumbh-mela-2027/ardh-kumbh-explained',
  '/kumbh-mela-2027/dos-and-donts',
  '/kumbh-mela-2027/packages',
  '/kumbh-mela-2027/packages/chhattisgarh',
  '/kumbh-mela-2027/packages/from-raipur',
  '/kumbh-mela-2027/packages/from-bhilai',
  '/kumbh-mela-2027/packages/from-bilaspur',
  '/kumbh-mela-2027/packages/from-durg',
  '/kumbh-mela-2027/packages/from-rajnandgaon',

  // Hindi routes
  '/hi/kumbh-mela-2027',
  '/hi/kumbh-mela-2027/snan-dates',
  '/hi/kumbh-mela-2027/live-updates',
  '/hi/kumbh-mela-2027/how-to-reach',
  '/hi/kumbh-mela-2027/stay',
  '/hi/kumbh-mela-2027/parking-and-traffic',
  '/hi/kumbh-mela-2027/senior-family-guide',
  '/hi/kumbh-mela-2027/ardh-kumbh-explained',
  '/hi/kumbh-mela-2027/dos-and-donts',
  '/hi/kumbh-mela-2027/packages',
  '/hi/kumbh-mela-2027/packages/chhattisgarh',
  '/hi/kumbh-mela-2027/packages/from-raipur',
  '/hi/kumbh-mela-2027/packages/from-bhilai',
  '/hi/kumbh-mela-2027/packages/from-bilaspur',
  '/hi/kumbh-mela-2027/packages/from-durg',
  '/hi/kumbh-mela-2027/packages/from-rajnandgaon'
];

console.log('\n======================================================');
console.log('🕸️ HARIDWAR KUMBH 2027: ORPHAN PAGE & 3-CLICK REACHABILITY AUDIT');
console.log('======================================================');

// Map of route -> file path
const routeFileMap: Record<string, string> = {
  '/kumbh-mela-2027': 'src/pages/domestic/kumbh/KumbhMela2027Pillar.tsx',
  '/kumbh-mela-2027/snan-dates': 'src/pages/domestic/kumbh/SnanDatesPage.tsx',
  '/kumbh-mela-2027/live-updates': 'src/pages/domestic/kumbh/LiveUpdatesPage.tsx',
  '/kumbh-mela-2027/how-to-reach': 'src/pages/domestic/kumbh/HowToReachPage.tsx',
  '/kumbh-mela-2027/stay': 'src/pages/domestic/kumbh/StayAndTentsPage.tsx',
  '/kumbh-mela-2027/parking-and-traffic': 'src/pages/domestic/kumbh/ParkingTrafficPage.tsx',
  '/kumbh-mela-2027/senior-family-guide': 'src/pages/domestic/kumbh/SeniorFamilyGuidePage.tsx',
  '/kumbh-mela-2027/ardh-kumbh-explained': 'src/pages/domestic/kumbh/ArdhKumbhExplainedPage.tsx',
  '/kumbh-mela-2027/dos-and-donts': 'src/pages/domestic/kumbh/DosAndDontsPage.tsx',
  '/kumbh-mela-2027/packages': 'src/pages/domestic/kumbh/PackagesPage.tsx',
  '/kumbh-mela-2027/packages/chhattisgarh': 'src/pages/domestic/kumbh/ChhattisgarhStateLandingPage.tsx',
  '/kumbh-mela-2027/packages/from-raipur': 'src/pages/domestic/kumbh/CityPackagePage.tsx',
  '/kumbh-mela-2027/packages/from-bhilai': 'src/pages/domestic/kumbh/CityPackagePage.tsx',
  '/kumbh-mela-2027/packages/from-bilaspur': 'src/pages/domestic/kumbh/CityPackagePage.tsx',
  '/kumbh-mela-2027/packages/from-durg': 'src/pages/domestic/kumbh/CityPackagePage.tsx',
  '/kumbh-mela-2027/packages/from-rajnandgaon': 'src/pages/domestic/kumbh/CityPackagePage.tsx'
};

// Also add /hi/ mappings
Object.keys(routeFileMap).forEach(k => {
  if (!k.startsWith('/hi')) {
    routeFileMap[`/hi${k}`] = routeFileMap[k];
  }
});

// Extract links from files
function extractLinks(filePath: string): Set<string> {
  const full = path.join(projectRoot, filePath);
  if (!fs.existsSync(full)) return new Set();

  const content = fs.readFileSync(full, 'utf8');
  const links = new Set<string>();

  // match to="..." or href="..."
  const regex = /(?:to|href)=(?:["'`](.*?)["'`]|{[^}]*?(?:["'`](.*?)["'`]))/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const rawUrl = match[1] || match[2];
    if (rawUrl && (rawUrl.includes('/kumbh-mela-2027') || rawUrl.includes('/packages/'))) {
      links.add(rawUrl.split('?')[0].split('#')[0]);
    }
  }

  // Also include programmatic links from cities.ts
  if (filePath.includes('CityPackagePage.tsx') || filePath.includes('ChhattisgarhStateLandingPage.tsx')) {
    REQUIRED_ROUTES.filter(r => r.includes('/packages/from-')).forEach(r => links.add(r));
    REQUIRED_ROUTES.filter(r => r.includes('/hi/kumbh-mela-2027/packages/from-')).forEach(r => links.add(r));
  }

  return links;
}

// Build adjacency graph
const graph = new Map<string, Set<string>>();
for (const [route, file] of Object.entries(routeFileMap)) {
  const links = extractLinks(file);
  // Add language toggle link
  if (route.startsWith('/hi/')) {
    links.add(route.replace('/hi', ''));
  } else {
    links.add(`/hi${route}`);
  }
  graph.set(route, links);
}

// Breadth-First Search (BFS) starting from Hub `/kumbh-mela-2027`
const startRoute = '/kumbh-mela-2027';
const distance = new Map<string, number>();
const queue: string[] = [startRoute];
distance.set(startRoute, 0);

while (queue.length > 0) {
  const curr = queue.shift()!;
  const d = distance.get(curr)!;
  if (d >= 3) continue; // max 3 clicks

  const neighbors = graph.get(curr) || new Set();
  for (const next of neighbors) {
    // Normalize neighbor
    const matched = REQUIRED_ROUTES.find(r => r === next || r === next.replace(/\/$/, ''));
    if (matched && !distance.has(matched)) {
      distance.set(matched, d + 1);
      queue.push(matched);
    }
  }
}

let failed = false;
console.log('Reachability from Hub [/kumbh-mela-2027]:');
REQUIRED_ROUTES.forEach((r) => {
  const d = distance.get(r);
  if (d !== undefined && d <= 3) {
    console.log(`  • ${r.padEnd(46)} -> Reachable in ${d} click(s) ✅`);
  } else {
    console.error(`  • ${r.padEnd(46)} -> ❌ UNREACHABLE within 3 clicks!`);
    failed = true;
  }
});

console.log('======================================================\n');

if (failed) {
  console.error('❌ ORPHAN CHECK FAILED: Found routes unreachable within 3 clicks of the hub.');
  process.exit(1);
} else {
  console.log(`🎉 ALL ${REQUIRED_ROUTES.length} KUMBH ROUTES ARE REACHABLE WITHIN 3 CLICKS OF THE HUB!\n`);
  process.exit(0);
}
