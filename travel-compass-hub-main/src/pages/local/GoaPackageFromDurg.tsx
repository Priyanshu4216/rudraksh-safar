import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { Train, Clock, MapPin } from 'lucide-react';

const GoaPackageFromDurg = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Goa Trip from Durg (2026) - Train Packages & Station Guide</title>
                <meta
                    name="description"
                    content="Dedicated Goa trip packages from Durg Junction. Complete guide to Gondwana Express booking, tatkal assistance, and budget hotels near Madgaon."
                />
                <meta name="keywords" content="goa trip from durg, goa package from durg, durg to goa train package, travel agent in durg for goa" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Goa Packages", "item": "https://rudrakshsafar.com/goa-tour-package-from-bhilai" },
                            { "@type": "ListItem", "position": 3, "name": "From Durg", "item": "https://rudrakshsafar.com/goa-package-from-durg" }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                title="Goa Trip Packages from Durg"
                subtitle="Start your journey from Chhattisgarh's biggest junction. We handle your confirmed train tickets and hotel bookings."
                backgroundImage="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974" // Train/Travel vibe
                ctaText="Check Durg Train Availability"
            />

            <ContentSection className="bg-white">
                <p className="text-lg text-gray-700">
                    <strong>Durg Junction</strong> is the gateway to Goa for everyone in Bhilai and Durg. With direct trains like the <em>Gondwana Express</em> and <em>Amaravati Express</em>, your vacation starts the moment you board. Our <strong>Goa packages from Durg</strong> are optimized for train travelers—we align check-in times with train arrivals so you don't wait in the lobby tired.
                </p>
            </ContentSection>

            {/* Train Domination Block (Durg Specific) */}
            <ContentSection title="Durg to Goa: Train Schedule & Tips" className="bg-orange-50">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Clock className="w-5 h-5" /> Key Trains from Durg</h3>
                        <table className="w-full text-sm bg-white rounded shadow text-left">
                            <thead className="bg-orange-200 text-orange-900">
                                <tr>
                                    <th className="p-2">Train</th>
                                    <th className="p-2">Departs</th>
                                    <th className="p-2">Arrives</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-2 font-semibold">Gondwana Exp (12410)</td>
                                    <td className="p-2">07:50 AM</td>
                                    <td className="p-2">05:00 AM (+1)</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-semibold">Amaravati Exp (18047)</td>
                                    <td className="p-2">10:30 AM</td>
                                    <td className="p-2">02:25 PM (+1)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin className="w-5 h-5" /> Station Tips due to Construction</h3>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700">
                            <li><strong>Platform Info:</strong> Goa trains usually depart from Platform 1 or 2 (Please check display).</li>
                            <li><strong>Food Packing:</strong> Pack food from home or Durg station. Train pantry food can be hit-or-miss on this route.</li>
                            <li><strong>Parking:</strong> Durg station has updated parking near the new specific entry gate.</li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            <ContentSection className="bg-white">
                <BookingCTA text="Plan Your Train Trip from Durg" subText="We help with Tatkal ticket booking assistance for package holders." />
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "What if train tickets are not available from Durg?", answer: "We can look for alternate routes (break journey via Nagpur) or suggest Tatkal options. We strongly advise booking 120 days early." },
                    { question: "Do you have an office near Durg Station?", answer: "Our office is in Bhilai, just a short drive from Durg. We can meet you or coordinate everything via WhatsApp." },
                    { question: "Is pickup included from Madgaon Station?", answer: "Yes! A driver will wait for you at Madgaon station exit to take you to your North Goa hotel." }
                ]}
            />

            <ContentSection className="border-t">
                <h4 className="font-bold mb-4">Related Links</h4>
                <div className="flex flex-wrap gap-4 text-indigo-600">
                    <a href="/goa-tour-package-from-bhilai" className="hover:underline">Main Goa Guide</a>
                    <a href="/goa-trip-under-10000-from-bhilai" className="hover:underline">Budget Guide</a>
                    <a href="/train-vs-flight-goa-from-cg" className="hover:underline">Train vs Flight</a>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default GoaPackageFromDurg;
