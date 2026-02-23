import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sun, Cloud, Snowflake, Droplets, ArrowRight, Thermometer, Umbrella } from 'lucide-react';
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
    peakSeason: 'Dec-Jan (New Year)',
    avgTemp: '25°C',
    rainfall: 'Very Low',
    icon: Sun,
    link: '/visa/dubai',
  },
  {
    name: 'Thailand',
    flag: '🇹🇭',
    bestMonths: 'November - February',
    avoid: 'May - October',
    weather: 'Cool dry season ideal, monsoon brings heavy rain',
    festivals: 'Songkran (Apr), Loy Krathong (Nov)',
    peakSeason: 'Dec-Feb',
    avgTemp: '28°C',
    rainfall: 'Low in winter',
    icon: Sun,
    link: '/visa/thailand',
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    bestMonths: 'Year-round (Feb-Apr driest)',
    avoid: 'November - January',
    weather: 'Tropical year-round (25-32°C), monsoon in winter',
    festivals: 'Chinese New Year, National Day (Aug)',
    peakSeason: 'Jun-Aug (Summer holidays)',
    avgTemp: '27°C',
    rainfall: 'Moderate',
    icon: Cloud,
    link: '/visa/singapore',
  },
  {
    name: 'Bali',
    flag: '🇮🇩',
    bestMonths: 'April - October',
    avoid: 'December - March',
    weather: 'Dry season perfect for beaches, wet season heavy rain',
    festivals: 'Nyepi (Mar), Galungan (varies)',
    peakSeason: 'Jul-Aug, Dec',
    avgTemp: '27°C',
    rainfall: 'Low in dry season',
    icon: Sun,
    link: '/visa/bali',
  },
  {
    name: 'Maldives',
    flag: '🇲🇻',
    bestMonths: 'November - April',
    avoid: 'June - September',
    weather: 'Dry northeast monsoon ideal, southwest brings rain',
    festivals: 'Eid celebrations, Republic Day (Nov)',
    peakSeason: 'Dec-Mar',
    avgTemp: '29°C',
    rainfall: 'Low in winter',
    icon: Sun,
    link: '/visa/maldives',
  },
  {
    name: 'Europe (Schengen)',
    flag: '🇪🇺',
    bestMonths: 'April - June, September - October',
    avoid: 'July - August (crowded)',
    weather: 'Spring and fall pleasant, summer peak tourist season',
    festivals: 'Oktoberfest (Sep-Oct), Christmas markets (Dec)',
    peakSeason: 'Jun-Aug',
    avgTemp: '15-25°C',
    rainfall: 'Varies',
    icon: Cloud,
    link: '/visa/schengen',
  },
  {
    name: 'Nepal',
    flag: '🇳🇵',
    bestMonths: 'October - November, March - April',
    avoid: 'June - September',
    weather: 'Post-monsoon has clear Himalayan views',
    festivals: 'Dashain (Oct), Holi (Mar)',
    peakSeason: 'Oct-Nov (Trekking)',
    avgTemp: '20°C',
    rainfall: 'High in monsoon',
    icon: Snowflake,
    link: '/visa/nepal',
  },
  {
    name: 'Sri Lanka',
    flag: '🇱🇰',
    bestMonths: 'December - March (West), April - September (East)',
    avoid: 'Varies by coast',
    weather: 'Two monsoons affect different coasts at different times',
    festivals: 'Kandy Esala Perahera (Jul-Aug), Thai Pongal (Jan)',
    peakSeason: 'Dec-Mar (West coast)',
    avgTemp: '28°C',
    rainfall: 'Varies by coast',
    icon: Droplets,
    link: '/visa/sri-lanka',
  },
  {
    name: 'Turkey',
    flag: '🇹🇷',
    bestMonths: 'April - May, September - October',
    avoid: 'July - August',
    weather: 'Spring/fall mild, summer very hot especially inland',
    festivals: 'Ramadan (varies), Republic Day (Oct)',
    peakSeason: 'Jun-Aug',
    avgTemp: '22°C',
    rainfall: 'Low in summer',
    icon: Sun,
    link: '/visa/turkey',
  },
  {
    name: 'Malaysia',
    flag: '🇲🇾',
    bestMonths: 'March - October',
    avoid: 'November - February (East coast)',
    weather: 'Hot and humid year-round, east coast monsoon in winter',
    festivals: 'Thaipusam (Jan-Feb), Hari Raya',
    peakSeason: 'Jun-Aug',
    avgTemp: '28°C',
    rainfall: 'High on east coast in winter',
    icon: Droplets,
    link: '/visa/malaysia',
  },
  {
    name: 'Vietnam',
    flag: '🇻🇳',
    bestMonths: 'February - April (North), Dec - Mar (South)',
    avoid: 'July - November (Typhoons)',
    weather: 'North has distinct seasons, South tropical year-round',
    festivals: 'Tet (Lunar New Year), Mid-Autumn Festival',
    peakSeason: 'Dec-Feb',
    avgTemp: '26°C',
    rainfall: 'High in monsoon',
    icon: Cloud,
    link: null,
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    bestMonths: 'March - May (Cherry Blossoms), Oct - Nov (Autumn)',
    avoid: 'June - July (Rainy season)',
    weather: 'Four distinct seasons, beautiful spring and autumn',
    festivals: 'Cherry Blossom (Mar-Apr), Gion Matsuri (Jul)',
    peakSeason: 'Mar-Apr (Sakura)',
    avgTemp: '16°C',
    rainfall: 'High in June',
    icon: Cloud,
    link: null,
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    bestMonths: 'September - November, March - May',
    avoid: 'December - February (Very hot)',
    weather: 'Seasons reversed, summer Dec-Feb, winter Jun-Aug',
    festivals: 'Melbourne Cup (Nov), Vivid Sydney (May-Jun)',
    peakSeason: 'Dec-Jan (Summer)',
    avgTemp: '22°C',
    rainfall: 'Low in winter',
    icon: Sun,
    link: null,
  },
  {
    name: 'Egypt',
    flag: '🇪🇬',
    bestMonths: 'October - April',
    avoid: 'June - August',
    weather: 'Desert climate, extremely hot in summer',
    festivals: 'Ramadan (varies), Sham El Nessim (Spring)',
    peakSeason: 'Dec-Feb',
    avgTemp: '25°C',
    rainfall: 'Very Low',
    icon: Sun,
    link: null,
  },
  {
    name: 'Mauritius',
    flag: '🇲🇺',
    bestMonths: 'May - December',
    avoid: 'January - March (Cyclones)',
    weather: 'Tropical maritime, warm year-round',
    festivals: 'Diwali (Oct-Nov), Chinese Spring Festival',
    peakSeason: 'Jul-Sep',
    avgTemp: '24°C',
    rainfall: 'High in summer',
    icon: Sun,
    link: null,
  },
  {
    name: 'Greece',
    flag: '🇬🇷',
    bestMonths: 'April - June, September - October',
    avoid: 'July - August (Crowded & Hot)',
    weather: 'Mediterranean climate, hot dry summers',
    festivals: 'Easter (varies), Athens Festival (Jun-Aug)',
    peakSeason: 'Jul-Aug',
    avgTemp: '22°C',
    rainfall: 'Very low in summer',
    icon: Sun,
    link: '/visa/schengen',
  },
];

