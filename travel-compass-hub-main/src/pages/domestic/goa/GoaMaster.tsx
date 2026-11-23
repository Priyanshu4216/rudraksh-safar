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
  Phone,
  MessageCircle,
  Palmtree,
  Hotel,
  Utensils,
  Car,
  HelpCircle,
  Waves,
  Sun
} from 'lucide-react';

const GoaMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/domestic-tours/goa';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Domestic Packages', path: '/domestic-packages' },
    { label: 'Goa Tour Packages', path: '/domestic-tours/goa' }
  ];

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    'name': 'Goa',
    'description': 'Handcrafted Goa tour packages by Rudraksh Safar. Calangute & Baga beach resorts with swimming pools, Grand Island scuba diving, South Goa Portuguese churches, and Mandovi river cruises with transparent pricing.',
    'url': canonicalUrl,
    'touristType': ['Beach Holiday', 'Friends Group', 'Honeymoon', 'Water Sports']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Which airport in Goa should I book flights to: GOI (Dabolim) or GOX (Mopa)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If staying in North Goa (Calangute, Baga, Candolim, Vagator, Morjim), Manohar International Airport Mopa (GOX) is closer (approx. 35–45 minutes). If staying in Central or South Goa (Panaji, Colva, Benaulim, Cavelossim), Dabolim Airport (GOI) is significantly closer. Rudraksh Safar arranges seamless private transfers from both airports.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I reach Goa from Chhattisgarh (Raipur/Durg/Bhilai)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'By air: Connecting flights from Raipur (RPR) to Goa (GOI/GOX) via Mumbai, Bangalore, or Hyderabad take 3.5 to 5 hours. By train: Direct weekly express trains like the Bilaspur–Goa Express (via Raipur and Durg) connect directly to Madgaon Junction (MAO).'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the main difference between North Goa and South Goa?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'North Goa (Baga, Calangute, Anjuna) is vibrant, bustling with beach clubs, flea markets, shacks, and nightlife. South Goa (Palolem, Colva, Majorda) offers tranquil white-sand beaches, luxury 5-star resorts, and historic Portuguese heritage architecture.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are scooty and self-drive car rentals readily available?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Our local team assists guests with reliable scooty rentals (approx. ₹350–₹500/day depending on season) and self-drive cars (Swift/Thar) with verified commercial permits and helmets.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      <Helmet>
        <title>Goa Tour Packages 2026-2027: North & South Goa Beach Holidays | Rudraksh Safar</title>
        <meta
          name="description"
          content="Book verified Goa tour packages from ₹11,599. Calangute & Baga resorts with pool, South Goa heritage tour, Grand Island scuba diving & Mandovi cruise. Clear pricing & local support."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(destinationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-12 w-full space-y-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-amber-600/20 text-amber-400 border-amber-500/30 text-xs font-semibold px-2.5 py-1">
              Verified Domestic Silo Hub
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Resorts with Swimming Pools
            </Badge>
            <Badge variant="outline" className="border-teal-500/30 text-teal-300 text-xs">
              Friends & Family Group Specials
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Goa Tour Packages: North & South Beach Holidays
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Sun, golden sands, and the laid-back coastal vibe of Goa. Whether you want the electrifying water sports of Baga, sunset shacks in Anjuna, or the serene Portuguese churches of Old Goa, Rudraksh Safar delivers comfortable beach resort stays with verified local transfers and total flexibility.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-amber-400" /> Poolside Resorts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Verified 3 & 4-Star</div>
              <p className="text-xs text-slate-400 mt-1">Walking distance to Calangute/Candolim with clean swimming pools.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-teal-400" /> Airport / Station Pickup
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Private AC Vehicle</div>
              <p className="text-xs text-slate-400 mt-1">Punctual private pickup from Mopa (GOX), Dabolim (GOI), or Madgaon (MAO).</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-blue-400" /> Water Sports Guidance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Scuba & Island Trips</div>
              <p className="text-xs text-slate-400 mt-1">Verified operators for Grand Island, parasailing, and jet ski combos.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Transparent Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">No Hidden Charges</div>
              <p className="text-xs text-slate-400 mt-1">Itemized hotel, transfer, and breakfast inclusions upfront.</p>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1: DETAILED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-400" /> Flagship Goa Tour Plans (12-Point Standard)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Realistic pacing with beach leisure, cultural sightseeing, and dedicated airport transfers.
            </p>
          </div>

          {/* Package 1: 3N/4D North & South Goa Highlights */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-600 text-white font-bold text-xs">Best Value</Badge>
                  <span className="text-xs text-slate-400">Duration: 4 Days / 3 Nights</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  Goa Relaxed Beach Holiday (North Beaches & South Heritage)
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-black text-amber-400">₹11,599</div>
                <span className="text-xs text-slate-400">per person (Twin Sharing Basis)</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Day-by-Day Detailed Schedule:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 1: Arrival in Goa & Beachfront Sunset</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning/Afternoon:</strong> Arrive at Goa Airport (GOI/GOX) or Madgaon / Thivim Railway Station. Our private AC vehicle welcomes you and transfers you to your resort in Calangute/Candolim.<br />
                    <strong>Evening:</strong> Check in and unwind by the resort swimming pool. Take an evening walk to Calangute Beach or Candolim shore. Enjoy live acoustic music and fresh dinner at a beach shack. Overnight in North Goa resort.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 2: North Goa Forts, Water Sports & Baga Nightlife</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the resort. Head out to visit the 17th-century Portuguese Fort Aguada and its historic lighthouse overlooking Sinquerim Beach.<br />
                    <strong>Afternoon:</strong> Head to Baga Beach and Anjuna Beach. Participate in water sports (parasailing, banana ride, jet ski on direct payment at government-regulated beach counters). Visit the iconic Chapora Fort (famous from Dil Chahta Hai) overlooking Vagator Beach.<br />
                    <strong>Evening:</strong> Explore the vibrant Tito's Lane in Baga or enjoy a cliffside sunset dinner at Curlies or Thalassa in Vagator. Overnight in North Goa resort.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 3: South Goa Heritage, Old Goa Churches & Mandovi Cruise</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Post breakfast, private AC transfer to South Goa. Visit the UNESCO World Heritage monuments in Old Goa: Basilica of Bom Jesus (preserving the sacred relics of St. Francis Xavier) and the grand Se Cathedral.<br />
                    <strong>Afternoon:</strong> Walk through the colorful Latin Quarter of Fontainhas in Panaji with its Portuguese colonial villas. Visit Miramar Beach and Dona Paula viewpoint.<br />
                    <strong>Evening:</strong> Enjoy an entertaining 1-hour sunset cruise on the Mandovi River with traditional Goan folk performances (Dekhni & Fugdi dance) and DJ music. Overnight in North Goa resort.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 4: Cashew Shopping & Departure Transfer</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the hotel. Visit authentic local Panaji or Mapusa market stalls for Goan roasted cashews, Feni, and Bebinca traditional layer cake.<br />
                    <strong>Afternoon:</strong> Private vehicle transfer to Goa Airport or Railway Station according to your flight/train schedule. Tour concludes with joyful coastal memories.
                  </p>
                </div>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Package Inclusions
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• 3 Nights in 3-Star Resort in Calangute / Candolim with Swimming Pool</li>
                  <li>• Daily Buffet Breakfast included at the resort</li>
                  <li>• Private AC Vehicle for Airport / Railway Station pickup & drop-off</li>
                  <li>• 1 Full Day South Goa Heritage & Panaji Sightseeing tour by private AC vehicle</li>
                  <li>• 1-Hour Mandovi River Sunset Cruise tickets included</li>
                  <li>• All toll taxes, fuel charges, parking fees, and driver allowances</li>
                  <li>• 24/7 dedicated support helpline from Rudraksh Safar</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Clear Exclusions & Extra Tariffs
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• Airfare or train tickets to and from Goa</li>
                  <li>• Lunch and dinner meals (allows flexibility to try diverse beach shacks)</li>
                  <li>• Water sports activities (booked directly at beach operators)</li>
                  <li>• Casino entry passes (Big Daddy, Deltin Royale - available on request)</li>
                  <li>• Scooty / self-drive car rental fees</li>
                  <li>• 5% GST on package price</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Package 2: 4N/5D Scuba & Catamaran Special */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-blue-600 text-white font-bold text-xs mr-2">Adventure Special</Badge>
                <span className="text-lg font-bold text-white">4N/5D Goa Coastal Explorer & Grand Island Scuba Tour</span>
              </div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-black text-amber-400">₹16,499</span>
                <span className="text-xs text-slate-400 block">per person (Twin Sharing)</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Includes 4 nights resort stay, a boat trip to Grand Island with guided introductory scuba diving with underwater video/photos, dolphin spotting, BBQ lunch on the island, North Goa forts, and South Goa churches.
            </p>
          </div>
        </section>

        {/* SECTION 2: FAQS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" /> Frequently Asked Questions
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

        {/* SECTION 3: CTA */}
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-amber-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Ready for Your Sunny Goa Beach Escape?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Tell us your travel dates and group size. We'll secure top-rated poolside resorts, private cab transfers, and group discounts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I am planning a Goa trip. Please send package options and details.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Goa Team
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

export default GoaMaster;
