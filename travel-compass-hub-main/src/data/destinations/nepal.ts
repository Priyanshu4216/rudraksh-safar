import { DestinationContentData } from './types';

export const nepalData: Record<string, DestinationContentData> = {
    'travel-guide': {
        intro: 'Nepal, the roof of the world, is a breathtaking blend of ancient spirituality, majestic Himalayan peaks, and vibrant cultural heritage. From the bustling streets of Kathmandu to the serene lakes of Pokhara and the jungles of Chitwan, Nepal offers an unforgettable experience for every type of traveler.',
        image: '/assets/images/destinations/nepal/kathmandu.jpg',
        bestTime: 'October to November (Clear skies, festival season) and March to April (Rhododendron blooms, pleasant weather).',
        weather: 'Spring (Mar-May) is pleasant; Summer (Jun-Aug) brings heavy monsoon rains; Autumn (Sep-Nov) offers the clearest mountain views; Winter (Dec-Feb) is cold, especially in trekking regions.',
        decisionGuide: {
            bestFor: ['Adventure Seekers', 'Spiritual Travelers', 'Nature Lovers', 'Budget Backpackers'],
            notFor: ['Travelers seeking luxury beach resorts', 'Those looking for intense clubbing/party scenes outside Thamel'],
            budgetVsLuxury: 'Extremely budget-friendly. You can travel comfortably for ₹3,000/day, or opt for luxury Himalayan lodges at ₹20,000+/night.',
            idealDuration: '7-10 Days to cover Kathmandu, Pokhara, and Chitwan.'
        },
        indianContext: {
            visaPolicy: 'No Visa required for Indian citizens. A valid Indian Passport or Voter ID is sufficient. Aadhaar is NOT a valid travel document for air travel to Nepal.',
            foodAvailability: 'Excellent. Indian food is widely available everywhere, including authentic North and South Indian vegetarian options.',
            currencyTips: 'Indian Rupees (INR) are widely accepted, but only notes of ₹100 or smaller. ₹500 and ₹2000 notes are officially banned and can cause trouble.',
            simCard: 'Ncell and Nepal Telecom SIM cards are easily available at the airport or local shops using your Voter ID or Passport.'
        },
        lastUpdated: '2025-10-15',
        author: {
            name: 'Rajiv Sharma',
            role: 'Himalayan Travel Expert'
        }
    },
    
    'nightlife': {
        intro: 'While Nepal is known for its serene mountains, cities like Kathmandu and Pokhara boast a surprisingly vibrant nightlife. From cozy live music bars in Thamel to lakeside pubs and luxurious casinos, there is plenty to do after the sun sets behind the Himalayas.',
        nightlifeVenues: [
            {
                name: 'Purple Haze Rock Bar',
                type: 'Bar',
                location: 'Thamel, Kathmandu',
                priceLevel: '$$',
                description: 'The most iconic rock bar in Kathmandu. Features fantastic live bands, a huge energetic crowd, and a great selection of drinks.',
                bestFor: ['Live Music', 'Young Crowd', 'Rock Fans'],
                openingHours: '6:00 PM - 12:00 AM',
                tips: 'Arrive before 8 PM to grab a good table on weekends.'
            },
            {
                name: 'Casino Royale',
                type: 'Show',
                location: 'Yak & Yeti Hotel, Kathmandu',
                priceLevel: '$$$',
                description: 'A popular attraction for Indian tourists, this luxury casino offers poker, baccarat, roulette, and slot machines in a regal setting.',
                bestFor: ['Gambling', 'Luxury Seekers'],
                openingHours: '24 Hours',
                tips: 'Bring your Indian Voter ID or Passport for entry. Nepalese citizens are not allowed inside.'
            },
            {
                name: 'Busy Bee Cafe',
                type: 'Bar',
                location: 'Lakeside, Pokhara',
                priceLevel: '$$',
                description: 'The heart of Pokhara\'s nightlife. Offers great food, cheap drinks, and live music every night right by the lake.',
                bestFor: ['Backpackers', 'Live Music', 'Chill Vibes'],
                openingHours: '4:00 PM - 2:00 AM'
            }
        ]
    },

    'island-tours': {
        intro: 'While Nepal is a landlocked country with no ocean islands, its majestic rivers and lakes are home to some fascinating inland "islands". These serene spots offer boat tours, wildlife spotting, and profound spiritual experiences amidst the Himalayas.',
        placesToVisit: [
            {
                name: 'Tal Barahi Temple (Phewa Lake Island)',
                location: 'Pokhara',
                description: 'Located on a small island in the middle of Phewa Lake, this two-story pagoda temple is dedicated to the Hindu goddess Durga. It is only accessible by wooden boats, offering a peaceful, scenic "island" experience surrounded by mountains.',
                ticketPrice: '₹50 (Boat ride cost)',
                openingHours: '6:00 AM - 6:00 PM',
                bestFor: ['Spiritual Travelers', 'Families', 'Photography'],
                tips: 'Rent a colorful wooden doonga (boat) at sunset for the most magical views of the Annapurna range reflecting on the water.'
            },
            {
                name: 'Koshi Tappu Wildlife Reserve Islands',
                location: 'Saptakoshi River, Eastern Nepal',
                description: 'The shifting sandbanks and river islands of the massive Saptakoshi river form this unique reserve. It is a paradise for bird watchers and nature lovers, accessible via guided river raft tours.',
                ticketPrice: '₹1000 (Permit)',
                openingHours: '6:00 AM - 5:00 PM',
                bestFor: ['Wildlife Enthusiasts', 'Bird Watchers'],
                tips: 'Keep an eye out for the endangered wild water buffalo (Arna) and the Gangetic dolphin.'
            }
        ],
        faqs: [
            { question: 'Does Nepal have islands?', answer: 'Nepal is completely landlocked and has no ocean islands. However, it features inland river islands and lake islands, the most famous being the Tal Barahi temple island in Pokhara.' },
            { question: 'How do I reach Tal Barahi temple?', answer: 'You can take a short, scenic boat ride from the lakeside in Pokhara. Wooden boats are available for hire all day.' }
        ]
    },

    'beaches': {
        intro: 'Nepal has no coastline, meaning no ocean beaches. However, what it lacks in saltwater, it makes up for with stunning, pristine "river beaches" and tranquil lakeside shores. The sandy banks of the Trishuli and Seti rivers offer perfect spots for camping and relaxing after a day of rafting.',
        beaches: [
            {
                name: 'Pokhara Lakeside',
                description: 'While not a sandy beach, the shores of Phewa Lake serve as Nepal\'s equivalent of a beach town. Lined with cafes, bars, and lounges, it\'s the perfect place to relax, sip a drink, and watch the sunset.',
                activities: ['Boating', 'Kayaking', 'Relaxing at cafes', 'Sunset viewing'],
                bestFor: ['Couples', 'Backpackers', 'Families'],
                facilities: ['Restaurants', 'Bars', 'Boat Rentals']
            },
            {
                name: 'Trishuli River Sandy Banks',
                description: 'The white sandy banks along the Trishuli River are popular camping spots for white-water rafting expeditions. These pristine river beaches offer a unique overnight experience under the stars.',
                activities: ['River Rafting', 'Beach Camping', 'Bonfires'],
                bestFor: ['Adventure Seekers', 'Groups'],
                facilities: ['Campsites', 'Rafting Gear']
            }
        ]
    },

    'trip-cost': {
        intro: 'Nepal is incredibly affordable, making it a top choice for Indian tourists seeking budget-friendly international travel without compromising on experiences.',
        tripCost: {
            flights: '₹10,000 - ₹15,000 (Roundtrip from Delhi/Kolkata)',
            hotels: '₹1,500 - ₹5,000 per night (Budget to 4-Star)',
            transfers: '₹2,000 - ₹4,000 (Buses and local taxis)',
            activities: '₹5,000 - ₹10,000 (Trekking permits, paragliding, temple entries)'
        },
        faqs: [
            { question: 'Is Nepal cheap for Indians?', answer: 'Yes, Nepal is very budget-friendly. Indian currency is accepted at a fixed exchange rate (1 INR = 1.6 NPR), making things feel even more affordable.' },
            { question: 'Can I use UPI in Nepal?', answer: 'UPI adoption (PhonePe, BHIM) is growing rapidly in Nepal thanks to recent agreements, especially in Kathmandu and Pokhara, but always carry INR cash (₹100 notes) as a backup.' }
        ]
    },

    'temples': {
        intro: 'Nepal is deeply spiritual, known as the land of temples. Kathmandu Valley alone is home to seven UNESCO World Heritage sites, showcasing incredible pagoda architecture and deep Hindu and Buddhist devotion.',
        placesToVisit: [
            {
                name: 'Pashupatinath Temple',
                location: 'Kathmandu',
                description: 'One of the most sacred Hindu temples of Lord Shiva in the world, located on the banks of the Bagmati River. It is a sprawling complex of ashrams, images, and inscriptions.',
                ticketPrice: 'Free for Indians (₹1000 for foreigners)',
                openingHours: '4:00 AM - 9:00 PM',
                bestFor: ['Spiritual Travelers', 'Hindus', 'Culture Enthusiasts'],
                tips: 'Witness the evening Ganga Aarti on the banks of the Bagmati River. It is a mesmerizing experience.'
            },
            {
                name: 'Swayambhunath (Monkey Temple)',
                location: 'Kathmandu',
                description: 'An ancient religious architecture atop a hill. It offers panoramic views of Kathmandu city and is a beautiful blend of Hindu and Buddhist iconography.',
                ticketPrice: '₹50 for SAARC nationals',
                openingHours: '24 Hours',
                bestFor: ['Photography', 'Sunset Views'],
                tips: 'Beware of the monkeys! Keep your snacks and sunglasses hidden.'
            },
            {
                name: 'Muktinath Temple',
                location: 'Mustang',
                description: 'A sacred site for both Hindus and Buddhists at an altitude of 3,710 meters. Hindus believe bathing in the 108 waterspouts brings salvation.',
                ticketPrice: 'ACAP and TIMS permits required (approx ₹1000)',
                openingHours: '6:00 AM - 6:00 PM',
                bestFor: ['Pilgrims', 'Adventure Seekers'],
                tips: 'The journey requires a flight to Jomsom followed by a rugged jeep ride or a long trek.'
            }
        ]
    },

    'adventure': {
        intro: 'Nepal is synonymous with adventure. From the world\'s highest peaks to deep river gorges, it is the ultimate playground for adrenaline junkies.',
        placesToVisit: [
            {
                name: 'Paragliding in Pokhara',
                location: 'Sarangkot, Pokhara',
                description: 'Launch from Sarangkot hill and soar alongside eagles with the majestic Annapurna range as your backdrop and Phewa Lake directly below you.',
                ticketPrice: '₹5000 - ₹7000 (includes photos/video)',
                openingHours: '8:00 AM - 2:00 PM (weather dependent)',
                bestFor: ['Thrill Seekers'],
                tips: 'Book the morning flight for the clearest mountain views.'
            },
            {
                name: 'Everest Base Camp Trek',
                location: 'Khumbu Region',
                description: 'The ultimate trekking achievement. A 12-14 day trek through Sherpa villages, high suspension bridges, and glaciers, ending at the base of the world\'s highest mountain.',
                ticketPrice: 'Permits: ₹2000 approx',
                openingHours: 'Daylight hours',
                bestFor: ['Experienced Trekkers', 'Fitness Enthusiasts'],
                tips: 'Acclimatization is critical. Never rush your ascent.'
            }
        ]
    },

    'itinerary-5-days': {
        intro: 'A 5-day itinerary in Nepal is perfect for a quick escape from India, focusing on the cultural heart of Kathmandu and the serene beauty of Pokhara.',
        faqs: [
            { question: 'Day 1: Arrival & Kathmandu Sightseeing', answer: 'Arrive at Tribhuvan International Airport. Check into your Thamel hotel. Visit the sacred Pashupatinath Temple and witness the evening Aarti.' },
            { question: 'Day 2: Kathmandu to Pokhara', answer: 'Take a scenic 6-7 hour tourist bus or a quick 30-minute flight to Pokhara. Check into your Lakeside hotel and enjoy a peaceful evening boat ride on Phewa Lake.' },
            { question: 'Day 3: Pokhara Adventure & Views', answer: 'Wake up early for sunrise at Sarangkot. Go paragliding in the morning. In the afternoon, visit Davis Falls, Gupteshwor Cave, and the World Peace Pagoda.' },
            { question: 'Day 4: Pokhara to Kathmandu & Shopping', answer: 'Return to Kathmandu. Spend the afternoon shopping for pashminas, singing bowls, and trekking gear in Thamel. Visit Swayambhunath for sunset.' },
            { question: 'Day 5: Departure', answer: 'Enjoy a final Newari breakfast and head to the airport for your flight back to India.' }
        ]
    },
    
    'faqs': {
        intro: 'Everything you need to know about traveling to Nepal from India.',
        faqs: [
            { question: 'Do Indians need a passport for Nepal?', answer: 'No, looking for Indians, a Voter ID card is sufficient for air travel. A passport is not mandatory but recommended. Aadhaar card is NOT accepted at airport immigration.' },
            { question: 'Can I use Indian currency in Nepal?', answer: 'Yes, ₹100 notes and below are widely accepted. ₹500 and ₹2000 notes are officially banned and can cause legal trouble.' },
            { question: 'Is it safe to drive an Indian car into Nepal?', answer: 'Yes, thousands of Indians drive across the border (e.g., via Raxaul or Sonauli). You just need to pay a daily vehicle permit fee (Bhansar) at the border crossing.' },
            { question: 'What is the local currency exchange rate?', answer: 'The exchange rate is pegged. 1 Indian Rupee (INR) is always exactly equal to 1.6 Nepalese Rupees (NPR).' }
        ]
    },

    'best-hotels': {
        intro: 'From luxurious Himalayan resorts to budget-friendly backpacker hostels in Thamel, Nepal offers incredible hospitality. Here are some of the best places to stay.',
        hotels: [
            {
                name: 'Kathmandu Marriott Hotel',
                image: '/assets/images/destinations/nepal/marriott.jpg',
                priceRange: '₹12,000 - ₹20,000',
                rating: 4.8,
                stars: 5,
                location: 'Naxal, Kathmandu',
                description: 'A luxurious modern hotel blending contemporary design with Nepalese hospitality. Offers stunning views of the Himalayan mountains.',
                pros: ['Exceptional breakfast buffet', 'Beautiful pool and spa', 'Excellent location'],
                cons: ['Expensive for budget travelers'],
                bestFor: ['Luxury Seekers', 'Business Travelers', 'Couples']
            },
            {
                name: 'Temple Tree Resort & Spa',
                image: '/assets/images/destinations/nepal/templetree.jpg',
                priceRange: '₹8,000 - ₹15,000',
                rating: 4.7,
                stars: 4,
                location: 'Lakeside, Pokhara',
                description: 'A beautiful boutique resort designed in traditional Western Himalayan architecture, located just steps away from Phewa Lake.',
                pros: ['Gorgeous architecture', 'Peaceful environment', 'Close to nightlife'],
                cons: ['Rooms are slightly small'],
                bestFor: ['Honeymooners', 'Families']
            }
        ]
    },

    'places-to-visit': {
        intro: 'Nepal is remarkably diverse. Beyond the bustling capital, you will find pristine jungles, serene lakes, and ancient medieval cities frozen in time.',
        placesToVisit: [
            {
                name: 'Chitwan National Park',
                location: 'Terai Region',
                description: 'A UNESCO World Heritage site known for its rich biodiversity. It is one of the best places in Asia to spot the one-horned rhinoceros and the Bengal tiger.',
                ticketPrice: '₹1000 (SAARC Nationals)',
                openingHours: '6:00 AM - 6:00 PM',
                bestFor: ['Wildlife Enthusiasts', 'Families'],
                tips: 'Opt for a walking safari with experienced guides for a thrilling experience, or a jeep safari to cover more ground.'
            },
            {
                name: 'Bhaktapur Durbar Square',
                location: 'Bhaktapur (Near Kathmandu)',
                description: 'An incredibly well-preserved medieval city known for its exquisite wood carving, pottery, and stunning pagoda temples.',
                ticketPrice: '₹500 (SAARC Nationals)',
                openingHours: '24 Hours (Museums close at 5 PM)',
                bestFor: ['History Buffs', 'Culture Seekers', 'Photography'],
                tips: 'Don\'t leave without trying the famous Juju Dhau (King Curd) sold in small clay pots.'
            }
        ]
    }
};
