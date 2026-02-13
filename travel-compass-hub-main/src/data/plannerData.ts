import { Compass, Map, Palmtree, PartyPopper, Heart, Users, Briefcase, Feather, Mountain } from 'lucide-react';

export const PLANNER_CONFIG = {
    // Step 1: Travel Style (Conditional)
    styles: {
        solo: [
            { id: 'group', title: 'Join a Group Trip', icon: Users, desc: 'Meet new people & shared costs' },
            { id: 'independent', title: 'Solo Adventure', icon: Compass, desc: 'My own pace, my own rules' },
            { id: 'unsure', title: 'Not Sure', icon: Feather, desc: 'Suggest what\'s best for me' }
        ],
        honeymoon: [
            { id: 'romantic', title: 'Relaxed & Romantic', icon: Heart, desc: 'Privacy, luxury & leisure' },
            { id: 'adventure', title: 'Adventurous', icon: Mountain, desc: 'Hiking, activities & exploration' },
            { id: 'balanced', title: 'Best of Both', icon: Compass, desc: 'Sightseeing + Relaxation' }
        ],
        family: [
            { id: 'relaxed', title: 'Relaxed & Easy', icon: Palmtree, desc: 'Less travel, more leisure' },
            { id: 'active', title: 'Active & Fun', icon: Compass, desc: 'Sightseeing & activities for all' },
            { id: 'pilgrimage', title: 'Spiritual / Pilgrimage', icon: Map, desc: 'Visiting holy places' }
        ],
        group: [
            { id: 'party', title: 'Party & Nightlife', icon: PartyPopper, desc: 'Clubs, beaches & fun' },
            { id: 'adventure', title: 'Adventure & Thrill', icon: Mountain, desc: 'Trekking, rafting, camping' },
            { id: 'chill', title: 'Chill & Vibe', icon: Palmtree, desc: 'Relaxing at a resort/villa' }
        ],
        senior: [
            { id: 'comfortable', title: 'Comfort First', icon: Feather, desc: 'Easy pace, premium transport' },
            { id: 'pilgrimage', title: 'Pilgrimage', icon: Map, desc: 'Char Dham, Kashi, etc.' },
            { id: 'scenic', title: 'Nature & Scenery', icon: Mountain, desc: 'Hill stations & landscapes' }
        ]
    },

    // Step 2: Destination Type
    destinations: [
        { id: 'india', title: 'Within India', icon: Map, desc: 'Kashmir, Kerala, Goa, etc.' },
        { id: 'international', title: 'International', icon: Compass, desc: 'Thailand, Dubai, Bali, etc.' },
        { id: 'both', title: 'Open to Both', icon: Palmtree, desc: 'Suggest the best options' }
    ],

    // Step 3: Experience Type (Dynamic based on previous selections, simplified for now)
    experiences: {
        india: [
            { id: 'beach', title: 'Beaches', icon: Palmtree },
            { id: 'mountains', title: 'Mountains', icon: Mountain },
            { id: 'heritage', title: 'Heritage/Culture', icon: Map },
            { id: 'spiritual', title: 'Spiritual', icon: Feather }
        ],
        international: [
            { id: 'beach', title: 'Beaches & Islands', icon: Palmtree },
            { id: 'city', title: 'City & Shopping', icon: Briefcase },
            { id: 'nature', title: 'Nature & Wildlife', icon: Mountain },
            { id: 'culture', title: 'Culture & History', icon: Map }
        ]
    },

    // Step 4: Budget
    budgets: [
        { id: 'budget', title: 'Budget Friendly', desc: 'Best value for money' },
        { id: 'standard', title: 'Standard / Mid-range', desc: 'Good hotels & comfort' },
        { id: 'luxury', title: 'Premium / Luxury', desc: 'Top-tier experience' },
        { id: 'flexible', title: 'Flexible', desc: 'Whatever is worth it' }
    ],

    // Step 5: Timeline
    timelines: [
        { id: 'soon', title: 'Next 1-2 Months' },
        { id: 'later', title: '3-6 Months' },
        { id: 'planning', title: 'Just Planning/exploring' }
    ]
};
