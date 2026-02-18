import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Users, Train, Plane, Phone, CheckCircle, ArrowRight, Clock, Shield } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Extensive 40+ FAQs for Raipur Page
const raipurFAQs = [
    // Planning & Best Time
    { q: "What is the best time for a Ladakh trip from Raipur?", a: "The best time is from May to September. During these months, the weather is pleasant, and all roads (including Manali-Leh) are open. Flights from Swami Vivekananda Airport (RPR) are also reliable." },
    { q: "How many days are needed for a Ladakh trip from Raipur?", a: "Considering travel time from Raipur to Delhi/Leh, we recommend a duration of 8 to 10 days. This allows for acclimatization and a relaxed itinerary covering Nubra and Pangong." },
    { q: "Is it possible to visit Ladakh from Raipur in winter?", a: "Yes, but only via flights. Roads are closed. Winter trips (Nov-Feb) are for adventure seekers interested in the Chadar Trek or snow leopards." },
    { q: "Do I need a passport for Ladakh travel?", a: "No, Indian citizens (including Chhattisgarh residents) do not need a passport. Any valid government ID like Aadhar Card or Voter ID is sufficient." },
    { q: "Can I plan a budget trip to Ladakh from Raipur?", a: "Absolutely. Opting for train travel to Delhi (Chhattisgarh Express), shared taxis in Ladakh, and homestays can significantly reduce costs." },

    // Connectivity (Raipur Specific)
    { q: "How to reach Ladakh from Raipur by flight?", a: "There are no direct flights. You typically fly Raipur (RPR) -> Delhi (DEL) -> Leh (IXL). The total travel time can be around 5-7 hours depending on the layover." },
    { q: "Is there a direct train from Raipur to Ladakh?", a: "No, there is no railway station in Ladakh. The nearest major railhead is Jammu Tawi or Chandigarh. Most travelers from Raipur take a train to Delhi and then fly or take a Volvo bus." },
    { q: "Which train is best for Raipur to Delhi travel?", a: "The Chhattisgarh Express and Rajdhani Express are popular choices. We recommend the Rajdhani for speed and comfort." },
    { q: "Can we drive from Raipur to Ladakh?", a: "It is a very long drive (approx. 2000+ km). It takes about 4-5 days of driving just to reach Manali/Srinagar. Not recommended unless you have extensive driving experience and time." },
    { q: "Do you arrange flight tickets from Raipur?", a: "Yes, Rudraksh Safar provides end-to-end ticketing assistance from Swami Vivekananda Airport to Leh." },

    // Tour Packages & Cost
    { q: "What is the starting price of Ladakh packages from Raipur?", a: "Our packages start from ₹18,500 (ex-Leh). Including flights from Raipur, a complete trip might cost between ₹35,000 to ₹50,000 depending on the season." },
    { q: "Are meals included in the package?", a: "Yes, our standard packages include Breakfast and Dinner (MAP Plan). Lunch is usually on your own as you will be traveling during the day." },
    { q: "Can we customize our itinerary?", a: "Yes! Since we are a local agency based in Bhilai, you can visit our office or call us to tailor the trip exactly to your needs." },
    { q: "Do you offer group discounts for families from Raipur?", a: "Yes, we have special prices for groups of 6 or more traveling together from Chhattisgarh." },
    { q: "Is there a refund policy if I cancel?", a: "We have a transparent cancellation policy. Please check our terms or contact our Raipur support team for details." },

    // Health & Safety
    { q: "Is Ladakh safe for children from Chhattisgarh plains?", a: "Yes, provided you acclimatize well. The altitude is high, so 2 days rest in Leh is mandatory. Consult your pediatrician before traveling." },
    { q: "How to handle altitude sickness coming from low altitude like Raipur?", a: "Raipur is near sea level, while Leh is at 11,500ft. Drink plenty of water (3-4 liters), avoid alcohol, and take Diamox if prescribed by a doctor." },
    { q: "Is oxygen available in your vehicles?", a: "Yes, every Rudraksh Safar vehicle carries a portable oxygen cylinder for emergencies." },
    { q: "Is it safe for senior citizens?", a: "Yes, many seniors visit Ladakh. We recommend a leisurely itinerary with fewer travel hours per day." },
    { q: "What if someone gets sick during the trip?", a: "Our team is trained to handle emergencies. We will immediately move the patient to a lower altitude or the nearest hospital (Leh has a good district hospital)." },

    // Local Travel
    { q: "Do we need an Inner Line Permit?", a: "Yes, ILP is required for Nubra, Pangong, etc. We arrange this for you in advance." },
    { q: "Can I use my prepaid SIM from Raipur in Ladakh?", a: "No. Prepaid SIM cards from outside Ladakh do NOT work. You need a postpaid connection (BSNL, Airtel, Jio) or we can help you get a local SIM." },
    { q: "Is vegetarian food available easily?", a: "Yes, Ladakh has plenty of restaurants serving North Indian, Jain, and Tibetan vegetarian food." },
    { q: "What kind of clothes should I pack?", a: "Pack layers. Even in summer, nights can be cold. Thermals, a good jacket, and comfortable walking shoes are must-haves." },
    { q: "Can we rent bikes in Leh?", a: "Yes, we can arrange Royal Enfield rentals for you in Leh for local sightseeing or the whole circuit." },

    // Places to Visit
    { q: "Will we see snow in June?", a: "Yes, you will likely find snow at Khardung La and Chang La passes even in June/July." },
    { q: "Is Pangong Lake really blue?", a: "Yes! It changes shades of blue and green throughout the day. It's truly magical." },
    { q: "Can we do a camel ride?", a: "Yes, the double-humped Bactrian camel ride in Nubra Valley (Hunder) is a highlight." },
    { q: "What is Magnetic Hill?", a: "It's a gravity hill near Leh where vehicles appear to roll uphill against gravity. A must-visit spot!" },
    { q: "Are monasteries included in the tour?", a: "Yes, we cover major monasteries like Thiksey, Diskit, and Hemis." },

    // Booking & Rudraksh Safar
    { q: "Where is your office in Chhattisgarh?", a: "Our head office is in Bhilai-3, on GE Road. You are welcome to visit us for a face-to-face discussion." },
    { q: "How do I book a package?", a: "You can call us at +91-9406182174 or fill out the enquiry form on this page. We require a token advance to confirm." },
    { q: "Do you have a representative in Ladakh?", a: "Yes, we have our own team and fleet in Leh to ensure you are well taken care of." },
    { q: "Can I join a group tour alone?", a: "Yes! We have many solo travelers (men and women) joining our mixed group departures from Raipur." },
    { q: "Why choose Rudraksh Safar over Delhi agents?", a: "We offer local trust, face-to-face accountability in Chhattisgarh, and end-to-end support including your journey from Raipur to Delhi." },

    // Miscellaneous
    { q: "Is alcohol allowed in Ladakh?", a: "Alcohol is available in Leh but highly discouraged during the first 2 days due to AMS risk." },
    { q: "Are ATM services available?", a: "ATMs are available in Leh City. Carrying cash is recommended for remote areas like Pangong and Nubra." },
    { q: "Is Wi-Fi available in hotels?", a: "Most hotels in Leh have Wi-Fi. It might be intermittent in Nubra and Pangong." },
    { q: "Can we take photos everywhere?", a: "Yes, except in sensitive military zones near the border. Always ask before photographing locals." },
    { q: "What language do locals speak?", a: "Ladakhi is the local language, but Hindi and English are widely understood and spoken." },

    // Specific Scenarios
    { q: "What if my flight from Raipur gets delayed?", a: "We monitor flight statuses. If you miss a connection, our team will assist you in rescheduling (subject to airline policies)." },
    { q: "Can we extend our trip to Kashmir?", a: "Yes! We offer a popular 'Ladakh via Kashmir' package where you fly to Srinagar first." },
    { q: "Do you organize bike trips from Bhilai?", a: "We organize the bike trip starting from Manali or Leh. You travel from Bhilai to the starting point by train/flight." },
    { q: "Is camping safe for families?", a: "Yes, our camps in Nubra and Pangong are Swiss Tents with attached washrooms and security." },
    { q: "What souvenirs can I buy?", a: "Apricots, Pashmina shawls, and Tibetan handicrafts are great buys in Leh Market." }
];

