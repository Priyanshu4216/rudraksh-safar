const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetSize = 200 * 1024; // 200 KB
const publicDir = path.join(__dirname, 'public', 'images');
const srcDir = path.join(__dirname, 'src');

let converted = 0;
let failed = 0;
// Map of old URL path -> new URL path
let replacementMap = {};

async function scanAndProcess(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await scanAndProcess(fullPath);
        } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
            // Only convert if > 200KB OR we just want everything to be webp?
            // The prompt said "Convert all images above 200–250KB into WebP format."
            // We'll convert images > 200 KB, though keeping WebP overall is better. Let's do > 200KB for strict adherence.
            if (stat.size > targetSize) {
                const ext = path.extname(file);
                const webpFile = fullPath.replace(new RegExp(ext + '$', 'i'), '.webp');

                try {
                    await sharp(fullPath).webp({ quality: 80 }).toFile(webpFile);
                    console.log(`Converted: ${file} -> ${path.basename(webpFile)}`);
                    converted++;

                    // We need to map the relative public path for replacing in components
                    // e.g., /images/Discover/xxx.jpg -> /images/Discover/xxx.webp
                    // or just the filename if it's unique
                    const relOld = fullPath.split('public')[1].replace(/\\/g, '/');
                    const relNew = webpFile.split('public')[1].replace(/\\/g, '/');
                    replacementMap[relOld] = relNew;

                    // Optionally remove old file to save space? Let's leave it for safety for now unless disk is tight.
                } catch (err) {
                    console.error('Error converting ' + file, err);
                    failed++;
                }
            }
        }
    }
}

function updateReactFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            updateReactFiles(fullPath);
        } else if (file.match(/\.(tsx|ts|jsx|js|css)$/)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            for (const [oldPath, newPath] of Object.entries(replacementMap)) {
                // simple replace string, might need to be careful with quotes, but matching exact path usually works
                // e.g., src="/images/bla.jpg"
                if (content.includes(oldPath)) {
                    content = content.replace(new RegExp(oldPath, 'g'), newPath);
                    changed = true;
                }
            }

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated references in ' + file);
            }
        }
    }
}

async function run() {
    console.log('Starting WebP conversion...');
    await scanAndProcess(publicDir);
    console.log(`Conversion complete. Converted: ${converted}, Failed: ${failed}`);

    if (Object.keys(replacementMap).length > 0) {
        console.log('Updating React components with new WebP paths...');
        updateReactFiles(srcDir);
        console.log('Component update complete.');
    }
}

run();
