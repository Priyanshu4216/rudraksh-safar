import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const singaporeData: DestinationData = {
    id: 'singapore-master',
    title: 'Singapore Tour Packages',
    subtitle: 'The Lion City | Future Meets Nature',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052',
    overview: `Singapore is the ultimate modern destination for families and couples. It’s a city where nature blends seamlessly with futuristic architecture. From the cloud forests of Gardens by the Bay to the movie magic of Universal Studios and the luxury of Marina Bay Sands, Singapore offers a seamless, premium travel experience. Rudraksh Safar provides all-inclusive packages with visa assistance and Indian meals.`,
    highlights: [
        'Universal Studios Singapore (Sentosa)',
        'Gardens by the Bay (Cloud Forest & Flower Dome)',
        'Marina Bay Sands Skypark Observation Deck',
        'Sentosa Island Cable Car Ride',
        'Night Safari (World\'s First)',
        'Spectra Light & Water Show'
    ],
    urgencyLabel: 'Visa Process Takes 5 Days',
    trust: {
        title: 'Singapore Travel Assurance',
        points: [
            { icon: 'visa', label: 'Paper Visa Assistance', desc: 'We handle the complete Singapore Consulate Visa process.' },
            { icon: 'ticket', label: 'Pre-Booked Attractions', desc: 'Skip the lines at Universal Studios & Cloud Forest.' },
            { icon: 'food', label: 'Indian Food Galore', desc: 'Little India has the best South & North Indian food abroad.' },
            { icon: 'car', label: 'Private Transfers', desc: 'Comfortable AC transfers from Changi Airport.' }
        ]
    },
    packages: [
        {
            id: 'singapore-family',
            title: 'Singapore Family Fun',
            duration: '5 Days / 4 Nights',
            price: '₹42,000',
            image: 'https://images.unsplash.com/photo-1574227492706-f6cac3634c71?q=80&w=2069',
            link: '/international-tours/singapore-from-bhilai', // Linking to existing page
            tag: 'Bestseller'
        },
        {
            id: 'singapore-cruise',
            title: 'Singapore + Royal Caribbean Cruise',
            duration: '7 Days / 6 Nights',
            price: '₹65,000',
            image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2064',
            link: '/international-packages',
            tag: 'Luxury'
        }
    ],
    attractions: [
        {
            title: 'Marina Bay Sands',
            description: 'The iconic boat-shaped hotel with the world\'s largest rooftop infinity pool.',
            image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Gardens by the Bay',
            description: 'Supertrees and indoor waterfalls. A futuristic park that feels like another planet.',
            image: 'https://images.unsplash.com/photo-1463130456064-f6df28876c12?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Universal Studios',
            description: 'Southeast Asia\'s only Universal Studios theme park. Transformers ride is a must!',
            image: 'https://images.unsplash.com/photo-1574227492706-f6cac3634c71?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Merlion Park',
            description: 'The official mascot of Singapore. The best spot for a selfie with the city skyline.',
            image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=600&h=400&fit=crop'
        }
    ],
    bestTime: {
        text: 'Singapore is hot and humid year-round, so pack light cotton clothes.',
        seasons: [
            {
                label: 'Feb - April (Driest)',
                months: 'Feb - Apr',
                description: 'Least amount of rain. Best for outdoor activities.'
            },
            {
                label: 'Great Sale',
                months: 'June - Aug',
                description: 'Great Singapore Sale. Best for shopping lovers.'
            },
            {
                label: 'Festive',
                months: 'Dec - Jan',
                description: 'Christmas lighting and New Year fireworks are spectacular.'
            }
        ]
    },
    faqs: [
        {
            question: 'Is Singapore Visa free for Indians?',
            answer: 'No, Indians need a valid visa. It is a paper visa processed via agents (Rudraksh Safar). It typically takes 3-5 working days.'
        },
        {
            question: 'Can we drink tap water?',
            answer: 'Yes! Singapore tap water is perfectly safe to drink and meets WHO standards. You can save money on bottled water.'
        },
        {
            question: 'Strict laws I should know?',
            answer: 'Chewing gum is banned. Do not litter (heavy fines). Smoking is only allowed in designated yellow boxes.'
        },
        {
            question: 'Is it expensive?',
            answer: 'Compared to Thailand/Vietnam, yes. Food and taxis are costlier. But the public transport (MRT) is cheap and excellent.'
        }
    ],
    meta: {
        title: 'Singapore Tour Packages 2026 | Universal Studios & Cruise from Bhilai',
        description: 'Best Singapore Tour Packages from Bhilai & Raipur. Visa Assistance included. Visit Gardens by the Bay, Sentosa. 4-Star Hotels & Indian Meals.',
        keywords: 'singapore tour package from bhilai, singapore visa agent raipur, singapore trip cost from chhattisgarh, singapore honeymoon package, universal studios singapore tickets'
    }
};

const SingaporeMaster = () => {
    return <DestinationMasterTemplate data={singaporeData} />;
};

export default SingaporeMaster;
