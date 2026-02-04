import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';
import DestinationFactSheet from '@/components/content/DestinationFactSheet';
import { Check, X, Plane, Train, ThermometerSun, Snowflake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GoaVsManali = () => {
    return (
        <>
            <Helmet>
                <title>Goa vs Manali: Which is Better from Raipur/Bhilai? (2026 Comparison)</title>
                <meta name="description" content="Stuck between beaches and mountains? Detailed comparison of Goa vs Manali for travelers from Chhattisgarh. Cost, Travel Time, Flight vs Train analysis." />
                <meta name="keywords" content="goa vs manali from raipur, goa trip cost from bhilai, manali trip cost from raipur, best honeymoon destination from chhattisgarh" />
                <link rel="canonical" href="https://rudrakshsafar.com/comparisons/goa-vs-manali-from-chhattisgarh" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-24 pb-16">

                <div className="container max-w-4xl mx-auto px-4">
                    <div className="flex justify-start mb-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Comparisons', path: '/comparisons/goa-vs-manali-from-chhattisgarh' }]} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-center">
                        Goa vs Manali: <br />
                        <span className="text-indigo-600">The Ultimate Clash</span>
                    </h1>

                    <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        For travelers from Chhattisgarh, the choice isn't just "Beach vs Mountain". It's about <strong>Connectivity</strong> and <strong>Budget</strong>.
                    </p>

                    {/* The Verdict Block */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <Card className="border-t-4 border-t-orange-500 shadow-lg">
                            <CardContent className="p-8">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ThermometerSun className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Choose GOA if...</h2>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-1" /> You love nightlife and parties.</li>
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-1" /> You want a relaxed, "do nothing" holiday.</li>
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-1" /> You prefer a shorter flight duration.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-t-4 border-t-cyan-500 shadow-lg">
                            <CardContent className="p-8">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Snowflake className="w-8 h-8 text-cyan-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Choose MANALI if...</h2>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-1" /> You want to see snow (Dec-Mar).</li>
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-1" /> You enjoy adventure (Rafting, Paragliding).</li>
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 mt-1" /> You are okay with long road travel.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">1. Travel & Connectivity from Raipur</h2>
                    <div className="overflow-x-auto rounded-xl border border-border mb-12">
                        <table className="w-full text-left text-sm md:text-base">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="p-4 font-bold">Feature</th>
                                    <th className="p-4 font-bold text-orange-700">Goa</th>
                                    <th className="p-4 font-bold text-cyan-700">Manali</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="p-4 font-medium flex items-center gap-2"><Plane className="w-4 h-4" /> Flight</td>
                                    <td className="p-4">3-5 Hrs (via HYD/IND). <br /><span className="text-green-600 font-bold">Faster</span></td>
                                    <td className="p-4">6-8 Hrs (Raipur-Delhi-Chandigarh). Then 8 hr cab.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium flex items-center gap-2"><Train className="w-4 h-4" /> Train</td>
                                    <td className="p-4">24+ Hrs. Very tiring.</td>
                                    <td className="p-4">Train to Delhi (20 Hrs) + Bus (12 Hrs). Total 32+ Hrs.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Ideal Duration</td>
                                    <td className="p-4">3 Nights / 4 Days</td>
                                    <td className="p-4">5 Nights / 6 Days (Due to travel time)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">2. Cost Breakdown (Per Person)</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <DestinationFactSheet
                            destination="Goa"
                            startCity="Raipur"
                            duration="4 Days"
                            mode="Flight"
                            budget="₹22,000"
                            crowdLevel="High"
                            priceTrend="High"
                            bestSeason="Winter"
                        />
                        <DestinationFactSheet
                            destination="Manali"
                            startCity="Raipur"
                            duration="6 Days"
                            mode="Flight + Cab"
                            budget="₹28,000"
                            crowdLevel="Medium"
                            priceTrend="Average"
                            bestSeason="Summer/Winter"
                        />
                    </div>
                </div>

                <FAQsSection
                    title="Frequently Asked Comparison Questions"
                    faqs={[
                        {
                            question: "Which is cheaper from Raipur: Goa or Manali?",
                            answer: "Goa is usually cheaper if you get a good flight deal. Manali becomes expensive due to the long cab journey from Delhi/Chandigarh and higher hotel rates in peak season."
                        },
                        {
                            question: "Which is better for a honeymoon?",
                            answer: "Manali is considered more romantic (cozy weather, mountains). Goa is more fun and energetic. For privacy, Manali (specifically cottages away from Mall road) is better."
                        },
                        {
                            question: "Can I see snow in Goa?",
                            answer: "No. Goa is a tropical beach destination. For snow, you must choose Manali between December and March."
                        }
                    ]}
                />

                <div className="py-8 text-center bg-muted/30 mt-8">
                    <p className="mb-4 text-muted-foreground">Still can't decide? Let us plan a custom itinerary for you.</p>
                    <div className="flex justify-center gap-4">
                        <a href="/domestic-packages" className="underline text-indigo-600 font-medium">View All Packages</a>
                        <span className="text-muted-foreground">|</span>
                        <a href="https://wa.me/919406182174" className="underline text-green-600 font-medium">Chat with Expert</a>
                    </div>
                </div>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default GoaVsManali;
