import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { Plane, Palmtree, Heart, Camera, Coffee, Umbrella } from 'lucide-react';

const BaliTourPackageFromRaipur = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Bali Tour Package from Raipur (2026) – Honeymoon & Culture Special</title>
                <meta
                    name="description"
                    content="Experience the Magic of Bali from Raipur. 6N/7D Premium Honeymoon Package. Best Flight Connections (Raipur-Kolkata-Bali). Private Pool Villa included."
                />
                <meta name="keywords" content="bali tour package from raipur, raipur to bali flight price, bali honeymoon package from raipur, bali trip cost from raipur for couple" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Bali Tour Package from Raipur",
                        "description": "Premium 6N/7D Bali Honeymoon Package for couples from Raipur. Includes Ubud, Kuta, Nusa Penida and Private Pool Villa.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "32000",
                            "highPrice": "65000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.9", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Anjali & Rahul Verma" }
                        }
                    })}
                </script>
            </Helmet>

            {/* 1. Hero & Commercial Intent */}
            <HeroSection
                title="Bali Honeymoon from Raipur"
                subtitle="Private Pool Villas. Nusa Penida Swings. The Most Romantic Week of Your Life Starts Here."
                backgroundImage="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000" // Bali Temple/Gate
                ctaText="Get Couple Quote"
                ctaLink="#honeymoon-cost"
            />

            {/* 2. Flight Logistics (The Problem Solver) */}
            <ContentSection className="bg-orange-50">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-orange-900 mb-4">Raipur to Bali: The Flight Secret</h2>
                        <p className="text-gray-800 mb-4">
                            Don't book Raipur &rarr; Delhi &rarr; Bali. It takes 18+ hours and is tiring.
                        </p>
                        <p className="text-gray-800 font-medium mb-4">
                            The <strong>Smartest Route</strong> for Raipur couples is via <strong>Kolkata (CCU)</strong>.
                        </p>
                        <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
                            <h4 className="font-bold flex items-center gap-2"><Plane className="w-5 h-5 text-green-600" /> Recommended Connection</h4>
                            <p className="text-sm text-gray-700 mt-1">Raipur (RPR) &rarr; Kolkata (CCU) [IndiGo]</p>
                            <p className="text-sm text-gray-700">Layover: ~3 Hours</p>
                            <p className="text-sm text-gray-700">Kolkata (CCU) &rarr; Bali (DPS) [Batik Air]</p>
                            <p className="text-xs text-green-700 font-bold mt-2">Total Time: ~9 Hours (Fastest)</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                        <h3 className="font-bold text-lg mb-2 text-blue-800">Why Bali vs Maldives?</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex gap-2"><Palmtree className="w-5 h-5 text-green-500" /> <strong>Culture + Beach:</strong> Bali has temples, jungles, AND beaches. Maldives is just water.</li>
                            <li className="flex gap-2"><Coffee className="w-5 h-5 text-brown-500" /> <strong>Food & Cafes:</strong> Bali has the world's best cafe culture (Seminyak/Canggu).</li>
                            <li className="flex gap-2"><Heart className="w-5 h-5 text-red-500" /> <strong>Cost:</strong> A luxury week in Bali costs HALF of a luxury week in Maldives.</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Itinerary (6N/7D) */}
            <ContentSection title="6 Nights of Romance (Itinerary)" className="bg-white">
                <div className="space-y-4">
                    <div className="flex gap-4 p-4 border-b">
                        <div className="font-bold text-orange-600 w-24">Day 1-3</div>
                        <div>
                            <h4 className="font-bold">Ubud (The Jungle Vibe)</h4>
                            <p className="text-sm text-gray-600">Private Pool Villa Check-in. Kintamani Volcano View. Tegalalang Rice Terraces (Famous Swing). Monkey Forest.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 border-b">
                        <div className="font-bold text-orange-600 w-24">Day 4</div>
                        <div>
                            <h4 className="font-bold">Nusa Penida Island Tour</h4>
                            <p className="text-sm text-gray-600">Speedboat ride. Kelingking Beach (T-Rex shape). Broken Beach. Snorkeling (Optional). Return to mainland.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 border-b">
                        <div className="font-bold text-orange-600 w-24">Day 5-6</div>
                        <div>
                            <h4 className="font-bold">Kuta / Seminyak (Party & Sunset)</h4>
                            <p className="text-sm text-gray-600">Move to Beach Resort. Tanah Lot Temple Sunset. Seminyak Beach Club access (Potato Head / Finns). Shopping.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4">
                        <div className="font-bold text-orange-600 w-24">Day 7</div>
                        <div>
                            <h4 className="font-bold">Airport Drop</h4>
                            <p className="text-sm text-gray-600">Last minute souvenir shopping. Transfer to Denpasar Airport for flight to Kolkata.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 4. Comparison Table (The "Helpful" Guide) */}
            <ContentSection className="bg-slate-50">
                <h3 className="text-center font-bold text-2xl mb-6">Bali Package Options</h3>
                <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="p-3 text-left">Feature</th>
                                <th className="p-3 text-left">Silver Duo (Budget)</th>
                                <th className="p-3 text-left border-l border-blue-800">Platinum Love (Recommended)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3 font-bold text-gray-700">Stay Type</td>
                                <td className="p-3 text-gray-600">4-Star Hotels (Standard)</td>
                                <td className="p-3 text-green-700 font-bold border-l border-gray-100">Private Pool Villa (2N) + 5-Star Resort</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3 font-bold text-gray-700">Nusa Penida</td>
                                <td className="p-3 text-gray-600">West Tour (Shared Boat)</td>
                                <td className="p-3 text-green-700 font-bold border-l border-gray-100">East + West Tour (Private Speedboat)</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3 font-bold text-gray-700">Romantic Dinner</td>
                                <td className="p-3 text-gray-600">Standard Buffet</td>
                                <td className="p-3 text-green-700 font-bold border-l border-gray-100">Candle Light Dinner on Beach</td>
                            </tr>
                            <tr className="bg-blue-50">
                                <td className="p-3 font-bold text-blue-900">Approx Cost (Land Only)</td>
                                <td className="p-3 font-bold text-blue-900">₹32,000 / person</td>
                                <td className="p-3 font-bold text-blue-900 border-l border-blue-100">₹45,000 / person</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentSection>

            {/* 5. FAQs */}
            <FAQSection
                faqs={[
                    { question: "Is Visa on Arrival available for Indians?", answer: "Yes. It costs IDR 500,000 (approx ₹2,800). You just need a passport valid for 6 months." },
                    { question: "Is vegetarian food available?", answer: "Yes! Ubud and Seminyak are famous for vegan/vegetarian cafes. Indian restaurants like 'Queens of India' are everywhere." },
                    { question: "Best time for Honeymoon?", answer: "April to October is dry season (Best). November to March has rains but is cheaper and greener." },
                    { question: "How much flight cost should I estimate?", answer: "If booked 2 months prior: ₹25,000 - ₹30,000 return per person (via Kolkata)." },
                ]}
            />

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Get Custom Honeymoon Itinerary"
                    subText="We customize based on your budget & romantic preferences."
                />
            </ContentSection>

        </PageLayout>
    );
};

export default BaliTourPackageFromRaipur;
