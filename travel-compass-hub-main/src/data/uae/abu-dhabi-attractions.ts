import { AttractionData } from "./types";

export const abuDhabiAttractions: AttractionData[] = [
    {
        id: "sheikh-zayed-mosque",
        seo: {
            title: "Sheikh Zayed Grand Mosque Guide: Dress Code & Timings (2026)",
            description: "The most beautiful mosque in the world. Strict dress code guide for Indians, best photography spots, and entry fee details (It is free!).",
            keywords: ["sheikh zayed mosque dress code", "abu dhabi mosque timings", "grand mosque abu dhabi ticket price", "is abaya compulsory in abu dhabi mosque"]
        },
        hero: {
            title: "Sheikh Zayed Grand Mosque: The White Pearl",
            image: "/images/uae/mosque-hero.jpg",
            verdict: "MUST_VISIT",
            verdictText: "Non-negotiable. If you go to UAE and miss this, you missed the soul of the country. It is breathtakingly beautiful."
        },
        quickFacts: {
            timings: "9:00 AM to 10:00 PM (Fridays: 9:00 AM - 12:00 PM is closed for prayers)",
            idealDuration: "2 Hours",
            bestTimeOfDay: "4:00 PM to catch the transition from white marble (Day) to blue lighting (Night).",
            location: "Sheikh Rashid Bin Saeed Street, Abu Dhabi",
            metroStation: "No Metro. You need a Taxi or Bus from IBS (Abu Dhabi Bus Station)."
        },
        review: {
            isWorthIt: true,
            whoShouldSkip: "Nobody. Even if you are not religious, the architecture rivals the Taj Mahal.",
            firstTimeVisitor: true,
            repeatVisitor: true
        },
        tickets: {
            variants: [
                {
                    name: "General Entry",
                    price: "Free",
                    inclusions: ["Mosque Access", "Guided Tours (Free)"],
                    bestFor: "Everyone"
                }
            ],
            rudrakshPrice: "Free (We include the Transport in our Abu Dhabi Tour)"
        },
        indianContext: {
            vegFoodNearby: true,
            vegFoodDetails: "The 'Souq Al Jami' (underground mall at the mosque) has a McDonald's, Tim Hortons, and several cafes with veg options.",
            dressCode: "STRICT. Women: Head must be covered, loose clothes covering wrists and ankles. Men: No shorts, no sleeveless. If you fail this, you must buy an Abaya (approx AED 45). They no longer lend free Abayas.",
            tip: "Do not bring food or water inside. Security is airport-level strict."
        },
        gallery: [
            { src: "/images/uae/mosque-day.jpg", alt: "White marble courtyard in daylight" },
            { src: "/images/uae/mosque-night.jpg", alt: "Mosque illuminated in blue at night" }
        ],
        faqs: [
            {
                question: "Is entry really free?",
                answer: "Yes, 100% free. You just need to register online for a visitor pass to skip the queue."
            },
            {
                question: "What if my clothes are not proper?",
                answer: "You will be denied entry. You can buy an Abaya from the shops in the Souq (Entry Mall) for AED 40-50. Better to dress modestly from the hotel."
            }
        ],
        related: {
            attractionIds: ["ferrari-world", "qasr-al-watan"],
            itineraryLink: "abu-dhabi-day-trip"
        }
    },
    {
        id: "ferrari-world",
        seo: {
            title: "Ferrari World Abu Dhabi Tickets & Formula Rossa Guide",
            description: "Home of the world's fastest rollercoaster (240km/h). Is it worth the headache? Honest guide for thrill-seekers and families.",
            keywords: ["ferrari world tickets", "formula rossa speed", "ferrari world rides", "yas island theme parks"]
        },
        hero: {
            title: "Ferrari World: Speed Capital of Earth",
            image: "/images/uae/ferrari-world-hero.jpg",
            verdict: "MUST_VISIT",
            verdictText: "Only if you love speed. Formula Rossa (0-240km/h in 4.9s) is a life-changing experience."
        },
        quickFacts: {
            timings: "11:00 AM to 8:00 PM",
            idealDuration: "4-5 Hours",
            bestTimeOfDay: "Weekdays to avoid queues.",
            location: "Yas Island, Abu Dhabi",
            metroStation: "No Metro. Use Yas Express Shuttle."
        },
        review: {
            isWorthIt: true,
            whoShouldSkip: "Skip if you get motion sickness easily or have neck/back problems. Also skip if you are just 'accompanying' others - entry is expensive even if you don't ride.",
            firstTimeVisitor: true,
            repeatVisitor: false
        },
        tickets: {
            variants: [
                {
                    name: "Standard Day Pass",
                    price: "AED 345 (₹8,000)",
                    inclusions: ["Unlimited Rides"],
                    bestFor: "Thrill Seekers"
                },
                {
                    name: "Quick Pass (Add-on)",
                    price: "+ AED 150",
                    inclusions: ["Skip the Line"],
                    bestFor: "Weekends / Peak Season"
                }
            ],
            rudrakshPrice: "₹7,500 (Combo with Warner Bros available)"
        },
        indianContext: {
            vegFoodNearby: true,
            vegFoodDetails: "Mamma Rossella (inside) has good veg pizza/pasta. Yas Mall (connected) has an Indian Pavilion food court.",
            dressCode: "Casual. Wear secure shoes (no flip-flops) if you plan to ride Formula Rossa.",
            tip: "Lockers are paid and expensive. Carry minimum baggage. Formula Rossa often closes for maintenance - check the website before booking."
        },
        gallery: [
            { src: "/images/uae/formula-rossa.jpg", alt: "Formula Rossa rollercoaster train" }
        ],
        faqs: [
            {
                question: "Is Formula Rossa scary?",
                answer: "It is intense. The G-force pins you to your seat. You have to wear protective goggles (provided). It's over in 60 seconds, but the rush lasts for hours."
            },
            {
                question: "Can I just buy an entry ticket without rides?",
                answer: "No, the standard ticket includes all rides. There is no 'spectator' ticket."
            }
        ],
        related: {
            attractionIds: ["warner-bros-world", "yas-waterworld"],
            itineraryLink: "abu-dhabi-day-trip"
        }
    }
];
