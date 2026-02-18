import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import LogisticsSection from '../../../components/LogisticsSection';
import { Plane, Globe, ShieldCheck, Sun, Building2, ShoppingBag, ArrowRight } from 'lucide-react';

const DubaiTourPackageFromRaipur = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Dubai Tour Package from Raipur (2026) – Visa, Flights & Sheikh Style</title>
                <meta
                    name="description"
                    content="Experience 2026 Dubai from Raipur with Rudraksh Safar. Complete guide on E-Visa, flights via Mumbai/Delhi, and Burj Khalifa tickets."
                />
                <meta name="keywords" content="dubai tour package from raipur, dubai visa agent bhilai, raipur to dubai flight cost, dubai couple package from chhattisgarh, desert safari dubai price" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Dubai Tour Package from Raipur",
                        "description": "5N/6D Premium Dubai Tour. Includes Burj Khalifa 124th Floor, Desert Safari, Marina Cruise, and Abu Dhabi. Visa included.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "45000",
                            "highPrice": "75000",
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
                <Link to="/international-tours/dubai" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-yellow-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Dubai Guide
                </Link>
            </div>

            {/* 1. Commercial Intent & Hero */}
            <HeroSection
                title="Dubai Tour Package from Raipur (2026)"
                subtitle="Live the Sheikh Life. The Gold Standard of International Travel for Bhilai Families."
                backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea936a7fe48?q=80&w=2000" // Burj Khalifa
                ctaText="Get Dubai Quote"
                ctaLink="#pricing"
            />

            {/* 2. Direct Answer (Cost Query) - First 150 words */}
            <ContentSection className="bg-white dark:bg-card">
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        Thinking of Dubai? For families in <strong>Raipur and Bhilai</strong>, Dubai is the ultimate status symbol and shopping paradise. But the Visa process scares many. Don't worry—we handle the <strong>entire Visa process</strong> so you just pack your bags.
                    </p>
                    <div className="border-l-4 border-yellow-600 pl-4 mt-4 bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-r-lg">
                        <h3 className="font-bold text-xl text-yellow-900 dark:text-yellow-400 mb-2">Cost of Dubai Trip from Raipur?</h3>
                        <p className="mb-2">
                            A premium 6-day trip (Dubai + Abu Dhabi) costs between <strong>₹45,000 - ₹70,000 per person</strong>.
                        </p>
                        <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 text-sm">
                            <li><strong>Land Package:</strong> ₹32,000+ (4-Star Hotels, Dhow Cruise, Safari, Transfers).</li>
                            <li><strong>Flights:</strong> Raipur &rarr; Mumbai &rarr; Dubai is the standard route (approx ₹20k - ₹28k return).</li>
                            <li><strong>Visa:</strong> Included in our package (E-Visa, takes 2-4 working days).</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Transport Domination (The "Mumbai Connection") */}
            <ContentSection title="Reaching Dubai: The Mumbai Hub" className="bg-slate-50 dark:bg-slate-900/50">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* The Popular Route */}
                    <div className="bg-white dark:bg-card p-6 rounded-lg shadow border-t-4 border-blue-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Plane className="text-blue-500" /> Option 1: Via Mumbai (BOM)</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Most Frequent & Reliable.</p>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Leg 1:</strong> Flight Raipur &rarr; Mumbai (Morning).</li>
                            <li><strong>Transfer:</strong> Change from Terminal 1 (Domestic) to Terminal 2 (International) via free shuttle.</li>
                            <li><strong>Leg 2:</strong> Mumbai &rarr; Dubai (DXB). Huge flight availability (Emirates, Indigo, Air India).</li>
                        </ol>
                    </div>

                    {/* The Alternative Route */}
                    <div className="bg-white dark:bg-card p-6 rounded-lg shadow border-t-4 border-indigo-500">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Plane className="text-indigo-500" /> Option 2: Via Delhi (DEL)</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Good for Indigo Connections.</p>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Leg 1:</strong> Raipur &rarr; Delhi.</li>
                            <li><strong>Leg 2:</strong> Delhi &rarr; Dubai.</li>
                            <li><strong>Pros:</strong> Terminal change in Delhi (T3) is sometimes smoother if both flights are same airline.</li>
                        </ol>
                    </div>
                </div>

                <div className="mt-6 bg-green-100 dark:bg-green-900/20 p-4 rounded text-green-800 dark:text-green-300 flex gap-3 items-start">
                    <ShieldCheck className="shrink-0 mt-1" />
                    <div>
                        <strong>Visa Promise:</strong> Our Dubai Visa success rate for Chhattisgarh residents is <strong>99.5%</strong>. We review your documents (Passport, Photo, Pan Card) before submission to avoid rejection.
                    </div>
                </div>
            </ContentSection>

            {/* 4. Itinerary (6 Days - Future City) */}
            <ContentSection title="6-Day 'Future City' Itinerary" className="bg-white dark:bg-card">
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full flex items-center justify-center font-bold shrink-0">D1</div>
                        <div>
                            <h4 className="font-bold text-lg">Arrival & Dhow Cruise</h4>
                            <p className="text-gray-600 dark:text-gray-400">Land in Dubai. Transfer to Hotel (Bur Dubai/Deira). Evening <strong>Marina Dhow Cruise</strong> with dinner on board. View the glittering skyline.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full flex items-center justify-center font-bold shrink-0">D2</div>
                        <div>
                            <h4 className="font-bold text-lg">Dubai City Tour & Burj Khalifa</h4>
                            <p className="text-gray-600 dark:text-gray-400">Half-day city tour (Dubai Frame, Zabeel Palace). Evening: <strong>Burj Khalifa (124th Floor)</strong>. Watch the Fountain Show at Dubai Mall.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full flex items-center justify-center font-bold shrink-0">D3</div>
                        <div>
                            <h4 className="font-bold text-lg">Future Museum & Desert Safari</h4>
                            <p className="text-gray-600 dark:text-gray-400">Morning visit to Museum of the Future (Book 1 month ahead!). Afternoon: pick up for <strong>Desert Safari</strong> (Dune Bashing, Camel Ride, BBQ Dinner, Belly Dance).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full flex items-center justify-center font-bold shrink-0">D4</div>
                        <div>
                            <h4 className="font-bold text-lg">Day Trip to Abu Dhabi</h4>
                            <p className="text-gray-600 dark:text-gray-400">Full day tour to UAE Capital. Visit the grand <strong>Sheikh Zayed Mosque</strong> (Cover full body). Visit Ferrari World or Yas Waterworld (Optional).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full flex items-center justify-center font-bold shrink-0">D5</div>
                        <div>
                            <h4 className="font-bold text-lg">Shopping & Leisure (Global Village)</h4>
                            <p className="text-gray-600 dark:text-gray-400">Morning free for Gold Souk/Meena Bazaar. Evening visit to <strong>Global Village</strong> (Nov-Apr only) or Miracle Garden.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full flex items-center justify-center font-bold shrink-0">D6</div>
                        <div>
                            <h4 className="font-bold text-lg">Departure</h4>
                            <p className="text-gray-600 dark:text-gray-400">Last minute shopping at Duty Free. Fly back to Raipur via Mumbai.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 5. Dubai vs Singapore (Comparison) */}
            <ContentSection title="Comparison: Dubai vs Singapore" className="bg-indigo-50 dark:bg-indigo-900/10">
                <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white dark:bg-card shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-yellow-900 text-white">
                            <tr>
                                <th className="p-4">Feature</th>
                                <th className="p-4">Dubai</th>
                                <th className="p-4">Singapore</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="border-b dark:border-gray-700">
                                <td className="p-4 font-bold">Best For</td>
                                <td className="p-4">Shopping, Luxury, Desert</td>
                                <td className="p-4">Nature, Kids (Universal), Greenery</td>
                            </tr>
                            <tr className="border-b dark:border-gray-700">
                                <td className="p-4 font-bold">Visa</td>
                                <td className="p-4">E-Visa (Easy)</td>
                                <td className="p-4">Physical Visa (Strict)</td>
                            </tr>
                            <tr className="border-b dark:border-gray-700">
                                <td className="p-4 font-bold">Vibe</td>
                                <td className="p-4">Grand, Modern, Middle-Eastern</td>
                                <td className="p-4">Tropical, Orderly, Asian</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">Food</td>
                                <td className="p-4">Shawarma + Indian available</td>
                                <td className="p-4">Asian/Malay + Indian available</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentSection>

            {/* 6. Honest Disqualification */}
            <ContentSection className="bg-red-50 dark:bg-red-900/10">
                <h3 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-4">Who Should Avoid Dubai?</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Summer Travelers (June - August):</strong> It gets 50°C+. You cannot walk outside. Everything is AC-to-AC. If you hate extreme heat, avoid these months.</li>
                    <li><strong>Those on a tight budget:</strong> Dubai is expensive. A cup of chai can cost ₹300. If budget is tight, choose Thailand or Vietnam.</li>
                </ul>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Get My Dubai Quote"
                    subText="We handle Visa. You handle Shopping."
                />
            </ContentSection>

            {/* 7. FAQs */}
            <FAQSection
                faqs={[
                    { question: "What currency should I carry?", answer: "Carry US Dollars from Raipur/Bhilai. Exchange them for Dirhams (AED) in Dubai malls for the best rate." },
                    { question: "Is there a dress code?", answer: "Malls and public areas are liberal but avoid very short clothes. In Mosques (Abu Dhabi), women MUST cover their head and body completely." },
                    { question: "Can we drive in Dubai?", answer: "Only with an International Driving Permit (IDP). Indian license is not valid for rental cars." },
                    { question: "Is alcohol available?", answer: "Yes, in licensed hotels and bars. Public drinking is strictly prohibited and can lead to jail." },
                ]}
            />

            {/* Internal Linking Area */}
            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Combine Your Trip?</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <Link to="/thailand-tour-package-from-raipur" className="hover:underline">Thailand Packages</Link>
                    <Link to="/international-tours-from-raipur" className="hover:underline">All International Tours</Link>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default DubaiTourPackageFromRaipur;
