import { getBestTimeToVisit } from '@/lib/travelMeta';
import { thailandData } from '@/data/destinations/thailand';
import { pattayaData } from '@/data/destinations/pattaya';
import { phuketData } from '@/data/destinations/phuket';
import { baliData } from '@/data/destinations/bali';
import { dubaiData } from '@/data/destinations/dubai';
import { singaporeData } from '@/data/destinations/singapore';
import { maldivesData } from '@/data/destinations/maldives';
import { DestinationContentData } from '@/data/destinations/types';

export type DestinationPageSlug =
  | 'things-to-do'
  | 'famous-activities'
  | 'nearby-places'
  | 'hidden-places'
  | 'beaches'
  | 'top-attractions'
  | 'adventure'
  | 'shopping'
  | 'food-guide'
  | 'nightlife'
  | 'temples'
  | 'family-places'
  | 'best-time-to-visit'
  | 'itinerary-5-days'
  | 'trip-cost'
  | 'honeymoon'
  | 'faqs'
  | 'travel-guide'
  | 'bali-vs-maldives'
  | 'best-hotels'
  | 'island-tours'
  | 'places-to-visit'; // Added for Places silo

export type DestinationPageConfig = {
  slug: DestinationPageSlug;
  title: (destinationName: string) => string;
  description: (destinationName: string) => string;
};

export const DESTINATION_PAGE_ORDER: DestinationPageConfig[] = [
  {
    slug: 'travel-guide',
    title: (d) => `${d} Travel Guide`,
    description: (d) => `A quick, practical travel guide to plan your ${d} trip: top areas, what to do, best season, and booking tips.`,
  },
  {
    slug: 'places-to-visit',
    title: (d) => `Places to Visit in ${d}`,
    description: (d) => `Top places to visit in ${d}: temples, viewpoints, islands, and cultural landmarks not to be missed.`,
  },
  {
    slug: 'things-to-do',
    title: (d) => `Things to Do in ${d}`,
    description: (d) => `Top things to do in ${d}: beaches, water sports, culture, food, shopping, and day trips.`,
  },
  {
    slug: 'best-time-to-visit',
    title: (d) => `Best Time to Visit ${d}`,
    description: (d) => `Month-by-month guide to the best time to visit ${d}, weather, crowds, and budget seasons.`,
  },
  {
    slug: 'itinerary-5-days',
    title: (d) => `${d} Itinerary (5 Days)`,
    description: (d) => `A clean 5-day itinerary for ${d} with sightseeing plan, travel tips, and optional add-ons.`,
  },
  {
    slug: 'trip-cost',
    title: (d) => `${d} Trip Cost (2026)`,
    description: (d) => `Estimated ${d} trip cost for 2026: flights, hotels, transfers, activities, and budget tips.`,
  },
  {
    slug: 'faqs',
    title: (d) => `${d} FAQs`,
    description: (d) => `Frequently asked questions about travelling to ${d}: visa, budget, safety, best season, and itinerary planning.`,
  },
  {
    slug: 'famous-activities',
    title: (d) => `Famous Activities in ${d}`,
    description: (d) => `Famous activities in ${d}: water sports, adventure, cultural experiences, shopping, and unique local things to do.`,
  },
  {
    slug: 'nearby-places',
    title: (d) => `Nearby Places to Visit from ${d}`,
    description: (d) => `Best nearby places to visit from ${d} with distance and travel time ideas for day trips.`,
  },
  {
    slug: 'hidden-places',
    title: (d) => `Hidden Places in ${d} (Offbeat)`,
    description: (d) => `Offbeat and hidden places in ${d} to avoid crowds and discover local gems.`,
  },
  {
    slug: 'beaches',
    title: (d) => `Best Beaches in ${d}`,
    description: (d) => `Best beaches in ${d} for sunset, water sports, family time, and relaxing stays.`,
  },
  {
    slug: 'top-attractions',
    title: (d) => `Top Attractions in ${d}`,
    description: (d) => `Must-visit attractions in ${d}: viewpoints, islands, markets, cultural landmarks, and iconic spots.`,
  },
  {
    slug: 'adventure',
    title: (d) => `Adventure Activities in ${d}`,
    description: (d) => `Adventure activities in ${d}: hiking, water sports, island tours, and thrill experiences.`,
  },
  {
    slug: 'shopping',
    title: (d) => `${d} Shopping Guide`,
    description: (d) => `Where to shop in ${d}: best markets, malls, souvenirs, and bargaining tips.`,
  },
  {
    slug: 'food-guide',
    title: (d) => `${d} Food Guide`,
    description: (d) => `What to eat in ${d}: famous dishes, street food, and best areas for food lovers.`,
  },
  {
    slug: 'nightlife',
    title: (d) => `${d} Nightlife Guide`,
    description: (d) => `Best nightlife in ${d}: night markets, shows, clubs, and evening experiences.`,
  },
  {
    slug: 'temples',
    title: (d) => `Religious & Cultural Places in ${d}`,
    description: (d) => `Religious and cultural places in ${d}: temples, heritage areas, and local traditions worth experiencing.`,
  },
  {
    slug: 'family-places',
    title: (d) => `${d} Family-Friendly Places`,
    description: (d) => `Family-friendly places in ${d}: safe attractions, kid-friendly activities, and easy day plans.`,
  },
  {
    slug: 'island-tours',
    title: (d) => `${d} Island Tours`,
    description: (d) => `Best island tours from ${d}: snorkeling, diving, and sightseeing boat trips.`,
  }
];

