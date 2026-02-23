import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const srilankaData: DestinationData = {
    id: 'srilanka-master',
    title: 'Sri Lanka Tour Packages',
    subtitle: 'The Pearl of Indian Ocean | Ramayana Trail & Beaches',
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e52d3a1e8596?q=80&w=2070',
    overview: `Sri Lanka is the jewel of the Indian Ocean, offering beaches, tea gardens, wildlife, and ancient temples in one compact island. For Indian travelers, it holds special significance due to the Ramayana Trail (Ashok Vatika). Rudraksh Safar brings you the best of Sri Lanka with direct flights from Raipur/Kolkata connections and premium hospitality.`,
    highlights: [
        'Ramayana Trail (Ashok Vatika / Seetha Eliya)',
        'Kandy Tooth Relic Temple',
        'Bentota Beach & Water Sports',
        'Nuwara Eliya (Little England) Tea Gardens',
        'Yala National Park (Leopard Safari)',
        'Lotus Tower Colombo'
    ],
    urgencyLabel: 'Free Visa for Indians (Limited Time)',
    trust: {
        title: 'Why Choose Sri Lanka?',
        points: [
            { icon: 'visa', label: 'Free Visa', desc: 'Sri Lanka frequently offers Free Visa on Arrival for Indians.' },
            { icon: 'food', label: 'Indian Food Everywhere', desc: 'Roti, Dal, and Curry are staple foods here. You will feel at home.' },
            { icon: 'car', label: 'Dedicated Guide', desc: 'Your driver is your guide. Private car for the entire trip.' },
            { icon: 'religious', label: 'Ramayana Yatra', desc: 'We cover all major Ramayana sites like Ashok Vatika and Hanuman Temple.' }
        ]
    },
    packages: [
        {
            id: 'srilanka-family',
            title: 'Best of Sri Lanka (Family Special)',
            duration: '6 Days / 5 Nights',
            price: '₹35,000',
            image: 'https://images.unsplash.com/photo-1580695632169-p03-p03?q=80&w=2070',
            link: '/international-tours/srilanka-from-bhilai', // Linking to existing page
            tag: 'Ramayana'
        },
        {
            id: 'srilanka-honeymoon',
            title: 'Romantic Bentota & Hills',
            duration: '5 Days / 4 Nights',
            price: '₹32,000',
            image: 'https://images.unsplash.com/photo-1546708773-e57511677c38?q=80&w=2070',
            link: '/international-packages',
            tag: 'Honeymoon'
        }
    ],
    attractions: [
        {
            title: 'Sigiriya Rock',
            description: 'The Lion Rock fortress. An ancient palace built on a massive rock column.',
            image: 'https://images.unsplash.com/photo-1586861635167-e52d3a1e8596?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Nuwara Eliya',
            description: 'Known as Little England. Cool climate, waterfalls, and tea factories.',
            image: 'https://images.unsplash.com/photo-1546708773-e57511677c38?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Bentota Beach',
            description: 'The best beach for water sports like jet ski and banana boat rides.',
            image: 'https://images.unsplash.com/photo-1580695632169-p03?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Colombo',
            description: 'The bustling capital. Shopping at Pettah Market and visiting Gangaramaya Temple.',
            image: 'https://images.unsplash.com/photo-1578556270566-07736e053f47?q=80&w=600&h=400&fit=crop'
        }
    ],
    bestTime: {
        text: 'Sri Lanka has two monsoons, so there is always a good side to visit.',
        seasons: [
            {
                label: 'Dec - March (West)',
                months: 'Dec - Mar',
                description: 'Best for Colombo, Bentota, and Galle. Dry and sunny.'
            },
            {
                label: 'April - Sept (East)',
                months: 'Apr - Sep',
                description: 'Best for Trincomalee and East Coast beaches.'
            },
            {
                label: 'Shoulder',
                months: 'Oct - Nov',
                description: 'Inter-monsoon. Good for sightseeing but expect showers.'
            }
        ]
    },
    faqs: [
        {
            question: 'Is it safe for Indian tourists?',
            answer: 'Absolutely. Sri Lanka loves Indian tourists. The people are very warm and welcoming.'
        },
        {
            question: 'Do I need a Visa?',
            answer: 'Currently, the Visa is Free for Indians (ETA required). This policy changes, so check with us before booking.'
        },
        {
            question: 'Is it expensive?',
            answer: 'No! It is very affordable. Food, stay, and transport are cheaper than in India in many places.'
        },
        {
            question: 'What currency to carry?',
            answer: 'Carry USD. You can exchange it for Sri Lankan Rupees (LKR) at Colombo airport.'
        }
    ],
    meta: {
        title: 'Sri Lanka Tour Packages 2026 | Ramayana Trail & Beaches from Raipur',
        description: 'Premium Sri Lanka Tour Packages from Bhilai & Raipur. Visit Ashok Vatika, Kandy, Bentota. Free Visa assistance. 5N/6D Itinerary.',
        keywords: 'sri lanka tour package from bhilai, sri lanka ramayana tour, sri lanka honeymoon package, colombo tour package'
    }
};

const SriLankaMaster = () => {
    return <DestinationMasterTemplate data={srilankaData} />;
};

export default SriLankaMaster;
