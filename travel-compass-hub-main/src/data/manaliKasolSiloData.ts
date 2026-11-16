export interface CitySiloData {
  cityKey: 'bhilai' | 'raipur' | 'durg' | 'bilaspur' | 'rajnandgaon';
  cityName: string;
  cityTitle: string;
  tagline: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  geo: {
    region: string;
    placename: string;
    position: string;
    icbm: string;
  };
  distanceToDelhi: string;
  transitTimeRail: string;
  transitTimeAir: string;
  localHubDescription: string;
  railTransit: {
    stationName: string;
    trains: { name: string; number: string; timing: string; note: string }[];
    insiderTip: string;
  };
  airTransit: {
    airportName: string;
    driveTimeToAirport: string;
    flightDuration: string;
    airlines: string;
    insiderTip: string;
  };
  communityVibe: {
    title: string;
    audience: string[];
    description: string;
  };
  localOfficeSupport: {
    location: string;
    supportNote: string;
    contactNumber: string;
  };
  localFaqs: { question: string; answer: string }[];
}

export const MANALI_KASOL_SILO_DATA: Record<string, CitySiloData> = {
  bhilai: {
    cityKey: 'bhilai',
    cityName: 'Bhilai',
    cityTitle: 'Manali × Kasol Strangers Trip from Bhilai',
    tagline: 'Connect from Steel City to the Snowy Peaks of Himachal',
    slug: '/manali-kasol-strangers-trip/from-bhilai',
    metaTitle: 'Manali × Kasol Strangers Trip from Bhilai ₹5,999 | Solo & Group Tour',
    metaDescription: 'Book Manali & Kasol Strangers Group Trip from Bhilai for ₹5,999. Come solo, meet your squad! Complete train/flight transit guidance from Bhilai to Delhi, riverside Kasol camp, Solang & bonfire.',
    metaKeywords: 'Manali Kasol package from Bhilai, cheapest Manali trip from Bhilai, Manali Kasol package 5999 Bhilai, budget Himachal tour for college students Bhilai, Rungta Shankara Manali trip, cheap solo trip to Kasol from Bhilai, Manali group tour from Bhilai under 6000, student holiday package Bhilai, budget backpacking Himachal trip',
    geo: {
      region: 'IN-CT',
      placename: 'Bhilai, Chhattisgarh',
      position: '21.2094;81.4285',
      icbm: '21.2094, 81.4285'
    },
    distanceToDelhi: '1,280 km',
    transitTimeRail: '18 - 20 hrs (Overnight Superfast)',
    transitTimeAir: '1 hr 45 mins (via Raipur Airport, 45 min drive)',
    localHubDescription: 'For youngsters, engineering students, and working professionals in Bhilai Steel City (Nehru Nagar, Civic Centre, Bhilai-3, Smriti Nagar, Sector areas), this trip offers an escape to Himachal without needing a pre-arranged group. We coordinate your train or flight to Delhi so you travel with other Bhilai explorers.',
    railTransit: {
      stationName: 'Bhilai Power House (BPH) / Durg Junction (DURG)',
      trains: [
        { name: 'Chhattisgarh Express', number: '18237', timing: 'Board at BPH, direct to H. Nizamuddin', note: 'Daily train with sleeper and 3AC berths' },
        { name: 'Gondwana SF Express', number: '12409', timing: 'Board at Durg/Bhilai, fast overnight to Delhi', note: 'Fastest overnight option for Friday reporting' },
        { name: 'Bilaspur - NDLS Rajdhani', number: '12441', timing: 'Via Durg Jn (approx. 10 mins from Bhilai)', note: 'Premier high-speed AC transit directly to New Delhi' }
      ],
      insiderTip: 'Board the Thursday morning/afternoon train from Bhilai to reach Delhi Friday morning, allowing you to freshen up before our 6:00 PM AC Tempo Traveller departure!'
    },
    airTransit: {
      airportName: 'Swami Vivekananda Airport, Raipur (RPR)',
      driveTimeToAirport: '45 - 55 minutes via GE Road / expressway',
      flightDuration: '1 hr 45 mins nonstop to Delhi (DEL)',
      airlines: 'IndiGo, Air India (multiple morning flights)',
      insiderTip: 'Catch a 7:30 AM or 9:15 AM flight from Raipur to land in Delhi by midday. Our team will guide you on direct metro access to the reporting point.'
    },
    communityVibe: {
      title: 'Bhilai Youth & Solo Explorer Culture',
      audience: ['Rungta, Shankara & CSIT College Students', 'BSP Engineers & SAIL Executives', 'Young IT Professionals working remotely', 'Solo Female Backpackers'],
      description: 'Bhilai has a vibrant backpacking spirit. Instead of waiting for friends whose plans always fail, solo travellers from Bhilai unite into one squad.'
    },
    localOfficeSupport: {
      location: 'Rudraksh Safar Head Operations Desk, Bhilai-3, GE Road, Chhattisgarh',
      supportNote: 'You can meet our trip coordinators in person at our Bhilai office, verify your itinerary, pay in person (Cash/UPI/Card), and get printed booking vouchers.',
      contactNumber: '9713057086'
    },
    localFaqs: [
      {
        question: 'Can I visit the Rudraksh Safar office in Bhilai before booking?',
        answer: 'Yes! Our primary operations desk is located on GE Road in Bhilai-3. You can visit us in person to review the itinerary, meet our team, and collect receipts.'
      },
      {
        question: 'Do you arrange train or flight tickets from Bhilai to Delhi?',
        answer: 'Yes! While the base ₹5,999 package starts from Delhi, our Bhilai desk provides complete ticket bundling assistance to book your trains (Chhattisgarh Exp, Gondwana Exp) or flights from Raipur at the best available rates.'
      },
      {
        question: 'Will there be other travellers from Bhilai in my batch?',
        answer: 'Almost always yes! We host multiple youth and college travellers from Bhilai every batch and create a pre-trip WhatsApp group so you can travel on the train together.'
      }
    ]
  },

  raipur: {
    cityKey: 'raipur',
    cityName: 'Raipur',
    cityTitle: 'Manali × Kasol Strangers Trip from Raipur',
    tagline: 'Capital City Departure Sync: Flights & Superfast Rail to the Himalayas',
    slug: '/manali-kasol-strangers-trip/from-raipur',
    metaTitle: 'Manali × Kasol Strangers Trip from Raipur ₹5,999 | Social Group Tour',
    metaDescription: 'Join Manali & Kasol Strangers Trip from Raipur for ₹5,999. Direct flight and train sync from Raipur to Delhi, Kasol riverside camping, Solang adventure & bonfire night.',
    metaKeywords: 'Manali tour package from Raipur, cheapest Manali Kasol trip from Raipur, budget Manali tour package Raipur 5999, Raipur college trip to Manali, NIT Raipur Manali package, cheap Himachal backpacking trip from Raipur, solo travel under 6000 from Raipur, affordable Kasol camping Raipur, student group trips Raipur',
    geo: {
      region: 'IN-CT',
      placename: 'Raipur, Chhattisgarh',
      position: '21.2514;81.6296',
      icbm: '21.2514, 81.6296'
    },
    distanceToDelhi: '1,250 km',
    transitTimeRail: '17 - 19 hrs',
    transitTimeAir: '1 hr 45 mins nonstop',
    localHubDescription: 'Travellers from Raipur (Telibandha, Shankar Nagar, Pandri, VIP Road, Tatibandh & Naya Raipur) enjoy direct air and premier rail links to Delhi. Our team coordinates reporting times so your transit from Raipur into Delhi is seamless.',
    railTransit: {
      stationName: 'Raipur Junction (R)',
      trains: [
        { name: 'Bilaspur - NDLS Rajdhani Express', number: '12441', timing: 'Board at Raipur Junction around 2:40 PM', note: 'Fastest luxury train arriving New Delhi next morning' },
        { name: 'Gondwana Superfast Express', number: '12409', timing: 'Board at Raipur Junction', note: 'Popular option with good 3AC/sleeper availability' },
        { name: 'Samta Superfast Express', number: '12807', timing: 'Direct transit to H. Nizamuddin', note: 'Reliable overnight schedule' }
      ],
      insiderTip: 'Taking the Thursday afternoon Rajdhani Express from Raipur Junction gets you into New Delhi Station by 10:45 AM Friday—perfect for exploring Connaught Place before the 6:00 PM tempo traveller pickup!'
    },
    airTransit: {
      airportName: 'Swami Vivekananda Airport, Raipur (RPR)',
      driveTimeToAirport: '15 - 25 mins from Central Raipur',
      flightDuration: '1 hr 45 mins direct',
      airlines: 'IndiGo, Air India, Vistara',
      insiderTip: 'Morning flights 6E-2051 or AI-478 reach Delhi Airport Terminal 2/3 before noon. Take the Delhi Airport Express Metro directly to New Delhi / Kashmiri Gate in 25 minutes.'
    },
    communityVibe: {
      title: 'Raipur Youth, Corporate & Startup Community',
      audience: ['NIT Raipur, AIIMS & Hidayatullah Law Students', 'Corporate Executives from Magneto & City Center Hubs', 'Entrepreneurs & Creatives', 'Solo Explorers'],
      description: 'Raipur has a buzzing community of young corporate professionals and university students who crave weekend mountain getaways.'
    },
    localOfficeSupport: {
      location: 'Direct Assistance Desk & 24/7 Helpline for Raipur Travellers',
      supportNote: 'Our dedicated Raipur travel manager handles train PNR reservations, flight tickets, and Delhi reporting coordination.',
      contactNumber: '9713057086'
    },
    localFaqs: [
      {
        question: 'Which is better from Raipur: flight or train?',
        answer: 'If you want to save time, morning flights from Raipur (RPR) to Delhi take just 1 hr 45 mins and cost moderately when booked in advance. If you prefer budget travel, the Bilaspur-NDLS Rajdhani or Gondwana Express from Raipur Junction is extremely comfortable.'
      },
      {
        question: 'How do I reach the Delhi departure point from Delhi Airport / New Delhi Railway Station?',
        answer: 'Our trip lead sends detailed GPS locations and metro directions 24 hours prior. From Delhi Airport, take the Airport Express Line to New Delhi, then the Yellow Line to Kashmiri Gate or Vidhan Sabha (Majnu Ka Tila).'
      },
      {
        question: 'Can college friends from NIT Raipur or AIIMS book together?',
        answer: 'Yes! While it is a "Strangers Trip" ideal for solo travellers, friend duos and small groups from Raipur colleges frequently join to meet new people from other states.'
      }
    ]
  },

  durg: {
    cityKey: 'durg',
    cityName: 'Durg',
    cityTitle: 'Manali × Kasol Strangers Trip from Durg',
    tagline: 'Direct Rail Origin Hub: Originating Superfast Trains to Delhi',
    slug: '/manali-kasol-strangers-trip/from-durg',
    metaTitle: 'Manali × Kasol Strangers Trip from Durg ₹5,999 | Group Travel Deals',
    metaDescription: 'Book Manali × Kasol Strangers Trip from Durg for ₹5,999. Originating direct trains from Durg Junction to Delhi, riverside camping in Kasol, Solang snow sports & bonfire.',
    metaKeywords: 'Manali tour package from Durg, budget Manali trip from Durg 5999, BIT Durg Manali Kasol college trip, cheap group tour to Manali from Durg, Durg to Kasol budget package, Himachal student trip under 6000 Durg, CSVTU college Manali tour, affordable backpacking trip Durg',
    geo: {
      region: 'IN-CT',
      placename: 'Durg, Chhattisgarh',
      position: '21.1904;81.2849',
      icbm: '21.1904, 81.2849'
    },
    distanceToDelhi: '1,290 km',
    transitTimeRail: '18 - 20 hrs (Originating Trains)',
    transitTimeAir: '1 hr 45 mins (via Raipur Airport, 55 min drive)',
    localHubDescription: 'Durg Junction is one of the most prominent originating railway hubs of Central India. Travellers from Durg (Mohan Nagar, Padmanabhpur, Ganj Para, CSVTU, BIT Durg) get the distinct advantage of boarding originating Delhi-bound express trains directly from Platform 1.',
    railTransit: {
      stationName: 'Durg Junction (DURG)',
      trains: [
        { name: 'Chhattisgarh Express (Originating)', number: '18237', timing: 'Starts from Durg Junction', note: 'Guaranteed boarding on platform, daily train' },
        { name: 'Durg - H. Nizamuddin Humsafar Express', number: '22867', timing: 'Originates from Durg', note: 'All-3AC comfortable superfast transit' },
        { name: 'Chhattisgarh Sampark Kranti Express', number: '12823', timing: 'Fast originating train to H. Nizamuddin', note: 'Minimal stops, arrives early in Delhi' }
      ],
      insiderTip: 'Because trains originate at Durg Junction, your train is cleaned and positioned early at the platform. You get stress-free boarding with plenty of luggage space!'
    },
    airTransit: {
      airportName: 'Swami Vivekananda Airport, Raipur (RPR)',
      driveTimeToAirport: '50 - 60 minutes via 4-lane expressway',
      flightDuration: '1 hr 45 mins nonstop',
      airlines: 'IndiGo, Air India',
      insiderTip: 'Share a direct cab with fellow Durg travellers straight to Raipur airport for early morning departures.'
    },
    communityVibe: {
      title: 'Durg Student & Young Professional Hub',
      audience: ['BIT Durg & CSVTU University Students', 'Rungta Group of Colleges Students', 'Central Railway Employees & Families', 'Solo Explorers'],
      description: 'Durg has hundreds of students and young professionals seeking genuine outdoor adventures. Our Strangers Trip is the number one choice for first-time backpackers.'
    },
    localOfficeSupport: {
      location: 'Just 10 minutes from Durg at our Bhilai-3 Registered Office',
      supportNote: 'Travellers from Durg can easily drive down GE Road to our Bhilai operations office for complete face-to-face consultation and booking.',
      contactNumber: '9713057086'
    },
    localFaqs: [
      {
        question: 'Why is Durg Junction ideal for this trip?',
        answer: 'Durg Junction is the originating station for key Delhi-bound trains like the Chhattisgarh Express, Humsafar Express, and Sampark Kranti. You board an empty train directly at the starting point, making seat settling and luggage handling super easy.'
      },
      {
        question: 'Can college students from Durg get a student discount or squad perk?',
        answer: 'Yes! For college groups of 4 or more from BIT Durg, CSVTU, or Rungta, we offer special merchandise or adventure activity credit. Contact our coordinator at 9713057086.'
      },
      {
        question: 'Is it safe for solo female travellers from Durg?',
        answer: '100% safe. We verify government IDs of all co-travellers, maintain female-only quad room sharing, and provide a 24/7 dedicated trip leader throughout the journey.'
      }
    ]
  },

  bilaspur: {
    cityKey: 'bilaspur',
    cityName: 'Bilaspur',
    cityTitle: 'Manali × Kasol Strangers Trip from Bilaspur',
    tagline: 'SECR Railway Headquarters: Direct Rajdhani & Express Connectivity',
    slug: '/manali-kasol-strangers-trip/from-bilaspur',
    metaTitle: 'Manali × Kasol Strangers Trip from Bilaspur ₹5,999 | Group Tour',
    metaDescription: 'Book Manali & Kasol Strangers Group Trip from Bilaspur for ₹5,999. Direct Bilaspur-NDLS Rajdhani connectivity, Kasol riverside camping, Solang Valley & bonfire.',
    metaKeywords: 'Manali package from Bilaspur, cheapest Manali trip from Bilaspur 5999, GGU Bilaspur Manali tour package, budget Kasol trip Bilaspur, Bilaspur to Manali tour under 6000, SECR cheap holiday package Manali, student travel group Bilaspur, affordable Himachal trip Bilaspur',
    geo: {
      region: 'IN-CT',
      placename: 'Bilaspur, Chhattisgarh',
      position: '22.0797;82.1409',
      icbm: '22.0797, 82.1409'
    },
    distanceToDelhi: '1,150 km',
    transitTimeRail: '16 - 18 hrs (Rajdhani)',
    transitTimeAir: 'Via Raipur Airport or Bilasa Devi Kevat Airport',
    localHubDescription: 'Bilaspur, the judicial capital and railway zonal headquarters of SECR, has world-class rail connectivity to Delhi. Travellers from Vyapar Vihar, Rama Magneto hub, Nehru Nagar, Sirgitti, and Guru Ghasidas University (GGU) can hop onto premier trains directly to Delhi for our Friday batch reporting.',
    railTransit: {
      stationName: 'Bilaspur Junction (BSP)',
      trains: [
        { name: 'Bilaspur - New Delhi Rajdhani Express', number: '12441', timing: 'Starts directly from Bilaspur Junction at 2:00 PM', note: 'Flagship premier AC train arriving New Delhi next morning' },
        { name: 'Chhattisgarh Express', number: '18237', timing: 'Direct through-service to H. Nizamuddin', note: 'Everyday train with pocket-friendly sleeper berths' },
        { name: 'Gondwana Express', number: '12409', timing: 'Superfast overnight route', note: 'Reliable schedule connecting SECR directly to Delhi' }
      ],
      insiderTip: 'The Bilaspur Rajdhani (12441) originates right here at Bilaspur Junction on Thursdays! Board at 2:00 PM, enjoy gourmet onboard meals, and wake up fresh in Delhi at 10:45 AM Friday ready for Himachal!'
    },
    airTransit: {
      airportName: 'Raipur Airport (RPR) / Bilaspur Chakarbhata Airport (PAB)',
      driveTimeToAirport: '1 hr 45 min drive to Raipur Airport via new 4-lane highway',
      flightDuration: '1 hr 45 mins nonstop from Raipur to Delhi',
      airlines: 'IndiGo, Air India',
      insiderTip: 'The newly upgraded Bilaspur-Raipur expressway makes reaching Raipur Airport swift and smooth for morning Delhi flights.'
    },
    communityVibe: {
      title: 'Bilaspur Youth, Judicial & Railway Hub',
      audience: ['Guru Ghasidas Central University (GGU) Students', 'High Court Advocates & Law Clerks', 'SECL & Railway Officers', 'Solo Explorers & Photographers'],
      description: 'Bilaspur travellers have an unmatched appetite for mountain trekking and cafe hopping. Our social group trip eliminates the hassle of solo planning.'
    },
    localOfficeSupport: {
      location: 'Dedicated Bilaspur Virtual Desk & Bhilai Operations Support',
      supportNote: 'Our SECR train ticketing specialists assist Bilaspur travellers in securing confirmed berths on the Bilaspur Rajdhani and Chhattisgarh Express.',
      contactNumber: '9713057086'
    },
    localFaqs: [
      {
        question: 'Which is the most convenient train from Bilaspur to join the Friday batch?',
        answer: 'The Bilaspur-New Delhi Rajdhani Express (12441) is the golden choice. It starts directly from Bilaspur Junction on Thursday at 2:00 PM and arrives at New Delhi Station on Friday at 10:45 AM, giving you plenty of time before our 6:00 PM tempo traveller departure.'
      },
      {
        question: 'Can Bilaspur travellers join the same WhatsApp group as others?',
        answer: 'Yes! We put all travellers from Chhattisgarh (Bilaspur, Raipur, Bhilai, Durg) in a single regional WhatsApp group so you can coordinate train bookings together.'
      },
      {
        question: 'How do I book from Bilaspur without visiting Bhilai in person?',
        answer: 'You can complete your entire booking digitally via UPI or Net Banking. We issue official GST-compliant digital invoices and PDF vouchers immediately with full booking protection.'
      }
    ]
  },

  rajnandgaon: {
    cityKey: 'rajnandgaon',
    cityName: 'Rajnandgaon',
    cityTitle: 'Manali × Kasol Strangers Trip from Rajnandgaon',
    tagline: 'Sanskardhani to the Himalayas: Cultured Backpacking Circuit',
    slug: '/manali-kasol-strangers-trip/from-rajnandgaon',
    metaTitle: 'Manali × Kasol Strangers Trip from Rajnandgaon ₹5,999 | Group Trip',
    metaDescription: 'Join Manali & Kasol Strangers Trip from Rajnandgaon for ₹5,999. Rail connectivity via RJN & Durg, Kasol riverside camping, Solang Valley snow peaks & bonfire night.',
    metaKeywords: 'Manali tour package from Rajnandgaon, cheapest Manali Kasol trip from Rajnandgaon 5999, budget Manali package Rajnandgaon, Digvijay college Manali trip, cheap Himachal group tour from Rajnandgaon, Sanskardhani youth backpacking tour, Manali trip under 6000 Rajnandgaon',
    geo: {
      region: 'IN-CT',
      placename: 'Rajnandgaon, Chhattisgarh',
      position: '21.0974;81.0366',
      icbm: '21.0974, 81.0366'
    },
    distanceToDelhi: '1,320 km',
    transitTimeRail: '19 - 21 hrs',
    transitTimeAir: 'Via Raipur Airport (1 hr 15 min drive)',
    localHubDescription: 'Rajnandgaon (the Sanskardhani of Chhattisgarh), including Dongargarh, Chhuria, and Somni areas, connects smoothly to Delhi via direct express trains halting at Rajnandgaon Railway Station (RJN) or by quick connection through Durg Junction just 30 minutes away.',
    railTransit: {
      stationName: 'Rajnandgaon Railway Station (RJN) / Durg Junction (DURG)',
      trains: [
        { name: 'Gondwana Superfast Express', number: '12409', timing: 'Halts directly at Rajnandgaon Station', note: 'Fastest direct rail transit to Hazrat Nizamuddin' },
        { name: 'Samta Superfast Express', number: '12807', timing: 'Board at RJN', note: 'Direct Superfast connection to Delhi' },
        { name: 'Connecting via Durg Junction', number: 'Multiple', timing: 'Just 30 km / 30 mins drive from Rajnandgaon', note: 'Unlocks originating trains like Humsafar and Sampark Kranti' }
      ],
      insiderTip: 'Board the Gondwana Express directly from Rajnandgaon Railway Station (RJN) or take a quick 30-minute local/cab to Durg Junction to access all originating Delhi superfasts!'
    },
    airTransit: {
      airportName: 'Swami Vivekananda Airport, Raipur (RPR)',
      driveTimeToAirport: '1 hr 15 mins via National Highway 53',
      flightDuration: '1 hr 45 mins nonstop to Delhi',
      airlines: 'IndiGo, Air India',
      insiderTip: 'Hop onto NH53 directly to Raipur Airport for morning flights, landing in Delhi with plenty of buffer time before evening group assembly.'
    },
    communityVibe: {
      title: 'Rajnandgaon Youth & Explorers Circle',
      audience: ['Digvijay College Students & Alumni', 'Medical & Dental College Students', 'Local Business Entrepreneurs & Traders', 'Solo Adventure Seekers'],
      description: 'Young explorers from Rajnandgaon love heading north to escape the plains. This curated Strangers Trip provides total safety, vetted peers, and zero hassle.'
    },
    localOfficeSupport: {
      location: 'Bhilai Regional Desk (Only 35 minutes away along NH53)',
      supportNote: 'Rajnandgaon residents are just a quick drive away from our main operations office on GE Road in Bhilai for in-person consultations and payments.',
      contactNumber: '9713057086'
    },
    localFaqs: [
      {
        question: 'Does the train stop directly at Rajnandgaon Railway Station (RJN)?',
        answer: 'Yes! Major North-bound express trains like the Gondwana Express (12409) and Samta Express (12807) halt directly at Rajnandgaon Station (RJN). Alternatively, Durg Junction is only 30 minutes away.'
      },
      {
        question: 'Can travellers from Rajnandgaon meet the Bhilai/Durg travellers before boarding?',
        answer: 'Yes! All travellers from Rajnandgaon, Durg, and Bhilai are added to our Chhattisgarh Squad WhatsApp group. Many travellers meet up at Durg or Raipur to travel on the same train together.'
      },
      {
        question: 'What is the booking deposit required to confirm my seat from Rajnandgaon?',
        answer: 'You can reserve your seat with a nominal booking advance. Call our team directly at 9713057086 or message us on WhatsApp for bank/UPI transfer details.'
      }
    ]
  }
};
