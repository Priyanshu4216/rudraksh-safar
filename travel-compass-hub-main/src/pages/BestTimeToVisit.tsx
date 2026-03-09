import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sun, Cloud, Snowflake, Droplets, ArrowRight, Thermometer, Umbrella, Navigation, CloudRain, ThermometerSnowflake, Info, Plane, Backpack, MapPin, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';
import FAQSection from '@/components/seo/FAQSection';

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
    link: '/international/dubai/DubaiMaster',
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
    link: '/destinations/thailand',
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
    link: '/international/singapore',
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
    link: '/international/bali',
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
    link: '/international/maldives',
  },
  {
    name: 'Kashmir',
    flag: '🇮🇳',
    bestMonths: 'March - August',
    avoid: 'December - January (Extreme Cold limit access)',
    weather: 'Spring boasts blooming tulips; Summer offers cool relief',
    festivals: 'Tulip Festival (April), Shikara Festival',
    peakSeason: 'Apr-Jun',
    avgTemp: '15-20°C',
    rainfall: 'Moderate',
    icon: Sun,
    link: '/domestic/kashmir/KashmirMaster',
  },
  {
    name: 'Ladakh',
    flag: '🇮🇳',
    bestMonths: 'June - September',
    avoid: 'November - April (Snow blocks roads)',
    weather: 'Short summers are clear, winters drop to -20°C',
    festivals: 'Hemis Festival (Jun/Jul), Ladakh Festival (Sep)',
    peakSeason: 'Jul-Aug',
    avgTemp: '15°C',
    rainfall: 'Very Low',
    icon: Sun,
    link: '/domestic/ladakh/LadakhMaster',
  },
  {
    name: 'Andaman',
    flag: '🇮🇳',
    bestMonths: 'October - May',
    avoid: 'July - September',
    weather: 'Tropical coastal breezes, monsoon brings heavy storms',
    festivals: 'Island Tourism Festival (Jan)',
    peakSeason: 'Dec-Jan',
    avgTemp: '28°C',
    rainfall: 'Heavy in monsoon',
    icon: Sun,
    link: '/domestic/andaman/AndamanMaster',
  }
];

const monthlyGuide = [
  { month: 'January', destinations: ['Thailand', 'Maldives', 'Sri Lanka', 'Dubai', 'Goa'], tag: 'Winter Escapes' },
  { month: 'February', destinations: ['Vietnam', 'Malaysia', 'Egypt', 'Singapore', 'Kerala'], tag: 'Valentine Special' },
  { month: 'March', destinations: ['Japan', 'Nepal', 'Bhutan', 'Bali', 'Greece'], tag: 'Spring Blooms' },
  { month: 'April', destinations: ['Turkey', 'Europe', 'Japan', 'Kashmir', 'Himachal'], tag: 'Spring Travel' },
  { month: 'May', destinations: ['Europe', 'Australia', 'Ladakh', 'Manali', 'Spiti'], tag: 'Summer Start' },
  { month: 'June', destinations: ['Switzerland', 'Ladakh', 'Iceland', 'Kenya', 'Zanzibar'], tag: 'Midnight Sun' },
  { month: 'July', destinations: ['Bali', 'Mauritius', 'Seychelles', 'Ladakh', 'Morocco'], tag: 'Monsoon Escapes' },
  { month: 'August', destinations: ['Bali', 'Kenya', 'Tanzania', 'Peru', 'Alaska'], tag: 'Wildlife & Adventure' },
  { month: 'September', destinations: ['Greece', 'Croatia', 'Portugal', 'Spain', 'Turkey'], tag: 'Shoulder Season' },
  { month: 'October', destinations: ['Nepal', 'Bhutan', 'Kashmir', 'Japan', 'Morocco'], tag: 'Autumn Colors' },
  { month: 'November', destinations: ['Thailand', 'Maldives', 'Dubai', 'Vietnam', 'Cambodia'], tag: 'Festive Travel' },
  { month: 'December', destinations: ['Goa', 'Thailand', 'Dubai', 'Maldives', 'Australia'], tag: 'Winter Holidays' },
];

