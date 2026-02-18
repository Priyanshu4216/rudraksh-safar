import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Users, Train, CheckCircle, ArrowRight, Home } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Extensive 40+ FAQs for Bhilai Page (Unique Phrasing)
const bhilaiFAQs = [
    // Planning & Local Context
    { q: "Can I book a Ladakh package directly from Bhilai?", a: "Yes! Rudraksh Safar is based right here in Bhilai usually. You can visit our office to plan your Ladakh trip face-to-face." },
    { q: "What is the best route to Ladakh for Bhilai residents?", a: "Most travelers from Bhilai take a train from Durg to Delhi, then fly to Leh. Alternatively, you can take a Volvo from Delhi to Manali for a road trip." },
    { q: "Is there a direct flight from Bhilai/Raipur to Leh?", a: "No direct flights exist. You will fly from Raipur (Mana Airport) via Delhi to Leh. We assist with all flight bookings." },
    { q: "How long does the train journey take from Durg to Delhi?", a: "The fastest train is the Rajdhani from Durg (approx 18-20 hours). Other trains like Chhattisgarh Express take longer (up to 28 hours)." },
    { q: "Do you have office in Bhilai for payment?", a: "Yes, our office is located in Bhilai-3. You can pay via cash, cheque, or UPI at our office comfortably." },

    // Package & Cost
    { q: "What is the cost of Ladakh tour from Bhilai?", a: "Packages start from ₹18,500 (Land Package). With train/flight from Bhilai, a full trip typically costs between ₹30,000 - ₹45,000 per person." },
    { q: "Are there group departures from Bhilai?", a: "Yes, we organize special group batches from Durg Railway Station during May and June for Bhilai families and youth." },
    { q: "Can students from Bhilai get a discount?", a: "We offer special rates for student groups from colleges like BIT, CSIT, and IIT Bhilai. Contact us for group deals." },
    { q: "Is bike rental included in the Bhilai package?", a: "We can include bike rentals (Royal Enfield) in your package. You pick up the bike in Leh or Manali." },
    { q: "What is the cancellation policy?", a: "We follow a standard policy. If you book early from Bhilai, we offer flexible rescheduling options in case of emergencies." },

    // Preparation & Safety
    { q: "How should Bhilaians prepare for Ladakh's cold?", a: "Bhilai has extreme heat, so Ladakh's cold can be a shock. Start buying thermals and jackets from local stores like Decathlon (in Raipur) or online well in advance." },
    { q: "Is Diamox available in Bhilai medical stores?", a: "Yes, most major pharmacies in Supela and Sector-6 stock Acetazolamide. Please consult your doctor before buying." },
    { q: "Is it safe for families from Bhilai?", a: "Absolutely. We send hundreds of families from Twin City every year. We plan altitude-friendly itineraries for safety." },
    { q: "Do mobile phones work in Ladakh?", a: "Only Postpaid (BSNL/Jio/Airtel). Your Bhilai prepaid SIM will NOT work. Convert to postpaid before leaving." },
    { q: "Is oxygen a problem for us?", a: "Coming from the plains of Chhattisgarh, you will need 24-48 hours to acclimatize in Leh. We explicitly plan for this in our itinerary." },

    // Logistics
    { q: "Where is the pickup point in Bhilai?", a: "For group tours, we usually gather at Durg Railway Station. For customized tours, we coordinate your airport drop." },
    { q: "Can we start the trip from Manali?", a: "Yes. You can reach Delhi from Durg, take an overnight Volvo to Manali, and our team will meet you there." },
    { q: "Do you provide Jain food?", a: "Yes, many of our reliable hotels and camps in Ladakh provide pure Jain meals on request." },
    { q: "What documents do I need to carry?", a: "Aadhar Card (Original) is mandatory for permits. Carry 4-5 passport size photos too." },
    { q: "How do we get the Inner Line Permit?", a: "We apply for your permit online before you even leave Bhilai. You just need to enjoy the trip." },

    // Sightseeing
    { q: "Will we see snow in Nubra Valley?", a: "Snow is mostly at the high passes (Khardung La) on the way to Nubra. The valley itself is a cold desert with sand dunes." },
    { q: "Is rafting available?", a: "Yes, river rafting in the Zanskar river (Sangam point) is a thrilling activity we can add to your plan." },
    { q: "Can we visit the War Memorial?", a: "Yes, the Hall of Fame in Leh is part of our city tour. It's a proud visit for every Indian." },
    { q: "How far is Pangong Lake from Leh?", a: "It's about a 5-6 hour drive one way. We recommend staying overnight there to enjoy the sunrise." },
    { q: "Is Hanle included?", a: "Hanle is an offbeat addition. If you want to see the Dark Sky Reserve, let us know while booking in Bhilai." },

    // Trip Types
    { q: "Do you organize bike trips for Bhilai bikers?", a: "Yes! We specialize in Manali-Leh bike expeditions. You can join our riding groups." },
    { q: "Is this suitable for a honeymoon?", a: "Ladakh is a unique honeymoon destination. We can arrange private cabs and premium camps for couples." },
    { q: "Can senior citizens join?", a: "Yes, but we advise a health checkup. We can arrange a private SUV for a comfortable, slow-paced journey." },
    { q: "Is it better to go via Srinagar or Manali?", a: "For families, we recommend going via Srinagar (flight to Srinagar) as the altitude gain is gradual." },
    { q: "What if roads get closed due to snow?", a: "Our ground team in Leh keeps us updated. We will reroute you or refund the unused part of the itinerary." },

    // Payment & Trust
    { q: "Why should I trust a local Bhilai agent?", a: "We are physically present here. You can meet us. We are accountable and accessible, unlike online-only portals." },
    { q: "Do you accept credit cards?", a: "Yes, we accept major credit cards at our Bhilai office (nominal charges may apply)." },
    { q: "Can I pay in installments?", a: "Yes, you can pay a booking amount now and settle the rest before the trip starts." },
    { q: "Are there any hidden charges?", a: "No. Our quotes are transparent. We mention clearly what is included (Permits, Fuel, Stay) and what isn't." },
    { q: "Who will help us in Ladakh?", a: "Our tour manager or local driver in Ladakh will be with you. You also have 24/7 support from our Bhilai office." },

    // Extras
    { q: "What shopping can we do?", a: "You can buy Pashmina shawls, Apricots, and Tibetan artifacts in Leh market." },
    { q: "Is alcohol cheap in Ladakh?", a: "Alcohol prices are standard, but we strictly advise against drinking in the first 2 days for health reasons." },
    { q: "Are there toilets on the way?", a: "Basic dry toilets are available at passes. Restaurants on the highway have standard washrooms." },
    { q: "Can we charge our cameras?", a: "Yes, hotels have charging points. Carrying a power bank is highly recommended." },
    { q: "What specific clothes for bike trips?", a: "You need riding jackets, gloves, and knee guards. You can rent them in Leh if you don't want to buy." }
];

