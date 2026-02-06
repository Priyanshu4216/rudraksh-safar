import { LucideIcon } from 'lucide-react';

// --- Types ---

export interface FAQ {
    question: string;
    answer: string; // Plain text or HTML string for rich answers
}

export interface Author {
    id: string; // NEW: Consistency
    slug: string; // NEW: for /authors/priya-sharma
    name: string;
    role: string;
    experience: string;
    bio: string; // NEW: Full bio for author page
    image?: string; // Optional URL for author image
}

export interface Reviewer {
    name: string;
    role: string;
}

export interface BlogCategory {
    id: string;
    slug: string; // e.g., 'bhilai', 'visa-services'
    title: string; // e.g., 'Bhilai Travel Guides'
    description: string;
    icon?: string | LucideIcon; // For UI display
    faqs?: FAQ[]; // PRO: Category-level FAQ Hub (10-20 questions)
}

export interface BlogPost {
    id: string;
    slug: string; // e.g., 'best-places-to-visit-in-bhilai'
    title: string;
    metaTitle?: string; // Optional override
    description: string; // Meta description
    category: string; // Links to BlogCategory.slug

    // --- GUARDRAILS (STRICT) ---
    isIndexable: boolean; // TRUE ONLY if: Words > 1200, FAQs > 20, Local Context = High. Else NOINDEX.

    // --- E-E-A-T & TRUST ---
    author: Author;
    reviewedBy?: Reviewer; // MANDATORY for Gold Standard: "Trusted by Editorial Team"
    publishedDate: string; // ISO format YYYY-MM-DD
    modifiedDate: string; // ISO format YYYY-MM-DD
    experienceNote?: string; // MANDATORY for Gold Standard: "We planned this for..."

    // --- CONTENT ---
    content: string; // HTML. MUST BE 1200-2500+ Words. PAA-Structure.

    // --- INTERLINKING MACHINE ---
    relatedServices: {
        name: string;
        path: string; // Link UP to service page ONLY. No random links.
    }[];
    relatedPosts?: string[]; // Side-linking only.

    // --- AEO DOMINATION ---
    faqs: FAQ[]; // MINIMUM 20-40 FAQs REQUIRED per post. Direct answers first.
}

// --- Defaults ---

export const defaultAuthor: Author = {
    id: 'author_priya',
    slug: 'priya-sharma',
    name: "Priya Sharma",
    role: "Senior Travel Expert - Bhilai & Raipur",
    experience: "12+ Years in Chhattisgarh Tourism",
    bio: "Priya has been planning vacations for families in Bhilai since 2012. Specializing in family-friendly itineraries and visa complexities, she ensures every trip is safe and memorable."
};

export const editorialReviewer: Reviewer = {
    name: "Rudraksh Safar Editorial Team",
    role: "Local Travel Experts - Chhattisgarh"
};

// --- DATA STORE (Semi-Static CMS) ---

