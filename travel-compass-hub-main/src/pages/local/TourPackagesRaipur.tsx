import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Plane, MapPin, Calendar, Clock, ArrowRight, Star, Heart, Users, Globe, Briefcase, CheckCircle, Shield, AlertTriangle, Phone, Check, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQsSection from '@/components/FAQsSection';
import RelatedServices from '@/components/RelatedServices';

const TourPackagesRaipur = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Advanced JSON-LD Schema for Local Authority
    const raipurSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TravelAgency",
                "@id": "https://rudrakshsafar.com/#travelagency",
                "name": "Rudraksh Safar - Best Travel Agent in Raipur",
                "image": "https://rudrakshsafar.com/logo.png",
                "telephone": "+91-9406182174",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "GE Road, Bhilai 3",
                    "addressLocality": "Bhilai",
                    "addressRegion": "Chhattisgarh",
                    "postalCode": "490021",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "21.206181",
                    "longitude": "81.424916"
                },
                "priceRange": "₹₹",
                "areaServed": ["Raipur", "Bhilai", "Durg", "Chhattisgarh"],
                "knowsAbout": [
                    "Tour packages from Raipur",
                    "International travel from Chhattisgarh",
                    "Visa assistance",
                    "Group tours",
                    "Honeymoon packages"
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://rudrakshsafar.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Tour Packages from Raipur",
                        "item": "https://rudrakshsafar.com/tour-packages-raipur"
                    }
                ]
            },
            {
                "@type": "Product",
                "name": "Tour Packages from Raipur",
                "description": "Affordable domestic and international tour packages from Raipur (RPR) including flights, hotels, and visa assistance.",
                "brand": {
                    "@type": "Brand",
                    "name": "Rudraksh Safar"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "124"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "5500",
                    "highPrice": "55000",
                    "priceCurrency": "INR",
                    "offerCount": "15"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Which tour packages are best from Raipur?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The most popular tour packages from Raipur include Goa, Kashmir, Kerala, Dubai, Thailand, and Bali due to easy flight connectivity and value-for-money pricing."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you provide international tour packages from Raipur?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we specialize in international trips from Raipur (RPR) to Dubai, Thailand, Singapore, and Vietnam, handling all visa and flight logistics."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it cheaper to book with a local Raipur agent?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Often yes. Rudraksh Safar has B2B tie-ups that allow us to offer lower rates than online portals for hotels and bulk flight bookings."
                        }
                    }
                ]
            }
        ]
    };
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-orange-600 z-[100] origin-left"
                style={{ scaleX }}
            />
            <Helmet>
                <title>Best Tour Packages from Raipur (2025) | Local Agent & Deals</title>
                <meta name="description" content="Book affordable tour packages from Raipur. #1 Local Agent for Goa, Kashmir, Dubai, Thailand & Bali trips. Verified hotels, visa support & best flight rates." />
                <meta name="keywords" content="tour packages from raipur, best travel agent in raipur, international tours from raipur, raipur holiday packages, bhilai to international tour" />
                <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-raipur" />
                <script type="application/ld+json">
                    {JSON.stringify(raipurSchema)}
                </script>
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

                {/* Commercial Context (Affordable Packages) */}
                <section id="raipur-packages-context" className="py-12 bg-orange-50/50 dark:bg-orange-950/10 border-b">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Affordable Tour Packages in Raipur for Every Travel Style</h2>
                        <p className="text-lg text-muted-foreground mb-4">
                            Our tour packages in Raipur are designed for families, honeymoon couples,
                            students, and corporate groups looking for transparent pricing,
                            flexible payment options, and reliable local support.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Looking for flight logistics? Check our page for <Link to="/tour-packages-from-raipur" className="text-primary hover:underline">planning trips departing from Raipur airport</Link>.
                            First time traveler? Read our <Link to="/travel-guide-from-bhilai" className="text-primary hover:underline">detailed travel planning guide for Bhilai & Raipur travelers</Link>.
                        </p>
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
                            <Link to="/tour-packages-from-raipur/weekend-getaways">
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
                                    <p className="text-muted-foreground mb-4 text-sm">Srinagar, Gulmarg, Pahalgam & Sonmarg. Experience Houseboat stay with our <Link to="/honeymoon-packages" className="text-primary hover:underline">honeymoon specials</Link>.</p>
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

                {/* Price Comparison Table (Snippet Bait) */}
                <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Why Book Tour Packages in Raipur with Rudraksh Safar?</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-background shadow-lg rounded-xl overflow-hidden border">
                                <thead className="bg-orange-600 text-white">
                                    <tr>
                                        <th className="p-4 text-left">Factor</th>
                                        <th className="p-4 text-left">Online Portals</th>
                                        <th className="p-4 text-left bg-orange-700">Rudraksh Safar</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr>
                                        <td className="p-4 font-semibold">Local Consultation</td>
                                        <td className="p-4 text-muted-foreground text-red-500"><X className="w-5 h-5 inline" /> No</td>
                                        <td className="p-4 font-bold text-green-600 bg-orange-50/50 dark:bg-orange-900/10"><Check className="w-5 h-5 inline" /> Yes (Doorstep/Office)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Price Transparency</td>
                                        <td className="p-4 text-muted-foreground text-red-500"><X className="w-5 h-5 inline" /> Hidden Fees</td>
                                        <td className="p-4 font-bold text-green-600 bg-orange-50/50 dark:bg-orange-900/10"><Check className="w-5 h-5 inline" /> 100% Transparent</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">EMI / Token Booking</td>
                                        <td className="p-4 text-muted-foreground text-red-500"><X className="w-5 h-5 inline" /> No</td>
                                        <td className="p-4 font-bold text-green-600 bg-orange-50/50 dark:bg-orange-900/10"><Check className="w-5 h-5 inline" /> Available</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Customization</td>
                                        <td className="p-4 text-muted-foreground">Limited</td>
                                        <td className="p-4 font-bold text-green-600 bg-orange-50/50 dark:bg-orange-900/10">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Support During Trip</td>
                                        <td className="p-4 text-muted-foreground">Chatbot</td>
                                        <td className="p-4 font-bold text-green-600 bg-orange-50/50 dark:bg-orange-900/10">Personal Agent</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Commercial AEO Blocks */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions (Raipur Tour Packages)</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "What are the best tour packages available in Raipur?",
                                    a: "The best tour packages in Raipur include Goa beach holidays, Kashmir family tours, Kerala honeymoon packages, Thailand international trips, and budget Manali tours starting from ₹9,999."
                                },
                                {
                                    q: "Cheapest tour packages Raipur?",
                                    a: "For budget travelers, we offer Manali, Pachmarhi, and Goa packages starting from as low as ₹5,500 per person including stay and sightseeing."
                                },
                                {
                                    q: "Family tour packages Raipur?",
                                    a: "Our family bestsellers are Kashmir, Kerala, and Rajasthan. We ensure family-friendly hotels, safe transport, and relaxed itineraries suitable for kids and elders."
                                },
                                {
                                    q: "Honeymoon packages from Raipur?",
                                    a: "We curate special honeymoon trips to Bali, Maldives, and Kerala Houseboats with inclusions like candlelight dinners, flower decoration, and couple photoshoots."
                                },
                                {
                                    q: "International tour packages Raipur?",
                                    a: "We organize seamless international trips to Dubai, Thailand, Vietnam, and Singapore. We handle visa processing and flight connections from Raipur via Delhi/Mumbai."
                                },
                                {
                                    q: "Group tour packages Raipur?",
                                    a: "Yes, we have fixed departure group tours for ladies, seniors, and corporate teams departing from Raipur with a dedicated tour manager."
                                },
                                {
                                    q: "EMI tour packages Raipur?",
                                    a: "Yes, Rudraksh Safar offers easy EMI options on credit cards for packages above ₹50,000, allowing you to travel now and pay later."
                                },
                                {
                                    q: "Are Raipur tour packages cheaper via agents?",
                                    a: "Often yes. Local agents like us have bulk deals with hotels and transporters, and we save you from hidden 'convenience fees' charged by online portals."
                                }
                            ].map((item, index) => (
                                <div key={index} itemScope itemType="https://schema.org/Question" className="bg-background p-6 rounded-lg border shadow-sm">
                                    <h3 itemProp="name" className="font-bold text-lg mb-2 flex items-start gap-2">
                                        <Briefcase className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
                                        {item.q}
                                    </h3>
                                    <div itemScope itemType="https://schema.org/Answer">
                                        <p itemProp="text" className="text-muted-foreground">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust & Local E-E-A-T Section */}
                <section id="raipur-travel-trust" className="py-20 bg-background border-t">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Trusted Tour Package Provider for Raipur Travelers</h2>
                        <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl inline-block text-left relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Shield className="w-32 h-32 text-orange-600" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                <div className="shrink-0">
                                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-10 h-10 text-orange-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Local Reputation, Personalized Care</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Rudraksh Safar is a locally trusted travel agency serving <span className="font-bold text-foreground">Raipur, Bhilai, and Durg</span> travelers with customized holiday packages, transparent pricing, and real human support throughout the journey.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm font-medium">
                                        <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-4 h-4" /> Bhilai Office for Face-to-Face Meeting</span>
                                        <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-4 h-4" /> Doorstep Consultation in Raipur</span>
                                        <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-4 h-4" /> No Hidden Charges Policy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal Link Section */}
                <RelatedServices mode="packages" />
            </main >
            <Footer />
            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white shadow-xl rounded-full font-bold h-14" asChild>
                    <a href="https://wa.me/919406182174?text=Get Raipur Price for Packages" className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5 fill-current" /> Get Raipur Package Price
                    </a>
                </Button>
            </div>
            <FloatingWhatsApp />
        </>
    );
};

export default TourPackagesRaipur;
