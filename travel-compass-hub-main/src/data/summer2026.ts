import { Mountain, Snowflake, Sun, Map, Camera, ShieldCheck, Clock, Users } from 'lucide-react';

export interface SummerPackage {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    duration: string;
    price: string;
    originalPrice?: string;
    image: string;
    images: string[];
    tag: string;
    features: string[];
    overview: string;
    highlights: string[];
    itinerary: { day: number; title: string; desc: string }[];
    inclusions: string[];
    exclusions: string[];
    faqs: { question: string; answer: string }[];
}

export const SUMMER_PACKAGES: SummerPackage[] = [
    {
        id: 'ladakh',
        slug: '/ladakh-ultimate-expedition',
        title: 'Leh Ladakh Expedition',
        subtitle: "The Land of High Passes",
        duration: '7 Days / 6 Nights',
        price: "₹28,500",
        originalPrice: "₹35,000",
        image: '/images/ladakh/ladakh-img-1.jpeg',
        images: [
            '/images/ladakh/ladakh-img-1.jpeg',
            '/images/ladakh/ladakh-img-2.jpeg',
            '/images/ladakh/ladakh-img-3.jpeg',
            '/images/ladakh/ladakh-img-4.jpeg',
            '/images/ladakh/ladakh-img-5.jpeg'
        ],
        tag: "Most Booked",
        features: ["Pangong Lake", "Nubra Valley", "Khardung La", "Bike Option"],
        overview: 'The ultimate Himalayan adventure. Cross the world\'s highest motorable passes, visit ancient monasteries, and camp by the color-changing Pangong Lake.',
        highlights: [
            'Pangong Lake Camping',
            'Nubra Valley Camel Safari',
            'Khardung La Pass',
            'Magnetic Hill',
            'Thiksey Monastery'
        ],
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Leh',
                desc: 'Arrive at Leh airport. Transfer to hotel. Complete rest for acclimatization to high altitude. Evening walk in Leh market if health permits.'
            },
            {
                day: 2,
                title: 'Leh Local Sightseeing',
                desc: 'Visit Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib, and Sangam (Confluence of Indus & Zanskar rivers).'
            },
            {
                day: 3,
                title: 'Leh to Nubra Valley via Khardung La',
                desc: 'Drive via Khardung La (17,582 ft). Arrive in Nubra. Enjoy double-humped camel ride at Hunder Sand Dunes.'
            },
            {
                day: 4,
                title: 'Nubra to Pangong Lake via Shyok',
                desc: 'Drive to Pangong Lake via Shyok river route. Witness the changing colors of the lake. Overnight stay in camps.'
            },
            {
                day: 5,
                title: 'Pangong to Leh via Chang La',
                desc: 'Witness sunrise at the lake. Drive back to Leh via Chang La pass. Visit Thiksey Monastery and Rancho School on the way.'
            },
            {
                day: 6,
                title: 'Leh Day Trip or Rest',
                desc: 'Day at leisure or optional visit to Shanti Stupa and Leh Palace. Shopping in local markets.'
            },
            {
                day: 7,
                title: 'Departure',
                desc: 'Transfer to Leh airport for your flight back home with memories of a lifetime.'
            }
        ],
        inclusions: [
            'Accommodation in 3 Star Hotels/Camps',
            'Breakfast and Dinner',
            'All Transfers by Non-AC Xylo/Tempo Traveler',
            'Inner Line Permits',
            'Oxygen Cylinder in Vehicle',
            'Driver & Fuel Charges'
        ],
        exclusions: [
            'Airfare/Train Tickets',
            'Lunch',
            'Personal Expenses (Camel Ride, Rafting)',
            'GST 5%'
        ],
        faqs: [
            // Travel Planning
            { question: "What is the best time to visit Ladakh?", answer: "May to September is the best time. The roads are open, and the weather is pleasant (15°C to 25°C)." },
            { question: "How many days are needed for a perfect Ladakh trip?", answer: "Minimum 6-7 days are required to acclimatize and cover Leh, Nubra, and Pangong comfortably." },
            { question: "Is Ladakh safe for tourists?", answer: "Yes, Ladakh is extremely safe. The locals are hospitable, and it is largely crime-free. However, health safety regarding altitude sickness is important." },
            { question: "Do I need a permit to visit Ladakh?", answer: "Yes, Inner Line Permits (ILP) are required for Nubra Valley, Pangong Lake, and Tso Moriri. We arrange these for you." },

            // Health & Acclimatization
            { question: "What is AMS (Acute Mountain Sickness)?", answer: "AMS occurs due to low oxygen at high altitudes. Symptoms include headache and nausea. We recommend 24-48 hours rest upon arrival." },
            { question: "Is oxygen available in hotels/cabs?", answer: "Most good hotels have oxygen. Our vehicles carry an emergency oxygen cylinder." },
            { question: "Can children or seniors visit Ladakh?", answer: "Yes, but consulting a doctor is mandatory. Children under 5 and seniors with heart/lung issues should be extra cautious." },

            // Costs & Budget
            { question: "What is the average cost of a Ladakh trip?", answer: "A 6-day budget trip starts from ₹18,000 per person (excluding flights), while luxury packages go up to ₹40,000+." },
            { question: "Are there hidden costs?", answer: "No, our packages are transparent. Exclusions like lunch (~₹300/meal) and camel rides (~₹500) are clearly listed." },
            { question: "Is it cheaper to go by bike or car?", answer: "Sharing a Tempo Traveller is usually cheaper than renting a premium bike + fuel + backup vehicle." },

            // Route & Transport
            { question: "How to reach Ladakh from Raipur/Bhilai?", answer: "The best way is to take a flight from Raipur to Delhi, then a connecting flight to Leh. Alternatively, train to Delhi and then flight." },
            { question: "Is the Manali-Leh highway open?", answer: "It usually opens by late May or early June and closes by October." },
            { question: "Can I drive my own car to Ladakh?", answer: "Yes, but high ground clearance (SUV) is recommended. The terrain is rough." },

            // Experiences
            { question: "Will I see snow in summer?", answer: "Yes, you will likely find snow at Khardung La and Chang La passes even in June/July." },
            { question: "Is mobile network available?", answer: "Only Postpaid connections (BSNL, Jio, Airtel) work in Ladakh. BSNL has the widest coverage." },
            { question: "Is vegetarian food available?", answer: "Yes, almost all hotels and camps serve vegetarian food. Maggi and momos are also popular." },
            { question: "What kind of clothes should I pack?", answer: "Pack layers. Days are sunny (t-shirts), but nights are cold (heavy jackets/thermals)." },

            // Booking
            { question: "How far in advance should I book?", answer: "We recommend booking 2-3 months in advance to get the best flight rates and hotel availability." },
            { question: "Can I customize this itinerary?", answer: "Absolutely. We can add days for Tso Moriri, Turtuk, or river rafting." },

            // Specifics
            { question: "Is alcohol allowed in Ladakh?", answer: "It is not banned, but drinking at high altitude causes dehydration and worsens AMS. We strongly advise against it." },
            { question: "Are ATMs available?", answer: "ATMs are available in Leh market, but scarce in Nubra or Pangong. Carry sufficient cash." },
            { question: "What is the voltage for charging?", answer: "Standard 220V. Power cuts can happen, so carry a power bank." },
            { question: "Is rafting available?", answer: "Yes, river rafting is popular at the Sangam point (Indus & Zanskar confluence)." },
            { question: "Can we see the Milky Way?", answer: "Yes! Pangong Lake and Nubra Valley offer some of the best stargazing opportunities in India." },
            { question: "Do we need a pass for Rohtang if coming from Manali?", answer: "Yes, a permit is mandatory for crossing Rohtang Pass." },
            { question: "What documents are required?", answer: "Valid Govt ID (Aadhaar/Voter ID/Passport) is mandatory for permits and hotel check-in." },
            { question: "Is camping safe for families?", answer: "Yes, the camps in Nubra and Pangong are Swiss Tents with attached washrooms and security." },
            { question: "What about toilets on the way?", answer: "Public toilets are limited. Hotels and restaurants en route are the best options." },
            { question: "Can I buy a SIM card in Leh?", answer: "Yes, you can buy a local BSNL/Airtel SIM with your ID proof." },
            { question: "Is photography allowed in monasteries?", answer: "Mostly yes, but flash is often restricted inside prayer halls. Always ask permission." },
            { question: "What souvenirs should I buy?", answer: "Pashmina shawls, apricot jam, Tibetan handicrafts, and silver jewelry." },
            { question: "Is it safe for solo female travelers?", answer: "Ladakh is considered very safe for solo female travelers." },
            { question: "What is the Magnetic Hill mystery?", answer: "It's an optical illusion where a downhill slope appears uphill, making cars look like they roll up against gravity." },
            { question: "Are bikes available for rent in Leh?", answer: "Yes, Himalayan and other bikes are easily available for rent (~₹1500-2000/day)." },
            { question: "How is the road condition to Pangong?", answer: "The road via Chang La is rough and challenging but scenic." },
            { question: "Can I visit Turtuk?", answer: "Yes, Turtuk is a beautiful village near the LOC, open to tourists. It requires an extra day in Nubra." },
            { question: "What if I get sick?", answer: "The SNM Hospital in Leh is well-equipped. Army medical camps are also helpful in remote areas." },
            { question: "Is internet good?", answer: "4G is available in Leh. Nubra and Pangong have weak or no internet." },
            { question: "Can I use UPI?", answer: "UPI works in Leh, but cash is king in remote areas." }
        ]
    },
    {
        id: 'kashmir',
        slug: '/kashmir-tour-package-from-bhilai',
        title: "Kashmir Premium",
        subtitle: "Paradise on Earth",
        duration: "5 Nights / 6 Days",
        price: "₹14,999",
        originalPrice: "₹21,000",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1566322359480-1a1347d4834e?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1623943666290-77a5eb234c9c?q=80&w=1000&auto=format&fit=crop"
        ],
        tag: "Best Seller",
        features: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley", "Houseboat Stay"],
        overview: "Experience the magic of Kashmir with our premium family & couple packages. From the shikara rides on Dal Lake to the snow-capped peaks of Gulmarg, this trip is pure poetry.",
        highlights: [
            "Stay in a traditional Houseboat on Dal Lake.",
            "Take the world's highest cable car (Gondola) in Gulmarg.",
            "Visit splendorous Mughal Gardens (Nishat & Shalimar).",
            "Explore the 'Valley of Shepherds' in Pahalgam.",
            "Witness the saffron fields of Pampore."
        ],
        itinerary: [
            { day: 1, title: "Arrival in Srinagar", desc: "Pickup from Srinagar Airport. Check-in to Houseboat. Enjoy an evening Shikara ride on Dal Lake." },
            { day: 2, title: "Srinagar to Pahalgam", desc: "Drive to Pahalgam via Pampore saffron fields. Visit Aru Valley and Betaab Valley." },
            { day: 3, title: "Pahalgam to Gulmarg", desc: "Scenic drive to Gulmarg. Enjoy the Gondola ride (Phase 1 & 2) and snow activities." },
            { day: 4, title: "Gulmarg to Srinagar", desc: "Return to Srinagar. Visit Shankracharya Temple and local market." },
            { day: 5, title: "Sonamarg Day Trip", desc: "Full day excursion to Sonamarg ('Meadow of Gold'). Visit Thajiwas Glacier." },
            { day: 6, title: "Departure", desc: "Transfer to Srinagar Airport with sweet memories." }
        ],
        inclusions: [
            "Accommodation in 3-star hotels & 1 Night Houseboat",
            "Daily Breakfast and Dinner",
            "Private cab for all transfers and sightseeing",
            "Shikara Ride on Dal Lake (1 Hour)",
            "Toll taxes, parking, and driver allowances"
        ],
        exclusions: [
            "Airfare/Train tickets",
            "Lunch and extra snacks",
            "Gondola Tickets and Pony rides",
            "Garden entry fees",
            "Union Cab in Pahalgam/Gulmarg (if required)"
        ],
        faqs: [
            { question: "Is Kashmir safe for tourists now?", answer: "Yes, tourism is booming in Kashmir and it is very safe. Thousands of tourists visit daily." },
            { question: "Do prepaid sim cards work in Kashmir?", answer: "No, only Postpaid SIM cards (Jio, Airtel, BSNL) work in J&K." },
            { question: "When does it snow in Kashmir?", answer: "Snowfall usually happens from December to March. However, snow is present in Gulmarg Apharwat peak year-round." },
            { question: "How to book Gondola tickets?", answer: "Gondola tickets must be booked online in advance as they sell out weeks ahead." },
            { question: "Is vegetarian food available?", answer: "Yes, veg food is widely available. Kashmir has many pure veg restaurants ('Dhabas')." },
            { question: "What clothes to pack for summer?", answer: "Light woolens are recommended even in summer as evenings can be chilly." },
            { question: "Can we rent a bike in Srinagar?", answer: "Yes, bike rentals are available for local sightseeing." },
            { question: "Is alcohol available?", answer: "Alcohol is available only in select licensed shops and hotels. Public drinking is prohibited." },
            { question: "What is the distance from Srinagar to Gulmarg?", answer: "It is about 50 km and takes 2 hours by car." },
            { question: "Are ATMs available everywhere?", answer: "ATMs are available in Srinagar, Gulmarg, and Pahalgam. Carry cash for remote areas." },
            { question: "Can we see snow in Summer?", answer: "Yes, snow is available at Gulmarg Phase 2 and Sonamarg Thajiwas Glacier throughout summer." },
            { question: "How to reach Kashmir from Raipur?", answer: "Fly Raipur to Delhi, then Delhi to Srinagar. Direct trains are not available to Srinagar yet." },
            { question: "Is it suitable for honeymoon?", answer: "Kashmir is the #1 honeymoon destination in India due to its romantic weather and houseboats." },
            { question: "What are the famous items to buy?", answer: "Saffron, Walnuts, Pashmina Shawls, and Wooden handicrafts." },
            { question: "Do we need an AC car?", answer: "No, the weather is pleasant. Non-AC cabs are standard, but AC can be provided on request." },
            { question: "Is boating safe?", answer: "Yes, Shikaras are very stable and life jackets are provided." },
            { question: "Are there medical facilities?", answer: "Srinagar has excellent hospitals. Basic medical aid is available in tourist spots." },
            { question: "What is the 'Golden Triangle' of Kashmir?", answer: "Srinagar, Gulmarg, and Pahalgam are the three main tourist hubs." },
            { question: "Can we visit Vaishno Devi with this trip?", answer: "Yes, we can extend the trip by 2 days to include Katra (Vaishno Devi)." },
            { question: "Is heavy woollens needed in June?", answer: "Just a light jacket is enough for evenings in June." }
        ]
    },
    {
        id: 'manali',
        slug: '/manali-tour-package-from-bhilai',
        title: "Manali Adventure",
        subtitle: "Mountains Calling",
        duration: "4 Nights / 5 Days",
        price: "₹6,500",
        originalPrice: "₹9,000",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1605649487215-285f33816503?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596020799446-24e5a8726058?q=80&w=1000&auto=format&fit=crop"
        ],
        tag: "Budget Friendly",
        features: ["Solang Valley", "Rohtang Pass", "Hadimba Temple", "Mall Road"],
        overview: "The perfect summer escape to the cool pine forests of Manali. Adventure, spirituality, and relaxation in one package.",
        highlights: [
            "Visit the ancient Hadimba Devi Temple.",
            "Adventure sports (Paragliding, ATV) at Solang Valley.",
            "Snow point visit at Rohtang Pass or Atal Tunnel.",
            "Shopping and cafe hopping at Mall Road.",
            "Relax at Vashisht Hot Water Springs."
        ],
        itinerary: [
            { day: 1, title: "Arrival in Manali", desc: "Arrive in Manali. Check-in to hotel. Evening walk at Mall Road." },
            { day: 2, title: "Manali Local Sightseeing", desc: "Visit Hadimba Temple, Vashisht Baths, Club House, and Tibetan Monastery." },
            { day: 3, title: "Solang Valley & Snow Point", desc: "Full day excursion to Solang Valley for adventure sports. Visit Atal Tunnel Sissu if open." },
            { day: 4, title: "Kullu & Manikaran", desc: "Day trip to Kullu (Shawl factory, Rafting) and Manikaran Gurudwara." },
            { day: 5, title: "Departure", desc: "Check-out and proceed for onward journey." }
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Daily Breakfast and Dinner",
            "Sightseeing by private cab",
            "Volvo bus tickets (Delhi-Manali-Delhi) optional"
        ],
        exclusions: [
            "Lunch and personal expenses",
            "Adventure activities fees",
            "Rohtang Pass permit cost",
            "Heater charges in hotel"
        ],
        faqs: [
            { question: "Is there snow in Manali in Summer?", answer: "Snow is available at Rohtang Pass (high altitude) even in summer." },
            { question: "Is Rohtang Pass open on Tuesdays?", answer: "No, Rohtang Pass is closed for maintenance every Tuesday." },
            { question: "How to reach Manali from Bhilai?", answer: "Train to Delhi/Chandigarh, then Volvo bus to Manali is the best option." },
            { question: "Is rafting safe in Kullu?", answer: "Rafting is exciting and generally safe with certified operators in Babeli/Kullu." },
            { question: "Do we need AC in hotels?", answer: "No, Manali weather is pleasant/cool. Ceiling fans are enough. You might need heaters in winter." },
            { question: "What is Atal Tunnel?", answer: "It is the world's longest highway tunnel above 10,000ft, connecting Manali to Lahaul Valley." },
            { question: "Is paragliding dangerous?", answer: "Accidents are rare. Always fly with licensed pilots in Solang or Dobhi." },
            { question: "What to buy in Manali?", answer: "Kullu shawls, woolens, handicrafts, and apple products." }
        ]
    },
    {
        id: 'spiti',
        slug: '/spiti-valley-tour-package',
        title: "Spiti Valley Expedition",
        subtitle: "Middle Land",
        duration: "8 Nights / 9 Days",
        price: "₹16,500",
        originalPrice: "₹22,000",
        image: "https://images.unsplash.com/photo-1594967389136-2184c6c97561?q=80&w=1000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1626014903708-33e5c9472e3d?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563287042-3a5624127598?q=80&w=1000&auto=format&fit=crop"
        ],
        tag: "Adventure",
        features: ["Key Monastery", "Chandratal Lake", "Kunzum Pass", "Hikkim Post Office"],
        overview: "Journey to the Middle Land, a cold desert mountain valley located high in the Himalayas. Spiti Valley offers breathtaking landscapes, ancient monasteries, and the world's highest post office.",
        highlights: [
            "Visit Key Monastery, the largest in Spiti Valley.",
            "Camp near the crescent-shaped Chandratal Lake.",
            "Send a postcard from Hikkim, the world's highest post office.",
            "Drive through Kunzum Pass (15,060 ft).",
            "See the mummy of Sangha Tenzin in Gue village."
        ],
        itinerary: [
            { day: 1, title: "Manali to Shimla/Narkanda", desc: "Start journey from Manali/Chandigarh towards Narkanda." },
            { day: 2, title: "Narkanda to Sangla/Chitkul", desc: "Enter Kinnaur Valley. Visit the last village of India, Chitkul." },
            { day: 3, title: "Sangla to Kalpa", desc: "Drive to Kalpa. Enjoy views of Kinner Kailash peak." },
            { day: 4, title: "Kalpa to Kaza", desc: "Enter Spiti Valley via Nako and Tabo Monastery (Ajanta of Himalayas)." },
            { day: 5, title: "Kaza Local Sightseeing", desc: "Visit Key Monastery, Kibber, Hikkim, Komic, and Langza." },
            { day: 6, title: "Kaza to Chandratal", desc: "Drive to Chandratal Lake via Kunzum Pass. Camping at the lake." },
            { day: 7, title: "Chandratal to Manali", desc: "Drive back to Manali via Atal Tunnel." }
        ],
        inclusions: ["Accommodation", "Breakfast & Dinner", "Travel by Traveller/SUV", "Inner Line Permis"],
        exclusions: ["Lunch", "Monastery Entry Fees", "Personal Expenses"],
        faqs: [
            { question: "Is Spiti open in Summer?", answer: "Yes, the roads from Manali to Kaza open by mid-June." },
            { question: "How difficult is the terrain?", answer: "Spiti roads are some of the most treacherous in the world. It is an adventure trip." },
            { question: "Is there mobile network?", answer: "Only BSNL works in Kaza and Tabo. No network at Chandratal." },
            { question: "Do we need permits?", answer: "Yes, permits are required for vehicles and foreigners." },
            { question: "Can we see snow?", answer: "Yes, at Kunzum Pass and Rohtang Pass." },
            { question: "Is AMS a risk?", answer: "Yes, Spiti is a high-altitude desert. Proper acclimatization is needed." },
            { question: "Is it safe for families?", answer: "It is an adventure destination. Kids and seniors might find the travel tough." },
            { question: "What is the best time?", answer: "June to September is the best time." },
            { question: "Can we drive?", answer: "Yes, but only experienced drivers with SUVs." },
            { question: "Are there ATMs?", answer: "One ATM in Kaza, often out of cash. Carry cash." }
        ]
    },
    {
        id: 'sikkim',
        slug: '/sikkim-tour-package',
        title: "Sikkim Details",
        subtitle: "Himalayan Wonderland",
        duration: "6 Nights / 7 Days",
        price: "₹18,500",
        originalPrice: "₹25,000",
        image: "https://images.unsplash.com/photo-1625902166948-e8774776654e?q=80&w=1000&auto=format&fit=crop",
        images: [],
        tag: "Nature",
        features: ["Nathula Pass", "Tsomgo Lake", "Gurudongmar Lake"],
        overview: "Explore the organic state of Sikkim. From the high-altitude Gurudongmar Lake to the bustling MG Marg in Gangtok.",
        highlights: ["Visit Nathula Pass (Indo-China Border).", "See the frozen Gurudongmar Lake.", "Explore Gangtok MG Marg."],
        itinerary: [
            { day: 1, title: "Arrival in Gangtok", desc: "Pickup from Bagdogra Airport. Transfer to Gangtok." },
            { day: 2, title: "Tsomgo Lake & Baba Mandir", desc: "Visit high altitude lake and temple. Nathula Pass (Optional)." },
            { day: 3, title: "Gangtok to Lachen", desc: "Drive to North Sikkim. Stop at Seven Sister Waterfalls." },
            { day: 4, title: "Gurudongmar Lake & Lachung", desc: "Early morning drive to Gurudongmar Lake (17,800 ft). Transfer to Lachung." },
            { day: 5, title: "Yumthang Valley", desc: "Visit Valley of Flowers. Return to Gangtok." },
            { day: 6, title: "Departure", desc: "Transfer to Bagdogra Airport." }
        ],
        inclusions: ["Hotels", "Meals", "Transport", "Permits"],
        exclusions: ["Nathula Pass Permit", "Lunch", "Personal Expenses"],
        faqs: [
            { question: "Do we need a passport for Sikkim?", answer: "No, Indians just need an ID card. Foreigners need ILP." },
            { question: "Is Nathula Pass open every day?", answer: "No, it is closed on Mondays and Tuesdays." },
            { question: "Can we see Kanchenjunga?", answer: "Yes, on a clear day from Gangtok and Pelling." },
            { question: "Is it very cold?", answer: "Yes, especially in North Sikkim (Lachen/Lachung)." },
            { question: "Is veg food available?", answer: "Yes, easily available everywhere." },
            { question: "How are the roads?", answer: "Roads to North Sikkim are often rough." },
            { question: "Is it safe?", answer: "Sikkim is one of the safest states in India." },
            { question: "What to buy?", answer: "Tea, Buddhist masks, Thangkas." },
            { question: "Is alcohol cheap?", answer: "Yes, alcohol is cheaper in Sikkim." },
            { question: "Are permits needed?", answer: "Yes, for North Sikkim and Nathula." }
        ]
    },
    {
        id: 'munsiyari',
        slug: '/munsiyari-tour-package',
        title: "Munsiyari Trek",
        subtitle: "Little Kashmir",
        duration: "5 Nights / 6 Days",
        price: "₹12,500",
        originalPrice: "₹16,000",
        image: "https://images.unsplash.com/photo-1605626296347-66a7cb81e8aa?q=80&w=1000&auto=format&fit=crop",
        images: [],
        tag: "Offbeat",
        features: ["Panchachuli Peaks", "Khaliya Top", "Birthi Falls"],
        overview: "A hidden gem in Uttarakhand offering majestic views of the Panchachuli peaks.",
        highlights: ["Trek to Khaliya Top.", "View Panchachuli peaks at sunset.", "Visit Birthi Waterfalls."],
        itinerary: [
            { day: 1, title: "Kathgodam to Chaukori", desc: "Drive through scenic Kumaon hills." },
            { day: 2, title: "Chaukori to Munsiyari", desc: "Arrive in Munsiyari. Sunset view." },
            { day: 3, title: "Khaliya Top Trek", desc: "Trek to the snowy meadows of Khaliya Top." },
            { day: 4, title: "Munsiyari Sightseeing", desc: "Visit Nanda Devi Temple and Tribal Museum." },
            { day: 5, title: "Munsiyari to Kausani", desc: "Drive to Kausani. View Himalayan panorama." },
            { day: 6, title: "Departure", desc: "Drop at Kathgodam." }
        ],
        inclusions: ["Stay", "Meals", "Transport"],
        exclusions: ["Train tickets", "Lunch"],
        faqs: [
            { question: "Where is Munsiyari?", answer: "It is in Pithoragarh district, Uttarakhand." },
            { question: "Is there snow?", answer: "Yes, in winter and early spring." },
            { question: "How to reach?", answer: "Nearest train station is Kathgodam (275 km)." },
            { question: "Is the trek difficult?", answer: "Khaliya Top is a moderate trek suitable for beginners." },
            { question: "Best time to visit?", answer: "March to June and September to November." },
            { question: "Is mobile network present?", answer: "Yes, BSNL and Jio work well." },
            { question: "Is it safe for solo travelers?", answer: "Yes, extremely safe." },
            { question: "Are there luxury hotels?", answer: "No, mostly homestays and budget hotels." },
            { question: "Can we see Nanda Devi?", answer: "Yes, from Kausani and Chaukori." },
            { question: "What to eat?", answer: "Try local Kumaoni cuisine like Bhatt ki Churkani." }
        ]
    }
];

export const OTHER_SUMMER_DESTINATIONS = [];