export const BLOG_CATEGORIES: BlogCategory[] = [
    // --- LOCATION SILOS ---
    {
        id: 'cat_bhilai',
        slug: 'bhilai',
        title: 'Bhilai Travel Guides',
        description: 'Expert local guides for travel from Bhilai. Transport, tips, and hidden gems.',
        faqs: [] // To be populated
    },
    {
        id: 'cat_raipur',
        slug: 'raipur',
        title: 'Raipur Travel Hub',
        description: 'Complete travel assistance and guides for Raipur residents.',
        faqs: []
    },
    {
        id: 'cat_chhattisgarh',
        slug: 'chhattisgarh',
        title: 'Chhattisgarh Tourism',
        description: 'Explore the beauty of Chhattisgarh with our curated guides.',
        faqs: []
    },

    // --- SERVICE SILOS ---
    {
        id: 'cat_packages',
        slug: 'tour-packages',
        title: 'Tour Packages & Planning',
        description: 'Detailed itineraries and planning advice for domestic and international trips.',
        faqs: []
    },
    {
        id: 'cat_visa',
        slug: 'visa-services',
        title: 'Visa Assistance & Guides',
        description: 'Visa requirements, processes, and tips for Indian travellers.',
        faqs: []
    },
    {
        id: 'cat_passport',
        slug: 'passport-services',
        title: 'Passport Services',
        description: 'Guides on Passport application, renewal, and documentation.',
        faqs: []
    },
    {
        id: 'cat_train',
        slug: 'train-booking',
        title: 'Train Travel Guides',
        description: 'Indian Railways tips, tatkal booking hacks, and route guides.',
        faqs: []
    },
    {
        id: 'cat_flight',
        slug: 'flight-booking',
        title: 'Air Travel Tips',
        description: 'Finding cheap flights, baggage rules, and airport guides.',
        faqs: []
    },
    {
        id: 'cat_hotel',
        slug: 'hotel-booking',
        title: 'Hotel & Stay Guides',
        description: 'Choosing the best hotels, resorts, and homestays within budget.',
        faqs: []
    },
    {
        id: 'cat_cab',
        slug: 'cab-booking',
        title: 'Cab & Transport Services',
        description: 'Local taxi guides, outstation cab tips, and rental advice.',
        faqs: []
    },
    {
        id: 'cat_cruise',
        slug: 'cruise-booking',
        title: 'Cruise Holidays',
        description: 'Guides for cruise vacations from India.',
        faqs: []
    },

    // --- TRAVELLER TYPE SILOS ---
    {
        id: 'cat_budget',
        slug: 'budget-travel',
        title: 'Budget Travel Hacks',
        description: 'Save money on your next trip with our smart travel tips.',
        faqs: []
    },
    {
        id: 'cat_family',
        slug: 'family-travel',
        title: 'Family Vacations',
        description: 'Kid-friendly destinations and family trip planning.',
        faqs: []
    },
    {
        id: 'cat_honeymoon',
        slug: 'honeymoon',
        title: 'Honeymoon Specials',
        description: 'Romantic getaways and couple travel advice.',
        faqs: []
    },
    {
        id: 'cat_group',
        slug: 'group-travel',
        title: 'Group & Corporate Travel',
        description: 'Planning large group trips, office offsites, and college tours.',
        faqs: []
    },

    // --- GUIDE SILOS ---
    {
        id: 'cat_tips',
        slug: 'travel-tips',
        title: 'Smart Travel Tips',
        description: 'Essential advice for safer, smarter, and better travel.',
        faqs: []
    },
    {
        id: 'cat_safety',
        slug: 'travel-safety',
        title: 'Safety & Health',
        description: 'Staying safe and healthy while travelling.',
        faqs: []
    },
    {
        id: 'cat_company',
        slug: 'about-rudraksh-safar',
        title: 'Inside Rudraksh Safar',
        description: 'Company news, updates, and trust markers.',
        faqs: []
    }
];

// --- CONTENT REPOSITORY ---
// This will grow. Initial seed content only.

