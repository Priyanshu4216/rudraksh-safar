import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { Train, ShieldCheck, HeartPulse, Mountain, Users, CalendarCheck } from 'lucide-react';

const ChardhamYatraPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Chardham Yatra Package from Bhilai (2026) – Train Tickets & Registration Included</title>
                <meta
                    name="description"
                    content="Complete Chardham Yatra Guide for Bhilai residents. We handle Train Tickets (Durg-Haridwar), Biometric Registration, and Medical Checkups. Senior Citizen friendly."
                />
                <meta name="keywords" content="chardham yatra package from bhilai, durg to haridwar train ticket agent, chardham registration agent bhilai, kedarnath trip cost from durg" />
                {/* Schema Markup */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Chardham Yatra Package from Bhilai",
                        "description": "11N/12D Chardham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath) for Bhilai families. Includes Train Tickets, Registration, and Hotels.",
                        "brand": { "@type": "Brand", "name": "Rudraksh Safar" },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "35000",
                            "highPrice": "55000",
                            "priceCurrency": "INR"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5" },
                            "author": { "@type": "Person", "name": "R.K. Sharma" }
                        }
                    })}
                </script>
            </Helmet>

            {/* 1. Hero & Commercial Intent */}
            <HeroSection
                title="Chardham Yatra from Bhilai (2026)"
                subtitle="Sending your Parents? We handle the Train Tickets & Registration. You just take their blessings."
                backgroundImage="https://images.unsplash.com/photo-1626279679169-e31439777598?q=80&w=2000" // Kedarnath
                ctaText="Check 2026 Batch Availability"
                ctaLink="#dates"
            />

            {/* 2. Direct Answer (The "Care" Factor) */}
            <ContentSection className="bg-orange-50">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-orange-900 mb-4">Why Bhilai Families Trust Us?</h2>
                        <p className="text-gray-800 mb-4 text-lg">
                            For elderly parents in <strong>Bhilai (Sector/Nehru Nagar)</strong>, the Chardham Yatra is a lifelong dream. But the <strong>Online Registration</strong> and <strong>Medical Fitness</strong> requirements are confusing.
                        </p>
                        <p className="text-gray-800 font-medium">
                            We don't just book hotels. We become their "Local Guardians". We handle the Biometric Registration, print their E-Passes, and ensure they board the train safely from Durg.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500 max-w-sm">
                        <h3 className="font-bold text-lg mb-2 text-orange-800">The "Seniors" Promise</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex gap-2"><ShieldCheck className="w-5 h-5 text-green-600" /> <strong>Registration Done:</strong> We do the Utarakhand Govt portal work.</li>
                            <li className="flex gap-2"><HeartPulse className="w-5 h-5 text-red-600" /> <strong>Medical Guidance:</strong> We advise on which tests to take in Bhilai before leaving.</li>
                            <li className="flex gap-2"><Users className="w-5 h-5 text-blue-600" /> <strong>Group Travel:</strong> They travel with other families from Chhattisgarh. Language is no barrier.</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* 3. Transport Domination (The "Train" Battle) */}
            <ContentSection title="Reaching Haridwar: The Durg Challenge" className="bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Train className="text-blue-600" /> Option 1: Direct Train (Hardest)</h3>
                        <p className="text-gray-800 font-bold mb-1">Train: Kalinga Utkal Express (18477)</p>
                        <p className="text-sm text-gray-600 mb-2">Route: Durg &rarr; Haridwar Direct.</p>
                        <div className="bg-red-100 text-red-800 p-2 rounded text-sm">
                            <strong>Problem:</strong> Requires booking 4 months in advance (at 8:00 AM IRCTC opening). We have a dedicated team for this, but success depends on luck.
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-3"><Train className="text-green-600" /> Option 2: Via Delhi (Smartest)</h3>
                        <p className="text-gray-800 font-bold mb-1">Train: Gondwana / Chhattisgarh Exp</p>
                        <p className="text-sm text-gray-600 mb-2">Route: Durg &rarr; Nizamuddin. Then 4-hr Bus/Train to Haridwar.</p>
                        <div className="bg-green-100 text-green-800 p-2 rounded text-sm">
                            <strong>Solution:</strong> Much easier to get tickets. We arrange the AC Bus transfer from Delhi to Haridwar seamlessly.
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 4. Itinerary (11N/12D) */}
            <ContentSection title="12 Days of Devotion (Itinerary)" className="bg-white">
                <div className="space-y-4">
                    <div className="flex gap-4 p-4 border-b">
                        <div className="font-bold text-orange-600 w-24">Day 1-2</div>
                        <div>
                            <h4 className="font-bold">Departure & Haridwar</h4>
                            <p className="text-sm text-gray-600">Train journey from Durg. Arrival in Haridwar. Ganga Aarti at Har Ki Pauri. Night stay.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 border-b">
                        <div className="font-bold text-orange-600 w-24">Day 3-4</div>
                        <div>
                            <h4 className="font-bold">Yamunotri Dham</h4>
                            <p className="text-sm text-gray-600">Haridwar to Barkot. Trek to Yamunotri (6km) or use Pony/Palki. Return to Barkot.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 border-b">
                        <div className="font-bold text-orange-600 w-24">Day 5-6</div>
                        <div>
                            <h4 className="font-bold">Gangotri Dham</h4>
                            <p className="text-sm text-gray-600">Drive to Uttarkashi. Visit Gangotri Temple (Roadside, no trek). Return to Uttarkashi.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 border-b">
                        <div className="font-bold text-orange-600 w-24">Day 7-9</div>
                        <div>
                            <h4 className="font-bold">Kedarnath Dham (The Test)</h4>
                            <p className="text-sm text-gray-600">Drive to Sonprayag. <strong>Helicopter</strong> (Pre-booking needed) or Trek (16km) to Kedarnath. Darshan. Night stay at top is cold!</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4">
                        <div className="font-bold text-orange-600 w-24">Day 10-12</div>
                        <div>
                            <h4 className="font-bold">Badrinath & Return</h4>
                            <p className="text-sm text-gray-600">Visit Badrinath (Roadside). Mana Village (Last Indian Village). Return to Haridwar. Train back to Durg.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* 5. Health & Safety Warning (Honest) */}
            <ContentSection className="bg-red-50">
                <h3 className="text-xl font-bold text-red-800 mb-2">Medical Warning for Kedarnath</h3>
                <p className="text-gray-700 mb-4">
                    Kedarnath is at 11,700 ft. Operations (Helicopter) depend on weather. Oxygen levels are low.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm">
                    <li><strong>Not Recommended For:</strong> Anyone with severe Asthma, Heart conditions, or unable to walk 2km on flat ground.</li>
                    <li><strong>Preparation:</strong> Start walking 3-4km daily in Bhilai (Civic Center park) 1 month before the trip.</li>
                    <li><strong>Warm Clothes:</strong> Even in May/June, it drops to 0°C at night. Thermals are mandatory.</li>
                </ul>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA
                    text="Download Yatra Brochure"
                    subText="Includes Price List & 2026 Dates."
                />
            </ContentSection>

            {/* 6. FAQs */}
            <FAQSection
                faqs={[
                    { question: "When does booking open for 2026?", answer: "Usually in January/February for the May Yatra start. Train tickets open 4 months prior. Book early to get Utkal Express." },
                    { question: "Can I book Helicopter tickets through you?", answer: "We assist with the IRCTC Helicopter booking process. Note that Helicopter tickets are non-guaranteed (lottery system mostly) and demand is huge." },
                    { question: "What is the cost per person?", answer: "Budget (Bus): ₹35,000 approx. Comfort (Innova): ₹55,000 approx. (Includes Food & Stay)." },
                    { question: "Is food included?", answer: "Yes, pure vegetarian meals (Breakfast & Dinner) are provided in hotels. Lunch is usually on the way." },
                ]}
            />

            {/* Internal Linking Area */}
            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Related Spiritual Journeys</h4>
                <div className="flex flex-wrap gap-4 text-orange-600">
                    <Link to="/bhilai-to-kedarnath-yatra-package-2026" className="hover:underline">Kedarnath Only Package</Link>
                    <Link to="/india-tour-packages-bhilai" className="hover:underline">All India Packages</Link>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default ChardhamYatraPackageFromBhilai;
