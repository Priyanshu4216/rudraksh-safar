import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const TrainBookingFAQ = () => {
    const faqs = [
        // SECTION 1: GENERAL TRAIN BOOKING QUESTIONS
        {
            question: "What is train ticket booking and how does it work in India?",
            answer: "Train ticket booking in India is managed by IRCTC (Indian Railway Catering and Tourism Corporation). Passengers can book tickets 120 days in advance. Every ticket has a PNR (Passenger Name Record) which tracks its status (Confirmed, RAC, or Waitlisted). You can book online via IRCTC/Agents or offline at station counters."
        },
        {
            question: "Is it better to book train tickets online or through an agent?",
            answer: "Booking through an authorized agent reduces the risk of payment failures and offers expert assistance for complex routes. Agents can also help seniors and those who are not tech-savvy. However, personal IRCTC accounts allow you to book directly if you are comfortable with the speed required for Tatkal."
        },
        {
            question: "What details are required to book a train ticket?",
            answer: "You strictly need: Full Name (as per Aadhaar), Age, Gender, and Mobile Number. For Tatkal bookings, carrying original ID proof during travel is mandatory. No ID upload is needed during booking, but correct spelling is crucial."
        },
        {
            question: "What is PNR number and why is it important?",
            answer: "PNR (Passenger Name Record) is a unique 10-digit number generated when you book a train ticket. It acts as your journey identity. You use the PNR to check if your waitlisted ticket is confirmed, to order food on the train, and for refunds if the train is cancelled."
        },
        {
            question: "How early can train tickets be booked in India?",
            answer: "General quota tickets can be booked 120 days (approx 4 months) before the journey date. Tatkal tickets open 1 day before the train's departure from its originating station (10:00 AM for AC, 11:00 AM for Sleeper)."
        },

        // SECTION 2: TRAIN BOOKING FROM BHILAI / DURG / RAIPUR
        {
            question: "From which station should I book trains if I live in Bhilai?",
            answer: "Durg Junction (DURG) is the best primary station for Bhilai residents as it is a major halt for all superfast trains. <a href='/travel-agent-bhilai' class='text-primary hover:underline'>Bhilai Power House</a> is convenient for local trains, but long-distance trains often skip it."
        },
        {
            question: "Which trains are most reliable from Durg Junction?",
            answer: "The Gitanjali Express (Mumbai-Howrah), Amarkantak Express (Bhopal), and Shivnath Express are highly reliable. The Vande Bharat Express from Durg to Visakhapatnam is now the fastest option for that route."
        },
        {
            question: "Is booking from Durg better than Raipur for Tatkal?",
            answer: "Yes, in many cases. Since Durg is often an originating station or a major technical halt, the seat quota distribution can differ from Raipur. However, this depends on the specific train's charting logic."
        },
        {
            question: "Do you provide train booking services in Bhilai?",
            answer: "Yes, Rudraksh Safar provides authorized irctc ticket booking assistance in Bhilai. We help you find the best train options and manage the booking process, though confirmation depends on IRCTC availability."
        },
        {
            question: "Can you book tickets for senior citizens from Bhilai?",
            answer: "Absolutely. We prioritize lower berths for senior citizens. You must carry valid age proof (Aadhaar/Voter ID) during the journey to avail the lower berth quota benefits if applicable."
        },

        // SECTION 3: TATKAL & WAITLIST
        {
            question: "What is Tatkal ticket booking?",
            answer: "Tatkal is an emergency quota for travelers who need to travel on short notice. It opens 24 hours before the train's departure. The fare is higher than normal tickets, and it sells out in minutes."
        },
        {
            question: "Can agents book Tatkal tickets legally?",
            answer: "Yes, authorized IRCTC agents can book Tatkal tickets, but only after a specific time window (usually 15 minutes after public opening) to ensure fair play. We strictly follow IRCTC guidelines."
        },
        {
            question: "Why do Tatkal tickets sell out so fast?",
            answer: "Demand far exceeds supply. Millions of users log in simultaneously at 10:00 AM. Since limited seats are allocated to Tatkal, they are often booked within seconds by automated bots and high-speed users."
        },
        {
            question: "What are the chances of WL confirmation?",
            answer: "It depends on the Waitlist type. GNWL (General Waiting List) has the highest chance of confirmation. PQWL (Pooled Quota) and RLWL (Remote Location) have distinct limits and confirm less often."
        },
        {
            question: "What happens if my ticket stays waitlisted?",
            answer: "If you booked online and your ticket remains fully waitlisted after chart preparation, it gets automatically cancelled, and the refund is credited to your bank. You cannot board the train with a fully waitlisted E-ticket."
        },

        // SECTION 4: PAYMENT, REFUND & CANCELLATION
        {
            question: "How much time does refund take for cancelled tickets?",
            answer: "For failed transactions or cancelled tickets, refunds usually reflect in 3-7 working days. If the train is cancelled by Railways, the full amount is refunded automatically."
        },
        {
            question: "Are Tatkal tickets refundable?",
            answer: "No. Confirmed Tatkal tickets are non-refundable. If you cancel a confirmed Tatkal ticket, you get zero refund. Waitlisted Tatkal tickets, however, are refundable with deductions."
        },
        {
            question: "What happens if train gets cancelled or delayed?",
            answer: "If the train is cancelled by Indian Railways, you are entitled to a full refund. You must file a TDR (Ticket Deposit Receipt) if the train is delayed by more than 3 hours and you choose not to travel."
        },
        {
            question: "Can I change boarding station after booking?",
            answer: "Yes, you can change the boarding station up to 24 hours before departure by logging into IRCTC or visiting a counter. You can only move the boarding point forward (closer to destination), not backward."
        },
        {
            question: "Is my money safe when booking via agent?",
            answer: "Yes, provided you use an authorized agent like Rudraksh Safar. We provide valid computerized receipts for every booking. Avoid unauthorized touts who cannot give you a valid PNR receipt immediately."
        },

        // SECTION 5: SPECIAL CASES
        {
            question: "Can I book tickets for a group or marriage party?",
            answer: "Yes, bulk booking is possible. For groups larger than 6, special permission is often needed from the Chief Reservation Supervisor. We can assist in coordinating group bookings for weddings or tours."
        },
        {
            question: "Can students get discounts on train tickets?",
            answer: "Student concessions exist but generally require booking from the counter with valid school/college verification certificates. Online student concessions are limited."
        },
        {
            question: "Is ID mandatory during train travel?",
            answer: "Yes. At least one passenger on the ticket must carry an original government-issued ID (Aadhaar, Voter ID, DL, Passport) during the journey to prove identity to the TTE."
        },
        {
            question: "Can ladies get special quota in trains?",
            answer: "Yes, most trains have a 'Ladies Quota' (LD) usually in Sleeper class, reserved for women traveling alone or with children under 12. This quota is distinct from the General quota."
        },
        {
            question: "What happens if name is wrong on ticket?",
            answer: "Minor spelling errors are usually ignored if the ID matches. For major name changes, you must approach the Railway Reservation Officer at least 24 hours before departure with proof."
        },

        // SECTION 6: PRACTICAL JOURNEY QUESTIONS
        {
            question: "How early should I reach the station?",
            answer: "Plan to reach the station at least 45 minutes before departure. This gives you time to find your platform and coach without panic, especially at big stations like Raipur or Durg."
        },
        {
            question: "What documents should I carry while traveling?",
            answer: "Your E-ticket (SMS or email printout) and one Original ID proof (Aadhaar, Voter ID, Pan Card, etc.). Digital Aadhaar in DigiLocker is also accepted."
        },
        {
            question: "Can I board from a different station?",
            answer: "You must board from the station mentioned on your ticket (or the changed boarding point). If you board from a later station without informing IRCTC, the TTE may cancel your seat and give it to RAC passengers."
        },
        {
            question: "How to check live train running status?",
            answer: "Use the NTES app or website, or simply Google the train number. It shows the real-time location. We recommend checking this before leaving for the station."
        },
        {
            question: "What to do if IRCTC website is not working?",
            answer: "Wait for 10-15 minutes and try again. The site faces heavy load during Tatkal hours (10-11 AM). Alternatively, <a href='/contact' class='text-primary hover:underline'>contact our support</a> for assistance with bookings during off-peak hours."
        },

        // SECTION 7: WHY CHOOSE YOU (CONVERSION FAQs)
        {
            question: "Why book train tickets through Rudraksh Safar?",
            answer: "We offer stress-free booking services. You don't need to struggle with slow websites or payment failures. We check multiple route combinations to maximize your chances of a confirmed seat."
        },
        {
            question: "Do you guarantee confirmed tickets?",
            answer: "No honest agent can 'guarantee' a confirmed ticket as it depends entirely on IRCTC availability. However, our expertise in split-booking and quota knowledge significantly increases your chances."
        },
        {
            question: "Do you help if ticket doesn’t confirm?",
            answer: "Yes, if your train ticket doesn't confirm, we can immediately look for alternatives like <a href='/flight-booking-bhilai' class='text-primary hover:underline'>Flight options</a> or private buses just 4-5 hours before travel."
        },
        {
            question: "Is your service legal and authorized?",
            answer: "Absolutely. We operate strictly within the legal framework defined by Indian Railways for authorized travel agents. We charge only the prescribed service fees."
        },
        {
            question: "How to contact you for urgent booking?",
            answer: "For urgent inquiries, call or WhatsApp us at <b>+91-9406182174</b>. We are available to assist with last-minute travel plans from Bhilai, Durg, and Raipur."
        },

        // SECTION 8: INTERNAL LINK BOOSTERS
        {
            question: "Do you also book tour packages with train travel?",
            answer: "Yes! Many of our <a href='/tour-packages-from-bhilai' class='text-primary hover:underline'>Domestic Tour Packages</a> include train travel. We align the reservation with your hotel and sightseeing itinerary."
        },
        {
            question: "Can you arrange hotel + train together?",
            answer: "Yes. We can bundle your train reservation with <a href='/travel-services/hotel-booking' class='text-primary hover:underline'>Hotel Booking</a> to give you a complete, hassle-free trip package."
        },
        {
            question: "Do you book flights if train is unavailable?",
            answer: "Yes. If waitlists are too high, we can instantly switch to <a href='/flight-booking-bhilai' class='text-primary hover:underline'>Air Ticketing</a>. We often find flights from Raipur that are competitively priced compared to 2AC/1AC train fares."
        },
        {
            question: "Do you help with international train travel?",
            answer: "Currently, our train booking expertise is focused on Indian Railways. For international trips (like Eurail), we typically arrange flights and local transfers as part of our <a href='/international-tours' class='text-primary hover:underline'>International Packages</a>."
        },
        {
            question: "Which other cities do you serve apart from Bhilai?",
            answer: "While we are based in Bhilai, we serve clients across the region including <a href='/travel-agent-raipur' class='text-primary hover:underline'>Raipur</a> and <a href='/travel-agent-durg' class='text-primary hover:underline'>Durg</a>. Our digital booking process works for anyone, anywhere."
        }
    ];

    // Schema Generation
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer // Clean answer, HTML tags allowed
            }
        }))
    };

    return (
        <>
            <Helmet>
                <title>Train Booking FAQs | IRCTC Ticket Agent Bhilai & Raipur</title>
                <meta name="description" content="Common questions about train booking, Tatkal rules, and refunds. Expert answers from Rudraksh Safar, your trusted IRCTC agent in Bhilai, Durg & Raipur." />
                <meta name="keywords" content="train booking bhilai, tatkal ticket agent bhilai, irctc agent durg, train ticket faq india" />
                <link rel="canonical" href="https://rudrakshsafar.com/faqs/train-booking" />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background text-foreground">
                {/* Hero Section */}
                <section className="relative bg-primary/5 py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[
                            { label: 'Home', path: '/' },
                            { label: 'FAQs', path: '/faqs' },
                            { label: 'Train Booking', path: '/faqs/train-booking' }
                        ]} />
                        <div className="mt-8 max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                                Train Booking <span className="text-secondary">FAQs</span>
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Everything you need to know about IRCTC bookings, PNR status, Tatkal quotas, and traveling from Durg/Raipur Junction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="space-y-12">
                            {faqs.map((faq, index) => (
                                <div key={index} id={`faq-${index}`} className="group border-b border-border/40 pb-8 last:border-0 scroll-mt-24">
                                    <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-start gap-3">
                                        <span className="text-secondary text-xl mt-1">#</span>
                                        {faq.question}
                                    </h2>
                                    <div
                                        className="text-muted-foreground leading-relaxed text-lg pl-8 prose prose-gray max-w-none dark:prose-invert"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 bg-primary/10 rounded-2xl p-8 text-center border border-primary/20">
                            <h3 className="text-2xl font-bold mb-4">Still have questions about your train journey?</h3>
                            <p className="text-muted-foreground mb-6">
                                Our team in Bhilai is ready to assist you with confirmed bookings and route planning.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                                    Contact Us
                                </Link>
                                <Link to="/travel-agent-bhilai" className="bg-white text-primary border border-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors">
                                    Visit Our Office
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default TrainBookingFAQ;