const LadakhFromBhilai = () => {
    const heroImage = "/images/ladakh/ladakh-img-3.jpeg";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Rudraksh Safar Bhilai",
        "description": "Best Ladakh Tour Packages from Bhilai & Durg. Local travel agency in Bhilai-3 offering group tours, bike trips, and family packages. Visit our office today.",
        "areaServed": ["Bhilai", "Durg", "Risali", "Charoda"],
        "telephone": "+91-9406182174",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "GE Road, Bhilai-3",
            "addressLocality": "Bhilai",
            "addressRegion": "Chhattisgarh"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": bhilaiFAQs.map(item => ({
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
                title="Ladakh Tour Packages from Bhilai & Durg | Local Office Assistance"
                description="Plan your Ladakh trip with Rudraksh Safar Bhilai. Best packages from Durg Railway Station. Group departures, bike trips, and honeymoon specials. Visit our Bhilai office."
                keywords="ladakh tour package from bhilai, ladakh trip from durg, travel agent in bhilai for ladakh, ladakh group tour from bhilai, best tour operator in bhilai"
                canonicalUrl="https://rudrakshsafar.com/ladakh-tour-packages-from-bhilai"
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
                    <img src={heroImage} alt="Ladakh Bike Trip" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
                </div>
                <div className="relative z-10 container text-center px-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500 text-white font-bold text-sm mb-6">
                        Bhilai's Own Travel Experts
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg leading-tight">
                        Ladakh Tour Packages <br className="hidden md:block" /> from Bhilai & Durg
                    </h1>
                    <p className="text-lg text-white/90 font-medium max-w-2xl mx-auto">
                        From the Steel City to the Mountains of Steel. Plan your dream expedition with local trust.
                    </p>
                </div>
            </div>

            <div className="container py-4">
                <Link to="/domestic-tours/ladakh" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-500 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Ladakh Guide
                </Link>
            </div>

            <div className="container py-12 lg:py-20">

                {/* Local Intro */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Why Bhilaians Choose Rudraksh Safar</h2>
                        <p className="text-muted-foreground mb-6 text-lg">
                            Living in <strong>Bhilai</strong>, we are used to heat and hard work. Ladakh offers the perfect escape—cool winds, spirituality, and adventure.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            But planning a trip to 18,000ft isn't the same as a weekend trip to Bastar. You need expertise. <strong>Rudraksh Safar</strong> is your neighborhood specialist. Located right here on GE Road, we have sent over 200+ groups from Durg and Bhilai to the Himalayas safely.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-3 bg-secondary/10 p-4 rounded-lg">
                                <Home className="w-8 h-8 text-secondary" />
                                <div>
                                    <span className="block font-bold">Office in Bhilai-3</span>
                                    <span className="text-xs text-muted-foreground">Walk-in anytime</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-secondary/10 p-4 rounded-lg">
                                <Train className="w-8 h-8 text-secondary" />
                                <div>
                                    <span className="block font-bold">Durg Station</span>
                                    <span className="text-xs text-muted-foreground">Departures Managed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                            <img src="/images/ladakh/ladakh-img-13.jpeg" className="object-cover w-full h-full" alt="Bhilai Travelers" />
                            <div className="absolute inset-x-0 bottom-0 bg-black/60 p-4 text-white text-center">
                                <p className="font-bold">Managed by Local Experts</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Connectivity */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold mb-10 text-center">Journey from Durg to Ladakh</h2>
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="border border-border rounded-2xl p-8 hover:bg-muted/5 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                                    <Train className="w-6 h-6 text-gold" />
                                </div>
                                <h3 className="text-xl font-bold">Step 1: The Train Journey</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Most Bhilai travelers prefer the train from <strong>Durg Junction (DURG)</strong> to Delhi (NZM/NDLS).
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between border-b border-border pb-2">
                                    <span>Best Train</span>
                                    <span className="font-bold">Rajdhani (22691)</span>
                                </li>
                                <li className="flex justify-between border-b border-border pb-2">
                                    <span>Duration</span>
                                    <span className="font-bold">~18 Hours</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border border-border rounded-2xl p-8 hover:bg-muted/5 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold">Step 2: The Ascent</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                From Delhi, you have two choices based on your package type.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between border-b border-border pb-2">
                                    <span>Option A (Comfort)</span>
                                    <span className="font-bold">Flight to Leh (1.5 Hr)</span>
                                </li>
                                <li className="flex justify-between border-b border-border pb-2">
                                    <span>Option B (Adventure)</span>
                                    <span className="font-bold">Volvo to Manali (12 Hr)</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* Packages */}
                <section className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif font-bold mb-4">Packages for Every Bhilai Traveler</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card border border-border rounded-xl overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <img src="/images/ladakh/ladakh-img-11.jpeg" className="w-full h-full object-cover" alt="Family" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Family Comfort</h3>
                                <p className="text-sm text-muted-foreground mb-4">Flight included. Stay in premium hotels. Pace adjusted for families.</p>
                                <Link to="/contact" className="text-gold font-bold text-sm uppercase tracking-wide">Ask for Quote &rarr;</Link>
                            </div>
                        </div>
                        <div className="bg-card border border-border rounded-xl overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <img src="/images/ladakh/ladakh-img-1.jpeg" className="w-full h-full object-cover" alt="Bike" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Youth Bike Expeditions</h3>
                                <p className="text-sm text-muted-foreground mb-4">For the bikers of Bhilai. Manali-Leh circuit on Royal Enfield.</p>
                                <Link to="/ladakh-bike-trip-packages" className="text-gold font-bold text-sm uppercase tracking-wide">View Bike Packages &rarr;</Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-muted-foreground italic text-sm">
                        [Detailed itinerary will be provided by Rudraksh Safar upon inquiry]
                    </div>
                </section>

                {/* 40 FAQs */}
                <section className="mb-20">
                    <h2 className="text-3xl font-serif font-bold mb-10 text-center">Bhilai Traveler FAQs</h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                        {bhilaiFAQs.map((faq, idx) => (
                            <Accordion key={idx} type="single" collapsible>
                                <AccordionItem value={`item-${idx}`} className="border-b border-border">
                                    <AccordionTrigger className="text-left font-medium hover:text-orange-400">{faq.q}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-12 rounded-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Visit Our Bhilai Office</h2>
                    <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
                        Let's sit down over a cup of chai and plan your adventure. We are just a drive away.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 border-none font-bold">
                            <Link to="/contact">Get Directions</Link>
                        </Button>
                    </div>
                </div>

            </div>

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
};

export default LadakhFromBhilai;
