import fs from 'fs';
import path from 'path';

export function getSitemapRoutes() {
    const sitemapDir = path.resolve(__dirname, 'public');
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
    return routes;
}
