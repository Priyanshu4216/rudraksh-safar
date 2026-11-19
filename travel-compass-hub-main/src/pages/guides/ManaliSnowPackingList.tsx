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
  Luggage,
  CheckSquare,
  ShieldCheck,
  Snowflake,
  Sun,
  Flame,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

const ManaliSnowPackingList = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/guides/manali-snow-packing-list';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Domestic Packages', url: '/domestic-packages' },
    { name: 'Manali Hub', url: '/domestic-tours/manali' },
    { name: 'Snow Packing Checklist', url: '/guides/manali-snow-packing-list' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Helmet>
        <title>Manali Snow Trip Packing List: Winter Clothing & Checklist 2026-2027</title>
        <meta
          name="description"
          content="The ultimate packing list for a snow trip to Manali, Solang Valley and Atal Tunnel. 3-layer rule, waterproof shoes, thermal inners, skin protection and emergency medicines."
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
            <Badge className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider">
              <Luggage className="w-3.5 h-3.5 mr-1 inline-block" />
              Packing & Preparation Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Manali Snow Trip Packing List: What to Pack
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
              Heading into Himalayan snow? Master the 3-layer warmth system and pack the right gear to stay dry, warm, and comfortable in temperatures as low as -7°C.
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4 max-w-4xl space-y-10 text-slate-200">
          {/* The 3-Layer System */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Flame className="w-6 h-6 text-amber-400" />
              The Essential 3-Layer Warmth System
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Card className="bg-slate-900/80 border-slate-800 p-5">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold block mb-1">Layer 1: Base Layer</span>
                <strong className="text-white block mb-2">Thermal Inners (Top & Bottom)</strong>
                <p className="text-xs text-slate-400">Merino wool or synthetic moisture-wicking thermals. Never wear pure cotton base layers in sub-zero snow because cotton traps sweat and makes you shiver.</p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 p-5">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">Layer 2: Insulation</span>
                <strong className="text-white block mb-2">Fleece Jacket or Woollen Sweater</strong>
                <p className="text-xs text-slate-400">Traps body heat to maintain core temperature. A polar fleece zip-up or high-grade wool pullover is lightweight and easy to remove indoors.</p>
              </Card>

              <Card className="bg-slate-900/80 border-slate-800 p-5">
                <span className="text-xs uppercase tracking-wider text-rose-400 font-bold block mb-1">Layer 3: Outer Shell</span>
                <strong className="text-white block mb-2">Waterproof Windcheater / Down Jacket</strong>
                <p className="text-xs text-slate-400">Blocks cutting sub-zero winds and prevents falling snow or melting slush from soaking through into your inner layers.</p>
              </Card>
            </div>
          </div>

          {/* Checklist Sections */}
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl">
              <h3 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-400" />
                Footwear & Extremities Protection
              </h3>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                <li>• <strong>Waterproof Trekking Shoes</strong>: Shoes with deep rubber lugs (Vibram or equivalent) to prevent slipping on packed snow and black ice.</li>
                <li>• <strong>Woollen Socks (3–4 pairs)</strong>: Thick merino wool or terry cotton socks. Carry an extra pair in your daypack in case shoes get wet.</li>
                <li>• <strong>Waterproof Snow Gloves</strong>: Regular woollen gloves get soaked within minutes of touching snow. Use fleece-lined waterproof outer ski gloves.</li>
                <li>• <strong>Balaclava or Beanie / Monkey Cap</strong>: Covers ears and neck to stop cold mountain wind entry.</li>
              </ul>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl">
              <h3 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-400" />
                High Altitude Skin & Eye Care
              </h3>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                <li>• <strong>UV400 Polarized Sunglasses</strong>: Snow reflects up to 80% of sunlight, which can cause intense glare and temporary snow blindness without eye protection.</li>
                <li>• <strong>High SPF Sunscreen (SPF 50+)</strong>: High altitude thin atmosphere increases UV exposure significantly. Apply liberally to face and neck.</li>
                <li>• <strong>Cold Cream, Moisturizer & Lip Balm</strong>: Dry sub-zero Himalayan winds cause chapped skin and cracked lips within hours.</li>
              </ul>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl">
              <h3 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                Medical & Electronics Kit
              </h3>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                <li>• <strong>High-Capacity Power Bank (20,000 mAh)</strong>: Extreme cold drains smartphone and camera batteries 2x to 3x faster than usual.</li>
                <li>• <strong>Personal First Aid Kit</strong>: Motion sickness tablets (for Ghat roads from Mandi to Manali), Paracetamol, Band-Aids, Pain relief spray, and throat lozenges.</li>
                <li>• <strong>Thermos Flask (1 Litre)</strong>: Carry warm drinking water or tea on all snow excursions to Solang and Atal Tunnel.</li>
              </ul>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-slate-900 to-amber-950/30 p-8 rounded-2xl border border-amber-500/30 text-center space-y-4">
            <h2 className="text-2xl font-black text-white">Pack Your Bags & Join Our Weekend Squad</h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Our Manali Kasol Strangers Trip at ₹5,999 is fully coordinated by experienced trip leads who assist with snow suit rentals, equipment checks, and safe mountain transit.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/manali-kasol-strangers-trip">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5">
                  View ₹5,999 Tour Plan
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

export default ManaliSnowPackingList;
