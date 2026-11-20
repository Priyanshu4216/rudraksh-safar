import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { 
    ShieldCheck, Phone, CheckCircle2, ChevronRight, Clock, MapPin, 
    Car, Hotel, Sparkles, Utensils, Calendar, Users, Award, 
    FileText, Download, Check, HelpCircle, ArrowRight, MessageSquare, 
    Send, Shield, Lock, Layers
} from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQsSection from '@/components/FAQsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { b2bSectorsData, B2BSectorData } from '@/data/b2b/destinationsData';

interface B2BDestinationMasterProps {
    sector?: string;
}

const B2BDestinationMaster: React.FC<B2BDestinationMasterProps> = ({ sector: propSector }) => {
    const params = useParams<{ sector?: string }>();
    const sectorKey = propSector || params.sector || 'chardham';
    const data: B2BSectorData = b2bSectorsData[sectorKey] || b2bSectorsData.chardham;

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        agencyName: '',
        contactPerson: '',
        phone: '',
        email: '',
        city: '',
        paxCount: '2-4 Pax (FIT)',
        travelDate: ''
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        const textMsg = `*New B2B Quotation Request for ${data.name}*%0A%0A*Agency:* ${encodeURIComponent(formData.agencyName)}%0A*Contact:* ${encodeURIComponent(formData.contactPerson)}%0A*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*City:* ${encodeURIComponent(formData.city)}%0A*Expected Pax:* ${encodeURIComponent(formData.paxCount)}%0A*Travel Month:* ${encodeURIComponent(formData.travelDate || 'Flexible')}`;
        window.open(`https://wa.me/919203650311?text=${textMsg}`, '_blank');
    };

    const breadcrumbItems = [
        { label: 'B2B Partners', path: '/b2b-travel-partners' },
        { label: `${data.name} DMC`, path: `/b2b/${data.id}` }
    ];

    const otherSectors = Object.values(b2bSectorsData).filter(s => s.id !== data.id);

    return (
        <main className="min-h-screen bg-slate-50 pt-20 pb-16 selection:bg-primary/20 selection:text-primary">
            <Helmet>
                <title>{data.metaTitle}</title>
                <meta name="description" content={data.metaDescription} />
                <link rel="canonical" href={data.canonicalUrl} />
                <meta name="keywords" content={data.keywords} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "TravelAgency",
                                "@id": "https://rudrakshsafar.com/#organization",
                                "name": "Rudraksh Safar - B2B DMC Division",
                                "url": "https://rudrakshsafar.com/b2b-travel-partners",
                                "logo": "https://rudrakshsafar.com/favicon.png",
                                "taxID": "22AGBPC7350G1ZZ",
                                "telephone": "+919203650311",
                                "email": "rudrakshsafar@gmail.com",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Sanjeev Enterprises, GE Road, In Front of Petrol Pump, Bhilai-3",
                                    "addressLocality": "Bhilai",
                                    "addressRegion": "Chhattisgarh",
                                    "postalCode": "490021",
                                    "addressCountry": "IN"
                                }
                            },
                            {
                                "@type": "Service",
                                "name": `${data.name} B2B Ground Handling & DMC Services`,
                                "provider": {
                                    "@type": "TravelAgency",
                                    "name": "Rudraksh Safar"
                                },
                                "areaServed": data.name,
                                "description": data.subheading,
                                "offers": {
                                    "@type": "AggregateOffer",
                                    "priceCurrency": "INR",
                                    "lowPrice": data.b2bNetIndicator.replace(/[^0-9]/g, '') || "5000",
                                    "price": data.b2bNetIndicator.replace(/[^0-9]/g, '') || "5000"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": data.faqs.map(faq => ({
                                    "@type": "Question",
                                    "name": faq.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": faq.answer
                                    }
                                }))
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://rudrakshsafar.com"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "B2B Partners",
                                        "item": "https://rudrakshsafar.com/b2b-travel-partners"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": `${data.name} DMC`,
                                        "item": data.canonicalUrl
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <div className="container mx-auto px-4 mt-2 mb-4">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Sector Hero Section */}
            <section className="relative bg-slate-950 text-white min-h-[65vh] flex items-center pt-16 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={data.heroImage} 
                        alt={data.name} 
                        className="w-full h-full object-cover opacity-35 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 mb-4 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4" />
                            {data.badge} • 100% Agent Protection
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-white drop-shadow-md">
                            {data.tagline}
                        </h1>

                        <p className="text-base md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                            {data.subheading}
                        </p>

                        {/* Net Rate Indicator Pill */}
                        <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-emerald-950/80 border border-emerald-500/40 px-6 py-3 rounded-2xl mb-8 backdrop-blur-md text-emerald-300 font-bold text-sm md:text-base shadow-xl">
                            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-emerald-400" /> {data.b2bNetIndicator}</span>
                            <span className="hidden sm:inline text-emerald-600">•</span>
                            <span className="text-xs bg-emerald-800/60 text-emerald-200 px-2.5 py-1 rounded-full">Turnaround SLA: {data.sla}</span>
                        </div>

                        {/* Quick Spec Badges */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-center">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                                <p className="text-xs text-slate-400 font-medium">Best Selling Season</p>
                                <p className="text-xs md:text-sm font-bold text-white mt-1">{data.bestSeason}</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                                <p className="text-xs text-slate-400 font-medium">Ideal Group Pacing</p>
                                <p className="text-xs md:text-sm font-bold text-white mt-1">{data.idealGroupSize}</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                                <p className="text-xs text-slate-400 font-medium">Quotation SLA</p>
                                <p className="text-xs md:text-sm font-bold text-emerald-400 mt-1">{data.sla}</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                                <p className="text-xs text-slate-400 font-medium">Client Privacy</p>
                                <p className="text-xs md:text-sm font-bold text-secondary mt-1">100% White-Label</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a 
                                href="#quick-quote" 
                                className="w-full sm:w-auto bg-gradient-to-r from-secondary to-amber-500 hover:from-secondary/90 hover:to-amber-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
                            >
                                <Send className="w-4 h-4" /> Request Instant Net Quote
                            </a>
                            <a 
                                href={`https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar%20B2B%20Team,%20please%20share%20wholesale%20rates%20and%20contract%20tariffs%20for%20${encodeURIComponent(data.name)}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
                            >
                                <MessageSquare className="w-4 h-4" /> WhatsApp B2B Desk (+91 9203650311)
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Page Jump Anchor Strip */}
            <div className="py-3 bg-white border-b border-border sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between overflow-x-auto gap-6 text-xs font-bold text-slate-700 no-scrollbar py-1">
                        <a href="#ground-fleet" className="whitespace-nowrap hover:text-primary flex items-center gap-1"><Car className="w-3.5 h-3.5 text-blue-600" /> Ground Fleet</a>
                        <a href="#hotel-inventory" className="whitespace-nowrap hover:text-primary flex items-center gap-1"><Hotel className="w-3.5 h-3.5 text-purple-600" /> Hotel Inventory</a>
                        <a href="#b2b-exclusives" className="whitespace-nowrap hover:text-primary flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-amber-500" /> B2B Exclusives</a>
                        <a href="#sample-itinerary" className="whitespace-nowrap hover:text-primary flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-emerald-600" /> Trade Itinerary</a>
                        <a href="#net-tariffs" className="whitespace-nowrap hover:text-primary flex items-center gap-1"><Layers className="w-3.5 h-3.5 text-indigo-600" /> Net Tariffs</a>
                        <a href="#sector-faqs" className="whitespace-nowrap hover:text-primary flex items-center gap-1"><HelpCircle className="w-3.5 h-3.5 text-slate-500" /> Sector FAQs</a>
                        <a href="#quick-quote" className="whitespace-nowrap text-primary flex items-center gap-1"><Send className="w-3.5 h-3.5" /> Fast-Track Quote</a>
                    </div>
                </div>
            </div>

            {/* 1. Ground Fleet & Transit Infrastructure */}
            <section id="ground-fleet" className="py-16 bg-white border-b border-border">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                            <Car className="w-3.5 h-3.5 text-blue-600" /> Dedicated Fleet Logistics
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Company-Contracted <span className="text-primary">Ground Transit Fleet</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600 mt-2">
                            We eliminate third-party broker markups by operating dedicated commercial vehicles stationed directly at key airports, railway stations, and mountain checkpoints.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.groundAssets.map((asset, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 font-bold text-sm">
                                        0{idx + 1}
                                    </div>
                                    <h3 className="font-bold text-base text-slate-900 mb-2">{asset.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{asset.description}</p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified Commercial Permits
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Hotel Inventory & Pre-Contracted Room Blocks */}
            <section id="hotel-inventory" className="py-16 bg-slate-50 border-b border-border">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
                            <Hotel className="w-3.5 h-3.5 text-purple-600" /> Direct Allotments
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Pre-Bought Hotel & <span className="text-primary">Resort Inventory</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600 mt-2">
                            Avoid peak-season hotel sell-outs. We maintain confirmed room blocks across 3-star, 4-star, and luxury heritage camps with verified food and hygiene standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.hotelInventory.map((inv, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                                <span className="text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full uppercase tracking-wider">
                                    {inv.tier}
                                </span>
                                <h3 className="font-bold text-lg text-slate-900 mt-3 mb-1">{inv.locations}</h3>
                                <p className="text-xs text-slate-600 leading-relaxed mb-4">{inv.highlights}</p>
                                <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                                    <span>Meal Plans: EP, CP, MAP & AP Available</span>
                                    <span className="font-bold text-slate-700">Direct Vouchers</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Culinary Support Strip */}
                    <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                                <Utensils className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-emerald-950">Specialized Indian Culinary Support</h4>
                                <p className="text-xs text-emerald-800 mt-0.5">{data.foodSupport}</p>
                            </div>
                        </div>
                        <span className="whitespace-nowrap text-xs font-bold bg-emerald-200/80 text-emerald-900 px-3 py-1.5 rounded-lg">
                            Jain & Sattvic Guaranteed
                        </span>
                    </div>
                </div>
            </section>

            {/* 3. B2B Exclusives & Agent Protection Policy */}
            <section id="b2b-exclusives" className="py-16 bg-white border-b border-border">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
                                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Value-Added Services
                            </div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Exclusive On-Ground <span className="text-primary">B2B Advantages</span>
                            </h2>
                            <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
                                Deliver flawless vacation memories to your retail clients without operational friction. Our ground team manages complex permits, activity vouchers, and VIP queues.
                            </p>

                            <ul className="space-y-3 mt-6">
                                {data.b2bExclusives.map((exc, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>{exc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                                <Lock className="w-4 h-4" /> Legally Enforced Firewall
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3">100% Agent Protection Pledge</h3>
                            <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                                We operate strictly as an invisible backend DMC. All airport placards, driver greetings, and vouchers reflect only your retail brand. We guarantee zero direct customer marketing or solicitation under any circumstance.
                            </p>
                            <div className="space-y-2 text-xs text-slate-300">
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-400" /> Placards customized with your logo
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-400" /> Unbranded, professional PDF itineraries
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-400" /> Invoicing under GSTIN 22AGBPC7350G1ZZ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Day-Wise B2B Trade Itinerary */}
            <section id="sample-itinerary" className="py-16 bg-slate-50 border-b border-border">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                                <Calendar className="w-3.5 h-3.5 text-emerald-600" /> Field-Tested Pacing
                            </div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Recommended Trade Itinerary: <span className="text-primary">{data.itineraryDuration}</span>
                            </h2>
                            <p className="text-xs md:text-sm text-slate-600 mt-1">
                                Paced by our ground managers to optimize driving hours, sightseeing coverage, and client satisfaction.
                            </p>
                        </div>
                        <a 
                            href={`https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar,%20please%20send%20the%20complete%20word/pdf%20day-wise%20itinerary%20for%20${encodeURIComponent(data.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow shrink-0"
                        >
                            <Download className="w-3.5 h-3.5" /> Download Unbranded Itinerary PDF
                        </a>
                    </div>

                    <div className="space-y-4">
                        {data.sampleItinerary.map((item) => (
                            <div key={item.day} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary font-black text-xs flex items-center justify-center shrink-0">
                                            D{item.day}
                                        </span>
                                        <h3 className="font-bold text-sm md:text-base text-slate-900">{item.title}</h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                                        <span className="bg-slate-100 px-2.5 py-1 rounded-md font-medium">Overnight: {item.stay}</span>
                                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-md font-semibold">Meals: {item.meals}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Wholesale Net Rate Tiers Table */}
            <section id="net-tariffs" className="py-16 bg-white border-b border-border">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
                            <Layers className="w-3.5 h-3.5 text-indigo-600" /> Transparent Wholesale Economics
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Wholesale Net Rate <span className="text-primary">Tariff Structure</span>
                        </h2>
                        <p className="text-xs md:text-sm text-slate-600 mt-2">
                            We provide rock-bottom net costs. You maintain complete financial independence to add your desired margin before presenting the quote to your retail client.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <thead className="bg-slate-100 text-slate-800 font-bold uppercase text-[11px] border-b border-slate-200">
                                <tr>
                                    <th className="p-4">Package Category</th>
                                    <th className="p-4">Vehicle Allocation</th>
                                    <th className="p-4">Hotel Accommodation Tier</th>
                                    <th className="p-4 text-emerald-700">Estimated Wholesale Net</th>
                                    <th className="p-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                                {data.netRateTiers.map((tier, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-slate-900">{tier.packageType}</td>
                                        <td className="p-4 text-slate-600">{tier.vehicleType}</td>
                                        <td className="p-4 text-slate-600">{tier.hotelCategory}</td>
                                        <td className="p-4 font-bold text-emerald-700 text-sm">{tier.estimatedNet}</td>
                                        <td className="p-4 text-center">
                                            <a 
                                                href={`https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar,%20I%20need%20the%20exact%20net%20quote%20for%20${encodeURIComponent(data.name)}%20(${encodeURIComponent(tier.packageType)}).`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg transition-colors"
                                            >
                                                <MessageSquare className="w-3 h-3" /> Quote
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-3 text-center">
                        * Exact net tariffs vary based on travel dates, seasonality surcharges, and guest count. Contact our B2B desk for live date-specific inventory availability.
                    </p>
                </div>
            </section>

            {/* 6. Sector-Specific AEO FAQs */}
            <section id="sector-faqs" className="py-16 bg-slate-50 border-b border-border">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                            <HelpCircle className="w-3.5 h-3.5 text-primary" /> Answer Engine Verification (AEO)
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            {data.name} <span className="text-primary">B2B Trade FAQs</span>
                        </h2>
                        <p className="text-xs md:text-sm text-slate-600 mt-2">
                            Clear, concise operational answers on permits, transport regulations, and ground coordination.
                        </p>
                    </div>

                    <FAQsSection faqs={data.faqs} title="" />
                </div>
            </section>

            {/* 7. Instant Fast-Track Quotation Form */}
            <section id="quick-quote" className="py-16 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-wider mb-2">
                            <Send className="w-3.5 h-3.5" /> 2-Hour SLA
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                            Request Wholesale Net Quotation for <span className="text-secondary">{data.name}</span>
                        </h2>
                        <p className="text-xs md:text-sm text-slate-300 mt-2 font-light">
                            Submit your agency inquiry to receive an unbranded day-wise PDF quotation with transparent net tariffs within 2 hours.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-900 border border-slate-200">
                        {isSubmitted ? (
                            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-800">
                                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                                <h4 className="text-lg font-bold mb-1">Quotation Request Dispatched!</h4>
                                <p className="text-xs text-emerald-700 mb-4">
                                    Your inquiry for {data.name} has been sent to our B2B desk on WhatsApp. Click below if WhatsApp didn't launch automatically:
                                </p>
                                <a 
                                    href="https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar%20B2B%20Desk,%20I%20have%20submitted%20a%20quotation%20request%20online."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow"
                                >
                                    <MessageSquare className="w-4 h-4" /> Open WhatsApp Chat
                                </a>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleFormSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Travel Agency Name *</label>
                                        <input 
                                            type="text" 
                                            required 
                                            value={formData.agencyName}
                                            onChange={(e) => setFormData({...formData, agencyName: e.target.value})}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                            placeholder="e.g. Royal Travels" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Contact Person Name *</label>
                                        <input 
                                            type="text" 
                                            required 
                                            value={formData.contactPerson}
                                            onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                            placeholder="e.g. Manish Sharma" 
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number *</label>
                                        <input 
                                            type="tel" 
                                            required 
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                            placeholder="+91 9XXXXXXXXX" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Official Email Address *</label>
                                        <input 
                                            type="email" 
                                            required 
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                            placeholder="booking@agency.com" 
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Base City *</label>
                                        <input 
                                            type="text" 
                                            required 
                                            value={formData.city}
                                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                            placeholder="e.g. Raipur / Delhi / Mumbai" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Passenger Count</label>
                                        <select 
                                            value={formData.paxCount}
                                            onChange={(e) => setFormData({...formData, paxCount: e.target.value})}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50"
                                        >
                                            <option value="2 Pax (Honeymoon / Couple)">2 Pax (Couple / Honeymoon)</option>
                                            <option value="4-6 Pax (Family Innova)">4-6 Pax (Family Innova)</option>
                                            <option value="12-16 Pax (Tempo Group)">12-16 Pax (Tempo Traveller)</option>
                                            <option value="20-50+ Pax (MICE / College)">20-50+ Pax (MICE / Group Series)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Approx. Travel Month</label>
                                        <input 
                                            type="text" 
                                            value={formData.travelDate}
                                            onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary text-xs bg-slate-50" 
                                            placeholder="e.g. Next Month / May 2026" 
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-red-500/20 text-xs transition-all mt-2"
                                >
                                    Generate White-Label B2B Quotation
                                </button>
                                <p className="text-[11px] text-center text-slate-400 font-medium">
                                    🔒 Your client details remain 100% confidential under our Agent Protection Non-Compete Guarantee.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* 8. Cross-Link to Other B2B Sectors */}
            <section className="py-16 bg-white border-t border-border">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">Explore Other B2B DMC Sectors</h3>
                            <p className="text-xs text-slate-500 mt-1">Direct wholesale tariffs available across 11 other domestic and international corridors.</p>
                        </div>
                        <Link 
                            to="/b2b-travel-partners" 
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                        >
                            View All B2B Sectors <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {otherSectors.slice(0, 6).map((sec) => (
                            <Link 
                                key={sec.id} 
                                to={`/b2b/${sec.id}`}
                                className="bg-slate-50 hover:bg-slate-100 p-4 rounded-xl border border-slate-200 transition-all text-center group flex flex-col items-center justify-between"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mb-2 group-hover:scale-110 transition-transform">
                                    {sec.name.charAt(0)}
                                </div>
                                <h4 className="font-bold text-xs text-slate-900 group-hover:text-primary transition-colors leading-tight line-clamp-2">{sec.name}</h4>
                                <span className="text-[10px] text-emerald-700 font-semibold mt-2">View DMC Rates →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default B2BDestinationMaster;
