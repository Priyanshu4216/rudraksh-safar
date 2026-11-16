import { RouteOrigin } from './types';

export const HOW_TO_REACH_ROUTES: RouteOrigin[] = [
  {
    originId: "origin-delhi",
    originEn: "Delhi NCR (New Delhi, Anand Vihar, IGI Airport)",
    originHi: "दिल्ली एनसीआर (नई दिल्ली, आनंद विहार, आईजीआई एयरपोर्ट)",
    distanceKm: "TODO_VERIFY", // To be verified with official NHAI distance
    bestOptionEn: "Vande Bharat Express / Shatabdi Express from New Delhi or Delhi-Dehradun Expressway by private car.",
    bestOptionHi: "नई दिल्ली से वंदे भारत / शताब्दी एक्सप्रेस अथवा दिल्ली-देहरादून एक्सप्रेसवे द्वारा निजी वाहन।",
    routes: [
      {
        mode: "Express Train",
        typicalDuration: "TODO_VERIFY", // Official IRCTC schedule to be verified
        notes: "Multiple daily services including Vande Bharat Express and Jan Shatabdi from New Delhi and Hazrat Nizamuddin to Haridwar Junction (HW).",
        sourceUrl: "https://www.irctc.co.in",
        verifiedOn: "2026-11-15"
      },
      {
        mode: "Road (Car / Bus)",
        typicalDuration: "TODO_VERIFY", // Highway travel time to be verified with Mela traffic police
        notes: "Via Delhi-Meerut Expressway and NH 334. On major snan days, passenger cars terminate at designated highway satellite parking lots.",
        sourceUrl: "https://morth.nic.in",
        verifiedOn: "2026-11-15"
      },
      {
        mode: "Air",
        typicalDuration: "TODO_VERIFY",
        notes: "Direct flights from IGI Airport (DEL) to Dehradun Jolly Grant Airport (DED), followed by road transfer to Haridwar.",
        sourceUrl: "https://www.aai.aero",
        verifiedOn: "2026-11-15"
      }
    ]
  },
  {
    originId: "origin-dehradun",
    originEn: "Dehradun & Jolly Grant Airport (DED)",
    originHi: "देहरादून एवं जौलीग्रांट एयरपोर्ट (DED)",
    distanceKm: "TODO_VERIFY",
    bestOptionEn: "Pre-booked private taxi from Jolly Grant Airport directly to Haridwar accommodation.",
    bestOptionHi: "जौलीग्रांट हवाई अड्डे से हरिद्वार हेतु पूर्व-आरक्षित निजी टैक्सी।",
    routes: [
      {
        mode: "Airport Taxi / Cab",
        typicalDuration: "TODO_VERIFY",
        notes: "Direct scenic drive via NH 7 bypass. Recommended route avoids Dehradun city congestion.",
        sourceUrl: "https://uttarakhandtourism.gov.in",
        verifiedOn: "2026-11-15"
      },
      {
        mode: "State Transport Bus",
        typicalDuration: "TODO_VERIFY",
        notes: "Regular UTC electric shuttle buses connect Rishikesh-Haridwar corridor.",
        sourceUrl: "https://utc.uk.gov.in",
        verifiedOn: "2026-11-15"
      }
    ]
  },
  {
    originId: "origin-mumbai",
    originEn: "Mumbai & Western Maharashtra",
    originHi: "मुंबई एवं पश्चिमी महाराष्ट्र",
    distanceKm: "TODO_VERIFY",
    bestOptionEn: "Flight from Mumbai (BOM) to Dehradun (DED) or direct express train to Haridwar Junction.",
    bestOptionHi: "मुंबई से देहरादून सीधी/कनेक्टिंग उड़ान अथवा हरिद्वार हेतु सीधी सुपरफास्ट ट्रेन।",
    routes: [
      {
        mode: "Flight (Air)",
        typicalDuration: "TODO_VERIFY",
        notes: "Daily commercial flights from BOM to DED, followed by pre-arranged taxi to Haridwar camps.",
        sourceUrl: "https://www.aai.aero",
        verifiedOn: "2026-11-15"
      },
      {
        mode: "Long-Distance Express Train",
        typicalDuration: "TODO_VERIFY",
        notes: "Trains like Bandra Terminus - Haridwar Express or Golden Temple Mail (up to Meerut/Delhi connection).",
        sourceUrl: "https://www.irctc.co.in",
        verifiedOn: "2026-11-15"
      }
    ]
  },
  {
    originId: "origin-raipur",
    originEn: "Raipur & Chhattisgarh Hub (Raipur, Bhilai, Bilaspur, Durg)",
    originHi: "रायपुर एवं छत्तीसगढ़ हब (रायपुर, भिलाई, बिलासपुर, दुर्ग)",
    distanceKm: "TODO_VERIFY",
    bestOptionEn: "Connecting flight from Raipur (RPR) to Dehradun (DED) via Delhi, or direct express train via Bilaspur / Raipur.",
    bestOptionHi: "रायपुर एयरपोर्ट से दिल्ली होकर देहरादून फ्लाइट अथवा बिलासपुर/रायपुर से सीधी सुपरफास्ट एक्सप्रेस ट्रेन।",
    routes: [
      {
        mode: "Express Train from Chhattisgarh",
        typicalDuration: "TODO_VERIFY",
        notes: "Direct trains connecting Raipur (R) / Bilaspur (BSP) to Delhi Junction / Hazrat Nizamuddin, with onward express connection to Haridwar.",
        sourceUrl: "https://www.irctc.co.in",
        verifiedOn: "2026-11-15"
      },
      {
        mode: "Connecting Flight (Air)",
        typicalDuration: "TODO_VERIFY",
        notes: "Swami Vivekananda Airport Raipur (RPR) to Jolly Grant Dehradun (DED) via Delhi with same-day ground transfer to Haridwar.",
        sourceUrl: "https://www.aai.aero",
        verifiedOn: "2026-11-15"
      },
      {
        mode: "Rudraksh Safar Escorted Group Departure",
        typicalDuration: "TODO_VERIFY",
        notes: "Coordinated roundtrip pilgrimage departures from Bhilai, Raipur, and Bilaspur with dedicated tour escorts.",
        sourceUrl: "https://rudrakshsafar.com",
        verifiedOn: "2026-11-15"
      }
    ]
  },
  {
    originId: "origin-jaipur",
    originEn: "Jaipur & Rajasthan",
    originHi: "जयपुर एवं राजस्थान",
    distanceKm: "TODO_VERIFY",
    bestOptionEn: "Direct overnight express train from Jaipur Junction to Haridwar.",
    bestOptionHi: "जयपुर जंक्शन से हरिद्वार हेतु सीधी दैनिक / साप्ताहिक एक्सप्रेस ट्रेन।",
    routes: [
      {
        mode: "Express Train",
        typicalDuration: "TODO_VERIFY",
        notes: "Services connecting Jaipur (JP) to Haridwar Junction (HW) via Alwar and Rewari.",
        sourceUrl: "https://www.irctc.co.in",
        verifiedOn: "2026-11-15"
      },
      {
        mode: "Road (Car / Tourist Bus)",
        typicalDuration: "TODO_VERIFY",
        notes: "Route via Delhi-Mumbai Expressway connection or NH 48 / NH 334.",
        sourceUrl: "https://morth.nic.in",
        verifiedOn: "2026-11-15"
      }
    ]
  },
  {
    originId: "origin-lucknow",
    originEn: "Lucknow & Uttar Pradesh Central",
    originHi: "लखनऊ एवं मध्य उत्तर प्रदेश",
    distanceKm: "TODO_VERIFY",
    bestOptionEn: "Direct Vande Bharat / Superfast express train from Lucknow Charbagh to Haridwar.",
    bestOptionHi: "लखनऊ चारबाग से हरिद्वार हेतु सीधी सुपरफास्ट / एक्सप्रेस ट्रेन।",
    routes: [
      {
        mode: "Express Train",
        typicalDuration: "TODO_VERIFY",
        notes: "Direct trains connecting Lucknow (LKO) through Moradabad and Roorkee to Haridwar.",
        sourceUrl: "https://www.irctc.co.in",
        verifiedOn: "2026-11-15"
      },
      {
        mode: "Road (National Highway)",
        typicalDuration: "TODO_VERIFY",
        notes: "Via Bareilly and Haridwar-Najibabad Highway route.",
        sourceUrl: "https://morth.nic.in",
        verifiedOn: "2026-11-15"
      }
    ]
  }
];
