import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin, Plane, Heart, Wallet, Calendar, Sun } from 'lucide-react';
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
        'Contact Rudraksha Safar for customized budget packages',
      ],
    },
  },
  {
    id: 'best-honeymoon-destinations-2025',
    title: 'Best Honeymoon Destinations 2025',
    description: 'Romantic getaways for newlyweds. From Maldives to Manali - find your perfect escape.',
    icon: Heart,
    content: {
      intro: 'Planning your honeymoon? Here are the most romantic destinations for Indian couples in 2025.',
      categories: [
        {
          type: 'International Beach',
          destinations: [
            { name: 'Maldives', highlight: 'Overwater villas, private beaches, underwater dining', budget: '₹80,000 - ₹1,50,000' },
            { name: 'Bali', highlight: 'Temples, rice terraces, private pool villas', budget: '₹65,000 - ₹1,00,000' },
            { name: 'Mauritius', highlight: 'Beaches, water sports, romantic dinners', budget: '₹90,000 - ₹1,30,000' },
          ],
        },
        {
          type: 'International City',
          destinations: [
            { name: 'Paris', highlight: 'Eiffel Tower, romantic cruises, wine country', budget: '₹1,50,000 - ₹2,50,000' },
            { name: 'Switzerland', highlight: 'Alps, scenic trains, chocolate tours', budget: '₹1,80,000 - ₹3,00,000' },
            { name: 'Dubai', highlight: 'Luxury hotels, desert romance, fine dining', budget: '₹70,000 - ₹1,20,000' },
          ],
        },
        {
          type: 'Domestic',
          destinations: [
            { name: 'Maldives of India - Lakshadweep', highlight: 'Crystal clear waters, coral reefs', budget: '₹40,000 - ₹70,000' },
            { name: 'Kashmir', highlight: 'Houseboats, Mughal gardens, snow', budget: '₹35,000 - ₹60,000' },
            { name: 'Kerala Backwaters', highlight: 'Houseboat stay, Ayurveda, beaches', budget: '₹30,000 - ₹50,000' },
            { name: 'Andaman Islands', highlight: 'Beaches, scuba diving, privacy', budget: '₹45,000 - ₹75,000' },
          ],
        },
      ],
    },
  },
  {
    id: 'best-time-to-visit-guide',
    title: 'Best Time to Visit Popular Destinations',
    description: 'Month-by-month guide for planning your perfect vacation.',
    icon: Calendar,
    content: {
      intro: 'Timing your trip right can make or break your vacation. Here\'s when to visit popular destinations.',
      byMonth: [
        { month: 'January', best: 'Goa, Thailand, Maldives, Sri Lanka, Rann of Kutch', avoid: 'Ladakh, Spiti, Kashmir (cold)' },
        { month: 'February', best: 'Dubai, Andaman, Jaisalmer, Vietnam, Goa', avoid: 'Ladakh, Himalayas' },
        { month: 'March', best: 'Nepal, Kerala, Rajasthan, North India', avoid: 'South India (getting hot)' },
        { month: 'April', best: 'Kashmir, Europe, Bhutan, Hill stations', avoid: 'Rajasthan, South India, Goa' },
        { month: 'May', best: 'Ladakh opens, Manali, Shimla, Europe, Bali', avoid: 'Plains of India (very hot)' },
        { month: 'June', best: 'Ladakh, Spiti, Europe, Bali, Switzerland', avoid: 'Most of India (monsoon begins)' },
        { month: 'July-August', best: 'Ladakh, Spiti, Valley of Flowers, Europe', avoid: 'Coastal areas, beaches' },
        { month: 'September', best: 'Ladakh (last month), Kerala, Northeast', avoid: 'Goa (monsoon)' },
        { month: 'October', best: 'Dussehra destinations, Goa opens, Dubai, Thailand', avoid: 'Ladakh closes' },
        { month: 'November', best: 'Goa, Rajasthan, Dubai, Maldives, Thailand', avoid: 'Nothing major' },
        { month: 'December', best: 'Goa (peak), Thailand, Bali, Kerala, New Year destinations', avoid: 'Cold hill stations (unless you want snow)' },
      ],
    },
  },
  {
    id: 'domestic-trips-under-20000',
    title: 'Best Domestic Trips Under ₹20,000',
    description: 'Budget-friendly destinations within India. Weekend getaways and short trips.',
    icon: MapPin,
    content: {
      intro: 'You don\'t need a big budget to explore incredible India. These trips cost under ₹20,000 including travel, stay, and food.',
      trips: [
        { destination: 'Manali', duration: '4-5 days', budget: '₹9,999 - ₹15,000', highlights: 'Solang Valley, Rohtang, Old Manali, snow activities' },
        { destination: 'Goa', duration: '3-4 days', budget: '₹11,999 - ₹18,000', highlights: 'Beaches, nightlife, water sports, churches' },
        { destination: 'Rishikesh-Haridwar', duration: '3 days', budget: '₹8,000 - ₹12,000', highlights: 'Ganga aarti, rafting, yoga, temples' },
        { destination: 'Udaipur', duration: '3-4 days', budget: '₹10,000 - ₹16,000', highlights: 'Lakes, palaces, romantic vibes, heritage' },
        { destination: 'Coorg', duration: '3 days', budget: '₹12,000 - ₹18,000', highlights: 'Coffee plantations, waterfalls, trekking' },
        { destination: 'Jaipur', duration: '3 days', budget: '₹9,000 - ₹14,000', highlights: 'Forts, palaces, shopping, culture' },
        { destination: 'Ooty', duration: '3-4 days', budget: '₹10,000 - ₹15,000', highlights: 'Tea gardens, toy train, botanical gardens' },
        { destination: 'Amritsar', duration: '2-3 days', budget: '₹7,000 - ₹12,000', highlights: 'Golden Temple, Wagah Border, food' },
      ],
      bookingTip: 'Contact Rudraksha Safar at +91-9229150311 for customized packages with best rates from Bhilai.',
    },
  },
];

