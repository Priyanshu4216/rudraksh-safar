
import {
    Users,
    Heart,
    User,
    Users2,
    Briefcase,
    ShieldCheck,
    Clock,
    Award,
    Smile,
    Sun,
    Snowflake,
    Mountain,
    Plane,
    FileCheck
} from 'lucide-react';

export const HERO_CONTENT = {
    title: "Rudraksh Safar: Crafting Exceptional Travel Experiences",
    subtitle: "Domestic & International Tours | Customised Itineraries | Trusted by Thousands",
    searchPlaceholder: "Search Kedarnath, Dubai, Bali…",
    primaryCta: "Call Now",
    secondaryCta: "WhatsApp Now",
    phoneNumber: "919406182174"
};

export const POPULAR_DESTINATIONS = [
    {
        id: 1,
        name: "Dubai",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
        link: "/dubai-tour-package-from-bhilai",
        tag: "Most Booked",
        fontClass: "font-playfair font-black tracking-tighter"
    },
    {
        id: 2,
        name: "Thailand",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
        link: "/thailand-tour-package-from-bhilai",
        tag: "Trending",
        fontClass: "font-playfair uppercase font-bold tracking-tight"
    },
    {
        id: 3,
        name: "Manali",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
        link: "/manali-tour-package-from-bhilai",
        tag: "Summer",
        fontClass: "font-montserrat font-extrabold uppercase tracking-widest"
    },
    {
        id: 4,
        name: "Kedarnath",
        image: "/images/Kedarnath_Temple.jpg",
        link: "/chardham-yatra-package-from-bhilai",
        tag: "Pilgrimage",
        fontClass: "font-cinzel font-bold"
    },
    {
        id: 5,
        name: "Ladakh",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1000&auto=format&fit=crop",
        link: "/tour-packages-from-bhilai",
        tag: "Adventure",
        fontClass: "font-cinzel uppercase tracking-widest font-bold"
    },
    {
        id: 6,
        name: "Goa",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
        link: "/goa-tour-package-from-bhilai",
        tag: "Relax",
        fontClass: "font-playfair tracking-normal"
    },
    {
        id: 7,
        name: "Kashmir",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1000&auto=format&fit=crop",
        link: "/kashmir-tour-package-from-bhilai",
        tag: "Honeymoon",
        fontClass: "font-cinzel font-bold"
    },
    {
        id: 8,
        name: "Bali",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
        link: "/bali-tour-package-from-bhilai",
        tag: "Global",
        fontClass: "font-handwrite text-3xl translate-y-2"
    }
];

export const TRAVELLER_TYPES = [
    {
        id: 'honeymoon',
        title: 'Couple',
        icon: Heart,
        description: 'Romantic getaways',
        link: '/honeymoon-packages',
        image: "/images/join-homepage/couple.png"
    },
    {
        id: 'family',
        title: 'Family',
        icon: Users,
        description: 'Safe & comfortable trips',
        link: '/family-packages',
        image: "/images/join-homepage/family.png"
    },
    {
        id: 'group',
        title: 'Friends',
        icon: Users2,
        description: 'Fun-filled itineraries',
        link: '/group-tour-packages',
        image: "/images/join-homepage/friends.png"
    },
    {
        id: 'solo',
        title: 'Solo',
        icon: Briefcase,
        description: 'Safe curated experiences',
        link: '/adventure-packages',
        image: "/images/join-homepage/solo.png"
    },
    {
        id: 'senior',
        title: 'Senior',
        icon: User,
        description: 'Relaxed & comfortable tours',
        link: '/chardham-yatra-package-from-bhilai', // Using existing relevant link
        image: "/images/join-homepage/senior_citizen.png"
    }
];

export const SEASONAL_PICKS = [
    {
        id: 1,
        title: "Songkaran Festival",
        subtitle: "THAILAND",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
        link: "/thailand-tour-packages",
        color: "bg-blue-100 text-blue-700",
        fontClass: "font-playfair uppercase font-bold tracking-tight"
    },
    {
        id: 2,
        title: "Ladakh Bike Trip",
        subtitle: "ADVENTURE",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1000&auto=format&fit=crop",
        link: "/package/ladakh",
        color: "bg-amber-100 text-amber-700",
        fontClass: "font-cinzel uppercase tracking-widest font-bold"
    },
    {
        id: 3,
        title: "Char Dham Yatra",
        subtitle: "PILGRIMAGE",
        image: "/images/chardham-images.jpg",
        link: "/chardham-yatra-package",
        color: "bg-indigo-100 text-indigo-700",
        fontClass: "font-cinzel font-bold tracking-wide"
    },
    {
        id: 4,
        title: "Tulip Festival",
        subtitle: "KASHMIR",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1000&auto=format&fit=crop",
        link: "/package/kashmir",
        color: "bg-pink-100 text-pink-700",
        fontClass: "font-cinzel font-bold"
    },
    {
        id: 5,
        title: "Shopping Festival",
        subtitle: "DUBAI",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
        link: "/dubai-tour-packages",
        color: "bg-yellow-100 text-yellow-700",
        fontClass: "font-playfair font-black tracking-tighter"
    },
    {
        id: 6,
        title: "Tropical Summer",
        subtitle: "BALI",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
        link: "/package/bali",
        color: "bg-green-100 text-green-700",
        fontClass: "font-handwrite text-3xl md:text-4xl translate-y-2"
    }
];

