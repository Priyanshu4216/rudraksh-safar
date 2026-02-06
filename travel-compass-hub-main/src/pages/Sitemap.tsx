import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Map, Plane, FileText, Globe, MapPin, Briefcase, Ticket, Building, Compass, Info, Search, ShieldCheck, Sparkles, AlertCircle, HelpCircle, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import { getAllCategories } from './blog/BlogData';

const Sitemap = () => {
    // Content Data
    const sections = [
        {
            title: "Main Pages",
            description: "These pages explain who we are, how we work, and how travellers can connect with us.",
            icon: Compass,
            links: [
                { name: 'Home', href: '/', desc: 'Overview of travel services, deals, and packages' },
                { name: 'About Us', href: '/about-rudraksh-safar', desc: 'Information about Rudraksh Safar and our approach' },
                { name: 'Why Choose Us', href: '/why-choose-us', desc: 'Reasons travellers trust us for tours and bookings' },
                { name: 'How It Works', href: '/how-it-works', desc: 'Step-by-step explanation of our booking process' },
                { name: 'Contact Us', href: '/#contact', desc: 'Get in touch via call, WhatsApp, or enquiry form' },
            ]
        },
        {
            title: "Holiday Packages (By Type)",
            description: "Categorised to help travellers choose trips based on travel purpose, budget, and preferences.",
            icon: Plane,
            links: [
                { name: 'Domestic Tour Packages', href: '/domestic-packages', desc: 'Travel across India' },
                { name: 'International Tour Packages', href: '/international-packages', desc: 'Overseas holidays' },
                { name: 'Honeymoon Packages', href: '/honeymoon-packages', desc: 'Romantic travel for couples' },
                { name: 'Family Tour Packages', href: '/family-packages', desc: 'Comfortable trips for families' },
                { name: 'Adventure Packages', href: '/adventure-packages', desc: 'Trekking, wildlife, and active travel' },
                { name: 'Luxury Packages', href: '/luxury-packages', desc: 'Premium hotels and experiences' },
                { name: 'Budget Tour Packages', href: '/budget-tour-packages', desc: 'Affordable travel options' },
                { name: 'Summer Holiday Packages', href: '/summer-holiday-packages', desc: 'Seasonal vacation planning' },
                { name: 'Group Tour Packages', href: '/group-tour-packages', desc: 'Travel for families, friends, and organisations' },
                { name: 'Island Holiday Packages', href: '/beach-holiday-packages', desc: 'Coastal destinations' }, // Renaming Beach to Island/Beach for var
                { name: 'Mountain Holiday Packages', href: '/mountain-holiday-packages', desc: 'Hill stations and mountain travel' },
            ]
        },
        {
            title: "Local Travel Services (Bhilai & Durg)",
            description: "We provide dedicated local travel assistance for travellers from Bhilai and nearby areas.",
            icon: MapPin,
            links: [
                { name: 'Travel Agent in Bhilai', href: '/travel-agent-bhilai', desc: 'Local travel agency services' },
                { name: 'Travel Agent in Durg', href: '/travel-agent-durg', desc: 'Expert agents in Durg' },
                { name: 'Tour Packages from Bhilai', href: '/tour-packages-bhilai', desc: 'Trips starting from Bhilai' },
                { name: 'Best Tour Packages from Bhilai', href: '/tour-packages-from-bhilai', desc: 'Top-rated packages' },
                { name: 'International Packages from Bhilai', href: '/international-tour-packages-bhilai', desc: 'Foreign tours from Bhilai' },
                { name: 'International Tours from Bhilai', href: '/tour-packages-from-bhilai/international-tours', desc: 'Global destinations' },
                { name: 'India Tour Packages from Bhilai', href: '/india-tour-packages-bhilai', desc: 'Domestic trips' },
                { name: 'Weekend Getaways from Bhilai', href: '/weekend-getaways-bhilai', desc: 'Short trips nearby' },
                { name: 'Cheapest Trips from Bhilai', href: '/tour-packages-from-bhilai/cheapest-trips', desc: 'Budget travel guide' },
                { name: 'Picnic Spots Near Bhilai', href: '/tour-packages-from-bhilai/picnic-spots', desc: 'Day outing places' },
                { name: 'Corporate Tour Packages Bhilai', href: '/tour-packages-from-bhilai/corporate-tours', desc: 'Business travel solutions' },
                { name: 'Honeymoon Packages from Bhilai', href: '/tour-packages-from-bhilai/honeymoon-packages', desc: 'Romantic escapes' },
                { name: 'Travel Guide from Bhilai', href: '/travel-guide-from-bhilai', desc: 'Local travel tips' },
            ]
        },
        {
            title: "Local Travel Services (Raipur)",
            description: "Services designed for travellers from Raipur and surrounding regions.",
            icon: Building,
            links: [
                { name: 'Travel Agent in Raipur', href: '/travel-agent-raipur', desc: 'Agencies in Raipur' },
                { name: 'Tour Packages Raipur', href: '/tour-packages-raipur', desc: 'Holiday packages' },
                { name: 'Tour Packages from Raipur', href: '/tour-packages-from-raipur', desc: 'Trips starting from Raipur' },
                { name: 'International Tours from Raipur', href: '/tour-packages-from-raipur/international-tours', desc: 'Global travel' },
                { name: 'Weekend Getaways from Raipur', href: '/tour-packages-from-raipur/weekend-getaways', desc: 'Short breaks' },
            ]
        },
        {
            title: "Services",
            description: "High-intent pages for travellers ready to book specific services.",
            icon: Ticket,
            links: [
                { name: 'Flight Booking Service', href: '/flight-booking-bhilai', desc: 'Domestic & Intl flights' },
                { name: 'Train Booking Service', href: '/train-booking-bhilai', desc: 'Confirmed rail tickets' },
                { name: 'Bus Booking Service', href: '/bus-booking-bhilai', desc: 'Intercity bus tickets' },
                { name: 'Ticket Booking Assistance', href: '/ticket-booking-bhilai', desc: 'General ticketing' },
                { name: 'Cab Rental Service', href: '/cab-rental', desc: 'Local & Outstation cabs' },
                { name: 'Hotel Booking Assistance', href: '/hotel-booking', desc: 'Hotel Booking (GST Invoices & Offline Rates)' },
                { name: 'Passport Agent Services', href: '/passport-agent-bhilai', desc: 'New & Renewal assistance' },
                { name: 'Visa Agent Services', href: '/visa-agent-bhilai', desc: 'Tourist & Business visas' },
                { name: 'Cruise Booking', href: '/cruise-booking', desc: 'Domestic and international cruise assistance' },
            ]
        },
        {
            title: "Visa Services (By Country)",
            description: "Comprehensive visa guidance and assistance for popular international destinations.",
            icon: Globe,
            links: [
                { name: 'Dubai Visa', href: '/visa/dubai', desc: 'UAE Tourist Visa' },
                { name: 'Thailand Visa', href: '/visa/thailand', desc: 'Visa on Arrival / E-Visa' },
                { name: 'Singapore Visa', href: '/visa/singapore', desc: 'Tourist Visa' },
                { name: 'Bali Visa', href: '/visa/bali', desc: 'Indonesia Visa' },
                { name: 'Maldives Visa', href: '/visa/maldives', desc: 'Free Visa on Arrival' },
                { name: 'Turkey Visa', href: '/visa/turkey', desc: 'E-Visa Assistance' },
                { name: 'Schengen Visa', href: '/visa/schengen', desc: 'Europe Travel Visa' },
                { name: 'Sri Lanka Visa', href: '/visa/sri-lanka', desc: 'ETA Service' },
                { name: 'Nepal Visa', href: '/visa/nepal', desc: 'Entry requirements' },
                { name: 'Malaysia Visa', href: '/visa/malaysia', desc: 'Digital Arrival Card' },
            ]
        },
        {
            title: "Comparisons & Decision Guides (AI-Bait)",
            description: "Detailed breakdown of destinations and travel modes to help you decide.",
            icon: Sparkles,
            links: [
                { name: 'Where To Go From Bhilai', href: '/guides/where-to-go-from-bhilai', desc: 'Weekend & Long Trip Guide' },
                { name: 'Goa vs Manali', href: '/comparisons/goa-vs-manali-from-chhattisgarh', desc: 'Detailed cost & vibe comparison' },
            ]
        },
        {
            title: "Travel Guides & Tips",
            description: "Educational resources to help travellers plan better and travel safely.",
            icon: FileText,
            links: [
                { name: 'For Travellers Hub', href: '/for-travellers', desc: 'Pre-Travel Authority (Visa, Safety, Mistakes)' },
                { name: 'Visa Guide', href: '/visa-guide', desc: 'General visa info' },
                { name: 'Passport Guide', href: '/passport-guide', desc: 'Passport procedures' },
                { name: 'Visa Free Countries', href: '/visa-free-countries', desc: 'Where to go without visa' },
                { name: 'Travel Checklist', href: '/travel-checklist', desc: 'Packing & prep' },
                { name: 'Currency Guide', href: '/currency-guide', desc: 'Money Planning (UPI, Forex & Cards)' },
                { name: 'Best Time to Visit', href: '/best-time-to-visit', desc: 'Seasonal planning' },
                { name: 'Travel Health & Safety', href: '/travel-health', desc: 'Vaccines & insurance' },
                { name: 'Travel Tips & Advice', href: '/travel-tips', desc: 'Smart travel hacks' },
                { name: 'After Booking Process', href: '/guides/after-booking-guide', desc: 'Timeline & Next Steps' },
            ]
        },
        {
            title: "Travel Blog & Guides (New)",
            description: "Expert travel advice, itineraries, and local insights from our editorial team.",
            icon: BookOpen,
            links: [
                { name: 'Blog Home', href: '/blog', desc: 'Latest articles and updates' },
                ...getAllCategories().map(cat => ({
                    name: cat.title,
                    href: `/blog/${cat.slug}`,
                    desc: cat.description
                }))
            ]
        },
        {
            title: "Frequently Asked Questions (FAQs)",
            description: "Direct answers to your specific booking and travel questions.",
            icon: HelpCircle,
            links: [
                { name: 'FAQ Hub', href: '/faqs', desc: 'Central knowledge base' },
                { name: 'Tour Package FAQs', href: '/faqs/tour-packages', desc: 'Inclusions & booking policies' },
                { name: 'Flight Booking FAQs', href: '/faqs/flight-booking', desc: 'Cancellation & baggage rules' },
                { name: 'Train Booking FAQs', href: '/faqs/train-booking', desc: 'Tatkal & IRCTC queries' },
                { name: 'Hotel Booking FAQs', href: '/faqs/hotel-booking', desc: 'Check-in & policies' },
                { name: 'Cab Booking FAQs', href: '/faqs/cab-booking', desc: 'Transport queries' },
                { name: 'Visa FAQs', href: '/faqs/visa-services', desc: 'Visa processing help' },
                { name: 'Passport FAQs', href: '/faqs/passport-services', desc: 'Passport application help' },
                { name: 'Cruise FAQs', href: '/faqs/cruise-booking', desc: 'Cruise travel details' },
            ]
        },
        {
            title: "Company & Legal Information",
            description: "Important legal and policy pages for transparency and compliance.",
            icon: Briefcase,
            links: [
                { name: 'Privacy Policy', href: '/privacy-policy', desc: 'Data protection' },
                { name: 'Terms & Conditions', href: '/terms-conditions', desc: 'Usage rules' },
                { name: 'Cancellation Policy', href: '/cancellation-policy', desc: 'Refund rules' },
                { name: 'Refund Policy', href: '/refund-policy', desc: 'Money back processes' },
                { name: 'Disclaimer', href: '/disclaimer', desc: 'Legal limits' },
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Site Map – Rudraksh Safar | Complete Website Directory</title>
                <meta name="description" content="Complete directory of Rudraksh Safar's travel services, packages, and guides. Designed for quick navigation and enhanced site structure." />
                <link rel="canonical" href="https://rudrakshsafar.com/sitemap" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">

                {/* Header Section */}
                <section className="bg-muted/30 py-20 border-b">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                            <Map className="w-4 h-4" />
                            <span className="text-sm font-medium">Complete Website Directory</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Site Map – Rudraksh Safar
                        </h1>

                        <div className="flex justify-center mb-8">
                            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Sitemap', path: '/sitemap' }]} />
                        </div>

                        {/* TL;DR Summary Block */}
                        <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-6 shadow-sm text-left mb-8">
                            <LastUpdated className="mb-4" />
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-700 shrink-0 dark:bg-indigo-900/40 dark:text-indigo-300">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                        TL;DR (AI Summary)
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        This sitemap page provides a complete directory of all travel services, tour packages, destination guides, booking assistance, and local services offered by Rudraksh Safar. It helps users and search engines quickly navigate the website and discover relevant travel solutions from Bhilai, Raipur, and across India.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why This Page Exists */}
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center gap-2 text-foreground/80">
                                <Compass className="w-5 h-5" /> Why This Sitemap Page Exists
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-500" /> Help visitors find services</span>
                                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-500" /> Improve internal linking</span>
                                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-500" /> Assist search engines</span>
                                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-500" /> Build trust & authority</span>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Main Directory Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            {sections.map((section, index) => (
                                <Card key={index} className="border-muted hover:border-primary/50 transition-colors duration-300 flex flex-col">
                                    <CardHeader className="bg-muted/10 border-b border-border/50 pb-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                                                <section.icon className="w-5 h-5" />
                                            </div>
                                            <CardTitle className="text-xl">{section.title}</CardTitle>
                                        </div>
                                        <CardDescription className="text-sm leading-relaxed">
                                            {section.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6 flex-1">
                                        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                                            {section.links.map((link, i) => (
                                                <li key={i}>
                                                    <Link
                                                        to={link.href}
                                                        className="group block p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                                    >
                                                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full group-hover:bg-primary transition-colors" />
                                                            {link.name}
                                                        </div>
                                                        {link.desc && (
                                                            <div className="text-xs text-muted-foreground pl-3.5 mt-0.5 opacity-80 group-hover:opacity-100">
                                                                {link.desc}
                                                            </div>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO Benefits Section Removed as per request */}

                {/* Important Note */}
                <section className="py-10">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30">
                            <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold text-yellow-800 dark:text-yellow-400 mb-1">Important Note</h4>
                                <p className="text-xs text-yellow-700/80 dark:text-yellow-500/80">
                                    This sitemap is for navigational and informational purposes. Availability, pricing, and services are subject to confirmation at the time of enquiry or booking.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How To Use */}
                <section className="py-16 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">How to Use This Sitemap</h2>
                        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                            {["Quickly locate a specific service", "Discover new tour packages", "Navigate between related topics", "Understand full scope of services"].map((item, i) => (
                                <Badge key={i} variant="secondary" className="text-sm py-1.5 px-4 font-normal">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default Sitemap;
