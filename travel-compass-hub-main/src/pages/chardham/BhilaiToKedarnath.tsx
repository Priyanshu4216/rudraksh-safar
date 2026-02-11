import React from 'react';
import { bhilaiToKedarnathData } from '@/data/chardham/bhilai-to-kedarnath-data';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    MapPin, Calendar, Clock, IndianRupee, Plane, Train, Car,
    Mountain, Info, CheckCircle2, AlertTriangle, ChevronRight, Phone,
    AlertOctagon, Backpack, ThermometerSnowflake, HeartHandshake
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const BhilaiToKedarnath = () => {
    const {
        meta, hero, featuredSnippets, distanceTable, travelOptions,
        packages, commonMistakes, packingGuide, templeDates, whyChooseUs, faqs
    } = bhilaiToKedarnathData;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar",
        "description": meta.description,
        "url": "https://rudrakshsafar.com/bhilai-to-kedarnath-yatra-package-2026",
        "priceRange": "₹12500-₹48000",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhilai",
            "addressRegion": "Chhattisgarh",
            "addressCountry": "IN"
        }
    };

    return (
        <>
            <SEOHead
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords.join(', ')}
                canonicalUrl="https://rudrakshsafar.com/bhilai-to-kedarnath-yatra-package-2026"
                structuredData={structuredData}
            />

            <Navbar />

            <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">

                {/* HERO */}
                <div className="relative h-[85vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1517427677506-ade074eb1432?auto=format&fit=crop&q=80&w=800"
                            alt="Bhilai to Kedarnath Group Tour"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                    </div>

                    <div className="container relative z-10 text-center text-white pt-20">
                        <div className="inline-flex items-center gap-2 bg-orange-600/90 text-white px-4 py-1.5 rounded-full mb-6 animate-fade-in shadow-lg shadow-orange-900/40">
                            <Calendar className="h-4 w-4" />
                            <span className="font-semibold tracking-wide">Booking Open for {templeDates.year} Season</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl font-serif">
                            {hero.title}
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-100 max-w-3xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
                            {hero.subtitle}
                        </p>

                        <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-4xl mx-auto mb-12 bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
                            {hero.stats.map((stat, idx) => (
                                <div key={idx} className="text-center group">
                                    <p className="text-xs md:text-sm text-orange-200 uppercase tracking-wider mb-1 opacity-80 group-hover:opacity-100 transition-opacity">{stat.label}</p>
                                    <p className="text-lg md:text-3xl font-bold text-white group-hover:scale-105 transition-transform">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg h-14 px-10 shadow-xl shadow-orange-900/30 rounded-full transition-all hover:-translate-y-1">
                                <Link to="/contact">Get Free Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-white/5 hover:bg-white/10 text-white border-white/30 text-lg h-14 px-10 backdrop-blur-sm rounded-full transition-all hover:bg-white/20">
                                <Link to="#packages">View 2026 Packages</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container px-4 md:px-6 py-16 max-w-7xl space-y-24">

                    {/* FEATURED SNIPPETS (Google Answer Box) */}
                    <section className="grid md:grid-cols-2 gap-8 -mt-32 relative z-20">
                        {Object.values(featuredSnippets).map((snippet, idx) => (
                            <Card key={idx} className="border-t-[6px] border-t-orange-500 shadow-2xl bg-white dark:bg-slate-900 hover:shadow-orange-500/10 transition-shadow duration-300">
                                <CardHeader className="pb-3 bg-orange-50/50 dark:bg-slate-800/50">
                                    <CardTitle className="text-xl font-bold flex items-center gap-3 text-slate-800 dark:text-slate-100">
                                        <Info className="h-6 w-6 text-orange-600" /> {snippet.question}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                                        {snippet.answer}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </section>

                    {/* NARRATIVE SECTION: LOGISTICS */}
                    <section id="distance" className="space-y-8">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-serif">
                                Understanding the Logistics
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Traveling from Bhilai to Kedarnath is a multi-leg journey. Unlike a simple flight to Goa, this pilgrimage requires careful planning of trains, road transfers, and trekking. Most pilgrims from Chhattisgarh underestimate the sheer distance involved.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <h3 className="font-semibold text-xl flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-orange-600" /> Bhilai to Kedarnath Route Map
                                </h3>
                                <Badge variant="outline">Updated for 2026</Badge>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                                        <TableHead className="w-[30%]">Leg of Journey</TableHead>
                                        <TableHead>Travel Mode</TableHead>
                                        <TableHead>Distance</TableHead>
                                        <TableHead className="text-right">Est. Time</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {distanceTable.rows.map((row, idx) => (
                                        <TableRow key={idx} className="hover:bg-orange-50/30 transition-colors">
                                            <TableCell className="font-medium text-base">{row.leg}</TableCell>
                                            <TableCell>
                                                <Badge variant="secondary" className="font-normal">{row.mode}</Badge>
                                            </TableCell>
                                            <TableCell className="text-slate-600 font-mono">{row.distance}</TableCell>
                                            <TableCell className="text-right font-mono font-medium">{row.time}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </section>

                    {/* TRAVEL OPTIONS */}
                    <section className="space-y-10">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b pb-4">
                            <div>
                                <h2 className="text-3xl font-bold font-serif">Reaching Kedarnath: 3 Best Ways</h2>
                                <p className="text-slate-600 mt-2">Compare speed vs budget for your pilgrimage.</p>
                            </div>
                            <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0" asChild>
                                <Link to="/contact">Need help choosing? Contact Us <ChevronRight className="h-4 w-4 ml-1" /></Link>
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {travelOptions.map((opt, idx) => (
                                <Card key={idx} className={`relative flex flex-col h-full transition-all duration-300 ${opt.recommended ? 'border-orange-500 shadow-xl scale-105 z-10' : 'hover:shadow-lg'}`}>
                                    {opt.recommended && (
                                        <div className="absolute top-0 inset-x-0 h-1 bg-orange-500 rounded-t-xl" />
                                    )}
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-3 rounded-xl ${opt.recommended ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600'}`}>
                                                {opt.mode.includes('Flight') ? <Plane className="h-6 w-6" /> :
                                                    opt.mode.includes('Train') ? <Train className="h-6 w-6" /> : <Car className="h-6 w-6" />}
                                            </div>
                                            {opt.recommended && <Badge className="bg-orange-600">Bhilai Favorite</Badge>}
                                        </div>
                                        <CardTitle className="text-xl font-bold">{opt.mode}</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{opt.description}</p>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col gap-6">
                                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg text-sm space-y-3 border border-slate-100 dark:border-slate-700">
                                            {opt.details.map((detail, i) => (
                                                <div key={i} className="flex gap-2.5 items-start">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                                                    <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto space-y-4">
                                            <div>
                                                <p className="text-xs font-bold text-green-600 uppercase mb-2 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Pros</p>
                                                <ul className="text-sm space-y-1 pl-1">
                                                    {opt.pros.map((p, i) => <li key={i} className="text-slate-600">{p}</li>)}
                                                </ul>
                                            </div>
                                            <Separator />
                                            <div>
                                                <p className="text-xs font-bold text-red-500 uppercase mb-2 flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> Cons</p>
                                                <ul className="text-sm space-y-1 pl-1">
                                                    {opt.cons.map((c, i) => <li key={i} className="text-slate-600">{c}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* PACKAGES */}
                    <section id="packages" className="space-y-12 py-8 bg-slate-100/50 dark:bg-slate-900/50 -mx-4 md:-mx-6 px-4 md:px-6 rounded-3xl">
                        <div className="text-center max-w-2xl mx-auto">
                            <Badge variant="outline" className="mb-3 border-orange-200 text-orange-700 bg-orange-50">Transparent Pricing 2026</Badge>
                            <h2 className="text-4xl font-bold font-serif mb-4">Choose Your Yatra Package</h2>
                            <p className="text-slate-600">
                                Pricing for Kedarnath fluctuates based on season. Our packages are designed to offer the best value for pilgrims from Chhattisgarh.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {packages.map((pkg, idx) => (
                                <Card key={idx} className={`relative flex flex-col bg-white dark:bg-slate-900 border-none shadow-xl overflow-hidden group ${pkg.popular ? 'ring-2 ring-orange-500' : ''}`}>
                                    {pkg.badge && (
                                        <div className={`absolute top-0 right-0 px-4 py-1 text-xs font-bold uppercase rounded-bl-xl ${pkg.popular ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
                                            {pkg.badge}
                                        </div>
                                    )}
                                    <div className="h-2 w-full bg-gradient-to-r from-orange-400 to-red-500" />
                                    <CardHeader className="text-center pt-8 pb-4">
                                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{pkg.title}</h3>
                                        <div className="flex items-baseline justify-center gap-1 mt-4">
                                            <span className="text-4xl font-extrabold text-orange-600">{pkg.price}</span>
                                            <span className="text-sm text-slate-500">/person</span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-500 mt-2">{pkg.duration}</p>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col gap-8 px-6 pb-8">
                                        <div className="space-y-4 flex-1">
                                            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 border-b pb-2">What's Included</div>
                                            <ul className="space-y-3">
                                                {pkg.inclusions.map((inc, i) => (
                                                    <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                                        <span>{inc}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 border-b pb-2 pt-2">Exclusions</div>
                                            <ul className="space-y-2">
                                                {pkg.exclusions.map((exc, i) => (
                                                    <li key={i} className="flex gap-3 text-xs text-slate-400">
                                                        <AlertTriangle className="h-4 w-4 shrink-0" />
                                                        <span>{exc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 text-center text-xs text-slate-500">
                                            Ideal for: <span className="font-semibold text-slate-700 dark:text-slate-300">{pkg.target}</span>
                                        </div>

                                        <Button className={`w-full py-6 text-lg shadow-lg ${pkg.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-slate-800 hover:bg-slate-900'}`} asChild>
                                            <Link to="/contact">Book Now</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* AUTHORITY SECTION: MISTAKES & PACKING */}
                    <section className="grid md:grid-cols-2 gap-12">
                        {/* Common Mistakes */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <AlertOctagon className="h-8 w-8 text-red-500" />
                                Common Mistakes to Avoid
                            </h2>
                            <p className="text-slate-600">
                                Based on our experience with 500+ pilgrims from Bhilai, here are the top errors to avoid.
                            </p>
                            <div className="space-y-4">
                                {commonMistakes.map((mistake, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                                        <div className="h-8 w-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0 mt-1">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-900 dark:text-red-300">{mistake.title}</h4>
                                            <p className="text-sm text-red-800/80 dark:text-red-400/80 leading-relaxed mt-1">{mistake.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Packing Guide */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Backpack className="h-8 w-8 text-orange-500" />
                                Packing: Bhilai vs Himalayas
                            </h2>
                            <p className="text-slate-600">
                                Bhilai is hot and dry, but Kedarnath is freezing and wet. Do not pack like you are going to a hill station.
                            </p>
                            <Card className="border-2 border-slate-200 dark:border-slate-800">
                                <CardContent className="p-0">
                                    {packingGuide.items.map((cat, idx) => (
                                        <div key={idx} className="border-b last:border-0 p-5">
                                            <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                                                {idx === 0 ? <ThermometerSnowflake className="h-5 w-5 text-blue-500" /> : <CheckCircle2 className="h-5 w-5 text-green-500" />}
                                                {cat.category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {cat.items.map((item, i) => (
                                                    <Badge key={i} variant="secondary" className="px-3 py-1 text-sm bg-slate-100 text-slate-600 border border-slate-200">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* TEMPLE DATES & TRUST */}
                    <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />

                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Temple Opening Dates {templeDates.year}</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                        <Calendar className="h-10 w-10 text-orange-400" />
                                        <div>
                                            <p className="text-xs uppercase text-slate-400 tracking-wider">Opening Date (Tentative)</p>
                                            <p className="text-2xl font-bold">{templeDates.opening}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                        <AlertOctagon className="h-10 w-10 text-red-400" />
                                        <div>
                                            <p className="text-xs uppercase text-slate-400 tracking-wider">Closing Date</p>
                                            <p className="text-2xl font-bold">{templeDates.closing}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-400 italic flex gap-2">
                                        <Info className="h-4 w-4" /> {templeDates.note}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold mb-6">Why Trust Rudraksh Safar?</h2>
                                <div className="grid gap-4">
                                    {whyChooseUs.map((reason, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="h-10 w-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                                <HeartHandshake className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">{reason.title}</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ SECTION */}
                    <section className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                            <p className="text-slate-600">Specific answers for travellers from Durg, Bhilai & Raipur.</p>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, idx) => (
                                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-4 mb-3 bg-white hover:bg-slate-50 transition-colors">
                                    <AccordionTrigger className="text-left font-semibold text-lg py-4 hover:no-underline hover:text-orange-600">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* INTERNAL LINKING CLUSTER */}
                    <section className="grid md:grid-cols-3 gap-6 pt-8 border-t">
                        <div>
                            <h4 className="font-bold mb-3">Explore More</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/chardham-yatra-package" className="text-orange-600 hover:underline">Complete Char Dham Yatra</Link></li>
                                <li><Link to="/kedarnath-temple" className="text-orange-600 hover:underline">Kedarnath Temple History</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-3">Useful Guides</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/chardham-yatra-registration-process" className="text-orange-600 hover:underline">Registration Guide 2026</Link></li>
                                <li><Link to="/what-to-pack-for-chardham-yatra" className="text-orange-600 hover:underline">Detailed Packing List</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-3">Other Departures</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/chardham-yatra-from-raipur" className="text-orange-600 hover:underline">Yatra from Raipur</Link></li>
                                <li><Link to="/chardham-yatra-for-seniors" className="text-orange-600 hover:underline">Senior Citizen Guide</Link></li>
                            </ul>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default BhilaiToKedarnath;
