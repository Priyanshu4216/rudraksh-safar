import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { MapPin, Coffee, Camera, Sun } from 'lucide-react';

const GoaBudgetItinerary = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>4 Day Goa Budget Itinerary from Chhattisgarh (2026 Guide)</title>
                <meta
                    name="description"
                    content="The ultimate day-by-day Goa budget itinerary for travelers from Bhilai, Raipur & Durg. Save money on scooty, food, and stay. Perfect 4-day plan."
                />
                <meta name="keywords" content="goa budget itinerary, cheap goa trip plan, 4 day goa itinerary from bhilai, goa backpacker guide" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Perfect 4-Day Budget Goa Itinerary",
                        "author": "Rudraksh Safar",
                        "datePublished": "2026-02-12"
                    })}
                </script>
            </Helmet>

            <HeroSection
                title="4 Days in Goa on a Budget"
                subtitle="Don't waste money on tourist traps. Follow this local-approved itinerary to experience the best of Goa without breaking the bank."
                backgroundImage="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776" // Itinerary/Map vibe
                ctaText="Book This Plan"
            />

            <ContentSection className="bg-white">
                <p className="text-lg text-gray-700">
                    Most travelers from <strong>Chhattisgarh</strong> waste ₹5,000+ on overpriced taxis and bad food locations. This <strong>4-Day Budget Itinerary</strong> is designed to keep your costs low while covering all major spots. We assume you arrive at Madgaon/Thivim by train.
                </p>
            </ContentSection>

            {/* Day 1 */}
            <ContentSection title="Day 1: Arrival & North Goa Vibes" className="bg-blue-50">
                <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1"><Sun className="text-orange-500 w-8 h-8" /></div>
                    <div>
                        <h3 className="text-xl font-bold">Morning: Check-in & Scooty Rental</h3>
                        <p className="text-gray-700">Arrive at station. Take a shared bus/shuttle to Calangute/Baga (Save ₹800 vs Taxi). Check into your hostel/budget hotel. <strong>Immediately rent a scooty</strong> (₹350-400/day). Do not delay this.</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-6">
                    <div className="flex-shrink-0 mt-1"><Coffee className="text-brown-500 w-8 h-8" /></div>
                    <div>
                        <h3 className="text-xl font-bold">Evening: Beach Shack Relax</h3>
                        <p className="text-gray-700">Head to <strong>Calangute Beach</strong> for sunset. Avoid expensive shacks. Grab a beer/juice from a wine shop and sit on the sand (where allowed) or find a budget shack at the far end of the beach.</p>
                    </div>
                </div>
            </ContentSection>

            {/* Day 2 */}
            <ContentSection title="Day 2: Forts & Party Vibes" className="bg-white">
                <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1"><Camera className="text-indigo-500 w-8 h-8" /></div>
                    <div>
                        <h3 className="text-xl font-bold">Day: Dil Chahta Hai Moments</h3>
                        <p className="text-gray-700">Ride to <strong>Chapora Fort</strong> (Free entry). Then head to <strong>Vagator Beach</strong>. Lunch at a local thali joint in Anjuna (Burger Factory is good but pricey, try local Goan fish curry rice for ₹200).</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-6">
                    <div className="flex-shrink-0 mt-1"><MapPin className="text-red-500 w-8 h-8" /></div>
                    <div>
                        <h3 className="text-xl font-bold">Night: Anjuna Flea Market / Curlies</h3>
                        <p className="text-gray-700">Visit Anjuna Flea Market (Wednesdays) or just soak in the vibe at Curlies (entry covers food). It's cheaper than Club Cabana/Tito's.</p>
                    </div>
                </div>
            </ContentSection>

            {/* Day 3 */}
            <ContentSection title="Day 3: South Goa Peace" className="bg-green-50">
                <p className="mb-4 font-bold text-red-600">Warning: Long ride (60km). Start early (8 AM).</p>
                <div className="space-y-4">
                    <p><strong>Stop 1:</strong> Old Goa Churches (Basilica of Bom Jesus). Free entry.</p>
                    <p><strong>Stop 2:</strong> Palolem Beach. This is the most beautiful beach. Relax here. Eat at Dropadi (slightly pricey) or smaller huts.</p>
                    <p><strong>Stop 3:</strong> Return via Panjim. Look at the casinos from the outside (Budget trip, remember?).</p>
                </div>
            </ContentSection>

            {/* Day 4 */}
            <ContentSection title="Day 4: Panjim & Departure" className="bg-white">
                <p>Check out. Ride to Panjim. Visit <strong>Immaculate Conception Church</strong>. Return scooty. Take bus to station.</p>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA text="Get This Itinerary PDF + Booking" subText="We book the exact hostels and bikes mentioned here." />
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "Is petrol expensive in Goa?", answer: "It is slightly cheaper than Chhattisgarh. Budget ₹500 for 3 days of riding." },
                    { question: "Can we skip South Goa to save money?", answer: "Yes. Staying only in North Goa saves fuel and time. But you miss the 'real' beautiful beaches." },
                    { question: "Do police stop tourists?", answer: "YES. Wear Helmets. Do not drink and drive. Fines are ₹1000+ and ruin the budget instantly." }
                ]}
            />

            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Related Links</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <a href="/goa-tour-package-from-bhilai" className="hover:underline">Main Goa Guide</a>
                    <a href="/goa-trip-under-10000-from-bhilai" className="hover:underline">Cost Breakdown</a>
                    <a href="/goa-package-from-durg" className="hover:underline">Train Info</a>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default GoaBudgetItinerary;
