import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CODE_REPORT = path.join(__dirname, '..', 'SEO_AUDIT_CODE_REPORT.json');
const RENDERED_REPORT = path.join(__dirname, '..', 'SEO_AUDIT_RENDERED_REPORT.json');

const BASE_URL = 'http://localhost:8080';

async function run() {
    if (!fs.existsSync(CODE_REPORT)) {
        console.error("Code report not found. Run Phase 1A first.");
        return;
    }

    const pagesData = JSON.parse(fs.readFileSync(CODE_REPORT, 'utf-8'));
    // Deduplicate URLs to avoid re-crawling index/duplicate slugs
    const urls = [...new Set(pagesData.map(p => p.urlSlug))];

    console.log(`Phase 1B: Crawling ${urls.length} distinct URLs...`);

    const browser = await puppeteer.launch({ headless: 'new' });
    const report = [];

    // Let's do batches of 5 to speed things up safely
    const BATCH_SIZE = 5;
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
        const batch = urls.slice(i, i + BATCH_SIZE);
        const promises = batch.map(async (urlSlug) => {
            const page = await browser.newPage();
            try {
                // Set to wait until network is idle to capture rendered content
                await page.goto(`${BASE_URL}${urlSlug}`, { waitUntil: 'networkidle2', timeout: 30000 });

                const metrics = await page.evaluate(() => {
                    const title = document.title || '';
                    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
                    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';

                    const h1Count = document.querySelectorAll('h1').length;
                    const h2Count = document.querySelectorAll('h2').length;

                    const images = Array.from(document.querySelectorAll('img'));
                    const imgCount = images.length;
                    const imgMissingAlt = images.filter(img => !img.hasAttribute('alt') || img.getAttribute('alt').trim() === '').length;

                    const links = Array.from(document.querySelectorAll('a'));
                    let internalLinks = 0;
                    let externalLinks = 0;
                    links.forEach(a => {
                        const href = a.getAttribute('href');
                        if (!href) return;
                        if (href.startsWith('http') && !href.includes(window.location.hostname)) {
                            externalLinks++;
                        } else {
                            internalLinks++;
                        }
                    });

                    const structuredData = document.querySelectorAll('script[type="application/ld+json"]').length > 0;

                    // Body word count
                    const bodyText = document.body.innerText || '';
                    const words = bodyText.split(/\s+/).filter(w => w.length > 2);
                    const renderedWordCount = words.length;

                    // Performance metrics
                    const timing = window.performance.timing;
                    const loadTime = timing.loadEventEnd - timing.navigationStart;

                    return {
                        titleLength: title.length,
                        metaDescLength: metaDesc.length,
                        canonical,
                        h1Count,
                        h2Count,
                        imgCount,
                        imgMissingAlt,
                        internalLinks,
                        externalLinks,
                        structuredData,
                        renderedWordCount,
                        loadTimeMs: loadTime > 0 ? loadTime : 0
                    };
                });

                report.push({
                    urlSlug,
                    ...metrics
                });
                console.log(`[OK] crawled ${urlSlug}`);
            } catch (err) {
                console.error(`[ERR] Failed to crawl ${urlSlug}:`, err.message);
            } finally {
                await page.close();
            }
        });

        await Promise.all(promises);
    }

    await browser.close();

    fs.writeFileSync(RENDERED_REPORT, JSON.stringify(report, null, 2));
    console.log(`Phase 1B complete. Output saved to ${RENDERED_REPORT}`);
}

run().catch(console.error);
