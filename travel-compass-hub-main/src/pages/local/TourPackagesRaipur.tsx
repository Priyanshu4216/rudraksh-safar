import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plane, MapPin, Calendar, Clock, ArrowRight, Star, Heart, Users, Globe, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQsSection from '@/components/FAQsSection';
import RelatedServices from '@/components/RelatedServices';

const TourPackagesRaipur = () => {
    return (
        <>
            <Helmet>
                <title>Best Tour Packages from Raipur | Family & Couple Trips - Rudraksh Safar</title>
                <meta name="description" content="Book affordable tour packages from Raipur. Best deals on Goa, Kashmir, Dubai, Thailand & Bali packages for families, couples & groups. Starts @ ₹9,999." />
                <meta name="keywords" content="tour packages from raipur, raipur to goa tour package, raipur to kashmir package, international packages from raipur, honeymoon packages from raipur" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-raipur" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Intro / Hero Section */}
                <section className="relative py-20 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-background">
                    <div className="container mx-auto px-4 text-center">
                        <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">Best Prices Guaranteed</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Tour Packages from <span className="text-orange-600">Raipur</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Explore the world with our customized holiday packages for families, honeymoon couples, and groups. Depart directly from Swami Vivekananda Airport (RPR).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                                <a href="#packages">Explore Packages</a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="https://wa.me/919406182174?text=Send me package details from Raipur">Enquire Now</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Package Categories */}
                <section className="py-12 border-b">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            <Link to="/domestic-packages">
                                <Card className="hover:border-orange-500 transition-colors text-center p-4 h-full flex flex-col items-center justify-center">
                                    <MapPin className="w-8 h-8 text-orange-600 mb-2" />
                                    <span className="font-semibold">Domestic</span>
                                </Card>
                            </Link>
                            <Link to="/international-packages">
                                <Card className="hover:border-blue-500 transition-colors text-center p-4 h-full flex flex-col items-center justify-center">
                                    <Globe className="w-8 h-8 text-blue-600 mb-2" />
                                    <span className="font-semibold">International</span>
                                </Card>
                            </Link>
                            <Link to="/weekend-getaways-raipur">
                                <Card className="hover:border-green-500 transition-colors text-center p-4 h-full flex flex-col items-center justify-center">
                                    <Calendar className="w-8 h-8 text-green-600 mb-2" />
                                    <span className="font-semibold">Weekend Trips</span>
                                </Card>
                            </Link>
                            <Link to="/group-tour-packages">
                                <Card className="hover:border-purple-500 transition-colors text-center p-4 h-full flex flex-col items-center justify-center">
                                    <Users className="w-8 h-8 text-purple-600 mb-2" />
                                    <span className="font-semibold">Group Tours</span>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Popular Tours from Raipur */}
                <section id="packages" className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Trending Destinations from Raipur</h2>
                            <p className="text-muted-foreground">Handpicked itineraries with flight and train options.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Goa */}
                            <Card className="overflow-hidden hover:shadow-xl transition-all">
                                <div className="h-48 bg-gray-200 relative">
                                    <img src="https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Goa" className="w-full h-full object-cover" />
                                    <Badge className="absolute top-4 right-4 bg-yellow-500">Bestseller</Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> 4 Days / 3 Nights</span>
                                        <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                                    </div>
                                    <h3 className="text-xl font-bold">Goa Beach Holiday</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4 text-sm">Experience the sun, sand, and nightlife. Includes stay near Calangute/Baga.</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Flight/Train assistance</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Breakfast & Dinner</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Sightseeing included</li>
                                    </ul>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center border-t pt-4 bg-muted/20">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Starting from</p>
                                        <p className="text-xl font-bold text-orange-600">₹11,999</p>
                                    </div>
                                    <Button asChild size="sm">
                                        <Link to="/package/goa">View Details</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Kashmir */}
                            <Card className="overflow-hidden hover:shadow-xl transition-all">
                                <div className="h-48 bg-gray-200 relative">
                                    <img src="https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kashmir" className="w-full h-full object-cover" />
                                    <Badge className="absolute top-4 right-4 bg-blue-500">Popular</Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> 6 Days / 5 Nights</span>
                                        <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                                    </div>
                                    <h3 className="text-xl font-bold">Magical Kashmir</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4 text-sm">Srinagar, Gulmarg, Pahalgam & Sonmarg. Experience Houseboat stay.</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Shikara Ride included</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>All Transfers by Cab</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Premium Hotels</li>
                                    </ul>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center border-t pt-4 bg-muted/20">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Starting from</p>
                                        <p className="text-xl font-bold text-orange-600">₹18,999</p>
                                    </div>
                                    <Button asChild size="sm">
                                        <Link to="/package/kashmir">View Details</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Thailand */}
                            <Card className="overflow-hidden hover:shadow-xl transition-all">
                                <div className="h-48 bg-gray-200 relative">
                                    <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800" alt="Thailand" className="w-full h-full object-cover" />
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> 5 Days / 4 Nights</span>
                                        <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                                    </div>
                                    <h3 className="text-xl font-bold">Thailand Explorer</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4 text-sm">Bangkok & Pattaya tour. Budget-friendly international trip.</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Coral Island Tour</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Visa Assistance</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>All Meals</li>
                                    </ul>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center border-t pt-4 bg-muted/20">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Starting from</p>
                                        <p className="text-xl font-bold text-orange-600">₹24,999</p>
                                    </div>
                                    <Button asChild size="sm">
                                        <Link to="/package/thailand">View Details</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Dubai */}
                            <Card className="overflow-hidden hover:shadow-xl transition-all">
                                <div className="h-48 bg-gray-200 relative">
                                    <img src="https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dubai" className="w-full h-full object-cover" />
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> 5 Days / 4 Nights</span>
                                        <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                                    </div>
                                    <h3 className="text-xl font-bold">Dazzling Dubai</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4 text-sm">Burj Khalifa, Desert Safari, and Shopping Festival.</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Burj Khalifa Entry</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Marina Dhow Cruise</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Visa Included</li>
                                    </ul>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center border-t pt-4 bg-muted/20">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Starting from</p>
                                        <p className="text-xl font-bold text-orange-600">₹35,999</p>
                                    </div>
                                    <Button asChild size="sm">
                                        <Link to="/package/dubai">View Details</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Kerala */}
                            <Card className="overflow-hidden hover:shadow-xl transition-all">
                                <div className="h-48 bg-gray-200 relative">
                                    <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kerala" className="w-full h-full object-cover" />
                                    <Badge className="absolute top-4 right-4 bg-pink-500">Honeymoon</Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> 6 Days / 5 Nights</span>
                                        <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                                    </div>
                                    <h3 className="text-xl font-bold">Kerala Bliss</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4 text-sm">Munnar tea gardens, Alleppey Houseboat & Thekkady.</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Houseboat Stay</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Candlelight Dinner</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Private Cab</li>
                                    </ul>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center border-t pt-4 bg-muted/20">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Starting from</p>
                                        <p className="text-xl font-bold text-orange-600">₹19,999</p>
                                    </div>
                                    <Button asChild size="sm">
                                        <Link to="/package/kerala-family">View Details</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Manali */}
                            <Card className="overflow-hidden hover:shadow-xl transition-all">
                                <div className="h-48 bg-gray-200 relative">
                                    <img src="https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Manali" className="w-full h-full object-cover" />
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> 5 Days / 4 Nights</span>
                                        <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                                    </div>
                                    <h3 className="text-xl font-bold">Manali Adventure</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4 text-sm">Snow points, Solang Valley, and Rohtang Pass tour.</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Volvo Bus Options</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Snow Activities</li>
                                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>Sightseeing</li>
                                    </ul>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center border-t pt-4 bg-muted/20">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Starting from</p>
                                        <p className="text-xl font-bold text-orange-600">₹9,999</p>
                                    </div>
                                    <Button asChild size="sm">
                                        <Link to="/package/manali">View Details</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                        </div>
                    </div>
                </section>

                {/* Pricing Table Section */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-center mb-8">Package Price Range</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Card>
                                    <CardHeader className="text-center pb-2">
                                        <h3 className="font-bold text-lg">Budget Friendly</h3>
                                        <p className="text-sm text-muted-foreground">For Backpackers</p>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-3xl font-bold text-primary mb-2">₹5k - ₹15k</p>
                                        <p className="text-sm text-muted-foreground mb-4">Goa, Manali, Pachmarhi</p>
                                        <Button variant="outline" className="w-full" asChild><Link to="/budget-tour-packages">View Deals</Link></Button>
                                    </CardContent>
                                </Card>
                                <Card className="border-primary shadow-md relative">
                                    <Badge className="absolute top-0 right-0 rounded-tl-none rounded-br-none bg-primary">Popular</Badge>
                                    <CardHeader className="text-center pb-2">
                                        <h3 className="font-bold text-lg">Premium</h3>
                                        <p className="text-sm text-muted-foreground">For Families</p>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-3xl font-bold text-primary mb-2">₹20k - ₹40k</p>
                                        <p className="text-sm text-muted-foreground mb-4">Kashmir, Thailand, Kerala</p>
                                        <Button className="w-full" asChild><Link to="/family-packages">View Deals</Link></Button>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="text-center pb-2">
                                        <h3 className="font-bold text-lg">Luxury</h3>
                                        <p className="text-sm text-muted-foreground">For Honeymoon</p>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-3xl font-bold text-primary mb-2">₹50k+</p>
                                        <p className="text-sm text-muted-foreground mb-4">Maldives, Bali, Dubai</p>
                                        <Button variant="outline" className="w-full" asChild><Link to="/luxury-packages">View Deals</Link></Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <FAQsSection
                    title="Frequently Asked Questions (Raipur Tour Packages)"
                    description="Everything you need to know about booking domestic and international tours from Raipur."
                    faqs={[
                        {
                            question: "What domestic tour packages are available from Raipur?",
                            answer: "We offer direct flight/train included packages from Raipur to Goa, Kashmir, Manali, Kerala, Rajasthan, and Andaman. Weekend trips to Kanha, Pench, and Pachmarhi are also very popular."
                        },
                        {
                            question: "Do you have international packages starting from Raipur?",
                            answer: "Yes! We have seamless international itineraries starting from Swami Vivekananda Airport (RPR) to Dubai, Thailand, Singapore, Bali, and Vietnam. We handle the layovers and visa process."
                        },
                        {
                            question: "Do you have a physical office in Raipur for consultation?",
                            answer: "Our head office is in Bhilai (GE Road), a short drive from Raipur. However, for our Raipur clients, we offer doorstep consultation and digital booking. You can also visit our Bhilai office for a face-to-face planning session."
                        },
                        {
                            question: "What are the best weekend getaways from Raipur?",
                            answer: "For a quick break, we recommend Kanha National Park (Safari), Pachmarhi (Hill Station), Gangrel Dam (Water Sports), or Mainpat (Shimla of Chhattisgarh). We can arrange cab and hotel packages for 2-3 days."
                        },
                        {
                            question: "Do you organize school or college industrial visits?",
                            answer: "Yes, Rudraksh Safar specializes in educational tours for schools and colleges in Raipur & Bhilai. We organize industrial visits to places like Manali, Goa, and Hyderabad with complete student safety and budget-friendly pricing."
                        },
                        {
                            question: "Can I get a customized honeymoon package?",
                            answer: "Absolutely. Our honeymoon specials include candlelight dinners, flower bed decoration, private houseboats (Kerala), and couple photoshoots. Popular choices are Kashmir, Manali, Bali, and Maldives."
                        },
                        {
                            question: "Is flight ticket included in the package cost?",
                            answer: "It depends on the plan you choose. We offer 'Land-Only Packages' (Hotel + Cab + Sightseeing) if you want to book your own flights, and 'All-Inclusive Packages' where we bundle the cheapest flight rates from Raipur for you."
                        },
                        {
                            question: "Do you provide EMI options for expensive packages?",
                            answer: "Yes, we understand that travel can be big investment. We offer credit card EMI options and installment payment plans for packages above ₹50,000 to help you travel now and pay later."
                        },
                        {
                            question: "Are there any hidden charges?",
                            answer: "Never. Our quotation clearly mentions what is included (GST, Taxes, Meals, Entry Fees). We believe in 100% pricing transparency so you don't face surprises during your trip."
                        },
                        {
                            question: "Is vegetarian food available on international tours?",
                            answer: "Yes, for our Indian travelers, we ensure Indian restaurants are part of the itinerary in places like Dubai, Thailand, and Bali. We can specifically request Jain or Pure Veg meals at hotels as well."
                        },
                    ]}
                />

                {/* Internal Link Section */}
                <RelatedServices mode="packages" />

            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default TourPackagesRaipur;
