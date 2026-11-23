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
  Calendar,
  Layers,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  HelpCircle,
  MessageCircle,
  Sparkles
} from 'lucide-react';

const CantonFairDatesGuide = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/guides/canton-fair-dates-and-phases';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'International Packages', path: '/international-packages' },
    { label: 'Canton Fair China', path: '/international-tours/canton-fair-china' },
    { label: 'Dates & Phases Guide', path: '/guides/canton-fair-dates-and-phases' }
  ];

  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    'headline': 'Canton Fair 2027 Dates, Phases & Product Categories: Indian Buyer Guide',
    'description': 'Comprehensive schedule for Canton Fair 2027 (141st Spring & 142nd Autumn sessions). Exact dates, 3-phase product breakdown, venue logistics at Pazhou Guangzhou, and Indian buyer selection advisory.',
    'image': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200',
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
        'name': 'What are the dates for Canton Fair Spring 2027 (141st Session)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The 141st Canton Fair takes place in three phases: Phase 1 from April 15–19, 2027; Phase 2 from April 23–27, 2027; and Phase 3 from May 1–5, 2027. There is a 3-day exhibition change window between each phase.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the dates for Canton Fair Autumn 2027 (142nd Session)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The 142nd Canton Fair occurs: Phase 1 from October 15–19, 2027; Phase 2 from October 23–27, 2027; and Phase 3 from October 31 – November 4, 2027.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can an Indian business owner attend multiple phases on one trip?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. During the 3-day turnaround gap between phases, many Indian business buyers take factory visits in nearby manufacturing hubs like Foshan (furniture/ceramics), Shenzhen (electronics), Zhongshan (lighting), or Dongguan.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Where is the Canton Fair venue located?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'It is held at the China Import and Export Fair Complex (Pazhou Complex) at No. 382 Yuejiang Middle Road, Haizhu District, Guangzhou. It is accessible via Guangzhou Metro Line 8 at Pazhou and Xingangdong stations.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>Canton Fair 2027 Dates, Phases & Product Categories: Complete Guide</title>
        <meta
          name="description"
          content="Official dates, phases, and product categories for Canton Fair 2027 (Spring & Autumn). Detailed schedule for Phase 1, Phase 2, and Phase 3 at Pazhou Complex, Guangzhou."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(guideSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 md:py-12 w-full space-y-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs font-semibold px-2.5 py-1">
              Guangzhou Exhibition Schedule
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              141st & 142nd Editions
            </Badge>
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 text-xs">
              Official Verified Dates
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Canton Fair 2027 Dates, Phases & Product Categories
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Planning your sourcing trip to China? The China Import and Export Fair in Guangzhou spans three distinct 5-day phases across 1.55 million square meters. Identify which phase aligns with your industry, products, and procurement goals.
          </p>
        </header>

        {/* Quick Date Snapshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-slate-900 to-blue-950/40 border border-blue-500/30 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Spring Session</span>
              <Badge className="bg-blue-600 text-white font-bold text-xs">141st Canton Fair</Badge>
            </div>
            <h2 className="text-2xl font-black text-white">April – May 2027</h2>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="font-semibold text-white">Phase 1:</span>
                <span className="text-blue-300 font-bold">April 15 – 19, 2027</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="font-semibold text-white">Phase 2:</span>
                <span className="text-blue-300 font-bold">April 23 – 27, 2027</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-semibold text-white">Phase 3:</span>
                <span className="text-blue-300 font-bold">May 1 – 5, 2027</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-slate-900 to-amber-950/30 border border-amber-500/30 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Autumn Session</span>
              <Badge className="bg-amber-600 text-white font-bold text-xs">142nd Canton Fair</Badge>
            </div>
            <h2 className="text-2xl font-black text-white">October – November 2027</h2>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="font-semibold text-white">Phase 1:</span>
                <span className="text-amber-300 font-bold">October 15 – 19, 2027</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span className="font-semibold text-white">Phase 2:</span>
                <span className="text-amber-300 font-bold">October 23 – 27, 2027</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-semibold text-white">Phase 3:</span>
                <span className="text-amber-300 font-bold">October 31 – November 4, 2027</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Phase Breakdown in Detail */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-400" /> Exhaustive Product Breakdown by Phase
          </h2>

          {/* Phase 1 Detail */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-blue-600 text-white font-bold text-xs mr-2">PHASE 1</Badge>
                <span className="text-lg font-bold text-white">Electronics, Machinery & High-Tech Hardware</span>
              </div>
              <span className="text-xs font-semibold text-blue-400">Days 1–5 (Apr 15–19 / Oct 15–19)</span>
            </div>
            <p className="text-sm text-slate-300">
              The premier destination for electronics importers, mechanical engineers, solar energy companies, and industrial contractors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Consumer Electronics & Appliances</strong>
                Smart TVs, refrigeration, kitchen gadgets, smart home IoT, security equipment, and battery storage systems.
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Industrial Machinery & Automation</strong>
                CNC machines, packaging & printing equipment, plastic processing machines, agricultural tools, and pumps.
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Hardware & Power Tools</strong>
                Hand tools, industrial fasteners, locks & fittings, welding equipment, and electric motors.
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Automotive & New Energy</strong>
                EV components, battery packs, solar PV panels, inverters, motorcycles, and vehicle replacement parts.
              </div>
            </div>
          </div>

          {/* Phase 2 Detail */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-amber-600 text-white font-bold text-xs mr-2">PHASE 2</Badge>
                <span className="text-lg font-bold text-white">Building Materials, Furniture, Ceramics & Gifts</span>
              </div>
              <span className="text-xs font-semibold text-amber-400">Days 9–13 (Apr 23–27 / Oct 23–27)</span>
            </div>
            <p className="text-sm text-slate-300">
              The focal point for real estate developers, interior designers, architects, gift traders, and hospitality procurement teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Building & Decorative Materials</strong>
                Floor tiles, porcelain slabs, glass fittings, aluminum profiles, wallpapers, and stone surfaces.
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Sanitaryware & Bath Fixtures</strong>
                Bathroom vanities, smart toilets, luxury faucets, shower enclosures, and spa equipment.
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Furniture & Home Decor</strong>
                Office workstations, home sofas, outdoor garden furniture, lighting fixtures, and mirrors.
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Kitchenware, Tableware & Gifts</strong>
                Cookware, stainless steel cutlery, daily ceramics, seasonal holiday gifts, and festival premiums.
              </div>
            </div>
          </div>

          {/* Phase 3 Detail */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-emerald-600 text-white font-bold text-xs mr-2">PHASE 3</Badge>
                <span className="text-lg font-bold text-white">Textiles, Garments, Luggage, Medical & Food</span>
              </div>
              <span className="text-xs font-semibold text-emerald-400">Days 17–21 (May 1–5 / Oct 31–Nov 4)</span>
            </div>
            <p className="text-sm text-slate-300">
              Tailored for retail chains, apparel brand owners, pharmaceutical & medical distributors, and FMCG importers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Garments & Fashion Apparel</strong>
                Men's & women's wear, sportswear, casual clothing, activewear, and undergarments.
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Home Textiles, Fabrics & Yarns</strong>
                Bed linens, curtains, upholstery fabrics, synthetic yarns, and embroidery materials.
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Footwear, Luggage & Bags</strong>
                Trolley bags, executive backpacks, genuine leather accessories, and sports shoes.
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg">
                <strong className="text-white block mb-1">Medical Devices & Health Supplies</strong>
                Hospital diagnostic tools, personal healthcare products, surgical disposables, and wellness items.
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Intermission / Turnaround Advice */}
        <section className="p-6 bg-slate-900/80 rounded-xl border border-slate-800 space-y-3">
          <h3 className="font-bold text-white text-base flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-400" /> What Happens During the 3-Day Intermission?
          </h3>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Between Phase 1 & 2 (April 20–22) and Phase 2 & 3 (April 28–30), the entire complex is cleared for incoming exhibitors. Indian buyers utilize these 3 days for factory inspections and supplier warehouse audits in the Greater Bay Area:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-2">
            <div className="p-3 bg-slate-800/50 rounded-lg">
              <span className="font-bold text-white block">Foshan (30 mins):</span>
              Tiles, ceramics, luxury furniture, and sanitaryware manufacturing factories.
            </div>
            <div className="p-3 bg-slate-800/50 rounded-lg">
              <span className="font-bold text-white block">Shenzhen (1 hour high-speed train):</span>
              Huaqiangbei electronics markets, tech R&D, and custom hardware fabrication.
            </div>
            <div className="p-3 bg-slate-800/50 rounded-lg">
              <span className="font-bold text-white block">Zhongshan / Guzhen (45 mins):</span>
              The world capital of commercial lighting, chandeliers, and LED fixtures.
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-400" /> Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
                <h3 className="font-semibold text-white text-sm">{faq.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-linking and CTA */}
        <div className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-blue-500/30 space-y-4 text-center">
          <h2 className="text-2xl font-black text-white">Join Our Indian Canton Fair Delegations</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Rudraksh Safar organizes complete B2B packages for each phase including 4-star Pazhou accommodations, metro cards, Indian dining, and bilingual sourcing escorts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/international-tours/canton-fair-china">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5">
                Explore Canton Fair Tour Packages
              </Button>
            </Link>
            <Link to="/guides/canton-fair-buyer-registration-guide">
              <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                How to Register Buyer Badge →
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default CantonFairDatesGuide;
