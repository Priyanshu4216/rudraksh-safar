import { DestinationContentData } from './types';

export const phuketData: Record<string, DestinationContentData> = {
    'beaches': {
        intro: 'Phuket is home to some of the world\'s most famous beaches, from the party hub of Patong to the quiet luxury of Bang Tao.',
        decisionGuide: {
            bestFor: ['Beach Lovers', 'Families', 'Honeymooners', 'Water Sports'],
            notFor: ['Those seeking mountain cold'],
            budgetVsLuxury: 'Patong is budget-friendly. Bang Tao and Surin are luxury hubs.',
            idealDuration: '4-5 Days'
        },
        honestNegatives: [
            {
                title: 'Taxi Mafia',
                description: 'Taxis and Tuk-tuks in Phuket are notoriously expensive compared to Bangkok. Use Grab/Bolt or rent a scooter if experienced.',
                severity: 'warning'
            },
            {
                title: 'Patong Crowds',
                description: 'Patong Beach is very crowded and noisy. Go to Karon or Kata for a balance.',
                severity: 'info'
            }
        ],
        beaches: [
            {
                name: 'Patong Beach',
                description: 'The heartbeat of Phuket. 3km of golden sand lined with hotels, malls, and the famous Bangla Road nightlife.',
                activities: ['Jet Skiing', 'Parasailing', 'Nightlife'],
                bestFor: ['Party Lovers', 'Activity Seekers'],
                facilities: ['Sunbeds', 'Massage', 'Restaurants']
            },
            {
                name: 'Kata Beach',
                description: 'A family favorite. Palm-lined, with crystal clear water (in season) and a great surf vibe. Much more relaxed than Patong.',
                activities: ['Surfing (May-Oct)', 'Swimming', 'Dining'],
                bestFor: ['Families', 'Couples', 'Surfers'],
                facilities: ['Surf Schools', 'Resorts', 'Shopping']
            },
            {
                name: 'Freedom Beach',
                description: 'A hidden gem accessible only by longtail boat or a steep hike. Pristine white sand and incredible snorkeling.',
                activities: ['Snorkeling', 'Sunbathing', 'Photography'],
                bestFor: ['Nature Lovers', 'Couples'],
                facilities: ['Basic Restaurant', 'Toilets']
            }
        ],
        nearbyPlaces: [
            { name: 'Patong Beach', distance: 'Central', time: '0 mins' },
            { name: 'Karon Beach', distance: 'Taxi', time: '15 mins' },
            { name: 'Kata Beach', distance: 'Taxi', time: '20 mins' },
            { name: 'Freedom Beach', distance: 'Longtail Boat', time: '30 mins' }
        ],
        faqs: [
            {
                question: 'Which is the best beach for families?',
                answer: 'Kata Beach and Kamala Beach are excellent for families - clean water, good food, and not too noisy.'
            },
            {
                question: 'Is Patong Beach clean?',
                answer: 'It is decent but busy. For clear water, take a day trip to Freedom Beach or Paradise Beach.'
            }
        ]
    },
    'island-tours': {
        intro: 'Phuket is the gateway to the Andaman Sea\'s most beautiful islands including Phi Phi and James Bond Island.',
        decisionGuide: {
            bestFor: ['Adventure', 'Photography', 'Snorkeling'],
            notFor: ['Sea-sickness prone travelers (take meds)'],
            budgetVsLuxury: 'Big boat tours are cheaper (1200 THB). Speedboats vary (1500-2500 THB). Private catamarans are luxury.',
            idealDuration: '2 Full Days'
        },
        experienceSignals: [
            {
                title: 'Early Bird Wins',
                description: 'Book an "Early Bird" Phi Phi tour that leaves at 6 AM to beat the massive crowds at Maya Bay.',
                author: 'Rudraksh Safar Expert'
            }
        ]
    },
    'trip-cost': {
        tripCost: {
            flights: '₹20,000 - ₹30,000 (Direct or via BKK)',
            hotels: '₹3,000 - ₹10,000 (Slightly pricier than Pattaya)',
            transfers: '₹500 - ₹1000 (Expensive taxis)',
            activities: '₹10,000 - ₹20,000 (Island tours are key)'
        },
        indianContext: {
            visaPolicy: 'Visa Free',
            foodAvailability: 'Indian restaurants available in Patong, Karon, and Phuket Town.',
            currencyTips: 'Carry cash for island national park fees (usually 400 THB/person).',
            simCard: 'Yes, essential.'
        },
        hotels: [
            {
                name: 'Amari Phuket',
                image: '',
                priceRange: '₹12,000 - ₹20,000/night',
                rating: 4.7,
                stars: 5,
                location: 'Patong Beach (Private end)',
                description: 'Luxury resort with a private beach, yet close to Patong action. Stunning ocean views.',
                pros: ['Private Beach', 'Ocean Views', 'Luxury'],
                cons: ['Hilly resort'],
                bestFor: ['Couples', 'Honeymooners', 'Families'],
                link: 'https://www.amari.com/phuket'
            },
            {
                name: 'Sawaddi Patong Resort',
                image: '',
                priceRange: '₹4,000 - ₹7,000/night',
                rating: 4.3,
                stars: 4,
                location: 'Patong',
                description: 'Chinese-Portuguese style resort. Quiet but within walking distance to Bangla Road.',
                pros: ['Quiet', 'Design', 'Location'],
                cons: ['Not beachfront'],
                bestFor: ['Couples', 'Families'],
                link: ''
            },
            {
                name: 'Lub d Phuket Patong',
                image: '',
                priceRange: '₹1,500 - ₹3,000/night',
                rating: 4.5,
                stars: 3,
                location: 'Patong Beach',
                description: 'High-end hostel and hotel. Social vibe, great pool, and right on the beach road. Perfect for solo travelers.',
                pros: ['Social Vibe', 'Location', 'Modern'],
                cons: ['Can be noisy'],
                bestFor: ['Solo Travelers', 'Friends'],
                link: 'https://lubd.com/destination/phuket-patong/'
            }
        ]
    },
    'places-to-visit': {
        intro: 'From the colorful streets of Old Town to the spiritual heights of Big Buddha, Phuket is rich in culture.',
        decisionGuide: {
            bestFor: ['Families', 'History Buffs', 'Photographers'],
            notFor: ['Those who only want beach time'],
            budgetVsLuxury: 'Most temples are free. Old Town is free to walk.',
            idealDuration: '1 Day'
        },
        honestNegatives: [
            {
                title: 'Crowds',
                description: 'Big Buddha and Wat Chalong get very crowded with tour buses by 10 AM.',
                severity: 'info'
            },
            {
                title: 'Dress Code',
                description: 'Strict dress code in temples. No shorts or sleeveless tops.',
                severity: 'warning'
            }
        ],
        placesToVisit: [
            {
                name: 'The Big Buddha',
                description: 'A colossal 45-meter tall white marble Buddha statue visible from half the island. Offers 360-degree views.',
                ticketPrice: 'Free',
                openingHours: '6:00 AM - 7:00 PM',
                bestFor: ['Views', 'Spirituality', 'Photography'],
                location: 'Nakkerd Hills (Between Chalong and Kata)',
                tips: 'Go early (8 AM) for peace and cooler weather. Modest dress required.'
            },
            {
                name: 'Wat Chalong',
                description: 'The largest and most important Buddhist temple in Phuket. Stunning architecture and history.',
                ticketPrice: 'Free',
                openingHours: '7:00 AM - 5:00 PM',
                bestFor: ['Culture', 'History'],
                location: 'Chalong',
                tips: 'Do not wear shoes inside the temple buildings. Avoid 11 AM - 2 PM (peak tour bus time).'
            },
            {
                name: 'Phuket Old Town',
                description: 'A charming historical district with Sino-Portuguese architecture, colorful shophouses, and cafes.',
                ticketPrice: 'Free',
                openingHours: '24/7 (Shops open 10-6)',
                bestFor: ['Walking', 'Cafe Hopping', 'Photography'],
                location: 'Phuket Town',
                tips: 'Visit on Sunday evening for the famous Walking Street Night Market (Lard Yai).'
            },
            {
                name: 'Ma Doo Bua Cafe',
                description: 'Famous for its giant Victoria Amazonica lotus leaves. You can get a drone photo standing on a boat among the lotuses.',
                ticketPrice: 'Free Entry (Min spend 200 THB)',
                openingHours: '9:00 AM - 6:00 PM',
                bestFor: ['Instagram', 'Drone Shots', 'Cafe'],
                location: 'Thalang District',
                tips: 'The lotus leaves are biggest during rainy season. Drone photography packages start from 500 THB.'
            }
        ],
        nightlifeVenues: [
            {
                name: 'Bangla Road',
                type: 'Club',
                description: 'The epicenter of Phuket nightlife. A walking street closed to traffic, filled with neon lights, loud bars, and street performers.',
                location: 'Patong Beach',
                priceLevel: '$$',
                bestFor: ['Partying', 'Clubbing', 'Sensory Overload'],
                openingHours: '6:00 PM - 4:00 AM',
                tips: 'It gets very crowded. Keep your wallet in front pocket. Good for a walk even if you don\'t drink.'
            },
            {
                name: 'Café Del Mar',
                type: 'Beach Club',
                description: 'A stylish and premium beach club bringing Ibiza vibes to Phuket. Great music, pool parties, and fire shows.',
                location: 'Kamala Beach',
                priceLevel: '$$$$',
                bestFor: ['Pool Parties', 'Sunsets', 'Cocktails'],
                openingHours: '10:00 AM - 2:00 AM',
                tips: 'Book a sunbed in advance. Dress code is "beach chic" - no ragged clothes.'
            },
            {
                name: 'Chillva Market',
                type: 'Market',
                description: 'A trendy night market with shipping container shops, live music, and excellent local street food.',
                location: 'Phuket Town',
                priceLevel: '$',
                bestFor: ['Street Food', 'Shopping', 'Local Vibes'],
                openingHours: '5:00 PM - 11:00 PM (Everyday, best Fri-Sat)',
                tips: 'Try the grass jelly drinks and spicy seafood salad. Much more local feel than Patong.'
            },
            {
                name: 'Simon Cabaret',
                type: 'Show',
                description: 'The most famous ladyboy cabaret show in Phuket. Glamorous costumes, grand sets, and family-friendly entertainment.',
                location: 'Patong (Sirirat Road)',
                priceLevel: '$$$',
                bestFor: ['Entertainment', 'Families', 'Culture'],
                openingHours: 'Shows at 6:00, 7:30, 9:00 PM',
                tips: 'Photos with performers after the show cost extra (100-200 THB). Plan accordingly.'
            }
        ]
    }
};
