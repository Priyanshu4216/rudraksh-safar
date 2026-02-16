import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, CheckCircle, XCircle, Mountain, Flag, Star, Shield, Waves, Tent, Sun, ArrowRight, AlertTriangle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import LadakhFAQ from '@/components/ladakh/LadakhFAQ';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const itinerary = [
    {
        day: 1,
        title: "Delhi to Bhuntar/Kasol (Overnight Volvo)",
        desc: "Assemble at Delhi boarding point. Overnight luxury Volvo journey (11-13 hours) ascending from plains to mountains.",
        highlights: ["Overnight Volvo Journey", "Dinner halt en route"]
    },
    {
        day: 2,
        title: "Kasol • Manikaran • Adventure Activities",
        desc: "Arrival in Kasol. Explore Parvati Valley, Manikaran hot springs. Enjoy River Rafting (14km) and High-Fly Paragliding (~12,000 ft). DJ Night & Bonfire.",
        highlights: ["River Rafting", "Paragliding", "Manikaran Sahib", "DJ Night & Bonfire"]
    },
    {
        day: 3,
        title: "Manali to Jispa/Sarchu (The Highway Begins)",
        desc: "Drive through Atal Tunnel and Lahaul Valley. Pass Baralacha La (~16,600 ft), Suraj Tal, and Deepak Tal. Enter the rugged high Himalayas.",
        highlights: ["Atal Tunnel", "Baralacha La", "Suraj Tal", "Overnight in Camps"]
    },
    {
        day: 4,
        title: "Jispa/Sarchu to Tso Moriri (Changthang Entry)",
        desc: "Drive through Gata Loops (21 hairpins), Nakeela & Lachung La passes, and the vast More Plains. Arrival at the pristine Tso Moriri Lake.",
        highlights: ["Gata Loops", "More Plains", "Tanglang La", "Tso Moriri Lake"]
    },
    {
        day: 5,
        title: "Tso Moriri to Hanle (Dark Sky Reserve)",
        desc: "Journey to one of India's most remote villages, Hanle. Visit the Hanle Monastery and the world's highest Astronomical Observatory.",
        highlights: ["Hanle Village", "Astronomical Observatory", "Remote Frontier"]
    },
    {
        day: 6,
        title: "Hanle to Umling La & Return",
        desc: "Excursion to Umling La Pass (~19,300 ft) - The World's Highest Motorable Road. A feat for every traveler.",
        highlights: ["Umling La Pass (World's Highest)", "Extreme Altitude Experience"]
    },
    {
        day: 7,
        title: "Hanle to Pangong Lake (Via Man/Merak)",
        desc: "Drive through the Changthang Wildlife Sanctuary to reach the legendary Pangong Tso. Stay near the lake famous for changing colors.",
        highlights: ["Pangong Lake", "Changthang Sanctuary", "Lakeside Stay"]
    },
    {
        day: 8,
        title: "Pangong to Nubra Valley via Shyok",
        desc: "Travel along the Shyok River route. Visit Diskit Monastery and ride the double-humped Bactrian camels at Hunder Sand Dunes.",
        highlights: ["Shyok River", "Diskit Monastery", "Hunder Sand Dunes", "Camel Ride"]
    },
    {
        day: 9,
        title: "Nubra Valley to Leh via Khardung La",
        desc: "Conquer Khardung La Pass (~18,380 ft), one of the world's highest passes. Arrive in Leh City. Evening at leisure.",
        highlights: ["Khardung La Pass", "Leh Arrival"]
    },
    {
        day: 10,
        title: "Leh to Kargil (War Memorial & Moonland)",
        desc: "Drive on Srinagar-Leh highway. Visit Hall of Fame, Magnetic Hill, Sangam, and Lamayuru Moonland. Overnight in Kargil.",
        highlights: ["Magnetic Hill", "Sangam", "Lamayuru Moonland", "Hall of Fame"]
    },
    {
        day: 11,
        title: "Kargil to Srinagar (The Valley of Kashmir)",
        desc: "Pay tribute at Kargil War Memorial (Drass). Cross Zoji La Pass and descend into the lush Sonmarg valley. Arrive in Srinagar.",
        highlights: ["Kargil War Memorial", "Drass (2nd Coldest Inhabited Place)", "Zoji La", "Sonmarg"]
    },
    {
        day: 12,
        title: "Srinagar to Jammu/Delhi",
        desc: "Depart from Srinagar, driving through the scenic Kashmir Valley and Jawahar Tunnel towards Jammu/Delhi.",
        highlights: ["Kashmir Valley Vistas", "Return Journey"]
    },
    {
        day: 13,
        title: "Arrival in Delhi",
        desc: "Tour concludes in Delhi with memories of completing one of the toughest and most beautiful circuits in the world.",
        highlights: ["Trip Completion"]
    }
];

