import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import { Ship, Plane, Map, Anchor, Sun, CreditCard, ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const AndamanTourPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Andaman Tour Package from Bhilai (2026) – LTC Approved & No Passport</title>
                <meta
                    name="description"
                    content="The best Andaman Islands package for Bhilai residents. LTC Approved for BSP/Railway employees. Flight options from Raipur & Kolkata. Havelock & Neil Island included."
                />
                <meta name="keywords" content="andaman tour package from bhilai, ltc tour package andaman, raipur to port blair flight price, andaman honeymoon package from chhattisgarh" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Andaman Tour Package from Bhilai",
                        "description": "LTC-compliant Andaman tour package for Bhilai families and couples. Includes Port Blair, Havelock (Radhanagar Beach), and Neil Island.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "18000",
                            "highPrice": "45000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.7", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "Amit Kumar (BSP)" }
                        }
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/domestic-tours/andaman" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Andaman Guide
                </Link>
            </div>

            {/* 1. Hero: LTC Focus */}
            <HeroSection
                title="Andaman: Foreign Vibe, Domestic Price (LTC Approved)"
                subtitle="White sands, blue water, and history. Perfect for BSP & Railway families in Bhilai."
                backgroundImage="https://images.unsplash.com/photo-1590050752117-238cb0fb25ba?auto=format&fit=crop&q=80&w=2000" // Andaman Beach/Boat
                ctaText="Get LTC Quote"
                ctaLink="#ltc-info"
            />

            {/* 2. Logistics: The "How to Reach" Problem */}
            <ContentSection className="bg-blue-50 dark:bg-blue-900/10">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-4">Reaching Andaman from Bhilai</h2>
                        <p className="text-gray-800 dark:text-gray-200 mb-4">
                            Since there are no direct trains to Andaman (obviously!), you have two main options tailored for Bhilai residents.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-white dark:bg-card p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                                <h4 className="font-bold text-green-700 dark:text-green-400">Option 1: The Quickest (Flight)</h4>
                                <p className="text-sm">Raipur &rarr; Kolkata &rarr; Port Blair.</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Duration: ~6 Hours total. Best for Honeymooners.</p>
                            </div>
                            <div className="bg-white dark:bg-card p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                <h4 className="font-bold text-orange-700 dark:text-orange-400">Option 2: The Budget / LTC Saver</h4>
                                <p className="text-sm">Train: Durg &rarr; Kolkata (Howrah) [Overnight]</p>
                                <p className="text-sm">Flight: Kolkata &rarr; Port Blair</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Why? Flights from Kolkata are cheaper than from Raipur. Train fare is negligible.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md max-w-sm border border-blue-200 dark:border-blue-800">
                        <h3 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-300 flex items-center gap-2"><Anchor className="w-5 h-5" /> Crucial Advice</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Book Ferries Early!</strong>
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Ferries between islands (Makruzz/Nautika) get sold out weeks in advance. Do not wait until you reach there. We book these <strong>before</strong> your flight.
                        </p>
                        <div className="text-xs bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-2 rounded">
                            Warning: Government ferries are unreliable. We only book private luxury ferries for comfort.
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Itinerary: 5N/6D Standard */}
            <ContentSection title="The Island Hopping Plan (5N/6D)" className="bg-white dark:bg-card">
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border dark:border-gray-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                        <div className="text-4xl mb-2">👮</div>
                        <h4 className="font-bold text-lg">Day 1: Port Blair</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Arrival. Corbyn's Cove Beach. <strong>Cellular Jail (Kala Pani)</strong> Light & Sound Show (A patriotic must-do).</p>
                    </div>
                    <div className="p-4 border dark:border-gray-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                        <div className="text-4xl mb-2">🏝️</div>
                        <h4 className="font-bold text-lg">Day 2-3: Havelock (Swaraj Dweep)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Private Cruise to Havelock. <strong>Radhanagar Beach</strong> (Asia's Best Beach). Scuba Diving at Nemo Reef.</p>
                    </div>
                    <div className="p-4 border dark:border-gray-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                        <div className="text-4xl mb-2">🪸</div>
                        <h4 className="font-bold text-lg">Day 4-5: Neil Island & Return</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Cruise to Neil Island. Bharatpur Beach (Corals). Natural Bridge. Return to Port Blair for shopping.</p>
                    </div>
                </div>
            </ContentSection>

            {/* 4. LTC Special Section */}
            <ContentSection className="bg-yellow-50 dark:bg-yellow-900/10" id="ltc-info">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-400 mb-4 flex justify-center items-center gap-2">
                        <CreditCard className="w-8 h-8" /> LTC Information for BSP/Railways
                    </h3>
                    <p className="text-gray-800 dark:text-gray-200 mb-6">
                        Yes, Andaman is covered under "Northeast & Island Territories" special LTC schemes for many government employees.
                    </p>
                    <ul className="text-left bg-white dark:bg-card p-6 rounded-lg shadow-sm space-y-3 inline-block w-full">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span>We provide GST Invoices mandated for claims.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span>We can split the package cost to show "Travel" and "Stay" components separately if your department requires it.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span>Flight tickets booked as per authorized agents (Balmer Lawrie etc.) if you need us to guide you.</span>
                        </li>
                    </ul>
                </div>
            </ContentSection>

            {/* 5. FAQs */}
            <FAQSection
                faqs={[
                    { question: "Do we need a passport?", answer: "No! Andaman is 100% India. You just need your Aadhar card or Voter ID." },
                    { question: "Is mobile network available?", answer: "BSNL works best. Airtel/Jio work well in Port Blair and Havelock, but internet can be slow. Treat it as a digital detox!" },
                    { question: "Can we see the Jarawa tribe?", answer: "We do not promote or conduct Jarawa tourism as it is unethical and restricted. We focus on nature and history." },
                    { question: "Is it safe for swimming?", answer: "Yes, but strictly follow lifeguard instructions. Radhanagar beach is very safe. Some beaches have rocks/corals." },
                ]}
            />

            <ContentSection className="bg-white dark:bg-card">
                <BookingCTA
                    text="Plan My Andaman Trip"
                    subText="Special discounts for early bird ferry bookings."
                />
            </ContentSection>

        </PageLayout>
    );
};

export default AndamanTourPackageFromBhilai;
