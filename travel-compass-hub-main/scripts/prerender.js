import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const sitemapDir = path.resolve(__dirname, '../public');
const sitemaps = ['sitemap-main.xml', 'sitemap-packages.xml', 'sitemap-local.xml', 'sitemap-blog.xml'];

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

const app = express();
app.use(express.static(distDir));
app.get(/(.*)/, (req, res) => res.sendFile(path.join(distDir, 'index.html')));

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
                    
                    await new Promise(r => setTimeout(r, 1000));
                    
                    let html = await page.content();
                    
                    let filePath = path.join(distDir, route);
                    if (route === '/') {
                        filePath = path.join(distDir, 'index.html');
                    } else {
                        if (!fs.existsSync(filePath)) {
                            fs.mkdirSync(filePath, { recursive: true });
                        }
                        filePath = path.join(filePath, 'index.html');
                    }
                    
                    fs.writeFileSync(filePath, html);
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
