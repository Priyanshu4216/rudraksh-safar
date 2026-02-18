import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import { Train, Plane, Wallet, Camera, Users, ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const BaliTourPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Bali Tour Package from Bhilai (2026) – The "Budget" Smart Guide</title>
                <meta
                    name="description"
                    content="The cheapest way to reach Bali from Bhilai. Save ₹25,000 using the Durg-Kolkata Train hack. Perfect for friends & young couples. 5N/6D Adventure."
                />
                <meta name="keywords" content="bali tour package from bhilai, durg to bali trip cost, budget foreign trip from bhilai, bali packages for friends" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Bali Tour Package from Bhilai",
                        "description": "Budget-friendly Bali tour for Bhilai residents. Leveraging Durg-Kolkata trains to save flight costs. 5N/6D Kuta-Ubud-Nusa.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "28000",
                            "highPrice": "45000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.6", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Vikram Singh" }
                        }
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/international-tours/bali" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Bali Guide
                </Link>
            </div>

            {/* DIFFERENTIATOR 1: Hero focuses on "Dream within Reach" */}
            <HeroSection
                title="Your Dream Bali Trip (On a Bhilai Budget)"
                subtitle="Why pay ₹60k for flights? Use our 'Durg-Kolkata Hack' and spend that money on Villas instead."
                backgroundImage="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2000" // Bali Rice Terrace/Swing
                ctaText="See Budget Breakdown"
                ctaLink="#budget-hack"
            />

            {/* DIFFERENTIATOR 2: The "Truth Bomb" Section immediately */}
            <ContentSection className="bg-orange-50">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-orange-900 mb-4">Don't Waste Money on Raipur Flights</h2>
                        <p className="text-gray-800 mb-4">
                            Raipur to Bali return flights cost <strong>₹35,000+</strong>.
                            But if you take an overnight train from Durg to Kolkata, you catch the <strong>Same Flight</strong> for much less.
                        </p>
                        <p className="text-gray-800 font-medium">
                            This is how Bhilai smart travelers afford Bali.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500 max-w-sm">
                        <h3 className="font-bold text-lg mb-2">The "Smart" Calculation</h3>
                        <p className="text-sm text-gray-600">Raipur &rarr; Delhi &rarr; Bali: ~₹35k - ₹40k</p>
                        <p className="text-red-600 font-bold border-t mt-2 pt-1 mb-4">Total: ₹35k+ (Flight Only)</p>

                        <p className="text-sm text-gray-600 font-bold">Durg &rarr; Kolkata (Train): ~₹1,500 (3AC)</p>
                        <p className="text-sm text-gray-600 font-bold">Kolkata &rarr; Bali (Direct Flight): ~₹22,000</p>
                        <p className="text-green-600 font-bold border-t mt-2 pt-1">Total: ₹23,500</p>
                        <div className="mt-2 text-xs bg-green-100 text-green-800 p-1 rounded text-center">
                            Save ₹12,000 per person! (That's your Villa cost)
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* DIFFERENTIATOR 3: Itinerary Structure focused on FUN/GROUPS */}
            <ContentSection title="6 Days of Adventure (Friends/Couples)" className="bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-4 rounded border">
                            <h4 className="font-bold text-lg flex items-center gap-2"><Train className="w-5 h-5 text-blue-600" /> Start: Durg Junction</h4>
                            <p className="text-sm text-gray-600">Board Geetanjali Express (evening). Sleep overnight. Reach Howrah morning. Take taxi to Airport. Fly to Bali.</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded border">
                            <h4 className="font-bold text-lg flex items-center gap-2">Day 1-3: Kuta (Party Central)</h4>
                            <p className="text-sm text-gray-600">Stay near the beach. <strong>Hard Rock Cafe</strong>. Surfing lessons. Rent a Scooty (₹300/day) - Best way to explore.</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded border">
                            <h4 className="font-bold text-lg flex items-center gap-2">Day 4-6: Ubud (Nature & Swings)</h4>
                            <p className="text-sm text-gray-600">Waterfall chasing (Tegenungan). <strong>Bali Swing</strong> (for Instagram photos). Mount Batur Trek (optional). Pool Villa Party.</p>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800"
                            alt="Bali Scooty Ride"
                            className="rounded-lg shadow-lg mb-4"
                        />
                        <div className="bg-blue-50 p-4 rounded text-blue-900 text-sm">
                            <strong>Local Tip:</strong> Don't buy water bottles at hotels. Buy big 5L gallons from 'Circle K' or 'Mini Mart' to save money. Also, bargain hard in Ubud Market!
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* DIFFERENTIATOR 4: Addressing Bhilai Specific Concerns */}
            <ContentSection className="bg-gray-50">
                <h3 className="text-2xl font-bold mb-6 text-center">Questions from Bhilai Youth</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">Can we drive Scooty there?</h4>
                        <p className="text-sm text-gray-600">Yes! Just carry your Indian Driving License. Getting an International Permit from Raipur RTO is recommended but many ride with Indian DL + Helmet.</p>
                    </div>
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">Forex Card or Cash?</h4>
                        <p className="text-sm text-gray-600">We help you get a <strong>Niyo Global Card</strong> in Bhilai before you go. Zero markup on currency. Much cheaper than Airport exchange.</p>
                    </div>
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">Is it safe for girls' trip?</h4>
                        <p className="text-sm text-gray-600">Bali is extremely safe. The locals are Hindu and very respectful. Just follow standard travel common sense late at night in Kuta.</p>
                    </div>
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">Sim Card?</h4>
                        <p className="text-sm text-gray-600">Don't buy at Airport (Expensive). Buy 'Telkomsel' sim from a roadside shop in Kuta city area. Costs ₹500 for 20GB.</p>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Get Cost Breakdown on WhatsApp"
                    subText="See the Durg-Kolkata saving yourself."
                />
            </ContentSection>

        </PageLayout>
    );
};

export default BaliTourPackageFromBhilai;
