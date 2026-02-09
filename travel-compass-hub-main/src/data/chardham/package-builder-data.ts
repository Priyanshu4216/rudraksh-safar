import { MapPin, Calendar, Users, Hotel, CheckCircle2 } from 'lucide-react';

export interface PackageOption {
    id: string; // 'ek-dham-kedarnath'
    title: string;
    description: string;
    pricePerPerson: number; // Base price
}

export interface PackageBuilderData {
    meta: {
        title: string;
        description: string;
        keywords: string[];
    };
    hero: {
        title: string;
        subtitle: string;
        image: string;
    };
    seoContent: {
        intro: { title: string; text: string };
        benefits: string[];
        faqs: { question: string; answer: string }[];
    };
}

export const packageBuilderSEO: PackageBuilderData = {
    meta: {
        title: 'Plan Your Char Dham Yatra 2026: Custom Package Builder',
        description: 'Calculate your Char Dham Yatra cost instantly. Select dates, hotels, and dham to get a transparent quote for Ek Dham, Do Dham, or Chota Char Dham.',
        keywords: ['Char Dham Yatra cost calculator', 'Kedarnath trip planner', 'Do dham yatra package price', 'Char dham customized package']
    },
    hero: {
        title: 'Plan Your Yatra',
        subtitle: 'Build your perfect pilgrimage in 3 simple steps.',
        image: 'https://images.unsplash.com/photo-1626127027363-2ca0b8a34241?q=80&w=2670&auto=format&fit=crop'
    },
    seoContent: {
        intro: {
            title: 'How to Plan a Successful Char Dham Yatra?',
            text: 'Planning a pilgrimage to the Himalayas requires precision. Our Yatra Builder helps you estimate the budget based on your specific needs—whether you need a helicopter for seniors, luxury stays for comfort, or a budget-friendly trekking plan. Unlike standard travel agencies, we offer complete transparency on costs.'
        },
        benefits: [
            'Instant Quote Estimation (No hidden charges)',
            'Senior-Citizen Friendly Logic (Automatic Palki suggestions)',
            'Choice of Hotels (GMVN to Luxury Resorts)',
            '100% Customizable Itineraries'
        ],
        faqs: [
            {
                question: 'How is the package cost calculated?',
                answer: 'The cost is dynamic based on three factors: The number of Dhams (1, 2, or 4), your choice of accommodation (Budget/Star Hotel), and the group size (larger groups get discounts).'
            },
            {
                question: 'Does this include Helicopter tickets?',
                answer: 'This estimator provides the base package cost. Helicopter tickets are subject to government availability and dynamic pricing (approx ₹5k-8k for Kedarnath).'
            },
            {
                question: 'Can I customize this further?',
                answer: 'Yes. Once you generate a quote, our travel experts will call you to refine the itinerary, add specific halts (like Auli or Rishikesh), and handle registration.'
            }
        ]
    }
};

export interface StepData {
    id: number;
    title: string;
    subtitle: string;
    icon: any;
}

export const wizardSteps: StepData[] = [
    { id: 1, title: 'Departure', subtitle: 'Where are you starting from?', icon: MapPin },
    { id: 2, title: 'Select Dham', subtitle: 'Which temples do you want to visit?', icon: MapPin },
    { id: 3, title: 'Travel Dates', subtitle: 'When are you planning to go?', icon: Calendar },
    { id: 4, title: 'Travellers', subtitle: 'Who is travelling with you?', icon: Users },
    { id: 5, title: 'Comfort Level', subtitle: 'Select your accommodation type.', icon: Hotel }
];

export const departureOptions = [
    { id: 'delhi', title: 'Delhi (NCR)', type: 'Standard' },
    { id: 'haridwar', title: 'Haridwar / Rishikesh', type: 'Standard' },
    { id: 'mumbai', title: 'Mumbai / Pune', type: 'Standard' },
    { id: 'raipur', title: 'Raipur / Bhilai / Durg', type: 'Premium' }, // Triggers Local Content
    { id: 'other', title: 'Other City', type: 'Standard' }
];

export const dhamOptions: PackageOption[] = [
    {
        id: 'ek-dham-kedarnath',
        title: 'Ek Dham (Kedarnath)',
        description: 'Focus on the holy Jyotirlinga. Includes Guptkashi stay.',
        pricePerPerson: 9500
    },
    {
        id: 'do-dham',
        title: 'Do Dham (Kedarnath & Badrinath)',
        description: 'The most popular choice. Covers both Shiva & Vishnu abodes.',
        pricePerPerson: 16500
    },
    {
        id: 'char-dham',
        title: 'Char Dham (All 4 Temples)',
        description: 'The complete spiritual journey: Yamunotri, Gangotri, Kedarnath, Badrinath.',
        pricePerPerson: 28500
    }
];

export const hotelOptions: PackageOption[] = [
    {
        id: 'budget',
        title: 'Budget (Guest House)',
        description: 'Clean, basic rooms with shared/attached washrooms.',
        pricePerPerson: 0 // Base
    },
    {
        id: 'standard',
        title: 'Standard (3 Star Hotels)',
        description: 'Comfortable rooms with geysers and better food.',
        pricePerPerson: 4000 // Additional
    },
    {
        id: 'luxury',
        title: 'Luxury (Resorts)',
        description: 'Premium amenities, heaters, and best views.',
        pricePerPerson: 12000 // Additional
    }
];

export const calculateEstimate = (dhamId: string, hotelId: string, pax: number) => {
    const dham = dhamOptions.find(d => d.id === dhamId);
    const hotel = hotelOptions.find(h => h.id === hotelId);

    if (!dham || !hotel) return 0;

    const baseTotal = (dham.pricePerPerson + hotel.pricePerPerson) * pax;
    // Apply bulk discount logic
    const discount = pax > 4 ? 0.10 : 0; // 10% discount for groups > 4

    return Math.round(baseTotal * (1 - discount));
};
