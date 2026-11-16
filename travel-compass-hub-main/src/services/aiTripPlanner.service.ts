// Advanced AI Trip Planner Service with Domain Training, Security, and Detailed Itineraries
// Supports Google Gemini, Groq (Llama 3.3 70B), OpenAI (GPT-4o), and Anthropic (Claude 3.5 Sonnet)

import { AiRateLimiter, sanitizeInput, clampNumber } from '@/lib/aiSafety';

export interface TripRequest {
    packageChoice: string;
    destination: string;
    startingCity: string;
    days: number;
    travellers: number;
    style: string;
    pace: 'Relaxed' | 'Balanced' | 'Packed';
    vibes: string[];
    travelMonth?: string;
    specialRequirements?: string[];
    includeFlight?: boolean;
    notes?: string;
}

export interface DayPlan {
    day: number;
    title: string;
    route?: string;
    morning: string;
    afternoon: string;
    evening: string;
    dinner?: string;
    stay?: string;
    insiderTip?: string;
    highlights: string[];
}

export interface HotelRecommendation {
    name: string;
    category: string;
    location: string;
    highlight: string;
}

export interface CostEstimator {
    budgetTier: string;
    comfortTier: string;
    luxuryTier: string;
    includes: string[];
    excludes: string[];
}

export interface GeneratedItinerary {
    title: string;
    tagline: string;
    overview: string;
    routeMap: string[];
    totalDistanceApprox: string;
    bestTimeToVisit: string;
    days: DayPlan[];
    costEstimator: CostEstimator;
    recommendedHotels: HotelRecommendation[];
    travelAdvisories: string[];
    documentRequirements: string[];
    providerUsed: string;
    generatedAt: string;
}

const API_TIMEOUT_MS = 25000; // 25s timeout

const getEnvKey = (plainKey: string, viteKey: string): string | null => {
    const viteVal = (import.meta as any).env?.[viteKey];
    const plainVal = (import.meta as any).env?.[plainKey];
    const val = (viteVal || plainVal || '').trim();
    if (!val || val.includes('your_') || val.includes('_here') || val.length < 10) {
        return null;
    }
    return val;
};

// 1. Google Gemini Provider
async function generateWithGemini(prompt: string, apiKey: string): Promise<string> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
            method: 'POST',
            signal: controller.signal,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.65,
                    topP: 0.95,
                    maxOutputTokens: 3500,
                }
            })
        });

        if (!res.ok) {
            throw new Error(`Gemini API error: ${res.status}`);
        }
        const data = await res.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    } finally {
        clearTimeout(timeoutId);
    }
}

// 2. Groq Provider
async function generateWithGroq(prompt: string, apiKey: string): Promise<string> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    {
                        role: 'system',
                        content: 'You are Chief Travel Architect at Rudraksh Safar. Create exhaustive, prestigious, day-by-day travel blueprints in valid JSON format only.'
                    },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.65,
                max_tokens: 3800
            })
        });

        if (!res.ok) {
            throw new Error(`Groq API error: ${res.status}`);
        }
        const data = await res.json();
        return data.choices?.[0]?.message?.content || '';
    } finally {
        clearTimeout(timeoutId);
    }
}

// 3. OpenAI Provider
async function generateWithOpenAI(prompt: string, apiKey: string): Promise<string> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: 'You are Chief Travel Architect at Rudraksh Safar. Create exhaustive, prestigious, day-by-day travel blueprints in valid JSON format only.'
                    },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.65,
                max_tokens: 3800
            })
        });

        if (!res.ok) {
            throw new Error(`OpenAI API error: ${res.status}`);
        }
        const data = await res.json();
        return data.choices?.[0]?.message?.content || '';
    } finally {
        clearTimeout(timeoutId);
    }
}

// 4. Anthropic Provider
async function generateWithAnthropic(prompt: string, apiKey: string): Promise<string> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    try {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 3800,
                messages: [{ role: 'user', content: prompt }]
            })
        });

        if (!res.ok) {
            throw new Error(`Anthropic API error: ${res.status}`);
        }
        const data = await res.json();
        return data.content?.[0]?.text || '';
    } finally {
        clearTimeout(timeoutId);
    }
}

/**
 * Builds the comprehensive training system prompt for AI models
 */