const monthlyGuide = [
  { month: 'January', destinations: ['Thailand', 'Maldives', 'Sri Lanka', 'Dubai', 'Goa'], tag: 'Winter Escapes' },
  { month: 'February', destinations: ['Vietnam', 'Malaysia', 'Egypt', 'Singapore', 'Kerala'], tag: 'Valentine Special' },
  { month: 'March', destinations: ['Japan', 'Nepal', 'Bhutan', 'Bali', 'Greece'], tag: 'Spring Blooms' },
  { month: 'April', destinations: ['Turkey', 'Europe', 'Japan', 'New Zealand', 'Himachal'], tag: 'Spring Travel' },
  { month: 'May', destinations: ['Europe', 'Australia', 'Ladakh', 'Manali', 'Spiti'], tag: 'Summer Start' },
  { month: 'June', destinations: ['Switzerland', 'Norway', 'Iceland', 'Kenya', 'Zanzibar'], tag: 'Midnight Sun' },
  { month: 'July', destinations: ['Bali', 'Mauritius', 'Seychelles', 'South Africa', 'Morocco'], tag: 'Monsoon Escapes' },
  { month: 'August', destinations: ['Bali', 'Kenya', 'Tanzania', 'Peru', 'Alaska'], tag: 'Wildlife & Adventure' },
  { month: 'September', destinations: ['Greece', 'Croatia', 'Portugal', 'Spain', 'Turkey'], tag: 'Shoulder Season' },
  { month: 'October', destinations: ['Nepal', 'Bhutan', 'Kashmir', 'Japan', 'Morocco'], tag: 'Autumn Colors' },
  { month: 'November', destinations: ['Thailand', 'Maldives', 'Dubai', 'Vietnam', 'Cambodia'], tag: 'Festive Travel' },
  { month: 'December', destinations: ['Goa', 'Thailand', 'Dubai', 'Maldives', 'Australia'], tag: 'Winter Holidays' },
];

