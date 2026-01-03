🌍 Rudraksh Safar – Official Website

Rudraksh Safar is a modern, SEO-optimized travel agency website built for promoting domestic & international tour packages from Bhilai, Chhattisgarh (India).

This website is optimized for:

🔍 Google & Bing crawling

🤖 AI / Answer Engine Optimization (AEO)

⚡ Performance (Netlify + Vite)

📱 Mobile responsiveness

📈 Local SEO & Maps visibility

🔗 Live URLs

Primary Domain: https://rudrakshsafar.com

Netlify Preview: *.netlify.app (for testing only)

⚠️ Search engines should index ONLY the primary domain.

🛠️ Tech Stack

Frontend: HTML5 + React

Build Tool: Vite

Hosting: Netlify

SEO: Manual + Schema.org (JSON-LD)

Analytics: (Optional – Google Analytics / GSC)

📂 Project Structure (Important)
/
├── public/
│   ├── sitemap.xml        # SEO sitemap (DO NOT BREAK)
│   ├── robots.txt         # Crawl rules
│   ├── favicon.png
│   └── videos/            # Background videos
│
├── src/
│   ├── main.tsx           # Entry point (Vite)
│   ├── App.tsx
│   └── components/
│
├── index.html             # SEO head + schema (CRITICAL FILE)
├── README.md              # This file
└── netlify.toml           # Netlify config (if present)

🔍 SEO & Crawl Configuration (VERY IMPORTANT)
✅ Sitemap

Location:

/public/sitemap.xml


Must always be valid XML

Submitted to:

Google Search Console

Bing Webmaster Tools

❌ Do not add unescaped characters like &
✔ Use &amp; in URLs

✅ robots.txt

Location:

/public/robots.txt


Allows all crawlers

Declares sitemap URL

⚠️ Do not block /, /assets, /js, /css

✅ Canonical URLs

All pages must use:

https://rudrakshsafar.com/


(with trailing slash consistency)

🧠 Schema.org (AEO Ready)

The website includes:

TravelAgency

LocalBusiness

WebSite

FAQPage

BreadcrumbList

📌 These schemas help:

Google rich results

AI answers (ChatGPT, Bing Copilot)

Voice search

⚠️ Do NOT delete schema blocks from index.html.

🎥 Background Video (Autoplay Fix)

To ensure background video works on all browsers:

<video autoplay muted loop playsinline preload="auto">
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>


✔ muted + playsinline are mandatory
❌ Without them autoplay will fail

🚀 Deployment (Netlify)
Option 1: GitHub (Recommended)

Push code to GitHub

Netlify auto-deploys on push

Option 2: Drag & Drop

Build project

Drag dist/ folder into Netlify

🔄 After Every Deployment (CHECKLIST)

 Open /sitemap.xml in browser

 Open /robots.txt in browser

 Test background video

 Check console for errors

 Re-submit sitemap if changed

📍 Local SEO Setup (Must Have)

Google Business Profile (Bhilai)

Consistent NAP:

Name: Rudraksh Safar

Address: GE Road, Bhilai 3

Phone: +91-9229150311

City-specific content (Bhilai, Raipur, Durg)

⚠️ Things NOT to Do

❌ Do not remove meta tags
❌ Do not remove schema
❌ Do not edit sitemap without validation
❌ Do not index Netlify preview URLs
❌ Do not autoplay video without muted

📞 Contact

Rudraksh Safar
📍 Bhilai, Chhattisgarh, India
📞 +91-9229150311
🌐 https://rudrakshsafar.com

✅ Status

🟢 Crawlable
🟢 SEO-optimized
🟢 AI-friendly
🟢 Production-ready