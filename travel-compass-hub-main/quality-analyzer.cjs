const fs = require('fs');
const path = require('path');

const files = [
    'src/pages/BeachHolidayPackages.tsx',
    'src/pages/AdventurePackages.tsx',
    'src/pages/BudgetTourPackages.tsx'
];

console.log("=== PRIORITY 2: PAGE QUALITY ANALYSIS ===");

files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`[Missing] ${file}`);
        return;
    }
    const content = fs.readFileSync(file, 'utf8');

    // Word count approx (stripping TSX tags somewhat)
    const textOnly = content.replace(/<[^>]+>/g, ' ').replace(/{[^}]+}/g, ' ');
    const wordCount = textOnly.split(/\s+/).filter(w => w.length > 1).length;

    // Links count
    const linkCount = (content.match(/<Link /g) || []).length + (content.match(/<a /g) || []).length;

    // Image count
    const imgCount = (content.match(/<img /g) || []).length;

    // Headings
    const h1Count = (content.match(/<h1/gi) || []).length;
    const h2Count = (content.match(/<h2/gi) || []).length;

    // FAQ Schema check
    const hasFaqSchema = content.includes('FAQPage') || content.includes('FAQSection');

    console.log(`\nFile: ${path.basename(file)}`);
    console.log(`Word Count: ~${wordCount}`);
    console.log(`H1/H2 Structure: ${h1Count} H1, ${h2Count} H2`);
    console.log(`Internal Links: ${linkCount}`);
    console.log(`Images: ${imgCount}`);
    console.log(`FAQ Schema: ${hasFaqSchema ? 'Yes' : 'No'}`);
});
