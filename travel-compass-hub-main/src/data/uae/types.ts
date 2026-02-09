export type VerdictType = 'MUST_VISIT' | 'OPTIONAL' | 'SKIP_IF_SHORT_TIME' | 'HIDDEN_GEM';

export interface TicketVariant {
    name: string; // e.g., "At the Top (Level 124+125)"
    price: string; // e.g., "AED 169 (₹3,800)"
    inclusions: string[]; // e.g., ["Non-prime hours", "Wi-Fi"]
    bestFor: string; // e.g., "Budget Travelers"
}

export interface IndianContext {
    vegFoodNearby: boolean;
    vegFoodDetails?: string; // e.g., "Saravana Bhavan is 5 mins walk inside Dubai Mall"
    dressCode: string; // e.g., "Strictly modest. Shoulders and knees must be covered."
    allowedItems?: string[]; // e.g., "Water bottles allowed", "No tripods"
    tip: string; // e.g., "Carry a shawl for the AC or modesty requirements."
}

export interface AttractionData {
    id: string; // slug, e.g., "burj-khalifa"
    seo: {
        title: string;
        description: string;
        keywords: string[];
    };
    hero: {
        title: string;
        image: string; // path to image
        verdict: VerdictType;
        verdictText: string; // e.g., "Yes, but only if you book the sunset slot."
    };
    quickFacts: {
        timings: string;
        idealDuration: string;
        bestTimeOfDay: string;
        location: string;
        metroStation?: string;
        // New Field: Best Time specific details
        bestTimeVals?: {
            season: string; // e.g., "Nov - Mar"
            timeOfDay: string; // e.g., "4:30 PM - 6:30 PM (Sunset)"
            reason: string; // e.g., "Sunset views but crowded"
        };
    };
    // New Field: Geo Coordinates for Schema
    geo?: {
        lat: number;
        lng: number;
    };
    review: {
        isWorthIt: boolean;
        whoShouldSkip: string; // e.g., "Skip if you are afraid of heights or on a tight budget (do The Frame instead)."
        firstTimeVisitor: boolean; // Yes/No recommendation
        repeatVisitor: boolean;
    };
    tickets: {
        variants: TicketVariant[];
        officialLink?: string;
        rudrakshPrice: string; // e.g., "₹3,500 via our Bhilai Office"
    };
    indianContext: IndianContext;
    gallery: {
        src: string;
        alt: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
    related: {
        attractionIds: string[]; // slugs of 2 nearby attractions
        itineraryLink: string; // slug of best itinerary, e.g., "dubai-5-day-itinerary"
    };
}
