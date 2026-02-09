import { TemplePageData } from './types';
import { Mountain, Map, Calendar, ShieldCheck, Footprints, Droplets } from 'lucide-react';

export const badrinathData: TemplePageData = {
    id: 'badrinath',
    meta: {
        title: 'Badrinath Temple 2026: History, Tapt Kund, Mana Village & Darshan',
        description: 'The complete guide to Badrinath Dham. Explore the Tapt Kund hot springs, visit Mana (First Indian Village), and plan your road trip to Lord Vishnu\'s abode.',
        keywords: ['Badrinath Temple', 'Badrinath History', 'Tapt Kund', 'Mana Village', 'Char Dham Yatra', 'Vishnu Temple']
    },
    overview: {
        bgImage: 'https://images.unsplash.com/photo-1587636662981-229202577c27?q=80&w=2000',
        title: 'Badrinath Dham',
        subtitle: 'The Abode of Lord Vishnu (Badri Vishal)',
        highlights: [
            { label: 'Altitude', value: '3,133 m (10,279 ft)', icon: Mountain },
            { label: 'Accessibility', value: 'Direct Road Access', icon: Map },
            { label: 'Best Time', value: 'May-June, Sept-Oct', icon: Calendar },
            { label: 'Feature', value: 'Hot Springs (Tapt Kund)', icon: Droplets }
        ]
    },
    history: {
        origin: 'Dating back to the Vedic age, Badrinath is revered as one of the holiest shrines in Hinduism.',
        legends: [
            'The Meditation of Vishnu: Legend has it that Lord Vishnu meditated here for thousands of years. To protect him from the harsh elements, Goddess Laxmi is said to have taken the form of a Badri (Berry) tree.',
            'The Nar-Narayana Mountains: The temple is situated between the Nar and Narayana mountain ranges, symbolic of the twin sages believed to be incarnations of Vishnu.'
        ],
        adiShankaracharya: 'Historical accounts state that Adi Shankaracharya discovered the idol in the Alaknanda River and installed it in a cave near Tapt Kund.',
        timeline: [
            { year: 'Vedic Era', event: 'Mentioned in scriptures as a place of penance.' },
            { year: '9th Century', event: 'Re-established by Adi Shankaracharya.' },
            { year: '16th Century', event: 'Current temple structure built by the Kings of Garhwal.' }
        ]
    },
    spiritual: {
        significance: 'Badrinath is the only Dham that is part of both the "Chota Char Dham" (Uttarakhand) and the major "Char Dham" (India). Devotees believe that a glimpse of Badri Vishal leads to salvation.',
        beliefs: [
            'It is widely accepted in tradition that Sage Veda Vyasa composed the Mahabharata in a cave (Vyas Gufa) nearby.',
            'A dip in the Tapt Kund before entering the temple is believed to purify the soul.'
        ],
        rituals: [
            'Maha Abhishek: Bathing the deity with milk, ghee, and honey.',
            'Vishnu SahasranamaPath: Reciting the 1000 names of Lord Vishnu.',
            'Geeta Path: Reading the Bhagavad Gita in the temple premises.'
        ]
    },
    dates: {
        opening: 'May 2026 (Date TBA)',
        closing: 'Vijaya Dashami (Oct 2026)',
        winterSeat: 'Narsingh Temple, Joshimath',
        festivals: ['Mata Murti Ka Mela', 'Krishna Janmashtami', 'Badri-Kedar Festival']
    },
    reach: {
        road: [
            { route: 'Rishikesh -> Devprayag -> Srinagar -> Rudraprayag -> Karnaprayag -> Joshimath -> Badrinath', distance: '295 km', description: 'A long but scenic drive. The road from Joshimath to Badrinath is narrow and controlled by a gate system.' }
        ],
        train: { station: 'Rishikesh', distance: '295 km', connectivity: 'Connected to major Indian cities suitable for starting the Yatra.' },
        air: { airport: 'Jolly Grant Airport, Dehradun', helipad: 'Badrinath Helipad', description: 'Direct helicopter services available from Dehradun/Phata to Badrinath helipad (1 km from temple).' }
    },
    trek: {
        mapImage: 'https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=1000', // Placeholder
        distance: '0 km (Roadhead)',
        difficulty: 'Easy',
        baseCamp: 'Badrinath Town',
        stops: [
            { name: 'Joshimath', altitude: '1,890 m', facilities: 'Hotels, Market, Gate System' },
            { name: 'Govind Ghat', altitude: '1,828 m', facilities: 'Gurudwara, Parking' },
            { name: 'Pandukeshwar', altitude: '2,000 m', facilities: 'Winter Seat of Yog Dhyan Badri' },
            { name: 'Badrinath', altitude: '3,133 m', facilities: 'Temple, Hotels, Ashrams' }
        ],
        alternatives: [
            { type: 'Walk', cost: 'Free', tips: 'The temple is just a 5-10 min walk from the parking/bus stand.' },
            { type: 'Rickshaw', cost: '₹50 - ₹100', tips: 'Available for seniors from the parking lot.' }
        ]
    },
    darshan: {
        timings: [
            { type: 'Morning', time: '4:30 AM – 1:00 PM' },
            { type: 'Break', time: '1:00 PM – 4:00 PM' },
            { type: 'Evening', time: '4:00 PM – 9:00 PM' }
        ],
        vipOptions: 'Available. Ved Path and Geeta Path bookings can be made online or at the counter.',
        tips: ['Bathing in Tapt Kund is customary before Darshan.', 'Do not carry leather items inside.', 'Photography is totally banned inside.'],
        aarti: [
            { name: 'Mangala Aarti', time: '4:30 AM', significance: 'The first aarti of the day.' },
            { name: 'Shayan Aarti', time: '8:30 PM', significance: 'Final prayer before closing.' }
        ]
    },
    nearby: [
        { name: 'Tapt Kund', distance: '0 km', description: 'Natural thermal springs with medicinal properties, situated just below the temple.' },
        { name: 'Mana Village', distance: '3 km', description: 'The "First Indian Village" towards the China border. Famous for Vyas Gufa and Bhim Pul.' },
        { name: 'Vasudhara Falls', distance: '9 km', description: 'A stunning waterfall (trek required). It is believed the water turns away from sinners.' }
    ],
    stay: {
        locations: ['Badrinath Town', 'Joshimath (45 km away)'],
        types: ['GMVN Guest Houses', 'Ashrams', 'Private Hotels', 'Dharamshalas'],
        tips: 'Badrinath has better hotel options than Kedarnath. Joshimath is a good alternative for luxury stays.'
    },
    faqs: [
        {
            question: 'Is there a trek for Badrinath?',
            answer: 'No, Badrinath is directly accessible by road. The vehicle drops you within 500 meters of the temple.'
        },
        {
            question: 'Can I visit Badrinath and Kedarnath in one trip?',
            answer: 'Yes, this is the most popular "Do Dham" itinerary. It typically takes 5-7 days depending on whether you travel by road or helicopter.'
        },
        {
            question: 'What is Mana Village famous for?',
            answer: 'Mana is historically significant as the place where the Mahabharata was written. Key spots include Vyas Gufa, Ganesha Gufa, and the Saraswati River origin.'
        },
        {
            question: 'Is Tapt Kund safe for bathing?',
            answer: 'Yes, the sulfur-rich water is hot (approx 45°C) even when outside temperature is freezing. It is considered medicinal for skin ailments.'
        }
    ]
};
