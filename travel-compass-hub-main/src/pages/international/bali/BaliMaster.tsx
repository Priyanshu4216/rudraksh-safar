import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const baliData: DestinationData = {
    id: 'bali-master',
    title: 'Bali Tour Packages',
    subtitle: 'Island of Gods | Culture, Nature & Beaches',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2088',
    overview: `Bali is more than just a destination; it's a mood, an aspiration, a tropical state of mind. From the spiritual vibes of Ubud's rice terraces to the party scenes of Seminyak and the dramatic cliffs of Uluwatu, Bali offers a perfect blend of culture and relaxation. Whether you are on a honeymoon or a friends' trip, Rudraksh Safar ensures a premium experience with private pool villas and Indian food options.`,
    highlights: [
        'Nusa Penida Island Tour (Kelingking Beach)',
        'Ubud Monkey Forest & Rice Terraces',
        'Kintamani Volcano View with Lunch',
        'Uluwatu Temple Sunset & Kecak Dance',
        'Tanah Lot Temple (Sea Temple)',
        'Bali Swing & Coffee Plantation'
    ],
    urgencyLabel: 'Visa on Arrival Available',
    trust: {
        title: 'Bali Trip Assurance',
        points: [
            { icon: 'visa', label: 'Visa on Arrival', desc: 'Indian tourists get Visa on Arrival (approx $35). We assist with the process.' },
            { icon: 'hotel', label: 'Private Pool Villas', desc: 'Experience luxury with our handpicked private pool villas in Ubud/Seminyak.' },
            { icon: 'food', label: 'Vegetarian Friendly', desc: 'Bali has excellent Indian restaurants. We include dinner at top-rated Indian spots.' },
            { icon: 'car', label: 'English Speaking Driver', desc: 'Our drivers are also excellent local guides.' }
        ]
    },
    packages: [
        {
            id: 'bali-honeymoon',
            title: 'Bali Honeymoon with Pool Villa',
            duration: '6 Days / 5 Nights',
            price: '₹38,000',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038',
            link: '/bali-tour-package-from-raipur', // Linking to existing page
            tag: 'Honeymoon'
        },
        {
            id: 'bali-friends',
            title: 'Bali Adventure & Party',
            duration: '7 Days / 6 Nights',
            price: '₹32,500',
            image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070',
            link: '/international-packages',
            tag: 'Group'
        }
    ],
    attractions: [
        {
            title: 'Ubud Rice Terraces',
            description: 'Tegalalang Rice Terrace. Famous for its scenic green layers and the Bali Swing.',
            image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Nusa Penida',
            description: 'An island off the coast of Bali known for the T-Rex shaped Kelingking Beach.',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Uluwatu Temple',
            description: 'A temple perched on a steep cliff 70 meters above the sea. Famous for sunset.',
            image: 'https://images.unsplash.com/photo-1552838384-3c66f5713437?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Handara Gate',
            description: 'The iconic Balinese gate with a mountain backdrop. A must-visit photo spot.',
            image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=600&h=400&fit=crop'
        }
    ],
    bestTime: {
        text: 'Bali is a tropical island. The dry season is the most popular time to visit.',
        seasons: [
            {
                label: 'Dry Season (Best)',
                months: 'April - Sept',
                description: 'Sunny skies, low humidity. Perfect for beaches and trekking.'
            },
            {
                label: 'Wet Season',
                months: 'Oct - March',
                description: 'Frequent rain showers, but cheaper hotels and fewer crowds.'
            },
            {
                label: 'Peak Season',
                months: 'July, Aug, Dec',
                description: 'Busiest time. Book hotels at least 2 months in advance.'
            }
        ]
    },
    faqs: [
        {
            question: 'Is Bali Visa free for Indians?',
            answer: 'No, but Indians get Visa on Arrival (VoA). It costs IDR 500,000 (approx ₹2,800) and can be paid at the airport.'
        },
        {
            question: 'Is it better to stay in Kuta or Ubud?',
            answer: 'It depends. Kuta/Seminyak is for beaches, parties, and shopping. Ubud is for culture, nature, and relaxation. We recommend splitting your stay.'
        },
        {
            question: 'Can we rent scooters?',
            answer: 'Yes, but you need an International Driving Permit (IDP). Police checks are common. Helmet is mandatory.'
        },
        {
            question: 'What is the currency?',
            answer: 'Indonesian Rupiah (IDR). 1 INR is approx 180-190 IDR. You will feel like a millionaire!'
        }
    ],
    meta: {
        title: 'Bali Tour Packages 2026 | Honeymoon & Private Pool Villa from Raipur',
        description: 'Best Bali Tour Packages from Bhilai & Raipur. Flights included. Private Pool Villa, Nusa Penida Tour. Indian Meals & Hindi Guide. Book Now.',
        keywords: 'bali tour package from raipur, bali honeymoon package cost, bali trip from bhilai, bali visa on arrival cost, nusa penida day trip price'
    }
};

const BaliMaster = () => {
    return <DestinationMasterTemplate data={baliData} />;
};

export default BaliMaster;
