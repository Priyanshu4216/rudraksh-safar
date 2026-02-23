import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, X, MapPin, Clock, Info, AlertTriangle, ChevronRight, Star, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { dubaiAttractions } from '@/data/uae/dubai-attractions';
import { abuDhabiAttractions } from '@/data/uae/abu-dhabi-attractions';
import { AttractionData, VerdictType } from '@/data/uae/types';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

// --- Types & Helpers ---
const allAttractions = [...dubaiAttractions, ...abuDhabiAttractions];

const getVerdictColor = (verdict: VerdictType) => {
    switch (verdict) {
        case 'MUST_VISIT': return 'bg-purple-600 text-white border-purple-700';
        case 'HIDDEN_GEM': return 'bg-emerald-600 text-white border-emerald-700';
        case 'SKIP_IF_SHORT_TIME': return 'bg-amber-500 text-white border-amber-600';
        default: return 'bg-slate-500 text-white';
    }
};

const getVerdictLabel = (verdict: VerdictType) => {
    switch (verdict) {
        case 'MUST_VISIT': return '🏆 Must Visit';
        case 'HIDDEN_GEM': return '💎 Hidden Gem';
        case 'SKIP_IF_SHORT_TIME': return '⚠️ Skip if Rush';
        default: return 'Optional';
    }
};

const JsonLd = ({ data }: { data: AttractionData }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": data.hero.title,
        "description": data.seo.description,
        "url": `https://rudrakshsafar.com/uae/${data.id}`,
        "image": `https://rudrakshsafar.com${data.hero.image}`,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "AE",
            "addressLocality": data.quickFacts.location
        },
        "geo": data.geo ? {
            "@type": "GeoCoordinates",
            "latitude": data.geo.lat,
            "longitude": data.geo.lng
        } : undefined,
        "openingHours": data.quickFacts.timings
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
        <script type="application/ld+json">
            {JSON.stringify([schema, faqSchema])}
        </script>
    );
};

