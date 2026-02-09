import { TemplePageData } from './types';
import { Mountain, Map, Calendar, Footprints } from 'lucide-react';

// Shared Panch Kedar Component Data
const panchKedarShared = {
    description: "The Panch Kedar are five holy shrines dedicated to Lord Shiva in the Garhwal Himalayas. They are Kedarnath (Hump), Tungnath (Arms), Rudranath (Face), Madhyamaheshwar (Navel/Belly), and Kalpeshwar (Hair). Completing this circuit is believed to absolve one of all sins.",
    link: "/panch-kedar-yatra",
    temples: [
        { name: "Kedarnath", altitude: "3,583m", link: "/kedarnath-temple", description: "The Hump of Shiva" },
        { name: "Tungnath", altitude: "3,680m", link: "/tungnath-temple", description: "The Arms of Shiva" },
        { name: "Rudranath", altitude: "2,286m", link: "/rudranath-temple", description: "The Face of Shiva" },
        { name: "Madhyamaheshwar", altitude: "3,497m", link: "/madhyamaheshwar-temple", description: "The Navel of Shiva" },
        { name: "Kalpeshwar", altitude: "2,200m", link: "/kalpeshwar-temple", description: "The Hair of Shiva" }
    ]
};

export const tungnathData: TemplePageData = {
    id: 'tungnath',
    meta: {
        title: 'Tungnath Temple: Highest Shiva Temple in the World | Trek Guide 2026',
        description: 'Complete guide to Tungnath, the highest Shiva temple in the world (3,680m). Detailed info on Chopta-Chandrashila trek, opening dates, and stay options.',
        keywords: ['Tungnath Temple', 'Chandrashila Trek', 'Highest Shiva Temple', 'Chopta Trek', 'Panch Kedar']
    },
    overview: {
        bgImage: 'https://images.unsplash.com/photo-1698394474773-04e4c2957106?q=80&w=1000',
        title: 'Tungnath Dham',
        subtitle: 'The Highest Shiva Temple',
        highlights: [
            { label: 'Altitude', value: '3,680 m', icon: Mountain },
            { label: 'Trek', value: '3.5 km (Easy)', icon: Footprints },
            { label: 'Best Time', value: 'Apr-Jun, Sep-Nov', icon: Calendar },
            { label: 'Base Camp', value: 'Chopta', icon: Map }
        ]
    },
    history: {
        origin: 'Ancient Vedic Era',
        legends: [
            'During the Mahabharata era, the Pandavas sought Lord Shiva to atone for the sins of fratricide. Shiva, avoiding them, took the form of a bull. When Bhima caught the bull, it disappeared into the ground.',
            'The arms (bahu) of the bull reappeared here at Tungnath.',
            'It is also believed that Ravana performed penance here to please Lord Shiva.'
        ],
        adiShankaracharya: 'The temple was discovered and the worship tradition was established by Adi Shankaracharya in the 8th century.',
        timeline: [
            { year: 'Ancient', event: 'Built by Pandavas' },
            { year: '8th Century', event: 'Revived by Adi Shankaracharya' }
        ]
    },
    spiritual: {
        significance: 'Tungnath is worshiped as the "Arms" (Bahu) of Lord Shiva. It is the third (Tritiya) Kedar in the Panch Kedar circuit.',
        beliefs: [
            'Meditating here is believed to grant inner peace and liberation.',
            'The nearby Chandrashila peak is where Lord Rama is said to have meditated after defeating Ravana.'
        ],
        rituals: ['Morning Abhishekam', 'Evening Aarti']
    },
    dates: {
        opening: 'May 2026 (Tentative)',
        closing: 'November 2026 (Tentative)',
        winterSeat: 'Makkumath',
        festivals: ['Mahashivratri', 'Dussehra']
    },
    reach: {
        road: [
            { route: 'Rishikesh -> Rudraprayag -> Ukhimath -> Chopta', distance: '210 km', description: 'Scenic drive along the Alaknanda and Mandakini rivers.' },
            { route: 'Dehradun -> Mussoorie -> Tehri -> Mala -> Chopta', distance: '240 km', description: 'Alternative route via Tehri Dam.' }
        ],
        train: { station: 'Rishikesh / Haridwar', distance: '200 km', connectivity: 'Well connected to major Indian cities' },
        air: { airport: 'Jolly Grant, Dehradun', helipad: 'Phata/Guptkashi', description: 'Nearest airport is 220km away. Taxis available.' }
    },
    trek: {
        mapImage: 'https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=1000',
        distance: '3.5 km from Chopta',
        difficulty: 'Easy',
        baseCamp: 'Chopta',
        stops: [
            { name: 'Chopta', altitude: '2,680m', facilities: 'Hotels, Camps, Food' },
            { name: 'Bugyals', altitude: '3,000m', facilities: 'Rest points, Scenic meadows' },
            { name: 'Tungnath Temple', altitude: '3,680m', facilities: 'Temple, Small Shops' },
            { name: 'Chandrashila', altitude: '4,000m', facilities: 'Summit View (1km further)' }
        ],
        alternatives: [
            { type: 'Pony/Mule', cost: '₹1000 - ₹1500', tips: 'Available at Chopta start point' },
            { type: 'Palki', cost: '₹4000+', tips: 'For elderly/disabled' }
        ]
    },
    darshan: {
        timings: [{ type: 'Day', time: '6:00 AM - 7:00 PM' }],
        vipOptions: 'Not typically available',
        tips: ['Carry woolen clothes even in summer', 'Start early to see sunrise at Chandrashila'],
        aarti: [{ name: 'Evening Aarti', time: '6:30 PM', significance: 'Divine atmosphere with chanting' }]
    },
    panchKedar: panchKedarShared,
    nearby: [
        { name: 'Chandrashila Peak', distance: '1 km trek', description: 'Offers a 360-degree view of Nanda Devi, Trishul, and Chaukhamba peaks.' },
        { name: 'Deoria Tal', distance: '12 km drive + 2.5 km trek', description: 'Emerald lake reflecting the Chaukhamba peaks.' }
    ],
    stay: {
        locations: ['Chopta', 'Dugalbitta', 'Tungnath (Limited)'],
        types: ['Swiss Camps', 'Guesthouses', 'Basic Rooms'],
        tips: 'Book accommodation in Chopta or Dugalbitta for better amenities.'
    },
    faqs: [
        { question: 'Is the Tungnath trek difficult?', answer: 'No, it is considered the easiest of the Panch Kedar treks. The 3.5 km path is well-paved and suitable for beginners and families.' },
        { question: 'Can we visit Tungnath in winter?', answer: 'The temple closes in winter (Nov-Apr), but the trek usually remains open up to a certain point depending on snow. The idol is moved to Makkumath.' },
        { question: 'How long does the trek take?', answer: 'It typically takes 2-3 hours to climb up and 1.5 hours to descend.' },
        { question: 'Is there mobile network?', answer: 'Network is decent at Chopta (Jio/Airtel) but becomes patchy or unavailable as you trek up.' },
        { question: 'Do I need a permit?', answer: 'Usually, no special permit is required for Tungnath, but checking at the forest check post in Chopta is recommended.' }
    ],
    weather: {
        season: 'Best: Apr-Jun, Sep-Nov',
        temperature: 'Summer: 10-20°C | Winter: -5 to 5°C',
        tips: 'Weather changes rapidly. Always carry a raincoat and warm layer.'
    },
    crowd: {
        busyDates: 'May-June (Yatra Peak) & Weekends',
        peacefulDates: 'September-October',
        tips: 'Start your trek at 4 AM to beat the crowd and catch the sunrise at Chandrashila.'
    },
    itinerary: {
        title: 'Recommended 2-Day Itinerary',
        days: [
            { day: 1, title: 'Arrival in Chopta', activities: ['Reach Chopta from Rishikesh (7-8 hrs)', 'Check into campsite', 'Acclimatize', 'Sunset at meadow'] },
            { day: 2, title: 'Trek to Summit', activities: ['Start trek at 4:00 AM', 'Reach Tungnath (6:00 AM)', 'Summit Chandrashila (7:00 AM)', 'Descend & Depart'] }
        ]
    },
    authoritativeSource: {
        text: "This guide is curated using inputs from local Chopta guides and verified against 2025-26 Temple Committee updates.",
        lastVerified: "Feb 2026"
    }
};

