const fs = require('fs');
const path = require('path');

// Helper to convert React Router path to RegExp
// e.g., /package/:packageId -> /package/[^/]+
function pathToRegExp(routePath) {
    if (routePath === '*') return /.*/;

    // Escape special regex chars
    let regexStr = routePath.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

    // Replace param placeholders like \:id with [^/]+
    regexStr = regexStr.replace(/\\:([a-zA-Z0-9_]+)/g, '[^/]+');

    return new RegExp('^' + regexStr + '$');
}

// 1. Extract routes from App.tsx
const appTsxContent = fs.readFileSync(path.join(__dirname, 'src', 'App.tsx'), 'utf8');
const routeRegex = /<Route\s+(?:exact\s+)?path=["']([^"']+)["']/g;
const routes = [];
let match;
while ((match = routeRegex.exec(appTsxContent)) !== null) {
    routes.push(match[1]);
}

// Create regex testers for dynamic routes
const routeTesters = routes.map(r => ({ path: r, regex: pathToRegExp(r) }));

// 2. Extract links from all .tsx files
const tsxFiles = [];
function findTsxFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findTsxFiles(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            tsxFiles.push(fullPath);
        }
    }
}
findTsxFiles(path.join(__dirname, 'src'));

let invalidLinks = [];
let totalLinks = 0;

for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf8');
    // Match Link to="..." or a href="..."
    // Note: this won't cover template literals deeply, but covers basic strings
    const linkRegex = /(?:<Link[^>]+to=|<a[^>]+href=)["'](\/[^"']*)["']/g;

    let linkMatch;
    while ((linkMatch = linkRegex.exec(content)) !== null) {
        const linkPath = linkMatch[1].split('?')[0].split('#')[0]; // Strip query/hash
        totalLinks++;

        let isValid = false;
        for (const tester of routeTesters) {
            if (tester.regex.test(linkPath)) {
                isValid = true;
                break;
            }
        }

        if (!isValid) {
            invalidLinks.push({ file: path.relative(__dirname, file), link: linkPath });
        }
    }
}

console.log(`Audited ${totalLinks} internal links across ${tsxFiles.length} pages.`);

if (invalidLinks.length > 0) {
    // Group by link to avoid spam
    const grouped = {};
    for (const err of invalidLinks) {
        if (!grouped[err.link]) grouped[err.link] = new Set();
        grouped[err.link].add(err.file);
    }

    console.log(`\nFound ${Object.keys(grouped).length} potentially broken links:`);
    for (const [link, files] of Object.entries(grouped)) {
        console.log(`Broken Link: ${link}`);
        console.log(`  Found in: ${Array.from(files).join(', ')}`);
    }
    process.exit(1);
} else {
    console.log("No broken internal links found!");
}
