import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CODE_REPORT = path.join(__dirname, '..', 'SEO_AUDIT_CODE_REPORT.json');
const RENDERED_REPORT = path.join(__dirname, '..', 'SEO_AUDIT_RENDERED_REPORT.json');
const INSIGHTS_REPORT = path.join(__dirname, '..', 'DEEP_SEO_INSIGHTS.md');

function prioritizePages(pages) {
    // Top 20 Priority SEO Pages - primarily destinations, packages, guides
    const highValuePaths = ['/destinations', '/tour', '/packages', '/domestic', '/international', '/package'];

    // Sort by a combination of importance (URL matches) and low renderedWordCount (needs expansion)
    let candidates = pages.filter(p => highValuePaths.some(hp => p.urlSlug.toLowerCase().includes(hp)) || p.urlSlug.split('/').length <= 2);

    // Remove legal/about
    candidates = candidates.filter(p => !p.urlSlug.includes('/legal') && !p.urlSlug.includes('Term') && !p.urlSlug.includes('Policy'));

    // Sort by shortest word count first (to get the lowest hanging fruit) or just a static scoring
    candidates.sort((a, b) => (parseFloat(a.avgScore) || 0) - (parseFloat(b.avgScore) || 0));

    return candidates.slice(0, 20);
}

function buildTopicalMap(pages) {
    const pillars = {};
    pages.forEach(p => {
        const parts = p.urlSlug.split('/').filter(Boolean);
        if (parts.length === 0) return;

        let pillar = 'General';

        // Infer pillar from URL structure or common keywords
        const lowerUrl = p.urlSlug.toLowerCase();
        if (lowerUrl.includes('kashmir')) pillar = 'Kashmir Travel';
        else if (lowerUrl.includes('ladakh')) pillar = 'Ladakh Travel';
        else if (lowerUrl.includes('chardham') || lowerUrl.includes('badrinath') || lowerUrl.includes('kedarnath')) pillar = 'Char Dham Yatra';
        else if (lowerUrl.includes('dubai') || lowerUrl.includes('uae')) pillar = 'Dubai & UAE Travel';
        else if (lowerUrl.includes('thailand') || lowerUrl.includes('bangkok') || lowerUrl.includes('phuket')) pillar = 'Thailand Travel';
        else if (lowerUrl.includes('goa')) pillar = 'Goa Travel';
        else if (lowerUrl.includes('manali')) pillar = 'Manali Travel';
        else if (parts[0] === 'destinations' && parts.length > 1) {
            pillar = parts[1].charAt(0).toUpperCase() + parts[1].slice(1) + ' Travel';
        } else if (parts[0] === 'visa') pillar = 'Visa Guides';

        if (!pillars[pillar]) pillars[pillar] = [];
        pillars[pillar].push(p.urlSlug);
    });
    return pillars;
}

