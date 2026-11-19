const fs = require('fs');
const path = require('path');

// 1. Competitor Matrix CSV
const competitorMatrixHeader = [
    'Competitor',
    'Main Keyword / Segment',
    'Page Types',
    'Content Depth (Words)',
    'Schema Markup',
    'UX & Booking Features',
    'E-E-A-T & Trust Signals',
    'Price Transparency',
    'What They Have That We Lack',
    'Rudraksh Safar Edge / Opportunity'
].join(',');

const competitorMatrixRows = [
    [
        'MakeMyTrip (MMT)',
        'Tour Packages / Holiday Packages',
        'Aggregator / Tiered Package Hubs',
        '2500+ words + Filter Facets',
        'Product, AggregateOffer, FAQPage, BreadcrumbList',
        'Live flight+hotel dynamic packaging, EMI calculator, interactive calendar',
        '100k+ verified traveller reviews, IATA/Ministry of Tourism badges, 24x7 helpline',
        'Full itemized breakdown, transparent GST/TCS indicators, hotel room tier selector',
        'Instant online payment checkout, multi-city dynamic package builder, live seat countdown',
        'Local personalized service from Bhilai/CG, human travel expert WhatsApp advice, un-templated custom itineraries'
    ],
    [
        'Thrillophilia',
        'Manali Group Tours / Ladakh Bike Trips / Adventure',
        'Experiential Guides & Group Batch Hubs',
        '3000+ words + Day-by-Day Timeline',
        'TouristTrip, Event (Fixed Departure), FAQPage, Review',
        'Batch departure calendar, altitude advisory widget, downloadable gear list, live WhatsApp lead trigger',
        'Real tour leader bios, customer GoPro video reels, verified trip reviews with date badges',
        'Clear per-person twin/quad sharing rates, transparent exclusions (meals/permits clearly highlighted)',
        'Hour-by-hour itinerary schedule, safety certifications, batch booking seat counter',
        'Flagship Manali ₹5,999 pricing beats market by 20-30%, direct departure coordination from CG/Delhi'
    ],
    [
        'TravelTriangle',
        'Custom Destination Packages (Thailand, Bali, Dubai, Kerala)',
        'Marketplace Comparison Hubs',
        '2000+ words + Quotes Engine',
        'Product, AggregateRating, FAQPage',
        'Multi-agent quote request form, budget vs luxury slider, customizable day planner',
        'Verified traveller stories, destination specialist badges, escrow payment guarantee',
        'Starting price estimates, quotes from 3 local DMCs',
        'Multi-quote comparison interface, honeymoon inclusions checklist',
        'Single accountable agency (no 3rd-party DMC confusion), dedicated 1-on-1 manager from booking to return'
    ],
    [
        'TourMyIndia',
        'Char Dham / Haridwar Kumbh / Spiritual & Pilgrimage',
        'Pilgrimage Master Pillars & Circuit Guides',
        '3500+ words + Temple Timings',
        'TouristTrip, FAQPage, HowTo, Article',
        'Registration step-by-step wizard, helicopter booking guide, VIP pass advice, weather advisories',
        '25+ years in spiritual tourism, registered Uttarakhand tourism partner, temple priest connections',
        'Transparent yatra fixed departure rates, helicopter surcharge clarity, medical disclaimer',
        'Comprehensive route elevation charts, offline registration counter maps, daily pooja schedules',
        'On-the-ground support office in Haridwar, dedicated Bhilai/Raipur yatri train coordination'
    ],
    [
        'Thomas Cook India / SOTC',
        'Canton Fair / Europe / Luxury / Senior Citizen',
        'Corporate & Escorted Group Hubs',
        '2200+ words + Brochure Download',
        'TravelAgency, Product, FAQPage, AggregateOffer',
        'Trade delegation registration, Forex card integration, visa application assistance tracker',
        '140+ years heritage, listed corporate entity, licensed visa facilitator',
        'All-inclusive pricing (airfare, visa, taxes, travel insurance, daily Indian meals)',
        'Dedicated corporate invoice portal, GST input credit compliance, commercial visa invitation guidance',
        'Agile pricing for MSMEs, traders and local wholesalers in CG/Central India, zero corporate bureaucracy'
    ],
    [
        'Pickyourtrail',
        'International Custom Holidays (Vietnam, Bali, Japan, Europe)',
        'Dynamic Custom Itinerary Builder',
        '2000+ words + Drag-and-Drop Planner',
        'TouristTrip, Product, FAQPage',
        'Real-time flight sync, live hotel upgrade pricing, day-by-day routing map with drive times',
        'TripAdvisor Travellers Choice, live on-trip app concierge',
        'Real-time price updating as hotels/flights are selected',
        'Interactive route visualizer, activity duration & transfer distance calculator',
        'Human-led offline emergency assistance, local language guidance, flexible cash/NEFT/UPI booking'
    ]
].map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','));

