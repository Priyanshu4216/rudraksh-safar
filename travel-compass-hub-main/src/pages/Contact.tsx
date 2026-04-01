import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { MapPin, Clock, Phone, Mail, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import FAQSection from '@/components/seo/FAQSection';

const Contact = () => {
    const faqs = [
        {
            question: "Do you offer offline consultation at your Bhilai office?",
            answer: "Yes, we highly encourage offline consultations. Building trust face-to-face is our priority. You can visit our headquarters at GE Road, Bhilai 3, during our operating hours (10:00 AM to 9:00 PM) for personalized itinerary planning."
        },
        {
            question: "Can I book a tour package purely online without visiting?",
            answer: "Absolutely. We service clients globally. You can coordinate your entire booking via WhatsApp, video calls, and secure email transactions. Our digital payment gateways are 100% secure and encrypted."
        },
        {
            question: "How fast do you respond to WhatsApp inquiries?",
            answer: "Our dedicated travel agents aim to respond to all WhatsApp and phone inquiries within 15-30 minutes during active business hours. For complex international itineraries, a detailed quote takes 24 hours to prepare."
        },
        {
            question: "Do you charge consultation fees for itinerary planning?",
            answer: "No, initial consultations and preliminary itinerary drafts are completely free of charge. We believe in showing you the value of our expertise before any financial commitment is made."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Contact Rudraksh Safar | Top Travel Agency in Bhilai, Chhattisgarh</title>
                <meta name="description" content="Get in touch with Rudraksh Safar, the best travel agency in Bhilai. Call us or visit our GE Road office for customized flight bookings, tour packages, and visa services." />
                <meta name="keywords" content="travel agency bhilai, tour operator chhattisgarh, rudraksh safar contact, best travel agent near me, holiday planner bhilai" />
                <link rel="canonical" href="https://rudrakshsafar.com/contact" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact Rudraksh Safar",
                        "description": "Get in touch with Rudraksh Safar, the best travel agency in Bhilai.",
                        "url": "https://rudrakshsafar.com/contact",
                        "mainEntity": {
                            "@type": "TravelAgency",
                            "name": "Rudraksh Safar",
                            "image": "https://rudrakshsafar.com/logo.png",
                            "telephone": "+919203650311",
                            "email": "rudrakshsafar@gmail.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Shop No. 106, Satya Shanti Complex, Near Amantran Hotel, Supela",
                                "addressLocality": "Durg",
                                "addressRegion": "Chhattisgarh",
                                "postalCode": "490021",
                                "addressCountry": "IN"
                            },
                            "department": {
                                "@type": "TravelAgency",
                                "name": "Sanjeev Enterprises (Associate Office)",
                                "telephone": "+919229150311",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "GE Road, In Front of Petrol Pump",
                                    "addressLocality": "Bhilai-3, Durg",
                                    "addressRegion": "Chhattisgarh",
                                    "postalCode": "490021",
                                    "addressCountry": "IN"
                                }
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "21.2120",
                                "longitude": "81.3733"
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday"
                                ],
                                "opens": "10:00",
                                "closes": "21:00"
                            }
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-24 font-sans">
                {/* Hero / Breadcrumb Section */}
                <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12 border-b border-border">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }]} />
                        <div className="mt-8">
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">Let's Plan Your Next Escapade</h1>
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                Whether you're looking for a quick weekend getaway, a complex multi-country European tour, or specialized corporate ticketing—our destination experts in Bhilai are ready to assist you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Contact Component */}
                <ContactSection />

                {/* Why Choose Us & Office Directions (SEO Content) */}
                <section className="py-20 bg-muted/30 border-t border-border mt-12">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl font-serif font-bold text-foreground">Why Consult With Rudraksh Safar?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    In an era of automated booking engines and faceless corporate aggregators, Rudraksh Safar brings the human element back to travel planning. Our headquarters in Bhilai is staffed not by call-center operators, but by passionate globetrotters who have personally visited the destinations they sell.
                                </p>

                                <div className="space-y-6 mt-8">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0 h-min"><Award className="w-6 h-6" /></div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-1 text-foreground">Decades of Local Trust</h3>
                                            <p className="text-muted-foreground">Serving the Chhattisgarh region with an unblemished reputation for transparency. We never add hidden surcharges to our final invoices.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-red-500/10 rounded-xl text-red-600 shrink-0 h-min"><ShieldCheck className="w-6 h-6" /></div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-1 text-foreground">24/7 Ground Support</h3>
                                            <p className="text-muted-foreground">When you cross borders, algorithms cannot help you during an emergency. You get a direct WhatsApp line to a senior agent who monitors your trip 24/7 until you return home safely.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-green-500/10 rounded-xl text-green-600 shrink-0 h-min"><HeartHandshake className="w-6 h-6" /></div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-1 text-foreground">Bespoke B2B Deals</h3>
                                            <p className="text-muted-foreground">Because we contract directly with Destination Management Companies (DMCs) overseas, we pass wholesale pricing onto our direct consumers, bypassing middleman markups.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card border border-border shadow-xl rounded-3xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full z-0" />
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10 text-foreground"><MapPin className="text-primary w-6 h-6" /> Visit Our Offices</h3>
                                <div className="space-y-6 relative z-10">
                                    <p className="text-muted-foreground leading-relaxed">
                                        We welcome walk-ins for travel consultations. Visit our Main Office in Supela, or our Associate Office on GE Road.
                                    </p>

                                    <div className="space-y-4 bg-muted/40 p-6 rounded-2xl border border-border/50">
                                        <div className="flex items-start gap-3">
                                            <span className="text-xl">🏢</span>
                                            <div>
                                                <span className="block font-bold text-foreground">Main Office (Rudraksh Safar)</span>
                                                <span className="text-muted-foreground text-sm block">Shop No. 106, Satya Shanti Complex,<br />Near Amantran Hotel, Supela, Chhattisgarh 490021</span>
                                                <span className="text-primary text-sm font-semibold block mt-1">+91 92036 50311</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 bg-muted/20 p-6 rounded-2xl border border-border/50">
                                        <div className="flex items-start gap-3">
                                            <span className="text-xl">🏬</span>
                                            <div>
                                                <span className="block font-bold text-foreground">Associate Office (Sanjeev Enterprises)</span>
                                                <span className="text-muted-foreground text-sm block">GE Road, In Front of Petrol Pump,<br />Bhilai-3, Durg, Chhattisgarh 490021</span>
                                                <span className="text-primary text-sm font-semibold block mt-1">+91 92291 50311</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 mt-4 px-2">
                                        <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <div>
                                            <span className="block font-bold text-foreground">Operating Hours</span>
                                            <span className="text-muted-foreground text-sm block">Mon to Sun: 10:00 AM - 9:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Extensive FAQs */}
                <section className="py-20 border-t border-border">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <FAQSection title="Frequently Asked Questions About Our Services" faqs={faqs} />
                    </div>
                </section>

                {/* INTERNAL HUB LINKS (PHASE 2C) */}
                <section className="py-12 bg-muted/20 border-t border-border">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <h3 className="text-xl font-bold mb-6 text-foreground">Explore Our Packages</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/international-packages" className="px-5 py-2.5 border bg-background rounded-full text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-sm">
                                🌍 International Tours
                            </a>
                            <a href="/domestic-packages" className="px-5 py-2.5 border bg-background rounded-full text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-sm">
                                🇮🇳 Domestic Escapes
                            </a>
                            <a href="/currency-guide" className="px-5 py-2.5 border bg-background rounded-full text-sm hover:bg-slate-50 transition flex items-center gap-2 shadow-sm">
                                💸 Currency Guide
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Contact;