function buildExpertTrainingPrompt(trip: TripRequest): string {
    return `You are the Executive Vice President of Curated Journeys at "Rudraksh Safar", central India's premier luxury & experiential travel company (headquartered in Bhilai/Raipur, Chhattisgarh).

TRAVEL REQUEST DETAILS:
- Target Destination: "${trip.destination}"
- Departure Hub / Starting City: "${trip.startingCity}"
- Preferred Base Package: "${trip.packageChoice}"
- Duration: ${trip.days} Days / ${Math.max(1, trip.days - 1)} Nights
- Travellers: ${trip.travellers} Person(s)
- Accommodation & Style Tier: "${trip.style}" (e.g. Comfort, Luxury, Budget)
- Travel Tempo: "${trip.pace}" (Relaxed = few stops, ample leisure; Balanced = steady pace with quality highlights; Packed = maximal sights, early mornings)
- Desired Experiential Vibes: ${trip.vibes.length > 0 ? trip.vibes.join(', ') : 'Culture, Nature & Relaxation'}
- Preferred Departure Month / Window: "${trip.travelMonth || 'Upcoming season'}"
- Transport Coordination: "${trip.includeFlight ? 'Include Flight + Private Chauffeur coordination from ' + trip.startingCity : 'Dedicated Private AC Chauffeur Cab point-to-point'}"
- Custom Special Preferences: "${trip.specialRequirements && trip.specialRequirements.length > 0 ? trip.specialRequirements.join(', ') : 'Standard luxury amenities'}"
- Traveler Special Instructions: "${trip.notes || 'None'}"

ARCHITECTURAL GUIDELINES FOR ITINERARY DESIGN:
1. GEOGRAPHIC REALISM: Ensure driving times, airport transit, mountain ghats, and boat transfers reflect accurate on-ground logistics. If originating from Raipur/Bhilai, mention realistic flights/train connections to the starting base.
2. TIMESTAMPS & SPECIFICS: For each day, provide actionable timestamps (e.g., "08:30 AM", "01:00 PM", "05:30 PM") rather than vague generalizations.
3. LOCAL GASTRONOMY: Recommend authentic regional dishes and famous local dining establishments or culinary traditions (e.g., Wazwan/Kahwa in Kashmir, Malabar Feast in Kerala, Desert Dune Dinner in Dubai, Pad Thai & Mango Sticky Rice in Thailand).
4. INSIDER SECRETS: Provide high-value travel hacks (e.g., photography viewpoints, skipping ticket queues, local dress codes, permit advice).
5. COSTING TRANSPARENCY: Provide realistic estimates in Indian Rupees (INR) for 3 tiers (Budget, Comfort, Luxury).

Return ONLY a valid JSON object matching EXACTLY this TypeScript schema (do not wrap in markdown backticks or commentary):
{
  "title": "A prestigious, evocative trip title (e.g., 6-Day Royal Kashmir & Gulmarg Winter Odyssey)",
  "tagline": "One compelling subtitle capturing the essence of the journey",
  "overview": "Exhaustive 2-paragraph professional narrative explaining the journey arc, scenic highlights, and experiential balance.",
  "routeMap": ["City A", "City B", "City C"],
  "totalDistanceApprox": "e.g., ~420 km total road transit",
  "bestTimeToVisit": "e.g., October to March for pleasant climate and snowfall in upper reaches",
  "days": [
    {
      "day": 1,
      "title": "Day title capturing the day theme",
      "route": "e.g., Srinagar Airport to Boulevard Road (18 km / 45 mins)",
      "morning": "Detailed morning breakdown with exact timings and arrival logistics",
      "afternoon": "Detailed afternoon activities, hotel check-in experience, lunch recommendations",
      "evening": "Scenic sunset, leisurely exploration, photo opportunities",
      "dinner": "Evening meal specialty and ambiance recommendation",
      "stay": "Hotel/Resort classification and stay type",
      "insiderTip": "A genuine local insider tip or logistical advice",
      "highlights": ["Highlight 1", "Highlight 2", "Highlight 3"]
    }
  ],
  "costEstimator": {
    "budgetTier": "₹XX,XXX - ₹XX,XXX per person (3-Star Boutique)",
    "comfortTier": "₹XX,XXX - ₹XX,XXX per person (4-Star Premium & Private Cab)",
    "luxuryTier": "₹XX,XXX - ₹XX,XXX per person (5-Star Heritage / Pool Villa)",
    "includes": [
      "Dedicated Private AC Sedan/SUV for entire tour with fuel & toll taxes",
      "Daily gourmet buffet breakfast and select multi-course dinners",
      "Pre-arranged sightseeing permits and VIP entry passes where applicable",
      "24/7 dedicated Rudraksh Safar on-tour concierge manager"
    ],
    "excludes": [
      "Domestic/International airfare to departure hub (quoted upon flight booking)",
      "Personal expenses, optional adventure activities (ATV, paragliding)",
      "Camera fees and personal travel insurance"
    ]
  },
  "recommendedHotels": [
    {
      "name": "Exact or representative premium hotel name",
      "category": "4-Star Deluxe / 5-Star Luxury Resort",
      "location": "Central scenic district",
      "highlight": "Key standout feature (e.g. heated pine-wood rooms, private infinity pool)"
    }
  ],
  "travelAdvisories": [
    "Advisory on seasonal clothing layers and weather",
    "Health and hydration guidelines"
  ],
  "documentRequirements": [
    "Valid Government Photo ID (Aadhaar/Passport) required for all travellers",
    "Special permits or e-visa guidelines"
  ]
}`;
}

