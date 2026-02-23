import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const ASSET_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.pdf', '.mp4', '.webm', '.css', '.json'];

let missingAssets = new Set();
let hasErrors = false;

function scanDirectoryForBrokenLinks(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('dist')) continue;

        if (entry.isDirectory()) {
            scanDirectoryForBrokenLinks(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name);
            if (['.tsx', '.ts', '.html', '.css', '.json'].includes(ext)) {
                let content = fs.readFileSync(fullPath, 'utf8');

                const regex = /(?:["'`])(\/[^"'`?#]*\.(png|jpg|jpeg|webp|svg|gif|pdf|json))(?:[?#][^"'`]*)?(?:["'`])/gi;
                let match;

                while ((match = regex.exec(content)) !== null) {
                    const urlPath = match[1];
                    // decode the URI so spaces matched correctly
                    let decodedUrl = urlPath;
                    try { decodedUrl = decodeURIComponent(urlPath); } catch (e) { }

                    if (!missingAssets.has(decodedUrl)) {
                        const publicFallback = path.join(PUBLIC_DIR, decodedUrl);
                        const srcFallback = path.join(SRC_DIR, decodedUrl);

                        if (!fs.existsSync(publicFallback) && !fs.existsSync(srcFallback)) {
                            missingAssets.add(decodedUrl);
                            console.error(`❌ BROKEN LINK FOUND: ${urlPath}`);
                            console.error(`   Referenced in: ${path.relative(process.cwd(), fullPath)}\n`);
                            hasErrors = true;
                        }
                    }
                }
            }
        }
    }
}

console.log('🔍 Scanning codebase for broken local asset links...');
scanDirectoryForBrokenLinks(SRC_DIR);
scanDirectoryForBrokenLinks(PUBLIC_DIR);

if (hasErrors) {
    console.error('\n🚨 Audit Failed! Broken internal links were found.');
    process.exit(1);
} else {
    console.log('✅ Success! All internal asset links are valid.');
    process.exit(0);
}
