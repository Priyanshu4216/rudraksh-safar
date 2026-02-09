import { HeartPulse, CloudLightning, ShieldAlert, BadgeHelp, Stethoscope, Phone } from 'lucide-react';

export interface SafetyPageData {
    meta: {
        title: string;
        description: string;
        keywords: string[];
    };
    hero: {
        title: string;
        subtitle: string;
        bgImage: string;
        stats: { label: string; value: string; icon: any }[];
    };
    realityCheck: {
        title: string;
        description: string;
        risks: { title: string; severity: 'High' | 'Moderate' | 'Low'; description: string; icon: any }[];
    };
    medical: {
        title: string;
        tips: string[];
        checklist: string[];
    };
    weather: {
        title: string;
        zones: { name: string; risk: string; advice: string }[];
    };
    emergency: {
        title: string;
        contacts: { label: string; number: string }[];
        helipads: string[];
    };
}

export const safetyData: SafetyPageData = {
    meta: {
        title: 'Is Char Dham Yatra Safe? (2026 Truth & Medical Guide)',
        description: 'An honest assessment of Char Dham risks: Heart attacks, Landslides, and Altitude Sickness. Critical safety guide for seniors and families.',
        keywords: ['Char Dham Safety', 'Is Kedarnath Safe', 'Char Dham Death Rate', 'Yamunotri Trek Risk', 'Heart Attack Char Dham']
    },
    hero: {
        title: 'Is Char Dham Yatra Safe?',
        subtitle: 'The Reality Check You Need Before Booking',
        bgImage: 'https://images.unsplash.com/photo-1595842858223-c60395780516?q=80&w=2000', // Landslide/Rain vibe
        stats: [
            { label: 'Avg Altitude', value: '3,500 m', icon: CloudLightning },
            { label: 'O2 Level', value: '85% of Sea Level', icon: HeartPulse },
            { label: 'Trek Intensity', value: 'High', icon: ShieldAlert }
        ]
    },
    realityCheck: {
        title: 'Let\'s Talk About the Risks Honestly',
        description: 'Every year, hundreds of pilgrims face medical emergencies. The Yatra is not just a tour; it is a physical endurance test.',
        risks: [
            {
                title: 'Cardiac Arrest',
                severity: 'High',
                description: 'The #1 cause of death. Cold weather + High Altitude + Steep Trekking constricts blood vessels, putting immense load on the heart.',
                icon: HeartPulse
            },
            {
                title: 'Landslides',
                severity: 'Moderate',
                description: 'Common during Monsoon (July-Aug). The Rishikesh-Rudraprayag highway is prone to falling rocks.',
                icon: CloudLightning
            },
            {
                title: 'Altitude Sickness (AMS)',
                severity: 'Moderate',
                description: 'Headache, nausea, and breathlessness are common at Kedarnath (11,700 ft) and Yamunotri.',
                icon: Stethoscope
            }
        ]
    },
    medical: {
        title: 'Medical Preparation Guide',
        tips: [
            'Start cardio exercises (walking 5km/day) at least 1 month before the trip.',
            'Get a full body checkup, specifically ECG and Blood Pressure.',
            'Carry a portable oxygen cylinder if you are asthmatic or above 60.'
        ],
        checklist: [
            'Pulse Oximeter', 'Diamox (Consult Doctor)', 'Volini/Moov Sprays', 'Warm inner thermals (mandatory)', 'Personal regular medications'
        ]
    },
    weather: {
        title: 'Danger Zones & Weather Alerts',
        zones: [
            { name: 'Sirobagad (Near Srinagar)', risk: 'Active Landslide Zone', advice: 'Avoid traveling here during heavy rains at night.' },
            { name: 'Helang (Near Joshimath)', risk: 'Shooting Stones', advice: 'Keep windows closed and wear helmets if on bikes.' },
            { name: 'Kuber Gad (Yamunotri Trek)', risk: 'Slippery Path', advice: 'Use trekking poles and non-slip shoes.' }
        ]
    },
    emergency: {
        title: 'Emergency Grid',
        contacts: [
            { label: 'Police / Emergency', number: '112' },
            { label: 'Medical Ambulance', number: '108' },
            { label: 'Tourist Safety Helpline', number: '1364' }
        ],
        helipads: ['Guptkashi', 'Phata', 'Sirsi', 'Harsil', 'Badrinath']
    }
};
