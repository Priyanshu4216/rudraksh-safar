import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, CheckCircle, Users, Shield, Award, MessageCircle, FileCheck, Plane, ArrowRight, Sun, Snowflake, Mountain, Palmtree, BrainCircuit, HeartHandshake, Globe, Bus } from 'lucide-react';
import { motion } from 'framer-motion';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import CustomerGallery from '@/components/CustomerGallery';
import TrustBadges from '@/components/TrustBadges';
import LocalCoverage from '@/components/LocalCoverage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TLDRSection from '@/components/TLDRSection';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import ReadingProgress from '@/components/ui/ReadingProgress';
import TableOfContents from '@/components/content/TableOfContents';
import DecisionHelper from '@/components/content/DecisionHelper';
import RelatedServices from '@/components/RelatedServices';

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
    "areaServed": {
      "@type": "Place",
      "name": ["Bhilai", "Durg", "Supela", "Smriti Nagar", "Power House", "Raipur", "Chhattisgarh"]
    }
  };

  const services = [
    { icon: <Plane className="w-10 h-10 text-primary mx-auto" />, title: "Flight Booking", desc: "Domestic & international flights from Raipur (RPR) at best prices.", link: "/flight-booking-bhilai" },
    { icon: <Clock className="w-10 h-10 text-primary mx-auto" />, title: "Train Tickets", desc: "Confirmed seats & Tatkal assistance for trains from Durg/Raipur.", link: "/train-booking-bhilai" },
    { icon: <FileCheck className="w-10 h-10 text-primary mx-auto" />, title: "Passport Services", desc: "New passport application, renewal, and police verification assistance.", link: "/passport-agent-bhilai" },
    { icon: <CheckCircle className="w-10 h-10 text-primary mx-auto" />, title: "Visa Assistance", desc: "99% success rate for Dubai, Thailand, Singapore & Schengen visas.", link: "/visa-agent-bhilai" },
    { icon: <Sun className="w-10 h-10 text-primary mx-auto" />, title: "Holiday Packages", desc: "Customized family, honeymoon, and group tour packages.", link: "/tour-packages-bhilai" },
    { icon: <Bus className="w-10 h-10 text-primary mx-auto" />, title: "Bus Booking", desc: "Comfortable AC sleeper bus booking to Hyderabad, Pune & Nagpur.", link: "/bus-booking-bhilai" },
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
    { icon: Users, title: "Local Expert Since 2010", desc: "We are the leading Bhilai tour operator and neighbor on GE Road. Trusted by 5000+ local families." },
    { icon: Shield, title: "100% Transparency", desc: "No hidden charges. Your verified local travel agency Bhilai for safe and secure bookings." },
    { icon: Clock, title: "24/7 Trip Support", desc: "Stuck at an airport? We are the best travel agent near me because we pick up calls 24/7." },
    { icon: Award, title: "Best Rate Guarantee", desc: "We challenge you to find a better price for the same hotel & flight from any other tour and travels Bhilai." },
  ];

  const faqs = [
    {
      question: "Is there a travel agent near me in Bhilai?",
      answer: "Yes, Rudraksh Safar is a top-rated travel agent located on GE Road, Bhilai 3. We serve clients from Bhilai, Durg, and Raipur with personalized tour packages and booking assistance."
    },
    {
      question: "Which is the best travel agency in Bhilai?",
      answer: "Rudraksh Safar is considered one of the best travel agencies in Bhilai due to our 10+ years of experience, 5000+ happy customers, and transparent pricing with no hidden fees."
    },
    {
      question: "Why should I choose a local travel agent instead of online portals?",
      answer: "When you book with us, you get accountability. Online portals offer chatbots; we offer a personal mobile number. If a problem arises (like a cancelled flight or hotel issue), we solve it instantly. Plus, we accept flexible payments including cash at our Bhilai office."
    },
    {
      question: "How do I know Rudraksh Safar is genuine and trustworthy?",
      answer: "We have been operating from our physical office on GE Road, Bhilai 3 since 2010. We have served over 5000+ local families. We encourage you to check our Google Reviews or visit our office to meet the team before booking."
    },
    {
      question: "Who will assist me if something goes wrong during my trip?",
      answer: "You will have a dedicated 'Trip Manager' available 24/7 on WhatsApp and Phone. Whether it's a medical emergency, lost passport, or transport delay, you are never alone. We act as your local guardian in a foreign land."
    },
    {
      question: "Do you provide support after booking the tour?",
      answer: "Yes. Our job doesn't end at booking. We manage web check-ins, provide packing lists, handle visa paperwork, and stay connected until you return home safely."
    },
    {
      question: "What makes Rudraksh Safar different from other travel agencies?",
      answer: "We are not just ticket bookers; we are travel consultants. We inspect hotels personally, we know the actual distance between attractions (not just what Google says), and we negotiate exclusive B2B rates to give you luxury for less."
    }
  ];

  const tocItems = [
    { id: "hero", label: "Overview" },
    { id: "why-choose-us", label: "Google vs Local" },
    { id: "services", label: "Our Services" },
    { id: "popular-packages", label: "Popular Packages" },
    { id: "trust-factors", label: "Why Trust Us" },
    { id: "faqs", label: "FAQs" },
    { id: "visit-us", label: "Visit Office" },
  ];

  return (
    <>
      <Helmet>
        <title>Best Travel Agency in Bhilai | Trusted Tour Packages & Agents</title>
        <meta name="description" content="Looking for a trusted travel agent in Bhilai? Rudraksh Safar offers the best tour packages, trusted visa services, and 24/7 support. Book customized & cheap tour packages from Bhilai today." />
        <meta name="keywords" content="best travel agency in Bhilai, trusted travel agent in Bhilai, top rated travel agency in Bhilai, customized tour packages from Bhilai, cheap tour packages from Bhilai, affordable travel agency Bhilai, travel agent near me in Bhilai, travel agent in Durg" />
        <link rel="canonical" href="https://rudrakshsafar.com/travel-agent-bhilai" />
        {/* Open Graph */}
        <meta property="og:title" content="Best Travel Agency in Bhilai | Trusted & Affordable" />
        <meta property="og:description" content="Plan your perfect trip with Rudraksh Safar - Bhilai's most trusted travel agency. Custom tours, Best rates, and Local support." />
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
      </Helmet>

      {/* Phase 13: Reading Progress */}
      <ReadingProgress />

      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">

        {/* Hero Section */}
        <div id="hero">
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
                <div className="flex justify-center mb-6">
                  <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Travel Agent Bhilai', path: '/travel-agent-bhilai' }]} />
                </div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Serving Bhilai, Durg & Raipur Since 2010</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                  Your Trusted <span className="text-primary">Travel Agent in Bhilai</span>
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
        </div>

        <TrustBadges />


        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 mt-8">

            {/* Phase 8: Sidebar (Sticky TOC) */}
            <aside className="lg:w-1/4 shrink-0 hidden lg:block">
              <TableOfContents items={tocItems} title="Page Navigation" />

              {/* Sidebar CTA */}
              <div className="mt-8 bg-indigo-50 dark:bg-indigo-950/20 p-6 rounded-xl border border-indigo-100 sticky top-[60vh]">
                <h4 className="font-bold text-lg mb-2">Need a quick quote?</h4>
                <p className="text-sm text-muted-foreground mb-4">Send us your dates and destination.</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
                </Button>
              </div>
            </aside>

            {/* Main Content Column */}
            <div className="lg:w-3/4">

              {/* TL;DR & Updated Signal */}
              <div className="mb-12">
                <LastUpdated className="justify-start mb-6" />
                <TLDRSection
                  title="TL;DR: Why Choose Rudraksh Safar?"
                  summary="We are a government-registered travel agency located in Bhilai 3, specializing in customized holidays, visa assistance, and flight bookings. Trusted by 5000+ families for safe and transparent travel since 2010."
                  areasServed={["Bhilai", "Durg", "Raipur", "Chhattisgarh"]}
                />
              </div>

              {/* Google vs AI vs Local Agent (Restored) */}
              <section id="why-choose-us" className="mb-16 scroll-mt-24">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold font-serif mb-2">Why choose a local travel agent in Bhilai vs Google/AI?</h2>
                  <p className="text-muted-foreground">Why you still need a human expert for your holiday.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Card 1: Google */}
                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Globe className="w-24 h-24" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">Google Search</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2"><div className="text-green-500">✔</div> Gives 1000s of options.</li>
                      <li className="flex gap-2"><div className="text-red-500">✘</div> Can be overwhelming.</li>
                      <li className="flex gap-2"><div className="text-red-500">✘</div> Reviews can be fake/paid.</li>
                    </ul>
                  </div>
                  {/* Card 2: AI */}
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-xl border border-purple-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <BrainCircuit className="w-24 h-24 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-700">AI (ChatGPT)</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2"><div className="text-green-500">✔</div> Great for rough plans.</li>
                      <li className="flex gap-2"><div className="text-red-500">✘</div> Hallucinates prices.</li>
                      <li className="flex gap-2"><div className="text-red-500">✘</div> Doesn't know local reality.</li>
                    </ul>
                  </div>
                  {/* Card 3: Rudraksh (Winner) */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 relative overflow-hidden group shadow-lg ring-1 ring-blue-200">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <HeartHandshake className="w-24 h-24 text-blue-600" />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Winner</div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-700">Rudraksh Safar</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2"><div className="text-green-500">✔</div> Real-time ground knowledge.</li>
                      <li className="flex gap-2"><div className="text-green-500">✔</div> 24/7 Phone Support (Human).</li>
                      <li className="flex gap-2"><div className="text-green-500">✔</div> We fix issues instantly.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Phase 8: Decision Helper (Added as NEW section) */}
              <div className="mb-16">
                <DecisionHelper
                  title="Quick Check: Are We Right For You?"
                  options={[
                    {
                      label: "The Deal Hunter",
                      description: "You spend 10 hours comparing flight costs to save ₹500. You are okay with zero support.",
                      idealFor: ["Backpackers", "Solo Travelers"],
                      isRecommended: false
                    },
                    {
                      label: "The Peace Seeker",
                      description: "You want a vetted hotel, a safe driver, and someone to call if things go wrong.",
                      idealFor: ["Families", "Honeymooners", "Groups"],
                      isRecommended: true
                    }
                  ]}
                />
              </div>

              {/* Services Section (Restored Full Grid) */}
              <section id="services" className="mb-16 scroll-mt-24">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    What travel services do we offer in Bhilai?
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    As a leading <strong>local travel agency in Bhilai</strong>, we offer Flights, Hotels, Visas, and Insurance under one roof.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <Link key={index} to={service.link}>
                      <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full border border-border">
                        <CardContent className="p-6 text-center bg-background rounded-xl h-full flex flex-col items-center justify-center">
                          <div className="mb-6 p-4 bg-accent/20 rounded-full">{service.icon}</div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Popular Routes Section (Restored Full Grid) */}
              <section id="popular-packages" className="mb-16 scroll-mt-24">
                <div className="text-center mb-16">
                  <Badge variant="secondary" className="mb-4">Trending Now</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Popular Tours from Bhilai
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our most requested packages by travelers from Bhilai & Durg this season.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </section>

              {/* Why Choose Us (Restored Grid) */}
              <section id="trust-factors" className="mb-16 scroll-mt-24">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why do 5000+ travelers trust Rudraksh Safar?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              </section>

              {/* FAQs Section */}
              <div id="faqs" className="scroll-mt-24">
                <FAQsSection faqs={faqs} />
              </div>

            </div>
          </div>
        </div>

        {/* Office Location & CTA (Full Map Restored) */}
        <section id="visit-us" className="py-20 bg-muted/30 mt-16 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Visit Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Where is our office located in Bhilai?
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
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Travel Agent Bhilai Number</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+919406182174" className="hover:text-primary transition-colors">+91 94061 82174</a>
                      </p>
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
              <GoogleMapEmbed lazyLoad={true} />
              <CustomerGallery className="mt-8" />
            </div>
          </div>
        </section>

        {/* Internal Links Footer */}
        <RelatedServices mode="local" />
      </main >

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default TravelAgentBhilai;
