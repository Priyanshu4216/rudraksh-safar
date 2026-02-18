import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Map, Users, Plane, CheckCircle, HelpCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Extensive 40+ FAQs for Chhattisgarh Page
const cgFAQs = [
    // State-Wide Connectivity
    { q: "How to plan a Ladakh trip from Chhattisgarh?", a: "Planning from Chhattisgarh requires connecting to Delhi first. Major railheads are Raipur, Bilaspur, and Durg. The airport in Raipur is the fastest gateway." },
    { q: "Is there a train from Bilaspur to Ladakh?", a: "No direct train. Bilaspur residents should take the Rajdhani or Chhattisgarh Express to Delhi, then proceed to Ladakh via flight or road." },
    { q: "Can travelers from Jagdalpur/Bastar join?", a: "Yes! We recommend taking the night bus/train to Raipur Airport and flying to Delhi to save time, as the journey from Bastar is long." },
    { q: "How much does a trip cost from Chhattisgarh?", a: "A complete package including travel to/from Chhattisgarh typically ranges from ₹35,000 to ₹55,000 per person, depending on flight rates." },
    { q: "Which is the best local agency in Chhattisgarh for Ladakh?", a: "Rudraksh Safar, based in Bhilai/Raipur, is the leading expert for Himalayan expeditions, having served 500+ local clients." },

    // Trip Planning
    { q: "What is the best month for Chhattisgarh people to visit?", a: "May and June are ideal to escape the Chhattisgarh heat. September is great for lower crowds. Avoid July-August if you dislike rain." },
    { q: "Do we need warm clothes?", a: "Yes! Unlike Chhattisgarh, Ladakh is a cold desert. Even in summer, temperatures drop to 5°C at night. Carry heavy woolens." },
    { q: "How many days leave should I take?", a: "Plan for at least 9-10 days leave. 2 days go into travel between Chhattisgarh and Delhi/Leh." },
    { q: "Is vegetarian food available?", a: "Yes, pure veg food is easily available. We can also arrange specific dietary requirements for Jain travelers." },
    { q: "Do I need a fitness certificate?", a: "Not officially for tourists, but a basic medical checkup is recommended due to the high altitude difference." },

    // Group Tours
    { q: "Do you have mixed groups from Chhattisgarh?", a: "Yes, we often pool travelers from Raipur, Bilaspur, and Durg into a single happy group for better bonding and cost-saving." },
    { q: "Is it safe for women travelers?", a: "Absolutely. Ladakh is very safe, and our group captains ensure security for all female travelers joining from the state." },
    { q: "Can we get a Hindi speaking driver?", a: "Yes, all our drivers and guides in Ladakh speak fluent Hindi, so communication is never an issue." },
    { q: "Do you organize college trips?", a: "Yes, we have special packages for colleges in Chhattisgarh (NIT, IIT, Ggu) with budget-friendly hostels and bike options." },
    { q: "What is the group size?", a: "Our groups typically have 12-15 people to ensure personal attention and a fun atmosphere." },

    // Health & Safety (Detailed)
    { q: "Is oxygen different in Ladakh vs Chhattisgarh?", a: "Yes. Chhattisgarh is low altitude. Ladakh is 11,000ft+. Oxygen is 30% less. You MUST acclimatize." },
    { q: "What medicines should I carry?", a: "Carry Diamox (for altitude), Paracetamol, and motion sickness pills. Also keep sunscreen handy." },
    { q: "What if I have BP or Diabetes?", a: "Control your levels before the trip. It is safe, but carry your medicines and inform our tour manager." },
    { q: "Is it safe for kids?", a: "Yes, kids above 5 years usually adapt well. Keep them hydrated. Avoid taking infants." },
    { q: "Are hospitals good there?", a: "Leh has a very good government hospital (SNM) and army hospitals for emergencies." },

    // Route & Sightseeing
    { q: "Manali or Srinagar - which is better for us?", a: "We recommend the Srinagar route for families (gradual height gain) and Manali route for youth (adventure)." },
    { q: "Can we see snow?", a: "Yes! Khardung La and Chang La passes have snow round the year." },
    { q: "Is the road dangerous?", a: "It is challenging but safe with expert drivers. We use heavy SUVs like Innova/Xylo for better stability." },
    { q: "How far is Nubra Valley?", a: "It is about 5-6 hours cross the Khardung La pass from Leh." },
    { q: "Can we stay at Pangong Lake?", a: "Yes, we arrange stays in cozy camps or wooden cottages right facing the lake." },

    // Logistics & Permits
    { q: "Do you handle permits?", a: "Yes, Inner Line Permits are included in our package. You just need to send us your ID." },
    { q: "Can I drive my own car from Chhattisgarh?", a: "You can, but it is a 2500km drive just to reach the start point. Only do it if you are an expert expedition driver." },
    { q: "What about mobile network?", a: "Only Postpaid works. Airtel, Jio, and BSNL have the best coverage in Leh." },
    { q: "Can I withdraw cash there?", a: "Yes, ATMs are in Leh. But bring enough cash from Chhattisgarh for small expenses." },
    { q: "Is power backup available?", a: "Leh has power. Pangong/Nubra run on generators for limited hours. Carry power banks." },

    // Booking
    { q: "How to book from Korba or Raigarh?", a: "You can book online or via video call. We can courier the merchandise/tickets if needed." },
    { q: "What is the booking amount?", a: "You can confirm by paying a token advance of ₹5,000 per person." },
    { q: "Do you provide flight tickets?", a: "Yes, we get corporate rates for flights from Raipur/Delhi. We can book them for you." },
    { q: "Is EMI available?", a: "We accept credit card EMIs for payment." },
    { q: "Can I cancel last minute?", a: "Cancellations adhere to policy. Last minute cancellations usually attract retention charges from hotels/airlines." },

    // Misc
    { q: "What gifts to bring back?", a: "Apricots, Seabuckthorn juice, and prayer flags are popular." },
    { q: "Is alcohol allowed?", a: "Yes, but strictly avoid it for the first 48 hours." },
    { q: "Can we dance/party?", a: "Light music is fine, but heavy exertion/dancing is bad for altitude sickness." },
    { q: "Do you provide a tour guide?", a: "For large groups, a tour leader accompanies. For small groups, the knowledgeable driver acts as a guide." },
    { q: "Is it cold in June?", a: "Days are warm (t-shirt), nights are cool (jacket required). It is not freezing in Leh, but cold at passes." },
    { q: "Can we do photography?", a: "Yes, it is a photographer's paradise. Carry extra SD cards!" },
    { q: "What shoes to wear?", a: "Good sports shoes or trekking shoes. Avoid heels or slippers." }
];