fs.writeFileSync('seo-data/competitor_matrix.csv', [competitorMatrixHeader, ...competitorMatrixRows].join('\n'), 'utf8');
console.log('Saved seo-data/competitor_matrix.csv');

// 2. Demand Matrix CSV
const demandMatrixHeader = [
    'Origin City / Region',
    'Destination',
    'Monthly Search Volume (Est.)',
    'Search Intent',
    'Seasonality Peak',
    'Rudraksh Safar Competitiveness',
    'Priority Tier'
].join(',');

const demandMatrixData = [
    ['Bhilai / Durg / Raipur', 'Manali Group Tour (₹5,999)', '18,500', 'High Commercial / Booking', 'Oct - Jun', 'High (Market Leader at ₹5,999)', 'Tier 1 (Sprint Flagship)'],
    ['Pan-India / Outbound', 'Haridwar Kumbh Mela', '350,000+', 'High Commercial / Pilgrimage', 'Jan - Apr 2027', 'High (Haridwar Ground Support)', 'Tier 1 (Date-Critical)'],
    ['Pan-India / MSME Traders', 'Canton Fair Guangzhou', '45,000', 'B2B Trade Commercial', 'Mar-Apr & Sep-Oct', 'High (Niche Trade Focus)', 'Tier 1 (High Ticket)'],
    ['Bhilai / Raipur / CG', 'Goa Tour Packages', '42,000', 'Commercial / Youth / Family', 'Oct - Feb', 'High (Direct flights from RPR)', 'Tier 1'],
    ['Bhilai / Raipur / CG', 'Char Dham Yatra', '38,000', 'Commercial / Spiritual', 'May - Jun & Sep - Oct', 'High (Core Specialty)', 'Tier 1'],
    ['Bhilai / Raipur / CG', 'Thailand Tour (Pattaya/Phuket)', '32,000', 'Commercial / Leisure', 'Nov - Apr', 'High (Direct CCU/DEL connectivity)', 'Tier 1'],
    ['Bhilai / Raipur / CG', 'Dubai & Abu Dhabi', '28,000', 'Commercial / Luxury / Family', 'Nov - Mar', 'High (High conversion)', 'Tier 1'],
    ['Bhilai / Raipur / CG', 'Kashmir (Srinagar/Gulmarg)', '24,000', 'Commercial / Honeymoon / Snow', 'Dec - Feb & Apr - Jun', 'High', 'Tier 1'],
    ['Bhilai / Raipur / CG', 'Ladakh (Leh/Pangong/Nubra)', '22,000', 'Commercial / Adventure', 'May - Sep', 'High', 'Tier 1'],
    ['Bhilai / Raipur / CG', 'Vietnam (Hanoi/Da Nang/Phu Quoc)', '19,000', 'Commercial / Budget International', 'Nov - Apr', 'High', 'Tier 1'],
    ['Bhilai / Raipur / CG', 'Bali (Kuta/Ubud/Nusa Penida)', '18,500', 'Commercial / Honeymoon', 'Apr - Oct', 'High', 'Tier 1'],
    ['Bhilai / Raipur / CG', 'Kerala (Munnar/Alleppey)', '17,000', 'Commercial / Family / Ayurvedic', 'Sep - Mar', 'High', 'Tier 1'],
    ['Bhilai / Raipur / CG', 'Singapore & Malaysia Combo', '16,000', 'Commercial / Family', 'Year-round / Summer', 'High', 'Tier 2'],
    ['Bhilai / Raipur / CG', 'Andaman (Havelock/Neil)', '15,000', 'Commercial / Honeymoon', 'Oct - May', 'High', 'Tier 2'],
    ['Bhilai / Raipur / CG', 'Ayodhya - Kashi - Prayagraj', '25,000', 'Commercial / Spiritual', 'Oct - Mar', 'High (Direct train from Durg)', 'Tier 2'],
    ['Bhilai / Raipur / CG', 'Rajasthan (Jaipur/Udaipur/Jaisalmer)', '18,000', 'Commercial / Heritage', 'Oct - Mar', 'High', 'Tier 2'],
    ['Bhilai / Raipur / CG', 'Sri Lanka (Colombo/Kandy/Bentota)', '11,000', 'Commercial / Leisure', 'Dec - Apr', 'Medium', 'Tier 2'],
    ['Bhilai / Raipur / CG', 'Puri - Jagannath Dham', '14,000', 'Commercial / Weekend Pilgrimage', 'Year-round / Rath Yatra', 'High (Direct train connectivity)', 'Tier 2'],
    ['Bhilai / Raipur / CG', 'Azerbaijan (Baku)', '12,000', 'Commercial / Trend Outbound', 'Apr - Oct', 'Medium', 'Tier 2'],
    ['Bhilai / Raipur / CG', 'Almaty (Kazakhstan)', '9,500', 'Commercial / Snow & City', 'Dec - Mar & May - Sep', 'Medium', 'Tier 2']
].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','));