/**
 * Rich Fallback Generator matching the production schema when API keys are not provided
 */
function generateDetailedFallbackItinerary(trip: TripRequest): GeneratedItinerary {
    const dest = trip.destination || 'Incredible Destination';
    const startCity = trip.startingCity || 'Raipur / Bhilai';
    const daysCount = clampNumber(trip.days, 1, 14, 6);
    const nights = Math.max(1, daysCount - 1);
    const vibes = trip.vibes.length > 0 ? trip.vibes : ['Culture', 'Nature', 'Relaxation'];

    const days: DayPlan[] = [];

    for (let i = 1; i <= daysCount; i++) {
        if (i === 1) {
            days.push({
                day: 1,
                title: `Grand Arrival & Welcome to ${dest}`,
                route: `${startCity} → ${dest} Transit & Hotel Check-in`,
                morning: `06:30 AM - Board scheduled departure from ${startCity}. Warm meet-and-greet by your private Rudraksh Safar chauffeur upon arrival at ${dest} airport/station with personalized welcome assistance.`,
                afternoon: `01:30 PM - Private luxury transfer to your selected property. Smooth priority check-in, unpack, and unwind with traditional welcome drinks. Enjoy a light orientation lunch at the property's garden cafe.`,
                evening: `05:30 PM - Relaxed sunset stroll along the city's historic promenade or lakeside promenade. Capture golden-hour photography and soak in the evening atmosphere.`,
                dinner: `08:00 PM - Welcome dinner featuring authentic regional specialties and live local music performance.`,
                stay: `${trip.style} Category: Premium City View Room with modern amenities.`,
                insiderTip: `Keep your digital flight boarding passes and ID handy at arrival; exchange local currency at verified counters if traveling internationally.`,
                highlights: ['Chauffeured Meet & Greet', 'Comfort Check-in', 'Sunset Orientation Stroll']
            });
        } else if (i === daysCount) {
            days.push({
                day: i,
                title: `Fond Farewells & Return Journey to ${startCity}`,
                route: `${dest} Hotel Checkout → Departure Terminal`,
                morning: `08:00 AM - Sumptuous farewell buffet breakfast. Morning leisure time to pick up authentic handcrafted souvenirs, local spices, or artisanal crafts from certified government emporiums.`,
                afternoon: `12:00 PM - Hotel checkout with full luggage assistance. Final traditional meal at a celebrated heritage restaurant before vehicle transfer.`,
                evening: `04:30 PM - Arrival at terminal with ample time for check-in. Depart for ${startCity} with lifelong memories meticulously crafted by Rudraksh Safar.`,
                dinner: `En-route dining as per transit schedule.`,
                stay: `Home Sweet Home (${startCity}).`,
                insiderTip: `Ensure luggage weight meets airline/train limits and pack delicate souvenirs in central cabin bag layers.`,
                highlights: ['Artisan Souvenir Shopping', 'Scenic Farewell Drive', 'Concierge Airport Drop']
            });
        } else {
            const currentVibe = vibes[(i - 2) % vibes.length] || 'Heritage & Adventure';
            days.push({
                day: i,
                title: `Day ${i}: Immersive ${currentVibe} & Signature Highlights`,
                route: `Curated circuit within ${dest} & surrounding scenic valleys`,
                morning: `08:00 AM - Energizing breakfast. 09:00 AM - Guided discovery tour with pre-booked VIP entry. Explore iconic architectural marvels, sacred shrines, or panoramic alpine viewpoints with our English/Hindi-speaking regional expert.`,
                afternoon: `01:30 PM - Hand-picked dining experience showcasing local culinary heritage. 03:00 PM - Adventure or leisure window: indulge in river rafting, cable car ascent, heritage museum tour, or relaxing wellness spa.`,
                evening: `06:00 PM - Spectacular sunset viewpoint followed by an evening stroll through bustling local night markets or riverside promenades.`,
                dinner: `08:30 PM - Romantic candlelit dinner or family banquet at a top-rated panoramic restaurant.`,
                stay: `${trip.style} Resort: Deluxe Room with balcony views.`,
                insiderTip: `Early morning visits between 08:30 AM and 10:00 AM bypass peak tourist buses and guarantee the cleanest photography light.`,
                highlights: [`${currentVibe} Exploration`, 'VIP Entry Access', 'Gastronomic Tasting Tour']
            });
        }
    }

    const budgetBase = trip.style === 'Luxury' ? 10500 : trip.style === 'Budget' ? 3800 : 6200;
    const minPerPerson = (daysCount * budgetBase).toLocaleString('en-IN');
    const maxPerPerson = (daysCount * Math.round(budgetBase * 1.35)).toLocaleString('en-IN');

    return {
        title: `${daysCount}-Day Curated ${dest} Experience from ${startCity}`,
        tagline: `An artfully balanced ${trip.style.toLowerCase()} journey crafted with ${trip.pace.toLowerCase()} pacing and authentic local charm.`,
        overview: `Crafted exclusively for ${trip.travellers} traveller(s), this ${daysCount}-day itinerary harmonizes breathtaking landmarks with restorative leisure. From seamless chauffeur transfers originating for travellers from ${startCity} to hand-selected boutique properties, every milestone has been calibrated to reflect your preferred ${trip.pace.toLowerCase()} rhythm.\n\nEnjoy immersive encounters across ${vibes.join(', ')} while backed by Rudraksh Safar's 24/7 on-ground assistance and transparent pricing guarantee.`,
        routeMap: [startCity, `${dest} Gateway`, `${dest} Scenic Core`, `${dest} Highlights`, startCity],
        totalDistanceApprox: `~${daysCount * 55} km covered across private tour sectors`,
        bestTimeToVisit: `Year-round with optimum shoulder seasons offering clear skies, pleasant weather, and festive local celebrations.`,
        days,
        costEstimator: {
            budgetTier: `₹${(daysCount * 3800).toLocaleString('en-IN')} - ₹${(daysCount * 4900).toLocaleString('en-IN')} per person (Standard 3-Star Comfort)`,
            comfortTier: `₹${minPerPerson} - ₹${maxPerPerson} per person (4-Star Premium Resort & Private SUV)`,
            luxuryTier: `₹${(daysCount * 11500).toLocaleString('en-IN')} - ₹${(daysCount * 16500).toLocaleString('en-IN')} per person (5-Star Palace / Villa Suite)`,
            includes: [
                `Dedicated private chauffeur-driven vehicle for all local sightseeing and point-to-point transfers`,
                `${nights} Nights accommodation in verified properties with daily breakfast included`,
                `Pre-cleared entry permits, highway tolls, parking levies, and interstate tourist taxes`,
                `Complimentary traditional welcome drinks and curated orientation kit upon arrival`,
                `24x7 Direct emergency helpline with Rudraksh Safar operations desk in Bhilai/Raipur`
            ],
            excludes: [
                `Long-distance flights or express train tickets between ${startCity} and starting airport (quoted on live GDS)`,
                `Monument camera permits, personal laundry, beverage expenses, and optional tipping`,
                `Optional high-octane adventure sports (paragliding, ATV rides, scuba diving)`
            ]
        },
        recommendedHotels: [
            {
                name: `${dest} Grand Heritage Retreat`,
                category: "4-Star Luxury Boutique",
                location: "Central Scenic District",
                highlight: "Panoramic balcony views, temperature-controlled comfort & award-winning dining"
            },
            {
                name: `The Royal Vista Resort & Spa`,
                category: "5-Star Premier",
                location: "Quiet Scenic Outskirts",
                highlight: "Private infinity pool, serene lush grounds & signature Ayurvedic spa therapy"
            },
            {
                name: `Silver Palms Comfort Inn`,
                category: "3-Star Deluxe",
                location: "City Center Hub",
                highlight: "Ultra-clean modern suites, complimentary breakfast buffet & swift transit access"
            }
        ],
        travelAdvisories: [
            `Keep light woolens or breathable cottons depending on regional forecast; comfortable walking shoes are essential.`,
            `Carry digital copies of photo IDs and hotel vouchers on your mobile device for rapid check-in.`,
            `Rudraksh Safar coordinates vehicle pickups 15 minutes before scheduled departure to avoid peak-hour congestions.`
        ],
        documentRequirements: [
            `Valid Government Photo Identification (Aadhaar / Voter ID / Passport) required for all ${trip.travellers} travellers.`,
            `For international sectors: Minimum 6 months passport validity required from return date.`
        ],
        providerUsed: "Rudraksh Safar Executive Architect (Smart Core)",
        generatedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };
}

