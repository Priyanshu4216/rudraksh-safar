import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mountain, CloudSnow, Sun, Wind, Map, Camera, Info, Calendar, DollarSign, CheckCircle, AlertTriangle, ChevronDown, ChevronUp, Utensils, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const MountainHolidayPackages = () => {
    const destinations = [
        { name: "Kashmir", tag: "Heaven on Earth", title: "Srinagar, Gulmarg & Pahalgam", desc: "Stay in houseboats on Dal Lake, ski in Gulmarg, and explore the valleys of Pahalgam.", link: "/package/kashmir" },
        { name: "Manali", tag: "Himachal's Heart", title: "Manali, Solang & Rohtang", desc: "Adventure sports in Solang, snow at Rohtang Pass, and cafe hopping in Old Manali.", link: "/package/manali" },
        { name: "Leh Ladakh", tag: "High Altitude Adventure", title: "Leh, Nubra, Pangong", desc: "Ride through high passes like Khardung La and camp by the changing colors of Pangong Lake.", link: "/package/ladakh" },
        { name: "Shimla", tag: "Queen of Hills", title: "Shimla, Kufri & Narkanda", desc: "Colonial charm, Mall Road strolls, and panoramic views from the Ridge.", link: "/package/shimla-manali" },
        { name: "Sikkim", tag: "North East Gem", title: "Gangtok, Nathula & Pelling", desc: "Monasteries, high-altitude lakes like Tsomgo, and views of Kanchenjunga.", link: "/package/gangtok-darjeeling" },
        { name: "Uttarakhand", tag: "Nature & Devotion", title: "Nainital & Mussoorie", desc: "Boating in Naini Lake and witnessing the Kempty Falls in Mussoorie.", link: "/package/haridwar-rishikesh" },
    ];

    const faqs = [
        {
            question: "What is the best month for mountain holidays in India?",
            answer: "For snow, visit in winter (December to February). For pleasant weather and greenery, summer (March to June) and autumn (September to November) are ideal."
        },
        {
            question: "Do I need special fitness for these trips?",
            answer: "Most leisure hill station trips (Shimla, Manali, Nainital) require normal fitness. However, high-altitude trips like Ladakh or Spiti require good health and acclimatization."
        },
        {
            question: "Are mountain packages suitable for families with seniors?",
            answer: "Yes, we customize itineraries for families. We choose hotels with easy access and avoid strenuous treks for seniors."
        },
        {
            question: "What should I pack for a mountain trip?",
            answer: "Always carry warm layers (thermals, jackets), comfortable walking shoes, sunglasses, sunscreen, and personal medicines."
        },
        {
            question: "How do I prevent altitude sickness?",
            answer: "Stay hydrated, ascend gradually, avoid alcohol, and carry Diamox (consult your doctor). This is crucial for Ladakh and Spiti."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Mountain Holiday Packages | Best Hill Station Tours from Bhilai & Raipur</title>
                <meta name="description" content="Plan your perfect mountain getaway. Explore Kashmir, Manali, Ladakh, and more. Customized itineraries, safe travel, and best deals from Bhilai & Raipur." />
                <meta name="keywords" content="mountain holiday packages, hill station tour packages, mountain tours from Bhilai, himachal tour packages, kashmir trip cost, ladakh packages, family mountain trips" />
                <link rel="canonical" href="https://rudrakshsafar.com/mountain-holiday-packages" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="relative py-24 bg-slate-100 dark:bg-slate-900 overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Mountain className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-foreground">
                            The <span className="text-indigo-600">Mountains</span> Are Calling
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                            Escape the heat and chaos. Breathe in the crisp mountain air and witness majestic peaks.
                        </p>

                        {/* TL;DR Summary Block */}
                        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-indigo-100 dark:border-indigo-900 text-left">
                            <div className="flex items-start gap-4">
                                <Info className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Mountain Holidays at a Glance</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Mountain holiday packages help travellers explore cool destinations like the Himalayas, Western Ghats, and hill stations with structured itineraries, accommodation, transport, and local experiences. These trips are ideal for summer holidays, nature lovers, family trips, and adventure travel.
                                        <strong> From Bhilai & Raipur</strong>, we offer seamless connections to all major hill stations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                                <a href="#packages">Explore Packages</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What is a Mountain Holiday? */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">What Is a Mountain Holiday?</h2>
                                <p className="text-lg text-muted-foreground mb-4">
                                    It's more than just a view. A mountain holiday is an escape into nature's lap, offering a break from the city's hustle.
                                </p>
                                <p className="text-muted-foreground mb-6">
                                    Whether you are looking for a relaxing retreat in a colonial hill station like Shimla, or an adrenaline-pumping adventure in the rugged terrains of Ladakh, our mountain packages cater to every traveler.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span><strong>Families:</strong> Safe, comfortable hotels with sightseeing.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span><strong>Couples:</strong> Romantic weather, secluded stays, and privacy.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span><strong>Adventure Seekers:</strong> Trekking, rafting, and camping options.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="bg-indigo-50 dark:bg-indigo-950 border-none">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <Sun className="w-8 h-8 text-orange-500 mb-2" />
                                        <span className="font-semibold">Pleasant Weather</span>
                                    </CardContent>
                                </Card>
                                <Card className="bg-teal-50 dark:bg-teal-950 border-none">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <Wind className="w-8 h-8 text-teal-500 mb-2" />
                                        <span className="font-semibold">Fresh Air</span>
                                    </CardContent>
                                </Card>
                                <Card className="bg-rose-50 dark:bg-rose-950 border-none">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <Camera className="w-8 h-8 text-rose-500 mb-2" />
                                        <span className="font-semibold">Scenic Views</span>
                                    </CardContent>
                                </Card>
                                <Card className="bg-blue-50 dark:bg-blue-950 border-none">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <Map className="w-8 h-8 text-blue-500 mb-2" />
                                        <span className="font-semibold">Adventure</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Mountain Regions */}
                <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Best Mountain Regions to Visit</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-indigo-700">Northern Hills</CardTitle>
                                    <CardDescription>Himachal & Kashmir</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><strong>Manali:</strong> Snow points, river rafting, cafes.</li>
                                        <li><strong>Shimla:</strong> Mall Road, colonial vibes, toy train.</li>
                                        <li><strong>Kashmir:</strong> Dal Lake, Gulmarg skiing, Pahalgam.</li>
                                        <li><strong>Dharamshala:</strong> Tibetan culture, peace, trekking.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-indigo-700">Himalayan Foothills</CardTitle>
                                    <CardDescription>Uttarakhand</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><strong>Mussoorie:</strong> Kempty falls, cloud's end, mall road.</li>
                                        <li><strong>Nainital:</strong> Lake boating, viewpoints, weather.</li>
                                        <li><strong>Rishikesh:</strong> Yoga, Ganga aarti, river rafting.</li>
                                        <li><strong>Auli:</strong> Skiing destination, cable car.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-indigo-700">North East & Others</CardTitle>
                                    <CardDescription>Sikkim & Beyond</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><strong>Gangtok:</strong> MG Marg, Monasteries, Ropeway.</li>
                                        <li><strong>Darjeeling:</strong> Tea gardens, toy train, sunrise.</li>
                                        <li><strong>Meghalaya:</strong> Living root bridges, waterfalls.</li>
                                        <li><strong>Ladakh:</strong> High passes, deserts, adventure.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Best Time to Visit */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4">When Is the Best Time to Visit?</h2>
                        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">Choosing the right season depends on what you want to experience—snow, greenery, or clear skies.</p>

                        <div className="overflow-x-auto">
                            <Table>
                                <TableCaption>Seasonal Guide for Mountain Holidays</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[150px]">Season</TableHead>
                                        <TableHead>Months</TableHead>
                                        <TableHead>What to Expect</TableHead>
                                        <TableHead className="text-right">Best For</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium text-orange-500">Summer</TableCell>
                                        <TableCell>March - June</TableCell>
                                        <TableCell>Pleasant days, cool nights, flowers in bloom.</TableCell>
                                        <TableCell className="text-right">Families, Sightseeing</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-green-600">Monsoon</TableCell>
                                        <TableCell>July - September</TableCell>
                                        <TableCell>Lush greenery, mists, occasional landslides.</TableCell>
                                        <TableCell className="text-right">Nature Lovers, Budget</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-amber-600">Autumn</TableCell>
                                        <TableCell>October - November</TableCell>
                                        <TableCell>Clear blue skies, crisp air, post-monsoon views.</TableCell>
                                        <TableCell className="text-right">Photography, Peace</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium text-blue-500">Winter</TableCell>
                                        <TableCell>December - February</TableCell>
                                        <TableCell>Snowfall, freezing temperatures, winter sports.</TableCell>
                                        <TableCell className="text-right">Snow, Honeymoon</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </section>

                {/* Packages Grid */}
                <section id="packages" className="py-20 bg-slate-50 dark:bg-slate-900">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Popular Mountain Packages</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {destinations.map((dest, index) => (
                                <Link to={dest.link} key={index} className="block group h-full">
                                    <Card className="overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 flex items-center justify-center shrink-0">
                                            <Mountain className="w-24 h-24 text-indigo-300 dark:text-indigo-800 opacity-50" />
                                            <div className="absolute inset-0 flex items-end p-6">
                                                <div>
                                                    <Badge className="mb-2 bg-white/20 text-indigo-900 dark:text-indigo-100 dark:bg-black/40 backdrop-blur-md border-0">{dest.tag}</Badge>
                                                    <h3 className="text-2xl font-bold text-indigo-950 dark:text-indigo-50">{dest.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6 flex flex-col grow">
                                            <h4 className="font-bold text-lg mb-2 text-indigo-600">{dest.title}</h4>
                                            <p className="text-muted-foreground mb-6 line-clamp-3 text-sm">{dest.desc}</p>
                                            <div className="mt-auto">
                                                <Button className="w-full" variant="outline">
                                                    View Details
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cost & Inclusions */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">What's Included in Our Packages?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full text-indigo-600">
                                            <Map className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <strong>Accommodation:</strong> 3-Star to 5-Star hotels/resorts based on your budget.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full text-indigo-600">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <strong>Travel:</strong> Private cab for transfers and sightseeing. Volvo bus or Flight options available.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full text-indigo-600">
                                            <Utensils className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <strong>Meals:</strong> Breakfast and Dinner usually included at the hotel.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full text-indigo-600">
                                            <UserCheck className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <strong>Support:</strong> 24/7 on-trip assistance and local tour coordination.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Cost & Budget Guide</h3>
                                <p className="text-muted-foreground mb-6">
                                    Costs vary based on season, hotel category, and vehicle type. Here is a rough estimate for a couple (excluding flights/trains).
                                </p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 border rounded-lg">
                                        <span className="font-semibold">Budget (Standard Hotels)</span>
                                        <span className="text-green-600 font-bold">₹15,000 - ₹25,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 border rounded-lg bg-indigo-50 dark:bg-indigo-950/20">
                                        <span className="font-semibold">Standard (3-Star Hotels)</span>
                                        <span className="text-indigo-600 font-bold">₹25,000 - ₹40,000</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 border rounded-lg">
                                        <span className="font-semibold">Premium (4/5-Star Hotels)</span>
                                        <span className="text-purple-600 font-bold">₹40,000 - ₹80,000+</span>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-4 text-center">
                                    *Prices are per couple for 5-6 days. Subject to change.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Planning Tips */}
                <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-8 text-center">Mountain Travel Planning Tips</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center p-4">
                                <AlertTriangle className="w-8 h-8 mx-auto text-amber-500 mb-3" />
                                <h4 className="font-bold mb-2">Altitude Sickness</h4>
                                <p className="text-sm text-muted-foreground">Stay hydrated. Ascend slowly. Consult a doctor for high altitude meds.</p>
                            </div>
                            <div className="text-center p-4">
                                <CloudSnow className="w-8 h-8 mx-auto text-sky-500 mb-3" />
                                <h4 className="font-bold mb-2">Right Clothing</h4>
                                <p className="text-sm text-muted-foreground">Layering is key. Carry thermals, fleece, and a wind/waterproof jacket.</p>
                            </div>
                            <div className="text-center p-4">
                                <Sun className="w-8 h-8 mx-auto text-orange-500 mb-3" />
                                <h4 className="font-bold mb-2">Sun Protection</h4>
                                <p className="text-sm text-muted-foreground">Mountain sun is harsh. Use sunscreen, sunglasses, and a hat.</p>
                            </div>
                            <div className="text-center p-4">
                                <Map className="w-8 h-8 mx-auto text-indigo-500 mb-3" />
                                <h4 className="font-bold mb-2">Offline Maps</h4>
                                <p className="text-sm text-muted-foreground">Network can be patchy. Download offline maps and carry some cash.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-indigo-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Plan Your Mountain Holiday from Bhilai</h2>
                        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                            Get a customized itinerary with the best hotels and reliable drivers. Call us today for the best deals.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild className="text-lg px-8 text-indigo-950 font-bold">
                                <a href="https://wa.me/919406182174?text=Hello, I want to plan a Mountain Holiday. Please share details.">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book Custom Tour
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};
export default MountainHolidayPackages;