fs.writeFileSync('seo-data/demand_matrix.csv', [demandMatrixHeader, ...demandMatrixData].join('\n'), 'utf8');
console.log('Saved seo-data/demand_matrix.csv');

// 3. Visa Matrix CSV
const visaMatrixHeader = [
    'Destination',
    'Passport Requirement',
    'Visa Category for Indian Citizens',
    'Allowed Stay',
    'Fee (approx.)',
    'Processing Time',
    'Mandatory Documents',
    'Official Portal / Source Link',
    'Last Verified Date'
].join(',');

const visaMatrixData = [
    ['Thailand', 'Min. 6 months validity', 'Visa-Free (Tourist)', 'Up to 30 Days', 'Free (Nil)', 'Instant at Immigration', 'Confirmed return ticket, 20,000 THB funds, online TDAC arrival card', 'https://www.immigration.go.th', '2026-11-19'],
    ['Bali (Indonesia)', 'Min. 6 months validity', 'Visa on Arrival (VoA) / e-VoA', '30 Days (Extendable to 60)', 'IDR 500,000 (~USD 35)', 'Instant / 24-48 hrs online', 'Return flight, hotel booking confirmation, customs declaration (ECD)', 'https://evisa.imigrasi.go.id', '2026-11-19'],
    ['Vietnam', 'Min. 6 months validity', 'Electronic Visa (e-Visa)', '30 to 90 Days', 'USD 25 (Single) / USD 50 (Multi)', '3 - 5 Working Days', 'Passport scan (bio page), 4x6cm photo, entry/exit ports', 'https://evisa.gov.vn', '2026-11-19'],
    ['Malaysia', 'Min. 6 months validity', 'Visa-Free through Dec 2026; eVISA from Jan 1, 2027', 'Up to 30 Days', 'Free through 2026; eVISA fee from 2027', 'Instant / 48 hrs for eVISA', 'MDAC digital arrival card, return ticket, hotel stay', 'https://malaysiavisa.imi.gov.my', '2026-11-19'],
    ['Sri Lanka', 'Min. 6 months validity', 'Fee-Free Tourist ETA', 'Up to 30 Days (Double entry)', 'Free (Nil under special scheme)', '24 - 48 Hours online', 'Confirmed roundtrip ticket, hotel stay, online ETA approval', 'https://eta.gov.lk', '2026-11-19'],
    ['Kazakhstan (Almaty)', 'Min. 6 months validity', 'Visa-Free (up to 14 days; QazETA required)', '14 Days per trip (Max 42 in 180)', 'Free / Minor digital fee', 'Instant / Pre-arrival QazETA', 'Passport, return ticket, accommodation proof', 'https://vmp.gov.kz', '2026-11-19'],
    ['Dubai / UAE', 'Min. 6 months validity', 'Tourist eVisa (30 Days / 60 Days)', '30 or 60 Days', 'AED 350 - 650 (~₹8,000-14,000)', '3 - 4 Working Days', 'Passport color scan, white background photo, PAN card, flight tickets', 'https://gdrfad.gov.ae', '2026-11-19'],
    ['China (Canton Fair)', 'Min. 6 months validity', 'Commercial M-Visa (Business)', '30 - 60 Days per entry', '₹7,500 - ₹12,000', '5 - 7 Working Days', 'Canton Fair Buyer Invitation / CFTC barcode, company cover letter, bank statement, roundtrip flight', 'https://www.visaforchina.cn', '2026-11-19'],
    ['Singapore', 'Min. 6 months validity', 'Paper Visa / eVisa via Authorized Agent', 'Up to 30 Days (Multiple entry)', 'SGD 30 + Agent Service Fee', '3 - 5 Working Days', 'Completed Form 14A, 6 months bank statement, roundtrip flight, hotel voucher', 'https://www.ica.gov.sg', '2026-11-19'],
    ['Japan', 'Min. 6 months validity', 'Tourist eVisa / Sticker Visa', 'Up to 15 or 30 Days', 'JPY 3,000 (~₹1,800) + VFS fees', '5 - 7 Working Days', 'ITR (Form 16) last 2 yrs, 6 months bank statement (min ₹2L balance), detailed itinerary', 'https://www.in.emb-japan.go.jp', '2026-11-19'],
    ['Seychelles', 'Valid for duration of stay', 'Visitor Permit on Arrival (Visa-Free)', 'Up to 30 Days', 'Free (Nil)', 'Instant upon arrival', 'Return flight ticket, confirmed hotel voucher, online Travel Authorization (SEY-TA)', 'https://seychelles.govtas.com', '2026-11-19'],
    ['Macau', 'Min. 6 months validity', 'Visa on Arrival / Visa-Free', 'Up to 30 Days', 'Free (Nil)', 'Instant at immigration pier/border', 'Valid passport, return ferry/flight ticket, proof of sufficient funds', 'https://www.fsm.gov.mo', '2026-11-19'],
    ['Philippines', 'Min. 6 months validity', 'Tourist Visa / eVisa', '14 to 30 Days', 'USD 40 - 50', '5 - 8 Working Days', 'Passport, 6 months bank statement, employment certificate, confirmed return flight', 'https://evisa.gov.ph', '2026-11-19'],
    ['Nepal', 'Voter ID or Passport', 'Freedom of Movement / No Visa Required', 'Unlimited for Indians', 'Free (Nil)', 'Instant entry by land or air', 'Original Indian Passport or Election Commission Voter ID Card', 'https://nepalimmigration.gov.np', '2026-11-19'],
    ['Bhutan', 'Valid Passport or Voter ID', 'Entry Permit + Sustainable Development Fee (SDF)', 'Up to 14 Days', '₹1,200 per person per day (SDF)', '24 - 48 Hours online / Border', 'Passport or Voter ID, certified Bhutanese guide booking, vehicle permit', 'https://visit.doi.gov.bt', '2026-11-19'],
    ['Azerbaijan', 'Min. 6 months validity', 'ASAN Electronic Visa (eVisa)', 'Up to 30 Days (Single entry)', 'USD 26 (Standard) / USD 60 (Urgent)', '3 Working Days (Standard) / 3 hrs (Urgent)', 'Passport bio-page scan, valid email address, debit/credit card', 'https://evisa.gov.az', '2026-11-19']
].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','));

