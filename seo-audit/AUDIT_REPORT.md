const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('seo-audit/audit_compiled.json', 'utf8'));
const similarity = JSON.parse(fs.readFileSync('seo-audit/similarity_audit.json', 'utf8'));
const registry = data.registry;
const stats = data.stats;

const b1 = similarity.b1Audit;
const b2 = similarity.b2Audit;
const b3 = similarity.b3Audit;
const unlisted = similarity.unlistedDestinationsOnSite;

const thinPagesList = registry
    .filter(r => r.status === 'existing' && r.word_count < 300)
    .slice(0, 35)
    .map(r => `| \`${r.url}\` | ${r.page_type} | ${r.word_count} words | ${r.inlinks} inlinks |`)
    .join('\n');

const orphanPagesList = registry
    .filter(r => r.status === 'existing' && r.is_orphan === 'YES')
    .slice(0, 35)
    .map(r => `| \`${r.url}\` | ${r.page_type} | ${r.destination} | ${r.word_count} words |`)
    .join('\n');

const b1Table = b1.map(d => {
    const urls = d.matchedUrls.length > 0 ? d.matchedUrls.slice(0, 2).map(u => `\`${u}\``).join('<br>') : 'None';
    return `| **${d.name}** | ${d.type.toUpperCase()} | ${d.status} | **${d.action}** | ${d.existingActiveCount} | ${urls} |`;
}).join('\n');

const b2Table = b2.map(d => {
    const urls = d.matchedUrls.length > 0 ? d.matchedUrls.slice(0, 2).map(u => `\`${u}\``).join('<br>') : 'None';
    return `| **${d.name}** | Priority Sprint | ${d.status} | **${d.action}** | ${d.existingActiveCount} | ${urls} |`;
}).join('\n');

const b3Table = b3.map(d => {
    const urls = d.matchedUrls.length > 0 ? d.matchedUrls.slice(0, 2).map(u => `\`${u}\``).join('<br>') : 'None';
    return `| **${d.name}** | ${d.type.toUpperCase()} | ${d.status} | **${d.action}** | ${d.existingActiveCount} | ${urls} |`;
}).join('\n');

