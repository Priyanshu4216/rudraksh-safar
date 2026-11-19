import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

const sitemaps = [
    'sitemap-packages.xml',
    'sitemap-local.xml',
    'sitemap-main.xml',
    'sitemap-blog.xml',
    'sitemap-kumbh.xml'
];

const properUrlset = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

for (const s of sitemaps) {
    const filePath = path.join(publicDir, s);
    let xml = fs.readFileSync(filePath, 'utf8');

    // Replace opening <urlset...> tag
    xml = xml.replace(/<urlset[^>]*>/, properUrlset);

    fs.writeFileSync(filePath, xml, 'utf8');
    console.log(`✅ Declared xmlns:image and xmlns:xhtml namespaces in: ${s}`);
}
