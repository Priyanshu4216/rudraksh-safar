const fs = require('fs');

const registryText = fs.readFileSync('seo-data/page_registry.csv', 'utf8').split('\n');
const header = registryText[0];
const rows = [];
const existingUrls = new Set();

for (let i = 1; i < registryText.length; i++) {
    const line = registryText[i].trim();
    if (!line) continue;
    const m = line.match(/^"([^"]+)"/);
    if (m) {
        existingUrls.add(m[1]);
        rows.push(line);
    }
}

const newGuides = [
    {
        url: '/guides/manali-in-winter',
        type: 'Informational Guide',
        keyword: 'Manali in winter snowfall dates',
        notes: 'Supporting guide for Manali flagship ₹5,999'
    },
    {
        url: '/guides/atal-tunnel-solang-guide',
        type: 'Informational Guide',
        keyword: 'Atal Tunnel Solang Valley guide permits distance',
        notes: 'Supporting guide for Manali flagship ₹5,999'
    },
    {
        url: '/guides/manali-weather-by-month',
        type: 'Informational Guide',
        keyword: 'Manali weather by month temperature calendar',
        notes: 'Supporting guide for Manali flagship ₹5,999'
    },
    {
        url: '/guides/manali-snow-packing-list',
        type: 'Informational Guide',
        keyword: 'Manali snow trip packing list checklist',
        notes: 'Supporting guide for Manali flagship ₹5,999'
    }
];

let added = 0;
for (const g of newGuides) {
    if (!existingUrls.has(g.url)) {
        const row = [
            `"${g.url}"`,
            `"existing"`,
            `"${g.type}"`,
            `"Manali"`,
            `"All-India"`,
            `"${g.keyword}"`,
            `"Informational"`,
            `"${g.url}"`,
            `"1200"`,
            `"0"`,
            `"0"`,
            `"${g.notes}"`
        ].join(',');
        rows.push(row);
        existingUrls.add(g.url);
        added++;
    }
}

fs.writeFileSync('seo-data/page_registry.csv', [header, ...rows].join('\n'), 'utf8');
console.log(`Updated page_registry.csv: added ${added} guides, total rows: ${rows.length}`);
