import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import { Plane, MapPin, Search, Star, Hotel, IndianRupee, Globe, ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const SriLankaTourPackageFromRaipur = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Sri Lanka Tour Package from Raipur (2026) – Ramayana Trail & Beaches</title>
                <meta
                    name="description"
                    content="Experience the best of Sri Lanka from Raipur. Visit Ramayana sites (Ashok Vatika) or enjoy Colombo Casinos. 5N/6D Package tailored for Chhattisgarh travelers."
                />
                <meta name="keywords" content="sri lanka tour package from raipur, raipur to colombo flight status, ramayana trail tour sri lanka from chhattisgarh, sri lanka casino package" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Sri Lanka Tour Package from Raipur",
                        "description": "Comprehensive Sri Lanka tour including Ramayana Trail for seniors and Beach/Casino for youth. Starting from Raipur.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "28000",
                            "highPrice": "55000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Dr. Ramesh Gupta" }
                        }
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/international-tours/srilanka" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Sri Lanka Guide
                </Link>
            </div>

            {/* 1. Hero */}
            <HeroSection
                title="Sri Lanka: The Ramayana & The Review"
                subtitle="Whether you seek the blessings of Sita Amman or the nightlife of Colombo, we have the perfect itinerary."
                backgroundImage="https://images.unsplash.com/photo-1586616212530-388275afaa60?auto=format&fit=crop&q=80&w=2000" // Sigiriya Rock
                ctaText="Get Itinerary"
                ctaLink="#itinerary"
            />

            {/* 2. Logistics & Why Sri Lanka */}
            <ContentSection className="bg-green-50">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-green-900 mb-4">Raipur to Colombo: Easy Connection</h2>
                        <p className="text-gray-800 mb-4">
                            Sri Lanka is one of the easiest international trips from Raipur.
                        </p>
                        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm mb-4">
                            <h4 className="font-bold flex items-center gap-2"><Plane className="w-5 h-5 text-blue-600" /> Best Flight Detail</h4>
                            <p className="text-sm text-gray-700 mt-1">Raipur (RPR) &rarr; Chennai (MAA) / Bangalore (BLR)</p>
                            <p className="text-sm text-gray-700">Short Layover (2-3 hrs)</p>
                            <p className="text-sm text-gray-700">Chennai &rarr; Colombo (CMB) [SriLankan Airlines]</p>
                            <p className="text-xs text-blue-700 font-bold mt-2">Visa: Free / On Arrival (Hassle-free)</p>
                        </div>
                        <p className="text-gray-700 italic border-l-2 border-gray-400 pl-3">
                            "This trip is perfect for families where grandparents want to see temples and youngsters want beaches."
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                        <h3 className="font-bold text-lg mb-2 text-green-800">Why Sri Lanka Now?</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex gap-2"><IndianRupee className="w-5 h-5 text-green-600" /> <strong>Value:</strong> Your Rupee goes far here. Luxury resorts are affordable.</li>
                            <li className="flex gap-2"><Globe className="w-5 h-5 text-blue-600" /> <strong>Visa Free:</strong> Often free for Indians (check current status with us).</li>
                            <li className="flex gap-2"><MapPin className="w-5 h-5 text-red-500" /> <strong>Ramayana:</strong> See the actual Ashoka Vatika where Ravana kept Sita Mata.</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Itinerary Strategy (Bifurcated) */}
            <ContentSection title="Choose Your Vibe" className="bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Option A: Ramayana Trail */}
                    <div className="border border-orange-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="bg-orange-100 p-4">
                            <h3 className="text-xl font-bold text-orange-800">Option A: The Ramayana Trail</h3>
                            <p className="text-sm text-orange-700">For Parents & History Lovers</p>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 1</span>
                                <p className="text-sm">Arrival. Transfer to <strong>Kandy</strong>. Visit Tooth Relic Temple.</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 2</span>
                                <p className="text-sm"><strong>Nuwara Eliya</strong>. Visit <strong>Sita Amman Temple</strong> & Ashoka Vatika.</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 3</span>
                                <p className="text-sm">Visit Divurumpola (Place of Agni Pariksha). Scenic Train Ride.</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 4-5</span>
                                <p className="text-sm">Bentota Beach relaxation. Turtle Hatchery.</p>
                            </div>
                        </div>
                    </div>

                    {/* Option B: Tropical Chill */}
                    <div className="border border-blue-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="bg-blue-100 p-4">
                            <h3 className="text-xl font-bold text-blue-800">Option B: Tropical Fun & Casinos</h3>
                            <p className="text-sm text-blue-700">For Couples & Friends</p>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 1-2</span>
                                <p className="text-sm"><strong>Bentota</strong>. Water sports (Jet ski, Banana boat). Beach party.</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 3</span>
                                <p className="text-sm">Galle Fort (European vibe). Instagram photography.</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 4-5</span>
                                <p className="text-sm"><strong>Colombo City</strong>. Shopping at Odel. Nightlife & <strong>Casino</strong> experience (Bally's/Bellagio).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 4. Comparison Table */}
            <ContentSection className="bg-slate-50">
                <h3 className="text-center font-bold text-2xl mb-6">Package Inclusions</h3>
                <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-slate-800 text-white">
                            <tr>
                                <th className="p-3 text-left">Inclusion</th>
                                <th className="p-3 text-left">Standard (3-Star)</th>
                                <th className="p-3 text-left">Premium (4/5-Star)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3 font-bold text-gray-700">Hotels</td>
                                <td className="p-3 text-gray-600">Clean, centrally located</td>
                                <td className="p-3 text-gray-600">Beachfront Resorts (Bentota)</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3 font-bold text-gray-700">Transport</td>
                                <td className="p-3 text-gray-600">Private AC Car (Sedan)</td>
                                <td className="p-3 text-gray-600">Private AC SUV / Van</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3 font-bold text-gray-700">Price (Land Only)</td>
                                <td className="p-3 font-bold text-green-600">₹28,500 / person</td>
                                <td className="p-3 font-bold text-green-600">₹42,000 / person</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentSection>

            {/* 5. FAQs */}
            <FAQSection
                faqs={[
                    { question: "Do we need a visa?", answer: "Currently, Sri Lanka offers free tourist visas for Indians. We will handle the ETA (Electronic Travel Authorization) process for you." },
                    { question: "Is vegetarian food available?", answer: "Yes, especially on the Ramayana trail. There are many Indian restaurants in Kandy, Nuwara Eliya, and Colombo." },
                    { question: "Can we combine both itineraries?", answer: "Absolutely. We can create a 7N/8D plan that covers Temples, Hills, Beaches, and Casinos." },
                    { question: "What currency should we carry?", answer: "US Dollars are best to carry. You can exchange them for Sri Lankan Rupees (LKR) at Colombo airport." },
                ]}
            />

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Customize Your Sri Lanka Trip"
                    subText="Tell us: Ramayana Trail or Beach Vibes?"
                />
            </ContentSection>

        </PageLayout>
    );
};

export default SriLankaTourPackageFromRaipur;
