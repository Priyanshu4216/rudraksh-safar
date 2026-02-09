import { Smartphone, Monitor, MapPin, QrCode, FileCheck, ShieldCheck, AlertTriangle } from 'lucide-react';

export interface RegistrationStep {
    title: string;
    description: string;
    icon?: any;
}

export interface RegistrationMethod {
    title: string;
    type: 'Online' | 'Offline' | 'App';
    steps: RegistrationStep[];
    pros: string[];
    cons: string[];
    recommended: boolean;
}

export interface RegistrationPageData {
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
    whyRegister: {
        title: string;
        reasons: { title: string; desc: string; icon: any }[];
    };
    methods: RegistrationMethod[];
    documents: string[];
    faqs: { question: string; answer: string }[];
}

export const registrationData: RegistrationPageData = {
    meta: {
        title: 'Char Dham Yatra Registration 2026: Step-by-Step Guide',
        description: 'How to register for Char Dham Yatra 2026? A complete guide to the Online Portal, Mobile App, and Offline Counters in Haridwar/Rishikesh.',
        keywords: ['Char Dham Yatra Registration 2026', 'How to register for Kedarnath', 'Uttarakhand Tourism Registration Portal', 'Yatra Pass Online']
    },
    hero: {
        title: 'Char Dham Yatra Registration 2026',
        subtitle: 'Mandatory for Every Pilgrim. Free of Cost.',
        image: 'https://images.unsplash.com/photo-1598425237654-5674722883ef?q=80&w=2574&auto=format&fit=crop'
    },
    whyRegister: {
        title: 'Why is Registration Mandatory?',
        reasons: [
            {
                title: 'Safety & Tracking',
                desc: 'In case of landslides or emergencies, the government uses this data to track and rescue pilgrims.',
                icon: ShieldCheck
            },
            {
                title: 'Crowd Control',
                desc: 'To prevent overcrowding at high-altitude temples like Kedarnath, daily limits are enforced via passes.',
                icon: AlertTriangle
            },
            {
                title: 'Medical Aid',
                desc: 'Your health history helps medical teams provide faster assistance if needed.',
                icon: FileCheck
            }
        ]
    },
    methods: [
        {
            title: 'Method 1: Online Portal (Recommended)',
            type: 'Online',
            recommended: true,
            steps: [
                { title: 'Visit Website', description: 'Go to registrationandtouristcare.uk.gov.in', icon: Monitor },
                { title: 'Create Account', description: 'Sign up using Name and Mobile Number.', icon: FileCheck },
                { title: 'Add Members', description: 'Enter details of all family members traveling with you.', icon: FileCheck },
                { title: 'Download Yatra Pass', description: 'After approval, download the QR Code Yatra Pass.', icon: QrCode }
            ],
            pros: ['Do it from home', 'Avoid long queues in Haridwar', 'Secure your slot in advance'],
            cons: ['Requires smartphone/internet knowledge']
        },
        {
            title: 'Method 2: Mobile App',
            type: 'App',
            recommended: true,
            steps: [
                { title: 'Download App', description: 'Install "Tourist Care Uttarakhand" from Play Store/App Store.', icon: Smartphone },
                { title: 'Register', description: 'Follow the same steps as the website.', icon: Smartphone },
                { title: 'Save QR Code', description: 'Keep the QR code saved on your phone gallery.', icon: QrCode }
            ],
            pros: ['Handy', 'Easy access to QR code'],
            cons: ['App can be glitchy sometimes']
        },
        {
            title: 'Method 3: Offline Counters',
            type: 'Offline',
            recommended: false,
            steps: [
                { title: 'Visit Center', description: 'Go to counters in Haridwar Rly Station or Rishikesh Bus Stand.', icon: MapPin },
                { title: 'Wait in Queue', description: 'Submit Aadhar Card and wait for biometric verification.', icon: FileCheck },
                { title: 'Get Wristband', description: 'Collect your physical registration photocard/wristband.', icon: FileCheck }
            ],
            pros: ['Good for those without smartphones'],
            cons: ['Long waiting times (2-4 hours)', 'Risk of slots being full']
        }
    ],
    documents: [
        'Aadhar Card / Voter ID (Original + Copy)',
        'Passport Size Photo',
        'medical Certificate (If above 60)',
        'COVID Vaccination Certificate (If rules apply)'
    ],
    faqs: [
        {
            question: 'Is registration free?',
            answer: 'Yes, Char Dham registration is 100% FREE. The government does not charge any fee. Beware of agents asking for money.'
        },
        {
            question: 'Can I register after reaching Haridwar?',
            answer: 'Yes, offline counters are available, but we strongly recommend online registration to avoid long queues and guarantee your dates.'
        },
        {
            question: 'Do I need a separate pass for each temple?',
            answer: 'No, a single Yatra Pass covers all 4 temples (Yamunotri, Gangotri, Kedarnath, Badrinath) based on your itinerary selection.'
        }
    ]
};