export const rudranathData: TemplePageData = {
    id: 'rudranath',
    meta: {
        title: 'Rudranath Temple Trek: The Toughest Panch Kedar 2026',
        description: 'Detailed guide to Rudranath, the 4th Kedar where Shiva’s face represents. Info on the 20km trek, Sagar Village route, and stay.',
        keywords: ['Rudranath Temple', 'Panch Kedar Trek', 'Toughest Kedar', 'Garhwal Trekking', 'Sagar Village']
    },
    overview: {
        bgImage: 'https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=1000', // Placeholder
        title: 'Rudranath Dham',
        subtitle: 'The Face of Lord Shiva',
        highlights: [
            { label: 'Altitude', value: '2,286 m', icon: Mountain },
            { label: 'Trek', value: '20 km (Difficult)', icon: Footprints },
            { label: 'Best Time', value: 'May-Oct', icon: Calendar },
            { label: 'District', value: 'Chamoli', icon: Map }
        ]
    },
    history: {
        origin: 'Mahabharata Era',
        legends: [
            'When Lord Shiva dove into the earth as a bull to elude the Pandavas, his face (Mukh) reappeared at Rudranath.',
            'It is the only temple where the face of Shiva is worshipped as "Neelkanth Mahadev".'
        ],
        adiShankaracharya: 'The temple rituals are managed by local Bhatts/Pujaris, unlike other Kedars managed by South Indian priests.',
        timeline: []
    },
    spiritual: {
        significance: 'Worshipped as the "Face" of Lord Shiva. It radiates a unique spiritual aura due to its isolation.',
        beliefs: [
            'Devotees adhere to strict silence or soft speech to respect Shiva’s privacy.',
            'A rock-carved temple with a natural swayambhu lingam.'
        ],
        rituals: ['Shringar (Morning)', 'Aarti (Evening)', 'Pitru Tarpan (Ancestor worship)']
    },
    dates: {
        opening: 'May 2026 (Tentative)',
        closing: 'October 2026 (Tentative)',
        winterSeat: 'Gopinath Temple, Gopeshwar',
        festivals: ['Raksha Bandhan (Annapurna Fair)']
    },
    reach: {
        road: [
            { route: 'Rishikesh -> Rudraprayag -> Gopeshwar -> Sagar Village', distance: '220 km', description: 'Sagar Village is the most common base camp.' },
            { route: 'Alternative: Mandal Village', distance: 'From Gopeshwar', description: 'Anasuya Devi route (Steep ascent).' }
        ],
        train: { station: 'Rishikesh', distance: '210 km', connectivity: 'Major railhead' },
        air: { airport: 'Dehradun', helipad: 'Guptkashi', description: 'One must trek; no helicopter service to the temple.' }
    },
    trek: {
        mapImage: 'https://images.unsplash.com/photo-1626084478854-46d97d7f76e7?q=80&w=1000',
        distance: '20 km (One Way)',
        difficulty: 'Difficult',
        baseCamp: 'Sagar Village',
        stops: [
            { name: 'Sagar Village', altitude: 'Start', facilities: 'Small Shops' },
            { name: 'Pun Bugyal', altitude: 'Mid-way', facilities: 'Shepherd Huts, Water' },
            { name: 'Lyti Bugyal', altitude: 'High', facilities: 'Meadows' },
            { name: 'Panar Bugyal', altitude: 'High', facilities: 'Scenic Views, Basic Huts' },
            { name: 'Rudranath', altitude: '2,286m', facilities: 'Temple, Dharamshala' }
        ],
        alternatives: [
            { type: 'Porter/Guide', cost: '₹1500 - ₹2000/day', tips: 'Highly recommended due to confusing trails.' }
        ]
    },
    darshan: {
        timings: [{ type: 'Day', time: '6:00 AM - 7:00 PM' }],
        vipOptions: 'None',
        tips: ['Carry energy bars and water purification tablets.', 'The weather changes rapidly.'],
        aarti: [{ name: 'Morning Aarti', time: '8:00 AM', significance: 'Special Shringar Darshan' }]
    },
    panchKedar: panchKedarShared,
    nearby: [
        { name: 'Surya Kund', distance: 'Near Temple', description: 'Holy water tank.' },
        { name: 'Chandra Kund', distance: 'Near Temple', description: 'Holy water tank.' },
        { name: 'Anasuya Devi Temple', distance: 'On the way (Mandal route)', description: 'Dedicated to Goddess Anasuya.' }
    ],
    stay: {
        locations: ['Panar Bugyal', 'Rudranath'],
        types: ['Basic Shepherd Huts', 'Temple Dharamshala', 'Tents'],
        tips: 'Accommodation is extremely basic. Carry sleeping bags if possible.'
    },
    faqs: [
        { question: 'Why is Rudranath considered the toughest trek?', answer: 'The 20km trek involves a steep, continuous ascent through dense forests and high-altitude meadows (bugyals) with no proper roads.' },
        { question: 'Is food available on the trek?', answer: 'Basic food (Dal, Rice, Maggi, Tea) is available at Pun Bugyal and Panar Bugyal in shepherd huts.' },
        { question: 'Can I do this trek solo?', answer: 'It is not recommended for beginners to go solo as trails can be confusing in the dense forest. Hiring a local guide is safer.' },
        { question: 'Where is the winter seat of Rudranath?', answer: 'In winter, the palanquin of Lord Shiva is brought to Gopinath Temple in Gopeshwar for worship.' },
        { question: 'Is there electricity or network?', answer: 'No electricity and virtually no mobile network after Sagar Village. Carry power banks.' }
    ],
    weather: {
        season: 'Best: May-Jun, Sep-Oct',
        temperature: 'Summer: 8-15°C | Night: -2°C',
        tips: 'Rain coats are mandatory. The route gets very slippery during monsoon.'
    },
    crowd: {
        busyDates: 'Raksha Bandhan (Aug) & May',
        peacefulDates: 'September',
        tips: 'This is the least crowded Kedar due to difficulty. Enjoy the silence.'
    },
    itinerary: {
        title: 'Recommended 4-Day Trek Itinerary',
        days: [
            { day: 1, title: 'Drive to Sagar Village', activities: ['Reach Gopeshwar', 'Stay at Sagar Village', 'Arrange Guide'] },
            { day: 2, title: 'Trek to Panar Bugyal', activities: ['12km steep trek', 'Cross Lyti Bugyal', 'Stay in Shepherd Huts at Panar'] },
            { day: 3, title: 'Rudranath Darshan', activities: ['Trek 8km to Temple', 'Darshan & Puja', 'Return to Panar/Lyuti'] },
            { day: 4, title: 'Return Descent', activities: ['Descend back to Sagar Village', 'Depart'] }
        ]
    },
    authoritativeSource: {
        text: "Verified by local shepherds and seasoned trekkers of the Sagar-Rudranath route.",
        lastVerified: "Feb 2026"
    }
};

