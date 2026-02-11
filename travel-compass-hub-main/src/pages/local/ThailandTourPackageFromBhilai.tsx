import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { Train, Plane, Wallet, AlertTriangle, Users } from 'lucide-react';

const ThailandTourPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Thailand Tour Package from Bhilai (2026) – The "Budget" Guide</title>
                <meta
                    name="description"
                    content="The honest Bhilai-to-Thailand guide. Save ₹10,000 by using the Durg-Kolkata route. Visa-free info and family-safe itineraries involved."
                />
                <meta name="keywords" content="thailand tour package from bhilai, durg to bangkok train route, thailand trip cost from durg, budget foreign trip from bhilai" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Thailand Tour Package from Bhilai",
                        "description": "Budget-friendly Thailand tour for Bhilai residents. Leveraging Durg-Kolkata trains to save flight costs. 5N/6D Bangkok-Pattaya.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "22999",
                            "highPrice": "42000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.7", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Sandeep Sahu" }
                        }
                    })}
                </script>
            </Helmet>

            {/* DIFFERENTIATOR 1: Hero focuses on "Middle Class Dream" vs Raipur's "Styles" */}
            <HeroSection
                title="Your First Foreign Trip from Bhilai"
                subtitle="Thailand is Cheaper than you think. Especially if you know the 'Durg-Kolkata' Hack."
                backgroundImage="https://images.unsplash.com/photo-1590487372173-20076a5c2d3a?q=80&w=2000" // Wat Arun
                ctaText="Get Budget Quote"
                ctaLink="#budget-hack"
            />

            {/* DIFFERENTIATOR 2: The "Truth Bomb" Section immediately */}
            <ContentSection className="bg-orange-50">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-orange-900 mb-4">Why Bhilai Travelers Overpay</h2>
                        <p className="text-gray-800 mb-4">
                            Most agents in Civic Center or Supela will book you on a flight from Raipur to Delhi, then Delhi to Bangkok. <strong>This is a mistake.</strong> It adds ₹10,000 - ₹15,000 to your cost unnecessarily.
                        </p>
                        <p className="text-gray-800 font-medium">
                            We focus on the <strong>Smart Route</strong> that saves money for your shopping.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500 max-w-sm">
                        <h3 className="font-bold text-lg mb-2">The "Smart" Calculation</h3>
                        <p className="text-sm text-gray-600">Raipur &rarr; Delhi Flight: ~₹5,000</p>
                        <p className="text-sm text-gray-600">Delhi &rarr; Bangkok Flight: ~₹12,000</p>
                        <p className="text-red-600 font-bold border-t mt-2 pt-1">Total: ₹17,000 (One Way)</p>
                        <br />
                        <p className="text-sm text-gray-600">Durg &rarr; Kolkata Train: ~₹1,500 (3AC)</p>
                        <p className="text-sm text-gray-600">Kolkata &rarr; Bangkok Flight: ~₹7,000</p>
                        <p className="text-green-600 font-bold border-t mt-2 pt-1">Total: ₹8,500 (One Way)</p>
                        <div className="mt-2 text-xs bg-green-100 text-green-800 p-1 rounded text-center">
                            Save ₹17,000 per couple!
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* DIFFERENTIATOR 3: Itinerary Structure focused on VALUE */}
            <ContentSection title="5 Nights / 6 Days: Maximum Value Plan" className="bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-4 rounded border">
                            <h4 className="font-bold text-lg flex items-center gap-2"><Train className="w-5 h-5 text-blue-600" /> Reaching Kolkata</h4>
                            <p className="text-sm text-gray-600">Board Geetanjali or Azad Hind Exp/Flight from Raipur. Reach Kolkata. Fly to Bangkok (2.5 hrs). Reach Hotel.</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded border">
                            <h4 className="font-bold text-lg flex items-center gap-2">Day 1-2: Pattaya (Action)</h4>
                            <p className="text-sm text-gray-600">Direct transfer to Pattaya. <strong>Coral Island Tour</strong> (Lunch included - huge saving). Alkazar Show (Optional). Nightlife exploration.</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded border">
                            <h4 className="font-bold text-lg flex items-center gap-2">Day 3-5: Bangkok (Shopping)</h4>
                            <p className="text-sm text-gray-600">Safari World (Full day with buffet). Temple Tour. <strong>Indra Square Wholesale Market</strong> - Buy clothes for the whole year at 1/3rd Bhilai prices.</p>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=800"
                            alt="Bangkok Shopping"
                            className="rounded-lg shadow-lg mb-4"
                        />
                        <div className="bg-blue-50 p-4 rounded text-blue-900 text-sm">
                            <strong>Local Tip:</strong> Skip the expensive "Dinner Cruise" if on a budget. Take the public river ferry for 20 Baht (₹50) to see the same views!
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* DIFFERENTIATOR 4: Addressing Bhilai Specific Concerns */}
            <ContentSection className="bg-gray-50">
                <h3 className="text-2xl font-bold mb-6 text-center">Common Questions from Bhilai Families</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">Is Indian Food available? My parents are vegetarian.</h4>
                        <p className="text-sm text-gray-600">Yes. Pattaya and Bangkok have 200+ Indian restaurants. You get Roti, Dal, Paneer everywhere. We can include "All Meals" in your package to fix the price.</p>
                    </div>
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">Can we travel without English?</h4>
                        <p className="text-sm text-gray-600">Yes. Thailand is very tourist-friendly. Use Google Translate. Our drivers understand basic instructions.</p>
                    </div>
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">Is it safe for women/kids?</h4>
                        <p className="text-sm text-gray-600">Absolutely. Just clarify your preference: if you want a "Family Vibe", we book hotels in <strong>North Pattaya</strong> (Quiet/Resorts) instead of near Walking Street.</p>
                    </div>
                    <div className="bg-white p-5 rounded shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-2">How much cash to carry?</h4>
                        <p className="text-sm text-gray-600">Strict rule: Carry 10,000 Thai Baht (approx ₹25k) per person in cash. Immigration sometimes checks this. We help you arrange this in Bhilai.</p>
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

export default ThailandTourPackageFromBhilai;
