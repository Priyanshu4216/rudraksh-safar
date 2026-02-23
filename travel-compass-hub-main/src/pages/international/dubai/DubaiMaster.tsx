import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const dubaiData: DestinationData = {
    id: 'dubai-master',
    title: 'Dubai Tour Packages',
    subtitle: 'The City of Gold | Future & Tradition',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea90b7cadc9?q=80&w=2074',
    overview: `Dubai is where the impossible becomes reality. From the world's tallest building, the Burj Khalifa, to the man-made Palm Jumeirah and the vast Arabian Desert, Dubai offers a luxury experience like no other. Whether you want to shop at the Dubai Mall, enjoy a Dhow Cruise Dinner, or experience the thrill of a Desert Safari, Rudraksh Safar ensures a premium, hassle-free vacation with visa assistance included.`,
    highlights: [
        'Burj Khalifa (124th & 125th Floor)',
        'Desert Safari with BBQ Dinner & Belly Dance',
        'Marina Dhow Cruise Dinner',
        'Dubai Mall & Fountain Show',
        'Miracle Garden & Global Village',
        'Abu Dhabi City Tour (Sheikh Zayed Mosque)'
    ],
    urgencyLabel: 'Free Visa for Kids (Summer Special)',
    trust: {
        title: 'Dubai Travel Made Easy',
        points: [
            { icon: 'visa', label: 'Express Visa Service', desc: 'Get your Dubai Visa in just 2-3 working days.' },
            { icon: 'hotel', label: 'Centrally Located Hotels', desc: 'Stay near Metro stations or Bur Dubai for easy access.' },
            { icon: 'car', label: 'Private Airport Transfers', desc: 'No waiting for taxis. Our driver meets you at arrival.' },
            { icon: 'sim', label: 'Local Support', desc: '24/7 assistance from our Dubai office.' }
        ]
    },
    packages: [
        {
            id: 'dubai-shopping',
            title: 'Dubai Shopping Festival Special',
            duration: '5 Days / 4 Nights',
            price: '₹28,999',
            image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2069',
            link: '/international-tours/dubai-from-raipur', // Linking to existing page
            tag: 'Shopping'
        },
        {
            id: 'dubai-family',
            title: 'Dubai & Abu Dhabi Family Combo',
            duration: '6 Days / 5 Nights',
            price: '₹34,500',
            image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2069',
            link: '/international-packages',
            tag: 'Family'
        }
    ],
    attractions: [
        {
            title: 'Burj Khalifa',
            description: 'The tallest building in the world. The view from the top is breathtaking.',
            image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Desert Safari',
            description: 'Dune bushing in 4x4 Land Cruisers followed by a traditional BBQ dinner camp.',
            image: 'https://images.unsplash.com/photo-1451290337066-274500550c66?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Palm Jumeirah',
            description: 'The iconic palm-shaped island. Home to Atlantis The Palm and Aquaventure Waterpark.',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea90b7cadc9?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Museum of the Future',
            description: 'A new architectural marvel exploring the future of science and technology.',
            image: 'https://images.unsplash.com/photo-1653144820612-9c1775798939?q=80&w=600&h=400&fit=crop'
        }
    ],
    bestTime: {
        text: 'Dubai is a desert city. The best time to visit is during the winter months.',
        seasons: [
            {
                label: 'Winter (Perfect)',
                months: 'Nov - March',
                description: 'Pleasant weather (20°C - 30°C). Best for outdoor activities.'
            },
            {
                label: 'Shoulder',
                months: 'April & Oct',
                description: 'Getting warmer but still manageable. Good hotel deals.'
            },
            {
                label: 'Summer (Hot)',
                months: 'May - Sept',
                description: 'Very hot (40°C+). Best for indoor malls and waterparks.'
            }
        ]
    },
    faqs: [
        {
            question: 'How long does it take to get a Dubai Visa?',
            answer: 'For Indian citizens with a valid passport, the E-Visa process takes 2-4 working days. We handle the entire application for you.'
        },
        {
            question: 'Is alcohol allowed in Dubai?',
            answer: 'Yes, alcohol is served in licensed hotels, bars, and clubs. However, drinking in public places is strictly prohibited.'
        },
        {
            question: 'What currency should I carry?',
            answer: 'The currency is UAE Dirham (AED). You can carry US Dollars from India and convert them in Dubai for better rates.'
        },
        {
            question: 'Is vegetarian food available?',
            answer: 'Yes, Bur Dubai and Karama areas are full of Indian restaurants serving authentic North and South Indian vegetarian food.'
        }
    ],
    meta: {
        title: 'Dubai Tour Packages 2026 | Burj Khalifa & Desert Safari Trip from Raipur',
        description: 'Premium Dubai Tour Packages from Bhilai & Raipur. Visa included. Visit Burj Khalifa, Palm Jumeirah, Abu Dhabi. 4-Star Hotels & Indian Meals.',
        keywords: 'dubai tour packages, dubai visa for indians, dubai trip cost from raipur, dubai honeymoon package, burj khalifa tickets'
    }
};

const DubaiMaster = () => {
    return <DestinationMasterTemplate data={dubaiData} />;
};

export default DubaiMaster;