export const madhyamaheshwarData: TemplePageData = {
    id: 'madhyamaheshwar',
    meta: {
        title: 'Madhyamaheshwar Temple Trek: The Navel of Shiva',
        description: 'Guide to Madhyamaheshwar (Second Kedar), worshiped as the navel of Lord Shiva. Explore the lush valley trek from Ransi village.',
        keywords: ['Madhyamaheshwar', 'Buda Madhyamaheshwar', 'Panch Kedar', 'Ransi Trek']
    },
    overview: {
        bgImage: 'https://plus.unsplash.com/premium_photo-1697729600773-1b91316612df?q=80&w=1000',
        title: 'Madhyamaheshwar',
        subtitle: 'The Navel of Lord Shiva',
        highlights: [
            { label: 'Altitude', value: '3,497 m', icon: Mountain },
            { label: 'Trek', value: '16 km (Moderate)', icon: Footprints },
            { label: 'Best Time', value: 'May-Oct', icon: Calendar },
            { label: 'Base Camp', value: 'Ransi', icon: Map }
        ]
    },
    history: {
        origin: 'Mahabharata Legend',
        legends: [
            'As the bull-form Shiva dove into the earth, his navel (Nabhi) surfaced at this spot.',
            'It is considered the Second Kedar in the circuit.'
        ],
        adiShankaracharya: 'Like other Kedars, the worship lineage is attributed to the traditions set by Adi Shankaracharya.',
        timeline: []
    },
    spiritual: {
        significance: 'Worshipped as the "Navel" (Nabhi) of Shiva. The Nabhi Lingam is made of black stone.',
        beliefs: [
            'The holy water from the temple premises is believed to cleanse one of sins.',
            'Bhima is said to have built the initial shrine.'
        ],
        rituals: ['Abhishekam', 'Evening Aarti']
    },
    dates: {
        opening: 'May 2026 (Tentative)',
        closing: 'November 2026 (Tentative)',
        winterSeat: 'Omkareshwar Temple, Ukhimath',
        festivals: ['Madhyamaheshwar Mela']
    },
    reach: {
        road: [{ route: 'Rishikesh -> Ukhimath -> Ransi Village', distance: '200 km', description: 'Ransi is the last motorable road point.' }],
        train: { station: 'Rishikesh', distance: '190 km', connectivity: 'Good' },
        air: { airport: 'Dehradun', helipad: 'Guptkashi', description: 'Nearest major helipad. Trek starts from Ransi.' }
    },
    trek: {
        mapImage: 'https://plus.unsplash.com/premium_photo-1697729600773-1b91316612df?q=80&w=1000',
        distance: '16 km from Ransi',
        difficulty: 'Moderate',
        baseCamp: 'Ransi Village',
        stops: [
            { name: 'Ransi', altitude: 'Start', facilities: 'Homestays' },
            { name: 'Gondhar', altitude: 'Low', facilities: 'Small shops, River confluence' },
            { name: 'Bantoli', altitude: 'Mid', facilities: 'Confluence of Madhyamaheshwar Ganga & Martyenda Ganga' },
            { name: 'Khatara', altitude: 'Steep', facilities: 'Rest stop' },
            { name: 'Nanu', altitude: 'High', facilities: 'Views' },
            { name: 'Madhyamaheshwar', altitude: '3,497m', facilities: 'Temple' }
        ],
        alternatives: [
            { type: 'Porter/Mule', cost: 'Available', tips: 'Can be hired from Ransi.' }
        ]
    },
    darshan: {
        timings: [{ type: 'Day', time: '6:00 AM - 8:00 PM' }],
        vipOptions: 'None',
        tips: ['The initial trek is downhill, then steep uphill.', 'Carry rain gear.'],
        aarti: [{ name: 'Evening Aarti', time: '6:30 PM', significance: 'Beautiful ambiance' }]
    },
    panchKedar: panchKedarShared,
    nearby: [
        { name: 'Buda Madhyamaheshwar', distance: '2 km steep trek', description: 'A hilltop offering mesmerizing views of Chaukhamba peaks and the temple below.' },
        { name: 'Kanchani Tal', distance: '6 km trek', description: 'High altitude glacial lake (Difficult).' }
    ],
    stay: {
        locations: ['Ransi', 'Gondhar', 'Bantoli', 'Madhyamaheshwar'],
        types: ['Homestays', 'Temple Committee Guest House', 'Tents'],
        tips: 'Stay at the Temple Committee guest house for proximity to the shrine.'
    },
    faqs: [
        { question: 'How long is the Madhyamaheshwar trek?', answer: 'It is a 16 km trek from Ransi. Typically done in 2 days (One night stop at Bantoli or Nanu recommended for beginners).' },
        { question: 'Is the trek scenic?', answer: 'Yes, it is often cited as one of the most beautiful treks, passing through dense forests, waterfalls, and river confluences.' },
        { question: 'What is Buda Madhyamaheshwar?', answer: 'It is a small shrine situated 2km above the main temple. It offers the best panoramic views of the Chaukhamba massif.' },
        { question: 'Is accommodation available at the top?', answer: 'Yes, there is a Dharmashala managed by the temple committee and a few homestays.' },
        { question: 'Is there mobile connectivity?', answer: 'Signal is available up to Ransi and sometimes Bantoli, but mostly unavailable at the temple.' }
    ],
    weather: {
        season: 'Best: May-Oct',
        temperature: 'Summer: 15-24°C | Winter: Snowbound',
        tips: 'Lush greenery post-monsoon (September) is breathtaking.'
    },
    crowd: {
        busyDates: 'May-June',
        peacefulDates: 'September-October',
        tips: 'Stay at Bantoli (mid-way) for a peaceful night by the river confluence.'
    },
    itinerary: {
        title: 'Recommended 3-Day Itinerary',
        days: [
            { day: 1, title: 'Reach Ransi & Trek', activities: ['Drive to Ransi', 'Trek 6km to Gondhar/Bantoli', 'Stay Overnight'] },
            { day: 2, title: 'Summit Push', activities: ['Trek 10km to Madhyamaheshwar', 'Evening Aarti', 'Stay at Temple'] },
            { day: 3, title: 'Buda Madhyamaheshwar & Return', activities: ['Sunrise at Buda Madhyamaheshwar', 'Descend to Ransi', 'Depart'] }
        ]
    },
    authoritativeSource: {
        text: "Information sourced from Ransi village homestay owners and regular pilgrims.",
        lastVerified: "Feb 2026"
    }
};

