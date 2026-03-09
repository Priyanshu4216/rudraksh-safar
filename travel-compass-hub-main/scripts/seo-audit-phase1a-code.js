import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '..', 'src', 'pages');
const reportPath = path.join(__dirname, '..', 'SEO_AUDIT_CODE_REPORT.json');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.tsx')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const allFiles = getAllFiles(srcDir);
const report = [];

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');

    // Relative path for URL mapping
    const relativePath = path.relative(srcDir, file).replace(/\\/g, '/');
    let urlSlug = '/' + relativePath.replace(/\.tsx$/, '').replace(/\/index$/i, '');
    if (urlSlug.toLowerCase() === '/index' || urlSlug === '/') urlSlug = '/';

    // Stripping code to get rough word count estimation
    // Remove imports
    let textContent = content.replace(/import.*?from.*?;/gs, '');
    // Remove tags
    textContent = textContent.replace(/<[^>]+>/g, ' ');
    // Remove generic code structures
    textContent = textContent.replace(/const|let|var|function|return|export|default|interface|type/g, '');

    const words = textContent.split(/\s+/).filter(w => w.length > 2);
    const wordCount = words.length;

    // Headings
    const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
    const h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
    const h3Count = (content.match(/<h3[^>]*>/gi) || []).length;
    const h4Count = (content.match(/<h4[^>]*>/gi) || []).length;

    // Links
    const internalLinksCount = (content.match(/<Link\s+to=/g) || []).length + (content.match(/<a\s+href="\/[^"]*"/g) || []).length;

    // Sections & Structure
    const sectionCount = (content.match(/<section/gi) || []).length;

    // SEO / Schema / FAQs
    const hasFaq = /<FAQ|FAQ/i.test(content) || /accordion/i.test(content);
    const hasSchema = /application\/ld\+json/i.test(content) || /schema/i.test(content);
    const hasHelmet = /<Helmet>|<SEOHead/i.test(content);

    // Try to extract primary keyword from title or SEO component
    let primaryKeywordMatch = content.match(/title\s*=\s*{?["']([^"']+)["']/i);
    let primaryKeyword = primaryKeywordMatch ? primaryKeywordMatch[1] : '';

    // Extrapolate EEAT
    const eeatKeywords = ['author', 'expert', 'certified', 'guarantee', 'review', 'trust'];
    const eeatSignals = eeatKeywords.filter(kw => new RegExp(kw, 'i').test(content)).length;

    report.push({
        file: relativePath,
        urlSlug,
        wordCount,
        h1Count,
        h2Count,
        h3Count,
        h4Count,
        internalLinksCount,
        sectionCount,
        hasFaq,
        hasSchema,
        hasHelmet,
        primaryKeyword,
        eeatSignals
    });
});

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`Code layer audit complete. Processed ${report.length} pages.}`);
