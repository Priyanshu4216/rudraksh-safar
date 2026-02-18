import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import LogisticsSection from '../../../components/LogisticsSection';
import { Train, Plane, Bus, Snowflake, Thermometer, MapPin, AlertTriangle, ArrowRight } from 'lucide-react';

const ManaliTourPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Manali Tour Package from Bhilai (2026) - Flight/Train Routes & Cost</title>
                <meta
                    name="description"
                    content="Ultimate 2026 Manali tour package from Bhilai & Raipur. Complete guide: Durg to Delhi train connection, Volvo bus booking, Solang Valley itinerary, and budget breakdown."
                />
                <meta name="keywords" content="manali tour package from bhilai, manali trip from durg, raipur to manali flight, manali package for couple from chhattisgarh, shimla manali tour from bhilai" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Manali Tour Package from Bhilai",
                        "description": "6-Day Manali tour package from Bhilai via Delhi. Includes Volvo bus, 3-star hotel, and sightseeing.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "10500",
                            "highPrice": "28000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.9", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Amit Deshmukh" }
                        }
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/domestic-tours/manali" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-500 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Manali Guide
                </Link>
            </div>

            {/* 1. Commercial Intent & Hero */}
            <HeroSection
                title="Manali Tour Package from Bhilai"
                subtitle="The 2026 Snow Guide: From the Heat of Bhilai to the Snow of Rohtang. Complete Train/Volvo Assistance."
                backgroundImage="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070" // Manali snow mountain
                ctaText="Get Winter Quote"
                ctaLink="#pricing"
            />

            {/* 2. Direct Answer (Cost Query) - First 150 words */}
            <ContentSection className="bg-white">
                <div className="prose max-w-none">
                    <p className="text-lg font-medium text-gray-800">
                        Dreaming of snow while sitting in Bhilai's heat? A <strong>Manali tour package from Bhilai</strong> is the perfect escape. But let's be real—Manali isn't just a hop away like Mainpat. It requires planning. You need to reach Delhi/Chandigarh first (via Train/Flight) and then take a Volvo bus.
                    </p>
                    <div className="border-l-4 border-indigo-600 pl-4 mt-4 bg-indigo-50 p-4 rounded-r-lg">
                        <h3 className="font-bold text-xl text-indigo-900 mb-2">How Much Does it Cost? (2026 Estimate)</h3>
                        <p className="mb-2">
                            A standard 6-day scenic trip costs between <strong>₹12,500 - ₹18,000 per person</strong>.
                        </p>
                        <ul className="list-disc ml-5 text-gray-700 text-sm">
                            <li><strong>Includes:</strong> Delhi-Manali Volvo Tickets, 3 Nights Hotel (3-star), Breakfast/Dinner, Rohtang/Solang Cab.</li>
                            <li><strong>Excludes:</strong> Train fare from Durg to Delhi (approx ₹1600 SL / ₹4000 3AC).</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Transport Domination (The Pain Point) */}
            <ContentSection title="How to Reach Manali from Bhilai? (The Real Route)" className="bg-slate-50">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Train Option */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Train className="text-orange-500" /> Option 1: The "Smart Saver" (Train)</h3>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                            <li><strong>Step 1:</strong> Board <em>Gondwana Express (12409)</em> or <em>CG Sampark Kranti (12823)</em> from <strong>Durg Junction</strong>.</li>
                            <li><strong>Step 2:</strong> Reach <strong>New Delhi / Hazrat Nizamuddin</strong>. (Approx 18-20 hours).</li>
                            <li><strong>Step 3:</strong> Metro/Auto to <strong>Majnu Ka Tilla</strong> or <strong>RK Ashram</strong>.</li>
                            <li><strong>Step 4:</strong> Catch the overnight <strong>Volvo Bus</strong> to Manali (12-14 hours).</li>
                        </ol>
                        <p className="mt-3 text-sm text-green-700 font-semibold">Total Travel Time: ~36 Hours | Est Cost: ₹3,500 (One Way)</p>
                    </div>

                    {/* Flight Option */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Plane className="text-blue-500" /> Option 2: The "Time Saver" (Flight)</h3>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                            <li><strong>Step 1:</strong> Flight from <strong>Raipur (RPR)</strong> to <strong>Chandigarh (IXC)</strong> (via Delhi).</li>
                            <li><strong>Step 2:</strong> Taxi/Bus from Chandigarh to Manali (8 hours).</li>
                            <li><strong>Alt Route:</strong> Flight Raipur &rarr; Delhi &rarr; <strong>Bhuntar (Kullu)</strong>. (Very expensive & flight cancellations are common in winter).</li>
                        </ol>
                        <p className="mt-3 text-sm text-red-700 font-semibold">Total Travel Time: ~12 Hours | Est Cost: ₹9,000+ (One Way)</p>
                    </div>
                </div>

                <div className="mt-6 bg-yellow-100 p-4 rounded text-yellow-800 flex gap-3 items-start">
                    <AlertTriangle className="shrink-0 mt-1" />
                    <div>
                        <strong>Important for Seniors:</strong> The Delhi-Manali bus ride is 14 hours of winding ghat roads. If traveling with elderly parents from Bhilai, we strongly recommend breaking the journey in Chandigarh or taking a flight to Kullu if weather permits.
                    </div>
                </div>
            </ContentSection>

            {/* 4. Itinerary (5 Days) */}
            <ContentSection title="5-Day 'Snow & Peaks' Itinerary" className="bg-white">
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D1</div>
                        <div>
                            <h4 className="font-bold text-lg">Departure from Delhi</h4>
                            <p className="text-gray-600">Arrive in Delhi from Durg. Evening (5 PM) board the AC Volvo Semisleeper Bus from Majnu Ka Tilla. Overnight journey.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D2</div>
                        <div>
                            <h4 className="font-bold text-lg">Manali Arrival & Local Sightseeing</h4>
                            <p className="text-gray-600">Reach Manali by 10 AM. Check-in. Freshen up. Visit <strong>Hadimba Temple</strong>, Van Vihar, and Mall Road in the evening.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D3</div>
                        <div>
                            <h4 className="font-bold text-lg">Solang Valley & Rohtang Pass</h4>
                            <p className="text-gray-600">Full day excursion. <strong>Solang Valley</strong> for paragliding/ATV. <strong>Atal Tunnel</strong> visit. Rohtang Pass (Snow Point) if permitted.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D4</div>
                        <div>
                            <h4 className="font-bold text-lg">Kullu & Manikaran</h4>
                            <p className="text-gray-600">Drive to Kullu for River Rafting (Beas River). Visit <strong>Manikaran Gurudwara</strong> (Hot Springs). Return to Manali or drop at bus stand.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">D5</div>
                        <div>
                            <h4 className="font-bold text-lg">Return to Delhi</h4>
                            <p className="text-gray-600">Morning free for shopping/Cafe hopping in Old Manali. Evening Volvo back to Delhi. Reach Delhi next morning by 7 AM.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 5. Honest Disqualification Section (Psychological Trigger) */}
            <ContentSection className="bg-red-50">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Who Should NOT Go to Manali?</h3>
                <p className="mb-4 text-gray-800">We want you to love your trip. Skip Manali if:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li><strong>You suffer from severe motion sickness:</strong> The road from Mandi to Manali is extremely curvy. Vomiting is common.</li>
                    <li><strong>You hate walking uphill:</strong> Manali (especially Old Manali) involves steep walks. It's not as flat as Goa.</li>
                    <li><strong>You expect snow in June:</strong> You will only find "dirty ice" at Rohtang. For fresh snow, visit Jan-March.</li>
                </ul>
            </ContentSection>

            {/* 6. Budget Breakdown Table */}
            <ContentSection title="Manali Trip Budget (Per Person from Bhilai)" className="bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 border">Expense Type</th>
                                <th className="p-3 border">Budget Style</th>
                                <th className="p-3 border">Comfort Style</th>
                                <th className="p-3 border">Honeymoon Style</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border font-semibold">Durg-Delhi Transport</td>
                                <td className="p-3 border">Train (Sleeper): ₹1,600</td>
                                <td className="p-3 border">Train (3AC): ₹4,000</td>
                                <td className="p-3 border">Flight (RPR-DEL): ₹10,000</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Delhi-Manali Bus</td>
                                <td className="p-3 border">Standard AC Bus: ₹2,000</td>
                                <td className="p-3 border">Volvo Semi-Sleeper: ₹3,000</td>
                                <td className="p-3 border">Private Cab: ₹15,000 (Per Cab)</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Stay (3 Nights)</td>
                                <td className="p-3 border">Hostel/Homestay: ₹3,000</td>
                                <td className="p-3 border">3-Star Hotel: ₹7,500</td>
                                <td className="p-3 border">4-Star Resort: ₹15,000+</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Food & Activity</td>
                                <td className="p-3 border">₹4,000</td>
                                <td className="p-3 border">₹8,000</td>
                                <td className="p-3 border">₹12,000</td>
                            </tr>
                            <tr className="bg-indigo-50 font-bold text-indigo-900">
                                <td className="p-3 border">Total Est.</td>
                                <td className="p-3 border">~ ₹10,600</td>
                                <td className="p-3 border">~ ₹22,500</td>
                                <td className="p-3 border">~ ₹45,000+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Get My Manali Plan"
                    subText="Customized for Bhilai Travelers. We handle Train + Volvo bookings."
                />
            </ContentSection>

            {/* 7. FAQs */}
            <FAQSection
                faqs={[
                    { question: "Is there a direct train from Durg to Manali?", answer: "No. The nearest railway station to Manali is Joginder Nagar (slow train). The best practical way is Durg -> Delhi (Train) -> Manali (Volvo)." },
                    { question: "When can we see snow in Manali?", answer: "Fresh snowfall happens between Late December and February. Snow points (Rohtang/Solang) have snow till April/May." },
                    { question: "Is Manali safe for couples from Bhilai?", answer: "100%. It is one of the safest destinations. We arrange private candle-light dinners and honeymoon inclusions (Flower bed decoration, milk, cake)." },
                    { question: "Do you provide winter jackets?", answer: "No, but you can rent snow gear (jackets, boots, gloves) at Solang Valley for approx ₹250-500 per person." },
                    { question: "Can we go to iconic 'Ye Jawaani Hai Deewani' spots?", answer: "Yes! Hadimba Temple and trekking trails near Old Manali are exactly where the movie was shot." }
                ]}
            />

            <LogisticsSection
                bestTimeData={[
                    { destination: "Snow Lovers", months: "Jan - Mar" },
                    { destination: "Green Nature", months: "Apr - Jun" },
                    { destination: "Autumn Colors", months: "Sep - Nov" }
                ]}
            />

            {/* Internal Linking Area */}
            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">You might also like</h4>


                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <Link to="/package/kashmir" className="hover:underline">Kashmir Packages</Link>
                    <Link to="/goa-vs-manali-from-chhattisgarh" className="hover:underline">Goa vs Manali Comparison</Link>
                    <Link to="/india-tour-packages-bhilai" className="hover:underline">All India Packages</Link>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default ManaliTourPackageFromBhilai;
