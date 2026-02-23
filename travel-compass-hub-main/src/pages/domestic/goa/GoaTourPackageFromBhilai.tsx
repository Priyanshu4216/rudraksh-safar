import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import LogisticsSection from '../../../components/LogisticsSection';
import BookingCTA from '../../../components/BookingCTA';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, MapPin, Train, Plane, Hotel, Coffee, AlertTriangle, Info, Star, Users, Briefcase, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoaTourPackageFromBhilai = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Goa Tour Package from Bhilai 2026 | Train, Flight & Family Deals</title>
                <meta
                    name="description"
                    content="The #1 Guide for Goa Trips from Bhilai, Durg & Raipur. Compare Train vs Flight costs, North vs South Goa for families, and get honest local advice. Book with Rudraksh Safar."
                />
                <meta name="keywords" content="goa tour package from bhilai, goa family package from bhilai, goa trip cost from chhattisgarh, durg to goa train package, rudraksh safar goa" />
                <link rel="canonical" href="https://rudrakshsafar.com/domestic-tours/goa-from-bhilai" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Goa Tour Package from Bhilai (Premium & Budget)",
                        "description": "Complete 5-Day Goa itinerary from Bhilai/Durg including train tickets, 3-star hotels, breakfast, and sightseeing.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Rudraksh Safar"
                        },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "8500",
                            "highPrice": "28000",
                            "priceCurrency": "INR",
                            "offerCount": "12"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "142"
                        }
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/domestic-tours/goa" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Goa Guide
                </Link>
            </div>

            {/* HERO SECTION */}
            <HeroSection
                title="Goa Tour Packages from Bhilai"
                subtitle="The Ultimate 2026 Guide: We plan the perfect mix of Party, Peace, and Portuguese Culture for Chhattisgarh travelers."
                backgroundImage="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974"
                ctaText="Get a Custom Quote"
                ctaLink="#pricing"
            />

            {/* INTRO: The Local Context */}
            <ContentSection className="bg-background">
                <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground">
                    <p>
                        Planning a <strong>Goa tour package from Bhilai</strong> is a rite of passage for us in Chhattisgarh. Whether it's college students from BIT Durg planning their first "freedom trip" or families from Nehru Nagar looking for a winter escape, Goa is the #1 destination.
                    </p>
                    <p className="mt-4">
                        But here is the truth: <strong>Goa has changed in 2026.</strong> The taxi mafia is stricter, North Goa is more crowded, and finding a peaceful spot requires local knowledge. At <strong>Rudraksh Safar</strong>, we don't just book tickets; we design <em>smart</em> itineraries. We know which train berth to book on the <em>Gondwana Express</em> and which shack in Calangute serves the best veg food.
                    </p>
                    <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-950/30 border-l-4 border-indigo-600 rounded-r-lg">
                        <p className="font-medium text-indigo-900 dark:text-indigo-200 flex items-start gap-2">
                            <Info className="w-5 h-5 mt-1 shrink-0" />
                            <strong>Why Book with a Local Agent?</strong> We are right here in Bhilai 3. If your train travels are delayed or a hotel tries to downgrade you, you call us (not a chatbot). We fix it instantly.
                        </p>
                    </div>
                </div>
            </ContentSection>

            {/* SECTION: The 2026 Price Guide (High Authority) */}
            <ContentSection title="Real Cost of a Goa Trip from Bhilai (2026)" className="bg-muted/30">
                <p className="mb-6 text-muted-foreground">
                    Stop guessing. Here is the actual breakdown of costs for a 4-Night/5-Day trip starting from Durg/Raipur.
                </p>

                <div className="overflow-x-auto bg-card rounded-xl shadow-sm border border-border">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/50">
                                <TableHead className="font-bold w-[200px]">Expense Name</TableHead>
                                <TableHead className="font-bold">Budget (Student)</TableHead>
                                <TableHead className="font-bold">Comfort (Family/Couple)</TableHead>
                                <TableHead className="font-bold">Luxury (Flight)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Travel (Return)</TableCell>
                                <TableCell>₹1,800 (Sleeper Train)</TableCell>
                                <TableCell>₹4,200 (3AC Train)</TableCell>
                                <TableCell>₹12,000+ (Direct Flight)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Accommodation (4 Nights)</TableCell>
                                <TableCell>₹4,000 (Hostel/Shared)</TableCell>
                                <TableCell>₹10,000 (3-Star Hotel)</TableCell>
                                <TableCell>₹25,000+ (Beach Resort)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Local Transport</TableCell>
                                <TableCell>₹1,500 (Shared Scooty)</TableCell>
                                <TableCell>₹2,500 (Scooty/Taxi)</TableCell>
                                <TableCell>₹8,000 (Private Cab)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Food & Drinks</TableCell>
                                <TableCell>₹4,000 (Shacks/Thali)</TableCell>
                                <TableCell>₹8,000 (Restaurants)</TableCell>
                                <TableCell>₹15,000+ (Fine Dining)</TableCell>
                            </TableRow>
                            <TableRow className="bg-green-50 dark:bg-green-950/30">
                                <TableCell className="font-bold text-green-800 dark:text-green-300">TOTAL ESTIMATE</TableCell>
                                <TableCell className="font-bold text-green-800 dark:text-green-300">~ ₹11,300</TableCell>
                                <TableCell className="font-bold text-green-800 dark:text-green-300">~ ₹24,700</TableCell>
                                <TableCell className="font-bold text-green-800 dark:text-green-300">~ ₹60,000+</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground italic">
                    * Prices per person. Peak season (Dec 20 - Jan 5) rates will be 2x-3x higher.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <Link to="/goa-trip-under-10000-from-bhilai">
                        <Card className="hover:border-primary transition-colors cursor-pointer bg-card">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"><Briefcase className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="font-bold">Student Budget Guide</h4>
                                    <p className="text-sm text-muted-foreground">How to do Goa under ₹10k</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/train-booking-bhilai">
                        <Card className="hover:border-primary transition-colors cursor-pointer bg-card">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300"><Train className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="font-bold">Train Logistics Guide</h4>
                                    <p className="text-sm text-muted-foreground">Durg Junction Schedules & Tips</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </ContentSection>

            {/* SECTION: Logistics (Durg vs Raipur) */}
            <ContentSection title="Getting There: Durg Junction vs Raipur Airport" className="bg-background">
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Train className="w-6 h-6 text-orange-600 dark:text-orange-400" /> By Train (Most Popular)</h3>
                        <p className="text-muted-foreground mb-4">
                            90% of Bhilai travelers prefer the train. It's cost-effective and the route via Western Ghats is scenic.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                                <div>
                                    <strong>Gondwana Express (12410)</strong>
                                    <p className="text-sm text-muted-foreground">Departs Durg: 07:50 AM | Arrives: 05:00 AM (+1) <br />Best for maximizing time in Goa.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                                <div>
                                    <strong>Amaravati Express (18047)</strong>
                                    <p className="text-sm text-muted-foreground">Departs Durg: 10:30 AM | Arrives: 02:25 PM (+1) <br />Good backup option.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-4 bg-orange-50 dark:bg-orange-950/30 p-3 rounded text-sm text-orange-800 dark:text-orange-200 flex gap-2">
                            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                            <span><strong>Note:</strong> Tickets open 120 days early. For December trips, book in August! We provide Tatkal assistance for package bookings.</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" /> By Flight (Fastest)</h3>
                        <p className="text-muted-foreground mb-4">
                            Ideal for short trips (3 days) or luxury travelers. Flights depart from <strong>Swami Vivekananda Airport (Raipur)</strong>.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                                <div>
                                    <strong>Indigo / Air India</strong>
                                    <p className="text-sm text-muted-foreground">Usually 1 stop via Hyderabad or Bangalore. Direct flights are seasonal.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                                <div>
                                    <strong>Airport Transfer</strong>
                                    <p className="text-sm text-muted-foreground">We arrange pickups from your home in Bhilai to Raipur Airport (Approx 1.5 hours).</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </ContentSection>

            {/* SECTION: Family vs Bachelor (The Decision Matrix) */}
            <ContentSection title="North vs South: Where Should You Stay?" className="bg-indigo-50 dark:bg-indigo-950/20">
                <p className="mb-8 text-center max-w-2xl mx-auto text-muted-foreground">
                    Goa is two different worlds. Choosing the wrong side can ruin your trip. Here is our cheat sheet for Bhilai travelers.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Bachelors / Party Crowd */}
                    <Card className="border-t-4 border-purple-500 shadow-md">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-xl font-bold">North Goa (Baga/Anjuna)</CardTitle>
                                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300">The Party Hub</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" /> <strong>Best For:</strong> Bachelors, College Groups (Supela/BIT), First-Timers.</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" /> <strong>Vibe:</strong> High energy, Crowded beaches, Nightclubs (Titos/Mambos).</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" /> <strong>Stay:</strong> Budget Hostels to Luxury Hotels.</li>
                                <li className="flex gap-2 text-red-500 dark:text-red-400"><XCircle className="w-4 h-4" /> <strong>Cons:</strong> Traffic jams, aggressive touts, crowded.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Family / Couples */}
                    <Card className="border-t-4 border-teal-500 shadow-md">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-xl font-bold">South Goa (Colva/Benaulim)</CardTitle>
                                <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 dark:bg-teal-900/30 dark:text-teal-300">The Peace Hub</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" /> <strong>Best For:</strong> Families, Honeymooners, Relaxed travelers.</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" /> <strong>Vibe:</strong> Clean white sands, 5-star Resorts, Quiet dinners.</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" /> <strong>Stay:</strong> Beach Resorts & Homestays.</li>
                                <li className="flex gap-2 text-red-500 dark:text-red-400"><XCircle className="w-4 h-4" /> <strong>Cons:</strong> Far from airport, minimal nightlife.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </ContentSection>

            {/* SECTION: 5-Day Itinerary */}
            <ContentSection title="Perfect 5-Day Itinerary" className="bg-background">
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-300 dark:bg-slate-700 group-[.is-active]:bg-primary text-slate-500 dark:text-slate-400 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <span className="font-bold text-xs">01</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border shadow bg-card">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold">Arrival & Relax</div>
                            </div>
                            <div className="text-muted-foreground text-sm">Reach Madgaon Station. Private transfer to hotel. Rent a scooty. Evening sunset at Calangute Beach followed by dinner at a beach shack.</div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-300 dark:bg-slate-700 group-[.is-active]:bg-primary text-slate-500 dark:text-slate-400 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <span className="font-bold text-xs">02</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border shadow bg-card">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold">North Goa Sightseeing</div>
                            </div>
                            <div className="text-muted-foreground text-sm">Visit Fort Aguada (Dil Chahta Hai point), Sinquerim Beach, and the Light House. Water sports at Candolim. Night market shopping.</div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-300 dark:bg-slate-700 group-[.is-active]:bg-primary text-slate-500 dark:text-slate-400 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <span className="font-bold text-xs">03</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border shadow bg-card">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold">South Goa Day Trip</div>
                            </div>
                            <div className="text-muted-foreground text-sm">Early drive to Old Goa Churches (Review UNESCO sites). Visit Mangueshi Temple. Evening at the serene Colva Beach. Dinner at Martin's Corner.</div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-300 dark:bg-slate-700 group-[.is-active]:bg-primary text-slate-500 dark:text-slate-400 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <span className="font-bold text-xs">04</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border shadow bg-card">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold">Leisure & Departure</div>
                            </div>
                            <div className="text-muted-foreground text-sm">Lazy breakfast. Souvenir shopping at Panjim or Mapusa Market. Return rental bike. Drop to Madgaon Station for evening train.</div>
                        </div>
                    </div>

                </div>
            </ContentSection>

            {/* SECTION: Testimonials */}
            <ContentSection title="What Bhilai Locals Say" className="bg-muted/30">
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-card">
                        <CardContent className="p-6">
                            <div className="flex gap-1 text-yellow-500 mb-2">
                                <Star className="fill-current w-4 h-4" />
                                <Star className="fill-current w-4 h-4" />
                                <Star className="fill-current w-4 h-4" />
                                <Star className="fill-current w-4 h-4" />
                                <Star className="fill-current w-4 h-4" />
                            </div>
                            <p className="italic text-muted-foreground mb-4">"We booked the family package for 6 people. The hotel in Calangute was exactly as shown in photos. Rudraksh Safar even arranged a Jain food restaurant list for my parents."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400">RP</div>
                                <div>
                                    <p className="font-bold">Rahul Parekh</p>
                                    <p className="text-xs text-muted-foreground">Nehru Nagar, Bhilai</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card">
                        <CardContent className="p-6">
                            <div className="flex gap-1 text-yellow-500 mb-2">
                                <Star className="fill-current w-4 h-4" />
                                <Star className="fill-current w-4 h-4" />
                                <Star className="fill-current w-4 h-4" />
                                <Star className="fill-current w-4 h-4" />
                                <Star className="fill-current w-4 h-4" />
                            </div>
                            <p className="italic text-muted-foreground mb-4">"Best rates for students. We compared with online apps, but Rudraksh Safar gave us a better deal including scooter rental. The hostel vibes were amazing."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center font-bold text-green-600 dark:text-green-400">AS</div>
                                <div>
                                    <p className="font-bold">Amit Singh</p>
                                    <p className="text-xs text-muted-foreground">Engineering Student, Supela</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </ContentSection>

            {/* SECTION: Trust / Visit Office */}
            <ContentSection className="bg-background">
                <div className="bg-indigo-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Don't Trust Online? Visit Us.</h2>
                        <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
                            We have a physical office in <strong>Bhilai 3 (In front of Petrol Pump)</strong>. Come, sit with us, check hotel photos on our big screen, and customize your trip over a cup of chai.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/travel-agent-bhilai" className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                                <MapPin className="w-5 h-5 mr-2" /> Locate Our Office
                            </Link>
                            <a href="tel:+919406182174" className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-colors">
                                <Users className="w-5 h-5 mr-2" /> Talk to an Expert
                            </a>
                        </div>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                </div>
            </ContentSection>

            {/* FAQs */}
            <FAQSection
                faqs={[
                    {
                        question: "Why should I book from a Bhilai agent instead of MakeMyTrip?",
                        answer: "Accountability. Online apps have chatbots; we have personal numbers. If your hotel denies check-in or you need medical help in Goa, we answer your call at 2 AM. Plus, our bulk rates often beat online prices."
                    },
                    {
                        question: "What is the best month to visit Goa from Bhilai?",
                        answer: "November to February is peak season (Best weather). For budget travelers, September (end of monsoon) and March offer great discounts with decent weather."
                    },
                    {
                        question: "Is it safe for girls' groups?",
                        answer: "Yes, Goa is one of the safest states. However, we recommend staying in North Goa (Candolim/Calangute) where streets are busy. We also provide trusted drivers for late-night drops."
                    },
                    {
                        question: "Can you arrange a private pool villa?",
                        answer: "Yes, we have exclusive tie-ups with luxury villas in Assagao and Siolim perfectly suited for private parties."
                    }
                ]}
            />

            <BookingCTA
                text="Plan Your Goa Trip Now"
                subText="Fill the form to get a callback from our Bhilai Travel Expert within 10 mins."
            />

        </PageLayout>
    );
};

export default GoaTourPackageFromBhilai;
