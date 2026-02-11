import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import LogisticsSection from '../../components/LogisticsSection';
import { Plane, Globe, Wallet, AlertTriangle, PartyPopper, Palmtree } from 'lucide-react';

const ThailandTourPackageFromRaipur = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Thailand Tour Package from Raipur (2026) – Flight, Visa & Cost Guide</title>
                <meta
                    name="description"
                    content="The ultimate 2026 Thailand guide for Raipur travelers. Visa-Free entry details, cheap flights via Kolkata, and Pattaya vs Phuket comparison."
                />
                <meta name="keywords" content="thailand tour package from raipur, raipur to bangkok flight price, thailand trip cost from bhilai, pattaya tour package from chhattisgarh, visa free thailand for indians" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Thailand Tour Package from Raipur",
                        "description": "5N/6D Thailand tour (Bangkok + Pattaya). Includes 3-star hotels, Coral Island tour, and all transfers. Flight guidance via Kolkata/Delhi.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "24999",
                            "highPrice": "45000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Vikram Singh" }
                        }
                    })}
                </script>
            </Helmet>

            {/* 1. Commercial Intent & Hero */}
            <HeroSection
                title="Thailand Tour Package from Raipur (2026)"
                subtitle="Your First International Trip Starts Here. Visa-Free (For Now) & Cheaper Than Kerala!"
                backgroundImage="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000" // Bangkok Temple/River
                ctaText="Get Thailand Quote"
                ctaLink="#pricing"
            />

            {/* 2. Direct Answer (Cost Query) - First 150 words */}
            <ContentSection className="bg-white">
                <div className="prose max-w-none">
                    <p className="text-lg font-medium text-gray-800">
                        "Foreign Jaana Hai?" For people in <strong>Raipur and Bhilai</strong>, Thailand is the undisputed king of first international trips. Why? Because it offers beaches, nightlife, and shopping for less than the cost of a luxury trip to Kerala.
                    </p>
                    <div className="border-l-4 border-teal-600 pl-4 mt-4 bg-teal-50 p-4 rounded-r-lg">
                        <h3 className="font-bold text-xl text-teal-900 mb-2">Cost of Thailand Trip from Raipur?</h3>
                        <p className="mb-2">
                            A standard 6-day (Bangkok + Pattaya) trip costs between <strong>₹32,000 - ₹50,000 per person</strong> (including flights).
                        </p>
                        <ul className="list-disc ml-5 text-gray-700 text-sm">
                            <li><strong>Land Package:</strong> ₹24,999 (Hotels, Breakfast, Transfers, Sightseeing).</li>
                            <li><strong>Flights:</strong> Raipur &rarr; Kolkata &rarr; Bangkok is often the cheapest route (approx ₹16k - ₹22k return).</li>
                            <li><strong>Visa:</strong> Currently <strong>Free for Indians</strong> (Subject to change, check with us).</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Transport Domination (The "Kolkata Trick") */}
            <ContentSection title="Reaching Thailand: The Smart Route" className="bg-slate-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* The Budget Route */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Plane className="text-green-500" /> Option 1: Via Kolkata (CCU)</h3>
                        <p className="text-gray-600 mb-2 text-sm">Best for Budget Travelers.</p>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                            <li><strong>Leg 1:</strong> Train/Flight from Raipur &rarr; Kolkata.</li>
                            <li><strong>Leg 2:</strong> Kolkata (CCU) &rarr; Bangkok (BKK/DMK) is a short 2.5-hour flight!</li>
                            <li><strong>Pros:</strong> Flights from Kolkata are often ₹5000 cheaper than Delhi.</li>
                        </ol>
                    </div>

                    {/* The Comfort Route */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Plane className="text-blue-500" /> Option 2: Via Delhi (DEL)</h3>
                        <p className="text-gray-600 mb-2 text-sm">Best for Phuket/Krabi connections.</p>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                            <li><strong>Leg 1:</strong> Raipur &rarr; Delhi.</li>
                            <li><strong>Leg 2:</strong> Delhi &rarr; Phuket (Direct) or Bangkok.</li>
                            <li><strong>Pros:</strong> More flight options and premium airlines (Thai Airways, Indigo).</li>
                        </ol>
                    </div>
                </div>

                <div className="mt-6 bg-yellow-100 p-4 rounded text-yellow-800 flex gap-3 items-start">
                    <Globe className="shrink-0 mt-1" />
                    <div>
                        <strong>Passport Check:</strong> Ensure your passport has at least <strong>6 months validity</strong> from your date of return. If not, the airline will deny boarding at Raipur Airport itself.
                    </div>
                </div>
            </ContentSection>

            {/* 4. Itinerary (6 Days - The Classic Loop) */}
            <ContentSection title="6-Day 'City & Sand' Itinerary (Bangkok + Pattaya)" className="bg-white">
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold shrink-0">D1</div>
                        <div>
                            <h4 className="font-bold text-lg">Arrival in Bangkok &rarr; Pattaya</h4>
                            <p className="text-gray-600">Land at BKK/DMK. Meet our driver. Direct 2-hour drive to <strong>Pattaya</strong>. Check-in. Evening Alcazar Cabaret Show (World famous Ladyboy show - Family friendly).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold shrink-0">D2</div>
                        <div>
                            <h4 className="font-bold text-lg">Coral Island Tour</h4>
                            <p className="text-gray-600">Speedboat ride to Koh Larn (Coral Island). Water sports (Parasailing, Sea Walking, Jet Ski - cost extra). Indian Lunch included on the island. Evening free for Walking Street (Optional).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold shrink-0">D3</div>
                        <div>
                            <h4 className="font-bold text-lg">Pattaya to Bangkok</h4>
                            <p className="text-gray-600">Visit Gems Gallery (World's biggest jewellery store). Drive back to Bangkok. Enroute visit Safari World & Marine Park (Giraffe feeding, Dolphin show).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold shrink-0">D4</div>
                        <div>
                            <h4 className="font-bold text-lg">Bangkok City Tour</h4>
                            <p className="text-gray-600">Temple tour (Golden Buddha, Marble Buddha). Check-in to Bangkok hotel. Evening Chao Phraya Dinner Cruise (Music, Dance, Buffet).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold shrink-0">D5</div>
                        <div>
                            <h4 className="font-bold text-lg">Shopping Day (Indra Square/MBK)</h4>
                            <p className="text-gray-600">Full day for shopping. Buy electronics, clothes, and souvenirs at Pratunam Market or MBK Center. Don't forget to bargain!</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold shrink-0">D6</div>
                        <div>
                            <h4 className="font-bold text-lg">Departure</h4>
                            <p className="text-gray-600">Transfer to Airport. Flight back to Raipur via Kolkata/Delhi.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 5. Pattaya vs Phuket (Comparison) */}
            <ContentSection title="Confused? Pattaya vs Phuket" className="bg-indigo-50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-indigo-900 text-white">
                            <tr>
                                <th className="p-4">Feature</th>
                                <th className="p-4">Pattaya</th>
                                <th className="p-4">Phuket</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4 font-bold">Best For</td>
                                <td className="p-4">Bachelors, Nightlife, Budget</td>
                                <td className="p-4">Couples, Luxury, Clean Beaches</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-bold">Distance from BKK</td>
                                <td className="p-4">2 Hours by Road</td>
                                <td className="p-4">1 Hour Flight (Extra Cost)</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-bold">Vibe</td>
                                <td className="p-4">Loud, Party, Crowded</td>
                                <td className="p-4">Relaxed, Scenic, Island Hopping</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">Cost Impact</td>
                                <td className="p-4 text-green-700 font-bold">Cheaper</td>
                                <td className="p-4 text-red-700 font-bold">Expensive (+10k)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentSection>

            {/* 6. Honest Disqualification */}
            <ContentSection className="bg-red-50">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Who Should NOT go to Pattaya?</h3>
                <p className="mb-4 text-gray-800">Thailand is amazing, but Pattaya has a specific reputation.</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li><strong>Conservative Families:</strong> Walking Street in Pattaya is famous for adult nightlife. If traveling with parents/kids, avoid Walking Street after 8 PM or stick to North Pattaya/Phuket.</li>
                    <li><strong>Those expecting Indian Food everywhere:</strong> While Indian restaurants exist, they are expensive. If you strictly need Dal-Chawal for every meal, carry ready-to-eat packets.</li>
                </ul>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Get Custom Thailand Itinerary"
                    subText="We help with flights from Raipur & Forex."
                />
            </ContentSection>

            {/* 7. FAQs */}
            <FAQSection
                faqs={[
                    { question: "Do I need a Visa for Thailand?", answer: "Currently, Thailand offers Visa-Free entry for Indian tourists (Check validity dates with us). If that expires, Visa on Arrival is available for 2000 THB." },
                    { question: "Where should I buy Forex (Thai Baht)?", answer: "Do NOT buy at Raipur Airport (bad rates). Buy US Dollars in Raipur/Bhilai and convert them to Baht in Bangkok City (Superrich Forex) for the best rate." },
                    { question: "Is vegetarian food easy to find?", answer: "Yes, Bangkok and Pattaya have hundreds of Indian restaurants. You can get Dosa, Roti, Curry easily." },
                    { question: "Can we use UPI in Thailand?", answer: "UPI is slowly being accepted, but Cash (Baht) is king. 7-Eleven, taxis, and street food vendors prefer cash." },
                ]}
            />

            <LogisticsSection
                bestTimeData={[
                    { destination: "Cool Season", months: "Nov - Feb" },
                    { destination: "Shoulder (Hot)", months: "Mar - May" },
                    { destination: "Rainy/Cheap", months: "Jun - Oct" }
                ]}
            />

            {/* Internal Linking Area */}
            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">More International Options</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <a href="/international-tours-from-raipur" className="hover:underline">International Hub</a>
                    <a href="/visa/dubai" className="hover:underline">Dubai Visa Guide</a>
                    <a href="/visa/bali" className="hover:underline">Bali Visa Guide</a>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default ThailandTourPackageFromRaipur;
