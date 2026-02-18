export interface CharDhamTemple {
    id: string; // 'kedarnath', 'badrinath', etc.
    name: string;
    slug: string;
    deity: string;
    altitude: string;
    district: string;
    image: string;
    description: string;
    spiritualImportance: string;
    history: string;
    openingDate: string; // Dynamic or 'Akshaya Tritiya 2026'
    closingDate: string;
    darshanTiming: {
        morning: string;
        evening: string;
        break: string;
    };
    aarti: {
        name: string;
        time: string;
        description: string;
    }[];
    dressCode: string;
    bestTime: string;
    weather: {
        summer: string;
        monsoon: string;
        winter: string;
    };
    accessibility: {
        road: string;
        trek: string;
        helicopter: boolean;
        pony: boolean;
        palki: boolean;
    };
}

export interface CharDhamRoute {
    from: string;
    to: string;
    distanceKm: number;
    timeHours: number | string;
    roadCondition: 'Good' | 'Fair' | 'Challenging' | 'Landslide Prone';
    description: string;
    stops: {
        name: string;
        type: 'Town' | 'Viewpoint' | 'Rest Stop';
        altitude?: string;
    }[];
}

export interface CharDhamSafetyTip {
    title: string;
    description: string;
    category: 'Medical' | 'Weather' | 'Logistics' | 'Gear';
    severity: 'Info' | 'Warning' | 'Critical';
}

export interface CharDhamPackageVariant {
    title: string;
    duration: string;
    price: string;
    features: string[];
    type: 'Helicopter' | 'Road' | 'Luxury' | 'Budget';
    link: string;
}

export interface CharDhamMasterData {
    temples: Record<string, CharDhamTemple>;
    routes: CharDhamRoute[];
    safetyTips: CharDhamSafetyTip[];
    packages: CharDhamPackageVariant[];
    faqs: {
        question: string;
        answer: string;
        category: 'Registration' | 'Travel' | 'Medical' | 'General';
    }[];
}

// Deep Dive Page Interfaces
export interface TemplePageData {
    id: string;
    meta: {
        title: string;
        description: string;
        keywords: string[];
    };
    overview: {
        bgImage: string;
        title: string;
        subtitle: string;
        highlights: { label: string; value: string; icon: any }[];
    };
    gallery?: string[];
    history: {
        origin: string;
        legends: string[]; // Mahabharata, Puranas
        adiShankaracharya: string;
        timeline: { year: string; event: string }[];
    };
    spiritual: {
        significance: string;
        beliefs: string[];
        rituals: string[];
    };
    dates: {
        opening: string;
        closing: string;
        winterSeat: string;
        festivals: string[];
    };
    reach: {
        road: { route: string; distance: string; description: string }[];
        train: { station: string; distance: string; connectivity: string };
        air: { airport: string; helipad: string; description: string };
    };
    trek: {
        mapImage: string;
        distance: string;
        difficulty: 'Easy' | 'Moderate' | 'Difficult';
        baseCamp: string;
        stops: { name: string; altitude: string; facilities: string }[];
        alternatives: { type: string; cost: string; tips: string }[];
    };
    darshan: {
        timings: { type: string; time: string }[];
        vipOptions: string;
        tips: string[];
        aarti: { name: string; time: string; significance: string }[];
    };
    panchKedar?: {
        description: string;
        link: string;
        temples: { name: string; altitude: string; link: string; description: string }[];
    };
    nearby: {
        name: string;
        distance: string;
        description: string;
        image?: string;
    }[];
    stay: {
        locations: string[];
        types: string[]; // GMVN, Tents, Hotels
        tips: string;
    };
    faqs: {
        question: string;
        answer: string;
    }[];
    weather?: {
        season: string;
        temperature: string;
        tips: string;
    };
    crowd?: {
        busyDates: string;
        peacefulDates: string;
        tips: string;
    };
    itinerary?: {
        title: string;
        days: { day: number; title: string; activities: string[] }[];
    };
    authoritativeSource?: {
        text: string;
        lastVerified: string;
    };
}
