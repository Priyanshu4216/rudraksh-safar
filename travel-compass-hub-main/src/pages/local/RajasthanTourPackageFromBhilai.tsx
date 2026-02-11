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
import { Train, Building2, Map, Coffee } from 'lucide-react';
import BudgetEstimator from '@/components/BudgetEstimator';
import TravelReality from '@/components/TravelReality';
import DosAndDonts from '@/components/DosAndDonts';

const RajasthanTourPackageFromBhilai = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LocationPageLoader />;

    const destinations: Destination[] = [
        { name: "Jaipur", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800", price: "Starts ₹12,999", duration: "3N/4D", link: "/package/rajasthan-family", rating: "4.8" },
        { name: "Udaipur", image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&q=80&w=800", price: "Starts ₹14,999", duration: "3N/4D", link: "/package/udaipur", rating: "4.9" },
        { name: "Jaisalmer", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800", price: "Starts ₹16,999", duration: "2N/3D", link: "/package/jaisalmer", rating: "4.7" },
        { name: "Jodhpur", image: "https://images.unsplash.com/photo-1590680695028-2df8d7159746?auto=format&fit=crop&q=80&w=800", price: "Starts ₹13,999", duration: "2N/3D", link: "/package/jodhpur", rating: "4.6" },
    ];

    const bestTimeData = [
        { destination: "Jaipur", months: "Oct – Mar" },
        { destination: "Udaipur", months: "Sep – Mar" },
        { destination: "Jaisalmer", months: "Oct – Feb" },
        { destination: "Mount Abu", months: "Year Round" },
    ];

    const faqs = [
        {
            question: "How do we travel from Bhilai to Rajasthan?",
            answer: <span>The best way is the <strong>Durg-Jaipur Weekly Express (18213)</strong> which leaves Durg every Sunday. Alternatively, you can take a flight from Raipur to Jaipur (via Delhi/Indore). We arrange confirmed train tickets if booked 120 days in advance.</span>,
            answerText: "The best way is the Durg-Jaipur Weekly Express (18213) which leaves Durg every Sunday. Alternatively, you can take a flight from Raipur to Jaipur (via Delhi/Indore)."
        },
        {
            question: "Is Rajasthan safe for families from Bhilai?",
            answer: "Absolutely. Rajasthan is one of the safest tourist states. Our drivers are verified and we provide 24/7 on-trip support. We have sent over 500+ families from Bhilai/Durg to Rajasthan safely.",
            answerText: "Absolutely. Rajasthan is one of the safest tourist states. Our drivers are verified and we provide 24/7 on-trip support."
        },
        {
            question: "Can we cover Jaipur and Udaipur in one trip?",
            answer: "Yes, a 6N/7D itinerary is perfect. Arrive in Jaipur, visit Ajmer/Pushkar, then move to Udaipur. You can return via train from Udaipur or flight from Udaipur airport.",
            answerText: "Yes, a 6N/7D itinerary is perfect. Arrive in Jaipur, visit Ajmer/Pushkar, then move to Udaipur."
        },
        {
            question: "What is included in the Rajasthan package?",
            answer: "Our packages include 3-star/4-star heritage hotels, breakfast, private AC cab for sightseeing, driver allowance, and toll taxes. We also include a Camel Safari in Jaisalmer packages.",
            answerText: "Our packages include 3-star/4-star heritage hotels, breakfast, private AC cab for sightseeing, driver allowance, and toll taxes."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "Rajasthan Tour Package from Bhilai",
        "description": "Royal Rajasthan tour from Bhilai/Durg. Visit Jaipur, Udaipur, Jaisalmer. Includes Train/Flight options and Heritage Hotels.",
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "areaServed": ["Bhilai", "Durg", "Raipur", "Rajnandgaon"]
        },
        "itinerary": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Arrival in Jaipur",
                    "description": "Pickup from Jaipur Railway Station/Airport. Transfer to Hotel."
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Jaipur Sightseeing",
                    "description": "Visit Amber Fort, Hawa Mahal, City Palace, Jantar Mantar."
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Jaipur to Pushkar/Ajmer",
                    "description": "Drive to Pushkar. Visit Brahma Temple and Ajmer Sharif Dargah."
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Transfer to Udaipur",
                    "description": "Drive to Udaipur. Evening boat ride at Lake Pichola."
                }
            ]
        }
    };

    return (
        <>
            <Helmet>
                <title>Rajasthan Tour Packages from Bhilai | Jaipur, Udaipur, Jaisalmer</title>
                <meta name="description" content="Book Royal Rajasthan tour packages from Bhilai. Best rates for Jaipur, Udaipur & Jaisalmer. Includes Durg-Jaipur train tickets or Raipur flights. Trusted by 500+ families." />
                <meta name="keywords" content="rajasthan tour package from bhilai, jaipur package from durg, udaipur tour from raipur, rajasthan trip cost from bhilai, rudraksh safar rajasthan" />
                <link rel="canonical" href="https://rudrakshsafar.com/rajasthan-tour-package-from-bhilai" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bhilai"
                    title="Royal Rajasthan Packages from Bhilai"
                    subtitle="Experience Palaces, Forts & Desert Safaris. Direct Train & Flight Options Available."
                    bgImage="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=2000"
                >
                    <div className="container mx-auto px-4 mt-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }, { label: 'Rajasthan Tours', path: '/rajasthan-tour-package-from-bhilai' }]} />
                    </div>
                </LocationHero>

                <div className="container mx-auto px-4 -mt-8 relative z-20">
                    <div className="flex flex-col gap-6">
                        <div className="bg-card/95 backdrop-blur-sm border shadow-lg rounded-xl p-6 md:p-8">
                            <div className="grid md:grid-cols-3 gap-6 items-center">
                                <div className="space-y-2">
                                    <h3 className="font-bold text-xl flex items-center gap-2">
                                        <Train className="w-5 h-5 text-primary" />
                                        Direct Train Connectivity
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Durg - Jaipur Express (18213)</strong><br />
                                        Departs Durg: Every Sunday 16:00<br />
                                        Arrives Jaipur: Monday 17:05
                                    </p>
                                </div>
                                <div className="space-y-2 border-l pl-6 hidden md:block">
                                    <h3 className="font-bold text-xl flex items-center gap-2">
                                        <Building2 className="w-5 h-5 text-primary" />
                                        Heritage Stays
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Stay in authentic Havelis turned hotels.<br />
                                        Included in our Deluxe Packages.
                                    </p>
                                </div>
                                <div className="text-center md:text-right">
                                    <div className="inline-block bg-primary/10 px-4 py-1 rounded-full text-primary font-bold text-sm mb-2">
                                        Starting Price
                                    </div>
                                    <p className="text-3xl font-bold text-foreground">₹12,499<span className="text-base font-normal text-muted-foreground">/person</span></p>
                                    <p className="text-xs text-muted-foreground mb-3">Include Hotels + Cab + Meals</p>
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
                            <h2 className="text-3xl font-bold font-serif mb-2">Rajasthan Trip Budget (From Bhilai)</h2>
                            <p className="text-muted-foreground">Estimated cost for a 5-Day Jaipur & Ajmer Trip</p>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
                            <BudgetEstimator
                                destination="Jaipur & Ajmer"
                                duration="4 Nights / 5 Days"
                                total="₹12,500 – ₹18,000"
                                costs={[
                                    { category: "Train (3AC Return)", cost: "₹3,500", icon: Train },
                                    { category: "Heritage Hotel (Twin Share)", cost: "₹6,000 – ₹9,000", icon: Building2 },
                                    { category: "Sightseeing (Private Cab)", cost: "₹2,000 – ₹3,500", icon: Map },
                                    { category: "Food (Rajasthani Thali)", cost: "₹3,000", icon: Coffee }
                                ]}
                                note="Cost per person. Flight options from Raipur start @ ₹5,500 one way."
                            />
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 mt-12 mb-12">
                    <TravelReality
                        title="Travel Reality: Rajasthan from Chhattisgarh"
                        items={[
                            { type: 'positive', text: "The weekly Durg-Jaipur train is clean and punctual, but tickets get sold out 2 months in advance." },
                            { type: 'neutral', text: "Direct flights are not available daily. You mostly fly Raipur -> Delhi -> Jaipur." },
                            { type: 'positive', text: "Food is very similar to North Indian taste, so families from Bhilai usually love the cuisine (Dal Baati)." },
                            { type: 'negative', text: "Avoid May-June. Temperatures hit 45°C. Best time is October to March." }
                        ]}
                    />
                </div>

                <DestinationBuckets
                    title="Popular Rajasthan Destinations"
                    description="Explore the Land of Kings with our curated packages."
                    destinations={destinations}
                />

                <div className="container mx-auto px-4 bg-white dark:bg-background pt-12">
                    <DosAndDonts
                        title="Rajasthan Travel Tips"
                        pros={[
                            "Carry comfortable walking shoes for Forts.",
                            "Book 'Chokhi Dhani' dinner in Jaipur in advance.",
                            "Wear cotton clothes during the day.",
                            "Buy authentic handicrafts from government shops."
                        ]}
                        cons={[
                            "Don't encourage unauthorized guides at forts.",
                            "Avoid late-night travel on highway in remote areas.",
                            "Don't ride camels without fixing the price first.",
                            "Don't forget sunglasses and sunscreen."
                        ]}
                    />
                </div>

                <LogisticsSection bestTimeData={bestTimeData} />

                <FAQsSection
                    faqs={faqs}
                    title="Rajasthan Tour FAQs"
                    description="Common questions from Bhilai travelers."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default RajasthanTourPackageFromBhilai;
