import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Map, Wallet, Sun, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/seo/FAQSection';
import AnimatedSection from '@/components/AnimatedSection';

const DubaiItinerary3Days = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "Is 3 days enough for Dubai?",
            answer: "While 5 to 7 days is ideal to see everything at a relaxed pace, a well-planned 3 day Dubai itinerary is perfect for a weekend getaway or a long layover. You can easily cover the 'Big Three': Burj Khalifa, Desert Safari, and Old Dubai."
        },
        {
            question: "How do I travel around Dubai for 3 days?",
            answer: "Purchase a Nol Silver Card at the airport Metro station. The Dubai Metro connects the Airport to Deira, Bur Dubai, Downtown (Burj Khalifa), and the Marina. Use the Metro for long distances and take a Careem (local Uber) for last-mile connectivity."
        },
        {
            question: "What is the best area to stay in Dubai for a short trip?",
            answer: "For a 3-day trip, stay in Downtown Dubai or Business Bay to be centrally located near the Burj Khalifa and Dubai Mall. If you are on a strict budget, stay in Al Barsha near the Mall of the Emirates for excellent Metro access."
        },
        {
            question: "Can I do the Desert Safari on a 3-day trip?",
            answer: "Absolutely. The Desert Safari runs from 3:30 PM to 9:30 PM. We recommend scheduling this on Day 2 of your trip. It includes dune bashing, camel riding, and a BBQ dinner, making it a highly efficient half-day activity."
        },
        {
            question: "How much does a 3-day trip to Dubai cost from India?",
            answer: "Excluding flights, a fast-paced 3-day trip budget starts around ₹25,000 to ₹35,000 per person. This covers a 4-star hotel, Metro travel, basic food, Burj Khalifa tickets, and the Desert Safari excursion."
        },
        {
            question: "What should I skip if I only have 3 days?",
            answer: "Skip full-day theme parks like Ferrari World or Motiongate, as they consume an entire day. Likewise, avoid day trips to Abu Dhabi or Al Ain. Focus strictly on Dubai's core coastal and downtown highlights."
        },
        {
            question: "Where can I find cheap Indian food in Dubai?",
            answer: "Head to Karama or Bur Dubai. These historic districts are packed with incredible, budget-friendly Indian restaurants serving everything from Bombay pav bhaji and Gujarati thalis to authentic Kerala parottas."
        }
    ];

    const itineraryDays = [
        {
            day: "Day 1: Old Meets New",
            highlight: "Burj Khalifa & Dubai Fountains",
            desc: "Arrive at Dubai International Airport (DXB). Check into your hotel in Downtown or Al Barsha. In the afternoon, head to the Dubai Mall. Go up to the 124th floor of the Burj Khalifa right before sunset. Descend to watch the spectacular Dubai Fountain Show at 7 PM.",
            tips: "Book Burj Khalifa tickets online 2-3 weeks in advance. Walk-in tickets are often sold out or heavily overpriced."
        },
        {
            day: "Day 2: Heritage & The Desert",
            highlight: "Gold Souk & Premium Safari",
            desc: "Start early in Deira. Take a traditional Abra (wooden boat) ride across the Dubai Creek for just 1 AED. Explore the brilliant Gold Souk and Spice Souk. Return to your hotel by 2 PM. At 3:30 PM, your driver will pick you up for the thrilling Evening Desert Safari (includes dune bashing, belly dancing, and BBQ dinner).",
            tips: "Bring light sunglasses and a scarf for the desert to protect yourself from blowing sand."
        },
        {
            day: "Day 3: Coastal Luxury & Departure",
            highlight: "Dubai Marina & Palm Jumeirah",
            desc: "Take the Metro to Dubai Marina. Walk the Marina Promenade flanked by stunning skyscrapers. Ride the Palm Monorail to see the Atlantis Hotel. Grab a late lunch overlooking the Arabian Gulf before heading back to DXB Airport for your evening flight home.",
            tips: "Keep your luggage at the hotel concierge after check-out so you can explore unhindered."
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "International Tours", "item": "https://rudrakshsafar.com/international-tours" },
            { "@type": "ListItem", "position": 3, "name": "UAE", "item": "https://rudrakshsafar.com/international/dubai/DubaiMaster" },
            { "@type": "ListItem", "position": 4, "name": "3 Day Dubai Itinerary", "item": "https://rudrakshsafar.com/uae/dubai-itinerary-3-days" }
        ]
    };

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>3 Day Dubai Itinerary | The Perfect Weekend Guide</title>
                <meta name="description" content="Maximize your short trip with this ultimate 3 day Dubai itinerary. Covers Burj Khalifa, Desert Safari, Old Dubai souks, and Marina. Perfect for layovers." />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero */}
            <div className="relative h-[60vh] min-h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1546412414-e18851493019?q=80&w=2670&auto=format&fit=crop"
                    alt="Dubai Marina Sunrise"
                    className="w-full h-full object-cover brightness-[0.4]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-white/90 text-sm md:text-base font-medium tracking-wider mb-3 uppercase border border-white/50 px-4 py-1 rounded-full">
                        Fast-Paced Weekend Guide
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                        Ultimate 3-Day Dubai Itinerary
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md pb-6 hidden md:block">
                        Short on time? Whether it's a long transit layover or a quick weekend escape from India, here is how to witness the very best of Dubai in just 72 hours.
                    </p>
                    <Link to="/international/dubai/DubaiMaster">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                            Explore Dubai Packages
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Intro */}
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 mb-12">
                    <h2 className="text-2xl font-bold mb-4 font-serif text-primary">72 Hours in the City of Gold</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        A 3-day Dubai itinerary requires ruthless efficiency. You cannot see everything, so this guide focuses exclusively on Dubai's absolute "must-do" pillars: the staggering heights of the Burj Khalifa, the historic trading roots of the Gold Souk, and the Arabian night magic of the Desert Safari.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border/50">
                            <Calendar className="w-6 h-6 text-orange-500 mb-2" />
                            <span className="text-sm font-bold">3 Days</span>
                            <span className="text-xs text-muted-foreground">Weekend Trip</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border/50">
                            <Wallet className="w-6 h-6 text-green-500 mb-2" />
                            <span className="text-sm font-bold">₹25k+</span>
                            <span className="text-xs text-muted-foreground">Per Person</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border/50">
                            <Sun className="w-6 h-6 text-yellow-500 mb-2" />
                            <span className="text-sm font-bold">Oct - April</span>
                            <span className="text-xs text-muted-foreground">Best Time</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border/50">
                            <Map className="w-6 h-6 text-blue-500 mb-2" />
                            <span className="text-sm font-bold">Intense</span>
                            <span className="text-xs text-muted-foreground">Pacing</span>
                        </div>
                    </div>
                </div>

                {/* Itinerary Timeline */}
                <div className="space-y-8 relative mb-16">
                    <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-border md:left-8"></div>

                    {itineraryDays.map((item, index) => (
                        <div key={index} className="relative flex gap-6">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center shrink-0 z-10 text-primary font-bold shadow-sm">
                                {index + 1}
                            </div>
                            <div className="pb-8 pt-2">
                                <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">{item.day}</h3>
                                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 text-xs font-bold rounded-full mb-3">
                                    {item.highlight}
                                </span>
                                <p className="text-muted-foreground mb-4 text-base leading-relaxed">{item.desc}</p>
                                <div className="bg-muted/30 p-4 rounded-lg flex gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                    <p><span className="font-semibold">Pro Tip:</span> {item.tips}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-16">
                    <h2 className="text-2xl font-bold mb-4 font-serif text-foreground">Have more time?</h2>
                    <p className="text-muted-foreground mb-4">
                        If you decide to extend your layover or weekend trip, we highly recommend checking out our longer, more relaxed itineraries.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/uae/dubai-itinerary-4-days" className="text-primary font-bold hover:underline flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" /> See 4-Day Itinerary
                        </Link>
                        <Link to="/uae/dubai-itinerary-5-days" className="text-primary font-bold hover:underline flex items-center gap-2">
                            <ArrowRight className="w-4 h-4" /> See 5-Day Itinerary
                        </Link>
                    </div>
                </div>

                <section id="faqs" className="pt-8 mb-16">
                    <FAQSection title="3-Day Dubai Itinerary FAQs" faqs={faqs} />
                </section>

                {/* Related Guides */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold font-serif mb-6">More UAE Travel Guides</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/uae/dubai-trip-cost" className="block p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                            <h4 className="font-bold text-lg mb-2 group-hover:text-primary">Trip Cost Calculator ➝</h4>
                            <p className="text-sm text-muted-foreground">Detailed breakdown of flight, hotel, and food costs for Indians visiting Dubai.</p>
                        </Link>
                        <Link to="/best-time-to-visit" className="block p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                            <h4 className="font-bold text-lg mb-2 group-hover:text-primary">Best Time to Visit ➝</h4>
                            <p className="text-sm text-muted-foreground">Global seasonality maps. Find out why you should avoid Dubai in July.</p>
                        </Link>
                    </div>
                </div>
            </div>

            <AnimatedSection>
                <div className="container mx-auto px-4 py-8 mb-12">
                    <div className="bg-blue-900 rounded-3xl p-8 md:p-14 text-center text-blue-50">
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">Plan Your Short Trip With Rudraksh Safar</h2>
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
                            Don't waste half your 3-day trip figuring out metro tickets and hailing cabs. We can provide a completely managed, private weekend trip to Dubai.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg h-14 px-8 rounded-full" asChild>
                                <a href="https://wa.me/919203650311?text=Hi, I would like to book a 3-day Dubai weekend package.">
                                    Start Planning via WhatsApp
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-blue-400 text-blue-100 hover:bg-blue-800 font-bold text-lg h-14 px-8 rounded-full" asChild>
                                <Link to="/contact">Request a Call Back</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <Footer />
        </div>
    );
};

export default DubaiItinerary3Days;
