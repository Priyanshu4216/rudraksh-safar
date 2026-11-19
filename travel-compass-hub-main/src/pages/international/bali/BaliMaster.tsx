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
  Sparkles,
  Plane
} from 'lucide-react';

const BaliMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/international-tours/bali';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'International Packages', url: '/international-packages' },
    { name: 'Bali Tour Packages', url: '/international-tours/bali' }
  ];

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    'name': 'Bali, Indonesia',
    'description': 'Handcrafted Bali tour packages from Rudraksh Safar. Private pool villas in Ubud, Seminyak beach clubs, Nusa Penida island speedboat tours, and Uluwatu Kecak dance with English-speaking private drivers and Indian dining options.',
    'url': canonicalUrl,
    'touristType': ['Honeymoon', 'Couples', 'Family', 'Beach & Culture']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the visa policy for Indian passport holders traveling to Bali?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Indian citizens can obtain an electronic Visa on Arrival (e-VoA) online before departure or a physical Visa on Arrival (VoA) at Denpasar Airport (DPS) for 500,000 IDR (approx. ₹2,700 / $35 USD). It is valid for 30 days and extendable once. An online electronic customs declaration (ECD) QR code is also required.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is the Bali Tourist Tax compulsory for Indians?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Bali has an official provincial tourist levy of 150,000 IDR (approx. ₹800 / $10 USD) per foreign visitor, payable online via the Love Bali official portal (lovebali.baliprov.go.id) before arrival.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How is Indian vegetarian and Jain food in Bali?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Bali is very vegetarian-friendly. Areas like Kuta, Seminyak, and Ubud have dozens of authentic Indian restaurants (such as Queen\'s Tandoor, Ganesha Ek Sanskriti, and spice restaurants) serving pure vegetarian and Jain food. Indonesian cuisine also offers delicious tofu and tempeh dishes.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is included in the private pool villa stay?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our villa stays feature a 100% private plunge pool, king-size bedroom, open-air tropical bathroom, air conditioning, and daily made-to-order breakfast (with floating breakfast setups available on request).'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white">
      <Helmet>
        <title>Bali Tour Packages 2026-2027: Private Pool Villa & Nusa Penida | Rudraksh Safar</title>
        <meta
          name="description"
          content="Book verified Bali tour packages from ₹28,400. Luxury Ubud private pool villas, Seminyak beaches, Nusa Penida speedboat tour & Uluwatu Kecak dance. VoA support & private cab."
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
            <Badge className="bg-rose-600/20 text-rose-400 border-rose-500/30 text-xs font-semibold px-2.5 py-1">
              Verified International Silo Hub
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Ubud Private Pool Villas
            </Badge>
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 text-xs">
              Easy Visa on Arrival (VoA)
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Bali Tour Packages: Private Pool Villas & Tropical Escapes
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            The Island of the Gods awaits. Experience the perfect harmony of spirituality, luxury, and coastal glamour. From romantic private pool villas tucked inside Ubud's jungle valleys to the awe-inspiring cliffs of Nusa Penida and sunset Kecak dances in Uluwatu, Rudraksh Safar handles every detail with dedicated private chauffeurs and verified hotels.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-rose-400" /> Private Pool Villa
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Included in Package</div>
              <p className="text-xs text-slate-400 mt-1">Exclusive private villa in Ubud with plunge pool and floating breakfast options.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-teal-400" /> Private Car & Driver
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">English-Speaking</div>
              <p className="text-xs text-slate-400 mt-1">Dedicated private air-conditioned vehicle for all sightseeing and airport transfers.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Palmtree className="w-4 h-4 text-blue-400" /> Nusa Penida Tour
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Speedboat Included</div>
              <p className="text-xs text-slate-400 mt-1">Day tour to Kelingking T-Rex Beach, Broken Beach & Angel's Billabong.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> VoA & ECD Support
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Document Checklist</div>
              <p className="text-xs text-slate-400 mt-1">Full guidance for e-VoA application and mandatory Love Bali tourist tax.</p>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1: DETAILED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-rose-400" /> Flagship Bali Tour Itineraries (12-Point Standard)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Detailed morning, afternoon, and evening timelines with verified driving durations and itemized disclosures.
            </p>
          </div>

          {/* Package 1: 5N/6D Bali Romantic & Scenic Escape */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-rose-600 text-white font-bold text-xs">Top Honeymoon Pick</Badge>
                  <span className="text-xs text-slate-400">Duration: 6 Days / 5 Nights</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  Bali Romantic & Scenic Escape (Beach Resort + Ubud Private Pool Villa)
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-black text-rose-400">₹28,400</div>
                <span className="text-xs text-slate-400">per person (Twin Sharing Basis)</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Day-by-Day Detailed Schedule:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-rose-300 text-sm">Day 1: Arrival at Denpasar Bali Airport & Seminyak Coastal Sunset</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Afternoon:</strong> Arrive at Ngurah Rai International Airport (DPS) in Denpasar. Clear immigration with Visa on Arrival / e-VoA. Your private English-speaking chauffeur receives you with flower garlands and transfers you to your 4-star hotel in Kuta / Seminyak (approx. 30–45 mins).<br />
                    <strong>Evening:</strong> Check in and rest. Take an evening stroll along Seminyak Beach. Enjoy sunset drinks at iconic beach clubs (La Plancha / Potato Head) and dinner at an Indian restaurant. Overnight in Seminyak hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-rose-300 text-sm">Day 2: Tanjung Benoa Water Sports & Sunset Uluwatu Kecak Fire Dance</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the hotel. Drive to Tanjung Benoa Peninsula, Bali's water sports hub. Enjoy an exciting Banana Boat ride (included). Optional parasailing, sea walker, and jet ski available on direct payment.<br />
                    <strong>Afternoon:</strong> Visit the picturesque Pandawa Beach or Melasti Beach with its dramatic limestone cliffs.<br />
                    <strong>Evening:</strong> Head to the ancient cliff-hanging Uluwatu Temple perched 70 meters above the roaring Indian Ocean. Watch the mesmerizing open-air Kecak Fire Dance performance depicting the Ramayana epic during the golden hour sunset. Dinner and overnight in Seminyak hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-rose-300 text-sm">Day 3: Full Day Nusa Penida Island Speedboat Tour</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Early morning pickup (approx. 6:30 AM) and transfer to Sanur Harbour. Board a high-speed catamaran to Nusa Penida Island (approx. 45-minute cruise across the Badung Strait).<br />
                    <strong>Midday:</strong> Board a private island car. Marvel at the breathtaking T-Rex-shaped cliff of Kelingking Beach. Visit Angel's Billabong (natural tidal infinity pool) and the dramatic archway of Broken Beach (Pasih Uug). Enjoy a local Indonesian lunch.<br />
                    <strong>Evening:</strong> Swim or relax at Crystal Bay before boarding the afternoon speedboat back to Sanur. Return transfer to your hotel. Overnight in Seminyak hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-rose-300 text-sm">Day 4: Transfer to Ubud via Tegenungan Waterfall & Check-in to Private Pool Villa</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the resort and check out. Scenic drive into the central highlands of Ubud (approx. 1.5 hrs). En route, visit Celuk silver artisan village and the lush jungle cascade of Tegenungan Waterfall.<br />
                    <strong>Afternoon:</strong> Check in to your luxury Private Pool Villa in Ubud. Relax by your private plunge pool surrounded by tropical palm greenery.<br />
                    <strong>Evening:</strong> Explore the lively Ubud Art Market and Ubud Royal Palace. Savor an authentic dinner in Ubud town. Overnight in Ubud Private Pool Villa.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-rose-300 text-sm">Day 5: Ubud Rice Terraces, Bali Jungle Swing & Kintamani Batur Volcano</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at your villa (optional floating breakfast setup). Visit Tegalalang Rice Terraces with emerald green cascading hills. Ride the famous Bali Jungle Swing overlooking the palm ravine.<br />
                    <strong>Midday:</strong> Visit an organic coffee and cocoa plantation to sample the world-famous Kopi Luwak. Proceed to Kintamani viewpoint for panoramic vistas of active Mount Batur volcano and Lake Batur with a buffet lunch.<br />
                    <strong>Evening:</strong> Stop by the sacred Tirta Empul holy water spring temple for a traditional spiritual blessing. Return to your private villa for a romantic candlelit evening. Overnight in Ubud Villa.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-rose-300 text-sm">Day 6: Tanah Lot Sea Temple, Souvenir Shopping & Denpasar Airport Departure</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Leisurely breakfast and villa check-out. Drive to the famous offshore Tanah Lot Temple, built on a rocky sea outcrop surrounded by breaking waves.<br />
                    <strong>Afternoon:</strong> Stop at Krisna Oleh Oleh wholesale market for authentic Balinese handicrafts, batik shirts, and aromatics. Private transfer to Denpasar Airport (DPS) for your homeward flight.
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
                  <li>• 3 Nights in 4-Star Resort in Kuta / Seminyak</li>
                  <li>• 2 Nights in Luxury Private Pool Villa in Ubud</li>
                  <li>• Daily Buffet Breakfast at hotels / villa</li>
                  <li>• Dedicated Private AC Car with English-speaking driver for all tours</li>
                  <li>• Roundtrip fast boat tickets to Nusa Penida Island with island transport & lunch</li>
                  <li>• Banana Boat water sport activity at Tanjung Benoa</li>
                  <li>• Uluwatu Temple & Kecak Fire Dance admission tickets</li>
                  <li>• Bali Jungle Swing entry & coffee plantation tasting</li>
                  <li>• Airport pickup, drop-off, parking fees, and driver allowances</li>
                  <li>• 24/7 on-trip assistance from Rudraksh Safar</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Clear Exclusions & Extra Tariffs
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• International airfare to and from Bali (DPS)</li>
                  <li>• Indonesia Visa on Arrival (VoA): 500,000 IDR (~₹2,700) paid online or at airport</li>
                  <li>• Bali Tourist Tax: 150,000 IDR (~₹800) paid via Love Bali portal</li>
                  <li>• Lunch & Dinner (except where noted during full-day tours)</li>
                  <li>• Personal expenses (water sports upgrades, spa treatments)</li>
                  <li>• 5% GST and 5% TCS (with TCS credit claimable in annual IT return)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Package 2: 6N/7D Grand Explorer */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-teal-600 text-white font-bold text-xs mr-2">Comprehensive</Badge>
                <span className="text-lg font-bold text-white">6N/7D Bali Grand Explorer (Seminyak, Ubud & Gili Islands)</span>
              </div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-black text-rose-400">₹34,500</span>
                <span className="text-xs text-slate-400 block">per person (Twin Sharing)</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Expands the signature escape with an additional night in the car-free island paradise of Gili Trawangan, famous for sea turtle snorkeling, bicycle touring, and beachfront cafes. Includes inter-island speedboats and private resort transfers.
            </p>
          </div>
        </section>

        {/* SECTION 2: FAQS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-rose-400" /> Frequently Asked Questions
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
        <div className="bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-rose-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Book Your Romantic Bali Villa Vacation</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with our Bali holiday desk. We verify villa availability, assist with e-VoA documentation, and craft customized honeymoon surprises.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I am planning a Bali trip. Please share private pool villa packages and quotes.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Bali Specialist
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

export default BaliMaster;
