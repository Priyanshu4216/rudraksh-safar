import { Train, Plane, Bus, Calendar, MapPin, Clock } from 'lucide-react';

export interface TransportOption {
    mode: 'Train' | 'Flight';
    title: string;
    route: string;
    duration: string;
    pros: string[];
    cons: string[];
    recommended?: boolean;
}

export interface BhilaiPageData {
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
    transport: {
        title: string;
        options: TransportOption[];
    };
    itinerary: {
        title: string;
        days: {
            day: number;
            title: string;
            desc: string;
        }[];
    };
    trainTable: {
        trainNo: string;
        name: string;
        departure: string;
        arrival: string;
        days: string;
    }[];
    faqs: { question: string; answer: string }[];
    bookingTips?: string[];
}

export const bhilaiData: BhilaiPageData = {
    meta: {
        title: 'Char Dham Yatra from Bhilai/Durg (2026): Train, Flight & Package Guide',
        description: 'Best Char Dham Yatra package from Bhilai & Durg starting ₹17,999. Includes Train/Flight guidance to Delhi/Haridwar, Hotel in Kedarnath (100m from Temple), and Private Transfers.',
        keywords: ['Char Dham Yatra from Bhilai', 'Char Dham Package from Raipur', 'Durg to Haridwar Train', 'Raipur to Dehradun Flights', 'Kedarnath Package from Bhilai']
    },
    hero: {
        title: 'Char Dham Yatra from Bhilai (Durg)',
        subtitle: 'Complete Package with Private Transfers & Hotel in Kedarnath (Not Tent).',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop'
    },
    transport: {
        title: 'Recommended Route: Bhilai to Haridwar via Delhi',
        options: [
            {
                mode: 'Train',
                title: 'Option A: Train to Delhi + Private Cab',
                route: 'Durg (Train) -> Delhi -> Haridwar (Cab/Bus)',
                duration: '20 Hours (Train) + 5 Hours (Drive)',
                pros: ['Most Cost Effective', 'Durg to Delhi trains are faster & frequent', 'Private transfer from Delhi by Rudraksh Safar'],
                cons: ['Requires train booking 3 months in advance'],
                recommended: true
            },
            {
                mode: 'Train',
                title: 'Option B: Direct Train',
                route: 'Durg Junction -> Haridwar Junction',
                duration: '26 - 28 Hours',
                pros: ['Direct connectivity (No changes)', 'Budget friendly (SL/3A)', 'Arrives in Haridwar evening'],
                cons: ['Very hard to get tickets', 'Long travel time', 'Utkal Express is often late'],
                recommended: false
            },
            {
                mode: 'Flight',
                title: 'Option C: Flight via Raipur',
                route: 'Raipur (RPR) -> Delhi (DEL) -> Haridwar (Cab)',
                duration: '2 Hours (Flight) + 5 Hours (Drive)',
                pros: ['Fastest option', 'Comfortable', 'We arrange cab pickup from Delhi Airport'],
                cons: ['Flight cost extra', 'Requires connecting transfer'],
                recommended: false
            }
        ]
    },
    bookingTips: [
        "✅ **Best Plan**: Take a train from Durg to Delhi (Nizamuddin). Our tea will pick you up from Delhi Station and drive you to Haridwar in a private Traveller/Bus.",
        "⚠️ **Urgent**: Direct Durg -> Haridwar trains get booked instantly. The Delhi route is reliable.",
        "**Price**: Package starts at **₹17,999** per person (Ex-Haridwar)."
    ],
    trainTable: [
        { trainNo: '12823', name: 'Chhattisgarh Sampark Kranti', departure: '12:00 (Durg)', arrival: '12:00 (Nizamuddin)', days: 'Mon, Thu, Sat' },
        { trainNo: '20847', name: 'Durg MCTM Udhampur SF', departure: '11:10 (Durg)', arrival: '13:00 (Delhi)', days: 'Wed' },
        { trainNo: '12807', name: 'Samta Express', departure: '17:05 (Durg)', arrival: '18:00 (Nizamuddin)', days: 'Tue, Fri, Sun' }
    ],
    itinerary: {
        title: '11-Day Char Dham Yatra (Ex-Delhi/Haridwar)',
        days: [
            { day: 1, title: 'Reach Delhi / Haridwar', desc: 'Arrive in Delhi (Train/Flight). Our private vehicle picks you up -> Drive to Haridwar. Night Stay Haridwar.' },
            { day: 2, title: 'Haridwar to Barkot', desc: 'Drive to Barkot. Enroute Mussoorie & Kempty Falls. Night Stay Barkot.' },
            { day: 3, title: 'Yamunotri Dham', desc: 'Trek to Yamunotri (6km). Darshan & Pooja. Return to Barkot.' },
            { day: 4, title: 'Barkot to Uttarkashi', desc: 'Drive to Uttarkashi. Visit Kashi Vishwanath Temple. Night Stay Uttarkashi.' },
            { day: 5, title: 'Gangotri Dham', desc: 'Drive to Gangotri (Harsil Valley). Darshan & return to Uttarkashi.' },
            { day: 6, title: 'Uttarkashi to Guptkashi', desc: 'Long drive (8-9 hrs). View of Mandakini river. Night Stay Guptkashi.' },
            { day: 7, title: 'Kedarnath Dham', desc: 'Helicopter/Trek to Kedarnath. **Stay in Hotel (100m from Temple)**. Experience Evening Aarti.' },
            { day: 8, title: 'Kedarnath to Pipalkoti', desc: 'Morning Darshan. Trek down. Drive towards Badrinath (halt at Pipalkoti).' },
            { day: 9, title: 'Badrinath Dham', desc: 'Morning Darshan at Badrinath. Mana Village. Drive back to Srinagar/Rishikesh.' },
            { day: 10, title: 'Rishikesh to Haridwar', desc: 'Visit Ram Jhula, Laxman Jhula. Drop at Haridwar Station or Drive to Delhi.' },
            { day: 11, title: 'Return Journey', desc: 'Train from Delhi/Haridwar to Durg.' }
        ]
    },
    faqs: [
        {
            question: 'What is the package price from Bhilai?',
            answer: 'Our Land Package starts at **₹17,999** per person (Ex-Haridwar/Delhi). This includes Hotels, Meals (MAP), and Private Sightseeing transfers. Train/Flight tickets are extra.'
        },
        {
            question: 'Do we stay in Tents at Kedarnath?',
            answer: 'No! Unlike competitors who provide cold tents, **Rudraksh Safar provides Hotels just 100m from Kedarnath Temple** for a comfortable and warm stay.'
        },
        {
            question: 'What is the meal plan?',
            answer: 'We provide **MAP Plan** (Breakfast + Dinner) throughout the tour. In Kedarnath, all meals are included.'
        },
        {
            question: 'Is the transfer private or shared?',
            answer: 'We provide **Private Transfers** (Tempo Traveller or Innova) for your group. No sharing with strangers.'
        }
    ]
};
