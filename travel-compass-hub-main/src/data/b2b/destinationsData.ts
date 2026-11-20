export interface B2BItineraryDay {
    day: number;
    title: string;
    description: string;
    meals: string;
    stay: string;
}

export interface B2BSectorData {
    id: string;
    name: string;
    region: string;
    category: 'himalayan' | 'spiritual' | 'island' | 'international' | 'heritage';
    badge: string;
    heroImage: string;
    tagline: string;
    subheading: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    canonicalUrl: string;
    b2bNetIndicator: string;
    sla: string;
    bestSeason: string;
    idealGroupSize: string;
    groundAssets: {
        title: string;
        description: string;
    }[];
    hotelInventory: {
        tier: string;
        locations: string;
        highlights: string;
    }[];
    b2bExclusives: string[];
    foodSupport: string;
    itineraryDuration: string;
    sampleItinerary: B2BItineraryDay[];
    netRateTiers: {
        packageType: string;
        vehicleType: string;
        hotelCategory: string;
        estimatedNet: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const b2bSectorsData: Record<string, B2BSectorData> = {
    chardham: {
        id: 'chardham',
        name: 'Chardham Yatra (Uttarakhand)',
        region: 'Yamunotri • Gangotri • Kedarnath • Badrinath',
        category: 'spiritual',
        badge: 'Direct Fleet & Helipad Allotments',
        heroImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&q=80&w=1600',
        tagline: 'Premier B2B Chardham Yatra DMC & Ground Handling',
        subheading: 'Reliable Uttarakhand wholesale supplier offering company-contracted mountain Tempo Travellers, Swiss cottages, helicopter coordination, and emergency oxygen backup.',
        metaTitle: 'B2B Chardham Yatra DMC & Wholesale Net Rates | Rudraksh Safar',
        metaDescription: 'Partner with India\'s trusted B2B Chardham DMC. Direct 27-seater luxury Tempo Travellers, Phata/Sirsi helicopter slots, pre-contracted Kedarnath camps, and 100% white-label ground support.',
        keywords: 'B2B Chardham Yatra DMC, Kedarnath helicopter B2B booking, Chardham tour operator net rates, Chardham wholesale travel partner, Haridwar Tempo Traveller B2B',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/chardham',
        b2bNetIndicator: 'Starting Net from ₹14,500/pax (Ex-Haridwar/Rishikesh)',
        sla: '2 Hours (Instant Yatra Season Allocation)',
        bestSeason: 'May - June (Pre-Monsoon) & September - October (Post-Monsoon)',
        idealGroupSize: '12 to 26 Pax (Tempo Batch) or Private Family FIT',
        groundAssets: [
            {
                title: '27-Seater 2x2 Pushback Luxury Tempo Travellers',
                description: 'Company-contracted pushback AC Tempos stationed directly at Haridwar Railway Station and Dehradun Jolly Grant Airport for smooth mountain transit.'
            },
            {
                title: '4x4 Commercial Mountain Fleet (Bolero / Scorpio / Crysta)',
                description: 'High-clearance all-wheel drive vehicles suited for high-altitude steep gradients between Joshimath, Badrinath, and Gaurikund.'
            },
            {
                title: 'Certified Mountain Yatra Drivers',
                description: 'Drivers with mandatory 7+ years of accident-free Himalayan ghat driving experience, trained in basic first-aid and mountain road etiquette.'
            }
        ],
        hotelInventory: [
            {
                tier: 'Swiss Luxury Cottages & Deluxe Camps',
                locations: 'Guptkashi, Phata, Sitapur, Rampur (Kedarnath Base)',
                highlights: 'Attached private Western bathrooms, geyser running hot water, thermal blankets, and backup power generators.'
            },
            {
                tier: 'Standard & Deluxe Pilgrim Hotels',
                locations: 'Barkot, Uttarkashi, Joshimath, Badrinath',
                highlights: 'Walking distance to temple markets, pure vegetarian dining halls, and clean sanitized beddings.'
            }
        ],
        b2bExclusives: [
            'Helicopter charter ticket liaison from Phata, Sirsi, and Guptkashi helipads',
            'Priority Biometric & Uttarakhand Tourism online portal registration facilitation',
            'Pre-arranged pony, palki, and kandi porter bookings at Gaurikund base',
            'Medical-grade portable oxygen cylinders and fingertip pulse oximeter provided in every vehicle',
            '100% white-labeled placards with your travel agency logo at Haridwar pickup'
        ],
        foodSupport: 'Guaranteed 100% Pure Vegetarian & Sattvic Jain cuisine (no onion, no garlic) throughout Uttarakhand properties.',
        itineraryDuration: '10 Days / 9 Nights (Ex-Haridwar Complete Yatra)',
        sampleItinerary: [
            { day: 1, title: 'Haridwar / Rishikesh to Barkot', description: 'Scenic drive along Yamuna valley with stop at Kempty Falls. Check-in at Barkot deluxe camps. Evening briefing.', meals: 'Dinner', stay: 'Barkot Swiss Cottages' },
            { day: 2, title: 'Barkot - Yamunotri Darshan - Barkot', description: 'Early morning drive to Janki Chatti. 6 km trek/pony to Yamunotri Temple. Holy dip in Surya Kund and Divya Shila pooja. Return to Barkot.', meals: 'Breakfast & Dinner', stay: 'Barkot Swiss Cottages' },
            { day: 3, title: 'Barkot to Uttarkashi (Kashi Vishwanath)', description: 'Scenic drive to Uttarkashi along Bhagirathi River. Evening darshan at the ancient Kashi Vishwanath Temple and Shakti Temple.', meals: 'Breakfast & Dinner', stay: 'Uttarkashi Deluxe Hotel' },
            { day: 4, title: 'Uttarkashi - Gangotri Dham - Uttarkashi', description: 'Drive via Harsil Valley apple orchards. Holy dip in Bhagirathi and Gangotri Temple darshan. Return drive to Uttarkashi.', meals: 'Breakfast & Dinner', stay: 'Uttarkashi Deluxe Hotel' },
            { day: 5, title: 'Uttarkashi to Guptkashi / Phata', description: 'Long scenic transit via Mandakini river confluence at Tilwara. Check-in at pre-booked Kedarnath base camps. Helicopter ticket reconfirmation.', meals: 'Breakfast & Dinner', stay: 'Phata / Guptkashi Swiss Camps' },
            { day: 6, title: 'Guptkashi to Kedarnath Ji Darshan', description: 'Transfer to Sonprayag/Helipad. Heli or 16 km trek to holy Kedarnath shrine. Evening attendance at divine Kedarnath Temple Aarti.', meals: 'Breakfast & Dinner', stay: 'Kedarnath Top Camp / Base Hotel' },
            { day: 7, title: 'Kedarnath to Guptkashi / Pipalkoti', description: 'Morning temple darshan at dawn. Descend to Sonprayag/helipad. Transfer to Pipalkoti hotel for overnight stay and rest.', meals: 'Breakfast & Dinner', stay: 'Pipalkoti Deluxe Hotel' },
            { day: 8, title: 'Pipalkoti to Badrinath Ji', description: 'Drive via Joshimath and Vishnuprayag. Arrive Badrinath, holy bath in Tapt Kund, darshan of Lord Badri Vishal, visit Mana Village (India\'s first village).', meals: 'Breakfast & Dinner', stay: 'Badrinath Hotel' },
            { day: 9, title: 'Badrinath to Srinagar / Rudraprayag', description: 'Morning maha-abhishek darshan. Return drive witnessing Rudraprayag & Karnaprayag sangams. Overnight at riverside hotel.', meals: 'Breakfast & Dinner', stay: 'Srinagar / Rudraprayag Resort' },
            { day: 10, title: 'Rudraprayag to Rishikesh / Haridwar Drop', description: 'Drive past Devprayag (Alaknanda & Bhagirathi confluence). Rishikesh Ram Jhula sightseeing and drop at Haridwar Railway Station.', meals: 'Breakfast', stay: 'Departure' }
        ],
        netRateTiers: [
            { packageType: 'Budget Group Series (Fixed Departure)', vehicleType: '27-Seater AC Pushback Tempo', hotelCategory: 'Standard 2-Star / Deluxe Camps', estimatedNet: '₹14,500 - ₹17,500 / pax' },
            { packageType: 'Comfort FIT Private (Min 6 Pax)', vehicleType: 'Innova Crysta AC', hotelCategory: 'Deluxe 3-Star & Swiss Cottages', estimatedNet: '₹22,000 - ₹26,500 / pax' },
            { packageType: 'Luxury Helicopter Package (Same Day / 2 Nights)', vehicleType: 'Private Heli Shuttle + VIP Darshan', hotelCategory: 'Premium Resort & Helipad VIP Transfer', estimatedNet: '₹95,000 - ₹1,35,000 / pax' }
        ],
        faqs: [
            { question: 'How do you coordinate Kedarnath helicopter tickets for travel agents?', answer: 'We coordinate passenger slots via authorized government IRCTC helicopter portals and designated heli-operators at Phata, Sirsi, and Guptkashi. We manage biometric registration alignment and flight slot tracking so your guests experience zero confusion.' },
            { question: 'What happens if roads are blocked by landslides during the yatra?', answer: 'Our localized ground desk in Haridwar, Rishikesh, and Joshimath maintains constant communication with district administration and BRO. If blockages occur, we adjust hotel night halts along the route with minimal cancellation charges and re-route transport immediately.' },
            { question: 'Can we book individual seats on fixed departure groups?', answer: 'Yes. We run regular fixed group departures from May through October where travel agents can book single, twin, or family seats at guaranteed group net tariffs without minimum passenger clauses.' }
        ]
    },

    kashmir: {
        id: 'kashmir',
        name: 'Kashmir Valley (J&K)',
        region: 'Srinagar • Gulmarg • Pahalgam • Sonmarg • Doodhpathri',
        category: 'himalayan',
        badge: 'Private Srinagar Cab Fleet & Houseboats',
        heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=1600',
        tagline: 'Kashmir B2B Ground Handling & Wholesale Supplier',
        subheading: 'Direct Srinagar-based ground management offering white-label Innova/Tempo fleets, Dal Lake houseboats, and Gulmarg Gondola slot assistance.',
        metaTitle: 'Kashmir B2B Tour Operator & DMC Net Rates | Rudraksh Safar',
        metaDescription: 'Direct B2B Kashmir DMC for travel agents. Wholesale net rates for Srinagar hotels, luxury Dal Lake houseboats, Gulmarg Gondola assistance, and 80+ white-label commercial cabs.',
        keywords: 'Kashmir B2B tour operator, Kashmir DMC for travel agents, Srinagar B2B cab rates, Gulmarg Gondola ticket B2B, Dal Lake houseboat wholesale booking',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/kashmir',
        b2bNetIndicator: 'Starting Net from ₹12,999/pax (Ex-Srinagar Airport SXR)',
        sla: '2 to 3 Hours',
        bestSeason: 'March - May (Spring / Tulip), June - August (Summer), Dec - Feb (Snow)',
        idealGroupSize: 'Couples (FIT), Families (4-8 Pax), or Group Batches (12-30 Pax)',
        groundAssets: [
            {
                title: '80+ White-Label Commercial Cabs at Srinagar Airport',
                description: 'Clean, verified Innova Crystas, Toyota Etios, and Tempo Travellers operating directly under your agency\'s name.'
            },
            {
                title: 'Local Transport Union Liaison (Sonmarg & Pahalgam)',
                description: 'Seamless coordination for local union cabs at Sonmarg (Zero Point) and Pahalgam (Aru/Betaab/Chandanwari) preventing passenger extortion.'
            },
            {
                title: 'Winter Snow-Chain Equipped Vehicles',
                description: 'Vehicles outfitted with heavy snow chains for safe Tangmarg to Gulmarg mountain climbs during winter snowfall.'
            }
        ],
        hotelInventory: [
            {
                tier: 'Super Deluxe & Premium Dal Lake Houseboats',
                locations: 'Dal Lake & Nigeen Lake, Srinagar',
                highlights: 'Carved walnut-wood interiors, attached private bathrooms with modern fittings, Kashmiri carpets, and private shikara transfers.'
            },
            {
                tier: '3-Star & 4-Star Boutique Alpine Resorts',
                locations: 'Srinagar (Rajbagh / Boulevard), Gulmarg, Pahalgam',
                highlights: 'Central heating, electric heated blankets, mountain views, and buffet dining halls.'
            }
        ],
        b2bExclusives: [
            'Gulmarg Phase 1 & Phase 2 Gondola ticket booking guidance and slot tracking',
            '1-Hour complimentary Shikara ride on Dal Lake included in all standard B2B itineraries',
            'Srinagar Airport arrival meet-and-greet with unbranded placard featuring your travel agency logo',
            'Dedicated 24/7 on-ground operations supervisor stationed in Srinagar for emergency support'
        ],
        foodSupport: 'Authentic Kashmiri Wazwan, pure North Indian vegetarian, and dedicated Jain meal arrangements.',
        itineraryDuration: '6 Days / 5 Nights (Ex-Srinagar Comprehensive Valley)',
        sampleItinerary: [
            { day: 1, title: 'Arrival Srinagar Airport - Houseboat Check-in & Shikara', description: 'Warm welcome at SXR airport with your agency placard. Transfer to Dal Lake houseboat. Sunset 1-hour Shikara ride covering floating market and Char Chinar.', meals: 'Dinner', stay: 'Dal Lake Super Deluxe Houseboat' },
            { day: 2, title: 'Srinagar to Gulmarg Day Trip (Meadow of Flowers)', description: 'Scenic drive to Gulmarg via Tangmarg pine forests. Board Gulmarg Gondola Phase 1 (Kongdoori) & Phase 2 (Apharwat Peak 13,780 ft). Snow activities. Return to Srinagar.', meals: 'Breakfast & Dinner', stay: 'Srinagar Hotel' },
            { day: 3, title: 'Srinagar to Pahalgam (Valley of Shepherds)', description: 'Drive past saffron fields of Pampore and Awantipora ruins. Arrive Pahalgam along Lidder River. Local sightseeing of Betaab Valley, Aru Valley, and Chandanwari.', meals: 'Breakfast & Dinner', stay: 'Pahalgam Riverside Resort' },
            { day: 4, title: 'Pahalgam to Srinagar & Mughal Gardens', description: 'Morning leisure by Lidder river. Return drive to Srinagar. Afternoon guided tour of Nishat Bagh, Shalimar Bagh, and Shankaracharya Temple hilltop.', meals: 'Breakfast & Dinner', stay: 'Srinagar Hotel' },
            { day: 5, title: 'Day Excursion to Sonmarg (Meadow of Gold)', description: 'Full day excursion to Sonmarg along Sindh river. Optional pony ride or union cab to Thajiwas Glacier and Zero Point snow line. Return to Srinagar for shopping.', meals: 'Breakfast & Dinner', stay: 'Srinagar Hotel' },
            { day: 6, title: 'Srinagar Airport Departure Drop', description: 'Leisurely breakfast. Transfer to Srinagar International Airport for return flight with memorable Kashmiri souvenirs.', meals: 'Breakfast', stay: 'Departure' }
        ],
        netRateTiers: [
            { packageType: 'Budget FIT (Sedan / Etios)', vehicleType: 'Toyota Etios / Dzire AC', hotelCategory: 'Standard 3-Star + Deluxe Houseboat', estimatedNet: '₹12,999 - ₹15,500 / pax' },
            { packageType: 'Deluxe Family (Innova Crysta)', vehicleType: 'Innova Crysta 6+1 AC', hotelCategory: 'Premium 4-Star + Luxury Houseboat', estimatedNet: '₹17,800 - ₹22,500 / pax' },
            { packageType: 'Group Series (Min 12 Pax)', vehicleType: '17-Seater Luxury Tempo Traveller', hotelCategory: 'Handpicked 3-Star / 4-Star Properties', estimatedNet: '₹11,499 - ₹13,999 / pax' }
        ],
        faqs: [
            { question: 'How do you handle Gulmarg Gondola ticket shortages?', answer: 'We advise travel agents to submit passenger ID details at least 20-30 days prior during peak tourist windows. Our operations team monitors ticket releases on the official portal to secure Phase 1 and Phase 2 slots.' },
            { question: 'Are prepaid mobile SIM cards functional in Kashmir?', answer: 'No, Indian prepaid SIM cards do not work in J&K due to telecom regulations. We advise guests to carry postpaid connections (Jio, Airtel, BSNL), or our airport representative assists in procuring local postpaid SIMs.' },
            { question: 'How are local taxi union disputes handled in Pahalgam and Sonmarg?', answer: 'Our drivers drop guests directly at the authorized union taxi stands in Sonmarg and Pahalgam and assist with transparent token procurement, ensuring your clients are never harassed by unverified local touts.' }
        ]
    },

    ladakh: {
        id: 'ladakh',
        name: 'Leh Ladakh',
        region: 'Leh • Nubra Valley • Pangong Lake • Hanle • Khardung La',
        category: 'himalayan',
        badge: 'High-Altitude 4x4 Fleet & Oxygen Fitted',
        heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=1600',
        tagline: 'Ladakh Ground DMC & High-Altitude Specialist',
        subheading: 'Direct Leh-based ground operator with 4WD vehicles, acclimatization protocols, instant Inner Line Permits, and luxury Pangong/Nubra camps.',
        metaTitle: 'Ladakh B2B DMC & Ground Handling Net Rates | Rudraksh Safar',
        metaDescription: 'Trusted B2B Ladakh DMC for travel agents. Direct 4x4 Innova and Tempo fleet, rapid Inner Line Permits, luxury Pangong Lake camps, and medical oxygen in every vehicle.',
        keywords: 'Ladakh B2B DMC, Leh Ladakh ground handling agent, Pangong Lake luxury camp B2B, Ladakh Inner Line Permit B2B, Leh cab net rates',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/ladakh',
        b2bNetIndicator: 'Starting Net from ₹15,500/pax (Ex-Leh Airport IXL)',
        sla: '3 Hours',
        bestSeason: 'May to October (Roads open & pleasant weather)',
        idealGroupSize: '6 to 12 Pax (Innova / 4WD Tempo) or Custom FIT',
        groundAssets: [
            {
                title: '100% Ladakh-Union Compliant Fleet',
                description: 'Registered Innova Crystas, Scorpios, and 4WD 12-seater Tempos authorized to ply across all Ladakh internal circuits.'
            },
            {
                title: 'High-Altitude Trained Drivers',
                description: 'Local veteran mountain drivers trained in high-pass safety, vehicle maintenance, and Acute Mountain Sickness (AMS) response.'
            },
            {
                title: 'On-Board Medical Oxygen Support',
                description: 'Medical-grade oxygen cylinder and fingertip pulse oximeter provided in every vehicle for travel across Khardung La (17,982 ft) and Chang La.'
            }
        ],
        hotelInventory: [
            {
                tier: 'Central Leh Boutique Properties (3-Star & 4-Star)',
                locations: 'Fort Road / Upper Changspa, Leh',
                highlights: 'Central heating, generator power backup, oxygen assistance, Wi-Fi, and elevator facilities.'
            },
            {
                tier: 'Luxury Swiss Glamping Camps',
                locations: 'Hunder (Nubra Valley) & Spangmik / Lukung (Pangong Lake)',
                highlights: 'Attached private western bathrooms, double-layered weatherproof canvas, hot water, and panoramic mountain/lake views.'
            }
        ],
        b2bExclusives: [
            'Inner Line Permit (ILP) and Ladakh Environmental Fee issued in 24 hours',
            'Hanle Dark Sky Reserve and Umling La (19,024 ft) military pass coordination',
            'Mandatory acclimatization briefing on Day 1 to ensure zero AMS medical dropouts',
            'Standby relief vehicle stationed in Leh for quick replacement during breakdown'
        ],
        foodSupport: 'Warm, high-altitude balanced buffet meals with dedicated Gujarati and Jain dining arrangements at remote Nubra/Pangong camps.',
        itineraryDuration: '6 Days / 5 Nights (Leh, Nubra, Pangong Classic Circuit)',
        sampleItinerary: [
            { day: 1, title: 'Arrival Leh Airport - Mandatory Acclimatization', description: 'Arrival at Kushok Bakula Rimpochee Airport (IXL). Warm welcome with white-label placard. Transfer to hotel. Complete rest for 24-hr altitude acclimatization. Evening short stroll to Leh Market.', meals: 'Dinner', stay: 'Leh Hotel' },
            { day: 2, title: 'Leh Local Sightseeing & Monasteries', description: 'Visit Shanti Stupa, Leh Palace, Hall of Fame (War Memorial), Magnetic Hill, Gurudwara Pathar Sahib, and Indus-Zanskar Sangam at Nimmu.', meals: 'Breakfast & Dinner', stay: 'Leh Hotel' },
            { day: 3, title: 'Leh to Nubra Valley via Khardung La Pass (17,982 ft)', description: 'Ascend the world\'s highest motorable pass Khardung La. Descend into Nubra Valley. Visit Diskit Monastery (32m Buddha Statue). Experience double-humped Bactrian camel safari at Hunder sand dunes.', meals: 'Breakfast & Dinner', stay: 'Nubra Valley Luxury Glamping' },
            { day: 4, title: 'Nubra Valley to Pangong Lake via Shyok Route', description: 'Scenic drive along rugged Shyok River canyon. Arrive at the mesmerizing blue waters of Pangong Lake (14,270 ft). Sunset photography by the lake.', meals: 'Breakfast & Dinner', stay: 'Pangong Lake Swiss Cottages' },
            { day: 5, title: 'Pangong Lake to Leh via Chang La Pass (17,688 ft)', description: 'Witness sunrise over Pangong Lake. Return drive to Leh crossing mighty Chang La pass. Visit Thiksey Monastery and Shey Palace en route. Evening souvenir shopping.', meals: 'Breakfast & Dinner', stay: 'Leh Hotel' },
            { day: 6, title: 'Leh Airport Departure Drop', description: 'Early morning transfer to Leh Airport for return flight over snow-capped Himalayan ranges.', meals: 'Breakfast', stay: 'Departure' }
        ],
        netRateTiers: [
            { packageType: 'Standard FIT (Innova Crysta - Min 6 Pax)', vehicleType: 'Innova Crysta AC', hotelCategory: 'Deluxe 3-Star + Premium Tents', estimatedNet: '₹15,500 - ₹19,000 / pax' },
            { packageType: 'Premium Luxury FIT (Min 4 Pax)', vehicleType: 'Innova Crysta 4WD', hotelCategory: 'Boutique 4-Star + Luxury Geodesic Domes', estimatedNet: '₹24,500 - ₹31,000 / pax' },
            { packageType: 'B2B Group Batch (Tempo - Min 12 Pax)', vehicleType: '12-Seater 4WD Tempo Traveller', hotelCategory: 'Handpicked Handled Properties', estimatedNet: '₹13,999 - ₹16,500 / pax' }
        ],
        faqs: [
            { question: 'Why is Day 1 full rest mandatory in all your Ladakh itineraries?', answer: 'Leh is situated at 11,500 feet. Flying in directly causes immediate barometric pressure drops. Day 1 rest prevents Acute Mountain Sickness (AMS), ensuring your travelers remain healthy and enjoy the rest of the tour without hospitalization.' },
            { question: 'Can outside vehicles (from Delhi/Manali/Srinagar) ply inside Ladakh?', answer: 'No. As per Ladakh Taxi Union regulations, outside commercial cabs can only drop passengers at Leh. All internal sightseeing (Nubra, Pangong, Hanle, Tso Moriri) must be operated in Ladakh-registered cabs, which we supply directly.' },
            { question: 'Do you arrange Hanle and Umling La permits for Indian nationals?', answer: 'Yes, we process Hanle Dark Sky Reserve and Umling La military check-post permits for Indian citizens within 24 hours of receiving clear Aadhaar copies.' }
        ]
    },

    manali: {
        id: 'manali',
        name: 'Manali & Kasol (Himachal Pradesh)',
        region: 'Manali • Solang Valley • Atal Tunnel • Sissu • Kasol',
        category: 'himalayan',
        badge: 'Daily Volvo Series & Group Series',
        heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1600',
        tagline: 'High-Volume Manali B2B Ground Operator',
        subheading: 'Himachal ground partner offering daily AC Volvo seats, riverside Swiss camps, Rohtang/Atal Tunnel permits, and DJ bonfire nights.',
        metaTitle: 'Manali B2B Tour Operator & Volvo Series Net Rates | Rudraksh Safar',
        metaDescription: 'Direct B2B Manali DMC for travel agents. Daily luxury AC Volvo series from Delhi, riverside cottages, Atal Tunnel permits, Kasol camping, and student group handling.',
        keywords: 'Manali B2B tour operator, Manali Volvo package net rates, Himachal DMC for travel agents, Kasol camping B2B, Manali corporate offsite supplier',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/manali',
        b2bNetIndicator: 'Starting Net from ₹5,499/pax (Ex-Delhi/Chandigarh)',
        sla: '2 Hours (Instant PNR & Hotel Confirmation)',
        bestSeason: 'Year-round (Summer: May-June, Snow: Dec-Feb, Greenery: July-Oct)',
        idealGroupSize: 'FIT Couples, College Batches (20-100 Pax), Corporate Groups',
        groundAssets: [
            {
                title: 'Daily Block Seats on Luxury AC Volvo Coaches',
                description: 'Pre-bought daily Volvo seats from Majnu Ka Tilla / Kashmere Gate (Delhi) and Tribune Chowk (Chandigarh) directly to Manali Private Bus Stand.'
            },
            {
                title: 'Local 4x4 Mountain Fleet for Rohtang & Snow Points',
                description: 'Local 4x4 Gypsies and Innovas for Solang Valley adventure points, Atal Tunnel North Portal, and Sissu (Lahaul Valley).'
            },
            {
                title: 'Private Tempo Travellers for Group Series',
                description: 'Pushback 17-26 seater Tempos for corporate offsites, college student trips, and extended family gatherings.'
            }
        ],
        hotelInventory: [
            {
                tier: 'Riverside 3-Star & 4-Star Mountain Resorts',
                locations: 'Prini, Aleo, and Old Manali',
                highlights: 'Balconies overlooking Beas River and snow peaks, central heating, open lawn areas, and in-house buffet kitchens.'
            },
            {
                tier: 'Riverside Swiss Glamping Camps',
                locations: 'Kasol (Parvati Valley)',
                highlights: 'Attached private western toilets, riverside access, nightly bonfire areas, and acoustic music systems.'
            }
        ],
        b2bExclusives: [
            'DJ Night, bonfire, and evening snack setups included for college and youth group series',
            'Rohtang Pass NGT permits and Atal Tunnel snow-point passes coordinated seamlessly',
            'Unbranded white-label quotation PDF with your agency branding generated within 2 hours',
            'Solang Valley adventure sports combo net vouchers (Paragliding, Zorbing, Skiing)'
        ],
        foodSupport: 'Lavish multi-cuisine Indian buffets catering to student groups, North Indian families, and corporate gatherings.',
        itineraryDuration: '5 Days / 4 Nights (Ex-Delhi Volvo Series)',
        sampleItinerary: [
            { day: 1, title: 'Overnight Volvo from Delhi / Chandigarh to Manali', description: 'Board luxury AC multi-axle Volvo bus from Majnu Ka Tilla / Kashmere Gate (Delhi) in the evening. Overnight scenic highway journey.', meals: 'None', stay: 'Overnight in Volvo Coach' },
            { day: 2, title: 'Arrival Manali - Hotel Check-in & Local Sightseeing', description: 'Morning arrival at Manali bus stand. Transfer to hotel. Afternoon tour of Hadimba Devi Temple, Vashisht Hot Water Springs, Club House, and Tibetan Monastery. Evening walk on Mall Road.', meals: 'Dinner', stay: 'Manali Valley Resort' },
            { day: 3, title: 'Solang Valley & Atal Tunnel Excursion', description: 'Full day excursion to Solang Valley for paragliding, zorbing, and ropeway. Drive through the historic 9.02 km engineering marvel Atal Tunnel into Sissu (Lahaul Valley). Return to Manali.', meals: 'Breakfast & Dinner', stay: 'Manali Valley Resort' },
            { day: 4, title: 'Manali to Kullu, Kasol & Manikaran Sahib', description: 'Drive along Beas river. White-water river rafting in Kullu. Visit Kullu Shawl weaving factory. Drive to Kasol cafes and Manikaran Gurudwara hot springs. Evening DJ bonfire at Kasol/Manali.', meals: 'Breakfast & Dinner', stay: 'Manali Resort or Kasol Camp' },
            { day: 5, title: 'Shopping & Return Volvo to Delhi', description: 'Breakfast at hotel. Day free for shopping souvenirs on Old Manali street. In the evening, transfer to private bus stand to board return AC Volvo to Delhi/Chandigarh.', meals: 'Breakfast', stay: 'Overnight in Volvo' }
        ],
        netRateTiers: [
            { packageType: 'Budget Volvo Series (Quad Sharing - Youth)', vehicleType: 'AC Volvo + Shared Cab', hotelCategory: 'Standard 3-Star Valley Hotel', estimatedNet: '₹5,499 - ₹6,499 / pax' },
            { packageType: 'Comfort Family / Couple (Double Sharing)', vehicleType: 'AC Volvo + Private Alto/Dzire', hotelCategory: 'Deluxe 3-Star Resort (Balcony Room)', estimatedNet: '₹7,999 - ₹9,800 / pax' },
            { packageType: 'Luxury Himalayan Retreat (Private Innova)', vehicleType: 'Private Innova Crysta Ex-Delhi', hotelCategory: 'Premium 4-Star Riverside Luxury Resort', estimatedNet: '₹16,500 - ₹21,000 / pax' }
        ],
        faqs: [
            { question: 'What is the boarding point and schedule for your Delhi Volvos?', answer: 'Buses depart daily from Majnu Ka Tilla (near Vidhan Sabha Metro) and Kashmere Gate ISBT between 5:30 PM and 8:30 PM, arriving in Manali the following morning between 7:30 AM and 9:30 AM.' },
            { question: 'Can you handle college student trips of 100+ students?', answer: 'Yes. We routinely handle college groups of 50 to 250+ students. We provide dedicated chartered Volvo coaches, exclusive resort buyouts, DJ music nights, and round-the-clock safety coordination.' },
            { question: 'Is Rohtang Pass open year-round?', answer: 'No, Rohtang Pass is closed during heavy winter (typically November to May). During winter months, we route tourists through the Atal Tunnel to Solang Valley and Sissu for snow activities.' }
        ]
    },

    nainital: {
        id: 'nainital',
        name: 'Nainital & Jim Corbett (Uttarakhand)',
        region: 'Nainital • Bhimtal • Mukteshwar • Ramnagar (Corbett)',
        category: 'heritage',
        badge: 'Corbett Safari Permits & Kathgodam Fleet',
        heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=1600',
        tagline: 'Kumaon Ground DMC & Corbett Safari Supplier',
        subheading: 'Direct ground management for Nainital lake tours and Jim Corbett National Park open-jeep tiger safaris with corporate retreat setups.',
        metaTitle: 'Nainital & Jim Corbett B2B DMC | Wholesale Net Rates',
        metaDescription: 'Trusted B2B DMC for Nainital and Jim Corbett National Park. Advance open Gypsy tiger safari permits, lake-facing hotels, and Kathgodam fleet for travel agents.',
        keywords: 'Nainital B2B DMC, Jim Corbett safari booking B2B, Corbett luxury resort wholesale, Kathgodam cab net rates, Kumaon travel partner',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/nainital',
        b2bNetIndicator: 'Starting Net from ₹8,200/pax (Ex-Kathgodam / Delhi)',
        sla: '2 Hours',
        bestSeason: 'October to June (Corbett safari core zones open)',
        idealGroupSize: 'Families (4-8 Pax), Corporate Conferences (30-100 Pax)',
        groundAssets: [
            {
                title: 'Kathgodam & Delhi NCR Fleet',
                description: 'Private Dzires, Ertigas, Innova Crystas, and Urbanias handling arrivals at Kathgodam Railway Station and Delhi Airport.'
            },
            {
                title: 'Registered 4x4 Jim Corbett Forest Gypsies',
                description: 'Authorized open-top 4WD Gypsies with licensed forest department naturalists for wildlife game drives.'
            },
            {
                title: 'Corporate Pushback Coaches',
                description: 'Comfortable air-conditioned coaches for corporate conferences, dealer meets, and educational school excursions.'
            }
        ],
        hotelInventory: [
            {
                tier: 'Prime Mall Road Lake-Facing Hotels',
                locations: 'Nainital',
                highlights: 'Direct panoramic views of Naini Lake, walking distance to Mall Road boat club and Tibetan market.'
            },
            {
                tier: 'Sprawling Jungle Luxury Resorts',
                locations: 'Ramnagar (Jim Corbett National Park)',
                highlights: 'Swimming pools, riverside sit-outs by Kosi River, multi-cuisine dining, and large conference banquet halls.'
            }
        ],
        b2bExclusives: [
            'Advance Corbett Tiger Reserve safari slot booking (Bijrani, Jhirna, Dhela, Garjiya, Phato zones)',
            'Naini Lake boating coupons and Naina Devi ropeway ticket coordination',
            'Team-building rope activities and outdoor cocktail setups for corporate clients',
            'Mukteshwar Himalayan view point and Chauli Ki Jali adventure circuits'
        ],
        foodSupport: 'Kumaoni regional specialties alongside lavish North/South Indian buffets and live barbecue counters.',
        itineraryDuration: '5 Days / 4 Nights (Nainital Lake Tour + Corbett Safari)',
        sampleItinerary: [
            { day: 1, title: 'Kathgodam / Delhi to Nainital', description: 'Pickup from Kathgodam Station or Delhi. Scenic mountain drive to Nainital. Check-in at hotel. Evening boat ride on Naini Lake and visit Naina Devi Temple.', meals: 'Dinner', stay: 'Nainital Lake View Hotel' },
            { day: 2, title: 'Nainital Lake Tour & Viewpoints', description: 'Full day excursion to Bhimtal, Sattal, and Naukuchiatal. Visit Snow View Point by cable car and Lover\'s Point. Evening stroll on heritage Mall Road.', meals: 'Breakfast & Dinner', stay: 'Nainital Lake View Hotel' },
            { day: 3, title: 'Nainital to Jim Corbett (Ramnagar)', description: 'Morning drive to Ramnagar. Visit Corbett Waterfall and Garjiya Devi Temple en route. Check-in at jungle luxury resort. Afternoon relax by swimming pool.', meals: 'Breakfast & Dinner', stay: 'Corbett Jungle Resort' },
            { day: 4, title: 'Jim Corbett Open Gypsy Jungle Safari', description: 'Early morning 4x4 open Gypsy tiger safari in core forest zone (Bijrani/Jhirna/Dhela). Spot tigers, wild elephants, and rich birdlife. Evening nature walk and bonfire.', meals: 'Breakfast & Dinner', stay: 'Corbett Jungle Resort' },
            { day: 5, title: 'Corbett to Kathgodam / Delhi Drop', description: 'Breakfast at resort. Drive back to Kathgodam Railway Station or Delhi Airport for departure journey.', meals: 'Breakfast', stay: 'Departure' }
        ],
        netRateTiers: [
            { packageType: 'Comfort Family (Sedan - Min 4 Pax)', vehicleType: 'Dzire / Etios AC', hotelCategory: 'Deluxe 3-Star Properties', estimatedNet: '₹8,200 - ₹10,500 / pax' },
            { packageType: 'Premium Safari Special (Innova Crysta)', vehicleType: 'Innova Crysta AC + 1 Gypsy Safari', hotelCategory: 'Premium 4-Star Resort + Lake View', estimatedNet: '₹12,800 - ₹16,500 / pax' },
            { packageType: 'Corporate MICE (Min 30 Pax)', vehicleType: 'Luxury AC Coach', hotelCategory: '4-Star Resort with Banquet & AV', estimatedNet: '₹9,500 - ₹12,000 / pax' }
        ],
        faqs: [
            { question: 'How early must Jim Corbett tiger safari permits be booked?', answer: 'Forest department permits open 45 days in advance for Indian citizens and 90 days for foreign nationals. We strongly recommend booking at least 30-45 days prior for peak zones like Bijrani and Jhirna.' },
            { question: 'Is Jim Corbett National Park open during monsoon?', answer: 'Core zones (Bijrani, Dhikala) close from July to mid-October for monsoons. However, buffer zones like Jhirna, Dhela, and Phato remain open year-round for wildlife safaris.' },
            { question: 'Can Kathgodam train transfers be linked with direct SECR trains from Chhattisgarh?', answer: 'Yes! Trains connecting Chhattisgarh (Raipur/Bilaspur) to Delhi allow easy same-day train connections (e.g. Kathgodam Shatabdi / Ranikhet Express) which our fleet meets directly at Kathgodam.' }
        ]
    },

    mussoorie: {
        id: 'mussoorie',
        name: 'Mussoorie & Dhanaulti',
        region: 'Mussoorie • Dhanaulti • Kanatal • Dehradun',
        category: 'heritage',
        badge: 'Jolly Grant Airport Desk & Heritage Resorts',
        heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600',
        tagline: 'Mussoorie Corporate Offsite & Leisure DMC',
        subheading: 'Quick-turnaround hill station DMC for weekend getaways, school excursions, and executive mountain retreats.',
        metaTitle: 'Mussoorie & Dhanaulti B2B DMC | Wholesale Tour Operator',
        metaDescription: 'Direct B2B Mussoorie DMC. Wholesale net rates for Mall Road hotels, Dehradun fleet transfers, Dhanaulti camps, and corporate banquet offsites for travel agents.',
        keywords: 'Mussoorie B2B DMC, Mussoorie travel agent net rates, Dehradun corporate offsite DMC, Dhanaulti camps B2B, Jolly Grant airport cab net rates',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/mussoorie',
        b2bNetIndicator: 'Starting Net from ₹7,499/pax (Ex-Dehradun / Delhi)',
        sla: '2 Hours',
        bestSeason: 'March to June (Summer retreat) & December to February (Winter snow)',
        idealGroupSize: 'Couples (FIT), School Groups, Corporate MICE (20-150 Pax)',
        groundAssets: [
            {
                title: 'Dehradun Station & Airport Dispatch',
                description: 'Vehicles stationed at Dehradun Railway Station and Jolly Grant Airport (DED) with zero customer wait time.'
            },
            {
                title: 'Full Fleet Array (Dzire to Urbania)',
                description: 'Private Sedans, Innova Crystas, and 17-26 seater Force Urbanias and pushback Tempo Travellers.'
            },
            {
                title: 'Green-Cess & Mall Road Authorized Passes',
                description: 'Seamless hill permits and Mall Road access passes avoiding parking hassles for your clients.'
            }
        ],
        hotelInventory: [
            {
                tier: 'Mall Road Colonial Heritage Resorts',
                locations: 'The Mall, Mussoorie',
                highlights: 'Panoramic views of Doon Valley twinkling lights, walking distance to cafes, and colonial wood interiors.'
            },
            {
                tier: 'Secluded Pine Forest Swiss Camps',
                locations: 'Dhanaulti & Kanatal',
                highlights: 'Surrounded by deodar and pine groves, outdoor adventure zones, and mountain-view dining.'
            }
        ],
        b2bExclusives: [
            'Kempty Falls, Company Garden, Cloud\'s End, and Lal Tibba guided sightseeing circuits',
            'Dhanaulti Eco Park adventure activity passes (Sky Walk, Zip-line, Valley Crossing)',
            'Corporate banquet hall bookings with full audio-visual conference equipment',
            'Special candlelight dinner setups for honeymoon couples at hill-view terraces'
        ],
        foodSupport: 'Full American Plan (AP) and Modified American Plan (MAP) with pure vegetarian and Jain kitchens.',
        itineraryDuration: '4 Days / 3 Nights (Mussoorie & Dhanaulti Complete Tour)',
        sampleItinerary: [
            { day: 1, title: 'Dehradun / Delhi to Mussoorie (Queen of Hills)', description: 'Pickup from Dehradun Railway Station / Airport or Delhi. Scenic hill drive. Check-in at Mussoorie hotel. Evening stroll along historic Mall Road and Library Chowk.', meals: 'Dinner', stay: 'Mussoorie Valley View Hotel' },
            { day: 2, title: 'Kempty Falls & Mussoorie Sightseeing', description: 'Visit Kempty Falls for scenic cascades. Tour Company Garden, Camels Back Road, and Gun Hill via ropeway. Enjoy sunset overlooking Doon valley.', meals: 'Breakfast & Dinner', stay: 'Mussoorie Valley View Hotel' },
            { day: 3, title: 'Day Excursion to Dhanaulti & Kanatal', description: 'Drive through pine and deodar forests to Dhanaulti. Visit Eco Park, Surkanda Devi Temple (cable car), and Lal Tibba (highest point). Return to Mussoorie.', meals: 'Breakfast & Dinner', stay: 'Mussoorie Hotel or Dhanaulti Camp' },
            { day: 4, title: 'Mussoorie to Dehradun Drop (Robbers Cave & Sahastradhara)', description: 'Breakfast at hotel. Descend to Dehradun. Visit Robber\'s Cave (Guchhupani) and Sahastradhara sulphur springs. Drop at Dehradun Station / Airport.', meals: 'Breakfast', stay: 'Departure' }
        ],
        netRateTiers: [
            { packageType: 'Budget FIT (Sedan - Min 4 Pax)', vehicleType: 'Dzire / Etios AC', hotelCategory: 'Standard 3-Star Valley Resort', estimatedNet: '₹7,499 - ₹8,999 / pax' },
            { packageType: 'Deluxe Honeymoon (Private Sedan)', vehicleType: 'Dzire AC with Candlelight Dinner', hotelCategory: 'Premium 4-Star Balcony View Room', estimatedNet: '₹11,500 - ₹14,500 / pax' },
            { packageType: 'Corporate Offsite (Min 25 Pax)', vehicleType: 'Luxury Force Urbania / Tempo', hotelCategory: '4-Star Resort with Conference Hall & DJ', estimatedNet: '₹8,500 - ₹11,000 / pax' }
        ],
        faqs: [
            { question: 'Can you organize corporate team-building events in Mussoorie?', answer: 'Yes. We specialize in corporate offsites ranging from 20 to 150 participants. We arrange conference halls, projector AV setups, outdoor team-building activities, and DJ cocktail dinners.' },
            { question: 'How far is Mussoorie from Dehradun Airport (Jolly Grant)?', answer: 'Dehradun Airport is approximately 60 km (about 2 to 2.5 hours driving time) from Mussoorie. Our drivers track incoming flight schedules to ensure prompt meet-and-greet.' },
            { question: 'Does Mussoorie experience snowfall in winter?', answer: 'Yes, snowfall typically occurs between late December and early February, particularly in Dhanaulti, Lal Tibba, and higher ridges of Mussoorie.' }
        ]
    },

    puri: {
        id: 'puri',
        name: 'Puri Jagannath Dham & Odisha',
        region: 'Puri • Konark Sun Temple • Chilika Lake • Bhubaneswar',
        category: 'spiritual',
        badge: 'VIP Temple Panda & Sea-Facing Inventory',
        heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=1600',
        tagline: 'East India Pilgrimage & Coastal DMC',
        subheading: 'Odisha wholesale ground partner with authorized VIP Panda assistance for Lord Jagannath darshan, direct SECR rail reception, and Konark/Chilika excursions.',
        metaTitle: 'Puri Jagannath Dham B2B DMC | Wholesale Tour Operator Net Rates',
        metaDescription: 'Direct B2B Puri DMC for travel agents. Authorized VIP Jagannath Temple Panda assistance, sea-facing beach resorts, Chilika dolphin charters, and SECR rail reception.',
        keywords: 'Puri B2B DMC, Jagannath Temple VIP darshan B2B, Puri tour operator net rates, Odisha travel partner, Konark Chilika tour B2B',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/puri',
        b2bNetIndicator: 'Starting Net from ₹6,999/pax (Ex-Puri / Bhubaneswar BBI)',
        sla: '2 Hours',
        bestSeason: 'October to March (Pleasant winter weather & Rath Yatra season)',
        idealGroupSize: 'Senior Citizens, Family Pilgrim Groups (6-20 Pax)',
        groundAssets: [
            {
                title: 'Private AC Fleet at Puri Station & BBI Airport',
                description: 'Dedicated commercial cabs stationed at Puri Railway Station and Bhubaneswar Biju Patnaik Airport (BBI).'
            },
            {
                title: 'SECR & ECoR Rail Corridor Reception',
                description: 'Specialized reception for guests arriving from Raipur, Bhilai, Bilaspur, and Kolkata via direct express trains (18426 Puri Exp, 18478 Utkal).'
            },
            {
                title: 'AC Luxury Coaches for Sanghas',
                description: 'Air-conditioned coaches for large pilgrim sanghas, senior citizen yatra groups, and educational tours.'
            }
        ],
        hotelInventory: [
            {
                tier: 'Sea-Facing Beach Resorts',
                locations: 'Golden Beach & Marine Drive Road, Puri',
                highlights: 'Direct sea-facing private balconies, swimming pools, private beach access, and pure vegetarian dining halls.'
            },
            {
                tier: 'Standard & Deluxe Pilgrim Hotels',
                locations: 'Grand Road & Swargadwar, Puri',
                highlights: 'Proximity to Jagannath Temple, clean sanitized rooms, lift facilities, and customized group catering.'
            }
        ],
        b2bExclusives: [
            'Authorized VIP Panda temple assistance for smooth Lord Jagannath darshan and Anand Bazaar Mahaprasad arrangements',
            'Konark Sun Temple guided heritage walk and Light & Sound show entry passes',
            'Private motorized catamaran boat charters at Chilika Lake (Satapada) for Irrawaddy Dolphin spotting',
            'Bhubaneswar temple tour covering Lingaraj Temple, Mukteswar, and Dhauli Shanti Stupa'
        ],
        foodSupport: 'Pure vegetarian Odia Mahaprasad feasts, South Indian tiffin, and authentic North Indian vegetarian dining.',
        itineraryDuration: '4 Days / 3 Nights (Puri, Konark & Chilika Lake Circuit)',
        sampleItinerary: [
            { day: 1, title: 'Arrival Puri / Bhubaneswar - Transfer to Puri Beach', description: 'Meet and greet at Puri Railway Station or Bhubaneswar Airport. Transfer to sea-facing beach resort. Evening visit to Golden Beach and Swargadwar market.', meals: 'Dinner', stay: 'Puri Sea-Facing Resort' },
            { day: 2, title: 'Lord Jagannath Temple Darshan & Konark Sun Temple', description: 'Early morning VIP assisted darshan at Shree Jagannath Temple. Taste authentic Mahaprasad. Afternoon drive to UNESCO World Heritage Konark Sun Temple and Chandrabhaga Beach sunset.', meals: 'Breakfast & Dinner', stay: 'Puri Sea-Facing Resort' },
            { day: 3, title: 'Chilika Lake (Satapada) Dolphin Excursion', description: 'Drive to Satapada on Chilika Lake (Asia\'s largest brackish lagoon). Private motorized boat cruise to spot rare Irrawaddy dolphins and Sea Mouth island. Return to Puri.', meals: 'Breakfast & Dinner', stay: 'Puri Sea-Facing Resort' },
            { day: 4, title: 'Puri to Bhubaneswar Departure via Heritage Sights', description: 'Drive to Bhubaneswar. Visit Pipili appliqué craft village, Dhauli Peace Pagoda, Lingaraj Temple, and Udayagiri/Khandagiri caves. Drop at Bhubaneswar Airport/Station.', meals: 'Breakfast', stay: 'Departure' }
        ],
        netRateTiers: [
            { packageType: 'Standard Pilgrim FIT (Sedan - Min 4 Pax)', vehicleType: 'Dzire / Etios AC', hotelCategory: 'Deluxe 3-Star near Beach', estimatedNet: '₹6,999 - ₹8,500 / pax' },
            { packageType: 'Premium Sea-Facing Special (Innova Crysta)', vehicleType: 'Innova Crysta AC', hotelCategory: 'Premium 4-Star Resort on Marine Drive', estimatedNet: '₹10,500 - ₹13,500 / pax' },
            { packageType: 'Senior Citizen Group Batch (Min 15 Pax)', vehicleType: 'AC Luxury Coach / Urbania', hotelCategory: 'Handpicked Pilgrim Property with Mahaprasad', estimatedNet: '₹6,200 - ₹7,500 / pax' }
        ],
        faqs: [
            { question: 'How does the VIP Panda temple assistance work for senior citizens?', answer: 'Our authorized temple pandas escort your guests through dedicated gates, manage footwear/mobile custody, guide them through the inner sanctum for peaceful darshan, and arrange sacred Mahaprasad.' },
            { question: 'Can you receive guests arriving on the direct Puri express train from Chhattisgarh?', answer: 'Yes! We handle massive volumes arriving on the Durg-Puri Intercity (18426) and Utkal Express. Our representative meets guests right at the Puri platform with an unbranded welcome placard.' },
            { question: 'Do non-Hindus have access to the Jagannath Temple sanctum?', answer: 'As per centuries-old temple tradition, non-Hindus are not permitted inside the inner temple premises. However, they can visit the Raghunandan Library rooftop for panoramic temple views and explore all other sights.' }
        ]
    },

    andaman: {
        id: 'andaman',
        name: 'Andaman & Nicobar Islands',
        region: 'Port Blair • Havelock (Swaraj Dweep) • Neil (Shaheed Dweep)',
        category: 'island',
        badge: 'Private Catamaran Allotments (Makruzz/Nautika)',
        heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600',
        tagline: 'Andaman Island DMC & Marine Adventure Supplier',
        subheading: 'Island ground DMC managing private high-speed catamarans, luxury beachfront resorts on Radhanagar Beach, and certified scuba diving net rates.',
        metaTitle: 'Andaman B2B DMC & Wholesale Package Net Rates | Rudraksh Safar',
        metaDescription: 'Leading B2B Andaman DMC for travel agents. Confirmed Makruzz/Nautika catamaran tickets, beachfront Havelock resorts, Cellular Jail light & sound, and scuba net rates.',
        keywords: 'Andaman B2B DMC, Makruzz ferry B2B booking, Havelock Island resort wholesale, Andaman travel agent net rates, Port Blair ground operator',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/andaman',
        b2bNetIndicator: 'Starting Net from ₹14,800/pax (Ex-Port Blair IXZ)',
        sla: '2 to 4 Hours',
        bestSeason: 'October to May (Calm seas, sunny days & optimal scuba visibility)',
        idealGroupSize: 'Honeymoon Couples, Families, Corporate Incentive Batches',
        groundAssets: [
            {
                title: 'Stationed Commercial Cabs on All 3 Islands',
                description: 'Private AC vehicles stationed on Port Blair, Havelock Island, and Neil Island ensuring zero wait time at ferry arrival jetties.'
            },
            {
                title: 'High-Speed Luxury Catamaran Allotments',
                description: 'Guaranteed confirmed seats on private catamarans (Makruzz, Nautika, and Green Ocean) avoiding crowded government ferries.'
            },
            {
                title: 'Private Chartered Speedboats',
                description: 'Speedboat transfers for Elephant Beach coral reef water sports and Light House island excursions.'
            }
        ],
        hotelInventory: [
            {
                tier: 'Private Beachfront Luxury Resorts',
                locations: 'Radhanagar Beach & Vijaynagar Beach, Havelock',
                highlights: 'Direct private beach access, wooden luxury cottages, swimming pools, multi-cuisine seaside dining, and spa facilities.'
            },
            {
                tier: 'Premium Sea-View Island Properties',
                locations: 'Port Blair & Neil Island',
                highlights: 'Harbour views, modern amenities, pure vegetarian kitchen options, and rapid jetty connectivity.'
            }
        ],
        b2bExclusives: [
            'Confirmed seat allotments on high-speed catamarans: Makruzz, Nautika, and Green Ocean',
            'Cellular Jail Light & Sound Show guaranteed evening ticket slots',
            'B2B wholesale net tariffs for PADI / SSI certified Scuba Diving, Sea Walk, and Parasailing',
            'Romantic beachside candlelight dinner and floral bed honeymoon decor setups on request'
        ],
        foodSupport: 'Fresh coastal dining with dedicated pure vegetarian and Jain kitchens available across all partner resorts.',
        itineraryDuration: '6 Days / 5 Nights (Port Blair, Havelock & Neil Island Circuit)',
        sampleItinerary: [
            { day: 1, title: 'Arrival Port Blair - Cellular Jail & Light & Sound Show', description: 'Arrive Veer Savarkar Airport (IXZ). Meet and greet with your agency placard. Check-in at hotel. Afternoon visit to historic Cellular Jail (Kaala Paani). Evening witness the stirring Light & Sound Show.', meals: 'Dinner', stay: 'Port Blair Hotel' },
            { day: 2, title: 'Port Blair to Havelock Island on Private Catamaran', description: 'Early morning transfer to Haddo Jetty. Board luxury high-speed catamaran (Makruzz/Nautika) to Havelock Island (Swaraj Dweep). Check-in at beach resort. Afternoon visit to Asia\'s famous Radhanagar Beach (Beach No. 7) for stunning sunset.', meals: 'Breakfast & Dinner', stay: 'Havelock Beachfront Resort' },
            { day: 3, title: 'Havelock Island - Elephant Beach Water Sports', description: 'Speedboat transfer to Elephant Beach. Complimentary snorkeling session. Optional B2B net activities: Scuba Diving, Sea Walk, and Jet Skiing. Afternoon relax at resort.', meals: 'Breakfast & Dinner', stay: 'Havelock Beachfront Resort' },
            { day: 4, title: 'Havelock to Neil Island (Shaheed Dweep)', description: 'Board morning catamaran to serene Neil Island. Visit Bharatpur Beach (coral viewing and water sports), Laxmanpur Beach (stunning sunset), and Natural Coral Bridge.', meals: 'Breakfast & Dinner', stay: 'Neil Island Luxury Resort' },
            { day: 5, title: 'Neil Island to Port Blair & Chidiya Tapu Sunset', description: 'Morning ferry return to Port Blair. Afternoon excursion to Chidiya Tapu (Bird Island) for panoramic sunset over the southern tip of South Andaman. Souvenir shopping at Sagarika Emporium.', meals: 'Breakfast & Dinner', stay: 'Port Blair Hotel' },
            { day: 6, title: 'Port Blair Airport Departure Drop', description: 'Breakfast at hotel. Transfer to Port Blair Airport for return flight with sweet island memories.', meals: 'Breakfast', stay: 'Departure' }
        ],
        netRateTiers: [
            { packageType: 'Deluxe Honeymoon Special (Min 2 Pax)', vehicleType: 'Private AC Sedan on all islands + Luxury Catamaran', hotelCategory: 'Premium 4-Star Beachfront Cottage with Candlelight Dinner', estimatedNet: '₹22,500 - ₹28,000 / pax' },
            { packageType: 'Family Island Explorer (Min 4-6 Pax)', vehicleType: 'Private AC Ertiga/Innova + Catamaran', hotelCategory: 'Deluxe 3-Star & 4-Star Handpicked Resorts', estimatedNet: '₹16,500 - ₹21,000 / pax' },
            { packageType: 'Group Incentive Batch (Min 15 Pax)', vehicleType: 'AC Tempo on Port Blair + Dedicated Island Transit', hotelCategory: 'Deluxe Island Properties with Gala Dinner', estimatedNet: '₹14,800 - ₹18,000 / pax' }
        ],
        faqs: [
            { question: 'What happens if private catamaran ferries are cancelled due to rough sea weather?', answer: 'Weather-related ferry disruptions are rare outside monsoon storms. If catamarans are halted by port authorities, our ground team immediately reschedules travel dates or adjusts hotel stays across Port Blair without penalty.' },
            { question: 'Do Indian tourists need permits or passports to visit Andaman?', answer: 'No passport or special permit is required for Indian citizens visiting Port Blair, Havelock, or Neil islands. Any valid government photo ID (Aadhaar, Voter ID, Driving License) is sufficient.' },
            { question: 'Do you arrange scuba diving for non-swimmers?', answer: 'Yes! Discover Scuba Diving (DSD) is designed specifically for non-swimmers. PADI-certified divemasters accompany guests 1-on-1 underwater with full safety gear and HD video/photos included.' }
        ]
    },

    dubai: {
        id: 'dubai',
        name: 'Dubai & UAE',
        region: 'Dubai • Abu Dhabi • Sharjah • Desert Safari Camps',
        category: 'international',
        badge: 'Wholesale Hotel Tariffs & Private Desert Camps',
        heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1600',
        tagline: 'Direct UAE Wholesale B2B DMC',
        subheading: 'Direct Dubai wholesale ground handler providing express tourist visas, private desert safari buyouts, Burj Khalifa bulk slots, and luxury Sprinter coaches.',
        metaTitle: 'Dubai B2B DMC & Wholesale Net Rates for Travel Agents | Rudraksh Safar',
        metaDescription: 'Direct B2B Dubai DMC. Wholesale rates for Dubai hotels, express 30/60-day UAE visas with zero deposit, Desert Safari private camps, Burj Khalifa slots, and luxury coaches.',
        keywords: 'Dubai B2B DMC India, Dubai wholesale travel agent portal, UAE visa B2B zero deposit, Dubai desert safari private camp B2B, Burj Khalifa bulk ticket net rates',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/dubai',
        b2bNetIndicator: 'Starting Net from AED 850 / ₹18,999/pax (Ex-Dubai DXB/DWC)',
        sla: '2 Hours (Instant Express Visa Processing)',
        bestSeason: 'October to April (Pleasant outdoor weather, shopping festivals)',
        idealGroupSize: 'FIT Families, Honeymooners, Corporate MICE & Incentive Delegations',
        groundAssets: [
            {
                title: 'Dedicated DXB Airport Meet-and-Greet Desk',
                description: 'Stationed operational team at Terminal 1, 2, and 3 meeting guests with your agency-branded placards.'
            },
            {
                title: 'Luxury Coach & Mercedes Sprinter Fleet',
                description: 'High-end air-conditioned fleet for corporate delegations, VIP guests, and group movements across Dubai and Abu Dhabi.'
            },
            {
                title: 'Fleet of 4x4 Land Cruisers for Desert Safaris',
                description: 'Licensed safari dune-bashing drivers and private desert campsite allocations.'
            }
        ],
        hotelInventory: [
            {
                tier: 'Wholesale Allotments across 3-Star, 4-Star & 5-Star Hotels',
                locations: 'Deira, Bur Dubai, Sheikh Zayed Road, Downtown, and Marina',
                highlights: 'Direct API rate parity beating all leading global B2B bedbanks, inclusive of daily buffet breakfast and tourism dirham options.'
            },
            {
                tier: 'Luxury Beach & Palm Jumeirah Resorts',
                locations: 'Palm Jumeirah & JBR',
                highlights: 'Private beach access, world-class luxury, and VIP honeymoon amenities.'
            }
        ],
        b2bExclusives: [
            'Express 30-day and 60-day UAE tourist visa processing with 99.8% approval rate and zero agent cash deposit',
            'Burj Khalifa At The Top (124th & 125th floor) prime non-prime slot allocations',
            'Marina luxury Dhow Cruise and private 50ft luxury yacht charters at wholesale net pricing',
            'Abu Dhabi day tour including Sheikh Zayed Grand Mosque, BAPS Hindu Mandir, and Ferrari World passes'
        ],
        foodSupport: 'Over 60 partnered Indian buffet restaurants across Dubai providing Jain, Gujarati, Punjabi, and South Indian catering.',
        itineraryDuration: '5 Days / 4 Nights (Dubai Signature City & Desert Experience)',
        sampleItinerary: [
            { day: 1, title: 'Arrival Dubai International Airport - Luxury Dhow Cruise', description: 'Warm welcome at DXB airport with your agency placard. Private transfer to hotel. Evening Marina Dhow Cruise with international buffet dinner, tanoura dance, and skyline views.', meals: 'Dinner', stay: 'Dubai 4-Star Hotel' },
            { day: 2, title: 'Dubai Half-Day City Tour & Burj Khalifa (124th Floor)', description: 'Morning guided city tour covering Dubai Frame, Zabeel Palace, Jumeirah Mosque, and Burj Al Arab photo stop. Afternoon visit Dubai Mall, Underwater Zoo, and ascend Burj Khalifa 124th floor. Witness Dubai Fountain show.', meals: 'Breakfast', stay: 'Dubai 4-Star Hotel' },
            { day: 3, title: 'Desert Safari with Dune Bashing & BBQ Dinner', description: 'Morning free for shopping at Gold Souk and Meena Bazaar. Afternoon pickup in 4x4 Land Cruiser for thrilling red-dune desert safari. Enjoy camel ride, sandboarding, belly dance, fire show, and lavish barbecue buffet dinner under the desert stars.', meals: 'Breakfast & BBQ Dinner', stay: 'Dubai 4-Star Hotel' },
            { day: 4, title: 'Full Day Abu Dhabi City Tour with BAPS Hindu Mandir', description: 'Full day excursion to UAE capital Abu Dhabi. Visit the magnificent Sheikh Zayed Grand Mosque, BAPS Hindu Mandir, Emirates Palace photo stop, Date Market, and photo stop at Ferrari World on Yas Island.', meals: 'Breakfast', stay: 'Dubai 4-Star Hotel' },
            { day: 5, title: 'Shopping & Dubai Airport Departure Drop', description: 'Breakfast at hotel. Day free for last-minute shopping at Mall of the Emirates. Timely private transfer to Dubai International Airport (DXB) for flight back home.', meals: 'Breakfast', stay: 'Departure' }
        ],
        netRateTiers: [
            { packageType: 'Budget FIT (3-Star City Hotel)', vehicleType: 'Shared SIC Transfers + Private Airport Cabs', hotelCategory: '3-Star Hotel in Deira / Bur Dubai', estimatedNet: 'AED 850 - AED 1,050 / pax' },
            { packageType: 'Comfort Family (4-Star Central Hotel)', vehicleType: 'Private Transfers (Innova / Van)', hotelCategory: '4-Star Hotel in Bur Dubai / Al Barsha', estimatedNet: 'AED 1,200 - AED 1,550 / pax' },
            { packageType: 'Corporate MICE / Incentive (Min 25 Pax)', vehicleType: 'Luxury AC 50-Seater Coach', hotelCategory: '5-Star Hotel on Sheikh Zayed Road', estimatedNet: 'AED 1,650 - AED 2,200 / pax' }
        ],
        faqs: [
            { question: 'What is the visa rejection rate and do travel agents need to keep cash security deposits?', answer: 'Our UAE visa approval rate exceeds 99.8% with zero cash security deposit required for verified travel agents. We process applications directly through Dubai immigration within 24 to 48 hours.' },
            { question: 'Can you arrange pure Jain food in Dubai?', answer: 'Yes! We have contracts with over 30 certified pure vegetarian and Jain restaurants in Bur Dubai, Karama, and Deira. For groups, we deliver packed Jain thalis or arrange private buffet dining halls.' },
            { question: 'Do your desert safaris operate in overcrowded commercial camps?', answer: 'No. We operate through premium, well-maintained desert camps with clean washrooms, high-quality seating, strict food hygiene, and professional licensed drivers for dune bashing.' }
        ]
    },

    vietnam: {
        id: 'vietnam',
        name: 'Vietnam',
        region: 'Hanoi • Halong Bay • Da Nang • Ba Na Hills • Hoi An • Saigon',
        category: 'international',
        badge: '5-Star Halong Cruise Blocks & Indian Chefs',
        heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1600',
        tagline: 'Premier Vietnam B2B DMC for Indian Travel Agents',
        subheading: 'Direct Vietnam ground operator with licensed English/Hindi guides, pre-bought 5-star Halong Bay overnight cruise blocks, and authentic Indian catering.',
        metaTitle: 'Vietnam B2B DMC for Indian Travel Agents | Wholesale Net Rates',
        metaDescription: 'Leading B2B Vietnam DMC. Wholesale rates for Hanoi, 5-star Halong Bay cruises, Da Nang Ba Na Hills, Indian food catering, and fast-track Vietnam E-visa for travel agents.',
        keywords: 'Vietnam B2B DMC, Vietnam DMC for Indian travel agents, Halong Bay cruise wholesale booking, Da Nang tour package B2B, Vietnam E-visa assistance',
        canonicalUrl: 'https://rudrakshsafar.com/b2b/vietnam',
        b2bNetIndicator: 'Starting Net from $290 / ₹24,500/pax (Ex-Hanoi/Da Nang)',
        sla: '3 Hours',
        bestSeason: 'October to April (Pleasant dry weather across North and Central Vietnam)',
        idealGroupSize: 'Couples (FIT), Families, Corporate Incentive & Trade Delegations',
        groundAssets: [
            {
                title: 'Licensed English & Hindi-Speaking Vietnamese Tour Guides',
                description: 'Professional local guides trained in Indian cultural preferences, food requirements, and group dynamics.'
            },
            {
                title: 'Modern Luxury AC Coaches (16 to 45 Seaters)',
                description: 'Private vehicles across Hanoi, Halong, Da Nang, and Ho Chi Minh City with bottled water and Wi-Fi.'
            },
            {
                title: 'VIP Airport Express Immigration Fast-Track',
                description: 'Fast-track arrival assistance at Hanoi (HAN) and Da Nang (DAD) skipping long immigration queues.'
            }
        ],
        hotelInventory: [
            {
                tier: '5-Star Halong Bay & Lan Ha Bay Overnight Cruises',
                locations: 'Halong Bay / Tuan Chau Marina',
                highlights: 'Pre-bought cabin blocks on premium vessels (Ambassador, Paradise, Mon Cheri), private balconies, bathtub, and live music.'
            },
            {
                tier: 'Beachfront 4-Star & 5-Star Resorts',
                locations: 'Da Nang & Hoi An',
                highlights: 'My Khe Beach views, infinity swimming pools, and central access to heritage towns.'
            }
        ],
        b2bExclusives: [
            'Ba Na Hills Golden Bridge cable car and buffet tickets with zero queue wait times',
            'Instant Vietnam Tourist E-Visa issuance assistance (standard 3 days, express 4-8 hours)',
            'Bespoke MICE gala dinners with customized branding, stage setup, and Indian tandoor live counters',
            'Mekong Delta riverboat and floating market excursions in South Vietnam'
        ],
        foodSupport: 'Dedicated Indian meals at certified Indian restaurants across Hanoi, Halong, Da Nang, and Saigon with strict Jain food guarantee.',
        itineraryDuration: '6 Days / 5 Nights (Hanoi, 5-Star Halong Cruise, Da Nang & Ba Na Hills)',
        sampleItinerary: [
            { day: 1, title: 'Arrival Hanoi - City Tour & Water Puppet Show', description: 'Welcome at Noi Bai International Airport (HAN) with your agency placard. Transfer to hotel. Afternoon tour of Ho Chi Minh Mausoleum, One Pillar Pagoda, and Tran Quoc Pagoda. Evening traditional Thang Long Water Puppet Show. Indian dinner.', meals: 'Dinner (Indian)', stay: 'Hanoi 4-Star Hotel' },
            { day: 2, title: 'Hanoi to Halong Bay - 5-Star Overnight Luxury Cruise', description: 'Scenic drive to Halong Bay via highway. Board 5-star luxury cruise. Welcome drink and safety briefing. Sail through thousands of limestone karst towers. Kayaking at Luon Cave, visit Titov Island for panoramic views. Sunset party on sundeck. Multi-course dinner and squid fishing.', meals: 'Breakfast, Lunch & Dinner', stay: '5-Star Halong Bay Luxury Cruise' },
            { day: 3, title: 'Halong Bay Cave Tour - Flight to Da Nang', description: 'Morning Tai Chi on sundeck. Explore Sung Sot (Surprise) Cave. Brunch on board while sailing back to port. Transfer to Hanoi airport for flight to Da Nang. Arrive Da Nang, check-in at beachfront resort. View Dragon Bridge fire show on weekends.', meals: 'Brunch & Dinner (Indian)', stay: 'Da Nang Beachfront Resort' },
            { day: 4, title: 'Ba Na Hills & Golden Giant Hands Bridge', description: 'Cable car ride to Ba Na Hills (holding world records). Walk across the iconic Golden Hand Bridge held by giant stone hands. Visit French Village, Fantasy Park indoor theme park, and Linh Ung Pagoda. Return to Da Nang.', meals: 'Breakfast, Lunch & Dinner (Indian)', stay: 'Da Nang Beachfront Resort' },
            { day: 5, title: 'Hoi An Ancient Heritage Town & Basket Boat Ride', description: 'Visit Marble Mountains. Experience traditional round coconut basket boat ride in Cam Thanh coconut jungle. Evening walking tour of UNESCO Hoi An Ancient Town illuminated by thousands of colorful silk lanterns. Cruise lantern release on Hoai River.', meals: 'Breakfast & Dinner (Indian)', stay: 'Da Nang Beachfront Resort' },
            { day: 6, title: 'Da Nang Shopping & Airport Departure Drop', description: 'Breakfast at hotel. Visit Han Market for local coffee and souvenir shopping. Timely private transfer to Da Nang International Airport (DAD) for flight back home.', meals: 'Breakfast', stay: 'Departure' }
        ],
        netRateTiers: [
            { packageType: 'Comfort FIT (4-Star Hotels + 5-Star Cruise)', vehicleType: 'Private AC Car / Van Transfers', hotelCategory: '4-Star City Hotel + 5-Star Halong Cruise Cabin', estimatedNet: '$290 - $360 / pax' },
            { packageType: 'Luxury Beach & Heritage (5-Star Throughout)', vehicleType: 'Private Luxury Van (Transit/Mercedes)', hotelCategory: '5-Star Beach Resort in Da Nang + Luxury Cruise', estimatedNet: '$440 - $550 / pax' },
            { packageType: 'MICE / Corporate Incentive (Min 20 Pax)', vehicleType: 'Private Luxury 45-Seater Coach', hotelCategory: '4-Star / 5-Star Hotel with Gala Dinner & AV', estimatedNet: '$310 - $390 / pax' }
        ],
        faqs: [
            { question: 'Do Indian passport holders get Visa on Arrival in Vietnam?', answer: 'Indian citizens require an approved electronic visa (E-Visa) prior to departure. We assist travel agents with fast-track 3-day and emergency 4-8 hour e-visa clearance, eliminating rejection risks.' },
            { question: 'How authentic is the Indian food in Vietnam?', answer: 'We partner exclusively with reputable Indian-owned restaurants (such as Namaste Hanoi, Shalimar, Tandoori Nights, and Family Indian Restaurant in Da Nang) guaranteeing authentic Indian chefs and dedicated pure vegetarian/Jain thalis.' },
            { question: 'Can we customize itineraries combining North, Central, and South Vietnam?', answer: 'Yes, our operations team routinely designs seamless multi-city circuits connecting Hanoi, Halong Bay, Da Nang, Hoi An, Ho Chi Minh City, and Phu Quoc Island with internal flight ticketing.' }
        ]
    }
};
