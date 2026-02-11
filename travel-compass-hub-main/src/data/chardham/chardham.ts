import { CharDhamMasterData } from './types';

export const charDhamData: CharDhamMasterData = {
    temples: {
        yamunotri: {
            id: 'yamunotri',
            name: 'Yamunotri Dham',
            slug: 'yamunotri-temple',
            deity: 'Goddess Yamuna',
            altitude: '3,293 m (10,804 ft)',
            district: 'Uttarkashi',
            image: 'https://images.unsplash.com/photo-1626084666992-1277f0a7114b?auto=format&fit=crop&q=80&w=800',
            description: 'The source of the river Yamuna and the seat of Goddess Yamuna. It is the first stop in the Char Dham circuit.',
            spiritualImportance: 'Pilgrims cook rice in the Surya Kund (hot spring) as potential prasad. A dip in the Yamuna is said to protect one from untimely death.',
            history: 'The temple was originally built by Maharani Gularia of Jaipur in the 19th century. Due to weather damage, it has been rebuilt multiple times.',
            openingDate: 'Akshaya Tritiya (May 2026)',
            closingDate: 'Bhai Dooj (Nov 2026)',
            darshanTiming: {
                morning: '6:00 AM – 12:00 PM',
                evening: '2:00 PM – 8:00 PM',
                break: '12:00 PM – 2:00 PM'
            },
            aarti: [
                { name: 'Mangala Aarti', time: '6:30 AM', description: 'Morning prayers to wake the deity.' },
                { name: 'Shayan Aarti', time: '7:30 PM', description: 'Evening prayers before closing.' }
            ],
            dressCode: 'Conservative attire. Heads should be covered during Darshan.',
            bestTime: 'May to June, September to October',
            weather: {
                summer: 'Cool & Pleasant (6°C to 20°C)',
                monsoon: 'Heavy rainfall, landslide prone',
                winter: 'Snowbound and inaccessible'
            },
            accessibility: {
                road: 'Reachable up to Janki Chatti',
                trek: '6 km steep trek from Janki Chatti',
                helicopter: false,
                pony: true,
                palki: true
            }
        },
        gangotri: {
            id: 'gangotri',
            name: 'Gangotri Dham',
            slug: 'gangotri-temple',
            deity: 'Goddess Ganga',
            altitude: '3,100 m (10,200 ft)',
            district: 'Uttarkashi',
            image: 'https://images.unsplash.com/photo-1624692735233-0302213e2f07?auto=format&fit=crop&q=80&w=800',
            description: 'The origin of the River Ganges (Gangotri Glacier is nearby at Gaumukh).',
            spiritualImportance: 'It is believed that Lord Shiva received the Ganges in his matted locks here to minimize the impact of her fall.',
            history: 'Built by the Gurkha General Amar Singh Thapa in the 18th century.',
            openingDate: 'Akshaya Tritiya (May 2026)',
            closingDate: 'Diwali (Nov 2026)',
            darshanTiming: {
                morning: '6:15 AM – 2:00 PM',
                evening: '3:00 PM – 9:30 PM',
                break: '2:00 PM – 3:00 PM'
            },
            aarti: [
                { name: 'Ganga Aarti', time: '7:00 PM', description: 'Mesmerizing evening ritual on the river banks.' }
            ],
            dressCode: 'Traditional/Modest clothing.',
            bestTime: 'April to June, September to November',
            weather: {
                summer: 'Pleasant during day, cold at night',
                monsoon: 'Moderate to heavy rain',
                winter: 'Freezing, temple closes'
            },
            accessibility: {
                road: 'Direct road connectivity to temple',
                trek: 'No trek required',
                helicopter: false,
                pony: false,
                palki: false
            }
        },
        kedarnath: {
            id: 'kedarnath',
            name: 'Kedarnath Dham',
            slug: 'kedarnath-temple',
            deity: 'Lord Shiva',
            altitude: '3,583 m (11,755 ft)',
            district: 'Rudraprayag',
            image: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1074&auto=format&fit=crop',
            description: 'One of the twelve Jyotirlingas, situated near the Mandakini river with a stunning backdrop of snow-clad peaks.',
            spiritualImportance: 'The Pandavas sought Lord Shiva here to absolve their sins from the Kurukshetra war.',
            history: 'Replica of the original temple built by Pandavas, restored by Adi Shankaracharya in the 8th century.',
            openingDate: 'Akshaya Tritiya (May 2026)',
            closingDate: 'Bhai Dooj (Nov 2026)',
            darshanTiming: {
                morning: '4:00 AM – 3:00 PM',
                evening: '5:00 PM – 9:00 PM',
                break: '3:00 PM – 5:00 PM'
            },
            aarti: [
                { name: 'Maha Abhishek', time: '4:00 AM', description: 'Requires early booking.' },
                { name: 'Shiva Aarti', time: '7:00 PM', description: 'Daily evening prayer.' }
            ],
            dressCode: 'Heavy woolens recommended due to cold.',
            bestTime: 'May to June, September to October',
            weather: {
                summer: 'Cool (5°C to 18°C)',
                monsoon: 'Risky, frequent landslides',
                winter: 'Harsh, temple inaccessible'
            },
            accessibility: {
                road: 'Reachable up to Gaurikund',
                trek: '16 km steep trek from Gaurikund',
                helicopter: true,
                pony: true,
                palki: true
            }
        },
        badrinath: {
            id: 'badrinath',
            name: 'Badrinath Dham',
            slug: 'badrinath-temple',
            deity: 'Lord Vishnu',
            altitude: '3,133 m (10,279 ft)',
            district: 'Chamoli',
            image: 'https://images.unsplash.com/photo-1589802773634-1923fa752243?auto=format&fit=crop&q=80&w=800',
            description: 'The most accessible of the four Dhams, located between Nar and Narayana mountain ranges.',
            spiritualImportance: 'It is said that Lord Vishnu meditated here in the form of a berry (Badri) tree.',
            history: 'Established by Adi Shankaracharya in the 9th century. The current structure was built by the Kings of Garhwal.',
            openingDate: 'May 2026',
            closingDate: 'Vijaya Dashami (Oct 2026)',
            darshanTiming: {
                morning: '4:30 AM – 1:00 PM',
                evening: '4:00 PM – 9:00 PM',
                break: '1:00 PM – 4:00 PM'
            },
            aarti: [
                { name: 'Vishnu Sahasranama', time: '6:00 PM', description: 'Chanting of 1000 names of Vishnu.' }
            ],
            dressCode: 'Modest attire.',
            bestTime: 'May to June, September to October',
            weather: {
                summer: 'Pleasant (7°C to 18°C)',
                monsoon: 'Rainy',
                winter: 'Snowbound'
            },
            accessibility: {
                road: 'Direct road access',
                trek: 'No trek required',
                helicopter: true,
                pony: false,
                palki: false
            }
        }
    },
    routes: [
        {
            from: 'Haridwar',
            to: 'Barkot/Janki Chatti',
            distanceKm: 210,
            timeHours: '7-8 Hours',
            roadCondition: 'Good',
            description: 'The gateway to Yamunotri. Roads are generally wide but curvy.',
            stops: [{ name: 'Mussoorie', type: 'Viewpoint' }, { name: 'Kempty Falls', type: 'Viewpoint' }]
        },
        {
            from: 'Barkot',
            to: 'Uttarkashi',
            distanceKm: 82,
            timeHours: '3-4 Hours',
            roadCondition: 'Fair',
            description: 'A scenic drive along the Yamuna river.',
            stops: [{ name: 'Prakateshwar Cave', type: 'Viewpoint' }]
        },
        {
            from: 'Uttarkashi',
            to: 'Guptkashi',
            distanceKm: 200,
            timeHours: '8-9 Hours',
            roadCondition: 'Challenging',
            description: 'Long drive connecting Gangotri valley to Kedarnath preparation base. Traffic can be high.',
            stops: [{ name: 'Tehri Dam', type: 'Viewpoint' }]
        },
        {
            from: 'Guptkashi',
            to: 'Badrinath',
            distanceKm: 185,
            timeHours: '7-8 Hours',
            roadCondition: 'Landslide Prone',
            description: 'The final leg. Roads near Joshimath can be tricky.',
            stops: [{ name: 'Joshimath', type: 'Town' }]
        }
    ],
    safetyTips: [
        {
            title: 'Acclimatization is Real',
            description: 'Do not rush. The altitude gain from Haridwar (300m) to Kedarnath (3500m) is massive. Take breaks.',
            category: 'Medical',
            severity: 'Critical'
        },
        {
            title: 'Medical Fitness Certificate',
            description: 'Mandatory for all pilgrims. Get checked for heart, respiratory, and BP issues before registration.',
            category: 'Logistics',
            severity: 'Warning'
        },
        {
            title: 'Rain Gear',
            description: 'Mountain weather is unpredictable. Always carry a poncho (umbrellas are useless in wind).',
            category: 'Gear',
            severity: 'Info'
        }
    ],
    packages: [
        {
            title: 'Char Dham by Helicopter',
            duration: '5 Nights / 6 Days',
            price: '₹1,95,000 per person',
            features: ['VIP Darshan', 'Luxury Stay', 'All Meals', 'Helicopter Transfers'],
            type: 'Helicopter',
            link: '/package/char-dham-helicopter'
        },
        {
            title: 'Char Dham by Road (Premium)',
            duration: '9 Nights / 10 Days',
            price: '₹45,000 per person',
            features: ['Innova Crysta', '3/4 Star Hotels', 'Breakfast & Dinner', 'Guide'],
            type: 'Luxury',
            link: '/package/char-dham-luxury-road'
        },
        {
            title: 'Char Dham Deluxe Group',
            duration: '10 Nights / 11 Days',
            price: '₹28,500 per person',
            features: ['Tempo Traveller', 'Deluxe Hotels', 'Vegetarian Meals', 'Tour Manager'],
            type: 'Budget',
            link: '/package/char-dham-group'
        }
    ],
    faqs: [
        {
            question: 'Is Char Dham Yatra safe for seniors?',
            answer: 'Yes, but with precautions. Helicopter packages are recommended for seniors over 60 to avoid the arduous trek to Kedarnath and Yamunotri. Medical clearance is mandatory.',
            category: 'Medical'
        },
        {
            question: 'When does registration start for 2026?',
            answer: 'Registration typically opens 1-2 months before the Yatra begins (around March/April 2026). It is mandatory and free on the Uttarakhand government portal.',
            category: 'Registration'
        },
        {
            question: 'Can I do Char Dham in 5 days?',
            answer: 'Only by helicopter. By road, it takes minimum 9-10 days due to travel distances and hill driving restrictions (no driving at night).',
            category: 'Travel'
        }
    ]
};
