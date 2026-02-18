import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const kashmirData: DestinationData = {
    id: 'kashmir-master',
    title: 'Kashmir Tour Packages',
    subtitle: 'Paradise on Earth | 2026 Season Open',
    heroImage: 'https://images.unsplash.com/photo-1566324814882-62cebb6330ce?q=80&w=2070',
    overview: `Kashmir is more than a destination; it's a poetry written in snow, saffron, and shikaras. Known as "Paradise on Earth," this valley offers experiences that linger in your soul forever. From the houseboats of Dal Lake to the meadows of Pahalgam and the snowy slopes of Gulmarg, every corner is picture-perfect. Whether you are on a honeymoon, a family vacation, or looking for adventure, Rudraksh Safar curates the perfect Kashmiri experience for you.`,
    highlights: [
        'Shikara Ride on Dal Lake (Srinagar)',
        'Gondola Ride in Gulmarg (World\'s Highest)',
        'Stay in Luxury Houseboats',
        'Betaab Valley & Aru Valley in Pahalgam',
        'Mughal Gardens: Nishat, Shalimar, Chashme Shahi',
        'Thajiwas Glacier in Sonmarg'
    ],
    packages: [
        {
            id: 'kashmir-honeymoon',
            title: 'Kashmir Honeymoon Special',
            duration: '6 Days / 5 Nights',
            price: '₹24,500',
            image: 'https://images.unsplash.com/photo-1623150630807-74220b33c0bd?q=80&w=2070',
            link: '/kashmir-tour-package-from-bhilai', // Linking to pillar for now
            tag: 'Honeymoon'
        },
        {
            id: 'kashmir-family',
            title: 'Family Delight in Paradise',
            duration: '7 Days / 6 Nights',
            price: '₹21,999',
            image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070',
            link: '/kashmir-tour-package-from-bhilai',
            tag: 'Family'
        },
        {
            id: 'kashmir-adventure',
            title: 'Kashmir & Ladakh Combo',
            duration: '10 Days / 9 Nights',
            price: '₹38,000',
            image: 'https://images.unsplash.com/photo-1580136608079-72029d0de130?q=80&w=2070',
            link: '/ladakh-tour-via-srinagar',
            tag: 'Adventure'
        }
    ],
    attractions: [
        {
            title: 'Gulmarg',
            description: 'The meadow of flowers, famous for its Gondola ride and skiing slopes.',
            image: 'https://images.unsplash.com/photo-1562602737-089906660fb4?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Pahalgam',
            description: 'Valley of Shepherds, serving as the base for Amarnath Yatra.',
            image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Dal Lake',
            description: 'The jewel of Srinagar. Staying in a houseboat here is an experience of a lifetime.',
            image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Sonmarg',
            description: 'Meadow of Gold. The gateway to Ladakh and home to Thajiwas Glacier.',
            image: 'https://images.unsplash.com/photo-1518176587399-6e382b6b558c?q=80&w=600&h=400&fit=crop'
        }
    ],
    bestTime: {
        text: 'Kashmir is a year-round destination. Each season offers a different charm.',
        seasons: [
            {
                label: 'Spring (Tulip Season)',
                months: 'March - April',
                description: 'Tulip Garden opens. Pleasant weather, flowers in full bloom.'
            },
            {
                label: 'Summer (Peak)',
                months: 'May - August',
                description: 'Green meadows, perfect for sightseeing and Amarnath Yatra.'
            },
            {
                label: 'Winter (Snow)',
                months: 'Nov - Feb',
                description: 'Snowfall in Gulmarg/Pahalgam. Best for skiing and snow activities.'
            }
        ]
    },
    faqs: [
        {
            question: 'Is Kashmir safe for tourists?',
            answer: 'Yes, Kashmir is very safe for tourists. Tourism is the backbone of the economy, and locals are extremely hospitable. We ensure verified drivers and hotels for your safety.'
        },
        {
            question: 'Which is better: Houseboat or Hotel?',
            answer: 'We recommend 1 night in a Houseboat for the experience and the rest in hotels for better amenities and comfort.'
        },
        {
            question: 'Do prepaid SIM cards work in Kashmir?',
            answer: 'No, only Postpaid connections (Jio, Airtel, BSNL) work in J&K. Please convert your SIM to postpaid before traveling.'
        },
        {
            question: 'What clothes should I pack?',
            answer: 'For summer, light woolens are enough for evenings. For winter (Nov-Mar), heavy jackets, thermals, and snow boots are mandatory.'
        }
    ],
    meta: {
        title: 'Kashmir Tour Packages 2026 | Honeymoon & Family Trips',
        description: 'Book premium Kashmir Tour Packages. Stay in Houseboats, visit Gulmarg & Pahalgam. Best rates for families and couples. 100% Safe & Secure.',
        keywords: 'kashmir tour packages, srinagar honeymoon package, gulmarg ski trip, kashmir family tour, vaishno devi kashmir package'
    }
};

const KashmirMaster = () => {
    return <DestinationMasterTemplate data={kashmirData} />;
};

export default KashmirMaster;
