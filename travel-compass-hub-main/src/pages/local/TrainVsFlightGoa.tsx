import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { Train, Plane, Clock, DollarSign } from 'lucide-react';

const TrainVsFlightGoa = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Train vs Flight to Goa from Raipur/Durg: Best Option? (2026)</title>
                <meta
                    name="description"
                    content="Should you take the train or flight to Goa from Chhattisgarh? Detailed comparison of cost, time, and comfort. Durg to Madgaon vs Raipur to Dabolim."
                />
                <meta name="keywords" content="train vs flight to goa from cg, raipur to goa flight vs train, durg to goa train duration, travel advice goa from bhilai" />
            </Helmet>

            <HeroSection
                title="Train or Flight to Goa?"
                subtitle="The eternal dilemma for Chhattisgarh travelers. We compare cost, time, and hassle to help you decide."
                backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1774" // Plane wing or Train track
                ctaText="Check Both Options"
            />

            <ContentSection className="bg-white">
                <p className="text-lg text-gray-700">
                    Traveling from <strong>Chhattisgarh to Goa</strong> is a long journey. You have two main choices: The affordable but long train ride from Durg, or the expensive but faster flight from Raipur. Here is the honest comparison.
                </p>
            </ContentSection>

            <ContentSection title="Head-to-Head Comparison" className="bg-blue-50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-indigo-900 text-white">
                            <tr>
                                <th className="p-4">Feature</th>
                                <th className="p-4">Train (From Durg)</th>
                                <th className="p-4">Flight (From Raipur)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4 font-bold"><DollarSign className="inline w-4 h-4" /> Cost (Return)</td>
                                <td className="p-4 text-green-700 font-bold">₹1600 (SL) - ₹4000 (3AC)</td>
                                <td className="p-4 text-red-700 font-bold">₹9,000 - ₹15,000</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-bold"><Clock className="inline w-4 h-4" /> Time</td>
                                <td className="p-4">22 - 26 Hours</td>
                                <td className="p-4">5 - 7 Hours (inc. layover)</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-bold">Comfort</td>
                                <td className="p-4">Sleeper = Crowded. 3AC = Good.</td>
                                <td className="p-4">High. AC Cabins.</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-bold">Views</td>
                                <td className="p-4">Excellent (Western Ghats waterfalls)</td>
                                <td className="p-4">Clouds</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">Hassle</td>
                                <td className="p-4">Booking tickets (Tatkal war)</td>
                                <td className="p-4">Security check & Layover boredom</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentSection>

            <ContentSection title="Our Verdict" className="bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="text-xl font-bold mb-2">Choose TRAIN if:</h3>
                        <ul className="list-disc ml-4 text-gray-700">
                            <li>You are a group of friends/students.</li>
                            <li>You are on a budget under ₹15k.</li>
                            <li>You enjoy the journey and card games.</li>
                            <li>You can plan 4 months ahead.</li>
                        </ul>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-xl font-bold mb-2">Choose FLIGHT if:</h3>
                        <ul className="list-disc ml-4 text-gray-700">
                            <li>You are a couple on a short honeymoon (4 days).</li>
                            <li>You are traveling with elderly parents.</li>
                            <li>Budget is not an issue.</li>
                            <li>You hate train bathrooms.</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="bg-gray-50">
                <BookingCTA text="Book Your Tickets" subText="We book both Flights and Trains." />
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "Which airport in Goa is closer to Baga?", answer: "GOX (Mopa) is slightly closer to North Goa, but GOI (Dabolim) is the classic airport. Both are fine." },
                    { question: "Is the train journey safe?", answer: "Yes, especially in 3AC. Just chain your luggage and avoid taking food from strangers." }
                ]}
            />

            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Related Links</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <a href="/goa-package-from-raipur" className="hover:underline">Flight Packages</a>
                    <a href="/goa-package-from-durg" className="hover:underline">Train Packages</a>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default TrainVsFlightGoa;