/**
 * Main AI Generation Pipeline with Rate Limiting, Sanitization, and Graceful Fallback
 */
export async function generateItinerary(rawTrip: TripRequest): Promise<GeneratedItinerary> {
    // 1. Rate Limiting Check
    const rateCheck = AiRateLimiter.checkLimit();
    if (!rateCheck.allowed) {
        throw new Error(rateCheck.errorMessage || 'Rate limit exceeded. Please wait a moment before trying again.');
    }

    // 2. Strict Input Sanitization & Clamping
    const trip: TripRequest = {
        packageChoice: sanitizeInput(rawTrip.packageChoice, 90),
        destination: sanitizeInput(rawTrip.destination, 70),
        startingCity: sanitizeInput(rawTrip.startingCity, 60),
        days: clampNumber(rawTrip.days, 1, 14, 6),
        travellers: clampNumber(rawTrip.travellers, 1, 40, 2),
        style: sanitizeInput(rawTrip.style, 30) || 'Comfort',
        pace: rawTrip.pace || 'Balanced',
        vibes: (rawTrip.vibes || []).map(v => sanitizeInput(v, 40)).filter(Boolean),
        travelMonth: sanitizeInput(rawTrip.travelMonth || '', 40),
        specialRequirements: (rawTrip.specialRequirements || []).map(r => sanitizeInput(r, 40)).filter(Boolean),
        includeFlight: Boolean(rawTrip.includeFlight),
        notes: sanitizeInput(rawTrip.notes || '', 150)
    };

    const prompt = buildExpertTrainingPrompt(trip);

    // Detect Configured Keys
    const geminiKey = getEnvKey('GEMINI_API_KEY', 'VITE_GEMINI_API_KEY');
    const groqKey = getEnvKey('GROQ_API_KEY', 'VITE_GROQ_API_KEY');
    const openaiKey = getEnvKey('OPENAI_API_KEY', 'VITE_OPENAI_API_KEY');
    const anthropicKey = getEnvKey('ANTHROPIC_API_KEY', 'VITE_ANTHROPIC_API_KEY');

    let rawText = '';
    let providerName = '';

    try {
        if (geminiKey) {
            rawText = await generateWithGemini(prompt, geminiKey);
            providerName = 'Google Gemini 1.5 Flash';
        } else if (groqKey) {
            rawText = await generateWithGroq(prompt, groqKey);
            providerName = 'Groq Llama 3.3 70B';
        } else if (openaiKey) {
            rawText = await generateWithOpenAI(prompt, openaiKey);
            providerName = 'OpenAI GPT-4o Mini';
        } else if (anthropicKey) {
            rawText = await generateWithAnthropic(prompt, anthropicKey);
            providerName = 'Anthropic Claude 3.5';
        }

        if (rawText) {
            // Strip any code fences
            let cleanJson = rawText.trim();
            if (cleanJson.startsWith('```')) {
                cleanJson = cleanJson.replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/i, '').trim();
            }
            const parsed = JSON.parse(cleanJson);
            
            // Record rate limit consumption on success
            AiRateLimiter.recordRequest();

            return {
                ...parsed,
                providerUsed: providerName,
                generatedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
            };
        }
    } catch (err: any) {
        console.warn(`[AI Engine] Remote AI generation with ${providerName || 'API'} failed:`, err?.message || err);
    }

    // Record fallback execution as a valid request
    AiRateLimiter.recordRequest();
    return generateDetailedFallbackItinerary(trip);
}

