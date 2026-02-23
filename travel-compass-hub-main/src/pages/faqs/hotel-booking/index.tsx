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
import { Hotel, CreditCard, ShieldCheck, Clock, AlertTriangle, UserCheck, CalendarDays, MapPin } from 'lucide-react';

const HotelBookingFAQ = () => {
    const faqCategories = [
        {
            title: "Booking Process & Basics",
            icon: Hotel,
            questions: [
                {
                    question: "How does hotel booking through a travel agency work?",
                    answer: "When you book a hotel through a travel agency, the agent checks availability, negotiates the best possible rate, verifies hotel authenticity, and confirms your reservation directly with the hotel. Unlike online apps, an agent acts as a human intermediary, ensuring your room is genuinely reserved, your preferences are noted, and any special requests are communicated. If any issue arises during your stay—late check-in, room mismatch, or hotel overbooking—the agent resolves it on your behalf. This reduces risk, especially for families, senior citizens, and international travelers."
                },
                {
                    question: "Is it better to book hotels online or through a local travel agent?",
                    answer: "Online platforms are convenient, but local travel agents offer higher reliability and accountability. Agents often have contracted B2B rates, priority inventory, and direct hotel contacts. More importantly, if something goes wrong—hotel denial, poor room quality, refund delays—you speak to a real person, not a chatbot. For important trips (family vacations, honeymoons, international travel), booking through a trusted agent is usually safer and stress-free."
                },
                {
                    question: "What information do I need to book a hotel room?",
                    answer: "To book a hotel, you generally need: \n1. **Guest name(s)** \n2. **Check-in & check-out dates** \n3. **Number of guests** \n4. **Contact number** \n5. **Valid ID details** (submitted at check-in). \nFor international hotels, passport details may be required. Payment method depends on booking type—advance, partial, or pay-at-hotel."
                },
                {
                    question: "How can I confirm if my hotel booking is genuine?",
                    answer: "A genuine booking includes: \n- **Hotel confirmation number** \n- **Hotel name & address** \n- **Guest name matching ID** \n- **Payment receipt** (if paid). \nA travel agent can also reconfirm your booking directly with the hotel before arrival, adding an extra layer of assurance."
                },
                {
                    question: "What documents are required at hotel check-in?",
                    answer: "You must present a **Valid Government ID** for all guests. Accepted IDs usually include Aadhaar Card, Passport, Voter ID, or Driving License. PAN Cards are generally **NOT** accepted as valid address proof for hotel check-ins in India."
                },
                {
                    question: "Can I request a specific room or view?",
                    answer: "Yes, requests like 'Sea View', 'High Floor', or 'Interconnected Rooms' can be made at the time of booking. However, these are **subject to availability** upon arrival unless you have specifically paid for a guaranteed room category (e.g., booking a 'Superior Sea View Room' instead of a 'Standard Room')."
                },
                {
                    question: "What is the difference between standard and deluxe rooms?",
                    answer: "While definitions vary by hotel, **Deluxe rooms** are typically larger, better furnished, and may offer better views or amenities compared to **Standard rooms**. Agents can show you photos of both to help you decide if the upgrade is worth the price."
                }
            ]
        },
        {
            title: "Pricing, Taxes & Payments",
            icon: CreditCard,
            questions: [
                {
                    question: "Are hotel prices the same online and through travel agents?",
                    answer: "Not always. Travel agents often have **lower negotiated rates** than public online prices, especially for multi-night stays and premium hotels. Agents can also add value like free breakfast, early check-in requests, or free upgrades that you might not get online."
                },
                {
                    question: "Why do hotel prices change every day?",
                    answer: "Hotels use **dynamic pricing**, similar to airlines. Prices fluctuate based on:\n- **Demand & Occupancy**\n- **Local Events/Weddings**\n- **Seasonality**\n- **Weekend vs Weekday**\nBooking early locks in the price before demand drives it up."
                },
                {
                    question: "What does “best available rate” mean in hotel booking?",
                    answer: "“Best Available Rate” (BAR) means the lowest publicly available price offered by the hotel at that specific moment. It is non-contracted and fluctuates daily based on demand."
                },
                {
                    question: "Are there any hidden charges in hotel bookings?",
                    answer: "Hidden charges can catch you off guard. Common ones include:\n- **Taxes (GST/City Tax)**\n- **Resort Fees**\n- **Extra Guest Charges**\n- **Service Charges**\nA good agent explains all these upfront so the price you see is the price you pay."
                },
                {
                    question: "Can I book a hotel without making full payment in advance?",
                    answer: "Yes. Many hotels allow **partial payment** or **pay-at-hotel** options, especially when booking through an agent. However, for peak seasons (Diwali/Christmas) or discounted non-refundable deals, 100% advance payment is usually required to secure the room."
                },
                {
                    question: "Is breakfast included in the hotel price?",
                    answer: "Not automatically. Plans are usually: \n- **EP (European Plan)**: Room Only \n- **CP (Continental Plan)**: Room + Breakfast \n- **MAP (Modified American Plan)**: Room + Breakfast + Dinner \nAlways confirm which 'Meal Plan' you are booking."
                },
                {
                    question: "How can I avoid overpaying for hotel rooms?",
                    answer: "1. **Book early** (15-30 days prior). \n2. **Avoid peak dates** if possible. \n3. **Use a travel agent** to access B2B rates. \n4. **Compare inclusions** (tax, breakfast) not just the base price."
                }
            ]
        },
        {
            title: "Safety, Family & Couples",
            icon: ShieldCheck,
            questions: [
                {
                    question: "Is it safe to book budget hotels for family travel?",
                    answer: "Yes, if verified. Budget doesn't mean unsafe. However, relying solely on online pictures can be risky. Agents ensure recommended budget hotels are **family-safe, clean, and located in decent areas**, as we often have firsthand feedback from previous clients."
                },
                {
                    question: "How do I know if a hotel is safe for couples?",
                    answer: "You should check for: \n1. **'Couple Friendly' policy** explicitly stated. \n2. **Local ID acceptance** rules. \n3. **Guest Reviews**. \nWe pre-check these policies for you to avoid any embarrassment or denial at check-in."
                },
                {
                    question: "Do hotels allow unmarried couples to stay?",
                    answer: "Many hotels do, but policies vary strictly by property and city. Some hotels reserve the right to deny check-in to unmarried couples or locals with local IDs. Always confirm this specific policy in advance."
                },
                {
                    question: "What should families look for while booking a hotel?",
                    answer: "Key factors: \n- **Cleanliness & Hygiene** \n- **Lift Access** (crucial for seniors) \n- **Location Safety** \n- **Family-friendly policies** \n- **Room Size** (space for extra mattress)."
                },
                {
                    question: "How important are hotel reviews?",
                    answer: "Reviews are critical indicators of **cleanliness, service quality, and real guest experience**. However, be wary of fake reviews. We cross-check multiple sources and our own client feedback to give you the true picture."
                },
                {
                    question: "How do I choose the right hotel location?",
                    answer: "Don't just look at the price. Consider: \n- **Proximity** to main attractions (saves travel cost). \n- **Safety** of the neighborhood. \n- **Transport connectivity**. \n- **Purpose** (Leisure vs Business)."
                }
            ]
        },
        {
            title: "Policies, Timing & Issues",
            icon: Clock,
            questions: [
                {
                    question: "What are standard hotel check-in and check-out times?",
                    answer: "Standard times are usually: \n- **Check-in**: 12:00 PM – 2:00 PM \n- **Check-out**: 10:00 AM – 11:00 AM \nThis varies by hotel and city. Always check your voucher."
                },
                {
                    question: "Can I request early check-in or late check-out?",
                    answer: "Yes, you can request it, but it is **subject to availability** and often attracts extra charges. If you are arriving very early (e.g., 6 AM), it is safer to book the room from the previous night to guarantee immediate access."
                },
                {
                    question: "What is the hotel cancellation policy?",
                    answer: "Every rate has a different policy. \n- **Refundable**: Free cancellation up to X days before arrival. \n- **Non-Refundable**: No refund, cheaper rate. \nWe clearly state the policy on your booking voucher so you know the deadlines."
                },
                {
                    question: "What happens if I reach the hotel late at night?",
                    answer: "Always **inform the hotel or your agent** if you are arriving late (e.g., after 8 PM). If you don't show up by a certain time without notice, the hotel might mark you as a 'No Show' and release the room."
                },
                {
                    question: "Can hotels deny check-in even after confirmation?",
                    answer: "It is rare, but possible due to **overbooking** or technical errors. If this happens with an online booking, you are often stranded. If you booked with us, **we resolve it immediately** by speaking to the manager or arranging an upgrade/alternative nearby."
                }
            ]
        },
        {
            title: "Local Agent Advantage",
            icon: UserCheck,
            questions: [
                {
                    question: "Why should I book hotels through a local travel agent?",
                    answer: "For **Trust, Accountability, and Support**. \n- We verify the hotel's actual condition. \n- We handle special requests (Cake, Decor, Jain food). \n- We answer your phone if things go wrong. \n- We provide GST invoices for business travelers."
                },
                {
                    question: "Is booking hotels through a Bhilai-based travel agency safer?",
                    answer: "Yes. You get **local accountability**. You know where our office is. If a hotel in Goa or Manali troubles you, you have a team in Bhilai fighting for your rights and ensuring you get what you paid for."
                },
                {
                    question: "Who helps if I face issues after reaching the hotel?",
                    answer: "If you booked online, you deal with a call center. If you booked with us, **we are your support**. Whether the AC isn't working or the room is dirty, involve us immediately, and we will coordinate with the hotel to fix it or move you."
                },
                {
                    question: "Can a travel agent get cheaper hotel rates than booking apps?",
                    answer: "Yes. Agents have access to **Offline B2B Inventory** and **Contract Rates** that are not visible to the public. We can often beat online prices or match them while adding free perks."
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
                <title>Hotel Booking FAQs | Check-in Rules, Safety & Pricing - Rudraksh Safar</title>
                <meta name="description" content="Expert answers on hotel bookings. Check-in times, couple-friendly policies, hidden charges, and why booking with a local agent is safer than online apps." />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/hotel-booking" />
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
                            { label: 'Hotel Booking', path: '/faqs/hotel-booking' }
                        ]} />

                        <div className="max-w-4xl mx-auto text-center mt-8">
                            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                <Hotel className="w-4 h-4" />
                                <span>Accommodation Expert Guide</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                                Hotel Booking <span className="text-primary">Questions Answered</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Don't let hidden charges or bad rooms ruin your trip. Get clear answers on policies, pricing, safety, and the real benefits of booking with a human expert.
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
                        <h2 className="text-3xl font-bold mb-6">Want a guarantee, not just a booking?</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Online apps simply book a room. We ensure you have a great stay. Let us handle your hotel bookings for peace of mind.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                                <UserCheck className="w-5 h-5" />
                                Book with an Agent
                            </Link>
                            <Link to="/travel-services/hotel-booking" className="inline-flex items-center justify-center gap-2 bg-white border border-input text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted/50 transition-all">
                                Explore Hotel Services
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

export default HotelBookingFAQ;