// --- Main Component ---
const AttractionPage = () => {
    const { slug } = useParams();

    // 1. Find Data
    const attraction = useMemo(() =>
        allAttractions.find(a => a.id === slug),
        [slug]);

    if (!attraction) {
        return <Navigate to="/404" />;
    }

    const { hero, seo, quickFacts, review, tickets, indianContext, faqs, related } = attraction;

    // Resolve Related Data
    const relatedItems = related.attractionIds.map(id =>
        allAttractions.find(a => a.id === id)
    ).filter(Boolean) as AttractionData[];

    return (
        <>
            <Helmet>
                <title>{seo.title} | Rudraksh Safar</title>
                <meta name="description" content={seo.description} />
                <meta name="keywords" content={seo.keywords.join(', ')} />
                <link rel="canonical" href={`https://rudrakshsafar.com/${attraction.id === 'ferrari-world' || attraction.id === 'sheikh-zayed-mosque' ? 'abu-dhabi' : 'dubai'}/${attraction.id}`} />
            </Helmet>
            <JsonLd data={attraction} />

            <Navbar />

            <main className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-20">

                {/* 1. HERO SECTION (Verdict First) */}
                <div className="relative h-[60vh] md:h-[70vh]">
                    <img
                        src={hero.image}
                        alt={hero.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager" // Hero LCP
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
                        <div className="container max-w-5xl mx-auto space-y-4">
                            <Badge className={`${getVerdictColor(hero.verdict)} text-sm font-bold uppercase tracking-wide border px-3 py-1 shadow-lg`}>
                                {getVerdictLabel(hero.verdict)}
                            </Badge>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif drop-shadow-md">
                                {hero.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-200 max-w-3xl border-l-4 border-orange-500 pl-4 py-1 italic bg-black/20 backdrop-blur-sm rounded-r-lg">
                                "{hero.verdictText}"
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto px-4 -mt-8 relative z-10">

                    {/* 2. BREADCRUMBS & QUICK FACTS */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-12">
                        <div className="p-4 bg-slate-100 dark:bg-slate-800/50 border-b dark:border-slate-700">
                            <Breadcrumbs items={[
                                { label: 'UAE Guide', path: '/dubai-travel-guide' },
                                { label: 'Attractions', path: '/international-tours/dubai' },
                                { label: hero.title, path: `/${attraction.id === 'ferrari-world' || attraction.id === 'sheikh-zayed-mosque' ? 'abu-dhabi' : 'dubai'}/${attraction.id}` }
                            ]} />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8">
                            <div className="space-y-1">
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Timings</span>
                                <div className="flex items-start gap-2 font-medium">
                                    <Clock className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                                    <span className="text-sm md:text-base">{quickFacts.timings}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Duration</span>
                                <div className="flex items-start gap-2 font-medium">
                                    <Info className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                                    <span className="text-sm md:text-base">{quickFacts.idealDuration}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Location</span>
                                <div className="flex items-start gap-2 font-medium">
                                    <MapPin className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                                    <span className="text-sm md:text-base">{quickFacts.location}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Metr0</span>
                                <div className="flex items-start gap-2 font-medium">
                                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                                    <span className="text-sm md:text-base">{quickFacts.metroStation || "No Metro Nearby"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[2fr_1fr] gap-12">

                        {/* LEFT COLUMN: CONTENT */}
                        <div className="space-y-12">

                            {/* 3. IS IT WORTH IT? (The Honest Review) */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" /> Is it Worth it?
                                </h2>
                                <div className="space-y-4">
                                    <div className={`p-6 rounded-lg border-l-4 ${review.isWorthIt ? 'bg-green-50 border-green-500 dark:bg-green-900/10' : 'bg-red-50 border-red-500'}`}>
                                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                            {review.isWorthIt ? <ThumbsUp className="w-5 h-5 text-green-600" /> : <ThumbsDown className="w-5 h-5 text-red-600" />}
                                            {review.isWorthIt ? "Yes, Absolutely!" : "Maybe, consider alternatives."}
                                        </h3>
                                        <div className="space-y-2 text-sm md:text-base">
                                            <p><span className="font-bold">First Time Visitor:</span> {review.firstTimeVisitor ? "✅ Mandatory" : "❌ Optional"}</p>
                                            <p><span className="font-bold">Repeat Visitor:</span> {review.repeatVisitor ? "✅ Worth doing again" : "❌ Skip, you've seen it"}</p>
                                        </div>
                                    </div>

                                    {/* The "Skip If" Block - Crucial for Trust */}
                                    <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-lg border border-orange-100 dark:border-orange-900/30">
                                        <h4 className="font-bold text-orange-800 dark:text-orange-400 mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4" /> Who Should SKIP This?
                                        </h4>
                                        <p className="text-orange-900/80 dark:text-orange-200/80 italic">
                                            "{review.whoShouldSkip}"
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <Separator />

                            {/* 4. TICKET COMPARISON TABLE */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Ticket Options & Prices</h2>
                                <div className="border rounded-lg overflow-hidden bg-white dark:bg-slate-900">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm md:text-base">
                                            <thead className="bg-slate-100 dark:bg-slate-800 border-b">
                                                <tr>
                                                    <th className="p-4 text-left font-bold">Ticket Type</th>
                                                    <th className="p-4 text-left font-bold">Inclusions</th>
                                                    <th className="p-4 text-right font-bold">Price (Approx)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y">
                                                {tickets.variants.map((ticket, idx) => (
                                                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                                        <td className="p-4 font-medium">
                                                            {ticket.name}
                                                            <span className="block text-xs font-normal text-muted-foreground mt-1">{ticket.bestFor}</span>
                                                        </td>
                                                        <td className="p-4">
                                                            <ul className="space-y-1">
                                                                {ticket.inclusions.map((inc, i) => (
                                                                    <li key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                                        <Check className="w-3 h-3 text-green-500" /> {inc}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </td>
                                                        <td className="p-4 text-right font-bold font-mono text-orange-600">
                                                            {ticket.price}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="p-4 bg-purple-50 dark:bg-purple-900/10 flex flex-col md:flex-row items-center justify-between gap-4">
                                        <div>
                                            <p className="font-bold text-purple-900 dark:text-purple-300">Rudraksh Safar Special Price</p>
                                            <p className="text-sm text-purple-700 dark:text-purple-400">Book via Bhilai Office. No Forex Fees.</p>
                                        </div>
                                        <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full md:w-auto">
                                            <a href={`https://wa.me/917566788884?text=Hi, I want to book ${hero.title} tickets.`} target="_blank" rel="noopener noreferrer">
                                                Get {tickets.rudrakshPrice} Offer
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </section>

                            <Separator />

                            {/* 5. INDIAN TRAVELER CONTEXT (The USP) */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Tips for Indian Travelers 🇮🇳</h2>
                                <div className="grid gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <span className="text-2xl">🥗</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Veg / Jain Food Availability</h3>
                                            <p className={`text-sm ${indianContext.vegFoodNearby ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}`}>
                                                {indianContext.vegFoodNearby ? "Available Nearby" : "Difficult to find nearby"}
                                            </p>
                                            <p className="text-muted-foreground text-sm mt-1">{indianContext.vegFoodDetails}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                            <span className="text-2xl">👗</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Dress Code</h3>
                                            <p className="text-muted-foreground text-sm mt-1">{indianContext.dressCode}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                                            <span className="text-2xl">💡</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Local Tip</h3>
                                            <p className="text-muted-foreground text-sm mt-1">{indianContext.tip}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <Separator />

                            {/* 6. FAQS (Schema Optimized) */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, i) => (
                                        <Card key={i} className="border-none shadow-sm bg-slate-50 dark:bg-slate-900">
                                            <CardContent className="p-4">
                                                <h3 className="font-bold mb-2 text-foreground">{faq.question}</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN: STICKY SIDEBAR */}
                        <div className="relative">
                            <div className="sticky top-24 space-y-6">

                                <Card className="border-2 border-orange-500 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
                                    <div className="bg-orange-500 text-white p-3 text-center text-sm font-bold uppercase tracking-wide">
                                        Add to your Trip
                                    </div>
                                    <CardContent className="p-6 space-y-6">
                                        <div className="text-center">
                                            <h3 className="font-bold text-xl mb-1">{hero.title}</h3>
                                            <p className="text-sm text-muted-foreground">Instant Confirmation</p>
                                        </div>
                                        <div className="space-y-3">
                                            <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg" asChild>
                                                <a href={`https://wa.me/917566788884?text=Hi, help me book ${hero.title} tickets for Dubai.`}>
                                                    <MessageCircle className="w-5 h-5 mr-2" />
                                                    Book Now
                                                </a>
                                            </Button>
                                            <Button variant="outline" className="w-full" asChild>
                                                <Link to={`/international-tours/dubai`}>View Dubai Packages</Link>
                                            </Button>
                                        </div>
                                        <p className="text-xs text-center text-muted-foreground">
                                            Best Price Guarantee for Rudraksh Customers
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-4">
                                        <h4 className="font-bold text-sm mb-3 text-muted-foreground uppercase">Nearby Attractions</h4>
                                        <div className="space-y-3">
                                            {relatedItems.map(item => (
                                                <Link key={item.id} to={`/uae/${item.id}`} className="flex items-center gap-3 group">
                                                    <img src={item.hero.image} alt={item.hero.title} className="w-12 h-12 rounded object-cover" />
                                                    <div>
                                                        <p className="text-sm font-bold group-hover:text-orange-500 transition-colors line-clamp-1">{item.hero.title}</p>
                                                        <p className="text-xs text-muted-foreground">{item.quickFacts.idealDuration}</p>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground" />
                                                </Link>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                        </div>

                    </div>
                </div>

                {/* 7. COMMERCIAL CTA (Below Fold - Anti-Affiliate Bias) */}
                <div className="mt-20 py-12 bg-slate-900 text-white text-center">
                    <div className="container max-w-4xl mx-auto px-4 space-y-6">
                        <h2 className="text-2xl md:text-4xl font-serif font-bold">Planning a trip to UAE?</h2>
                        <p className="text-slate-300 text-lg">
                            Don't just buy tickets. Get a complete, hassle-free itinerary designed by experts.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                                <Link to="/international-tours/dubai">Explore Dubai Packages</Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default AttractionPage;
