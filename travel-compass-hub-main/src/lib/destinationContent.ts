import { getBestTimeToVisit } from '@/lib/travelMeta';

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
  | 'best-hotels';

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
    title: (d) => `${d} Itinerary (5 Days)` ,
    description: (d) => `A clean 5-day itinerary for ${d} with sightseeing plan, travel tips, and optional add-ons.`,
  },
  {
    slug: 'trip-cost',
    title: (d) => `${d} Trip Cost (2026)` ,
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
    title: (d) => `Hidden Places in ${d} (Offbeat)` ,
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
    title: (d) => `${d} Shopping Guide` ,
    description: (d) => `Where to shop in ${d}: best markets, malls, souvenirs, and bargaining tips.`,
  },
  {
    slug: 'food-guide',
    title: (d) => `${d} Food Guide` ,
    description: (d) => `What to eat in ${d}: famous dishes, street food, and best areas for food lovers.`,
  },
  {
    slug: 'nightlife',
    title: (d) => `${d} Nightlife Guide` ,
    description: (d) => `Best nightlife in ${d}: night markets, shows, clubs, and evening experiences.`,
  },
  {
    slug: 'temples',
    title: (d) => `Religious & Cultural Places in ${d}`,
    description: (d) => `Religious and cultural places in ${d}: temples, heritage areas, and local traditions worth experiencing.`,
  },
  {
    slug: 'family-places',
    title: (d) => `${d} Family-Friendly Places` ,
    description: (d) => `Family-friendly places in ${d}: safe attractions, kid-friendly activities, and easy day plans.`,
  },
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

export const getPageConfig = (pageSlug: DestinationPageSlug) =>
  DESTINATION_PAGE_ORDER.find((p) => p.slug === pageSlug) ?? DESTINATION_PAGE_ORDER[0];