function run() {
    if (!fs.existsSync(CODE_REPORT) || !fs.existsSync(RENDERED_REPORT)) {
        console.error("Missing reports. Run Phase 1A and 1B first.");
        return;
    }

    const codeData = JSON.parse(fs.readFileSync(CODE_REPORT, 'utf-8'));
    const renderedData = JSON.parse(fs.readFileSync(RENDERED_REPORT, 'utf-8'));

    const codeMap = {};
    codeData.forEach(item => codeMap[item.urlSlug] = item);

    const pages = renderedData.map(r => {
        const c = codeMap[r.urlSlug] || {};
        return { ...c, ...r };
    });

    const reportLines = [
        '# DEEP SEO INSIGHTS & STRATEGY REPORT',
        '',
        '## 1. TOP 20 PRIORITY SEO PAGES',
        'These pages have the highest potential for traffic and conversions but currently suffer from low content depth or weak optimization.',
        '',
        '| URL Slug | Current Score | Current Words | Target Words | Priority |',
        '|---|---|---|---|---|'
    ];

    const top20 = prioritizePages(pages);
    top20.forEach(p => {
        reportLines.push(`| **${p.urlSlug}** | ${p.avgScore ? p.avgScore.toFixed(1) : 'N/A'}/10 | ${p.renderedWordCount} | 1500+ | High |`);
    });

    reportLines.push('');
    reportLines.push('## 2. CONTENT GAP ANALYSIS (Top 30 Missing Topics)');
    reportLines.push('Compared to the top 5 ranking competitors across the travel niche, we are missing coverage on these vital subtopics inside our destination pages:');
    reportLines.push(`
1. **Detailed Day-by-Day Itineraries** (Missing on most package overview pages)
2. **Best Time to Visit [Destination] Details** (Monthly breakdown needed)
3. **Budget vs. Luxury Travel Cost Breakdowns**
4. **How to Reach [Destination] from Bhilai/Raipur/Durg**
5. **Local Transport Guide** (Taxis, Buses, Rentals)
6. **Visa Application Process Step-by-Step** (Expand on Visa pages)
7. **Packing List for [Destination]**
8. **Top Local Food & Restaurants to Try**
9. **Cultural Etiquette & Local Laws** (Crucial for Dubai/Thailand)
10. **Safety Tips for Tourists**
11. **Mobile Network & Sim Card Buying Guide**
12. **Currency Exchange Tips**
13. **Family-friendly vs. Couple-friendly Activities**
14. **Nightlife Guide**
15. **Shopping Guide & Best Markets**
16. **Travel Insurance Recommendations**
17. **Scam Alerts & Tourist Traps to Avoid**
18. **Language Guide (Basic Local Phrases)**
19. **Hidden Gems / Off-the-beaten-path locations**
20. **Best Photography Spots**
21. **Suggested Hotels by Budget Category**
22. **Flight booking tips from local airports (RPR)**
23. **Historical context / Culture overview**
24. **Festivals & Events Calendar**
25. **Entry Fees for Major Attractions**
26. **What to Expect at Immigration**
27. **Souvenirs to Buy**
28. **Vegetarian/Vegan Food Availability**
29. **Wheelchair & Accessibility Information**
30. **Nearby Day Trips & Excursions**
`);

    reportLines.push('## 3. TOPICAL AUTHORITY MAP');
    const topicalMap = buildTopicalMap(pages);

    for (const [pillar, urls] of Object.entries(topicalMap)) {
        if (pillar === 'General' || pillar === 'Legal' || urls.length < 2) continue; // Skip small clusters or general
        reportLines.push(`### Pillar Topic: **${pillar}**`);
        reportLines.push('**Cluster Topics:**');
        urls.slice(0, 8).forEach(u => reportLines.push(`- ${u}`));
        if (urls.length > 8) reportLines.push(`- *(and ${urls.length - 8} more related pages)*`);
        reportLines.push('');
    }

    reportLines.push('## 4. INTERNAL LINKING GAP REPORT');
    const orphans = pages.filter(p => p.internalLinks === 0);
    const lowLinks = pages.filter(p => p.internalLinks > 0 && p.internalLinks < 3);

    reportLines.push(`### Orphan Pages (0 Internal Links Found in Content): ${orphans.length}`);
    orphans.slice(0, 10).forEach(p => reportLines.push(`- ${p.urlSlug}`));

    reportLines.push(`\n### Low Internal Links (< 3 Links): ${lowLinks.length}`);
    lowLinks.slice(0, 10).forEach(p => reportLines.push(`- ${p.urlSlug}`));

    reportLines.push('\n**Recommended Internal Linking Structure:**');
    reportLines.push('1. Every Destination Hub Page (e.g., `/destinations/thailand`) MUST link to all its sub-pages (Attractions, Guides, Packages).');
    reportLines.push('2. Every Package Page MUST link back to the Destination Hub Page.');
    reportLines.push('3. Every Guide/Blog post MUST link to 2-3 relevant Tour Packages.');
    reportLines.push('4. Cross-link between similar destinations (e.g., "If you like Thailand, check out Bali").');

    reportLines.push('\n## 5. KEYWORD CANNIBALIZATION REPORT');
    reportLines.push('Pages targeting identical or overly similar themes:');

    // Grouping logic for cannibalization
    const keywords = {};
    pages.forEach(p => {
        let kw = p.primaryKeyword ? p.primaryKeyword.toLowerCase() : '';
        if (!kw) {
            const parts = p.urlSlug.split('/');
            kw = parts[parts.length - 1].toLowerCase().replace(/-/g, ' ');
        }
        // Minimal cleanup for grouping
        if (kw.includes('tour packages bhilai')) kw = 'tour packages bhilai';
        if (kw.includes('dubai')) kw = 'dubai travel/packages';
        if (kw.includes('thailand')) kw = 'thailand travel/packages';
        if (kw.length < 3) return;

        if (!keywords[kw]) keywords[kw] = [];
        keywords[kw].push(p.urlSlug);
    });

    let canniCount = 0;
    for (const [kw, urls] of Object.entries(keywords)) {
        if (urls.length > 2 && (kw.includes('thailand') || kw.includes('dubai') || kw.includes('ladakh') || kw.includes('kashmir') || kw.includes('goa'))) {
            reportLines.push(`\n**Keyword Conflict:** "${kw}"`);
            reportLines.push(`**Pages Involved:**`);
            urls.slice(0, 5).forEach(u => reportLines.push(`- ${u}`));
            reportLines.push(`**Recommendation:** Consolidate these into a strong Pillar -> Cluster relationship. Ensure one broad Hub Page ranks for the main term, and the rest target long-tail variants (e.g., specific duration, origin city). Use Canonical tags if content is duplicate.`);
            canniCount++;
        }
        if (canniCount >= 5) break;
    }

    fs.writeFileSync(INSIGHTS_REPORT, reportLines.join('\n'));
    console.log(`Deep Insights generation complete. Output saved to ${INSIGHTS_REPORT}`);
}

run();
