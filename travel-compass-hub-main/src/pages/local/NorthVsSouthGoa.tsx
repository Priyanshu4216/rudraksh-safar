import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { Heart, Music, Umbrella, Users } from 'lucide-react';

const NorthVsSouthGoa = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>North vs South Goa: Which is Better for You? (Chhattisgarh Guide)</title>
                <meta
                    name="description"
                    content="Confused between North and South Goa? We explain the difference in crowd, cost, and vibe for Bhilai/Raipur travelers. Baga vs Palolem."
                />
                <meta name="keywords" content="north vs south goa guide, which part of goa is better, north goa vs south goa for couples, goa comparison" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "North vs South Goa: Which is Better for You? (Chhattisgarh Guide)",
                        "description": "Confused between North and South Goa? We explain the difference in crowd, cost, and vibe for Bhilai/Raipur travelers. Baga vs Palolem.",
                        "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974",
                        "author": {
                            "@type": "Organization",
                            "name": "Rudraksh Safar",
                            "url": "https://rudrakshsafar.com/"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Rudraksh Safar",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://rudrakshsafar.com/logo.png"
                            }
                        },
                        "datePublished": "2026-02-15",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://rudrakshsafar.com/north-vs-south-goa-from-cg"
                        }
                    })}
                </script>
            </Helmet>

            <HeroSection
                title="North Goa vs South Goa"
                subtitle="Crowded parties or silent beaches? Your choice defines your vacation. Let's help you pick the right side."
                backgroundImage="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974" // Split vibe if possible, otherwise generic beautiful beach
                ctaText="Explore Packages"
            />

            <ContentSection className="bg-white">
                <p className="text-lg text-gray-700">
                    Goa is two different worlds. <strong>North Goa</strong> is about nightlife, markets, and crowds. <strong>South Goa</strong> is about nature, luxury resorts, and empty beaches. Choosing the wrong one can ruin your trip.
                </p>
            </ContentSection>

            <ContentSection className="bg-white">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* North Goa */}
                    <div className="border rounded-xl overflow-hidden shadow-lg">
                        <div className="bg-indigo-600 p-4 text-white text-center">
                            <h2 className="text-2xl font-bold flex justify-center items-center gap-2"><Music /> North Goa</h2>
                            <p>The Party Capital</p>
                        </div>
                        <div className="p-6">
                            <img src="https://images.unsplash.com/photo-1549487922-26db129f170f?q=80&w=500" alt="North Goa Party" className="w-full h-48 object-cover rounded mb-4" />
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2"><Users className="text-indigo-600 mt-1" /> <strong>Crowd:</strong> Very High. Traffic jams are common.</li>
                                <li className="flex items-start gap-2"><Music className="text-indigo-600 mt-1" /> <strong>Vibe:</strong> Loud music, neon lights, active shacks.</li>
                                <li className="flex items-start gap-2"><Heart className="text-indigo-600 mt-1" /> <strong>Best For:</strong> Bachelors, First-timers, Party lovers.</li>
                            </ul>
                            <div className="mt-4 p-3 bg-indigo-50 rounded">
                                <strong>Famous Spots:</strong> Baga, Calangute, Anjuna, Tito's Lane.
                            </div>
                        </div>
                    </div>

                    {/* South Goa */}
                    <div className="border rounded-xl overflow-hidden shadow-lg">
                        <div className="bg-green-600 p-4 text-white text-center">
                            <h2 className="text-2xl font-bold flex justify-center items-center gap-2"><Umbrella /> South Goa</h2>
                            <p>The Tropical Paradise</p>
                        </div>
                        <div className="p-6">
                            <img src="https://images.unsplash.com/photo-1519046904884-53103b34b271?q=80&w=500" alt="South Goa Peace" className="w-full h-48 object-cover rounded mb-4" />
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2"><Users className="text-green-600 mt-1" /> <strong>Crowd:</strong> Low. Private beaches available.</li>
                                <li className="flex items-start gap-2"><Music className="text-green-600 mt-1" /> <strong>Vibe:</strong> Sound of waves, swaying palms, romantic dinners.</li>
                                <li className="flex items-start gap-2"><Heart className="text-green-600 mt-1" /> <strong>Best For:</strong> Honeymooners, Families seeking peace, Nature lovers.</li>
                            </ul>
                            <div className="mt-4 p-3 bg-green-50 rounded">
                                <strong>Famous Spots:</strong> Palolem, Colva, Benaulim, Agonda.
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="bg-gray-50">
                <BookingCTA text="Still Confused? Call Us." subText="We can customize a 'Best of Both Worlds' itinerary for you." />
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "How far is South Goa from North Goa?", answer: "Whatever Google Maps says (60km), add 1 hour. Traffic can be bad. It takes about 2-2.5 hours by car." },
                    { question: "Is South Goa boring?", answer: "If you want loud music, yes. If you want white sand and clear water, North Goa is the boring one!" }
                ]}
            />

            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Related Links</h4>


                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <Link to="/goa-tour-package-from-bhilai" className="hover:underline">Main Package</Link>
                    <Link to="/goa-budget-itinerary-from-cg" className="hover:underline">Suggested Itinerary</Link>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default NorthVsSouthGoa;
