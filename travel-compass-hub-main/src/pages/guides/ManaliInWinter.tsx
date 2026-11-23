import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Snowflake,
  Calendar,
  Thermometer,
  ShieldAlert,
  Compass,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Mountain,
  Flame,
  Info
} from 'lucide-react';

const ManaliInWinter = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/guides/manali-in-winter';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Domestic Packages', path: '/domestic-packages' },
    { label: 'Manali Hub', path: '/domestic-tours/manali' },
    { label: 'Manali in Winter Guide', path: '/guides/manali-in-winter' }
  ];

  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    'headline': 'Manali in Winter 2026-2027: Snowfall Dates, Solang Activities & Travel Guide',
    'description': 'Complete winter guide to visiting Manali in December, January and February. Snowfall timings, Atal Tunnel transit, Solang Valley adventure tips, and packing essentials.',
    'image': 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200',
    'author': {
      '@type': 'Organization',
      'name': 'Rudraksh Safar',
      'url': 'https://rudrakshsafar.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Rudraksh Safar',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://rudrakshsafar.com/logo-dark.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    'datePublished': '2026-11-19',
    'dateModified': '2026-11-19'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Which month has the most snowfall in Manali?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'January and early February receive the heaviest snowfall in Manali town and Solang Valley. December also experiences frequent snowfall, especially around Christmas and New Year.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does Atal Tunnel stay open in winter?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Atal Tunnel remains operational during winter except during active, heavy snowstorms when the Border Roads Organisation (BRO) temporarily restricts traffic for snow clearing.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the temperature in Manali during winter?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Daytime temperatures range from 5°C to 12°C, while nighttime temperatures drop between -2°C and -7°C during peak winter from late December to late January.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Helmet>
        <title>Manali in Winter 2026-2027: Snowfall Dates, Solang Activities & Guide</title>
        <meta
          name="description"
          content="Planning a trip to Manali in winter? Check official snowfall timings, Solang Valley activities, Atal Tunnel updates, winter temperature and packing tips."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(guideSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-slate-900 border-b border-slate-800 py-3">
          <div className="container mx-auto px-4 max-w-6xl">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Badge className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider">
              <Snowflake className="w-3.5 h-3.5 mr-1 inline-block animate-pulse" />
              Winter Experience Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Manali in Winter: Snowfall, Solang Valley & Atal Tunnel Guide
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
              From fresh powder snow at Solang Valley to the frozen wonderlands past Atal Tunnel, here is your definitive local guide to planning a winter getaway to Himachal Pradesh.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> Season: Dec – Feb</span>
              <span className="flex items-center gap-1.5"><Thermometer className="w-4 h-4 text-cyan-400" /> Temp: -5°C to 10°C</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-400" /> Last Verified: Nov 2026</span>
            </div>
          </div>
        </section>

        {/* Flagship Promo Box */}
        <section className="py-6 bg-amber-500/10 border-b border-amber-500/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-r from-amber-950/40 to-slate-900/60 p-5 rounded-xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Featured Winter Group Trip</span>
                <h2 className="text-lg font-bold text-white">Join the Manali × Kasol Strangers Group Trip — Only ₹5,999</h2>
                <p className="text-xs text-slate-300">Overnight AC Tempo Traveller from Delhi, 3-star stay, Solang Valley, Kasol riverside camp & bonfire.</p>
              </div>
              <Link to="/manali-kasol-strangers-trip">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold whitespace-nowrap shadow-lg">
                  View ₹5,999 Tour Plan <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Guide Content */}
        <section className="py-12 container mx-auto px-4 max-w-4xl space-y-10 text-slate-200">
          {/* Winter Overview */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-cyan-400" />
              What to Expect: Manali Winter Season
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-300 mb-4">
              Winter transforms the Kullu-Manali Valley into a snow-covered wonderland. Beginning in late November, sub-zero winds descend from the Pir Panjal and Dhauladhar ranges. By mid-December, town roofs, pine boughs, and Mall Road are frequently blanketed in snow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <Card className="bg-slate-900/80 border-slate-800 p-4">
                <span className="text-amber-400 font-bold text-sm block mb-1">December</span>
                <p className="text-xs text-slate-400">First major snow spells. Vibrant festive vibes for Christmas & New Year. Solang Valley active with introductory snow activities.</p>
              </Card>
              <Card className="bg-slate-900/80 border-slate-800 p-4">
                <span className="text-cyan-400 font-bold text-sm block mb-1">January (Peak Snow)</span>
                <p className="text-xs text-slate-400">Heaviest snowfall of the year. Temperatures drop to -7°C at night. Solang ski slopes fully operational. Snow chains required on high passes.</p>
              </Card>
              <Card className="bg-slate-900/80 border-slate-800 p-4">
                <span className="text-emerald-400 font-bold text-sm block mb-1">February</span>
                <p className="text-xs text-slate-400">Substantial snowpack persists at Solang and Atal Tunnel. Clear blue skies return between snow spells. Excellent for photography.</p>
              </Card>
            </div>
          </div>

          {/* Winter Activities at Solang & Atal Tunnel */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-amber-400" />
              Top Winter Experiences in Manali
            </h2>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-base">Snow Sports at Solang Valley</h3>
                  <p className="text-xs text-slate-400 mt-1">Located 14 km from Manali town, Solang is the hub for beginner skiing, snowboarding, tube sliding, and quad-bike riding over packed snow.</p>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-base">Atal Tunnel & Sissu Ice Fall Excursion</h3>
                  <p className="text-xs text-slate-400 mt-1">Passing through the 9.02 km Atal Tunnel brings you into Lahaul Valley. In winter, the Sissu waterfall freezes solid into a towering column of ice.</p>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-base">Old Manali Winter Cafe Hopping</h3>
                  <p className="text-xs text-slate-400 mt-1">Cozy up next to tandoor heaters in wooden cafes, sipping hot apple tea, ginger lemon honey, and wood-fired thin crust pizzas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Winter Road Safety & Logistics */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-rose-400" />
              Winter Travel Advisory & Road Safety
            </h2>
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl space-y-3 text-xs md:text-sm text-slate-300">
              <p>• <strong>Delhi to Manali Highway (NH-21)</strong>: Generally open throughout winter via Kiratpur-Nerchowk four-lane expressway. Delays only occur during rare heavy cloudbursts or bridge clearing.</p>
              <p>• <strong>Black Ice Advisory</strong>: Road stretches near Palchan and Dhundi freeze overnight into invisible black ice. Self-drive without snow driving experience is strongly discouraged.</p>
              <p>• <strong>Hotel Heating</strong>: Ensure your accommodation includes electric blankets, oil radiators, or room blowers. Budget homestays without heating can become uncomfortable below 0°C.</p>
            </div>
          </div>

          {/* Related Manali Guides */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Explore More Manali Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Link to="/guides/atal-tunnel-solang-guide" className="p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-amber-500/50 transition">
                <span className="font-bold text-amber-400 block mb-1">Atal Tunnel & Solang Guide →</span>
                <span className="text-xs text-slate-400">Permit rules, distance from Mall Road & snow points.</span>
              </Link>
              <Link to="/guides/manali-weather-by-month" className="p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-amber-500/50 transition">
                <span className="font-bold text-amber-400 block mb-1">Manali Weather by Month →</span>
                <span className="text-xs text-slate-400">Complete month-by-month temperature & clothing advice.</span>
              </Link>
            </div>
          </div>

          {/* Bottom Conversion CTA */}
          <div className="bg-gradient-to-r from-slate-900 to-amber-950/30 p-8 rounded-2xl border border-amber-500/30 text-center space-y-4">
            <h2 className="text-2xl font-black text-white">Experience Winter in Manali with Rudraksh Safar</h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Seats are limited on our upcoming weekend group departures from Delhi. Guaranteed hotel heating, verified tempo traveller drivers, and 24/7 coordinator support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/manali-kasol-strangers-trip">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5">
                  Book Manali Group Trip (₹5,999)
                </Button>
              </Link>
              <a
                href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent('Hello Rudraksh Safar, I am planning a winter trip to Manali. Please share details and batch availability.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-bold">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Trip Expert
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default ManaliInWinter;
