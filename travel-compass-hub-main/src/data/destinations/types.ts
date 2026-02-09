export interface FAQ {
    question: string;
    answer: string;
}

export interface NearbyPlace {
    name: string;
    distance: string;
    time: string;
}

export interface TripCostBreakdown {
    flights: string;
    hotels: string;
    transfers: string;
    activities: string;
}

export interface DecisionGuide {
    bestFor: string[];
    notFor: string[];
    budgetVsLuxury: string;
    idealDuration: string;
}

export interface HonestNegative {
    title: string;
    description: string;
    severity: 'warning' | 'caution' | 'info';
}

export interface IndianContext {
    visaPolicy: string;
    foodAvailability: string;
    currencyTips: string;
    simCard: string;
}

export interface ExperienceSignal {
    title: string;
    description: string;
    author: string;
}

export interface Hotel {
    name: string;
    image: string;
    priceRange: string;
    rating: number; // 4.5
    stars: number; // 5
    location: string;
    description: string;
    pros: string[];
    cons: string[];
    bestFor: string[]; // 'Couples', 'Families', etc.
    link?: string;
}

export interface Beach {
    name: string;
    image?: string;
    description: string;
    activities: string[];
    bestFor: string[];
    facilities: string[];
}

export interface PlaceToVisit {
    name: string;
    image?: string;
    description: string;
    ticketPrice: string;
    openingHours: string;
    bestFor: string[];
    tips?: string;
    location: string;
}

export interface NightlifeVenue {
    name: string;
    type: 'Club' | 'Bar' | 'Market' | 'Show' | 'Beach Club';
    image?: string;
    description: string;
    location: string;
    priceLevel: '$' | '$$' | '$$$' | '$$$$';
    bestFor: string[];
    openingHours: string;
    tips?: string;
}

export interface DestinationContentData {
    faqs?: FAQ[];
    nearbyPlaces?: NearbyPlace[];
    tripCost?: TripCostBreakdown;
    decisionGuide?: DecisionGuide;
    honestNegatives?: HonestNegative[];
    indianContext?: IndianContext;
    experienceSignals?: ExperienceSignal[];

    // New Rich Content Arrays
    hotels?: Hotel[];
    beaches?: Beach[];
    placesToVisit?: PlaceToVisit[];
    nightlifeVenues?: NightlifeVenue[];

    // Content sections
    intro?: string;
    weather?: string;
    bestTime?: string;

    // EEAT Signals
    lastUpdated?: string; // e.g., '2025-10-15'
    author?: {
        name: string;
        role: string;
        image?: string;
    };
    reviewer?: {
        name: string;
        role: string;
        image?: string;
    };
}

export type DestinationValues = Record<string, DestinationContentData>;
