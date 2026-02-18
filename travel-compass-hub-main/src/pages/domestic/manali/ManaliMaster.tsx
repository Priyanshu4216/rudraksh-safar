import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const manaliData: DestinationData = {
    id: 'manali-master',
    title: 'Manali Tour Packages',
    subtitle: 'Valley of Gods | Adventure & Serenity',
    heroImage: 'https://images.unsplash.com/photo-1626621341476-3b37d7a9693c?q=80&w=2067',
    overview: `Manali is India's favorite hill station for a reason. Nestled in the Beas River Valley, it offers a perfect blend of peace and adrenaline. Whether you want to drive through the Atal Tunnel to Sissu, paraglide in Solang Valley, or seek blessings at Hadimba Temple, Manali has it all. It is also the gateway to Lahaul, Spiti, and Leh. Rudraksh Safar ensures a premium experience with the best hotels and reliable transport.`,
    highlights: [
        'Snow Points: Solang Valley & Rohtang Pass',
        'Atal Tunnel (World\'s Longest Highway Tunnel)',
        'Hadimba Devi Temple (Pagoda Style)',
        'Vashisht Hot Water Springs',
        'Old Manali Cafe Culture',
        'River Rafting in Kullu'
    ],
    packages: [
        {
            id: 'manali-honeymoon',
            title: 'Manali Honeymoon Special',
            duration: '5 Days / 4 Nights',
            price: '₹14,999',
            image: 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=2070',
            link: '/manali-tour-package-from-bhilai', // Linking to existing page for now
            tag: 'Honeymoon'
        },
        {
            id: 'manali-family',
            title: 'Shimla-Manali Family Combo',
            duration: '7 Days / 6 Nights',
            price: '₹22,500',
            image: 'https://images.unsplash.com/photo-1562649043-4876d1a5812a?q=80&w=2070',
            link: '/domestic-packages',
            tag: 'Bestseller'
        },
        {
            id: 'spiti-adventure',
            title: 'Manali to Spiti Valley',
            duration: '8 Days / 7 Nights',
            price: '₹28,000',
            image: 'https://images.unsplash.com/photo-1504706562085-f2d1e90be513?q=80&w=2070',
            link: '/spiti-valley-tour-package',
            tag: 'Adventure'
        }
    ],
    attractions: [
        {
            title: 'Solang Valley',
            description: 'The adventure capital. Famous for paragliding, zorbing, and winter skiing.',
            image: 'https://images.unsplash.com/photo-1589314486665-276c2438847c?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Rohtang Pass',
            description: 'The snow point at 13,050 ft. Requires a special permit (we arrange it).',
            image: 'https://images.unsplash.com/photo-1605649487215-285f33836d5e?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Atal Tunnel',
            description: 'An engineering marvel connecting Manali to Lahaul Valley.',
            image: 'https://images.unsplash.com/photo-1629853372986-7788448ac62c?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Hadimba Temple',
            description: 'Ancient wooden temple dedicated to Hadimba Devi, surrounded by cedar forests.',
            image: 'https://images.unsplash.com/photo-1620630739999-5285741f2219?q=80&w=600&h=400&fit=crop'
        }
    ],
    bestTime: {
        text: 'Manali is a year-round destination, but the experience changes with seasons.',
        seasons: [
            {
                label: 'Summer (Escape Heat)',
                months: 'April - June',
                description: 'Pleasant weather (10°C - 25°C). Ideal for families and trekking.'
            },
            {
                label: 'Monsoon (Lush Green)',
                months: 'July - Sept',
                description: 'Heavy rains but beautiful scenery. Landslides possible.'
            },
            {
                label: 'Winter (Snow)',
                months: 'Oct - March',
                description: 'Snowfall in Manali town (Jan/Feb). Perfect for snow lovers.'
            }
        ]
    },
    faqs: [
        {
            question: 'Is Rohtang Pass open all year?',
            answer: 'No, Rohtang Pass is closed on Tuesdays for maintenance and completely closed in winter (Nov-May) due to heavy snow. Atal Tunnel remains open mostly.'
        },
        {
            question: 'How do we reach Manali from Bhilai/Raipur?',
            answer: 'Take a train to Delhi or Chandigarh. From there, we provide a comfortable Volvo Bus or Private Cab to Manali (12-14 hours).'
        },
        {
            question: 'Is it safe for couples?',
            answer: 'Yes, Manali is one of the safest destinations. We book premium hotels in Old Manali or near the Mall Road for privacy and safety.'
        },
        {
            question: 'Do we need warm clothes in June?',
            answer: 'Yes, light woolens are recommended for nights and for visiting high-altitude points like Rohtang Pass.'
        }
    ],
    meta: {
        title: 'Manali Tour Packages 2026 | Honeymoon & Family Trips from Raipur',
        description: 'Best Manali Tour Packages. Visit Solang Valley, Atal Tunnel, and Rohtang Pass. Volvo packages from Delhi/Chandigarh available. 24/7 Support.',
        keywords: 'manali tour packages, shimla manali trip, kullu manali honeymoon package, manali tour cost, manali trip from raipur'
    }
};

const ManaliMaster = () => {
    return <DestinationMasterTemplate data={manaliData} />;
};

export default ManaliMaster;
