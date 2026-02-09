import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Coffee, Utensils, Moon, Sun, Plane, Camera, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
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
                                {act.subItems && (
                                    <ul className="list-disc list-inside text-sm text-slate-500 ml-4 space-y-1">
                                        {act.subItems.map((item: string, i: number) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {act.link && (
                                    <Link to={act.link} className="text-sm font-bold text-blue-600 hover:underline block mt-2">
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

const DubaiItinerary5Days = () => {
    return (
        <>
            <Helmet>
                <title>Perfect 5 Days in Dubai Itinerary (2026) | Complete Tour Plan</title>
                <meta name="description" content="The ultimate 5-day Dubai itinerary including Abu Dhabi, Desert Safari, Burj Khalifa, and Dhow Cruise. Designed for families and couples from India." />
                <meta name="keywords" content="dubai 5 day itinerary, dubai abu dhabi tour plan, dubai trip package from bhilai, 5 days dubai itinerary for family" />
                <link rel="canonical" href="https://rudrakshsafar.com/dubai-5-day-itinerary" />
            </Helmet>

            <Navbar />

            <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">

                {/* HERO */}
                <div className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
                    <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center space-y-4">
                        <Badge className="bg-green-500 text-white mb-2">Best Seller</Badge>
                        <h1 className="text-3xl md:text-5xl font-bold font-serif">
                            The Perfect 5-Day Dubai Itinerary
                        </h1>
                        <p className="text-xl text-slate-300">
                            A complete tour covering Dubai & Abu Dhabi highlights, tailored for Indian travelers.
                        </p>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto px-4 py-12">

                    {/* Introduction */}
                    <div className="prose dark:prose-invert max-w-none mb-16">
                        <p className="text-lg leading-relaxed">
                            This 5-day itinerary offers the perfect balance of modern marvels, cultural experiences, and leisure. It includes a full day tour to Abu Dhabi, making it our most comprehensive package for first-time visitors.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose">
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border text-center">
                                <Clock className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                                <div className="font-bold">5 Days / 4 Nights</div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border text-center">
                                <MapPin className="w-6 h-6 mx-auto mb-2 text-green-500" />
                                <div className="font-bold">Dubai & Abu Dhabi</div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border text-center">
                                <Utensils className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                                <div className="font-bold">Breakfast & Dinner</div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border text-center">
                                <Plane className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                                <div className="font-bold">Private Transfers</div>
                            </div>
                        </div>
                    </div>

                    {/* DAY 1 */}
                    <DayTimeline
                        day={1}
                        title="Arrival & Dhow Cruise"
                        activities={[
                            {
                                time: "Arrival",
                                icon: <Plane className="w-4 h-4" />,
                                title: "Arrival & Check-in",
                                desc: "Arrival at Dubai International Airport. Meet & greet by our local representative. Private transfer from Airport to Hotel (Bur Dubai / Deira). Check-in at hotel (standard check-in time applies).",
                            },
                            {
                                time: "Evening",
                                icon: <Moon className="w-4 h-4" />,
                                title: "Dhow Cruise with Dinner",
                                desc: "Evening pickup for Dhow Cruise at Dubai Creek on Private Basis.",
                                subItems: [
                                    "Traditional wooden dhow cruise",
                                    "International buffet dinner",
                                    "Soft background music and illuminated skyline views"
                                ]
                            }
                        ]}
                    />

                    <Separator className="my-12" />

                    {/* DAY 2 */}
                    <DayTimeline
                        day={2}
                        title="Dubai City Tour & Burj Khalifa"
                        activities={[
                            {
                                time: "Morning",
                                icon: <Camera className="w-4 h-4" />,
                                title: "Dubai City Tour",
                                desc: "Breakfast at hotel. Private pickup for Dubai City Tour covering major attractions.",
                                subItems: [
                                    "Jumeirah Mosque (photo stop)",
                                    "Jumeirah Beach (photo stop)",
                                    "Burj Al Arab (photo stop)",
                                    "Palm Jumeirah (drive through)",
                                    "Atlantis The Palm (photo stop)",
                                    "Dubai Marina (drive through)"
                                ]
                            },
                            {
                                time: "Afternoon",
                                icon: <Sun className="w-4 h-4" />,
                                title: "Burj Khalifa & Dubai Mall",
                                desc: "Visit Burj Khalifa – 124th Floor (Non-Prime Hours). Free time at Dubai Mall.",
                                link: "/dubai/burj-khalifa"
                            },
                            {
                                time: "Night",
                                icon: <Moon className="w-4 h-4" />,
                                title: "Return to Hotel",
                                desc: "Return to hotel for overnight stay in Dubai."
                            }
                        ]}
                    />

                    <Separator className="my-12" />

                    {/* DAY 3 */}
                    <DayTimeline
                        day={3}
                        title="Desert Safari with BBQ Dinner"
                        activities={[
                            {
                                time: "Morning",
                                icon: <Coffee className="w-4 h-4" />,
                                title: "Leisure Time",
                                desc: "Breakfast at hotel. Morning at leisure for shopping or relaxation."
                            },
                            {
                                time: "Afternoon",
                                icon: <Sun className="w-4 h-4" />,
                                title: "Desert Safari",
                                desc: "Afternoon pickup in a private 4x4 vehicle for Desert Safari.",
                                subItems: [
                                    "Dune bashing",
                                    "Sandboarding",
                                    "Camel ride",
                                    "Sunset photography"
                                ],
                                link: "/uae/desert-safari"
                            },
                            {
                                time: "Evening",
                                icon: <Moon className="w-4 h-4" />,
                                title: "Desert Camp Experience",
                                desc: "Evening at desert camp with BBQ dinner and live entertainment (belly dance / tanoura / fire show – subject to availability). Return to hotel."
                            }
                        ]}
                    />

                    <Separator className="my-12" />

                    {/* DAY 4 */}
                    <DayTimeline
                        day={4}
                        title="Abu Dhabi World Capital Tour"
                        activities={[
                            {
                                time: "Morning",
                                icon: <MapPin className="w-4 h-4" />,
                                title: "Transfer to Abu Dhabi",
                                desc: "Breakfast at hotel. Private transfer to Abu Dhabi for a full day city tour.",
                            },
                            {
                                time: "Day",
                                icon: <Camera className="w-4 h-4" />,
                                title: "Abu Dhabi Highlights",
                                desc: "Explore the capital of the UAE.",
                                subItems: [
                                    "Sheikh Zayed Grand Mosque (Dress code applies)",
                                    "BAPS Hindu Mandir",
                                    "Corniche Drive",
                                    "Emirates Palace (photo stop)"
                                ]
                            },
                            {
                                time: "Evening",
                                icon: <Moon className="w-4 h-4" />,
                                title: "Return to Dubai",
                                desc: "Return to Dubai in the evening. Overnight stay in Dubai."
                            }
                        ]}
                    />

                    <Separator className="my-12" />

                    {/* DAY 5 */}
                    <DayTimeline
                        day={5}
                        title="Departure"
                        activities={[
                            {
                                time: "Morning",
                                icon: <Coffee className="w-4 h-4" />,
                                title: "Check-out",
                                desc: "Breakfast at hotel. Check-out from hotel."
                            },
                            {
                                time: "Departure",
                                icon: <Plane className="w-4 h-4" />,
                                title: "Airport Transfer",
                                desc: "Private transfer from Hotel to Dubai International Airport. Tour ends with pleasant memories."
                            }
                        ]}
                    />

                    {/* INCLUSIONS & EXCLUSIONS */}
                    <div className="grid md:grid-cols-2 gap-8 my-16">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-green-700 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" /> Inclusions
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li>• 4 Nights accommodation in Dubai</li>
                                    <li>• Daily breakfast at hotel</li>
                                    <li>• Private airport transfers (arrival & departure)</li>
                                    <li>• Private sightseeing tours as mentioned</li>
                                    <li>• Dhow Cruise with dinner</li>
                                    <li>• Desert Safari with BBQ dinner</li>
                                    <li>• All tours on Private Basis</li>
                                    <li>• All applicable transport and service charges</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" /> Exclusions
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li>• Airfare (International / Domestic)</li>
                                    <li>• UAE Visa charges</li>
                                    <li>• Tourism Dirham fee (payable directly at hotel)</li>
                                    <li>• Meals other than mentioned in inclusions</li>
                                    <li>• Personal expenses (tips, laundry, etc.)</li>
                                    <li>• Any services not clearly mentioned under inclusions</li>
                                    <li>• TDS / GST (if applicable)</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* IMPORTANT NOTES */}
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-16">
                        <h3 className="font-bold text-lg mb-4 text-amber-900 dark:text-amber-400 flex items-center gap-2">
                            <Info className="w-5 h-5" /> Important Notes
                        </h3>
                        <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300 list-disc list-inside">
                            <li>This quotation is tentative and subject to availability at the time of confirmation</li>
                            <li>Rates are not valid during exhibitions, festivals, or major events</li>
                            <li>Any increase in taxes, fuel surcharge, or government levies will be applicable</li>
                            <li>Final confirmation will be shared only after receipt of advance payment</li>
                        </ul>
                    </div>

                    {/* FINAL CTA */}
                    <div className="mt-20 bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center space-y-6">
                        <h2 className="text-3xl font-serif font-bold">Want this exact trip?</h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            We can book this entire 5-day itinerary for you (Hotels + Visa + Transfers + Tickets) at a bundled price.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full md:w-auto" asChild>
                                <a href="https://wa.me/917566788884?text=Hi, I want to book the 5-Day Dubai Itinerary." target="_blank" rel="noopener noreferrer">
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

export default DubaiItinerary5Days;
