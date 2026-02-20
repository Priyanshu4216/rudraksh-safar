import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, CheckCircle, Users, Shield, Award, MessageCircle, FileCheck, Plane, ArrowRight, Sun, Snowflake, Mountain, Palmtree, BrainCircuit, HeartHandshake, Globe, Bus, Train, Coffee, Landmark, Star, IndianRupee } from 'lucide-react';
import { motion } from 'framer-motion';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import CustomerGallery from '@/components/CustomerGallery';
import TrustBadges from '@/components/TrustBadges';
import LocalCoverage from '@/components/LocalCoverage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    "@id": "https://rudrakshsafar.com/#travelagency",
    "name": "Rudraksh Safar - Best Travel Agent in Bhilai",
    "url": "https://rudrakshsafar.com/travel-agent-bhilai",
    "telephone": "+919406182174",
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
    "hasMap": "https://maps.app.goo.gl/rudrakshsafar",
    "knowsAbout": [
      "Domestic Tour Packages",
      "International Holiday Packages",
      "Visa Assistance",
      "Flight Booking",
      "Train Ticket Booking",
      "Passport Services"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Bhilai" },
      { "@type": "Place", "name": "Supela, Bhilai" },
      { "@type": "Place", "name": "Smriti Nagar, Bhilai" },
      { "@type": "Place", "name": "Power House, Bhilai" },
      { "@type": "Place", "name": "Nehru Nagar, Bhilai" },
      { "@type": "Place", "name": "Risali, Bhilai" },
      { "@type": "Place", "name": "Charoda, Bhilai" },
      { "@type": "Place", "name": "Hudco, Bhilai" },
      { "@type": "AdministrativeArea", "name": "Durg" },
      { "@type": "AdministrativeArea", "name": "Raipur" }
    ],
    "sameAs": [
      "https://www.facebook.com/rudrakshsafar",
      "https://www.instagram.com/rudrakshsafar",
      "https://www.youtube.com/@rudrakshsafar"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rahul Kumar"
        },
        "datePublished": "2025-11-15",
        "reviewBody": "Best travel agent in Bhilai. Our Kerala trip was perfectly planned.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Singh"
        },
        "datePublished": "2025-12-10",
        "reviewBody": "Excellent service for Dubai Visa. Got it in 3 days.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Travel Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visa Assistance in Bhilai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flight Booking from Raipur"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Passport Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tour Packages from Bhilai"
          }
        }
      ]
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Travel Agent in Bhilai",
    "description": "Visit Rudraksh Safar - Bhilai's most trusted travel agency.",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-title", ".tldr-summary"]
    },
    "author": {
      "@type": "Person",
      "name": "Rudraksh Safar Team",
      "worksFor": {
        "@type": "Organization",
        "name": "Rudraksh Safar"
      }
    },
    "breadcrumb": {
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
          "name": "Travel Agent Bhilai",
          "item": "https://rudrakshsafar.com/travel-agent-bhilai"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "@id": "https://rudrakshsafar.com/travel-agent-bhilai#faq-near-me",
        "name": "Is there a travel agent near me in Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Rudraksh Safar is a top-rated travel agent located on GE Road, Bhilai 3 (Near SBI). We serve clients from Supela, Smriti Nagar, Durg, and Raipur with personalized tour packages and booking assistance."
        }
      },
      {
        "@type": "Question",
        "@id": "https://rudrakshsafar.com/travel-agent-bhilai#faq-best-agency",
        "name": "Which is the best travel agency in Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rudraksh Safar is rated as one of the best travel agencies in Bhilai due to our 10+ years of experience, 5000+ happy customers involved in Chardham Yatra and International tours, and our transparent pricing with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "@id": "https://rudrakshsafar.com/travel-agent-bhilai#faq-local-vs-online",
        "name": "Why should I choose a local travel agent instead of online portals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you book with us, you get accountability. Online portals offer chatbots; we offer a personal mobile number. If a problem arises, we solve it instantly. Plus, we accept flexible payments including cash at our Bhilai office."
        }
      },
      {
        "@type": "Question",
        "@id": "https://rudrakshsafar.com/travel-agent-bhilai#faq-visa",
        "name": "Do you provide visa assistance in Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are expert visa consultants in Bhilai. We handle tourist and business visas for Dubai, Thailand, Singapore, Schengen, and more with a 99% success rate."
        }
      },
      {
        "@type": "Question",
        "@id": "https://rudrakshsafar.com/travel-agent-bhilai#faq-packages",
        "name": "What are the popular tour packages from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our most popular packages from Bhilai include Goa (with flight/train), Kashmir, Kerala, Chardham Yatra, and international trips to Thailand and Dubai. We customize these starting from Raipur Airport or Durg Railway Station."
        }
      }
    ]
  };

  const services = [
    { icon: <Plane className="w-10 h-10 text-primary mx-auto" />, title: "Flight Booking", desc: "Domestic & international flights from Raipur (RPR).", link: "/flight-booking-bhilai" },
    { icon: <Clock className="w-10 h-10 text-primary mx-auto" />, title: "Train Tickets", desc: "Confirmed seats & Tatkal assistance from Durg/Raipur.", link: "/train-booking-bhilai" },
    { icon: <FileCheck className="w-10 h-10 text-primary mx-auto" />, title: "Passport Services", desc: "New passport & renewal assistance in Bhilai.", link: "/passport-agent-bhilai" },
    { icon: <CheckCircle className="w-10 h-10 text-primary mx-auto" />, title: "Visa Assistance", desc: "99% success rate for Dubai, Thailand & Schengen.", link: "/visa-agent-bhilai" },
    { icon: <Sun className="w-10 h-10 text-primary mx-auto" />, title: "Holiday Packages", desc: "Customized family & honeymoon tours.", link: "/tour-packages-from-bhilai" },
    { icon: <Bus className="w-10 h-10 text-primary mx-auto" />, title: "Bus Booking", desc: "AC sleeper bus booking to Hyderabad & Pune.", link: "/bus-booking-bhilai" },
  ];

  const popularRoutes = [
    { name: "Bhilai to Goa", type: "Domestic", price: "Starts ₹12,999", icon: Palmtree, desc: "Sun, Sand & Sea. Flight/Train options.", link: "/package/goa" },
    { name: "Bhilai to Kashmir", type: "Domestic", price: "Starts ₹18,999", icon: Snowflake, desc: "Paradise on Earth. Houseboats & Snow.", link: "/package/kashmir" },
    { name: "Bhilai to Manali", type: "Domestic", price: "Starts ₹9,999", icon: Mountain, desc: "Adventure & Snow. Perfect for couples.", link: "/package/shimla-manali" },
    { name: "Bhilai to Thailand", type: "International", price: "Starts ₹24,999", icon: Plane, desc: "Bangkok & Pattaya fun with Visa support.", link: "/thailand-tour-packages" },
    { name: "Bhilai to Dubai", type: "International", price: "Starts ₹35,999", icon: Plane, desc: "Luxury, Shopping & Desert Safari.", link: "/dubai-tour-packages" },
    { name: "Bhilai to Chardham", type: "Pilgrimage", price: "Customized", icon: Mountain, desc: "Sacred Yatra from Chhattisgarh.", link: "/chardham-yatra-package" },
  ];



  const faqs = [
    {
      question: "Is booking through a travel agent cheaper than online?",
      answer: "Often, yes. We have B2B contracts with hotels and airlines that aren't available to the public. Plus, we save you from hidden 'convenience fees' and unexpected cancellation charges that online portals often hide."
    },
    {
      question: "Do you provide support for visas and passports?",
      answer: "Absolutely. We are a full-service travel agency. From filling out complex visa forms for Europe/UK to scheduling your passport appointment in Raipur, we handle the boring paperwork so you can enjoy the trip."
    },
    {
      question: "Can I pay in cash at your office?",
      answer: "Yes! Unlike online websites where you must pay digitally, you can visit our office in Bhilai 3 and pay via Cash, UPI, Cheque, or Card. We offer flexible payment options for your convenience."
    },
    {
      question: "What if I face an issue during my trip (e.g., flight cancelled)?",
      answer: "This is where we shine. Instead of waiting on hold with an airline call center for hours, you call us directly. We will rebook your flight, arrange hotel stays, or sort out transport issues instantly. We act as your safety net."
    }
  ];

  const tocItems = [
    { id: "hero", label: "Overview" },
    { id: "why-local", label: "Why Local Agent?" },
    { id: "meet-expert", label: "Meet Not Bot" },
    { id: "price-guide", label: "Price Guide" },
    { id: "comparison", label: "Online vs Us" },
    { id: "services", label: "Our Services" },
    { id: "popular-packages", label: "Popular Packages" },
    { id: "office-visit", label: "Visit Office" },
    { id: "testimonials", label: "Success Stories" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <>
      <Helmet>
        <title>Best Travel Agent in Bhilai | Rudraksh Safar (Since 2010)</title>
        <meta name="description" content="Visit Rudraksh Safar - Bhilai's most trusted travel agency on GE Road. Expert planning for Chardham, Goa, Dubai & Thailand. Best flights & visa services in Bhilai." />
        <meta name="keywords" content="Best Travel Agent in Bhilai, Travel Agency Bhilai, Tour Operators in Bhilai, Flight Booking Bhilai, Visa Agent Bhilai, Rudraksh Safar Office" />
        <link rel="canonical" href="https://rudrakshsafar.com/travel-agent-bhilai" />
        {/* Open Graph */}
        <meta property="og:title" content="Best Travel Agent in Bhilai | Visit Our Office Today" />
        <meta property="og:description" content="Stop searching online. Come meet the experts at Rudraksh Safar, Bhilai. Custom holidays, honest prices, and local trust." />
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
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      <ReadingProgress />
      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">

        {/* Hero Section */}
        <div id="hero">
          <section className="relative py-20 lg:py-28 bg-gradient-to-br from-indigo-50 via-background to-blue-50 dark:from-indigo-950/20 dark:via-background dark:to-blue-950/20 overflow-hidden">
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
                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 px-4 py-2 rounded-full mb-6 border border-indigo-200 dark:border-indigo-800">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Located on GE Road, Bhilai 3 (Serving Durg & Raipur)</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight hero-title">
                  Best <span className="text-primary">Travel Agent in Bhilai</span> (Rudraksh Safar)
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                  Rudraksh Safar (Since 2010) is Bhiliate's favorite travel partner.
                  We don't just book tickets; we craft experiences. From <strong>flights to passports</strong>, get everything under one roof.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg px-8 h-12 shadow-lg hover:shadow-xl transition-all bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/919406182174?text=Hi, I want to allow trip from Bhilai" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg px-8 h-12 border-primary/20 hover:bg-primary/5">
                    <a href={`tel:+919406182174`}>
                      <Phone className="w-5 h-5 mr-2" /> Call Expert: 94061 82174
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        <TrustBadges />

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 mt-8">

            {/* Sidebar (Sticky) */}
            <aside className="lg:w-1/4 shrink-0 hidden lg:block">
              <TableOfContents items={tocItems} title="On This Page" />
              <div className="mt-8 bg-card p-6 rounded-xl border shadow-sm sticky top-[60vh]">
                <h4 className="font-bold text-lg mb-2">Visit Our Office</h4>
                <p className="text-sm text-muted-foreground mb-4">We are open Mon-Sat, 10 AM to 9 PM.</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#office-visit">Get Directions</a>
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:w-3/4">

              {/* TL;DR */}
              <div className="mb-12">
                <LastUpdated className="justify-start mb-6" />
                <TLDRSection
                  title="Why Bhilai Travelers Trust Us?"
                  summary="We combine the convenience of online booking with the trust of a local office. Whether you are from Supela, Smriti Nagar, or Durg, we are just a phone call or a short drive away. We handle cancellations, refunds, and emergencies personally."
                  areasServed={["Bhilai", "Supela", "Smriti Nagar", "Power House", "Nehru Nagar", "Risali", "Charoda", "Durg", "Raipur"]}
                  className="tldr-summary"
                />
              </div>

              {/* SECTION: Meet The Expert (Trust Signal) */}
              <section id="meet-expert" className="mb-16 scroll-mt-24">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border border-blue-100 dark:border-slate-700 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0 bg-gray-200 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-blue-600">Since 2010</Badge>
                    <h3 className="text-2xl font-bold mb-2">Meet Your Local Travel Expert</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "At Rudraksh Safar, we aren't just an algorithm. We are real people living in Bhilai just like you. I personally oversee every package to ensure my fellow Bhilai residents get the safest, most value-for-money experience. If established trust matters to you, you are in the right place."
                    </p>
                    <div className="font-bold text-lg">- Senior Consultant, Rudraksh Safar Team</div>
                  </div>
                </div>
              </section>

              {/* SECTION: Why Bhilai Prefers Local (Authority) */}
              <section id="why-local" className="mb-16 scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold font-serif mb-4 flex items-center gap-2">
                    <MapPin className="w-8 h-8 text-primary" /> Why Bhilai Travelers Prefer a Local Agent
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Booking online is easy, but having a local expert is safe. Here is why families from <strong>Nehru Nagar, Supela, and Durg</strong> choose Rudraksh Safar.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-md transition-shadow bg-white dark:bg-card border dark:border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <Train className="w-6 h-6 text-orange-500" /> Seamless Connectivity
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      We know the best connections from <strong>Durg Junction</strong> and <strong>Raipur Airport</strong>. We plan your itinerary accounting for actual travel times from Bhilai, so you never miss a flight or train.
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow bg-white dark:bg-card border dark:border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <Coffee className="w-6 h-6 text-brown-500" /> Face-to-Face Trust
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      Online apps don't serve chai! Come to our office in <strong>Bhilai 3</strong>. Sit with us, look at hotel photos, understand the visa process, and pay only when you are satisfied.
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow bg-white dark:bg-card border dark:border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <Landmark className="w-6 h-6 text-green-600" /> Cash & Flexible Payment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      Don't have a credit card? No problem. We accept <strong>Cash, UPI, and Bank Transfers</strong>. You can even pay in installments for select advance bookings.
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow bg-white dark:bg-card border dark:border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <HeartHandshake className="w-6 h-6 text-red-500" /> Crisis Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      If your flight from Raipur is cancelled, you don't call a toll-free number. You call us. We rebook you immediately because we are your local guardians.
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* SECTION: Price Guide (High Value) */}
              <section id="price-guide" className="mb-16 scroll-mt-24">
                <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                    <IndianRupee className="w-7 h-7 text-green-600" /> Bhilai Travel Price Guide (2026)
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Estimated starting prices for popular trips from Bhilai/Raipur. These are all-inclusive tour packages.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-300 dark:border-slate-700 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          <th className="py-3 px-4">Destination</th>
                          <th className="py-3 px-4">Avg. Price (per person)</th>
                          <th className="py-3 px-4">Duration</th>
                          <th className="py-3 px-4 opacity-0 md:opacity-100">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm md:text-base divide-y divide-slate-200 dark:divide-slate-800">
                        <tr>
                          <td className="py-4 px-4 font-medium text-foreground">Goa (Flight)</td>
                          <td className="py-4 px-4 text-green-600 font-bold">₹12,999 - ₹18,999</td>
                          <td className="py-4 px-4">3N/4D</td>
                          <td className="py-4 px-4"><Link to="/package/goa" className="text-primary hover:underline font-medium">View Plan</Link></td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-medium text-foreground">Kashmir (Flight)</td>
                          <td className="py-4 px-4 text-green-600 font-bold">₹18,999 - ₹25,999</td>
                          <td className="py-4 px-4">5N/6D</td>
                          <td className="py-4 px-4"><Link to="/package/kashmir" className="text-primary hover:underline font-medium">View Plan</Link></td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-medium text-foreground">Thailand (Total)</td>
                          <td className="py-4 px-4 text-green-600 font-bold">₹24,999 - ₹35,999</td>
                          <td className="py-4 px-4">4N/5D</td>
                          <td className="py-4 px-4"><Link to="/thailand-tour-packages" className="text-primary hover:underline font-medium">View Plan</Link></td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-medium text-foreground">Dubai (Luxury)</td>
                          <td className="py-4 px-4 text-green-600 font-bold">₹35,999 - ₹55,999</td>
                          <td className="py-4 px-4">5N/6D</td>
                          <td className="py-4 px-4"><Link to="/dubai-tour-packages" className="text-primary hover:underline font-medium">View Plan</Link></td>
                        </tr>
                        <tr>
                          <td className="py-4 px-4 font-medium text-foreground">Chardham Yatra</td>
                          <td className="py-4 px-4 text-green-600 font-bold">₹22,000 - ₹35,000</td>
                          <td className="py-4 px-4">9N/10D</td>
                          <td className="py-4 px-4"><Link to="/chardham-yatra-package" className="text-primary hover:underline font-medium">View Plan</Link></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">* Prices vary based on season and flight rates from Raipur.</p>
                </div>
              </section>

              {/* Existing Sections: Services & Popular Routes */}
              <section id="services" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Our Services for Bhilai Residents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <Link key={index} to={service.link}>
                      <Card className="h-full hover:shadow-lg transition-all border-primary/20 hover:border-primary cursor-pointer">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <div className="mb-4 p-3 bg-primary/10 rounded-full">{service.icon}</div>
                          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground text-sm">{service.desc}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>

              <section id="popular-packages" className="mb-16 scroll-mt-24">
                <div className="flex justify-between items-end mb-6">
                  <h2 className="text-3xl font-bold">Trending Packages</h2>
                  <Link to="/tour-packages-from-bhilai" className="text-primary hover:underline hidden md:block">View All Packages</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {popularRoutes.map((route, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant={route.type === 'International' ? 'default' : 'secondary'}>{route.type}</Badge>
                          <span className="font-bold text-green-600">{route.price}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <route.icon className="w-5 h-5 text-primary" />
                          <h3 className="text-lg font-bold">{route.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{route.desc}</p>
                        <Link to={route.link} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                          View details <ArrowRight className="w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* SECTION: Local Success Stories (Social Proof) */}
              <section id="testimonials" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Local Stories from Bhilai</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-card p-6 rounded-2xl border dark:border-white/10 shadow-sm relative">
                    <div className="absolute top-6 right-6 text-yellow-400 flex"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                    <p className="italic text-muted-foreground mb-4 leading-relaxed">
                      "We stay in <strong>Supela</strong> and were worried about booking our honeymoon online. We visited Rudraksh Safar office, spoke to the team, and booked our <strong>Kerala trip</strong>. Everything from the cab at Kochi airport to the houseboat was perfect."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">RK</div>
                      <div>
                        <h4 className="font-bold text-sm">Rahul & Priya K.</h4>
                        <p className="text-xs text-muted-foreground">Supela, Bhilai</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-card p-6 rounded-2xl border dark:border-white/10 shadow-sm relative">
                    <div className="absolute top-6 right-6 text-yellow-400 flex"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                    <p className="italic text-muted-foreground mb-4 leading-relaxed">
                      "I needed a specialized <strong>Dubai Visa</strong> urgently for a business trip. Their team in Bhilai 3 handled it professionally. No rejections, no stress. Highly recommended for international travel."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">AS</div>
                      <div>
                        <h4 className="font-bold text-sm">Amit Singh</h4>
                        <p className="text-xs text-muted-foreground">Nehru Nagar, Bhilai</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Google vs Local Comparison Table */}
              <section id="comparison" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Online Apps vs. Rudraksh Safar</h2>
                <div className="overflow-x-auto border rounded-xl shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="p-4 border-b">Feature</th>
                        <th className="p-4 border-b text-red-500">Famous Online Apps</th>
                        <th className="p-4 border-b text-green-600 font-bold bg-green-50 dark:bg-green-900/20">Rudraksh Safar (Local)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b font-medium">Customer Support</td>
                        <td className="p-4 border-b text-muted-foreground">Chatbots & Email tickets</td>
                        <td className="p-4 border-b font-medium bg-green-50 dark:bg-green-900/10">Personal Mobile Number</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-medium">Payment Flexibility</td>
                        <td className="p-4 border-b text-muted-foreground">Full upfront (Digital only)</td>
                        <td className="p-4 border-b font-medium bg-green-50 dark:bg-green-900/10">Part Payment + Cash/UPI at Office</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-medium">Emergency Help</td>
                        <td className="p-4 border-b text-muted-foreground">Long wait times</td>
                        <td className="p-4 border-b font-medium bg-green-50 dark:bg-green-900/10">Instant Local Assistance</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-medium">Refunds</td>
                        <td className="p-4 border-b text-muted-foreground">Takes 7-14 days (Credit shell)</td>
                        <td className="p-4 border-b font-medium bg-green-50 dark:bg-green-900/10">Immediate Processing</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b font-medium">Hidden Charges</td>
                        <td className="p-4 border-b text-muted-foreground">Convenience Fees added at end</td>
                        <td className="p-4 border-b font-medium bg-green-50 dark:bg-green-900/10">0% Hidden Fees</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* FAQs Section */}
              <div id="faqs" className="scroll-mt-24">
                <FAQsSection faqs={faqs} />
              </div>

              {/* Internal Linking Block: Explore Our Services */}
              <section className="mb-16 mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Explore Our Bhilai Services</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link to="/visa-agent-bhilai" className="block p-4 bg-muted/50 rounded-xl hover:bg-primary/10 hover:text-primary transition-all text-center">
                    <span className="block font-bold">Visa Agent</span>
                  </Link>
                  <Link to="/passport-agent-bhilai" className="block p-4 bg-muted/50 rounded-xl hover:bg-primary/10 hover:text-primary transition-all text-center">
                    <span className="block font-bold">Passport Agent</span>
                  </Link>
                  <Link to="/flight-booking-bhilai" className="block p-4 bg-muted/50 rounded-xl hover:bg-primary/10 hover:text-primary transition-all text-center">
                    <span className="block font-bold">Flight Booking</span>
                  </Link>
                  <Link to="/tour-packages-from-bhilai" className="block p-4 bg-muted/50 rounded-xl hover:bg-primary/10 hover:text-primary transition-all text-center">
                    <span className="block font-bold">Tour Packages</span>
                  </Link>
                </div>
              </section>

              {/* Regional Authority Links */}
              <section className="mb-16">
                <h3 className="text-xl font-bold mb-4">Serving Nearby Cities</h3>
                <div className="flex gap-4 flex-wrap">
                  <Link to="/travel-agent-durg" className="text-primary hover:underline">Travel Agent in Durg</Link> |
                  <Link to="/travel-agent-raipur" className="text-primary hover:underline">Travel Agent in Raipur</Link> |
                  <Link to="/tour-packages-from-raipur" className="text-primary hover:underline">Tour Packages from Raipur</Link>
                </div>
              </section>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <LocalCoverage city="Bhilai" className="mb-16 rounded-2xl" />
        </div>

        {/* SECTION: Enhanced Office Visit (Trust Center) */}
        <section id="office-visit" className="py-20 bg-muted/30 mt-16 scroll-mt-24 border-y">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">Visit Our Office</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Come, let's plan your trip over Coffee ☕
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We believe real trust is built face-to-face. Visit our main office in Bhilai 3 to meet your trip manager personally.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border">
                      <MapPin className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-muted-foreground">GE Road, In Front of Petrol Pump, Bhilai 3<br />(Near SBI Branch), Chhattisgarh 490021</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border">
                      <Clock className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office Hours</h3>
                      <p className="text-muted-foreground">Mon - Sat: 10:00 AM - 9:00 PM<br />Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <Button asChild className="shadow-lg h-12 px-6">
                    <a href="https://wa.me/919406182174?text=Hi, I want to allow appointment" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" /> Book Appointment
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="h-12 px-6 bg-white hover:bg-gray-50">
                    <a href="https://maps.app.goo.gl/rudrakshsafar" target="_blank" rel="noopener noreferrer">
                      <MapPin className="w-4 h-4 mr-2" /> Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
                <GoogleMapEmbed lazyLoad={true} />
              </div>
            </div>

            {/* Gallery Section */}
            <CustomerGallery className="mt-16" />
          </div>
        </section>

        {/* Internal Links Footer */}
        <RelatedServices mode="local" />

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default TravelAgentBhilai;
