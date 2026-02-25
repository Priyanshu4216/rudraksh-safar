import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Navigation, Info, PlaneTakeoff, PhoneSafari } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const PattayaCity = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://rudrakshsafar.com/destinations" },
            { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://rudrakshsafar.com/destinations/thailand" },
            { "@type": "ListItem", "position": 4, "name": "Pattaya", "item": "https://rudrakshsafar.com/destinations/thailand/pattaya" }
        ]
    };

    const attractions = [
    {
        "name": "Nong Nooch Garden",
        "image": "/images/Discover/Thailand/Pattaya/nong nooch.jpg",
        "link": "/destinations/thailand/attractions/pattaya/nong-nooch-garden",
        "category": "Nature • Cultural",
        "quickInfo": [
            "Half Day",
            "Must Visit"
        ],
        "microDesc": "Thailand's most beautiful botanical garden with cultural shows."
    },
    {
        "name": "Coral Island",
        "image": "/images/Discover/Thailand/Pattaya/coral island.jpg",
        "link": "/destinations/thailand/attractions/pattaya/coral-island",
        "category": "Adventure • Nature",
        "quickInfo": [
            "Full Day",
            "Popular"
        ],
        "microDesc": "Crystal clear waters perfect for snorkeling and water sports."
    },
    {
        "name": "Tiger Park",
        "image": "/images/Discover/Thailand/Pattaya/tiger parl.jpg",
        "link": "/destinations/thailand/attractions/pattaya/tiger-park",
        "category": "Wildlife • Family",
        "quickInfo": [
            "2-3 Hours",
            "Unique"
        ],
        "microDesc": "Get up close and personal with majestic tigers in a safe environment."
    },
    {
        "name": "Alcazar Show",
        "image": "/images/Discover/Thailand/Pattaya/alcazar-cabaret-show.jpg",
        "link": "/destinations/thailand/attractions/pattaya/alcazar-show",
        "category": "Nightlife • Cultural",
        "quickInfo": [
            "Evening",
            "Unmissable"
        ],
        "microDesc": "A dazzling, world-famous cabaret performance full of color and music."
    },
    {
        "name": "Underwater World",
        "image": "/images/Discover/Thailand/Pattaya/underwaterworld.jpg",
        "link": "/destinations/thailand/attractions/pattaya/underwater-world",
        "category": "Family • Nature",
        "quickInfo": [
            "Half Day",
            "Kid Friendly"
        ],
        "microDesc": "Walk through a stunning glass tunnel surrounded by marine life."
    },
    {
        "name": "Tiffany Show",
        "image": "/images/Discover/Thailand/Pattaya/tiffany-s-show-pattaya.jpg",
        "link": "/destinations/thailand/attractions/pattaya/tiffany-show",
        "category": "Nightlife • Entertainment",
        "quickInfo": [
            "Evening",
            "Premium"
        ],
        "microDesc": "The original transvestite cabaret show offering spectacular theatricals."
    },
    {
        "name": "Ramayana Water Park",
        "image": "/images/Discover/Thailand/Pattaya/Ramayana waterpark.jpg",
        "link": "/destinations/thailand/attractions/pattaya/ramayana-water-park",
        "category": "Adventure • Family",
        "quickInfo": [
            "Full Day",
            "Top Rated"
        ],
        "microDesc": "Thailand's biggest and best water park with thrilling slides."
    }
];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Pattaya Travel Guide for Indians | Best Places & Packages</title>
                <meta name="description" content="Explore Pattaya - Beaches & Nightlife. The party capital of Thailand. Famous for Coral Island, Alcazar Show, and Walking Street. Perfect for bachelors and young couples. Best packages from Rudraksh Safar." />
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <Navbar />

            {/* Premium Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-end md:items-center pb-12 md:pb-0">
                <img src="https://images.unsplash.com/photo-1595240578631-4b2a8fe77519?q=80&w=2670&auto=format&fit=crop" alt="Pattaya" className="absolute inset-0 w-full h-full object-cover z-0" />
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
                                    { label: 'Pattaya', path: '/destinations/thailand/pattaya' }
                                ]} 
                                className="text-white/80 hover:text-white"
                            />
                        </div>
                        <span className="inline-block bg-primary/90 backdrop-blur-sm text-primary-foreground font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-lg text-sm">
                            Beaches & Nightlife
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 drop-shadow-lg">Pattaya</h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-medium drop-shadow-md">
                            The party capital of Thailand. Famous for Coral Island, Alcazar Show, and Walking Street. Perfect for bachelors and young couples.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/international-tours/thailand">
                                <Button size="lg" className="w-full sm:w-auto font-bold rounded-full text-white bg-primary hover:bg-primary/90 text-base h-12 px-8">
                                    View Pattaya Packages
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Discover Pattaya</h2>
                        <section className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                            <p className="text-lg md:text-xl text-foreground font-medium mb-6">
                                Pattaya is an unmissable part of your Thailand itinerary, particularly famous for its vibrant nightlife, cabaret shows, and stunning nearby islands like Coral Island. While often recognized as a party capital, Pattaya has a deeply cultural and family-friendly side, showcasing attractions like the intricate Sanctuary of Truth and the sprawling Nong Nooch Botanical Garden.
                            </p>
                            <p>
                                When traveling with Rudraksh Safar, your Pattaya experience is fully optimized for comfort and ease. 
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Top Attractions in Pattaya</h2>
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Book Your Pattaya Trip?</h2>
                        <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                            Our expertly crafted packages include smooth flight connections, premium stays, Indian meals, and seamless local transport.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/package/thailand">
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

export default PattayaCity;
