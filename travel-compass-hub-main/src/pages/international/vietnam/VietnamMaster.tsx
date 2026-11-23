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
  Ship,
  Hotel,
  Utensils,
  Car,
  HelpCircle,
  Plane,
  Sparkles
} from 'lucide-react';

const VietnamMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/international-tours/vietnam';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'International Packages', path: '/international-packages' },
    { label: 'Vietnam Tour Packages', path: '/international-tours/vietnam' }
  ];

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    'name': 'Vietnam',
    'description': 'Handcrafted Vietnam tour packages from Rudraksh Safar. Overnight luxury Halong Bay cruises, Ba Na Hills Golden Giant Hand Bridge in Da Nang, Hanoi Old Quarter, and Hoi An ancient lantern town with Indian dining and eVisa support.',
    'url': canonicalUrl,
    'touristType': ['Honeymoon', 'Family', 'Cultural Heritage', 'Scenic Cruise']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do Indian citizens get a visa for Vietnam?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Indian passport holders can obtain an electronic visa (eVisa) online through the official Vietnamese Immigration portal (evisa.xuatnhapcanh.gov.vn). The processing fee is $25 USD and approval takes 3 to 4 business days. A passport with at least 6 months validity is required.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What flight options are available from India to Vietnam?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Direct nonstop flights operate from New Delhi (DEL), Mumbai (BOM), and Kolkata (CCU) to Hanoi (HAN) and Ho Chi Minh City (SGN) via VietJet and Vietnam Airlines. Travelers from Raipur (RPR) can easily connect via Kolkata or Delhi.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is Indian vegetarian food readily available in Vietnam?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Major tourist hubs including Hanoi Old Quarter, Da Nang, and Hoi An feature authentic Indian restaurants (such as Namaste Hanoi, Mumtaz, and Family Indian Restaurant) offering pure vegetarian thalis, naan, and paneer dishes.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is Halong Bay better as a day trip or an overnight cruise?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'An overnight cruise is strongly recommended. Day trips spend 5–6 hours in road transit leaving only 3 hours on the bay. An overnight cruise lets you explore deeper caves, kayak through hidden lagoons, witness sunset and sunrise over karst peaks, and sleep peacefully on emerald waters.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      <Helmet>
        <title>Vietnam Tour Packages 2026-2027: Halong Bay, Hanoi & Da Nang | Rudraksh Safar</title>
        <meta
          name="description"
          content="Book verified Vietnam tour packages from ₹36,900. Luxury overnight Halong Bay cruise, Ba Na Hills Golden Hand Bridge, Hanoi Old Quarter & Hoi An lantern town. eVisa guidance & private tours."
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
            <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-xs font-semibold px-2.5 py-1">
              Verified International Silo Hub
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Overnight Halong Bay Cruise
            </Badge>
            <Badge variant="outline" className="border-amber-500/30 text-amber-300 text-xs">
              Direct Flights from India
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Vietnam Tour Packages: Hanoi, Halong Bay & Da Nang
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            From the thousand-year-old French colonial alleys of Hanoi to the otherworldly limestone karsts of Halong Bay and the iconic Golden Bridge held by giant stone hands in Da Nang, Vietnam offers Southeast Asia's most enchanting blend of landscapes, culture, and value.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Ship className="w-4 h-4 text-emerald-400" /> Halong Bay Cruise
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Overnight Luxury</div>
              <p className="text-xs text-slate-400 mt-1">4-star cruise with balcony cabin, kayaking, and all meals on board.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" /> Golden Bridge
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Ba Na Hills Pass</div>
              <p className="text-xs text-slate-400 mt-1">Cable car pass to the world-famous giant hand bridge and French village.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-teal-400" /> Private Transfers
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Dedicated Vehicle</div>
              <p className="text-xs text-slate-400 mt-1">Comfortable air-conditioned private vehicle and English-speaking guide.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" /> eVisa Guidance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Quick 3-Day eVisa</div>
              <p className="text-xs text-slate-400 mt-1">Full step-by-step assistance with official Vietnamese eVisa filing.</p>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1: DETAILED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-emerald-400" /> Flagship Vietnam Itineraries (12-Point Standard)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Thoughtfully paced circuits combining UNESCO heritage wonders, private transfers, and confirmed monument entries.
            </p>
          </div>

          {/* Package 1: 5N/6D Vietnam Highlights Tour */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-600 text-white font-bold text-xs">Flagship Circuit</Badge>
                  <span className="text-xs text-slate-400">Duration: 6 Days / 5 Nights</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  Vietnam Highlights: Hanoi, Halong Bay Cruise & Da Nang Golden Bridge
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-black text-emerald-400">₹36,900</div>
                <span className="text-xs text-slate-400">per person (Twin Sharing Basis)</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Day-by-Day Detailed Schedule:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 1: Arrival in Hanoi & Old Quarter Cyclo Tour</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Afternoon:</strong> Arrive at Noi Bai International Airport (HAN) in Hanoi. Private pickup and transfer to your 4-star boutique hotel in the historic French Quarter (approx. 45 mins).<br />
                    <strong>Evening:</strong> Take a traditional 1-hour Cyclo ride through the lively 36 Guild Streets of the Old Quarter. Walk around the tranquil Hoan Kiem Lake and cross the scarlet Huc Bridge to visit Ngoc Son Temple. Watch a classic Thang Long Water Puppet Theatre performance. Dinner at an Indian restaurant. Overnight in Hanoi hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 2: Hanoi to Halong Bay — Board Luxury Overnight Cruise (160 km / 2.5 hrs)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>8:30 AM:</strong> Scenic drive via the modern expressway to Tuan Chau Marina in Halong Bay.<br />
                    <strong>12:00 PM:</strong> Board your 4-star luxury cruise ship. Enjoy a welcome drink and orientation briefing as the ship sets sail past majestic limestone karsts and islets (Stone Dog, Incense Burner). Savor a lavish seafood or vegetarian buffet lunch on board.<br />
                    <strong>Afternoon:</strong> Explore Sung Sot (Surprise Cave), the largest and most dramatic cave in Halong Bay. Hike to the summit of Ti Top Island for a panoramic 360-degree viewpoint or swim at the white-sand crescent beach. Kayak through hidden lagoons.<br />
                    <strong>Evening:</strong> Sunset party with tea and fresh fruit on the sundeck. Vietnamese cooking demonstration (spring rolls). Multi-course dinner served on board followed by evening squid fishing. Overnight in luxury cruise cabin.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 3: Halong Bay Sunrise & Flight to Coastal Da Nang</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>6:30 AM:</strong> Rejuvenating morning Tai Chi session on the open sundeck as the sun rises over the limestone towers. Light breakfast served.<br />
                    <strong>Morning:</strong> Explore Luon Cave on a bamboo sampan rowed by a local fisherman. Return to ship, check out, and enjoy an early brunch buffet as the cruise glides back to the harbour. Disembark at 11:30 AM.<br />
                    <strong>Afternoon:</strong> Transfer directly to Hanoi Airport for a short 1-hour domestic flight to Da Nang (DAD). Arrive in Da Nang and check in to your seaside hotel near My Khe Beach.<br />
                    <strong>Evening:</strong> Witness the weekend fire-and-water-breathing spectacle at the Dragon Bridge over the Han River. Overnight in Da Nang hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 4: Full Day Ba Na Hills & Iconic Golden Bridge Excursion</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Board the world-record-holding cable car ascending 1,487 meters up into Ba Na Hills. Walk across the world-famous Golden Bridge, suspended high in the clouds and cradled by two colossal mossy stone hands.<br />
                    <strong>Midday:</strong> Visit the Linh Ung Pagoda with its 27-meter white Buddha statue, explore the manicured French Village with Gothic stone castles, and enjoy indoor rides at Fantasy Park. International buffet lunch included.<br />
                    <strong>Evening:</strong> Descend via cable car and return to Da Nang. Relax along the palm-fringed sands of My Khe Beach. Overnight in Da Nang hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 5: Marble Mountains & UNESCO Ancient Town of Hoi An</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Visit the mystical Marble Mountains (Ngu Hanh Son) to explore natural limestone grottoes, Buddhist shrines, and stone-carving villages.<br />
                    <strong>Afternoon:</strong> Drive to Hoi An Ancient Town (UNESCO World Heritage Site). Stroll through narrow pedestrian streets flanked by yellow merchant shophouses. Visit the 400-year-old Japanese Covered Bridge, Phuc Kien Assembly Hall, and ancient tea houses.<br />
                    <strong>Evening:</strong> Take a romantic wooden boat ride on the Hoai River to release floating paper flower lanterns. Marvel at thousands of illuminated silk lanterns lighting up the town. Overnight in Da Nang hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-300 text-sm">Day 6: Vietnamese Coffee Shopping & Da Nang Airport Departure</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at hotel. Visit Han Market or local specialty stores for premium Vietnamese Robusta/Arabica coffee, dried lotus seeds, and silk scarves.<br />
                    <strong>Afternoon:</strong> Private vehicle transfer to Da Nang International Airport (DAD) for your connecting flight homeward. Tour concludes with spectacular memories.
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
                  <li>• 1 Night in 4-Star Boutique Hotel in Hanoi Old Quarter</li>
                  <li>• 1 Night in Luxury Cabin on Halong Bay 4-Star Cruise Ship</li>
                  <li>• 3 Nights in 4-Star Beachside Hotel in Da Nang</li>
                  <li>• Cruise Meal Plan: 1 Lunch, 1 Dinner, 1 Light Breakfast & 1 Brunch included</li>
                  <li>• Daily Buffet Breakfast at all hotels</li>
                  <li>• All transfers in private AC vehicle with English-speaking local guides</li>
                  <li>• Ba Na Hills return cable car passes & Golden Bridge entry</li>
                  <li>• Halong Bay cave excursions, kayaking, and Ti Top Island visit</li>
                  <li>• Hoi An Ancient Town entry tickets & river lantern boat ride</li>
                  <li>• 24/7 dedicated support from Rudraksh Safar</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Clear Exclusions & Extra Tariffs
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• International flights (India – Hanoi & Da Nang – India)</li>
                  <li>• Domestic flight ticket (Hanoi to Da Nang - approx. ₹3,500–₹5,000)</li>
                  <li>• Vietnam Single Entry Tourist eVisa ($25 USD online fee)</li>
                  <li>• Lunches and Dinners not specifically mentioned in the itinerary</li>
                  <li>• Personal expenses (laundry, beverages, tips for guides/drivers)</li>
                  <li>• 5% GST and 5% TCS (TCS fully adjustable in annual income tax)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Package 2: 4N/5D South Vietnam */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-blue-600 text-white font-bold text-xs mr-2">Southern Explorer</Badge>
                <span className="text-lg font-bold text-white">4N/5D South Vietnam: Ho Chi Minh City, Cu Chi Tunnels & Mekong Delta</span>
              </div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-black text-emerald-400">₹29,999</span>
                <span className="text-xs text-slate-400 block">per person (Twin Sharing)</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Experience the energetic metropolis of Saigon, explore the historic underground Cu Chi guerrilla tunnel network, and glide on sampan boats through the coconut palm waterways and floating fruit orchards of the Mekong Delta.
            </p>
          </div>
        </section>

        {/* SECTION 2: FAQS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-400" /> Frequently Asked Questions
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
        <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-emerald-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Plan Your Journey Through Vietnam</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Experience Halong Bay and the Golden Bridge with guaranteed cabins, private AC cars, and Indian-friendly meal plans.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I want to book a Vietnam tour package. Please share details and the best quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Vietnam Expert
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

export default VietnamMaster;
