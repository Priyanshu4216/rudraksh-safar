import { MapPin, Calendar, ArrowRight, ArrowLeft, Users, Shield, Sparkles, Baby, Home, Clock } from 'lucide-react';
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
const PHONE_NUMBER = '919406182174';

const familyPackages = [
  {
    id: 'shimla-manali-family',
    title: 'Shimla Manali Family Tour',
    location: 'Himachal Pradesh, India',
    duration: '7 Days / 6 Nights',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Kid Friendly',
    features: ['Comfortable Stay', 'Guided Tours', 'Family Activities'],
  },
  {
    id: 'kerala-family',
    title: 'Kerala Family Vacation',
    location: 'Kerala, India',
    duration: '6 Days / 5 Nights',
    price: '₹28,999',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    tag: 'Nature Retreat',
    features: ['Houseboat Stay', 'Wildlife Safari', 'Beach Fun'],
  },
  {
    id: 'rajasthan-family',
    title: 'Rajasthan Heritage Tour',
    location: 'Rajasthan, India',
    duration: '8 Days / 7 Nights',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    tag: 'Cultural Experience',
    features: ['Palace Visits', 'Camel Safari', 'Cultural Shows'],
  },
  {
    id: 'singapore-family',
    title: 'Singapore Family Fun',
    location: 'Singapore',
    duration: '5 Days / 4 Nights',
    price: '₹69,999',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2152&auto=format&fit=crop',
    tag: 'Theme Parks',
    features: ['Universal Studios', 'Sentosa Island', 'Night Safari'],
  },
  {
    id: 'dubai-family',
    title: 'Dubai Family Adventure',
    location: 'Dubai, UAE',
    duration: '6 Days / 5 Nights',
    price: '₹74,999',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    tag: 'Theme Parks',
    features: ['Burj Khalifa', 'Desert Safari', 'Aquarium Visit'],
  },
  {
    id: 'thailand-family',
    title: 'Thailand Family Holiday',
    location: 'Thailand',
    duration: '7 Days / 6 Nights',
    price: '₹22,999',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
    tag: 'Beach & Culture',
    features: ['Beach Activities', 'Temple Tours', 'Island Hopping'],
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof familyPackages[0]; index: number }) => {
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.price}. Please share more details.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link to={`/package/${pkg.id}`} onClick={() => window.scrollTo(0, 0)} className="block">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200/50 dark:border-blue-800/30 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] transition-all duration-500">
          {/* Family badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-blue-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
            <Users className="w-3 h-3" />
            Family Safe
          </div>

          <div className="relative h-56 overflow-hidden">
            <img src={pkg.image} alt={`${pkg.title} tour package - ${pkg.location}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />
            <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg">
              <Baby className="w-3 h-3" />
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
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {pkg.duration}
              </span>
            </div>

            <div className="mb-3">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                Best time: {getBestTimeToVisit({ tag: pkg.tag, location: pkg.location })}
              </span>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {pkg.features.map((feature, idx) => (
                <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-blue-200/50 dark:border-blue-800/30">
              <div>
                <p className="text-xs text-muted-foreground">Per Person from</p>
                <p className="text-xl font-serif font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{pkg.price}</p>
              </div>
              <Button
                onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-5 py-2.5 text-sm rounded-full shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Talk to Expert
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

const FamilyPackages = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Best Family Tour Packages from India",
        "description": "Safe and kid-friendly family vacation packages. Destinations sorted by age suitability (Toddlers, Teens, Seniors).",
        "audience": {
          "@type": "Audience",
          "audienceType": "Families with Children"
        },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": familyPackages.map((pkg, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": pkg.title,
            "url": `https://rudrakshsafar.com/package/${pkg.id}`
          }))
        }
      },
      {
        "@type": "Service",
        "name": "Family Travel Planning",
        "provider": {
          "@type": "TravelAgency",
          "name": "Rudraksh Safar"
        },
        "serviceType": "Family Vacation Planning",
        "offers": {
          "@type": "Offer",
          "description": "Customized itineraries with kid-friendly hotels, private transfers, and relaxed pacing."
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which destinations are best for toddlers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For toddlers (0-4 years), we recommend destinations with short flights and good medical infrastructure like Dubai, Singapore, and Kerala. Avoid high-altitude treks or long road trips."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe to travel with kids internationally?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We only recommend destinations with high safety standards. Our packages include private transfers (no shared buses), 24/7 support, and hotels vetted for hygiene and child-safety."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide child-friendly food?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We select hotels that offer kid-friendly buffets and can accommodate special requests (milk, boiled water). For international trips, we prioritize locations near Indian restaurants."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <PageLoader type="family" />}
      </AnimatePresence>

      <main className="min-h-screen bg-background">
        <SEOHead
          title="Best Family Tour Packages from India (2026) - Safe & Kid-Friendly"
          description="Plan a stress-free family vacation. Expert-curated packages for toddlers, teens & seniors. Verified safe hotels, private transfers & relaxed itineraries. Book now!"
          keywords="family tour packages india, best places to visit with toddlers from india, safe international trips for families, kid friendly vacation packages, family trip planner"
          canonicalUrl="https://rudrakshsafar.com/family-packages"
          structuredData={structuredData}
        />
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-background to-cyan-100/30 dark:from-blue-950/20 dark:to-cyan-950/10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-300/20 rounded-full blur-3xl" />

          <div className="container relative z-10">
            <div className="flex justify-center mb-6">
              <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Family Packages', path: '/family-packages' }]} />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <AnimatedSection animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-blue-500 to-transparent" />
                  <span className="text-blue-600 dark:text-blue-400 font-medium tracking-widest uppercase text-sm flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    For Families
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Best Family Packages <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">From India</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  <strong>Safe, Relaxed, and Kid-Friendly.</strong> We design vacations that parents trust and kids love.
                  Private cabs, vetted hotels, and zero-stress itineraries.
                </p>
                <div className="mt-4">
                  <LastUpdated />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="glass-card p-5 border border-blue-300/30 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/30 dark:to-cyan-950/30 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground">Safe & Trusted</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kid-friendly activities, comfortable stays & 24/7 support
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* HOW TO CHOOSE GUIDE */}
        <section className="py-12 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                  <Baby className="w-3 h-3" /> Parents' Guide
                </span>
                <h2 className="text-3xl font-bold mb-4">How to Choose the Perfect Family Trip?</h2>
                <p className="text-muted-foreground">Every age group needs a different pace. Don't guess—choose what fits your family.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border p-6 rounded-xl hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    👶 With Toddlers (0-4)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">Focus on short flights (&lt; 4 hrs) and ease.</p>
                  <ul className="text-sm space-y-1 font-medium">
                    <li className="text-green-600 dark:text-green-400">✓ Dubai (Stroller friendly)</li>
                    <li className="text-green-600 dark:text-green-400">✓ Singapore (Safe & Clean)</li>
                    <li className="text-green-600 dark:text-green-400">✓ Kerala (Relaxed Resorts)</li>
                  </ul>
                </div>
                <div className="bg-card border p-6 rounded-xl hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-orange-600 dark:text-orange-400">
                    🎒 With School Kids (5-12)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">Needs engagement, pools, and activities.</p>
                  <ul className="text-sm space-y-1 font-medium">
                    <li className="text-green-600 dark:text-green-400">✓ Thailand (Safaris & Sea)</li>
                    <li className="text-green-600 dark:text-green-400">✓ Hong Kong (Disneyland)</li>
                    <li className="text-green-600 dark:text-green-400">✓ Himachal (Snow Fun)</li>
                  </ul>
                </div>
                <div className="bg-card border p-6 rounded-xl hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    🕶️ With Teens (13+)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">Needs adventure, WiFi, and "cool" factors.</p>
                  <ul className="text-sm space-y-1 font-medium">
                    <li className="text-green-600 dark:text-green-400">✓ Bali (IG-worthy & Surf)</li>
                    <li className="text-green-600 dark:text-green-400">✓ Vietnam (Adventure)</li>
                    <li className="text-green-600 dark:text-green-400">✓ Kashmir (Skiing/Treks)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY & COMFORT PROMISE */}
        <section className="py-16 bg-blue-50/50 dark:bg-blue-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">The "No-Anxiety" Family Promise</h2>
                <p className="text-muted-foreground mb-6">
                  We know traveling with kids can be stressful. That's why we don't just book tickets; we ensure peace of mind.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full mt-1"><Shield className="w-4 h-4" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">Hotels Vetted for Hygiene</h4>
                      <p className="text-sm text-muted-foreground">We personally check reviews for cleanliness and kid-friendly food options.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mt-1"><Users className="w-4 h-4" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">Private Transfers Only</h4>
                      <p className="text-sm text-muted-foreground">No waiting for shared buses. Your own decent cab, at your own pace.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full mt-1"><Clock className="w-4 h-4" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">Relaxed Itineraries</h4>
                      <p className="text-sm text-muted-foreground">We don't pack 10 spots in a day. We leave room for naps, pool time, and tantrums.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="relative bg-background border p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold mb-4 text-center">Parents Trust Us ❤️</h3>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg text-sm">
                      "Traveled to Dubai with my 2-year-old. The private cab arranged by Rudraksh Safar was a lifesaver. Driver was super patient!"
                      <br /><span className="text-xs font-bold mt-2 block">- Sneha K., Raipur</span>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg text-sm">
                      "Singapore trip was perfect. The hotel had a great pool for kids and was near the MRT, exactly as promised."
                      <br /><span className="text-xs font-bold mt-2 block">- Amit Verma, Bhilai</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="pb-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {familyPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <FAQsSection
          title="Parents Ask Us: Safety & Planning"
          description="Honest answers to make your family trip stress-free."
          faqs={[
            {
              question: "Is it safe to travel with toddlers to these destinations?",
              answer: "Absolutely. Destinations like Singapore, Dubai, and Kerala have excellent medical infrastructure and hygiene standards. We ensure your hotel is near pharmacies and supermarkets."
            },
            {
              question: "Why should I book a package instead of DIY?",
              answer: "With kids, you can't afford mishaps. We handle the stressful logistics—airport transfers, tickets, and timing—so you can focus on the kids. Plus, we offer 24/7 on-trip support if you need a doctor or help."
            },
            {
              question: "Can we customize the food for children?",
              answer: "Yes. For international trips, we prioritize hotels with Indian breakfast options. We can also guide you to Indian restaurants nearby for lunch/dinner."
            },
            {
              question: "Are the itineraries tiring for seniors or kids?",
              answer: "No. Our 'Family' tagged packages are spaced out. We avoid rush-hour travel and include leisure mornings. We can also add a wheelchair-accessible vehicle if informed in advance."
            }
          ]}
        />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-cyan-100/50 dark:from-blue-950/20 dark:to-cyan-950/20" />
          <div className="container relative z-10 text-center">
            <AnimatedSection animation="scale">
              <div className="glass-card p-10 max-w-2xl mx-auto border border-blue-200/50 dark:border-blue-800/30">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Plan Your Family Vacation</h2>
                <p className="text-muted-foreground mb-6">Let us create a customized family-friendly itinerary for you</p>
                <Button
                  onClick={() => { window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi! I want to plan a safe family trip. Please guide me.")}`, '_blank'); }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all text-lg font-bold"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Talk to a Family Expert
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default FamilyPackages;
