const fs = require('fs');

const files = [
    'src/pages/destinations/index.tsx',
    'src/pages/destinations/thailand/attractions/bangkok/sky-walk.tsx',
    'src/pages/destinations/thailand/attractions/bangkok/grand-palace.tsx',
    'src/pages/destinations/thailand/attractions/bangkok/sea-life.tsx',
    'src/pages/destinations/thailand/attractions/bangkok/safari-world.tsx',
    'src/pages/destinations/thailand/attractions/bangkok/dream-world.tsx',
    'src/pages/destinations/thailand/attractions/koh-samui/safari-tour.tsx',
    'src/pages/destinations/thailand/attractions/koh-samui/koh-samui-city-tour.tsx',
    'src/pages/destinations/thailand/attractions/koh-samui/ang-thong-marine-park.tsx',
    'src/pages/destinations/thailand/attractions/koh-samui/jungle-safari.tsx'
];

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.log('Skipping ' + file);
        continue;
    }
    let content = fs.readFileSync(file, 'utf8');

    // Check if canonical already exists
    if (content.includes('rel="canonical"')) {
        console.log('Canonical exists: ' + file);
        continue;
    }

    // Determine the URL path
    let urlPath = file.replace('src/pages', '').replace('.tsx', '').replace(/\\/g, '/');
    if (urlPath.endsWith('/index')) {
        urlPath = urlPath.replace('/index', '');
    }
    if (urlPath === '') urlPath = '/';

    const canonicalHtml = `\n                <link rel="canonical" href="https://rudrakshsafar.com${urlPath}" />`;
    content = content.replace(/(<meta name="description"[^>]*>)/, '$1' + canonicalHtml);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Added canonical to ' + file);
}
