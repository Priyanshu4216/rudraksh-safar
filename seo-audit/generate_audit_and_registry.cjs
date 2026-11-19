const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve('travel-compass-hub-main');
const appTsxPath = path.join(projectRoot, 'src', 'App.tsx');
const publicDir = path.join(projectRoot, 'public');
const srcDir = path.join(projectRoot, 'src');

// 1. Read App.tsx
const appTsx = fs.readFileSync(appTsxPath, 'utf8');

// Parse imports
const imports = new Map();
const lazyRegex = /const\s+([A-Za-z0-9_]+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)\);?/g;
let m;
while ((m = lazyRegex.exec(appTsx)) !== null) {
    imports.set(m[1], m[2]);
}
const standardRegex = /import\s+(?:\{?\s*([A-Za-z0-9_,\s]+)\s*\}?|([A-Za-z0-9_]+))\s+from\s+['"]([^'"]+)['"];?/g;
while ((m = standardRegex.exec(appTsx)) !== null) {
    const importPath = m[3];
    if (m[2]) imports.set(m[2], importPath);
    if (m[1]) {
        m[1].split(',').forEach(name => {
            const trimmed = name.trim();
            if (trimmed) imports.set(trimmed, importPath);
        });
    }
}

// Parse Routes
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
        const compMatch = element.match(/<([A-Za-z0-9_]+)/);
        const compName = compMatch ? compMatch[1] : '';
        appRoutes.push({
            path: rPath,
            component: compName,
            isDynamic: rPath.includes(':')
        });
    }
}

// 2. Read Sitemaps
const sitemaps = [
    'sitemap-main.xml',
    'sitemap-packages.xml',
    'sitemap-local.xml',
    'sitemap-blog.xml',
    'sitemap-kumbh.xml'
];
const sitemapUrlMap = new Map();
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

// 3. Read Vercel & _redirects
let vercelText = fs.readFileSync(path.join(projectRoot, 'vercel.json'), 'utf8');
if (vercelText.charCodeAt(0) === 0xFEFF) vercelText = vercelText.slice(1);
const vercel = JSON.parse(vercelText);
const vercelRedirects = (vercel.redirects || []).filter(r => !r.has);

const rawRedirectsLines = fs.readFileSync(path.join(publicDir, '_redirects'), 'utf8').split('\n');
const fileRedirects = [];
rawRedirectsLines.forEach(l => {
    const parts = l.trim().split(/\s+/);
    if (parts.length >= 2 && !parts[0].startsWith('#')) {
        fileRedirects.push({ from: parts[0], to: parts[1], code: parts[2] || '301' });
    }
});

// 4. File resolver
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