const LadakhFromChhattisgarh = () => {
    const heroImage = "/images/ladakh/ladakh-img-17.jpeg";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar Chhattisgarh",
        "description": "Leading Ladakh Tour Operator in Chhattisgarh. Serving Raipur, Bilaspur, Bhilai, Korba & Jagdalpur. Best packages with flight/train assistance.",
        "areaServed": ["Chhattisgarh", "Raipur", "Bilaspur", "Korba", "Raigarh"],
        "telephone": "+91-9406182174"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": cgFAQs.map(item => ({
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
                title="Ladakh Tour Packages from Chhattisgarh 2026 | Best Travel Agent"
                description="Looking for Ladakh Packages from Chhattisgarh? We serve Raipur, Bilaspur, Bhilai & Korba. Complete expedited travel planning, flights, and permits."
                keywords="ladakh tour packages from chhattisgarh, ladakh trip from bilaspur, ladakh tour from korba, travel agent for ladakh in chhattisgarh, ladakh packages from raigarh"
                canonicalUrl="https://rudrakshsafar.com/ladakh-tour-packages-from-chhattisgarh"
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
                    <img src={heroImage} alt="Chhattisgarh Travelers in Ladakh" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
                </div>
                <div className="relative z-10 container text-center px-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white font-bold text-sm mb-6">
                        #1 Ladakh Expert in the State
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg leading-tight">
                        Ladakh Tour Packages <br className="hidden md:block" /> from Chhattisgarh
                    </h1>
                    <p className="text-lg text-white/90 font-medium max-w-2xl mx-auto">
                        Serving travelers from Raipur, Bilaspur, Korba, and Jagdalpur with pride.
                    </p>
                </div>
            </div>

            <div className="container py-12 lg:py-20">

                {/* State Intro */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold mb-6">Escape the Heat: From Chhattisgarh to Coordinates 34°N</h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        For residents of <strong>Chhattisgarh</strong>, a trip to Ladakh is more than a vacation—it's a pilgrimage to nature. Whether you are from the coal capital <strong>Korba</strong>, the judicial capital <strong>Bilaspur</strong>, or the steel city <strong>Bhilai</strong>, the call of the mountains is universal.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        <strong>Rudraksh Safar</strong> bridges the distance. As a Chhattisgarh-based company, we understand your travel patterns, food preferences, and the need for a reliable connection to the Himalayas.
                    </p>
                </div>

                {/* Connectivity Grid */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold mb-10 text-center">Connectivity from Key Cities</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-card border border-white/10 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-gold">From Bilaspur (BSP)</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Take the <strong>Rajdhani (20847)</strong> or <strong>Chhattisgarh Exp</strong> to Delhi. Alternatively, catch a train to Raipur and fly.
                            </p>
                            <Link to="/contact" className="text-xs font-bold uppercase tracking-wide border-b border-gold pb-1">Check Train Tickets</Link>
                        </div>
                        <div className="bg-card border border-white/10 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-gold">From Jagdalpur (JDB)</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                New flights connect Jagdalpur to Raipur. From Raipur, connect to Delhi. This saves a 6-hour bus ride.
                            </p>
                            <Link to="/contact" className="text-xs font-bold uppercase tracking-wide border-b border-gold pb-1">Check Flights</Link>
                        </div>
                        <div className="bg-card border border-white/10 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-gold">From Raigarh/Korba</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Direct trains like <strong>Gondwana Express</strong> connect Raigarh to Delhi via Bilaspur.
                            </p>
                            <Link to="/contact" className="text-xs font-bold uppercase tracking-wide border-b border-gold pb-1">Plan Route</Link>
                        </div>
                    </div>
                </section>

                {/* Why Choose Local */}
                <section className="bg-secondary/10 border border-secondary/20 p-8 rounded-2xl mb-20">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/3">
                            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                                <Map className="w-10 h-10 text-secondary-foreground" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Local Trust, Global Standards</h3>
                        </div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                                <p className="text-sm"><strong>Registered in Chhattisgarh:</strong> We abide by local laws and consumer protections.</p>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                                <p className="text-sm"><strong>Easy Payment:</strong> Pay via local cheques or visit our offices.</p>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                                <p className="text-sm"><strong>Language Comfort:</strong> Our team speaks Chhattisgarhi, Hindi, and English.</p>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                                <p className="text-sm"><strong>Community:</strong> Join groups with people from your own state.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 42 FAQs */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold mb-10 text-center text-blue-400 flex items-center justify-center gap-3">
                        <HelpCircle className="w-8 h-8" /> Chhattisgarh Traveler FAQs
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                        {cgFAQs.map((faq, idx) => (
                            <Accordion key={idx} type="single" collapsible>
                                <AccordionItem value={`item-${idx}`} className="border-b border-white/5">
                                    <AccordionTrigger className="text-left font-medium hover:text-blue-400">{faq.q}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-card border border-white/10 p-12 rounded-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Plan Your Escape</h2>
                    <p className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Whether you are from the forests of Bastar or the industries of Korba, Ladakh awaits.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                            <Link to="/contact">Contact State Expert</Link>
                        </Button>
                    </div>
                </div>

            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default LadakhFromChhattisgarh;
