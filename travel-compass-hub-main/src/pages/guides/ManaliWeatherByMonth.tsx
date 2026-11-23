import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  CloudSun,
  Thermometer,
  Snowflake,
  Sun,
  Umbrella,
  ArrowRight,
  Clock,
  Compass,
  CheckCircle2
} from 'lucide-react';

const ManaliWeatherByMonth = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/guides/manali-weather-by-month';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Domestic Packages', path: '/domestic-packages' },
    { label: 'Manali Hub', path: '/domestic-tours/manali' },
    { label: 'Weather by Month Guide', path: '/guides/manali-weather-by-month' }
  ];

  const monthlyData = [
    { month: 'January', temp: '-5°C to 7°C', snow: 'Peak Snowfall', clothes: 'Heavy thermals, down jackets, snow boots', highlight: 'Winter wonderland, Solang skiing at its peak' },
    { month: 'February', temp: '-2°C to 10°C', snow: 'Frequent Snow', clothes: 'Layered woollens, waterproof gloves', highlight: 'Clear sunny snow days, snow photography' },
    { month: 'March', temp: '4°C to 16°C', snow: 'High Altitude Only', clothes: 'Light woollens & windproof jacket', highlight: 'Snow thawing, apple blossoms begin, pleasant weather' },
    { month: 'April', temp: '8°C to 20°C', snow: 'Only at Rohtang / Atal Tunnel', clothes: 'Cotton shirts + light evening jackets', highlight: 'Spring blooms, paragliding and trekking open' },
    { month: 'May', temp: '12°C to 25°C', snow: 'Snow points at Rohtang Pass', clothes: 'Comfortable summer cottons', highlight: 'Summer peak, escape from plains heat, river rafting' },
    { month: 'June', temp: '15°C to 28°C', snow: 'High passes only', clothes: 'Summer wear + light shrug', highlight: 'Warm days, pleasant nights, family vacation rush' },
    { month: 'July', temp: '16°C to 25°C', snow: 'None', clothes: 'Waterproof jackets, rain poncho', highlight: 'Monsoon begins, lush green valleys, off-season rates' },
    { month: 'August', temp: '15°C to 24°C', snow: 'None', clothes: 'Rain gear, anti-slip footwear', highlight: 'Heavy rains, apple harvesting starts, landslide caution' },
    { month: 'September', temp: '12°C to 22°C', snow: 'None', clothes: 'Light woollens for evening', highlight: 'Monsoon clears, crisp post-rain mountain clarity' },
    { month: 'October', temp: '6°C to 18°C', snow: 'First flurries on high peaks', clothes: 'Sweaters, jackets, thermal inners', highlight: 'Golden autumn chinar trees, clear starry skies' },
    { month: 'November', temp: '1°C to 13°C', snow: 'High altitude snow', clothes: 'Heavy jackets, thermals, beanies', highlight: 'Pre-winter chill, quiet uncrowded valley, low hotel rates' },
    { month: 'December', temp: '-3°C to 9°C', snow: 'Snowfall starts mid-month', clothes: 'Heavy down feather jackets, thermals', highlight: 'White Christmas, festive New Year parties, early skiing' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Helmet>
        <title>Manali Weather by Month: Best Season & Snowfall Calendar 2026-2027</title>
        <meta
          name="description"
          content="Complete month-by-month temperature and weather guide for Manali. Check snowfall months, summer temperatures, monsoon dates, and packing tips."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />

      <main className="flex-1">
        <div className="bg-slate-900 border-b border-slate-800 py-3">
          <div className="container mx-auto px-4 max-w-6xl">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>

        <section className="relative py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider">
              <CloudSun className="w-3.5 h-3.5 mr-1 inline-block" />
              Climate & Seasonality Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Manali Weather by Month: Complete Season & Snow Guide
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
              Plan your travel dates with certainty. Review average day and night temperatures, snowfall likelihood, and clothing recommendations from local mountain experts.
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4 max-w-4xl space-y-10 text-slate-200">
          {/* Weather Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-slate-800 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-slate-200 border-b border-slate-800">
                <tr>
                  <th className="p-3.5">Month</th>
                  <th className="p-3.5">Avg Temperature</th>
                  <th className="p-3.5">Snow Status</th>
                  <th className="p-3.5">Recommended Clothing</th>
                  <th className="p-3.5">Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 bg-slate-950/70">
                {monthlyData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition">
                    <td className="p-3.5 font-bold text-white">{row.month}</td>
                    <td className="p-3.5 text-cyan-400 font-semibold">{row.temp}</td>
                    <td className="p-3.5 text-amber-400">{row.snow}</td>
                    <td className="p-3.5 text-slate-400 text-xs">{row.clothes}</td>
                    <td className="p-3.5 text-xs text-slate-300">{row.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Season Categorization */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <Card className="bg-slate-900/80 border-slate-800 p-5">
              <span className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                <Snowflake className="w-5 h-5" /> Winter (Dec – Feb)
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ideal for snow enthusiasts, skiing at Solang Valley, romantic honeymoons, and experiencing sub-zero Himalayan mountain nights.
              </p>
            </Card>

            <Card className="bg-slate-900/80 border-slate-800 p-5">
              <span className="flex items-center gap-2 text-amber-400 font-bold mb-2">
                <Sun className="w-5 h-5" /> Summer (Mar – Jun)
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prime family vacation season. River rafting in Kullu, paragliding, and trekking open across the valley with pleasant 15–25°C weather.
              </p>
            </Card>

            <Card className="bg-slate-900/80 border-slate-800 p-5">
              <span className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                <Compass className="w-5 h-5" /> Autumn (Sep – Nov)
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear sunny days with crisp mountain air. Apple orchards in full harvest, golden foliage, uncrowded roads, and economical rates.
              </p>
            </Card>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-slate-900 to-amber-950/30 p-8 rounded-2xl border border-amber-500/30 text-center space-y-4">
            <h2 className="text-2xl font-black text-white">Ready for Your Manali Adventure?</h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Whatever the season, our weekend departures from Delhi make exploring Manali, Solang Valley, and Kasol effortless and affordable.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/manali-kasol-strangers-trip">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5">
                  Book Manali Group Trip (₹5,999)
                </Button>
              </Link>
              <Link to="/guides/manali-in-winter">
                <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                  Read Winter Guide →
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default ManaliWeatherByMonth;
