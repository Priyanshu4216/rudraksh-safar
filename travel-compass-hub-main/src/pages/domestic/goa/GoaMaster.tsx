import React from 'react';
import DestinationMasterTemplate, { DestinationData } from '@/components/templates/DestinationMasterTemplate';

const goaData: DestinationData = {
    id: 'goa-master',
    title: 'Goa Tour Packages',
    subtitle: 'Sun, Sand & Susegad | The Party Capital of India',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070',
    overview: `Goa is India's most loved beach destination. Whether you want the electrifying nightlife of North Goa (Baga, Calangute) or the serene, pristine beaches of South Goa (Palolem, Colva), we have it all. Rudraksh Safar specializes in group trips, honeymoon packages, and budget-friendly college excursions with train/flight options from Chhattisgarh.`,
    highlights: [
        'North Goa Beaches (Baga, Calangute, Anjuna)',
        'South Goa Peace (Palolem, Agonda)',
        'Dudhsagar Waterfalls Trek',
        'Grand Island Scuba Diving',
        'Casino Royale / Big Daddy (Mandovi River)',
        'Fort Aguada & Chapora Fort'
    ],
    urgencyLabel: 'Group Discounts Available',
    trust: {
        title: 'Why Book Goa with Us?',
        points: [
            { icon: 'train', label: 'Train Tickets', desc: 'Confirmed tickets in Durg-Puri or Gondwana Express for groups.' },
            { icon: 'hotel', label: 'Hotel with Pool', desc: 'All our packages include hotels with swimming pools near the beach.' },
            { icon: 'car', label: 'Scooty Rental Help', desc: 'We assist in getting good condition bikes/scooties on rent.' },
            { icon: 'beer', label: 'Nightlife Guide', desc: 'Free entry passes to select clubs for couples.' }
        ]
    },
    packages: [
        {
            id: 'goa-friends',
            title: 'Goa Friends Trip (Budget)',
            duration: '4 Days / 3 Nights',
            price: '₹8,500',
            image: 'https://images.unsplash.com/photo-1540206395-688085723adb?q=80&w=2069',
            link: '/goa-trip-under-10000-from-bhilai', // Linking to existing page
            tag: 'Bestseller'
        },
        {
            id: 'goa-couple',
            title: 'Romantic Goa Honeymoon',
            duration: '5 Days / 4 Nights',
            price: '₹22,000',
            image: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=2072',
            link: '/domestic-tours',
            tag: 'Honeymoon'
        }
    ],
    attractions: [
        {
            title: 'Baga Beach',
            description: 'The heart of North Goa nightlife. Famous for Tito\'s Lane and water sports.',
            image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Dudhsagar Falls',
            description: 'A 4-tiered waterfall located on the Mandovi River. Jeep safari required.',
            image: 'https://images.unsplash.com/photo-1544473244-f6895e672d62?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Basilica of Bom Jesus',
            description: 'UNESCO World Heritage site containing the remains of St. Francis Xavier.',
            image: 'https://images.unsplash.com/photo-1591264247204-0c414603e8bf?q=80&w=600&h=400&fit=crop'
        },
        {
            title: 'Palolem Beach',
            description: 'South Goa\'s gem. Known as the silent noise party beach. Very scenic.',
            image: 'https://images.unsplash.com/photo-1590765954930-cb64670081d0?q=80&w=600&h=400&fit=crop'
        }
    ],
    bestTime: {
        text: 'Goa is great year-round, but Nov-Feb is the peak party season.',
        seasons: [
            {
                label: 'Nov - Feb (Peak)',
                months: 'Nov - Feb',
                description: 'Perfect weather. Sunburn Festival. Christmas & New Year parties.'
            },
            {
                label: 'June - Sept',
                months: 'Jun - Sep',
                description: 'Monsoon. Lush green Goa. Best for Dudhsagar trek.'
            },
            {
                label: 'March - May',
                months: 'Mar - May',
                description: 'Summer. Humid but cheaper hotels. Good for water sports.'
            }
        ]
    },
    faqs: [
        {
            question: 'Which train goes to Goa from Bhilai?',
            answer: 'There is no direct train. You take a train to Gondia (G) and change, or go via Nagpur. Or flight from Raipur.'
        },
        {
            question: 'Is North or South Goa better?',
            answer: 'North for Party, Nightlife, and Crowds. South for Peace, Clean Beaches, and Luxury Resorts.'
        },
        {
            question: 'Can we rent a car?',
            answer: 'Yes, self-drive cars (Thar, Swift) are available. You need a valid driving license.'
        },
        {
            question: 'Is it safe for solo female travelers?',
            answer: 'Yes, Goa is one of the safest states. Stick to popular beaches at night.'
        }
    ],
    meta: {
        title: 'Goa Tour Packages 2026 | Budget & Honeymoon Deals from Raipur',
        description: 'Best Goa Tour Packages from Bhilai & Raipur. Train/Flight inclusive deals. North Goa Party & South Goa Peace. Book Hotels with Pool.',
        keywords: 'goa tour package from bhilai, goa trip cost from raipur, goa honeymoon package, north vs south goa, dudhsagar waterfall tour'
    }
};

const GoaMaster = () => {
    return <DestinationMasterTemplate data={goaData} />;
};

export default GoaMaster;
