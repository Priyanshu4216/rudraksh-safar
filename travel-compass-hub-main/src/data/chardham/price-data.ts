import { HandCoins, TrendingUp, AlertTriangle, ShieldCheck, Calculator } from 'lucide-react';

export interface CostCategory {
    category: 'Budget' | 'Standard' | 'Luxury';
    perPerson: string;
    inclusions: string[];
    exclusions: string[];
}

export interface ServiceRate {
    service: string;
    price: string;
    note?: string;
}

export interface PricePageData {
    meta: {
        title: string;
        description: string;
        keywords: string[];
    };
    overview: {
        title: string;
        subtitle: string;
        lastUpdated: string;
    };
    packages: CostCategory[];
    ponyRates: {
        title: string;
        route: string;
        rates: ServiceRate[];
    };
    helicopter: {
        title: string;
        routes: ServiceRate[];
        warning: string;
    };
    hiddenCosts: {
        title: string;
        items: { item: string; cost: string; description: string }[];
    };
    faqs: { question: string; answer: string }[];
}

export const priceData: PricePageData = {
    meta: {
        title: 'Char Dham Yatra Price 2026: Official Rates (Pony, Heli, Taxi)',
        description: 'Transparent cost breakdown for Char Dham Yatra 2026. Check official government rates for Pony/Palki, Helicopter tickets, and Taxi fares from Haridwar.',
        keywords: ['Char Dham Yatra Cost', 'Kedarnath Pony Rates 2026', 'Char Dham Helicopter Price', 'Haridwar to Char Dham Taxi Fare']
    },
    overview: {
        title: 'Char Dham Yatra Costs (2026)',
        subtitle: 'Transparent Pricing. No Hidden Surprises.',
        lastUpdated: 'February 2026'
    },
    packages: [
        {
            category: 'Budget',
            perPerson: '₹15,500 - ₹18,000',
            inclusions: ['Shared Tempo Traveller', 'Basic Guest Houses/Dharamshalas', 'Vegetarian Meals (MAP)'],
            exclusions: ['Helicopter Tickets', 'Pony/Palki Charges', 'VIP Darshan']
        },
        {
            category: 'Standard',
            perPerson: '₹22,500 - ₹28,000',
            inclusions: ['Private Innova/Sedan', '3-Star Hotels', 'Breakfast & Dinner', 'Registration Assistance'],
            exclusions: ['Lunch', 'Personal Expenses', 'Tips']
        },
        {
            category: 'Luxury',
            perPerson: '₹45,000+',
            inclusions: ['Premium SUV (Crysta)', '4-Star/Best Available Resorts', 'All Meals', 'Priority Support'],
            exclusions: ['Helicopter (unless included in package)']
        }
    ],
    ponyRates: {
        title: 'Official Pony & Palki Rates (Kedarnath)',
        route: 'Gaurikund to Kedarnath (16 km)',
        rates: [
            { service: 'Pony (One Way)', price: '₹2,500 - ₹3,000', note: 'Govt fixed rate varies by weight.' },
            { service: 'Pony (Return)', price: '₹4,500 - ₹5,500', note: 'Same day return is stressful for the animal.' },
            { service: 'Palki/Dandi (One Way)', price: '₹8,000 - ₹10,000', note: 'Carried by 4 porters. Recommended for seniors.' },
            { service: 'Kandi (Basket)', price: '₹1,500 - ₹2,000', note: 'For small children or luggage.' }
        ]
    },
    helicopter: {
        title: 'Helicopter Refernce Rates',
        routes: [
            { service: 'Phata ⇄ Kedarnath', price: '₹5,500 (Approx)', note: 'Per person return fare.' },
            { service: 'Sirsi ⇄ Kedarnath', price: '₹5,498 (Approx)', note: 'Cheapest & shortest route.' },
            { service: 'Guptkashi ⇄ Kedarnath', price: '₹7,750 (Approx)', note: 'Most expensive shuttle route.' }
        ],
        warning: 'SCAM ALERT: Helicopter tickets can ONLY be booked on the official IRCTC HeliYatra website. Do not pay any "agent" via UPI for heli tickets.'
    },
    hiddenCosts: {
        title: 'Hidden Costs You Must Plan For',
        items: [
            { item: 'Hot Water', cost: '₹50 - ₹100 / bucket', description: 'In high altitude zones like Kedarnath, hot water is often charged extra.' },
            { item: 'Heater/Blower', cost: '₹300 - ₹500 / night', description: 'Hotels charge extra for room heaters.' },
            { item: 'Wi-Fi / Connectivity', cost: 'Variable', description: 'Sim cards might not work. Paid Wi-Fi spots are available.' },
            { item: 'VIP Darshan', cost: '₹2,500+', description: 'Official special pooja receipts are required. Beware of touts.' }
        ]
    },
    faqs: [
        {
            question: 'Is registration free?',
            answer: 'YES. Char Dham Yatra registration is 100% FREE on the official Uttarakhand Tourism portal. Anyone asking for money for "Registration" is scamming you.'
        },
        {
            question: 'Why do rates vary so much?',
            answer: 'Rates fluctuate based on demand (Peak Season: May/June) and availability. Hotel prices in Kedarnath can triple during weekends.'
        },
        {
            question: 'Is food expensive?',
            answer: 'On the trek routes (Kedarnath/Yamunotri), prices are higher due to transport logistics. A simple Maggi can cost ₹100, and a Thali ₹250+.'
        }
    ]
};
