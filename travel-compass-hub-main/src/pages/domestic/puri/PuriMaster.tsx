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
  Sun,
  Hotel,
  Utensils,
  Car,
  HelpCircle,
  Waves
} from 'lucide-react';

const PuriMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/domestic-tours/puri-jagannath-dham';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Domestic Packages', path: '/domestic-packages' },
    { label: 'Puri Jagannath Tour Packages', path: '/domestic-tours/puri-jagannath-dham' }
  ];

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    'name': 'Puri Jagannath Dham & Konark',
    'description': 'Handcrafted Puri Jagannath Dham pilgrimage packages by Rudraksh Safar. Shree Jagannath Temple darshan, Konark Sun Temple, Chilika Lake dolphin boating, and Golden Beach with verified hotels and private AC transfers.',
    'url': canonicalUrl,
    'touristType': ['Pilgrimage', 'Family', 'Senior Citizens', 'Beach & Heritage']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I reach Puri from Chhattisgarh (Raipur/Bhilai/Durg)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Puri is directly connected by overnight express trains: the Durg–Puri Intercity Express and Durg–Puri Express depart daily from Durg and Raipur stations. Alternatively, fly from Raipur (RPR) to Bhubaneswar (BBI) with private cab transfer (60 km / 1.5 hrs) to Puri.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the temple darshan rules at Shree Jagannath Temple in Puri?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Non-Hindus and foreign nationals are not permitted inside the inner sanctum under centuries-old temple tradition. Strict dress code applies: traditional dhoti/kurta for men and saree/salwar for women. Mobile phones, leather items, wallets, and cameras must be deposited at temple security counters.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is Mahaprasad and where is it obtained?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Mahaprasad is the sacred sanctified food cooked in the temple\'s ancient earthen kitchen and offered to Lord Jagannath. Visitors can partake in fresh hot Mahaprasad (Kanika, Dalma, Khecedi, Besara) at Ananda Bazar inside the temple complex.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is Puri Golden Beach clean and safe for swimming?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Puri Golden Beach has received prestigious international Blue Flag certification for pristine cleanliness, environmental standards, and safety, equipped with certified lifeguards, clean washrooms, and paved walking promenades.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      <Helmet>
        <title>Puri Jagannath Dham Tour Packages 2026-2027: Konark & Chilika | Rudraksh Safar</title>
        <meta
          name="description"
          content="Book verified Puri Jagannath Dham tour packages from ₹8,199. Shree Jagannath Temple darshan, Konark Sun Temple, Chilika Lake Irrawaddy dolphins & Golden Beach. Verified hotels & AC car."
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
              Verified Pilgrimage Silo Hub
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Blue Flag Certified Golden Beach
            </Badge>
            <Badge variant="outline" className="border-teal-500/30 text-teal-300 text-xs">
              Direct Overnight Trains from CG
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Puri Jagannath Dham Tour Packages: Konark & Chilika Lake
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Experience one of the revered Char Dhams of Sanatan Dharma. Seek divine blessings at Shree Jagannath Temple, marvel at the 13th-century stone chariot architecture of Konark Sun Temple, and cruise the peaceful waters of Chilika Lake to witness rare Irrawaddy dolphins.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-400" /> Sacred Darshan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Jagannath Temple</div>
              <p className="text-xs text-slate-400 mt-1">Guided darshan and authentic Ananda Bazar Mahaprasad experience.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-teal-400" /> Near Golden Beach
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Clean Family Resorts</div>
              <p className="text-xs text-slate-400 mt-1">Verified sea-facing properties along VIP Road and Marine Drive.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-blue-400" /> Chilika Boating
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Dolphin Cruise</div>
              <p className="text-xs text-slate-400 mt-1">Motorboat cruise at Satapada to observe natural dolphin pods.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-emerald-400" /> Dedicated Cab
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Private AC Vehicle</div>
              <p className="text-xs text-slate-400 mt-1">Door-to-door station/airport pickup and all sightseeing transfers.</p>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 1: DETAILED ITINERARIES */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-400" /> Flagship Puri Itineraries (12-Point Standard)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Thoughtful pacing designed for senior citizens and families with complete transparency.
            </p>
          </div>

          {/* Package 1: 3N/4D Puri Jagannath Dham & Konark Tour */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-600 text-white font-bold text-xs">Sacred Bestseller</Badge>
                  <span className="text-xs text-slate-400">Duration: 4 Days / 3 Nights</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mt-1">
                  Puri Jagannath Dham, Konark Sun Temple & Chilika Dolphin Tour
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl md:text-3xl font-black text-amber-400">₹8,199</div>
                <span className="text-xs text-slate-400">per person (Twin Sharing Basis)</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Day-by-Day Detailed Schedule:</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 1: Arrival in Puri & Evening Jagannath Temple Darshan</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning/Afternoon:</strong> Arrive at Puri Railway Station (PURI) or Bhubaneswar Airport (BBI). Private AC vehicle transfers you to your hotel near Golden Beach. Check in and refresh.<br />
                    <strong>Evening:</strong> Proceed to Shree Jagannath Temple via Grand Road (Bada Danda). Take darshan of Lord Jagannath, Balabhadra, and Subhadra. Witness the sacred Patitapabana flag-changing ceremony atop the 214-foot temple spire at sunset. Partake in sacred Mahaprasad at Ananda Bazar. Relax on Golden Beach. Overnight in Puri hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 2: Konark Sun Temple, Chandrabhaga Beach & Pipili Craft Village</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Breakfast at the hotel. Take the scenic coastal Marine Drive to the UNESCO World Heritage Konark Sun Temple (35 km / 45 mins). Marvel at the 24 elaborately carved stone chariot wheels representing sun time, pulled by 7 stone horses.<br />
                    <strong>Afternoon:</strong> Stroll along Chandrabhaga Beach. Visit the famous artisan village of Pipili to witness traditional handmade applique patchwork umbrellas and lamps.<br />
                    <strong>Evening:</strong> Visit the historic Dhauli Shanti Stupa, where Emperor Ashoka renounced warfare and embraced Buddhism after the Kalinga war. Return to Puri for overnight stay.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 3: Satapada Chilika Lake Irrawaddy Dolphin Boating Excursion</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Post breakfast, drive to Satapada on the southern edge of Chilika Lake (50 km / 1.5 hrs), Asia's largest brackish lagoon.<br />
                    <strong>Midday:</strong> Board a motorized boat for a 2.5-hour cruise across the lagoon. Spot rare playful Irrawaddy dolphins surfacing in their natural habitat. Cruise to the Sea Mouth where Chilika lagoon meets the Bay of Bengal, and visit Rajahansa Island.<br />
                    <strong>Evening:</strong> Return drive to Puri. Enjoy the evening sea breeze at Swargadwar beach market with fresh street snacks. Overnight in Puri hotel.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
                  <div className="font-bold text-amber-300 text-sm">Day 4: Authentic Khaja Shopping & Departure Transfer</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Morning:</strong> Morning dip at Golden Beach. Breakfast at the hotel. Visit authentic century-old sweet stalls for freshly fried Jagannath temple sweet Khaja and Sambalpuri handloom sarees.<br />
                    <strong>Afternoon:</strong> Punctual transfer to Puri Railway Station or Bhubaneswar Airport for your return journey. Tour concludes with divine blessings.
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
                  <li>• 3 Nights in 3-Star Sea-Facing Hotel in Puri near Golden Beach</li>
                  <li>• Daily Buffet Breakfast included at the hotel</li>
                  <li>• Private AC Sedan (Dzire/Etios) for all 4 days from pickup to drop-off</li>
                  <li>• Excursion to Konark Sun Temple, Chandrabhaga Beach & Pipili</li>
                  <li>• Day tour to Satapada Chilika Lake</li>
                  <li>• All toll taxes, interstate permits, parking fees, and driver allowances</li>
                  <li>• 24/7 on-trip phone assistance from Rudraksh Safar</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Clear Exclusions & Extra Tariffs
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• Train or airfare tickets to Puri / Bhubaneswar</li>
                  <li>• Chilika Lake motorboat ticket (approx. ₹1,200–₹1,800/boat shared)</li>
                  <li>• Konark monument entrance fees (approx. ₹40/person for Indians)</li>
                  <li>• Personal panda dakshina and offerings at temples</li>
                  <li>• Lunch and dinner meals not specified</li>
                  <li>• 5% GST as applicable</li>
                </ul>
              </div>
            </div>
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
          <h2 className="text-2xl font-black text-white">Plan Your Sacred Puri Yatra</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book peaceful, comfortable pilgrimage holidays with sea-facing hotels and verified private drivers. Senior citizen friendly pacing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I want to book a Puri Jagannath Dham tour package. Please share details and the best quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Puri Desk
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

export default PuriMaster;
