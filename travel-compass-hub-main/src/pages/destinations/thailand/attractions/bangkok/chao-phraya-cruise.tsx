import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Ticket, Info, CheckCircle2, Navigation, Star, ArrowRight, Anchor, Utensils, Music, Calendar } from 'lucide-react';
import FAQSection from '@/components/seo/FAQSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const ChaoPhrayaCruise = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const faqs = [
        {
            question: "Is Indian vegetarian or Jain food available on the Chao Phraya Cruise?",
            answer: "Yes! Many premium cruise operators specifically cater to Indian tourists by offering dedicated vegetarian and Jain buffets alongside international cuisine. Be sure to request this preference at the time of booking so we can select the right boat for you."
        },
        {
            question: "What is the dress code for the dinner cruise?",
            answer: "Smart casual is the standard dress code. Avoid flip-flops, sleeveless shirts (for men), and overly casual beachwear to maintain the elegant dining atmosphere on board."
        },
        {
            question: "Will I get seasick on the Chao Phraya River?",
            answer: "It is highly unlikely. The Chao Phraya River is very calm, and the large riverboats are engineered for absolute stability. Most guests don't even feel the boat moving while dining."
        },
        {
            question: "Which side of the boat offers the best views?",
            answer: "Both sides offer spectacular views as the boat makes a round trip, passing all major landmarks twice. However, an upper deck or open-air seat provides the best 360-degree photography opportunities without window glare."
        },
        {
            question: "How do I reach the cruise pier from Sukhumvit or Pratunam?",
            answer: "The easiest and most traffic-free way is to take the BTS Skytrain to Saphan Taksin station, from where you can take a quick shuttle boat to Asiatique or ICONSIAM piers. Alternatively, our tour packages include private hotel transfers."
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Chao Phraya Cruise Tour Bangkok | Price, Timings & Indian Food Guide</title>
                <meta name="description" content="Experience the best Chao Phraya River Dinner Cruise in Bangkok. Complete travel guide for Indians: ticket prices, timings, vegetarian food options, and dress code." />
                <meta name="keywords" content="chao phraya cruise, bangkok dinner cruise, chao phraya princess, indian food cruise bangkok, thailand cruise booking, chao phraya river" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/bangkok/chao-phraya-cruise" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TouristAttraction",
                        "name": "Chao Phraya Dinner Cruise",
                        "description": "A luxury riverboat dining experience along the Chao Phraya River in Bangkok, Thailand.",
                        "url": "https://rudrakshsafar.com/destinations/thailand/attractions/bangkok/chao-phraya-cruise",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Chao_Phraya_River_-_Bangkok_-_northwards_-_from_King_Taksin_Bridge_-_2021.jpg/960px-Chao_Phraya_River_-_Bangkok_-_northwards_-_from_King_Taksin_Bridge_-_2021.jpg",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bangkok",
                            "addressCountry": "TH"
                        },
                        "touristType": "Sightseeing & Dining"
                    })}
                </script>
            </Helmet>

            <Navbar />

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[70vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Chao_Phraya_River_-_Bangkok_-_northwards_-_from_King_Taksin_Bridge_-_2021.jpg/960px-Chao_Phraya_River_-_Bangkok_-_northwards_-_from_King_Taksin_Bridge_-_2021.jpg"
                    alt="Chao Phraya River Cruise passing Bangkok landmarks"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-white">
                    <div className="flex justify-start mb-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'International', path: '/international-packages' }, { label: 'Thailand', path: '/international-tours/thailand' }, { label: 'Chao Phraya Cruise', path: '/destinations/thailand/attractions/bangkok/chao-phraya-cruise' }]} />
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <Badge className="bg-primary/90 text-white border-none py-1.5 px-4 uppercase tracking-widest font-bold shadow-lg">Luxury Dining</Badge>
                        <Badge variant="outline" className="border-white/50 bg-white/10 text-white backdrop-blur-md py-1.5 px-4 uppercase tracking-widest font-bold">Must Visit in Bangkok</Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 text-white drop-shadow-xl leading-tight">
                        Chao Phraya Dinner Cruise
                    </h1>
                    <p className="text-lg md:text-2xl max-w-3xl text-gray-200 mb-8 font-medium drop-shadow-md leading-relaxed">
                        Dine under the stars while gently gliding past Bangkok's illuminated temples and neon-lit skyline. A quintessential romantic and family experience.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-8 space-y-16">

                        {/* 5. PRACTICAL INFORMATION (Quick Info Bar) */}
                        <div className="flex flex-wrap md:flex-nowrap gap-6 p-8 rounded-2xl border border-border bg-card shadow-sm align-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary shadow-inner"><Clock className="w-8 h-8" /></div>
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Duration</span><span className="font-bold text-lg text-foreground">2 to 2.5 Hours</span></div>
                            </div>
                            <div className="hidden md:block w-px bg-border/80"></div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-500/10 rounded-full text-green-600 shadow-inner"><MapPin className="w-8 h-8" /></div>
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Pier Locations</span><span className="font-bold text-lg text-foreground">ICONSIAM / Asiatique</span></div>
                            </div>
                            <div className="hidden md:block w-px bg-border/80"></div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-orange-500/10 rounded-full text-orange-600 shadow-inner"><Ticket className="w-8 h-8" /></div>
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Booking</span><span className="font-bold text-lg text-foreground">Pre-booking strictly required</span></div>
                            </div>
                        </div>

                        {/* Table of Contents */}
                        <div className="bg-muted/30 border p-6 rounded-2xl shadow-sm">
                            <h2 className="font-bold text-xl mb-4 text-foreground flex items-center gap-2"><Navigation className="w-5 h-5 text-primary" /> Guide Navigation</h2>
                            <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground font-medium">
                                <li><a href="#what-to-expect" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> 1. The Cruise Experience</a></li>
                                <li><a href="#sightseeing" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> 2. Landmarks You Will See</a></li>
                                <li><a href="#indian-food" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> 3. Indian Food & Entertainment</a></li>
                                <li><a href="#travel-tips" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" /> 4. Tips for Indian Travelers</a></li>
                            </ul>
                        </div>

                        {/* 2. ABOUT THE ATTRACTION & 8. STORYTELLING SECTION */}
                        <section id="what-to-expect" className="scroll-mt-24 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">The Magic of the River of Kings</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                The Chao Phraya River, known as the "River of Kings," is the historic lifeblood of Bangkok. While it bustles with commuter ferries and cargo ships during the day, the river transforms into a spectacular mirror of light as dusk falls. Booking a <strong>Chao Phraya Dinner Cruise</strong> is universally considered one of the most magnificent ways to spend an evening in the Thai capital.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                As you step onto elegant multi-deck vessels—ranging from ultra-modern luxury yacht-styles like the <em>Chao Phraya Princess</em> and <em>White Orchid</em> to traditional restored teakwood sailing barges—you are greeted with welcome drinks. The moment the boat unties from piers like ICONSIAM or Asiatique The Riverfront, a lavish international buffet opens, live bands start playing, and the illuminated cityscape unfolds before your eyes.
                            </p>
                        </section>

                        {/* 3. SIGHTSEEING HIGHLIGHTS */}
                        <section id="sightseeing" className="bg-card border rounded-3xl p-8 shadow-sm scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3"><Star className="w-8 h-8 text-yellow-500 fill-yellow-500" /> Landmarks You Will Pass</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h4 className="font-bold text-xl text-foreground">Wat Arun (Temple of Dawn)</h4>
                                    <p className="text-muted-foreground leading-relaxed">Perhaps the most photographed moment of the cruise. The majestic spires of Wat Arun are spectacularly lit up in golden hues against the night sky, looking ethereal from the water.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-xl text-foreground">The Grand Palace & Wat Phra Kaew</h4>
                                    <p className="text-muted-foreground leading-relaxed">The historical seat of the Thai Kings. Although closed at night, the massive golden stupas of the complex are brilliantly illuminated, projecting power and history.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-xl text-foreground">Rama VIII Bridge</h4>
                                    <p className="text-muted-foreground leading-relaxed">Most cruises use this stunning, asymmetric cable-stayed bridge as their turning point. The architectural marvel is a favorite backdrop for tourist selfies.</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-xl text-foreground">ICONSIAM</h4>
                                    <p className="text-muted-foreground leading-relaxed">Bangkok's mother-of-all-malls. As you sail past, you will see its incredible light and water fountain show dancing on the riverbank.</p>
                                </div>
                            </div>
                        </section>

                        {/* 4. FOOD AND ENTERTAINMENT */}
                        <section id="indian-food" className="border-l-4 border-primary pl-6 py-2 scroll-mt-24">
                            <h2 className="text-3xl font-serif font-bold mb-6">Food, Music, and Vibe</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="p-3 bg-red-100 text-red-600 rounded-full shadow-sm shrink-0"><Utensils className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-foreground">The Grand Buffet (Indian Friendly)</h4>
                                        <p className="text-lg text-muted-foreground leading-relaxed">Most mega-cruises offer an expansive buffet featuring Thai, Western, and Seafood delicacies. <strong>Crucially for Indian tourists</strong>, specific boats (which we partner with) feature dedicated Indian chefs preparing hot curries, naan, and strict Jain food counters completely separated from meats. </p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="p-3 bg-purple-100 text-purple-600 rounded-full shadow-sm shrink-0"><Music className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-foreground">Live Entertainment</h4>
                                        <p className="text-lg text-muted-foreground leading-relaxed">The ambiance is kept electric with live bands playing 80s pop, jazz, and even popular Bollywood tracks to get the crowd dancing on the open-air upper decks by the end of the trip.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 7. TRAVEL TIPS FOR INDIAN TRAVELERS */}
                        <section id="travel-tips" className="bg-orange-50 dark:bg-orange-950/20 p-8 md:p-10 rounded-3xl border border-orange-200 dark:border-orange-900/50 shadow-inner scroll-mt-24">
                            <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3 text-orange-800 dark:text-orange-400">
                                <Info className="w-8 h-8" /> Pro Tips for Your Cruise Night
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-orange-200 dark:bg-orange-800 text-orange-700 dark:text-orange-300 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-lg mb-1">Arrive Early at the Pier</h4>
                                        <p className="text-muted-foreground text-base">Bangkok traffic is legendary, especially around 6 PM. If your cruise departs from ICONSIAM at 7:30 PM, aim to arrive by 6:00 PM. You have to redeem your physical boarding pass at the counter first.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-orange-200 dark:bg-orange-800 text-orange-700 dark:text-orange-300 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-lg mb-1">Request Upper Deck Seating</h4>
                                        <p className="text-muted-foreground text-base">When booking your package with us, always ask to reserve open-air upper deck seats. The air-conditioned lower decks are comfortable, but the upper deck offers the cool river breeze and unobstructed views.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-orange-200 dark:bg-orange-800 text-orange-700 dark:text-orange-300 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-lg mb-1">Include Transfers</h4>
                                        <p className="text-muted-foreground text-base">Booking Grab or taxis after the cruise finishes (around 9:30 PM) alongside 1,000 other passengers is chaotic. Pre-booking a package that includes hotel pick-up and drop-off is highly recommended.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* 8.5 INTERNAL HUB LINKS (PHASE 2C) */}
                        <section className="scroll-mt-24 pt-8 border-t border-border">
                            <div className="max-w-4xl mx-auto">
                                <h3 className="text-xl font-bold mb-6 text-foreground">Explore More Thailand Touring Options</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/international-tours/thailand" className="px-5 py-2.5 border rounded-full text-sm hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                                        🇹🇭 View All Thailand Packages
                                    </Link>
                                    <Link to="/international-packages" className="px-5 py-2.5 border rounded-full text-sm hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                                        🌍 Compare International Trips
                                    </Link>
                                    <Link to="/currency-guide" className="px-5 py-2.5 border rounded-full text-sm hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                                        💸 Asian Currency Guide
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION */}
                        <section className="scroll-mt-24 pt-8 border-t border-border mt-8">
                            <div className="max-w-4xl mx-auto">
                                <FAQSection title="Cruise Booking & Experience FAQs" faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    {/* 10. RELATED ATTRACTIONS & CTA (Sidebar) */}
                    <div className="lg:col-span-4 lg:col-start-9">
                        <div className="sticky top-28 space-y-8">

                            <div className="bg-card rounded-3xl border shadow-2xl overflow-hidden relative">
                                <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-primary via-orange-500 to-red-500" />
                                <div className="p-8 pt-10">
                                    <h3 className="font-serif font-bold text-2xl mb-4 text-foreground">Add to Your Itinerary</h3>
                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Let Rudraksh Safar handle your <strong>cruise tickets, specific meal requests, and hotel transfers.</strong> Avoid the hassle of international card fees.</p>

                                    <ul className="space-y-4 mb-8 text-foreground font-medium">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Lower than online portal pricing</li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Reserved Upper Deck seating</li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Pure Veg & Jain food arrangements</li>
                                    </ul>

                                    <Button className="w-full text-lg py-6 shadow-xl hover:-translate-y-1 transition-transform mb-4" size="lg" asChild>
                                        <a href="https://wa.me/919406182174?text=Hi, I want to book the Chao Phraya Dinner Cruise in Bangkok.">
                                            Get Ticket Pricing
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="w-full text-lg py-6" size="lg" asChild>
                                        <Link to="/international-tours/thailand">View Full Thai Packages</Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="p-8 border rounded-3xl bg-muted/20 shadow-sm">
                                <h4 className="font-serif font-bold text-xl mb-6 text-foreground">Explore More in Bangkok</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/international-tours/thailand" className="group flex items-center justify-between text-lg text-muted-foreground hover:text-primary transition-colors bg-background border p-4 rounded-xl shadow-sm hover:shadow-md">
                                            <span className="font-semibold">Complete Thailand Guide</span>
                                            <ArrowRight className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default ChaoPhrayaCruise;