const faqs = [
  {
    question: "When is the cheapest time to travel internationally?",
    answer: "The cheapest time to travel internationally is during the shoulder seasons—typically April-May and September-October. During these months, you avoid the summer school holiday rush and the luxury winter holiday premium, resulting in lower flight and hotel prices."
  },
  {
    question: "Is it safe to travel to the Maldives during the monsoon?",
    answer: "Yes, it is safe, but heavy rain can restrict outdoor activities like snorkeling and private island dining. Traveling during the Maldives' wet season (May to October) guarantees massive discounts on water villas, though you should expect short, intense daily showers."
  },
  {
    question: "What is the best time to visit Dubai for shopping?",
    answer: "The absolute best time to visit Dubai for shopping is during January and February when the renowned Dubai Shopping Festival (DSF) takes place. The weather is cool (around 24°C), and malls offer extraordinary discounts and city-wide raffle draws."
  },
  {
    question: "When do the mountain passes open for the Ladakh bike trip?",
    answer: "High-altitude engineering passes like Rohtang La, Baralacha La, and Khardung La typically open in late May or early June, depending on snow clearance. The safest and most popular window for a Ladakh bike expedition spans from mid-June to early September."
  },
  {
    question: "Which destination is best for a honeymoon in May?",
    answer: "For a honeymoon in May, Bali and Mauritius are fantastic international choices as they enter their dry seasons with perfect beach weather. Domestically, Kashmir and Manali provide incredibly romantic, cool-weather retreats away from the intense Indian summer heat."
  },
  {
    question: "When is the cheapest time to visit Thailand?",
    answer: "The cheapest time to visit Thailand from India is during their rainy low season from late May to October. Flights into BKK (Suvarnabhumi Airport) and DMK drop significantly, and luxury resorts in Phuket or Koh Samui slash prices by up to 50%."
  },
  {
    question: "Is December a good time to visit Kashmir?",
    answer: "Yes, December is phenomenal for visiting Kashmir if you want a true winter wonderland experience. Places like Gulmarg receive massive snowfall, perfect for skiing and snowboarding, though you must pack heavy winter gear to survive the sub-zero temperatures."
  },
  {
    question: "What is the best month to visit Singapore?",
    answer: "Singapore is a year-round destination, but February to April offers the driest and most pleasant weather. Traveling in August is also highly recommended to catch the spectacular National Day fireworks over Marina Bay Sands."
  }
];

