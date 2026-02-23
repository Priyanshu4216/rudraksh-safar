import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import { Plane, Train, ArrowRight } from 'lucide-react';

const GoaPackageFromRaipur = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Goa Tour Package from Raipur (2026) - Flight vs Train Guide</title>
                <meta
                    name="description"
                    content="Best Goa tour packages from Raipur with flight & train options. Compare Swami Vivekananda Airport flights vs Durg trains. 3N/4D plans starting ₹12,500."
                />
                <meta name="keywords" content="goa package from raipur, raipur to goa tour package, flight to goa from raipur, goa trip cost from raipur" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Goa Packages", "item": "https://rudrakshsafar.com/domestic-tours/goa-from-bhilai" },
                            { "@type": "ListItem", "position": 3, "name": "From Raipur", "item": "https://rudrakshsafar.com/domestic-tours/goa-from-raipur" }
                        ]
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/domestic-tours/goa" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Goa Guide
                </Link>
            </div>

            <HeroSection
                title="Goa Tour Package from Raipur"
                subtitle="Fly from Swami Vivekananda Airport (RPR) or take the train? We help you decide and book the perfect Goa holiday."
                backgroundImage="https://images.unsplash.com/photo-1590449767253-1284d7285514?q=80&w=1974" // Luxury resort image
                ctaText="Get Flight + Hotel Quote"
            />

            {/* Intro Block */}
            <ContentSection className="bg-white">
                <p className="text-lg text-gray-700">
                    Living in <strong>Raipur</strong> gives you a distinct advantage: <strong>Swami Vivekananda Airport (RPR)</strong>. While our friends in Bhilai rely mostly on trains, Raipur travelers can reach Goa in just 4-6 hours via flight (connecting) or take a comfortable AC train from Raipur/Durg. Our <strong>Goa packages from Raipur</strong> are designed for families and professionals who value time and comfort.
                </p>
            </ContentSection>

            {/* Flight vs Train Comparison (Raipur Specific) */}
            <ContentSection title="Raipur to Goa: Flight or Train?" className="bg-blue-50">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold flex items-center gap-2 text-indigo-700 mb-4">
                            <Plane className="w-6 h-6" /> Option A: Flight (Fastest)
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Route:</strong> RPR &rarr; DEL/BOM/HYD &rarr; GOI (Mopa/Dabolim)</li>
                            <li><strong>Time:</strong> 5-7 Hours (Total journey)</li>
                            <li><strong>Cost:</strong> ₹9,000 - ₹14,000 (Return approx)</li>
                            <li><strong>Best For:</strong> Couples, Families with kids, Weekend trips.</li>
                        </ul>
                        <p className="mt-4 text-sm text-red-500 font-semibold">Note: No direct flights. 1 Layover is standard.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold flex items-center gap-2 text-green-700 mb-4">
                            <Train className="w-6 h-6" /> Option B: Train (Budget)
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Route:</strong> RPR &rarr; Durg &rarr; Madgaon (Direct)</li>
                            <li><strong>Time:</strong> 24-26 Hours</li>
                            <li><strong>Cost:</strong> ₹1,800 (SL) - ₹4,500 (3AC) Return</li>
                            <li><strong>Best For:</strong> Students, Budget groups, Leisure travelers.</li>
                        </ul>
                        <p className="mt-4 text-sm text-green-600 font-semibold">Tip: Boarding from Raipur Jn is easier than fast-traveling to Durg.</p>
                    </div>
                </div>
            </ContentSection>

            {/* Cost Block */}
            <ContentSection title="Goa Trip Cost from Raipur (3N/4D)" className="bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4 border">Package Type</th>
                                <th className="p-4 border">Inclusions</th>
                                <th className="p-4 border">Est. Price (Per Person)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border font-bold">Flight Inclusive (Standard)</td>
                                <td className="p-4 border">Roundtrip Flights + 3 Star Hotel + Breakfast + Pickup</td>
                                <td className="p-4 border text-indigo-700 font-bold">₹18,500 - ₹22,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">Train Inclusive (Standard)</td>
                                <td className="p-4 border">3AC Train + 3 Star Hotel + Breakfast + Scooty Ast.</td>
                                <td className="p-4 border text-green-700 font-bold">₹10,500 - ₹13,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 border font-bold">Luxury Honeymoon</td>
                                <td className="p-4 border">Flights + 4/5 Star Resort + Dinner + Private Cabs</td>
                                <td className="p-4 border text-purple-700 font-bold">₹35,000+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentSection>

            <ContentSection className="bg-gray-50">
                <BookingCTA text="Book Your Raipur to Goa Escape" />
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "Are there direct flights from Raipur to Goa?", answer: "Currently, NO direct flights operate. You will likely have a layover in Hyderabad, Mumbai, or Delhi. Total travel time is approx 5-7 hours." },
                    { question: "Can you arrange airport pickup in Goa?", answer: "Yes, our packages include private car pickup from Dabolim (GOI) or Mopa (GOX) airport to your hotel." },
                    { question: "Is it better to take the train from Raipur or Durg?", answer: "Trains like Gondwana Express start/pass through Raipur. You can board directly from Raipur Junction (R) to avoid the 40km travel to Durg." }
                ]}
            />

            {/* Internal Linking (Silo) */}
            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Related Links</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <Link to="/domestic-tours/goa-from-bhilai" className="hover:underline">Main Goa Guide</Link>
                    <Link to="/goa-trip-under-10000-from-bhilai" className="hover:underline">Budget Goa Trip</Link>
                    <Link to="/domestic-tours/north-vs-south-goa" className="hover:underline">North vs South Goa</Link>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default GoaPackageFromRaipur;