const inclusions = [
    "High-fly paragliding (approx. 12,000 ft)",
    "River rafting (14 km) with pickup & drop",
    "Kasol sightseeing & Manikaran Sahib",
    "Accommodation in hotels/camps/homestays",
    "Buffet Breakfast & Dinner (from Day 2)",
    "411 CC Himalayan Bike (for bikers)",
    "Fuel, Mechanic, Backup Vehicle, Road Captain",
    "SUV/Tempo Traveller for non-bikers",
    "Oxygen Cylinder & First Aid Kit",
    "Bonfire & Music (subject to weather)",
    "All Permits (ILP), Tolls, Wildlife Fees",
    "Delhi-Manali Volvo Ticket"
];

const exclusions = [
    "5% GST",
    "Lunch/Meals during transit",
    "Personal expenses (snacks, laundry)",
    "Entry fees to monuments/monasteries",
    "Airfare/Train fare to Delhi",
    "Medical evacuation/Insurance",
    "Tips for staff",
    "Anything not mentioned in inclusions"
];

const LadakhUltimateExpedition = () => {
    const heroImage = "https://plus.unsplash.com/premium_photo-1697729576092-3f0abf41aa1c?q=80&w=1170&auto=format&fit=crop"; // Umling La/High Pass feel

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "The Ultimate Ladakh Expedition: Delhi to Delhi Circuit",
        "description": "13 Days Trans-Himalayan Circuit covering Manali, Leh, Hanle, Umling La, Pangong, Nubra, Kargil, and Srinagar. The most complete Ladakh itinerary.",
        "itinerary": {
            "@type": "ItemList",
            "itemListElement": itinerary.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.title,
                "description": item.desc
            }))
        },
        "provider": {
            "@type": "TravelAgency",
            "name": "Rudraksh Safar"
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
            <SEOHead
                title="Ultimate Ladakh Expedition 2026 | 13 Days Hanle & Umling La Circuit"
                description="The rarest Ladakh itinerary. 13 Days Delhi-Manali-Leh-Srinagar-Delhi. Covers Umling La (19,300ft), Hanle, Tso Moriri, and Kargil. Book the ultimate adventure."
                keywords="ladakh ultimate itinerary, 13 days ladakh circuit, manali to srinagar via ladakh, umling la bike trip, hanle tso moriri package, delhi to delhi ladakh expedition"
                canonicalUrl="https://rudrakshsafar.com/ladakh-ultimate-expedition"
                structuredData={structuredData}
            />

            <Navbar />

            {/* Immersive Hero Section */}
            <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt="Ultimate Ladakh Expedition" className="w-full h-full object-cover scale-105 animate-slow-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
                </div>

                <div className="relative z-10 container text-center px-4 pt-20 pb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/50 text-gold font-bold text-xs md:text-sm mb-8 animate-fade-in-up backdrop-blur-md">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Signature Expedition 2026</span>
                        <Star className="w-4 h-4 fill-current" />
                    </div>

                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-tight animate-fade-in-up delay-100">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">ULTIMATE</span> <br />
                        CIRCUIT
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                        Delhi <span className="text-gold">•</span> Manali <span className="text-gold">•</span> Umling La <span className="text-gold">•</span> Srinagar <span className="text-gold">•</span> Delhi
                    </p>


                </div>

                {/* Floating Stats Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-lg border-t border-border hidden md:block">
                    <div className="container flex justify-between items-center py-6">
                        <div className="flex items-center gap-12 mx-auto">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gold/10 rounded-full text-gold"><Clock className="w-6 h-6" /></div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Duration</p>
                                    <p className="text-xl font-bold text-foreground">13 Days</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gold/10 rounded-full text-gold"><Mountain className="w-6 h-6" /></div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Max Altitude</p>
                                    <p className="text-xl font-bold text-foreground">19,300 ft</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gold/10 rounded-full text-gold"><MapPin className="w-6 h-6" /></div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Start/End</p>
                                    <p className="text-xl font-bold text-foreground">Delhi / Delhi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-20">

                {/* Why This Expedition Is Rare */}
                <div className="max-w-6xl mx-auto mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">The Rarest of the Rare</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Why This Expedition is Rare</h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Most tours only cover Leh, Nubra, and Pangong. <br className="hidden md:block" />
                            This expedition goes far beyond — covering the complete <span className="text-foreground font-bold">Manali–Leh–Kargil–Srinagar circuit</span>, including remote regions few agencies operate in.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Mountain, title: "Umling La", desc: "One of the highest motorable roads on Earth" },
                            { icon: Waves, title: "Tso Moriri", desc: "The hidden lake of Ladakh" },
                            { icon: Star, title: "Hanle", desc: "India’s most remote frontier village" },
                            { icon: Waves, title: "Pangong Lake", desc: "The legendary Himalayan jewel" },
                            { icon: Sun, title: "Nubra Valley", desc: "Desert among snow peaks" },
                            { icon: Mountain, title: "Khardung La", desc: "Iconic high mountain pass" },
                            { icon: Flag, title: "Kargil War Memorial", desc: "Land of heroes" }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-gold/5">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors">{item.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Complete Route */}
                <div className="mb-32">
                    <div className="bg-card p-8 md:p-12 rounded-3xl border border-border relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                        <h3 className="text-2xl font-serif font-bold text-center mb-8 text-foreground">Complete Route</h3>
                        <div className="flex flex-wrap justify-center items-center gap-3 text-sm md:text-base text-muted-foreground">
                            {[
                                "Delhi", "Bhuntar/Kasol", "Manali", "Atal Tunnel", "Jispa", "Deepak Tal", "Suraj Tal", "Zing Zing Bar", "Baralacha La", "Sarchu", "Gata Loops", "Nakeela Pass", "Pang", "More Plains", "Lachung La", "Tanglang La", "Rumtse", "Thikshey", "Shey", "Leh", "Khardung La", "Hunder", "Nubra Valley", "Shyok River", "Pangong Lake", "Shanti Stupa", "Hall of Fame", "Pathar Sahib", "Magnetic Hill", "Sangam", "Lamayuru", "Moonland", "Namikala", "Fotula", "Kargil", "Drass", "Kargil War Memorial", "Zoji La", "Sonmarg", "Srinagar", "Jammu", "Delhi"
                            ].map((place, index, arr) => (
                                <React.Fragment key={index}>
                                    <span className={`font-medium ${["Delhi", "Manali", "Leh", "Srinagar", "Kargil"].includes(place) ? "text-gold font-bold" : "text-muted-foreground"}`}>
                                        {place}
                                    </span>
                                    {index !== arr.length - 1 && (
                                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visual Itinerary */}
                <section className="mb-32 max-w-5xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold mb-16 text-center text-foreground">Journey Timeline</h2>
                    <div className="space-y-12">
                        {itinerary.map((item, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row gap-8 group">
                                {/* Vertical Line */}
                                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 group-last:bottom-auto group-last:h-full" />

                                {/* Day Marker */}
                                <div className="absolute left-0 md:left-1/2 w-16 h-16 rounded-full bg-background border-2 border-gold flex items-center justify-center z-10 md:-translate-x-1/2 font-bold text-gold text-xl shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                                    D{item.day}
                                </div>

                                {/* Content Card */}
                                <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}>
                                    <div className="bg-card p-6 rounded-2xl border border-border hover:border-gold/30 transition-all shadow-md">
                                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            {item.highlights.map((h, i) => (
                                                <span key={i} className="text-[10px] uppercase font-bold tracking-wider bg-gold/10 text-gold px-2 py-1 rounded border border-gold/20">{h}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* What Makes This Journey Unforgettable */}
                <section className="mb-32 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">Experience The Extraordinary</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">What Makes This Journey Unforgettable</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Ride across world-famous high-altitude highways",
                            "Experience multiple terrains in one expedition",
                            "Explore remote villages and monasteries",
                            "Witness dramatic landscape transitions",
                            "Feel the thrill of extreme altitude travel",
                            "Create stories few people can tell"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-gold/20 transition-all">
                                <div className="p-2 bg-gold/10 rounded-full text-gold shrink-0">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <p className="text-muted-foreground font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gold text-xl font-serif italic mt-12">"Not just a trip — a transformation."</p>
                </section>

                {/* Why Travel With Rudraksh Safar */}
                <section className="mb-32 relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-16 text-center max-w-6xl mx-auto">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518182170b46-07e606574f85?q=80&w=2070')] bg-cover bg-center opacity-10" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Why Travel With Rudraksh Safar</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {[
                                { title: "Carefully Planned Route", desc: "Optimized for acclimitization & experience" },
                                { title: "Verified Partners", desc: "Trusted hotels, camps & operators" },
                                { title: "Expedition Coordination", desc: "Seamless logistics in remote terrains" },
                                { title: "Dedicated Support", desc: "24/7 assistance throughout the journey" }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-background/80 border border-border backdrop-blur-sm">
                                    <h4 className="text-gold font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-2xl text-foreground font-serif">
                            We don’t sell packages. <br className="md:hidden" />
                            <span className="text-gold">We design life-changing journeys.</span>
                        </p>
                        <p className="text-muted-foreground mt-4 uppercase tracking-widest text-xs">Your adventure — our responsibility</p>
                    </div>
                </section>

                {/* Inclusions & Exclusions (Refined) */}
                <section className="mb-32 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-card p-8 rounded-3xl border border-green-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-green-500"><CheckCircle className="w-32 h-32" /></div>
                        <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3 text-green-500">
                            What's Included
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            {inclusions.map((item, i) => (
                                <li key={i} className="flex gap-4 text-sm text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-card p-8 rounded-3xl border border-red-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-red-500"><XCircle className="w-32 h-32" /></div>
                        <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3 text-red-500">
                            What's Excluded
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            {exclusions.map((item, i) => (
                                <li key={i} className="flex gap-4 text-sm text-muted-foreground">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Who Should Not Join - Warning */}
                <section className="mb-32 max-w-4xl mx-auto">
                    <div className="bg-red-500/5 dark:bg-red-950/30 border border-red-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-6 font-bold">
                            <AlertTriangle className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-foreground mb-8">Who Should NOT Join</h3>
                        <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                            {[
                                "Travelers seeking luxury vacations",
                                "Those uncomfortable with long journeys",
                                "Individuals with serious medical conditions",
                                "People unwilling to adapt to remote conditions"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-muted-foreground">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-red-500 mt-8 font-medium uppercase tracking-wider text-sm">
                            This is an expedition, not a leisure tour.
                        </p>
                    </div>
                </section>

                {/* Price Reveal CTA (Premium) */}
                <div className="relative py-24 px-8 text-center rounded-3xl overflow-hidden border border-gold/30">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548564115-4fa153492716?q=80&w=2069')] bg-cover bg-center opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="inline-block p-4 rounded-full bg-gold/10 text-gold mb-8 animate-bounce">
                            <Star className="w-12 h-12 fill-current" />
                        </div>
                        <h2 className="text-5xl font-serif font-bold text-foreground mb-6">Price Drop Coming Soon</h2>
                        <p className="text-xl text-muted-foreground mb-10">
                            We are finalizing the best possible rates for the 2026 season. <br />
                            Slots will be limited to 15 per batch.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button className="bg-gold text-black hover:bg-white font-bold h-14 px-10 text-lg rounded-full">
                                Notify Me First
                            </Button>
                            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/10 h-14 px-10 text-lg rounded-full">
                                <Link to="/contact">Contact Founder</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-32">
                    <LadakhFAQ />
                </div>

            </div>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-border p-4 md:hidden">
                <Button className="w-full bg-gold text-black font-bold h-12 rounded-full">
                    Download Itinerary PDF
                </Button>
            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default LadakhUltimateExpedition;
