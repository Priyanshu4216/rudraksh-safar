import { TemplePageData } from './types';
import { Mountain, Map, Calendar, Droplets, Footprints, Wind } from 'lucide-react';

export const gangotriData: TemplePageData = {
    id: 'gangotri',
    meta: {
        title: 'Gangotri Temple 2026: History, Gaumukh Trek & Aarti Timings',
        description: 'The complete guide to Gangotri Dham. Discover the legend of King Bhagirath, plan your Gaumukh Glacier trek, and witness the Ganga Aarti at the origin of the holy river.',
        keywords: ['Gangotri Temple', 'Gangotri History', 'Gaumukh Trek', 'Tapovan', 'Char Dham Yatra', 'River Ganga Origin']
    },
    overview: {
        bgImage: 'https://images.unsplash.com/photo-1626621341120-e34c512d921d?q=80&w=2067',
        title: 'Gangotri Dham',
        subtitle: 'The Origin of the Holy Ganga',
        highlights: [
            { label: 'Altitude', value: '3,100 m (10,200 ft)', icon: Mountain },
            { label: 'River', value: 'Bhagirathi', icon: Droplets },
            { label: 'Best Time', value: 'May-June, Sept-Oct', icon: Calendar },
            { label: 'District', value: 'Uttarkashi', icon: Map }
        ]
    },
    history: {
        origin: 'Historical records state that the current temple was built by the Gorkha General Amar Singh Thapa in the 18th century.',
        legends: [
            'The Penance of Bhagirath: Ancient scriptures narrate that King Bhagirath meditated for centuries on a rock (Bhagirath Shila) to bring the celestial river Ganga down to earth.',
            'Shiva\'s Locks: To temper the mighty force of Ganga\'s descent, it is believed that Lord Shiva received her in his matted locks (Jata) and released her in a controlled stream.'
        ],
        adiShankaracharya: 'Adi Shankaracharya is credited with establishing the idol of Goddess Ganga here. During winters, the idol is moved to Mukhba village.',
        timeline: [
            { year: 'Mythological Era', event: 'Ganga descends to earth.' },
            { year: '18th Century', event: 'Current temple constructed by Amar Singh Thapa.' },
            { year: '19th Century', event: 'Renovated by the Maharaja of Jaipur.' }
        ]
    },
    spiritual: {
        significance: 'Gangotri is revered as the sanctified spot where Goddess Ganga touched earth. Taking a dip in the icy waters here is believed by devotees to cleanse the soul.',
        beliefs: [
            'While the temple is the spiritual hub, the geographical source of the river lies 19 km away at Gaumukh.',
            'A submerged Shivling is said to be visible in the river during winter, marking the spot where Shiva sat.'
        ],
        rituals: [
            'Ganga Pujan: Offering prayers and flowers to the river.',
            'Pind Daan: Performing rites for ancestors on the banks of the Bhagirathi.',
            'Mangal Aarti: Morning prayer to the Goddess.'
        ]
    },
    dates: {
        opening: 'Akshaya Tritiya (May 2026)',
        closing: 'Diwali / Bhai Dooj (Oct/Nov 2026)',
        winterSeat: 'Mukhba Village (Near Harsil)',
        festivals: ['Ganga Dussehra', 'Diwali', 'Akshaya Tritiya']
    },
    reach: {
        road: [
            { route: 'Rishikesh -> Chamba -> Tehri -> Uttarkashi -> Harsil -> Gangotri', distance: '270 km', description: 'Scenic drive through the Harsil valley. Roads are generally good.' }
        ],
        train: { station: 'Rishikesh', distance: '250 km', connectivity: 'Major railhead connectivity.' },
        air: { airport: 'Jolly Grant Airport, Dehradun', helipad: 'Harsil Helipad', description: 'Fly to Harsil helipad and then drive 25 km to Gangotri.' }
    },
    trek: {
        mapImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000', // Placeholder
        distance: '0 km (Roadhead)',
        difficulty: 'Easy',
        baseCamp: 'Gangotri Town',
        stops: [],
        alternatives: [
            { type: 'Walk', cost: 'Free', tips: 'Temple is 200 meters from parking.' }
        ]
    },
    darshan: {
        timings: [
            { type: 'Morning', time: '6:15 AM – 2:00 PM' },
            { type: 'Evening', time: '3:00 PM – 9:30 PM' }
        ],
        vipOptions: 'Generally not required as queues move fast. Special poojas available.',
        tips: ['Water is freezing; be careful while taking a dip.', 'Visit the Bhagirath Shila near the temple.'],
        aarti: [
            { name: 'Ganga Aarti', time: '7:30 PM', significance: 'A mesmerizing visual of oil lamps floating on the river.' }
        ]
    },
    nearby: [
        { name: 'Gaumukh Glacier', distance: '19 km Trek', description: 'The actual source of the Ganga. Requires a permit and a tough 2-day trek.' },
        { name: 'Tapovan', distance: '23 km Trek', description: 'A high-altitude meadow above Gaumukh, famous for meditation and views of Shivling peak.' },
        { name: 'Harsil Valley', distance: '25 km', description: 'Unspoiled beauty, apple orchards, and shooting location for the movie "Ram Teri Ganga Maili".' }
    ],
    stay: {
        locations: ['Gangotri', 'Harsil (Best Options)', 'Uttarkashi'],
        types: ['GMVN Guest Houses', 'Ashrams', 'Private Hotels', 'Homestays in Harsil'],
        tips: 'Gangotri has basic stays. For luxury and comfort, stay in Harsil.'
    },
    faqs: [
        {
            question: 'Do I need to trek to reach Gangotri?',
            answer: 'No, Gangotri is accessible by road. The car drops you just a few minutes walk from the temple.'
        },
        {
            question: 'How difficult is the Gaumukh trek?',
            answer: 'It is a moderate to difficult trek (18 km one way). It requires a permit from the forest department and is not recommended for children or seniors with health issues.'
        },
        {
            question: 'What is special about Harsil?',
            answer: 'Harsil is a hidden gem known for its apple orchards, cantonment area, and stunning views of the Himalayas. It is the best place to stay near Gangotri.'
        },
        {
            question: 'Is the water drinkable?',
            answer: 'The water of Bhagirathi at Gangotri is considered pure, but for drinking, boiled or bottled water is recommended for tourists.'
        }
    ]
};
