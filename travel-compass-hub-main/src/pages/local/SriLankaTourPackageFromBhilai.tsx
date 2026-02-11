import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { Train, Plane, MapPin, Search, Star, Hotel, IndianRupee, Globe } from 'lucide-react';

const SriLankaTourPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Sri Lanka Tour Package from Bhilai (2026) – Train to Chennai Option</title>
                <meta
                    name="description"
                    content="Affordable Sri Lanka tour from Bhilai. Use the Durg-Chennai train route to save huge on flights. Visit Ramayana sites or enjoy Beach parties. 6N/7D."
                />
                <meta name="keywords" content="sri lanka tour package from bhilai, durg to colombo trip cost, cheapest sri lanka package from chhattisgarh, ramayana yatra from bhilai" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Sri Lanka Tour Package from Bhilai",
                        "description": "Budget-friendly Sri Lanka tour for Bhilai residents. Option to take train to Chennai for flight savings. Covers Kandy, Bentota, Colombo.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "24000",
                            "highPrice": "45000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.7", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Sahu Family (Durg)" }
                        }
                    })}
                </script>
            </Helmet>

            {/* 1. Hero */}
            <HeroSection
                title="Sri Lanka from Bhilai: The Smart Way"
                subtitle="Save ₹10,000+ per person by using our 'Durg-Chennai' train connection hack. Ramayana & Beaches await."
                backgroundImage="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000" // Sri Lanka Tea/Train
                ctaText="See Cost Saving"
                ctaLink="#budget-hack"
            />

            {/* 2. Logistics & Why Sri Lanka */}
            <ContentSection className="bg-orange-50" id="budget-hack">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-orange-900 mb-4">The Durg to Chennai Advantage</h2>
                        <p className="text-gray-800 mb-4">
                            Flights from Raipur to Colombo can be expensive (₹25k+). But did you know Chennai to Colombo flights are dirt cheap?
                        </p>

                        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                            <h4 className="font-bold flex items-center gap-2 text-green-700">The "Bhilai Saver" Route</h4>
                            <div className="mt-2 space-y-2">
                                <p className="text-sm flex items-center gap-2"><Train className="w-4 h-4" /> <strong>Step 1:</strong> Train from Durg to Chennai (MAS). (Overnight/24hrs).</p>
                                <p className="text-xs text-gray-500 pl-6">Cost: ~₹1,800 (3AC)</p>

                                <p className="text-sm flex items-center gap-2"><Plane className="w-4 h-4" /> <strong>Step 2:</strong> Flight from Chennai to Colombo.</p>
                                <p className="text-xs text-gray-500 pl-6">Cost: ~₹8,000 - ₹10,000 (Very Cheap!)</p>

                                <p className="font-bold text-green-600 mt-2 border-t pt-1">Total Transport: ~₹12,000 (Approx)</p>
                                <p className="text-xs text-red-400">Vs Raipur Flight: ₹25,000+</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic mt-4 text-sm">
                            "Perfect for students, large groups, or families who don't mind the train journey to save big."
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
                        <h3 className="font-bold text-lg mb-2 text-orange-800">Why Bhilai Loves Sri Lanka</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex gap-2"><IndianRupee className="w-5 h-5 text-green-600" /> <strong>Cheap Forex:</strong> 1 INR = ~3.5 LKR. You feel rich there!</li>
                            <li className="flex gap-2"><Globe className="w-5 h-5 text-blue-600" /> <strong>Similar Food:</strong> Rice & Curry is staple. South Indian influence makes food very palatable.</li>
                            <li className="flex gap-2"><MapPin className="w-5 h-5 text-red-500" /> <strong>Ramayana:</strong> Exploring the roots of our mythology.</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Itinerary Strategy (Bifurcated) */}
            <ContentSection title="6 Days: Temple or Party?" className="bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Option A: Ramayana Trail */}
                    <div className="border border-orange-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="bg-orange-100 p-4">
                            <h3 className="text-xl font-bold text-orange-800">The Ramayana Yatra</h3>
                            <p className="text-sm text-orange-700">Ideal for Families / Elders</p>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 1</span>
                                <p className="text-sm">Arrive Colombo. Transfer to <strong>Kandy</strong>. Cultural Dance Show.</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 2</span>
                                <p className="text-sm"><strong>Nuwara Eliya</strong> (Little England). Visit <strong>Seetha Amman Temple</strong> (Ashok Vatika).</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 3</span>
                                <p className="text-sm">Visit Ravana Ella Falls. Scenic Train Ride (Kandy to Ella route).</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 4-5</span>
                                <p className="text-sm">Colombo City Tour. Kelaniya Raja Maha Vihara (Vibishana Temple).</p>
                            </div>
                        </div>
                    </div>

                    {/* Option B: Tropical Chill */}
                    <div className="border border-blue-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="bg-blue-100 p-4">
                            <h3 className="text-xl font-bold text-blue-800">Friends / Bachelors Trip</h3>
                            <p className="text-sm text-blue-700">Adventure & Nightlife</p>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 1-2</span>
                                <p className="text-sm"><strong>Bentota</strong>. Jet Skiing. River Safari. Beachside BBQ.</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 3</span>
                                <p className="text-sm">Mirissa. Whale Watching (Seasonal). Coconut Tree Hill.</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="font-bold text-gray-500">Day 4-5</span>
                                <p className="text-sm"><strong>Colombo Casino Night</strong>. Try your luck at Bellagio or Bally's. Rooftop bars.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 4. Bhilai FAQ */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h3 className="text-2xl font-bold text-center mb-6">Frequently Asked by Bhilai Travelers</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm border">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Q: Can I drive in Sri Lanka?</h4>
                        <p className="text-xs text-gray-600">Yes! Taking a "Tuk-Tuk" on rent is a popular adventure. You need an international permit which can be arranged in Colombo.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm border">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Q: Is food spicy like home?</h4>
                        <p className="text-xs text-gray-600">Yes! Sri Lankan 'Kottu Roti' is very spicy and similar to our taste. Loads of vegetarian options available.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm border">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Q: How much cash to carry?</h4>
                        <p className="text-xs text-gray-600">Carry approx $300-400 USD per person. Exchange it at Colombo airport for best rates. Don't exchange in India.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm border">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Q: Is it safe for families?</h4>
                        <p className="text-xs text-gray-600">100%. Tourism is booming and locals are extremely hospitable to Indians.</p>
                    </div>
                </div>
            </div>

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Get Flight vs Train Cost Comparison"
                    subText="We will calculate the cheapest option for your dates."
                />
            </ContentSection>

        </PageLayout>
    );
};

export default SriLankaTourPackageFromBhilai;
