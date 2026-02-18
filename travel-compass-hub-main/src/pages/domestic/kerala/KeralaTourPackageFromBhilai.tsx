import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import LogisticsSection from '../../../components/LogisticsSection';
import { Plane, Train, Ship, Palmtree, Clock, AlertTriangle, Coffee, ArrowRight } from 'lucide-react';

const KeralaTourPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Kerala Tour Package from Bhilai (2026) – Real Cost, Flight Routes & Local Expert Guide</title>
                <meta
                    name="description"
                    content="Complete 2026 Guide for Kerala trips from Bhilai & Raipur. Compare 30-hour Train vs Flight costs. Best Munnar & Houseboat itinerary for CG families."
                />
                <meta name="keywords" content="kerala tour package from bhilai, kerala trip cost from durg, raipur to kerala flight, honeymoon package kerala from chhattisgarh, kerala houseboat price" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Kerala Tour Package from Bhilai",
                        "description": "6-Day Kerala tour for families from Bhilai. Covers Munnar, Thekkady, Alleppey Houseboat. Flight from Raipur recommended.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "14500",
                            "highPrice": "35000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Neha Sahu" }
                        }
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/domestic-tours/kerala" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Kerala Guide
                </Link>
            </div>

            {/* 1. Commercial Intent & Hero */}
            <HeroSection
                title="Kerala Tour Package from Bhilai (2026)"
                subtitle="God's Own Country is Far, But Worth It. Detailed Logistics Guide for Durg/Raipur Travelers."
                backgroundImage="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000" // Kerala Houseboat/Backwaters
                ctaText="Get Flight + Tour Quote"
                ctaLink="#pricing"
            />

            {/* 2. Direct Answer (Cost Query) - First 150 words */}
            <ContentSection className="bg-white">
                <div className="prose max-w-none">
                    <p className="text-lg font-medium text-gray-800">
                        Planning a trip to <strong>Kerala from Bhilai</strong> in 2026? It’s a dream destination for honeymooners and families in Durg-Bhilai, but the distance is the biggest challenge. Unlike Goa, you can't just hop on an overnight train.
                    </p>
                    <div className="border-l-4 border-green-600 pl-4 mt-4 bg-green-50 p-4 rounded-r-lg">
                        <h3 className="font-bold text-xl text-green-900 mb-2">How Much Does a Kerala Trip Cost from Bhilai?</h3>
                        <p className="mb-2">
                            A realistic 6-day trip costs between <strong>₹14,500 - ₹25,000 per person</strong> (excluding flight/train).
                        </p>
                        <ul className="list-disc ml-5 text-gray-700 text-sm">
                            <li><strong>Includes:</strong> Private Car (AC Sedan) for 6 days, 3-Star Hotels, 1 Night Houseboat (All Meals), Breakfasts.</li>
                            <li><strong>Flight Cost:</strong> Raipur (RPR) to Kochi (COK) flights cost approx ₹10,000 - ₹14,000 return per person.</li>
                            <li><strong>Total Budget (with Flights):</strong> Approx ₹30,000 per person.</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Transport Domination (The "Train Pain" Section) */}
            <ContentSection title="Reaching Kerala: The 30-Hour Train vs Flight Dilemma" className="bg-slate-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* The Hard Way: Train */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Train className="text-orange-500" /> Option 1: The "Marathon" Train</h3>
                        <p className="text-gray-600 mb-2 text-sm">Strictly for budget travelers with lots of time.</p>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                            <li><strong>Train:</strong> <em>Kerala Express (12626)</em> from Nagpur (You need to reach Nagpur from Durg first).</li>
                            <li><strong>Total Time:</strong> Durg &rarr; Nagpur (4 hrs) + Wait + Nagpur &rarr; Ernakulam (28 hrs) = <strong>~36-40 Hours</strong>.</li>
                            <li><strong>Cost:</strong> ₹900 (SL) / ₹2400 (3AC) one way.</li>
                            <li><strong>Verdict:</strong> Exhausting. You lose 4 days just in travel for a round trip.</li>
                        </ul>
                    </div>

                    {/* The Smart Way: Flight */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Plane className="text-blue-500" /> Option 2: The Recommended Flight</h3>
                        <p className="text-gray-600 mb-2 text-sm">Best for families and honeymooners.</p>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm">
                            <li><strong>Route:</strong> <strong>Raipur (RPR)</strong> &rarr; Hyderabad/Bangalore &rarr; <strong>Kochi (COK)</strong>.</li>
                            <li><strong>Duration:</strong> 5 - 7 Hours total (including layover).</li>
                            <li><strong>Cost:</strong> ₹5,500 - ₹8,000 one way.</li>
                            <li><strong>Tip:</strong> Book 2 months in advance. Late bookings can hit ₹12k one way.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 bg-red-100 p-4 rounded text-red-800 flex gap-3 items-start">
                    <AlertTriangle className="shrink-0 mt-1" />
                    <div>
                        <strong>Honest Advice for Seniors:</strong> Please do NOT attempt the train journey if you have back issues. The train from Nagpur travels through very hot regions and is extremely crowded. <strong>Take the flight from Raipur.</strong> It is worth the extra money for comfort.
                    </div>
                </div>
            </ContentSection>

            {/* 4. Itinerary (6 Days) */}
            <ContentSection title="6-Day 'Backwaters & Hills' Itinerary" className="bg-white">
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold shrink-0">D1</div>
                        <div>
                            <h4 className="font-bold text-lg">Arrival in Kochi & Transfer to Munnar</h4>
                            <p className="text-gray-600">Land at Kochi Airport (COK). Meet our driver. 4-hour scenic drive to <strong>Munnar</strong> involving waterfalls (Cheeyappara). Check-in to hill resort.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold shrink-0">D2</div>
                        <div>
                            <h4 className="font-bold text-lg">Munnar Sightseeing</h4>
                            <p className="text-gray-600">Visit Eravikulam National Park (Nilgiri Tahr), Tea Museum, and Mattupetty Dam. Boating at Echo Point. Overnight in Munnar.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold shrink-0">D3</div>
                        <div>
                            <h4 className="font-bold text-lg">Munnar to Thekkady</h4>
                            <p className="text-gray-600">Drive to Thekkady (Periyar). Spice Plantation Tour (Cardamom/Pepper). Evening Kalaripayattu (Martial Arts) show.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold shrink-0">D4</div>
                        <div>
                            <h4 className="font-bold text-lg">Thekkady to Alleppey (Houseboat)</h4>
                            <p className="text-gray-600">The Highlight! Drive to Alleppey. Check-in to <strong>Private Houseboat</strong> by 12 PM. Cruise through backwaters. Lunch, Snacks, Dinner regarding on board.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold shrink-0">D5</div>
                        <div>
                            <h4 className="font-bold text-lg">Alleppey to Kochi</h4>
                            <p className="text-gray-600">Morning cruise. Checkout at 9 AM. Drive to Kochi. Visit Fort Kochi, Chinese Fishing Nets, and Lulu Mall (Largest in India). Drop at Airport.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold shrink-0">D6</div>
                        <div>
                            <h4 className="font-bold text-lg">Back in Bhilai</h4>
                            <p className="text-gray-600">Reach Raipur via connecting flight. Drive back to Bhilai/Durg with memories of greenery.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 5. Houseboat Breakdown (Comparison Table) */}
            <ContentSection title="Houseboat: What You Actually Pay For" className="bg-indigo-50">
                <p className="mb-4">Many Bhilai travelers are confused about houseboat rates. Here is the 2026 reality check.</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-indigo-900 text-white">
                            <tr>
                                <th className="p-4">Category</th>
                                <th className="p-4">Deluxe (Budget)</th>
                                <th className="p-4">Premium (Standard)</th>
                                <th className="p-4">Luxury (High End)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4 font-bold">AC Timing</td>
                                <td className="p-4">9 PM to 6 AM Only</td>
                                <td className="p-4">Full Time AC (Bedroom)</td>
                                <td className="p-4">Full Time AC (Glass Boat)</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-bold">Food</td>
                                <td className="p-4">Basic Kerala Style</td>
                                <td className="p-4">Customized Menu</td>
                                <td className="p-4">Buffet Spread</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-bold">Maintenance</td>
                                <td className="p-4">Average</td>
                                <td className="p-4">Good/Clean</td>
                                <td className="p-4">Excellent/Five Star</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">Price (Couple)</td>
                                <td className="p-4 text-green-700 font-bold">₹7,000 - ₹9,000</td>
                                <td className="p-4 text-blue-700 font-bold">₹11,000 - ₹14,000</td>
                                <td className="p-4 text-purple-700 font-bold">₹18,000+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-2 text-sm text-gray-500 italic">*Prices include all 3 meals onboard.</p>
            </ContentSection>

            {/* 6. Honest Disqualification */}
            <ContentSection className="bg-red-50">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Who Should Avoid Kerala in Summer?</h3>
                <p className="mb-4 text-gray-800">Kerala is tropical. That means humidity.</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li><strong>April/May Travelers:</strong> It gets hot (35°C+) and very humid. If you hate sweating, pick Manali or Kashmir instead.</li>
                    <li><strong>Monsoon Haters:</strong> June to August sees heavy rain. Houseboats might not move, but the nature looks stunning.</li>
                    <li><strong>Pure Vegetarians (Strict):</strong> While veg food is available, the smell of coconut oil and fish is everywhere in Alleppey.</li>
                </ul>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Get A Custom Kerala Itinerary"
                    subText="We customize flights from Raipur and Houseboat categories."
                />
            </ContentSection>

            {/* 7. FAQs */}
            <FAQSection
                faqs={[
                    { question: "Is Hindi understood in Kerala?", answer: "In tourist areas (Munnar, Alleppey), drivers and hotel staff understand basic Hindi or English. However, English is more widely spoken than Hindi." },
                    { question: "Can we get North Indian food?", answer: "Yes! All 3-star hotels serve Roti, Paneer, and Dal. You won't face any food issues." },
                    { question: "Is the road from Kochi to Munnar vomiting-inducing?", answer: "It is a winding ghat road. If you have motion sickness, take an Avomine tablet before starting the journey from Kochi." },
                    { question: "Is alcohol allowed in the houseboat?", answer: "You can carry your own alcohol (bought from government beverages corp) to the boat. Consumption is allowed inside private boats." },
                    { question: "Why is the flight from Raipur so expensive?", answer: "Because there are no direct flights. You pay for two legs (Raipur-Hyd/Bangalore and then to Kochi). Book early to save." }
                ]}
            />

            <LogisticsSection
                bestTimeData={[
                    { destination: "Peak Season", months: "Oct - Mar" },
                    { destination: "Off Season", months: "Jun - Aug" },
                    { destination: "Shoulder", months: "Sep, Feb" }
                ]}
            />

            {/* Internal Linking Area */}
            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Explore More from Bhilai</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <Link to="/manali-tour-package-from-bhilai" className="hover:underline">Manali (Snow Trip)</Link>
                    <Link to="/goa-tour-package-from-bhilai" className="hover:underline">Goa (Beach Trip)</Link>
                    <Link to="/india-tour-packages-bhilai" className="hover:underline">All Domestic Packages</Link>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default KeralaTourPackageFromBhilai;