/**
 * Builds formatted text for copying to clipboard or downloading
 */
export function formatItineraryForSharing(itinerary: GeneratedItinerary, trip: TripRequest): string {
    let out = `========================================\n`;
    out += `🗺️  RUDRAKSH SAFAR - TRIP BLUEPRINT\n`;
    out += `========================================\n\n`;
    out += `📌 TITLE: ${itinerary.title}\n`;
    out += `✨ TAGLINE: ${itinerary.tagline}\n`;
    out += `📍 DESTINATION: ${trip.destination} | FROM: ${trip.startingCity}\n`;
    out += `📅 DURATION: ${trip.days} Days | 👥 TRAVELLERS: ${trip.travellers} Person(s)\n`;
    out += `🏨 STYLE: ${trip.style} | ⚡ PACE: ${trip.pace}\n\n`;
    out += `📖 OVERVIEW:\n${itinerary.overview}\n\n`;
    out += `----------------------------------------\n`;
    out += `DAY-BY-DAY ITINERARY:\n`;
    out += `----------------------------------------\n\n`;

    itinerary.days.forEach(d => {
        out += `[DAY ${d.day}] ${d.title}\n`;
        if (d.route) out += `🚗 Route: ${d.route}\n`;
        out += `🌅 Morning: ${d.morning}\n`;
        out += `☀️ Afternoon: ${d.afternoon}\n`;
        out += `🌙 Evening: ${d.evening}\n`;
        if (d.dinner) out += `🍽️ Dinner: ${d.dinner}\n`;
        if (d.stay) out += `🏨 Stay: ${d.stay}\n`;
        if (d.insiderTip) out += `💡 Insider Tip: ${d.insiderTip}\n`;
        out += `\n`;
    });

    out += `----------------------------------------\n`;
    out += `ESTIMATED BUDGET PER PERSON:\n`;
    out += `----------------------------------------\n`;
    out += `• Comfort Tier: ${itinerary.costEstimator?.comfortTier || 'Quoted on request'}\n`;
    out += `• Luxury Tier: ${itinerary.costEstimator?.luxuryTier || 'Quoted on request'}\n\n`;

    out += `✅ INCLUSIONS:\n`;
    (itinerary.costEstimator?.includes || []).forEach(inc => out += `  ✓ ${inc}\n`);
    out += `\n❌ EXCLUSIONS:\n`;
    (itinerary.costEstimator?.excludes || []).forEach(exc => out += `  ✗ ${exc}\n`);

    out += `\n📞 CONTACT RUDRAKSH SAFAR:\n`;
    out += `Main Office: Shop No. 106, Satya Shanti Complex, Near Amantran Hotel, Supela, Bhilai, CG - 490021\n`;
    out += `Associate Office: Sanjeev Enterprises, GE Road, In Front of Petrol Pump, Bhilai-3, Durg 490021\n`;
    out += `Phone: +91 92036 50311 (Office) | +91 92291 50311 (Sanjeev Chaudhary) | +91 97130 57086 (Priyanshu Chaudhary)\n`;
    out += `Email: rudrakshsafar@gmail.com | Web: https://rudrakshsafar.com\n`;

    return out;
}

