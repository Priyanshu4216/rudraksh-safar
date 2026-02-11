import { DestinationContentData } from './types';

export const singaporeData: Record<string, DestinationContentData> = {
    'travel-guide': {
        intro: "Singapore is a futuristic garden city where nature meets cutting-edge technology. It is clean, efficient, safe, and packed with world-class attractions. From the Avatar-like Supertrees to the vibrant streets of Little India, Singapore offers a diverse cultural experience in a compact, easy-to-navigate island nation.",
        decisionGuide: {
            bestFor: ['Families with Kids', 'First-time International Travelers', 'Foodies', 'Shopping'],
            notFor: ['Budget travelers looking for cheap alcohol/nightlife (go to Thailand/Vietnam)'],
            budgetVsLuxury: 'Singapore is expensive. Hotel rooms are small and pricey. Food at hawker centers is cheap (SGD 5-10), but restaurants are costly.',
            idealDuration: '4-5 Days is perfect.'
        },
        indianContext: {
            visaPolicy: 'E-Visa required (Processing time 3-5 days). We assist with the application.',
            foodAvailability: 'Excellent. Little India has authentic Dosas, Biryanis, and Thalis. "Saravana Bhavan" and "Komala Vilas" are legendary.',
            currencyTips: '1 SGD ≈ 62 INR. Tap-to-pay credit/forex cards work everywhere (Buses, MRT, 7-Eleven).',
            simCard: 'Singtel or StarHub. Tourist SIMs available at Changi Airport (approx SGD 12 for 100GB).'
        },
        honestNegatives: [
            {
                title: 'High Costs',
                description: 'Alcohol and accommodation are significantly more expensive than neighboring countries like Malaysia or Thailand.',
                severity: 'warning'
            },
            {
                title: 'Strict Laws',
                description: 'Chewing gum is banned. Jaywalking and littering attract heavy fines. Smoking is allowed only in designated yellow boxes.',
                severity: 'caution'
            }
        ]
    },
    'best-time-to-visit': {
        bestTime: 'February to April (Dry Phase)',
        weather: 'Singapore is hot and humid year-round (30°C). It rains often, so carry an umbrella. Feb-April has the least rain.',
        experienceSignals: [
            {
                title: 'Great Singapore Sale',
                description: 'If you love shopping, visit between June and July for island-wide discounts during the GSS.',
                author: 'Shopping Expert'
            }
        ]
    },
    'places-to-visit': {
        placesToVisit: [
            {
                name: 'Gardens by the Bay',
                description: 'A horticultural wonderland featuring the iconic Supertree Grove, Cloud Forest, and Flower Dome. The light show at 7:45 PM is free.',
                location: 'Marina Bay',
                ticketPrice: 'Free (Outdoor), SGD 32 (Domes)',
                openingHours: '5 AM - 2 AM',
                bestFor: ['Nature', 'Photography', 'Must-do']
            },
            {
                name: 'Sentosa Island',
                description: 'The "State of Fun". Home to Universal Studios, S.E.A. Aquarium, Skyline Luge, and beaches.',
                location: 'Sentosa',
                ticketPrice: 'Island Entry SGD 4 (Attractions extra)',
                openingHours: 'All Day',
                bestFor: ['Families', 'Adventure', 'Beach']
            },
            {
                name: 'Marina Bay Sands Skypark',
                description: 'An observation deck on the 57th floor offering panoramic views of the city skyline and harbor.',
                location: 'Marina Bay',
                ticketPrice: 'SGD 32',
                openingHours: '11 AM - 9 PM',
                bestFor: ['Views', 'Luxury']
            },
            {
                name: 'Singapore Zoo / Night Safari',
                description: 'One of the best rainforest zoos in the world. The Night Safari offers a unique tram ride to see nocturnal animals.',
                location: 'Mandai',
                ticketPrice: 'SGD 48 - 55',
                openingHours: '8:30 AM - 6 PM (Zoo), 7 PM - 12 AM (Safari)',
                bestFor: ['Families', 'Wildlife']
            },
            {
                name: 'Jewel Changi Airport',
                description: 'A destination in itself. Prepare to be amazed by the Rain Vortex, the world’s tallest indoor waterfall.',
                location: 'Changi Airport',
                ticketPrice: 'Free',
                openingHours: '24/7',
                bestFor: ['Transit', 'Shopping', 'Photography']
            }
        ]
    },
    'things-to-do': {
        experienceSignals: [
            {
                title: 'Eat at a Hawker Center',
                description: 'Try Michelin-starred Chicken Rice at Tian Tian (Maxwell Food Centre) or Satay at Lau Pa Sat.',
                author: 'Foodie Guide'
            },
            {
                title: 'River Safari',
                description: 'Take the Amazon River Quest boat ride. It is a hit with kids and less tiring than the main zoo.',
                author: 'Family Expert'
            }
        ]
    },
    'hotels': {
        hotels: [
            {
                name: 'Marina Bay Sands',
                image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2552',
                priceRange: '₹50,000+',
                rating: 4.7,
                stars: 5,
                location: 'Marina Bay',
                description: 'World-famous for its rooftop infinity pool. Staying here is a bucket-list experience.',
                pros: ['Infinity Pool access', 'Iconic', 'Location'],
                cons: ['Crowded lobby', 'Very expensive'],
                bestFor: ['Luxury', 'Couples']
            },
            {
                name: 'Village Hotel Sentosa',
                image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049', // Placeholder
                priceRange: '₹18,000 - ₹25,000',
                rating: 4.5,
                stars: 4,
                location: 'Sentosa',
                description: 'The best family hotel in Sentosa with a massive pool deck and easy access to Universal Studios.',
                pros: ['Kid-centric', 'Great pools', 'Location'],
                cons: ['Far from city center'],
                bestFor: ['Families']
            },
            {
                name: 'Ibis Singapore on Bencoolen',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070', // Placeholder
                priceRange: '₹8,000 - ₹12,000',
                rating: 4.2,
                stars: 3,
                location: 'Bugis',
                description: 'Reliable budget-friendly hotel near Bugis MRT and shopping areas.',
                pros: ['Clean', 'Affordable', 'Central'],
                cons: ['Small rooms'],
                bestFor: ['Budget Travelers']
            }
        ]
    },
    'nightlife': {
        nightlifeVenues: [
            {
                name: 'Clarke Quay',
                type: 'Bar',
                description: 'A riverside quay packed with bars, restaurants, and clubs. The atmosphere is electric every night.',
                location: 'River Valley',
                priceLevel: '$$$',
                bestFor: ['Bar Hopping', 'Groups'],
                openingHours: '5 PM - 3 AM'
            },
            {
                name: 'Ce La Vi',
                type: 'Club',
                description: 'Rooftop club atop Marina Bay Sands. Expensive drinks but the view is worth every cent.',
                location: 'Marina Bay',
                priceLevel: '$$$$',
                bestFor: ['Luxury', 'Views'],
                openingHours: '12 PM - 3 AM'
            },
            {
                name: 'Lau Pa Sat (Satay Street)',
                type: 'Market',
                description: 'At night, the street outside this Victorian market closes for traffic and fills with Satay stalls. Great beer and food vibe.',
                location: 'Raffles Place',
                priceLevel: '$$',
                bestFor: ['Foodies', 'Casual Night'],
                openingHours: '7 PM - 1 AM'
            }
        ]
    },
    'trip-cost': {
        tripCost: {
            flights: '₹20,000 - ₹30,000 (Roundtrip)',
            hotels: '₹6,000 - ₹50,000+ per night',
            transfers: '₹3,000 (Uses public transport mainly)',
            activities: '₹20,000+ (Tickets are expensive)'
        }
    },
    'faqs': {
        faqs: [
            { question: 'Do Indians need a visa for Singapore?', answer: 'Yes, an E-Visa is required. We handle the application. Ensure your passport has 6 months validity.' },
            { question: 'Is vegetarian food easy to find?', answer: 'Extremely easy. Singapore has a huge Indian community. Little India serves 100% authentic vegetarian Indian food.' },
            { question: 'Can I drink tap water?', answer: 'Yes! Singapore tap water is perfectly safe to drink and meets WHO standards. Carry a reusable bottle.' },
            { question: 'Is Singapore safe at night?', answer: 'Singapore is one of the safest cities in the world. Walking alone at 2 AM is generally considered very safe.' },
            { question: 'What is the GST refund?', answer: 'Tourists can claim a refund on 9% GST for purchases over SGD 100 at participating stores. Show your passport while buying.' }
        ]
    }
};
