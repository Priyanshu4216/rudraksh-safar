# STEP 3 — INFORMATION ARCHITECTURE, SILO STRUCTURE & KEYWORD OWNERSHIP
**Website:** [www.rudrakshsafar.com](https://www.rudrakshsafar.com) | **Brand:** Rudraksh Safar (Bhilai, CG)  
**Date:** November 19, 2026  
**Auditor & Architect:** Senior Technical SEO Lead, Information Architect & Conversion Specialist  
**Deliverables Generated & Updated:**
- [`KEYWORD_MAP.csv`](file:///c:/Rudraksh%20Safar/seo-data/KEYWORD_MAP.csv)
- [`india_locations.csv`](file:///c:/Rudraksh%20Safar/seo-data/india_locations.csv)
- [`REDIRECT_PLAN.csv`](file:///c:/Rudraksh%20Safar/seo-data/REDIRECT_PLAN.csv)
- [`page_registry.csv`](file:///c:/Rudraksh%20Safar/seo-data/page_registry.csv) (Updated to 452 URLs)

---

## 1. THE COMPLETE SILO HIERARCHY TREE

We follow a strict, non-cannibalizing inverted tree structure. Every page belongs to exactly one parent silo, links upward via canonical breadcrumbs, links downward to its children, and links laterally only to relevant siblings within the same parent cluster.

```
Home (/) [Rudraksh Safar Travel Agency Bhilai]
├── International Tour Packages (/international-packages)
│   ├── Thailand (/international-tours/thailand)
│   │   ├── Bangkok & Pattaya (Attractions & Day Tours)
│   │   ├── Phuket & Krabi (Island Tours)
│   │   └── Guides: Visa on Arrival, Currency, Nightlife, Best Time
│   ├── Dubai & UAE (/international-tours/dubai)
│   │   ├── Dubai Highlights (Burj Khalifa, Desert Safari)
│   │   ├── Abu Dhabi Extension (Grand Mosque, Ferrari World)
│   │   └── Guides: UAE eVisa, Dress Code, Shopping Festival
│   ├── Bali (/international-tours/bali)
│   │   ├── Kuta, Seminyak & Ubud (Culture & Villas)
│   │   ├── Nusa Penida Day Trip
│   │   └── Guides: Bali VoA, Customs ECD Form, Best Season
│   ├── Vietnam (/international-tours/vietnam)
│   │   ├── Hanoi & Halong Bay (North)
│   │   ├── Da Nang & Hoi An (Central)
│   │   └── Guides: Vietnam 90-Day eVisa, Currency, SIM Cards
│   ├── Singapore & Malaysia Combo (/international-tours/singapore-malaysia)
│   │   ├── Singapore Standalone (/international-tours/singapore)
│   │   └── Malaysia Standalone (/international-tours/malaysia)
│   ├── China: Canton Fair Business Tours (/international-tours/canton-fair-china) ★ Priority
│   │   ├── Canton Fair Spring Edition 2027 (Phases 1, 2, 3)
│   │   ├── Canton Fair Autumn Edition 2027 (Phases 1, 2, 3)
│   │   ├── Guangzhou Market Extensions (Shenzhen Electronics, Yiwu Commodities, Hong Kong)
│   │   └── Guides: M-Visa for Indians, Buyer Badge Pre-Registration, Pazhou Metro Guide
│   ├── Almaty, Kazakhstan (/international-tours/almaty-kazakhstan)
│   ├── Baku, Azerbaijan (/international-tours/baku-azerbaijan)
│   ├── Sri Lanka (/international-tours/srilanka)
│   ├── Japan (/international-tours/japan)
│   ├── Seychelles (/international-tours/seychelles)
│   ├── Macau (/international-tours/macau)
│   └── Philippines (/international-tours/philippines)
│
├── India Tour Packages (/domestic-packages)
│   ├── Manali Hub (/domestic-tours/manali)
│   │   ├── ★ Flagship: Manali Group Trip ₹5,999 (/manali-kasol-strangers-trip)
│   │   ├── Solang Valley & Atal Tunnel Adventure
│   │   ├── Kasol, Tosh & Manikaran Gurudwara Circuit
│   │   └── Supporting Guides: Winter Snow Guide, Weather by Month, Delhi to Manali Volvo
│   ├── Haridwar–Rishikesh Hub (/domestic-tours/haridwar-rishikesh)
│   │   ├── ★ Date-Critical: Haridwar Kumbh Mela 2027 (/kumbh-mela-2027)
│   │   │   ├── Snan Dates & Shahi Snan Calendar (/kumbh-mela-2027/snan-dates)
│   │   │   ├── Luxury Swiss Tents & Stay Guide (/kumbh-mela-2027/stay)
│   │   │   ├── Train & Route Guide from CG/DEL (/kumbh-mela-2027/how-to-reach)
│   │   │   └── Group / Senior Citizen / Temple Packages (/kumbh-mela-2027/packages)
│   │   └── Rishikesh River Rafting, Camping & Ganga Aarti
│   ├── Char Dham Yatra Master Hub (/chardham)
│   │   ├── Kedarnath Yatra from Bhilai/Raipur (/chardham/bhilai-to-kedarnath)
│   │   ├── Badrinath Temple Guide (/chardham/badrinath-temple)
│   │   └── Do Dham / Ek Dham Variants & Biometric Registration
│   ├── Kashmir Valley (/domestic-tours/kashmir)
│   │   ├── Srinagar Houseboats & Dal Lake
│   │   ├── Gulmarg Ski & Gondola (/destinations/gulmarg)
│   │   └── Gurez Valley Offbeat (/destinations/gurez-valley)
│   ├── Ladakh High-Altitude (/domestic-tours/ladakh)
│   │   ├── Leh, Nubra Valley & Pangong Tso
│   │   ├── Umling La World's Highest Road (/destinations/umling-la)
│   │   ├── Hanle Dark Sky Reserve (/destinations/hanle)
│   │   └── Chadar Frozen River Winter Trek (/destinations/chadar-trek)
│   ├── Goa Beach & Leisure (/domestic-tours/goa)
│   │   ├── Budget Goa Itinerary (/domestic-tours/goa-budget-itinerary)
│   │   └── North vs South Goa Guide (/domestic-tours/north-vs-south-goa)
│   ├── Kerala Backwaters & Hills (/domestic-tours/kerala)
│   │   ├── Munnar Tea Gardens & Alleppey Houseboat
│   │   └── Thekkady Wildlife & Kovalam Beach
│   ├── Ayodhya – Varanasi – Prayagraj Sacred Circuit (/domestic-tours/ayodhya-varanasi-prayagraj)
│   ├── Puri & Jagannath Dham (/domestic-tours/puri-jagannath-dham)
│   ├── Rajasthan Heritage (/domestic-tours/rajasthan)
│   └── Gujarat Circuit (/domestic-tours/gujarat)
│
├── Tour Packages From Origin Cities (Section J)
│   ├── Bhilai HQ Hub (/tour-packages-from-bhilai) [Durg-Bhilai Industrial Feeder]
│   ├── Raipur Gateway Hub (/tour-packages-from-raipur) [Swami Vivekananda Airport RPR]
│   ├── Bilaspur City Hub (/bilaspur) [SECR Railway Feeder]
│   └── Metro Transit Feeder Pages (Delhi, Mumbai, Kolkata, Ahmedabad)
│
├── Theme & Specialty Hubs
│   ├── Honeymoon Packages (/honeymoon-packages)
│   ├── Family Tour Packages (/family-packages)
│   ├── Adventure & High Altitude (/adventure-packages)
│   ├── Luxury Holidays (/luxury-packages)
│   └── Corporate / MICE & Dealer Incentives (/tour-packages-from-bhilai/corporate-tours)
│
└── Travel Services & Direct Booking
    ├── Visa Assistance (/travel-services/visa-assistance)
    ├── Flight Booking (/flights)
    ├── Hotel Bookings (/hotels)
    └── Passport & Forex Guidance (/travel-services/passport-assistance)
```

---

## 2. STRICT KEYWORD OWNERSHIP & ANTI-CANNIBALIZATION RULES

Under **Section F1**, no two URLs can compete for the same primary search query or intent. Pre-set boundaries are established below:

| Primary Search Query / Intent | Exclusive Keyword Owner URL | Target Intent | Forbidden Keywords (Do Not Target on Other Pages) |
|---|---|---|---|
| **"Manali group trip 5999" / "Budget youth Manali tour"** | `/manali-kasol-strangers-trip` | Transactional | Must NOT be targeted on `/domestic-tours/manali` or homepage. |
| **"Manali tour package" / "Manali holiday packages"** | `/domestic-tours/manali` | Commercial | Must NOT target "5999 group tour" or "Kasol strangers trip". |
| **"Haridwar Kumbh Mela 2027 packages"** | `/kumbh-mela-2027` | Commercial / Event | Must NOT be targeted on the general Haridwar–Rishikesh leisure hub. |
| **"Haridwar Kumbh snan dates 2027"** | `/kumbh-mela-2027/snan-dates` | Informational | Must NOT target package prices or hotel booking money keywords. |
| **"Haridwar Rishikesh tour package"** | `/domestic-tours/haridwar-rishikesh` | Commercial | Must NOT target Kumbh Mela bathing dates or Kumbh tents. |
| **"Canton Fair tour package from India"** | `/international-tours/canton-fair-china` | Commercial (B2B) | Must NOT target China tourist visa rules (owned by visa guide). |
| **"China business visa for Indian citizens Canton Fair"** | `/guides/canton-fair-visa-for-indians` | Informational | Must NOT target Canton Fair flight+hotel package prices. |
| **"Char Dham yatra package"** | `/chardham` | Commercial | Must NOT target single temple Kedarnath helicopter packages. |
| **"Kedarnath tour package from Bhilai Raipur"** | `/chardham/bhilai-to-kedarnath` | Commercial | Must NOT target full 4-Dham yatra packages. |
| **"Kashmir tour package"** | `/domestic-tours/kashmir` | Commercial | Must NOT target Ladakh bike trips or combo packages. |
| **"Ladakh tour package"** | `/domestic-tours/ladakh` | Commercial | Must NOT target Kashmir-only houseboats or Gulmarg. |
| **"Singapore Malaysia tour package"** | `/international-tours/singapore-malaysia` | Commercial | Must NOT be targeted on individual Singapore or Malaysia country hubs. |
| **"Thailand tour packages"** | `/international-tours/thailand` | Commercial | Must NOT target individual attraction tickets (e.g. Grand Palace, Chao Phraya). |
| **"Goa tour packages"** | `/domestic-tours/goa` | Commercial | Must NOT target "Goa budget under 10000" (owned by budget guide). |

---

## 3. ORIGIN-CITY GATING RULES & LOCAL-SEO COMPLIANCE (SECTION J)

To comply with **Absolute Rule C8 (No Local-SEO Spam)**:
1. **Google Business Profile (GBP) Legitimacy**:
   - Only physical offices with real operational staff (GE Road, Bhilai, Durg district, CG) are linked to a Google Business Profile.
   - **Zero fake addresses or virtual offices** will be created in Haridwar, Kashmir, Pattaya, or other cities.
2. **Origin City Gating Framework**:
   - **Local Home Territory (Bhilai, Durg, Raipur, Bilaspur)**: Full city hubs featuring direct train departures from Durg Junction (DURG) / Raipur Junction (R) / Bilaspur Junction (BSP), and flight connections from Swami Vivekananda Airport (RPR).
   - **National Gateway Cities (Delhi, Mumbai, Kolkata, Ahmedabad)**: Served exclusively as logistics hubs (e.g. *"Manali Group Tour with Delhi Departure"*, *"Canton Fair Business Tour from Mumbai / Ahmedabad"*).
   - **Rule of Unique Content**: Every origin-city page must contain verified train numbers, driving routes, local pickup timings, and distinct local pricing options. No automated clone pages where only the city name is swapped.

---

## 4. INTERNAL LINKING ARCHITECTURE & LINK GRAPH

To permanently resolve the **215 orphan pages (64%)** identified in Step 1:
1. **Upward Canonical Breadcrumbs**: Every child page points to its immediate parent and to Home via structured BreadcrumbList schema (`Home > Domestic Packages > Manali > Manali Group Trip ₹5,999`).
2. **Parent-to-Child Mega Links**: Every parent hub contains a rich grid linking directly to all its child packages and supporting guides.
3. **Lateral Sibling Links**: Related packages link to each other (e.g. Manali ₹5,999 links to Kasol Cafe Guide, Atal Tunnel Snow Guide, and Delhi Departure Logistics).
4. **Origin-to-Destination Funnel**: Origin pages link directly to the primary money package (`/tour-packages-from-bhilai` links prominently to Manali ₹5,999, Haridwar Kumbh, and Thailand).
5. **Cross-Silo Linking Policy**: A guide page never links to another silo's guide; it only links upwards to its own destination hub, or directly to the primary package booking CTA.

---

## 5. REDIRECT POLICY & CONSOLIDATION SUMMARY

Under **Rule C1**, 26 legacy URLs with redundant or fragmented parameters are scheduled for 301 redirection in [`REDIRECT_PLAN.csv`](file:///c:/Rudraksh%20Safar/seo-data/REDIRECT_PLAN.csv).

- **Goa Silo Consolidation**: 6 overlapping Goa routes (`/goa-budget-itinerary-from-cg`, `/north-vs-south-goa-from-cg`, `/train-vs-flight-to-goa-from-cg`, `/train-vs-flight-goa-from-cg`) are redirected to clean, standardized slugs (`/domestic-tours/goa-budget-itinerary`, `/domestic-tours/north-vs-south-goa`, `/domestic-tours/train-vs-flight-goa`).
- **Services Unification**: Legacy root services (`/hotel-booking`, `/cab-rental`, `/cruise-booking`, `/visa-guide`) are permanently routed under `/travel-services/`.
- **Zero Redirect Chains**: Every redirected URL points directly to the active keeper URL with 200 OK status.
- **Safety Lock**: No redirect will be deployed to live server configurations without your explicit confirmation.