export const PACKAGE_SLUGS = new Set<string>([
  'phuket',
  'bali',
  'dubai',
  'singapore',
  'maldives',
  'thailand',
  'sri-lanka',
  'nepal',
  'malaysia',
  'turkey',
  'schengen',
  'pattaya' // Verified
]);

export const HONEYMOON_DESTINATIONS = new Set<string>(['bali', 'maldives', 'phuket', 'thailand', 'dubai']);
export const LUXURY_DESTINATIONS = new Set<string>(['dubai', 'maldives', 'bali', 'schengen', 'turkey']);

export const toTitle = (slug: string) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

export const getDestinationDisplayName = (destinationSlug: string) => toTitle(destinationSlug);

export const getDestinationBestTime = (destinationSlug: string) => {
  // Minimal mapping: feed the slug into location; travelMeta has destination overrides.
  return getBestTimeToVisit({ location: destinationSlug, tag: '' });
};

export const isValidDestinationPage = (pageSlug: string): pageSlug is DestinationPageSlug => {
  return DESTINATION_PAGE_ORDER.some((p) => p.slug === pageSlug);
};

// --- LEGACY DATA (Fallback) ---
// We keep this for destinations we haven't migrated yet.
// For Thailand/Pattaya/Phuket, we will check the new data first.
const LEGACY_DESTINATION_DATA: Record<string, DestinationContentData> = {
  'bali': {
    faqs: [
      { question: 'What is the best time to visit Bali?', answer: 'The best time to visit Bali is during the dry season, from April to October. July and August are the peak tourist months.' },
      { question: 'Do Indians need a visa for Bali?', answer: 'No, Indian citizens get a Visa Exemption or Visa on Arrival (approx $35) for 30 days.' },
      { question: 'Is Bali expensive for Indians?', answer: 'Bali is very affordable. A budget trip can cost ₹50k-70k per person, while luxury trips go up to ₹1.5L.' },
      { question: 'How many days are enough for Bali?', answer: 'A 7-day itinerary is perfect to cover South Bali beaches, Ubud culture, and Nusa Penida island.' },
      { question: 'What is the currency in Bali?', answer: 'Indonesian Rupiah (IDR). 1 INR is approximately 180-190 IDR, making you a millionaire instantly!' }
    ],
    nearbyPlaces: [
      { name: 'Nusa Penida', distance: 'Speedboat', time: '45 mins' },
      { name: 'Gili Islands', distance: 'Speedboat', time: '2-3 hours' },
      { name: 'Lombok', distance: 'Flight/Ferry', time: '40 mins' },
      { name: 'Java (East)', distance: 'Ferry', time: '1 hour' }
    ],
    tripCost: {
      flights: '₹25,000 - ₹40,000 (Roundtrip)',
      hotels: '₹2,000 - ₹50,000+ per night',
      transfers: '₹3,000 - ₹5,000 for full week',
      activities: '₹10,000 - ₹20,000 (Water sports, Swings)'
    }
  },
  'dubai': {
    faqs: [
      { question: 'Do I need a visa for Dubai?', answer: 'Yes, Indians need a visa. E-visa processing takes 3-5 days. Visa on Arrival is available if you have a US/UK/EU visa.' },
      { question: 'What is the best month to visit Dubai?', answer: 'November to March is the best time when the weather is pleasant (20°C-25°C). Summers are extremely hot.' },
      { question: 'Is Dubai safe for families?', answer: 'Dubai is one of the safest cities in the world with very low crime rates, making it perfect for families.' },
      { question: 'Can I wear shorts in Dubai?', answer: 'Yes, shorts are fine in tourist areas, malls, and hotels. Dress modestly in mosques and old Dubai areas.' }
    ],
    nearbyPlaces: [
      { name: 'Abu Dhabi', distance: '140 km', time: '1.5 hours' },
      { name: 'Sharjah', distance: '30 km', time: '30 mins' },
      { name: 'Hatta', distance: '130 km', time: '1.5 hours' },
      { name: 'Ras Al Khaimah', distance: '110 km', time: '1 hour' }
    ],
    tripCost: {
      flights: '₹18,000 - ₹25,000 (Roundtrip)',
      hotels: '₹4,000 - ₹15,000+ per night',
      transfers: '₹5,000 (Metro/Taxi)',
      activities: '₹15,000+ (Burj Khalifa, Parks)'
    }
  },
  'thailand': {
    // Legacy fallback
    faqs: [
      { question: 'Is Thailand visa-free for Indians?', answer: 'Yes! Thailand has waived visa fees for Indians until November 2025. You can enter freely for 60 days.' },
      { question: 'Which is better: Phuket or Pattaya?', answer: 'Phuket is better for beaches, islands, and couples. Pattaya is famous for nightlife and is closer to Bangkok.' },
      { question: 'How much cash should I carry?', answer: 'Carry at least 10,000 THB per person in cash/forex card as immigration checks are random.' },
      { question: 'Is street food safe in Thailand?', answer: 'Yes, street food is the heart of Thai culture. It is generally safe, fresh, and delicious.' }
    ],
    nearbyPlaces: [
      { name: 'Phi Phi Islands', distance: 'Ferry', time: '2 hours' },
      { name: 'James Bond Island', distance: 'Speedboat', time: '45 mins' },
      { name: 'Krabi', distance: 'Road/Boat', time: '2-3 hours' },
      { name: 'Coral Island', distance: 'Speedboat', time: '20 mins' }
    ],
    tripCost: {
      flights: '₹18,000 - ₹25,000 (Roundtrip)',
      hotels: '₹2,000 - ₹8,000 per night',
      transfers: '₹3,000 - ₹5,000',
      activities: '₹8,000 - ₹12,000'
    }
  },
  'singapore': {
    faqs: [
      { question: 'Do Indians need a visa for Singapore?', answer: 'Yes, an e-visa is required. It typically takes 3-5 working days to process.' },
      { question: 'Is Singapore expensive?', answer: 'Singapore is pricier than Thailand or Bali. Budget ₹80k-1L per person for a comfortable trip.' },
      { question: 'Can I visit Malaysia from Singapore?', answer: 'Yes, Kuala Lumpur is just a 5-hour bus ride or 1-hour flight away. Legoland Malaysia is just across the border.' }
    ],
    nearbyPlaces: [
      { name: 'Sentosa Island', distance: 'Cable Car', time: '15 mins' },
      { name: 'Johor Bahru (Malaysia)', distance: 'Bus', time: '1 hour' },
      { name: 'Bintan (Indonesia)', distance: 'Ferry', time: '1 hour' },
      { name: 'Batam (Indonesia)', distance: 'Ferry', time: '45 mins' }
    ],
    tripCost: {
      flights: '₹22,000 - ₹30,000',
      hotels: '₹6,000 - ₹15,000 per night',
      transfers: '₹2,000 (Public Transport)',
      activities: '₹15,000 - ₹25,000'
    }
  },
  'maldives': {
    faqs: [
      { question: 'Do I need a visa for Maldives?', answer: 'No, Indians get a free Visa on Arrival for 30 days.' },
      { question: 'Can I bring alcohol to Maldives?', answer: 'No, bringing alcohol is strictly prohibited. It is available only in private resort islands.' },
      { question: 'Which is better: Water Villa or Beach Villa?', answer: 'Water Villas offer direct ocean access and luxury. Beach Villas offer sand access and greenery. A split stay (2 nights each) is best.' }
    ],
    nearbyPlaces: [
      { name: 'Maafushi (Local)', distance: 'Speedboat', time: '30 mins' },
      { name: 'Male City', distance: 'Ferry', time: '20 mins' },
      { name: 'Hulhumale', distance: 'Taxi', time: '15 mins' }
    ],
    tripCost: {
      flights: '₹18,000 - ₹25,000 (From Kochi/BLR)',
      hotels: '₹10,000 (Local) - ₹50,000+ (Resort)',
      transfers: '₹10,000 - ₹25,000 (Speedboat/Seaplane)',
      activities: '₹15,000 - ₹30,000'
    }
  },
  'sri-lanka': {
    faqs: [
      { question: 'Do Indians need a visa for Sri Lanka?', answer: 'No, Sri Lanka offers a free tourist visa for Indians (Eta) to boost tourism.' },
      { question: 'Is Sri Lanka safe for tourists?', answer: 'Yes, it is very safe. Tourism is booming again, and locals are extremely hospitable.' },
      { question: 'Best way to travel within Sri Lanka?', answer: 'Trains (especially Kandy to Ella) are scenic and cheap. Private cars with drivers are also very affordable.' }
    ],
    nearbyPlaces: [
      { name: 'Sigiriya', distance: 'Car', time: '3-4 hours from Colombo' },
      { name: 'Kandy', distance: 'Train/Car', time: '3 hours' },
      { name: 'Galle', distance: 'Highway Bus', time: '2 hours' },
      { name: 'Ella', distance: 'Train', time: 'Scenic route' }
    ],
    tripCost: {
      flights: '₹15,000 - ₹22,000 (from Chennai/BLR)',
      hotels: '₹3,000 - ₹10,000 per night',
      transfers: '₹2,000 - ₹4,000 per day (Private Car)',
      activities: '₹5,000 - ₹10,000'
    }
  },
  'nepal': {
    faqs: [
      { question: 'Do Indians need a passport for Nepal?', answer: 'No, looking for Indians, a Voter ID card is sufficient. Passport is not mandatory but recommended.' },
      { question: 'Can I use Indian currency in Nepal?', answer: 'Yes, ₹100 notes and below are widely accepted. ₹500 and ₹2000 notes are often not accepted.' },
      { question: 'Best time for trekking?', answer: 'October to December and March to May are perfect for Everest or Annapurna treks.' }
    ],
    nearbyPlaces: [
      { name: 'Pokhara', distance: 'Bus/Flight', time: '6 hrs / 25 mins' },
      { name: 'Chitwan', distance: 'Bus', time: '5 hours' },
      { name: 'Nagarkot', distance: 'Car', time: '1.5 hours' },
      { name: 'Lumbini', distance: 'Bus/Flight', time: '8 hrs / 35 mins' }
    ],
    tripCost: {
      flights: '₹8,000 - ₹15,000 (from Delhi)',
      hotels: '₹2,000 - ₹6,000 per night',
      transfers: '₹1,000 - ₹3,000',
      activities: '₹5,000 - ₹15,000 (Trekking permits extra)'
    }
  },
  'malaysia': {
    faqs: [
      { question: 'Is Malaysia visa-free for Indians?', answer: 'Yes, India citizens get visa-free entry for up to 30 days until Dec 2024 (dates subject to extension).' },
      { question: 'Is vegetarian food available?', answer: 'Yes, ample Indian restaurants and vegetarian options are available in KL and Penang.' },
      { question: 'Genting Highlands is worth it?', answer: 'Absolutely! The cable car, indoor theme park, and cool weather make it a great day trip.' }
    ],
    nearbyPlaces: [
      { name: 'Batu Caves', distance: 'Train', time: '30 mins' },
      { name: 'Genting Highlands', distance: 'Bus/Cable Car', time: '1.5 hours' },
      { name: 'Penang', distance: 'Bus/Flight', time: '4 hrs / 50 mins' },
      { name: 'Langkawi', distance: 'Flight', time: '1 hour' }
    ],
    tripCost: {
      flights: '₹18,000 - ₹25,000',
      hotels: '₹3,000 - ₹8,000 per night',
      transfers: '₹2,000 - ₹4,000',
      activities: '₹8,000 - ₹15,000'
    }
  },
  'turkey': {
    faqs: [
      { question: 'Do Indians need a visa for Turkey?', answer: 'Yes, an e-visa is available if you hold a valid US/UK/Schengen visa. Otherwise, a sticker visa is required.' },
      { question: 'Is Hot Air Balloon in Cappadocia worth it?', answer: '100% yes. It is a once-in-a-lifetime experience, though pricey (approx €250-300).' },
      { question: 'Is Turkey part of Europe or Asia?', answer: 'Both! Istanbul is the only city in the world spanning two continents.' }
    ],
    nearbyPlaces: [
      { name: 'Cappadocia', distance: 'Flight', time: '1 h 20m' },
      { name: 'Pamukkale', distance: 'Flight/Bus', time: '1 hr / 10 hrs' },
      { name: 'Antalya', distance: 'Flight', time: '1 h 15m' },
      { name: 'Ephesus', distance: 'Flight to Izmir', time: '1 hour' }
    ],
    tripCost: {
      flights: '₹35,000 - ₹45,000',
      hotels: '₹5,000 - ₹12,000 per night',
      transfers: '₹10,000 (Inter-city buses/flights)',
      activities: '₹25,000 - ₹40,000 (Ballooning is major cost)'
    }
  },
  'schengen': {
    faqs: [
      { question: 'Which Schengen country gives visa easily?', answer: 'France, Switzerland, and Italy are popular entry points for Indians with relatively smoother processes.' },
      { question: 'How much bank balance is required?', answer: 'Ideally ₹3-5 Lakhs per person minimum for a smooth approval, showing consistent funds.' },
      { question: 'Is Eurail pass worth it?', answer: 'Yes, if you plan to visit 3+ countries and travel extensively by train.' }
    ],
    nearbyPlaces: [
      { name: 'Paris (France)', distance: 'Train', time: 'Varies' },
      { name: 'Swiss Alps', distance: 'Train', time: 'Varies' },
      { name: 'Amsterdam', distance: 'Train', time: 'Varies' },
      { name: 'Rome (Italy)', distance: 'Flight', time: 'Varies' }
    ],
    tripCost: {
      flights: '₹45,000 - ₹65,000',
      hotels: '₹8,000 - ₹20,000 per night',
      transfers: '₹20,000 (Trains/Passes)',
      activities: '₹30,000+'
    }
  },
  'phuket': {
    // Legacy fallback
    faqs: [
      { question: 'Is Phuket expensive?', answer: 'Phuket is slightly more expensive than Bangkok but still very affordable compared to European beach destinations.' },
      { question: 'Best area to stay in Phuket?', answer: 'Patong for nightlife, Karon/Kata for balance, and Bang Tao/Surin for luxury.' },
      { question: 'How to go to Phi Phi Island?', answer: 'Ferries (2 hrs) and Speedboats (45 mins) run daily from Rassada Pier.' }
    ],
    nearbyPlaces: [
      { name: 'Phi Phi Islands', distance: 'Ferry', time: '2 hours' },
      { name: 'James Bond Island', distance: 'Speedboat', time: '1 hour' },
      { name: 'Similan Islands', distance: 'Speedboat', time: '1.5 hours' },
      { name: 'Krabi', distance: 'Ferry/Road', time: '2.5 hours' }
    ],
    tripCost: {
      flights: '₹20,000 - ₹30,000',
      hotels: '₹3,000 - ₹10,000 per night',
      transfers: '₹4,000 - ₹6,000',
      activities: '₹10,000 - ₹18,000'
    }
  }
};

