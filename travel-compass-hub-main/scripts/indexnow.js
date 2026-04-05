import fs from 'fs';
import path from 'path';
import { resolveKey } from '../api/utils/encryption.js';

// Auto-load .env variables (native in modern Node)
try {
    process.loadEnvFile(path.join(process.cwd(), '.env'));
} catch (e) {
    // Ignore if not present
}

async function run() {
    console.log('\n🚀 Starting IndexNow URL Submission...\n');

    const rawAppKey = process.env.INDEXNOW_API_KEY;
    if (!rawAppKey) {
        console.error('❌ Error: INDEXNOW_API_KEY is missing in your .env file.');
        process.exit(1);
    }

    const actualKey = resolveKey(rawAppKey);
    const host = 'rudrakshsafar.com';

    // 1. Discover URLs from your sitemaps
    const sitemapsToCheck = ['sitemap-main.xml', 'sitemap-packages.xml'];
    let urlsToSubmit = [];

    for (const sitemapFile of sitemapsToCheck) {
        const p = path.join(process.cwd(), 'public', sitemapFile);
        if (fs.existsSync(p)) {
            const content = fs.readFileSync(p, 'utf8');
            const matches = [...content.matchAll(/<loc>(.*?)<\/loc>/g)];
            const extracted = matches.map(m => m[1]).filter(u => u.includes(host));
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

    // 2. We submit the first 100 for now to respect basic limits
    const batch = urlsToSubmit.slice(0, 100);
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok || response.status === 202) {
            console.log(`\n🎉 Success! Bing accepted the submission. Status: ${response.status}`);
            console.log(`URLs successfully submitted for domain: ${host}`);
        } else {
            console.error(`\n❌ Submission might have failed. HTTP Status: ${response.status}`);
            const textDesc = await response.text();
            console.error('Details:', textDesc);
        }
    } catch (err) {
        console.error('\n❌ Network error while submitting URLs:', err.message);
    }
}

run();
