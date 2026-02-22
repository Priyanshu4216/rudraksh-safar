import fs from 'fs';

const appTsx = fs.readFileSync('src/App.tsx', 'utf-8');
const routes = [...appTsx.matchAll(/path="([^"]+)"/g)].map(m => m[1]);

const sitemaps = ['public/sitemap-local.xml', 'public/sitemap-main.xml', 'public/sitemap-packages.xml'];
let missingUrls = [];

sitemaps.forEach(sitemapPath => {
    if (fs.existsSync(sitemapPath)) {
        const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
        const urls = [...sitemapContent.matchAll(/<loc>https:\/\/rudrakshsafar\.com([^<]+)<\/loc>/g)].map(m => m[1]);

        urls.forEach(url => {
            if (url !== '/' && url.endsWith('/')) {
                url = url.slice(0, -1);
            }

            let found = false;
            if (routes.includes(url)) {
                found = true;
            } else {
                for (const route of routes) {
                    if (route.includes(':')) {
                        const regexPath = route.replace(/:[^\/]+/g, '[^/]+').replace(/\//g, '\\/');
                        const regex = new RegExp(`^${regexPath}$`);
                        if (regex.test(url)) {
                            found = true;
                            break;
                        }
                    }
                }
            }

            if (!found) {
                missingUrls.push(url);
            }
        });
    }
});

fs.writeFileSync('missing-urls.txt', [...new Set(missingUrls)].filter(x => x).join('\n'));
console.log("Wrote " + missingUrls.length + " missing URLs to missing-urls.txt");
