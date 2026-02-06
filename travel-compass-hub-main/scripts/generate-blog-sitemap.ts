
// Script to generate sitemap-blog.xml
// RUN: ts-node scripts/generate-blog-sitemap.ts

import fs from 'fs';
import path from 'path';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../src/pages/blog/BlogData'; // Adjust path if running from root

const SITEMAP_PATH = path.join(__dirname, '../public/sitemap-blog.xml');
const BASE_URL = 'https://rudrakshsafar.com';

const generateSitemap = () => {
    console.log("🔍 Generating Blog Sitemap...");

    // 1. Categories (Always Indexable)
    const categoryUrls = BLOG_CATEGORIES.map(cat => `
  <url>
    <loc>${BASE_URL}/blog/${cat.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

    // 2. Posts (GUARDRAIL: Only isIndexable=true)
    const indexablePosts = BLOG_POSTS.filter(p => p.isIndexable);

    console.log(`📊 Found ${BLOG_POSTS.length} total posts.`);
    console.log(`✅ Included ${indexablePosts.length} indexable posts.`);
    console.log(`🚫 Excluded ${BLOG_POSTS.length - indexablePosts.length} thin/placeholder posts.`);

    const postUrls = indexablePosts.map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.category}/${post.slug}</loc>
    <lastmod>${post.modifiedDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Blog Hub -->
  <url>
    <loc>${BASE_URL}/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${categoryUrls}
${postUrls}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log(`🎉 Sitemap generated at: ${SITEMAP_PATH}`);
};

try {
    generateSitemap();
} catch (error) {
    console.error("❌ Error generating sitemap:", error);
}
