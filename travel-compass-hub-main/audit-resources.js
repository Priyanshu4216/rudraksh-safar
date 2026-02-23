import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const DIRS_TO_SCAN = [SRC_DIR, PUBLIC_DIR];

// We want to find common asset extensions
const ASSET_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.pdf', '.mp4', '.webm', '.css', '.js', '.json'];

let missingAssets = new Set();
let checkedAssets = new Set();
let assetReferences = {}; // url -> Set of files referencing it

function processDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('dist')) continue;

        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name);
            if (['.tsx', '.ts', '.html', '.xml', '.js', '.jsx', '.css', '.json'].includes(ext)) {
                let content = fs.readFileSync(fullPath, 'utf8');

                // Extract all paths that look like absolute local paths (e.g. /images/..., /pdfs/..., /assets/...)
                // or URLs ending in common asset extensions.
                // Regex looks for string literals starting with / and having an extension
                const regex = /(?:["'`])(\/[^"'`?#]*\.(png|jpg|jpeg|webp|svg|gif|pdf|mp4|webm|css|js|json))(?:[?#][^"'`]*)?(?:["'`])/gi;

                let match;
                while ((match = regex.exec(content)) !== null) {
                    const urlPath = match[1];
                    // E.g. /images/destinations/goa.jpg

                    if (!assetReferences[urlPath]) {
                        assetReferences[urlPath] = new Set();
                    }
                    assetReferences[urlPath].add(fullPath);

                    if (!checkedAssets.has(urlPath)) {
                        checkedAssets.add(urlPath);
                        // Check if file exists in public dir OR src dir
                        const publicFallback = path.join(PUBLIC_DIR, urlPath);
                        const srcFallback = path.join(SRC_DIR, urlPath);
                        const rawFallback = path.join(process.cwd(), urlPath); // Just in case

                        if (!fs.existsSync(publicFallback) && !fs.existsSync(srcFallback) && !fs.existsSync(rawFallback)) {
                            missingAssets.add(urlPath);
                        }
                    }
                }
            }
        }
    }
}

for (const dir of DIRS_TO_SCAN) {
    processDirectory(dir);
}

console.log('--- Missing Local Resource Audit ---');
if (missingAssets.size === 0) {
    console.log('✅ No missing local assets found (Images, PDFs, CSS, JS, etc).');
} else {
    console.log(`❌ Found ${missingAssets.size} missing local assets that will return 404:`);
    for (const missing of missingAssets) {
        console.log(`\n404 RESOURCE: ${missing}`);
        console.log(`REFERENCED IN:`);
        for (const ref of assetReferences[missing]) {
            // Print relative path for cleaner output
            console.log(`  - ${path.relative(process.cwd(), ref)}`);
        }
    }
}

