import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Shield, CheckCircle, Info, Phone, Star, Mountain, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import AnimatedSection from '@/components/AnimatedSection';

const LadakhPillar = () => {
    const heroImage = "/images/ladakh/ladakh-img-12.jpeg"; // Placeholder - high quality Ladakh image

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar",
        "description": "Premium Ladakh Tour Packages from Delhi. Expert-led road trips via Manali and Srinagar. Best price guarantee for 2026 expeditions.",
        "url": "https://rudrakshsafar.com/ladakh-tour-packages-from-delhi",
        "image": heroImage,
        "telephone": "+91-9406182174",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhilai",
            "addressRegion": "Chhattisgarh",
            "addressCountry": "IN"
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Ladakh Tour Packages from Delhi 2026 | Best Road Trip Itinerary & Cost"
                description="Book the ultimate Ladakh Tour Package from Delhi. Complete guide to Manali-Leh & Srinagar-Leh routes, trip cost, itinerary, and bike expeditions. Trusted by 500+ travelers."
                keywords="ladakh tour packages, ladakh trip packages, ladakh tour from delhi, ladakh package cost, best ladakh tour, leh ladakh road trip, ladakh bike trip"
                canonicalUrl="https://rudrakshsafar.com/ladakh-tour-packages-from-delhi"
                ogImage={heroImage}
                structuredData={structuredData}
            />

            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Pangong Lake Ladakh"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
                </div>

                <div className="relative z-10 container text-center px-4">
                    <AnimatedSection animation="fade-up">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold font-medium text-sm mb-6 backdrop-blur-sm">
                            The Land of High Passes • 2026 Expeditions Open
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
                            Ladakh Tour Packages <br className="hidden md:block" /> from Delhi
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
                            Embark on the world's most thrilling road trip. Choose between the scenic Srinagar-Leh highway or the adventurous Manali-Leh route.
                            <strong> Rudraksh Safar</strong> crafts the perfect Ladakh experience for you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-bold h-14 px-8 rounded-full text-lg w-full sm:w-auto">
                                <Link to="/contact">Get Free Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 h-14 px-8 rounded-full text-lg w-full sm:w-auto backdrop-blur-sm">
                                <a href="#packages">View Packages</a>
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            <div className="container py-16 lg:py-24">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Main Content Area - 70% width for SEO depth */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Introduction - Authority Building */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                                Why Ladakh is the Ultimate Adventure Destination
                            </h2>
                            <p>
                                Ladakh isn't just a destination; it's a feeling. Often called "Little Tibet," this high-altitude desert offers landscapes that seem to belong to another planet. From the azure waters of <strong>Pangong Tso</strong> to the white sands of <strong>Nubra Valley</strong>, every turn in Ladakh leaves you breathless—literally and metaphorically.
                            </p>
                            <p>
                                Planning a <strong>Ladakh trip from Delhi</strong> can be overwhelming. The terrain is tough, the altitude is high, and the routes are challenging. That's where <strong>Rudraksh Safar</strong> comes in. We don't just sell packages; we curate expeditions. Whether you are a biker looking to conquer <strong>Khardung La</strong>, a family wanting to witness the magnetic hill, or a solo traveler seeking peace in a monastery, we have the perfect itinerary for you.
                            </p>

                            <div className="bg-secondary/5 border-l-4 border-secondary p-6 my-8 rounded-r-lg">
                                <h3 className="text-xl font-bold text-foreground m-0 mb-2">Why Choose Rudraksh Safar?</h3>
                                <ul className="list-disc pl-5 space-y-2 m-0 text-muted-foreground">
                                    <li><strong>Local Expertise:</strong> We know every curve of the road and every homestay owner.</li>
                                    <li><strong>Safety First:</strong> Oxygen cylinders and basic medical kits in every vehicle.</li>
                                    <li><strong>Honest Pricing:</strong> No hidden costs for permits or inner line fees.</li>
                                    <li><strong>24/7 Support:</strong> Our team in Bhilai and Leh monitors your trip round the clock.</li>
                                </ul>
                            </div>
                        </section>

                        {/* The Two Legendary Routes */}
                        <section id="routes">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                                Choose Your Route: Manali vs Srinagar
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Srinagar Route Card */}
                                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src="/images/ladakh/ladakh-img-3.jpeg"
                                            alt="Srinagar Leh Highway"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-xl font-bold text-white mb-1">Via Srinagar Route</h3>
                                            <p className="text-white/80 text-sm">The Scenic Gateway</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-muted-foreground mb-4 text-sm">
                                            Best for acclimatization. Passes through Sonamarg, Zoji La, Drass, and Kargil. Scenic and gradual ascent.
                                        </p>
                                        <ul className="space-y-2 mb-6 text-sm">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Lower Altitude Gain</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Lush Green Landscapes</li>
                                        </ul>
                                        <Button asChild variant="outline" className="w-full">
                                            <Link to="/ladakh-tour-via-srinagar">View Srinagar Itinerary</Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Manali Route Card */}
                                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src="/images/ladakh/ladakh-img-15.jpeg"
                                            alt="Manali Leh Highway"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-xl font-bold text-white mb-1">Via Manali Route</h3>
                                            <p className="text-white/80 text-sm">The Adventure Highway</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-muted-foreground mb-4 text-sm">
                                            For the thrill-seekers. Crosses Atal Tunnel, Baralacha La, and Tanglang La. Rapid ascent and rugged terrain.
                                        </p>
                                        <ul className="space-y-2 mb-6 text-sm">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500" /> High Adventure</li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500" /> Snow Walls & Desert</li>
                                        </ul>
                                        <Button asChild variant="outline" className="w-full">
                                            <Link to="/ladakh-tour-via-manali">View Manali Itinerary</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <Link to="/manali-vs-srinagar-route-ladakh" className="text-secondary hover:underline font-medium inline-flex items-center gap-2">
                                    Read Detailed Comparison: Manali vs Srinagar Route <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </section>

                        {/* Featured Expedition */}
                        <section id="featured-expedition" className="relative group overflow-hidden rounded-3xl border border-gold/30 bg-black text-white">
                            <div className="absolute inset-0">
                                <img src="/images/ladakh/ladakh-img-1.jpeg" alt="Ultimate Ladakh Expedition" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                            </div>
                            <div className="relative p-8 md:p-12 z-10">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-red-600 font-bold text-xs uppercase tracking-wider mb-4 animate-pulse">
                                    Rare Expedition
                                </div>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 drop-shadow-md">
                                    The Ultimate <br />Manali-Leh-Srinagar Circuit
                                </h2>
                                <p className="text-lg text-gray-300 max-w-xl mb-6">
                                    13 Days of pure transformation. Conquer <strong>Umling La (19,300 ft)</strong>, Hanle Dark Sky Reserve, and the complete trans-Himalayan loop.
                                </p>
                                <div className="flex flex-wrap gap-4 mb-8">
                                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded border border-white/20 text-sm">13 Days</span>
                                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded border border-white/20 text-sm">Full Circuit</span>
                                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded border border-white/20 text-sm">Hanle & Umling La</span>
                                </div>
                                <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90 font-bold px-8">
                                    <Link to="/ladakh-ultimate-expedition">View Full Itinerary</Link>
                                </Button>
                            </div>
                        </section>

                        {/* Packages Section */}
                        <section id="packages">
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Popular Ladakh Tour Packages 2026</h2>
                            <div className="space-y-4">
                                {/* Package List Item 1 */}
                                <div className="flex flex-col md:flex-row gap-4 bg-muted/30 p-4 rounded-xl border border-border hover:border-gold/30 transition-all">
                                    <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                                        <img src="/images/ladakh/ladakh-img-2.jpeg" className="w-full h-full object-cover" alt="Ladakh Bike Trip" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground">Ultimate Ladakh Bike Expedition</h3>
                                                <p className="text-sm text-muted-foreground mt-1">Delhi - Manali - Leh - Srinagar - Delhi</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-2xl font-bold text-gold">₹35,500</span>
                                                <span className="text-xs text-muted-foreground">per person</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 Days</span>
                                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 5 Passes</span>
                                            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-gold" /> Best Seller</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center gap-2 mt-4 md:mt-0 md:w-32">
                                        <Button className="w-full bg-gold text-black hover:bg-gold/90">Book Now</Button>
                                        <Button variant="ghost" className="w-full h-8 text-xs">View Details</Button>
                                    </div>
                                </div>

                                {/* Package List Item 2 */}
                                <div className="flex flex-col md:flex-row gap-4 bg-muted/30 p-4 rounded-xl border border-border hover:border-gold/30 transition-all">
                                    <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                                        <img src="/images/ladakh/ladakh-img-11.jpeg" className="w-full h-full object-cover" alt="Ladakh Family Tour" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground">Ladakh Family Flight Package</h3>
                                                <p className="text-sm text-muted-foreground mt-1">Delhi - Leh (Flight) - Nubra - Pangong - Leh</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-2xl font-bold text-gold">₹28,999</span>
                                                <span className="text-xs text-muted-foreground">per person + Flight</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 Days</span>
                                            <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Comfortable</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center gap-2 mt-4 md:mt-0 md:w-32">
                                        <Button className="w-full bg-gold text-black hover:bg-gold/90">Book Now</Button>
                                        <Button variant="ghost" className="w-full h-8 text-xs">View Details</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                                <h3 className="font-bold text-lg mb-2">Want to customize your Ladakh trip?</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    Whether you want a budget trip or a luxury glamping experience, we customize packages from Bhilai, Raipur, and Delhi.
                                </p>
                                <Button variant="default" className="gap-2">
                                    <Phone className="w-4 h-4" /> Call Expert: +91-9406182174
                                </Button>
                            </div>
                        </section>

                        {/* Essential Guides Grid */}
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Essential Ladakh Travel Guides</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <Link to="/best-time-to-visit-ladakh" className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all">
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <Calendar className="w-8 h-8 text-gold" />
                                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                                        </div>
                                        <h3 className="font-bold text-lg group-hover:text-gold transition-colors">Best Time to Visit</h3>
                                        <p className="text-sm text-muted-foreground mt-2">Detailed month-by-month guide. When to see snow, when roads open.</p>
                                    </div>
                                </Link>
                                <Link to="/ladakh-trip-cost" className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all">
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <Info className="w-8 h-8 text-gold" />
                                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                                        </div>
                                        <h3 className="font-bold text-lg group-hover:text-gold transition-colors">Ladakh Trip Cost</h3>
                                        <p className="text-sm text-muted-foreground mt-2">Breakdown of fuel, permits, food, and stay costs for 2026.</p>
                                    </div>
                                </Link>
                                <Link to="/ladakh-travel-safety-tips" className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all">
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <Shield className="w-8 h-8 text-gold" />
                                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                                        </div>
                                        <h3 className="font-bold text-lg group-hover:text-gold transition-colors">Safety & AMS Guide</h3>
                                        <p className="text-sm text-muted-foreground mt-2">How to handle altitude sickness and essential health tips.</p>
                                    </div>
                                </Link>
                                <Link to="/ladakh-packing-checklist" className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all">
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <CheckCircle className="w-8 h-8 text-gold" />
                                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                                        </div>
                                        <h3 className="font-bold text-lg group-hover:text-gold transition-colors">Packing Checklist</h3>
                                        <p className="text-sm text-muted-foreground mt-2">Downloadable list of clothes, gadgets, and medicines.</p>
                                    </div>
                                </Link>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar - Local & Trust Signals - 30% width */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-24 space-y-8">

                            {/* Book Now Card */}
                            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
                                <h3 className="text-xl font-bold mb-4">Plan Your Ladakh Trip</h3>
                                <p className="text-sm text-muted-foreground mb-6">Get a customized itinerary from Bhilai/Raipur expert agents.</p>
                                <form className="space-y-4">
                                    <input type="text" placeholder="Your Name" className="w-full bg-background border border-border rounded-md p-3 text-sm focus:border-gold/50 outline-none" />
                                    <input type="tel" placeholder="Mobile Number" className="w-full bg-background border border-border rounded-md p-3 text-sm focus:border-gold/50 outline-none" />
                                    <select className="w-full bg-background border border-border rounded-md p-3 text-sm focus:border-gold/50 outline-none text-muted-foreground">
                                        <option>Travel Date (Month)</option>
                                        <option>May 2026</option>
                                        <option>June 2026</option>
                                        <option>July 2026</option>
                                    </select>
                                    <Button className="w-full bg-gold text-black font-bold hover:bg-gold/90">Request Callback</Button>
                                </form>
                            </div>

                            {/* Local Targeting Box */}
                            <div className="bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 rounded-2xl p-6">
                                <h4 className="font-bold text-fg mb-2 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-secondary" /> From Chhattisgarh?
                                </h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    We organize special group departures from <strong>Raipur, Bhilai, and Durg</strong>. Join our community of travelers!
                                </p>
                                <Link to="/ladakh-tour-packages-from-raipur" className="text-sm text-secondary font-medium hover:underline">
                                    View Raipur Departures &rarr;
                                </Link>
                            </div>

                            {/* Popular Attractions Mini-List */}
                            <div className="bg-card border border-border rounded-2xl p-6">
                                <h4 className="font-bold text-fg mb-4">Must Visit Places</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link to="/places-to-visit-in-ladakh/pangong-lake" className="flex items-center gap-3 group">
                                            <img src="/images/ladakh/ladakh-img-4.jpeg" className="w-12 h-12 rounded-lg object-cover" alt="Pangong" />
                                            <div>
                                                <p className="text-sm font-medium group-hover:text-gold transition-colors">Pangong Lake</p>
                                                <p className="text-xs text-muted-foreground">Changing colors</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/places-to-visit-in-ladakh/nubra-valley" className="flex items-center gap-3 group">
                                            <img src="/images/ladakh/ladakh-img-5.jpeg" className="w-12 h-12 rounded-lg object-cover" alt="Nubra" />
                                            <div>
                                                <p className="text-sm font-medium group-hover:text-gold transition-colors">Nubra Valley</p>
                                                <p className="text-xs text-muted-foreground">Double hump camel</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/places-to-visit-in-ladakh/umling-la-pass" className="flex items-center gap-3 group">
                                            <img src="/images/ladakh/ladakh-img-6.jpeg" className="w-12 h-12 rounded-lg object-cover" alt="Umling La" />
                                            <div>
                                                <p className="text-sm font-medium group-hover:text-gold transition-colors">Umling La</p>
                                                <p className="text-xs text-muted-foreground">Highest pass</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

                {/* FAQ Section - Schema Optimized (Placeholder for full component) */}
                <section className="mt-20 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-center mb-10">Frequently Asked Questions</h2>
                    <div className="grid gap-4">
                        {/* Question 1 */}
                        <div className="bg-muted/20 border border-border rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2">What is the best time to visit Ladakh?</h3>
                            <p className="text-muted-foreground">The best time to visit Ladakh is from <strong>May to September</strong>. During these months, the roads (Manali-Leh and Srinagar-Leh) are open, and the weather is pleasant with daytime temperatures ranging from 15°C to 25°C.</p>
                        </div>
                        {/* Question 2 */}
                        <div className="bg-muted/20 border border-border rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2">How many days are required for a Ladakh trip?</h3>
                            <p className="text-muted-foreground">A minimum of <strong>7 to 10 days</strong> is recommended for a comfortable Ladakh trip. This allows sufficient time for acclimatization (critical for safety) and visiting key attractions like Leh, Nubra Valley, and Pangong Lake without rushing.</p>
                        </div>
                        {/* Question 3 */}
                        <div className="bg-muted/20 border border-border rounded-lg p-6">
                            <h3 className="font-bold text-lg mb-2">Is a permit required to visit Ladakh?</h3>
                            <p className="text-muted-foreground">Yes, an <strong>Inner Line Permit (ILP)</strong> is required for domestic tourists to visit protected areas like Nubra Valley, Pangong Tso, Tso Moriri, and Hanle. Foreign nationals need a Protected Area Permit (PAP). Rudraksh Safar arranges all these permits for you.</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-muted-foreground">Have more questions?</p>
                        <Link to="/ladakh-travel-guide" className="text-gold hover:underline font-medium">Read our Complete Ladakh Travel FAQ &rarr;</Link>
                    </div>
                </section>

            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default LadakhPillar;