// Structured data for guide articles
const generateGuideSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Travel Guides by Rudraksh Safar",
  "description": "Expert travel guides for domestic and international destinations from Bhilai, Chhattisgarh",
  "itemListElement": guides.map((guide, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Article",
      "name": guide.title,
      "description": guide.description,
      "url": `https://rudrakshsafar/guides/${guide.id}`,
      "author": {
        "@type": "Organization",
        "name": "Rudraksha Safar"
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
        <title>Travel Guides 2025 | Best Destinations from India |  Travels</title>
        <meta name="description" content="Expert travel guides for 2025. Best international destinations from India, budget trips under ₹50,000, honeymoon ideas, best time to visit guide. Free advice from Bhilai's top travel agency." />
        <meta name="keywords" content="travel guide India, best destinations 2025, cheap international trips, honeymoon destinations, best time to visit, travel tips, Rudraksh Safar" />
        <link rel="canonical" href="https://rudrakshsafar.com/guides" />
        <script type="application/ld+json">{JSON.stringify(generateGuideSchema())}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/10 to-background py-20 md:py-28">
        <div className="container text-center">
          <AnimatedSection animation="fade-up">
            <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              Expert Travel Advice
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Travel Guides 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Free travel planning resources from Bhilai's trusted travel experts. 
              Budget tips, best destinations, seasonal guides, and more.
            </p>
            <p className="text-sm text-muted-foreground">
              Updated for 2025 | By Rudraksha Safar, Bhilai
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <AnimatedSection key={guide.id} animation="fade-up" delay={index * 100}>
                <article className="glass-card h-full flex flex-col overflow-hidden group hover:shadow-elevated transition-all duration-300">
                  <div className="p-6 flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <guide.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {guide.description}
                    </p>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <button
                      onClick={() => handleWhatsApp(guide.title)}
                      className="inline-flex items-center gap-2 text-secondary font-medium text-sm hover:underline"
                    >
                      Get Expert Advice
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guide Content - Best Destinations */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
                Best International Destinations from India 2025
              </h2>
              <p className="text-muted-foreground text-center mb-10">
                {guides[0].content.intro}
              </p>

              <div className="space-y-4">
                {guides[0].content.destinations.map((dest, i) => (
                  <div key={i} className="glass-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{i + 1}. {dest.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{dest.why}</p>
                        <p className="text-sm font-medium text-secondary">Budget: {dest.budget}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link to="/international-packages" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-base">
                  View International Packages
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Budget Trips Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
                Domestic Trips Under ₹20,000
              </h2>
              <p className="text-muted-foreground text-center mb-10">
                {guides[4].content.intro}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {guides[4].content.trips.map((trip, i) => (
                  <div key={i} className="glass-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">{trip.destination}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{trip.duration} | {trip.budget}</p>
                    <p className="text-sm text-foreground">{trip.highlights}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link to="/domestic-packages" className="btn-ocean inline-flex items-center gap-2 px-8 py-4 rounded-full text-base">
                  View Domestic Packages
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary/20 to-primary/20">
        <div className="container text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Need Personalized Travel Advice?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our travel experts at Rudraksha Safar, Bhilai are here to help you plan the perfect trip.
              Free consultation, no obligations.
            </p>
            <button
              onClick={() => handleWhatsApp('Travel Planning')}
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-full text-base"
            >
              Chat with Travel Expert
              <ArrowRight className="w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TravelGuides;
