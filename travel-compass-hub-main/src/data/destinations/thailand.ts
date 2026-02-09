import { DestinationContentData } from './types';

export const thailandData: Record<string, DestinationContentData> = {
    'trip-cost': {
        tripCost: {
            flights: '₹18,000 - ₹25,000 (Roundtrip from Kolkata/Delhi)',
            hotels: '₹2,000 - ₹8,000 per night (Budget to 4-Star)',
            transfers: '₹3,000 - ₹5,000 (Local transport)',
            activities: '₹8,000 - ₹15,000 (Island tours, shows)'
        },
        decisionGuide: {
            bestFor: ['First-time international travelers', 'Families', 'Bachelors', 'Couples'],
            notFor: ['Travelers seeking extreme solitude (unless going to remote islands)'],
            budgetVsLuxury: 'Thailand caters to every budget. You can survive on ₹3000/day or splurge ₹50,000/day. The sweet spot for a comfortable trip is ₹80,000 per person for 6 days.',
            idealDuration: '6-8 Days'
        },
        lastUpdated: '2025-11-15',
        author: {
            name: 'Priya Sharma',
            role: 'Head of Travel Content',
        },
        reviewer: {
            name: 'Rohit Verma',
            role: 'Senior Travel Consultant',
        },
        indianContext: {
            visaPolicy: 'Visa Free for Indians (Verified for 2026). Max stay 60 days.',
            foodAvailability: 'Indian food is available everywhere in Bangkok, Pattaya, and Phuket. Vegetarian options are plentiful.',
            currencyTips: 'Carry at least 10,000 THB in cash per person. Forex cards work well in malls/hotels.',
            simCard: 'Buy a local SIM (AIS or TrueMove) at the airport (approx 299 THB for 8 days unlimited data).'
        },
        honestNegatives: [
            {
                title: 'Taxi Scams',
                description: 'Tuk-tuks near Grand Palace often overcharge or take you to gem shops. Always insist on "Meter Taxi" or use Grab/Bolt apps.',
                severity: 'warning'
            },
            {
                title: 'Overcrowded tourist spots',
                description: 'Places like Maya Bay can be extremely crowded. Visit early morning (7 AM) to enjoy.',
                severity: 'info'
            }
        ]
    },
    'best-time-to-visit': {
        bestTime: 'November to March (Cool Season)',
        weather: 'Pleasant temperatures (20°C - 30°C), low humidity, and blue skies. Ideal for beaches and sightseeing.',
        experienceSignals: [
            {
                title: 'Shoulder Season Magic',
                description: 'Creating a trip in late April or October can save you 30% on hotels, with only occasional rain showers.',
                author: 'Rudraksh Safar Expert'
            }
        ]
    },
    'faqs': {
        faqs: [
            {
                question: 'Is Thailand visa-free for Indians in 2026?',
                answer: 'Yes, Thailand currently offers visa-free entry for Indian citizens for stays up to 60 days. This policy is active as of early 2026.'
            },
            {
                question: 'How much does a Thailand trip cost from India?',
                answer: 'A standard 6-day Thailand trip costs between ₹40,000 to ₹60,000 per person (excluding flights). With flights, budget around ₹65,000 - ₹85,000.'
            },
            {
                question: 'Which is better for families: Phuket or Pattaya?',
                answer: 'Phuket is generally better for families due to cleaner beaches, island tours, and a slightly more relaxed vibe. Pattaya has a very active nightlife which might not suit all families, though it does have attractions like Nong Nooch Garden.'
            },
            {
                question: 'Is vegetarian food easy to find?',
                answer: 'Yes, especially in tourist hubs. Look for "Happy Cow" stickers or Indian restaurants. 7-Eleven also has toasties and fruits.'
            }
        ],
        honestNegatives: [
            {
                title: 'Language Barrier',
                description: 'Outside tourist areas, fewer people speak English. Google Translate is essential.',
                severity: 'info'
            }
        ]
    }
};
