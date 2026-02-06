import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Users, Award, Heart, Phone, CheckCircle, Globe, Smile } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';

const AboutUs = () => {
    const stats = [
        { label: "Years Experience", value: "12+", icon: Award },
        { label: "Happy Travellers", value: "5000+", icon: Smile },
        { label: "Destinations", value: "40+", icon: Globe },
        { label: "Support", value: "24/7", icon: Phone },
        { label: "Last Updated", value: "Feb 2026", icon: CheckCircle }
    ];

    const values = [
        {
            title: "Trust First",
            desc: "We are real people with a real office in Bhilai. We don't hide behind chatbots.",
            icon: Users
        },
        {
            title: "Transparency",
            desc: "No hidden costs. What we quote is what you pay. We explain every inclusion clearly.",
            icon: CheckCircle
        },
        {
            title: "Empathy",
            desc: "We treat your holiday like our own. If you are stuck, we worry until you are safe.",
            icon: Heart
        }
    ];

    return (
        <>
            <Helmet>
                <title>About Rudraksh Safar | Trusted Travel Agency in Bhilai</title>
                <meta name="description" content="Learn about Rudraksh Safar, Bhilai's most trusted travel agency since 2010. Our story, our values, and why 5000+ travellers choose us for their dream vacations." />
                <meta name="keywords" content="about Rudraksh Safar, Rudraksh Safar reviews, reliable travel agency Bhilai, Rudraksh Safar owner, travel agency history" />
                <link rel="canonical" href="https://rudrakshsafar.com/about-rudraksh-safar" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "TravelAgency",
                            "@id": "https://rudrakshsafar.com/#travelagency",
                            "name": "Rudraksh Safar",
                            "legalName": "Rudraksh Safar",
                            "foundingDate": "2010",
                            "description": "Bhilai's most trusted travel agency offering domestic and international tour packages.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Bhilai",
                                "addressRegion": "Chhattisgarh",
                                "addressCountry": "IN"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91-9406182174",
                                "contactType": "customer service",
                                "areaServed": "IN",
                                "availableLanguage": ["English", "Hindi"]
                            },
                            "sameAs": [
                                "https://www.facebook.com/rudrakshsafar",
                                "https://www.instagram.com/rudrakshsafar"
                            ]
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-24 bg-primary/5">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
                                We Are <span className="text-primary">Rudraksh Safar</span>
                            </h1>
                            <div className="flex justify-center mb-6">
                                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About Us', path: '/about-rudraksh-safar' }]} />
                            </div>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                                More than just a travel agency. We are your neighbours, your travel guides, and your safety net in foreign lands.
                            </p>
                            <div className="flex justify-center mt-4">
                                <LastUpdated />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div className="order-2 md:order-1">
                                <img
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Team working together"
                                    className="rounded-2xl shadow-xl"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        Rudraksh Safar started in 2010 with a simple mission: to bring professional, high-quality travel services to the people of Bhilai and Durg.
                                    </p>
                                    <p>
                                        Back then, planning a trip meant trusting vague promises or struggling with confusing websites. We wanted to change that. We opened our doors on GE Road to offer face-to-face planning, honest advice, and a handshake you could trust.
                                    </p>
                                    <p>
                                        Over a decade later, we have sent over 5,000 families on their dream vacations—from the backwaters of Kerala to the skylines of Dubai. But our core promise remains the same: <strong>Local planning, Personal support.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
                            <p className="text-slate-300">The principles that guide every booking we make.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {values.map((item, index) => (
                                <Card key={index} className="bg-white/10 border-white/10 text-white backdrop-blur-sm">
                                    <CardContent className="p-8 text-center">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <item.icon className="w-8 h-8 text-primary-foreground" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-slate-300 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <stat.icon className="w-10 h-10 mx-auto text-primary mb-4" />
                                    <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-muted/30 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6">Come, Meet Us</h2>
                        <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                            We invite you to visit our office for a cup of coffee and a conversation about your next adventure.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="rounded-full shadow-lg" asChild>
                                <a href="https://wa.me/919406182174">Say Hello on WhatsApp</a>
                            </Button>
                        </div>
                    </div>
                </section>

                <Footer />
                <FloatingWhatsApp />
            </main>
        </>
    );
};

export default AboutUs;
