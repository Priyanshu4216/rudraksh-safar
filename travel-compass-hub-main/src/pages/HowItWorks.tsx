import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQsSection from '@/components/FAQsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Phone, CalendarCheck, FileText, CreditCard, Plane, ShieldCheck, HelpCircle } from 'lucide-react';

const HowItWorks = () => {
    const processSteps = [
        {
            id: 1,
            title: "Inquiry & Consultation",
            description: "Start by sharing your dream destination, budget, and dates. Call us, WhatsApp us, or visit our office in Bhilai for a free consultation. We listen to your needs first.",
            icon: MessageCircle
        },
        {
            id: 2,
            title: "Itinerary Customization",
            description: "Our experts craft a personalized plan. Whether you want a relaxed beach holiday or an action-packed adventure, we tweak the itinerary until it's perfect for you.",
            icon: FileText
        },
        {
            id: 3,
            title: "Booking & Confirmation",
            description: "Once you approve the plan, pay a small booking token to lock the rates. We immediately book your flights and hotels to avoid price hikes.",
            icon: CalendarCheck
        },
        {
            id: 4,
            title: "Easy Payments",
            description: "Pay the remaining amount in flexible installments. We accept UPI, Bank Transfers, and Cash. No hidden charges, total transparency.",
            icon: CreditCard
        },
        {
            id: 5,
            title: "Visa & Documentation",
            description: "Relax while we handle the boring paperwork. From visa applications to travel insurance, our team manages everything for you.",
            icon: ShieldCheck
        },
        {
            id: 6,
            title: "Pre-Trip Briefing",
            description: "Receive your complete travel kit with tickets, vouchers, and a 24/7 support number. We guide you on packing, currency, and local tips.",
            icon: Plane
        },
        {
            id: 7,
            title: "Enjoy Your Trip",
            description: "Travel with peace of mind. Our local support team is just a call away if you face any issues during your journey.",
            icon: Phone
        }
    ];

    const paymentMethods = [
        { name: "UPI Apps", desc: "GPay, PhonePe, Paytm", icon: "📱" },
        { name: "Bank Transfer", desc: "NEFT / RTGS / IMPS", icon: "🏦" },
        { name: "Cash / Cheque", desc: "At our Bhilai Office", icon: "💵" },
        { name: "Credit Cards", desc: "Visa / Mastercard", icon: "💳" }
    ];

    const processFaqs = [
        {
            question: "How does the tour booking process work with a travel agent?",
            answer: "It's a simple stress-free process: 1) Consultation (Call/WhatsApp) to understand your needs. 2) We design a custom itinerary. 3) You approve and pay a booking token. 4) We share vouchers & tickets. 5) You travel with our 24/7 support."
        },
        {
            question: "What happens after I book a tour package?",
            answer: "Immediately after booking, you receive a 'Booking Confirmation'. Then, our operations team starts reserving your hotels, flights, and cabs. Within 24-48 hours, you get verified vouchers. We also create a dedicated WhatsApp group for your trip updates."
        },
        {
            question: "What documents are required to book a tour?",
            answer: "For Domestic trips: Aadhar Card or Voter ID of all travelers. For International trips: Original Passport (valid for 6 months) and photos for Visa. We guide you on specific requirements for each country."
        },
        {
            question: "How are payments and refunds handled in tour bookings?",
            answer: "We offer flexible payments: 30% to book, remaining before travel. We accept UPI, Net Banking, and Cash. Refunds follow a transparent policy: if you cancel early, we fight to get you maximum refunds from airlines and hotels."
        },
        {
            question: "Can tour packages be customized after booking?",
            answer: "Yes, minor changes (like upgrading a room or adding a sightseeing spot) can be done even after booking, subject to availability. Major changes (like changing dates) might incur cancellation fees from airlines/hotels, but we try our best to minimize costs."
        }
    ];

    return (
        <>
            <Helmet>
                <title>How it Works - Tour Booking Process | Rudraksh Safar</title>
                <meta name="description" content="Understand our simple step-by-step tour booking process. From inquiry to travel, see how Rudraksh Safar makes your journey hassle-free. Transparent payments and easy refunds." />
                <meta name="keywords" content="how tour booking process works, step by step tour booking, travel agency payment methods, tour refund policy, travel agency process, Rudraksh Safar booking" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "HowTo",
                                "name": "How to Book a Tour Package with Rudraksh Safar",
                                "description": "A simple step-by-step guide to booking your dream vacation.",
                                "step": [
                                    {
                                        "@type": "HowToStep",
                                        "name": "Inquiry & Consultation",
                                        "text": "Share your destination, budget, and dates via Call or WhatsApp for a free consultation."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "name": "Itinerary Customization",
                                        "text": "Our experts craft a personalized plan including hotels, flights, and sightseeing."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "name": "Booking & Confirmation",
                                        "text": "Approve the plan and pay a booking token to lock rates. We book your tickets immediately."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "name": "Visa & Documentation",
                                        "text": "We handle visa paperwork and travel insurance while you relax."
                                    },
                                    {
                                        "@type": "HowToStep",
                                        "name": "Enjoy Your Trip",
                                        "text": "Receive your travel kit and enjoy your trip with our 24/7 support."
                                    }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    { "@type": "Question", "name": "How does the tour booking process work with a travel agent?", "acceptedAnswer": { "@type": "Answer", "text": "It's a simple stress-free process: Consultation -> Custom Itinerary -> Booking Token -> Vouchers & Tickets -> Travel with 24/7 Support." } },
                                    { "@type": "Question", "name": "What happens after I book a tour package?", "acceptedAnswer": { "@type": "Answer", "text": "You receive a Booking Confirmation, then we reserve approvals. Within 24-48 hours, you get verified vouchers." } },
                                    { "@type": "Question", "name": "How are payments and refunds handled?", "acceptedAnswer": { "@type": "Answer", "text": "We accept UPI, Bank Transfer, and Cash. Refunds follow a transparent policy based on airline/hotel cancellation rules." } }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
                            Your Journey, <span className="text-primary">Simplified</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            We believe planning a holiday should be as relaxing as the holiday itself.
                            Here is exactly how we take you from "Thinking about a trip" to "Boarding the flight".
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="rounded-full" asChild>
                                <a href="#timeline">See the Process</a>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full" asChild>
                                <a href="#faqs">Read FAQs</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section id="timeline" className="bg-background">
                    <ProcessTimeline
                        steps={processSteps}
                        title="Step-by-Step Booking Process"
                        description="No confusion, no hidden steps. Here is your roadmap to a perfect vacation."
                    />
                </section>

                {/* Payment & Security Section */}
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Safe & Secure Payments</h2>
                            <p className="text-muted-foreground">Multiple payment options for your convenience.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {paymentMethods.map((method, idx) => (
                                <Card key={idx} className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="text-4xl mb-4">{method.icon}</div>
                                        <h3 className="font-bold text-lg mb-1">{method.name}</h3>
                                        <p className="text-sm text-muted-foreground">{method.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center mt-12 max-w-2xl mx-auto bg-background p-6 rounded-xl border border-primary/20">
                            <div className="flex justify-center mb-4">
                                <HelpCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Refund Policy Simplified</h3>
                            <p className="text-muted-foreground mb-4">
                                Life is unpredictable, and we understand that plans change. We act as your advocate with airlines and hotels to get you the maximum possible refund.
                            </p>
                            <Button variant="link" asChild className="text-primary">
                                <a href="/refund-policy">Read Full Refund Policy &rarr;</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Support Promise (Psychological Reassurance) */}
                <section className="py-20 bg-blue-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6">Support During Your Trip</h2>
                            <p className="text-xl text-blue-100 mb-8 font-light">
                                "We don't disappear after payment."
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                                    <Phone className="w-8 h-8 text-yellow-400 mb-4" />
                                    <h3 className="font-bold text-lg mb-2">24/7 Human Help</h3>
                                    <p className="text-blue-100/80 text-sm">No chatbots. You get a direct mobile number for emergencies.</p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                                    <ShieldCheck className="w-8 h-8 text-green-400 mb-4" />
                                    <h3 className="font-bold text-lg mb-2">Issue Resolution</h3>
                                    <p className="text-blue-100/80 text-sm">Hotel not as promised? Car didn't show up? One call, and we fix it on the spot.</p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                                    <Plane className="w-8 h-8 text-cyan-400 mb-4" />
                                    <h3 className="font-bold text-lg mb-2">Flight Changes</h3>
                                    <p className="text-blue-100/80 text-sm">If flights get cancelled, we immediately help with rebooking and accommodation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <FAQsSection
                    faqs={processFaqs}
                    title="Booking Process FAQs"
                    description="Clear answers to your doubts about payments, booking, and safety."
                />

                {/* CTA */}
                <section className="py-20 bg-background text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6">Ready to Start Step 1?</h2>
                        <p className="text-muted-foreground mb-8">Let's plan your dream vacation today.</p>
                        <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/25" asChild>
                            <a href="https://wa.me/919406182174?text=Hi, I want to start my booking process" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 w-5 h-5" /> Start Inquiry
                            </a>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default HowItWorks;
