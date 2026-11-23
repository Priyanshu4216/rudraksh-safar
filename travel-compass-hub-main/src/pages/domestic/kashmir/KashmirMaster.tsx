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
  Mountain,
  Calendar,
  Clock,
  Compass,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageCircle,
  Car,
  Utensils,
  Hotel,
  HelpCircle,
  Flame,
  Info
} from 'lucide-react';

const KashmirMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/domestic-tours/kashmir';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Domestic Packages', path: '/domestic-packages' },
    { label: 'Kashmir Tour Packages', path: '/domestic-tours/kashmir' }
  ];

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    'name': 'Kashmir Valley',
    'description': 'Handcrafted Kashmir tour packages from Rudraksh Safar. Srinagar Dal Lake luxury houseboats, Gulmarg Gondola snow peaks, Pahalgam Lidder Valley, and Sonmarg glaciers with 24/7 on-ground staff support.',
    'url': canonicalUrl,
    'touristType': ['Family', 'Honeymoon', 'Snow Adventure', 'Senior Citizens']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is Kashmir safe for family and honeymoon travelers?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, Kashmir is very welcoming and safe for tourists. Tourist circuits including Srinagar, Gulmarg, Pahalgam, and Sonmarg receive over 2 million travelers annually. Rudraksh Safar maintains verified local drivers, trusted hotel partners, and 24/7 on-ground assistance for every guest.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do prepaid mobile SIM cards work in Jammu & Kashmir?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Due to telecom regulations in Jammu & Kashmir, prepaid SIM cards from other Indian states stop working upon arrival. Only postpaid SIMs (Jio, Airtel, BSNL) work seamlessly. If you hold a prepaid SIM, our local team assists with obtaining a temporary J&K tourist SIM.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I book tickets for the Gulmarg Gondola?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Gulmarg Gondola Phase 1 (Kongdoori) and Phase 2 (Apharwat Peak) tickets must be booked online strictly in advance through the official J&K Cable Car Corporation portal (jammukashmircablecar.com). Slots sell out 30–45 days ahead during peak winter and summer seasons. Rudraksh Safar guides you through ticket slot planning.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the best time to see snow in Kashmir?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'For fresh snowfall and deep snow landscapes in Gulmarg, Sonmarg, and Srinagar, the best window is from late December to late February. High-altitude Apharwat Peak in Gulmarg retains snow cover through May.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      <Helmet>
        <title>Kashmir Tour Packages 2026-2027: Srinagar, Gulmarg, Pahalgam | Rudraksh Safar</title>
        <meta
          name="description"
          content="Book verified Kashmir tour packages from ₹18,999. Dal Lake luxury houseboats, Gulmarg Gondola snow trips, Pahalgam valleys & Sonmarg. On-ground support & transparent costs."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(destinationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-12 w-full space-y-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Banner */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-teal-600/20 text-teal-400 border-teal-500/30 text-xs font-semibold px-2.5 py-1">
              Verified Domestic Silo Hub
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Direct On-Ground Support
            </Badge>
            <Badge variant="outline" className="border-amber-500/30 text-amber-300 text-xs">
              Winter Snow & Spring Tulip Seasons
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Kashmir Tour Packages: Srinagar, Gulmarg & Pahalgam
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Experience the "Paradise on Earth" with zero uncertainty. From traditional heated houseboats on Dal Lake and Gondola rides at Apharwat Peak to riverside pine meadows in Pahalgam, Rudraksh Safar delivers fully supported Kashmir holidays with verified drivers, genuine Kashmiri hospitality, and crystal-clear pricing.
          </p>
        </header>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-400" /> On-Ground Care
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">24/7 Local Support</div>
              <p className="text-xs text-slate-400 mt-1">Dedicated representative and verified drivers throughout J&K.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-amber-400" /> Authentic Stay
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Luxury Houseboat</div>
              <p className="text-xs text-slate-400 mt-1">Nigeen / Dal Lake heritage stay with Bukhari heating.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-emerald-400" /> Dining Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">MAP Meal Plan</div>
              <p className="text-xs text-slate-400 mt-1">Daily hearty breakfast and dinner with pure veg & Wazwan choices.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-blue-400" /> Private Transfers
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Dedicated Vehicle</div>
              <p className="text-xs text-slate-400 mt-1">Private Sedan / Innova for comfortable mountain touring.</p>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1: DETAILED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-teal-400" /> Flagship Kashmir Itineraries (12-Point Standard)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Detailed morning, afternoon, and evening timelines with verified driving distances and real pacing.
            </p>
          </div>

          {/* Package 1: 5N/6D Kashmir Paradise Tour */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-teal-600 text-white font-bold text-xs">Most Popular</Badge>
                  <span className="text-xs text-slate-400">Duration: 6 Days / 5 Nights</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  Kashmir Paradise Tour: Srinagar, Gulmarg, Pahalgam & Sonmarg
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-black text-teal-400">₹24,999</div>
                <span className="text-xs text-slate-400">per person (Twin Sharing Basis)</span>
              </div>
            </div>

            {/* Day-by-day itinerary */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Day-by-Day Detailed Schedule:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-teal-300 text-sm">Day 1: Arrival in Srinagar & Dal Lake Houseboat Experience</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning/Afternoon:</strong> Arrive at Srinagar Airport (SXR). Our dedicated local chauffeur welcomes you and transfers you to Dal Lake / Nigeen Lake (approx. 45 mins / 15 km). Check in to your handpicked luxury wooden houseboat with traditional Kashmiri cedar-carved interiors.<br />
                    <strong>Evening:</strong> Enjoy a peaceful 1-hour sunset Shikara ride across Dal Lake, gliding past the Floating Post Office, floating vegetable market, and Char Chinar island. Savor authentic Kashmiri Kahwa tea. Night stay in luxury houseboat with dinner included.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-teal-300 text-sm">Day 2: Srinagar to Gulmarg — Meadow of Flowers (52 km / 2 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> After breakfast, check out from the houseboat and embark on a scenic drive to Gulmarg (altitude 8,690 ft) past Tangmarg pine slopes.<br />
                    <strong>Midday:</strong> Board the famous Gulmarg Gondola. Phase 1 takes you to Kongdoori Valley (8,530 ft), and Phase 2 ascends to Apharwat Peak (13,780 ft) for sweeping Himalayan views and snow activities. (Note: Gondola tickets pre-booked online; our team guides your slot timing).<br />
                    <strong>Evening:</strong> Visit the historic St. Mary's Church and Gulmarg Golf Course. Drive back to Srinagar hotel for dinner and overnight stay.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-teal-300 text-sm">Day 3: Srinagar to Pahalgam — Valley of Shepherds (92 km / 2.5 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Post breakfast, drive towards Pahalgam along National Highway 44. En route, stop at the world-famous saffron fields in Pampore and the 9th-century Awantipora Sun Temple ruins.<br />
                    <strong>Afternoon:</strong> Arrive in Pahalgam along the gushing Lidder River. Switch to a local Pahalgam taxi union vehicle to explore Betaab Valley (named after the Bollywood movie), the stunning alpine meadows of Aru Valley, and Chandanwari (the start point of Amarnath Yatra).<br />
                    <strong>Evening:</strong> Check in to a riverside hotel in Pahalgam. Enjoy a quiet walk along the Lidder River banks. Overnight in Pahalgam with dinner.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-teal-300 text-sm">Day 4: Pahalgam to Srinagar & Mughal Gardens Exploration (92 km / 2.5 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Leisurely breakfast by the river. Drive back to Srinagar.<br />
                    <strong>Afternoon:</strong> Tour Srinagar's heritage Mughal Gardens: Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Abode of Love), built during Emperor Jahangir's reign with terraced fountains facing Dal Lake. Ascend the Takht-e-Suleiman hill to visit the ancient Shankaracharya Temple (built in 200 BC) offering panoramic vistas over the entire Srinagar city.<br />
                    <strong>Evening:</strong> Stroll through Boulevard Road and Lal Chowk for Kashmiri handicrafts, Pashmina shawls, and walnut wood carvings. Overnight stay in Srinagar hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-teal-300 text-sm">Day 5: Day Excursion to Sonmarg — Meadow of Gold (80 km / 2.5 hrs one-way)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Full-day scenic excursion to Sonmarg (altitude 9,000 ft) along the roaring Sindh River, flanked by snow-capped peaks and trout streams.<br />
                    <strong>Midday:</strong> Visit the magnificent Thajiwas Glacier. Hire ponies or a local union vehicle to reach the glacier snow point where snow is preserved year-round.<br />
                    <strong>Evening:</strong> Return drive to Srinagar in the late afternoon. Relish a farewell Kashmiri dinner with traditional Rogan Josh or Kashmiri Dum Aloo. Overnight in Srinagar hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-teal-300 text-sm">Day 6: Dry Fruit Shopping & Srinagar Airport Departure</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the hotel. Visit authentic government-certified dry fruit and saffron stores for Mamra almonds, Kashmiri walnuts, and Kesar.<br />
                    <strong>Afternoon:</strong> Punctual transfer to Srinagar Airport (SXR). <em>Important:</em> We drop you 3 hours ahead of flight departure as Srinagar Airport has 3-tier security checks before check-in counters. Tour concludes with lifetime memories.
                  </p>
                </div>
              </div>
            </div>

            {/* Inclusions and Exclusions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Package Inclusions
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• 1 Night in Dal Lake / Nigeen Lake Luxury Wooden Houseboat</li>
                  <li>• 3 Nights in 3-Star Premium Hotel in Srinagar</li>
                  <li>• 1 Night in Riverside Deluxe Hotel / Resort in Pahalgam</li>
                  <li>• MAP Meal Plan: 5 Breakfasts & 5 Dinners included</li>
                  <li>• 1-Hour Shikara Ride on Dal Lake (Char Chinar route)</li>
                  <li>• Dedicated Private AC Sedan / Innova for all 6 days</li>
                  <li>• Airport pickup, drop-off, toll taxes, parking, and driver allowances</li>
                  <li>• 24/7 dedicated on-ground phone support from Rudraksh Safar</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Clear Exclusions & Extra Tariffs
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• Airfare / Train tickets to and from Srinagar</li>
                  <li>• Gulmarg Gondola tickets (booked directly via official J&K Cable Car portal)</li>
                  <li>• Pahalgam local union taxi for Aru / Betaab Valley (approx. ₹2,000–₹2,500/car)</li>
                  <li>• Sonmarg Thajiwas Glacier pony charges or local union vehicle</li>
                  <li>• Monument entrance fees (Mughal Gardens approx. ₹30/person)</li>
                  <li>• 5% GST as applicable on domestic tour packages</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Package 2: 4N/5D Winter Snow Special */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-blue-600 text-white font-bold text-xs mr-2">Winter Special</Badge>
                <span className="text-lg font-bold text-white">4N/5D Kashmir Winter Snow & Gulmarg Gondola Special</span>
              </div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-black text-teal-400">₹18,999</span>
                <span className="text-xs text-slate-400 block">per person (Twin Sharing)</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Tailored for couples and snow enthusiasts seeking winter magic between December and March. Includes 1 night in a heated Dal Lake houseboat, 2 nights in Gulmarg with snow gear assistance and ski lesson contacts, 1 night in Srinagar, and private heated transfers.
            </p>
          </div>
        </section>

        {/* SECTION 2: TRANSIT & LOCAL ADVISORY */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">Crucial Travel Logistics for Kashmir Visitors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" /> SIM Card Connectivity
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                National prepaid SIM cards do NOT work in Jammu & Kashmir. You must carry an active Postpaid connection (Jio, Airtel, BSNL). Our driver assists with purchasing a local J&K SIM if you only possess prepaid cards.
              </p>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" /> Heating & Winter Comfort
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Houseboats feature traditional Bukharis (wood/gas stoves) and electric blankets. Hotels provide central heating or radiant oil heaters. Carry thermal innerwear, fleece, and waterproof snow boots from December to March.
              </p>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" /> How to Reach from Raipur / CG
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fly from Raipur (RPR) to Srinagar (SXR) with a brief connection in Delhi (DEL). Alternatively, board express trains to Jammu Tawi (JAT) / Udhampur, followed by a scenic mountain taxi ride via Banihal tunnel.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: FAQS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-teal-400" /> Frequently Asked Questions
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

        {/* CTA BANNER */}
        <div className="bg-gradient-to-r from-teal-950/50 via-slate-900 to-slate-900 p-8 rounded-2xl border border-teal-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Plan Your Handcrafted Kashmir Holiday Today</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with our Kashmir holiday experts at Rudraksh Safar. We customize dates, hotel tiers, Gondola passes, and houseboat stays for families, honeymooners, and small groups.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I want to book a Kashmir tour package. Please share itinerary details and best quotes.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Kashmir Specialist
              </Button>
            </a>
            <a href={`tel:+91${contactPhone}`}>
              <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                <Phone className="w-4 h-4 mr-2" /> Call +91 9713057086
              </Button>
            </a>
          </div>
        </div>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default KashmirMaster;
