import { DestinationContentData } from './types';

export const dubaiData: Record<string, DestinationContentData> = {
    'travel-guide': {
        intro: "Dubai is the city of superlatives—tallest building, largest mall, biggest man-made island. It is a futuristic metropolis rising from the desert, offering an unmatched blend of luxury, adventure, and shopping. Whether you want to ski indoors, dune bash in the desert, or dine in the clouds, Dubai makes it possible.",
        decisionGuide: {
            bestFor: ['Families', 'Shoppers', 'Luxury Travelers', 'Adventure Seekers'],
            notFor: ['Budget Backpackers (It is pricey compared to Vietnam/Thailand)', 'Nature lovers seeking forests'],
            budgetVsLuxury: 'Dubai leans towards luxury. A meal can cost ₹500 (Shawarma) or ₹50,000 (Fine Dining). Taxis are expensive; Metro is cheap.',
            idealDuration: '5-6 Days is ideal to cover the city highlights and a desert safari.'
        },
        indianContext: {
            visaPolicy: 'E-Visa for Indians (processing 2-5 days). Visa on Arrival available if you have a US/UK/Schengen visa.',
            foodAvailability: 'Indian food is available on every corner, from Saravana Bhavan to Michelin-star Indego by Vineet.',
            currencyTips: '1 AED ≈ 23 INR. Forex cards are widely accepted. Carry some cash for taxis and souks.',
            simCard: 'Du or Etisalat. Pick up a free tourist SIM at immigration (comes with 1GB data) or buy a pack.'
        },
        honestNegatives: [
            {
                title: 'Extreme Heat',
                description: 'From May to September, temperatures hit 45°C+. Outdoor activities are impossible during the day.',
                severity: 'warning'
            },
            {
                title: 'Expensive Alcohol',
                description: 'Alcohol is served only in hotels/clubs and is heavily taxed. A beer can cost ₹1000-1200.',
                severity: 'info'
            }
        ]
    },
    'best-time-to-visit': {
        bestTime: 'November to March (Winter)',
        weather: 'Perfect weather (20°C - 25°C). Ideal for outdoor exploring, desert safaris, and beach days.',
        experienceSignals: [
            {
                title: 'Dubai Shopping Festival (DSF)',
                description: 'Visit in Jan-Feb for DSF. The discounts on electronics and fashion are real, and the fireworks are daily.',
                author: 'Shopping Expert'
            }
        ]
    },
    'places-to-visit': {
        placesToVisit: [
            {
                name: 'Burj Khalifa',
                description: 'The world’s tallest building. The view from the 124th/148th floor observation deck is breathtaking, especially at sunset.',
                location: 'Downtown Dubai',
                ticketPrice: 'Approx AED 179 (Non-prime hours)',
                openingHours: '9 AM - 11 PM',
                bestFor: ['Views', 'Photography', 'Must-do']
            },
            {
                name: 'The Dubai Mall',
                description: 'Next to Burj Khalifa, it’s not just a mall but a destination with an Aquarium, Ice Rink, and the famous Fountain Show.',
                location: 'Downtown Dubai',
                ticketPrice: 'Free Entry',
                openingHours: '10 AM - 12 AM',
                bestFor: ['Shopping', 'Family', 'Entertainment']
            },
            {
                name: 'Desert Safari',
                description: 'A quintessential Dubai experience. Includes 4x4 dune bashing, camel ride, BBQ dinner, and belly dance performance.',
                location: 'Red Dunes',
                ticketPrice: 'AED 150 - 300 per person',
                openingHours: '3 PM - 9 PM',
                bestFor: ['Adventure', 'Culture']
            },
            {
                name: 'Miracle Garden',
                description: 'The world’s largest natural flower garden with over 150 million flowers arranged in stunning arches and patterns.',
                location: 'Al Barsha South',
                ticketPrice: 'AED 95',
                openingHours: '9 AM - 9 PM (Winter only)',
                bestFor: ['Nature', 'Photography', 'Couples']
            },
            {
                name: 'Global Village',
                description: 'A massive multicultural festival park combining pavilions from 90 countries, food, shopping, and entertainment.',
                location: 'Sheikh Mohammed Bin Zayed Road',
                ticketPrice: 'AED 25',
                openingHours: '4 PM - 12 AM (Oct to April)',
                bestFor: ['Foodies', 'Shopping', 'Family']
            }
        ]
    },
    'things-to-do': {
        experienceSignals: [
            {
                title: 'Skydiving over the Palm',
                description: 'For adrenaline junkies, a tandem skydive over the Palm Jumeirah is the ultimate bucket list item.',
                author: 'Adventure Expert'
            },
            {
                title: 'Abra Ride in Dubai Creek',
                description: 'For just AED 1, take a traditional wooden boat ride across the creek. It’s the most authentic and cheapest experience in Dubai.',
                author: 'Local Guide'
            }
        ]
    },
    'beaches': {
        beaches: [
            {
                name: 'JBR Beach',
                description: 'A bustling urban beach with a backdrop of skyscrapers. Lined with restaurants, cafes, and shops at "The Walk".',
                activities: ['Camel Ride', 'Water Sports', 'Dining'],
                bestFor: ['Families', 'Evening Strolls'],
                facilities: ['Showers', 'Changing Rooms', 'Sunbeds']
            },
            {
                name: 'Kite Beach',
                description: 'The best beach for water sports and food trucks. Great view of the Burj Al Arab.',
                activities: ['Kitesurfing', 'Volleyball', 'Kayaking'],
                bestFor: ['Active Travelers', 'Foodies'],
                facilities: ['Running Track', 'Skate Park', 'WiFi']
            },
            {
                name: 'La Mer',
                description: 'A trendy beachfront destination with eclectic industrial decor, street art, and upscale dining.',
                activities: ['Shopping', 'Dining', 'Waterpark'],
                bestFor: ['Instagrammers', 'Youth'],
                facilities: ['Cabanas', 'Retail Stores']
            }
        ]
    },
    'hotels': {
        hotels: [
            {
                name: 'Atlantis, The Palm',
                image: 'https://images.unsplash.com/photo-1542314831-068cd1dbd020?q=80&w=2071',
                priceRange: '₹40,000+',
                rating: 4.7,
                stars: 5,
                location: 'Palm Jumeirah',
                description: 'Iconic ocean-themed resort. Stay here for free access to Aquaventure Waterpark and The Lost Chambers Aquarium.',
                pros: ['Waterpark access', 'Luxury', 'Iconic'],
                cons: ['Very busy', 'Expensive dining'],
                bestFor: ['Families', 'Luxury']
            },
            {
                name: 'Rove Downtown',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070', // Placeholder
                priceRange: '₹8,000 - ₹12,000',
                rating: 4.6,
                stars: 3,
                location: 'Downtown',
                description: 'Trendy, design-led hotel just steps away from Dubai Mall and Burj Khalifa. Great value for location.',
                pros: ['Location', 'Vibe', 'Cinema inside'],
                cons: ['Small rooms', 'No buffet dinner'],
                bestFor: ['Couples', 'Solo Travelers']
            },
            {
                name: 'Jumeirah Beach Hotel',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
                priceRange: '₹25,000+',
                rating: 4.8,
                stars: 5,
                location: 'Jumeirah',
                description: 'The famous wave-shaped hotel. Offers unlimited access to Wild Wadi Waterpark.',
                pros: ['Private beach', 'Waterpark access', 'Sea views'],
                cons: ['Expensive', 'Large property to walk'],
                bestFor: ['Families', 'Beach Lovers']
            }
        ]
    },
    'nightlife': {
        nightlifeVenues: [
            {
                name: 'White Dubai',
                type: 'Club',
                description: 'High-tech outdoor rooftop club with incredible skyline views. Hosting world-famous DJs.',
                location: 'Meydan Racecourse',
                priceLevel: '$$$$',
                bestFor: ['Partying', 'Celeb Spotting'],
                openingHours: '11 PM - 4 AM'
            },
            {
                name: 'Bla Bla Dubai',
                type: 'Beach Club',
                description: 'A massive venue with 20 bars, 3 restaurants, and a beach club all in one place.',
                location: 'JBR',
                priceLevel: '$$$',
                bestFor: ['Groups', 'All-day party'],
                openingHours: '10 AM - 3 AM'
            },
            {
                name: 'Soho Garden',
                type: 'Club',
                description: 'A playground of discovery with multiple venues offering everything from urban scenes to chic garden vibes.',
                location: 'Meydan',
                priceLevel: '$$$',
                bestFor: ['Music Lovers', 'Late Night'],
                openingHours: '8 PM - 3 AM'
            }
        ]
    },
    'trip-cost': {
        tripCost: {
            flights: '₹18,000 - ₹28,000 (Roundtrip from India)',
            hotels: '₹4,000 - ₹50,000+ per night',
            transfers: '₹5,000 (Metro is cheap, Taxis adds up)',
            activities: '₹15,000+ (Burj Khalifa, Parks, Safari)'
        }
    },
    'faqs': {
        faqs: [
            { question: 'Do I need a visa for Dubai?', answer: 'Yes. E-visa processing takes 3-5 days. If you have a valid US, UK, or Schengen visa, you can get a Visa on Arrival.' },
            { question: 'Is Dubai safe for solo female travelers?', answer: 'Extremely safe. It is consistently ranked as one of the safest cities in the world. Taxis and streets are monitored 24/7.' },
            { question: 'Can unmarried couples stay in hotels?', answer: 'Yes, recent law changes allow unmarried couples to share hotel rooms without issues.' },
            { question: 'What should I wear?', answer: 'Dubai is modern but conservative. Swimwear is fine at beaches/pools. In malls and public areas, it is respectful to cover shoulders and knees.' },
            { question: 'Is Friday a holiday?', answer: 'No, the weekend in UAE has shifted to Saturday-Sunday. Friday is a half-day for work (jummah prayers).' }
        ]
    }
};
