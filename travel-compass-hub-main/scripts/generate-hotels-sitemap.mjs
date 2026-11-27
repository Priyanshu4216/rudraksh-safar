import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const dataTsPath = path.join(projectRoot, 'src', 'data', 'hotelSiloData.ts');
const tmpOutPath = path.join(projectRoot, 'node_modules', '.cache', 'hotelSiloData.sitemap.mjs');

const DOMAIN = 'https://rudrakshsafar.com';

function loadHotelSiloData() {
  fs.mkdirSync(path.dirname(tmpOutPath), { recursive: true });
  esbuild.buildSync({
    entryPoints: [dataTsPath],
    outfile: tmpOutPath,
    bundle: true,
    format: 'esm',
    platform: 'node',
    logLevel: 'silent',
  });
  return import(`${pathToFileURL(tmpOutPath).href}?t=${Date.now()}`);
}

function passesStateGate(state) {
  if (state.readyToIndex === false) return { ok: false, reason: 'readyToIndex=false' };
  if (!state.h1 || !state.metaTitle || !state.metaDescription) {
    return { ok: false, reason: 'missing title/H1/description' };
  }
  if (!state.answerFirstSummary || state.answerFirstSummary.trim().length < 100) {
    return { ok: false, reason: 'answerFirstSummary too thin' };
  }
  if (!Array.isArray(state.citySlugs) || state.citySlugs.length < 1) {
    return { ok: false, reason: 'no cities linked' };
  }
  if (!Array.isArray(state.faqs) || state.faqs.length < 2) {
    return { ok: false, reason: 'fewer than 2 FAQs' };
  }
  return { ok: true };
}

function passesCityGate(city) {
  if (city.readyToIndex === false) return { ok: false, reason: 'readyToIndex=false' };
  if (!city.h1 || !city.metaTitle || !city.metaDescription) {
    return { ok: false, reason: 'missing title/H1/description' };
  }
  if (!city.answerFirstSummary || city.answerFirstSummary.trim().length < 100) {
    return { ok: false, reason: 'answerFirstSummary too thin' };
  }
  if (!Array.isArray(city.areas) || city.areas.length < 2) {
    return { ok: false, reason: 'fewer than 2 neighbourhood guides' };
  }
  if (!Array.isArray(city.curatedHotels) || city.curatedHotels.length < 3) {
    return { ok: false, reason: 'fewer than 3 curated hotels' };
  }
  if (!Array.isArray(city.faqs) || city.faqs.length < 3) {
    return { ok: false, reason: 'fewer than 3 FAQs' };
  }
  if (!city.bundleUpsell?.packageHref) {
    return { ok: false, reason: 'missing bundle package link' };
  }
  return { ok: true };
}

async function run() {
  const { HOTEL_STATES, HOTEL_CITIES } = await loadHotelSiloData();
  const today = new Date().toISOString().split('T')[0];

  const entries = [
    {
      loc: `${DOMAIN}/hotels`,
      lastmod: today,
      changefreq: 'daily',
      priority: '0.95',
    },
  ];

  const skipped = [];

  for (const state of Object.values(HOTEL_STATES)) {
    const gate = passesStateGate(state);
    if (!gate.ok) {
      skipped.push(`/hotels/${state.slug} (${gate.reason})`);
      continue;
    }
    entries.push({
      loc: `${DOMAIN}/hotels/${state.slug}`,
      lastmod: state.lastUpdated || today,
      changefreq: 'weekly',
      priority: state.slug === 'chhattisgarh' ? '0.9' : '0.85',
    });
  }

  for (const city of Object.values(HOTEL_CITIES)) {
    const gate = passesCityGate(city);
    if (!gate.ok) {
      skipped.push(`/hotels/${city.slug} (${gate.reason})`);
      continue;
    }
    entries.push({
      loc: `${DOMAIN}/hotels/${city.slug}`,
      lastmod: city.lastUpdated || today,
      changefreq: 'weekly',
      priority: ['bhilai', 'raipur', 'manali', 'haridwar', 'rishikesh'].includes(city.slug) ? '0.9' : '0.85',
    });
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const entry of entries) {
    xml += `  <url>\n`;
    xml += `    <loc>${entry.loc}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += `  </url>\n`;
  }
  xml += `</urlset>\n`;

  const outPath = path.join(publicDir, 'sitemap-hotels.xml');
  fs.writeFileSync(outPath, xml, 'utf8');

  // Keep sitemap.xml lastmod for sitemap-hotels.xml fresh automatically
  const indexPath = path.join(publicDir, 'sitemap.xml');
  if (fs.existsSync(indexPath)) {
    let indexXml = fs.readFileSync(indexPath, 'utf8');
    indexXml = indexXml.replace(
      /(<loc>https:\/\/rudrakshsafar\.com\/sitemap-hotels\.xml<\/loc>\s*<lastmod>)(.*?)(<\/lastmod>)/,
      `$1${today}$3`
    );
    fs.writeFileSync(indexPath, indexXml, 'utf8');
  }

  console.log(`✅ Generated public/sitemap-hotels.xml with ${entries.length} index-ready hotel URLs.`);
  if (skipped.length > 0) {
    console.log(`⏭️  Skipped ${skipped.length} unready/noindex hotel pages: ${skipped.join(', ')}`);
  }
}

run().catch((err) => {
  console.error('❌ Failed to generate hotels sitemap:', err);
  process.exit(1);
});
