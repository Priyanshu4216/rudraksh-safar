import { Shirt, Pill, FileText, Camera, Zap, Umbrella, Ban } from 'lucide-react';

export interface PackingCategory {
    id: string;
    title: string;
    icon: any;
    items: string[];
    tips: string[];
}

export interface PackingPageData {
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
    categories: PackingCategory[];
    dontPack: string[];
    faqs: { question: string; answer: string }[];
}

export const packingData: PackingPageData = {
    meta: {
        title: 'Ultimate Char Dham Packing List (2026): Printable Checklist',
        description: 'Confused about what to pack for Kedarnath & Badrinath? Download our expert checklist covering layers, medicines, documents, and banned items.',
        keywords: ['Char Dham packing list', 'clothes for kedarnath in may', 'medicines for char dham', 'shoes for yamunotri trek']
    },
    hero: {
        title: 'The Ultimate Char Dham Packing List',
        subtitle: 'Pack Light, Pack Right. Survive the Cold & the Trek.',
        image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2673&auto=format&fit=crop'
    },
    categories: [
        {
            id: 'clothing',
            title: 'Clothing (Layering is Key)',
            icon: Shirt,
            items: [
                'Thermals (Top & Bottom) - 2 Sets',
                'Fleece Jacket / Woolen Sweater',
                'Windcheater / Down Jacket (-5°C rated)',
                'Waterproof Trekking Pants (Avoid Jeans)',
                'Woolen Socks (3 pairs) + Cotton Socks (3 pairs)',
                'Woolen Cap & Muffler (Protects ears from wind)',
                'Waterproof Gloves'
            ],
            tips: ['Dress in layers: Thermal -> T-shirt -> Fleece -> Jacket. This lets you adjust to changing temperatures instantly.']
        },
        {
            id: 'medical',
            title: 'Medical Kit (Lifesavers)',
            icon: Pill,
            items: [
                'Pulse Oximeter (Crucial for Kedarnath)',
                'Diamox (Acetazolamide) - For Altitude Sickness (Consult Doctor)',
                'Camphor (Kapoor) - Sniffing helps in breathing',
                'Pain Relief Spray (Volini/Moov)',
                'Crepe Bandage & Knee Cap',
                'ORS & Glucose Powder (Instant energy)',
                'Personal Prescriptions'
            ],
            tips: ['Keep your emergency medicine pouch globally accessible in your day pack, NOT in your main luggage.']
        },
        {
            id: 'electronics',
            title: 'Electronics & Essentials',
            icon: Zap,
            items: [
                'Power Bank (20,000 mAh) - Electricity is scarce',
                'BSNL / Jio SIM Card (Airtel/Vi struggle in high altitude)',
                'Headlamp / Torch (Power cuts are common)',
                'Camera + Extra Batteries'
            ],
            tips: ['Keep mobile batteries warm. Cold drains batteries 50% faster.']
        },
        {
            id: 'toiletries',
            title: 'Toiletries & Hygiene',
            icon: Umbrella,
            items: [
                'Sunscreen (SPF 50+) - UV rays are harsh at altitude',
                'Lip Balm & Cold Cream',
                'Dry Shampoo / Wet Wipes (Bathing might be impossible)',
                'Paper Soap / Hand Sanitizer',
                'Quick-dry Towel'
            ],
            tips: ['Avoid strong perfumes. They can attract bees/insects on the trek.']
        },
        {
            id: 'documents',
            title: 'Mandatory Documents',
            icon: FileText,
            items: [
                'Yatra Registration Pass (E-Pass)',
                'Original Aadhar Card / Voter ID',
                'Medical Fitness Certificate (For Seniors)',
                'Helicopter Ticket Printout (If booked)',
                '4 Passport Size Photos'
            ],
            tips: ['Keep digital copies on your phone and physical photocopies in a waterproof bag.']
        }
    ],
    dontPack: [
        'Suitcases / Trolley Bags (Only Backpacks/Duffle Bags allowed)',
        'Heels / Formal Shoes (Strictly Trekking Shoes or Sports Shoes)',
        'Sarees (Avoid for trekking, Salwar Kameez or Track pants preferred)',
        'Valuable Jewelry'
    ],
    faqs: [
        {
            question: 'Can I rent jackets in Kedarnath?',
            answer: 'Yes, rental jackets are available in Sonprayag and Gaurikund, but hygiene can be an issue. We recommend carrying your own.'
        },
        {
            question: 'What kind of shoes are best?',
            answer: 'Waterproof trekking shoes with high ankle support (Decathlon/Quechua recommended). Avoid flat soles or new shoes that might bite.'
        },
        {
            question: 'Is a raincoat necessary?',
            answer: 'Absolutely. Mountain weather is unpredictable. Carry a lightweight poncho that covers you and your bag.'
        }
    ]
};
