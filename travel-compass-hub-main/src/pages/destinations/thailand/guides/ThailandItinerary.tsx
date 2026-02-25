import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Map, Wallet, Sun, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThailandItinerary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rudrakshsafar.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://rudrakshsafar.com/destinations" },
            { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://rudrakshsafar.com/destinations/thailand" },
            { "@type": "ListItem", "position": 4, "name": "Thailand Itinerary", "item": "https://rudrakshsafar.com/destinations/thailand/itinerary" }
        ]
    };

    const itineraryDays = [
        {
            day: "Day 1: Arrival in Bangkok & Transfer to Pattaya",
            highlight: "Alcazar Show & Night Life",
            desc: "Arrive at Suvarnabhumi Airport (BKK). Our driver will pick you up for a 2-hour drive to Pattaya. Check into your hotel. In the evening, enjoy the world-famous Alcazar Cabaret Show.",
            tips: "Keep 2,000 THB for security deposit at hotel check-in."
        },
        {
            day: "Day 2: Coral Island Tour (Koh Larn)",
            highlight: "Speedboat & Water Sports",
            desc: "After breakfast, take a speedboat to Coral Island. Enjoy parasailing, sea walking, and banana boat rides. Indian lunch provided on the island.",
            tips: "Wear shorts and slippers. Carry sunscreen."
        },
        {
            day: "Day 3: Pattaya to Bangkok via City Tour",
            highlight: "Golden Buddha & Gems Gallery",
            desc: "Check out and head back to Bangkok. En route, visit the Golden Buddha (Wat Traimit) and Marble Temple. Stop at Gems Gallery for souvenirs.",
            tips: "Dress modestly for temple visits (shoulders and knees covered)."
        },
        {
            day: "Day 4: Safari World & Marine Park",
            highlight: "Wildlife & Dolphin Show",
            desc: "Full day excursion to Safari World. See tigers, zebras, and giraffes in the open zoo. Enjoy the Marine Park shows including the Dolphin and Sea Lion show.",
            tips: "Buffet lunch included with Indian vegetarian options."
        },
        {
            day: "Day 5: Bangkok Shopping & Leisure",
            highlight: "Indra Square & MBK Center",
            desc: "Free day for shopping. Visit Indra Square for budget clothes, MBK Center for electronics, or Platinum Mall for fashion.",
            tips: "Bargaining is a must in street markets!"
        },
        {
            day: "Day 6: Day Trip to Floating Market (Optional)",
            highlight: "Damnoen Saduak",
            desc: "Ideally, take a morning trip to the Damnoen Saduak Floating Market to experience traditional Thai commerce on boats.",
            tips: "Try the coconut ice cream."
        },
        {
            day: "Day 7: Departure",
            highlight: "Suvarnabhumi Airport",
            desc: "Check out and proceed to the airport for your flight back to India with a bag full of memories.",
            tips: "Reach airport 3 hours before flight."
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <Helmet>
                <title>7 Days Thailand Itinerary for Indians | Perfect Family & Couple Plan</title>
                <meta name="description" content="The ultimate 7-day Thailand itinerary for Indian travelers. Covers Bangkok and Pattaya with Indian food, visa tips, and budget estimates. Plan your perfect trip now." />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero */}
            <div className="relative h-[60vh] min-h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2670&auto=format&fit=crop"
                    alt="Thailand Travel Itinerary"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-white/90 text-sm md:text-base font-medium tracking-wider mb-2 uppercase">Perfect for Indian Travelers</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">The Ultimate 7-Day Thailand Itinerary</h1>
                    <Link to="/international-tours/thailand">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                            Explore Thailand Packages
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Intro */}
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 mb-12">
                    <h2 className="text-2xl font-bold mb-4 font-serif text-primary">Planning Your First Trip?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Thailand is the #1 international destination for Indians for a reason. It's affordable, beautiful, and culturally welcoming. This 7-day itinerary is crafted specifically for families and couples, balancing sightseeing, shopping, and relaxation. We've included tips on where to find <span className="font-semibold text-foreground">Indian comfort food</span> and how to navigate local transport.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border/50">
                            <Calendar className="w-6 h-6 text-orange-500 mb-2" />
                            <span className="text-sm font-bold">7 Days</span>
                            <span className="text-xs text-muted-foreground">Perfect Duration</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border/50">
                            <Wallet className="w-6 h-6 text-green-500 mb-2" />
                            <span className="text-sm font-bold">₹35k - ₹45k</span>
                            <span className="text-xs text-muted-foreground">Approx. Cost</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border/50">
                            <Sun className="w-6 h-6 text-yellow-500 mb-2" />
                            <span className="text-sm font-bold">Nov - Feb</span>
                            <span className="text-xs text-muted-foreground">Best Time</span>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border/50">
                            <Map className="w-6 h-6 text-blue-500 mb-2" />
                            <span className="text-sm font-bold">BKK & Pattaya</span>
                            <span className="text-xs text-muted-foreground">Coverage</span>
                        </div>
                    </div>
                </div>

                {/* Itinerary Timeline */}
                <div className="space-y-8 relative">
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
                                <p className="text-muted-foreground mb-4">{item.desc}</p>
                                <div className="bg-muted/30 p-4 rounded-lg flex gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                    <p><span className="font-semibold">Pro Tip:</span> {item.tips}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Want to customize this plan?</h2>
                    <p className="mb-8 text-primary-foreground/90 max-w-lg mx-auto">
                        We can tailor this itinerary to add Phuket, Krabi, or more luxury experiences. Flights from Raipur and Nagpur available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto font-bold rounded-full">
                                Request Custom Quote
                            </Button>
                        </Link>
                        <Link to="/international-tours/thailand">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full">
                                View Standard Packages
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Related Guides */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold font-serif mb-6">More Thailand Travelers Guide</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/destinations/thailand/trip-cost-from-india" className="block p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                            <h4 className="font-bold text-lg mb-2 group-hover:text-primary">Trip Cost Calculator ➝</h4>
                            <p className="text-sm text-muted-foreground">Detailed breakdown of flight, hotel, and food costs for Indians.</p>
                        </Link>
                        <Link to="/destinations/thailand/packing-guide" className="block p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                            <h4 className="font-bold text-lg mb-2 group-hover:text-primary">What to Pack? ➝</h4>
                            <p className="text-sm text-muted-foreground">Don't forget these 5 essential items for your Thailand trip.</p>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ThailandItinerary;
