import { Wallet, Train, Hotel, Map, Coffee } from 'lucide-react';
import BudgetEstimator from '@/components/BudgetEstimator';
import TravelReality from '@/components/TravelReality';
import DosAndDonts from '@/components/DosAndDonts';
import { Helmet } from 'react-helmet-async';
import { Info, Calendar, ArrowRight, MapPin, CheckCircle, PhoneCall, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LocationHero from '@/components/LocationHero';
import WhyTravelSection from '@/components/WhyTravelSection';
import DestinationBuckets, { Destination } from '@/components/DestinationBuckets';
import LogisticsSection from '@/components/LogisticsSection';
import FAQsSection from '@/components/FAQsSection';
import LocationPageLoader from '@/components/LocationPageLoader';
import TLDRSection from '@/components/TLDRSection';
import LastUpdated from '@/components/LastUpdated';
import RelatedServices from '@/components/RelatedServices';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const TourPackagesFromBhilai = () => {




    const domesticDestinations: Destination[] = [
        { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800", price: "Starts ₹8,999", duration: "3N/4D", link: "/goa-tour-package-from-bhilai", rating: "4.8" },
        { name: "Kashmir", image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "Starts ₹18,999", duration: "5N/6D", link: "/kashmir-tour-package-from-bhilai", rating: "4.9" },
        { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", price: "Starts ₹14,999", duration: "4N/5D", link: "/kerala-tour-package-from-bhilai", rating: "4.7" },
        { name: "Himachal", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800", price: "Starts ₹10,999", duration: "5N/6D", link: "/manali-tour-package-from-bhilai", rating: "4.8" },
        { name: "Rajasthan", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800", price: "Starts ₹12,999", duration: "5N/6D", link: "/rajasthan-tour-package-from-bhilai", rating: "4.7" },
        { name: "Andaman", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80&w=800", price: "Starts ₹22,999", duration: "5N/6D", link: "/andaman-tour-package-from-bhilai", rating: "4.9" },
        { name: "Char Dham", image: "https://www.shutterstock.com/image-photo/kedarnath-uttarakhand-india-beauty-devotion-600nw-2544822575.jpg", price: "Starts ₹25,999", duration: "10N/11D", link: "/chardham-yatra-package-from-bhilai", rating: "5.0", tag: "Spiritual" },
    ];

    const internationalDestinations: Destination[] = [
        { name: "Dubai", image: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "Starts ₹45,999", duration: "5N/6D", link: "/dubai-tour-package-from-bhilai", rating: "4.9" },
        { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800", price: "Starts ₹29,999", duration: "5N/6D", link: "/thailand-tour-package-from-bhilai", rating: "4.8" },
        { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", price: "Starts ₹45,999", duration: "6N/7D", link: "/bali-tour-package-from-bhilai", rating: "4.9" },
        { name: "Singapore", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800", price: "Starts ₹55,999", duration: "5N/6D", link: "/singapore-tour-package-from-bhilai", rating: "4.8" },
        { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", price: "Starts ₹65,999", duration: "4N/5D", link: "/package/maldives-honeymoon", rating: "5.0", tag: "Honeymoon" },
        { name: "Nepal", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800", price: "Starts ₹18,999", duration: "5N/6D", link: "/nepal-tour-package-from-bhilai", rating: "4.7" },
        { name: "Sri Lanka", image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=800", price: "Starts ₹28,999", duration: "5N/6D", link: "/sri-lanka-tour-package-from-bhilai", rating: "4.6" },
    ];

    const bestTimeData = [
        { destination: "Goa", months: "Nov – Feb" },
        { destination: "Kashmir", months: "Apr – Oct" },
        { destination: "Bali", months: "May – Sep" },
        { destination: "Dubai", months: "Oct – Mar" },
        { destination: "Thailand", months: "Nov – Apr" },
    ];

    const faqs = [
        {
            question: "How much does a tour package from Bhilai cost?",
            answer: "Domestic packages typically range from ₹8,000 to ₹25,000 per person. International packages start from ₹29,000 (Thailand) to ₹65,000 (Maldives). Prices vary based on travel dates and hotel choices.",
            answerText: "Domestic packages typically range from ₹8,000 to ₹25,000 per person. International packages start from ₹29,000 (Thailand) to ₹65,000 (Maldives)."
        },
        {
            question: "Which airport is used for tour packages from Bhilai?",
            answer: <span>We primarily use <strong>Swami Vivekananda Airport (Raipur)</strong> for all flight-based tours. It is just a 40-50 minute drive from <Link to="/travel-agent-bhilai" className="text-primary hover:underline">Bhilai/Durg</Link>. For some international routes, we may connect via Delhi or Kolkata.</span>,
            answerText: "We primarily use Swami Vivekananda Airport (Raipur) for all flight-based tours. It is just a 40-50 minute drive from Bhilai/Durg."
        },
        {
            question: "Is booking via a local agent cheaper than online?",
            answer: "Often, yes! We have B2B trade rates with hotels that are 20-30% cheaper than public online prices. Plus, we save you from hidden 'convenience fees' charged by booking apps.",
            answerText: "Often, yes! We have B2B trade rates with hotels that are 20-30% cheaper than public online prices. Plus, we save you from hidden 'convenience fees' charged by booking apps."
        },
        {
            question: "Do you arrange home pickup from Bhilai and Durg?",
            answer: <span>Yes! For families and groups, we arrange complimentary home pickup from localized areas like <strong>Supela, Smriti Nagar, Nehru Nagar, Sector-6, and Durg Station</strong> to Raipur Airport.</span>,
            answerText: "Yes! For families and groups, we arrange complimentary home pickup from localized areas like Supela, Smriti Nagar, Nehru Nagar, Sector-6, and Durg Station to Raipur Airport."
        },
        {
            question: "What is the cheapest tour from Bhilai?",
            answer: "Our cheapest tour packages start at ₹5,999 for Puri/Konark (by Train from Durg) and ₹7,999 for Manali (via sleeper bus). We specialize in creating high-value trips for potential budget travelers.",
            answerText: "Our cheapest tour packages start at ₹5,999 for Puri/Konark (by Train from Durg) and ₹7,999 for Manali (via sleeper bus)."
        },
        {
            question: "What hidden costs should I check?",
            answer: "Always check for GST, entrance fees, and meal inclusions. Our packages clearly list 'Inclusions' and 'Exclusions' so you never face surprise costs during your trip.",
            answerText: "Always check for GST, entrance fees, and meal inclusions. Our packages clearly list 'Inclusions' and 'Exclusions' so you never face surprise costs during your trip."
        }
    ];

    // Top-1% CollectionPage Schema - Hub for All Packages
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Tour Packages from Bhilai",
        "description": "Best domestic and international tour packages from Bhilai. Book affordable holidays to Goa, Thailand, Dubai, and more with Rudraksh Safar.",
        "url": "https://rudrakshsafar.com/tour-packages-from-bhilai",
        "about": {
            "@type": "ItemList",
            "itemListElement": [
                ...domesticDestinations.map((dest, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "TouristDestination",
                        "name": dest.name,
                        "description": `Domestic tour package to ${dest.name} from Bhilai`,
                        "url": `https://rudrakshsafar.com${dest.link}`
                    }
                })),
                ...internationalDestinations.map((dest, index) => ({
                    "@type": "ListItem",
                    "position": domesticDestinations.length + index + 1,
                    "item": {
                        "@type": "TouristDestination",
                        "name": dest.name,
                        "description": `International tour package to ${dest.name} from Bhilai`,
                        "url": `https://rudrakshsafar.com${dest.link}`
                    }
                }))
            ]
        },
        "provider": {
            "@id": "https://rudrakshsafar.com/#travelagency",
            "@type": "TravelAgency",
            "name": "Rudraksh Safar",
            "areaServed": [
                "Bhilai",
                "Supela",
                "Smriti Nagar",
                "Power House",
                "Nehru Nagar",
                "Risali",
                "Durg",
                "Raipur",
                "Chhattisgarh"
            ]
        }
    };

    return (
        <>
            <Helmet>
                <title>Tour Packages from Bhilai | Lowest Price & Best Service</title>
                <meta name="description" content="Looking for cheap tour packages from Bhilai? We offer the lowest cost holiday packages to Goa, Kashmir, Dubai & Thailand from the Steel City. Best budget travel agent." />
                <meta name="keywords" content="tour packages from bhilai, cheapest tour packages from bhilai, low budget family tour from bhilai, affordable honeymoon packages from bhilai, budget travel agency bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                <LocationHero
                    city="Bhilai"
                    title="Tour Packages from Bhilai"
                    subtitle="Domestic & international tours with local support. Start your journey from the Steel City."
                    bgImage="https://images.unsplash.com/photo-1536768138796-191459a932b1?auto=format&fit=crop&q=80&w=2000"
                >
                    <div className="container mx-auto px-4 mt-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Bhilai Packages', path: '/tour-packages-from-bhilai' }]} />
                    </div>
                </LocationHero>

                {/* TL;DR & Updated Signal */}
                <div className="container mx-auto px-4 -mt-8 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <LastUpdated className="justify-center mb-6 bg-background/80 backdrop-blur-sm p-2 rounded-full w-fit mx-auto border" />
                    </motion.div>

                    <TLDRSection
                        title="Best Tour Packages from Bhilai"
                        summary="We offer customized tour packages from Bhilai, Durg & Raipur starting from ₹5,999. Top trends for 2026 include Goa (Flight/Train), Thailand (Direct Flight), and Kashmir. All packages include hotels, meals, and 24/7 local support."
                        areasServed={["Bhilai", "Durg", "Raipur", "Supela", "Power House"]}
                    />
                </div>

                <WhyTravelSection city="Bhilai" />

                {/* Power-Up: Budget Calculator for Famous Destinations */}
                <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold font-serif mb-2">Realistic Trip Budget Calculator (From Bhilai)</h2>
                            <p className="text-muted-foreground">Planning a trip? Here's the *real* cost breakdown nobody tells you.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <BudgetEstimator
                                destination="Goa"
                                duration="3 Nights / 4 Days"
                                total="₹7,000 – ₹10,500"
                                costs={[
                                    { category: "Train (Sleeper/3AC)", cost: "₹1,500 – ₹2,500", icon: Train },
                                    { category: "Budget Hotel (Shared)", cost: "₹3,000 – ₹4,500", icon: Hotel },
                                    { category: "Scooter + Fuel", cost: "₹1,500", icon: Map },
                                    { category: "Food & Drinks", cost: "₹1,500 – ₹2,000", icon: Coffee }
                                ]}
                                note="Price per person. Excludes alcohol & water sports."
                            />
                            <BudgetEstimator
                                destination="Manali"
                                duration="4 Nights / 5 Days"
                                total="₹8,500 – ₹12,000"
                                costs={[
                                    { category: "Train + Volvo Bus", cost: "₹3,500 – ₹4,500", icon: Train },
                                    { category: "Hotel (Off-Peak)", cost: "₹3,000 – ₹4,500", icon: Hotel },
                                    { category: "Local Sightseeing", cost: "₹1,000", icon: Map },
                                    { category: "Food (Dhabas)", cost: "₹1,500 – ₹2,500", icon: Coffee }
                                ]}
                                note="Via Raipur-Delhi train. Bus from Majnu Ka Tila."
                            />
                            <BudgetEstimator
                                destination="Kerala"
                                duration="5 Nights / 6 Days"
                                total="₹11,000 – ₹15,000"
                                costs={[
                                    { category: "Train (Sleeper)", cost: "₹2,000 – ₹3,000", icon: Train },
                                    { category: "Budget Homestays", cost: "₹5,000 – ₹7,000", icon: Hotel },
                                    { category: "Houseboat (Day Only)", cost: "₹1,500", icon: Map },
                                    { category: "Food (South Indian)", cost: "₹2,500 – ₹3,500", icon: Coffee }
                                ]}
                                note="Long train journey (28+ hrs). Recommend Flight for comfort."
                            />
                        </div>
                    </div>
                </section>

                {/* Power-Up: Travel Reality Check */}
                <div className="container mx-auto px-4">
                    <TravelReality
                        title="Travel Reality Check: Packages from Bhilai"
                        items={[
                            { type: 'neutral', text: "Most 'flight inclusive' packages from Bhilai actually depart from Raipur (RPR) airport. We handle the airport transfers." },
                            { type: 'positive', text: "Booking 60 days in advance saves ~30% on airfare for destinations like Kashmir and Andaman." },
                            { type: 'negative', text: "Avoid visiting Goa in June-July unless you like rain. Many shacks and water sports are closed." },
                            { type: 'positive', text: "For budget trips, sleeper buses to Hyderabad/Nagpur are faster and cheaper than some train routes." }
                        ]}
                    />
                </div>

                <DestinationBuckets
                    title="Top Domestic Destinations"
                    description="Explore the best of India with our direct packages from Bhilai."
                    destinations={domesticDestinations}
                />

                {/* Bhilai Silo Internal Linking Section */}
                <RelatedServices mode="packages" />

                {/* Power-Up: Good vs Bad Choices */}
                <div className="container mx-auto px-4 bg-white dark:bg-background">
                    <DosAndDonts
                        title="Smart Travel Choices from Bhilai"
                        pros={[
                            "Book trains 4 months early (IRCCT opens 120 days prior).",
                            "Use 'Raipur' as your flight hub, not Durg.",
                            "Carry valid student ID for monument discounts.",
                            "Choose overnight trains to save on 1 night hotel cost."
                        ]}
                        cons={[
                            "Don't rely on last-minute Tatkal for group trips.",
                            "Avoid agents who don't give a written itinerary.",
                            "Don't ignore the 'monsoon surcharge' in hill stations.",
                            "Avoid booking separate flights on connecting routes."
                        ]}
                    />
                </div>

                <div className="py-12 bg-secondary/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold font-serif mb-2 text-foreground">Budget Friendly Tours</h2>
                            <p className="text-muted-foreground mb-4">High on experience, low on price. Specially curated for budget travelers from Bhilai.</p>
                            <p className="text-xs text-muted-foreground bg-background inline-block px-3 py-1 rounded-full border border-border shadow-sm">
                                ℹ️ Prices depend on travel dates, hotel category, and inclusions.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Goa Budget Trip", price: "Under ₹10k", desc: "Train + Hotel + Scooter" },
                                { title: "Manali Group Tour", price: "Under ₹8k", desc: "Volvo + Stay + Meals" },
                                { title: "Puri & Konark", price: "Under ₹6k", desc: "Train + Hotel + Darshan" }
                            ].map((item, i) => (
                                <div key={i} className="bg-background p-6 rounded-xl shadow-sm border border-secondary/20 hover:border-secondary transition-colors text-center">
                                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                    <p className="text-secondary font-bold text-lg mb-1">{item.price}</p>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <DestinationBuckets
                    title="Trending International Tours"
                    description="Go global with our hassle-free international packages."
                    destinations={internationalDestinations}
                />

                {/* How It Works */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: PhoneCall, title: "1. Connect", desc: "Call or WhatsApp us your requirements." },
                                { icon: CheckCircle, title: "2. Customize", desc: "Get a tailored itinerary & quote in 2 hours." },
                                { icon: Plane, title: "3. Book", desc: "Pay small token amount to confirm." },
                                { icon: MapPin, title: "4. Travel", desc: "Get 24/7 support during your trip." }
                            ].map((step, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <step.icon className="w-8 h-8 text-primary group-hover:text-white" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <LogisticsSection bestTimeData={bestTimeData} />

                {/* PAA - Frequently Asked Travel Questions */}
                <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">Frequently Asked Travel Questions (India & International)</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                                        <span className="text-primary mt-1">❓</span> What is the cheapest international trip from India?
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        The cheapest international trips from India are usually to nearby countries such as Nepal, Sri Lanka, Thailand, Malaysia, and Indonesia (Bali). Budget international trips can start from ₹15,000–₹25,000 per person when booked with economy flights, budget hotels, and off-season travel dates.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                                        <span className="text-primary mt-1">❓</span> Which international trip is best?
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        The best international trip depends on travel preferences. Thailand and Bali are popular for first-time international travelers, Dubai is ideal for luxury and short stays, Singapore suits families, and Nepal is best for budget and nature travel. The “best” trip varies based on budget, duration, and interests.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                                        <span className="text-primary mt-1">❓</span> What is Bhilai famous for?
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Bhilai is famous for the Bhilai Steel Plant, one of India’s largest steel manufacturing units. The city is also known for Maitri Bagh, educational institutions, and its planned urban layout. Bhilai serves as an important industrial and residential hub in Chhattisgarh.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                                        <span className="text-primary mt-1">❓</span> Which is the nearest airport to Bhilai?
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        The nearest airport to Bhilai is Swami Vivekananda Airport, Raipur (RPR), located approximately 35–40 km away. It is well connected to major Indian cities like Delhi, Mumbai, Bangalore, and Hyderabad, making it the primary airport for travelers from Bhilai.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                                        <span className="text-primary mt-1">❓</span> Which 57 countries are visa-free for Indians?
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Indian passport holders can travel visa-free or get visa-on-arrival access to countries such as Nepal, Bhutan, Maldives, Mauritius, Sri Lanka, Thailand, Indonesia, Seychelles, Kenya, and Qatar. The exact number and list may change based on diplomatic agreements and travel rules.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                                        <span className="text-primary mt-1">❓</span> Which country is best for a 4 day trip?
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        For a 4-day international trip from India, destinations like Dubai, Nepal, Sri Lanka, Thailand, and Singapore are ideal. These countries offer short travel time, good connectivity, and enough attractions to enjoy within a limited duration without rushing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FAQsSection
                    faqs={faqs}
                    title="FAQs About Tours from Bhilai"
                    description="Everything you need to know before booking your trip."
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TourPackagesFromBhilai;
