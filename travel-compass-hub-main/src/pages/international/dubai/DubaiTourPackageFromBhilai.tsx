import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import { Plane, Car, Users, CalendarCheck, ShieldCheck, ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const DubaiTourPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Dubai Group Tour from Bhilai (2026) – All Inclusive Family Packages</title>
                <meta
                    name="description"
                    content="Join our Bhilai-special Group Tours to Dubai. Door-to-door airport transfer, Visa support for families, and Ladies-only groups available."
                />
                <meta name="keywords" content="dubai group tour from bhilai, dubai package for bhilai families, durg to dubai travel agent, ladies dubai trip from bhilai" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Dubai Group Tour from Bhilai",
                        "description": "All-inclusive Dubai Group Tour for Bhilai residents. Includes Airport Cab (Bhilai-Raipur), Flight, Visa, and Indian Meals. Special batches for families.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "42000",
                            "highPrice": "65000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.9", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Mrs. Verma" }
                        }
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/international-tours/dubai" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-yellow-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Dubai Guide
                </Link>
            </div>

            {/* DIFFERENTIATOR 1: Hero focuses on "Community/Group" vs Raipur's "Luxury" */}
            <HeroSection
                title="Dubai: The Bhilai Community Tour"
                subtitle="Travel with people like you. Fixed Departures. Indian Food. Zero Stress."
                backgroundImage="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2000" // Dubai Frame/City
                ctaText="Check Next Batch Dates"
                ctaLink="#dates"
            />

            {/* DIFFERENTIATOR 2: The "Door-to-Door" Logistics Focus */}
            <ContentSection className="bg-white dark:bg-background">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">The Bhilai Advantage</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
                            <Car className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
                            <h3 className="font-bold text-lg">Home Pickup</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">For group bookings (4+), we provide a cab from your home in Bhilai (Sec-1 to Sec-10, Nehru Nagar) to Raipur Airport.</p>
                        </div>
                        <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
                            <Users className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
                            <h3 className="font-bold text-lg">Group Safety</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">First time abroad? Don't worry. You travel with a group of 10-15 people from Chhattisgarh. Local company.</p>
                        </div>
                        <div className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
                            <ShieldCheck className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
                            <h3 className="font-bold text-lg">Kitchen Support</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">We prioritize hotels in Bur Dubai that serve Poha/Paratha breakfast. No bread-butter compulsion.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* DIFFERENTIATOR 3: The "Homemaker/Student" Visa Focus */}
            <ContentSection className="bg-indigo-50 dark:bg-indigo-950/30">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">Visa for Housewives & Students?</h3>
                        <p className="mb-4">
                            Many homemakers in Bhilai don't have income proof (ITR). Students don't have salary slips.
                            <strong>Does that mean No Dubai? No.</strong>
                        </p>
                        <p className="mb-4">
                            We specialize in the "Sponsorship Visa". If the husband/father is sponsoring, or if you have travel history, we get it done.
                            We have processed 500+ valid visas for non-working family members from Bhilai.
                        </p>
                        <div className="bg-white dark:bg-slate-900 p-3 rounded font-medium text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 inline-block">
                            Required: Passport (Front/Back) + Photo + Pan Card. That's it.
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded shadow-lg border dark:border-slate-800">
                            <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-4 border-b dark:border-slate-700 pb-2">Batch Departure Dates</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between">
                                    <span>April 15, 2026</span>
                                    <span className="text-green-600 dark:text-green-400 font-bold">Open</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>May 10, 2026</span>
                                    <span className="text-orange-600 dark:text-orange-400 font-bold">Filling Fast</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>June 05, 2026</span>
                                    <span className="text-green-600 dark:text-green-400 font-bold">Open</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* DIFFERENTIATOR 4: Itinerary focused on "Shopping & Photos" */}
            <ContentSection title="6 Days: The 'Photogenic' Plan" className="bg-white dark:bg-background">
                <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 italic mb-6 text-center"> Designed for Instagram & WhatsApp Status updates.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border p-4 rounded hover:shadow-md transition dark:border-slate-700">
                            <h4 className="font-bold text-lg text-pink-600 dark:text-pink-400">Day 2: The View</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Burj Khalifa Top + Dubai Mall Aquarium (Outside). Perfect profile picture spot.</p>
                        </div>
                        <div className="border p-4 rounded hover:shadow-md transition dark:border-slate-700">
                            <h4 className="font-bold text-lg text-pink-600 dark:text-pink-400">Day 3: The Adventure</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Desert Safari. Wear traditional clothes. Get Henna (Mehendi) done on hands. Camel photos.</p>
                        </div>
                        <div className="border p-4 rounded hover:shadow-md transition dark:border-slate-700">
                            <h4 className="font-bold text-lg text-pink-600 dark:text-pink-400">Day 4: The Miracle</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Miracle Garden (World's biggest flower garden) OR Global Village (Shopping form 90 countries). <i>*Seasonal</i></p>
                        </div>
                        <div className="border p-4 rounded hover:shadow-md transition dark:border-slate-700">
                            <h4 className="font-bold text-lg text-pink-600 dark:text-pink-400">Day 5: Gold Shopping</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Meena Bazaar & Gold Souk. We guide you where to get Indian designs.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* DIFFERENTIATOR 5: Disqualification based on "Solo/ Bachelor" */}
            <ContentSection className="bg-red-50 dark:bg-red-950/20">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">Not for Bachelors?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                    Our Bhilai Group Tours are <strong>strictly family-oriented</strong>. We do not allow stag groups (only men) in our family batches to maintain comfort for ladies and kids.
                    <br /><br />
                    <i>*Bachelors can book our "Private Dubai Package" separately.</i>
                </p>
            </ContentSection>

            <ContentSection className="bg-white dark:bg-background">
                <BookingCTA
                    text="Join the Next Bhilai Batch"
                    subText="Small booking amount. Pay rest later."
                />
            </ContentSection>

        </PageLayout>
    );
};

export default DubaiTourPackageFromBhilai;
