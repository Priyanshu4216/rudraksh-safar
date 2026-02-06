import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Award, CheckCircle, Building2, Plane, Bus, FileText, Info, HelpCircle, ShieldCheck, X, Check, FileDown, BadgeCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import RelatedServices from '@/components/RelatedServices';

const CorporateTourPackagesBhilai = () => {
    return (
        <>
            <Helmet>
                <title>Corporate Tour Packages Bhilai | MICE & Offsite Trips - Rudraksh Safar</title>
                <meta name="description" content="Best corporate tour operator in Bhilai-Durg for office trips, team building, and MICE events. GST billing available. Packages for Goa, Dubai, Udaipur." />
                <meta name="keywords" content="corporate tour packages bhilai, corporate travel agent bhilai, office trips from bhilai, mice tourism bhilai, corporate outing organizers, gst invoice travel agency bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bhilai/corporate-tours" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "TravelAgency",
                                "name": "Rudraksh Safar - Corporate Division",
                                "image": "https://rudrakshsafar.com/assets/logo.png",
                                "uRL": "https://rudrakshsafar.com",
                                "telephone": "+919406182174",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Shop No 16, Khursipar",
                                    "addressLocality": "Bhilai",
                                    "addressRegion": "Chhattisgarh",
                                    "postalCode": "490011",
                                    "addressCountry": "IN"
                                }
                            },
                            {
                                "@type": "Service",
                                "name": "Corporate Tour & MICE Services",
                                "serviceType": "Corporate Travel Management",
                                "provider": {
                                    "@type": "LocalBusiness",
                                    "name": "Rudraksh Safar"
                                },
                                "areaServed": ["Bhilai", "Raipur", "Durg", "Chhattisgarh"],
                                "audience": {
                                    "@type": "BusinessAudience",
                                    "audienceType": "Companies, Startups, Factories & Institutions"
                                },
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "Corporate Travel Services",
                                    "itemListElement": [
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MICE Event Management" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Offsite Planning" } },
                                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employee Incentive Trips" } }
                                    ]
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
                                    { "@type": "ListItem", "position": 2, "name": "Bhilai Packages", "item": "https://rudrakshsafar.com/tour-packages-from-bhilai" },
                                    { "@type": "ListItem", "position": 3, "name": "Corporate Tours", "item": "https://rudrakshsafar.com/tour-packages-from-bhilai/corporate-tours" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Do you provide GST invoices for corporate travel?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide fully compliant GST invoices for all corporate bookings, allowing your company to claim input tax credit." }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you handle MICE events and large conferences?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in MICE (Meetings, Incentives, Conferences, Exhibitions) and can manage groups of 20 to 200+ employees including flights, hotels, and venues." }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Badge variant="outline" className="mb-4 text-slate-300 border-slate-500">B2B Travel Solutions</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Corporate Tour Experts in <span className="text-blue-400">Bhilai</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                            Seamless planning for Offsites, Conferences, and Team Building events. Trusted by top companies in Bhilai & Raipur.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                <a href="https://wa.me/919406182174?text=We need corporate tour quote">Get Corporate Quote</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* B2B Context & Positioning */}
                <section id="corporate-context" className="py-12 bg-white dark:bg-slate-950 border-b">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">For Business Decision Makers</Badge>
                        <h2 className="text-3xl font-bold mb-4">Professional Corporate Tour Packages in Bhilai for Businesses & Organizations</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our corporate tour packages in Bhilai are designed for <span className="font-semibold text-foreground">companies, factories, educational institutions, and startups</span> looking for
                            reliable travel planning, <span className="text-blue-600 font-bold">GST-compliant billing</span>, and end-to-end event coordination.
                            We move beyond "booking tickets" to managing your entire offsite legality and logistics.
                        </p>
                    </div>
                </section>

                {/* TL;DR Summary */}
                <section className="py-12 relative z-20">
                    <div className="container mx-auto px-4">
                        <Card className="bg-background/95 backdrop-blur shadow-xl border-t-4 border-t-blue-500 max-w-4xl mx-auto">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl shrink-0 hidden md:block">
                                        <Info className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                            <span className="md:hidden"><Info className="w-6 h-6 text-blue-600" /></span>
                                            TL;DR (AI Summary)
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Corporate tour packages are organized travel plans designed for companies, startups, and organizations to manage meetings, offsites, conferences, training programs, and team outings efficiently. We assist with corporate travel planning, hotel and venue selection, logistics coordination, and group accommodation management to ensure smooth and productive business travel experiences.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Detailed Info Sections */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">
                            {/* What Are Corporate Packages */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6">What Are Corporate Tour Packages?</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Corporate tour packages are professionally planned travel arrangements created for business teams and organizations. These packages focus on efficiency, coordination, comfort, and cost control.
                                </p>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-3"><CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" /> Team outings and bonding trips</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" /> Corporate offsite meetings</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" /> Conferences and seminars</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" /> Training programs and workshops</li>
                                </ul>
                            </div>

                            {/* Planning Made Simple */}
                            <div className="bg-blue-50 dark:bg-blue-950/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900">
                                <h2 className="text-3xl font-bold mb-6">Corporate Travel Planning Made Simple</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Planning corporate travel involves multiple variables such as schedules, accommodation capacity, meeting spaces, transportation, and budget approvals. We assist organizations by handling these complexities.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-background p-4 rounded-xl shadow-sm">
                                        <h3 className="font-bold flex items-center gap-2 mb-2"><Plane className="w-5 h-5 text-blue-600" /> Logistics Handling</h3>
                                        <p className="text-sm text-muted-foreground">Ensuring smooth check-ins, transfers, and transport coordination.</p>
                                    </div>
                                    <div className="bg-background p-4 rounded-xl shadow-sm">
                                        <h3 className="font-bold flex items-center gap-2 mb-2"><Building2 className="w-5 h-5 text-blue-600" /> Venue Selection</h3>
                                        <p className="text-sm text-muted-foreground">Identifying hotels with conference halls, banquet spaces, and business amenities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Tailored for Business Needs</h2>
                            <p className="text-muted-foreground">We understand that corporate travel requires precision, punctuality, and professionalism.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                                    <h3 className="font-bold text-xl">Annual Offsites</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Reward your team with a relaxing getaway to Goa or Thailand. We handle everything from flights to gala dinners.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
                                    <h3 className="font-bold text-xl">Team Building</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Adventure camps in Rishikesh or leadership workshops in Udaipur resorts with professional trainers.</p>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-all">
                                <CardHeader>
                                    <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                                    <h3 className="font-bold text-xl">MICE & Conferences</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Large scale event capability for dealer meets and conferences in Raipur or Metro cities.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Top Destinations */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-10 text-center">Popular Corporate Destinations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="relative rounded-xl overflow-hidden group h-64">
                                <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop" alt="Goa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white font-bold text-2xl">Goa</h3>
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden group h-64">
                                <img src="https://images.unsplash.com/photo-1562916174-a69074a38753?q=80&w=800&auto=format&fit=crop" alt="Udaipur" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white font-bold text-2xl">Udaipur</h3>
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden group h-64">
                                <img src="https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=800&auto=format&fit=crop" alt="Dubai" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white font-bold text-2xl">Dubai</h3>
                                </div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden group h-64">
                                <img src="https://images.unsplash.com/photo-1570102676344-e39d8df2614e?q=80&w=800&auto=format&fit=crop" alt="Lonavala" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white font-bold text-2xl">Lonavala</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Corporate Services */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-inner">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">B2B Service Promise</h2>
                            <ul className="grid md:grid-cols-2 gap-6">
                                <li className="flex items-start gap-3">
                                    <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">MICE Travel Services</h4>
                                        <p className="text-sm text-muted-foreground">Expert handling of Meetings, Incentives, Conferences, and Exhibitions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Incentive Travel Programs</h4>
                                        <p className="text-sm text-muted-foreground">Motivate your team with curated luxury travel experiences and rewards.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Plane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Employee Travel Management</h4>
                                        <p className="text-sm text-muted-foreground">Complete logistics support: Flights, Cabs, Hotels & Gala Event management.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Company Offsite Tour Planner</h4>
                                        <p className="text-sm text-muted-foreground">We design itineraries that balance work sessions with team bonding fun.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>



                {/* Compliance & Trust Section (B2B E-E-A-T) */}
                <section id="corporate-trust" className="py-16 bg-slate-50 dark:bg-slate-900 border-y">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">Why Companies in Bhilai & Raipur Trust Rudraksh Safar</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Rudraksh Safar works with manufacturing units, IT firms, and SMEs across Bhilai and Raipur to deliver structured corporate travel
                                    with proper documentation, GST invoices, and accountable coordination.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <Card className="bg-white dark:bg-background border-blue-100 dark:border-blue-900">
                                    <CardContent className="p-6">
                                        <FileText className="w-10 h-10 text-blue-600 mb-4" />
                                        <h3 className="font-bold text-xl mb-2">100% GST Billing</h3>
                                        <p className="text-sm text-muted-foreground">Get valid GST invoices for all expenses (Flights, Hotels, Transport) to claim ITC benefits effortlessly.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white dark:bg-background border-green-100 dark:border-green-900">
                                    <CardContent className="p-6">
                                        <Users className="w-10 h-10 text-green-600 mb-4" />
                                        <h3 className="font-bold text-xl mb-2">Dedicated Account Manager</h3>
                                        <p className="text-sm text-muted-foreground">Single point of contact for all your changes, cancellations, and special requests. No call center loops.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white dark:bg-background border-purple-100 dark:border-purple-900">
                                    <CardContent className="p-6">
                                        <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />
                                        <h3 className="font-bold text-xl mb-2">Vendor Coordination</h3>
                                        <p className="text-sm text-muted-foreground">We handle the hotel, cab driver, and event venue coordination so your HR team can relax.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table: Generic vs Specialist */}
                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose a Corporate Specialist?</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-background shadow-lg rounded-xl overflow-hidden border">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="p-4 text-left">Feature</th>
                                        <th className="p-4 text-left">Generic Travel Agent</th>
                                        <th className="p-4 text-left bg-blue-700">Rudraksh Safar (Corporate Div)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr>
                                        <td className="p-4 font-semibold">GST Invoice</td>
                                        <td className="p-4 text-red-500"><X className="w-4 h-4 inline" /> Often Missing / Unclear</td>
                                        <td className="p-4 text-green-600 font-bold"><Check className="w-4 h-4 inline" /> Guaranteed (ITC Compliant)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Corporate Contracts</td>
                                        <td className="p-4 text-red-500">Retail Rates (Higher)</td>
                                        <td className="p-4 text-green-600"><Check className="w-4 h-4 inline" /> B2B Negotiated Rates</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Risk Management</td>
                                        <td className="p-4">Low (You are on your own)</td>
                                        <td className="p-4 text-green-600">High (Support during delays/strikes)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Vendor Coordination</td>
                                        <td className="p-4">Limited (Booking only)</td>
                                        <td className="p-4 text-green-600">End-to-End (Event Execution)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* B2B Decision-Maker Q&A */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-2">Expert Answers for Corporate Planners</h2>
                            <p className="text-muted-foreground">Clear answers about billing, capacity, and MICE capabilities.</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "What are corporate tour packages?",
                                    a: "Corporate tour packages are professionally managed travel solutions for companies to organize offsites, conferences, team outings, and incentive trips with complete logistical support."
                                },
                                {
                                    q: "Do you provide GST invoices for corporate travel?",
                                    a: "Yes, Rudraksh Safar provides GST-compliant invoices for all components (Flights, Hotels, Transport), ensuring your company can claim Input Tax Credit (ITC) without issues."
                                },
                                {
                                    q: "Can corporate tours be customized?",
                                    a: "Absolutely. We customize itineraries based on your budget, team size, and goals—whether it’s a relaxing beach retention trip to Goa or a high-intensity training camp in Lonavala."
                                },
                                {
                                    q: "What is MICE tourism and do you handle it?",
                                    a: "MICE stands for Meetings, Incentives, Conferences, and Exhibitions. Yes, we are MICE specialists in Bhilai, handling huge dealer meets and corporate conferences with venue and AV booking."
                                },
                                {
                                    q: "How many employees can be managed?",
                                    a: "We have experience managing groups ranging from small executive teams of 10 to large dealer meets of 200+ people, coordinating multiple buses and hotels simultaneously."
                                },
                                {
                                    q: "Are international corporate tours possible?",
                                    a: "Yes, we organize international offsites to popular destinations like Dubai, Thailand (Phuket/Bangkok), and Vietnam with visa assistance and forex support."
                                },
                                {
                                    q: "Is Raipur/Bhilai suitable for corporate offsites?",
                                    a: "Yes, for short 1-day events, resorts like Mayfair Raipur or local clubs in Bhilai are excellent. For overnight trips, we recommend nearby jungle resorts like Gangrel or Barnawapara."
                                }
                            ].map((item, index) => (
                                <div key={index} itemScope itemType="https://schema.org/Question" className="bg-background border rounded-lg overflow-hidden">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value={`item-${index}`} className="border-b-0">
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50">
                                                <span itemProp="name" className="text-left font-semibold text-lg flex items-start gap-3">
                                                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                                                    {item.q}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 py-4 bg-slate-50/50" itemScope itemType="https://schema.org/Answer">
                                                <p itemProp="text" className="text-muted-foreground leading-relaxed">
                                                    {item.a}
                                                    {index === 5 && (
                                                        <span className="block mt-2 text-sm text-blue-600">
                                                            Interested in flying? Check our <Link to="/tour-packages-from-raipur" className="underline font-semibold">company trips departing from Raipur airport</Link>.
                                                        </span>
                                                    )}
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sticky B2B Proposal CTA */}
                <div className="fixed bottom-4 left-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none">
                    <div className="pointer-events-auto w-full md:w-auto">
                        <Button size="lg" className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white shadow-2xl rounded-full font-bold h-14 px-8 border-2 border-white/20" asChild>
                            <a href="https://wa.me/919406182174?text=Requesting Corporate Tour Proposal for my company" className="flex items-center justify-center gap-2">
                                <FileDown className="w-5 h-5" /> Request Corporate Proposal
                            </a>
                        </Button>
                    </div>
                </div>

                <RelatedServices mode="packages" />

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CorporateTourPackagesBhilai;
