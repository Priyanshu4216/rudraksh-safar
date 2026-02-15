import React from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Sparkles, Utensils, Camera, Map, ArrowRight, Banknote, Plane, HelpCircle, Shield, Clock, CheckCircle, X as UtilityX } from 'lucide-react';
import { allPackages, PHONE_NUMBER } from '@/data/packages';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import { getBestTimeToVisit, getVisaGuidePath, HOME_CITY } from '@/lib/travelMeta';
import RelatedDestinations from '@/components/internal-linking/RelatedDestinations';
import RelatedServices from '@/components/internal-linking/RelatedServices';



// Generate dynamic FAQs based on package type and details
const generatePackageFAQs = (pkg: typeof allPackages[0]) => {
  // If specific AEO FAQs are provided in the package data, use them partially or fully
  // For this implementation, we will prioritize AEO FAQs if they exist, and append generic ones if needed, 
  // but the user request implies replacing them for these specific pages to match the "Answer Engine" strategy.
  // Let's prepend them to ensure they appear first and are picked up by Schema.

  const isDomestic = pkg.type === 'domestic';
  const isSpiritual = pkg.tag === 'Spiritual' || pkg.tag === 'Pilgrimage';
  const isBeach = pkg.tag === 'Beach Escape' || pkg.tag === 'Romantic' || pkg.tag === 'Beach & Culture';
  const isAdventure = pkg.tag === 'Adventure' || pkg.tag === 'Expedition' || pkg.tag === 'Trekking';

  const genericFaqs = [
    {
      question: `What is included in the ${pkg.title} package?`,
      answer: `Our ${pkg.title} package (${pkg.duration}) includes comfortable accommodation, all transfers and sightseeing as per itinerary, experienced tour guide, ${isDomestic ? 'all meals on MAP plan' : 'breakfast at hotels'}, and 24/7 on-trip support. Visit ${pkg.famousPlaces.slice(0, 3).join(', ')} and more iconic destinations.`
    },
    {
      question: `What is the best time to visit ${pkg.location}?`,
      answer: isSpiritual
        ? `The best time for ${pkg.title} is April to June and September to November when weather is pleasant for pilgrimage. Avoid monsoon season (July-August) due to landslides and road closures.`
        : isBeach
          ? `${pkg.location} is best visited from October to March when the weather is pleasant with clear skies, perfect for beach activities and sightseeing. Avoid monsoon months for the best experience.`
          : isAdventure
            ? `The ideal time for ${pkg.title} is May to October when roads are open and weather is suitable for adventure activities. Winter months offer snow experiences but some routes may be closed.`
            : `${pkg.location} is best visited year-round, but October to March offers the most pleasant weather. Check seasonal festivals and local events for a richer experience.`
    },
    {
      question: `How do I book this ${pkg.location} tour from Bhilai?`,
      answer: `Booking is simple! Contact Rudraksh Safar at +91-9406182174 via WhatsApp or call. We serve travelers from Bhilai, Raipur, Durg, and all of Chhattisgarh. We handle all arrangements from your doorstep including pickup, flights, hotels, and complete tour management.`
    },
    {
      question: `Can I customize the ${pkg.title} itinerary?`,
      answer: `Absolutely! All our packages are 100% customizable. Want to add extra days, change hotels, include specific activities like ${pkg.attractions[0]} or ${pkg.attractions[1]}? Just tell us your preferences and we'll create a tailor-made itinerary just for you.`
    },
    {
      question: `What documents are required for this trip?`,
      answer: isDomestic
        ? `For ${pkg.title}, you'll need a valid government ID (Aadhaar/Voter ID/Passport). ${isSpiritual ? 'We also assist with any temple registration or permits required. Medical fitness certificate recommended for high-altitude treks.' : ''}`
        : `For international travel to ${pkg.location}, you need a valid passport (6+ months validity), ${pkg.visa} visa (we provide complete visa assistance), travel insurance, and flight tickets. Our team handles all visa documentation.`
    },
    {
      question: `Is this package suitable for ${isSpiritual ? 'senior citizens' : isAdventure ? 'beginners' : 'families'}?`,
      answer: isSpiritual
        ? `Yes, we offer special arrangements for senior citizens including helicopter services, pony/doli for treks, and comfortable accommodations. Our guides are trained to assist elderly travelers throughout the journey.`
        : isAdventure
          ? `Our ${pkg.title} is designed for all fitness levels. We provide proper acclimatization time, experienced guides, and alternative options for challenging activities. Beginners are welcome!`
          : `Absolutely! ${pkg.title} is perfect for families with customizable activities for all ages. We arrange child-friendly accommodations, safe transport, and engaging activities for the whole family.`
    },
    {
      question: `What is the payment and cancellation policy?`,
      answer: `We require 30% advance to confirm booking. Balance is due 7 days before departure. Free cancellation up to 15 days before travel. 50% refund for cancellations 7-14 days prior. Our transparent pricing has no hidden charges - what you see is what you pay!`
    },
    {
      question: `Why choose Rudraksh Safar for ${pkg.location} tour?`,
      answer: `With 10+ years of experience, 500+ happy travelers, and being Bhilai's trusted travel partner, we offer the best value packages. Our highlights: 24/7 support, local expertise, ${isDomestic ? 'home pickup from Chhattisgarh' : 'complete visa assistance'}, and personalized service. We're not just a travel agency - we're your travel family!`
    }
  ];

  // If AEO FAQs exist, use EXCLUSIVELY specific questions if requested, or prepend them.
  // The user request suggests specific Q&A for SEO. Let's return the AEO FAQs if present, 
  // but maybe keep 1-2 generic ones if they don't overlap. 
  // Simpler approach: If 'aeoFaqs' is present, return it. If not, return generic.
  if ((pkg as any).aeoFaqs) {
    return (pkg as any).aeoFaqs;
  }

  return genericFaqs;
};

