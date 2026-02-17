import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LocationHero from '@/components/LocationHero';
import WhyTravelSection from '@/components/WhyTravelSection';
import DestinationBuckets, { Destination } from '@/components/DestinationBuckets';
import LogisticsSection from '@/components/LogisticsSection';
import FAQsSection from '@/components/FAQsSection';
import LocationPageLoader from '@/components/LocationPageLoader';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Mountain, Train, Map, Coffee, Plane } from 'lucide-react';
import BudgetEstimator from '@/components/BudgetEstimator';
import TravelReality from '@/components/TravelReality';
import DosAndDonts from '@/components/DosAndDonts';

const NepalTourPackageFromBhilai = () => {




    const destinations: Destination[] = [
        { name: "Kathmandu", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800", price: "Pashupatinath included", duration: "3 Days", link: "#", rating: "4.8" },
        { name: "Pokhara", image: "https://images.unsplash.com/photo-1605640722248-d36006e8b261?auto=format&fit=crop&q=80&w=800", price: "Lakeside Stay", duration: "2 Days", link: "#", rating: "4.9" },
        { name: "Chitwan", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800", price: "Jungle Safari", duration: "2 Days", link: "#", rating: "4.7" },
        { name: "Nagarkot", image: "https://images.unsplash.com/photo-1622564264626-444778310c8f?auto=format&fit=crop&q=80&w=800", price: "Sunrise View", duration: "1 Day", link: "#", rating: "4.6" },
    ];

    const bestTimeData = [
        { destination: "Nepal", months: "Oct – Apr" },
        { destination: "Trekking", months: "Sep – Nov" },
    ];

    const faqs = [
        {
            question: "Is Visa required for Indians visiting Nepal?",
            answer: "No, Indians do not need a Visa. You must carry a valid Voter ID Card or Passport. Aadhar Card is NOT accepted at Immigration for flights.",
            answerText: "No, Indians do not need a Visa. You must carry a valid Voter ID Card or Passport. Aadhar Card is NOT accepted at Immigration for flights."
        },
        {
            question: "How to reach Nepal from Bhilai?",
            answer: <span><strong>Flight:</strong> Raipur &rarr; Delhi &rarr; Kathmandu. <br /><strong>Train:</strong> Durg &rarr; Raxaul (Bihar) then cross border by cab. Flight is recommended for comfort.</span>,
            answerText: "Flight: Raipur -> Delhi -> Kathmandu. Train: Durg -> Raxaul (Bihar) then cross border by cab. Flight is recommended for comfort."
        },
        {
            question: "Is Indian currency accepted in Nepal?",
            answer: "Yes, Indian Rupee (₹100 notes or lower) is widely accepted. ₹500 and ₹2000 notes are often not accepted or illegal to carry in large amounts.",
            answerText: "Yes, Indian Rupee (₹100 notes or lower) is widely accepted. ₹500 and ₹2000 notes are often not accepted or illegal to carry in large amounts."
        },
        {
            question: "Can we visit Pashupatinath Temple?",
            answer: "Yes, our Kathmandu itinerary prioritizes a morning visit to Pashupatinath Temple for Darshan.",
            answerText: "Yes, our Kathmandu itinerary prioritizes a morning visit to Pashupatinath Temple for Darshan."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "Nepal Tour Package from Bhilai",
        "description": "Affordable Nepal tour packages from Bhilai. Visit Kathmandu, Pokhara, Chitwan. No Visa required for Indians. Starts @ ₹18,999.",
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "areaServed": ["Bhilai", "Durg", "Raipur"]
        },
        "itinerary": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Arrival in Kathmandu",
                    "description": "Flight from Delhi/Raipur. Transfer to Thamel Hotel."
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Kathmandu Sightseeing",
                    "description": "Pashupatinath, Boudhanath Stupa, Swayambhunath."
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Drive to Pokhara",
                    "description": "Scenic drive to Pokhara. Phewa Lake boating."
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Sarangkot Sunrise",
                    "description": "Early morning view of Annapurna range."
                }
            ]
        }
    };

    return (
        <>
            <Helmet>
                <title>Nepal Tour Packages from Bhilai | No Visa | Best Rates</title>
                <meta name="description" content="Book cheap Nepal tour packages from Bhilai. Visit Kathmandu, Pokhara & Chitwan. Flight and Train options available. Ideal for families & groups." />
                <meta name="keywords" content="nepal tour package from bhilai, kathmandu trip cost from raipur, pokhara tour package for couple, nepal tour operator in bhilai, rudraksh safar nepal" />
                <link rel="canonical" href="https://rudrakshsafar.com/nepal-tour-package-from-bhilai" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bhilai"
                    title="Nepal Tour Packages from Bhilai"
                    subtitle="Mountains, Temples & Nature. The perfect international trip without Visa hassles."
                    bgImage="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=2000"
                >
                    <div className="container mx-auto px-4 mt-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'Nepal Tours', path: '/nepal-tour-package-from-bhilai' }]} />
                    </div>
                </LocationHero>

                <div className="container mx-auto px-4 -mt-8 relative z-20">
                    <div className="flex flex-col gap-6">
                        <div className="bg-card/95 backdrop-blur-sm border shadow-lg rounded-xl p-6 md:p-8">
                            <div className="grid md:grid-cols-3 gap-6 items-center">
                                <div className="space-y-2">
                                    <h3 className="font-bold text-xl flex items-center gap-2">
                                        <Mountain className="w-5 h-5 text-primary" />
                                        Himalayan Views
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Kathmandu & Pokhara</strong><br />
                                        See Mt. Everest (via Flight) & Annapurna.<br />
                                        Spiritual & Adventure mix.
                                    </p>
                                </div>
                                <div className="space-y-2 border-l pl-6 hidden md:block">
                                    <h3 className="font-bold text-xl flex items-center gap-2">
                                        <Map className="w-5 h-5 text-primary" />
                                        No Visa Needed
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Indian Citizens</strong><br />
                                        Just carry Voter ID or Passport.<br />
                                        Hassle-free entry.
                                    </p>
                                </div>
                                <div className="text-center md:text-right">
                                    <div className="inline-block bg-primary/10 px-4 py-1 rounded-full text-primary font-bold text-sm mb-2">
                                        Best Budget Trip
                                    </div>
                                    <p className="text-3xl font-bold text-foreground">₹18,999<span className="text-base font-normal text-muted-foreground">/person</span></p>
                                    <p className="text-xs text-muted-foreground mb-3">6 Days | Hotels + Sightseeing + Meals</p>
                                    <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-auto">
                                        Get Free Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <WhyTravelSection city="Bhilai" />

                <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold font-serif mb-2">Nepal Trip Budget</h2>
                            <p className="text-muted-foreground">Estimated cost for a 6-Day Nepal Trip</p>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
                            <BudgetEstimator
                                destination="Nepal (Kathmandu + Pokhara)"
                                duration="5 Nights / 6 Days"
                                total="₹19,000 – ₹25,000"
                                costs={[
                                    { category: "Full Package (Land Only)", cost: "₹15,000 – ₹18,000", icon: Mountain },
                                    { category: "Flight (Raipur-Del-Ktm)", cost: "₹12,000 – ₹18,000", icon: Plane },
                                    { category: "Food (Extra Meals)", cost: "₹3,000", icon: Coffee },
                                    { category: "Adventure (Paragliding)", cost: "₹4,000 (Optional)", icon: Map }
                                ]}
                                note="Train option via Raxaul is cheaper but takes 30+ hours."
                            />
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 mt-12 mb-12">
                    <TravelReality
                        title="Travel Reality: Nepal from Chhattisgarh"
                        items={[
                            { type: 'positive', text: "It feels like home! Hindi is widely spoken and culture is very similar." },
                            { type: 'negative', text: "Road conditions in Nepal (Prithvi Highway) can be bumpy and dusty due to construction." },
                            { type: 'neutral', text: "Don't carry Indian ₹500 notes. Even though some take it, it's officially risky." },
                            { type: 'positive', text: "Shopping in Thamel is cheaper than India for trekking gear and woolens." }
                        ]}
                    />
                </div>

                <DestinationBuckets
                    title="Nepal Highlights"
                    description="Experience the Himalayas."
                    destinations={destinations}
                />

                <div className="container mx-auto px-4 bg-white dark:bg-background pt-12">
                    <DosAndDonts
                        title="Nepal Travel Tips"
                        pros={[
                            "Carry a power bank; power cuts happen.",
                            "Drink bottled water only.",
                            "Respect temple dress codes (shoulders covered).",
                            "Try Momo and Thakali Thali."
                        ]}
                        cons={[
                            "Don't take photos inside temples where prohibited.",
                            "Don't trek without a guide (new rule).",
                            "Don't rely on credit cards everywhere; carry cash.",
                            "Don't buy antique statues without certificate."
                        ]}
                    />
                </div>

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="Nepal Tour FAQs"
                    description="Questions about Visa, Travel & Currency."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default NepalTourPackageFromBhilai;