// 5. Deep content analyzer
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
            encodingIssues: false,
            hasPrices: false,
            itineraryDays: 0,
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

    // Schemas
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
        let target = lMatch[1];
        if (target.endsWith('/') && target.length > 1) target = target.slice(0, -1);
        if (!internalLinks.includes(target)) {
            internalLinks.push(target);
        }
    }

    // Encoding issues detection (e.g. , ?, ,1)
    const encodingIssues = /|\?|,1/.test(content);

    // Itinerary days detection
    const dayMatches = content.match(/Day\s*\d+|day:\s*['"]Day\s*\d+/gi) || [];
    const itineraryDays = dayMatches.length;

    // Prices detection (₹ or starting from / per person)
    const hasPrices = /₹|starting\s*from|per\s*person|quad\s*sharing|twin\s*sharing/i.test(content);

    // Word count calculation
    let stripped = content
        .replace(/import.*?from.*?;/gs, '')
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\{[\s\S]*?\}/g, ' ')
        .replace(/[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+/g, ' ')
        .replace(/const|let|var|function|return|export|default|interface|type/g, '');
    const words = stripped.split(/\s+/).filter(w => w.length > 2 && !/^[0-9_]+$/.test(w));
    const wordCount = words.length;

    return {
        title,
        metaDesc,
        h1,
        wordCount,
        canonical,
        hasSchema: schemas.length > 0 || content.includes('RouteBasedSchema') || content.includes('GlobalSchema'),
        schemas,
        internalLinks,
        encodingIssues,
        hasPrices,
        itineraryDays,
        textSample: words.slice(0, 30).join(' ')
    };
}

// 6. Build Comprehensive Inventory
const registry = [];
const allKnownUrls = new Set();
const linkInDegree = new Map(); // targetUrl -> count

// Map active static routes
for (const r of appRoutes) {
    if (r.isDynamic) continue;
    allKnownUrls.add(r.path);
}
for (const smUrl of sitemapUrlMap.keys()) {
    allKnownUrls.add(smUrl);
}

// First pass: gather files and links
const processedPages = [];
for (const r of appRoutes) {
    const importRel = imports.get(r.component);
    const file = resolveComponentFile(importRel);
    const analysis = analyzeFile(file);
    processedPages.push({
        route: r,
        file,
        analysis
    });

    // Count inlinks
    for (const target of analysis.internalLinks) {
        linkInDegree.set(target, (linkInDegree.get(target) || 0) + 1);
    }
}

// Process entries
for (const p of processedPages) {
    const r = p.route;
    const a = p.analysis;
    const inSitemap = sitemapUrlMap.has(r.path);
    const sitemapFile = sitemapUrlMap.get(r.path) || 'None';

    let pageType = 'General';
    let dest = '';
    let origin = '';
    let intent = 'Commercial';
    const pathLower = r.path.toLowerCase();

    if (pathLower === '/') {
        pageType = 'Homepage';
        intent = 'Navigational / Brand';
    } else if (pathLower.startsWith('/kumbh-mela-2027') || pathLower.startsWith('/hi/kumbh-mela-2027')) {
        pageType = pathLower.includes('/packages') ? 'Event Package' : 'Event Guide';
        dest = 'Haridwar Kumbh';
        intent = pathLower.includes('/packages') ? 'Commercial' : 'Informational';
    } else if (pathLower.startsWith('/blog') || pathLower.startsWith('/authors')) {
        pageType = 'Blog Article';
        intent = 'Informational';
    } else if (pathLower.startsWith('/travel-services') || pathLower.startsWith('/visa-') || pathLower.startsWith('/visa/')) {
        pageType = 'Service / Visa';
        intent = 'Commercial / Informational';
    } else if (pathLower.startsWith('/guides') || pathLower.startsWith('/where-to-go') || pathLower.startsWith('/travel-') || pathLower.startsWith('/best-time') || pathLower.startsWith('/currency') || pathLower.startsWith('/faqs')) {
        pageType = 'Travel Guide / Informational';
        intent = 'Informational';
    } else if (pathLower.includes('-from-') || pathLower.startsWith('/tour-packages-from-') || pathLower.startsWith('/bilaspur/') || pathLower.startsWith('/raipur/') || pathLower.startsWith('/bhilai/') || pathLower.startsWith('/durg/')) {
        pageType = 'Origin City Package';
        intent = 'Commercial';
        if (pathLower.includes('from-bhilai') || pathLower.includes('/bhilai/')) origin = 'Bhilai';
        else if (pathLower.includes('from-raipur') || pathLower.includes('/raipur/')) origin = 'Raipur';
        else if (pathLower.includes('from-durg') || pathLower.includes('/durg/')) origin = 'Durg';
        else if (pathLower.includes('from-bilaspur') || pathLower.includes('/bilaspur/')) origin = 'Bilaspur';
        else if (pathLower.includes('from-delhi')) origin = 'Delhi';
        else if (pathLower.includes('from-chandigarh')) origin = 'Chandigarh';
        else origin = 'Chhattisgarh';
    } else if (pathLower.startsWith('/international-tours/') || pathLower.startsWith('/destinations/thailand') || pathLower.startsWith('/destinations/uae')) {
        pageType = 'International Hub / Attraction';
        intent = 'Commercial';
    } else if (pathLower.startsWith('/domestic-tours/') || pathLower.startsWith('/chardham') || pathLower.startsWith('/manali-kasol-strangers-trip')) {
        pageType = 'Domestic Package / Hub';
        intent = 'Commercial';
    } else if (['/about-rudraksh-safar', '/contact', '/privacy-policy', '/terms-and-conditions', '/cancellation-policy', '/refund-policy', '/sitemap', '/disclaimer', '/for-travellers'].includes(pathLower)) {
        pageType = 'Brand / Legal';
        intent = 'Navigational / Legal';
    }

    // Match destination
    const destKeywords = [
        'manali', 'kasol', 'kashmir', 'ladakh', 'kerala', 'goa', 'andaman', 'chardham', 'kedarnath', 'badrinath',
        'haridwar', 'rishikesh', 'puri', 'rajasthan', 'jaipur', 'thailand', 'pattaya', 'phuket', 'dubai', 'abu-dhabi',
        'bali', 'vietnam', 'singapore', 'malaysia', 'srilanka', 'sri-lanka', 'japan', 'almaty', 'macau', 'seychelles',
        'philippines', 'canton', 'china', 'shimla', 'darjeeling', 'uttarakhand', 'meghalaya', 'maldives', 'europe', 'nepal'
    ];
    for (const dk of destKeywords) {
        if (pathLower.includes(dk)) {
            dest = dk.charAt(0).toUpperCase() + dk.slice(1);
            break;
        }
    }

    // Primary keyword estimation from path
    let primaryKeyword = r.path.replace(/\//g, ' ').replace(/-/g, ' ').trim();
    if (r.path === '/') primaryKeyword = 'Rudraksh Safar travel agency Bhilai';

    const inlinks = linkInDegree.get(r.path) || 0;
    const isOrphan = inlinks === 0 && r.path !== '/';

    registry.push({
        url: r.path,
        status: 'existing',
        page_type: pageType,
        destination: dest || 'General',
        origin: origin || 'All-India',
        primary_keyword: primaryKeyword,
        intent: intent,
        owner: r.path,
        word_count: a.wordCount,
        traffic: '0',
        backlinks: '0',
        title: a.title,
        meta_desc: a.metaDesc,
        h1: a.h1,
        canonical: a.canonical || `https://rudrakshsafar.com${r.path}`,
        indexability: inSitemap ? 'Indexable' : (r.isDynamic ? 'Dynamic Template' : 'Unlisted in Sitemap'),
        schema: a.schemas.join('; ') || 'RouteBasedSchema fallback',
        inlinks: inlinks,
        outlinks: a.internalLinks.length,
        is_orphan: isOrphan ? 'YES' : 'NO',
        encoding_issues: a.encodingIssues ? 'YES' : 'NO',
        has_prices: a.hasPrices ? 'YES' : 'NO',
        itinerary_days: a.itineraryDays,
        notes: `Component: ${r.component}`
    });
}

// Add Redirect URLs into registry
for (const redir of appRedirects) {
    registry.push({
        url: redir.from,
        status: 'redirect',
        page_type: 'In-App Redirect',
        destination: 'Redirect Target',
        origin: 'N/A',
        primary_keyword: redir.from.replace(/\//g, ' ').replace(/-/g, ' ').trim(),
        intent: 'Redirect',
        owner: redir.to,
        word_count: 0,
        traffic: '0',
        backlinks: '0',
        title: '',
        meta_desc: '',
        h1: '',
        canonical: `https://rudrakshsafar.com${redir.to}`,
        indexability: 'Noindex / 301 Redirect',
        schema: 'None',
        inlinks: linkInDegree.get(redir.from) || 0,
        outlinks: 0,
        is_orphan: 'NO',
        encoding_issues: 'NO',
        has_prices: 'NO',
        itinerary_days: 0,
        notes: `301 Redirect to ${redir.to}`
    });
}

// Add Vercel redirects not already in appRedirects
for (const vRedir of vercelRedirects) {
    const exists = registry.some(e => e.url === vRedir.source);
    if (!exists) {
        registry.push({
            url: vRedir.source,
            status: 'redirect',
            page_type: 'Vercel 301 Redirect',
            destination: 'Redirect Target',
            origin: 'N/A',
            primary_keyword: vRedir.source.replace(/\//g, ' ').replace(/-/g, ' ').trim(),
            intent: 'Redirect',
            owner: vRedir.destination,
            word_count: 0,
            traffic: '0',
            backlinks: '0',
            title: '',
            meta_desc: '',
            h1: '',
            canonical: `https://rudrakshsafar.com${vRedir.destination}`,
            indexability: 'Noindex / 301 Redirect',
            schema: 'None',
            inlinks: linkInDegree.get(vRedir.source) || 0,
            outlinks: 0,
            is_orphan: 'NO',
            encoding_issues: 'NO',
            has_prices: 'NO',
            itinerary_days: 0,
            notes: `Vercel Host Redirect to ${vRedir.destination}`
        });
    }
}

// 7. Write page_registry.csv
function escapeCsv(val) {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
}

const csvHeader = [
    'URL',
    'status',
    'page type',
    'destination',
    'origin',
    'primary keyword',
    'intent',
    'owner',
    'word count',
    'traffic',
    'backlinks',
    'notes'
].join(',');

const csvRows = registry.map(r => [
    escapeCsv(r.url),
    escapeCsv(r.status),
    escapeCsv(r.page_type),
    escapeCsv(r.destination),
    escapeCsv(r.origin),
    escapeCsv(r.primary_keyword),
    escapeCsv(r.intent),
    escapeCsv(r.owner),
    escapeCsv(r.word_count),
    escapeCsv(r.traffic),
    escapeCsv(r.backlinks),
    escapeCsv(r.notes)
].join(','));

fs.writeFileSync('seo-data/page_registry.csv', [csvHeader, ...csvRows].join('\n'), 'utf8');
console.log(`Saved seo-data/page_registry.csv with ${registry.length} total rows.`);

// Save comprehensive json for the detailed report generator
fs.writeFileSync('seo-audit/audit_compiled.json', JSON.stringify({
    stats: {
        totalUrls: registry.length,
        existingPages: registry.filter(r => r.status === 'existing').length,
        redirects: registry.filter(r => r.status === 'redirect').length,
        sitemapUrls: sitemapUrlMap.size,
        orphans: registry.filter(r => r.is_orphan === 'YES').length,
        thinContentUnder500: registry.filter(r => r.status === 'existing' && r.word_count < 500).length,
        thinContentUnder300: registry.filter(r => r.status === 'existing' && r.word_count < 300).length,
        encodingIssues: registry.filter(r => r.encoding_issues === 'YES').length
    },
    registry: registry
}, null, 2));

console.log('Saved seo-audit/audit_compiled.json');
