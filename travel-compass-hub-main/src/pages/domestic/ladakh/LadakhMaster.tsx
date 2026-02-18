import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const ladakhData: DestinationData = {
    id: 'ladakh-master',
    title: 'Ladakh Tour Packages',
    subtitle: 'The Land of High Passes | 2026 Expeditions Open',
    heroImage: '/images/ladakh/ladakh-img-12.jpeg',
    overview: `Ladakh isn't just a destination; it's a feeling. Often called "Little Tibet," this high-altitude desert offers landscapes that seem to belong to another planet. From the azure waters of Pangong Tso to the white sands of Nubra Valley, every turn in Ladakh leaves you breathless—literally and metaphorically. Whether you choose the adventurous Manali-Leh highway or the scenic Srinagar-Leh route, Rudraksh Safar ensures a safe, premium, and unforgettable expedition.`,
    highlights: [
        'Conquer Khardung La (World\'s Highest Motorable Pass)',
        'Camping at Pangong Lake (Colors changing lake)',
        'Double Hump Camel Safari in Nubra Valley',
        'Magnetic Hill & Pathar Sahib Gurudwara',
        'Monasteries: Thiksey, Hemis, Diskit',
        'River Rafting in Sangam (Indus & Zanskar)'
    ],
    urgencyLabel: 'Limited 2026 Batches Open',
    trust: {
        title: 'Why Choose Rudraksh Safar?',
        points: [
            { icon: 'oxygen', label: 'Oxygen Cylinders', desc: 'Every vehicle carries portable oxygen for emergencies.' },
            { icon: 'backup', label: 'Backup Vehicle', desc: 'Immediate replacement in case of mechanical failure.' },
            { icon: 'guide', label: 'Local Ladakhi Guides', desc: 'Deep knowledge of culture, roads, and hidden gems.' },
            { icon: 'support', label: '24/7 Ground Support', desc: 'Our Leh office team is always one call away.' },
            { icon: 'permit', label: 'Hassle-Free Permits', desc: 'We handle all ILP and PAP paperwork for you.' }
        ]
    },
    packages: [
        {
            id: 'ladakh-bike',
            title: 'Ultimate Ladakh Bike Expedition',
            duration: '10 Days / 9 Nights',
            price: '₹35,500',
            image: '/images/ladakh/ladakh-img-1.jpeg',
            link: '/ladakh-bike-trip-packages',
            tag: 'Adventure'
        },
        {
            id: 'ladakh-family',
            title: 'Ladakh Family Flight Package',
            duration: '6 Days / 5 Nights',
            price: '₹28,999',
            image: '/images/ladakh/ladakh-img-11.jpeg',
            link: '/ladakh-tour-packages-from-delhi', // Linking to existing pillar for now
            tag: 'Family'
        },
        {
            id: 'ladakh-full-circuit',
            title: 'Manali-Leh-Srinagar Circuit',
            duration: '12 Days / 11 Nights',
            price: '₹42,000',
            image: '/images/ladakh/ladakh-img-16.jpeg',
            link: '/ladakh-ultimate-expedition',
            tag: 'Bestseller'
        }
    ],
    attractions: [
        {
            title: 'Pangong Lake',
            description: 'The world-famous color-changing lake. A night camp here is mandatory for stargazing.',
            image: '/images/ladakh/ladakh-img-4.jpeg'
        },
        {
            title: 'Nubra Valley',
            description: 'A high-altitude cold desert with white sand dunes and Bactrian camels.',
            image: '/images/ladakh/ladakh-img-5.jpeg'
        },
        {
            title: 'Umling La Pass',
            description: 'Higher than Khardung La. The new challenge for bikers at 19,300 ft.',
            image: '/images/ladakh/ladakh-img-6.jpeg'
        },
        {
            title: 'Shanti Stupa',
            description: 'A white-domed Buddhist stupa on a hilltop in Chanspa, Leh district.',
            image: '/images/ladakh/ladakh-img-7.jpeg'
        }
    ],
    bestTime: {
        text: 'The best time to visit Ladakh is from May to September when the roads are open and weather is pleasant.',
        seasons: [
            {
                label: 'Peak Season',
                months: 'June - Aug',
                description: 'Perfect weather, all roads open. Best for biking and family trips.'
            },
            {
                label: 'Shoulder Season',
                months: 'May & Sept',
                description: 'Less crowd, snow walls in May. September offers golden autumn views.'
            },
            {
                label: 'Winter (Flights Only)',
                months: 'Oct - April',
                description: 'Extreme cold. Only specifically for Chadar Trek or Snow Leopard spotting.'
            }
        ]
    },
    faqs: [
        {
            question: 'Do I need a permit for Ladakh?',
            answer: 'Yes, an Inner Line Permit (ILP) is required for Indian nationals to visit protected areas like Nubra, Pangong, and Hanle. Foreigners need a Protected Area Permit (PAP). We arrange these for you.'
        },
        {
            question: 'Is it safe for children and seniors?',
            answer: 'Yes, provided you take a flight to Leh and give at least 2 days for acclimatization. We recommend carrying oxygen cylinders, which we provide in our vehicles.'
        },
        {
            question: 'Which is better: Manali Route or Srinagar Route?',
            answer: 'Srinagar route helps in better acclimatization as the ascent is gradual. Manali route is more adventurous but involves rapid altitude gain.'
        },
        {
            question: 'What is the mobile network status in Ladakh?',
            answer: 'Only Postpaid connections work in Ladakh. BSNL has the widest coverage, followed by Airtel and Jio in Leh city.'
        }
    ],
    meta: {
        title: 'Ladakh Tour Packages 2026 | Best Itinerary & Cost from Delhi/Mumbai',
        description: 'Book premium Ladakh Tour Packages. Expert-led road trips via Manali & Srinagar. Custom itineraries for families, bikers & groups. 100% Safe & Secure.',
        keywords: 'ladakh tour packages, leh ladakh trip, ladakh bike trip, ladakh family package, ladakh tour cost'
    }
};

const LadakhMaster = () => {
    return <DestinationMasterTemplate data={ladakhData} />;
};

export default LadakhMaster;
