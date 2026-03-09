import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Ticket, Info, CheckCircle2, Navigation, Star, ArrowRight } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/seo/FAQSection';

const SafariWorld = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>Safari World Tour | Bangkok Travel Guide for Indians</title>
                <meta name="description" content="Complete guide to Safari World in Bangkok. Facts, timings, tickets, and travel tips for tourists." />
                <link rel="preload" as="image" href="https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2609&auto=format&fit=crop" fetchpriority="high" />
                <link rel="canonical" href="https://rudrakshsafar.com/destinations/thailand/attractions/bangkok/safari-world" />
            </Helmet>

            <Navbar />

            <div className="pt-24 pb-4 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[
                        { label: 'Home', path: '/' },
                        { label: 'Thailand', path: '/international-tours/thailand' },
                        { label: 'Bangkok', path: '/destinations/thailand/bangkok' },
                        { label: 'Safari World Bangkok', path: '/destinations/thailand/attractions/bangkok/safari-world' }
                    ]} />
                </div>
            </div>

            {/* 1. HERO STORY SECTION */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[500px]">
                <img
                    src="https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2609&auto=format&fit=crop"
                    alt="Safari World"
                    className="w-full h-full object-cover"
                 fetchpriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 container mx-auto text-foreground">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Wildlife</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Must Visit</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">Safari World</h1>
                    <p className="text-lg md:text-2xl max-w-2xl text-gray-200 mb-6 font-medium drop-shadow-md">An iconic experience in Bangkok offering unforgettable memories and stunning sights.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-8 space-y-16">

                        {/* 5. PRACTICAL INFORMATION (Quick Info Bar) */}
                        <div className="flex flex-wrap gap-6 p-6 rounded-2xl border border-border bg-card shadow-sm">
                            <div className="flex items-center gap-3 pr-6 border-r border-border/50">
                                <Clock className="w-6 h-6 text-primary" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Duration</span><span className="font-bold text-sm">Half Day</span></div>
                            </div>
                            <div className="flex items-center gap-3 pr-6 border-r border-border/50">
                                <MapPin className="w-6 h-6 text-green-500" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</span><span className="font-bold text-sm">Central Bangkok</span></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Ticket className="w-6 h-6 text-orange-500" />
                                <div><span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">Entry Fee</span><span className="font-bold text-sm">Paid Access</span></div>
                            </div>
                        </div>

                        {/* 2. ABOUT THE ATTRACTION SECTION */}
                        <section className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-serif font-bold text-foreground">Explore Safari World Bangkok: The Ultimate Wildlife Adventure</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                Searching for the perfect family day out in Bangkok? Look no further than <strong>Safari World Bangkok</strong>. Covering a massive 170 acres just outside the bustling city limits, this sprawling wildlife sanctuary is Thailand's greatest open zoo and leisure park. Since its opening in 1988, it has thrilled millions of visitors with its incredible array of wildlife and spectacular entertainment shows.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                What makes Safari World unique is its clever division into two distinct theme parks: the incredible open-air <strong>Safari Park</strong> and the action-packed <strong>Marine Park</strong>. To truly experience all the shows, feedings, and animal encounters, you need to dedicate an entire full day to this attraction.
                            </p>

                            <h3 className="text-2xl font-serif font-bold mt-10 mb-6 text-foreground">Safari Park vs Marine Park: What's the Difference?</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="border border-border p-6 rounded-2xl bg-card shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-primary flex items-center gap-2">🦁 The Safari Park</h4>
                                    <p className="text-muted-foreground mb-4">The Safari Park is an 8-kilometer massive open-air sanctuary where hundreds of animals roam completely free. You do not walk here; you drive through.</p>
                                    <ul className="text-sm text-muted-foreground space-y-2 mb-0 pl-0 list-none">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Drive through in your own car or a Safari coach.</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> See lions and Bengal tigers up close in the predator zone.</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Spot herds of zebras, giraffes, rhinos, and ostriches.</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Takes approximately 45 minutes to complete the drive.</li>
                                    </ul>
                                </div>
                                <div className="border border-border p-6 rounded-2xl bg-card shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-primary flex items-center gap-2">🐬 The Marine Park</h4>
                                    <p className="text-muted-foreground mb-4">The Marine Park is the traditional walking section of the zoo, resembling a massively expanded theme park filled with incredible live animal shows.</p>
                                    <ul className="text-sm text-muted-foreground space-y-2 mb-0 pl-0 list-none">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Features 7 spectacular daily shows.</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Incredible Dolphin and Sea Lion performances.</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Hollywood Cowboy Stunt Show and Spy War Live Action.</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> The famous Giraffe Feeding Terrace.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: Must-See Shows & Feeding Stations */}
                        <section className="bg-muted/10 border border-border rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Can't-Miss Shows & Feeding Experiences</h3>
                            <p className="text-muted-foreground mb-6">The true magic of Safari World lies in its meticulously choreographed shows. <strong>Time management is critical here</strong>, as the shows run on a strict schedule and often overlap. Ensure you arrive at least 15 minutes early to secure good seating.</p>

                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 p-4 rounded-xl border border-border bg-background">
                                    <div className="md:w-1/3">
                                        <img src="https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=800&auto=format&fit=crop" alt="Giraffe Feeding" className="rounded-lg w-full h-48 object-cover"  loading="lazy" />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h4 className="font-bold text-lg mb-2">The Giraffe Terrace (Feeding Station)</h4>
                                        <p className="text-muted-foreground text-sm mb-3">One of the most viral spots in Bangkok! Stand on an elevated wooden canopy and feed bananas and carrots to over 200 giraffes simultaneously. It is an exhilarating and slightly chaotic experience that provides the ultimate selfie moments.</p>
                                        <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded font-bold">Additional Cost: 100 THB per food bucket</span>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 p-4 rounded-xl border border-border bg-background">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg w-full h-48 bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                                            <Star className="w-12 h-12" />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <h4 className="font-bold text-lg mb-2">Dolphin Show</h4>
                                        <p className="text-muted-foreground text-sm mb-3">Witness the incredible intelligence and agility of Pacific Bottlenose dolphins. They perform synchronized flips, interact with their trainers, and splash the front rows! A massive hit with younger children.</p>
                                        <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded font-bold">Usually 1:30 PM (Check daily schedule)</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 4: TRAVEL TIPS */}
                        <section className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-900/50 mt-10">
                            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-2"><Info className="w-6 h-6 text-orange-600" /> Essential Tips for Indian Travelers</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Indian Buffet Lunch:</strong> The park features a designated Indian Buffet Restaurant within the Marine Park catering specifically to Indian dietary preferences (including Jain options on request). We highly recommend booking a ticket package that includes this buffet lunch.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Beat the Heat:</strong> The park is incredibly vast and mostly outdoors in the sweltering Bangkok heat. Bring umbrellas, sunhats, high-SPF sunscreen, and dress in light, breathable cotton clothing. Portable mini-fans are a lifesaver.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0" />
                                    <p className="text-muted-foreground"><strong className="text-foreground">Transportation:</strong> Safari World is about a 45-60 minute drive from central Bangkok. Do not rely on finding a meter taxi for the return trip as they often refuse or demand exorbitant flat rates. Instead, book a private round-trip transfer through your travel provider.</p>
                                </li>
                            </ul>
                        </section>

                        {/* 6. LOCATION & ADDRESS */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold mb-6">Location & How to Reach</h3>
                            <div className="p-6 bg-muted/20 border rounded-xl flex items-start gap-4">
                                <Navigation className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-lg mb-1">Safari World Bangkok, Min Buri</p>
                                    <p className="text-muted-foreground mb-4">Located about 40km northeast of central Bangkok. Given the lack of reliable public transit in that specific suburban area, pre-booking a private van transfer is strongly advised over navigating BTS+Taxi combos.</p>
                                    <Button variant="outline" size="sm">Open in Google Maps</Button>
                                </div>
                            </div>
                        </section>

                        {/* 9. FAQ SECTION WITH SCHEMA */}
                        <div className="mt-12">
                            <FAQSection title="Safari World Bangkok FAQs" faqs={[
                                {
                                    question: "What is the difference between Marine Park and Safari Park?",
                                    answer: "Safari Park is an 8km open-air drive-through sanctuary where you view roaming animals from a vehicle. Marine Park is a traditional walking park featuring 7 live animal shows (dolphins, sea lions, stunt shows) and walking exhibits."
                                },
                                {
                                    question: "Can I bring my own car into the Safari Park drive-through?",
                                    answer: "Yes, you can absolutely drive your own personal or rental car slowly through the Safari Park at no extra vehicle charge. If you don't have a car, you can board the Safari World coaches for a small fee."
                                },
                                {
                                    question: "Are there Indian restaurants inside Safari World?",
                                    answer: "Yes! Because Safari World is incredibly popular with Indian tourists, they have a dedicated Indian Buffet Restaurant located inside the Marine Park. You can book a meal voucher along with your entry ticket."
                                },
                                {
                                    question: "Can we rent strollers or wheelchairs at Safari World?",
                                    answer: "Yes, both strollers and wheelchairs are available for rent at the main entrance of the Marine Park on a first-come, first-served basis for a nominal fee."
                                },
                                {
                                    question: "Do they allow outside food and water?",
                                    answer: "Outside food and drinks (other than a small water bottle) are generally not permitted inside the Marine Park. Bags are checked at the entrance. However, baby food is permitted."
                                }
                            ]} />
                        </div>
                    </div>

                    {/* 10. RELATED ATTRACTIONS & CTA (Sidebar Sidebar) */}
                    <div className="lg:col-span-4 lg:col-start-9">
                        <div className="sticky top-24 space-y-8">

                            <div className="bg-card rounded-2xl border shadow-xl overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-primary to-orange-500" />
                                <div className="p-8">
                                    <h3 className="font-serif font-bold text-2xl mb-3">Plan Your Safari Adventure</h3>
                                    <p className="text-muted-foreground mb-6">Avoid the hassle of arranging taxis back to the city. Get an all-inclusive ticket with private transfers and Indian buffet lunch.</p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Twin Park Combo Tickets</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Private hotel transfers</div>
                                        <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500" /> Guaranteed Indian Buffet</div>
                                    </div>
                                    <Link to="/international-tours/thailand">
                                        <Button className="w-full text-lg py-6" size="lg">Get Tour Customization</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 border rounded-2xl bg-card shadow-sm mt-8">
                                <h4 className="font-serif font-bold text-xl mb-4">More Bangkok Master Pages</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/destinations/thailand/bangkok" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">Explore Bangkok City Guide</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/thailand/attractions/bangkok/sea-life" className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors">
                                            <span className="font-semibold">SEA LIFE Ocean World</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* PHASE 2C: INTERNAL LINKING & ENTITY ARCHITECTURE */}
            <section className="py-12 bg-muted/20 border-t border-border mt-12">
                <div className="container max-w-5xl mx-auto">
                    <h3 className="text-xl font-bold mb-6 text-foreground text-center">More Thailand Travel Guides & Packages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 1. Destination Pillar Links */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Explore Destinations</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/destinations/thailand" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Complete Thailand Travel Guide</Link></li>
                                <li><Link to="/destinations/thailand/bangkok" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Bangkok Attractions & Itineraries</Link></li>
                                <li><Link to="/destinations/thailand/phuket" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Phuket Island Hopping Guide</Link></li>
                                <li><Link to="/destinations/thailand/krabi" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Krabi Beaches & Resorts</Link></li>
                                <li><Link to="/destinations/thailand/koh-samui" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Koh Samui Travel Tips</Link></li>
                            </ul>
                        </div>
                        {/* 2. Attraction Cross-linking (Bangkok) */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Top Bangkok Attractions</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/destinations/thailand/attractions/bangkok/grand-palace" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Tour the Grand Palace</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/safari-world" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Safari World Bangkok Tickets</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/sea-life" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Sea Life Ocean World Access</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/dream-world" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Dream World Theme Park Guide</Link></li>
                                <li><Link to="/destinations/thailand/attractions/bangkok/sky-walk" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Mahanakhon SkyWalk Views</Link></li>
                            </ul>
                        </div>
                        {/* 3. Tour Package Linking */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-primary">Popular Tour Packages</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/international-tours/thailand" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Thailand Holiday Packages</Link></li>
                                <li><Link to="/international-packages" className="text-muted-foreground hover:text-primary transition-colors hover:underline">All International Tour Packages</Link></li>
                                <li><Link to="/budget-tours" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Affordable Budget Travel Deals</Link></li>
                                <li><Link to="/luxury-tours" className="text-muted-foreground hover:text-primary transition-colors hover:underline">Premium Luxury Honeymoon Packages</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
                        <p>Planning your trip? Most international flights land at Suvarnabhumi Airport in Bangkok. We recommend combining a city tour with island excursions to Phuket or Koh Samui for the ultimate Thai experience.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default SafariWorld;
