import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import SimpleHero from '../../../components/SimpleHero';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Train, Clock, MapPin, Coffee, AlertTriangle, ArrowRight } from 'lucide-react';

const GoaPackageFromDurg = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Goa Packages from Durg Junction (2026) | Confirmed Train Tickets</title>
                <meta
                    name="description"
                    content="Specialized Goa packages starting from Durg Junction. Gondwana Express ticket assistance, station parking guide, and hassle-free transfers to Madgaon."
                />
                <meta name="keywords" content="goa package from durg, durg to goa train ticket, travel agent durg station, gondwana express booking agent" />
                <link rel="canonical" href="https://rudrakshsafar.com/domestic-tours/goa-from-durg" />
            </Helmet>

            <div className="container py-4">
                <Link to="/domestic-tours/goa" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Goa Guide
                </Link>
            </div>

            <SimpleHero
                title="Goa Packages from Durg Junction"
                subtitle="Your Journey Starts Here. We handle the Tatkal tickets, you handle the packing."
                backgroundImage="https://images.unsplash.com/photo-1474487548417-781cb714c223?q=80&w=1974" // Train track/Journey vibe
                ctaText="Check Train Availability"
            />

            {/* INTRO: The Logistics Context */}
            <ContentSection className="bg-white">
                <div className="prose max-w-none">
                    <p className="text-lg text-slate-700">
                        For 90% of travelers from Bhilai, the Goa trip begins at <strong>Durg Junction (DURG)</strong>. It is the gateway to the Konkan coast. But booking tickets on the <em>Gondwana Express</em> is a war zone, and finding good food on the train is a challenge.
                    </p>
                    <p className="mt-2 text-slate-700">
                        This page is dedicated to the <strong>logistics of the journey</strong>. Our "Durg Special" packages focus on seamless connectivity—ensuring your hotel check-in matches your train arrival, and your pickup is waiting at Madgaon.
                    </p>
                </div>
            </ContentSection>

            {/* SECTION: Train Schedule (The Core Value) */}
            <ContentSection title="Durg to Goa: The 2026 Train Schedule" className="bg-orange-50">
                <Card className="overflow-hidden">
                    <Table>
                        <TableHeader className="bg-orange-200">
                            <TableRow>
                                <TableHead className="text-orange-900 font-bold">Train Name</TableHead>
                                <TableHead className="text-orange-900 font-bold">Departs Durg</TableHead>
                                <TableHead className="text-orange-900 font-bold">Arrives Madgaon</TableHead>
                                <TableHead className="text-orange-900 font-bold">Best For</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="bg-white">
                            <TableRow>
                                <TableCell className="font-bold">Gondwana Express (12410)</TableCell>
                                <TableCell>07:50 AM (Day 1)</TableCell>
                                <TableCell>05:00 AM (Day 2)</TableCell>
                                <TableCell className="text-green-600 font-medium">✨ Full Day in Goa</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold">Amaravati Express (18047)</TableCell>
                                <TableCell>10:30 AM (Day 1)</TableCell>
                                <TableCell>02:25 PM (Day 2)</TableCell>
                                <TableCell className="text-slate-500">Relaxed Morning</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
                <div className="mt-4 flex items-start gap-2 text-sm text-orange-800 bg-orange-100 p-3 rounded">
                    <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                    <p><strong>Tatkal Warning:</strong> Tatkal opens at 10 AM (AC) and 11 AM (Sleeper) one day before. It is extremely risky for groups &gt; 4. We recommend booking 120 days in advance.</p>
                </div>
            </ContentSection>

            {/* SECTION: Station Guide */}
            <ContentSection title="Durg Station Survival Guide" className="bg-white">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg hover:shadow-md transition">
                        <MapPin className="w-8 h-8 text-indigo-600 mb-3" />
                        <h4 className="font-bold text-lg mb-2">Parking</h4>
                        <p className="text-sm text-slate-600">Long-term parking is available near the new entrance (Platform 1 side). Charges are approx ₹200/day for cars. Safe for 4-5 days.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:shadow-md transition">
                        <Coffee className="w-8 h-8 text-brown-600 mb-3" />
                        <h4 className="font-bold text-lg mb-2">Food Tips</h4>
                        <p className="text-sm text-slate-600">Pack food from home! The pantry car on this route is average. Good vada pav is available at Nagpur (Day 1 Afternoon).</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:shadow-md transition">
                        <Train className="w-8 h-8 text-green-600 mb-3" />
                        <h4 className="font-bold text-lg mb-2">Platform Info</h4>
                        <p className="text-sm text-slate-600">Goa trains usually depart from Platform 1 or 2. Porters are available at the main entrance.</p>
                    </div>
                </div>
            </ContentSection>

            {/* SECTION: Pickup at Madgaon */}
            <ContentSection title="Arrival: Madgaon to North Goa" className="bg-slate-50">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <p className="mb-4">
                            <strong>The Trap:</strong> Madgaon Station to Calangute/Baga is huge distance (45km+). Taxis charge ₹1500 - ₹2500 if you don't bargain.
                        </p>
                        <p className="mb-4 font-bold text-indigo-700">
                            The Solution: Our Pre-Booked Transfers.
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-green-500" /> Private AC Car waiting for you.</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-green-500" /> Fixed price negotiated beforehand.</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-green-500" /> Driver knows your hotel location.</li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border">
                        <h4 className="font-bold mb-2">Distance Chart from Madgaon</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex justify-between border-b pb-1"><span>To Colva (South)</span> <span>8 km (20 mins)</span></li>
                            <li className="flex justify-between border-b pb-1"><span>To Panjim (Central)</span> <span>35 km (50 mins)</span></li>
                            <li className="flex justify-between border-b pb-1"><span>To Calangute (North)</span> <span>48 km (1.5 hrs)</span></li>
                            <li className="flex justify-between pb-1"><span>To Arambol (Far North)</span> <span>65 km (2 hrs)</span></li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "Can we board from Raipur instead of Durg?", answer: "Yes, Gondwana Express starts from Raigarh and stops at Raipur (R) before Durg. Let us know your preferred boarding point." },
                    { question: "What if the train is late?", answer: "Gondwana fits usually on time. If delayed, our driver at Madgaon tracks the live status and will wait for you." },
                    { question: "Are blankets provided in AC coaches?", answer: "Yes, in 3AC, 2AC, and 1AC, fresh linen is provided. Sleeper class passengers must carry their own sheets." }
                ]}
            />

            <BookingCTA
                text="Plan My Train Trip"
                subText="Get a quote including Confirmed Train Tickets + Hotel + Pickup."
            />

            <div className="mt-8 text-center text-sm text-slate-500">
                <p>Not looking for train info? Check our <Link to="/domestic-tours/goa-from-bhilai" className="text-primary hover:underline">Main Goa Guide</Link> or <Link to="/domestic-tours/goa-trip-from-supela" className="text-primary hover:underline">Student Tips</Link>.</p>
            </div>

        </PageLayout>
    );
};

export default GoaPackageFromDurg;