const BestTimeToVisit = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeMonth, setActiveMonth] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  // Get current month
  useEffect(() => {
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
    setActiveMonth(currentMonth);
  }, []);

  if (isLoading) {
    return <PageLoader type="season" />;
  }

  return (
    <>
      <SEOHead
        title="Best Time to Visit Popular Destinations 2026 | Travel Season Guide | Rudraksh Safar"
        description="Find the best time to visit Dubai, Thailand, Singapore, Bali, Maldives, Europe & more. Month-wise weather guide, festivals, and travel tips for 16+ destinations."
        keywords="best time to visit Dubai, when to visit Thailand, Bali weather months, travel season guide, peak tourist season, month wise travel destinations"
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
                Plan your trip around the perfect weather, local festivals, and avoid peak tourist seasons for the best experience. Covering 16+ popular destinations.
              </p>
            </div>
          </AnimatedSection>

          {/* Month-wise Quick Guide */}
          <AnimatedSection delay={50}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center">Where to Go Each Month</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {monthlyGuide.map((item) => (
                  <button
                    key={item.month}
                    onClick={() => setActiveMonth(item.month)}
                    className={`p-3 rounded-xl text-center transition-all ${
                      activeMonth === item.month
                        ? 'bg-secondary text-secondary-foreground shadow-lg scale-105'
                        : 'bg-muted/50 hover:bg-muted'
                    }`}
                  >
                    <div className="font-semibold text-sm">{item.month.slice(0, 3)}</div>
                  </button>
                ))}
              </div>
              {activeMonth && (
                <div className="mt-6 p-4 bg-secondary/10 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{activeMonth}</h3>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                      {monthlyGuide.find(m => m.month === activeMonth)?.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {monthlyGuide.find(m => m.month === activeMonth)?.destinations.map((dest) => (
                      <span key={dest} className="bg-background px-3 py-1 rounded-full text-sm font-medium">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Destination Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {destinations.map((dest, index) => (
              <AnimatedSection key={dest.name} delay={100 + index * 30}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{dest.flag}</span>
                      <div>
                        <h3 className="text-xl font-semibold">{dest.name}</h3>
                        <span className="text-xs text-muted-foreground">Peak: {dest.peakSeason}</span>
                      </div>
                    </div>
                    <dest.icon className="w-6 h-6 text-secondary" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-green-500 text-sm font-medium min-w-[80px]">Best Time:</span>
                      <span className="text-sm font-medium">{dest.bestMonths}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 text-sm font-medium min-w-[80px]">Avoid:</span>
                      <span className="text-sm">{dest.avoid}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Thermometer className="w-4 h-4 text-orange-500 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Avg Temp: {dest.avgTemp}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Umbrella className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Rainfall: {dest.rainfall}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500 text-sm font-medium min-w-[80px]">Festivals:</span>
                      <span className="text-sm text-muted-foreground">{dest.festivals}</span>
                    </div>
                  </div>

                  {dest.link && (
                    <Link
                      to={dest.link}
                      className="mt-4 inline-flex items-center gap-2 text-secondary text-sm font-medium hover:underline"
                    >
                      Visa Requirements <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* General Tips */}
          <AnimatedSection delay={600}>
            <div className="bg-secondary/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center">General Travel Timing Tips</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Sun className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Shoulder Season</h4>
                  <p className="text-sm text-muted-foreground">Just before/after peak season offers best balance of weather and prices. You'll find fewer crowds and better deals.</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Book in Advance</h4>
                  <p className="text-sm text-muted-foreground">Peak season travel requires 2-3 months advance booking for best rates. Flights and hotels sell out fast during holidays.</p>
                </div>
                <div className="text-center">
                  <Cloud className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Off-Season Benefits</h4>
                  <p className="text-sm text-muted-foreground">Lower prices, fewer crowds, but check if attractions remain open. Some resorts offer up to 50% discounts.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Internal Links */}
          <AnimatedSection delay={700}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Explore More Travel Resources</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/travel-services/visa-assistance" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  Visa Guide <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/travel-checklist" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  Packing Checklist <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/currency-guide" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  Currency Guide <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/international-packages" className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow">
                  International Packages <ArrowRight className="w-4 h-4" />
                </Link>
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
