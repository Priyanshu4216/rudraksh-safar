import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Wallet, Globe, ArrowRight, Star, Utensils, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThailandHub = () => {
    const [activeCity, setActiveCity] = useState('pattaya');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://rudrakshsafar.com/destinations" },
            { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://rudrakshsafar.com/destinations/thailand" }
        ]
    };

    const cities = [
        {
            id: 'pattaya',
            name: 'Pattaya',
            tagline: 'Beaches & Nightlife',
            desc: 'The party capital of Thailand. Famous for Coral Island, Alcazar Show, and Walking Street. Perfect for bachelors and young couples.',
            image: 'https://images.unsplash.com/photo-1595240578631-4b2a8fe77519?q=80&w=2670&auto=format&fit=crop', // Pattaya
            link: '/destinations/thailand/pattaya'
        },
        {
            id: 'bangkok',
            name: 'Bangkok',
            tagline: 'Shopping & Culture',
            desc: 'A city that never sleeps. Explore Grand Palace, Safari World, and endless shopping at Indra Square and MBK Center.',
            image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2670&auto=format&fit=crop', // Bangkok
            link: '/destinations/thailand/bangkok'
        },
        {
            id: 'phuket',
            name: 'Phuket',
            tagline: 'Island Paradise',
            desc: 'Thailand\'s largest island. Crystal clear waters, Phi Phi Island tours, and luxury resorts. Ideal for honeymooners.',
            image: 'https://images.unsplash.com/photo-1589394867562-f19b2241d70e?q=80&w=2664&auto=format&fit=crop', // Phuket
            link: '/destinations/thailand/phuket'
        },
        {
            id: 'krabi',
            name: 'Krabi',
            tagline: 'Nature & Serenity',
            desc: 'Stunning limestone cliffs and emerald pools. Less crowded than Phuket, perfect for nature lovers and families.',
            image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop', // Krabi (Railay)
            link: '/destinations/thailand/krabi'
        },
        {
            id: 'koh-samui',
            name: 'Koh Samui',
            tagline: 'Luxury Escapes',
            desc: 'Palm-fringed beaches and high-end spas. Famous for the Full Moon Party nearby and Ang Thong Marine Park.',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2676&auto=format&fit=crop', // Samui
            link: '/destinations/thailand/koh-samui'
        }
    ];

    const guides = [
        { title: "Trip Cost", link: "/destinations/thailand/trip-cost-from-india", icon: <Wallet className="w-5 h-5" /> },
        { title: "Visa Guide", link: "/travel-services/visa-assistance", icon: <Globe className="w-5 h-5" /> },
        { title: "Best Time to Visit", link: "/destinations/thailand/best-time-to-visit", icon: <Calendar className="w-5 h-5" /> },
        { title: "Travel Tips", link: "/destinations/thailand/travel-tips", icon: <Info className="w-5 h-5" /> },
    ];

    const cityAttractions: Record<string, { name: string; image: string; link: string; category: string; quickInfo: string[]; microDesc: string }[]> = {
        pattaya: [
            { name: "Nong Nooch Garden", image: "/images/Discover/Thailand/Pattaya/nong nooch.jpg", link: "/destinations/thailand/attractions/pattaya/nong-nooch-garden", category: "Nature • Cultural", quickInfo: ["Half Day", "Must Visit"], microDesc: "Thailand's most beautiful botanical garden with cultural shows." },
            { name: "Coral Island", image: "/images/Discover/Thailand/Pattaya/coral island.jpg", link: "/destinations/thailand/attractions/pattaya/coral-island", category: "Adventure • Nature", quickInfo: ["Full Day", "Popular"], microDesc: "Crystal clear waters perfect for snorkeling and water sports." },
            { name: "Tiger Park", image: "/images/Discover/Thailand/Pattaya/tiger parl.jpg", link: "/destinations/thailand/attractions/pattaya/tiger-park", category: "Wildlife • Family", quickInfo: ["2-3 Hours", "Unique"], microDesc: "Get up close and personal with majestic tigers in a safe environment." },
            { name: "Alcazar Show", image: "/images/Discover/Thailand/Pattaya/alcazar-cabaret-show.jpg", link: "/destinations/thailand/attractions/pattaya/alcazar-show", category: "Nightlife • Cultural", quickInfo: ["Evening", "Unmissable"], microDesc: "A dazzling, world-famous cabaret performance full of color and music." },
            { name: "Underwater World", image: "/images/Discover/Thailand/Pattaya/underwaterworld.jpg", link: "/destinations/thailand/attractions/pattaya/underwater-world", category: "Family • Nature", quickInfo: ["Half Day", "Kid Friendly"], microDesc: "Walk through a stunning glass tunnel surrounded by marine life." },
            { name: "Tiffany Show", image: "/images/Discover/Thailand/Pattaya/tiffany-s-show-pattaya.jpg", link: "/destinations/thailand/attractions/pattaya/tiffany-show", category: "Nightlife • Entertainment", quickInfo: ["Evening", "Premium"], microDesc: "The original transvestite cabaret show offering spectacular theatricals." },
            { name: "Ramayana Water Park", image: "/images/Discover/Thailand/Pattaya/Ramayana waterpark.jpg", link: "/destinations/thailand/attractions/pattaya/ramayana-water-park", category: "Adventure • Family", quickInfo: ["Full Day", "Top Rated"], microDesc: "Thailand's biggest and best water park with thrilling slides." }
        ],
        bangkok: [
            { name: "Safari World", image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2609&auto=format&fit=crop", link: "/destinations/thailand/attractions/bangkok/safari-world", category: "Family • Wildlife", quickInfo: ["Full Day", "Popular"], microDesc: "An expansive open zoo and marine park featuring spectacular animal shows." },
            { name: "Chao Phraya Cruise", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Chao_Phraya_River_-_Bangkok_-_northwards_-_from_King_Taksin_Bridge_-_2021.jpg/960px-Chao_Phraya_River_-_Bangkok_-_northwards_-_from_King_Taksin_Bridge_-_2021.jpg", link: "/destinations/thailand/attractions/bangkok/chao-phraya-cruise", category: "Luxury • Sightseeing", quickInfo: ["Evening", "Romantic"], microDesc: "Dine under the stars while cruising past Bangkok's illuminated temples." },
            { name: "Temple Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg/960px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg", link: "/destinations/thailand/attractions/bangkok/temple-tour", category: "Cultural • Historic", quickInfo: ["Half Day", "Heritage"], microDesc: "Discover the architectural marvels of Wat Arun and the Grand Palace." },
            { name: "Dream World", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Dream_World%2C_Thailand.jpg", link: "/destinations/thailand/attractions/bangkok/dream-world", category: "Family • Adventure", quickInfo: ["Full Day", "Thrills"], microDesc: "A massive amusement park bursting with rides, shows, and fantasy lands." },
            { name: "Sky Walk", image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2574&auto=format&fit=crop", link: "/destinations/thailand/attractions/bangkok/sky-walk", category: "Luxury • Iconic", quickInfo: ["1-2 Hours", "Must Visit"], microDesc: "Step onto the glass floor of Bangkok's highest observation deck." },
            { name: "Sea Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Siam_Ocean_World_Enterance_2011.jpg/960px-Siam_Ocean_World_Enterance_2011.jpg", link: "/destinations/thailand/attractions/bangkok/sea-life", category: "Family • Nature", quickInfo: ["Half Day", "Indoor"], microDesc: "Explore one of the largest aquariums in Southeast Asia beneath Siam Paragon." }
        ],
        krabi: [
            { name: "4 Islands Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Poda_island_beach.jpg/960px-Poda_island_beach.jpg", link: "/destinations/thailand/attractions/krabi/4-islands-tour", category: "Adventure • Nature", quickInfo: ["Full Day", "Popular"], microDesc: "Island-hop through Krabi's iconic limestone karsts and pristine beaches." },
            { name: "7 Islands Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Railay_Beach_5.jpg/960px-Railay_Beach_5.jpg", link: "/destinations/thailand/attractions/krabi/7-islands-tour", category: "Adventure • Sightseeing", quickInfo: ["Full Day", "Sunset Cruise"], microDesc: "An extended island adventure ending with a magical bio-luminescent swim." },
            { name: "Jungle Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Huay_Toh_Watherfall_-_Nationak_park_Panom_Bencha_-_panoramio_-_Thajsko_%281%29.jpg/960px-Huay_Toh_Watherfall_-_Nationak_park_Panom_Bencha_-_panoramio_-_Thajsko_%281%29.jpg", link: "/destinations/thailand/attractions/krabi/jungle-tour", category: "Nature • Explore", quickInfo: ["Half Day", "Hot Springs"], microDesc: "Bathe in natural hot springs and trek to the mesmerizing Emerald Pool." },
            { name: "Krabi City Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Wat_Tham_Sua_18.jpg/960px-Wat_Tham_Sua_18.jpg", link: "/destinations/thailand/attractions/krabi/krabi-city-tour", category: "Cultural • Local", quickInfo: ["Half Day", "Sightseeing"], microDesc: "Experience the local vibe, Tiger Cave Temple, and vibrant night markets." },
            { name: "Elephant Trekking", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Navann_was_born_at_the_park_Oct_2012.jpg/960px-Navann_was_born_at_the_park_Oct_2012.jpg", link: "/destinations/thailand/attractions/krabi/elephant-trekking", category: "Wildlife • Family", quickInfo: ["Half Day", "Ethical"], microDesc: "A memorable and ethical encounter with rescued Thai elephants." }
        ],
        phuket: [
            { name: "Phi Phi Island", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/KohPhiPhi.JPG/960px-KohPhiPhi.JPG", link: "/destinations/thailand/attractions/phuket/phi-phi-island", category: "Nature • Iconic", quickInfo: ["Full Day", "Must Visit"], microDesc: "World-renowned islands featuring Maya Bay's breathtaking turquoise waters." },
            { name: "James Bond Island", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Isla_Tapu%2C_Phuket%2C_Tailandia%2C_2013-08-20%2C_DD_36.JPG/960px-Isla_Tapu%2C_Phuket%2C_Tailandia%2C_2013-08-20%2C_DD_36.JPG", link: "/destinations/thailand/attractions/phuket/james-bond-island", category: "Sightseeing • Adventure", quickInfo: ["Full Day", "Cinematic"], microDesc: "Cruise through Phang Nga Bay's dramatic limestone sea-mountains." },
            { name: "FantaSea Show", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/FantaSea.png", link: "/destinations/thailand/attractions/phuket/fantasea-show", category: "Cultural • Entertainment", quickInfo: ["Evening", "Grand"], microDesc: "A spectacular cultural theme park showcasing Thai heritage and myths." },
            { name: "Dolphin Show", image: "https://images.unsplash.com/photo-1570417957960-4414008bc0aa?q=80&w=2574&auto=format&fit=crop", link: "/destinations/thailand/attractions/phuket/dolphin-show", category: "Family • Wildlife", quickInfo: ["2-3 Hours", "Kid Friendly"], microDesc: "An engaging and acrobatic aquatic show loved by families." },
            { name: "Tiger Kingdom", image: "https://images.unsplash.com/photo-1598583486338-7bb400d3dce4?q=80&w=2670&auto=format&fit=crop", link: "/destinations/thailand/attractions/phuket/tiger-kingdom", category: "Wildlife • Adventure", quickInfo: ["Half Day", "Unique"], microDesc: "Interact closely with Indochinese tigers under expert supervision." }
        ],
        'koh-samui': [
            { name: "Jungle Safari", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Koh_Samui_Lipa_Noi2.jpg/960px-Koh_Samui_Lipa_Noi2.jpg", link: "/destinations/thailand/attractions/koh-samui/jungle-safari", category: "Adventure • Nature", quickInfo: ["Half Day", "4x4 Tour"], microDesc: "A rugged 4x4 off-road adventure through Samui's lush tropical interiors." },
            { name: "Koh Samui City Tour", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Budda_kuju.jpg/960px-Budda_kuju.jpg", link: "/destinations/thailand/attractions/koh-samui/koh-samui-city-tour", category: "Cultural • Sightseeing", quickInfo: ["Half Day", "Highlights"], microDesc: "Visit the iconic Big Buddha, Hin Ta Hin Yai rocks, and local viewpoints." },
            { name: "Ang Thong Marine Park", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg/960px-Mu_Ko_Ang_Thong%2C_Islands_in_the_sea_2%2C_Thailand.jpg", link: "/destinations/thailand/attractions/koh-samui/ang-thong-marine-park", category: "Nature • Adventure", quickInfo: ["Full Day", "Must Visit"], microDesc: "An archipelago of 42 pristine islands perfect for kayaking and snorkeling." },
            { name: "Safari Tour", image: "https://images.unsplash.com/photo-1582299863456-ccde3b132890?q=80&w=2670&auto=format&fit=crop", link: "/destinations/thailand/attractions/koh-samui/safari-tour", category: "Family • Wildlife", quickInfo: ["Half Day", "Eco Park"], microDesc: "Experience animal encounters and nature walks in Samui's eco-parks." }
        ]
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Thailand Travel Guide for Indians | Places to Visit & Packages</title>
                <meta name="description" content="The ultimate Thailand travel guide for Indian tourists. Explore Bangkok, Pattaya, Phuket. Get visa tips, itineraries, and packages from Rudraksh Safar." />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] min-h-[500px] flex items-end md:items-center pb-12 md:pb-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2670&auto=format&fit=crop"
                        alt="Thailand Travel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-500/90 text-xs font-bold mb-4 backdrop-blur-md uppercase tracking-wide">
                            No. 1 Destination for Indians
                        </span>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                            Discover <span className="text-primary">Thailand</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                            From the street food of Bangkok to the beaches of Phuket. Your complete guide to the Land of Smiles, crafted for Indian travelers.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                            <Button
                                size="lg"
                                onClick={() => document.getElementById('city-explorer')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
                            >
                                Explore Cities
                            </Button>
                            <Link to="/international-tours/thailand">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-full bg-white/10 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm">
                                    View Packages
                                </Button>
                            </Link>
                            <a href="https://wa.me/917884088924" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="w-full sm:w-auto font-bold rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg shadow-[#25D366]/30">
                                    WhatsApp Plan Trip
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Facts Bar (Mobile Swipeable) */}
            <section className="bg-background border-b border-border/50 sticky top-[72px] z-50 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex overflow-x-auto py-4 gap-6 no-scrollbar snap-x">
                        <div className="flex items-center gap-3 shrink-0 snap-start bg-secondary/10 px-4 py-2 rounded-lg">
                            <MapPin className="w-5 h-5 text-primary" />
                            <div><span className="block text-xs text-muted-foreground uppercase">Capital</span><span className="font-bold text-sm">Bangkok</span></div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 snap-start bg-secondary/10 px-4 py-2 rounded-lg">
                            <Wallet className="w-5 h-5 text-green-600" />
                            <div><span className="block text-xs text-muted-foreground uppercase">Currency</span><span className="font-bold text-sm">Thai Baht (THB)</span></div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 snap-start bg-secondary/10 px-4 py-2 rounded-lg">
                            <Calendar className="w-5 h-5 text-orange-500" />
                            <div><span className="block text-xs text-muted-foreground uppercase">Best Time</span><span className="font-bold text-sm">Nov - Feb</span></div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 snap-start bg-secondary/10 px-4 py-2 rounded-lg">
                            <Globe className="w-5 h-5 text-blue-500" />
                            <div><span className="block text-xs text-muted-foreground uppercase">Visa</span><span className="font-bold text-sm">Free / VOA*</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">

                {/* Why Thailand is Perfect */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Thailand is Perfect for Indian Travelers</h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                            Thailand offers the perfect blend of exotic adventure and comfortable travel. At Rudraksh Safar, we ensure your trip is hassle-free, from pure vegetarian food arrangements to family-friendly itineraries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: "Pure Veg & Indian Food", desc: "Abundant Indian restaurants and Jain food options available across all major cities.", icon: <Utensils className="w-6 h-6" /> },
                            { title: "Budget Friendly", desc: "From affordable luxury resorts to cheap local transport, Thailand offers incredible value for money.", icon: <Wallet className="w-6 h-6" /> },
                            { title: "Family Suitability", desc: "Countless kid-friendly attractions like Safari World, Water Parks, and interactive museums.", icon: <Star className="w-6 h-6" /> },
                            { title: "Rich Culture", desc: "Discover ornate temples, deep-rooted traditions, and the majestic Grand Palace.", icon: <Globe className="w-6 h-6" /> },
                            { title: "Vibrant Nightlife", desc: "Experience world-famous cabaret shows, bustling night markets, and sunset beach clubs.", icon: <MapPin className="w-6 h-6" /> },
                            { title: "Shopping Haven", desc: "Endless shopping from MBK Center and Indra Square to vibrant weekend floating markets.", icon: <Wallet className="w-6 h-6" /> }
                        ].map((feature, i) => (
                            <div key={i} className="bg-card p-6 rounded-2xl border border-border flex items-start gap-4 hover:shadow-lg transition-shadow">
                                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-muted/40 rounded-3xl p-8 border border-border text-center max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold mb-6">Essential Thailand Planning Guides</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {guides.map((guide, idx) => (
                                <Link key={idx} to={guide.link} className="flex flex-col items-center text-center p-4 rounded-xl border border-border hover:border-primary hover:bg-background hover:shadow-md transition-all group bg-card">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                                        {guide.icon}
                                    </div>
                                    <span className="text-sm font-bold group-hover:text-primary transition-colors">{guide.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* City Explorer */}
                <div id="city-explorer" className="mb-20 scroll-mt-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-serif font-bold">Explore Popular Cities</h2>
                        <span className="text-sm text-muted-foreground hidden md:inline">Click tabs to switch</span>
                    </div>

                    {/* Mobile Tabs (Scrollable) */}
                    <div className="flex overflow-x-auto pb-4 gap-2 md:gap-4 mb-6 no-scrollbar snap-x sticky top-[140px] z-40 bg-background/95 backdrop-blur-sm py-2">
                        {cities.map((city) => (
                            <button
                                key={city.id}
                                onClick={() => setActiveCity(city.id)}
                                className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all snap-start ${activeCity === city.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                    : 'bg-secondary/30 text-foreground hover:bg-secondary'
                                    }`}
                            >
                                {city.name}
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            {cities.map((city) => (
                                activeCity === city.id && (
                                    <motion.div
                                        key={city.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="mb-8"
                                    >
                                        <div className="flex justify-between items-end mb-6">
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">Attractions in {city.name}</h3>
                                                <p className="text-muted-foreground">{city.tagline}</p>
                                            </div>
                                            <Link to={city.link} className="hidden md:inline-flex items-center gap-1 text-primary font-semibold hover:underline">
                                                Explore {city.name} fully <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {cityAttractions[city.id]?.map((attraction, idx) => (
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
                                                                EXPLORE EXPERIENCE <ArrowRight className="w-4 h-4" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="mt-10 flex justify-center">
                                            <Link to={city.id === 'phuket' ? '/package/phuket' : '/package/thailand'}>
                                                <Button size="lg" className="rounded-full shadow-lg gap-2 text-base px-8 h-12">
                                                    View {city.id === 'phuket' ? 'Phuket' : city.name} Tour Packages <ArrowRight className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Ready to Experience Section */}
                <div className="bg-card shadow-xl rounded-3xl p-8 md:p-12 border border-border text-center max-w-4xl mx-auto mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Experience Thailand?</h2>
                        <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                            Explore our Thailand tour packages for a hassle-free trip. We offer special packages configured with the best Indian food arrangements and premium stays.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/package/thailand">
                                <Button size="lg" className="w-full sm:w-auto font-bold rounded-full text-base px-8 h-12">
                                    Pattaya & Bangkok Packages
                                </Button>
                            </Link>
                            <Link to="/package/phuket">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-full text-base px-8 h-12 bg-background">
                                    Phuket Island Packages
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-8 pt-8 border-t border-border flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                            <span><strong className="text-foreground">Support:</strong> WhatsApp Assistance</span>
                            <span className="hidden sm:inline">•</span>
                            <span>Visa Assistance Available</span>
                            <span className="hidden sm:inline">•</span>
                            <Link to="/international-tours/thailand-from-raipur" className="text-primary hover:underline font-semibold">Departures from Raipur</Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

const CheckCircleIcon = () => (
    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
        <div className="w-2 h-2 bg-green-600 rounded-full" />
    </div>
);

export default ThailandHub;
