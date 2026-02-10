import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Car, Bus, MapPin, CheckCircle, Phone, Star, Shield, Clock, Users, Calendar, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import RelatedServices from '@/components/RelatedServices';

const CabRental = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <PageLoader type="cab" />;
    }
    const fleet = [
        { name: "Premium Sedan", type: "Comfort", seats: "4+1", desc: "Dzire / Etios. Perfect for small families and corporate travel." },
        { name: "Luxury SUV", type: "Premium", seats: "6+1", desc: "Innova Crysta. specialized for long-distance comfort." },
        { name: "Tempo Traveller", type: "Group", seats: "12/17/26", desc: "Spacious seating for large family trips and pilgrimages." },
        { name: "Luxury Bus", type: "Large Group", seats: "45/50", desc: "Volvo / Mercedes buses for weddings and corporate tours." },
    ];

    const destinations = [
        { name: "Raipur" },
        { name: "Bhilai" },
        { name: "Shirdi" },
        { name: "Goa" },
        { name: "Manali" },
        { name: "Delhi" },
        { name: "Kashmir" },
        { name: "Gujarat" },
        { name: "Puri" },
        { name: "Kerala" },
        { name: "Thailand" },
        { name: "Mumbai" },
        { name: "Ooty" },
        { name: "Kolkata" },
    ];

    return (
        <>
            <Helmet>
                <title>Luxury Cab & Bus Rental Service | Bhilai, Raipur & All India</title>
                <meta name="description" content="Book premium cabs, Tempo Travellers, and luxury buses for weddings, outstation trips, and corporate events. Service available in Bhilai, Raipur, and across India." />
                <meta name="keywords" content="cab rental bhilai, taxi service raipur, luxury bus rental, tempo traveller hire, wedding car rental, outstation cabs" />
                <link rel="canonical" href="https://rudrakshsafar.com/cab-rental" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                "name": "Cab & Bus Rental Service",
                                "provider": {
                                    "@type": "TravelAgency",
                                    "name": "Rudraksh Safar"
                                },
                                "areaServed": ["Bhilai", "Raipur", "Durg", "India"],
                                "description": "Premium cab, tempo traveller, and luxury bus rental services.",
                                "offers": {
                                    "@type": "Offer",
                                    "priceCurrency": "INR",
                                    "priceSpecification": [
                                        { "@type": "UnitPriceSpecification", "price": "10", "referenceQuantity": { "@type": "QuantitativeValue", "unitCode": "KMT", "value": "1" }, "name": "Premium Sedan per km" },
                                        { "@type": "UnitPriceSpecification", "price": "18", "referenceQuantity": { "@type": "QuantitativeValue", "unitCode": "KMT", "value": "1" }, "name": "Innova Crysta per km" },
                                        { "@type": "UnitPriceSpecification", "price": "26", "referenceQuantity": { "@type": "QuantitativeValue", "unitCode": "KMT", "value": "1" }, "name": "Tempo Traveller per km" }
                                    ]
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    { "@type": "Question", "name": "Are the fuel and driver charges included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for standard outstation packages, fuel and driver allowance are usually included." } },
                                    { "@type": "Question", "name": "Can I book a bus for a wedding in Bhilai?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We specialize in wedding transportation with luxury buses and Tempo Travellers." } },
                                    { "@type": "Question", "name": "Is it safe for solo female travelers?", "acceptedAnswer": { "@type": "Answer", "text": "Safety is our priority. We have verified drivers and GPS-tracked vehicles." } },
                                    { "@type": "Question", "name": "How do I pay?", "acceptedAnswer": { "@type": "Answer", "text": "You can pay via UPI, Bank Transfer, or Cash." } }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                    <div className="container relative z-10 text-center px-4">
                        <Badge className="mb-6 bg-yellow-500 text-black hover:bg-yellow-400 text-lg py-1 px-4 border-none">
                            Premium Fleet Available
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Travel in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Style</span> & Comfort
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light">
                            Reliable Cabs, Luxury Buses, and Tempo Travellers for every journey. From local drops to All-India tours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-xl py-8 px-10 rounded-full shadow-lg hover:shadow-yellow-500/20 transition-all font-bold" asChild>
                                <a href="https://wa.me/919406182174?text=I want to book a cab/bus">Book Now</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-xl py-8 px-10 rounded-full" asChild>
                                <a href="tel:+919406182174">Call +91 94061 82174</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* TL;DR & Updated Signal */}
                <section className="bg-background -mt-8 relative z-20 container mx-auto px-4">
                    <div className="bg-yellow-50/90 border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-lg max-w-5xl mx-auto backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-yellow-700" />
                                    <h3 className="font-bold text-lg text-yellow-900">TL;DR: Cab & Bus Pricing</h3>
                                </div>
                                <p className="text-sm text-yellow-800 leading-relaxed mb-2">
                                    <strong>Premium Sedan:</strong> ₹10-12/km | <strong>Innova Crysta:</strong> ₹18-22/km | <strong>Tempo Traveller:</strong> ₹26-30/km.
                                    All vehicles include professional drivers, GPS tracking, and clean interiors.
                                    <span className="font-semibold px-2">No Hidden Night Charges on One-Way drops.</span>
                                </p>
                                <div className="flex items-center gap-2 text-xs font-medium text-yellow-800 bg-yellow-100 px-2 py-1 rounded w-fit">
                                    <Calendar className="w-3 h-3" /> Rates Updated: February 2026
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Fleet */}
                <section className="py-24 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Our Premium Fleet</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Meticulously maintained vehicles for your safety and comfort. Choose the perfect ride for your needs.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {fleet.map((vehicle, index) => (
                                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none bg-background overflow-hidden relative">
                                    <CardContent className="p-6 relative pt-12">
                                        <div className="absolute top-4 right-6 bg-black text-white px-4 py-1 text-sm font-bold rounded-full shadow-lg">
                                            {vehicle.type}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                            <Users className="w-4 h-4" /> {vehicle.seats} Seater
                                        </div>
                                        <p className="text-muted-foreground mb-6">{vehicle.desc}</p>
                                        <Button className="w-full group-hover:bg-yellow-500 group-hover:text-black transition-colors" asChild>
                                            <a href={`https://wa.me/919406182174?text=Book ${vehicle.name}`}>Check Availability</a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RATE CHARTS (New SEO Content) */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Transparent Cab Rates in Bhilai</h2>
                            <p className="text-muted-foreground">No hidden charges. Pay for what you ride.</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full max-w-4xl mx-auto border-collapse border border-border">
                                <thead className="bg-primary/5">
                                    <tr>
                                        <th className="border p-4 text-left">Vehicle Type</th>
                                        <th className="border p-4 text-left">Models</th>
                                        <th className="border p-4 text-left">Rate per KM</th>
                                        <th className="border p-4 text-left">Driver Allowance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-accent/5">
                                        <td className="border p-4 font-medium">Hatchback / Sedan</td>
                                        <td className="border p-4">Dzire, Etios, Aura</td>
                                        <td className="border p-4">₹10 - ₹12</td>
                                        <td className="border p-4">₹300 / day</td>
                                    </tr>
                                    <tr className="hover:bg-accent/5">
                                        <td className="border p-4 font-medium">SUV (6+1)</td>
                                        <td className="border p-4">Ertiga, XL6</td>
                                        <td className="border p-4">₹14 - ₹16</td>
                                        <td className="border p-4">₹400 / day</td>
                                    </tr>
                                    <tr className="hover:bg-accent/5">
                                        <td className="border p-4 font-medium">Premium SUV</td>
                                        <td className="border p-4">Innova Crysta</td>
                                        <td className="border p-4">₹18 - ₹22</td>
                                        <td className="border p-4">₹500 / day</td>
                                    </tr>
                                    <tr className="hover:bg-accent/5">
                                        <td className="border p-4 font-medium">Tempo Traveller</td>
                                        <td className="border p-4">Force Urbania (17S/26S)</td>
                                        <td className="border p-4">₹26 - ₹30</td>
                                        <td className="border p-4">₹600 / day</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-center text-muted-foreground mt-4">* Tolls, Parking & State Taxes are extra as actuals.</p>
                    </div>
                </section>

                {/* Destinations */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Popular Routes</h2>
                            <p className="text-muted-foreground text-lg">
                                We cover every corner of India. Reliable service to any destination.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {destinations.map((dest, index) => (
                                <div key={index} className="px-6 py-3 rounded-full border border-border bg-background hover:bg-yellow-50 hover:border-yellow-200 hover:text-yellow-700 transition-colors cursor-default font-medium">
                                    {dest.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DISTANCE & TIME TABLE (New Value Add) */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Popular Road Trips from Bhilai</h2>
                            <p className="text-muted-foreground">Planning a weekend getaway? Check estimated travel times.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { to: "Raipur Airport (RPR)", dist: "45 km", time: "1 hr 15 mins" },
                                { to: "Dongargarh (Bamleshwari)", dist: "65 km", time: "1 hr 30 mins" },
                                { to: "Kanha National Park", dist: "180 km", time: "4 hrs" },
                                { to: "Jagdalpur (Chitrakote)", dist: "300 km", time: "6-7 hrs" },
                                { to: "Mainpat (Shimla of CG)", dist: "380 km", time: "7-8 hrs" },
                                { to: "Amarkantak", dist: "230 km", time: "5 hrs" },
                            ].map((item, i) => (
                                <div key={i} className="bg-background p-4 rounded-xl border flex justify-between items-center shadow-sm">
                                    <div>
                                        <h3 className="font-bold">Bhilai ➝ {item.to}</h3>
                                        <p className="text-sm text-muted-foreground">{item.dist}</p>
                                    </div>
                                    <Badge variant="outline" className="bg-primary/5">{item.time}</Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* LOCAL PICKUP POINTS (Long Tail SEO) */}
                <section className="py-16 bg-background border-y">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 mb-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                            <MapPin className="w-4 h-4" />
                            Doorstep Pickup Available
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Serving Every Corner of Bhilai-Durg</h2>
                        <p className="max-w-4xl mx-auto text-lg text-muted-foreground mb-8">
                            Whether you stay in the <strong>Civic Centre</strong> heartland or the expanding <strong>Smriti Nagar</strong>, our cabs reach your doorstep on time.
                            We cover all sectors (1 to 10), <strong>Nehru Nagar</strong>, <strong>Power House</strong>, <strong>Hudco</strong>, <strong>Risali</strong>, and <strong>Charoda</strong>.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {["Sector 1-10", "Nehru Nagar", "Smriti Nagar", "Supela", "Power House", "Hudco", "Risali", "Maroda", "Kumhari", "Charoda"].map((area, i) => (
                                <Badge key={i} variant="secondary" className="text-sm py-1 px-3">
                                    {area}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 bg-slate-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge className="mb-6 bg-yellow-500 text-black border-none mx-auto">The Rudraksh Promise</Badge>
                            <h2 className="text-4xl font-bold mb-8">Why Trust Us For Your Journey?</h2>
                            <p className="text-slate-300 text-lg mb-12 leading-relaxed">
                                We don't just provide cars; we provide peace of mind. Our drivers are trained professionals who prioritize your safety and comfort above all else.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 mb-4">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">Safe & Sanitized</h3>
                                    <p className="text-slate-400">Vehicles are deep cleaned before every trip. GPS tracking enabled.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center text-yellow-400 mb-4">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">Expert Chauffeurs</h3>
                                    <p className="text-slate-400">Verified background, uniform-clad, and fluent in local routes.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-400 mb-4">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">On-Time Guarantee</h3>
                                    <p className="text-slate-400">We value your time. Punctuality is our hallmark.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-24 max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Are the fuel and driver charges included?</AccordionTrigger>
                            <AccordionContent>
                                Yes, for standard outstation packages, fuel and driver allowance are usually included. Tolls, parking, and state taxes are extra as per actuals.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can I book a bus for a wedding in Bhilai?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely! we specialize in wedding transportation. We have luxury buses (AC Volvo/Mercedes) and Tempo Travellers for guest movement.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it safe for solo female travelers?</AccordionTrigger>
                            <AccordionContent>
                                Safety is our priority. We have verified drivers and GPS-tracked vehicles. You can share trip details with family, and our support team is available 24/7.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How do I pay?</AccordionTrigger>
                            <AccordionContent>
                                You can pay via UPI, Bank Transfer, or Cash. A small advance is required to confirm the booking.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                <RelatedServices mode="booking" />

                {/* Final CTA */}
                <section className="py-20 bg-yellow-500 text-black text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto font-medium">
                            Don't compromise on comfort. Book the best cabs and buses in Chhattisgarh today.
                        </p>
                        <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-12 py-6 rounded-full" asChild>
                            <a href="https://wa.me/919406182174?text=I want to book a cab now">Book Your Ride</a>
                        </Button>
                    </div>
                </section>
            </main >

            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default CabRental;
