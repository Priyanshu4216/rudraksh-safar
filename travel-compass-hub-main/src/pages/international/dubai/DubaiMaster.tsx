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
  Building2,
  Hotel,
  Utensils,
  Car,
  HelpCircle,
  Sparkles,
  Plane
} from 'lucide-react';

const DubaiMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/international-tours/dubai';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'International Packages', path: '/international-packages' },
    { label: 'Dubai Tour Packages', path: '/international-tours/dubai' }
  ];

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    'name': 'Dubai, United Arab Emirates',
    'description': 'Handcrafted Dubai tour packages by Rudraksh Safar. Burj Khalifa 124th floor tickets, 4x4 Desert Safari with BBQ camp, Marina Dhow Cruise, Miracle Garden, Global Village & Abu Dhabi BAPS Mandir with verified 4-star hotels and UAE eVisa support.',
    'url': canonicalUrl,
    'touristType': ['Family', 'Shopping', 'Luxury', 'Adventure']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How long does it take to get a Dubai Tourist Visa for Indian citizens?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A UAE 30-day single-entry tourist eVisa typically processes in 48 to 72 working hours. Only a passport copy (valid for 6+ months) and white-background photo are required. Rudraksh Safar provides complete visa processing and Ok-To-Board (OTB) verification.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the Tourism Dirham Fee in Dubai hotels?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The Tourism Dirham is a mandatory municipal hotel tax levied by the Dubai Department of Economy and Tourism. For 4-star hotels, it is 15 AED (approx. ₹350) per room per night, paid directly at the hotel reception upon check-in.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is Indian vegetarian and Jain dining available in Dubai?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Dubai is one of the easiest international cities for Indian food. Areas like Bur Dubai, Karama, and Deira have hundreds of pure vegetarian restaurants (Saravanaa Bhavan, Rasoi Ghar, Sagar Ratna) serving North Indian, South Indian, and strict Jain thalis.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the best time to visit Dubai?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The best season is from November to March when daytime temperatures range from 20°C to 28°C. Seasonal attractions like Dubai Miracle Garden and Global Village are open exclusively during these cooler winter months.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      <Helmet>
        <title>Dubai Tour Packages 2026-2027: Burj Khalifa & Desert Safari | Rudraksh Safar</title>
        <meta
          name="description"
          content="Book verified Dubai tour packages from ₹28,999. Burj Khalifa 124th floor, 4x4 Desert Safari BBQ, Marina Dhow Cruise & Abu Dhabi BAPS Mandir. UAE eVisa assistance & 4-star stays."
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
            <Badge className="bg-amber-600/20 text-amber-400 border-amber-500/30 text-xs font-semibold px-2.5 py-1">
              Verified International Silo Hub
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              4-Star City Hotels near Metro
            </Badge>
            <Badge variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
              Fast 48-Hour UAE eVisa
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Dubai Tour Packages: Burj Khalifa, Desert Safari & Luxury Stays
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Where futuristic architecture meets Arabian hospitality. Stand atop the world at Burj Khalifa's 124th floor, conquer golden sand dunes in a 4x4 Land Cruiser, cruise beneath neon skyscrapers on a Dubai Marina Dhow, and explore the grand BAPS Hindu Mandir in Abu Dhabi.
          </p>
        </header>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-400" /> Burj Khalifa
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Tickets Included</div>
              <p className="text-xs text-slate-400 mt-1">Confirmed entry passes to 124th & 125th floor observation deck.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-teal-400" /> Desert Safari
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">4x4 Land Cruiser</div>
              <p className="text-xs text-slate-400 mt-1">Red dune bashing, camel rides, tanoura dance, and Arabian BBQ dinner.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-blue-400" /> 4-Star Stays
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Central Locations</div>
              <p className="text-xs text-slate-400 mt-1">Properties in Bur Dubai / Al Barsha with easy access to metro stations.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Visa & OTB
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Hassle-Free Processing</div>
              <p className="text-xs text-slate-400 mt-1">Complete UAE tourist visa facilitation with Ok-To-Board updates.</p>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1: DETAILED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-400" /> Flagship Dubai Tour Itineraries (12-Point Standard)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Every package features confirmed monument tickets, smooth transit pacing, and transparent inclusions.
            </p>
          </div>

          {/* Package 1: 4N/5D Dubai City & Desert Wonder */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-600 text-white font-bold text-xs">Bestseller</Badge>
                  <span className="text-xs text-slate-400">Duration: 5 Days / 4 Nights</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  Dubai City & Desert Wonder (Burj Khalifa, Desert Safari & Marina Cruise)
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-black text-amber-400">₹28,999</div>
                <span className="text-xs text-slate-400">per person (Twin Sharing Basis)</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Day-by-Day Detailed Schedule:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 1: Arrival in Dubai & Marina Dhow Cruise Dinner</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Afternoon:</strong> Arrive at Dubai International Airport (DXB). Meet our representative and enjoy private transfer to your 4-star hotel in Bur Dubai or Al Barsha. Check in and refresh.<br />
                    <strong>Evening:</strong> Board an illuminated traditional wooden Dhow at Dubai Marina. Glide along the 3-kilometer canal lined with spectacular illuminated skyscrapers. Enjoy a 5-star international buffet dinner with live Tanoura dance show and soft acoustic music. Overnight in Dubai hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 2: Dubai City Tour & Burj Khalifa 124th Floor Observatory</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Guided half-day city tour: drive past Zabeel Palace (ruler's palace), take photo stops at Dubai Frame, Jumeirah Mosque, and the 7-star Burj Al Arab from Kite Beach. Cross the Palm Jumeirah Monorail to view Atlantis The Palm.<br />
                    <strong>Afternoon:</strong> Visit the colossal Dubai Mall. View the massive Dubai Aquarium and Underwater Zoo glass tunnel.<br />
                    <strong>Evening:</strong> Ascend the high-speed elevator to the 124th & 125th floor observatory of Burj Khalifa. Witness the 360-degree sunset panorama over the Arabian Gulf and desert. Watch the musical Dubai Fountain show from the promenade. Dinner at Dubai Mall. Overnight in Dubai hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 3: Morning at Leisure & Evening 4x4 Desert Safari with BBQ Dinner</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Leisurely breakfast. Visit the historic Gold Souk and Spice Souk in Deira for jewelry and saffron shopping, or relax at the hotel pool.<br />
                    <strong>3:00 PM:</strong> Board a 4x4 Toyota Land Cruiser for a thrilling Desert Safari into the Lahbab red dunes. Experience 45 minutes of exhilarating dune bashing, sandboarding, and sunset photography.<br />
                    <strong>Evening:</strong> Arrive at the Bedouin desert camp. Enjoy camel riding, henna hand designing, and sheesha. Savor a lavish BBQ buffet dinner (vegetarian and non-vegetarian) while enjoying live fire-breathing performances and belly dancing. Return to hotel by 9:30 PM. Overnight in Dubai hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 4: Dubai Miracle Garden & Global Village Pavilion Carnival</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Post breakfast, visit the world-renowned Dubai Miracle Garden, home to 150+ million flowers sculpted into giant Emirates A380 aircraft, castles, and heart-shaped tunnels (seasonal Nov–Apr).<br />
                    <strong>Afternoon/Evening:</strong> Head to Global Village, a grand open-air entertainment and cultural extravaganza featuring 90+ country pavilions. Shop for Turkish lamps, Kashmiri shawls, and Thai souvenirs, and enjoy live street performances and international street food. Return to hotel for overnight stay.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 5: Meena Bazaar Shopping & Dubai Airport Departure</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the hotel and check out. Visit Meena Bazaar or Deira City Centre for duty-free electronics, dates, and chocolates.<br />
                    <strong>Afternoon:</strong> Private vehicle transfer to Dubai International Airport (DXB) timed 3 hours before your homeward flight. Tour concludes with unforgettable memories.
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
                  <li>• 4 Nights in 4-Star Hotel in Bur Dubai / Al Barsha with Swimming Pool</li>
                  <li>• Daily Buffet Breakfast included at the hotel</li>
                  <li>• Private AC Vehicle for Airport Pickup and Drop-off at DXB</li>
                  <li>• Marina Dhow Cruise Dinner with international buffet & Tanoura show</li>
                  <li>• Half-Day Guided Dubai City Tour with photo stops</li>
                  <li>• Burj Khalifa "At The Top" 124th & 125th Floor Observation Deck Tickets</li>
                  <li>• 4x4 Desert Safari in Land Cruiser with dune bashing, camel ride & BBQ dinner</li>
                  <li>• Admission tickets to Miracle Garden & Global Village</li>
                  <li>• 24/7 on-trip assistance from Rudraksh Safar Dubai desk</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Clear Exclusions & Extra Tariffs
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• International roundtrip airfare to Dubai</li>
                  <li>• UAE 30-Day Single Entry Tourist eVisa + OTB (arranged at ₹6,500/person)</li>
                  <li>• Tourism Dirham Fee (approx. 15 AED / ~₹350 per room per night paid directly)</li>
                  <li>• Lunch meals and personal shopping</li>
                  <li>• 5% GST and 5% TCS (TCS refundable via annual tax return)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Package 2: 5N/6D Dubai & Abu Dhabi Grand Combo */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <Badge className="bg-blue-600 text-white font-bold text-xs mr-2">Family & Heritage</Badge>
                <span className="text-lg font-bold text-white">5N/6D Dubai & Abu Dhabi BAPS Mandir Grand Tour</span>
              </div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-black text-amber-400">₹36,999</span>
                <span className="text-xs text-slate-400 block">per person (Twin Sharing)</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Expands the signature tour with a full-day excursion to the capital of the UAE, Abu Dhabi. Includes an extensive guided visit to the iconic Sheikh Zayed Grand Mosque, the magnificent newly built BAPS Hindu Mandir in Abu Dhabi, Emirates Palace photo stop, and Yas Island.
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
          <h2 className="text-2xl font-black text-white">Plan Your Dazzling Dubai Vacation</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get your visa processed in 48 hours, confirm your Burj Khalifa time slots, and secure 4-star hotels with Rudraksh Safar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I want to book a Dubai tour package. Please share details and the best quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-600 hover:bg-amber-700 text-slate-950 font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Dubai Desk
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

export default DubaiMaster;
