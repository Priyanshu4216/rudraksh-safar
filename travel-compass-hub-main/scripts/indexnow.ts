import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

try {
  process.loadEnvFile(path.join(projectRoot, '.env'));
} catch {
  // Ignore if .env is missing
}

const host = 'rudrakshsafar.com';
const apiKey = process.env.INDEXNOW_API_KEY || process.env.VITE_INDEXNOW_KEY || '0b29c2d25285406c999772325726af2e';

export const KUMBH_2027_URLS = [
  // English Hub & Spokes
  `https://${host}/kumbh-mela-2027`,
  `https://${host}/kumbh-mela-2027/snan-dates`,
  `https://${host}/kumbh-mela-2027/live-updates`,
  `https://${host}/kumbh-mela-2027/how-to-reach`,
  `https://${host}/kumbh-mela-2027/stay`,
  `https://${host}/kumbh-mela-2027/parking-and-traffic`,
  `https://${host}/kumbh-mela-2027/senior-family-guide`,
  `https://${host}/kumbh-mela-2027/ardh-kumbh-explained`,
  `https://${host}/kumbh-mela-2027/dos-and-donts`,
  `https://${host}/kumbh-mela-2027/packages`,

  // Chhattisgarh City Silo
  `https://${host}/kumbh-mela-2027/packages/chhattisgarh`,
  `https://${host}/kumbh-mela-2027/packages/from-raipur`,
  `https://${host}/kumbh-mela-2027/packages/from-bhilai`,
  `https://${host}/kumbh-mela-2027/packages/from-bilaspur`,
  `https://${host}/kumbh-mela-2027/packages/from-durg`,
  `https://${host}/kumbh-mela-2027/packages/from-rajnandgaon`,

  // Hindi Mirrors (/hi/)
  `https://${host}/hi/kumbh-mela-2027`,
  `https://${host}/hi/kumbh-mela-2027/snan-dates`,
  `https://${host}/hi/kumbh-mela-2027/live-updates`,
  `https://${host}/hi/kumbh-mela-2027/how-to-reach`,
  `https://${host}/hi/kumbh-mela-2027/stay`,
  `https://${host}/hi/kumbh-mela-2027/parking-and-traffic`,
  `https://${host}/hi/kumbh-mela-2027/senior-family-guide`,
  `https://${host}/hi/kumbh-mela-2027/ardh-kumbh-explained`,
  `https://${host}/hi/kumbh-mela-2027/dos-and-donts`,
  `https://${host}/hi/kumbh-mela-2027/packages`,
  `https://${host}/hi/kumbh-mela-2027/packages/chhattisgarh`,
  `https://${host}/hi/kumbh-mela-2027/packages/from-raipur`,
  `https://${host}/hi/kumbh-mela-2027/packages/from-bhilai`,
  `https://${host}/hi/kumbh-mela-2027/packages/from-bilaspur`,
  `https://${host}/hi/kumbh-mela-2027/packages/from-durg`,
  `https://${host}/hi/kumbh-mela-2027/packages/from-rajnandgaon`
];

async function submitIndexNow(urls: string[]) {
  console.log(`\n🚀 Submitting ${urls.length} Haridwar Kumbh 2027 URLs to IndexNow...`);

  if (!apiKey || apiKey === 'TODO_VERIFY') {
    console.log('⚠️  Notice: INDEXNOW_API_KEY is not set or is TODO_VERIFY. Skipping network call in audit mode.');
    return;
  }

  const payload = {
    host,
    key: apiKey,
    keyLocation: `https://${host}/${apiKey}.txt`,
    urlList: urls
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok || res.status === 202) {
      console.log(`✅ IndexNow successfully accepted ${urls.length} URLs (Status: ${res.status}).`);
    } else {
      console.error(`❌ IndexNow response status: ${res.status}`);
      const text = await res.text();
      console.error(text);
    }
  } catch (err: any) {
    console.error('❌ IndexNow submission error:', err.message);
  }
}

if (process.argv[1] && process.argv[1].endsWith('indexnow.ts')) {
  submitIndexNow(KUMBH_2027_URLS);
}