export const kalpeshwarData: TemplePageData = {
    id: 'kalpeshwar',
    meta: {
        title: 'Kalpeshwar Temple: The Hair of Shiva | Open All Year',
        description: 'Kalpeshwar (5th Kedar) is the only Panch Kedar temple open year-round. Worship the Jata (Hair) of Lord Shiva in the scenic Urgam Valley.',
        keywords: ['Kalpeshwar Temple', 'Urgam Valley', 'Panch Kedar', 'Winter Char Dham', 'Dhyan Badri']
    },
    overview: {
        bgImage: 'https://images.unsplash.com/photo-1688152393282-3535921869e5?q=80&w=1000',
        title: 'Kalpeshwar Dham',
        subtitle: 'The Hair of Lord Shiva',
        highlights: [
            { label: 'Altitude', value: '2,200 m', icon: Mountain },
            { label: 'Trek', value: '300 meters (Easy)', icon: Footprints },
            { label: 'Best Time', value: 'All Year Round', icon: Calendar },
            { label: 'Valley', value: 'Urgam Valley', icon: Map }
        ]
    },
    history: {
        origin: 'Puranic Legend',
        legends: [
            'The "Jata" (matted hair) of Lord Shiva appeared here after he disappeared into the earth.',
            'Linked to the legend of Urvashi (Celestial Nymph) and the Sage Durvasa.'
        ],
        adiShankaracharya: 'Part of the pilgrimage circuit established to unify worship practices.',
        timeline: []
    },
    spiritual: {
        significance: 'Worship of the "Hair" (Jata). It is the fifth and final Kedar.',
        beliefs: [
            'The Kalpavriksha (Watch-fulfilling tree) is believed to have existed here.',
            'It is a favorite spot for sages to meditate (Dhyan Badri is nearby).'
        ],
        rituals: ['Daily Puja']
    },
    dates: {
        opening: 'Open All Year',
        closing: 'Never closes',
        winterSeat: 'The deity remains here throughout the year.',
        festivals: ['Mahashivratri']
    },
    reach: {
        road: [
            { route: 'Rishikesh -> Joshimath -> Helang -> Turn towards Urgam -> Devgram', distance: '250 km', description: 'Drive till Devgram/Urgam village.' }
        ],
        train: { station: 'Rishikesh', distance: '240 km', connectivity: 'Good' },
        air: { airport: 'Dehradun', helipad: 'Joshimath', description: 'Nearest helipad is at Joshimath (approx 25km away).' }
    },
    trek: {
        mapImage: 'https://images.unsplash.com/photo-1688152393282-3535921869e5?q=80&w=1000',
        distance: '300-500 meters',
        difficulty: 'Easy',
        baseCamp: 'Urgam/Devgram Village',
        stops: [],
        alternatives: []
    },
    darshan: {
        timings: [{ type: 'Day', time: '6:00 AM - 8:00 PM' }],
        vipOptions: 'None',
        tips: ['Explore the beautiful Urgam Valley.', 'Visit Dhyan Badri nearby.'],
        aarti: [{ name: 'Evening Aarti', time: '6:00 PM', significance: 'Simple and serene' }]
    },
    panchKedar: panchKedarShared,
    nearby: [
        { name: 'Dhyan Badri', distance: 'Near Urgam', description: 'One of the Sapt Badri temples.' },
        { name: 'Banganga River', distance: 'Valley', description: 'Scenic river flowing through the valley.' }
    ],
    stay: {
        locations: ['Urgam Village', 'Devgram', 'Lyari'],
        types: ['Homestays', 'Guest Houses'],
        tips: 'Accommodation is simple and clean. Experience local Garhwali hospitality.'
    },
    faqs: [
        { question: 'Is Kalpeshwar open in winter?', answer: 'Yes, Kalpeshwar is the only Panch Kedar temple that remains open for Darshan throughout the year, even during winter.' },
        { question: 'How much walking is required?', answer: 'Minimal walking. The road now reaches very close to the temple (Devgram), leaving just a 300-500 meter walk.' },
        { question: 'How is the road condition?', answer: 'The road from Helang to Urgam can be narrow and rough. It is advised to travel in a small vehicle or SUV.' },
        { question: 'Where can I stay?', answer: 'There are several homestays in Urgam and Devgram villages offering comfortable stay and home-cooked food.' },
        { question: 'Can I visit Kalpeshwar with Badrinath?', answer: 'Yes, it is on the route to Badrinath (take a detour from Helang near Joshimath).' }
    ],
    weather: {
        season: 'Best: All Year Round',
        temperature: 'Summer: 15-25°C | Winter: 5-15°C',
        tips: 'One of the few Himalayan temples accessible comfortably in winter.'
    },
    crowd: {
        busyDates: 'Mahashivratri & Sawan',
        peacefulDates: 'Most of the year',
        tips: 'A hidden gem. usually very peaceful and perfect for meditation.'
    },
    itinerary: {
        title: 'Recommended 2-Day Trip',
        days: [
            { day: 1, title: 'Drive to Urgam + Darshan', activities: ['Reach Helang -> Urgam', 'Settle in Homestay', 'Walk to Kalpeshwar Temple', 'Attend Evening Aarti'] },
            { day: 2, title: 'Village Walk & Dhyan Badri', activities: ['Morning walk in Urgam Valley', 'Visit Dhyan Badri', 'Depart'] }
        ]
    },
    authoritativeSource: {
        text: "Validated by Urgam Valley locals and Winter Char Dham experts.",
        lastVerified: "Feb 2026"
    }
};
