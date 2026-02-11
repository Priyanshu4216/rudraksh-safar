import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { Bus, Wallet, Users } from 'lucide-react';

const GoaTripFromSupela = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Goa Trip from Supela & Power House - Student Specials (2026)</title>
                <meta
                    name="description"
                    content="Budget Goa trips for students and groups from Supela, Bhilai. Hostel stays, bike rentals, and affordable packages starting ₹9,000."
                />
                <meta name="keywords" content="goa trip from supela, travel agent in supela, goa package for students bhilai, college trip to goa from bhilai" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Goa Packages", "item": "https://rudrakshsafar.com/goa-tour-package-from-bhilai" },
                            { "@type": "ListItem", "position": 3, "name": "From Supela", "item": "https://rudrakshsafar.com/goa-trip-from-supela" }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                title="Goa Trip from Supela"
                subtitle="Planning a college reunion or a bachelor trip? Get the best budget deals right from Supela & Power House."
                backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974" // Beach party vibe
                ctaText="Get Student Discount"
            />

            <ContentSection className="bg-white">
                <p className="text-lg text-gray-700">
                    Supela is the heart of Bhilai's student and youth crowd. We know that when you plan a <strong>Goa trip from Supela</strong>, you want maximum fun for minimum cash. Our special <strong>"Bachelor & Student" packages</strong> focus on clean hostels, shared bikes, and party areas like Baga and Anjuna, skipping the boring sightseeing.
                </p>
            </ContentSection>

            {/* Student/Budget Focus */}
            <ContentSection title="Why Book from Supela Local Agent?" className="bg-yellow-50">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded border border-yellow-200">
                        <Users className="w-10 h-10 text-yellow-600 mb-3" />
                        <h4 className="font-bold text-lg">Group Discounts</h4>
                        <p className="text-sm text-gray-600">Travelling in a group of 6 or more? usage our special group rates for hotels and scooters.</p>
                    </div>
                    <div className="bg-white p-5 rounded border border-yellow-200">
                        <Wallet className="w-10 h-10 text-yellow-600 mb-3" />
                        <h4 className="font-bold text-lg">Pay in Installments</h4>
                        <p className="text-sm text-gray-600">Book with a small token amount now and pay the rest before the trip.</p>
                    </div>
                    <div className="bg-white p-5 rounded border border-yellow-200">
                        <Bus className="w-10 h-10 text-yellow-600 mb-3" />
                        <h4 className="font-bold text-lg">Bus Option</h4>
                        <p className="text-sm text-gray-600">Train full? We can arrange sleeper buses to Nagpur/Pune &rarr; Goa connecting routes.</p>
                    </div>
                </div>
            </ContentSection>

            <ContentSection title="Student Budget Breakdown (Per Person)" className="bg-white">
                <div className="border rounded-lg bg-gray-50 p-6 max-w-2xl mx-auto">
                    <div className="flex justify-between border-b pb-2 mb-2 font-semibold">
                        <span>Item</span>
                        <span>Cost (Est)</span>
                    </div>
                    <div className="flex justify-between py-1"><span>Train (Sleeper Return)</span><span>₹1,800</span></div>
                    <div className="flex justify-between py-1"><span>Hostel (4 Nights)</span><span>₹2,400</span></div>
                    <div className="flex justify-between py-1"><span>Scooty Share (4 Days)</span><span>₹1,000</span></div>
                    <div className="flex justify-between py-1"><span>Food & Drinks</span><span>₹3,500</span></div>
                    <div className="flex justify-between pt-4 border-t mt-2 font-bold text-lg text-indigo-700">
                        <span>Total</span>
                        <span>~ ₹8,700</span>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="bg-gray-50">
                <BookingCTA text="Unlock Student Deals" subText="Valid for groups from BIT, CSIT, and Shankara colleges." />
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "Is alcohol allowed on the train from Durg?", answer: "Strictly NO. Carrying or consuming alcohol on Indian Railways is a punishable offense." },
                    { question: "Can we rent bikes if we don't have a license?", answer: "No. A valid driving license is mandatory for renting scooters in Goa. Police checking is strict." },
                    { question: "Do you book hostels in Anjuna?", answer: "Yes, we partner with top hostels like Zostel, Pappi Chulo, and others for a great social vibe." }
                ]}
            />

            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Related Links</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <a href="/goa-tour-package-from-bhilai" className="hover:underline">Main Goa Guide</a>
                    <a href="/goa-package-from-durg" className="hover:underline">Durg Departure</a>
                    <a href="/goa-budget-itinerary-from-cg" className="hover:underline">Cheap Itinerary</a>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default GoaTripFromSupela;