/**
 * Builds formatted WhatsApp Inquiry URL
 */
export function buildWhatsAppInquiryUrl(trip: TripRequest, itinerary?: GeneratedItinerary): string {
    const phoneNumber = "919203650311";
    const vibes = trip.vibes.length > 0 ? trip.vibes.join(', ') : 'Standard';

    let text = `*New Trip Inquiry from Website (AI Planner)* 🚀✨\n\n` +
        `📍 *Destination:* ${trip.destination || 'Custom Adventure'}\n` +
        `🛫 *Starting City:* ${trip.startingCity || 'Not specified'}\n` +
        `📅 *Duration:* ${trip.days} Days / ${Math.max(1, trip.days - 1)} Nights\n` +
        `👥 *Travellers:* ${trip.travellers} Person(s)\n` +
        `🏨 *Style:* ${trip.style}\n` +
        `⚡ *Pace:* ${trip.pace}\n` +
        `✨ *Vibes:* ${vibes}\n` +
        (trip.travelMonth ? `🗓️ *Travel Window:* ${trip.travelMonth}\n` : '') +
        (trip.includeFlight ? `✈️ *Flight / Transport:* Included from ${trip.startingCity}\n` : '') +
        (trip.specialRequirements && trip.specialRequirements.length > 0 ? `🎯 *Preferences:* ${trip.specialRequirements.join(', ')}\n` : '') +
        (trip.notes ? `📝 *Special Note:* ${trip.notes}\n` : '') +
        `\n`;

    if (itinerary) {
        text += `*Blueprint:* ${itinerary.title}\n` +
            `*Estimated Budget:* ${itinerary.costEstimator?.comfortTier || 'Inquiry requested'}\n\n`;
    }

    text += `Please send me the finalized quotation and hotel availability. Looking forward to booking with Rudraksh Safar!`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
