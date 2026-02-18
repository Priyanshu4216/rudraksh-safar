import { Helmet } from 'react-helmet-async';
import { SummerPackage, SUMMER_PACKAGES } from '@/data/summer2026';
import SummerPackages from '@/components/home-redesign/SummerPackages';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { MapPin, Clock, Calendar, ShieldCheck, CheckCircle2, XCircle, Info, Phone, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

interface PremiumDestinationTemplateProps {
    data: SummerPackage;
}

const PremiumDestinationTemplate = ({ data }: PremiumDestinationTemplateProps) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data.id]);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": data.title,
        "description": data.overview,
        "image": data.image,
        "offers": {
            "@type": "Offer",
            "price": data.price.replace(/[^0-9]/g, ''),
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "124"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans">
            <Helmet>
                <title>{`${data.title} Package 2026 | ${data.subtitle} | Rudraksh Safar`}</title>
                <meta name="description" content={`${data.overview} Book ${data.title} from Bhilai & Raipur. ${data.duration} tour with best hotels & meals.`} />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
                    </div>

                    <div className="container relative z-10 px-4 text-center">
                        <div className="inline-flex items-center gap-2 mb-4 animate-fade-in">
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {data.tag}
                            </span>
                            <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {data.duration}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 drop-shadow-2xl animate-fade-up">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 font-serif italic mb-8 animate-fade-up delay-100">
                            — {data.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-200">
                            <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/30">
                                <Phone className="mr-2 w-5 h-5" /> Book Now: {data.price}
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-bold bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20">
                                <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Inquiry
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Content Container */}
                <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Overview */}
                        <section id="overview" className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <Info className="w-8 h-8 text-orange-500" /> Overview
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {data.overview}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                {data.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Itinerary */}
                        <section id="itinerary" className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <MapPin className="w-8 h-8 text-orange-500" /> Day-wise Itinerary
                            </h2>
                            <div className="space-y-6 relative border-l-2 border-orange-200 dark:border-orange-900 ml-4 pl-8 md:ml-6 md:pl-10">
                                {data.itinerary.map((item) => (
                                    <div key={item.day} className="relative">
                                        <span className="absolute -left-[3.25rem] md:-left-[3.75rem] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 font-bold border-4 border-white dark:border-slate-950">
                                            {item.day}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <section id="pricing" className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
                                <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" /> Inclusions
                                </h3>
                                <ul className="space-y-3">
                                    {data.inclusions.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                                <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" /> Exclusions
                                </h3>
                                <ul className="space-y-3">
                                    {data.exclusions.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* FAQs - The SEO Beast */}
                        <section id="faqs" className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-orange-500" /> Frequently Asked Questions
                            </h2>
                            <p className="text-slate-500 italic">Everything you need to know about your {data.title} trip.</p>

                            <Accordion type="single" collapsible className="w-full">
                                {data.faqs.map((faq, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-100 dark:border-slate-800">
                                        <AccordionTrigger className="text-left font-semibold text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                    </div>

                    {/* Sidebar (Right) - Sticky Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800">
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Starting From</p>
                                <div className="flex items-end gap-3 mb-6">
                                    <span className="text-4xl font-black text-slate-900 dark:text-white">{data.price}</span>
                                    <span className="text-lg text-slate-400 line-through mb-1">{data.originalPrice}</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-slate-800">
                                        <span className="text-slate-500">Duration</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{data.duration}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-slate-800">
                                        <span className="text-slate-500">Pickup</span>
                                        <span className="font-bold text-slate-900 dark:text-white">Leh Airport</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-slate-800">
                                        <span className="text-slate-500">Travel Date</span>
                                        <span className="font-bold text-slate-900 dark:text-white">Flexible</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Button className="w-full h-12 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg shadow-lg shadow-orange-500/20">
                                        Request Callback
                                    </Button>
                                    <Button variant="outline" className="w-full h-12 rounded-xl border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 font-bold">
                                        <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                                    </Button>
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                                    <p className="text-xs text-slate-400 mb-2">Trusted by 5000+ Travelers</p>
                                    <div className="flex justify-center gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <ShieldCheck key={i} className="w-4 h-4 text-orange-500" />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Packages Section */}
                <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                            More Summer Adventures
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {SUMMER_PACKAGES.filter(p => p.id !== data.id).slice(0, 3).map(pkg => (
                                <div key={pkg.id} className="group relative bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                                    <div className="h-48 overflow-hidden">
                                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{pkg.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{pkg.duration}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-orange-600 dark:text-orange-400">{pkg.price}</span>
                                            <Button variant="outline" size="sm" asChild className="rounded-full">
                                                <a href={pkg.slug}>View Details</a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
            <FloatingWhatsApp />
        </div>
    );
};

export default PremiumDestinationTemplate;
