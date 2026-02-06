import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Ship, Anchor, Map, Utensils, ShieldCheck, LifeBuoy, CreditCard, Ticket } from 'lucide-react';

const CruiseBookingFAQ = () => {
    const faqCategories = [
        {
            title: "Cruise Basics & Types",
            icon: Ship,
            questions: [
                {
                    question: "What is a cruise holiday?",
                    answer: "A cruise holiday is a vacation where you travel on a luxury ship that functions as a floating hotel, visiting multiple destinations while providing accommodation, meals, entertainment, and activities onboard."
                },
                {
                    question: "Why should I choose a cruise over a normal tour package?",
                    answer: "Cruises offer unique benefits: \n- **Unpack Once**: Visit multiple countries without repacking. \n- **All-Inclusive**: Food, stay, and entertainment are included. \n- **Ocean Views**: Wake up to a new view every day. \n- **Luxury**: It feels more premium than a standard bus/flight tour."
                },
                {
                    question: "What types of cruise packages are available?",
                    answer: "- **Ocean Cruises**: Large ships, popular for families (e.g., Royal Caribbean). \n- **River Cruises**: Smaller, scenic, cultural focus (e.g., Danube, Nile). \n- **Luxury Cruises**: Exclusive, smaller crowds. \n- **Expedition Cruises**: For adventure (e.g., Alaska, Antarctica)."
                },
                {
                    question: "Which are the most popular cruise destinations?",
                    answer: "Top choices: \n- **Singapore & Southeast Asia** (Genting Dream, Spectrum of the Seas). \n- **Dubai & Abu Dhabi** (MSC, Costa). \n- **Mediterranean** (Europe - Italy, Greece, Spain). \n- **Alaska** (Nature & Glaciers). \n- **Caribbean** (Islands & Beaches)."
                },
                {
                    question: "Are cruise packages available from India?",
                    answer: "Yes. Domestic cruises (Cordelia) sail from **Mumbai, Chennai, Kochi** to destinations like Goa, Lakshadweep, and Sri Lanka. International cruises usually require a flight to Singapore or Dubai to board."
                },
                {
                    question: "What is a river cruise?",
                    answer: "River cruises sail on inland rivers (like the Danube in Europe or Nile in Egypt) rather than the ocean. They stop right in the city center, offer a calmer experience, and are culturally immersive."
                }
            ]
        },
        {
            title: "Inclusions, Cost & Cabins",
            icon: Ticket,
            questions: [
                {
                    question: "What is included in a cruise package?",
                    answer: "Typically included: \n- **Accommodation** (Cabin). \n- **All Meals** (Breakfast, Lunch, Dinner, Snacks). \n- **Onboard Entertainment** (Shows, Live Music). \n- **Pools & Gym Access**. \n- **Port Taxes** (often included)."
                },
                {
                    question: "What is NOT included in cruise packages?",
                    answer: "Usually extra: \n- **Alcoholic Drinks** (Drink packages available). \n- **Shore Excursions** (Tours at ports). \n- **Spa & Salon**. \n- **Wi-Fi / Internet**. \n- **Gratuities** (Service Charge). \n- **Visas & Flights**."
                },
                {
                    question: "What types of cabins are available on a cruise?",
                    answer: "1. **Interior**: No window, cheapest, great for budget. \n2. **Ocean-View**: Has a window/porthole. \n3. **Balcony**: Private veranda (Highly recommended). \n4. **Suite**: Luxury space with VIP perks."
                },
                {
                    question: "Which cabin is best for first-time cruisers?",
                    answer: "We recommend a **Balcony Cabin**. Having fresh air and a private sea view makes the experience magical. Interior cabins can feel enclosed if you are not used to ships."
                },
                {
                    question: "Are cruise prices fixed or dynamic?",
                    answer: "Dynamic. Like flights, cruise prices **increase** as the sailing date gets closer. Booking early gets you the best rates and cabin locations."
                },
                {
                    question: "What currency is used onboard?",
                    answer: "International cruises mostly use **USD** or **Euros**. You don't use cash daily; everything is charged to your 'Cruise Card', and you settle the bill at the end."
                }
            ]
        },
        {
            title: "Life Onboard & Facilities",
            icon: LifeBuoy,
            questions: [
                {
                    question: "What food options are available on cruises?",
                    answer: "Cruises are food paradises! \n- **Buffets**: Huge variety of global cuisines. \n- **Fine Dining**: A la carte restaurants. \n- **Indian Food**: Most ships sailing from Singapore/Dubai offer Indian Veg/Non-Veg. \n- **Jain/Special Meals**: Available on request."
                },
                {
                    question: "Is internet available on cruise ships?",
                    answer: "Yes, satellite Wi-Fi is available but it is **expensive** and slower than land internet. We recommend buying a package only if urgent, or enjoying a digital detox."
                },
                {
                    question: "Is seasickness common on cruises?",
                    answer: "Rare. Modern ships have **Stabilizers** that minimize rocking. You barely feel the movement. Seasickness pills are also available free or cheap at the medical center."
                },
                {
                    question: "Are cruises good for families?",
                    answer: "Excellent. Ships have **Kids Clubs**, water parks, arcades, and shows. Parents can relax while trained staff supervise children's activities."
                },
                {
                    question: "Are cruises suitable for honeymoon couples?",
                    answer: "Yes. It's very romantic. You get sunset views, candlelit dinners, couple spas, and 'Adults-Only' zones (Solarium) on many ships for privacy."
                },
                {
                    question: "Do cruises have medical facilities?",
                    answer: "Yes. Every ship has a **Medical Center** with doctors and nurses to handle emergencies. Services are chargeable, so Travel Insurance is important."
                }
            ]
        },
        {
            title: "Logistics: Visa, Port & Booking",
            icon: Anchor,
            questions: [
                {
                    question: "Is visa required for cruise travel?",
                    answer: "Yes. It depends on the ports. \n- **Singapore Cruise**: Needs Singapore Visa (Multiple Entry often). \n- **Europe Cruise**: Needs Schengen Visa. \nSome ports allow 'Visa-Free' shore access for cruise passengers, but rules vary specifically."
                },
                {
                    question: "What documents are required for cruise travel?",
                    answer: "- **Passport** (Min 6 months validity). \n- **Cruise Ticket/Boarding Pass**. \n- **Visas** for all countries visited. \n- **Travel Insurance** (Mandatory for many lines)."
                },
                {
                    question: "What is shore excursion in cruise?",
                    answer: "When the ship stops at a port (e.g., Phuket), you can go out to explore. This is a **Shore Excursion**. You can book a guided tour via the ship or explore on your own."
                },
                {
                    question: "What happens if I miss the cruise departure?",
                    answer: "The ship **will not wait**. It operates on a strict schedule. If you are late, you miss the ship. You might have to fly to the next port to catch up, at your own cost."
                },
                {
                    question: "What is the best time to book a cruise?",
                    answer: "Booking **3–6 months in advance** is ideal. Last-minute deals are rare in cruising; usually, prices only go up."
                },
                {
                    question: "Can I explore ports on my own?",
                    answer: "Yes. You are free to get off the ship and hire a local taxi or walk. Just ensure you return to the ship **1 hour before** departure time."
                }
            ]
        },
        {
            title: "Why Book With Us?",
            icon: ShieldCheck,
            questions: [
                {
                    question: "Why should I book a cruise through a local travel agent?",
                    answer: "Cruises are complex (Deck plans, Cabin categories, Visa rules). A local agent: \n- Helps select the **Right Cabin** (avoiding noisy engines). \n- Explains **Visa Requirements** clearly. \n- Handles **Flight Connections** so you don't miss the ship."
                },
                {
                    question: "Do cruises include flights?",
                    answer: "Not automatically. We create **'Fly-Cruise' Packages** for you that include your flights from India, airport transfers, hotel stay (if needed before sailing), and the cruise."
                },
                {
                    question: "Can cruise bookings be customized?",
                    answer: "Yes. We can upgrade your cabin, add a drink package, pre-book shore excursions, and add special requests like anniversary cakes."
                },
                {
                    question: "Are Indian passport holders allowed on international cruises?",
                    answer: "Yes, absolutely. Thousands of Indians travel on cruises like Royal Caribbean, Genting, and Costa every year. We assist with the necessary documentation."
                },
                {
                    question: "Is the cruise holiday worth the money?",
                    answer: "100%. If you calculate the cost of 5 cities' hotels, food, transport, and shows individually, a cruise is often **cheaper** and far more luxurious."
                }
            ]
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqCategories.flatMap(category =>
            category.questions.map(q => ({
                "@type": "Question",
                "name": q.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.answer
                }
            }))
        )
    };

    return (
        <>
            <Helmet>
                <title>Cruise Booking FAQs | Packages, Cost & Visa Rules - Rudraksh Safar</title>
                <meta name="description" content="Expert answers on Cruise Holidays. Singapore, Dubai, Europe cruise packages from India. Understand cabins, food, visas, and costs." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/cruise-booking" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative bg-primary/5 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Cruise Booking', path: '/faqs/cruise-booking' }
                        ]} />

                        <div className="max-w-4xl mx-auto text-center mt-8">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                <Ship className="w-4 h-4" />
                                <span>Cruise Expert Guide</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                                Cruise Holiday <span className="text-primary">Questions Answered</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                First time on a ship? From seasickness to visa rules, we answer everything to help you sail with confidence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="grid gap-12">
                            {faqCategories.map((category, idx) => (
                                <div key={idx} className="scroll-mt-24" id={`category-${idx}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                            <category.icon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                                    </div>

                                    <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
                                        <Accordion type="single" collapsible className="w-full">
                                            {category.questions.map((item, qIdx) => (
                                                <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="px-6 data-[state=open]:bg-muted/30 transition-colors">
                                                    <AccordionTrigger className="text-left font-medium text-base md:text-lg py-5 hover:text-primary transition-colors">
                                                        {item.question}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-6 whitespace-pre-line">
                                                        {item.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust/CTA Section */}
                <section className="py-20 bg-muted/30 border-t">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Set Sail?</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Don't get overwhelmed by deck plans and visa rules. We handle the complex logistics so you can enjoy the ocean breeze.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                                <Anchor className="w-5 h-5" />
                                Plan My Cruise
                            </Link>
                            <a href="tel:919406182174" className="inline-flex items-center justify-center gap-2 bg-white border border-input text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted/50 transition-all">
                                Call for Cruise Deals
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CruiseBookingFAQ;
