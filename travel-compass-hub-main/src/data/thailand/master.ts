import { LucideIcon, Plane, MapPin, Building2, Palmtree, Waves, ShoppingBag, Utensils } from 'lucide-react';

export interface ThaiCity {
    id: string;
    name: string;
    alias: string;
    description: string;
    highlights: string[];
    bestFor: string[];
    image: string;
    travelStyle: 'Fast-Paced' | 'Relaxed' | 'Luxury' | 'Party';
    bestSeason: string;
}

export interface ThaiFlight {
    from: string;
    via: string[];
    duration: string;
    airline: string[];
    priceRange: string;
}

export const thaiCities: ThaiCity[] = [
    {
        id: 'bangkok',
        name: 'Bangkok',
        alias: 'The City of Angels',
        description: 'A vibrant mix of traditional temples, massive shopping malls, and electrifying street life. Perfect for shopping and culture.',
        highlights: ['Grand Palace', 'Wat Arun', 'Chatuchak Market', 'MBK Center', 'Chao Phraya Cruise'],
        bestFor: ['Shopping', 'Culture', 'Foodies', 'Nightlife'],
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2274&auto=format&fit=crop',
        travelStyle: 'Fast-Paced',
        bestSeason: 'Nov–Apr'
    },
    {
        id: 'pattaya',
        name: 'Pattaya',
        alias: 'The Party Capital',
        description: 'Famous for its walking street, coral islands, and cabaret shows. A short drive from Bangkok.',
        highlights: ['Walking Street', 'Coral Island (Koh Larn)', 'Sanctuary of Truth', 'Nong Nooch Garden'],
        bestFor: ['Nightlife', 'Beaches', 'Water Sports', 'Bachelors'],
        image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2070&auto=format&fit=crop',
        travelStyle: 'Party',
        bestSeason: 'Nov–Apr'
    },
    {
        id: 'phuket',
        name: 'Phuket',
        alias: 'Pearl of the Andaman',
        description: 'Thailand\'s largest island, offering extensive beaches, luxury resorts, and island hopping tours.',
        highlights: ['Patong Beach', 'Phi Phi Islands Tour', 'Big Buddha', 'Old Phuket Town', 'James Bond Island'],
        bestFor: ['Luxury', 'Honeymoon', 'Island Hopping', 'Beaches'],
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2001&auto=format&fit=crop',
        travelStyle: 'Luxury',
        bestSeason: 'Nov–Apr'
    },
    {
        id: 'krabi',
        name: 'Krabi',
        alias: 'Nature\'s Masterpiece',
        description: 'Stunning limestone cliffs, clear waters, and a more relaxed vibe compared to Phuket.',
        highlights: ['Railay Beach', '4 Island Tour', 'Emerald Pool', 'Tiger Cave Temple'],
        bestFor: ['Nature', 'Relaxation', 'Couples', 'Climbing'],
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
        travelStyle: 'Relaxed',
        bestSeason: 'Nov–Apr'
    }
];

export const raipurFlights: ThaiFlight[] = [
    {
        from: 'Raipur (RPR)',
        via: ['Kolkata (CCU)'],
        duration: '7-9 Hours',
        airline: ['IndiGo'],
        priceRange: '₹18,000 - ₹25,000'
    },
    {
        from: 'Raipur (RPR)',
        via: ['Delhi (DEL)', 'Mumbai (BOM)'],
        duration: '9-12 Hours',
        airline: ['Air India', 'Vistara'],
        priceRange: '₹22,000 - ₹30,000'
    }
];

export const thailandMeta = {
    title: 'Thailand Tour Packages from India 2026 | Flight Inclusive Deals',
    description: 'Best Thailand tour packages from Raipur & Bhilai. Customized itineraries for Bangkok, Pattaya, Phuket. Visa-free travel for Indians. Book with local trust.',
    keywords: ['Thailand tour package from Raipur', 'Bangkok Pattaya tour package', 'Phuket honeymoon package', 'Thailand visa for Indians 2026', 'Rudraksh Safar Thailand'],
    note: 'Prices vary based on season and availability'
};

export const thailandFAQs = [
    {
        question: 'Is Thailand Visa Free for Indians?',
        answer: 'Yes! As of 2026, Indian passport holders can enter Thailand VISA-FREE for up to 60 days for tourism. You just need a valid passport (6 months validity) and proof of funds/return ticket.'
    },
    {
        question: 'What is the best time to visit Thailand?',
        answer: 'November to April is the best time (cool and dry). However, for budget travelers, May to October offers great hotel deals, though you might encounter some rain.'
    },
    {
        question: 'Can I get vegetarian Indian food in Thailand?',
        answer: 'Absolutely. Bangkok, Pattaya, and Phuket have hundreds of Indian restaurants serving pure vegetarian and Jain food. We ensure your itinerary includes dining at these trusted spots.'
    },
    {
        question: 'How much does a Thailand trip cost from Raipur?',
        answer: 'A budget 5-day trip (Bangkok-Pattaya) starts from approx ₹35,000 per person (including flights). Luxury packages with 4-star hotels and Phuket can range from ₹50,000 to ₹80,000.'
    }
];
