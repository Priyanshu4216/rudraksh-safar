import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '../../../components/PageLayout';
import HeroSection from '../../../components/HeroSection';
import ContentSection from '../../../components/ContentSection';
import FAQSection from '../../../components/FAQsSection';
import BookingCTA from '../../../components/BookingCTA';
import { Wallet, Train, Hotel, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoaTripUnder10000 = () => {
    return (
        <PageLayout>
            <Helmet>
                <title>Goa Trip Under ₹10,000 from Bhilai/Raipur (2026 Budget Guide)</title>
                <meta
                    name="description"
                    content="How to plan a 4-day Goa trip from Chhattisgarh for under ₹10,000. Real cost breakdown: Train, Hostel, Scooty, and Food. Honest budget guide."
                />
                <meta name="keywords" content="goa trip under 10000 from bhilai, cheap goa package from chhattisgarh, budget goa trip plan" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Goa Trip Under ₹10,000 from Bhilai: Is it Possible?",
                        "author": "Rudraksh Safar",
                        "datePublished": "2026-02-12"
                    })}
                </script>
            </Helmet>

            <div className="container py-4">
                <Link to="/domestic-tours/goa" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Back to Goa Guide
                </Link>
            </div>

            <HeroSection
                title="Goa Trip Under ₹10,000: Myth or Reality?"
                subtitle="We break down exactly how you can manage a Goa trip on a tight student budget from Bhilai."
                backgroundImage="https://images.unsplash.com/photo-1596767664871-2c63df9e66c0?q=80&w=1778" // Budget/Backpacker vibe
                ctaText="See Budget Itinerary"
            />

            <ContentSection className="bg-background">
                <p className="text-lg text-muted-foreground">
                    Is it possible to visit Goa from Bhilai/Raipur for under ₹10,000? <strong>Yes, but you have to be smart.</strong> If you expect luxury resorts and flights, it's impossible. But if you are okay with sleeper trains, hostels, and street food, you can have an amazing 4-day trip. Here is the honest breakdown.
                </p>
            </ContentSection>

            {/* The 10k Breakdown */}
            <ContentSection title="The ₹10,000 Challenge Breakdown" className="bg-green-50 dark:bg-green-950/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-card border border-border rounded shadow-sm">
                            <div className="flex items-center gap-3"><Train className="text-green-600 dark:text-green-400" /> <span>Train (Sleeper Return)</span></div>
                            <span className="font-bold">₹1,600</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-card border border-border rounded shadow-sm">
                            <div className="flex items-center gap-3"><Hotel className="text-green-600 dark:text-green-400" /> <span>Hostel (3 Nights)</span></div>
                            <span className="font-bold">₹2,400</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-card border border-border rounded shadow-sm">
                            <div className="flex items-center gap-3"><Train className="text-green-600 dark:text-green-400" /> <span>Scooty Share (3 Days)</span></div>
                            <span className="font-bold">₹1,500</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-card border border-border rounded shadow-sm">
                            <div className="flex items-center gap-3"><Coffee className="text-green-600 dark:text-green-400" /> <span>Food & Drinks</span></div>
                            <span className="font-bold">₹4,000</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-indigo-900 text-white rounded shadow-lg mt-4">
                            <span className="font-bold text-lg">TOTAL ESTIMATE</span>
                            <span className="font-bold text-2xl">₹9,500</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">How to Stick to This Budget?</h3>
                        <ul className="list-disc ml-5 space-y-3 text-muted-foreground">
                            <li><strong>Book Train 120 Days Early:</strong> Tatkal adds ₹1000 extra, destroying the budget.</li>
                            <li><strong>Stay in Hostels:</strong> Beds in Anjuna/Vagator cost ₹600-800/night. Hotels cost ₹2000+.</li>
                            <li><strong>Eat at Shack vs Street:</strong> Beach shacks are expensive. Eat thalis at local Goan joints (Ros Omelette!) for ₹150.</li>
                            <li><strong>No Alcohol in Clubs:</strong> Pre-game responsibly. Club drinks are 5x market price.</li>
                        </ul>
                        <div className="mt-4 space-y-2"> {/* Added a div for the links for better structure */}
                            <Link to="/domestic-tours/goa-cheap-trip-guide" className="text-primary hover:underline block">
                                Read: How to plan a cheap Goa trip guide?
                            </Link>
                            <Link to="/domestic-tours/goa-budget-itinerary" className="text-primary hover:underline block">
                                View: Day-by-Day Budget Itinerary (PDF)
                            </Link>
                        </div>
                    </div>
                </div>
            </ContentSection>

            <ContentSection title="What You Will Miss (Be Honest)" className="bg-red-50 dark:bg-red-950/20">
                <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                    <li><strong>No AC Travel:</strong> You must travel in Sleeper Class.</li>
                    <li><strong>No Privacy:</strong> You will share a dorm room with 4-6 others.</li>
                    <li><strong>No North Goa Cabs:</strong> You must ride a scooty or take the bus. Cabs are ₹500 minimum for short distance.</li>
                </ul>
            </ContentSection>

            <ContentSection className="bg-background">
                <BookingCTA text="Book Budget Package (Group)" subText="We arrange hostels + scooters for groups of 4+." />
            </ContentSection>

            <FAQSection
                faqs={[
                    { question: "Is this budget safe for girls?", answer: "Yes, provided you stay in reputed hostels (Zostel, etc.) which have female-only dorms. Avoid cheap guest houses." },
                    { question: "Can we get this price in December?", answer: "NO. In Dec/Jan, prices triple. This budget works for Feb, Mar, July-Sep." },
                    { question: "Do you provide train tickets in this package?", answer: "We charge a small service fee for confirmed ticketing assistance." }
                ]}
            />

            <ContentSection className="border-t bg-muted/20">
                <h4 className="font-bold mb-4">Related Links</h4>
                <div className="flex flex-wrap gap-4 text-primary">
                    <Link to="/domestic-tours/goa-from-bhilai" className="hover:underline">Main Goa Guide</Link>
                    <Link to="/domestic-tours/goa-trip-from-supela" className="hover:underline">Student Specials</Link>
                    <Link to="/domestic-tours/goa-budget-itinerary" className="hover:underline">Day-wise Itinerary</Link>
                </div>
            </ContentSection>

        </PageLayout>
    );
};

export default GoaTripUnder10000;
