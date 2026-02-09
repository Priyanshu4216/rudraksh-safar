import { HeartPulse, UserCheck, Clock, MapPin, Stethoscope, ThumbsUp, ThumbsDown, Accessibility, Mountain, ThermometerSnowflake } from 'lucide-react';

export interface SeniorTip {
    title: string;
    description: string;
    icon?: any;
}

export interface ItineraryComparison {
    standard: string[];
    seniorFriendly: string[];
}

export interface SeniorPageData {
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
    challenges: {
        title: string;
        items: SeniorTip[];
    };
    palkiVsHeli: {
        title: string;
        comparison: {
            mode: string;
            pros: string[];
            cons: string[];
            recommendation: string;
        }[];
    };
    medicalSafety: {
        title: string;
        checkpoints: string[];
        tips: string[];
    };
    slowItinerary: {
        title: string;
        description: string;
        difference: ItineraryComparison;
    };
    packingList: string[];
    faqs: { question: string; answer: string }[];
}

export const seniorData: SeniorPageData = {
    meta: {
        title: 'Char Dham Yatra for Senior Citizens (2026): A Safety First Guide',
        description: 'Planning Char Dham for parents above 60? Read our comprehensive geriatric guide covering Palki rates, Oxygen availability, Heart safety, and the "Slow Travel" itinerary.',
        keywords: ['Char Dham for Senior Citizens', 'Char Dham Yatra for Parents', 'Kedarnath Palki for Seniors', 'Medical Safety Char Dham']
    },
    hero: {
        title: 'Char Dham Yatra for Senior Citizens',
        subtitle: 'Fulfilling Their Lifelong Dream, Safely.',
        image: 'https://images.unsplash.com/photo-1544212573-2e067c295444?q=80&w=2692&auto=format&fit=crop'
    },
    challenges: {
        title: 'Common Challenges for Seniors',
        items: [
            {
                title: 'High Altitude & Oxygen',
                description: 'Kedarnath (11,700 ft) has 30% less oxygen. This puts strain on the heart and lungs, especially for those with BP or Diabetes.',
                icon: HeartPulse
            },
            {
                title: 'Steep Gradients',
                description: 'Yamunotri is a 6km steep trek. It is often underestimated but is harder on the knees than Kedarnath for many seniors.',
                icon: Mountain
            },
            {
                title: 'Long Travel Hours',
                description: 'Road journeys average 8-10 hours a day on winding roads, which can cause motion sickness and fatigue.',
                icon: Clock
            },
            {
                title: 'Cold Weather',
                description: 'Temperatures drop to sub-zero at night. Hypothermia is a real risk for elderly pilgrims.',
                icon: ThermometerSnowflake
            }
        ]
    },
    palkiVsHeli: {
        title: 'Palki (Sedan Chair) vs Helicopter: What is best for Seniors?',
        comparison: [
            {
                mode: 'Helicopter',
                pros: ['Fastest (10 mins vs 8 hours)', 'Avoids physical exertion entirely', 'Great views'],
                cons: ['High altitude shock (sudden ascent)', 'Weight limit restrictions', 'Flight cancellations due to weather'],
                recommendation: 'Best for: Those with weak knees but good heart/lungs. CAUTION: Sudden altitude change can trigger AMS.'
            },
            {
                mode: 'Palki (Dandi)',
                pros: ['Gradual ascent allows acclimatization', 'Comfortable seated position', 'Door-to-door (mostly)'],
                cons: ['Expensive (₹8,000-₹10,000)', 'Jerky movements can cause back pain', 'Long duration (5-6 hours)'],
                recommendation: 'Best for: Those who cannot walk but want to acclimatize slowly. Ensure 4 porters are hired.'
            }
        ]
    },
    medicalSafety: {
        title: 'Medical Safety Protocol for 60+',
        checkpoints: [
            'Guptkashi (Base Medical Camp)',
            'Kedarnath Base Camp',
            'Badrinath Hospital (near Temple)',
            'Barkot Community Health Centre'
        ],
        tips: [
            'Carry a portable Pulse Oximeter and check O2 levels every 2 hours.',
            'Start a walking regimen (3km daily) 2 months before the trip.',
            'Consult a cardiologist for a "Stress Test" before booking.',
            'Keep distinct medication pouches for Morning/Night and Emergency.'
        ]
    },
    slowItinerary: {
        title: 'The "Slow Travel" Strategy',
        description: 'Most agencies rush you through 4 Dhams in 9 days. For seniors, we recommend the 12-Day Relaxed Plan to prevent exhaustion.',
        difference: {
            standard: ['Day 1: Haridwar to Barkot (7 hrs)', 'Day 2: Yamunotri Trek & Back', 'Day 3: Barkot to Uttarkashi (4 hrs)'],
            seniorFriendly: ['Day 1: Haridwar to Mussoorie (Short drive, Acclimatize)', 'Day 2: Mussoorie to Barkot (Relaxed)', 'Day 3: Yamunotri Trek (Pony) & Halt at Barkot']
        }
    },
    packingList: [
        'Thermal Innerwear (2 sets)',
        'Down Jacket (-5°C rated)',
        'Woolen Socks & Gloves',
        'Walking Stick / Trekking Pole',
        'Hot Water Bag (for muscle relief)',
        'Personal Medicine Kit + Prescription'
    ],
    faqs: [
        {
            question: 'Is there an age limit for Char Dham?',
            answer: 'While there is no strict legal ban, registration may require a medical certificate for those above 60. We strongly advise against travel for those above 75 without a doctor\'s fit-to-fly certificate.'
        },
        {
            question: 'Can heart patients visit Kedarnath?',
            answer: 'It is high-risk. The low oxygen levels verify strain the heart. Please consult your cardiologist. We often recommend "Do Dham" (Badrinath & Gangotri) as they are road-accessible and safer.'
        },
        {
            question: 'Are there wheelchair facilities?',
            answer: 'Very limited. The terrain is rugged. Palki (Dandi) is the traditional and only viable alternative to walking for the terrain.'
        }
    ]
};
