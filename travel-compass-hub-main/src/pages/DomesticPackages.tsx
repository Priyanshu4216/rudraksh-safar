import { MapPin, Calendar, ArrowRight, ArrowLeft, Sparkles, Clock, Globe, ShieldCheck, UserCheck, HelpCircle, Info, ThumbsUp, Banknote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { getBestTimeToVisit } from '@/lib/travelMeta';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import FAQsSection from '@/components/FAQsSection';
import RelatedServices from '@/components/RelatedServices';

const PHONE_NUMBER = '919406182174';

const domesticPackages = [
  {
    id: 'andaman',
    title: 'Andaman Beach Holiday',
    location: 'Andaman Islands',
    duration: '6 Days / 5 Nights',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    tag: 'Beach',
  },
  {
    id: 'kashmir',
    title: 'Kashmir Paradise',
    location: 'Jammu & Kashmir',
    duration: '6 Days / 5 Nights',
    price: '₹22,999',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop',
    tag: 'Romantic',
  },
  {
    id: 'udaipur',
    title: 'Udaipur Royal Escape',
    location: 'Rajasthan',
    duration: '4 Days / 3 Nights',
    price: '₹14,999',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    tag: 'Heritage',
  },
  {
    id: 'shimla-manali',
    title: 'Shimla Manali Adventure',
    location: 'Himachal Pradesh',
    duration: '7 Days / 6 Nights',
    price: '₹15,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Adventure',
  },
  {
    id: 'kodaikanal',
    title: 'Kodaikanal Retreat',
    location: 'Tamil Nadu',
    duration: '4 Days / 3 Nights',
    price: '₹13,999',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
    tag: 'Nature',
  },
  {
    id: 'chardham',
    title: 'Char Dham Yatra',
    location: 'Uttarakhand',
    duration: '12 Days / 11 Nights',
    price: '₹17,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Spiritual',
  },
  {
    id: 'ladakh',
    title: 'Ladakh Expedition',
    location: 'Leh-Ladakh',
    duration: '8 Days / 7 Nights',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?q=80&w=2070&auto=format&fit=crop',
    tag: 'Expedition',
  },
  {
    id: 'goa',
    title: 'Goa Getaway',
    location: 'Goa',
    duration: '4 Days / 3 Nights',
    price: '₹11,999',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop',
    tag: 'Beach',
  },
  {
    id: 'manali',
    title: 'Manali Adventure',
    location: 'Himachal Pradesh',
    duration: '5 Days / 4 Nights',
    price: '₹9,999',
    image: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2070&auto=format&fit=crop',
    tag: 'Adventure',
  },
  {
    id: 'munnar',
    title: 'Munnar Tea Trails',
    location: 'Kerala',
    duration: '4 Days / 3 Nights',
    price: '₹19,999',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    tag: 'Nature',
  },
  {
    id: 'haridwar-rishikesh',
    title: 'Haridwar Rishikesh',
    location: 'Uttarakhand',
    duration: '3 Days / 2 Nights',
    price: '₹9,999',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop',
    tag: 'Spiritual',
  },
  {
    id: 'gangtok-darjeeling',
    title: 'Gangtok Darjeeling',
    location: 'Sikkim & West Bengal',
    duration: '7 Days / 6 Nights',
    price: '₹28,999',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2074&auto=format&fit=crop',
    tag: 'Hill Station',
  },
  {
    id: 'darjeeling',
    title: 'Darjeeling Escape',
    location: 'West Bengal',
    duration: '4 Days / 3 Nights',
    price: '₹16,999',
    image: 'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?q=80&w=2066&auto=format&fit=crop',
    tag: 'Heritage',
  },
  {
    id: 'spiti',
    title: 'Spiti Valley',
    location: 'Himachal Pradesh',
    duration: '9 Days / 8 Nights',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Remote',
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof domesticPackages[0]; index: number }) => {
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.price}. Please share more details.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link to={`/package/${pkg.id}`} onClick={() => window.scrollTo(0, 0)} className="block">
        <div className="group glass-card overflow-hidden hover:shadow-elevated transition-all duration-500">
          <div className="relative h-56 image-zoom">
            <img src={pkg.image} alt={`${pkg.title} tour package - ${pkg.location}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <span className="absolute top-4 left-4 bg-secondary px-3 py-1 rounded-full text-xs font-bold text-secondary-foreground flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {pkg.tag}
            </span>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-serif font-bold text-white drop-shadow-lg mb-1">{pkg.title}</h3>
              <div className="flex items-center gap-1 text-white/90 text-sm">
                <MapPin className="w-4 h-4" />
                <span className="drop-shadow-md">{pkg.location}</span>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center mb-4">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {pkg.duration}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                Best time: {getBestTimeToVisit({ tag: pkg.tag, location: pkg.location })}
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-xl font-serif font-bold text-secondary dark:text-blue-300">{pkg.price}</p>
              </div>
              <Button onClick={(e) => { e.preventDefault(); handleWhatsApp(); }} className="btn-ocean px-5 py-2.5 text-sm">
                Book Now
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

const DomesticPackages = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Domestic Tour Packages in India",
    "description": "Compare best domestic holiday packages in India. Compare destinations like Kashmir, Goa, Kerala, and Char Dham based on budget and travel style.",
    "about": {
      "@type": "Thing",
      "name": "Domestic Tourism in India",
      "description": "Travel packages for popular Indian destinations including pilgrimages, hill stations, and beach holidays."
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Indian Families & Travellers",
      "geographicArea": {
        "@type": "Country",
        "name": "India"
      }
    },
    "numberOfItems": 9,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Char Dham Yatra", "url": "https://rudrakshsafar.com/package/chardham" },
      { "@type": "ListItem", "position": 2, "name": "Ladakh Expedition", "url": "https://rudrakshsafar.com/package/ladakh" },
      { "@type": "ListItem", "position": 3, "name": "Goa Getaway", "url": "https://rudrakshsafar.com/package/goa" },
      { "@type": "ListItem", "position": 4, "name": "Manali Adventure", "url": "https://rudrakshsafar.com/package/manali" },
      { "@type": "ListItem", "position": 5, "name": "Munnar Tea Trails", "url": "https://rudrakshsafar.com/package/munnar" }
    ]
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <PageLoader type="domestic" />}
      </AnimatePresence>

      <main className="min-h-screen bg-background">
        <SEOHead
          title="Domestic Tour Packages in India: Compare Holiday Deals 2025"
          description="Discover the best domestic tour packages in India. Compare budget trips to Goa & Manali vs spiritual journeys like Char Dham. 100% customizable from Bhilai."
          keywords="domestic tour packages India, India holiday packages, family tour packages india, budget domestic trips, pilgrimage tours India, best holiday destinations india"
          canonicalUrl="https://rudrakshsafar.com/domestic-packages"
          structuredData={structuredData}
        />
        <Navbar />
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
          <div className="container relative z-10">
            <div className="flex justify-center mb-6">
              <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Domestic Packages', path: '/domestic-packages' }]} />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-secondary to-transparent" />
                  <span className="text-secondary dark:text-blue-300 font-medium tracking-widest uppercase text-sm">Explore India</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Domestic <span className="text-secondary dark:text-blue-300">Tour Packages in India</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Compare destinations, budgets, and travel styles. Discover the incredible diversity of India with our curated holiday packages.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="glass-card p-5 border border-secondary/30 bg-gradient-to-br from-secondary/10 to-transparent max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-secondary dark:text-blue-300" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground">Tailor-Made Trips</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    100% customizable itineraries crafted just for you
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        <section className="pb-20">
          <div className="container">

            {/* DOMESTIC TRAVEL GUIDE (INTENT DECLARATION) */}
            <AnimatedSection animation="fade-up" delay={100} className="mb-12">
              <div className="glass-card p-8 border-l-4 border-l-secondary bg-secondary/5">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-3 bg-secondary/10 rounded-full shrink-0 hidden md:block">
                    <Globe className="w-6 h-6 text-secondary dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">India Travel Guide</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This page helps you <strong>compare & select</strong> the right Indian holiday destination based on your budget and travel style.
                      Whether you need a <span className="text-foreground font-medium">spiritual pilgrimage</span> (Char Dham),
                      an <span className="text-foreground font-medium">adventure trip</span> (Ladakh, Spiti), or a
                      <span className="text-foreground font-medium">family beach vacation</span> (Goa, Andaman),
                      we provide customizable itineraries with transparent pricing.
                    </p>
                    <LastUpdated />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domesticPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* DECISION SUPPORT: MICRO-ANSWERS */}
        <section className="pb-20 bg-muted/30 pt-16 border-y border-border/50">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold text-center mb-10">Compare Trips by Interest</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Budget & Short Trips */}
              <Card className="bg-background border-border/60">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Banknote className="w-5 h-5 text-green-600" />
                    <CardTitle className="text-lg">Budget & Short Trips</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Best for long weekends (3-5 Days).</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><strong className="text-foreground">Manali:</strong> Starts ₹9,999. Adventure & Snow.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Goa:</strong> Starts ₹11,999. Beaches & Nightlife.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Haridwar:</strong> Starts ₹9,999. Spiritual short trip.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Adventure & Nature */}
              <Card className="bg-background border-border/60">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-orange-600" />
                    <CardTitle className="text-lg">Adventure & Nature</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">For thrill-seekers and nature lovers.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><strong className="text-foreground">Ladakh:</strong> Bike expeditions & high passes.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Spiti Valley:</strong> Remote landscapes & monasteries.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Andaman:</strong> Scuba diving & pristine beaches.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Pilgrimage & Family */}
              <Card className="bg-background border-border/60">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <UserCheck className="w-5 h-5 text-purple-600" />
                    <CardTitle className="text-lg">Pilgrimage & Family</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Safe, comfortable family experiences.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><strong className="text-foreground">Char Dham:</strong> Complete spiritual Yatra.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Kashmir:</strong> Paradise for families & couples.</li>
                    <li className="flex items-center gap-2"><strong className="text-foreground">Kerala:</strong> Relaxing houseboats & tea gardens.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 relative overflow-hidden">
          <div className="container relative z-10 text-center">
            <AnimatedSection animation="scale">
              <div className="glass-card p-10 max-w-2xl mx-auto">
                <Sparkles className="w-12 h-12 text-secondary dark:text-blue-300 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Can't find your dream destination?</h2>
                <p className="text-muted-foreground mb-6">Let us customize a perfect itinerary just for you</p>
                <Button onClick={() => { window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi! I'd like a customized domestic travel package.")}`, '_blank'); }} className="btn-gold">
                  Request Custom Package
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        <FAQsSection
          title="Common Questions About Domestic Travel"
          faqs={[
            {
              question: "What are the most popular domestic tour packages?",
              answer: "Our most popular domestic packages include Kerala (Munnar/Alleppey), Goa (Beaches), Himachal (Manali/Shimla), Kashmir (Srinagar/Gulmarg), and Char Dham Yatra. We also see high demand for Rajasthan and Andaman Islands."
            },
            {
              question: "Do your packages include flights/train tickets?",
              answer: "Yes, we can include flights or train tickets in your package upon request. By default, many of our featured packages are 'Land Packages' (Hotel + Car + Sightseeing) to give you flexibility, but we are a full-service agency and can handle all ticketing."
            },
            {
              question: "Can I customize the itinerary?",
              answer: "Absolutely! 100% of our domestic tours are customizable. You can add days, upgrade hotels, change sightseeing spots, or combine two destinations (e.g., Shimla + Manali). Just let our travel expert know your preferences."
            },
            {
              question: "Is travel insurance included?",
              answer: "Travel insurance is usually optional but highly recommended, especially for adventure trips like Ladakh or high-altitude pilgrimages like Char Dham. We can assist you in purchasing the right policy."
            }
          ]}
        />
        <RelatedServices mode="packages" />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default DomesticPackages;
