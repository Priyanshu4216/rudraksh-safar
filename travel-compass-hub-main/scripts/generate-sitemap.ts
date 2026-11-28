import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_KUMBH_CITIES } from '../src/data/kumbh/cities.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'public');

interface RouteConfig {
  path: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
}

const KUMBH_ROUTES: RouteConfig[] = [
  // Hub
  { path: '/kumbh-mela-2027', changefreq: 'daily', priority: '1.0' },
  { path: '/kumbh-mela-2027/snan-dates', changefreq: 'weekly', priority: '0.9' },
  { path: '/kumbh-mela-2027/live-updates', changefreq: 'daily', priority: '0.9' },
  { path: '/kumbh-mela-2027/how-to-reach', changefreq: 'weekly', priority: '0.8' },
  { path: '/kumbh-mela-2027/stay', changefreq: 'weekly', priority: '0.8' },
  { path: '/kumbh-mela-2027/parking-and-traffic', changefreq: 'daily', priority: '0.8' },
  { path: '/kumbh-mela-2027/senior-family-guide', changefreq: 'weekly', priority: '0.8' },
  { path: '/kumbh-mela-2027/ardh-kumbh-explained', changefreq: 'monthly', priority: '0.7' },
  { path: '/kumbh-mela-2027/dos-and-donts', changefreq: 'monthly', priority: '0.7' },
  { path: '/kumbh-mela-2027/packages', changefreq: 'weekly', priority: '0.9' },

  // Individual Package Silo Pages (2027 Official)
  { path: '/kumbh-mela-2027/packages/haridwar-kumbh-darshan-1n-2d', changefreq: 'weekly', priority: '0.9' },
  { path: '/kumbh-mela-2027/packages/haridwar-kumbh-mela-2n-3d', changefreq: 'weekly', priority: '0.9' },
  { path: '/kumbh-mela-2027/packages/kumbh-devprayag-3n-4d', changefreq: 'weekly', priority: '0.9' },
  { path: '/kumbh-mela-2027/packages/kumbh-mussoorie-3n-4d', changefreq: 'weekly', priority: '0.9' },
  { path: '/kumbh-mela-2027/packages/kumbh-neelkanth-mahadev-3n-4d', changefreq: 'weekly', priority: '0.9' },
  { path: '/kumbh-mela-2027/packages/kumbh-senior-citizen-special-2n-3d', changefreq: 'weekly', priority: '0.9' },
  { path: '/kumbh-mela-2027/packages/kumbh-rishikesh-3n-4d', changefreq: 'weekly', priority: '0.9' },
  { path: '/kumbh-mela-2027/packages/kumbh-neem-karoli-nainital-4n-5d', changefreq: 'weekly', priority: '0.9' },
  { path: '/kumbh-mela-2027/packages/kumbh-rishikesh-mussoorie-4n-5d', changefreq: 'weekly', priority: '0.9' },

  // Chhattisgarh Hub & Top 100 Cities Regional Silos
  { path: '/kumbh-mela-2027/packages/chhattisgarh', changefreq: 'weekly', priority: '0.9' },
  ...ALL_KUMBH_CITIES.map((city) => ({
    path: `/kumbh-mela-2027/packages/${city.slug}`,
    changefreq: 'weekly' as const,
    priority: '0.85'
  }))
];

export function generateKumbhSitemapXml(): string {
  const domain = 'https://rudrakshsafar.com';
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of KUMBH_ROUTES) {
    const enUrl = `${domain}${route.path}`;
    const hiUrl = `${domain}/hi${route.path}`;

    // English URL Entry
    xml += `  <url>\n`;
    xml += `    <loc>${enUrl}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="hi" href="${hiUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />\n`;
    xml += `  </url>\n`;

    // Hindi URL Entry
    xml += `  <url>\n`;
    xml += `    <loc>${hiUrl}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="hi" href="${hiUrl}" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

export function writeKumbhSitemap() {
  const outputPath = path.join(publicDir, 'sitemap-kumbh.xml');
  const xmlContent = generateKumbhSitemapXml();
  fs.writeFileSync(outputPath, xmlContent, 'utf8');
  console.log(`✅ Generated sitemap-kumbh.xml with ${KUMBH_ROUTES.length * 2} URL entries (EN + HI alternate pairs).`);
}

if (process.argv[1] && process.argv[1].endsWith('generate-sitemap.ts')) {
  writeKumbhSitemap();
}
