import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../components/PageLayout';
import HeroSection from '../../components/HeroSection';
import ContentSection from '../../components/ContentSection';
import FAQSection from '../../components/FAQsSection';
import BookingCTA from '../../components/BookingCTA';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Bike, Wallet, Music, MapPin, AlertCircle } from 'lucide-react';

const GoaTripFromSupela = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Goa Trip from Supela (Student Special) | Budget Packages 2026</title>
                <meta
                    name="description"
                    content="Budget Goa trips for students from Supela, BIT Durg & Shankara. Hostels, Shared Bikes, and Group Discounts. Plan your college trip starting ₹8,500."
                />
                <meta name="keywords" content="goa trip from supela, student goa package bhilai, college trip to goa from durg, goa budget trip for bachelors" />
                <link rel="canonical" href="https://rudrakshsafar.com/goa-trip-from-supela" />
            </Helmet>

            <HeroSection
                title="Goa Student Trips from Supela"
                subtitle="The 'College Budget' Guide: Maximum Fun, Minimum Cost. Special Deals for Groups from BIT, CSIT & Shankara."
                backgroundImage="https://images.unsplash.com/photo-1533619043865-1c2e2f32ff52?q=80&w=1974" // Party/Crowd vibe
                ctaText="Get Student Discount"
            />

            {/* INTRO: The Student Context */}
            <ContentSection className="bg-white">
                <div className="prose max-w-none">
                    <p className="text-lg text-slate-700">
                        Supela is the student heartbeat of Bhilai. We know that when you are planning a <strong>Goa trip from Supela</strong> with your college gang, you don't care about 5-star luxury. You care about <strong>clean hostels, cheap scooty rentals, and maximizing the party budget</strong>.
                    </p>
                    <p className="mt-2 text-slate-700">
                        At Rudraksh Safar, we specialize in <strong>"Student Packages"</strong>. We cut out the fancy fluff (like expensive dinners) and focus on what matters: Getting you there, finding you a cool place to crash near Baga/Anjuna, and sorting out your bikes.
                    </p>
                </div>
            </ContentSection>

            {/* SECTION: Why Book Local (Student Focus) */}
            <ContentSection title="Why Students Book with Us?" className="bg-yellow-50">
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-white border-yellow-200">
                        <CardHeader className="pb-2">
                            <Users className="w-10 h-10 text-yellow-600 mb-2" />
                            <CardTitle>Group Discounts</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-slate-600">
                            Travelling in a group of 6+? We unlock special bulk rates for hostels and trains that you won't find on apps.
                        </CardContent>
                    </Card>
                    <Card className="bg-white border-yellow-200">
                        <CardHeader className="pb-2">
                            <Wallet className="w-10 h-10 text-yellow-600 mb-2" />
                            <CardTitle>Easy Installments</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-slate-600">
                            Broke right now? Book with a small token amount (₹2,000) and pay the rest before the trip.
                        </CardContent>
                    </Card>
                    <Card className="bg-white border-yellow-200">
                        <CardHeader className="pb-2">
                            <Bike className="w-10 h-10 text-yellow-600 mb-2" />
                            <CardTitle>Bike Rental Sorted</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-slate-600">
                            We pre-book your scooters. No "Tourist Scams" where they claim scratches and charge you extra.
                        </CardContent>
                    </Card>
                </div>
            </ContentSection>

            {/* SECTION: The Budget Breakdown */}
            <ContentSection title="The ₹9,000 Challenge" className="bg-white">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">How to do Goa under ₹9k?</h3>
                        <p className="mb-4 text-slate-600">It is possible if you are smart. Here is the math for a 4-Day trip (per person in a group of 4):</p>
                        <ul className="space-y-3">
                            <li className="flex justify-between border-b py-2">
                                <span>Train (Sleeper Return)</span>
                                <span className="font-bold">₹1,800</span>
                            </li>
                            <li className="flex justify-between border-b py-2">
                                <span>Hostel (AC Dorm x 3 Nights)</span>
                                <span className="font-bold">₹2,400</span>
                            </li>
                            <li className="flex justify-between border-b py-2">
                                <span>Scooty Share (Fuel + Rent)</span>
                                <span className="font-bold">₹1,200</span>
                            </li>
                            <li className="flex justify-between border-b py-2">
                                <span>Food & Drinks (Smart choices)</span>
                                <span className="font-bold">₹3,500</span>
                            </li>
                            <li className="flex justify-between border-t py-2 text-xl font-bold text-green-600">
                                <span>TOTAL</span>
                                <span>₹8,900</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-slate-100 p-6 rounded-xl">
                        <h4 className="font-bold mb-4 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-red-500" /> Where Students Lose Money</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li>❌ <strong>Taxis:</strong> Taking a taxi from station instead of a pre-booked shuttle/bus.</li>
                            <li>❌ <strong>Beach Shacks:</strong> Eating every meal at a premium shack (prices are 3x).</li>
                            <li>❌ <strong>Last Minute:</strong> Booking train tickets in Tatkal through agents with high commission.</li>
                        </ul>
                        <div className="mt-6">
                            <Link to="/goa-trip-under-10000-from-bhilai" className="text-primary font-bold hover:underline">
                                Read our Full Budget Guide &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* SECTION: Where to Stay (Hostel Guide) */}
            <ContentSection title="Where the Vibe Is: Hostel Guide" className="bg-slate-50">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600" alt="Goa Hostel Party Vibe" className="rounded-xl shadow-md mb-4" />
                        <h3 className="font-bold text-lg mb-2">North Goa (Anjuna/Vagator)</h3>
                        <p className="text-sm text-slate-600 mb-2">Best for: Trance parties, Flea markets, and meeting foreigners.</p>
                        <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline">Pappi Chulo</Badge>
                            <Badge variant="outline">Jungle Hostel</Badge>
                            <Badge variant="outline">Zostel</Badge>
                        </div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600" alt="Goa Hostel Pool" className="rounded-xl shadow-md mb-4" />
                        <h3 className="font-bold text-lg mb-2">North Goa (Baga/Calangute)</h3>
                        <p className="text-sm text-slate-600 mb-2">Best for: Being close to Titos Lane, Water sports, and crowded beaches.</p>
                        <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline">Woustache</Badge>
                            <Badge variant="outline">Backpacker Panda</Badge>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "Is alcohol allowed on the train from Durg?", answer: "Strictly NO. Carrying or consuming alcohol on Indian Railways is a punishable offense with jail time. Drink only in Goa." },
                    { question: "Do we need a license for Scooty?", answer: "Yes. Goa police are very strict. You need a valid Driving License. If you don't have one, use the 'Pilot' (Motorcycle Taxi) service." },
                    { question: "Is it safe for a girls' trip?", answer: "Goa is safe, but we recommend staying in recognized hostels which have security. Avoid isolated beaches in the North at night." }
                ]}
            />

            <BookingCTA
                text="Unlock Student Deals"
                subText="Valid for students of BIT, CSIT, Shankara, and Rungta colleges (ID required)."
            />

        </PageLayout>
    );
};

export default GoaTripFromSupela;