fs.writeFileSync('seo-data/visa_matrix.csv', [visaMatrixHeader, ...visaMatrixData].join('\n'), 'utf8');
console.log('Saved seo-data/visa_matrix.csv');

// 4. Seasonality CSV
const seasonalityHeader = [
    'Destination',
    'Peak Season Months',
    'Shoulder / Moderate Months',
    'Off-Season Months',
    'Special Critical Events & Fixed Windows',
    'Recommended Audience',
    'Weather Highlights'
].join(',');

const seasonalityData = [
    ['Manali', 'May - Jun (Summer) & Dec - Feb (Snow)', 'Mar - Apr & Sep - Nov', 'Jul - Aug (Monsoon landslide risk)', 'Atal Tunnel snow season (Dec-Feb); Summer escape (May-Jun)', 'Strangers Group, Youth, Couples, Families', 'Sub-zero in winter with heavy snowfall; pleasant 15-25°C in summer'],
    ['Haridwar Kumbh Mela', 'Jan 14 - Apr 20, 2027 (Fixed Cycle)', 'N/A (Strict Event Window)', 'May - Dec', '10 Major Snans; 3 Amrit/Shahi Snans (Mar 6, Mar 8, Apr 14, 2027)', 'Devotees, Families, Seniors, Temple Delegations', 'Cold winter in Jan/Feb (8-18°C); warming to pleasant in Mar/Apr (18-30°C)'],
    ['Canton Fair (Guangzhou)', 'Apr 15 - May 5 (Spring) & Oct 15 - Nov 4 (Autumn)', 'Early Apr & Early Oct (Pre-fair buildup)', 'Jun - Aug (Hot/Humid) & Jan - Feb (CNY)', 'Spring Session (Phases 1-3); Autumn Session (Phases 1-3)', 'Traders, Importers, Wholesalers, Manufacturers', 'Spring 20-28°C pleasant; Autumn 22-29°C comfortable'],
    ['Kashmir', 'Dec - Feb (Gulmarg snow) & Apr - Jun (Tulip/Spring)', 'Jul - Aug & Sep - Nov (Autumn Chinar)', 'Late Feb - Mar (Muddy thaw)', 'Tulip Festival Srinagar (Apr); Winter Snow Sports Gulmarg (Dec-Feb)', 'Honeymooners, Families, Luxury travellers', 'Snowbound winter (-5 to 5°C); mild spring and summer (15-28°C)'],
    ['Ladakh', 'Jun - Sep (Full circuit open)', 'May & Oct (Shoulder border openings)', 'Nov - Apr (Extremely cold, only flight access)', 'Chadar Frozen River Trek (Jan-Feb); Hemis Festival (Jun/Jul)', 'Bikers, Adventure Groups, Photographers', 'Chilly nights even in summer; sub-zero winter (-20°C)'],
    ['Goa', 'Nov - Feb (Sun, sand, parties)', 'Oct & Mar - May (Budget beach stays)', 'Jun - Sep (Lush green monsoon)', 'Sunburn / New Year (Dec); Monsoon Dudhsagar tours (Jul-Aug)', 'Youth groups, Couples, Corporate offsites', 'Warm tropical 28-34°C; high humidity during monsoon'],
    ['Char Dham', 'May - Jun (Pre-monsoon) & Sep - Oct (Post-monsoon)', 'Early Jul & Early Sep', 'Nov - Apr (Temples snowbound and closed)', 'Akshaya Tritiya temple opening; Diwali/Bhai Dooj closing', 'Senior Citizens, Families, Spiritual Pilgrims', 'Unpredictable alpine weather; freezing at Kedarnath/Badrinath'],
    ['Kerala', 'Oct - Mar (Cool, pleasant backwaters)', 'Sep & Apr - May (Summer & harvest)', 'Jun - Aug (Ayurvedic Monsoon retreats)', 'Onam Festival (Aug/Sep); Nehru Trophy Boat Race (Aug)', 'Couples, Families, Senior Citizens, Wellness seekers', 'Tropical 24-32°C; monsoon brings therapeutic rains'],
    ['Thailand', 'Nov - Mar (Cool, dry high season)', 'Apr - May (Songkran water festival)', 'Jun - Oct (Green monsoon season)', 'Songkran Water Festival (Apr 13-15); Loy Krathong (Nov)', 'Bachelors, Couples, Families, Shopping enthusiasts', 'Warm tropical 28-33°C; monsoon sees short tropical downpours'],
    ['Dubai & UAE', 'Nov - Mar (Perfect outdoor weather)', 'Apr & Oct (Warm shoulder season)', 'May - Sep (Extreme desert summer >42°C)', 'Dubai Shopping Festival (Dec-Jan); New Year Fireworks', 'Families, Luxury shoppers, Corporate/MICE', 'Winter 20-28°C; summer scorching indoor-only travel'],
    ['Vietnam', 'Nov - Apr (Dry, sunny across North/South)', 'May & Sep - Oct (Transition months)', 'Jun - Aug (Rainy season, typhoon alerts)', 'Tet Lunar New Year (Jan/Feb); Halong Bay cruising (Oct-Apr)', 'Backpackers, Couples, Culture enthusiasts', 'Cool pleasant in North; warm tropical in South'],
    ['Bali', 'Apr - Oct (Dry season, best diving/surfing)', 'Mar & Nov (Shoulder months)', 'Dec - Feb (Rainy season, high Christmas peak)', 'Nyepi Balinese New Year (Mar); Bali Arts Festival (Jun/Jul)', 'Honeymooners, Digital nomads, Culture seekers', 'Warm tropical 27-31°C year round; wet monsoon Dec-Feb']
].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','));

