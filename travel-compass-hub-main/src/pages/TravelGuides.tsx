import { Helmet } from 'react-helmet-async';

import { ArrowRight, Globe, MapPin, Heart, Wallet, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';

const PHONE_NUMBER = '919229150311';

// Guide articles data
const guides = [
  {
    id: 'best-international-destinations-from-india',
    title: 'Best International Destinations from India 2025',
    description: 'Top 10 countries Indians are traveling to this year. Budget-friendly to luxury options.',
    icon: Globe,
    content: {
      intro: 'India has become one of the largest outbound travel markets. Here are the best international destinations for Indian travelers in 2025.',
      destinations: [
        { name: 'Dubai, UAE', why: 'No visa hassles (on arrival), 4-5 hour flight, Indian food available, shopping paradise', budget: '₹50,000 - ₹80,000 for 5 days' },
        { name: 'Thailand', why: 'Visa on arrival, affordable, beautiful beaches, rich culture', budget: '₹35,000 - ₹60,000 for 6 days' },
        { name: 'Singapore', why: 'Clean, safe, family-friendly, Universal Studios, easy visa', budget: '₹60,000 - ₹90,000 for 5 days' },
        { name: 'Bali, Indonesia', why: 'Free visa, temples, beaches, affordable luxury', budget: '₹55,000 - ₹80,000 for 6 days' },
        { name: 'Maldives', why: 'Visa on arrival, honeymoon paradise, direct flights', budget: '₹80,000 - ₹1,50,000 for 4 days' },
        { name: 'Sri Lanka', why: 'E-visa, similar culture, affordable, temples & beaches', budget: '₹30,000 - ₹50,000 for 5 days' },
        { name: 'Nepal', why: 'No visa needed, Himalayas, pilgrimage, budget-friendly', budget: '₹20,000 - ₹35,000 for 6 days' },
        { name: 'Malaysia', why: 'Easy e-visa, Petronas Towers, beaches, halal food', budget: '₹50,000 - ₹75,000 for 6 days' },
        { name: 'Vietnam', why: 'E-visa, Ha Long Bay, Hanoi, affordable food', budget: '₹45,000 - ₹70,000 for 7 days' },
        { name: 'Bhutan', why: 'Permit required but easy, peaceful, Buddhist culture', budget: '₹60,000 - ₹90,000 for 5 days' },
      ],
    },
  },
  {
    id: 'cheapest-international-trips-under-50000',
    title: 'International Trips Under ₹50,000 from India',
    description: 'Complete guide to budget international travel. Includes flights, stay, and sightseeing.',
    icon: Wallet,
    content: {
      intro: 'Yes, you can travel internationally for under ₹50,000! Here are destinations that won\'t break the bank.',
      destinations: [
        { name: 'Nepal (Kathmandu + Pokhara)', budget: '₹25,000 - ₹35,000', duration: '6-7 days', includes: 'Flights, 3-star hotels, all transfers, sightseeing' },
        { name: 'Thailand (Bangkok + Pattaya)', budget: '₹40,000 - ₹50,000', duration: '5-6 days', includes: 'Flights, hotels, island tour, floating market' },
        { name: 'Sri Lanka (Colombo + Kandy)', budget: '₹35,000 - ₹45,000', duration: '5 days', includes: 'Flights, hotels, Sigiriya, tea plantation' },
        { name: 'Bhutan (Thimphu + Paro)', budget: '₹45,000 - ₹55,000', duration: '4-5 days', includes: 'Everything included as per Bhutan regulations' },
        { name: 'Vietnam (Hanoi + Ha Long)', budget: '₹40,000 - ₹50,000', duration: '5 days', includes: 'Flights, hotels, cruise, city tour' },
      ],
      tips: [
        'Book 2-3 months in advance for best flight prices',
        'Travel during off-season (May-September for most)',
        'Choose visa-on-arrival countries to save on visa fees',
        'Contact Rudraksh Safar for customized budget packages',
      ],
    },
  },
  {
    id: 'best-honeymoon-destinations-2025',
    title: 'Best Honeymoon Destinations 2025',
    description: 'Romantic getaways for newlyweds. From Maldives to Manali.',
    icon: Heart,
    content: {
      intro: 'Coming soon...',
      destinations: [],
    },
  },
  {
    id: 'best-time-to-visit-guide',
    title: 'Best Time to Visit Popular Destinations',
    description: 'Month-by-month guide for planning your perfect vacation.',
    icon: Calendar,
    content: {
      intro: 'Coming soon...',
      destinations: [],
    },
  },
  {
    id: 'domestic-trips-under-20000',
    title: 'Best Domestic Trips Under ₹20,000',
    description: 'Budget-friendly destinations within India.',
    icon: MapPin,
    content: {
      intro: 'Coming soon...',
      destinations: [],
    },
  },
];

// Structured data
const generateGuideSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Travel Guides by Rudraksh Safar",
  "description": "Expert travel guides for domestic and international destinations from Bhilai",
  "itemListElement": guides.map((guide, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Article",
      "name": guide.title,
      "description": guide.description,
      "url": `https://rudrakshsafar.com/guides/${guide.id}`,
      "author": {
        "@type": "Organization",
        "name": "Rudraksh Safar"
      }
    }
  }))
});

const TravelGuides = () => {
  const handleWhatsApp = (topic: string) => {
    const message = `Hi! I read your guide on "${topic}" and would like to know more about booking a trip.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Travel Guides 2026 | Best Destinations from India | Rudraksh Safar</title>
        <meta name="description" content="Expert travel guides for 2026. Best international destinations, budget trips, honeymoon ideas, best time to visit guide." />
        <link rel="canonical" href="https://rudrakshsafar.com/guides" />
        <script type="application/ld+json">{JSON.stringify(generateGuideSchema())}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold">Travel Guides 2026</h1>
      </section>

      {/* GUIDES GRID */}
      <section className="py-16">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <AnimatedSection key={guide.id} animation="fade-up" delay={index * 100}>
              <article className="glass-card p-6 flex flex-col">
                <guide.icon className="w-8 h-8 text-secondary mb-4" />
                <h2 className="font-bold text-xl mb-2">{guide.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                <button
                  onClick={() => handleWhatsApp(guide.title)}
                  className="text-secondary inline-flex items-center gap-2"
                >
                  Get Expert Advice <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TravelGuides;
