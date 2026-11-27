export interface HotelAreaGuide {
  name: string;
  bestFor: string;
  typicalPriceRange: string;
  distanceNote: string;
  highlights: string;
}

export interface CuratedHotelRow {
  name: string;
  tier: 'Budget' | 'Mid-Range' | 'Family / Business' | 'Luxury / Resort';
  area: string;
  fromPriceInr: number;
  bestFor: string;
  highlights: string;
}

export interface HotelFAQ {
  question: string;
  answer: string;
}

export interface HotelCityData {
  slug: string;
  cityName: string;
  stateSlug: string;
  stateName: string;
  countryCode: string;
  placeId?: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  oneSentenceAnswer: string;
  answerFirstSummary: string;
  bestSeason: string;
  typicalPriceRange: string;
  checkInStandard: string;
  heroImage: string;
  areas: HotelAreaGuide[];
  curatedHotels: CuratedHotelRow[];
  bundleUpsell: {
    title: string;
    description: string;
    packageHref: string;
    packageLabel: string;
  };
  howToReach: string;
  faqs: HotelFAQ[];
  nearbyCitySlugs: string[];
  lastUpdated: string;
  /** Set to false while drafting to keep page noindex and out of sitemap-hotels.xml */
  readyToIndex?: boolean;
}

export interface HotelStateData {
  slug: string;
  stateName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answerFirstSummary: string;
  citySlugs: string[];
  highlights: string[];
  faqs: HotelFAQ[];
  lastUpdated: string;
  /** Set to false while drafting to keep page noindex and out of sitemap-hotels.xml */
  readyToIndex?: boolean;
}

export const HOTEL_NAP = {
  brandName: 'Rudraksh Safar',
  legalName: 'Sanjeev Enterprises (Rudraksh Safar)',
  website: 'https://rudrakshsafar.com',
  displayWebsite: 'www.rudrakshsafar.com',
  phone: '9229150311',
  phoneFormatted: '+91 92291 50311',
  telHref: 'tel:+919229150311',
  whatsappHref: 'https://wa.me/919229150311?text=Hello%20Rudraksh%20Safar%2C%20I%20need%20help%20booking%20a%20hotel.',
  email: 'rudrakshsafar@gmail.com',
  gstin: '22AGBPC7350G1ZZ',
  officeAddress: 'GE Road, In Front of Petrol Pump, Bhilai-3, Durg, Chhattisgarh 490021',
};

export const HOTEL_STATES: Record<string, HotelStateData> = {
  chhattisgarh: {
    slug: 'chhattisgarh',
    stateName: 'Chhattisgarh',
    metaTitle: 'Hotels in Chhattisgarh: Book Online in Bhilai, Raipur, Durg & Bilaspur | Rudraksh Safar',
    metaDescription:
      'Compare and book verified hotels across Chhattisgarh — Bhilai, Raipur, Durg, and Bilaspur. Pay in INR via UPI/EMI with GST invoices and 24/7 WhatsApp support from Rudraksh Safar.',
    h1: 'Hotels in Chhattisgarh: Book Online',
    answerFirstSummary:
      'For business, family weddings, and railway/airport transit in Chhattisgarh, Raipur (Telibandha & Station Road) and Bhilai (Civic Centre & Supela) offer the widest choice of verified hotels from ₹1,200 to ₹6,500 per night. Peak demand runs October to March and during wedding dates.',
    citySlugs: ['bhilai', 'raipur', 'durg', 'bilaspur'],
    highlights: [
      'Direct local support from our Bhilai-3 (Durg) office on +91 92291 50311',
      'GST-compliant corporate invoices for industrial & SAIL/BSP visitors',
      'Curated family-safe and couple-friendly stays near railway junctions and Swami Vivekananda Airport',
      'Pay in INR via UPI, cards, or EMI with instant confirmation',
    ],
    faqs: [
      {
        question: 'Which cities in Chhattisgarh have the best hotel availability?',
        answer:
          'Raipur and Bhilai-Durg have the largest inventory of business, family, and banquet hotels, followed by Bilaspur near the SECR railway zone headquarters. Booking 5 to 7 days ahead is recommended during wedding season (November to February).',
      },
      {
        question: 'Can corporate travellers get GST invoices for Chhattisgarh hotel bookings?',
        answer:
          'Yes. Rudraksh Safar provides valid GST-compliant invoices (GSTIN 22AGBPC7350G1ZZ) for business stays in Bhilai, Raipur, Durg, and Bilaspur. Share your company GSTIN during booking or via WhatsApp.',
      },
      {
        question: 'Are local IDs accepted at hotels in Bhilai and Raipur?',
        answer:
          'Policies vary by property. Most major 3-star and 4-star business hotels in Raipur and Bhilai accept valid government photo IDs (Aadhaar, Passport, Driving Licence), while select budget properties restrict local IDs. Our team verifies ID rules before you pay.',
      },
    ],
    lastUpdated: '2026-11-28',
  },
  'himachal-pradesh': {
    slug: 'himachal-pradesh',
    stateName: 'Himachal Pradesh',
    metaTitle: 'Hotels in Himachal Pradesh: Book Manali Stays Online | Rudraksh Safar',
    metaDescription:
      'Book verified hotels and mountain resorts in Himachal Pradesh starting with Manali. Compare Mall Road, Old Manali & Vashisht stays in INR with WhatsApp support.',
    h1: 'Hotels in Himachal Pradesh: Book Online',
    answerFirstSummary:
      'Manali leads Himachal Pradesh hotel bookings across Mall Road, Old Manali, and Vashisht, with stays ranging from ₹1,400 budget guesthouses to ₹7,500+ valley-view resorts. Peak seasons are April–June and December–January snowfall months.',
    citySlugs: ['manali'],
    highlights: [
      'Heater-equipped winter rooms and valley-view balconies verified for December–February trips',
      'Pure vegetarian & North Indian meal options clearly highlighted',
      'Option to bundle Volvo transfers from Delhi/Chandigarh and Solang Valley sightseeing',
    ],
    faqs: [
      {
        question: 'When should I book hotels in Manali for snowfall season?',
        answer:
          'For December 20 to January 10 snowfall and New Year weeks, book 3 to 4 weeks in advance. Rooms with central heating near Mall Road and Log Huts Road sell out first.',
      },
      {
        question: 'Can I add sightseeing and Volvo transfers to my Himachal hotel booking?',
        answer:
          'Yes. You can book the hotel room directly online and message Rudraksh Safar on WhatsApp (+91 92291 50311) to add Delhi–Manali Volvo tickets, cab transfers, or our Manali group tour package.',
      },
    ],
    lastUpdated: '2026-11-28',
  },
  uttarakhand: {
    slug: 'uttarakhand',
    stateName: 'Uttarakhand',
    metaTitle: 'Hotels in Uttarakhand: Book Haridwar & Rishikesh Stays | Rudraksh Safar',
    metaDescription:
      'Book clean family and pilgrim hotels in Haridwar and Rishikesh. Compare Ganga-facing, Har Ki Pauri, and Tapovan stays in INR with 24/7 WhatsApp help.',
    h1: 'Hotels in Uttarakhand: Book Online',
    answerFirstSummary:
      'Haridwar (Har Ki Pauri & Bhupatwala) and Rishikesh (Tapovan & Laxman Jhula) offer verified family, pilgrim, and wellness stays from ₹1,300 to ₹6,800 per night. Peak demand occurs during Char Dham Yatra (May–June), Shravan Kanwar, and Ganga Aarti weekends.',
    citySlugs: ['haridwar', 'rishikesh'],
    highlights: [
      'Local on-ground support from our Haridwar-Rishikesh Highway (Bhupatwala) office',
      'Senior-friendly lift-equipped hotels near Har Ki Pauri and ghats',
      '100% sattvik / pure vegetarian dining options clearly noted',
    ],
    faqs: [
      {
        question: 'Which area is better for families: Haridwar or Rishikesh?',
        answer:
          'Stay in Haridwar (Bhupatwala or near Har Ki Pauri) for Ganga Aarti, senior-citizen convenience, and rail connectivity. Choose Rishikesh (Tapovan or Swarg Ashram) for river rafting, yoga retreats, and café culture.',
      },
      {
        question: 'Does Rudraksh Safar have an office in Haridwar?',
        answer:
          'Yes. Our Uttarakhand support office is located at Gate No. 4, Main Haridwar-Rishikesh Highway, Bhupatwala, Haridwar, giving pilgrims and families direct local assistance.',
      },
    ],
    lastUpdated: '2026-11-28',
  },
};