const LadakhFromRaipur = () => {
    const heroImage = "/images/ladakh/ladakh-img-2.jpeg";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar Raipur",
        "description": "Best Ladakh Tour Packages from Raipur. 8-10 Days itinerary with flight & train assistance. Local office in Bhilai. Trusted by 500+ Chhattisgarh travelers.",
        "areaServed": ["Raipur", "Bhilai", "Durg", "Bilaspur", "Chhattisgarh"],
        "telephone": "+91-9406182174",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhilai",
            "addressRegion": "Chhattisgarh"
        }
    };

    // Generate FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": raipurFAQs.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <main className="min-h-screen bg-background">
            <SEOHead
                title="Ladakh Tour Packages from Raipur 2026 | Flight & Train Options"
                description="Book Ladakh Tour Packages from Raipur. Join our group departures from Chhattisgarh. Complete guide on flights, trains, and itinerary. 40+ Local FAQs."
                keywords="ladakh tour package from raipur, ladakh trip cost from raipur, raipur to leh ladakh flight, ladakh tour operator in raipur, best travel agent for ladakh in chhattisgarh"
                canonicalUrl="https://rudrakshsafar.com/ladakh-tour-packages-from-raipur"
                structuredData={structuredData}
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <Navbar />

            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt="Travelers from Raipur in Ladakh" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
                </div>
                <div className="relative z-10 container text-center px-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium text-sm mb-6 shadow-sm border border-secondary/50">
                        Trusted by 500+ Travelers from Raipur
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg leading-tight">
                        Ladakh Tour Packages <br className="hidden md:block" /> from Raipur
                    </h1>
                    <p className="text-lg text-white/90 font-medium max-w-2xl mx-auto">
                        The ultimate Himalayan expedition, planned by your local experts in Chhattisgarh.
                    </p>
                </div>
            </div>

            <div className="container py-4">
                <Link to="/domestic-tours/ladakh" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-500 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Ladakh Guide
                </Link>
            </div>

            <div className="container py-12 lg:py-20">

                {/* Local Intro Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Raipur to the Himalayas: A Journey of a Lifetime</h2>
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                            For travelers from the plains of <strong>Raipur (Chhattisgarh)</strong>, Ladakh feels like a different planet. The shift from our humid climate to the dry, cold desert of Leh is drastic—and magical.
                        </p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            At <strong>Rudraksh Safar</strong>, we understand specific needs of Raipur travelers—from managing the long train journey to Delhi, to ensuring acclimatization for those used to low altitudes. We don't just sell a package; we guide you from your doorstep in Raipur to the highest passes in the world.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-3 bg-secondary/10 p-4 rounded-lg">
                                <Users className="w-8 h-8 text-secondary" />
                                <div>
                                    <span className="block font-bold">Group Batches</span>
                                    <span className="text-xs text-muted-foreground">From Raipur Jn.</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-secondary/10 p-4 rounded-lg">
                                <MapPin className="w-8 h-8 text-secondary" />
                                <div>
                                    <span className="block font-bold">Local Office</span>
                                    <span className="text-xs text-muted-foreground">Nearby in Bhilai</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-gold/20 rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
                        <img src="/images/ladakh/ladakh-img-8.jpeg" className="relative rounded-xl shadow-2xl" alt="Raipur Group in Ladakh" />
                    </div>
                </div>

                {/* Connectivity: How to Reach */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold mb-10 text-center">How to Reach Ladakh from Raipur</h2>
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Flight Option */}
                        <div className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-gold/30 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Plane className="w-24 h-24" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Plane className="w-5 h-5 text-gold" /> By Flight (Fastest)
                            </h3>
                            <div className="space-y-4 text-sm text-muted-foreground">
                                <p>There are no direct flights. The best route is:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Raipur (RPR) → Delhi (DEL)</strong> (2 hrs)</li>
                                    <li>Layover in Delhi</li>
                                    <li><strong>Delhi (DEL) → Leh (IXL)</strong> (1.5 hrs)</li>
                                </ul>
                                <p className="text-green-500 font-bold flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Time: ~6-8 Hours</p>
                            </div>
                        </div>

                        {/* Train Option */}
                        <div className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-gold/30 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Train className="w-24 h-24" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Train className="w-5 h-5 text-gold" /> By Train (Budget)
                            </h3>
                            <div className="space-y-4 text-sm text-muted-foreground">
                                <p>Popular trains to Delhi:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Rajdhani Exp (22691):</strong> Fastest option.</li>
                                    <li><strong>Chhattisgarh Exp (18237):</strong> Budget but slow.</li>
                                    <li><strong>Gondwana Exp (12409):</strong> Good timing.</li>
                                </ul>
                                <p className="text-green-500 font-bold flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Time: ~20-28 Hours</p>
                            </div>
                        </div>

                        {/* Our Support */}
                        <div className="bg-secondary/10 border border-secondary/20 p-8 rounded-2xl relative overflow-hidden">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-secondary" /> Rudraksh Assistance
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                We don't leave you figuring this out alone.
                            </p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> Flight/Train Booking Assistance</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> Delhi Transfer Arrangements</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary" /> Group Leader from Raipur (for large batches)</li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* Package Categories Placeholder */}
                <section className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif font-bold mb-4">Our Signature Ladakh Routes</h2>
                        <p className="text-muted-foreground">Choose the path that calls to you. Detailed itineraries available on request.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Srinagar Route */}
                        <Link to="/ladakh-tour-via-srinagar" className="group block relative rounded-2xl overflow-hidden aspect-video">
                            <img src="/images/ladakh/ladakh-img-9.jpeg" alt="Srinagar Route" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Via Srinagar (Golden Route)</h3>
                                <p className="text-white/80 text-sm mb-4">Raipur → Delhi → Srinagar → Leh → Manali → Delhi</p>
                                <span className="flex items-center gap-2 text-gold font-bold">View Details <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        </Link>
                        {/* Manali Route */}
                        <Link to="/ladakh-tour-via-manali" className="group block relative rounded-2xl overflow-hidden aspect-video">
                            <img src="/images/ladakh/ladakh-img-10.jpeg" alt="Manali Route" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Via Manali (Adventure Route)</h3>
                                <p className="text-white/80 text-sm mb-4">Raipur → Delhi → Manali → Leh → Srinagar → Delhi</p>
                                <span className="flex items-center gap-2 text-gold font-bold">View Details <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 p-6 bg-muted/20 rounded-xl border border-border text-center">
                        <p className="text-muted-foreground italic mb-4">[Detailed day-wise itinerary will be provided by Rudraksh Safar]</p>
                        <div className="flex justify-center gap-4">
                            <Button asChild className="bg-gold text-black font-bold">
                                <Link to="/contact">Request PDF Itinerary</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 40+ FAQ Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold mb-10 text-center">Common Questions from Raipur Travelers</h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                        {raipurFAQs.map((faq, idx) => (
                            <Accordion key={idx} type="single" collapsible>
                                <AccordionItem value={`item-${idx}`} className="border-b border-border">
                                    <AccordionTrigger className="text-left font-medium hover:text-gold">{faq.q}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <div className="bg-secondary text-secondary-foreground p-12 rounded-2xl text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Ready to Plan from Raipur?</h2>
                        <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
                            Don't settle for a generic package. Book with <strong>Rudraksh Safar</strong>, your local Himalayan experts right here in Chhattisgarh.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 border-none">
                                <Link to="/contact">Visit Bhilai Office</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-black text-black hover:bg-black/10">
                                <a href="tel:+919406182174">Call +91-9406182174</a>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default LadakhFromRaipur;
