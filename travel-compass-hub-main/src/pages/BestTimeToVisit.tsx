import React, { useState, useEffect } from 'react';
import { Calendar, Sun, Cloud, Snowflake, Droplets } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';

const destinations = [
  {
    name: 'Dubai',
    flag: '🇦🇪',
    bestMonths: 'November - March',
    avoid: 'June - August',
    weather: 'Winter is pleasant (20-30°C), summer extremely hot (40°C+)',
    festivals: 'Dubai Shopping Festival (Jan), Dubai Food Festival (Feb)',
    icon: Sun,
  },
  {
    name: 'Thailand',
    flag: '🇹🇭',
    bestMonths: 'November - February',
    avoid: 'May - October',
    weather: 'Cool dry season ideal, monsoon brings heavy rain',
    festivals: 'Songkran (Apr), Loy Krathong (Nov)',
    icon: Sun,
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    bestMonths: 'Year-round (Feb-Apr driest)',
    avoid: 'November - January',
    weather: 'Tropical year-round (25-32°C), monsoon in winter',
    festivals: 'Chinese New Year, National Day (Aug)',
    icon: Cloud,
  },
  {
    name: 'Bali',
    flag: '🇮🇩',
    bestMonths: 'April - October',
    avoid: 'December - March',
    weather: 'Dry season perfect for beaches, wet season heavy rain',
    festivals: 'Nyepi (Mar), Galungan (varies)',
    icon: Sun,
  },
  {
    name: 'Maldives',
    flag: '🇲🇻',
    bestMonths: 'November - April',
    avoid: 'June - September',
    weather: 'Dry northeast monsoon ideal, southwest brings rain',
    festivals: 'Eid celebrations, Republic Day (Nov)',
    icon: Sun,
  },
  {
    name: 'Europe (Schengen)',
    flag: '🇪🇺',
    bestMonths: 'April - June, September - October',
    avoid: 'July - August (crowded)',
    weather: 'Spring and fall pleasant, summer peak tourist season',
    festivals: 'Oktoberfest (Sep-Oct), Christmas markets (Dec)',
    icon: Cloud,
  },
  {
    name: 'Nepal',
    flag: '🇳🇵',
    bestMonths: 'October - November, March - April',
    avoid: 'June - September',
    weather: 'Post-monsoon has clear Himalayan views',
    festivals: 'Dashain (Oct), Holi (Mar)',
    icon: Snowflake,
  },
  {
    name: 'Sri Lanka',
    flag: '🇱🇰',
    bestMonths: 'December - March (West), April - September (East)',
    avoid: 'Varies by coast',
    weather: 'Two monsoons affect different coasts at different times',
    festivals: 'Kandy Esala Perahera (Jul-Aug), Thai Pongal (Jan)',
    icon: Droplets,
  },
  {
    name: 'Turkey',
    flag: '🇹🇷',
    bestMonths: 'April - May, September - October',
    avoid: 'July - August',
    weather: 'Spring/fall mild, summer very hot especially inland',
    festivals: 'Ramadan (varies), Republic Day (Oct)',
    icon: Sun,
  },
  {
    name: 'Malaysia',
    flag: '🇲🇾',
    bestMonths: 'March - October',
    avoid: 'November - February (East coast)',
    weather: 'Hot and humid year-round, east coast monsoon in winter',
    festivals: 'Thaipusam (Jan-Feb), Hari Raya',
    icon: Droplets,
  },
];

const BestTimeToVisit = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="season" />;
  }

  return (
    <>
      <SEOHead
        title="Best Time to Visit Popular Destinations 2026 | Travel Season Guide | Rudraksh Safar"
        description="Find the best time to visit Dubai, Thailand, Singapore, Bali, Maldives, Europe & more. Month-wise weather guide, festivals, and travel tips."
        keywords="best time to visit Dubai, when to visit Thailand, Bali weather months, travel season guide, peak tourist season"
        canonicalUrl="https://rudrakshsafar.com/best-time-to-visit"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                Seasonal Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Best Time to Visit
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Plan your trip around the perfect weather, local festivals, and avoid peak tourist seasons for the best experience.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {destinations.map((dest, index) => (
              <AnimatedSection key={dest.name} delay={100 + index * 50}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{dest.flag}</span>
                      <h3 className="text-xl font-semibold">{dest.name}</h3>
                    </div>
                    <dest.icon className="w-6 h-6 text-secondary" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-green-500 text-sm font-medium min-w-[80px]">Best Time:</span>
                      <span className="text-sm">{dest.bestMonths}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 text-sm font-medium min-w-[80px]">Avoid:</span>
                      <span className="text-sm">{dest.avoid}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500 text-sm font-medium min-w-[80px]">Weather:</span>
                      <span className="text-sm text-muted-foreground">{dest.weather}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500 text-sm font-medium min-w-[80px]">Festivals:</span>
                      <span className="text-sm text-muted-foreground">{dest.festivals}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <div className="mt-12 bg-secondary/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center">General Travel Timing Tips</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Sun className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Shoulder Season</h4>
                  <p className="text-sm text-muted-foreground">Just before/after peak season offers best balance of weather and prices.</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Book in Advance</h4>
                  <p className="text-sm text-muted-foreground">Peak season travel requires 2-3 months advance booking for best rates.</p>
                </div>
                <div className="text-center">
                  <Cloud className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Off-Season Benefits</h4>
                  <p className="text-sm text-muted-foreground">Lower prices, fewer crowds, but check if attractions remain open.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default BestTimeToVisit;
