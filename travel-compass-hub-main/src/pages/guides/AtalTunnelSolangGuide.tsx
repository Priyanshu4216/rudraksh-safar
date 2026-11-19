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
  Compass,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Mountain,
  Car,
  FileCheck,
  Phone,
  MessageCircle
} from 'lucide-react';

const AtalTunnelSolangGuide = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/guides/atal-tunnel-solang-guide';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Domestic Packages', url: '/domestic-packages' },
    { name: 'Manali Hub', url: '/domestic-tours/manali' },
    { name: 'Atal Tunnel & Solang Guide', url: '/guides/atal-tunnel-solang-guide' }
  ];

  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    'headline': 'Atal Tunnel & Solang Valley Guide 2026-2027: Distance, Permits & Snow Points',
    'description': 'Everything you need to know about visiting Atal Tunnel, Solang Valley and Sissu from Manali. Distance, permit rules, taxi union rates, and adventure activity timings.',
    'image': 'https://images.unsplash.com/photo-1589314486665-276c2438847c?q=80&w=1200',
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
    'datePublished': '2026-11-19',
    'dateModified': '2026-11-19'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Do you need a permit to visit Atal Tunnel?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No special permit is required for tourists to drive through Atal Tunnel towards Sissu or Keylong. You only pay the local green cess / municipal toll at Manali entry.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the distance from Manali to Atal Tunnel?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Atal Tunnel South Portal is located approximately 28 km from Mall Road, Manali. Driving time is typically 45 to 60 minutes depending on mountain traffic.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the difference between Atal Tunnel and Rohtang Pass?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Rohtang Pass is a 13,058 ft mountain pass requiring an official NGT permit (limited daily quota) and is closed during winter. Atal Tunnel bypasses Rohtang Pass at 10,000 ft via a 9.02 km all-weather highway tunnel, requiring no special permit.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Helmet>
        <title>Atal Tunnel & Solang Valley Guide 2026-2027: Permits, Distance & Snow</title>
        <meta
          name="description"
          content="Complete guide to Atal Tunnel, Solang Valley and Sissu from Manali. Distance from Mall Road, permit rules, snow activity tariffs and winter status."
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
            <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 mr-1 inline-block" />
              Mountain Transit & Sightseeing
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Atal Tunnel & Solang Valley: Complete Visitor Guide
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
              Essential distance metrics, Rohtang vs Atal Tunnel permit clarifications, Sissu transit tips, and Solang adventure tariffs for travellers visiting Manali.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> South Portal: 28 km from Manali</span>
              <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-cyan-400" /> Tunnel Length: 9.02 km</span>
              <span className="flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-emerald-400" /> Permit: Not Required for Atal Tunnel</span>
            </div>
          </div>
        </section>

        {/* Core Content */}
        <section className="py-12 container mx-auto px-4 max-w-4xl space-y-10 text-slate-200">
          {/* Distance and Route Breakdown */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Car className="w-6 h-6 text-amber-400" />
              Route, Distance & Driving Timings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-slate-900/80 border-slate-800 p-4">
                <span className="text-xs uppercase text-slate-400 font-bold">Manali to Solang Valley</span>
                <span className="text-2xl font-black text-amber-400 block my-1">14 km</span>
                <p className="text-xs text-slate-400">Approx. 30–45 mins via Palchan road. Heaviest traffic between 10 AM and 1 PM during peak snow season.</p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 p-4">
                <span className="text-xs uppercase text-slate-400 font-bold">Manali to Atal Tunnel South</span>
                <span className="text-2xl font-black text-cyan-400 block my-1">28 km</span>
                <p className="text-xs text-slate-400">Approx. 45–60 mins via Solang-Dhundi highway. Well-paved all-weather double-lane road.</p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 p-4">
                <span className="text-xs uppercase text-slate-400 font-bold">Atal Tunnel to Sissu (Lahaul)</span>
                <span className="text-2xl font-black text-emerald-400 block my-1">6 km</span>
                <p className="text-xs text-slate-400">Approx. 10 mins after exiting North Portal. Leads into dramatic Tibetan-style barren mountains and Sissu waterfall.</p>
              </Card>
            </div>
          </div>

          {/* Rohtang vs Atal Tunnel Permit Rules */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-emerald-400" />
              Permits Explained: Rohtang Pass vs Atal Tunnel
            </h2>
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Atal Tunnel & Sissu: ZERO Permit Needed</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Any private taxi, commercial Tempo Traveller, or tourist car can drive through Atal Tunnel into Lahaul without an NGT permit. Only regular vehicle registration and driving license are checked at the police post.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Rohtang Pass (13,058 ft): Strict NGT Permit Mandated</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Rohtang Pass is capped at 1,200 vehicles per day (800 petrol, 400 diesel) by the National Green Tribunal. It is closed entirely on Tuesdays for maintenance and closed to tourists from mid-November to May due to heavy snow.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solang Valley Adventure Sports Tariffs */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-cyan-400" />
              Solang Valley Adventure Activities Tariffs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border border-slate-800 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-slate-300 border-b border-slate-800">
                  <tr>
                    <th className="p-3">Activity</th>
                    <th className="p-3">Approx. Cost (INR)</th>
                    <th className="p-3">Best Season</th>
                    <th className="p-3">Important Tip</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 bg-slate-950">
                  <tr>
                    <td className="p-3 font-semibold text-white">Ropeway / Cable Car</td>
                    <td className="p-3 text-emerald-400 font-bold">₹700 – ₹1,000</td>
                    <td className="p-3">Year-round</td>
                    <td className="p-3 text-slate-400">Takes you up to Mt. Phatru (3,200 m) for panoramic valley views.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Short Paragliding (Tandem)</td>
                    <td className="p-3 text-emerald-400 font-bold">₹1,200 – ₹1,800</td>
                    <td className="p-3">Oct – Jun (Clear days)</td>
                    <td className="p-3 text-slate-400">Glide duration approx. 1–2 minutes with certified pilot.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">High Fly Paragliding</td>
                    <td className="p-3 text-emerald-400 font-bold">₹3,000 – ₹4,000</td>
                    <td className="p-3">Oct – May</td>
                    <td className="p-3 text-slate-400">Flies from the top of the ropeway down to the valley floor (10–15 mins).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">ATV / Quad Bike Ride</td>
                    <td className="p-3 text-emerald-400 font-bold">₹800 – ₹1,500</td>
                    <td className="p-3">Year-round</td>
                    <td className="p-3 text-slate-400">Mud track in summer, deep snow track in winter.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Skiing / Snowboarding (Beginner)</td>
                    <td className="p-3 text-emerald-400 font-bold">₹1,000 – ₹2,500</td>
                    <td className="p-3">Jan – Feb</td>
                    <td className="p-3 text-slate-400">Includes equipment rental and 30-minute basic instructor session.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Flagship Tour CTA */}
          <div className="bg-gradient-to-r from-slate-900 to-amber-950/30 p-8 rounded-2xl border border-amber-500/30 text-center space-y-4">
            <h2 className="text-2xl font-black text-white">Visit Solang Valley on Our Manali Group Trip</h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Our flagship ₹5,999 package includes Solang Valley transfers, Atal Tunnel excursion, Kasol riverside camping, Hadimba Temple, and roundtrip AC Tempo Traveller from Delhi.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/manali-kasol-strangers-trip">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5">
                  View Flagship Tour Plan (₹5,999)
                </Button>
              </Link>
              <Link to="/guides/manali-in-winter">
                <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                  Read Manali Winter Guide →
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

export default AtalTunnelSolangGuide;
