import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Calendar, ShieldCheck, CheckCircle2, Info, Phone, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Types ---
export interface PackageSummary {
    id: string;
    title: string;
    duration: string;
    price: string;
    image: string;
    link: string;
    tag?: string;
}

export interface Attraction {
    title: string;
    image: string;
    description: string;
    link?: string;
}

export interface DestinationData {
    id: string;
    title: string;
    subtitle: string;
    heroImage: string;
    overview: string;
    highlights: string[];
    packages: PackageSummary[];
    attractions: Attraction[];
    bestTime: {
        text: string;
        seasons: { label: string; months: string; description: string }[];
    };
    faqs: { question: string; answer: string }[];
    trust?: {
        title: string;
        points: { icon: string; label: string; desc: string }[];
    };
    urgencyLabel?: string;
    meta: {
        title: string;
        description: string;
        keywords: string;
    };
}

interface DestinationMasterTemplateProps {
    data: DestinationData;
}

// --- Component ---
const DestinationMasterTemplate = ({ data }: DestinationMasterTemplateProps) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data.id]);

    // SEO Schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": data.title,
        "description": data.overview,
        "image": data.heroImage,
        "touristType": ["Adventure", "Family", "Honeymoon"],
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
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Helmet>
                <title>{data.meta.title}</title>
                <meta name="description" content={data.meta.description} />
                <meta name="keywords" content={data.meta.keywords} />
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <Navbar />

            <main>
                {/* Hero Section */}
                <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={data.heroImage}
                            alt={data.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/30" />
                    </div>

                    <div className="relative z-10 container px-4 text-center">
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-6 px-4 py-1 text-sm uppercase tracking-wider">
                            {data.urgencyLabel || "Top Rated Destination 2026"}
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-up">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-8 font-light leading-relaxed animate-fade-up delay-100">
                            {data.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-200">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold h-14 px-8 rounded-full text-lg shadow-lg">
                                <Link to="/contact">Plan My Trip</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white bg-white/10 hover:bg-white/20 h-14 px-8 rounded-full text-lg backdrop-blur-md">
                                <a href="#packages">View Packages</a>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-12 gap-12">

                    {/* Main Content (Left) */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Overview */}
                        <section id="overview" className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                                <Info className="w-8 h-8 text-orange-500" /> About {data.title}
                            </h2>
                            <p className="lead">{data.overview}</p>

                            <div className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
                                {data.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-border">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="font-medium text-foreground">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Trust Section - Enterprise Reqt */}
                        {data.trust && (
                            <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 mb-16">
                                <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                                    <ShieldCheck className="w-8 h-8 text-blue-600" /> {data.trust.title}
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {data.trust.points.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-blue-900">{item.label}</h4>
                                                <p className="text-sm text-blue-800/80 leading-snug">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-blue-200/60 flex flex-col sm:flex-row gap-4 items-center justify-between">
                                    <p className="text-blue-900 font-medium">Safe. Secure. Reliable.</p>
                                    <Button className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-200">
                                        <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                                    </Button>
                                </div>
                            </section>
                        )}

                        {/* Top Packages - Enterprise Reqt */}
                        <section id="packages">
                            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <Star className="w-8 h-8 text-orange-500" /> Popular Packages
                            </h2>
                            <div className="grid gap-6">
                                {data.packages.map((pkg) => (
                                    <div key={pkg.id} className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all flex flex-col md:flex-row">
                                        <div className="w-full md:w-64 h-48 md:h-auto relative overflow-hidden">
                                            <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            {pkg.tag && (
                                                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                    {pkg.tag}
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{pkg.title}</h3>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {pkg.duration}</span>
                                                    <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> Best Seller</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mt-4">
                                                <div>
                                                    <span className="text-2xl font-bold text-orange-600">{pkg.price}</span>
                                                    <span className="text-xs text-muted-foreground block">per person</span>
                                                </div>
                                                <Button asChild>
                                                    <Link to={pkg.link}>View Details</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Attractions */}
                        <section id="attractions">
                            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <MapPin className="w-8 h-8 text-orange-500" /> Must Visit Places
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {data.attractions.map((place, idx) => (
                                    <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                                        <img src={place.image} alt={place.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                            <h3 className="text-xl font-bold text-white mb-1">{place.title}</h3>
                                            <p className="text-sm text-white/80 line-clamp-2">{place.description}</p>
                                        </div>
                                        {place.link && (
                                            <Link to={place.link} className="absolute inset-0 z-10">
                                                <span className="sr-only">View {place.title}</span>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Best Time */}
                        <section id="best-time" className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-orange-500" /> Best Time to Visit
                            </h2>
                            <p className="text-muted-foreground mb-6">{data.bestTime.text}</p>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {data.bestTime.seasons.map((season, idx) => (
                                    <div key={idx} className="bg-background p-4 rounded-lg border border-border">
                                        <h4 className="font-bold text-foreground">{season.label}</h4>
                                        <p className="text-xs text-orange-600 font-bold uppercase mb-2">{season.months}</p>
                                        <p className="text-sm text-muted-foreground">{season.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQs */}
                        <section id="faqs">
                            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-orange-500" /> Traveler FAQs
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                {data.faqs.map((faq, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`}>
                                        <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                    </div>

                    {/* Sidebar (Right) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Sticky Booking Widget */}
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-card border border-border rounded-xl p-6 shadow-xl">
                                <h3 className="text-xl font-bold mb-2">Get a Custom Quote</h3>
                                <p className="text-sm text-muted-foreground mb-6">Expert agents for {data.title} tours from Bhilai, Raipur & Delhi.</p>
                                <div className="space-y-3">
                                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-12">
                                        <Phone className="w-4 h-4 mr-2" /> Request Callback
                                    </Button>
                                    <Button variant="outline" className="w-full h-12 border-green-500 text-green-600 hover:bg-green-50">
                                        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Chat
                                    </Button>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-2 text-xs text-muted-foreground">
                                    <ShieldCheck className="w-4 h-4 text-green-500" /> 100% Secure Booking
                                </div>
                            </div>

                            {/* Internal Linking - Cluster */}
                            <div className="bg-muted/30 border border-border rounded-xl p-6">
                                <h4 className="font-bold mb-4">Explore More</h4>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <Link to="/domestic-tours" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                                            <ArrowRight className="w-4 h-4" /> All Domestic Tours
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/international-tours" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                                            <ArrowRight className="w-4 h-4" /> International Packages
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            <FloatingWhatsApp />
            <Footer />
        </div>
    );
};

export default DestinationMasterTemplate;