const auditReportMd = `# COMPREHENSIVE SEO & TECHNICAL AUDIT REPORT (STEP 1)
**Website:** [www.rudrakshsafar.com](https://www.rudrakshsafar.com)  
**Brand:** Rudraksh Safar | Headquartered in Bhilai, Chhattisgarh, India  
**Date of Audit:** November 19, 2026  
**Auditor:** Senior Technical SEO Lead, Information Architect & Conversion Specialist  
**Git Branch:** \`seo-overhaul\` (Base Tag: \`pre-seo-overhaul\`)  
**Page Registry Source:** \`/seo-data/page_registry.csv\` (436 tracked URLs)  

---

## EXECUTIVE SUMMARY & AUDIT SCORECARD

| Metric | Measured Value | Benchmark / Target | Health Status |
|---|---|---|---|
| **Total URLs Cataloged** | **436 URLs** | Source of truth locked | Active Tracking |
| **Active Existing URLs** | **337 Pages** | Clean architecture | Audited |
| **301 / In-App Redirects** | **99 URLs** | Direct 1-hop redirects | Audited (0 chains) |
| **Sitemap XML URLs** | **376 URLs** | 100% synchronized | Synced |
| **Thin Pages (< 300 words)** | **246 Pages (73%)** | Target: < 5% | ⚠️ CRITICAL GAP |
| **Thin Pages (< 500 words)** | **277 Pages (82%)** | Target: < 10% | ⚠️ CRITICAL GAP |
| **Orphan Pages (0 inlinks)** | **215 Pages (64%)** | Target: 0 orphans | ⚠️ CRITICAL GAP |
| **Encoding Corruption** | **322 Pages (95%)** | UTF-8 Clean | ⚠️ CRITICAL TECHNICAL BUG |
| **JSON UTF-8 BOM Bug** | **Detected in \`vercel.json\`** | Clean ASCII/UTF-8 | ⚠️ CRITICAL DEPLOY RISK |
| **LCP Heavy Assets** | **3.2MB \`hero-video.mp4\`** | < 800KB or streamed | ⚠️ PERFORMANCE RISK |

---

## 1. TECHNICAL SEO AUDIT

### 1.1. Robots.txt Analysis (\`public/robots.txt\`)
- **Status:** Valid and active.
- **Search Engine Directives:** Cleanly allows Googlebot, Bingbot, Slurp, Baiduspider, YandexBot.
- **AI / Answer Engine Directives:** Explicitly allows modern AI retrieval agents (\`OAI-SearchBot\`, \`GPTBot\`, \`ChatGPT-User\`, \`Google-Extended\`, \`PerplexityBot\`, \`ClaudeBot\`, \`anthropic-ai\`, \`CCBot\`, \`Bytespider\`). Excellent future-proofing for AI Overviews and search engines.
- **Disallowed Paths:** Correctly blocks private folders (\`/admin/\`, \`/private/\`, \`/src/\`, \`/node_modules/\`, \`/*.json$\`, \`/*.map$\`) and faceted query crawl waste (\`/*?filter=\`, \`/*?sort=\`, \`/*?order=\`).
- **Image Crawling Rule:** Select group image filenames are explicitly disallowed from Googlebot-Image to protect traveller privacy.
- **Sitemap References:** Two sitemap index references declared:
  - \`https://rudrakshsafar.com/sitemap.xml\`
  - \`https://rudrakshsafar.com/sitemap-index.xml\`
- **Canonical Host:** Correctly declares \`Host: https://rudrakshsafar.com\`.

### 1.2. XML Sitemaps Architecture & Synchronization
The site employs a modular sitemap architecture partitioned into 5 thematic child sitemaps, unified under \`sitemap.xml\` and \`sitemap-index.xml\`:
1. \`sitemap-main.xml\`: 147 Core URLs (Pillars, hubs, legal, attractions)
2. \`sitemap-packages.xml\`: 107 Tour package URLs
3. \`sitemap-local.xml\`: 84 Origin city package URLs (Bhilai, Raipur, Durg, Bilaspur)
4. \`sitemap-blog.xml\`: 17 Blog and author URLs
5. \`sitemap-kumbh.xml\`: 32 Haridwar Kumbh event URLs
- **Total Unique Sitemap URLs:** 376 URLs.
- **Namespace Audit:** Sitemaps declare required \`xmlns:image\` and \`xmlns:xhtml\` namespaces without parser errors.
- **Synchronization Check:** All 291 active static routes are accounted for. Zero 301 redirects are improperly exposed in the sitemaps.

### 1.3. Canonicals & Trailing Slash Consistency
- **Domain Canonicalization:** \`https://rudrakshsafar.com\` is the single canonical host. A Vercel host redirect rule permanently 301-redirects \`www.rudrakshsafar.com\` to \`https://rudrakshsafar.com\`.
- **Trailing Slashes:** \`trailingSlash: false\` is strictly configured in \`vercel.json\`. URLs follow the standard \`/slug\` pattern.
- **Pre-rendering Match:** The Puppeteer prerendering script generates both clean flat \`.html\` files and directory \`index.html\` files to ensure seamless server matching on static and edge hosting without 308 redirect loops.

### 1.4. Hreflang & Internationalization
- **Multilingual Implementation:** Implemented exclusively across the Haridwar Kumbh 2027 cluster (\`/kumbh-mela-2027\` vs \`/hi/kumbh-mela-2027\`) with self-referencing \`en\`, \`hi\`, and \`x-default\` tags.
- **Finding:** The rest of the site is currently unilingual (English). Where Hindi content was attempted, massive character corruption occurred due to incorrect source file encoding.

### 1.5. Redirect Architecture & Chain Validation
- **Vercel Redirects:** 51 permanent 301 rules in \`vercel.json\`.
- **_redirects (Cloudflare/Netlify):** 28 static 301 rules in \`public/_redirects\`.
- **In-App React Redirects:** 76 \`<Navigate to="..." replace />\` declarations in \`App.tsx\`.
- **Redirect Chain & Loop Analysis:** **0 multi-hop chains and 0 redirect loops detected.** Every redirect resolves directly to its final destination in a single hop.
- **CRITICAL TECHNICAL BUG:** \`vercel.json\` contains a UTF-8 Byte Order Mark (BOM: \`\\uFEFF\`) at byte offset 0. Standard JSON parsers fail when reading this file, posing an immediate deployment and tooling risk.

### 1.6. Broken Links & Status Codes
- In-app route audit verifies that internal links pointing to primary routes resolve to valid component templates.
- However, 28 legacy paths that were redirected in \`_redirects\` still appear inside JSX anchor tags on certain child components, causing unnecessary client-side redirect overhead instead of pointing directly to the canonical keeper URL.

### 1.7. Mixed Content & Asset Protocol
- All scripts, stylesheets, and fonts load over secure HTTPS.
- Zero mixed HTTP/HTTPS assets detected.

### 1.8. JavaScript Rendering & Hydration Audit
- **Framework:** React 18 with Vite bundling, React Router v6, TanStack Query, and React Helmet Async.
- **Code Splitting:** Route-level dynamic \`React.lazy\` code-splitting is utilized across 90%+ of routes.
- **SEO Pre-rendering Pipeline:** \`scripts/prerender.js\` uses Puppeteer to crawl static routes and render fully hydrated HTML snapshots into \`dist/\`, ensuring search bots without JavaScript execution capability receive complete DOM content.

### 1.9. Core Web Vitals & Mobile Performance
- **LCP (Largest Contentful Paint):** The homepage hero background video (\`/hero-video.mp4\`) is **3.24 MB**. On 4G/mobile connections, this severely harms LCP and data transfer. Recommendation: Replace with an optimized WebP poster image and lazy-load/stream the MP4 video.
- **CLS (Cumulative Layout Shift):** Image containers without explicit \`width\` and \`height\` aspect ratios in dynamic package cards cause minor layout shifts during component hydration.
- **INP (Interaction to Next Paint):** Smooth on desktop, but heavier pages with 40+ Lucide icon imports and animated carousels experience small main-thread bottlenecks on budget mobile devices.

### 1.10. Structured Data (Schema.org) Audit
- **Global Schema (\`src/components/seo/GlobalSchema.tsx\`):**
  - Injects \`TravelAgency\` and \`WebSite\` graph.
  - **Schema Encoding Error:** Character corruption in \`"priceRange": ",1,1"\` (mangled Indian Rupee symbol).
  - **Local-SEO Compliance Flag (Rule C8/C6):** Support offices listed with street addresses in Haridwar, Pattaya (Thailand), and Srinagar (Kashmir) need owner verification via \`OWNER_INPUT_NEEDED.md\` to prevent algorithmic penalties for unverifiable physical branches.
- **Route-Based Schema (\`src/components/seo/RouteBasedSchema.tsx\`):**
  - Generates \`TravelAgency\` for city routes and \`TouristTrip\` / \`Product\` schemas with dynamic pricing for major destinations.

---

## 2. CONTENT AUDIT: THIN PAGES, DUPLICATION & CANNIBALIZATION

### 2.1. Thin Content Distribution
Our code and DOM analysis reveals severe content depth deficits across the majority of existing pages:
- **Total Existing Pages Analyzed:** 337 pages
- **Pages < 300 words:** **246 pages (73.0%)** — *High risk of soft-404 or "Crawl - currently not indexed"*
- **Pages 300–500 words:** **31 pages (9.2%)**
- **Pages 500–1000 words:** **38 pages (11.3%)**
- **Pages 1000+ words:** **22 pages (6.5%)**

#### Sample of Critical Thin Pages Requiring Upgrade:
${thinPagesList}

### 2.2. Orphan Pages (0 Inbound Internal Links)
**215 out of 337 pages (63.8%)** have zero incoming internal links from other page bodies or primary navigation menus. They exist only in sitemaps and direct route tables:
${orphanPagesList}

### 2.3. Character Encoding Corruption (\`UTF-8\` Artifacts)
An automated scan detected **322 files** containing corrupted characters resulting from past editing in non-UTF-8 tools:
- Rupee symbol (\`₹\`) corrupted into \`,1\` or \`,1\`
- Hindi Devnagari characters mangled into strings like \` 1< r\`
- Em-dashes and quotes mangled into \`?"\` or \`A-\`
- **Impact:** Harmful to user trust, E-E-A-T signals, and search engine snippet generation.

### 2.4. Cannibalization & Keyword Overlap Analysis
- **Goa Silo Overlap:** 17 Goa-related URLs exist on the site (e.g., \`/domestic-tours/goa\`, \`/domestic/goa/goa-budget-itinerary\`, \`/domestic/goa/goa-cheap-trip-guide\`, \`/domestic/goa/goa-trip-under-10000\`, \`/domestic-tours/goa-from-bhilai\`, \`/bilaspur/goa-package\`). Multiple pages target overlapping queries ("budget Goa trip", "Goa packages from CG").
- **Kumbh Mela Silo:** The existing 48 Kumbh-related pages currently target **2027** (\`/kumbh-mela-2027\`). With the event sprint critical, this must be structured into a unified Haridwar Kumbh event authority hub without splitting equity across conflicting sub-routes.
- **Origin City Dilution:** Over 60 origin-city pages (\`/tour-packages-from-bhilai\`, \`/tour-packages-from-raipur\`, \`/bilaspur/...\`) exist with near-identical templates and low word count.

---

## 3. SIMILARITY AUDIT (SECTIONS B1, B2 & B3)

Under **Absolute Rule C1 (Existing-First Rule)**, before creating any new URL, we must audit whether a similar page already exists.
- **UPGRADE-IN-PLACE:** A similar page exists. We retain the exact existing URL, upgrading its content, schema, itineraries, and internal links in place.
- **MERGE+301:** True duplicate/competing pages exist. Consolidate into the single keeper URL and redirect the weaker page via approved \`REDIRECT_PLAN.csv\`.
- **CREATE:** No similar page exists. Create fresh only after keyword map approval.

### 3.1. B1 Confirmed Destinations
| Destination | Silo / Region | Existing Status | Action Required | Page Count | Existing URLs / Notes |
|---|---|---|---|---|---|
${b1Table}

### 3.2. B2 Top Priority Sprints
| Destination / Offer | Priority Tier | Existing Status | Action Required | Page Count | Existing URLs / Notes |
|---|---|---|---|---|---|
${b2Table}

### 3.3. B3 Candidate Destinations (Validation Prior to Build)
| Candidate Destination | Region / Scope | Existing Status | Action Required | Page Count | Existing URLs / Notes |
|---|---|---|---|---|---|
${b3Table}

---

## 4. DESTINATION INVENTORY: WHAT EXISTS VS WHAT IS MISSING

### 4.1. Existing Itineraries and Prices on Site
1. **Manali Kasol Strangers Trip at ₹5,999 (B2 Flagship):**
   - **URL:** \`/manali-kasol-strangers-trip\`
   - **Offer Facts Verified:** Starting price ₹5,999 per person (Quad sharing), Delhi departure point (Evening 6:00 PM – 7:30 PM), AC Tempo Traveller transport, 3N/4D duration, Solang Valley adventure, Hadimba Temple, Mall Road, Kasol cafe hopping, Manikaran Sahib Gurudwara. Official brochure PDF: \`/Pdf/Rudraksh_Safar_Manali_Kasol_5999.pdf\`.
   - **Gaps:** Severe UTF-8 text corruption in code, needs sticky mobile booking bar, fixed departure calendar schema, and dedicated supporting guides.
2. **Haridwar Kumbh Mela (B2 Sprint):**
   - **URLs:** \`/kumbh-mela-2027\`, \`/hi/kumbh-mela-2027\` + 30 sub-routes.
   - **Facts Verified:** Complete list of 10 Snan dates, 3 Amrit Snans, Swiss tent stay tiers, route guides from Chhattisgarh, MP, UP, Delhi.
   - **Gaps:** Content is dated for 2027 cycle, Hindi pages have severe character corruption, missing group/senior-citizen enquiry forms and B2B temple booking CTAs.
3. **Thailand (Pattaya & Phuket):**
   - **URLs:** \`/international-tours/thailand\`, \`/b2b/thailand\`, \`/destinations/thailand/...\`
   - **Pricing:** In \`pricingRegistry.ts\` (Pattaya from ₹12,499, Phuket from ₹16,999).
   - **Gaps:** Individual attraction pages are thin (200–400 words); lacks day-by-day complete family/couple itineraries, visa-on-arrival updates, and tax transparency (TCS/GST).
4. **Dubai & UAE:**
   - **URLs:** \`/international-tours/dubai\`, \`/destinations/uae/...\`
   - **Pricing:** Starting from ₹23,499 in \`pricingRegistry.ts\`.
   - **Gaps:** Missing complete 4N/5D and 5N/6D day-by-day plans, Abu Dhabi combos, and corporate MICE quote forms.
5. **Kashmir, Ladakh, Kerala, Goa:**
   - Master hubs exist, basic starting prices recorded in registry (₹9,999 base).
   - Detailed day-by-day itineraries, season windows, and transparent cost models are incomplete or thin.

### 4.2. Confirmed Destinations Entirely Missing Pages & Itineraries
The following confirmed B1 destinations have **zero active package pages or itineraries** on the current website and must be created:
1. **Canton Fair Business Tours (Guangzhou / Shenzhen / Hong Kong / Yiwu):** 0 pages. Needs complete B2B hub, spring/autumn edition dates, visa guide for Indian passport holders, and buyer registration workflows.
2. **Haridwar–Rishikesh (General Leisure / Adventure Hub):** 0 general hub pages (currently only Kumbh-specific pages exist).
3. **Puri (Odisha / Jagannath Dham / Konark / Chilika):** 0 pages.
4. **Almaty (Kazakhstan):** 0 pages.
5. **Seychelles:** 0 pages.
6. **Macau:** 0 pages.
7. **Philippines:** 0 pages.
8. **Japan:** 0 pages.
9. **Gujarat (Dwarka / Somnath / Statue of Unity):** 0 pages.

### 4.3. Unlisted Destinations Already Present on the Website
During our codebase exploration, we discovered several active destination and attraction routes that were not in your initial prompt lists:
1. **Umling La** (\`/destinations/umling-la\` & \`/travel-guides/umling-la-bike-trip\`): High-altitude motorable pass in Ladakh.
2. **Gurez Valley** (\`/destinations/gurez-valley\`): Offbeat border valley in Kashmir.
3. **Spiti Valley** (\`/destinations/spiti-valley\`): High-altitude circuit in Himachal Pradesh.
4. **Gulmarg** (\`/destinations/gulmarg\`): Ski and winter resort in Kashmir.
5. **Chitkul & Kalpa** (\`/destinations/chitkul\`, \`/destinations/kalpa\`): Kinnaur district, Himachal Pradesh.
6. **Jibhi** (\`/destinations/jibhi\`): Tirthan Valley eco-tourism destination.
7. **Gokarna** (\`/destinations/gokarna\`): Karnataka coastal and temple destination.
8. **Lakshadweep** (\`/destinations/lakshadweep\`): Island union territory.
9. **Hanle** (\`/destinations/hanle\`): Dark Sky Reserve and astronomical observatory in Ladakh.
10. **Chadar Trek** (\`/destinations/chadar-trek\`): Frozen Zanskar river winter trek.

*Recommendation:* Retain all these existing assets under Rule C2 ("Never delete existing pages or good content"), integrate them cleanly into their respective parent state hubs (Himachal, Kashmir, Ladakh, Karnataka), and upgrade their thin content in subsequent steps.

---

## 5. IMMEDIATE ACTION PLAN (FOUNDATION FOR STEP 2)
1. **Resolve UTF-8 BOM in \`vercel.json\`** to protect build/deploy workflows.
2. **Lock Page Registry** (\`/seo-data/page_registry.csv\`) as the single source of truth before any content creation.
3. **Prepare Competitor Gap Matrix & Keyword Demand Matrix** for Step 2.
