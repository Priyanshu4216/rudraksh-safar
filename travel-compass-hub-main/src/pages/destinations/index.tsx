import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck, Clock, Plane, CreditCard, Globe, Star, HeartHandshake } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/seo/FAQSection';

const Destinations = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const destinations = [
        {
            id: 'thailand',
            name: 'Thailand',
            flag: '🇹🇭',
            tagline: 'The Land of Smiles',
            description: 'Experience the magic of golden temples, turquoise beaches, and vibrant street life. The ultimate destination for Indian travelers.',
            image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop', // Wat Arun/Temple
            link: '/destinations/thailand',
            stats: {
                visitors: 'No.1 Choice',
                visa: 'Visa Free*',
                flight: '4 hrs from India'
            }
        },
        {
            id: 'uae',
            name: 'United Arab Emirates',
            flag: '🇦🇪',
            tagline: 'Luxury & Desert Adventures',
            description: 'Explore futuristic cities like Dubai, cultural heritage in Abu Dhabi, and magnificent desert landscapes. A premium family and shopping destination.',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop', // Dubai Skyline/Burj Khalifa
            link: '/destinations/uae',
            stats: {
                visitors: 'Top Rated',
                visa: 'E-Visa',
                flight: '3.5 hrs from India'
            }
        },
        {
            id: 'bali',
            name: 'Bali (Indonesia)',
            flag: '🇮🇩',
            tagline: 'Island of the Gods',
            description: 'Perfect for honeymooners and peace seekers. Featuring rice terraces, ancient sea temples, volcanic mountains, and coral reefs.',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2676&auto=format&fit=crop',
            link: '/international-tours/bali',
            stats: {
                visitors: 'Honeymoon #1',
                visa: 'Visa on Arrival',
                flight: '6 hrs from India'
            }
        },
        {
            id: 'singapore',
            name: 'Singapore',
            flag: '🇸🇬',
            tagline: 'Modern Marvels & Gardens',
            description: 'A spotless, ultra-modern city featuring futuristic gardens, world-class theme parks like Universal Studios, and diverse culinary scenes.',
            image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2574&auto=format&fit=crop',
            link: '/international-tours/singapore',
            stats: {
                visitors: 'Family Favorite',
                visa: 'E-Visa',
                flight: '5 hrs from India'
            }
        },
        {
            id: 'srilanka',
            name: 'Sri Lanka',
            flag: '🇱🇰',
            tagline: 'The Pearl of the Indian Ocean',
            description: 'Incredible wildlife safaris, lush tea plantations, and pristine coastal belts. A budget-friendly neighbor bursting with heritage.',
            image: 'https://images.unsplash.com/photo-1586224346062-df21fdb934ce?q=80&w=2669&auto=format&fit=crop',
            link: '/international-tours/srilanka',
            stats: {
                visitors: 'Trending',
                visa: 'E-Visa Free*',
                flight: '2.5 hrs from India'
            }
        }
    ];

    const faqs = [
        {
            question: "Which is the cheapest international destination from India?",
            answer: "Thailand and Sri Lanka are currently the cheapest international destinations from India. A budget 4-day trip to Thailand can start from as low as ₹15,000 per person (excluding flights), thanks to affordable local transport, street food, and budget accommodations."
        },
        {
            question: "Which countries offer Visa-on-Arrival or E-Visa for Indian citizens?",
            answer: "Many top destinations offer easy visa processes for Indian passport holders. Thailand often runs visa-free campaigns. Indonesia (Bali), Maldives, and Sri Lanka offer straightforward Visa-on-Arrival. The UAE (Dubai) and Singapore provide quick E-Visa processing."
        },
        {
            question: "When is the best time to book international travel packages?",
            answer: "For the best rates, we recommend booking your international holiday packages at least 2 to 3 months in advance. Booking early secures cheaper flight fares, better hotel availability, and allows ample time for visa processing."
        },
        {
            question: "Are your international tour packages customizable?",
            answer: "Yes, 100%. Whether you want a romantic 5-star honeymoon in Bali, an action-packed family vacation in Dubai, or a budget backpacking trip in Thailand, Rudraksh Safar tailors every itinerary to match your specific budget and preferences."
        },
        {
            question: "Do you provide local support during international trips?",
            answer: "Absolutely. When you book a destination package with Rudraksh Safar, you get 24/7 WhatsApp support and on-ground local coordinators in destinations like Thailand, Dubai, and Bali to ensure your trip is completely frictionless."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Best International Travel Destinations | Rudraksh Safar</title>
                <meta name="description" content="Explore top international travel destinations with Rudraksh Safar. Discover expertly crafted holiday packages for Thailand, Dubai, Bali, Singapore, and more." />
                <link rel="preload" as="image" href="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" fetchpriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations" />
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Destinations', path: '/destinations' }]} />
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                        alt="World Travel"
                        className="w-full h-full object-cover opacity-40 dark:opacity-20"
                     fetchpriority="high" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500"
                    >
                        Explore the World
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Curated international experiences designed specifically for Indian families, couples, and explorers.
                    </motion.p>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="container mx-auto px-4 pb-24 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 aspect-[4/5] md:aspect-[3/4]"
                        >
                            <Link to={dest.link} className="block w-full h-full">
                                {/* Background Image with Zoom Effect */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                     loading="lazy" />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-bold mb-3 shadow-lg backdrop-blur-sm">
                                            MOST POPULAR
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 flex items-center gap-3">
                                            {dest.name} <span className="text-3xl">{dest.flag}</span>
                                        </h2>
                                        <p className="text-gray-200 text-sm md:text-base font-medium mb-1 opacity-90">
                                            {dest.tagline}
                                        </p>
                                    </div>

                                    {/* Hidden details that slide up on hover (Desktop) / Always visible (Mobile) */}
                                    <div className="space-y-4 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-gray-300 text-sm line-clamp-2 md:line-clamp-none">
                                            {dest.description}
                                        </p>

                                        {/* Quick Stats Grid */}
                                        <div className="grid grid-cols-3 gap-2 py-2 border-t border-white/10">
                                            <div className="text-center md:text-left">
                                                <span className="block text-xs text-gray-400 uppercase">Popularity</span>
                                                <span className="block text-sm font-bold text-white">{dest.stats.visitors}</span>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <span className="block text-xs text-gray-400 uppercase">Visa</span>
                                                <span className="block text-white text-sm font-bold">{dest.stats.visa}</span>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <span className="block text-xs text-gray-400 uppercase">Flight</span>
                                                <span className="block text-white text-sm font-bold">{dest.stats.flight}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-primary font-bold bg-white/10 backdrop-blur-md p-3 rounded-xl justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <span>Explore {dest.name}</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Coming Soon Card (Placeholder) */}
                    <div className="relative rounded-3xl overflow-hidden border-2 border-dashed border-muted flex flex-col items-center justify-center aspect-[4/5] md:aspect-[3/4] bg-muted/20">
                        <div className="text-center p-6">
                            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-serif font-bold text-muted-foreground">More Destinations</h3>
                            <p className="text-sm text-muted-foreground mt-2">Coming Soon: Maldives, Malaysia, Europe</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive SEO Content Section */}
            <section className="py-16 bg-card border-t border-border">
                <div className="container mx-auto px-4 max-w-4xl text-foreground">
                    <article className="prose prose-slate dark:prose-invert max-w-none">
                        <h2 className="text-3xl font-bold mb-6 text-primary">Explore the World’s Best International Destinations with Rudraksh Safar</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Planning your next big international getaway? You've landed in the right place. At Rudraksh Safar, we specialize in curating seamless, unforgettable international travel experiences tailored specifically for Indian travelers. Whether you are craving the pristine beaches of <strong>Bali</strong>, the futuristic skyscrapers of <strong>Dubai</strong>, the cultural vibrance of <strong>Thailand</strong>, or the immaculate gardens of <strong>Singapore</strong>, our destination hubs hold everything you need to plan the perfect holiday.
                        </p>
                        <p className="text-lg leading-relaxed mb-8">
                            Traveling abroad shouldn’t be stressful. We bridge the gap between your dream vacation and reality by offering transparent pricing, expert visa assistance, and comprehensively planned itineraries. Explore our diverse portfolio of international destinations below and discover why thousands of travelers trust us with their global adventures.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 mt-12 text-foreground">Why Book Your International Destination With Us?</h3>
                        <p className="mb-6">
                            Choosing the right travel partner is crucial when venturing outside your home country. Here is exactly what sets our destination packages apart from the rest:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                                <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                                <h4 className="text-lg font-bold mb-2">End-to-End Visa Assistance</h4>
                                <p className="text-sm text-muted-foreground">We take the headerache out of international travel. From documentation to submission, our Visa experts ensure you have the highest chance of approval for destinations like the UAE, Schengen, and Singapore.</p>
                            </div>
                            <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                                <HeartHandshake className="w-8 h-8 text-primary mb-3" />
                                <h4 className="text-lg font-bold mb-2">100% Customizable Itineraries</h4>
                                <p className="text-sm text-muted-foreground">No two families are the same, and your holiday shouldn't be either. Whether you want to skip temples for theme parks or swap a budget hotel for a luxury beach resort, we customize it all.</p>
                            </div>
                            <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                                <CreditCard className="w-8 h-8 text-primary mb-3" />
                                <h4 className="text-lg font-bold mb-2">Transparent, No-Hidden-Fee Pricing</h4>
                                <p className="text-sm text-muted-foreground">What you see is what you pay. We pride ourselves on offering honest pricing. We clearly outline what is included (flights, transfers, meals) and what is excluded.</p>
                            </div>
                            <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                                <Globe className="w-8 h-8 text-primary mb-3" />
                                <h4 className="text-lg font-bold mb-2">Dedicated On-Ground Support</h4>
                                <p className="text-sm text-muted-foreground">Our commitment doesn't end when you board the plane. We provide 24/7 WhatsApp support and coordinate with trusted local operators in Thailand, Dubai, and Bali to keep you safe.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 mt-12 text-foreground">How To Choose The Right International Destination</h3>
                        <p className="mb-4">
                            Stuck trying to decide where to go? Here is a quick guide to matching your travel intent with the perfect global destination:
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 items-start">
                                <Star className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="text-foreground block">For Budget-Friendly Backpacking & Nightlife: Thailand</strong>
                                    <span className="text-muted-foreground text-sm">If you are traveling with friends or looking for incredible value, Thailand is unmatched. Experience the bustling street markets of Bangkok, the crazy nightlife of Pattaya, or the serene island hopping in Krabi and Phuket.</span>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Star className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="text-foreground block">For Ultimate Luxury & Family Attractions: United Arab Emirates (Dubai)</strong>
                                    <span className="text-muted-foreground text-sm">Dubai is a playground for families. From the towering Burj Khalifa to mammoth theme parks and desert safaris, it offers premium experiences. It's also incredibly safe and just a short flight from India.</span>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Star className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="text-foreground block">For Romantic Honeymoons & Nature retreats: Bali</strong>
                                    <span className="text-muted-foreground text-sm">Bali is the undisputed king of romantic getaways. Enjoy private pool villas in Ubud, spectacular sunsets at Uluwatu, and vibrant beach clubs in Seminyak.</span>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Star className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                                <div>
                                    <strong className="text-foreground block">For Clean, Modern Family Travel: Singapore</strong>
                                    <span className="text-muted-foreground text-sm">Singapore is perfect for a short, hassle-free family vacation. With attractions like Gardens by the Bay, Singapore Zoo, and Universal Studios, it's widely considered the safest destination in Asia for kids.</span>
                                </div>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold mb-4 mt-12 text-foreground">Visa Guidelines for Indian Travelers</h3>
                        <p className="mb-4">
                            Visa policies change frequently, but currently, Indian travelers enjoy fantastic access to Southeast Asia and the Middle East:
                        </p>
                        <div className="bg-muted p-6 rounded-xl mb-8 border border-border">
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li><strong>Thailand:</strong> Frequently offers limited-time Visa-Free entry for Indians. Otherwise, Visa-on-Arrival is easily obtainable.</li>
                                <li><strong>Sri Lanka:</strong> Currently offering Free E-Visas to Indian tourists to boost tourism.</li>
                                <li><strong>Bali (Indonesia):</strong> Simple Visa-on-Arrival at the Denpasar airport.</li>
                                <li><strong>Dubai (UAE):</strong> Requires a pre-approved E-Visa, which takes roughly 3-4 working days. We handle this entirely for you.</li>
                                <li><strong>Singapore:</strong> Requires an E-Visa applied through an authorized agent (like us) before departure.</li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-border">
                                <Link to="/travel-services/visa-assistance" className="text-primary font-bold hover:underline flex items-center gap-1">
                                    Check our Full Visa Guide <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* Comprehensive FAQs Section */}
            <section className="py-16 bg-muted/20 border-t border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FAQSection title="Frequently Asked Questions About International Destinations" faqs={faqs} />
                </div>
            </section>

            {/* INTERNAL HUB LINKS (PHASE 2C) */}
            <section className="py-12 bg-card border-t border-border">
                <div className="container max-w-5xl mx-auto text-center">
                    <h3 className="text-xl font-bold mb-6 text-foreground">Explore More Resources</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/international-packages" className="px-5 py-2.5 border bg-muted/30 rounded-full text-sm hover:bg-muted/80 transition flex items-center gap-2 shadow-sm font-medium">
                            🌍 Search All Packages
                        </Link>
                        <Link to="/budget-tour-packages" className="px-5 py-2.5 border bg-muted/30 rounded-full text-sm hover:bg-muted/80 transition flex items-center gap-2 shadow-sm font-medium">
                            🎒 Budget-Friendly Escapes
                        </Link>
                        <Link to="/international-tours/thailand" className="px-5 py-2.5 border bg-muted/30 rounded-full text-sm hover:bg-muted/80 transition flex items-center gap-2 shadow-sm font-medium">
                            🇹🇭 Explore Thailand Hub
                        </Link>
                        <Link to="/international-tours/dubai" className="px-5 py-2.5 border bg-muted/30 rounded-full text-sm hover:bg-muted/80 transition flex items-center gap-2 shadow-sm font-medium">
                            🇦🇪 Explore Dubai Hub
                        </Link>
                    </div>
                </div>
            </section>

            
            {/* PHASE 2C: INTERNAL LINKING & ENTITY ARCHITECTURE */}
            <section className="py-12 bg-muted/20 border-t border-border mt-12">
                <div className="container max-w-5xl mx-auto">
                    <h3 className="text-xl font-bold mb-6 text-foreground text-center">Popular Worldwide Attractions & Guides</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 1. Destination Pillar Links */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Top Country Guides</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/destinations/thailand" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Complete Thailand Travel Guide</Link></li>
                                <li><Link to="/destinations/uae" className="text-muted-foreground hover:text-primary transition-colors hover:underline">UAE & Dubai City Breaks</Link></li>
                                <li><Link to="/destinations/maldives" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Maldives Honeymoon Resorts</Link></li>
                                <li><Link to="/destinations/bali" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Bali Cultural & Beach Guide</Link></li>
                            </ul>
                        </div>
                        {/* 2. Thailand Attraction Links */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Famous Thai Attractions</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/destinations/thailand/attractions/bangkok/grand-palace" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Tour the Grand Palace</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/safari-world" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Safari World Bangkok Tickets</Link></li>
                                <li><Link to="/destinations/thailand/attractions/koh-samui/ang-thong-marine-park" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Ang Thong Marine Park Trips</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/sea-life" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Sea Life Ocean World Access</Link></li>
                            </ul>
                        </div>
                        {/* 3. Tour Package Linking */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Book Your Holiday</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/international-packages" className="text-muted-foreground hover:text-primary transition-colors hover:underline">All International Tour Packages</Link></li>
                                <li><Link to="/budget-tours" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Affordable Budget Travel Deals</Link></li>
                                <li><Link to="/luxury-tours" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Premium Luxury Honeymoon Packages</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Destinations;
