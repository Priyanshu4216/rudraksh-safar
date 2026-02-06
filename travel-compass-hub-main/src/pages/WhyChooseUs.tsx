import { Helmet } from 'react-helmet-async';
import { Shield, Clock, Award, Users, Heart, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';

const WhyChooseUs = () => {
    const reasons = [
        { icon: Users, title: "Local Presence", desc: "We are not a faceless website. Our office is in Bhilai (GE Road) and we have specialized agents for Raipur. We are your neighbors." },
        { icon: Shield, title: "100% Transparency", desc: "No hidden costs. No 'Conditions Apply' shocks. We explain every inclusion and exclusion before you pay." },
        { icon: Clock, title: "24/7 Support", desc: "Our job doesn't end at booking. We support you throughout your trip - if your flight is delayed or you need a doctor, we are one call away." },
        { icon: Award, title: "Best Rate Guarantee", desc: "We negotiate bulk rates with hotels and vehicle providers to give you prices better than online portals." },
        { icon: Heart, title: "Personalized Care", desc: "We don't sell 'fixed' holidays. We customize every hour of your trip based on your taste and comfort." },
    ];

    return (
        <>
            <Helmet>
                <title>Why Choose Rudraksh Safar? | Trusted Travel Agent in Chhattisgarh</title>
                <meta name="description" content="Discover why 5000+ travelers in Bhilai & Raipur trust Rudraksh Safar. We offer local support, transparent pricing, and 24/7 assistance for all your trips." />
                <meta name="keywords" content="why choose rudraksh safar, trusted travel agent bhilai, best tour operator raipur, reliable travel agency chhattisgarh" />
                <link rel="canonical" href="https://rudrakshsafar.com/why-choose-us" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "about": {
                            "@type": "Service",
                            "name": "Travel Booking & Tour Planning",
                            "provider": {
                                "@type": "TravelAgency",
                                "name": "Rudraksh Safar",
                                "address": {
                                    "addressLocality": "Bhilai",
                                    "addressRegion": "Chhattisgarh"
                                }
                            }
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-20 bg-emerald-50 dark:bg-emerald-950/20">
                    <div className="container mx-auto px-4 text-center">
                        <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Peace of Mind <span className="text-emerald-600">Guaranteed</span>
                        </h1>
                        <div className="flex justify-center mb-6">
                            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Why Choose Us', path: '/why-choose-us' }]} />
                        </div>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Your holiday is precious. Don't risk it with unknown online portals. Trust the local experts.
                        </p>
                        <div className="flex justify-center mt-4">
                            <LastUpdated />
                        </div>
                    </div>
                </section>

                {/* Reasons Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {reasons.map((reason, index) => (
                                <Card key={index} className="hover:shadow-lg transition-all border-emerald-100 dark:border-emerald-900">
                                    <CardContent className="p-8 text-center">
                                        <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <reason.icon className="w-7 h-7 text-emerald-600" />
                                        </div>
                                        <h3 className="font-bold text-xl mb-3">{reason.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* New Section 1: How We Reduce Travel Risk */}
                <section className="py-20 bg-red-50 dark:bg-red-950/10 border-y border-red-100 dark:border-red-900/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-red-700 dark:text-red-400">How We Protect You When Things Go Wrong</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">Travel has risks. Online apps give you a refund button; we give you a solution. Real scenarios where we saved our clients:</p>
                        </div>
                        <div className="grid gap-6 max-w-5xl mx-auto">
                            {[
                                {
                                    scenario: "Your flight gets cancelled 4 hours before departure.",
                                    online: "You spend 2 hours on IVR holding for customer care. Refund takes 7 days. You are stuck at the airport.",
                                    rudraksh: "We call YOU before you leave for the airport. We instantly rebook you on the next available alternative flight so your holiday isn't ruined."
                                },
                                {
                                    scenario: "Hotel claims they are 'Overbooked' upon arrival.",
                                    online: "The app apologizes and initiates a refund. You are stranded on the street with luggage in a new city.",
                                    rudraksh: "We speak to the hotel manager immediately. If they can't accommodate, we upgrade you to a better hotel nearby at NO extra cost to you."
                                },
                                {
                                    scenario: "Visa issuance gets delayed.",
                                    online: "Your flight is non-refundable. You lose 100% of your ticket money.",
                                    rudraksh: "We track visa progress daily. If delayed, we hold your flight ticket (Time Limit Booking) instead of confirming it, saving your money until the visa arrives."
                                },
                                {
                                    scenario: "Medical emergency during the trip.",
                                    online: "No support. You are on your own to find a hospital.",
                                    rudraksh: "We use our local network to find the nearest doctor/clinic for you. We assist in insurance paperwork immediately."
                                },
                                {
                                    scenario: "Missed connection flight from Raipur.",
                                    online: "Your onward ticket is cancelled as 'No Show'. You lose money and the trip.",
                                    rudraksh: "We coordinate with the airline ground staff to try and gate-check you. If missed, we find the cheapest next option instantly."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-card p-6 rounded-xl border flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
                                    <div className="min-w-[200px] font-bold text-lg text-foreground">
                                        <span className="text-red-500 block text-sm uppercase tracking-wider mb-1">Scenario {i + 1}</span>
                                        {item.scenario}
                                    </div>
                                    <div className="flex-1 grid md:grid-cols-2 gap-6 w-full">
                                        <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
                                            <div className="flex items-center gap-2 text-muted-foreground font-semibold text-sm">
                                                <XCircle className="w-4 h-4" /> Online Portal
                                            </div>
                                            <p className="text-sm text-muted-foreground">{item.online}</p>
                                        </div>
                                        <div className="space-y-2 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-100 dark:border-emerald-900">
                                            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                                                <CheckCircle2 className="w-4 h-4" /> Rudraksh Safar
                                            </div>
                                            <p className="text-sm text-foreground">{item.rudraksh}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table - Top 1% Strategy */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Local Travel Agent vs Online Booking</h2>
                            <p className="text-muted-foreground">Why 5000+ travelers chose our <strong>hassle-free tour packages</strong> over Faceless Apps.</p>
                        </div>
                        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-sm border overflow-hidden">
                            <div className="grid grid-cols-3 text-center border-b bg-muted p-4 font-bold text-lg">
                                <div className="text-left pl-4">Feature</div>
                                <div className="text-emerald-600">Rudraksh Safar (Personalized)</div>
                                <div className="text-muted-foreground">Online Portals (Generic)</div>
                            </div>
                            <div className="grid grid-cols-3 text-center border-b p-4 items-center">
                                <div className="text-left pl-4 font-medium">End-to-End Assistance</div>
                                <div className="text-emerald-600 flex justify-center items-center gap-2"><CheckCircle2 className="w-5 h-5" /> <strong>Door-to-Door Care</strong></div>
                                <div className="text-muted-foreground flex justify-center items-center gap-2"><XCircle className="w-5 h-5" /> DIY (Do It Yourself)</div>
                            </div>
                            <div className="grid grid-cols-3 text-center border-b p-4 items-center">
                                <div className="text-left pl-4 font-medium">Itinerary Planning</div>
                                <div className="text-emerald-600 flex justify-center items-center gap-2"><CheckCircle2 className="w-5 h-5" /> <strong>Customized Packages</strong></div>
                                <div className="text-muted-foreground flex justify-center items-center gap-2"><XCircle className="w-5 h-5" /> Rigid Fixed Plans</div>
                            </div>
                            <div className="grid grid-cols-3 text-center border-b p-4 items-center">
                                <div className="text-left pl-4 font-medium">Emergency Support</div>
                                <div className="text-emerald-600 flex justify-center items-center gap-2"><CheckCircle2 className="w-5 h-5" /> <strong>Direct Agent Mobile</strong></div>
                                <div className="text-muted-foreground flex justify-center items-center gap-2"><XCircle className="w-5 h-5" /> IVR / Chatbot</div>
                            </div>
                            <div className="grid grid-cols-3 text-center p-4 items-center">
                                <div className="text-left pl-4 font-medium">Trust Factor</div>
                                <div className="text-emerald-600 flex justify-center items-center gap-2"><CheckCircle2 className="w-5 h-5" /> <strong>Verified Agent</strong></div>
                                <div className="text-muted-foreground flex justify-center items-center gap-2"><XCircle className="w-5 h-5" /> Virtual Brand</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Promise */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto border-2 border-dashed border-emerald-300 rounded-2xl p-10 bg-emerald-50/50 dark:bg-emerald-950/10">
                            <h2 className="text-3xl font-bold mb-6">Our Promise to You</h2>
                            <blockquote className="text-xl italic text-muted-foreground mb-8">
                                "We treat every trip as if it were our own family's vacation. We earn not just money, but relationships. If you are not happy, we are not successful."
                            </blockquote>
                            <div className="font-bold flex flex-col items-center">
                                <span className="text-lg">Team Rudraksh Safar</span>
                                <span className="text-sm text-muted-foreground">Serving Since 2010</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-emerald-700 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Give us a chance to plan your next trip. You won't go back to generic booking sites.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild className="text-lg px-8 text-emerald-800">
                                <a href="https://wa.me/919406182174?text=I want to experience Rudraksh Safar service">
                                    Start Planning
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Why Bhilai Agent - SEO Content Block */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">Why Book from a Bhilai-Based Agent?</h2>
                            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                                <p className="mb-6">
                                    When you search for <strong>"travel agency near me advantages"</strong>, you aren't just looking for a shop; you are looking for accountability.
                                    Booking a tour package from a local Bhilai agent like Rudraksh Safar gives you something no online app can provide: <strong>Peace of Mind</strong>.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    <div className="bg-card p-6 rounded-xl border">
                                        <h3 className="text-xl font-bold text-foreground mb-3">✅ Accountability</h3>
                                        <p>We live here. Our office is on GE Road. You know exactly where to find us if something goes wrong. Try finding the "office" of a faceless website when you are stuck at an airport.</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-xl border">
                                        <h3 className="text-xl font-bold text-foreground mb-3">✅ Face-to-Face Trust</h3>
                                        <p>Sit with us, drink a cup of coffee, and plan your itinerary. We explain visa rules, flight timings, and hotel locations personally, eliminating all confusion.</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-xl border">
                                        <h3 className="text-xl font-bold text-foreground mb-3">✅ Easy Cash/Local Payments</h3>
                                        <p>Don't want to risky large online transactions? We accept cash, cheques, and local bank transfers at our office. Your money is safe with a known local entity.</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-xl border">
                                        <h3 className="text-xl font-bold text-foreground mb-3">✅ Chhattisgarh Specific Knowledge</h3>
                                        <p>We know the flight connections from Raipur better than anyone. We know which train from Durg is best for your connecting tour. Local expertise matters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Section 2: Expert Evaluation Guide (SEO Prose) */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg dark:prose-invert mx-auto">
                                <h2 className="text-center font-bold text-3xl mb-8">How to Evaluate a Travel Agency Before Booking (Expert Checklist)</h2>
                                <p className="lead text-xl text-center text-muted-foreground mb-10">
                                    Choosing the right travel partner is as important as choosing the destination. Here is an unbiased guide on what to check before you hand over your hard-earned money.
                                </p>

                                <h3>1. Physical Office Presence</h3>
                                <p>
                                    In the digital age, anyone can create a flashy website or Instagram page. But where do you go if they stop replying to your messages? Always verify if the agency has a physical office. A brick-and-mortar presence, like ours on GE Road in Bhilai, is a strong indicator of legitimacy. It means the agent is accountable to local laws and authorities. <strong>Never transfer money to an agent who refuses to share their office location.</strong>
                                </p>

                                <h3>2. Emergency Accountability</h3>
                                <p>
                                    The true test of a travel agent isn't how they book a ticket, but how they handle a crisis. Ask specific questions: <em>"Who do I call if my flight is cancelled at 2 AM?"</em> or <em>"What happens if my driver doesn't show up?"</em>. Online portals provide automated chatbots. A genuine travel consultant provides a personal mobile number that is reachable 24/7. At Rudraksh Safar, we ensure our clients always have a direct line of communication for emergencies.
                                </p>

                                <h3>3. Transparency in Inclusions</h3>
                                <p>
                                    A common trick in the industry is to quote a low price by hiding taxes, service charges, or essential inclusions like breakfast or transfers. When comparing quotes, always check the "Inclusions" list line-by-line. Does it include GST? Is the hotel rating verified? Are the transfers private or shared? We pride ourselves on <strong>100% Pricing Transparency</strong>—the price we quote is the price you pay, with no surprise add-ons later.
                                </p>

                                <h3>4. Local Route Knowledge</h3>
                                <p>
                                    An algorithm might route you through a connecting city with a 45-minute layover, which is technically possible but practically risky. A local agent knows better. We know that flights from Raipur often face fog delays in winter, so we buffer your connections accordingly. We know which train stations in Chhattisgarh are safer for late-night boarding. This local wisdom protects you from missed connections and travel fatigue.
                                </p>

                                <h3>5. Post-Booking Support</h3>
                                <p>
                                    Many agencies treat the transaction as closed once payment is received. But for the traveler, the journey has just begun. Evaluate an agent by their willingness to help with web check-ins, seat selection, and special requests like meal preferences. A full-service agency like Rudraksh Safar stays involved until you are safely back home.
                                </p>

                                <div className="bg-muted p-6 rounded-xl mt-8 border-l-4 border-primary">
                                    <strong>The Bottom Line:</strong> Technology is great for searching, but humans are better for planning. Use online tools to research, but trust a verified expert to execute your travel plans securely.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <FAQsSection
                    title="Common Questions About Local Booking"
                    faqs={[
                        {
                            question: "Is it cheaper to book with a local agent vs online?",
                            answer: "Often, yes! We have B2B rates with hotels and transporters that are lower than public online prices. Plus, you save on hidden convenience fees."
                        },
                        {
                            question: "What if I face an emergency during my trip?",
                            answer: "This is our biggest advantage. You call our personal mobile number (24/7), not a toll-free call center. We solve issues immediately."
                        },
                        {
                            question: "Can I customize my package?",
                            answer: "100%. Unlike rigid online combos, we build your trip from scratch. Add a day, change a hotel, upgrade a car - it's all your choice."
                        }
                    ]}
                />

                {/* New Section 3: Advanced FAQs */}
                <FAQsSection
                    title="Advanced Questions Travelers Ask Before Trusting an Agent"
                    className="bg-muted/30 pt-0"
                    faqs={[
                        {
                            question: "How do you handle refund disputes with airlines?",
                            answer: "We act as your legal representative. Since we book through authorized B2B channels (Galileo/Amadeus), we have direct access to airline backend systems. We file forceful refund claims and track them daily. While we cannot override airline policy, we ensure you get every rupee you are legally entitled to, which is often impossible for individual travelers to negotiate."
                        },
                        {
                            question: "Are you accountable if a tour operator in another country fails to deliver?",
                            answer: "Yes. We only work with vetted DMCs (Destination Management Companies) who have a bank guarantee with us. If a driver or hotel abroad fails to provide service, we hold the DMC accountable and arrange immediate alternatives. You are contracting with Rudraksh Safar Bhilai, so your safety is our direct liability."
                        },
                        {
                            question: "How are you different from 'Freelance' travel agents?",
                            answer: "Freelancers operate from home often without registration. Rudraksh Safar is a fully registered business with a commercial office and tax compliance. This matters because it gives you consumer protection. If a freelancer disappears, you have no recourse. We have a reputation and a physical establishment to protect."
                        },
                        {
                            question: "Do you charge a consultation fee for planning complex trips?",
                            answer: "For standard packages, consultation is free. For highly complex custom itineraries (e.g., multi-country Europe trips) requiring days of research, we may ask for a small adjustable advance token. This amount is 100% adjusted against your final booking cost. It ensures our experts spend time on serious travelers."
                        },
                        {
                            question: "What happens if I get scammed by a fake website using your name?",
                            answer: "We only accept payments into our official business bank accounts or at our office. We will NEVER ask you to pay into a personal UPI or obscure wallet. Always verify the number you are speaking to—our official line is +91-9406182174. If you are unsure, visit our office on GE Road."
                        },
                        {
                            question: "Do you support corporate GST invoices?",
                            answer: "Absolutely. We provide full GST invoices for all corporate bookings, allowing your company to claim input tax credit. We manage corporate travel for several leading firms in Bhilai and Raipur, handling everything from flight changes to monthly billing reports."
                        },
                        {
                            question: "Can I pay in installments?",
                            answer: "Yes, for tour packages booked well in advance (more than 2 months), we offer flexible payment plans. You can pay a booking token to lock the rates, and pay the balance in installments, clearing the full amount before travel documents are handed over."
                        },
                        {
                            question: "Who regulates your services?",
                            answer: "We abide by the regulations of the Ministry of Tourism and MSME. For flight bookings, we follow DGCA and IATA guidelines. We are committed to ethical trade practices and consumer rights protection."
                        }
                    ]}
                />

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default WhyChooseUs;
