import { AttractionData } from "./types";

export const dubaiAttractions: AttractionData[] = [
    {
        id: "burj-khalifa",
        seo: {
            title: "Burj Khalifa Tickets, Timings & Best Time to Visit (2026 Guide)",
            description: "Is Burj Khalifa worth the hype? Honest guide for Indian travelers covering ticket prices, sunset slots, vegetarian food nearby, and skip-the-line tips.",
            keywords: ["burj khalifa tickets", "burj khalifa height", "at the top vs sky lounge", "dubai mall to burj khalifa", "burj khalifa price in rupees"]
        },
        hero: {
            title: "Burj Khalifa: The World's Tallest Building",
            image: "/images/dubai/burj-khalifa-hero.jpg",
            verdict: "MUST_VISIT",
            verdictText: "Yes, it is worth the hype. Standing on the 124th floor seeing the desert meet the ocean is a core Dubai memory."
        },
        quickFacts: {
            timings: "8:30 AM to 11:00 PM (Last entry 10:15 PM)",
            idealDuration: "90 Minutes",
            bestTimeOfDay: "Sunset (4:30 PM - 6:30 PM) for day-to-night views.",
            location: "Downtown Dubai, next to Dubai Mall",
            metroStation: "Burj Khalifa/Dubai Mall Station (Red Line)",
            bestTimeVals: {
                season: "Nov - March",
                timeOfDay: "4:30 PM - 6:30 PM",
                reason: "Sunset views (Crowded but worth it)"
            }
        },
        geo: { lat: 25.1972, lng: 55.2744 },
        review: {
            isWorthIt: true,
            whoShouldSkip: "Skip if you are on a very tight budget (visit Dubai Frame instead for ₹1,500) or if you hate crowds/elevators.",
            firstTimeVisitor: true,
            repeatVisitor: false
        },
        tickets: {
            variants: [
                {
                    name: "At the Top (Level 124 + 125)",
                    price: "AED 169 (₹3,900)",
                    inclusions: ["Standard Entry", "Access to telescopes", "Wi-Fi"],
                    bestFor: "First Timers (Best Value)"
                },
                {
                    name: "At the Top SKY (Level 148)",
                    price: "AED 399 (₹9,200)",
                    inclusions: ["Skip the Line", "Lounge Access", "Dates & Coffee"],
                    bestFor: "Luxury / Couples"
                },
                {
                    name: "The Lounge (Level 152-154)",
                    price: "AED 769 (₹17,500)",
                    inclusions: ["Highest Lounge", "Gourmet Canapes", "Sunset Champagne"],
                    bestFor: "Special Occasions"
                }
            ],
            rudrakshPrice: "₹3,800 (Save ₹100 + No Forex Fees)"
        },
        indianContext: {
            vegFoodNearby: true,
            vegFoodDetails: "Dubai Mall Food Court (Lower Ground) has infinite options including Bikanervala, Indian Palace, and McDonald's (Veg Aloo Tikki available).",
            dressCode: "Smart Casual. No sleeveless shirts or beachwear allowed in 'At the Top'.",
            tip: "Download the 'Dubai Mall' app to navigate. The walk from the Metro to the Burj Khalifa entrance takes 15-20 minutes mostly on travelators."
        },
        gallery: [
            { src: "/images/dubai/burj-khalifa-view.jpg", alt: "View from 124th Floor at Sunset" },
            { src: "/images/dubai/burj-khalifa-night.jpg", alt: "Burj Khalifa illuminated at night" }
        ],
        faqs: [
            {
                question: "Is Level 148 worth the extra money?",
                answer: "Honestly? For most people, NO. The view from 148 is similar to 124. You primarily pay for the 'Skip the Line' privilege and the lounge. If you hate queues, pay extra. If you want the view, stick to 124."
            },
            {
                question: "Can I buy tickets at the spot?",
                answer: "You can, but it is risky and expensive. Prime hours (Sunset) are sold out weeks in advance. We highly recommend booking online at least 5 days prior."
            },
            {
                question: "Are cameras/tripods allowed?",
                answer: "Cameras and phones are allowed. Large tripods and professional gear usually require special permission or are banned due to crowding."
            }
        ],
        related: {
            attractionIds: ["dubai-mall", "dubai-fountain"],
            itineraryLink: "dubai-5-day-itinerary"
        }
    },
    {
        id: "dubai-frame",
        seo: {
            title: "Dubai Frame Tickets & Architecture Guide (2026)",
            description: "The best budget alternative to Burj Khalifa. Compare Old Dubai vs New Dubai from 150m high. Ticket prices and glass floor tips.",
            keywords: ["dubai frame tickets", "zabeel park", "dubai frame vs burj khalifa", "dubai frame glass floor"]
        },
        hero: {
            title: "Dubai Frame: The Golden Picture Frame",
            image: "/images/dubai/dubai-frame-hero.jpg",
            verdict: "HIDDEN_GEM",
            verdictText: "Ideally located to show the contrast between Old and New Dubai. The glass floor walk is thrilling!"
        },
        quickFacts: {
            timings: "9:00 AM to 9:00 PM",
            idealDuration: "60 Minutes",
            bestTimeOfDay: "Morning (10 AM) for fewer crowds, or Sunset.",
            location: "Zabeel Park, Gate 4",
            metroStation: "Max Station (Red Line) + 15 min walk/taxi",
            bestTimeVals: {
                season: "Year Round",
                timeOfDay: "Morning (10 AM)",
                reason: "Cheapest tickets & fewer crowds"
            }
        },
        geo: { lat: 25.2355, lng: 55.3003 },
        review: {
            isWorthIt: true,
            whoShouldSkip: "Those with severe vertigo (the glass floor is the main highlight) or those who have already done The View at The Palm.",
            firstTimeVisitor: true,
            repeatVisitor: false
        },
        tickets: {
            variants: [
                {
                    name: "Standard Entry",
                    price: "AED 50 (₹1,200)",
                    inclusions: ["Park Entry", "Sky Deck Access"],
                    bestFor: "Everyone"
                }
            ],
            rudrakshPrice: "₹1,150 (Instant Confirmation)"
        },
        indianContext: {
            vegFoodNearby: false,
            vegFoodDetails: "Minimal options inside. Better to eat at Karama (nearby) which is the hub of Indian food in Dubai.",
            dressCode: "Respectful clothing. Shoulders and knees covered.",
            tip: "The location (Zabeel Park) is great for a winter picnic. Combine this with a visit to the nearby Glow Garden if visiting in the evening."
        },
        gallery: [
            { src: "/images/dubai/dubai-frame-glass.jpg", alt: "Walking on the glass floor at Dubai Frame" }
        ],
        faqs: [
            {
                question: "Is the glass floor scary?",
                answer: "It creates a thrill as it switches from opaque to transparent when you walk on it! But it is completely safe reinforced glass."
            },
            {
                question: "Dubai Frame vs Burj Khalifa?",
                answer: "Burj Khalifa is about height and status (828m). Dubai Frame is about perspective (150m) and history, framing Old vs New Dubai. Frame is much cheaper (₹1,200 vs ₹4,000)."
            }
        ],
        related: {
            attractionIds: ["museum-of-the-future", "dubai-garden-glow"],
            itineraryLink: "dubai-4-day-itinerary"
        }
    },
    {
        id: "museum-of-the-future",
        seo: {
            title: "Museum of the Future Tickets & Booking Hack (Sold Out?)",
            description: "The most beautiful building on Earth. Guide to booking tickets (they sell out weeks ahead!) and what to expect inside.",
            keywords: ["museum of the future tickets", "motf dubai", "museum of future robot", "advance booking dubai museum"]
        },
        hero: {
            title: "Museum of the Future: Where 2071 Begins",
            image: "/images/dubai/motf-hero.jpg",
            verdict: "MUST_VISIT",
            verdictText: "A masterpiece of engineering and imagination. Unlike any 'museum' you have ever seen."
        },
        quickFacts: {
            timings: "10:00 AM to 9:30 PM",
            idealDuration: "2-3 Hours",
            bestTimeOfDay: "Early morning to avoid the rush.",
            location: "Sheikh Zayed Road",
            metroStation: "Emirates Towers Station (Red Line) connects directly via bridge",
            bestTimeVals: {
                season: "Year Round (Indoor)",
                timeOfDay: "Early Morning (10 AM)",
                reason: "Avoid entry queues"
            }
        },
        geo: { lat: 25.2190, lng: 55.2818 },
        review: {
            isWorthIt: true,
            whoShouldSkip: "If you haven't booked 3 weeks in advance (you won't get tickets). Also, if you expect historical artifacts - this is about technology and concept.",
            firstTimeVisitor: true,
            repeatVisitor: true
        },
        tickets: {
            variants: [
                {
                    name: "Entry Ticket (Ages 4+)",
                    price: "AED 149 (₹3,500)",
                    inclusions: ["Full Access", "Digital Amazon Experience"],
                    bestFor: "Everyone"
                },
                {
                    name: "Child (Under 4)",
                    price: "Free",
                    inclusions: ["Entry"],
                    bestFor: "Toddlers"
                }
            ],
            rudrakshPrice: "₹3,500 (We sometimes have slots when online is sold out)"
        },
        indianContext: {
            vegFoodNearby: true,
            vegFoodDetails: "The museum cafe has some veg options. Emirates Towers nearby has a food court.",
            dressCode: "Casual / Smart Casual.",
            tip: "Tickets are released 30 days in advance and sell out instantly. DO NOT plan this last minute."
        },
        gallery: [
            { src: "/images/dubai/motf-calligraphy.jpg", alt: "Arabic calligraphy on the facade" }
        ],
        faqs: [
            {
                question: "Can I get tickets at the gate?",
                answer: "Absolutely NOT. It is sold out daily. You must book online 2-4 weeks in advance."
            },
            {
                question: "Is it good for kids?",
                answer: "Yes! There is a dedicated 'Future Heroes' floor which is an interactive play zone for children."
            }
        ],
        related: {
            attractionIds: ["dubai-frame", "dubai-mall"],
            itineraryLink: "dubai-5-day-itinerary"
        }
    }
];
