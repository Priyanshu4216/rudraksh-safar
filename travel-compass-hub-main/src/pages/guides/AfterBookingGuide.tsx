import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';
import { CheckCircle2, MessageCircle, FileText, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AfterBookingGuide = () => {
    const steps = [
        {
            icon: CheckCircle2,
            title: "1. Booking Confirmation (Immediate)",
            desc: "As soon as you pay the advance token amount, you receive an official invoice and a 'Booking ID' on your WhatsApp and Email."
        },
        {
            icon: MessageCircle,
            title: "2. The WhatsApp Group (Within 24 Hrs)",
            desc: "We create a dedicated WhatsApp group containing You, Your Family, and 3 Rudraksh Safar Team Members (accounts/operations). This is your 24/7 support line."
        },
        {
            icon: FileText,
            title: "3. Flight & Hotel Vouchers (2-3 Days)",
            desc: "If flights are included, tickets are issued within 24 hours. Hotel vouchers are released 48-72 hours after booking confirmation."
        },
        {
            icon: Clock,
            title: "4. Final Itinerary Briefing (7 Days Before Trip)",
            desc: "We schedule a quick call to walk you through the final plan, pickup timings, and driver details."
        }
    ];

    return (
        <>
            <Helmet>
                <title>After You Book: Our Process & Timeline | Rudraksh Safar</title>
                <meta name="description" content="What happens after you pay the advance? Transparent timeline of ticket issuance, voucher delivery, and our unique 24/7 WhatsApp support group." />
                <link rel="canonical" href="https://rudrakshsafar.com/guides/after-booking-guide" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-24 pb-16">

                <div className="container max-w-4xl mx-auto px-4">
                    <div className="flex justify-start mb-6">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Guides', path: '/for-travellers' }, { label: 'After Booking Process', path: '/guides/after-booking-guide' }]} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        You've Booked. <span className="text-emerald-600">Now What?</span>
                    </h1>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-12 border-b pb-8">
                        <LastUpdated />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                        <p className="lead text-xl">
                            Anxiety after paying an advance is normal. "Did they get the money?", "When will I get the tickets?".
                            At Rudraksh Safar, we believe in <strong>Radical Transparency</strong>. Here is the exact timeline of events from the moment you pay.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative border-l-4 border-emerald-100 dark:border-emerald-900/50 ml-4 md:ml-6 space-y-12 mb-16">
                        {steps.map((step, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[22px] top-0 bg-background p-1">
                                    <div className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 p-2 rounded-full">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Trust Block */}
                    <Card className="bg-indigo-50 dark:bg-indigo-950/20 border-indigo-100 mb-16">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Phone className="w-6 h-6 text-indigo-600" />
                                Why The "WhatsApp Group" Matters
                            </h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                Most agencies give you a toll-free number. We give you a <strong>personal group</strong>.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-1" />
                                    <span><strong>No repeating yourself:</strong> Everyone (Sales, Ops, Accounts) is in one group. You don't need to forward messages.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-1" />
                                    <span><strong>Emergency Response:</strong> If you are stuck at an airport at 2 AM, just message the group. Our night shift team sees it instantly.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <FAQsSection
                        title="Common Post-Booking Questions"
                        faqs={[
                            {
                                question: "Can I make changes after booking?",
                                answer: "Yes. Minor changes (like meal preferences) are free. Major changes (dates/hotels) depend on availability and may incur airline/hotel change fees. We will always try to minimize these costs for you."
                            },
                            {
                                question: "When do I pay the pending amount?",
                                answer: "Typically, 50% is due 30 days before travel, and the final balance 15 days before travel. For immediate bookings (less than 15 days away), full payment is required upfront."
                            },
                            {
                                question: " What if my visa gets rejected?",
                                answer: "In the rare case of rejection, we help you re-apply immediately (correction fees apply). If re-application isn't possible, we help you reschedule the trip or process refunds based on the cancellation policy."
                            }
                        ]}
                    />

                </div>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default AfterBookingGuide;
