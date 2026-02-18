import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const keralaData: DestinationData = {
    id: 'kerala-master',
    title: 'Kerala Tour Packages',
    subtitle: 'God\'s Own Country | Backwaters & Hill Stations',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070',
    overview: `Kerala is a tropical paradise that captivates you with its serene backwaters, mist-covered hill stations, and pristine beaches. From the tea gardens of Munnar to the houseboat cruises in Alleppey, every moment here is a postcard. Rudraksh Safar offers premium Kerala packages with 4-star stays, private houseboats, and reliable local transport. Perfect for honeymooners and families seeking relaxation.`,
    highlights: [
        'Private Houseboat Cruise in Alleppey',
        'Tea Gardens & Eravikulam Park in Munnar',
        'Wildlife Safari in Thekkady (Periyar)',
        'Varkala & Kovalam Beaches',
        'Kathakali Cultural Show',
        'Jatayu Earth Center (World\'s Largest Bird Sculpture)'
    ],
    urgencyLabel: 'Book Early for Houseboats',
    trust: {
        title: 'Why Travel Kerala with Us?',
        points: [
            { icon: 'houseboat', label: 'Premium Houseboats', desc: 'We only book AC Deluxe/Premium boats. No compromise on hygiene.' },
            { icon: 'driver', label: 'English/Hindi Speaking Driver', desc: 'Friendly local drivers who act as your guide.' },
            { icon: 'hotel', label: 'Verified 4-Star Hotels', desc: 'Handpicked resorts with the best views in Munnar.' },
            { icon: 'support', label: '24/7 On-Trip Support', desc: 'Instant assistance throughout your journey.' }
        ]
    },
    packages: [
        {
            id: 'kerala-honeymoon',
            title: 'Kerala Honeymoon Delight',
            duration: '6 Days / 5 Nights',
            price: '₹22,500',
            image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069',
            link: '/kerala-tour-package-from-bhilai', // Linking to existing page
            tag: 'Honeymoon'
        },
        {
            id: 'kerala-family',
            title: 'Best of Kerala Family Trip',
            duration: '7 Days / 6 Nights',
            price: '₹26,999',
            image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070',
            link: '/domestic-packages',
            tag: 'Family'
        }
    ],
    attractions: [
        {
            title: 'Alleppey Backwaters',
            description: 'The Venice of the East. Cruising on a houseboat here is a bucket-list experience.',
            image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Munnar',
            description: 'Endless rolling hills covered in tea plantations. The most romantic hill station in South India.',
            image: 'https://images.unsplash.com/photo-1596324276709-1a766c6ba69a?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Thekkady',
            description: 'Home to Periyar National Park. Famous for boat safaris and spice plantations.',
            image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Varkala Cliff',
            description: 'A stunning beach where cliffs merge into the Arabian Sea. Great for sunsets and cafes.',
            image: 'https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?q=80&w=600&h=400&fit=crop'
        }
    ],
    bestTime: {
        text: 'Kerala is great to visit year-round, but distinct seasons offer different experiences.',
        seasons: [
            {
                label: 'Winter (Peak)',
                months: 'Sep - March',
                description: 'Pleasant weather, low humidity. Perfect for houseboats and sightseeing.'
            },
            {
                label: 'Summer (Hill Stations)',
                months: 'April - May',
                description: 'Munnar & Thekkady remain cool. Good for family vacations.'
            },
            {
                label: 'Monsoon (Ayurveda)',
                months: 'June - Aug',
                description: 'Heavy rains. Best time for Ayurveda treatments and lush greenery.'
            }
        ]
    },
    faqs: [
        {
            question: 'How to reach Kerala from Bhilai/Raipur?',
            answer: 'The best way is to fly from Raipur (RPR) to Kochi (COK). Flights usually have a layover in Hyderabad/Bangalore/Indore. Trains take 30+ hours.'
        },
        {
            question: 'Is houseboat stay safe?',
            answer: 'Yes, absolutely. We partner with licensed houseboats that have safety equipment and trained staff. We recommend AC houseboats for comfort.'
        },
        {
            question: 'Is vegetarian food available easily?',
            answer: 'Yes, while Kerala is famous for seafood, all hotels and houseboats serve delicious North Indian and South Indian vegetarian food.'
        },
        {
            question: 'Can we customize the itinerary?',
            answer: 'Yes! We can add extra days in Munnar or include a beach stay in Kovalam/Varkala as per your preference.'
        }
    ],
    meta: {
        title: 'Kerala Tour Packages 2026 | Houseboat & Munnar Trip from Raipur',
        description: 'Premium Kerala Tour Packages from Bhilai & Raipur. 4-Star Hotels, Private Houseboat, and AC Car. Custom honeymoon & family itineraries. Book Now.',
        keywords: 'kerala tour packages, munnar honeymoon package, alleppey houseboat cost, kerala trip from raipur, kerala family tour'
    }
};

const KeralaMaster = () => {
    return <DestinationMasterTemplate data={keralaData} />;
};

export default KeralaMaster;
