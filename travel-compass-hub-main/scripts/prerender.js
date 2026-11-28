import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const sitemapDir = path.resolve(__dirname, '../public');
const sitemaps = ['sitemap-main.xml', 'sitemap-packages.xml', 'sitemap-local.xml', 'sitemap-blog.xml', 'sitemap-kumbh.xml', 'sitemap-hotels.xml'];

let routes = [];

for (const s of sitemaps) {
    if (!fs.existsSync(path.join(sitemapDir, s))) continue;
    const content = fs.readFileSync(path.join(sitemapDir, s), 'utf8');
    const regex = /<loc>https:\/\/rudrakshsafar.com(.*?)<\/loc>/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        let route = match[1];
        if (route === '') route = '/';
        if (!routes.includes(route)) routes.push(route);
    }
}

console.log(`Found ${routes.length} routes to prerender.`);

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const app = express();
app.use(express.static(distDir, { index: false }));
app.get(/(.*)/, (req, res) => res.type('html').send(templateHtml));

const server = app.listen(3000, async () => {
    console.log('Static server listening on port 3000');
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        
        const BATCH_SIZE = 10;
        for (let i = 0; i < routes.length; i += BATCH_SIZE) {
            const batch = routes.slice(i, i + BATCH_SIZE);
            console.log(`Prerendering batch ${Math.floor(i / BATCH_SIZE) + 1} of ${Math.ceil(routes.length / BATCH_SIZE)}...`);
            
            await Promise.all(batch.map(async (route) => {
                const page = await browser.newPage();
                try {
                    await page.setRequestInterception(true);
                    page.on('request', req => {
                        const type = req.resourceType();
                        if (['image', 'font', 'stylesheet', 'media'].includes(type)) {
                            req.abort();
                        } else {
                            req.continue();
                        }
                    });

                    const url = `http://localhost:3000${route}`;
                    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
                    await page.waitForSelector('h1', { timeout: 6000 }).catch(() => {});
                    if (route !== '/') {
                        await page.waitForFunction(
                            () => document.title && !document.title.startsWith('Rudraksh Safar — Travel Agency Serving Bhilai'),
                            { timeout: 2500 }
                        ).catch(() => {});
                    }
                    await new Promise(r => setTimeout(r, 400));
                    
                    let html = await page.content();
                    
                    let filePath = path.join(distDir, route);
                    if (route === '/') {
                        filePath = path.join(distDir, 'index.html');
                        fs.writeFileSync(filePath, html);
                    } else {
                        // 1. Directory index.html (supports /route/ trailing slash on static hosts)
                        if (!fs.existsSync(filePath)) {
                            fs.mkdirSync(filePath, { recursive: true });
                        }
                        fs.writeFileSync(path.join(filePath, 'index.html'), html);

                        // 2. Clean flat .html (supports /route non-trailing slash on Cloudflare Pages without 308 redirect)
                        fs.writeFileSync(`${filePath}.html`, html);
                    }
                } catch(e) {
                    console.error(`Failed to prerender ${route}:`, e);
                } finally {
                    await page.close();
                }
            }));
        }
        
        await browser.close();
        server.close();
        console.log('Prerendering complete!');
    } catch (e) {
        console.error('Error during prerendering:', e);
        server.close();
        process.exit(1);
    }
});
