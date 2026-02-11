import { DestinationContentData } from './types';

export const baliData: Record<string, DestinationContentData> = {
    'travel-guide': {
        intro: "Bali is not just a destination; it's a mood, an aspiration, and a tropical state of mind. Known as the 'Island of the Gods', it offers a perfect mix of deep spiritual culture, epic surf waves, lush rice terraces, and a nightlife that rivals Ibiza. Whether you want to meditate in Ubud, party in Kuta, or live luxuriously in Nusa Dua, Bali has a corner for you.",
        decisionGuide: {
            bestFor: ['Honeymooners', 'Solo Backpackers', 'Digital Nomads', 'Culture Seekers'],
            notFor: ['Travelers seeking a 100% urban/city vibe (Go to Singapore instead)'],
            budgetVsLuxury: 'Extremely flexible. You can get a private pool villa for ₹8,000/night or a bunk bed for ₹800/night. Street food (Nasi Goreng) is ₹150, while fine dining is world-class.',
            idealDuration: '7-10 Days is perfect to cover South Bali, Ubud, and one island (Nusa Penida).'
        },
        indianContext: {
            visaPolicy: 'Visa on Arrival for Indians (Approx IDR 500,000 / ₹2,800). Valid for 30 days.',
            foodAvailability: 'Indian food is everywhere in Kuta, Seminyak, and Ubud. Brands like "Queens Tandoor" and "Ganesha Ek Sanskriti" are popular.',
            currencyTips: '1 INR ≈ 185 IDR. You will be a millionaire here! Carry USD from India and convert to IDR in Bali for better rates.',
            simCard: 'Telkomsel is the best network. Buy a tourist SIM at Denpasar airport (approx ₹1000 for 25GB).'
        },
        honestNegatives: [
            {
                title: 'Traffic Congestion',
                description: 'Traffic in South Bali (Kuta, Seminyak, Canggu) is notorious. A 10km ride can take 1 hour. Plan accordingly.',
                severity: 'warning'
            },
            {
                title: 'Bali Belly',
                description: 'Stomach bugs are common. Avoid tap water and uncooked street food if you have a sensitive stomach.',
                severity: 'caution'
            }
        ]
    },
    'best-time-to-visit': {
        bestTime: 'April to October (Dry Season)',
        weather: 'Sunny and breezy. This is the best time for beaches, surfing, and outdoor activities. July-August is peak tourist season.',
        experienceSignals: [
            {
                title: 'Nyepi (Day of Silence)',
                description: 'If you visit in March during Nyepi, remember the whole island shuts down for 24 hours. No flights, no electricity, complete silence. It’s a magical experience if you are prepared.',
                author: 'Local Tradition'
            }
        ]
    },
    'places-to-visit': {
        placesToVisit: [
            {
                name: 'Uluwatu Temple',
                description: 'A majestic sea temple perched on a cliff 70 meters above the Indian Ocean. Famous for its Kecak Fire Dance at sunset.',
                location: 'Uluwatu',
                ticketPrice: 'IDR 50,000 (Temple) + IDR 150,000 (Dance)',
                openingHours: '7 AM - 7 PM (Dance starts at 6 PM)',
                bestFor: ['Culture', 'Sunset', 'Photography']
            },
            {
                name: 'Tanah Lot Temple',
                description: 'An iconic ancient Hindu pilgrimage temple floating on a rock formation. Best visited during low tide.',
                location: 'Tabanan',
                ticketPrice: 'IDR 60,000',
                openingHours: '7 AM - 7 PM',
                bestFor: ['Photography', 'Spirituality']
            },
            {
                name: 'Tegallalang Rice Terrace',
                description: 'Famous stepped rice paddies in Ubud offering dramatic views and the famous "Bali Swing".',
                location: 'Ubud',
                ticketPrice: 'IDR 25,000 (Swing extra)',
                openingHours: '8 AM - 6 PM',
                bestFor: ['Nature', 'Instagram', 'Adventure']
            },
            {
                name: 'Sacred Monkey Forest',
                description: 'A sanctuary in Ubud home to over 1000 grey long-tailed macaques. A lush forest with ancient temples inside.',
                location: 'Ubud',
                ticketPrice: 'IDR 80,000',
                openingHours: '9 AM - 6 PM',
                bestFor: ['Animal Lovers', 'Family']
            },
            {
                name: 'Nusa Penida Island',
                description: 'A rugged island 45 mins by boat from Bali. Home to Kelingking Beach (T-Rex shape) and Diamond Beach.',
                location: 'Nusa Penida',
                ticketPrice: 'Boat approx IDR 150,000',
                openingHours: 'All Day',
                bestFor: ['Adventure', 'Beaches', 'Awe-inspiring Views']
            }
        ]
    },
    'things-to-do': {
        experienceSignals: [
            {
                title: 'Sunrise Trek to Mount Batur',
                description: 'Hiking up an active volcano at 2 AM to watch the sunrise while eating eggs cooked in volcanic steam is unforgettable.',
                author: 'Adventure Expert'
            },
            {
                title: 'Learn to Surf in Kuta',
                description: 'Kuta beach has gentle waves perfect for beginners. You can hire an instructor for 2 hours for as less as IDR 200,000.',
                author: 'Surfing Coach'
            }
        ]
    },
    'beaches': {
        beaches: [
            {
                name: 'Kelingking Beach',
                description: 'The T-Rex shaped cliff beach on Nusa Penida. The view from top is iconic, but the hike down is steep and tough.',
                activities: ['Photography', 'Hiking'],
                bestFor: ['Adventurers', 'Instagrammers'],
                facilities: ['Local warungs at top', 'No toilets below']
            },
            {
                name: 'Seminyak Beach',
                description: 'A stylish, upscale beach lined with beach clubs (Ku De Ta, Potato Head) and luxury resorts. Great for sunsets.',
                activities: ['Sunbathing', 'Surfing', 'Clubbing'],
                bestFor: ['Couples', 'Luxury Travelers'],
                facilities: ['Sunbeds', 'Showers', 'Beach Bars']
            },
            {
                name: 'Nusa Dua Beach',
                description: 'Immaculately clean, white sand beach in a gated luxury enclave. Calm waters perfect for swimming with kids.',
                activities: ['Swimming', 'Snorkeling', 'Relaxing'],
                bestFor: ['Families', 'Honeymooners'],
                facilities: ['Restrooms', 'Watersports center']
            },
            {
                name: 'Padang Padang Beach',
                description: 'A small, hidden beach accessible through a hollow rock entrance. Famous from the movie "Eat Pray Love".',
                activities: ['Surfing', 'Sunbathing'],
                bestFor: ['Movie Fans', 'Beach Lovers'],
                facilities: ['Parking', 'Monkey presence']
            }
        ]
    },
    'hotels': {
        hotels: [
            {
                name: 'The Kayon Jungle Resort',
                image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070',
                priceRange: '₹30,000+',
                rating: 4.9,
                stars: 5,
                location: 'Ubud',
                description: 'Adults-only luxury resort famous for its three-tiered infinity pool overlooking the jungle.',
                pros: ['Stunning architecture', 'Peaceful', 'Great service'],
                cons: ['Far from city center', 'Expensive'],
                bestFor: ['Honeymooners', 'Luxury']
            },
            {
                name: 'Hard Rock Hotel Bali',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
                priceRange: '₹12,000 - ₹18,000',
                rating: 4.5,
                stars: 5,
                location: 'Kuta',
                description: 'The ultimate family resort right opposite Kuta Beach, featuring the largest free-form pool in Bali.',
                pros: ['Kid-friendly', 'Central location', 'Huge pool'],
                cons: ['Can be noisy', 'Older rooms'],
                bestFor: ['Families', 'Music Lovers']
            },
            {
                name: 'Ayana Resort & Spa',
                image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049',
                priceRange: '₹25,000+',
                rating: 4.8,
                stars: 5,
                location: 'Jimbaran',
                description: 'Massive integrated resort home to the famous Rock Bar. Offers stunning cliff-front sunset views.',
                pros: ['Rock Bar access', 'Multiple pools', 'Private beach'],
                cons: ['Isolated location', 'Premium pricing'],
                bestFor: ['Luxury', 'Sunset Lovers']
            }
        ]
    },
    'nightlife': {
        nightlifeVenues: [
            {
                name: 'Finns Beach Club',
                type: 'Beach Club',
                description: 'Probably the most famous beach club in the world. 4 pools, 9 bars, and world-class DJs right on Berawa beach.',
                location: 'Canggu',
                priceLevel: '$$$',
                bestFor: ['Partying', 'Sunset', 'Groups'],
                openingHours: '10 AM - 12 AM'
            },
            {
                name: 'Potato Head Beach Club',
                type: 'Beach Club',
                description: 'Iconic architecture made of vintage window shutters. A sophisticated spot for sunset cocktails and infinity pool vibes.',
                location: 'Seminyak',
                priceLevel: '$$$',
                bestFor: ['Design Lovers', 'Cocktails'],
                openingHours: '10 AM - 2 AM'
            },
            {
                name: 'Sky Garden',
                type: 'Club',
                description: 'The legendary multi-level nightclub in Kuta. Famous for its "All You Can Eat & Drink" offers before 9 PM.',
                location: 'Kuta',
                priceLevel: '$$',
                bestFor: ['Late Night Party', 'Budget Travelers'],
                openingHours: '5 PM - 4 AM'
            }
        ]
    },
    'trip-cost': {
        tripCost: {
            flights: '₹25,000 - ₹40,000 (Roundtrip from India)',
            hotels: '₹2,000 - ₹50,000+ per night',
            transfers: '₹3,000 - ₹5,000 for full week (Scooter rental is cheaper)',
            activities: '₹10,000 - ₹20,000 (Water sports, Swings, Entries)'
        }
    },
    'faqs': {
        faqs: [
            { question: 'What is the best time to visit Bali?', answer: 'The best time is during the dry season, from April to October. May, June, and September are ideal to avoid peak crowds.' },
            { question: 'Do Indians need a visa for Bali?', answer: 'Yes, but it is a Visa on Arrival (VoA) valid for 30 days. It costs approx IDR 500,000 (₹2,800). You can also apply online for an e-VoA.' },
            { question: 'Is Bali expensive for Indians?', answer: 'Bali is very affordable. You can easily manage a budget trip for ₹60k-70k, or have a luxury honeymoon for ₹1.5L+.' },
            { question: 'Is it better to carry Cash or Card?', answer: 'Cash is king for street food and small shops. Cards are accepted in hotels/malls. We recommend carrying a Forex card for withdrawals and some USD/IDR cash.' },
            { question: 'What is the "Bali Belly"?', answer: 'It is a common stomach upset felt by tourists due to water or food hygiene. To avoid it, never drink tap water and stick to bottled water (even for brushing teeth).' }
        ]
    }
};
