import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Wallet, Globe, ArrowRight, ShieldCheck, Utensils, Info, CheckCircle2, Plane, Bus, Wifi, Sun, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UAEHub = () => {
    const [activeCity, setActiveCity] = useState('dubai');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://rudrakshsafar.com/destinations" },
            { "@type": "ListItem", "position": 3, "name": "UAE", "item": "https://rudrakshsafar.com/destinations/uae" }
        ]
    };

    const destinationSchema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "United Arab Emirates",
        "description": "The ultimate UAE travel guide for Indian tourists. Explore Dubai, Abu Dhabi, and beyond with comprehensive itineraries and premium packages.",
        "touristType": ["Family", "Couples", "Luxury Seekers", "Adventure Travelers"]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is UAE visa required for Indian citizens?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Indian passport holders require an e-visa to enter the UAE. However, those with a valid US, UK, or Schengen visa/residency may be eligible for a visa on arrival."
                }
            },
            {
                "@type": "Question",
                "name": "What is the best time to visit the UAE from India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best time to visit is between November and March when the weather is pleasant, ideal for sightseeing, desert safaris, and outdoor activities like the Dubai Shopping Festival."
                }
            }
        ]
    };

    const cities = [
        {
            id: 'dubai',
            name: 'Dubai',
            tagline: 'Luxury, Skyscrapers & Shopping',
            desc: 'The glittering jewel of the UAE. Experience world-record skyscrapers, unparalleled luxury shopping malls, and electrifying nightlife in a city that redefines modern engineering.',
            link: '/destinations/uae/dubai'
        },
        {
            id: 'abu-dhabi',
            name: 'Abu Dhabi',
            tagline: 'Culture, Heritage & Theme Parks',
            desc: 'The stately capital offering a serene mix of majestic Islamic architecture, world-class art museums, and high-octane theme parks like Ferrari World.',
            link: '/destinations/uae/abu-dhabi'
        },
        {
            id: 'sharjah',
            name: 'Sharjah',
            tagline: 'Art, History & Tradition',
            desc: 'The cultural capital of the Arab world, boasting beautifully preserved heritage areas, exquisite museums, and family-friendly waterfronts.',
            link: '/destinations/uae/sharjah'
        },
        {
            id: 'ras-al-khaimah',
            name: 'Ras Al Khaimah',
            tagline: 'Nature & Adventure',
            desc: 'Escape to the rugged Hajar Mountains for adrenaline-pumping ziplines, or relax on pristine beaches away from the city bustle.',
            link: '/destinations/uae/ras-al-khaimah'
        },
        {
            id: 'fujairah',
            name: 'Fujairah',
            tagline: 'Mountains & Marine Life',
            desc: 'The only emirate on the Gulf of Oman. Famous for its historic fort, diving spots around Snoopy Island, and dramatic mountainous terrain.',
            link: '/destinations/uae/fujairah'
        },
        {
            id: 'ajman',
            name: 'Ajman',
            tagline: 'Serene Beaches & Heritage',
            desc: 'The smallest emirate provides a laid-back retreat with uncrowded white sand beaches and a fascinating historical museum housed in an 18th-century fort.',
            link: '/destinations/uae/ajman'
        },
        {
            id: 'umm-al-quwain',
            name: 'Umm Al Quwain',
            tagline: 'Tranquility & Mangroves',
            desc: 'A throwback to the UAE\'s fishing past. Enjoy tranquil mangrove lagoons, abandoned planes, and the popular Dreamland Aqua Park.',
            link: '/destinations/uae/umm-al-quwain'
        }
    ];

    const cityAttractions: Record<string, { name: string; image: string; link: string; category: string; quickInfo: string[]; microDesc: string }[]> = {
        dubai: [
            { name: "Burj Khalifa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg/800px-Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg", link: "/destinations/uae/dubai/burj-khalifa", category: "Iconic • Luxury", quickInfo: ["2-3 Hours", "Must Visit"], microDesc: "Ascend the world's tallest building and witness breathtaking panoramic views from the soaring observation decks." },
            { name: "Desert Safari", image: "https://images.unsplash.com/photo-1542317822-2615591eb3d8?q=80&w=2670&auto=format&fit=crop", link: "/destinations/uae/dubai/desert-safari", category: "Adventure • Nature", quickInfo: ["Half Day", "Evening Tour"], microDesc: "Experience thrilling dune bashing, camel rides, and a traditional Bedouin camp dinner under the starlit sky." },
            { name: "Palm Jumeirah", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Artificial_Archipelagos%2C_Dubai%2C_United_Arab_Emirates_ISS022-E-024940_lrg_%28cropped%29.jpg/800px-Artificial_Archipelagos%2C_Dubai%2C_United_Arab_Emirates_ISS022-E-024940_lrg_%28cropped%29.jpg", link: "/destinations/uae/dubai/palm-jumeirah", category: "Luxury • Sightseeing", quickInfo: ["Half Day", "Iconic Island"], microDesc: "Explore this engineering marvel. A man-made island shaped like a palm tree featuring ultra-luxury resorts and dining." },
            { name: "Dubai Miracle Garden", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Miracle_Garden_1.jpg/800px-Miracle_Garden_1.jpg", link: "/destinations/uae/dubai/miracle-garden", category: "Nature • Family", quickInfo: ["Half Day", "Winter Only"], microDesc: "Wander through the world's largest natural flower garden featuring incredible floral sculptures and vibrant arches." },
            { name: "Marina Dhow Cruise", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/800px-Dubai_Marina_Skyline.jpg", link: "/destinations/uae/dubai/marina-dhow-cruise", category: "Romance • Dining", quickInfo: ["Evening", "Dinner Cruise"], microDesc: "Sail through the futuristic Dubai Marina on a traditional wooden dhow while enjoying a lavish buffet dinner." },
            { name: "Aquaventure Waterpark", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Atlantis_The_Palm_Dubai.jpg/800px-Atlantis_The_Palm_Dubai.jpg", link: "/destinations/uae/dubai/aquaventure", category: "Adventure • Family", quickInfo: ["Full Day", "Top Rated"], microDesc: "Plunge down record-breaking water slides and dive into shark-filled lagoons at Atlantis The Palm." }
        ],
        'abu-dhabi': [
            { name: "Sheikh Zayed Grand Mosque", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Sheikh_Zayed_Mosque_view.jpg/800px-Sheikh_Zayed_Mosque_view.jpg", link: "/destinations/uae/abu-dhabi/grand-mosque", category: "Cultural • Iconic", quickInfo: ["2-3 Hours", "Must Visit"], microDesc: "Marvel at one of the world's largest mosques, an architectural masterpiece of white marble and intricate floral designs." },
            { name: "Ferrari World", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Ferrari_World_Abu_Dhabi.jpg/800px-Ferrari_World_Abu_Dhabi.jpg", link: "/destinations/uae/abu-dhabi/ferrari-world", category: "Adventure • Family", quickInfo: ["Full Day", "Theme Park"], microDesc: "Feel the rush on Formula Rossa, the world's fastest rollercoaster, in this massive indoor Ferrari-themed amusement park." },
            { name: "Louvre Abu Dhabi", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/LouvreAD_exterior.jpg/800px-LouvreAD_exterior.jpg", link: "/destinations/uae/abu-dhabi/louvre", category: "Art • Culture", quickInfo: ["Half Day", "Museum"], microDesc: "Discover universal artistry under a spectacular domed ceiling that creates a mesmerizing 'rain of light'." },
            { name: "Yas Island", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Yas_Marina_Circuit_%2B_Ferrari_World_-Abu_Dhabi.jpg/800px-Yas_Marina_Circuit_%2B_Ferrari_World_-Abu_Dhabi.jpg", link: "/destinations/uae/abu-dhabi/yas-island", category: "Entertainment", quickInfo: ["Full Day", "Leisure Hub"], microDesc: "The ultimate entertainment destination featuring Yas Waterworld, Warner Bros. World, and the F1 Marina Circuit." }
        ],
        sharjah: [
            { name: "Sharjah Museum of Islamic Civilization", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Sharjah_Museum_of_Islamic_Civilisation_north-west_facade_%2822025908913%29.jpg/800px-Sharjah_Museum_of_Islamic_Civilisation_north-west_facade_%2822025908913%29.jpg", link: "/destinations/uae/sharjah/islamic-museum", category: "Culture • History", quickInfo: ["2 Hours", "Educational"], microDesc: "Explore thousands of rare Islamic artifacts, manuscripts, and scientific instruments spanning centuries." },
            { name: "Al Noor Mosque", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Sharjah_Mosque_at_the_dusk.jpg/800px-Sharjah_Mosque_at_the_dusk.jpg", link: "/destinations/uae/sharjah/al-noor-mosque", category: "Architecture", quickInfo: ["1 Hour", "Scenic"], microDesc: "Admire stunning Ottoman-style architecture gracefully set by the picturesque Khalid Lagoon." }
        ],
        'ras-al-khaimah': [
            { name: "Jebel Jais", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/View_from_Jebel_Jais_-_panoramio.jpg/800px-View_from_Jebel_Jais_-_panoramio.jpg", link: "/destinations/uae/ras-al-khaimah/jebel-jais", category: "Nature • Scenery", quickInfo: ["Half Day", "Highest Peak"], microDesc: "Drive up the UAE's highest mountain for stunning panoramic vistas of the rugged Hajar mountain range." },
            { name: "Jais Flight Zipline", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Jebel_Jais_Mountains.jpg/800px-Jebel_Jais_Mountains.jpg", link: "/destinations/uae/ras-al-khaimah/jais-flight", category: "Adventure • Extreme", quickInfo: ["2 Hours", "Adrenaline"], microDesc: "Soar through the mountains on the world's longest zipline, reaching exhilarating speeds of up to 150 km/h." }
        ],
        fujairah: [
            { name: "Fujairah Fort", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Fujairah_Fort_Side_View%2C_Fujairah%2C_UAE.jpg/800px-Fujairah_Fort_Side_View%2C_Fujairah%2C_UAE.jpg", link: "/destinations/uae/fujairah/fujairah-fort", category: "History • Heritage", quickInfo: ["1 Hour", "Historical"], microDesc: "Step back in time at the UAE's oldest fort, a striking mud-brick structure with a rich defensive history." },
            { name: "Snoopy Island", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Snoopy_Island%2C_Al_Aqaa_-_Fujairah.jpg/800px-Snoopy_Island%2C_Al_Aqaa_-_Fujairah.jpg", link: "/destinations/uae/fujairah/snoopy-island", category: "Nature • Diving", quickInfo: ["Half Day", "Snorkeling"], microDesc: "Dive into incredibly clear waters teeming with colorful turtles, reef sharks, and vibrant coral gardens." }
        ]
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>UAE Travel Guide for Indian Travelers | Dubai, Abu Dhabi & Beyond</title>
                <meta name="description" content="Comprehensive UAE travel guide from India. Discover top attractions in Dubai, Abu Dhabi, and Ras Al Khaimah. Get itineraries, SEO-optimized tips, and packages." />
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(destinationSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[65vh] min-h-[500px] flex items-end md:items-center pb-12 md:pb-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop"
                        alt="Dubai Skyline United Arab Emirates"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30 dark:from-background dark:via-black/60 dark:to-black/30" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl pt-20">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-500/90 text-white text-xs font-bold mb-4 backdrop-blur-md uppercase tracking-wide shadow-sm">
                            Premium Destination
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight text-foreground drop-shadow-sm">
                            UAE Travel Guide for <br className="hidden md:block" />
                            <span className="text-primary">Indian Travelers</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/90 font-medium mb-8 max-w-xl drop-shadow-sm">
                            Explore Dubai, Abu Dhabi, and beyond. From spectacular skyscrapers to golden deserts, experience the Middle East with impeccable style and comfort.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                            <Button
                                size="lg"
                                onClick={() => document.getElementById('city-explorer')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
                            >
                                Explore Cities
                            </Button>
                            <Link to="/international-tours/dubai">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-full bg-background/50 border-input text-foreground hover:bg-background backdrop-blur-sm">
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

            {/* Quick Facts Bar */}
            <section className="bg-background border-y border-border sticky top-[72px] z-50 shadow-sm transition-colors">
                <div className="container mx-auto px-4">
                    <div className="flex overflow-x-auto py-4 gap-6 no-scrollbar snap-x">
                        <div className="flex items-center gap-3 shrink-0 snap-start bg-secondary/20 px-4 py-2 rounded-xl">
                            <MapPin className="w-5 h-5 text-primary" />
                            <div><span className="block text-xs text-muted-foreground uppercase">Capital</span><span className="font-bold text-sm text-foreground">Abu Dhabi</span></div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 snap-start bg-secondary/20 px-4 py-2 rounded-xl">
                            <Wallet className="w-5 h-5 text-green-600" />
                            <div><span className="block text-xs text-muted-foreground uppercase">Currency</span><span className="font-bold text-sm text-foreground">UAE Dirham (AED)</span></div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 snap-start bg-secondary/20 px-4 py-2 rounded-xl">
                            <Calendar className="w-5 h-5 text-orange-500" />
                            <div><span className="block text-xs text-muted-foreground uppercase">Best Time</span><span className="font-bold text-sm text-foreground">Nov - Mar</span></div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 snap-start bg-secondary/20 px-4 py-2 rounded-xl">
                            <Globe className="w-5 h-5 text-blue-500" />
                            <div><span className="block text-xs text-muted-foreground uppercase">Visa</span><span className="font-bold text-sm text-foreground">Required (E-Visa)</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 space-y-24">

                {/* About UAE — Complete Overview */}
                <section>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">About UAE</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">A Journey Beyond the Ordinary</h2>
                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed content-article">
                                <p>
                                    The United Arab Emirates is a fascinating tapestry of ancient Bedouin heritage interwoven with ultra-futuristic development. Comprising seven distinct emirates, the UAE offers a diversity of experiences that cater to every type of Indian traveler.
                                </p>
                                <p>
                                    Whether you desire the glamorous lifestyle of <strong>Dubai</strong> with its megamalls, luxury hotels, and record-breaking architecture, or the rich cultural depth of <strong>Abu Dhabi</strong>, the UAE delivers. Beyond the metropolises, you'll discover the rugged mountains of <em>Ras Al Khaimah</em> and the serene beaches of <em>Fujairah</em>.
                                </p>
                                <p>
                                    The UAE seamlessly bridges the gap between <strong className="text-foreground">budget travel and extreme luxury</strong>. The country boasts impeccable safety, world-class infrastructure, unparalleled cleanliness, and a vibrant culinary scene where authentic Indian food is always just around the corner.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1621255554659-42b78996edcc?q=80&w=2670&auto=format&fit=crop"
                                alt="UAE Cultural Architecture"
                                className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
                            />
                        </div>
                    </div>
                </section>

                {/* Why UAE is Perfect for Indian Travelers */}
                <section>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Why the UAE is Perfect for Indians</h2>
                        <p className="text-muted-foreground text-lg">
                            We understand the nuances of Indian travel preferences. Here is why the UAE consistently ranks as our top luxury family destination.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Short Flight Duration", desc: "Just 3 to 4 hours from major Indian airports. Perfect for short weekend getaways and long vacations alike.", icon: <Plane className="w-6 h-6" /> },
                            { title: "Abundant Indian Cuisine", desc: "From high-end modern Indian dining in Dubai to affordable street-side Dosa joints in Karama. Pure Veg and Jain food options are widely available.", icon: <Utensils className="w-6 h-6" /> },
                            { title: "Language is No Barrier", desc: "Hindi, Urdu, and English are widely spoken everywhere. You will feel right at home interacting with shopkeepers, drivers, and hotel staff.", icon: <Globe className="w-6 h-6" /> },
                            { title: "Family-Friendly Attractions", desc: "The UAE was built for families. Theme parks like Ferrari World, IMG Worlds of Adventure, and enormous aquariums cater perfectly to children of all ages.", icon: <Star className="w-6 h-6" /> },
                            { title: "Tax-Free Shopping", desc: "Experience the legendary Dubai Shopping Festival. Electronics, gold, and international luxury brands are available in some of the world's grandest malls.", icon: <Wallet className="w-6 h-6" /> },
                            { title: "Unmatched Safety", desc: "Consistently ranked among the safest countries in the world. Solo female travelers and families can explore late at night with complete peace of mind.", icon: <ShieldCheck className="w-6 h-6" /> }
                        ].map((feature, i) => (
                            <div key={i} className="bg-card p-8 rounded-3xl border border-border flex flex-col items-start gap-4 hover:shadow-xl hover:border-primary/30 transition-all group">
                                <div className="p-4 bg-secondary/10 text-secondary rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interactive City Explorer (With City-Specific Descriptions) */}
                <section id="city-explorer" className="scroll-mt-24">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Destinations</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Explore Places in UAE</h2>
                    </div>

                    {/* Mobile Swipeable Tabs */}
                    <div className="flex overflow-x-auto pb-4 gap-3 md:gap-4 mb-8 no-scrollbar snap-x justify-start lg:justify-center">
                        {cities.map((city) => (
                            <button
                                key={city.id}
                                onClick={() => setActiveCity(city.id)}
                                className={`px-6 py-3 rounded-full whitespace-nowrap text-sm font-bold transition-all snap-start shadow-sm border ${activeCity === city.id
                                    ? 'bg-primary text-primary-foreground border-primary scale-105'
                                    : 'bg-card text-foreground border-border hover:bg-muted'
                                    }`}
                            >
                                {city.name}
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="w-full bg-card rounded-[2.5rem] p-6 md:p-12 border border-border shadow-sm">
                        <AnimatePresence mode="wait">
                            {cities.map((city) => (
                                activeCity === city.id && (
                                    <motion.div
                                        key={city.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="max-w-3xl mb-12 border-l-4 border-primary pl-6">
                                            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-foreground">{city.name}</h3>
                                            <p className="font-medium text-primary mb-3 text-lg">{city.tagline}</p>
                                            <p className="text-muted-foreground leading-relaxed">{city.desc}</p>
                                        </div>

                                        {cityAttractions[city.id] && cityAttractions[city.id].length > 0 ? (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                {cityAttractions[city.id].map((attraction, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={attraction.link}
                                                        className="group relative rounded-3xl overflow-hidden block aspect-[4/5] shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-primary/50"
                                                        aria-label={`Explore ${attraction.name}`}
                                                    >
                                                        <img src={attraction.image} alt={attraction.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                                        {/* Top Category Tag */}
                                                        <div className="absolute top-5 left-5 z-20">
                                                            <span className="bg-background/80 backdrop-blur-md text-foreground text-xs font-bold px-3 py-1.5 rounded-full tracking-wider border border-white/20 shadow-sm">
                                                                {attraction.category}
                                                            </span>
                                                        </div>

                                                        {/* Gradient Overlay for Text Readability */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 z-10">
                                                            <div className="w-full text-white">
                                                                <div className="flex flex-wrap gap-2 mb-3">
                                                                    {attraction.quickInfo?.map((info, i) => (
                                                                        <span key={i} className="text-[10px] font-semibold text-white/90 bg-white/20 backdrop-blur-md px-2 py-1 rounded-sm uppercase tracking-wider">
                                                                            {info}
                                                                        </span>
                                                                    ))}
                                                                </div>

                                                                <h4 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors leading-tight drop-shadow-md">
                                                                    {attraction.name}
                                                                </h4>

                                                                <p className="text-white/80 text-sm leading-snug mb-5 drop-shadow-sm">
                                                                    {attraction.microDesc}
                                                                </p>

                                                                <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                                                    EXPLORE <ArrowRight className="w-4 h-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-20 bg-muted/30 rounded-3xl border border-dashed border-border">
                                                <p className="text-muted-foreground">Detailed attraction guides for {city.name} are currently being curated by our travel experts.</p>
                                            </div>
                                        )}

                                        <div className="mt-12 text-center">
                                            <Link to={city.id === 'dubai' ? '/international-tours/dubai' : '/destinations/uae'}>
                                                <Button size="lg" className="rounded-full shadow-lg gap-2 px-8">
                                                    View Packages for {city.name} <ArrowRight className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </section>

                {/* Practical Travel Information */}
                <section>
                    <div className="mb-12">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Practical Travel Information</h2>
                        <p className="text-muted-foreground text-lg">Essential tips for Indian tourists traveling to the UAE.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1"><Wallet className="w-6 h-6 text-primary" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">Currency & Payments</h4>
                                    <p className="text-muted-foreground text-sm">The UAE Dirham (AED) is pegged to the USD. Credit/Debit cards (Visa/Mastercard) and Forex cards work everywhere. Carry a small amount of cash for traditional souks or taxis.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><Bus className="w-6 h-6 text-primary" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">Local Transport</h4>
                                    <p className="text-muted-foreground text-sm">Dubai Metro is highly efficient and connects major malls/attractions. Taxis (RTA) and rideshare apps like Uber and Careem and universally available and safe.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><Wifi className="w-6 h-6 text-primary" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">SIM Cards & Internet</h4>
                                    <p className="text-muted-foreground text-sm">Visitors receive a free tourist SIM (Du/Etisalat) at Dubai Airport immigration. Free high-speed Wi-Fi is prevalent in malls, hotels, and tourist spots.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">Dress Code Considerations</h4>
                                    <p className="text-muted-foreground text-sm">While the UAE is modern, modesty is respected. Swimwear is acceptable at beaches/pools. In malls and public areas, knees and shoulders should generally be covered. Mosques require strictly modest clothing (abayas/kanduras often provided).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1"><Sun className="w-6 h-6 text-primary" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1">Weather Tips</h4>
                                    <p className="text-muted-foreground text-sm">Summer (Jun-Sep) is intensely hot, but all indoor attractions are fiercely air-conditioned. Winter (Nov-Mar) offers beautiful outdoor weather. Always carry sunscreen and sunglasses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ready to Experience FAQ & Package Linking */}
                <section className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border text-center max-w-5xl mx-auto relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">Ready to Experience the UAE?</h2>
                        <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                            Ensure a seamless trip with our expertly crafted UAE tour packages. From flight bookings and <Link to="/travel-services/visa-assistance" className="text-primary hover:underline">visa processing</Link> to premium hotel stays and guided tours—we handle everything. Consult our travel experts in <Link to="/travel-agent-bhilai" className="text-primary hover:underline">Bhilai</Link>, <Link to="/travel-agent-raipur" className="text-primary hover:underline">Raipur</Link>, and <Link to="/travel-agent-durg" className="text-primary hover:underline">Durg</Link> for personalized assistance.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/international-tours/dubai">
                                <Button size="lg" className="w-full sm:w-auto font-bold rounded-full text-base px-8 h-14 shadow-lg">
                                    View UAE Tour Packages
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-full text-base px-8 h-14 bg-background">
                                    Request Custom Itinerary
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-10 pt-8 border-t border-border flex flex-wrap justify-center items-center gap-6 text-sm text-foreground/80 font-medium">
                            <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> End-to-End Visa Assistance</div>
                            <div className="hidden sm:block text-border">•</div>
                            <div className="flex items-center gap-2"><Utensils className="w-4 h-4 text-green-600" /> Indian / Jain Meal Options</div>
                            <div className="hidden sm:block text-border">•</div>
                            <div className="flex items-center gap-2"><Plane className="w-4 h-4 text-blue-500" /> Departures from Major Indian Cities</div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    );
};

export default UAEHub;
