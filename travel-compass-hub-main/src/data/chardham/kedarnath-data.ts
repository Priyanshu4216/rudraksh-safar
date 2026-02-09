import { TemplePageData } from './types';
import { Mountain, Map, Calendar, ShieldCheck, Footprints, CloudRain } from 'lucide-react';

export const kedarnathData: TemplePageData = {
    id: 'kedarnath',
    meta: {
        title: 'Kedarnath Temple 2026: History, Trek, Darshan & Registration Guide',
        description: 'The complete guide to Kedarnath Dham. Plan your 16km trek, check opening dates, book helicopter tickets, and understand the spiritual history of Lord Shiva\'s abode.',
        keywords: ['Kedarnath Temple', 'Kedarnath Trek', 'Kedarnath History', 'Kedarnath Helicopter Booking', 'Panch Kedar', 'Char Dham Yatra']
    },
    overview: {
        bgImage: 'https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?q=80&w=2692&auto=format&fit=crop',
        title: 'Kedarnath Dham',
        subtitle: 'The Eternal Abode of Lord Shiva',
        highlights: [
            { label: 'Altitude', value: '3,583 m (11,755 ft)', icon: Mountain },
            { label: 'Trek Distance', value: '16 km from Gaurikund', icon: Footprints },
            { label: 'Best Time', value: 'May-June, Sept-Oct', icon: Calendar },
            { label: 'District', value: 'Rudraprayag, Uttarakhand', icon: Map }
        ]
    },
    history: {
        origin: 'While the temple\'s exact origin is lost in time, architectural analysis suggests it is more than 1,000 years old.',
        legends: [
            'The Legend of the Pandavas: Mythology narrates that after the Kurukshetra war, the Pandavas sought Lord Shiva to atone for the sin of killing their kin.',
            'The Ghee Glacier: The Jyotirlinga is triangular in shape and is constantly bathed in ghee by devotees, a tradition believed to have preserved the rock for centuries.'
        ],
        adiShankaracharya: 'The great theologian Adi Shankaracharya is credited with reviving the temple in the 8th century. Tradition holds that he attained Mahasamadhi near the temple.',
        timeline: [
            { year: 'Ancient Era', event: 'Original temple said to be built by the Pandavas.' },
            { year: '8th Century', event: 'Restored and established as a Dham by Adi Shankaracharya.' },
            { year: '2013', event: 'Withstood massive flash floods, protecting the inner sanctum.' }
        ]
    },
    spiritual: {
        significance: 'Kedarnath is one of the 12 Jyotirlingas and the most important of the Panch Kedar, worshipped as the "Hump" of Lord Shiva.',
        beliefs: [
            'Scriptures suggest that the Pandavas ascended to heaven (Swargarohini) from near this region.',
            'Offering Bel Patra and Ghee to the Lingam is considered highly auspicious by devotees.'
        ],
        rituals: [
            'Maha Abhishek: Performed at 4 AM.',
            'Rudrabhishek: A ritual bathing of the Lingam.',
            'Shayan Aarti: The evening prayer before the temple closes.'
        ]
    },
    dates: {
        opening: 'Akshaya Tritiya (May 2026)',
        closing: 'Bhai Dooj (November 2026)',
        winterSeat: 'Omkareshwar Temple, Ukhimath',
        festivals: ['Maha Shivaratri', 'Vinayak Chaturthi', 'Annakoot']
    },
    reach: {
        road: [
            { route: 'Haridwar -> Rishikesh -> Devprayag -> Srinagar -> Rudraprayag -> Guptkashi -> Sonprayag -> Gaurikund', distance: '225 km', description: 'The drive is scenic but tiring. Roads are prone to landslides during monsoons. Haridwar to Gaurikund takes 10-12 hours.' }
        ],
        train: { station: 'Rishikesh (Yoga Nagari) or Haridwar', distance: '216 km from Rishikesh', connectivity: 'Good train connectivity from Delhi, Mumbai, and Kolkata.' },
        air: { airport: 'Jolly Grant Airport, Dehradun', helipad: 'Phata, Guptkashi, or Sirsi', description: 'Fly to Dehradun, then take a taxi to a helipad in Phata or Guptkashi to fly directly to Kedarnath.' }
    },
    trek: {
        mapImage: 'https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=1000', // Placeholder
        distance: '16 km',
        difficulty: 'Difficult',
        baseCamp: 'Gaurikund',
        stops: [
            { name: 'Jungle Chatti', altitude: '2,050 m', facilities: 'Water, Small Shops' },
            { name: 'Bheem Bali', altitude: '2,400 m', facilities: 'Rest Points, Wifi' },
            { name: 'Lincholi', altitude: '3,000 m', facilities: 'Medical Camp, Tents' },
            { name: 'Kedarnath Base', altitude: '3,583 m', facilities: 'Temple, Guest Houses' }
        ],
        alternatives: [
            { type: 'Helicopter', cost: '₹5,000 - ₹8,000 (Approx)', tips: 'Book months in advance via IRCTC.' },
            { type: 'Pony/Mule', cost: '₹2,500 - ₹3,500', tips: 'Ensure the animal is treated well. Official rates apply.' },
            { type: 'Palki/Dandi', cost: '₹8,000 - ₹10,000', tips: 'Best for seniors unable to walk or sit on a pony.' }
        ]
    },
    darshan: {
        timings: [
            { type: 'Morning', time: '4:00 AM – 3:00 PM' },
            { type: 'Break', time: '3:00 PM – 5:00 PM' },
            { type: 'Evening', time: '5:00 PM – 9:00 PM' }
        ],
        vipOptions: 'Available for special poojas (Shravani Pooja, etc.). Booking must be done at the temple committee office.',
        tips: ['Queue starts as early as 2 AM.', 'Carry warm clothes even in summer.', 'Photography is strictly prohibited inside the sanctum.'],
        aarti: [
            { name: 'Morning Aarti', time: '4:00 AM', significance: 'To wake up the Lord.' },
            { name: 'Evening Aarti', time: '7:30 PM', significance: 'Thanksgiving for the day.' }
        ]
    },
    panchKedar: {
        description: 'Kedarnath is the first and most significant of the Panch Kedar temples, where different parts of Lord Shiva\'s body appeared.',
        link: '/history-of-chardham-yatra',
        temples: [
            { name: 'Tungnath', altitude: '3,680 m', link: '/tungnath-temple', description: 'The Arms of Shiva. Highest Shiva temple in the world.' },
            { name: 'Rudranath', altitude: '2,286 m', link: '/rudranath-temple', description: 'The Face of Shiva. Requires a tough trek.' },
            { name: 'Madhyamaheshwar', altitude: '3,497 m', link: '/madhyamaheshwar-temple', description: 'The Navel of Shiva. Located in a beautiful meadow.' },
            { name: 'Kalpeshwar', altitude: '2,200 m', link: '/kalpeshwar-temple', description: 'The Hair of Shiva. Accessible throughout the year.' }
        ]
    },
    nearby: [
        { name: 'Bhairav Nath Temple', distance: '500 m', description: 'Dedicated to Bhairav Nath, the guardian deity of Kedarnath. It offers a stunning view of the Kedarnath valley.' },
        { name: 'Vasuki Tal', distance: '8 km', description: 'A high-altitude glacial lake trek for adventure lovers.' },
        { name: 'Gandhi Sarovar', distance: '3 km', description: 'A crystal clear lake where Gandhi Ji\'s ashes were immersed.' }
    ],
    stay: {
        locations: ['Kedarnath (Near Temple)', 'Lincholi (3 km away)', 'Gaurikund (Base Camp)', 'Guptkashi/Sonprayag (Luxury Hotels)'],
        types: ['GMVN Guest Houses', 'Private Hotels', 'Tented Colonies', 'Dormitories'],
        tips: 'Accommodation at the top is basic. Book GMVN huts in advance. For luxury, stay at Guptkashi and fly in by chopper.'
    },
    faqs: [
        {
            question: 'Is the Kedarnath trek difficult for beginners?',
            answer: 'Yes, it is considered a moderate to difficult trek due to the steep incline and high altitude. Beginners should start cardio training 2 months prior.'
        },
        {
            question: 'Can I visit Kedarnath by helicopter?',
            answer: 'Yes, helicopter services are available from Phata, Sirsi, and Guptkashi. They drop you 500m from the temple. Tickets must be booked online via the official government portal.'
        },
        {
            question: 'Is a medical certificate required?',
            answer: 'Yes, a biometric registration and a medical check-up are mandatory for all pilgrims, especially those above 50 years of age.'
        },
        {
            question: 'What is the temperature at night?',
            answer: 'Even in summer (May-June), night temperatures can drop to 0°C to 5°C. In Sept-Oct, it can go below freezing.'
        }
    ]
};
