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
  Mountain,
  Hotel,
  Utensils,
  Car,
  HelpCircle,
  Snowflake,
  CableCar
} from 'lucide-react';

const AlmatyMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/international-tours/almaty-kazakhstan';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'International Packages', path: '/international-packages' },
    { label: 'Almaty Kazakhstan Tour Packages', path: '/international-tours/almaty-kazakhstan' }
  ];

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    'name': 'Almaty, Kazakhstan',
    'description': 'Handcrafted Almaty Kazakhstan tour packages from Rudraksh Safar. Shymbulak mountain ski resort, Medeu high-altitude ice rink, Charyn Canyon, Kok Tobe cable car, and Zenkov Cathedral with 14-day visa-free entry for Indian citizens.',
    'url': canonicalUrl,
    'touristType': ['Snow Holiday', 'Mountain Adventure', 'Family', 'Nature Excursions']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Do Indian passport holders need a visa to visit Almaty, Kazakhstan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Indian citizens enjoy 14-day visa-free entry into Kazakhstan for tourism and business purposes. You only need a passport with at least 6 months validity from your arrival date and return flight tickets.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long is the flight from India to Almaty?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Direct nonstop flights from New Delhi (DEL) to Almaty International Airport (ALA) take only 3.5 hours via Air Astana and IndiGo, making it one of the closest and most accessible international snow destinations for Indians.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is Indian vegetarian food available in Almaty?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Almaty has several popular authentic Indian restaurants (including Bollywood, Tandoor, and Spice Mantra) serving fresh vegetarian dishes, rotis, and dal. Many local cafes also serve vegetarian salads, baked potatoes, and cheese pastries.'
        }
      },
      {
        '@type': 'Question',
        'name': 'When is the best time to see snow in Shymbulak and Almaty?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'For winter snow sports and skiing at Shymbulak Ski Resort, the best window is from December through March. Summer (May to September) offers pleasant 22°C mountain trekking and green alpine lakes.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-600 selection:text-white">
      <Helmet>
        <title>Almaty Kazakhstan Tour Packages 2026-2027: Shymbulak & Charyn Canyon | Rudraksh Safar</title>
        <meta
          name="description"
          content="Book verified Almaty tour packages from ₹25,999. Shymbulak mountain ski gondola, Medeu ice rink, Charyn Canyon & Kok Tobe cable car. 14-day visa-free for Indians & 3.5h direct flights."
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
            <Badge className="bg-sky-600/20 text-sky-400 border-sky-500/30 text-xs font-semibold px-2.5 py-1">
              Verified International Silo Hub
            </Badge>
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 text-xs">
              14-Day Visa-Free for Indians
            </Badge>
            <Badge variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
              Just 3.5h Direct Flight from Delhi
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Almaty Kazakhstan Tour Packages: Shymbulak Snow & Charyn Canyon
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Central Asia's winter wonderland is just 3.5 hours from India. Glide up the Tien Shan mountains on the Shymbulak ski gondola to 3,200 meters, marvel at the geological wonder of Charyn Canyon, and take the Kok Tobe cable car above the sparkling cityscape of Almaty with zero visa hassle.
          </p>
        </header>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 14-Day Visa-Free
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Zero Visa Fee</div>
              <p className="text-xs text-slate-400 mt-1">Indian passport holders travel completely visa-free for up to 14 days.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <CableCar className="w-4 h-4 text-sky-400" /> Shymbulak Resort
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Cable Car to 3,200m</div>
              <p className="text-xs text-slate-400 mt-1">3-stage gondola ride over Medeu ice rink up to Talgar Pass snow fields.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Mountain className="w-4 h-4 text-amber-400" /> Charyn Canyon
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Valley of Castles</div>
              <p className="text-xs text-slate-400 mt-1">Full-day private guided expedition to the breathtaking red canyon.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-teal-400" /> 4-Star City Stays
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Central Almaty</div>
              <p className="text-xs text-slate-400 mt-1">Heated 4-star properties near Arbat walking street and restaurants.</p>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1: DETAILED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-sky-400" /> Flagship Almaty Itineraries (12-Point Standard)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Complete timelines with cable car passes, highway drive times, and transparent pricing.
            </p>
          </div>

          {/* Package 1: 4N/5D Almaty Snow & Nature Adventure */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-sky-600 text-white font-bold text-xs">Snow Bestseller</Badge>
                  <span className="text-xs text-slate-400">Duration: 5 Days / 4 Nights</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  Almaty Snow & Nature Adventure (Shymbulak, Charyn Canyon & Kok Tobe)
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-black text-sky-400">₹25,999</div>
                <span className="text-xs text-slate-400">per person (Twin Sharing Basis)</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Day-by-Day Detailed Schedule:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-sky-300 text-sm">Day 1: Arrival in Almaty & Kok Tobe Hill Cable Car Sunset</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning/Afternoon:</strong> Arrive at Almaty International Airport (ALA) via direct flight from New Delhi. Clear immigration smoothly with 14-day visa-free stamp. Our private English-speaking chauffeur receives you and transfers you to your heated 4-star city hotel (approx. 30 mins).<br />
                    <strong>Evening:</strong> Ride the scenic Kok Tobe cable car soaring over the city's residential districts up to Kok Tobe mountain (1,100m). Enjoy 360-degree night views of illuminated Almaty, visit the life-size bronze Beatles monument, and dine at a rooftop restaurant. Overnight in Almaty hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-sky-300 text-sm">Day 2: Medeu High-Altitude Skating Rink & Shymbulak Mountain Ski Resort</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the hotel. Drive into the picturesque Ile-Alatau mountain gorge to Medeu (altitude 1,691m), the world's highest Olympic outdoor ice skating rink.<br />
                    <strong>Midday:</strong> Board the modern cable car gondola ascending to Shymbulak Ski Resort (2,260m) and onward to the third level at Talgar Pass (altitude 3,200m). Marvel at jagged snow peaks and glacier valleys. Enjoy snow tubing, beginner ski lessons, or relax with hot coffee at alpine cafes.<br />
                    <strong>Evening:</strong> Descend back to the city. Dinner at an authentic Indian restaurant serving hot curries and tandoori breads. Overnight in Almaty hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-sky-300 text-sm">Day 3: Full-Day Charyn Canyon Expedition — "Valley of Castles" (210 km / 3 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>8:00 AM:</strong> Depart in private AC vehicle towards the Charyn National Park along the Silk Road steppe highway.<br />
                    <strong>Midday:</strong> Arrive at the majestic Charyn Canyon, often hailed as Central Asia's Grand Canyon. Hike down the 2-kilometer trail through the "Valley of Castles" surrounded by towering red sandstone pillars and natural arches sculpted over 12 million years. Reach the rushing turquoise Charyn River in the canyon floor for relaxation.<br />
                    <strong>Evening:</strong> Savor a traditional Kazakh or vegetarian lunch at an ethno-cafe. Return drive to Almaty city in the late afternoon. Overnight in Almaty hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-sky-300 text-sm">Day 4: Almaty City Heritage, Zenkov Cathedral & Green Bazaar Shopping</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> City heritage tour: visit Panfilov Park and the 56-meter-tall Ascension Cathedral (Zenkov Cathedral), one of the world's tallest all-wooden churches built entirely without metal nails. View the imposing World War II Memorial of the 28 Panfilov Heroes.<br />
                    <strong>Afternoon:</strong> Explore the vibrant Green Bazaar (Zelyony Bazar). Sample local honey, dried apricots, walnuts, and horse milk cheese (Qurt). Visit the famous Rakhat Chocolate factory store for premium Kazakh chocolates.<br />
                    <strong>Evening:</strong> Walk through the lively pedestrian promenade of Arbat (Zhibek Zholy street) with street painters and musicians. Farewell dinner. Overnight in Almaty hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-sky-300 text-sm">Day 5: Mega Center Shopping & Almaty Airport Departure</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast and hotel check-out. Visit Mega Park Mall or Dostyk Plaza for duty-free brand shopping and souvenirs.<br />
                    <strong>Afternoon:</strong> Private vehicle transfer to Almaty International Airport (ALA) for your 3.5-hour direct flight back to New Delhi. Tour concludes with breathtaking memories.
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
                  <li>• 4 Nights in 4-Star Heated City Hotel in Central Almaty</li>
                  <li>• Daily Buffet Breakfast at the hotel</li>
                  <li>• Dedicated Private AC Vehicle with English-speaking driver/guide for all 5 days</li>
                  <li>• Kok Tobe Hill return cable car tickets included</li>
                  <li>• Medeu to Shymbulak return cable car gondola passes included</li>
                  <li>• Full-Day Charyn Canyon excursion with national park entry permits</li>
                  <li>• Almaty Airport pickup and drop-off transfers</li>
                  <li>• 24/7 dedicated trip assistance from Rudraksh Safar</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Clear Exclusions & Extra Tariffs
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• International flights (Delhi – Almaty roundtrip approx. ₹24,000–₹32,000)</li>
                  <li>• Lunch and dinner meals not specified</li>
                  <li>• Ski equipment rentals or snow activity tickets at Shymbulak</li>
                  <li>• Travel insurance and personal expenses</li>
                  <li>• 5% GST and 5% TCS (TCS fully adjustable in annual income tax)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FAQS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-400" /> Frequently Asked Questions
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
        <div className="bg-gradient-to-r from-sky-950/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-sky-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Experience the Magic of Almaty Snow</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Fly to the Tien Shan mountains without visa complications. We manage private transfers, cable car passes, and 4-star stays.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I want to book an Almaty Kazakhstan tour package. Please share details and best quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Almaty Specialist
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

export default AlmatyMaster;
