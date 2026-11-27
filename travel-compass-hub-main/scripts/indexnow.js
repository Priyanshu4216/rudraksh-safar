import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Auto-load .env variables
try {
    process.loadEnvFile(path.join(rootDir, '.env'));
} catch (e) {
    try {
        process.loadEnvFile(path.join(process.cwd(), '.env'));
    } catch {}
}

async function run() {
    console.log('\n🚀 Starting IndexNow URL Submission...\n');

    const rawAppKey = process.env.INDEXNOW_API_KEY || process.env.VITE_INDEXNOW_KEY;
    if (!rawAppKey) {
        console.error('❌ Error: INDEXNOW_API_KEY is missing in your .env file.');
        process.exit(1);
    }

    const actualKey = rawAppKey.trim();
    const host = 'rudrakshsafar.com';

    // 1. Discover URLs from all sitemaps
    const publicDir = path.join(rootDir, 'public');
    const sitemapsToCheck = [
        'sitemap-main.xml',
        'sitemap-packages.xml',
        'sitemap-blog.xml',
        'sitemap-kumbh.xml',
        'sitemap-local.xml',
        'sitemap-hotels.xml'
    ];
    let urlsToSubmit = [];

    for (const sitemapFile of sitemapsToCheck) {
        const p = path.join(publicDir, sitemapFile);
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, 'utf8');
            const matches = [...content.matchAll(/<loc>(.*?)<\/loc>/g)];
            const extracted = matches.map(m => m[1].trim()).filter(u => u.includes(host));
            urlsToSubmit.push(...extracted);
            console.log(`✅ Found ${extracted.length} URLs in ${sitemapFile}.`);
        }
    }

    // De-duplicate URLs
    urlsToSubmit = [...new Set(urlsToSubmit)];

    if (urlsToSubmit.length === 0) {
        console.log('⚠️ No URLs found to submit. Using homepage as fallback.');
        urlsToSubmit.push(`https://${host}/`);
    }

    // IndexNow accepts up to 10,000 URLs per call
    const batch = urlsToSubmit.slice(0, 1000);
    console.log(`\n📤 Preparing to submit batch of ${batch.length} URLs for indexing...`);

    const payload = {
        host: host,
        key: actualKey,
        keyLocation: `https://${host}/${actualKey}.txt`,
        urlList: batch
    };

    try {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(payload)
        });

        if (response.ok || response.status === 202) {
            console.log(`\n🎉 Success! IndexNow accepted the submission. Status: ${response.status}`);
            console.log(`✅ ${batch.length} URLs submitted for host: ${host}`);
        } else {
            console.error(`\n❌ Submission returned HTTP Status: ${response.status}`);
            const textDesc = await response.text();
            console.error('Details:', textDesc);
        }
    } catch (err) {
        console.error('\n❌ Network error while submitting URLs:', err.message);
    }
}

run();
