const fs = require('fs');

const registryText = fs.readFileSync('seo-data/page_registry.csv', 'utf8').split('\n');
const header = registryText[0];
const rows = [];

for (let i = 1; i < registryText.length; i++) {
    const line = registryText[i].trim();
    if (!line) continue;
    if (line.startsWith('"/domestic-tours/haridwar-rishikesh"')) {
        // Change planned to existing
        const updated = line.replace('"planned"', '"existing"');
        rows.push(updated);
    } else {
        rows.push(line);
    }
}

fs.writeFileSync('seo-data/page_registry.csv', [header, ...rows].join('\n'), 'utf8');
console.log('Updated /domestic-tours/haridwar-rishikesh to existing in page_registry.csv');
