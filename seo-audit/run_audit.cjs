const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve('travel-compass-hub-main');
const appTsxPath = path.join(projectRoot, 'src', 'App.tsx');
const publicDir = path.join(projectRoot, 'public');
const srcDir = path.join(projectRoot, 'src');

const appTsx = fs.readFileSync(appTsxPath, 'utf8');

// 1. Gather all imports from App.tsx
const imports = new Map(); // componentName -> relative file path
const lazyRegex = /const\s+([A-Za-z0-9_]+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)\);?/g;
let m;
while ((m = lazyRegex.exec(appTsx)) !== null) {
    imports.set(m[1], m[2]);
}

const standardRegex = /import\s+(?:\{?\s*([A-Za-z0-9_,\s]+)\s*\}?|([A-Za-z0-9_]+))\s+from\s+['"]([^'"]+)['"];?/g;
while ((m = standardRegex.exec(appTsx)) !== null) {
    const importPath = m[3];
    if (m[2]) {
        imports.set(m[2], importPath);
    }
    if (m[1]) {
        m[1].split(',').forEach(name => {
            const trimmed = name.trim();
            if (trimmed) imports.set(trimmed, importPath);
        });
    }
}

console.log(`Found ${imports.size} component imports in App.tsx`);

// 2. Extract routes from App.tsx
const routeRegex = /<Route\s+path=["']([^"']+)["']\s+element=\{([\s\S]*?)\}/g;
const appRoutes = [];
const appRedirects = [];

while ((m = routeRegex.exec(appTsx)) !== null) {
    const rPath = m[1].trim();
    const element = m[2].trim();
    if (rPath === '*') continue;

    if (element.includes('Navigate')) {
        const toMatch = element.match(/to=["']([^"']+)["']/);
        appRedirects.push({
            from: rPath,
            to: toMatch ? toMatch[1] : ''
        });
    } else {
        // Find component name in element e.g. <HomeRedesign /> or <KumbhMela2027Pillar lang="en" />
        const compMatch = element.match(/<([A-Za-z0-9_]+)/);
        const compName = compMatch ? compMatch[1] : '';
        appRoutes.push({
            path: rPath,
            component: compName,
            isDynamic: rPath.includes(':')
        });
    }
}

console.log(`Parsed ${appRoutes.length} active routes and ${appRedirects.length} in-app redirects from App.tsx`);

// 3. Extract all URLs from sitemaps
const sitemaps = [
    'sitemap-main.xml',
    'sitemap-packages.xml',
    'sitemap-local.xml',
    'sitemap-blog.xml',
    'sitemap-kumbh.xml'
];

const sitemapUrlMap = new Map(); // url -> { sitemap, loc }
sitemaps.forEach(s => {
    const p = path.join(publicDir, s);
    if (!fs.existsSync(p)) return;
    const content = fs.readFileSync(p, 'utf8');
    const locRegex = /<loc>https:\/\/rudrakshsafar\.com(.*?)<\/loc>/g;
    let lm;
    while ((lm = locRegex.exec(content)) !== null) {
        let u = lm[1].trim();
        if (!u.startsWith('/')) u = '/' + u;
        if (u.length > 1 && u.endsWith('/')) u = u.slice(0, -1);
        if (u === '') u = '/';
        sitemapUrlMap.set(u, s);
    }
});

console.log(`Total URLs in XML sitemaps: ${sitemapUrlMap.size}`);

// 4. Resolve component file path
function resolveComponentFile(importRelPath) {
    if (!importRelPath) return null;
    let base = importRelPath;
    if (base.startsWith('@/')) {
        base = path.join(srcDir, base.slice(2));
    } else if (base.startsWith('./') || base.startsWith('../')) {
        base = path.resolve(path.join(srcDir, 'App.tsx', '..'), base);
    }
    const extensions = ['.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts'];
    if (fs.existsSync(base) && fs.statSync(base).isFile()) return base;
    for (const ext of extensions) {
        if (fs.existsSync(base + ext)) return base + ext;
    }
    return null;
}

