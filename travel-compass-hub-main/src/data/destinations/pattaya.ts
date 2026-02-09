import { DestinationContentData } from './types';

export const pattayaData: Record<string, DestinationContentData> = {
    'nightlife': {
        intro: 'Pattaya is the party capital of Thailand. From the neon lights of Walking Street to sophisticated beach clubs, it has it all.',
        bestTime: 'Nightlife is year-round, but November to February is most vibrant.',
        decisionGuide: {
            bestFor: ['Bachelors', 'Party Lovers', 'Couples active at night'],
            notFor: ['Families with young kids (specifically Walking Street after 9 PM)'],
            budgetVsLuxury: 'Beer bars are cheap (80 THB), while Sky Bars and Clubs can be pricey (300-500 THB entry).',
            idealDuration: '3 Nights for party focus'
        },
        honestNegatives: [
            {
                title: 'Walking Street Intensity',
                description: 'Walking Street can be overwhelming and explicit. It is not suitable for children late at night.',
                severity: 'warning'
            },
            {
                title: 'Safety',
                description: 'Petty theft can happen in crowded clubs. Keep belongings safe.',
                severity: 'caution'
            }
        ],
        indianContext: {
            visaPolicy: 'Visa Free',
            foodAvailability: 'Many Indian restaurants on Walking Street and Beach Road open late.',
            currencyTips: 'Cash is king in bars.',
            simCard: 'Essential for calling Grab/Bolt after parties.'
        },
        faqs: [
            {
                question: 'Is Pattaya Walking Street safe?',
                answer: 'Generally yes, there is a strong police presence. However, avoid confrontations and keep valuables safe.'
            },
            {
                question: 'What are the best clubs in Pattaya?',
                answer: 'Insomnia, Tony\'s, and Marine Disco are legendary. The Sky Gallery offers a more relaxed vibe.'
            },
            {
                question: 'Are there Indian dance bars?',
                answer: 'Yes, there are several "Mujra" style clubs catering specifically to Indian audiences.'
            }
        ]
    },
    'beaches': {
        intro: 'Pattaya has decent beaches, but the real gems are on nearby islands like Koh Larn.',
        decisionGuide: {
            bestFor: ['Water Sports', 'Day Trips'],
            notFor: ['Pristine white sand seekers (unless going to islands)'],
            budgetVsLuxury: 'Beach chairs are cheap (100 THB). Speedboats to islands cost 300-500 THB.',
            idealDuration: '1-2 Days'
        },
        honestNegatives: [
            {
                title: 'Water Quality',
                description: 'Pattaya Beach itself isn\'t the cleanest for swimming. Jomtien is better, but Koh Larn is best.',
                severity: 'info'
            }
        ],
        beaches: [
            {
                name: 'Koh Larn (Coral Island)',
                description: 'A 20-minute speedboat ride from Pattaya. Crystal clear water and white sand. Perfect for snorkeling and parasailing.',
                activities: ['Snorkeling', 'Parasailing', 'Banana Boat'],
                bestFor: ['Day Trips', 'Swimming'],
                facilities: ['Restaurants', 'Showers', 'Lockers']
            },
            {
                name: 'Jomtien Beach',
                description: 'A quieter alternative to Pattaya Beach. cleaner water and more family-friendly atmosphere with many beachfront cafes.',
                activities: ['Windsurfing', 'Relaxing', 'Dining'],
                bestFor: ['Families', 'Couples', 'Sunsets'],
                facilities: ['Sunbeds', 'Carts', 'Massages']
            },
            {
                name: 'Pattaya Beach',
                description: 'The main beach road. Busy, vibrant, and lined with malls and bars. Good for people watching and watersports, less for swimming.',
                activities: ['Jet Skiing', 'Shopping', 'Nightlife'],
                bestFor: ['Activity Seekers', 'Convenience'],
                facilities: ['Malls', '7-Eleven', 'Hotels']
            }
        ],
        nearbyPlaces: [
            { name: 'Koh Larn (Coral Island)', distance: 'Speedboat', time: '20 mins' },
            { name: 'Bam Bam Beach (Koh Larn)', distance: 'Speedboat', time: '30 mins' },
            { name: 'Dongtan Beach', distance: 'Taxi', time: '15 mins' }
        ]
    },
    'trip-cost': {
        tripCost: {
            flights: 'Fly to BKK (₹18-25k)',
            hotels: '₹1,500 - ₹5,000 (Very affordable)',
            transfers: '₹150 (Bus from BKK) to ₹1500 (Taxi)',
            activities: '₹5,000 - ₹10,000 (Shows, Islands)'
        },
        hotels: [
            {
                name: 'Hilton Pattaya',
                image: '',
                priceRange: '₹15,000 - ₹25,000/night',
                rating: 4.8,
                stars: 5,
                location: 'Central Festival Mall, Beach Road',
                description: 'Luxury with the best infinity pool in town overlooking the bay. Direct access to the mall.',
                pros: ['Stunning Views', 'Central Location', 'Luxury'],
                cons: ['Expensive'],
                bestFor: ['Couples', 'Luxury Travelers'],
                link: 'https://www.hilton.com/en/hotels/bkkhphi-hilton-pattaya/'
            },
            {
                name: 'Hard Rock Hotel Pattaya',
                image: '',
                priceRange: '₹6,000 - ₹10,000/night',
                rating: 4.5,
                stars: 4,
                location: 'Pattaya Beach Road',
                description: 'Fun, energetic vibe with a massive foam party pool. Great for families and party lovers.',
                pros: ['Foam Parties', 'Kids Club', 'Vibe'],
                cons: ['Can be loud'],
                bestFor: ['Families', 'Party Lovers'],
                link: 'https://pattaya.hardrockhotels.net/'
            },
            {
                name: 'Sabai Resort',
                image: '',
                priceRange: '₹2,500 - ₹4,000/night',
                rating: 4.2,
                stars: 3,
                location: 'North Pattaya',
                description: 'Budget-friendly, green, and quiet oasis near the action. Very popular with Indian travelers.',
                pros: ['Value for Money', 'Quiet', 'Gardens'],
                cons: ['Older design'],
                bestFor: ['Budget', 'Solo Travelers'],
                link: ''
            }
        ]
    },
    'places-to-visit': {
        intro: 'Beyond the nightlife, Pattaya offers stunning temples, botanical gardens, and cultural landmarks.',
        decisionGuide: {
            bestFor: ['Families', 'Culture Vultures', 'Photographers'],
            notFor: ['Those looking for "hidden" gems (most are popular)'],
            budgetVsLuxury: 'Entry fees range from 500 THB to 800 THB per person.',
            idealDuration: '2 Days'
        },
        honestNegatives: [
            {
                title: 'Dual Pricing',
                description: 'Many attractions charge foreigners 5-10x more than locals. It is standard practice.',
                severity: 'info'
            },
            {
                title: 'Heat',
                description: 'Walking around Nong Nooch or Sanctuary of Truth in the afternoon can be brutally hot.',
                severity: 'caution'
            }
        ],
        placesToVisit: [
            {
                name: 'The Sanctuary of Truth',
                description: 'A magnificent wooden museum designed like a temple. It is entirely hand-carved without using a single metal nail.',
                ticketPrice: '500 THB',
                openingHours: '8:00 AM - 6:00 PM',
                bestFor: ['Culture', 'Photography', 'Architecture'],
                location: 'North Pattaya',
                tips: 'Visit at sunset for the most spectacular lighting and fewer crowds. Guided tours are included in the ticket.'
            },
            {
                name: 'Nong Nooch Tropical Garden',
                description: 'A massive 500-acre botanical garden with themed gardens, cultural shows, and elephant encounters.',
                ticketPrice: '800 THB',
                openingHours: '8:00 AM - 6:00 PM',
                bestFor: ['Families', 'Nature Lovers'],
                location: '20km south of Pattaya',
                tips: 'It is huge! Rent a sightseeing bus inside to save your legs.'
            },
            {
                name: 'Big Buddha Temple (Wat Phra Yai)',
                description: 'An 18-meter tall golden Buddha statue sitting atop a hill, offering panoramic views of Pattaya Bay.',
                ticketPrice: 'Free',
                openingHours: '7:00 AM - 10:00 PM',
                bestFor: ['Views', 'Culture', 'Blessings'],
                location: 'Pratumnak Hill',
                tips: 'Dress modestly (cover shoulders and knees). Ideally visit in the morning to beat the heat.'
            },
            {
                name: 'Cave Beach Club',
                description: 'The most instagrammable beach club in Pattaya. Bohemian decor, bean bags on the sand, and delicious drinks.',
                ticketPrice: 'Free Entry (Buy drinks/food)',
                openingHours: '11:00 AM - 11:00 PM',
                bestFor: ['Instagram', 'Chilling', 'Couples'],
                location: 'Na Jomtien',
                tips: 'Go around 4-5 PM for the best lighting. It gets packed on weekends.'
            }
        ],
        nightlifeVenues: [
            {
                name: 'Walking Street',
                type: 'Club',
                description: 'The legendary heart of Pattaya nightlife. Neon lights, loud music, and sensory overload. Must-visit once for the experience.',
                location: 'South Pattaya Beach Road',
                priceLevel: '$$',
                bestFor: ['Partying', 'People Watching', 'Clubbing'],
                openingHours: '7:00 PM - 3:00 AM',
                tips: 'Watch your belongings. Prices for drinks are standard, but "ping pong" shows can be scams.'
            },
            {
                name: 'Thepprasit Night Market',
                type: 'Market',
                description: 'A massive weekend night market with hundreds of stalls selling street food, clothes, and gadgets.',
                location: 'Thepprasit Road (Near Outlet Mall)',
                priceLevel: '$',
                bestFor: ['Street Food', 'Shopping', 'Families'],
                openingHours: '5:00 PM - 10:00 PM (Fri-Sun)',
                tips: 'Come hungry! The food section is incredible. Try the salt-crusted grilled fish.'
            },
            {
                name: 'KAAN Show',
                type: 'Show',
                description: 'A world-class cinematic live experience combining acrobatics, giant puppets, and Thai folklore.',
                location: 'Thepprasit Road',
                priceLevel: '$$$$',
                bestFor: ['Families', 'Couples', 'Theater Lovers'],
                openingHours: 'Showtime 7:30 PM (Closed Mon)',
                tips: 'Book tickets online in advance for a discount. Arrive 30 mins early for pre-show photos.'
            },
            {
                name: 'Horizon Rooftop',
                type: 'Bar',
                description: 'Upscale rooftop bar on the 34th floor of Hilton Pattaya. Offers the best sunset views over Pattaya Bay.',
                location: 'Hilton Pattaya, Beach Road',
                priceLevel: '$$$',
                bestFor: ['Sunsets', 'Cocktails', 'Romance'],
                openingHours: '4:00 PM - 1:00 AM',
                tips: 'Happy hour is usually 5-7 PM (buy 1 get 1). Dress smart casual (no flip flops/swimwear).'
            }
        ]
    }
};
