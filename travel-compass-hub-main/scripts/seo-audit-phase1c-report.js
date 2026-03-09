import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CODE_REPORT = path.join(__dirname, '..', 'SEO_AUDIT_CODE_REPORT.json');
const RENDERED_REPORT = path.join(__dirname, '..', 'SEO_AUDIT_RENDERED_REPORT.json');
const FINAL_REPORT = path.join(__dirname, '..', 'FULL_AUDIT_REPORT.md');

function run() {
    if (!fs.existsSync(CODE_REPORT) || !fs.existsSync(RENDERED_REPORT)) {
        console.error("Missing reports. Run Phase 1A and 1B first.");
        return;
    }

    const codeData = JSON.parse(fs.readFileSync(CODE_REPORT, 'utf-8'));
    const renderedData = JSON.parse(fs.readFileSync(RENDERED_REPORT, 'utf-8'));

    const merged = [];

    // Map by URL slug
    const codeMap = {};
    codeData.forEach(item => codeMap[item.urlSlug] = item);

    renderedData.forEach(r => {
        const c = codeMap[r.urlSlug] || {};
        merged.push({ ...c, ...r });
    });

    const reportLines = [
        '# FULL WEBSITE SEO AUDIT REPORT',
        '## Phase 1 Findings',
        ''
    ];

    let strong = [];
    let medium = [];
    let weak = [];
    let critical = [];

    let thinContent = [];
    let missingH1 = [];
    let missingSchema = [];
    let zeroInternalLinks = [];
    let missingFaqs = [];

    merged.forEach(page => {
        // Calculate Scores (0-10)
        let depthScore = Math.min(10, Math.floor((page.renderedWordCount || 0) / 150));
        let eeatScore = Math.min(10, (page.eeatSignals || 0) * 2);

        let techPenalty = Math.floor((page.loadTimeMs || 0) / 1000) + (page.imgMissingAlt || 0);
        let techScore = Math.max(0, 10 - techPenalty);

        let keywordScore = 5;
        if (page.h1Count === 1) keywordScore += 2;
        if (page.titleLength > 30 && page.titleLength < 65) keywordScore += 2;
        if (page.metaDescLength > 100 && page.metaDescLength < 160) keywordScore += 1;

        let linkScore = Math.min(10, (page.internalLinks || 0) * 2);

        let avgScore = (depthScore + eeatScore + techScore + keywordScore + linkScore) / 5;

        // Classification
        const pageEntry = { ...page, avgScore, depthScore, eeatScore, techScore, keywordScore, linkScore };

        if (avgScore >= 8) strong.push(pageEntry);
        else if (avgScore >= 5) medium.push(pageEntry);
        else if (avgScore >= 3) weak.push(pageEntry);
        else critical.push(pageEntry);

        // Track specific issues
        if ((page.renderedWordCount || 0) < 800) thinContent.push(pageEntry);
        if (page.h1Count === 0) missingH1.push(pageEntry);
        if (!page.hasSchema && !page.structuredData) missingSchema.push(pageEntry);
        if (page.internalLinks === 0) zeroInternalLinks.push(pageEntry);
        if (!page.hasFaq) missingFaqs.push(pageEntry);
    });

    reportLines.push(`## Audit Summary`);
    reportLines.push(`- **Total Pages Scanned:** ${merged.length}`);
    reportLines.push(`- **Strong Pages:** ${strong.length}`);
    reportLines.push(`- **Medium Pages:** ${medium.length}`);
    reportLines.push(`- **Weak Pages:** ${weak.length}`);
    reportLines.push(`- **Critical Pages:** ${critical.length}`);
    reportLines.push('');

    reportLines.push('## Critical Pages Needing Immediate Attention');
    critical.slice(0, 50).forEach(p => {
        reportLines.push(`- **${p.urlSlug}** (Avg Score: ${p.avgScore.toFixed(1)})`);
        reportLines.push(`  - Words: ${p.renderedWordCount}, Links: ${p.internalLinks}`);
    });
    if (critical.length > 50) reportLines.push(`- *...and ${critical.length - 50} more.*`);

    reportLines.push('\n## Pages with Thin Content (<800 words)');
    thinContent.slice(0, 20).forEach(p => reportLines.push(`- ${p.urlSlug} (${p.renderedWordCount} words)`));

    reportLines.push('\n## Pages Missing H1 Tags');
    missingH1.slice(0, 20).forEach(p => reportLines.push(`- ${p.urlSlug}`));

    reportLines.push('\n## Pages Missing Structured Data/Schema');
    missingSchema.slice(0, 20).forEach(p => reportLines.push(`- ${p.urlSlug}`));

    reportLines.push('\n## Content Gap Summary (Competitor Simulation)');
    reportLines.push('Based on top 5 competitor averages, aiming for 1200+ words and 5+ FAQs:');
    weak.slice(0, 10).forEach(p => {
        let wordGap = 1200 - (p.renderedWordCount || 0);
        reportLines.push(`- **${p.urlSlug}**: Needs ~${wordGap > 0 ? wordGap : 0} more words, add ${!p.hasFaq ? 'FAQ section' : ''}.`);
    });

    reportLines.push('\n## Next Steps: Phase 2 - Weak Page Detection');
    reportLines.push('The complete dataset is stored in JSON. We will now move to expanding the weak pages and implementing FAQs/Schema incrementally.');

    fs.writeFileSync(FINAL_REPORT, reportLines.join('\n'));
    console.log(`Phase 1C complete. Output saved to ${FINAL_REPORT}`);
}

run();