// 5. Gather metrics for each component file
function analyzeFile(filePath) {
    if (!filePath || !fs.existsSync(filePath)) {
        return {
            title: '',
            metaDesc: '',
            h1: '',
            wordCount: 0,
            canonical: '',
            hasSchema: false,
            schemas: [],
            internalLinks: [],
            textSample: ''
        };
    }
    const content = fs.readFileSync(filePath, 'utf8');

    // Title
    let title = '';
    const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i) || content.match(/title:\s*["'`]([\s\S]*?)["'`]/);
    if (titleMatch) title = titleMatch[1].replace(/[\{\}`$]/g, '').trim();

    // Meta Description
    let metaDesc = '';
    const metaMatch = content.match(/<meta\s+name=["']description["']\s+content=["'`]([\s\S]*?)["'`]/i) ||
                      content.match(/description:\s*["'`]([\s\S]*?)["'`]/);
    if (metaMatch) metaDesc = metaMatch[1].replace(/[\{\}`$]/g, '').trim();

    // H1
    let h1 = '';
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) h1 = h1Match[1].replace(/<[^>]+>/g, '').trim();

    // Canonical
    let canonical = '';
    const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    if (canonMatch) canonical = canonMatch[1].trim();

    // Schema
    const hasSchema = content.includes('application/ld+json') || content.includes('Schema');
    const schemas = [];
    if (content.includes('TravelAgency')) schemas.push('TravelAgency');
    if (content.includes('TouristTrip')) schemas.push('TouristTrip');
    if (content.includes('Product')) schemas.push('Product');
    if (content.includes('FAQPage')) schemas.push('FAQPage');
    if (content.includes('Event')) schemas.push('Event');
    if (content.includes('BreadcrumbList')) schemas.push('BreadcrumbList');

    // Internal links
    const internalLinks = [];
    const linkRegex = /(?:<Link\s+to=["']|<a\s+href=["'])(\/[^"'#\s]*)/g;
    let lMatch;
    while ((lMatch = linkRegex.exec(content)) !== null) {
        if (!internalLinks.includes(lMatch[1])) {
            internalLinks.push(lMatch[1]);
        }
    }

    // Word count calculation
    let stripped = content
        .replace(/import.*?from.*?;/gs, '')
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\{[\s\S]*?\}/g, ' ')
        .replace(/[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+/g, ' ') // css classes / tailwind
        .replace(/const|let|var|function|return|export|default|interface|type/g, '');
    const words = stripped.split(/\s+/).filter(w => w.length > 2 && !/^[0-9_]+$/.test(w));
    const wordCount = words.length;

    return {
        title,
        metaDesc,
        h1,
        wordCount,
        canonical,
        hasSchema,
        schemas,
        internalLinks,
        textSample: words.slice(0, 30).join(' ')
    };
}

// Build URL inventory
const inventory = [];
for (const r of appRoutes) {
    const importRel = imports.get(r.component);
    const file = resolveComponentFile(importRel);
    const analysis = analyzeFile(file);
    const inSitemap = sitemapUrlMap.has(r.path);
    const sitemapFile = sitemapUrlMap.get(r.path) || '';

    // Determine type, destination, origin
    let pType = 'General';
    let dest = '';
    let origin = '';

    const p = r.path.toLowerCase();
    if (p === '/') {
        pType = 'Homepage';
    } else if (p.startsWith('/kumbh-mela-2027') || p.startsWith('/hi/kumbh-mela-2027')) {
        pType = 'Event Hub / Guide';
        dest = 'Haridwar';
    } else if (p.startsWith('/blog') || p.startsWith('/authors')) {
        pType = 'Blog / Article';
    } else if (p.startsWith('/travel-services') || p.startsWith('/visa-') || p.startsWith('/visa/')) {
        pType = 'Service / Visa';
    } else if (p.startsWith('/guides') || p.startsWith('/where-to-go') || p.startsWith('/travel-')) {
        pType = 'Travel Guide';
    } else if (p.includes('-from-') || p.startsWith('/tour-packages-from-') || p.startsWith('/bilaspur/') || p.startsWith('/raipur/') || p.startsWith('/bhilai/') || p.startsWith('/durg/')) {
        pType = 'Origin City Package';
        // Extract origin
        if (p.includes('from-bhilai') || p.includes('/bhilai/')) origin = 'Bhilai';
        else if (p.includes('from-raipur') || p.includes('/raipur/')) origin = 'Raipur';
        else if (p.includes('from-durg') || p.includes('/durg/')) origin = 'Durg';
        else if (p.includes('from-bilaspur') || p.includes('/bilaspur/')) origin = 'Bilaspur';
        else if (p.includes('from-delhi')) origin = 'Delhi';
        else if (p.includes('from-chandigarh')) origin = 'Chandigarh';
        else origin = 'Chhattisgarh';
    } else if (p.startsWith('/international-tours/') || p.startsWith('/destinations/thailand') || p.startsWith('/destinations/uae')) {
        pType = 'Destination Hub / Attraction';
    } else if (p.startsWith('/domestic-tours/') || p.startsWith('/chardham') || p.startsWith('/manali-kasol-strangers-trip')) {
        pType = 'Destination Hub / Tour Package';
    }

    // Match destination
    const destKeywords = [
        'manali', 'kashmir', 'ladakh', 'kerala', 'goa', 'andaman', 'chardham', 'kedarnath', 'badrinath',
        'haridwar', 'rishikesh', 'puri', 'rajasthan', 'jaipur', 'thailand', 'dubai', 'bali', 'vietnam',
        'singapore', 'malaysia', 'sri-lanka', 'srilanka', 'japan', 'almaty', 'macau', 'seychelles',
        'philippines', 'canton', 'china', 'shimla'
    ];
    for (const dk of destKeywords) {
        if (p.includes(dk)) {
            dest = dk.charAt(0).toUpperCase() + dk.slice(1);
            break;
        }
    }

    inventory.push({
        url: r.path,
        component: r.component,
        filePath: file ? path.relative(projectRoot, file).replace(/\\/g, '/') : 'DYNAMIC/UNRESOLVED',
        isDynamic: r.isDynamic,
        inSitemap,
        sitemapFile,
        title: analysis.title,
        metaDesc: analysis.metaDesc,
        h1: analysis.h1,
        wordCount: analysis.wordCount,
        canonical: analysis.canonical,
        schemas: analysis.schemas.join('; '),
        internalLinksCount: analysis.internalLinks.length,
        pageType: pType,
        destination: dest,
        origin: origin
    });
}

// Add URLs from sitemaps that might not be static routes in App.tsx (e.g. expanded dynamic routes)
for (const [smUrl, smFile] of sitemapUrlMap.entries()) {
    const exists = inventory.some(i => i.url === smUrl);
    if (!exists) {
        inventory.push({
            url: smUrl,
            component: 'EXPANDED_DYNAMIC_OR_STATIC',
            filePath: 'GENERATED_ROUTE',
            isDynamic: false,
            inSitemap: true,
            sitemapFile: smFile,
            title: '',
            metaDesc: '',
            h1: '',
            wordCount: 0,
            canonical: `https://rudrakshsafar.com${smUrl}`,
            schemas: '',
            internalLinksCount: 0,
            pageType: 'Dynamic / Sitemap Route',
            destination: '',
            origin: ''
        });
    }
}

fs.writeFileSync('seo-audit/inventory_raw.json', JSON.stringify({
    totalInventory: inventory.length,
    activeRoutes: appRoutes.length,
    redirects: appRedirects.length,
    sitemapUrls: sitemapUrlMap.size,
    inventory: inventory,
    redirectList: appRedirects
}, null, 2));

console.log(`Successfully generated inventory_raw.json with ${inventory.length} total entries.`);