const BestTimeToVisit = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeMonth, setActiveMonth] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

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
        title="Best Time to Visit Popular Destinations | Monthly Travel Guide"
        description="Find the best time to visit Dubai, Thailand, Singapore, Bali, Maldives, Europe & more. Month-wise weather guide, festivals, and travel tips for all destinations."
        keywords="best time to visit dubai, when to visit thailand, best time to visit bali, best travel season, peak tourist season, shoulder season travel"
        canonicalUrl="https://rudrakshsafar.com/BestTimeToVisit"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />

      <Navbar />

      <main className="pt-24 pb-16 bg-background">
        <div className="container">
          {/* Hero Section */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                Global Travel Seasonal Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                The Ultimate Guide: Best Time to Visit
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Stop guessing the weather. Plan your next domestic or international vacation around perfect climates, vibrant local festivals, and strategic shoulder seasons.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Snippet Definition */}
          <section className="mb-12 max-w-4xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Info className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2 text-foreground">What is the best time to travel internationally?</h2>
                  <p className="text-secondary-foreground leading-relaxed">
                    The best time to travel internationally from India heavily depends on your chosen destination's climate. Generally, the <strong>shoulder seasons (April–May and September–October)</strong> offer the ultimate combination of pleasant weather, fewer crowds at landmarks, and significantly cheaper flight and hotel rates compared to peak winter or summer rush periods.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="py-8 bg-muted/10 border-y mb-12">
            <div className="max-w-3xl mx-auto bg-card rounded-xl border shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                <Navigation className="w-5 h-5 text-primary" />
                Quick Navigation
              </h2>
              <ul className="space-y-2 text-muted-foreground font-medium">
                <li><a href="#interactive-calendar" className="hover:text-primary transition-colors">1. Detailed Month-by-Month Guide</a></li>
                <li><a href="#destination-cards" className="hover:text-primary transition-colors">2. Peak & Low Seasons by Destination</a></li>
                <li><a href="#comparison-table" className="hover:text-primary transition-colors">3. Global Seasons Comparison</a></li>
                <li><a href="#shoulder-season" className="hover:text-primary transition-colors">4. Travel Costs & Budgeting Tips</a></li>
                <li><a href="#monsoon-travel" className="hover:text-primary transition-colors">5. First-Time Visitor Advice</a></li>
                <li><a href="#helpful-guides" className="hover:text-primary transition-colors">6. Helpful Travel Guides</a></li>
                <li><a href="#faqs" className="hover:text-primary transition-colors">7. Seasonal Travel FAQs</a></li>
              </ul>
            </div>
          </section>

          {/* Month-wise Quick Guide */}
          <AnimatedSection delay={50}>
            <div id="interactive-calendar" className="bg-card border border-border rounded-2xl p-6 mb-16 scroll-mt-24 shadow-sm">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-foreground">Month-by-Month Travel Calendar</h2>

              <div className="max-w-4xl mx-auto space-y-6">
                <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                  <h3 className="font-bold text-xl mb-1">January — Winter Escapes & Shopping</h3>
                  <p className="text-muted-foreground">Best for <Link to="/international/dubai/DubaiMaster" className="text-teal-600 hover:underline">Dubai</Link> (Dubai Shopping Festival), <Link to="/international/thailand" className="text-teal-600 hover:underline">Thailand</Link> beaches, and experiencing stunning snowfall in <Link to="/domestic/kashmir/KashmirMaster" className="text-teal-600 hover:underline">Kashmir</Link>.</p>
                </div>

                <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                  <h3 className="font-bold text-xl mb-1">February — Romantic Beach Holidays</h3>
                  <p className="text-muted-foreground">Perfect dry warm weather in the <Link to="/international/maldives" className="text-teal-600 hover:underline">Maldives</Link> and <Link to="/domestic/andaman/AndamanMaster" className="text-teal-600 hover:underline">Andaman Islands</Link>. Ideal for Valentine's getaways before the extreme summer heat arrives.</p>
                </div>

                <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                  <h3 className="font-bold text-xl mb-1">March — Spring Blooms & Culture</h3>
                  <p className="text-muted-foreground">Catch the dramatic Nyepi (Day of Silence) festival in <Link to="/international/bali" className="text-teal-600 hover:underline">Bali</Link>, or witness the beautiful late winter conditions across North India and Nepal.</p>
                </div>

                <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                  <h3 className="font-bold text-xl mb-1">April — Water Festivals & Tulips</h3>
                  <p className="text-muted-foreground">Experience the iconic Songkran Water Festival across Thailand, or visit Srinagar to witness the majestic Tulip Festival blooming.</p>
                </div>

                <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                  <h3 className="font-bold text-xl mb-1">May & June — High Altitude Summer Starts</h3>
                  <p className="text-muted-foreground">The ultimate time for a <Link to="/domestic/ladakh/LadakhMaster" className="text-teal-600 hover:underline">Ladakh road trip</Link> or Himalayan treks as mountain passes clear of snow. <Link to="/international/singapore" className="text-teal-600 hover:underline">Singapore</Link> also enters peak tourist shopping season.</p>
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* Destination Cards */}
          <div id="destination-cards" className="grid md:grid-cols-2 gap-8 mb-16 scroll-mt-24">
            <div className="col-span-full mb-2">
              <h2 className="text-3xl font-bold text-foreground">Destination Climate Profiles</h2>
            </div>
            {destinations.map((dest, index) => (
              <AnimatedSection key={dest.name} delay={100 + index * 30}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-xl transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{dest.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{dest.name}</h3>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Peak: {dest.peakSeason}</span>
                      </div>
                    </div>
                    <dest.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 bg-green-50/50 dark:bg-green-950/20 p-2 rounded">
                      <span className="text-green-600 font-bold min-w-[80px]">Best Time:</span>
                      <span className="font-medium text-foreground">{dest.bestMonths}</span>
                    </div>
                    <div className="flex items-start gap-3 bg-red-50/50 dark:bg-red-950/20 p-2 rounded">
                      <span className="text-red-500 font-bold min-w-[80px]">Avoid:</span>
                      <span className="text-muted-foreground">{dest.avoid}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border/50">
                      <div className="flex items-start gap-2">
                        <Thermometer className="w-5 h-5 text-orange-500 mt-0.5" />
                        <div>
                          <span className="block text-xs text-muted-foreground font-bold uppercase">Avg Temp</span>
                          <span className="text-sm font-medium text-foreground">{dest.avgTemp}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Umbrella className="w-5 h-5 text-blue-500 mt-0.5" />
                        <div>
                          <span className="block text-xs text-muted-foreground font-bold uppercase">Rainfall</span>
                          <span className="text-sm font-medium text-foreground">{dest.rainfall}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {dest.link && (
                    <Link
                      to={dest.link}
                      className="inline-flex w-full items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors mt-4"
                    >
                      View Packages & Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Comparison Table */}
          <section id="comparison-table" className="mb-16 scroll-mt-24 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
              <div className="p-6 bg-muted/50 border-b">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                  <Calendar className="w-6 h-6 text-primary" />
                  Global Seasons Destination Comparison
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted text-muted-foreground text-sm uppercase tracking-wider">
                      <th className="p-4 border-b font-medium">Destination</th>
                      <th className="p-4 border-b font-medium">Best Months</th>
                      <th className="p-4 border-b font-medium">Months to Avoid</th>
                      <th className="p-4 border-b font-medium">Ideal Trip Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-sm">
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-bold"><Link to="/international/dubai/DubaiMaster" className="hover:text-primary">Dubai, UAE</Link></td>
                      <td className="p-4 text-green-600 font-medium">November — March</td>
                      <td className="p-4 text-red-500">June — August</td>
                      <td className="p-4 text-muted-foreground">Luxury, Shopping, Family</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors bg-background">
                      <td className="p-4 font-bold"><Link to="/international/thailand" className="hover:text-primary">Thailand</Link></td>
                      <td className="p-4 text-green-600 font-medium">November — February</td>
                      <td className="p-4 text-red-500">May — October (Monsoon)</td>
                      <td className="p-4 text-muted-foreground">Beaches, Nightlife, Culture</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-bold"><Link to="/international/bali" className="hover:text-primary">Bali, Indonesia</Link></td>
                      <td className="p-4 text-green-600 font-medium">April — October</td>
                      <td className="p-4 text-red-500">December — March</td>
                      <td className="p-4 text-muted-foreground">Honeymoon, Temples, Surf</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors bg-background">
                      <td className="p-4 font-bold"><Link to="/domestic/ladakh/LadakhMaster" className="hover:text-primary">Ladakh, India</Link></td>
                      <td className="p-4 text-green-600 font-medium">June — September</td>
                      <td className="p-4 text-red-500">November — April (Snow)</td>
                      <td className="p-4 text-muted-foreground">Roadtrips, Adventure, Monasteries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Deep Informational SEO Content Section */}
          <section className="py-12 bg-muted/20 border rounded-2xl p-8 mb-16 px-4 md:px-10">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* Shoulder Season Snippet Block & Budget Tips */}
              <div id="shoulder-season" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Travel Costs & Budgeting by Season</h2>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <p className="text-lg text-foreground font-medium">
                    "Shoulder season" refers to the travel period bridging a destination's peak high season and its dead low season. It typically offers the "golden mean"—featuring drastically reduced tourist crowds, and flight/hotel prices that are often 20% to 30% cheaper.
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Timing your trip can save you thousands of rupees. For example, flying into major airport hubs like <strong>DXB (Dubai International)</strong> or <strong>BKK (Suvarnabhumi)</strong> during peak New Year weeks will see immense ticket inflation. Conversely, booking a <Link to="/international-packages" className="text-teal-600 hover:underline">budget international package</Link> during late September guarantees spectacularly lower rates.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You can secure premium 5-star views of the iconic <strong>Burj Khalifa</strong> in Dubai for a fraction of the cost if you travel in early November instead of late December. Smart travelers consistently target these specific months to stretch their travel budgets.
                </p>
              </div>

              {/* Monsoon Travel Section & First Time Advice */}
              <div id="monsoon-travel" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-4 text-foreground">First-Time Visitor Advice: Preparing for Asian Weather</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Many tourists make massive packing mistakes by not understanding regional weather phenomena, particularly the Southeast Asian monsoon (generally May to October).
                </p>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li><strong>Brief Showers, High Humidity:</strong> In places like <Link to="/international/thailand" className="text-primary hover:underline">Phuket</Link> and <Link to="/international/bali" className="text-primary hover:underline">Bali</Link>, heavy downpours typically last for just 1-2 hours in the late afternoon. Packing lightweight, quick-dry clothing and utilizing <Link to="/travel-checklist" className="text-primary hover:underline">travel packing hacks</Link> is essential.</li>
                  <li><strong>Lush Scenery:</strong> The rains turn the rice terraces of Ubud and the jungles of Northern Thailand into vibrant, breathtaking emerald landscapes, perfect for photography.</li>
                  <li><strong>Cultural Timing:</strong> Planning your trip around events like the massive <strong>Songkran Festival</strong> (April) means you'll be actively participating in massive water fights, acting as a direct counter-measure to the intense Southeast Asian summer heat.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="py-10">
            <div className="max-w-4xl mx-auto">
              <FAQSection title="Seasonal Travel FAQs" faqs={faqs} />
            </div>
          </section>

          {/* Helpful Travel Guides */}
          <section id="helpful-guides" className="py-12 bg-white/50 border-y max-w-5xl mx-auto mb-12">
            <div className="px-4">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Helpful Travel Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/international/thailand/guides" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-teal-50 hover:border-teal-200 transition-all font-medium text-muted-foreground hover:text-teal-700 shadow-sm block">
                  🇹🇭 Thailand Travel Guide
                </Link>
                <Link to="/international/dubai/DubaiMaster" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-teal-50 hover:border-teal-200 transition-all font-medium text-muted-foreground hover:text-teal-700 shadow-sm block">
                  🌆 Dubai Travel Guide
                </Link>
                <Link to="/budget-tour-packages" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-teal-50 hover:border-teal-200 transition-all font-medium text-muted-foreground hover:text-teal-700 shadow-sm block">
                  💰 Budget Travel Tips
                </Link>
                <Link to="/beach-holiday-packages" className="px-4 py-3 bg-card border rounded-lg text-sm text-center hover:bg-teal-50 hover:border-teal-200 transition-all font-medium text-muted-foreground hover:text-teal-700 shadow-sm block">
                  🏖️ Best Beach Holidays
                </Link>
              </div>
            </div>
          </section>

          {/* Commercial CTA */}
          <section className="mt-12 py-16 text-center bg-primary text-primary-foreground rounded-3xl overflow-hidden relative shadow-2xl">
            <div className="relative z-10 px-4">
              <h2 className="text-4xl font-bold mb-6">Plan Your Trip With Rudraksh Safar</h2>
              <p className="text-xl max-w-2xl mx-auto opacity-90 mb-8">
                Confused about where to travel next month? Tell us your group size and budget, and our experts will suggest the perfect destination with ideal weather.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold h-14 px-8 rounded-full shadow-lg text-lg" asChild>
                  <a href="https://wa.me/919406182174?text=Hi, I am looking to plan a trip with optimal weather conditions.">
                    Consult an Expert via WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 font-bold h-14 px-8 rounded-full shadow-lg text-lg" asChild>
                  <Link to="/contact">Request a Callback</Link>
                </Button>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default BestTimeToVisit;
