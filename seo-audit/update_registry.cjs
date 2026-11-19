const fs = require('fs');

const registryText = fs.readFileSync('seo-data/page_registry.csv', 'utf8').split('\n');
const keywordMapText = fs.readFileSync('seo-data/KEYWORD_MAP.csv', 'utf8').split('\n');

const header = registryText[0];
const existingUrls = new Set();
const rows = [];

for (let i = 1; i < registryText.length; i++) {
    const line = registryText[i].trim();
    if (!line) continue;
    // Extract first CSV cell
    const m = line.match(/^"([^"]+)"/);
    if (m) {
        existingUrls.add(m[1]);
        rows.push(line);
    }
}

let addedCount = 0;
// Add planned URLs from KEYWORD_MAP that are not in registry
for (let i = 1; i < keywordMapText.length; i++) {
    const line = keywordMapText[i].trim();
    if (!line) continue;
    // Parse line cells
    const cells = line.split('","').map(c => c.replace(/^"|"$/g, ''));
    const url = cells[0];
    const status = cells[1];
    const type = cells[2];
    const primaryKeyword = cells[3];
    const intent = cells[5];
    const notes = `Keyword Map Parent: ${cells[10]}`;

    if (!existingUrls.has(url)) {
        // Build registry row: URL,status,page type,destination,origin,primary keyword,intent,owner,word count,traffic,backlinks,notes
        let dest = 'General';
        if (url.includes('canton') || url.includes('china')) dest = 'China (Canton Fair)';
        else if (url.includes('vietnam')) dest = 'Vietnam';
        else if (url.includes('singapore-malaysia')) dest = 'Singapore & Malaysia';
        else if (url.includes('almaty')) dest = 'Almaty';
        else if (url.includes('seychelles')) dest = 'Seychelles';
        else if (url.includes('japan')) dest = 'Japan';
        else if (url.includes('baku') || url.includes('azerbaijan')) dest = 'Azerbaijan';
        else if (url.includes('puri')) dest = 'Puri';
        else if (url.includes('rajasthan')) dest = 'Rajasthan';
        else if (url.includes('ayodhya') || url.includes('varanasi')) dest = 'Ayodhya-Varanasi';
        else if (url.includes('haridwar')) dest = 'Haridwar-Rishikesh';

        const row = [
            `"${url}"`,
            `"${status}"`,
            `"${type}"`,
            `"${dest}"`,
            `"All-India"`,
            `"${primaryKeyword}"`,
            `"${intent}"`,
            `"${url}"`,
            `"0"`,
            `"0"`,
            `"0"`,
            `"${notes}"`
        ].join(',');

        rows.push(row);
        existingUrls.add(url);
        addedCount++;
    }
}

fs.writeFileSync('seo-data/page_registry.csv', [header, ...rows].join('\n'), 'utf8');
console.log(`Updated seo-data/page_registry.csv: added ${addedCount} planned URLs, total rows: ${rows.length}`);
