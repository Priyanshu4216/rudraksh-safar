import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Coffee, Utensils, Moon, Sun, Plane, Camera } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const DayTimeline = ({ day, title, activities }: { day: number, title: string, activities: any[] }) => (
    <div className="relative pl-8 md:pl-0">
        <div className="md:w-1/3 md:ml-auto md:mr-12 md:text-right relative z-10">
            <Badge className="bg-orange-600 mb-2">Day {day}</Badge>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 md:-ml-px" />

        <div className="space-y-8 mt-8">
            {activities.map((act, idx) => (
                <div key={idx} className="relative md:grid md:grid-cols-3 gap-8">
                    {/* Time (Left on Desktop) */}
                    <div className="hidden md:block text-right text-muted-foreground pt-1">
                        <span className="font-mono font-bold text-orange-600">{act.time}</span>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-[-5px] md:left-auto md:right-0 md:relative w-3 h-3 rounded-full bg-orange-500 border-2 border-white dark:border-slate-950 z-20 top-2 md:mx-auto md:left-0 md:right-auto md:-ml-1.5" />

                    {/* Content (Right on Desktop) */}
                    <div className="md:col-span-2 pb-8">
                        <div className="md:hidden text-muted-foreground text-sm mb-1 font-mono font-bold text-orange-600">
                            {act.time}
                        </div>
                        <Card className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    {act.icon} {act.title}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                                    {act.desc}
                                </p>
                                {act.link && (
                                    <Link to={act.link} className="text-sm font-bold text-blue-600 hover:underline">
                                        Read Guide →
                                    </Link>
                                )}
                                {act.tip && (
                                    <div className="bg-amber-50 dark:bg-amber-900/10 p-2 rounded mt-2 text-xs text-amber-800 dark:text-amber-400 border border-amber-100">
                                        <strong>💡 Tip:</strong> {act.tip}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const DubaiItinerary4Days = () => {
    return (
        <>
            <Helmet>
                <title>Perfect 4 Days in Dubai Itinerary (2026) | For First Timers</title>
                <meta name="description" content="The ultimate 4-day Dubai itinerary for Indian travelers. Includes Burj Khalifa, Desert Safari, Marina Dhow Cruise, and Shopping. Optimized for minimal travel time." />
                <meta name="keywords" content="dubai 4 day itinerary for family, dubai itinerary 4 days 3 nights, dubai trip plan from india" />
                <link rel="canonical" href="https://rudrakshsafar.com/dubai-4-day-itinerary" />
            </Helmet>

            <Navbar />

            <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">

                {/* HERO */}
                <div className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('/images/dubai/dubai-skyline.jpg')] bg-cover bg-center" />
                    <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center space-y-4">
                        <Badge className="bg-green-500 text-white mb-2">Most Popular</Badge>
                        <h1 className="text-3xl md:text-5xl font-bold font-serif">
                            The Perfect 4-Day Dubai Itinerary
                        </h1>
                        <p className="text-xl text-slate-300">
                            A fast-paced, "Best of Dubai" plan covering the icons, the desert, and the shopping.
                        </p>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto px-4 py-12">

                    {/* Introduction */}
                    <div className="prose dark:prose-invert max-w-none mb-16">
                        <p className="text-lg leading-relaxed">
                            This itinerary is designed for <strong>First-Time Visitors</strong> who want to see the main highlights without burning out. It groups attractions geographically to save taxi money and travel time.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose">
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border text-center">
                                <Clock className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                                <div className="font-bold">4 Days / 3 Nights</div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border text-center">
                                <MapPin className="w-6 h-6 mx-auto mb-2 text-green-500" />
                                <div className="font-bold">6 Key Locations</div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border text-center">
                                <Utensils className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                                <div className="font-bold">Veg Food Friendly</div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border text-center">
                                <Plane className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                                <div className="font-bold">AirportPick/Drop</div>
                            </div>
                        </div>
                    </div>

                    {/* DAY 1 */}
                    <DayTimeline
                        day={1}
                        title="Arrival & The Dhow Cruise"
                        activities={[
                            {
                                time: "14:00",
                                icon: <Plane className="w-4 h-4" />,
                                title: "Arrival & Check-in",
                                desc: "Land at DXB. Transfer to your hotel (preferably in Bur Dubai or Deira for budget, Marina for luxury). Relax and freshen up.",
                                tip: "Buy a Silver NOL Card at the airport metro station."
                            },
                            {
                                time: "19:00",
                                icon: <Moon className="w-4 h-4" />,
                                title: "Marina Dhow Cruise with Dinner",
                                desc: "Start your trip with a relaxing cruise along the illuminated Dubai Marina skyscrapers. Includes buffet dinner and Tanoura dance show.",
                                tip: "Ask for the Upper Deck (Open Air) for better views and photos."
                            }
                        ]}
                    />

                    <Separator className="my-12" />

                    {/* DAY 2 */}
                    <DayTimeline
                        day={2}
                        title="Modern Dubai Icons"
                        activities={[
                            {
                                time: "10:00",
                                icon: <Sun className="w-4 h-4" />,
                                title: "Dubai Frame",
                                desc: "Start the day at the 'World's Largest Picture Frame'. Walk on the glass 150m above the ground seeing Old vs New Dubai.",
                                link: "/uae/dubai-frame",
                                tip: "Great spot for morning selfies before the heat kicks in."
                            },
                            {
                                time: "13:00",
                                icon: <Utensils className="w-4 h-4" />,
                                title: "Lunch at Dubai Mall",
                                desc: "Head to Dubai Mall. Huge food court with extensive Indian Veg options (Bikanervala, Indian Palace).",
                            },
                            {
                                time: "16:30",
                                icon: <Camera className="w-4 h-4" />,
                                title: "Burj Khalifa (At the Top)",
                                desc: "Entry to Level 124+125. Time this for sunset to see day turn to night from the world's highest deck.",
                                link: "/uae/burj-khalifa",
                                tip: "Book the 16:30 slot at least 1 week in advance. It sells out fast."
                            },
                            {
                                time: "19:00",
                                icon: <Moon className="w-4 h-4" />,
                                title: "Dubai Fountain Show",
                                desc: "Watch the world's largest dancing fountain at the base of Burj Khalifa. Shows happen every 30 mins.",
                                tip: "Stand on the bridge connecting the mall to Souk Al Bahar for the best view."
                            }
                        ]}
                    />

                    <Separator className="my-12" />

                    {/* DAY 3 */}
                    <DayTimeline
                        day={3}
                        title="Culture & The Desert"
                        activities={[
                            {
                                time: "10:00",
                                icon: <Coffee className="w-4 h-4" />,
                                title: "Museum of the Future",
                                desc: "Visit the most beautiful building on earth. Explore life in 2071.",
                                link: "/uae/museum-of-the-future",
                                tip: "Must book 3-4 weeks in advance. No tickets at the gate."
                            },
                            {
                                time: "15:30",
                                icon: <Sun className="w-4 h-4" />,
                                title: "Premium Desert Safari",
                                desc: "Pickup from hotel in 4x4 Land Cruiser. Dune Bashing, Camel Ride, Sunset Photography, and BBQ Dinner with Belly Dance.",
                                link: "/uae/desert-safari",
                                tip: "Wear sandals (flip flops). Shoes get filled with sand instantly."
                            }
                        ]}
                    />

                    <Separator className="my-12" />

                    {/* DAY 4 */}
                    <DayTimeline
                        day={4}
                        title="Shopping & Departure"
                        activities={[
                            {
                                time: "10:00",
                                icon: <MapPin className="w-4 h-4" />,
                                title: "Meena Bazaar / Gold Souk",
                                desc: "Last minute shopping. Buy Gold, Electronics, or Spices. Have a classic Indian lunch at Bur Dubai.",
                            },
                            {
                                time: "14:00",
                                icon: <Plane className="w-4 h-4" />,
                                title: "Airport Transfer",
                                desc: "Head to DXB Terminal 1/3 (IndiGo/Emirates) 3 hours before flight.",
                            }
                        ]}
                    />

                    {/* FINAL CTA */}
                    <div className="mt-20 bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center space-y-6">
                        <h2 className="text-3xl font-serif font-bold">Want this exact trip?</h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            We can book this entire 4-day itinerary for you (Hotels + Visa + Transfers + Tickets) at a bundled price.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full md:w-auto" asChild>
                                <a href="https://wa.me/917566788884?text=Hi, I want to book the 4-Day Dubai Itinerary." target="_blank" rel="noopener noreferrer">
                                    Get Quote on WhatsApp
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default DubaiItinerary4Days;
