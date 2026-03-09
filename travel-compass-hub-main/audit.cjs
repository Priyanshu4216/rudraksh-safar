const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = [];

if (fs.existsSync(pagesDir)) {
    walkDir(pagesDir, (filePath) => {
        if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
            files.push(filePath);
        }
    });
} else {
    console.log("Pages directory not found!");
    process.exit(1);
}

let missingSeo = [];
let multipleH1 = [];
let missingH1 = [];
let localSignals = [];
let thinContent = [];
let totalH1Map = {};

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = file.replace(pagesDir, '');

    if (!content.includes('<title>') || !content.includes('name="description"')) {
        missingSeo.push(relativePath);
    }

    const h1Match = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
    if (!h1Match) {
        missingH1.push(relativePath);
    } else if (h1Match.length > 1) {
        multipleH1.push(relativePath);
        totalH1Map[relativePath] = h1Match.length;
    }

    const lowerContent = content.toLowerCase();
    const hasLocal = lowerContent.includes('bhilai') || lowerContent.includes('raipur') || lowerContent.includes('durg');
    if (hasLocal) {
        localSignals.push(relativePath);
    }

    if (content.length < 2500) { // arbitrary thin threshold for tsx files
        thinContent.push(relativePath);
    }
});

const report = {
    totalFilesParsed: files.length,
    missingSeo: missingSeo,
    missingH1: missingH1,
    multipleH1: multipleH1,
    multipleH1Counts: totalH1Map,
    localSignals: localSignals,
    thinContent: thinContent,
    noLocalSignals: files.map(f => f.replace(pagesDir, '')).filter(f => !localSignals.includes(f))
};

console.log('Total files parsed:', files.length);
console.log('Missing SEO tags:', missingSeo.length);
console.log('Missing H1:', missingH1.length);
console.log('Multiple H1:', multipleH1.length);
console.log('Pages with Local Signals:', localSignals.length);
console.log('Pages without Local Signals:', report.noLocalSignals.length);
console.log('Thin Content Pages:', thinContent.length);

fs.writeFileSync(path.join(__dirname, 'seo_summary.json'), JSON.stringify(report, null, 2));
console.log('Saved to seo_summary.json');
