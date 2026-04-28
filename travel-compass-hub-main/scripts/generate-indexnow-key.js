import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Provide absolute path resolving for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Attempt to load .env variables locally (Cloudflare injects these automatically in CI)
try {
    process.loadEnvFile(path.join(rootDir, '.env'));
} catch (e) {
    // Ignore if running in CI without physical .env
}

const rawAppKey = process.env.INDEXNOW_API_KEY;

if (!rawAppKey) {
    console.warn('⚠️ No INDEXNOW_API_KEY environment variable provided. Skipping API Key verification file generation. If this is a production build, please set this environment variable in Cloudflare Pages!');
    process.exit(0);
}

// In case the user encrypted it, we could apply that logic if we kept the util, 
// but since this is build-time, we just use the rawAppKey as the actual key (since the script expects the plain key)
// If you provided the exact plain key directly in Cloudflare env, this parses perfectly!
const actualKey = rawAppKey.split(':').length > 1 ? rawAppKey.split(':')[0] : rawAppKey; // fallback if they copy pasted the hash

const distPath = path.join(rootDir, 'dist');
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
}

const filePath = path.join(distPath, `${rawAppKey}.txt`);
fs.writeFileSync(filePath, rawAppKey, 'utf8');

console.log(`✅ Dynamically generated IndexNow verification file: dist/${rawAppKey}.txt`);