fs.writeFileSync('seo-data/seasonality.csv', [seasonalityHeader, ...seasonalityData].join('\n'), 'utf8');
console.log('Saved seo-data/seasonality.csv');

// 5. Destination Master CSV
const destMasterHeader = [
    'Destination',
    'Country / Region',
    'Scope (B1/B2/B3/On-Site)',
    'Sell Status',
    'Typical Durations',
    'Best Months',
    'Visa / Permit Requirement',
    'Typical Routing from Raipur (RPR) / CG',
    'Seasonality Index',
    'Demand Index (1-100)',
    'Priority Tier',
    'Existing Pages Count',
    'Missing Architecture Elements'
].join(',');

const destMasterData = [
    ['Manali Kasol (Flagship ₹5,999)', 'Himachal Pradesh, India', 'B2 Sprint', 'Confirmed Live', '3N/4D, 4N/5D', 'Oct - Jun', 'None (Green Tax only)', 'Train/Flight to Delhi -> Overnight AC Traveller to Manali', 'Peak Winter & Summer', '95', 'Tier 1 Flagship', '13', 'Fixed calendar schema, mobile sticky CTA, supporting winter guides'],
    ['Haridwar Kumbh Mela', 'Uttarakhand, India', 'B2 Sprint', 'Confirmed Date-Critical', '1N/2D, 2N/3D, 3N/4D', 'Jan 14 - Apr 20, 2027', 'E-Pass / Registration if mandated by Admin', 'Direct trains from Durg/Raipur to Haridwar/Rishikesh (HW/RKSH)', 'Event Sprint', '98', 'Tier 1 Critical', '48', 'Year update, Hindi encoding fix, senior citizen & B2B booking forms'],
    ['Canton Fair (Guangzhou)', 'Guangdong, China', 'B1 Confirmed', 'Confirmed B2B Trade', '4N/5D, 5N/6D, 7N/8D', 'Apr & Oct (Fixed Sessions)', 'China M-Visa (Business) with CFTC Invitation', 'RPR -> CCU/DEL/BKK -> CAN (Guangzhou Baiyun)', 'Biannual Peak', '88', 'Tier 1 B2B', '0', 'Full hub, phase guides, visa walkthrough, B2B trader inquiry quote form'],
    ['Thailand (Pattaya/Phuket/Bangkok)', 'Thailand', 'B1 Confirmed', 'Confirmed Outbound', '4N/5D, 5N/6D, 6N/7D', 'Nov - Apr', 'Visa-Free (30 Days) + TDAC Arrival Card', 'RPR -> CCU/DEL -> BKK/DMK/HKT', 'Winter Peak', '92', 'Tier 1', '53', 'Deepen thin attraction pages, family/honeymoon itineraries, GST/TCS pricing'],
    ['Dubai & Abu Dhabi', 'United Arab Emirates', 'B1 Confirmed', 'Confirmed Outbound', '4N/5D, 5N/6D', 'Nov - Mar', 'eVisa (30/60 Days pre-arranged)', 'RPR -> DEL/BOM -> DXB/SHJ/AUH', 'Winter Peak', '90', 'Tier 1', '15', 'Abu Dhabi combo itinerary, corporate offsite quoting, day-by-day timing'],
    ['Vietnam (Hanoi/Da Nang/Phu Quoc)', 'Vietnam', 'B1 Confirmed', 'Confirmed Outbound', '5N/6D, 7N/8D', 'Nov - Apr', 'e-Visa (30/90 Days online)', 'RPR -> CCU/DEL -> HAN/SGN/DAD', 'Winter & Spring', '85', 'Tier 1', '1', 'Dedicated country hub, Indian food guide, Halong Bay & Bana Hills breakdown'],
    ['Bali (Ubud/Kuta/Nusa Penida)', 'Indonesia', 'B1 Confirmed', 'Confirmed Outbound', '4N/5D, 5N/6D, 6N/7D', 'Apr - Oct', 'Visa on Arrival (VoA) / e-VoA (IDR 500k)', 'RPR -> DEL/BOM/KUL -> DPS', 'Dry Season Peak', '86', 'Tier 1', '5', 'Nusa Penida speed boat guide, honeymoon candlelight pool villa package'],
    ['Kashmir (Srinagar/Gulmarg/Pahalgam)', 'Jammu & Kashmir, India', 'B1 Confirmed', 'Confirmed Domestic', '4N/5D, 5N/6D', 'Dec - Feb & Apr - Jun', 'None', 'RPR -> DEL -> SXR (Srinagar)', 'Winter & Summer Peak', '89', 'Tier 1', '4', 'Houseboat vs Hotel category clarity, Gulmarg Gondola phase 1/2 booking advice'],
    ['Ladakh (Leh/Nubra/Pangong)', 'Ladakh, India', 'B1 Confirmed', 'Confirmed Domestic', '5N/6D, 6N/7D, 7N/8D', 'Jun - Sep', 'Inner Line Permit (LAHDCL online)', 'RPR -> DEL -> IXL (Leh)', 'Summer Peak', '87', 'Tier 1', '17', 'Altitude acclimatization day 1 rules, oxygen cylinder safety details'],
    ['Goa (North & South)', 'Goa, India', 'B1 Confirmed', 'Confirmed Domestic', '3N/4D, 4N/5D', 'Oct - Feb', 'None', 'RPR -> Direct IndiGo flight to GOI/GOX', 'Winter & Party Peak', '91', 'Tier 1', '17', 'Consolidate 17 overlapping pages into master hub, budget vs luxury tiers'],
    ['Char Dham (Yamunotri/Gangotri/Kedar/Badri)', 'Uttarakhand, India', 'B1 Confirmed', 'Confirmed Domestic', '10N/11D, 11N/12D', 'May - Jun & Sep - Oct', 'Mandatory Uttarakhand Tourism biometric epass', 'Direct trains from Durg/Raipur to Haridwar -> Road transport', 'Spiritual High Peak', '93', 'Tier 1', '11', 'Medical fitness advisories, helicopter vs trekking options, VIP darshan passes'],
    ['Kerala (Munnar/Thekkady/Alleppey)', 'Kerala, India', 'B1 Confirmed', 'Confirmed Domestic', '4N/5D, 5N/6D', 'Sep - Mar', 'None', 'RPR -> BLR/MAA -> COK (Cochin)', 'Winter & Wellness', '84', 'Tier 1', '3', 'Houseboat overnight stay specifications, private vs sharing houseboat clarity'],
    ['Puri (Jagannath Dham/Konark/Chilika)', 'Odisha, India', 'B1 Confirmed', 'Confirmed Domestic', '2N/3D, 3N/4D', 'Oct - Mar & Rath Yatra (Jul)', 'None', 'Direct overnight trains from Durg/Raipur/Bilaspur to Puri (PURI)', 'Weekend & Religious', '82', 'Tier 2', '0', 'Full package page, panda/darshan guidelines, Chilika dolphin boat add-on'],
    ['Almaty', 'Kazakhstan', 'B1 Confirmed', 'Confirmed Outbound', '4N/5D, 5N/6D', 'Dec - Mar & May - Sep', 'Visa-Free (14 Days) + QazETA', 'RPR -> DEL -> ALA (Almaty)', 'Winter & Spring', '76', 'Tier 2', '0', 'Shymbulak ski resort guide, Indian dining options in Almaty, winter clothing tips'],
    ['Seychelles', 'Seychelles', 'B1 Confirmed', 'Confirmed Outbound', '4N/5D, 5N/6D', 'Year-round (Apr-May & Oct-Nov best)', 'Visa-Free (Visitor Permit on Arrival)', 'RPR -> BOM -> SEZ (Mahe)', 'Luxury Island', '72', 'Tier 2', '0', 'Island hopping (Mahe/Praslin/La Digue), catamaran transfers, luxury honeymoon'],
    ['Macau', 'China SAR', 'B1 Confirmed', 'Confirmed Outbound', '3N/4D, 4N/5D', 'Oct - Dec & Spring', 'Visa-Free (30 Days)', 'RPR -> HKG -> TurboJet Ferry to Macau', 'Casino & Heritage', '70', 'Tier 2', '0', 'Hong Kong + Macau combo itinerary, Cotai strip resort options, heritage walking tour'],
    ['Philippines (Boracay/El Nido/Cebu)', 'Philippines', 'B1 Confirmed', 'Confirmed Outbound', '5N/6D, 6N/7D', 'Nov - May', 'e-Visa / Tourist Visa', 'RPR -> DEL/BKK/SIN -> MNL', 'Island Beach', '68', 'Tier 2', '0', 'Island hopping logistics, white sand beach comparisons, visa checklist'],
    ['Japan (Tokyo/Mt Fuji/Kyoto/Osaka)', 'Japan', 'B1 Confirmed', 'Confirmed Outbound', '6N/7D, 8N/9D', 'Mar - May (Cherry Blossom) & Oct - Nov', 'e-Visa (VFS Global submission)', 'RPR -> DEL -> NRT/HND', 'High Ticket Luxury', '78', 'Tier 2', '0', 'JR Shinkansen bullet train pass guide, vegetarian dining survival tips, visa guidance'],
    ['Malaysia (Kuala Lumpur/Genting/Langkawi)', 'Malaysia', 'B1 Confirmed', 'Confirmed Outbound', '4N/5D, 5N/6D', 'Year-round', 'Visa-Free in 2026; eVISA from 2027', 'RPR -> CCU/DEL -> KUL', 'Budget Family Outbound', '81', 'Tier 2', '2', 'Upgrade thin Bilaspur route to master country hub, Genting cable car inclusions'],
    ['Singapore', 'Singapore', 'B1 Confirmed', 'Confirmed Outbound', '3N/4D, 4N/5D', 'Year-round', 'Paper Visa / eVisa via Agent', 'RPR -> CCU/DEL/BOM -> SIN', 'Family & Cruise', '85', 'Tier 2', '4', 'Universal Studios & Sentosa pass breakdown, Marina Bay Sands observation deck'],
    ['Rajasthan (Jaipur/Udaipur/Jodhpur/Jaisalmer)', 'Rajasthan, India', 'B1 Confirmed', 'Confirmed Domestic', '4N/5D, 6N/7D', 'Oct - Mar', 'None', 'Direct train from Durg (Durg-Jaipur Exp) or RPR -> JAI', 'Heritage Winter', '86', 'Tier 2', '1', 'Desert camp luxury tent rules, heritage fort tickets, royal palace dining add-on'],
    ['Gujarat (Dwarka/Somnath/Statue of Unity)', 'Gujarat, India', 'B1 Confirmed', 'Confirmed Domestic', '4N/5D, 5N/6D', 'Oct - Mar', 'None', 'Direct trains from Raipur/Bilaspur to Ahmedabad/Rajkot', 'Spiritual & Heritage', '75', 'Tier 2', '0', 'Dwarkadhish darshan timings, Somnath evening light & sound show, Kevadia stay']
].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','));

fs.writeFileSync('seo-data/destination_master.csv', [destMasterHeader, ...destMasterData].join('\n'), 'utf8');
console.log('Saved seo-data/destination_master.csv');