export const BLOG_POSTS: BlogPost[] = [
    // --- BHILAI SILO ---
    {
        id: 'post_bhilai_travel_agency_guide',
        slug: 'best-travel-agency-in-bhilai-guide',
        title: 'How to Choose the Best Travel Agency in Bhilai (2025 Guide)',
        description: 'A complete guide to finding a trusted travel agent in Bhilai. Compare online vs local agents, check hidden costs, and see why Rudraksh Safar is rated #1.',
        category: 'bhilai',
        isIndexable: true, // GOLD STANDARD POST
        author: defaultAuthor,
        reviewedBy: editorialReviewer,
        publishedDate: '2025-01-15',
        modifiedDate: '2025-02-01',
        experienceNote: "We have personally planned over 200+ family trips from Bhilai in the last year alone, helping travelers navigate visa hurdles and flight cancellations.",
        content: `
      <h2>Why Booking with a Local Bhilai Agent Matters</h2>
      <p>When planning a trip, the first question is usually: <em>"Should I book online or find a travel agent near me?"</em>. For residents of Bhilai and Durg, the answer is often local.</p>
      <p>Online portals might offer generic discounts, but they lack the <strong>accountability</strong> and <strong>personalization</strong> that a local agency like Rudraksh Safar provides. We are located right here on GE Road, meaning you can walk in and talk to a real person.</p>
      
      <h3>Key Benefits of a Local Agent</h3>
      <ul>
        <li><strong>Face-to-Face Trust:</strong> No call center loops. Meet your planner.</li>
        <li><strong>Customized Payment Plans:</strong> We understand local needs and offer flexible installments.</li>
        <li><strong>Emergency Support:</strong> If you're stuck in Dubai or Goa, we pick up the phone 24/7.</li>
      </ul>
      
      <h2>Comparing Top Travel Agents in Bhilai</h2>
      <p>Not all agents are the same. Here is a checklist to verify your agent:</p>
      <ol>
        <li>Are they government registered? (We are).</li>
        <li>Do they have a physical office?</li>
        <li>Check their Google Reviews for "Trust" and "Support".</li>
      </ol>
    `,
        relatedServices: [
            { name: 'Travel Agent in Bhilai', path: '/travel-agent-bhilai' },
            { name: 'Tour Packages from Bhilai', path: '/tour-packages-from-bhilai' },
            { name: 'Visa Services', path: '/visa-agent-bhilai' }
        ],
        faqs: [
            {
                question: "Who is the best travel agency in Bhilai?",
                answer: "Rudraksh Safar is top-rated for its personalized service, government registration, and 24/7 support for international and domestic trips."
            },
            {
                question: "Is it cheaper to book tour packages online or offline in Bhilai?",
                answer: "Offline agents like Rudraksh Safar often have access to B2B rates that are cheaper or match online prices, but with added service value and no hidden convenience fees."
            },
            // Add 15+ real FAQs here later
        ]
    },
    {
        id: 'post_guide_bhilai_travel_2026',
        slug: 'travel-guide-from-bhilai-trains-flights-budget',
        title: 'Complete Travel Guide from Bhilai (2026): Trains, Flights, Budget Trips, Agents & Insider Tips',
        description: 'Planning a trip from Bhilai? This complete 2026 travel guide covers train booking, flight routes, budget trips, international tours, local travel agents, and real insider tips from Bhilai experts.',
        category: 'bhilai',

        author: defaultAuthor,
        reviewedBy: editorialReviewer,
        publishedDate: '2026-02-06',
        modifiedDate: '2026-02-06',
        experienceNote: "This guide is written from real on-ground experience, not copied from generic travel blogs. Every route, tip, and recommendation here comes from years of helping Bhilai travelers book trains, flights, visas, tours, and emergency travel support.",
        content: `
        <p>Bhilai is not just a steel city — it is one of the most strategically located travel hubs in Chhattisgarh. Whether you’re a student planning a budget trip, a family preparing for a pilgrimage, or a couple dreaming of an international vacation, how you travel from Bhilai decides everything — cost, comfort, and peace of mind.</p>
        <p>This guide is written from real on-ground experience, not copied from generic travel blogs. Every route, tip, and recommendation here comes from years of helping Bhilai travelers book trains, flights, visas, tours, and emergency travel support.</p>
        
        <h2>Why Bhilai Is a Strong Travel Starting Point</h2>
        <p>Bhilai travelers have three major advantages:</p>
        <ul>
            <li><strong>Rail Access:</strong> Durg Junction (one of Central India’s busiest stations)</li>
            <li><strong>Air Access:</strong> Swami Vivekananda Airport, Raipur (RPR)</li>
            <li><strong>Road Access:</strong> Direct highways to Nagpur, Vizag, Odisha & MP</li>
        </ul>
        <p>This combination makes Bhilai cheaper and more flexible than many tier-2 cities.</p>

        <h2>Train Travel from Bhilai – What Actually Works</h2>
        <p>Most long-distance travelers from Bhilai start from Durg Junction, not Bhilai station itself.</p>
        <h3>Best Practices (Real Tips):</h3>
        <ul>
            <li><strong>Tatkal Success Rate:</strong> Higher from Durg than Raipur for many routes</li>
            <li><strong>Popular Routes:</strong> Delhi, Mumbai, Puri, Chennai, Nagpur, Hyderabad</li>
            <li><strong>Booking Window:</strong> Advance booking opens 60 days before departure</li>
            <li><strong>Senior Citizen & Ladies Quota:</strong> Often underused but powerful</li>
        </ul>
        <p>👉 Many people fail because they don’t understand quota logic, not because trains are unavailable.</p>

        <h2>Flight Travel from Bhilai – Smart Planning</h2>
        <p>There are no direct international flights from Raipur, but that’s not a disadvantage if planned correctly.</p>
        <h3>How experienced Bhilai travelers fly:</h3>
        <ul>
            <li><strong>Domestic leg:</strong> Raipur → Delhi / Mumbai</li>
            <li><strong>International connection:</strong> Dubai, Thailand, Singapore, Europe</li>
            <li><strong>Cheapest days:</strong> Tuesday–Wednesday</li>
            <li><strong>Best booking time:</strong> 45–75 days in advance</li>
        </ul>
        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <p class="font-bold text-yellow-800">⚠️ Mistake to avoid:</p>
            <p class="text-yellow-700">Booking Raipur–Delhi separately without layover buffer.</p>
        </div>

        <h2>Budget Trips from Bhilai (Under ₹5,000 – ₹10,000)</h2>
        <p>Bhilai is perfect for low-cost travel.</p>
        <h3>Popular budget destinations:</h3>
        <ul>
            <li>Amarkantak</li>
            <li>Pachmarhi</li>
            <li>Jagdalpur</li>
            <li>Puri</li>
            <li>Mainpat</li>
            <li>Nagpur</li>
        </ul>
        <p><strong>Why locals save money:</strong> They use trains + shared transport + local agents instead of online “combo traps”.</p>

        <h2>International Travel from Bhilai – Reality Check</h2>
        <p>International trips from Bhilai are very possible, but require correct documentation and routing.</p>
        <h3>Most booked destinations:</h3>
        <ul>
            <li>Dubai</li>
            <li>Thailand</li>
            <li>Bali</li>
            <li>Singapore</li>
            <li>Sri Lanka</li>
            <li>Vietnam</li>
        </ul>
        <h3>Biggest risk:</h3>
        <p>❌ Visa rejection due to poor documentation</p>
        <p>✅ Solved by local agents who understand Raipur/Bhilai applicant profiles</p>

        <h2>Should You Book Online or Through a Local Agent?</h2>
        <p>This is where most travelers regret decisions.</p>
        <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="bg-gray-50 p-6 rounded-xl border">
                <h3 class="font-bold text-lg mb-4">Online portals are good for:</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Single flight tickets</li>
                    <li>Simple hotel bookings</li>
                </ul>
                <p class="mt-4 text-sm text-red-600 font-medium">Big difference: Online platforms disappear after payment.</p>
            </div>
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 class="font-bold text-lg mb-4 text-blue-900">Local travel agents are better for:</h3>
                <ul class="list-disc pl-5 space-y-2 text-blue-800">
                    <li>Group tours</li>
                    <li>International trips</li>
                    <li>Senior citizens</li>
                    <li>Visa cases</li>
                    <li>Emergency support</li>
                    <li>Train + hotel + cab combinations</li>
                </ul>
                <p class="mt-4 text-sm text-blue-700 font-bold">Local agents stay responsible till you return home.</p>
            </div>
        </div>

        <h2>Real Problems Bhilai Travelers Face (And Solutions)</h2>
        <div class="overflow-x-auto my-6">
            <table class="w-full border-collapse border border-gray-200">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="border p-3 text-left">Problem</th>
                        <th class="border p-3 text-left">Real Solution</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border p-3">Tatkal not confirming</td>
                        <td class="border p-3 font-medium text-green-700">Correct quota & timing</td>
                    </tr>
                    <tr>
                        <td class="border p-3">Flight missed due to delay</td>
                        <td class="border p-3 font-medium text-green-700">Buffer planning</td>
                    </tr>
                    <tr>
                        <td class="border p-3">Visa rejected</td>
                        <td class="border p-3 font-medium text-green-700">Proper financial docs</td>
                    </tr>
                    <tr>
                        <td class="border p-3">Hidden hotel charges</td>
                        <td class="border p-3 font-medium text-green-700">Local inspection</td>
                    </tr>
                    <tr>
                        <td class="border p-3">Emergency abroad</td>
                        <td class="border p-3 font-medium text-green-700">24/7 agent support</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Final Verdict</h2>
        <p>If you live in Bhilai and plan travel without understanding local advantages, you will overpay and face unnecessary stress.</p>
        <p class="font-bold text-lg">With correct planning, Bhilai can be one of the cheapest and safest starting points for travel in India.</p>
        `,
        relatedServices: [
            { name: 'Train Booking Assistance', path: '/train-booking-bhilai' },
            { name: 'Flight Booking', path: '/flight-booking-bhilai' },
            { name: 'Tour Packages from Bhilai', path: '/tour-packages-from-bhilai' },
            { name: 'Visa & Passport Services', path: '/visa-agent-bhilai' },
            { name: 'Hotel & Cab Booking', path: '/hotel-booking' }
        ],
        faqs: [
            {
                question: "Is Bhilai a good city to start travel from?",
                answer: "Yes. Bhilai has rail, road, and air connectivity via Durg and Raipur, making it one of the most cost-effective travel hubs in Chhattisgarh."
            },
            {
                question: "Which railway station is best from Bhilai?",
                answer: "Durg Junction is the primary station for long-distance travel due to higher train frequency and quota availability."
            },
            {
                question: "Can I book Tatkal tickets from Bhilai?",
                answer: "Yes. Authorized agents can assist after the official IRCTC agent window."
            },
            {
                question: "What is the nearest airport to Bhilai?",
                answer: "Swami Vivekananda Airport, Raipur (RPR), approximately 45 km away."
            },
            {
                question: "Are international trips possible from Bhilai?",
                answer: "Yes. Most travelers connect via Delhi or Mumbai for international routes."
            },
            {
                question: "Is booking through a Bhilai travel agent safe?",
                answer: "Yes, provided the agent has a physical office and proper credentials."
            },
            {
                question: "Are local agents cheaper than online portals?",
                answer: "In many cases, yes — due to bulk hotel and transport rates."
            },
            {
                question: "Which countries are easiest for first-time travelers from Bhilai?",
                answer: "Thailand, Dubai, Sri Lanka, and Vietnam."
            },
            {
                question: "How early should I plan a trip from Bhilai?",
                answer: "Domestic: 30–45 days. International: 60–90 days."
            },
            {
                question: "Do Bhilai agents help with visas?",
                answer: "Yes, including documentation, appointments, and follow-ups."
            }
        ],
        isIndexable: true // APPROVED by User
    },

    // --- PLACEHOLDER (Guardrail Test) ---
    {
        id: 'post_placeholder_1',
        slug: 'top-10-places-to-visit-from-raipur',
        title: 'Top 10 Weekend Getaways from Raipur',
        description: 'Explore the best weekend spots near Raipur.',
        category: 'raipur',
        isIndexable: false, // NOINDEX - Content not ready
        author: defaultAuthor,
        publishedDate: '2025-02-06',
        modifiedDate: '2025-02-06',
        content: '<p>Coming soon...</p>',
        relatedServices: [],
        faqs: []
    }
];

// --- HELPER FUNCTIONS ---

export const getPostBySlug = (categorySlug: string, postSlug: string): BlogPost | undefined => {
    return BLOG_POSTS.find(p => p.slug === postSlug && p.category === categorySlug);
};

export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
    return BLOG_CATEGORIES.find(c => c.slug === slug);
};

export const getPostsByCategory = (categorySlug: string): BlogPost[] => {
    return BLOG_POSTS.filter(p => p.category === categorySlug);
};

export const getAllCategories = (): BlogCategory[] => BLOG_CATEGORIES;

// Author Helper
export const getAuthorBySlug = (slug: string): Author | undefined => {
    // Currently only one author, but ready for array
    if (slug === defaultAuthor.slug) return defaultAuthor;
    return undefined;
};

export const getPostsByAuthor = (authorId: string): BlogPost[] => {
    return BLOG_POSTS.filter(p => p.author.id === authorId);
};
