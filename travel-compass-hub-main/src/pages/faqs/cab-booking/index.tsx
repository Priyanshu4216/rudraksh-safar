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
import { Car, MapPin, Calculator, ShieldCheck, Clock, AlertTriangle, UserCheck, Navigation } from 'lucide-react';

const CabBookingFAQ = () => {
    const faqCategories = [
        {
            title: "Booking Basics & Vehicle Types",
            icon: Car,
            questions: [
                {
                    question: "How does cab booking through a travel agency work?",
                    answer: "Cab booking through a travel agency involves assigning a verified vehicle and driver based on your travel requirement—local, airport transfer, or outstation. The agency coordinates pickup time, route planning, tolls, parking, and driver details in advance. Unlike aggregator apps, a travel agency ensures human coordination, fixed pricing clarity, and support if delays or issues arise."
                },
                {
                    question: "What types of cabs are available for booking?",
                    answer: "Common cab options include: \n- **Hatchback** (Swift, Indica) - Economical for 4 pax. \n- **Sedan** (Dzire, Etios) - Comfortable for 4 pax + luggage. \n- **SUV** (Innova, Ertiga) - Ideal for 6-7 pax or long trips. \n- **Tempo Traveller** (9–17 seater) - For large groups. \n- **Luxury cars** are available on request. Vehicle selection depends on passengers, luggage, and distance."
                },
                {
                    question: "What information is required to book a cab?",
                    answer: "To book a cab, you generally need: \n1. **Pickup & drop location** \n2. **Date & time** \n3. **Number of passengers** \n4. **Type of cab** \n5. **Contact number** \nFor outstation trips, trip duration and return date are also required to calculate the estimate."
                },
                {
                    question: "How early should I book a cab?",
                    answer: "- **Local travel**: 6–12 hours before \n- **Airport pickup/drop**: 12–24 hours before \n- **Outstation trips**: 1–3 days before \n- **Peak season / weddings**: 3–7 days before \nEarly booking ensures you get the best vehicles and most experienced drivers."
                },
                {
                    question: "Can I book a cab for a one-way outstation trip?",
                    answer: "Yes. **One-way cab bookings** are available and are often cheaper than round trips if you are just relocating or dropping someone. You pay only for the onward journey distance (or a fixed route cost) rather than the return empty haul."
                },
                {
                    question: "Can I book luxury cars for events or weddings?",
                    answer: "Yes. We provide premium sedans (like Corolla, Camry) and SUVs (like Fortuner, Crysta) for weddings, corporate events, and VIP guests. These require advance booking due to limited availability."
                },
                {
                    question: "Are tempo travellers available for group travel?",
                    answer: "Yes. **Tempo Travellers (TT)** are ideal for family pilgrimages, corporate outings, or group tours. They come in 9, 12, 17, and 26-seater configurations with ample luggage space and push-back seats."
                }
            ]
        },
        {
            title: "Rates, Inclusions & Billing",
            icon: Calculator,
            questions: [
                {
                    question: "Are cab rates fixed or variable?",
                    answer: "Cab rates may be: \n1. **Fixed** (Point-to-Point): Commonly for Airport Transfers or One-way drops. \n2. **Per-km based**: For outstation round trips (e.g., ₹12/km). \n3. **Per-day/Hourly based**: For local rentals (e.g., 8 Hours / 80 Km package)."
                },
                {
                    question: "What is included and excluded in cab fare?",
                    answer: "**Usually Included**: \n- Vehicle & Driver charges \n- Fuel cost \n\n**Usually Excluded** (unless mentioned): \n- Toll Taxes \n- Parking Fees \n- State Entry Tax (for inter-state trips) \n- Driver Night Charges \n- GST (5%)"
                },
                {
                    question: "Is fuel price included in cab booking?",
                    answer: "Yes, the fuel cost is always included in the per-km or fixed package rate. You do not need to pay for diesel/petrol separately during the trip."
                },
                {
                    question: "Are tolls and parking included in cab charges?",
                    answer: "Not always. Most quotes are 'Excluding Toll & Parking' because these costs vary by route and time. You typically pay these directly at the toll gate or parking lot. However, 'All-inclusive' packages can be arranged upon request."
                },
                {
                    question: "What is a minimum kilometer charge in cab booking?",
                    answer: "For outstation round trips, most cabs have a **minimum daily km limit** (usually 250 km or 300 km per day). Even if you travel less (e.g., 100 km), you will be charged for the minimum 250 km. This covers the driver's time and vehicle holding cost."
                },
                {
                    question: "Why do cab prices increase at night?",
                    answer: "**Night charges** typically apply if the driver drives between **10 PM – 6 AM**. This is a small fixed allowance (e.g., ₹250-₹300/night) to compensate the driver for working odd hours and ensuring safety."
                },
                {
                    question: "What happens if I exceed booked kilometers?",
                    answer: "Any extra kilometers beyond your package limit are charged at the **per-km rate** agreed upon during booking. For example, if your limit was 80 km and you traveled 90 km, you pay for 10 extra kms."
                }
            ]
        },
        {
            title: "Safety, Reliability & Driver",
            icon: ShieldCheck,
            questions: [
                {
                    question: "Is it safe to travel by cab with family?",
                    answer: "Yes, when booked through verified agencies. We strictly ensure: \n1. **Verified Drivers** with clean records. \n2. **Well-maintained Vehicles** (AC, Tyres, Brakes). \n3. **Route Planning** on safe highways. \nSafety is our top priority for families and children."
                },
                {
                    question: "Are cab services safe for women travelers?",
                    answer: "Yes. We prioritize safety for women travelers by assigning our most senior and trusted drivers. You also have direct access to our agency support team 24/7 during the trip for live tracking and assistance."
                },
                {
                    question: "How do I know the cab and driver are genuine?",
                    answer: "Before your trip starts, you receive: \n- **Driver Name & Photo** \n- **Driver Phone Number** \n- **Vehicle Number & Model** \nWe verify all documents (License, Insurance, RC) before assigning any driver to you."
                },
                {
                    question: "Are drivers experienced for hill or long routes?",
                    answer: "Yes. Driving in hills (Ghats) or long highways requires specific skills. We assign **experienced drivers** familiar with hill terrain and night driving for such routes to ensure a smooth and safe journey."
                },
                {
                    question: "What documents does the driver carry?",
                    answer: "Drivers mandatorily carry: \n1. **Original Driving License** \n2. **Vehicle Registration (RC)** \n3. **Insurance Policy** \n4. **Pollution Certificate (PUC)** \n5. **Tourist Permit** (for commercial vehicles)."
                },
                {
                    question: "Can I book a cab for elderly passengers?",
                    answer: "Yes. Please inform us in advance. We will brief the driver to drive gently, assist with luggage, and ensure frequent stops for restrooms or food as required by elderly passengers."
                }
            ]
        },
        {
            title: "Trip Management & Policy",
            icon: Navigation,
            questions: [
                {
                    question: "What is the difference between one-way and round-trip cab booking?",
                    answer: "**One-way**: You are picked up largely from City A and dropped at City B. You pay only for that leg. \n**Round-trip**: The cab stays with you from City A -> City B -> City A. You pay for distance + driver allowance for total days."
                },
                {
                    question: "Can I book a cab for multiple days?",
                    answer: "Yes. **Multi-day outstation packages** are available. These are ideal for vacations requiring a vehicle at your disposal for sightseeing in multiple cities (e.g., Raipur -> Jagdalpur -> Vizag -> Raipur)."
                },
                {
                    question: "What is driver allowance?",
                    answer: "**Driver Allowance** covers the driver's food and rest expenses during outstation trips. It is charged per day (usually ₹300-₹500) and is separate from the vehicle rental cost."
                },
                {
                    question: "Can I stop or change route during the journey?",
                    answer: "Yes, you can take stops for food/rest. Route changes are allowed but may impact the cost if the distance increases significantly. Always keep the driver and agency informed for transparency."
                },
                {
                    question: "Are inter-state permits included?",
                    answer: "When crossing state borders (e.g., Chhattisgarh to Odisha), commercial vehicles must pay a **State Entry Tax/Permit**. This is usually **paid by the customer** at the border checkpost (or online). Agents can estimate this cost for you beforehand."
                },
                {
                    question: "Can I cancel a cab booking?",
                    answer: "Yes. Cancellation policies vary. \n- **More than 24 hrs**: usually Free or nominal fee. \n- **Last minute**: Cancellation charges apply to compensate the driver who blocked his date."
                },
                {
                    question: "What happens if the cab breaks down?",
                    answer: "In the rare event of a breakdown, the agency arranges: \n1. **Replacement Cab** from the nearest network point. \n2. **Alternate Transport** to safe location. \n3. **Assistance** during the delay. \nWe don't leave you stranded on the road."
                }
            ]
        },
        {
            title: "Agent vs Apps",
            icon: UserCheck,
            questions: [
                {
                    question: "Is it better to book a cab online or through a local travel agent?",
                    answer: "Local agents offer **Reliability**. Online apps (Uber/Ola) are great for short city rides but risky for outstation or airport drops due to last-minute cancellations. Agents pre-assign drivers, ensuring your car arrives on time, every time."
                },
                {
                    question: "How is cab booking different from ride-hailing apps?",
                    answer: "- **Price**: Apps have surge pricing; Agents have fixed rates. \n- **Vehicle**: Apps give random cars; Agents guarantee specific vehicle types. \n- **Support**: Apps have chat bots; Agents have human phone support."
                },
                {
                    question: "What should I do if cab quality is poor?",
                    answer: "Call your agent immediately. We can resolve issues mid-trip by instructing the driver to clean the car, drive better, or even swap the vehicle if it's mechanically unsound."
                },
                {
                    question: "What if my flight or train is delayed?",
                    answer: "Just inform the agent. Since we track your arrival, we adjust pickup times without extra hassle or cancellation. Online drivers often cancel if made to wait more than 10 mins."
                },
                {
                    question: "Is booking a cab through a Bhilai-based travel agency reliable?",
                    answer: "Yes. Being local, we have a network of trusted drivers in Bhilai/Raipur/Durg. We offer faster resolution, real accountability, and better coordination than impersonal online platforms."
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
                <title>Cab Booking FAQs | Outstation Taxi, Airport Transfer & Rates - Rudraksh Safar</title>
                <meta name="description" content="All your questions about cab booking answered. Outstation taxi rates, driver safety, one-way drops from Bhilai/Raipur, and booking policies explained." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/cab-booking" />
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
                            { label: 'Cab Booking', path: '/faqs/cab-booking' }
                        ]} />

                        <div className="max-w-4xl mx-auto text-center mt-8">
                            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                <Car className="w-4 h-4" />
                                <span>Road Travel Expert Guide</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                                Cab & Taxi Booking <span className="text-primary">FAQs</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Planning a road trip or airport drop? Get clear answers on outstation rates, driver charges, safety policies, and vehicle choices.
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
                        <h2 className="text-3xl font-bold mb-6">Need a Safe & Reliable Ride?</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Stop worrying about driver cancellations. Book a verified cab with Rudraksh Safar for your next outstation trip or airport transfer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                                <Car className="w-5 h-5" />
                                Book a Cab
                            </Link>
                            <Link to="/cab-booking" className="inline-flex items-center justify-center gap-2 bg-white border border-input text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted/50 transition-all">
                                View Fleet Rates
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CabBookingFAQ;
