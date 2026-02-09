import { TemplePageData } from './types';
import { Mountain, Map, Calendar, Flame, Footprints, Droplets } from 'lucide-react';

export const yamunotriData: TemplePageData = {
    id: 'yamunotri',
    meta: {
        title: 'Yamunotri Temple 2026: Trek, Surya Kund & Palki Rates',
        description: 'Complete guide to Yamunotri Dham. Learn about the 6km trek, the ritual of cooking rice in Surya Kund, and the legend of Yamuna and Yama.',
        keywords: ['Yamunotri Temple', 'Yamunotri Trek', 'Surya Kund', 'Yamuna River', 'Char Dham Yatra', 'Divya Shila']
    },
    overview: {
        bgImage: 'https://images.unsplash.com/photo-1626126605658-00a6e0770582?q=80&w=2000',
        title: 'Yamunotri Dham',
        subtitle: 'The Source of Yamuna & Gateway to Char Dham',
        highlights: [
            { label: 'Altitude', value: '3,293 m (10,804 ft)', icon: Mountain },
            { label: 'Trek', value: '6 km (Steep Incline)', icon: Footprints },
            { label: 'Best Time', value: 'May-June, Sept-Nov', icon: Calendar },
            { label: 'District', value: 'Uttarkashi', icon: Map }
        ]
    },
    history: {
        origin: 'The temple was built by Maharaja Pratap Shah of Tehri Garhwal.',
        legends: [
            'Yama and Yamuna: Goddess Yamuna is the sister of Yama (God of Death). It is believed that bathing in the Yamuna protects one from a painful death.',
            'Asit Muni: The sage Asit Muni lived here and bathed in both Ganga and Yamuna. When he became old and unable to travel, a stream of Ganga appeared opposite Yamunotri for him.'
        ],
        adiShankaracharya: 'Like the other Dhams, Adi Shankaracharya visited this spot and established it as a pilgrimage center.',
        timeline: [
            { year: 'Ancient Era', event: 'Home of Sage Asit Muni.' },
            { year: '19th Century', event: 'Temple reconstructed by Maharani Gularia of Jaipur.' }
        ]
    },
    spiritual: {
        significance: 'Yamunotri is usually the first stop in the Char Dham Yatra (West to East). It represents the purification of the soul before proceeding to Gangotri, Kedarnath, and Badrinath.',
        beliefs: [
            'Cooking rice in the hot water of Surya Kund and taking it home as Prasad is a key ritual.',
            'Worshipping the Divya Shila (a rock pillar) is mandatory before entering the temple.'
        ],
        rituals: [
            'Divya Shila Pujan: Prayers offered to the rock pillar.',
            'Surya Kund Snan: Bathing (carefully) or sprinkling water from the hot spring.',
            'Yamuna Aarti: Evening prayers to the river.'
        ]
    },
    dates: {
        opening: 'Akshaya Tritiya (May 2026)',
        closing: 'Bhai Dooj (Oct/Nov 2026)',
        winterSeat: 'Kharsali Village',
        festivals: ['Yamuna Jayanti', 'Bhai Dooj', 'Basant Panchami']
    },
    reach: {
        road: [
            { route: 'Dehradun -> Mussoorie -> Barkot -> Jankichatti (Base Camp)', distance: '180 km', description: 'The road is scenic but narrow near Barkot. Jankichatti is the last motorable point.' }
        ],
        train: { station: 'Dehradun', distance: '175 km', connectivity: 'Connected to Delhi by Shatabdi/Vande Bharat.' },
        air: { airport: 'Jolly Grant Airport, Dehradun', helipad: 'Kharsali Helipad', description: 'Helicopter services drop you at Kharsali, just 6 km from the temple (Palki available).' }
    },
    trek: {
        mapImage: 'https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=1000', // Placeholder
        distance: '6 km',
        difficulty: 'Moderate',
        baseCamp: 'Jankichatti',
        stops: [
            { name: 'Jankichatti', altitude: '2,650 m', facilities: 'Hotels, Parking, Palki Stand' },
            { name: 'Phool Chatti', altitude: '2,800 m', facilities: 'Mid-point check' },
            { name: 'Yamunotri', altitude: '3,293 m', facilities: 'Temple, Ashrams' }
        ],
        alternatives: [
            { type: 'Pony', cost: '₹1,500 - ₹2,500', tips: 'Start early to avoid the afternoon sun.' },
            { type: 'Palki', cost: '₹5,000 - ₹7,000', tips: 'Highly recommended for seniors as the path is steep.' }
        ]
    },
    darshan: {
        timings: [
            { type: 'Morning', time: '6:00 AM – 2:00 PM' },
            { type: 'Evening', time: '3:00 PM – 8:00 PM' }
        ],
        vipOptions: 'Not available. Queue based.',
        tips: ['Start the trek by 5 AM to return by afternoon.', 'The path can be slippery; wear good grip shoes.', 'Do not miss the Surya Kund.'],
        aarti: [
            { name: 'Yamuna Aarti', time: '6:30 PM', significance: 'Performed at the banks of the river.' }
        ]
    },
    nearby: [
        { name: 'Surya Kund', distance: '0 km', description: 'A boiling hot water spring where rice is cooked in cloth bags as Prasad.' },
        { name: 'Divya Shila', distance: '0 km', description: 'A sacred rock pillar that must be worshipped before the main deity.' },
        { name: 'Kharsali', distance: '6 km', description: 'Winter seat of Yamuna Maa, home to an ancient Shani Temple.' }
    ],
    stay: {
        locations: ['Jankichatti (Base Camp)', 'Barkot (40 km away)', 'Kharsali'],
        types: ['Hotels in Barkot', 'GMVN in Jankichatti', 'Lodges'],
        tips: 'Stay in Barkot for better hotels. Jankichatti has basic facilities only.'
    },
    faqs: [
        {
            question: 'Is the Yamunotri trek difficult?',
            answer: 'The trek is short (6 km) but has a steep incline. It can be tiring for those not used to walking. Palkis are recommended for seniors.'
        },
        {
            question: 'Why do people cook rice in Surya Kund?',
            answer: 'It is a tradition to cook rice and potatoes in the boiling water (88°C) of Surya Kund and take it home as cooked Prasad from the Goddess.'
        },
        {
            question: 'Can I do Yamunotri and Gangotri in one trip?',
            answer: 'Yes, this is called the "Do Dham" yatra. It takes about 4-5 days via road.'
        },
        {
            question: 'Where should I park my car?',
            answer: 'There is a large parking area at Jankichatti. You cannot take vehicles beyond this point.'
        }
    ]
};
