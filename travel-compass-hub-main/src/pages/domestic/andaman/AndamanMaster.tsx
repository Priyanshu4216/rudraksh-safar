import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const andamanData: DestinationData = {
    id: 'andaman-master',
    title: 'Andaman Tour Packages',
    subtitle: 'Emerald Isles | Beaches, History & Coral Reefs',
    heroImage: 'https://images.unsplash.com/photo-1589979481223-deb8d20d7e67?q=80&w=2048',
    overview: `The Andaman & Nicobar Islands are India's own tropical paradise. Known for the pristine Radhanagar Beach (Asia's Best), the historic Cellular Jail, and crystal-clear waters perfect for Scuba Diving. Rudraksh Safar offers seamless Andaman packages including ferries, permits, and 4-star beach resorts. Ideal for honeymooners and families.`,
    highlights: [
        'Cellular Jail Light & Sound Show (Port Blair)',
        'Havelock Island (Radhanagar Beach)',
        'Scuba Diving at Elephant Beach',
        'Neil Island (Natural Bridge)',
        'Baratang Island (Limestone Caves)',
        'Ross Island (British Ruins)'
    ],
    urgencyLabel: 'Ferry Tickets Selling Fast',
    trust: {
        title: 'Andaman Expert Service',
        points: [
            { icon: 'ship', label: 'Private Ferry Booking', desc: 'Confirmed tickets for Makruzz/Nautika. No standing in long lines.' },
            { icon: 'hotel', label: 'Beachside Resorts', desc: 'Stay near the beach in Havelock and Neil Island.' },
            { icon: 'car', label: 'All Transfers Included', desc: 'Airport to Jetty to Hotel. We handle all logistics.' },
            { icon: 'support', label: 'Local Team', desc: 'Our team in Port Blair receives you at the airport.' }
        ]
    },
    packages: [
        {
            id: 'andaman-honeymoon',
            title: 'Romantic Andaman Honeymoon',
            duration: '6 Days / 5 Nights',
            price: '₹55,000',
            image: 'https://images.unsplash.com/photo-1544979147-380af623910c?q=80&w=2070',
            link: '/andaman-tour-package-from-bhilai', // Linking to existing page
            tag: 'Honeymoon'
        },
        {
            id: 'andaman-family',
            title: 'Andaman Family Escape',
            duration: '5 Days / 4 Nights',
            price: '₹42,000',
            image: 'https://images.unsplash.com/photo-1596708681997-8739d48b1111?q=80&w=2070',
            link: '/domestic-tours',
            tag: 'Family'
        }
    ],
    attractions: [
        {
            title: 'Radhanagar Beach',
            description: 'Voted Asia\'s Best Beach by Time Magazine. White sand and turquoise water.',
            image: 'https://images.unsplash.com/photo-1589979481223-deb8d20d7e67?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Cellular Jail',
            description: 'Kala Pani. A reminder of India\'s freedom struggle. The light and sound show is moving.',
            image: 'https://images.unsplash.com/photo-1629813295831-29080c5c37bf?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Elephant Beach',
            description: 'The hub for water sports. Snorkeling, Sea Walk, and Jet Skiing happen here.',
            image: 'https://images.unsplash.com/photo-1544979147-380af623910c?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Natural Bridge (Neil)',
            description: 'A natural rock formation on Neil Island. Best visited during low tide.',
            image: 'https://images.unsplash.com/photo-1622306354890-a7d083437973?q=80&w=600&h=400&fit=crop'
        }
    ],
    bestTime: {
        text: 'Andaman is a tropical destination. Avoid the monsoon season for ferry safety.',
        seasons: [
            {
                label: 'Oct - March (Best)',
                months: 'Oct - Mar',
                description: 'Excellent weather. Calm seas. Best for diving.'
            },
            {
                label: 'April - June',
                months: 'Apr - Jun',
                description: 'Summer. Good for swimming but can get humid.'
            },
            {
                label: 'Monsoon',
                months: 'July - Sept',
                description: 'Heavy rains. Ferries often get cancelled. Avoid if possible.'
            }
        ]
    },
    faqs: [
        {
            question: 'Do we need a passport?',
            answer: 'No! Andaman is part of India. A valid ID proof (Aadhaar/Voter ID) is sufficient for Indians.'
        },
        {
            question: 'Is mobile network available?',
            answer: 'BSNL and Airtel work best in Port Blair. Havelock and Neil have weak connectivity. Jio is improving.'
        },
        {
            question: 'Is it safe for swimming?',
            answer: 'Yes, but only in designated areas. Radhanagar and Elephant Beach are very safe with lifeguards.'
        },
        {
            question: 'How do we reach?',
            answer: 'Fly to Port Blair (IXZ). Direct flights available from Kolkata and Chennai.'
        }
    ],
    meta: {
        title: 'Andaman Tour Packages 2026 | Havelock & Neil Island from Raipur',
        description: 'Premium Andaman Tour Packages from Bhilai & Raipur. Scuba Diving, Private Ferry, Beachside Resorts. Visit Cellular Jail & Radhanagar Beach.',
        keywords: 'andaman tour package from bhilai, cellular jail tickets, havelock island resorts, andaman honeymoon package cost, scuba diving price in andaman'
    }
};

const AndamanMaster = () => {
    return <DestinationMasterTemplate data={andamanData} />;
};

export default AndamanMaster;
