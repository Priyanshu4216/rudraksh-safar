import { MapPin, Navigation, Coffee, Bed, Mountain } from 'lucide-react';

export interface RouteStop {
    id: string;
    name: string;
    type: 'Major Halt' | 'Pitstop' | 'Temple' | 'Start/End';
    altitude: string;
    distanceFromPrev: string;
    description: string;
    facilities: string[]; // e.g., "Hotels", "Petrol Pump", "ATM"
    highlight?: string;
}

export interface RouteSegment {
    title: string;
    from: string;
    to: string;
    totalDistance: string;
    driveTime: string;
    stops: RouteStop[];
}

export interface RoutePageData {
    meta: {
        title: string;
        description: string;
        keywords: string[];
    };
    overview: {
        title: string;
        subtitle: string;
        totalDistance: string;
        duration: string;
    };
    segments: RouteSegment[];
}

export const routeData: RoutePageData = {
    meta: {
        title: 'Char Dham Yatra Route Map 2026: Distances & Road Conditions',
        description: 'Detailed day-by-day route map for Char Dham Yatra. Check distances between Haridwar, Yamunotri, Gangotri, Kedarnath, and Badrinath with elevation info.',
        keywords: ['Char Dham Route Map', 'Haridwar to Kedarnath Distance', 'Yamunotri to Gangotri Road', 'Char Dham Itinerary']
    },
    overview: {
        title: 'The Divine Circuit',
        subtitle: '1,607 km of Himalayan Roads',
        totalDistance: '1,607 km (Approx)',
        duration: '10-12 Days'
    },
    segments: [
        {
            title: 'Leg 1: The Gateway to Yamuna',
            from: 'Haridwar',
            to: 'Jankichatti (Yamunotri Base)',
            totalDistance: '220 km',
            driveTime: '7-8 Hours',
            stops: [
                {
                    id: 'haridwar',
                    name: 'Haridwar',
                    type: 'Start/End',
                    altitude: '314 m',
                    distanceFromPrev: '0 km',
                    description: 'Start your journey with a dip in the Ganga at Har Ki Pauri.',
                    facilities: ['Hotels', 'Railway Station', 'ATMs']
                },
                {
                    id: 'mussoorie',
                    name: 'Mussoorie / Kempty Fall',
                    type: 'Pitstop',
                    altitude: '2,005 m',
                    distanceFromPrev: '85 km',
                    description: 'A scenic lunch stop. Avoid entering the main town to save time.',
                    facilities: ['Restaurants', 'Washrooms']
                },
                {
                    id: 'barkot',
                    name: 'Barkot',
                    type: 'Major Halt',
                    altitude: '1,220 m',
                    distanceFromPrev: '90 km',
                    description: 'The main stay option for Yamunotri. Good hotels available here.',
                    facilities: ['Hotels', 'Petrol Pump', 'Market'],
                    highlight: 'Best place to stay before Yamunotri trek.'
                },
                {
                    id: 'jankichatti',
                    name: 'Jankichatti',
                    type: 'Major Halt',
                    altitude: '2,650 m',
                    distanceFromPrev: '45 km',
                    description: 'Base camp for the trek. Parking available.',
                    facilities: ['Basic Lodges', 'Palki Stand', 'Parking']
                }
            ]
        },
        {
            title: 'Leg 2: Crossing to the Ganges',
            from: 'Barkot',
            to: 'Harsil / Gangotri',
            totalDistance: '160 km',
            driveTime: '6-7 Hours',
            stops: [
                {
                    id: 'uttarkashi',
                    name: 'Uttarkashi',
                    type: 'Major Halt',
                    altitude: '1,158 m',
                    distanceFromPrev: '82 km',
                    description: 'A large town with the Kashi Vishwanath Temple. Stock up on supplies.',
                    facilities: ['District Hospital', 'ATMs', 'Hotels']
                },
                {
                    id: 'harsil',
                    name: 'Harsil Valley',
                    type: 'Major Halt',
                    altitude: '2,620 m',
                    distanceFromPrev: '75 km',
                    description: 'The most beautiful stop on the Yatra. Famous for apples and military cantt.',
                    facilities: ['Luxury Resorts', 'Homestays'],
                    highlight: 'Switzerland of India'
                },
                {
                    id: 'gangotri',
                    name: 'Gangotri Temple',
                    type: 'Temple',
                    altitude: '3,100 m',
                    distanceFromPrev: '25 km',
                    description: 'Darshan of Maa Ganga. Road ends here.',
                    facilities: ['Temple', 'Basic Ashrams']
                }
            ]
        },
        {
            title: 'Leg 3: The Hardest Climb (To Kedar)',
            from: 'Uttarkashi',
            to: 'Guptkashi / Sonprayag',
            totalDistance: '200 km',
            driveTime: '8-9 Hours',
            stops: [
                {
                    id: 'srinagar',
                    name: 'Srinagar',
                    type: 'Pitstop',
                    altitude: '560 m',
                    distanceFromPrev: '100 km',
                    description: 'Largest town in Garhwal. Good for lunch breaks.',
                    facilities: ['Medical College', 'Repairs', 'Hotels']
                },
                {
                    id: 'rudraprayag',
                    name: 'Rudraprayag',
                    type: 'Major Halt',
                    altitude: '610 m',
                    distanceFromPrev: '33 km',
                    description: 'Confluence of Alaknanda and Mandakini rivers.',
                    facilities: ['Hotels', 'Petrol Pump']
                },
                {
                    id: 'guptkashi',
                    name: 'Guptkashi / Phata',
                    type: 'Major Halt',
                    altitude: '1,319 m',
                    distanceFromPrev: '45 km',
                    description: 'Hub for helicopter services to Kedarnath.',
                    facilities: ['Helipads', 'Hotels']
                }
            ]
        },
        {
            title: 'Leg 4: The Divine Finale (To Badri)',
            from: 'Kedarnath',
            to: 'Badrinath',
            totalDistance: '210 km',
            driveTime: '8-10 Hours',
            stops: [
                {
                    id: 'chopta',
                    name: 'Chopta',
                    type: 'Pitstop',
                    altitude: '2,680 m',
                    distanceFromPrev: '75 km',
                    description: 'Optional scenic route via "Mini Switzerland".',
                    facilities: ['Camps', 'Dhabas']
                },
                {
                    id: 'joshimath',
                    name: 'Joshimath',
                    type: 'Major Halt',
                    altitude: '1,890 m',
                    distanceFromPrev: '100 km',
                    description: 'Winter seat of Badrinath. Gateway to Auli.',
                    facilities: ['Hotels', 'Cable Car', 'Army Hospital']
                },
                {
                    id: 'badrinath',
                    name: 'Badrinath Temple',
                    type: 'Temple',
                    altitude: '3,300 m',
                    distanceFromPrev: '45 km',
                    description: 'The final destination. Road accessible.',
                    facilities: ['Temple', 'Hotels', 'Tapt Kund']
                }
            ]
        }
    ]
};
