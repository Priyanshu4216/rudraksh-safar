import countriesRaw from './visaCountries.json';

export interface CountryVisa {
  slug: string;
  name: string;
  code: string;
  lat: number;
  lon: number;
  summary: string;
  officialUrl: string;
  entryType: 'Visa-free or on arrival' | 'e-Visa' | 'Visa required';
  route: string;
  stay: string;
  documents: string[];
  notes: string[];
  attendance?: string;
  governmentFee: string;
  feeDetails: string[];
  bestTime: string;
  popularPlaces: string;
  tips: string[];
  checked: string;
}

export const VISA_PHONE_NUMBER = '9229150311';

export const createVisaWhatsAppUrl = (text: string) => {
  return `https://wa.me/91${VISA_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const VISA_COUNTRIES: CountryVisa[] = countriesRaw as CountryVisa[];

export interface RuleUpdate2026 {
  destination: string;
  slug: string;
  latestUpdate: string;
  whatYouNeed: string;
}

export const ENTRY_RULE_UPDATES_2026: RuleUpdate2026[] = [
  {
    destination: 'Malaysia',
    slug: 'malaysia',
    latestUpdate: 'Visa-free entry for Indians is reported to end on 31 Dec 2026, unless extended.',
    whatYouNeed: 'MDAC now. A visa for travel from 1 Jan 2027.'
  },
  {
    destination: 'Thailand',
    slug: 'thailand',
    latestUpdate: 'Visa-free stay is 30 days from 15 Sep 2026 (earlier 60 days).',
    whatYouNeed: 'TDAC online, ticket, stay and funds proof.'
  },
  {
    destination: 'Sri Lanka',
    slug: 'sri-lanka',
    latestUpdate: 'Tourist ETA is free from 25 May 2026.',
    whatYouNeed: 'ETA before you fly. Free does not mean optional.'
  },
  {
    destination: 'China',
    slug: 'china',
    latestUpdate: 'Embassy and consulates accept applications directly from 26 Oct 2026.',
    whatYouNeed: 'Online form, review, documents and fingerprints.'
  },
  {
    destination: 'Indonesia (Bali)',
    slug: 'indonesia',
    latestUpdate: 'Arrival card is required for air arrivals, and Bali charges a tourist levy.',
    whatYouNeed: 'e-VOA or VOA, arrival card, levy receipt.'
  },
  {
    destination: 'Vietnam',
    slug: 'vietnam',
    latestUpdate: 'A pre-arrival declaration was added in 2026 for some travellers.',
    whatYouNeed: 'e-visa, printout and declaration where applicable.'
  },
  {
    destination: 'Hong Kong',
    slug: 'hong-kong',
    latestUpdate: 'Free Pre-Arrival Registration is needed for a visa-free visit of up to 14 days.',
    whatYouNeed: 'PAR slip and the same passport.'
  },
  {
    destination: 'UAE',
    slug: 'uae',
    latestUpdate: 'Overstay fines now start immediately, and arrival rules changed for some UK-visa holders.',
    whatYouNeed: 'Tourist e-visa and a confirmed return ticket.'
  }
];

export interface VisaTypeOption {
  name: string;
  validity: string;
  stayDuration: string;
  entryType: 'Single Entry' | 'Multiple Entry' | 'Double Entry';
  govtFeeApprox: string;
  processingTime: string;
  idealFor: string;
}

export const COUNTRY_VISA_TYPES: Record<string, VisaTypeOption[]> = {
  uae: [
    {
      name: '14 Days Transit Visa',
      validity: '14 days from issue date',
      stayDuration: 'Up to 14 days',
      entryType: 'Single Entry',
      govtFeeApprox: 'AED 120 (~₹2,750)',
      processingTime: '4 - 24 hours',
      idealFor: 'Short layovers, quick business stopovers & shopping trips'
    },
    {
      name: '30 Days Tourist e-Visa (Most Popular)',
      validity: '60 days to enter UAE',
      stayDuration: 'Up to 30 days',
      entryType: 'Single Entry',
      govtFeeApprox: 'AED 252 - 285 (~₹5,800 - ₹6,500)',
      processingTime: '4 - 24 hours',
      idealFor: 'Standard holidays, family vacations & friend visits'
    },
    {
      name: '30 Days Multiple Entry Visa',
      validity: '60 days to enter UAE',
      stayDuration: 'Up to 30 days total',
      entryType: 'Multiple Entry',
      govtFeeApprox: 'AED 650 (~₹14,900)',
      processingTime: '24 - 48 hours',
      idealFor: 'Travellers taking Oman/GCC road trips or regional cruises'
    },
    {
      name: '60 Days Tourist e-Visa',
      validity: '60 days to enter UAE',
      stayDuration: 'Up to 60 days',
      entryType: 'Single Entry',
      govtFeeApprox: 'AED 450 - 520 (~₹10,300 - ₹11,900)',
      processingTime: '24 - 48 hours',
      idealFor: 'Long leisure stays, visiting NRI family or remote work'
    },
    {
      name: 'Express Tatkal UAE Visa',
      validity: '60 days to enter UAE',
      stayDuration: 'Up to 30 or 60 days',
      entryType: 'Single Entry',
      govtFeeApprox: 'Standard Fee + Express Charge',
      processingTime: 'Under 4 hours (office hours)',
      idealFor: 'Emergency departures, last-minute flight bookings'
    }
  ],
  vietnam: [
    {
      name: '30 Days Single Entry e-Visa',
      validity: '30 days from chosen entry date',
      stayDuration: 'Up to 30 days',
      entryType: 'Single Entry',
      govtFeeApprox: 'US$25 (~₹2,100)',
      processingTime: 'Under 60 min* (Express) / 3 days (Standard)',
      idealFor: 'First-time tourists exploring Hanoi, Da Nang or Ho Chi Minh'
    },
    {
      name: '30 Days Multiple Entry e-Visa',
      validity: '30 days from entry date',
      stayDuration: 'Up to 30 days',
      entryType: 'Multiple Entry',
      govtFeeApprox: 'US$50 (~₹4,200)',
      processingTime: 'Under 60 min* (Express) / 3 days (Standard)',
      idealFor: 'Combining Vietnam with Cambodia or Laos side trips'
    },
    {
      name: '90 Days Multiple Entry e-Visa',
      validity: '90 days from entry date',
      stayDuration: 'Up to 90 days',
      entryType: 'Multiple Entry',
      govtFeeApprox: 'US$50 (~₹4,200)',
      processingTime: '1 - 3 working days',
      idealFor: 'Backpackers, digital nomads & extended North-to-South roadtrips'
    }
  ],
  thailand: [
    {
      name: 'Visa Exemption (Visa-Free Tourism)',
      validity: 'Valid on arrival',
      stayDuration: 'Up to 30 days (Updated Sep 2026)',
      entryType: 'Single Entry',
      govtFeeApprox: 'Free (Online TDAC required)',
      processingTime: 'Instant upon border check',
      idealFor: 'Quick getaways to Bangkok, Phuket, Krabi and Pattaya'
    },
    {
      name: '60 Days Tourist e-Visa (TR)',
      validity: '3 months from issue',
      stayDuration: 'Up to 60 days (extendable +30 days in Bangkok)',
      entryType: 'Single Entry',
      govtFeeApprox: '₹2,500 - ₹3,000',
      processingTime: '3 - 5 working days',
      idealFor: 'Long-term vacationers, wellness retreats, digital stays'
    }
  ],
  indonesia: [
    {
      name: '30 Days e-VOA (Electronic Visa on Arrival)',
      validity: '90 days to enter',
      stayDuration: '30 days (extendable once for +30 days online)',
      entryType: 'Single Entry',
      govtFeeApprox: 'IDR 500,000 (~₹2,700)',
      processingTime: '2 - 6 hours online',
      idealFor: 'Bali vacations, Lombok surfing trips, Jakarta business stops'
    },
    {
      name: '60 Days Tourist Visit Visa (211A)',
      validity: '90 days to enter',
      stayDuration: 'Up to 60 days',
      entryType: 'Single Entry',
      govtFeeApprox: 'IDR 1,500,000 - 2,000,000 (~₹8,000 - ₹10,800)',
      processingTime: '3 - 5 working days',
      idealFor: 'Long-term digital nomads, yoga teachers, extended stays'
    }
  ],
  usa: [
    {
      name: 'B1/B2 Visitor Visa (10-Year Multiple Entry)',
      validity: '10 Years (commonly issued)',
      stayDuration: 'Up to 6 months per visit (granted at CBP Port of Entry)',
      entryType: 'Multiple Entry',
      govtFeeApprox: 'US$185 (~₹15,500) MRV Fee',
      processingTime: 'Subject to consular slot availability',
      idealFor: 'Tourism, family visits, short commercial business meetings'
    }
  ],
  europe: [
    {
      name: 'Schengen Short-Stay Tourist Visa (Type C)',
      validity: 'Up to 6 months - 5 years (as per consular discretion)',
      stayDuration: 'Max 90 days within any 180-day period',
      entryType: 'Single / Multiple Entry',
      govtFeeApprox: '€90 Adult (~₹8,200), €45 Child (6-12)',
      processingTime: '15 - 20 calendar days from biometrics',
      idealFor: 'Euro trips across France, Switzerland, Italy, Germany & 25+ nations'
    }
  ],
  uk: [
    {
      name: 'Standard Visitor Visa (6 Months)',
      validity: '6 Months from issue',
      stayDuration: 'Up to 180 days',
      entryType: 'Multiple Entry',
      govtFeeApprox: '£135 (~₹14,500)',
      processingTime: '3 - 4 weeks (Priority: 5 working days)',
      idealFor: 'London sightseeing, visiting friends & relatives, attending conferences'
    },
    {
      name: 'Long-Term Standard Visitor Visa (2 or 5 Years)',
      validity: '2 Years / 5 Years',
      stayDuration: 'Max 6 months per visit',
      entryType: 'Multiple Entry',
      govtFeeApprox: '£432 - £771 (~₹46,000 - ₹82,000)',
      processingTime: '3 - 5 weeks',
      idealFor: 'Frequent business visitors and parents with children settled in the UK'
    }
  ],
  singapore: [
    {
      name: 'e-Visa for Indian Nationals (Level 1 Assessment)',
      validity: 'Up to 30 days to 2 years (multiple entry)',
      stayDuration: 'Up to 30 days per entry (granted at immigration)',
      entryType: 'Multiple Entry',
      govtFeeApprox: 'SGD 30 (~₹1,900) ICA fee',
      processingTime: '2 - 4 working days',
      idealFor: 'Marina Bay sightseeing, Sentosa family trips, Universal Studios'
    }
  ],
  malaysia: [
    {
      name: 'Visa-Free Tourism Entry (With MDAC)',
      validity: 'Valid upon entry',
      stayDuration: 'Up to 30 days (Applicable until 31 Dec 2026)',
      entryType: 'Single Entry',
      govtFeeApprox: 'Free (Online MDAC digital card required)',
      processingTime: 'Immediate upon border check',
      idealFor: 'Kuala Lumpur shopping, Langkawi beaches, Genting Highlands'
    }
  ],
  sri_lanka: [
    {
      name: 'Free Tourist ETA (Online)',
      validity: 'Up to 180 days from issue',
      stayDuration: '30 days',
      entryType: 'Double Entry',
      govtFeeApprox: 'Free (Official Tourist ETA exemption)',
      processingTime: '12 - 24 hours',
      idealFor: 'Ramayana trail tours, Colombo city breaks, Bentota beach stays'
    }
  ],
  turkey: [
    {
      name: 'e-Visa (For Valid US/UK/Schengen Visa Holders)',
      validity: '180 days',
      stayDuration: 'Up to 30 days',
      entryType: 'Single Entry',
      govtFeeApprox: 'US$50 - 60 (~₹4,200 - ₹5,000)',
      processingTime: 'Under 1 hour online',
      idealFor: 'Istanbul breaks, Cappadocia hot air balloons, Antalya resorts'
    },
    {
      name: 'Sticker Tourist Visa (Through Gateway Globe)',
      validity: 'Up to 90 days',
      stayDuration: 'As granted (typically 15 to 30 days)',
      entryType: 'Single Entry',
      govtFeeApprox: 'US$60 - 120 + Gateway service fee',
      processingTime: '10 - 15 working days',
      idealFor: 'Travellers without Western visa exemptions'
    }
  ]
};

export interface PhotoSpecification {
  dimension: string;
  faceCoverage: string;
  background: string;
  clothing: string;
  specs: string;
}

export const COUNTRY_PHOTO_SPECS: Record<string, PhotoSpecification> = {
  usa: {
    dimension: '2 x 2 inches (51 x 51 mm)',
    faceCoverage: '70% to 80% (chin to crown between 25mm to 35mm)',
    background: 'Strictly pure white or off-white background',
    clothing: 'Dark formal attire. Strictly no white shirts that blend with background, no uniforms',
    specs: 'Taken within last 6 months. Strictly NO eyeglasses under US State Dept laws. Both ears visible.'
  },
  europe: {
    dimension: '35 x 45 mm',
    faceCoverage: '70% to 80% face coverage (head height between 32mm and 36mm)',
    background: 'Uniform light grey or light blue background (not dark or pure white)',
    clothing: 'Dark collared shirt or blazer. No busy patterns or religious headgear unless worn daily',
    specs: 'Matte or semi-matte finish photo paper. High contrast, sharp focus, no red-eye or teeth visible.'
  },
  france: {
    dimension: '35 x 45 mm',
    faceCoverage: '70% to 80% face coverage',
    background: 'Light grey background',
    clothing: 'Formal or smart casual dark attire',
    specs: 'Recent photo (within 3 months). Neutral expression, mouth closed, direct forward gaze.'
  },
  vietnam: {
    dimension: '4 x 6 cm (digital portrait)',
    faceCoverage: 'Clear front face without eyeglasses',
    background: 'Solid crisp white background',
    clothing: 'Colored shirt contrasting with white background',
    specs: 'Digital JPG/JPEG format under 2MB. Clear portrait, eyes open, forehead clearly visible.'
  },
  uae: {
    dimension: '4.3 x 5.5 cm or 35 x 45 mm',
    faceCoverage: '80% face visibility with clear shoulders',
    background: 'Solid white background without shadows',
    clothing: 'Dark or bright colored attire (avoid white shirts)',
    specs: 'Sharp digital scan. No glare from spectacles, no selfie angles, neutral facial expression.'
  },
  thailand: {
    dimension: '4 x 6 cm',
    faceCoverage: '75% to 80% face height',
    background: 'Pure white background',
    clothing: 'Modest attire covering shoulders',
    specs: 'No shadows behind ears or chin. Passport-style photo taken within last 6 months.'
  },
  indonesia: {
    dimension: '35 x 45 mm or 4 x 6 cm',
    faceCoverage: '70% to 80% face coverage',
    background: 'Plain white background',
    clothing: 'Smart casual or formal attire',
    specs: 'Color photo under 1MB. High resolution, clear features, no reflections on spectacles.'
  },
  uk: {
    dimension: '35 x 45 mm',
    faceCoverage: '29mm to 34mm from crown to chin',
    background: 'Plain light grey or cream background',
    clothing: 'Dark shirt or jacket',
    specs: 'High quality color print on photo paper. No head coverings unless for religious purposes.'
  },
  singapore: {
    dimension: '35 x 45 mm',
    faceCoverage: '70% to 80% of image height',
    background: 'Matt white background',
    clothing: 'Dark-colored clothing covering neck and shoulders',
    specs: 'Recent passport-sized colour photograph taken within the last 3 months. No coloured contact lenses.'
  },
  japan: {
    dimension: '45 x 45 mm (Square) or 2 x 2 inches',
    faceCoverage: '70% - 80% face area',
    background: 'Plain white background',
    clothing: 'Formal attire',
    specs: 'Printed on glossy or matte photographic paper. No borders, taken within the last 6 months.'
  }
};

export interface PortOfEntryInfo {
  arrivalFormName?: string;
  arrivalFormUrl?: string;
  mandatoryDocuments: string[];
  airportQuestions: string[];
  fundsRequirement: string;
}

export const PORT_OF_ENTRY_GUIDE: Record<string, PortOfEntryInfo> = {
  uae: {
    arrivalFormName: 'No digital arrival card required (Direct e-Visa scan)',
    mandatoryDocuments: [
      'Original Indian Passport valid for at least 6 months from arrival date',
      'Printed copy of approved UAE e-Visa PDF (Color print recommended for check-in)',
      'Confirmed return flight ticket to India (One-way tickets face immediate boarding denial)',
      'Proof of confirmed hotel booking or attested host residence details',
      'Overseas Travel Medical Insurance copy'
    ],
    airportQuestions: [
      'What is the purpose of your visit to Dubai/UAE?',
      'How many days will you stay, and where is your hotel located?',
      'Can I see your return flight booking and hotel confirmation voucher?',
      'Are you travelling alone or with family?'
    ],
    fundsRequirement: 'Minimum AED 3,000 (or equivalent in USD/INR or international credit card balance) recommended for individual tourists.'
  },
  vietnam: {
    arrivalFormName: 'Vietnam Electronic Health / Customs Declaration (when mandated)',
    mandatoryDocuments: [
      'Original Indian Passport valid for minimum 6 months beyond travel dates (with at least 2 blank visa pages)',
      'Printed color copy of official Vietnam e-Visa PDF',
      'Confirmed return or onward flight booking',
      'Proof of hotel accommodation / tour booking vouchers'
    ],
    airportQuestions: [
      'How many days are you staying in Vietnam?',
      'Which cities will you visit (Hanoi, Da Nang, Ho Chi Minh)?',
      'Where will you exit Vietnam (Airport name matching your e-Visa)?'
    ],
    fundsRequirement: 'Credit/debit cards accepted widely; carrying US$300 to $500 in cash is recommended for local taxi and market expenses.'
  },
  thailand: {
    arrivalFormName: 'Thailand Digital Arrival Card (TDAC) submitted online before departure',
    mandatoryDocuments: [
      'Indian Passport valid for 6+ months with 2 blank pages',
      'Digital or printed TDAC QR confirmation code',
      'Confirmed return flight ticket within 30 days',
      'Hotel reservation voucher covering your full stay',
      'Physical cash proof for immigration inspection'
    ],
    airportQuestions: [
      'Show your confirmed return flight ticket back to India.',
      'Show your hotel booking in Bangkok / Pattaya / Phuket.',
      'Show your living funds in cash (Thai Baht or US Dollars).'
    ],
    fundsRequirement: 'Strict Thai Immigration Rule: Minimum 10,000 THB per person or 20,000 THB per family in physical cash or travellers cheques.'
  },
  indonesia: {
    arrivalFormName: 'All Indonesia Electronic Customs Declaration (e-CD) + Bali Tourist Levy',
    mandatoryDocuments: [
      'Indian Passport with 6+ months validity',
      'Approved e-VOA receipt or cash for on-arrival counter (IDR 500,000 / US$35)',
      'Completed e-CD Customs QR code on your smartphone',
      'Bali Tourist Levy voucher (IDR 150,000 paid online via LoveBali for Bali arrivals)',
      'Confirmed return flight ticket within 30 days'
    ],
    airportQuestions: [
      'How long do you plan to stay in Bali / Indonesia?',
      'Do you have your return ticket to India ready?',
      'Have you filled the digital customs declaration form?'
    ],
    fundsRequirement: 'Proof of sufficient living expenses (approx. US$500 in forex or credit cards with international limit enabled).'
  },
  europe: {
    arrivalFormName: 'Schengen Border Control Entry Verification',
    mandatoryDocuments: [
      'Original Indian Passport with valid Schengen Sticker Visa (Type C)',
      'Schengen-compliant Travel Medical Insurance (Minimum €30,000 coverage including repatriation & COVID-19)',
      'Confirmed return flight ticket to India',
      'Day-by-day itinerary and confirmed hotel reservations across all Schengen countries visited',
      'Proof of financial solvency (recent bank statement / international credit card)'
    ],
    airportQuestions: [
      'Which Schengen countries are you visiting, and which is your primary destination?',
      'How many days is your total stay in Europe?',
      'Where is your travel medical insurance certificate?',
      'Show your return ticket and hotel bookings for each night.'
    ],
    fundsRequirement: 'Consulate recommended funds: €45 to €100 per day of stay depending on whether accommodation is pre-paid.'
  },
  usa: {
    arrivalFormName: 'CBP Form I-94 (Automated Electronic Record generated at Port of Entry)',
    mandatoryDocuments: [
      'Valid Indian Passport containing stamped US B1/B2 Visa',
      'Confirmed return flight ticket',
      'Address of stay in the US (hotel confirmation or invitation letter with host US phone number)',
      'Credit cards and liquid funds proof'
    ],
    airportQuestions: [
      'What is the purpose of your trip to the United States?',
      'How long do you plan to stay in the country?',
      'Where do you work in India, and what is your job designation?',
      'Who is funding this trip?'
    ],
    fundsRequirement: 'Credit cards with adequate limits and liquid savings sufficient for domestic travel and accommodation.'
  }
};

export const COMMON_REJECTION_MISTAKES: Record<string, string[]> = {
  uae: [
    'Single Name on Passport: Indian passports with only a Given Name and blank Surname face delays unless father’s name or secondary endorsement is matched.',
    'Cropped or blurry passport scan: Cutting off the MRZ machine-readable lines at the bottom of page 2 triggers instant system rejection.',
    'Mismatched Travel Dates: Hotel bookings or flight dates that conflict with the requested entry date on the ICP portal.',
    'Un-cleared previous overstay fine or expired resident visa from prior UAE visits.',
    'Submitting a photo wearing white clothing that blends into the white background.'
  ],
  vietnam: [
    'Incorrect Date Format: Mixing up Day/Month/Year (DD/MM/YYYY) with Month/Day/Year (MM/DD/YYYY) on the official government portal.',
    'Selecting the wrong Port of Entry: Entering Vietnam through a different airport than the one selected on the approved e-Visa printout.',
    'Passport validity under 6 months from the date of arrival in Vietnam.',
    'Uploaded photo having dark shadows, glares on spectacles, or smiling with visible teeth.',
    'Spelling mistake in Given Name or Middle Name mismatch.'
  ],
  thailand: [
    'Failing to generate the mandatory Thailand Digital Arrival Card (TDAC) before flight departure.',
    'Failure to present 10,000 THB cash per person at airport immigration counters when asked.',
    'Holding an open-ended flight ticket without a confirmed return booking within the 30-day exemption limit.',
    'Unverifiable fake hotel dummy vouchers that cancel before arrival checks.',
    'Damaged or worn passport bio pages.'
  ],
  indonesia: [
    'Forgetting to submit the mandatory electronic Customs Declaration (e-CD) prior to airport exit.',
    'Not having the Bali Tourism Levy receipt (IDR 150,000) ready upon landing at Denpasar DPS airport.',
    'Applying for an e-VOA on unofficial scam portals charging triple the government fee.',
    'Passport having less than 2 blank visa pages for the entry stamp.',
    'Attempting commercial business or paid work on a standard 30-day tourist visit visa.'
  ],
  europe: [
    'Submitting travel insurance that does not cover minimum €30,000 emergency medical expenses or lacks repatriation clause.',
    'Applying at the wrong Schengen Embassy: The application must strictly be filed with the country where you spend the highest number of nights.',
    'Sudden unexplained large cash deposits into personal bank accounts right before generating statements.',
    'Submitting flight bookings that get cancelled before the consulate processes your file.',
    'Vague cover letter lacking day-by-day travel breakdown and proof of strong ties to India (job/family/property).'
  ],
  usa: [
    'Discrepancies between DS-160 online application answers and verbal answers given to the Consular Officer during the interview.',
    'Weak demonstration of non-immigrant intent: Failure to prove compelling socio-economic ties to India (property, stable career, elderly parents).',
    'Submitting an outdated or non-compliant 2x2 inch photograph (e.g., photo taken wearing eyeglasses).',
    'Over-rehearsed or memorized robotic answers during the visa interview.',
    'Booking non-refundable flight tickets before receiving the stamped passport.'
  ]
};

export interface VisaFaqItem {
  question: string;
  answer: string;
}

export const VISA_FAQS: VisaFaqItem[] = [
  {
    question: 'Do I need to fill any online visa form myself?',
    answer: 'No. Send documents on WhatsApp or email. We fill the forms, file the application and keep you updated. Where a country needs an interview or biometrics, you attend in person.'
  },
  {
    question: 'How fast is the Vietnam visa?',
    answer: 'Under 60 minutes on working days during office hours, with complete documents.'
  },
  {
    question: 'How long does a UAE visa take?',
    answer: 'About 4 hours on working days during office hours, with complete documents.'
  },
  {
    question: 'Is Thailand visa-free for Indians?',
    answer: 'As of 24 Nov 2026, Indian tourists can enter visa-free for up to 30 days, and must file the free Thailand Digital Arrival Card online before arrival. Stays over 30 days need an e-visa. Rules changed several times in 2026, so we re-check before you travel.'
  },
  {
    question: 'Do Indians need a visa for Malaysia in 2027?',
    answer: 'Reports on 19 Nov 2026 said Malaysia’s visa-free entry for Indians ends on 31 Dec 2026, unless extended. Until then you need the free MDAC. For 2027 travel, confirm the visa rule with us first.'
  },
  {
    question: 'Do Indians need a visa for Bali?',
    answer: 'Indonesia offers an e-VOA or visa on arrival for 30 days. You also complete the All Indonesia Arrival Card and pay the Bali tourist levy.'
  },
  {
    question: 'What documents are needed for a Schengen visa from India?',
    answer: 'Typically a valid passport, application form, photos, travel medical insurance, flight and hotel bookings, bank statements, ITR or employment proof and a cover letter. Biometrics are taken at the visa centre.'
  },
  {
    question: 'Is an interview needed for a US visitor visa?',
    answer: 'Most applicants must attend an interview in person. We prepare your DS-160, documents and slot.'
  },
  {
    question: 'Can you arrange dummy hotel and flight bookings?',
    answer: 'Yes. We arrange genuine, verifiable itinerary reservations (often called dummy tickets) as proof for visa filing only. They must match your real plans.'
  },
  {
    question: 'How much does a visa cost?',
    answer: 'Your quote lists the government fee, our service fee and taxes separately, and is confirmed in writing before you pay. The fee table on this page shows government fees we have verified.'
  },
  {
    question: 'Is my passport data safe?',
    answer: 'We use your data only to process your application and share it only with the visa authority, its authorised centres and our processing partners in strict accordance with the Digital Personal Data Protection Act, 2023.'
  }
];

export const VISA_LEGAL_POINTS = [
  {
    title: 'Who we are',
    content: 'Rudraksh Safar is an authorized premier travel and visa assistance agency, not a government body, embassy or consulate, and is not affiliated with any foreign government.'
  },
  {
    title: 'No guarantee of approval',
    content: 'We prepare and file carefully with high precision, but sovereign consulate authorities retain sole discretion on approvals. Government and embassy fees go directly to foreign ministries and are generally non-refundable.'
  },
  {
    title: 'Speed claims',
    content: 'Vietnam under 60 minutes and UAE 4 hours apply on working days in office hours (10:00 to 19:00 IST) with complete, valid documentation. They depend on official immigration server uptime and cannot be legally guaranteed.'
  },
  {
    title: 'Genuine documents only',
    content: 'We strictly never forge, alter or invent documents and will decline any fraudulent request. False information can lead to refusal, multi-year entry bans and legal action against the applicant.'
  },
  {
    title: 'Itinerary reservations',
    content: 'Verifiable itinerary reservations and temporary PNR flight blocks are provided for visa filing purposes only and must align with your authentic travel schedule.'
  },
  {
    title: 'In-person steps',
    content: 'Where a country mandates an interview, biometric fingerprint scan, or VFS/TLS center visit (e.g. USA, Schengen, UK, Canada, China), the applicant attends in person. We book your slot and brief you comprehensively.'
  },
  {
    title: 'Data privacy & protection',
    content: 'We collect passport scans, photographs and trip details solely for processing your visa application and handle personal information under the Indian Digital Personal Data Protection Act, 2023.'
  }
];
