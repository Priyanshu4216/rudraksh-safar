import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { PiggyBank, Utensils, Home, Bike } from 'lucide-react';

const GoaCheapTripGuide = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Cheap Goa Trip Guide for Chhattisgarh Travelers (2026 Hacks)</title>
                <meta
                    name="description"
                    content="Local guide to a cheap Goa trip from Bhilai & Raipur. Save ₹5000+ with our tips on trains, food, duty-free prices, and off-season booking."
                />
                <meta name="keywords" content="cheap goa trip guide, how to plan cheap goa trip from raipur, budget travel hacks goa" />
            </Helmet>

            <HeroSection
                title="How to Plan a Cheap Goa Trip?"
                subtitle="Stop overpaying. Here are the local secrets to saving money on your Goa vacation from Chhattisgarh."
                backgroundImage="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1974" // Beach shack/casual
                ctaText="Get Budget Deals"
            />

            <ContentSection className="bg-white">
                <p className="text-lg text-gray-700">
                    A cheap trip isn't about suffering; it's about spending smart. We have sent thousands of students and budget travelers from <strong>Durg, Bhilai, and Raipur</strong> to Goa. We know exactly where you can cut costs without ruining the fun.
                </p>
            </ContentSection>

            <ContentSection title="4 Rules to Save Money" className="bg-green-50">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-5 rounded shadow">
                        <h3 className="flex items-center gap-2 font-bold text-lg mb-2"><Bike className="text-green-600" /> Rule 1: Rent Bikes Immediately</h3>
                        <p className="text-gray-600">Taxis in Goa are a rip-off. A round trip from Baga to Panjim in a taxi costs ₹2000. A scooty rental costs ₹350/day. You do the math.</p>
                    </div>
                    <div className="bg-white p-5 rounded shadow">
                        <h3 className="flex items-center gap-2 font-bold text-lg mb-2"><Home className="text-green-600" /> Rule 2: Stay 1km from Beach</h3>
                        <p className="text-gray-600">Hotels "on the beach" charge a premium. Walk 10 minutes inland, and room rates drop by 40%. The beach is still free!</p>
                    </div>
                    <div className="bg-white p-5 rounded shadow">
                        <h3 className="flex items-center gap-2 font-bold text-lg mb-2"><Utensils className="text-green-600" /> Rule 3: Eat Local "Thali"</h3>
                        <p className="text-gray-600">Beach shacks charge ₹400 for Dal Fry. Local Goan restaurants serve a Fish Curry Rice Thali for ₹150. It's tastier and cheaper.</p>
                    </div>
                    <div className="bg-white p-5 rounded shadow">
                        <h3 className="flex items-center gap-2 font-bold text-lg mb-2"><PiggyBank className="text-green-600" /> Rule 4: Travel Off-Season</h3>
                        <p className="text-gray-600">September and March are "Goldilocks" months. Good weather, half-price hotels. Avoid Dec 20 - Jan 5 at all costs.</p>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA text="Plan a Smart Budget Trip" subText="We help you book hostels and trains at official IRCTC rates." />
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "Is alcohol really cheap in Goa?", answer: "Yes, much cheaper than Chhattisgarh due to low taxes. But buying from wine shops is 3x cheaper than drinking at a shack." },
                    { question: "Can we camp on the beach to save money?", answer: "NO. Camping on beaches is illegal and police patrol regularly. You will be fined." },
                    { question: "What is the cheapest way to reach Goa?", answer: "Sleeper Class train from Durg Junction. Fare is approx ₹800 one way. Book 120 days early." }
                ]}
            />

            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Related Links</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <a href="/goa-trip-under-10000-from-bhilai" className="hover:underline">10k Budget Challenge</a>
                    <a href="/goa-budget-itinerary-from-cg" className="hover:underline">Day-wise Plan</a>
                </div>
            </ContentSection>
        </PageLayout>
    );
};

export default GoaCheapTripGuide;
