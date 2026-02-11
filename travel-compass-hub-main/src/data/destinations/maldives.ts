import { DestinationContentData } from './types';

export const maldivesData: Record<string, DestinationContentData> = {
    'travel-guide': {
        intro: "The Maldives is the definition of paradise on Earth. A collection of 1,200 coral islands grouped in a double chain of 26 atolls, it is famous for its crystal-clear turquoise waters, overwater villas, and vibrant marine life. Whether you are a honeymooner seeking total privacy or a family wanting a unique island vacation, Maldives offers an escape like no other.",
        decisionGuide: {
            bestFor: ['Honeymooners', 'Luxury Travelers', 'Divers/Snorkelers', 'Relaxation'],
            notFor: ['Budget Backpackers (though local islands are an option)', 'Nightlife Seekers (It is very quiet)', 'Active explorers who get bored of beaches quickly'],
            budgetVsLuxury: 'Maldives is famous for luxury (₹50k/night resorts). However, "Local Islands" like Maafushi offer guesthouses for ₹4,000/night.',
            idealDuration: '4-5 Days is standard. Anything more might feel repetitive unless you are diving.'
        },
        indianContext: {
            visaPolicy: 'Visa Free for Indians (Visa on Arrival is free for 30 days). Just fill the IMUGA form 96 hours before flight.',
            foodAvailability: 'Resorts cater to Indian palettes with Dal, Roti, and Curries. Vegetarian options are always available.',
            currencyTips: 'USD is widely accepted in resorts. MVR (Rufiyaa) is used in local islands. 1 MVR ≈ 5.4 INR.',
            simCard: 'Ooredoo or Dhiraagu. Buy at Male airport (approx USD 30 for 17GB data).'
        },
        honestNegatives: [
            {
                title: 'Expensive Transfers',
                description: 'Seaplane transfers to remote resorts can cost $400-$600 per person (roundtrip). Always check if transfer is included.',
                severity: 'warning'
            },
            {
                title: 'No Alcohol on Local Islands',
                description: 'Maldives is an Islamic nation. Alcohol is strictly prohibited on local inhabited islands (like Maafushi). It is only available in private island resorts.',
                severity: 'caution'
            }
        ]
    },
    'best-time-to-visit': {
        bestTime: 'November to April (Dry Season)',
        weather: 'Sunny skies and calm seas. Perfect for snorkeling and diving. May to October is the monsoon season with higher chances of rain but lower prices.',
        experienceSignals: [
            {
                title: 'Bioluminescence',
                description: 'Visit Vaadhoo Island between June and October for a higher chance to see the "Sea of Stars" glowing plankton.',
                author: 'Nature Guide'
            }
        ]
    },
    'places-to-visit': {
        placesToVisit: [
            {
                name: 'Male City',
                description: 'The densely populated capital. Visit the Grand Friday Mosque, Fish Market, and National Museum for a taste of local culture.',
                location: 'Male Atoll',
                ticketPrice: 'Free',
                openingHours: 'All Day',
                bestFor: ['Culture', 'Transit']
            },
            {
                name: 'Maafushi Island',
                description: 'The most popular local island. Great for budget travelers, water sports, and experiencing local Maldivian life.',
                location: 'South Male Atoll',
                ticketPrice: 'Ferry approx $2',
                openingHours: 'All Day',
                bestFor: ['Budget', 'Water Sports']
            },
            {
                name: 'Vaadhoo Island',
                description: 'Famous for the "Sea of Stars" phenomenon where the beach glows at night due to bioluminescent plankton.',
                location: 'Raa Atoll',
                ticketPrice: 'Free (Boat transfer extra)',
                openingHours: 'Best view at night',
                bestFor: ['Nature', 'Couples', 'Photography']
            },
            {
                name: 'Banana Reef',
                description: 'One of the best diving sites in the world. Shaped like a banana, it is teeming with exotic fish, corals, and caves.',
                location: 'North Male Atoll',
                ticketPrice: 'Diving trip approx $80-100',
                openingHours: 'Daytime',
                bestFor: ['Diving', 'Snorkeling', 'Adventure']
            }
        ]
    },
    'things-to-do': {
        experienceSignals: [
            {
                title: 'Snorkel with Manta Rays',
                description: 'Hanifaru Bay in Baa Atoll is a UNESCO biosphere reserve where you can swim with hundreds of Manta Rays (Jun-Nov).',
                author: 'Marine Biologist'
            },
            {
                title: 'Sandbank Picnic',
                description: 'Book a private boat to a tiny strip of white sand in the middle of the ocean for a private picnic lunch.',
                author: 'Romance Expert'
            }
        ]
    },
    'hotels': {
        hotels: [
            {
                name: 'Soneva Jani',
                image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974',
                priceRange: '₹2,00,000+',
                rating: 5.0,
                stars: 5,
                location: 'Noonu Atoll',
                description: 'The epitome of luxury. Famous for water villas with retractable roofs and slides into the ocean.',
                pros: ['Ultra-luxury', 'Slides', 'Privacy'],
                cons: ['Extremely expensive'],
                bestFor: ['Celebrities', 'Honeymoon']
            },
            {
                name: 'Hard Rock Hotel Maldives',
                image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070', // Placeholder
                priceRange: '₹35,000 - ₹50,000',
                rating: 4.6,
                stars: 5,
                location: 'Emboodhoo Lagoon',
                description: 'A fun, music-themed resort just 15 mins by boat from Male airport. Part of the CROSSROADS integrated destination.',
                pros: ['Easy access', 'Vibe', 'Facilities'],
                cons: ['Not remote feel'],
                bestFor: ['Groups', 'Families']
            },
            {
                name: 'Arena Beach Hotel',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070', // Placeholder
                priceRange: '₹5,000 - ₹8,000',
                rating: 4.3,
                stars: 4,
                location: 'Maafushi',
                description: 'The best hotel on Maafushi Island. Offers a rooftop pool and easy access to Bikini Beach.',
                pros: ['Affordable', 'Rooftop pool', 'Excursions'],
                cons: ['Crowded island'],
                bestFor: ['Budget', 'Backpackers']
            }
        ]
    },
    'beaches': {
        beaches: [
            {
                name: 'Bikini Beach (Maafushi)',
                description: 'One of the few beaches on local islands where swimwear is allowed. Vibrant and full of tourists.',
                activities: ['Sunbathing', 'Swimming'],
                bestFor: ['Tourists'],
                facilities: ['Sunbeds', 'Juice bars']
            },
            {
                name: 'Veligandu Island Beach',
                description: 'A long sandbank beach offering picture-perfect turquoise water views. Often voted one of the best beaches in the world.',
                activities: ['Walking', 'Photography'],
                bestFor: ['Couples'],
                facilities: ['Resort only']
            }
        ]
    },
    'nightlife': {
        nightlifeVenues: [
            {
                name: 'Subsix',
                type: 'Club',
                description: 'The world’s first underwater nightclub. Party 6 meters below sea level surrounded by coral reef.',
                location: 'Niyama Private Islands',
                priceLevel: '$$$$',
                bestFor: ['Unique Experience', 'Luxury'],
                openingHours: '9 PM - Late'
            },
            {
                name: 'Floating Bar (Kaani Princess)',
                type: 'Bar',
                description: 'A boat anchored off Maafushi island that serves alcohol (since it is technically not on the island). Free transfer by small boat.',
                location: 'Maafushi',
                priceLevel: '$$',
                bestFor: ['Budget travelers', 'Drinks'],
                openingHours: '5 PM - 1 AM'
            }
        ]
    },
    'trip-cost': {
        tripCost: {
            flights: '₹18,000 - ₹25,000 (Direct from BLR/Kochi/Mumbai)',
            hotels: '₹4,000 - ₹3,00,000+ per night',
            transfers: '₹1,500 (Ferry) to ₹40,000 (Seaplane)',
            activities: '₹5,000 - ₹15,000 (Snorkeling/Diving)'
        }
    },
    'faqs': {
        faqs: [
            { question: 'Do I need a visa for Maldives?', answer: 'No. Just carry a passport with 6 months validity. Visa on Arrival is free for 30 days.' },
            { question: 'Is Maldives safe for families?', answer: 'Yes, widely considered safe. Many resorts have kids clubs. However, overwater villas are sometimes restricted for very small children due to safety.' },
            { question: 'Can I bring alcohol from duty free?', answer: 'No. Alcohol will be confiscated at customs on arrival. You can collect it when departing.' },
            { question: 'Is it boring for 7 days?', answer: 'It can be, if you are not into water sports. We recommend 4-5 days for a perfect duration.' }
        ]
    }
};