export const getDestinationData = (slug: string, pageSlug?: string): DestinationContentData | undefined => {
  // 1. Check New Data Structures (Top priority for target pages)
  if (slug === 'thailand' && pageSlug && thailandData[pageSlug]) {
    return thailandData[pageSlug];
  }
  if (slug === 'pattaya' && pageSlug && pattayaData[pageSlug]) {
    return pattayaData[pageSlug];
  }
  if (slug === 'phuket' && pageSlug && phuketData[pageSlug]) {
    return phuketData[pageSlug];
  }
  if (slug === 'bali' && pageSlug && baliData[pageSlug]) {
    return baliData[pageSlug];
  }
  if (slug === 'dubai' && pageSlug && dubaiData[pageSlug]) {
    return dubaiData[pageSlug];
  }
  if (slug === 'singapore' && pageSlug && singaporeData[pageSlug]) {
    return singaporeData[pageSlug];
  }
  if (slug === 'maldives' && pageSlug && maldivesData[pageSlug]) {
    return maldivesData[pageSlug];
  }

  // 2. Fallback to Legacy Data
  return LEGACY_DESTINATION_DATA[slug];
};

export const getPageConfig = (pageSlug: DestinationPageSlug) =>
  DESTINATION_PAGE_ORDER.find((p) => p.slug === pageSlug) ?? DESTINATION_PAGE_ORDER[0];