interface PackageDetailsProps {
  packageIdOverride?: string;
}

const PackageDetails = ({ packageIdOverride }: PackageDetailsProps = {}) => {
  const params = useParams();
  const packageId = packageIdOverride || params.packageId;
  const pkg = allPackages.find((p) => p.id === packageId);

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [packageId]);

  // Redirect to 404 if package not found
  if (!pkg) {
    return <Navigate to="/404" replace />;
  }

  const handleWhatsApp = () => {
    const message = `Hello Rudraksh Safar, I am interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.price}. Please share the detailed itinerary and inclusions.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Get related packages for internal linking
  const relatedPackages = allPackages
    .filter(p => p && p.id !== pkg.id && p.type === pkg.type)
    .slice(0, 3);

  // Generate clean URL-friendly slug
  const packageSlug = pkg.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  // Enhanced structured data for AI/Search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": `${pkg.title} Tour Package from Bhilai`,
    "description": `Book ${pkg.title} - ${pkg.duration} tour starting at ${pkg.price}. Visit ${pkg.famousPlaces.slice(0, 4).join(', ')}. Includes accommodation, transfers, sightseeing. Best travel agency Bhilai.`,
    "touristType": ["Family", "Couples", "Solo Travelers", "Groups"],
    "url": `https://rudrakshsafar.com/package/${pkg.id}`,
    "image": pkg.image,
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": (pkg as any).structuredItinerary ? (pkg as any).structuredItinerary.length : pkg.itinerary.length,
      "itemListElement": (pkg as any).structuredItinerary
        ? (pkg as any).structuredItinerary.map((day: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": day.day,
          "description": day.points.join('. ')
        }))
        : pkg.itinerary.map((day, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `Day ${index + 1}`,
          "description": day
        }))
    },
    "offers": {
      "@type": "Offer",
      "price": pkg.price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "TravelAgency",
        "name": "Rudraksh Safar",
        "telephone": "+91-9406182174",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "GE Road, In Front of Petrol Pump, Bhilai 3",
          "addressLocality": "Bhilai",
          "addressRegion": "Chhattisgarh",
          "postalCode": "490021",
          "addressCountry": "IN"
        }
      }
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Rudraksh Safar",
      "url": "https://rudrakshsafar.com"
    }
  };

  // Product schema for e-commerce signals
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${pkg.title} Tour Package`,
    "description": `${pkg.duration} ${pkg.title} tour from Bhilai. Visit ${pkg.famousPlaces.slice(0, 3).join(', ')}. Book with Rudraksh Safar.`,
    "image": pkg.gallery,
    "brand": {
      "@type": "Brand",
      "name": "Rudraksh Safar"
    },
    "offers": {
      "@type": "Offer",
      "price": pkg.price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Rudraksh Safar"
      }
    },
  };

  // FAQ Schema for AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": generatePackageFAQs(pkg).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rudrakshsafar.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pkg.type === 'domestic' ? "Domestic Packages" : "International Packages",
        "item": `https://rudrakshsafar.com/${pkg.type}-packages`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pkg.title,
        "item": `https://rudrakshsafar.com/package/${pkg.id}`
      }
    ]
  };

  // Best time and ideal for info
  const bestTime = getBestTimeToVisit({ tag: pkg.tag, location: pkg.location });
  const visaGuidePath = getVisaGuidePath(pkg.location);
  const pickupText = 'Pickup available from Bhilai, Raipur & Durg (Chhattisgarh).';

  const extraSeoKeywords =
    pkg.id === 'phuket'
      ? [
        'cheap Phuket packages from India',
        'family Phuket tour package',
        'Phuket honeymoon itinerary',
        'Phuket trip cost 2026',
        'Phuket tour packages from Bhilai',
        'Phuket tour packages from Raipur',
      ].join(', ')
      : '';

  const getIdealFor = () => {
    if (pkg.tag === 'Spiritual' || pkg.tag === 'Pilgrimage') return 'Families, Senior Citizens, Devotees';
    if (pkg.tag === 'Romantic') return 'Couples, Honeymoon';
    if (pkg.tag === 'Adventure' || pkg.tag === 'Expedition' || pkg.tag === 'Trekking') return 'Adventure Seekers, Youth Groups, Friends';
    if (pkg.tag === 'Beach Escape' || pkg.tag === 'Beach & Culture') return 'Couples, Families, Honeymoon';
    if (pkg.tag === 'Luxury') return 'Couples, Families, Business Travelers';
    return 'Families, Couples, Friends, Solo Travelers';
  };

  const destinationSlug = pkg.id;
  const heroH1 = pkg.id === 'phuket' ? 'Phuket Tour Package from India' : pkg.title;
  const heroIntro =
    pkg.id === 'phuket'
      ? 'Phuket tour package from India with island tours, beaches, and a flexible itinerary.'
      : `Explore ${pkg.location} with a curated ${pkg.duration} itinerary.`;

  const seoTitle = pkg.id === 'phuket' ? 'Phuket Tour Package from India' : `${pkg.title} Tour Package from ${HOME_CITY}`;
  const seoDescription =
    pkg.id === 'phuket'
      ? `Phuket tour package from India (${pkg.duration}) starting ${pkg.price}. Cheapest price guarantee. Best time to visit: ${bestTime}. View itinerary, inclusions, and FAQs. WhatsApp +91-9406182174.`
      : `${pkg.title} tour package from ${HOME_CITY} (${pkg.duration}) starting ${pkg.price}. Lowest price budget deal. ${pickupText} Places: ${pkg.famousPlaces.slice(0, 3).join(', ')}. Best time to visit: ${bestTime}. WhatsApp +91-9406182174.`;

  const budgetKeywords = `cheapest ${pkg.title} package from Bhilai, budget ${pkg.location} trip, low cost ${pkg.title} tour, affordable holiday in ${pkg.location}`;

  return (
    <main className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={`${pkg.title} tour package, ${pkg.title} tour packages from ${HOME_CITY}, ${pkg.location} tour from ${HOME_CITY}, ${pkg.tag} tour package, ${budgetKeywords}, best time to visit ${pkg.location}, ${pkg.famousPlaces.slice(0, 4).join(', ')}${extraSeoKeywords ? `, ${extraSeoKeywords}` : ''}`}
        canonicalUrl={`https://rudrakshsafar.com/package/${pkg.id}`}
        ogImage={pkg.image}
        ogType="product"
        structuredData={structuredData}
      />

      {/* Additional Schema Markup - Product and Breadcrumb only, FAQ removed to prevent duplicate schema errors */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={pkg.image}
          alt={`${pkg.title} tour package in ${pkg.location}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container">
            {pkg.id === 'dubai' ? (
              <Link
                to="/dubai-all-packages"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="drop-shadow-md">View All Dubai Packages</span>
              </Link>
            ) : (
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="drop-shadow-md">Back</span>
              </button>
            )}

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-secondary px-4 py-1.5 rounded-full text-sm font-bold text-secondary-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {pkg.tag}
              </span>
              {pkg.visa && (
                <span className="bg-primary/90 px-4 py-1.5 rounded-full text-sm font-medium text-primary-foreground flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  {pkg.visa}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-lg mb-4">
              {heroH1}
            </h1>
            <p className="max-w-3xl text-white/85 text-base md:text-lg drop-shadow-md">
              {heroIntro}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="drop-shadow-md">{pkg.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="drop-shadow-md">{pkg.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Table of contents (quick jump) */}
              <AnimatedSection animation="fade-up">
                <div className="glass-card p-6">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">On this page</h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'summary', label: 'Summary' },
                      { id: 'places', label: 'Famous places' },
                      { id: 'cuisine', label: 'Food' },
                      { id: 'attractions', label: 'Attractions' },
                      { id: 'itinerary', label: 'Itinerary' },
                      { id: 'gallery', label: 'Gallery' },
                      { id: 'faqs', label: 'FAQs' },
                    ].map((x) => (
                      <a
                        key={x.id}
                        href={`#${x.id}`}
                        className="px-3 py-1.5 rounded-full bg-muted text-foreground text-sm hover:bg-muted/70 transition-colors"
                      >
                        {x.label}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Summary Box - AI Friendly */}
              <AnimatedSection animation="fade-up">
                <div id="summary" className="glass-card p-6 border-l-4 border-secondary scroll-mt-28">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">Quick Summary</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{pkg.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Price Range</p>
                      <p className="font-semibold text-secondary">{pkg.price} onwards</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Best Time</p>
                      <p className="font-semibold text-foreground">{bestTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Ideal For</p>
                      <p className="font-semibold text-foreground">{getIdealFor()}</p>
                    </div>
                  </div>

                  {/* Internal links */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                      <Link to="/best-time-to-visit">Read full Best Time guide</Link>
                    </Button>
                    {visaGuidePath && (
                      <Button asChild variant="outline">
                        <Link to={visaGuidePath} target="_blank" rel="noopener noreferrer">
                          Visa guide for {pkg.location}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Internal links box (destination content system) */}
              <AnimatedSection animation="fade-up" delay={60}>
                <div className="glass-card p-6">
                  <h2 className="text-xl font-serif font-bold text-foreground">Explore {pkg.location}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Helpful guides to match search intent (things to do, best time, trip cost, FAQs).
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      { slug: 'things-to-do', label: 'Things to do' },
                      { slug: 'best-time-to-visit', label: 'Best time' },
                      { slug: 'itinerary-5-days', label: '5-day itinerary' },
                      { slug: 'trip-cost', label: 'Trip cost' },
                      { slug: 'faqs', label: 'FAQs' },
                    ].map((l) => (
                      <Link
                        key={l.slug}
                        to={`/${destinationSlug}/${l.slug}`}
                        className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium hover:bg-secondary/15 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* (Removed) Phuket-specific long-tail content block from top area as requested */}

              {/* Currency Info (International) */}
              {pkg.currency && (
                <AnimatedSection animation="fade-up">
                  <div className="glass-card p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Banknote className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Local Currency</p>
                      <p className="text-lg font-semibold text-foreground">{pkg.currency}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Famous Places */}
              <AnimatedSection animation="fade-up" delay={100}>
                <div id="places" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Famous Places</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.famousPlaces.map((place) => (
                      <span key={place} className="px-4 py-2 rounded-full bg-muted text-foreground text-sm">
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Local Cuisine */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div id="cuisine" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Local Cuisine</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.whatToEat.map((food) => (
                      <span key={food} className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                        {food}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Attractions */}
              <AnimatedSection animation="fade-up" delay={300}>
                <div id="attractions" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Popular Attractions</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.attractions.map((attraction) => (
                      <span key={attraction} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Itinerary */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div id="itinerary" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Map className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Detailed Itinerary</h2>
                  </div>

                  {(pkg as any).structuredItinerary ? (
                    <div className="space-y-4">
                      {((pkg as any).structuredItinerary).map((day: any, i: number) => (
                        <div key={i} className="bg-muted/30 rounded-lg overflow-hidden border border-border/50">
                          <div className="p-4 bg-muted/50 font-medium flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-secondary">
                              {i + 1}
                            </div>
                            <span className="text-foreground">{day.day}</span>
                          </div>
                          <div className="p-4 pt-2">
                            <ul className="space-y-2">
                              {day.points.map((point: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                                  {point.startsWith('•') ? (
                                    <span className="pl-4 font-medium text-foreground">{point}</span>
                                  ) : (
                                    <>
                                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary/60 flex-shrink-0" />
                                      <span>{point}</span>
                                    </>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {pkg.itinerary.map((day, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-secondary">
                            {i + 1}
                          </div>
                          <p className="text-foreground leading-relaxed">{day}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>

              {/* Inclusions & Exclusions */}
              {((pkg as any).inclusions || (pkg as any).exclusions) && (
                <AnimatedSection animation="fade-up" delay={450}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(pkg as any).inclusions && (
                      <div className="glass-card p-6 border-l-4 border-green-500/50">
                        <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Inclusions
                        </h3>
                        <ul className="space-y-2">
                          {(pkg as any).inclusions.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ArrowRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(pkg as any).exclusions && (
                      <div className="glass-card p-6 border-l-4 border-red-500/50">
                        <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
                          <UtilityX className="w-5 h-5 text-red-600" />
                          Exclusions
                        </h3>
                        <ul className="space-y-2">
                          {(pkg as any).exclusions.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              )}

              {/* Gallery */}
              <AnimatedSection animation="fade-up" delay={500}>
                <div id="gallery" className="glass-card p-6 scroll-mt-28">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {pkg.gallery.map((img, i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={img}
                          alt={`${pkg.title} tour package photo ${i + 1} - ${pkg.location}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Package FAQs */}
              <AnimatedSection animation="fade-up" delay={600}>
                <div id="faqs" className="glass-card p-6 scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-bold text-foreground">Frequently Asked Questions</h2>
                      <p className="text-sm text-muted-foreground">Everything you need to know about this trip</p>
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {generatePackageFAQs(pkg).map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="border-border/50">
                        <AccordionTrigger className="text-left text-foreground hover:text-secondary hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </AnimatedSection>

              {/* Why Book With Us */}
              <AnimatedSection animation="fade-up" delay={700}>
                <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-6 text-center">Why Book {pkg.title} With Rudraksh Safar?</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Best Price Guarantee</p>
                        <p className="text-xs text-muted-foreground">Lowest prices in Bhilai</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">100% Safe Travel</p>
                        <p className="text-xs text-muted-foreground">Verified hotels & transport</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">24/7 Support</p>
                        <p className="text-xs text-muted-foreground">Always here for you</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">10+ Years Experience</p>
                        <p className="text-xs text-muted-foreground">500+ happy travelers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Related Packages - Internal Linking */}
              {relatedPackages.length > 0 && (
                <AnimatedSection animation="fade-up" delay={800}>
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                      Explore More {pkg.type === 'domestic' ? 'Domestic' : 'International'} Packages
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      You might also like these {pkg.type === 'domestic' ? 'domestic' : 'international'} tour packages from Bhilai:
                    </p>
                    <div className="grid gap-3">
                      {relatedPackages.map((rPkg) => (
                        <Link
                          key={rPkg.id}
                          to={`/package/${rPkg.id}`}
                          className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted transition-colors group"
                        >
                          <img
                            src={rPkg.image}
                            alt={`${rPkg.title} tour package - ${rPkg.location}`}
                            className="w-16 h-16 rounded-lg object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground group-hover:text-secondary transition-colors">
                              {rPkg.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {rPkg.duration} • {rPkg.price} • Best time: {getBestTimeToVisit({ tag: rPkg.tag, location: rPkg.location })}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <Link
                        to={pkg.type === 'domestic' ? '/domestic-packages' : '/international-packages'}
                        className="text-secondary hover:underline text-sm font-medium flex items-center gap-2"
                      >
                        View all {pkg.type === 'domestic' ? 'Domestic' : 'International'} Packages
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedSection animation="fade-up">
                  <div className="glass-card p-6">
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                      <p className="text-4xl font-serif font-bold text-secondary">{pkg.price}</p>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>

                    {/* (Removed) Local pickup/office block from the page UI as requested */}

                    <Button onClick={handleWhatsApp} className="w-full btn-gold text-base py-6 mb-4">
                      Book Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Click to chat with us on WhatsApp for instant booking
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Components */}
      <RelatedServices serviceType="All" />
      <RelatedDestinations currentRegion={pkg.type === 'international' ? 'International' : 'Domestic'} currentPackageId={pkg.id} />

      <Footer />
      <FloatingWhatsApp />
    </main >
  );
};

export default PackageDetails;