export const HOTEL_CITIES: Record<string, HotelCityData> = {
  bhilai: {
    slug: 'bhilai',
    cityName: 'Bhilai',
    stateSlug: 'chhattisgarh',
    stateName: 'Chhattisgarh',
    countryCode: 'IN',
    h1: 'Hotels in Bhilai: Book Online',
    metaTitle: 'Hotels in Bhilai: Book Online with Live Prices & GST Invoice | Rudraksh Safar',
    metaDescription:
      'Book verified hotels in Bhilai (Civic Centre, Supela, Nehru Nagar & Power House) with live INR rates, UPI/EMI payment, GST invoices, and local support from Rudraksh Safar.',
    oneSentenceAnswer:
      'Compare live rates for business, family, and wedding stays across Civic Centre, Supela, and GE Road with local Bhilai support.',
    answerFirstSummary:
      'Civic Centre and Nehru Nagar are best for Bhilai Steel Plant (BSP) visitors and families, while Supela and Power House suit budget transit travellers near the railway station. Expect ₹1,200–₹4,800 per night; October to March offers pleasant weather and peak wedding demand.',
    bestSeason: 'October to March (pleasant weather & wedding season)',
    typicalPriceRange: '₹1,200 – ₹4,800 / night',
    checkInStandard: '12:00 PM check-in · 11:00 AM check-out',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    areas: [
      {
        name: 'Civic Centre & Sector 6–10',
        bestFor: 'BSP / SAIL visitors, families & corporate stays',
        typicalPriceRange: '₹2,200 – ₹4,800 / night',
        distanceNote: '4 km from Bhilai Power House Station · 10 min from Maitri Bagh',
        highlights: 'Wide leafy avenues, safe evening walks, close to Bhilai Steel Plant offices and Indira Place.',
      },
      {
        name: 'Supela & GE Road (NH-53)',
        bestFor: 'Budget transit, highway travellers & wedding guests',
        typicalPriceRange: '₹1,200 – ₹2,800 / night',
        distanceNote: '2 km from Supela Chowk · 15 min to Durg Junction',
        highlights: 'Direct NH-53 connectivity between Raipur and Durg with plenty of pure-veg restaurants and shopping.',
      },
      {
        name: 'Nehru Nagar & Smriti Nagar',
        bestFor: 'College parents (BIT/CSVTU), long stays & quiet families',
        typicalPriceRange: '₹1,600 – ₹3,500 / night',
        distanceNote: '3 km from Durg Junction · 45 min from Raipur Airport',
        highlights: 'Residential calm, Surya Treasure Island Mall nearby, and easy access to Durg and Bhilai.',
      },
    ],
    curatedHotels: [
      {
        name: 'Grand Dhillon Hotel',
        tier: 'Family / Business',
        area: 'Nehru Nagar / Akash Ganga, Bhilai',
        fromPriceInr: 3200,
        bestFor: 'Corporate & wedding families',
        highlights: 'Banquet halls, multi-cuisine dining, ample parking near GE Road',
      },
      {
        name: 'The Floret / Amit Park International',
        tier: 'Mid-Range',
        area: 'Supela / GE Road, Bhilai',
        fromPriceInr: 2400,
        bestFor: 'BSP executives & transit',
        highlights: 'Central GE Road location, pure-veg & North Indian kitchen',
      },
      {
        name: 'Hotel Ashish International',
        tier: 'Budget',
        area: 'Supela, Bhilai',
        fromPriceInr: 1400,
        bestFor: 'Solo & short railway stays',
        highlights: 'Walkable to Supela market, quick check-in, clean AC rooms',
      },
      {
        name: 'Hotel Himalaya Park',
        tier: 'Mid-Range',
        area: 'Nehru Nagar East, Bhilai',
        fromPriceInr: 2100,
        bestFor: 'Families & college visitors',
        highlights: 'Quiet neighbourhood, spacious rooms, easy access to Durg',
      },
    ],
    bundleUpsell: {
      title: 'Planning a trip out of Bhilai or hosting outstation guests?',
      description:
        'Our Bhilai-3 office arranges airport pickups from Raipur (RPR), Tempo Travellers for wedding groups, and complete holiday packages starting from Bhilai.',
      packageHref: '/travel-agent-bhilai',
      packageLabel: 'Explore Bhilai Travel & Cab Services',
    },
    howToReach:
      'Bhilai is served by Durg Junction (major express trains, 15 min from Supela) and Bhilai Power House Station. Swami Vivekananda Airport in Raipur (RPR) is 45–55 minutes via NH-53.',
    faqs: [
      {
        question: 'Which area in Bhilai is best for families and wedding guests?',
        answer:
          'Nehru Nagar and Civic Centre are the top choices for families because they are quiet, safe, and close to major marriage lawns, Surya Mall, and GE Road.',
      },
      {
        question: 'How far are Bhilai hotels from Raipur Airport (RPR)?',
        answer:
          'Most hotels along GE Road, Supela, and Nehru Nagar are 38 to 45 km from Swami Vivekananda Airport, Raipur — roughly a 50-minute cab drive.',
      },
      {
        question: 'Can I get a GST invoice for corporate stays in Bhilai?',
        answer:
          'Yes. Rudraksh Safar issues GST invoices (GSTIN 22AGBPC7350G1ZZ) for all eligible bookings, ideal for SAIL/BSP contractors and visiting engineers.',
      },
      {
        question: 'Are couple-friendly hotels available in Bhilai?',
        answer:
          'Select 3-star properties in Nehru Nagar and GE Road welcome unmarried couples with valid outstation government IDs. Message us on WhatsApp at 9229150311 to confirm property rules before booking.',
      },
      {
        question: 'Do Bhilai hotels allow early check-in for morning trains at Durg Junction?',
        answer:
          'Standard check-in is 12:00 PM, but early morning arrival from Howrah–Mumbai route trains can often be accommodated on request (subject to availability or a nominal half-day charge).',
      },
      {
        question: 'What payment methods can I use on Rudraksh Safar?',
        answer:
          'You can pay in Indian Rupees (INR) using UPI, debit/credit cards, net banking, or eligible EMI options with zero hidden convenience surprises.',
      },
    ],
    nearbyCitySlugs: ['durg', 'raipur', 'bilaspur'],
    lastUpdated: '2026-11-28',
  },

  raipur: {
    slug: 'raipur',
    cityName: 'Raipur',
    stateSlug: 'chhattisgarh',
    stateName: 'Chhattisgarh',
    countryCode: 'IN',
    h1: 'Hotels in Raipur: Book Online',
    metaTitle: 'Hotels in Raipur: Book Near Railway Station, Telibandha & Airport | Rudraksh Safar',
    metaDescription:
      'Compare and book live hotel rates in Raipur — Telibandha Marine Drive, Station Road, Pandri & Naya Raipur. Pay in INR with GST invoice and WhatsApp support.',
    oneSentenceAnswer:
      'Book business and family hotels across Telibandha, Station Road, and Naya Raipur with instant INR pricing and GST billing.',
    answerFirstSummary:
      'Telibandha (Marine Drive) and Shankar Nagar are best for upscale business and family stays in Raipur, while Station Road and Fafadih offer quick budget access to Raipur Junction. Prices typically range from ₹1,300 to ₹6,800 per night; October to March is peak season.',
    bestSeason: 'October to March (peak business & pleasant winter)',
    typicalPriceRange: '₹1,300 – ₹6,800 / night',
    checkInStandard: '12:00 PM check-in · 11:00 AM check-out',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    areas: [
      {
        name: 'Telibandha (Marine Drive) & VIP Road',
        bestFor: 'Upscale business travellers, airport flyers & families',
        typicalPriceRange: '₹3,200 – ₹6,800 / night',
        distanceNote: '12 km (20 min) from Raipur Airport · 5 km from Railway Station',
        highlights: 'Cafés, Telibandha Lake promenade, Magneto Mall, and flagship 4–5 star brands along VIP Road.',
      },
      {
        name: 'Station Road, Fafadih & Jail Road',
        bestFor: 'Budget transit, medical visits & early train departures',
        typicalPriceRange: '₹1,300 – ₹2,800 / night',
        distanceNote: '0.5–2 km (5 min) from Raipur Junction',
        highlights: 'Fastest access to trains, wholesale markets in Pandri, and economical vegetarian thali dining.',
      },
      {
        name: 'Nava Raipur (Atal Nagar)',
        bestFor: 'Government secretariat visitors, IIM/IIIT & convention guests',
        typicalPriceRange: '₹2,800 – ₹5,500 / night',
        distanceNote: '10 km (15 min) from Raipur Airport',
        highlights: 'Wide green boulevards, Jungle Safari proximity, and peaceful modern resorts.',
      },
    ],
    curatedHotels: [
      {
        name: 'Hyatt Raipur',
        tier: 'Luxury / Resort',
        area: 'Magneto The Mall, GE Road',
        fromPriceInr: 5800,
        bestFor: 'Luxury & corporate leadership',
        highlights: 'Pool, fitness centre, direct mall connectivity, airport shuttle',
      },
      {
        name: 'Courtyard by Marriott Raipur',
        tier: 'Luxury / Resort',
        area: 'Labhandi, NH-53',
        fromPriceInr: 6200,
        bestFor: 'Airport & VIP events',
        highlights: 'Spa, outdoor pool, 15 min from Swami Vivekananda Airport',
      },
      {
        name: 'Hotel Babylon Inn',
        tier: 'Family / Business',
        area: 'VIP Road, Raipur',
        fromPriceInr: 3600,
        bestFor: 'Families & airport flyers',
        highlights: 'Spacious rooms, pure-veg & multi-cuisine dining, easy VIP Road access',
      },
      {
        name: 'Hotel Simran Heritage',
        tier: 'Budget',
        area: 'Pandri / Station Road',
        fromPriceInr: 1500,
        bestFor: 'Rail transit & budget business',
        highlights: 'Near Raipur Junction & Pandri Cloth Market, 24-hr desk',
      },
    ],
    bundleUpsell: {
      title: 'Need airport cab pickup or outstation tours from Raipur?',
      description:
        'Combine your Raipur hotel with verified RPR airport transfers or explore our direct holiday packages departing from Raipur.',
      packageHref: '/tour-packages-from-raipur',
      packageLabel: 'View Tour Packages from Raipur',
    },
    howToReach:
      'Swami Vivekananda Airport (RPR) connects Raipur directly with Delhi, Mumbai, Bengaluru, Hyderabad, and Kolkata. Raipur Junction sits on the main Howrah–Mumbai rail trunk.',
    faqs: [
      {
        question: 'Which area is closest to Raipur Airport (RPR) for overnight stays?',
        answer:
          'VIP Road, Telibandha, and Nava Raipur are the closest hotel hubs to Swami Vivekananda Airport, just 15 to 20 minutes by cab without crossing city traffic.',
      },
      {
        question: 'Where should I stay near Raipur Railway Station?',
        answer:
          'Station Road, Fafadih, and Jail Road offer reliable budget and mid-range hotels within 5 to 10 minutes of Raipur Junction.',
      },
      {
        question: 'Do Raipur hotels provide GST bills for business travel?',
        answer:
          'Yes, all Rudraksh Safar business bookings in Raipur come with valid GST invoices for seamless company reimbursement.',
      },
      {
        question: 'What is the average price of a 3-star hotel in Raipur?',
        answer:
          'Clean 3-star hotels in Telibandha, Civil Lines, and Pandri typically cost ₹2,000 to ₹3,600 per night including breakfast.',
      },
      {
        question: 'Is UPI payment accepted for Raipur hotel bookings?',
        answer:
          'Yes, you can pay in full via UPI, credit/debit card, or EMI online in INR.',
      },
      {
        question: 'Can I book multiple rooms for a wedding in Raipur?',
        answer:
          'Yes! Contact our team on WhatsApp (+91 92291 50311) for group room blocks of 5+ rooms with negotiated banquet or breakfast rates.',
      },
    ],
    nearbyCitySlugs: ['bhilai', 'durg', 'bilaspur'],
    lastUpdated: '2026-11-28',
  },

  durg: {
    slug: 'durg',
    cityName: 'Durg',
    stateSlug: 'chhattisgarh',
    stateName: 'Chhattisgarh',
    countryCode: 'IN',
    h1: 'Hotels in Durg: Book Online',
    metaTitle: 'Hotels in Durg: Book Near Durg Junction & Civic Areas | Rudraksh Safar',
    metaDescription:
      'Find and book verified hotels in Durg near Durg Junction railway station, Station Road, and Padmanabhpur. Live INR rates, GST invoices & WhatsApp support.',
    oneSentenceAnswer:
      'Book clean, convenient stays near Durg Junction, Station Road, and Padmanabhpur with instant confirmation in INR.',
    answerFirstSummary:
      'Station Road and Malviya Nagar are ideal for travellers catching trains at Durg Junction, while Padmanabhpur and Borai Road suit families and industrial visitors. Tariffs average ₹1,100–₹3,400 per night, peaking between November and February.',
    bestSeason: 'October to March',
    typicalPriceRange: '₹1,100 – ₹3,400 / night',
    checkInStandard: '12:00 PM check-in · 11:00 AM check-out',
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
    areas: [
      {
        name: 'Station Road & Malviya Nagar',
        bestFor: 'Rail passengers & budget business trips',
        typicalPriceRange: '₹1,100 – ₹2,400 / night',
        distanceNote: '300m–1.5 km from Durg Junction',
        highlights: 'Walking distance to platforms, auto/cab stand right outside, and quick vegetarian tiffin spots.',
      },
      {
        name: 'Padmanabhpur & Pulgaon Chowk',
        bestFor: 'Families, BIT/govt visitors & wedding guests',
        typicalPriceRange: '₹1,800 – ₹3,400 / night',
        distanceNote: '3 km from Durg Junction · 10 min to Nehru Nagar Bhilai',
        highlights: 'Quieter residential streets, close to Shivnath River bridge and district courts.',
      },
    ],
    curatedHotels: [
      {
        name: 'Hotel Avalon Durg',
        tier: 'Family / Business',
        area: 'GE Road / Pulgaon, Durg',
        fromPriceInr: 2600,
        bestFor: 'Families & corporate guests',
        highlights: 'Modern rooms, restaurant, easy access to both Durg and Bhilai',
      },
      {
        name: 'Hotel Camria / Sagar International',
        tier: 'Mid-Range',
        area: 'Station Road, Durg',
        fromPriceInr: 1800,
        bestFor: 'Train travellers',
        highlights: 'Minutes from Durg Junction, 24-hour front desk',
      },
      {
        name: 'Hotel Sheela International',
        tier: 'Budget',
        area: 'Indira Market / Station Road',
        fromPriceInr: 1200,
        bestFor: 'Solo & short layovers',
        highlights: 'Central market access, affordable AC and non-AC rooms',
      },
    ],
    bundleUpsell: {
      title: 'Travelling from Durg Junction to Goa, Manali, or Kashmir?',
      description:
        'Pair your Durg overnight stay with our curated group and family packages departing directly from Durg Junction.',
      packageHref: '/goa-package-from-durg',
      packageLabel: 'View Packages from Durg',
    },
    howToReach:
      'Durg Junction (DURG) is a major rail hub on the Howrah–Nagpur–Mumbai line. Our Rudraksh Safar Bhilai-3 office is just 20 minutes away along GE Road.',
    faqs: [
      {
        question: 'Which hotels are closest to Durg Junction railway station?',
        answer:
          'Properties along Station Road and Malviya Nagar lie within 500 metres to 1.5 km of Durg Junction, making early-morning or late-night train transfers effortless.',
      },
      {
        question: 'Is it better to stay in Durg or Bhilai?',
        answer:
          'Stay in Durg if you need walking-distance access to Durg Junction or district courts. Choose adjacent Nehru Nagar (Bhilai) for larger 3–4 star banquet hotels.',
      },
      {
        question: 'Can Rudraksh Safar arrange local cabs from Durg Station?',
        answer:
          'Yes, message us on WhatsApp (+91 92291 50311) for station pickups to Bhilai, Borai Industrial Area, or Raipur Airport.',
      },
    ],
    nearbyCitySlugs: ['bhilai', 'raipur', 'bilaspur'],
    lastUpdated: '2026-11-28',
  },

  bilaspur: {
    slug: 'bilaspur',
    cityName: 'Bilaspur',
    stateSlug: 'chhattisgarh',
    stateName: 'Chhattisgarh',
    countryCode: 'IN',
    h1: 'Hotels in Bilaspur: Book Online',
    metaTitle: 'Hotels in Bilaspur: Book Near Railway Station, Vyapar Vihar & Link Road | Rudraksh Safar',
    metaDescription:
      'Book verified hotels in Bilaspur (Chhattisgarh) near Bilaspur Junction, Vyapar Vihar, and Link Road. Compare live INR prices with GST invoices and WhatsApp support.',
    oneSentenceAnswer:
      'Compare verified business and family hotels across Vyapar Vihar, Link Road, and Bilaspur Junction with instant INR booking.',
    answerFirstSummary:
      'Link Road and Vyapar Vihar are the top hotel zones in Bilaspur for High Court, SECR railway, and NTPC visitors, while Tarbahar suits budget transit near Bilaspur Junction. Expect ₹1,200 to ₹4,900 per night; October to March is peak season.',
    bestSeason: 'October to March',
    typicalPriceRange: '₹1,200 – ₹4,900 / night',
    checkInStandard: '12:00 PM check-in · 11:00 AM check-out',
    heroImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80',
    areas: [
      {
        name: 'Vyapar Vihar & Link Road',
        bestFor: 'Corporate, High Court & family stays',
        typicalPriceRange: '₹2,200 – ₹4,900 / night',
        distanceNote: '3 km from Bilaspur Junction · 20 min from Bilasa Devi Airport',
        highlights: 'Bilaspur’s commercial hub with malls, restaurants, and modern business hotels.',
      },
      {
        name: 'Tarbahar & Station Road',
        bestFor: 'Rail transit & budget stays',
        typicalPriceRange: '₹1,200 – ₹2,500 / night',
        distanceNote: '0.5–1.5 km from Bilaspur Junction',
        highlights: 'Quick access to SECR headquarters and early trains toward Korba, Raigarh, and Katni.',
      },
    ],
    curatedHotels: [
      {
        name: 'Courtyard / Marriott-tier & The Aananda Imperial',
        tier: 'Luxury / Resort',
        area: 'Vyapar Vihar, Bilaspur',
        fromPriceInr: 4200,
        bestFor: 'Executives & weddings',
        highlights: 'Banquet lawns, multi-cuisine dining, modern business amenities',
      },
      {
        name: 'Hotel Silver Oak',
        tier: 'Family / Business',
        area: 'Link Road, Bilaspur',
        fromPriceInr: 2500,
        bestFor: 'Families & High Court visitors',
        highlights: 'Central Link Road location, reliable service and parking',
      },
      {
        name: 'Hotel East Park',
        tier: 'Mid-Range',
        area: 'Agraseen Chowk, Bilaspur',
        fromPriceInr: 2300,
        bestFor: 'Business & transit',
        highlights: 'Close to city markets and 10 min from railway station',
      },
    ],
    bundleUpsell: {
      title: 'Need Achanakmar Wildlife Sanctuary or Amarkantak transfers?',
      description:
        'Book your Bilaspur hotel online and ask our team for weekend cab itineraries to Achanakmar Tiger Reserve and Amarkantak.',
      packageHref: '/tour-packages-from-bilaspur',
      packageLabel: 'Explore Bilaspur Packages & Tours',
    },
    howToReach:
      'Bilaspur Junction (BSP) is the SECR zonal headquarters with direct trains nationwide. Bilasa Devi Kevat Airport (PAB) at Chakarbhatha is 12 km from Vyapar Vihar.',
    faqs: [
      {
        question: 'Which area is best to stay in Bilaspur for High Court or SECR work?',
        answer:
          'Link Road and Vyapar Vihar offer the best mix of 3-star and 4-star hotels with quick cab access to both the Chhattisgarh High Court and SECR offices.',
      },
      {
        question: 'Are hotels available near Bilaspur Airport?',
        answer:
          'Vyapar Vihar hotels are only 15–20 minutes from Bilaspur (Chakarbhatha) Airport along NH-130.',
      },
      {
        question: 'Can I book Bilaspur hotels with GST invoice?',
        answer:
          'Yes, Rudraksh Safar provides GST-compliant invoices for corporate and legal travellers.',
      },
    ],
    nearbyCitySlugs: ['raipur', 'bhilai', 'durg'],
    lastUpdated: '2026-11-28',
  },

  manali: {
    slug: 'manali',
    cityName: 'Manali',
    stateSlug: 'himachal-pradesh',
    stateName: 'Himachal Pradesh',
    countryCode: 'IN',
    placeId: 'ChIJP9A_FgiHBDkRzXZQvg6oKYE',
    h1: 'Hotels in Manali: Book Online',
    metaTitle: 'Hotels in Manali: Book Mall Road, Old Manali & Vashisht Stays | Rudraksh Safar',
    metaDescription:
      'Compare live hotel prices in Manali across Mall Road, Old Manali, and Vashisht. Book family, couple, and budget rooms in INR with optional Volvo & sightseeing bundles.',
    oneSentenceAnswer:
      'Compare live rates for family, couple, and mountain-view hotels across Mall Road, Old Manali, and Vashisht in INR.',
    answerFirstSummary:
      'Mall Road and Log Huts Road suit families wanting flat walks and central heating, while Old Manali attracts couples and backpackers with riverside cafés. Rates range from ₹1,400 to ₹7,500+ per night; peak months are April–June and December–January.',
    bestSeason: 'April–June (summer escape) & December–January (snowfall)',
    typicalPriceRange: '₹1,400 – ₹7,500 / night',
    checkInStandard: '12:00 PM check-in · 11:00 AM check-out',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80',
    areas: [
      {
        name: 'Mall Road & Model Town',
        bestFor: 'Families, seniors & first-time visitors',
        typicalPriceRange: '₹2,200 – ₹5,500 / night',
        distanceNote: '200m–1 km from Manali Bus Stand · 14 km to Solang Valley',
        highlights: 'Flat pedestrian shopping, vegetarian dhabas, medical shops, and easy cab pickups.',
      },
      {
        name: 'Old Manali & Manu Temple Road',
        bestFor: 'Couples, solo travellers & café lovers',
        typicalPriceRange: '₹1,400 – ₹3,800 / night',
        distanceNote: '2 km uphill from Mall Road',
        highlights: 'Beas & Manalsu river views, wooden boutique stays, live-music cafés.',
      },
      {
        name: 'Log Huts Area & Hadimba Road',
        bestFor: 'Honeymooners & luxury mountain resorts',
        typicalPriceRange: '₹3,800 – ₹8,500 / night',
        distanceNote: '1.5 km from Mall Road · near Hadimba Devi Temple',
        highlights: 'Deodar cedar forests, private balconies, bonfires, and peaceful resort grounds.',
      },
      {
        name: 'Vashisht & Bahang (Solang Highway)',
        bestFor: 'Snow-trip travellers & hot-spring seekers',
        typicalPriceRange: '₹1,800 – ₹4,500 / night',
        distanceNote: '3.5 km north of Mall Road toward Atal Tunnel',
        highlights: 'Faster morning departure toward Solang Valley and Rohtang/Sissu without Mall Road traffic.',
      },
    ],
    curatedHotels: [
      {
        name: 'Snow Valley Resorts',
        tier: 'Family / Business',
        area: 'Log Huts Area, Manali',
        fromPriceInr: 4200,
        bestFor: 'Families & honeymooners',
        highlights: 'Apple orchard views, buffet veg/non-veg meals, kids play zone',
      },
      {
        name: 'Apple Country Resort',
        tier: 'Luxury / Resort',
        area: 'Log Huts Area, Manali',
        fromPriceInr: 5500,
        bestFor: 'Couples & luxury stays',
        highlights: 'Pure-veg dining option, spa, panoramic snow-peak balconies',
      },
      {
        name: 'Hotel Snow Crest Manor',
        tier: 'Mid-Range',
        area: 'Beyond Log Huts, Manali',
        fromPriceInr: 2800,
        bestFor: 'Group & family trips',
        highlights: 'Quiet pine setting, heater rooms on request, Solang cab desk',
      },
      {
        name: 'Zostel / Boutique Guesthouses Old Manali',
        tier: 'Budget',
        area: 'Old Manali',
        fromPriceInr: 1400,
        bestFor: 'Solo & college groups',
        highlights: 'Café street access, riverside walks, vibrant social vibe',
      },
    ],
    bundleUpsell: {
      title: 'Want Volvo transfers, Solang Valley cab & Kasol added?',
      description:
        'Skip booking transport separately — add our popular Manali & Kasol group or private sightseeing bundle from ₹5,999.',
      packageHref: '/manali-kasol-strangers-trip/from-bhilai',
      packageLabel: 'View Manali 5N/6D Package (₹5,999)',
    },
    howToReach:
      'Overnight AC Volvo buses run daily from Delhi ISBT (11–13 hrs) and Chandigarh (7–8 hrs). Nearest airport is Bhuntar (Kullu–Manali, 50 km).',
    faqs: [
      {
        question: 'Which area is best to stay in Manali for families?',
        answer:
          'Mall Road and Log Huts Road are best for families because they offer flat walking access to restaurants, lift-equipped hotels, and less steep climbing than Old Manali.',
      },
      {
        question: 'Are room heaters included in Manali hotels during winter?',
        answer:
          '4-star resorts often provide central heating, while 3-star and budget hotels usually charge ₹300–₹500 per night for portable oil/blower heaters. Check rate inclusions or ask us on WhatsApp before booking.',
      },
      {
        question: 'Is pure vegetarian / Jain food easy to find at Manali hotels?',
        answer:
          'Yes! Most family hotels around Mall Road and Hadimba Road serve 100% vegetarian options and can prepare Jain meals on advance request.',
      },
      {
        question: 'Are hotels in Manali couple-friendly?',
        answer:
          'Yes, most hotels in Old Manali, Aleo, and Log Huts accept unmarried couples with valid government photo IDs (18+). Local Himachal ID restrictions may apply at a few properties.',
      },
      {
        question: 'What is the typical check-in time if my Volvo bus reaches at 7 AM?',
        answer:
          'Standard hotel check-in is 12:00 PM. Most Manali hotels let you store luggage at reception for free while you freshen up or have breakfast, or offer early check-in at a small fee if rooms are vacant.',
      },
      {
        question: 'Can I cancel or modify my Manali hotel booking?',
        answer:
          'Look for the green "Free Cancellation" badge on live room cards. Refundable rates allow free cancellation up to 24–72 hours before check-in depending on the room policy.',
      },
    ],
    nearbyCitySlugs: ['haridwar', 'rishikesh'],
    lastUpdated: '2026-11-28',
  },

  haridwar: {
    slug: 'haridwar',
    cityName: 'Haridwar',
    stateSlug: 'uttarakhand',
    stateName: 'Uttarakhand',
    countryCode: 'IN',
    h1: 'Hotels in Haridwar: Book Online',
    metaTitle: 'Hotels in Haridwar: Book Near Har Ki Pauri & Bhupatwala | Rudraksh Safar',
    metaDescription:
      'Book clean, family-friendly hotels in Haridwar near Har Ki Pauri, Bhupatwala, and Railway Station. Pure-veg stays, senior-friendly lifts & local Uttarakhand support.',
    oneSentenceAnswer:
      'Book clean, senior-friendly and pure-veg hotels near Har Ki Pauri and Bhupatwala with local Haridwar support.',
    answerFirstSummary:
      'Har Ki Pauri suits pilgrims wanting walkable evening Ganga Aarti access, while Bhupatwala (Haridwar–Rishikesh Highway) offers newer, quieter family hotels with parking and lifts. Expect ₹1,300 to ₹5,500 per night; May–June and auspicious bath dates see highest demand.',
    bestSeason: 'February–April & September–November (pleasant ghat weather)',
    typicalPriceRange: '₹1,300 – ₹5,500 / night',
    checkInStandard: '12:00 PM check-in · 11:00 AM check-out',
    heroImage: 'https://images.unsplash.com/photo-1582510003150-3c464f8a0c58?auto=format&fit=crop&w=1600&q=80',
    areas: [
      {
        name: 'Har Ki Pauri & Upper Road',
        bestFor: 'Pilgrims & evening Ganga Aarti walkers',
        typicalPriceRange: '₹1,600 – ₹4,200 / night',
        distanceNote: '100m–800m from Brahma Kund Ghat · 2 km from Railway Station',
        highlights: 'Immediate walk to Ganga Aarti; note that private cars are restricted inside narrow lanes during evening hours.',
      },
      {
        name: 'Bhupatwala (Haridwar–Rishikesh Highway)',
        bestFor: 'Families with cars, senior citizens & Char Dham groups',
        typicalPriceRange: '₹1,800 – ₹5,500 / night',
        distanceNote: '4 km from Har Ki Pauri · home to Rudraksh Safar Support Office',
        highlights: 'Modern lift-equipped hotels, dedicated parking, Shantikunj nearby, and zero highway congestion.',
      },
      {
        name: 'Railway Station Road & Ranipur More',
        bestFor: 'Budget transit & early morning trains',
        typicalPriceRange: '₹1,200 – ₹2,600 / night',
        distanceNote: '200m–1.5 km from Haridwar Junction',
        highlights: 'Convenient e-rickshaws to all ghats and pure-veg South & North Indian eateries.',
      },
    ],
    curatedHotels: [
      {
        name: 'Haveli Hari Ganga (by Leisure Hotels)',
        tier: 'Luxury / Resort',
        area: 'Ramghat, near Har Ki Pauri',
        fromPriceInr: 5500,
        bestFor: 'Heritage & private ghat',
        highlights: 'Private Ganga ghat, pure sattvik dining, heritage courtyard',
      },
      {
        name: 'Hotel Ganga Azure / Godwin Haridwar',
        tier: 'Family / Business',
        area: 'Bhupatwala Highway, Haridwar',
        fromPriceInr: 2900,
        bestFor: 'Families & seniors',
        highlights: 'Elevators, basement parking, 100% vegetarian kitchen',
      },
      {
        name: 'Hotel Alpana / Midtown',
        tier: 'Budget',
        area: 'Upper Road / Station Road',
        fromPriceInr: 1400,
        bestFor: 'Solo & short yatras',
        highlights: 'Walkable to Har Ki Pauri & Haridwar Junction',
      },
    ],
    bundleUpsell: {
      title: 'Planning Haridwar–Rishikesh or Kumbh / Char Dham Yatra?',
      description:
        'Our Bhupatwala office handles Ganga Aarti seating guidance, Rishikesh transfers, and complete pilgrimage packages.',
      packageHref: '/kumbh-mela-2027',
      packageLabel: 'Explore Haridwar & Kumbh Packages',
    },
    howToReach:
      'Haridwar Junction (HW) connects directly to Delhi (4.5 hrs via Vande Bharat/Shatabdi) and major Indian cities. Dehradun Jolly Grant Airport (DED) is 38 km away.',
    faqs: [
      {
        question: 'Which area is best to stay in Haridwar with elderly parents?',
        answer:
          'Bhupatwala on the Haridwar–Rishikesh Highway is best for senior citizens because hotels have elevators, wheelchair ramps, and car drop-off right at the lobby — unlike the narrow lanes near Har Ki Pauri.',
      },
      {
        question: 'Do all hotels in Haridwar serve pure vegetarian food?',
        answer:
          'Yes, Haridwar is a strictly vegetarian, alcohol-free holy city inside municipal limits, so all hotels serve 100% vegetarian meals.',
      },
      {
        question: 'How early should I book for Ganga Dussehra, Kanwar, or Ardh Kumbh dates?',
        answer:
          'Major snan and festival dates sell out 4 to 8 weeks ahead. Book early with refundable rates or contact our Haridwar desk on +91 92291 50311.',
      },
    ],
    nearbyCitySlugs: ['rishikesh', 'manali'],
    lastUpdated: '2026-11-28',
  },

  rishikesh: {
    slug: 'rishikesh',
    cityName: 'Rishikesh',
    stateSlug: 'uttarakhand',
    stateName: 'Uttarakhand',
    countryCode: 'IN',
    placeId: 'ChIJEfGTz2c-CTkR_huUb0qAeMw',
    h1: 'Hotels in Rishikesh: Book Online',
    metaTitle: 'Hotels in Rishikesh: Book Tapovan, Laxman Jhula & Ganga-View Stays | Rudraksh Safar',
    metaDescription:
      'Compare live hotel prices in Rishikesh across Tapovan, Laxman Jhula, and Swarg Ashram. Book Ganga-view, family, and adventure stays in INR with WhatsApp support.',
    oneSentenceAnswer:
      'Compare live rates for Ganga-view hotels, family resorts, and boutique stays across Tapovan and Swarg Ashram.',
    answerFirstSummary:
      'Tapovan (near Laxman Jhula) is Rishikesh’s hub for Ganga-view boutique hotels, cafés, and rafting pickups, while Swarg Ashram and Muni Ki Reti offer quieter ashram-side family stays. Rates run ₹1,500–₹7,000+ per night; September–November and February–May are ideal.',
    bestSeason: 'September–November & February–May (rafting & pleasant evenings)',
    typicalPriceRange: '₹1,500 – ₹7,000 / night',
    checkInStandard: '1:00 PM check-in · 11:00 AM check-out',
    heroImage: 'https://images.unsplash.com/photo-1591018653367-9c01498b3320?auto=format&fit=crop&w=1600&q=80',
    areas: [
      {
        name: 'Tapovan & Badrinath Highway',
        bestFor: 'Couples, friends, rafting & café-goers',
        typicalPriceRange: '₹2,200 – ₹6,500 / night',
        distanceNote: '5 km from Rishikesh Railway Station · 22 km from Jolly Grant Airport',
        highlights: 'Modern rooftop pools, yoga studios, German bakeries, and direct cab access.',
      },
      {
        name: 'Swarg Ashram & Ram Jhula',
        bestFor: 'Spiritual travellers, families & Parmarth Aarti',
        typicalPriceRange: '₹1,600 – ₹4,500 / night',
        distanceNote: 'Pedestrian-friendly east bank near Parmarth Niketan',
        highlights: 'Peaceful ghats, evening Parmarth Niketan Ganga Aarti, zero traffic noise.',
      },
      {
        name: 'Shivpuri (River-Camp Belt)',
        bestFor: 'Adventure groups & riverside resorts',
        typicalPriceRange: '₹2,800 – ₹7,000 / night',
        distanceNote: '16 km upstream from Tapovan',
        highlights: 'Ganga beach access, rafting starting point, bonfires and nature cottages.',
      },
    ],
    curatedHotels: [
      {
        name: 'Aloha On The Ganges',
        tier: 'Luxury / Resort',
        area: 'Tapovan, Rishikesh',
        fromPriceInr: 6800,
        bestFor: 'Families & luxury Ganga views',
        highlights: 'Infinity pool overlooking the Ganga, private ghat access, pure-veg dining',
      },
      {
        name: 'Divine Resort & Spa',
        tier: 'Family / Business',
        area: 'Laxman Jhula Road, Tapovan',
        fromPriceInr: 3900,
        bestFor: 'Couples & families',
        highlights: 'Ganga-facing balconies, spa, steps from cafés and yoga centres',
      },
      {
        name: 'Hotel Ganga Kinare',
        tier: 'Family / Business',
        area: 'Veerbhadra Road, Rishikesh',
        fromPriceInr: 4500,
        bestFor: 'Seniors & quiet riverside stays',
        highlights: 'Dedicated private ghat, evening aarti on property, lift access',
      },
    ],
    bundleUpsell: {
      title: 'Add Ganga Rafting, Bungee Jumping, or Haridwar–Mussoorie sightseeing',
      description:
        'Book your Rishikesh hotel now and message our Uttarakhand desk for verified rafting operators and private cab bundles.',
      packageHref: '/uttarakhand-tour-packages',
      packageLabel: 'Explore Uttarakhand Packages',
    },
    howToReach:
      'Dehradun Jolly Grant Airport (DED) is only 35 minutes from Tapovan. Yog Nagari Rishikesh (YNRK) and Haridwar Junction (24 km) provide rail access.',
    faqs: [
      {
        question: 'Which area is best to stay in Rishikesh for families?',
        answer:
          'Tapovan (lower highway side) and Veerbhadra Road offer easy car access, elevators, and quiet Ganga-facing family resorts without steep climbs.',
      },
      {
        question: 'Can I book Ganga rafting along with my Rishikesh hotel?',
        answer:
          'Yes! After booking your room, WhatsApp us at 9229150311 and our Haridwar-Rishikesh team will add government-certified Shivpuri-to-NIM Beach rafting slots.',
      },
      {
        question: 'Are Rishikesh hotels pure vegetarian?',
        answer:
          'Yes, Tapovan, Muni Ki Reti, and Swarg Ashram properties serve strictly vegetarian and non-alcoholic menus in line with local regulations.',
      },
    ],
    nearbyCitySlugs: ['haridwar', 'manali'],
    lastUpdated: '2026-11-28',
  },
};

export const PRIORITY_CITY_LIST = Object.values(HOTEL_CITIES);
export const PRIORITY_STATE_LIST = Object.values(HOTEL_STATES);
