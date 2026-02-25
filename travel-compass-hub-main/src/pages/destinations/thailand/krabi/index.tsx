import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Navigation, Info, PlaneTakeoff, PhoneSafari } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const KrabiCity = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://rudrakshsafar.com/destinations" },
            { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://rudrakshsafar.com/destinations/thailand" },
            { "@type": "ListItem", "position": 4, "name": "Krabi", "item": "https://rudrakshsafar.com/destinations/thailand/krabi" }
        ]
    };

    const attractions = [
    {
        "name": "4 Islands Tour",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Poda_island_beach.jpg/960px-Poda_island_beach.jpg",
        "link": "/destinations/thailand/attractions/krabi/4-islands-tour",
        "category": "Adventure • Nature",
        "quickInfo": [
            "Full Day",
            "Popular"
        ],
        "microDesc": "Island-hop through Krabi's iconic limestone karsts and pristine beaches."
    },
    {
        "name": "7 Islands Tour",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Railay_Beach_5.jpg/960px-Railay_Beach_5.jpg",
        "link": "/destinations/thailand/attractions/krabi/7-islands-tour",
        "category": "Adventure • Sightseeing",
        "quickInfo": [
            "Full Day",
            "Sunset Cruise"
        ],
        "microDesc": "An extended island adventure ending with a magical bio-luminescent swim."
    },
    {
        "name": "Jungle Tour",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Huay_Toh_Watherfall_-_Nationak_park_Panom_Bencha_-_panoramio_-_Thajsko_%281%29.jpg/960px-Huay_Toh_Watherfall_-_Nationak_park_Panom_Bencha_-_panoramio_-_Thajsko_%281%29.jpg",
        "link": "/destinations/thailand/attractions/krabi/jungle-tour",
        "category": "Nature • Explore",
        "quickInfo": [
            "Half Day",
            "Hot Springs"
        ],
        "microDesc": "Bathe in natural hot springs and trek to the mesmerizing Emerald Pool."
    },
    {
        "name": "Krabi City Tour",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Wat_Tham_Sua_18.jpg/960px-Wat_Tham_Sua_18.jpg",
        "link": "/destinations/thailand/attractions/krabi/krabi-city-tour",
        "category": "Cultural • Local",
        "quickInfo": [
            "Half Day",
            "Sightseeing"
        ],
        "microDesc": "Experience the local vibe, Tiger Cave Temple, and vibrant night markets."
    },
    {
        "name": "Elephant Trekking",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Navann_was_born_at_the_park_Oct_2012.jpg/960px-Navann_was_born_at_the_park_Oct_2012.jpg",
        "link": "/destinations/thailand/attractions/krabi/elephant-trekking",
        "category": "Wildlife • Family",
        "quickInfo": [
            "Half Day",
            "Ethical"
        ],
        "microDesc": "A memorable and ethical encounter with rescued Thai elephants."
    }
];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Krabi Travel Guide for Indians | Best Places & Packages</title>
                <meta name="description" content="Explore Krabi - Nature & Serenity. Stunning limestone cliffs and emerald pools. Less crowded than Phuket, perfect for nature lovers and families. Best packages from Rudraksh Safar." />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <Navbar />

            {/* Premium Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-end md:items-center pb-12 md:pb-0">
                <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop" alt="Krabi" className="absolute inset-0 w-full h-full object-cover z-0" />
                {/* Important Theme Fix: dark mode readable overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-4xl">
                        <div className="mb-6 hidden md:block">
                            <Breadcrumbs 
                                items={[
                                    { label: 'Home', path: '/' },
                                    { label: 'Destinations', path: '/destinations' },
                                    { label: 'Thailand', path: '/destinations/thailand' },
                                    { label: 'Krabi', path: '/destinations/thailand/krabi' }
                                ]} 
                                className="text-white/80 hover:text-white"
                            />
                        </div>
                        <span className="inline-block bg-primary/90 backdrop-blur-sm text-primary-foreground font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-lg text-sm">
                            Nature & Serenity
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 drop-shadow-lg">Krabi</h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-medium drop-shadow-md">
                            Stunning limestone cliffs and emerald pools. Less crowded than Phuket, perfect for nature lovers and families.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/international-tours/thailand">
                                <Button size="lg" className="w-full sm:w-auto font-bold rounded-full text-white bg-primary hover:bg-primary/90 text-base h-12 px-8">
                                    View Krabi Packages
                                </Button>
                            </Link>
                            <a href="https://wa.me/917884088924" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-full bg-white/10 border-white text-white hover:bg-white hover:text-black text-base h-12 px-8 backdrop-blur-sm">
                                    WhatsApp Enquiry
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                
                {/* About & Trust */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Discover Krabi</h2>
                        <section className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                            <p className="text-lg md:text-xl text-foreground font-medium mb-6">
                                Krabi offers a more laid-back, nature-focused alternative to the bustling streets of Phuket. Towering limestone cliffs, emerald-green waters, and mangrove forests dominate the landscape. It's the ultimate destination for rock climbing at Railay Beach, soaking in natural hot springs, and embarking on the famous 4 Islands Tour.
                            </p>
                            <p>
                                When traveling with Rudraksh Safar, your Krabi experience is fully optimized for comfort and ease. 
                                We arrange local sightseeing with expert guides, comfortable transfers, and ensure that pure vegetarian or Indian meals are seamlessly integrated into your daily itinerary.
                            </p>
                        </section>
                    </div>

                    {/* Right Rail: Guides */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-orange-50 dark:bg-orange-950/20 rounded-2xl p-8 border border-orange-100 dark:border-orange-900/50">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-orange-500" /> Essential Guides</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link to="/destinations/thailand/trip-cost-from-india" className="flex items-center gap-3 group">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 transition-transform group-hover:scale-110">₹</div>
                                        <span className="font-semibold group-hover:text-primary transition-colors">Trip Cost from India</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/travel-services/visa-assistance" className="flex items-center gap-3 group">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 transition-transform group-hover:scale-110">🛂</div>
                                        <span className="font-semibold group-hover:text-primary transition-colors">Visa Guide</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/destinations/thailand/best-time-to-visit" className="flex items-center gap-3 group">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 transition-transform group-hover:scale-110">📅</div>
                                        <span className="font-semibold group-hover:text-primary transition-colors">Best Time to Visit</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Attractions Grid (Identical style to Hub page) */}
                <div className="mb-20">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Top Attractions in Krabi</h2>
                        <p className="text-muted-foreground text-lg">Must-visit spots included in our custom packages.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {attractions.map((attraction, idx) => (
                            <Link
                                key={idx}
                                to={attraction.link}
                                className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] block shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                {/* Top Category Tag */}
                                <div className="absolute top-5 left-5 z-20">
                                    <span className="bg-black/40 backdrop-blur-md text-white/95 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/20 shadow-sm">
                                        {attraction.category}
                                    </span>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-6 md:p-8 z-10 transition-opacity duration-300">
                                    <div className="w-full">
                                        {/* Quick Info Tags */}
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {attraction.quickInfo?.map((info, i) => (
                                                <span key={i} className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                                                    {info}
                                                </span>
                                            ))}
                                        </div>

                                        <h4 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors leading-tight drop-shadow-md">{attraction.name}</h4>
                                        <p className="text-gray-200 text-sm md:text-base leading-snug mb-5 line-clamp-2 md:line-clamp-none opacity-80 group-hover:opacity-100 transition-opacity">
                                            {attraction.microDesc}
                                        </p>

                                        <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                            EXPLORE ATTRACTION <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Package CTA */}
                <div className="bg-card shadow-xl rounded-3xl p-8 md:p-12 border border-border text-center max-w-4xl mx-auto mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Book Your Krabi Trip?</h2>
                        <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                            Our expertly crafted packages include smooth flight connections, premium stays, Indian meals, and seamless local transport.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/package/phuket">
                                <Button size="lg" className="w-full sm:w-auto font-bold rounded-full text-base px-8 h-12 shadow-lg shadow-primary/30">
                                    View Available Packages
                                </Button>
                            </Link>
                            <a href="https://wa.me/917884088924" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-full text-base px-8 h-12 bg-background">
                                    WhatsApp Support
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default KrabiCity;
