import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, CheckCircle, Users, Shield, Award, Mail, MessageCircle, FileCheck, Plane, ArrowRight, Sun, Snowflake, Mountain, Palmtree } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const TravelAgentBhilai = () => {
  // LocalBusiness Schema - Optimized for Google Local Pack
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Rudraksh Safar",
    "url": "https://rudrakshsafar.com",
    "telephone": "+91-9406182174",
    "email": "rudrakshsafar@gmail.com",
    "priceRange": "₹₹",
    "image": "https://rudrakshsafar.com/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GE Road, In Front of Petrol Pump, Bhilai 3",
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
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "21:00"
    }],
    "sameAs": [
      "https://www.facebook.com/people/Rudraksh-Safar/pfbid0iAvSgkmW94itABRQ4h3f8kSkkyT16Kn7ocq97wUWVY35GWgj61YjdQNBeLy2nVTtl/",
      "https://www.instagram.com/rudrakshsafar",
      "https://www.youtube.com/@RudrakshSafar"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Bhilai", "Durg", "Supela", "Smriti Nagar", "Power House", "Raipur", "Chhattisgarh"]
    }
  };

  // FAQ Schema for Local Searches
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best travel agent in Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rudraksh Safar is a trusted travel agent in Bhilai offering national and international tour packages with customized travel planning. Located on GE Road, we provide complete travel solutions including visa assistance, hotel booking, and 24/7 trip support."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide tour packages from Bhilai to Goa and Kashmir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in Bhilai to Goa and Bhilai to Kashmir tour packages. We handle flight bookings from Raipur, hotel stays, and local sightseeing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer international tour packages from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Rudraksh Safar provides international tour packages from Bhilai to Thailand, Dubai, Bali, Singapore, Malaysia, and Maldives. We handle visa processing, flight booking, and complete itinerary planning."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer passport assistance services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide end-to-end passport assistance including new applications, renewals, tatkal schemes, and guidance for police verification."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Rudraksh Safar office located in Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rudraksh Safar office is located at GE Road, In Front of Petrol Pump, Bhilai 3, Chhattisgarh – 490021. We are open from 10:00 AM to 9:00 PM every day."
        }
      }
    ]
  };

  const services = [
    { icon: <Plane className="w-10 h-10 text-primary mx-auto" />, title: "Flight Booking", desc: "Domestic & international flights from Raipur (RPR) at best prices." },
    { icon: <Clock className="w-10 h-10 text-primary mx-auto" />, title: "Hotel Reservations", desc: "Budget to luxury accommodations worldwide with meal plans." },
    { icon: <FileCheck className="w-10 h-10 text-primary mx-auto" />, title: "Passport Services", desc: "New passport application, renewal, and police verification assistance." },
    { icon: <CheckCircle className="w-10 h-10 text-primary mx-auto" />, title: "Visa Assistance", desc: "99% success rate for Dubai, Thailand, Singapore & Schengen visas." },
    { icon: <Sun className="w-10 h-10 text-primary mx-auto" />, title: "Holiday Packages", desc: "Customized family, honeymoon, and group tour packages." },
    { icon: <Shield className="w-10 h-10 text-primary mx-auto" />, title: "Travel Insurance", desc: "Comprehensive travel insurance for stress-free international trips." },
  ];

  const popularRoutes = [
    { name: "Bhilai to Goa", type: "Domestic", price: "Starts ₹12,999", icon: Palmtree, desc: "Sun, Sand & Sea. Flight/Train options available.", link: "/domestic-packages" },
    { name: "Bhilai to Kashmir", type: "Domestic", price: "Starts ₹18,999", icon: Snowflake, desc: "Paradise on Earth. Houseboats & Snow activities.", link: "/domestic-packages" },
    { name: "Bhilai to Manali", type: "Domestic", price: "Starts ₹9,999", icon: Mountain, desc: "Adventure & Snow. Perfect for couples & groups.", link: "/domestic-packages" },
    { name: "Bhilai to Thailand", type: "International", price: "Starts ₹24,999", icon: Plane, desc: "Bangkok & Pattaya fun. Visa-on-arrival support.", link: "/visa/thailand" },
    { name: "Bhilai to Dubai", type: "International", price: "Starts ₹35,999", icon: Plane, desc: "Luxury, Shopping & Desert Safari with Visa.", link: "/visa/dubai" },
    { name: "Bhilai to Kedarnath", type: "Pilgrimage", price: "Customized", icon: Mountain, desc: " Sacred Yatra. Helicopter & Trekking options.", link: "/domestic-packages" },
  ];

  const whyChooseUs = [
    { icon: Users, title: "Local Expert Since 2010", desc: "We are not just a website; we are your neighbors on GE Road, Bhilai. Trusted by 5000+ local families." },
    { icon: Shield, title: "100% Transparency", desc: "No hidden charges. We explain every inclusion and exclusion clearly before booking." },
    { icon: Clock, title: "24/7 Trip Support", desc: "Stuck at an airport? Facing an issue at a hotel? We are just one call away, anytime." },
    { icon: Award, title: "Best Rate Guarantee", desc: "We challenge you to find a better price for the same hotel & flight combination." },
  ];

  const faqs = [
    {
      question: "Do you provide tour packages from Bhilai to Goa and Kashmir?",
      answer: "Yes, we specialize in Bhilai to Goa and Bhilai to Kashmir tour packages. We handle flight bookings from Raipur, hotel stays, and local sightseeing. We can also arrange train tickets if booked in advance."
    },
    {
      question: "Which is the best travel agent in Bhilai?",
      answer: "Rudraksh Safar is a trusted travel agent in Bhilai offering national and international tour packages with customized travel planning. Located on GE Road, we provide complete travel solutions including visa assistance, hotel booking, and 24/7 trip support."
    },
    {
      question: "Do you provide international tour packages from Bhilai?",
      answer: "Yes, Rudraksh Safar provides international tour packages from Bhilai including Thailand, Dubai, Bali, Singapore, Malaysia, Maldives, and Europe. We handle visa processing, flight booking, and complete itinerary planning."
    },
    {
      question: "Do you offer passport assistance services?",
      answer: "Yes, we provide end-to-end passport assistance including new applications, renewals, tatkal schemes, and guidance for police verification. We help you with online form filling and appointment scheduling."
    },
    {
      question: "Do you offer home visit services for bookings?",
      answer: "Yes, for senior citizens and large group bookings in Bhilai-Durg, we offer complimentary home visit services. Our travel expert will come to your doorstep to discuss and finalize your travel plans."
    },
    {
      question: "How can I contact Rudraksh Safar for travel booking?",
      answer: "You can contact Rudraksh Safar via WhatsApp at +91 94061 82174, email at rudrakshsafar@gmail.com, or visit our office on GE Road, Bhilai. We offer both office visits and online consultation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Travel Agent in Bhilai | Tour Operator for Goa, Kashmir, Thailand</title>
        <meta name="description" content="Rudraksh Safar: Top-rated travel agent in Bhilai. customized tour packages from Bhilai to Goa, Kashmir, Manali, Thailand & Dubai. Passport & Visa agents." />
        <meta name="keywords" content="travel agent bhilai, tour operator in bhilai, bhilai to goa tour package, bhilai to kashmir package, bhilai to thailand tour, travel agency near me, bhilai to kedarnath" />
        <link rel="canonical" href="https://rudrakshsafar.com/travel-agent-bhilai" />

        {/* Open Graph */}
        <meta property="og:title" content="Best Travel Agent in Bhilai | Rudraksh Safar" />
        <meta property="og:description" content="Trusted travel agent in Bhilai offering national & international tour packages. Office on GE Road, Bhilai." />
        <meta property="og:url" content="https://rudrakshsafar.com/travel-agent-bhilai" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rudrakshsafar.com/og-image.png" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-CT" />
        <meta name="geo.placename" content="Bhilai, Chhattisgarh" />
        <meta name="geo.position" content="21.206181;81.424916" />
        <meta name="ICBM" content="21.206181, 81.424916" />

        {/* Schemas */}
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Serving Bhilai, Durg & Raipur Since 2010</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Your Trusted <span className="text-primary">Travel Partner</span> in Bhilai
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                From <strong>Bhilai to Goa's beaches</strong> to the <strong>snows of Kashmir</strong>, we craft unforgettable journeys.
                Complete travel solutions including Flights, Visas, and Passports, right here in your city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 h-12 shadow-md hover:shadow-lg transition-all">
                  <a href="https://wa.me/919406182174?text=Hi, I need travel assistance" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 h-12">
                  <a href={`tel:+919406182174`}>Call Now: 94061 82174</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Routes Section (SEO Core) */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Trending Now</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Tours form Bhilai
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our most requested packages by travelers from Bhilai & Durg this season.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {popularRoutes.map((route, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <route.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge className={route.type === 'International' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}>
                        {route.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{route.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{route.desc}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t">
                      <span className="font-semibold text-primary">{route.price}</span>
                      <Link to={route.link} className="text-sm font-medium hover:underline flex items-center gap-1">
                        View Details <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                One-Stop Travel Shop in Bhilai
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Why run to different agents? Get Flights, Hotels, Visas, and Insurance all under one roof.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center bg-background rounded-xl h-full flex flex-col items-center justify-center">
                    <div className="mb-6 p-4 bg-accent/20 rounded-full">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why 5000+ Travelers Trust Rudraksh Safar
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center p-6 bg-background border rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Location & CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Visit Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Let's Plan Your Trip Over a Cup of Coffee
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Office</h3>
                      <p className="text-muted-foreground">GE Road, In Front of Petrol Pump, Bhilai 3<br />(Near SBI Branch), Chhattisgarh 490021</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Opening Hours</h3>
                      <p className="text-muted-foreground">Mon - Sat: 10:00 AM - 9:00 PM<br />Sun: By Appointment</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <Button asChild className="shadow-lg">
                    <a href="https://wa.me/919406182174?text=Hi, I want to visit your office" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" /> Book Appointment
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://maps.google.com/?q=Rudraksh+Safar+Bhilai" target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                <iframe
                  src="https://www.google.com/maps?q=21.206181,81.424916&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Rudraksh Safar Office Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Internal Links Footer */}
        <section className="py-12 bg-muted/50 border-t">
          <div className="container mx-auto px-4">
            <h3 className="text-sm font-semibold text-center text-muted-foreground uppercase tracking-wider mb-6">Popular Searches in Bhilai</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/international-packages" className="text-sm bg-background px-3 py-1 rounded-full border hover:border-primary hover:text-primary transition-colors">
                International Tours from Bhilai
              </Link>
              <Link to="/domestic-packages" className="text-sm bg-background px-3 py-1 rounded-full border hover:border-primary hover:text-primary transition-colors">
                Bhilai to Goa Packages
              </Link>
              <Link to="/domestic-packages" className="text-sm bg-background px-3 py-1 rounded-full border hover:border-primary hover:text-primary transition-colors">
                Bhilai to Kashmir Tours
              </Link>
              <Link to="/visa-agent-bhilai" className="text-sm bg-background px-3 py-1 rounded-full border hover:border-primary hover:text-primary transition-colors">
                Visa Consultants in Bhilai
              </Link>
              <Link to="/weekend-getaways-bhilai" className="text-sm bg-background px-3 py-1 rounded-full border hover:border-primary hover:text-primary transition-colors">
                Weekend Trips from Bhilai
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default TravelAgentBhilai;
