import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import LogisticsSection from '../../../components/LogisticsSection';
import { Plane, Train, Snowflake, ShieldCheck, PhoneOff, AlertTriangle, Mountain, ArrowRight } from 'lucide-react';

const KashmirTourPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Kashmir Tour Package from Bhilai (2026) – Flights, Safety & Real Cost</title>
                <meta
                    name="description"
                    content="The safest 2026 Kashmir tour package from Bhilai & Raipur. Honest advice on prepaid SIMs, flight routes via Delhi, and Gulmarg Gondola booking."
                />
                <meta name="keywords" content="kashmir tour package from bhilai, kashmir trip cost from durg, raipur to srinagar flight, vaishno devi and kashmir tour from chhattisgarh, is kashmir safe for bhilai families" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Kashmir Tour Package from Bhilai",
                        "description": "6-Day Premium Kashmir tour. Includes Srinagar Houseboat, Gulmarg Gondola assistance, and Pahalgam. Safe for families from Bhilai.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "18500",
                            "highPrice": "45000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.9", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Rakesh Agrawal" }
                        }
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/domestic-tours/kashmir" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-500 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Kashmir Guide
                </Link>
            </div>

            {/* 1. Commercial Intent & Hero */}
            <HeroSection
                title="Kashmir Tour Package from Bhilai (2026)"
                subtitle="Heaven on Earth is Safe, Beautiful, and Waiting. The Complete Guide for Chhattisgarh Travelers."
                backgroundImage="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070" // Dal Lake Shikara
                ctaText="Get Winter/Summer Quote"
                ctaLink="#pricing"
            />

            {/* 2. Direct Answer (Cost Query) - First 150 words */}
            <ContentSection className="bg-white">
                <div className="prose max-w-none">
                    <p className="text-lg font-medium text-gray-800">
                        Is Kashmir on your bucket list? For families in <strong>Bhilai and Durg</strong>, Kashmir is often a dream mixed with hesitation about safety and distance. Let's clear the air: Kashmir is <strong>safer than ever</strong> in 2026 and packed with tourists.
                    </p>
                    <div className="border-l-4 border-indigo-600 pl-4 mt-4 bg-indigo-50 p-4 rounded-r-lg">
                        <h3 className="font-bold text-xl text-indigo-900 mb-2">Cost of Kashmir Trip from Bhilai?</h3>
                        <p className="mb-2">
                            A classic 6-day trip (Srinagar-Gulmarg-Pahalgam) costs between <strong>₹18,500 - ₹32,000 per person</strong> (Land Package).
                        </p>
                        <ul className="list-disc ml-5 text-gray-700 text-sm">
                            <li><strong>Includes:</strong> 3-Star Hotels, 1 Night Houseboat (Dal Lake), Breakfast/Dinner, Private Cab (Innova/Etios).</li>
                            <li><strong>Excludes:</strong> Flights, Lunch, Gondola Tickets (₹2000+), Union Cabs in Pahalgam.</li>
                            <li><strong>Flight Cost:</strong> Raipur to Srinagar (via Delhi) is approx ₹12,000 - ₹18,000 return if booked early.</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Safety & Hyperlocal Reassurance (The #1 Anxiety) */}
            <ContentSection className="bg-green-50 border border-green-200">
                <div className="flex gap-4 items-start">
                    <ShieldCheck className="w-12 h-12 text-green-700 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-green-900 mb-2">Is Kashmir Safe for Bhilai Families?</h3>
                        <p className="text-gray-800 mb-2">
                            <strong>Yes, absolutely.</strong> In fact, you will likely meet neighbors from Sector-6 or Smriti Nagar at Dal Lake! Tourism is booming.
                        </p>
                        <ul className="list-disc ml-5 text-gray-700 text-sm">
                            <li><strong>Army Presence:</strong> The army is there for your safety. They are helpful and friendly to tourists.</li>
                            <li><strong>No Curfews:</strong> Markets in Srinagar are open late.</li>
                            <li><strong>Local Hospitality:</strong> Kashmiri people are incredibly warm and treat "guests as God" (Atithi Devo Bhava).</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 4. Transport Domination */}
            <ContentSection title="Reaching Kashmir: Flight is King" className="bg-slate-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* The Recommended Way */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Plane className="text-blue-500" /> Option 1: Flight (Recommended)</h3>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                            <li><strong>Route:</strong> <strong>Raipur (RPR)</strong> &rarr; Delhi &rarr; <strong>Srinagar (SXR)</strong>.</li>
                            <li><strong>Duration:</strong> 6-8 Hours.</li>
                            <li><strong>Cost:</strong> ₹6,000 - ₹9,000 one way.</li>
                            <li><strong>Why:</strong> You land fresh in Srinagar by afternoon and can enjoy a Shikara ride the same day.</li>
                        </ol>
                    </div>

                    {/* The Hard Way */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Train className="text-orange-500" /> Option 2: Train + Cab (Tough)</h3>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                            <li><strong>Train:</strong> Durg &rarr; Delhi &rarr; <strong>Jammu Tawi / Katra</strong>. (24-30 hrs).</li>
                            <li><strong>Road:</strong> Jammu to Srinagar is a <strong>10-12 hour</strong> mountain drive.</li>
                            <li><strong>Verdict:</strong> Only choose this if you plan to visit <strong>Vaishno Devi</strong> first. Otherwise, the Jammu-Srinagar highway is exhausting and prone to landslides.</li>
                        </ol>
                    </div>
                </div>

                <div className="mt-6 bg-red-100 p-4 rounded text-red-800 flex gap-3 items-start">
                    <PhoneOff className="shrink-0 mt-1" />
                    <div>
                        <strong>CRITICAL: Your Bhilai SIM Card Will NOT Work!</strong><br />
                        Prepaid SIM cards from outside J&K do <strong>not</strong> work in Kashmir.
                        <ul className="list-disc ml-5 mt-1 text-sm">
                            <li><strong>Solution 1:</strong> Convert your Jio/Airtel to <strong>Postpaid</strong> before leaving Bhilai.</li>
                            <li><strong>Solution 2:</strong> Buy a tourist SIM in Srinagar (takes 4-6 hours to activate).</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 5. Itinerary (6 Days) */}
            <ContentSection title="6-Day 'Paradise' Itinerary" className="bg-white">
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D1</div>
                        <div>
                            <h4 className="font-bold text-lg">Arrival in Srinagar</h4>
                            <p className="text-gray-600">Land at Srinagar. Check-in to <strong>Houseboat on Dal Lake</strong>. Enjoy a 1-hour Shikara ride during sunset. Dinner on the boat.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D2</div>
                        <div>
                            <h4 className="font-bold text-lg">Srinagar to Pahalgam</h4>
                            <p className="text-gray-600">Drive to Pahalgam (Valley of Shepherds). Buy saffron on the way at Pampore. Sightseeing in Pahalgam (Aru Valley, Betaab Valley - union cab required).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D3</div>
                        <div>
                            <h4 className="font-bold text-lg">Pahalgam to Gulmarg</h4>
                            <p className="text-gray-600">Drive to Gulmarg. Check-in hotel. Admire the snow-capped peaks. This is the main snow point.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D4</div>
                        <div>
                            <h4 className="font-bold text-lg">Gulmarg Gondola Day</h4>
                            <p className="text-gray-600">Ride the famous <strong>Gondola (Cable Car)</strong>. Phase 1 for kids, Phase 2 for peak views. (Tickets MUST be booked 1 month in advance!). Return to Srinagar hotel.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D5</div>
                        <div>
                            <h4 className="font-bold text-lg">Srinagar Local Sightseeing</h4>
                            <p className="text-gray-600">Visit Mughal Gardens (Nishat, Shalimar). Visit Shankaracharya Temple. Shopping at Lal Chowk.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D6</div>
                        <div>
                            <h4 className="font-bold text-lg">Departure</h4>
                            <p className="text-gray-600">Transfer to Srinagar Airport with bags full of walnuts and saffron. Fly back to Raipur.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 6. Honest Disqualification */}
            <ContentSection className="bg-red-50">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Who Should Avoid Kashmir?</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li><strong>January Travelers who hate cold:</strong> It goes down to -5°C. Water pipes freeze. If you can't handle extreme cold, go in April/May or September.</li>
                    <li><strong>Those expecting 'Goa-like' Freedom:</strong> It is a conservative area. Dress modestly. Alcohol is not easily available (only in few bars).</li>
                </ul>
            </ContentSection>

            {/* 7. Budget Table */}
            <ContentSection title="Kashmir Trip Budget (Per Person from Bhilai)" className="bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 border">Expense</th>
                                <th className="p-3 border">Standard (3 Star)</th>
                                <th className="p-3 border">Premium (4 Star)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border font-semibold">Land Package (Cab + Hotel + Food)</td>
                                <td className="p-3 border">₹18,500</td>
                                <td className="p-3 border">₹28,000</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Flights (Return from Raipur)</td>
                                <td className="p-3 border">₹13,000</td>
                                <td className="p-3 border">₹13,000</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Gondola & Union Cabs</td>
                                <td className="p-3 border">₹4,000</td>
                                <td className="p-3 border">₹4,000</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Shopping/Misc</td>
                                <td className="p-3 border">₹5,000</td>
                                <td className="p-3 border">₹10,000</td>
                            </tr>
                            <tr className="bg-indigo-50 font-bold text-indigo-900">
                                <td className="p-3 border">Total Est.</td>
                                <td className="p-3 border">~ ₹40,500</td>
                                <td className="p-3 border">~ ₹55,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Book My Kashmir Trip"
                    subText="We handle Gondola Tickets & Hotels. You enjoy the snow."
                />
            </ContentSection>

            {/* 8. FAQs */}
            <FAQSection
                faqs={[
                    { question: "Do we need a passport for Kashmir?", answer: "No. For Indian citizens (including Bhilai residents), a valid Voter ID or Aadhar Card is sufficient." },
                    { question: "Is vegetarian food available?", answer: "Yes, everywhere. Vaishno Dhaba style food is common. You also get 'Kashmir Dum Aloo' which is delicious." },
                    { question: "Can we combine Vaishno Devi with Kashmir?", answer: "Yes. You can take a train to Katra, do the Yatra (2 days), and then take a cab to Srinagar. Add 2 extra days to the itinerary." },
                    { question: "How to book Gondola tickets?", answer: "Gondola tickets open online 60 days in advance and sell out in minutes during peak season. We can assist on a best-effort basis." },
                ]}
            />

            <LogisticsSection
                bestTimeData={[
                    { destination: "Snow/Skiing", months: "Jan - Feb" },
                    { destination: "Tulips/Flowers", months: "Apr - May" },
                    { destination: "Apple Season", months: "Sep - Oct" }
                ]}
            />

            {/* Internal Linking Area */}
            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">More from Rudraksh Safar</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <Link to="/kerala-tour-package-from-bhilai" className="hover:underline">Kerala Packages</Link>
                    <Link to="/manali-tour-package-from-bhilai" className="hover:underline">Manali Packages</Link>
                    <Link to="/international-tours-from-raipur" className="hover:underline">International Trips</Link>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default KashmirTourPackageFromBhilai;