export const VISA_EASY_DESTINATIONS = [
    {
        id: 1,
        title: "Thailand",
        subtitle: "The Kingdom of",
        slug: "thailand", // Links to /visa/thailand
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
        fontClass: "font-playfair uppercase font-bold"
    },
    {
        id: 2,
        title: "Maldives",
        subtitle: "Create Memories in",
        slug: "maldives", // Links to /visa/maldives
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
        fontClass: "font-montserrat uppercase tracking-widest font-light"
    },
    {
        id: 3,
        title: "Bali",
        subtitle: "Island of Gods",
        slug: "bali", // Links to /visa/bali
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
        fontClass: "font-handwrite text-2xl"
    },
    {
        id: 4,
        title: "Malaysia",
        subtitle: "Truly Asia",
        slug: "malaysia", // Links to /visa/malaysia
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop",
        fontClass: "font-serif font-bold italic"
    },
    {
        id: 5,
        title: "Vietnam",
        subtitle: "Timeless Charm",
        slug: "/package/vietnam", // Links to Package (No Visa Page)
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop",
        fontClass: "font-playfair font-medium"
    },
    {
        id: 6,
        title: "Mauritius",
        subtitle: "The Star and Key",
        slug: "/package/mauritius", // Links to Package (No Visa Page)
        image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1000&auto=format&fit=crop",
        fontClass: "font-montserrat font-bold"
    }
];

export const SEARCH_EXPERIENCE_DESTINATIONS = [
    {
        id: 1,
        name: "Goa",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
        slug: "package/goa",
        tag: "Beach",
        fontClass: "font-playfair tracking-normal"
    },
    {
        id: 2,
        name: "Ladakh",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1000&auto=format&fit=crop",
        slug: "package/ladakh",
        tag: "Adventure",
        fontClass: "font-cinzel uppercase tracking-widest font-bold"
    },
    {
        id: 4,
        name: "Dubai",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
        slug: "dubai-tour-packages",
        tag: "City of Life",
        fontClass: "font-playfair font-black tracking-tighter"
    },
    {
        id: 5,
        name: "Singapore",
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000&auto=format&fit=crop",
        slug: "package/singapore",
        tag: "The Lion City",
        fontClass: "font-serif italic tracking-wide"
    },
    {
        id: 7,
        name: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
        slug: "package/maldives",
        tag: "Honeymoon",
        fontClass: "font-montserrat uppercase tracking-[0.3em] font-light text-sm md:text-base"
    },
    {
        id: 8,
        name: "Bali",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
        slug: "package/bali",
        tag: "Island Life",
        fontClass: "font-handwrite text-3xl md:text-4xl translate-y-2"
    },
    {
        id: 9,
        name: "Thailand",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop",
        slug: "thailand-tour-packages",
        tag: "Party",
        fontClass: "font-playfair uppercase font-bold tracking-tight"
    },
    {
        id: 10,
        name: "Kashmir",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1000&auto=format&fit=crop",
        slug: "package/kashmir",
        tag: "Paradise",
        fontClass: "font-cinzel font-bold"
    },
    {
        id: 11,
        name: "Kerala",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop",
        slug: "package/munnar",
        tag: "God's Country",
        fontClass: "font-serif font-medium tracking-tight italic"
    },
    {
        id: 12,
        name: "Manali",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
        slug: "package/manali",
        tag: "Mountains",
        fontClass: "font-montserrat font-extrabold uppercase tracking-widest"
    },
    {
        id: 13,
        name: "Rajasthan",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop",
        slug: "package/udaipur",
        tag: "Royal Heritage",
        fontClass: "font-playfair tracking-normal italic font-semibold"
    },
    {
        id: 14,
        name: "Char Dham",
        image: "https://images.unsplash.com/photo-1649147313351-c86537fda0eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "chardham-yatra-package",
        tag: "Pilgrimage",
        fontClass: "font-cinzel font-semibold tracking-wide"
    },
    {
        id: 15,
        name: "Andaman",
        image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=1000&auto=format&fit=crop",
        slug: "package/andaman",
        tag: "Blue Waters",
        fontClass: "font-montserrat font-light uppercase tracking-[0.2em]"
    },
    {
        id: 16,
        name: "Sri Lanka",
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1000&auto=format&fit=crop",
        slug: "package/srilanka",
        tag: "Pearl of Ocean",
        fontClass: "font-playfair font-bold text-shadow-sm"
    },
    {
        id: 17,
        name: "Nepal",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop",
        slug: "package/nepal",
        tag: "Himalayas",
        fontClass: "font-handwrite text-3xl md:text-4xl"
    },
    {
        id: 18,
        name: "Vietnam",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop",
        slug: "package/vietnam",
        tag: "Timeless Charm",
        fontClass: "font-playfair font-medium"
    },
    {
        id: 19,
        name: "Malaysia",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop",
        slug: "package/malaysia",
        tag: "Truly Asia",
        fontClass: "font-serif font-bold italic"
    },
    {
        id: 20,
        name: "Mauritius",
        image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1000&auto=format&fit=crop",
        slug: "package/mauritius",
        tag: "The Star Key",
        fontClass: "font-montserrat font-bold"
    },

    {
        id: 23,
        name: "Kedarnath",
        image: "/images/Kedarnath_Temple.jpg",
        slug: "kedarnath-temple",
        tag: "Divine Shiva",
        fontClass: "font-cinzel font-bold text-shadow"
    },
    {
        id: 24,
        name: "Tungnath",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop", // Placeholder or use Unsplash
        slug: "tungnath-temple",
        tag: "Highest Shiva",
        fontClass: "font-cinzel font-semibold"
    }
];

export const PILGRIMAGE_SPECIALS = [
    {
        id: 1,
        name: "Char Dham Yatra",
        image: "/images/chardham-images.jpg",
        link: "/chardham-yatra-package-from-bhilai",
        fontClass: "font-cinzel font-bold tracking-wide"
    },
    {
        id: 2,
        name: "Kedarnath",
        image: "/images/Kedarnath_Temple.jpg",
        link: "/kedarnath-temple",
        fontClass: "font-cinzel font-semibold"
    },
    {
        id: 3,
        name: "Vaishno Devi",
        image: "/images/Vaishno-Devi.jpg",
        link: "/tour-packages-from-bhilai",
        fontClass: "font-montserrat font-bold uppercase tracking-widest"
    },
    {
        id: 4,
        name: "Jagannath Puri",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Puri_Jagannath_Temple.jpg?width=800",
        link: "/tour-packages-from-bhilai",
        fontClass: "font-serif font-bold italic"
    },
    {
        id: 5,
        name: "Somnath",
        image: "/images/Somnath.jpg",
        link: "/tour-packages-from-bhilai",
        fontClass: "font-cinzel font-bold tracking-wide"
    },
    {
        id: 6,
        name: "Shirdi",
        image: "/images/shirdi.jpg",
        link: "/tour-packages-from-bhilai",
        fontClass: "font-handwrite text-2xl"
    }
];



export const TRUST_POINTS = [
    {
        icon: ShieldCheck,
        title: "100% Customised Tours",
        desc: "Itineraries built around your preferences"
    },
    {
        icon: Clock,
        title: "24×7 Travel Support",
        desc: "We are always just a call away"
    },
    {
        icon: Award,
        title: "10+ Years Experience",
        desc: "Serving travellers from Bhilai, Raipur & Durg"
    },
    {
        icon: Smile,
        title: "1000+ Happy Travellers",
        desc: "Trusted by families across Chhattisgarh"
    },
    {
        icon: FileCheck,
        title: "Visa & Booking Assistance",
        desc: "Flights, visas & hotels handled smoothly"
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Yogi Rao",
        location: "5 reviews",
        text: "Our family tour was smooth and stress-free thanks to Rudraksh Safar. Hotels were clean, drivers were professional, and planning was spot on.",
        rating: 5
    },
    {
        id: 2,
        name: "Priyankar Pal",
        location: "12 reviews",
        text: "Hamara Thailand trip with friends Nice experience tha Ham dobara next trip fir jaldi book karenge.",
        rating: 5
    },
    {
        id: 3,
        name: "Mayank Manikpuri",
        location: "1 review",
        text: "First time booking through a travel agency and it was super easy. Full paisa vasool experience! Trustworthy!!",
        rating: 5
    },
    {
        id: 4,
        name: "Indrakant Sahu",
        location: "2 reviews",
        text: "Hama family ke saath kashmir gaye the Hamara trip awesum tha Good service.",
        rating: 5
    }
];
