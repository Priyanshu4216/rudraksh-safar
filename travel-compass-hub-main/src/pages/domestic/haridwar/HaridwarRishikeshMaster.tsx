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
  Flame,
  Waves,
  MapPin,
  Calendar,
  Compass,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  Tent,
  Mountain
} from 'lucide-react';

const HaridwarRishikeshMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/domestic-tours/haridwar-rishikesh';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Domestic Packages', url: '/domestic-packages' },
    { name: 'Haridwar & Rishikesh Tour Packages', url: '/domestic-tours/haridwar-rishikesh' }
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    '@id': `${canonicalUrl}#destination`,
    'name': 'Haridwar and Rishikesh Tour Packages',
    'description': 'Complete travel packages for Haridwar and Rishikesh. Evening Ganga Aarti at Har Ki Pauri, white-water river rafting, luxury riverside camping, and spiritual temple circuits.',
    'url': canonicalUrl,
    'provider': {
      '@type': 'TravelAgency',
      'name': 'Rudraksh Safar',
      'telephone': '+919713057086',
      'url': 'https://rudrakshsafar.com'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How many days are needed for a Haridwar and Rishikesh tour?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A 3 Nights / 4 Days itinerary is ideal. It allows 1 night in Haridwar for Mansa Devi and evening Ganga Aarti at Har Ki Pauri, followed by 2 nights in Rishikesh for river rafting, cafe exploration, and Neelkanth Mahadev temple.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How to reach Haridwar and Rishikesh from Chhattisgarh (Bhilai/Raipur)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Direct express trains operate from Durg (DURG) and Raipur (R) to Haridwar Junction (HW) and Yog Nagari Rishikesh (YNRK), such as the Chhattisgarh Express and Kalinga Utkal Express. Alternatively, fly from Raipur (RPR) to Dehradun Jolly Grant Airport (DED), just 35 km from Haridwar.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is river rafting open throughout the year in Rishikesh?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'River rafting is operational from mid-September to late June. It remains strictly closed during the monsoon season (July to early September) for safety.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Helmet>
        <title>Haridwar Rishikesh Tour Packages: Ganga Aarti, Rafting & Camping 2026-2027</title>
        <meta
          name="description"
          content="Book customizable Haridwar & Rishikesh tour packages with Rudraksh Safar. Har Ki Pauri Ganga Aarti, white water rafting in Shivpuri, luxury camping & temple darshan."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
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
              <Flame className="w-3.5 h-3.5 mr-1 inline-block" />
              Spiritual & Adventure Capital
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Haridwar &amp; Rishikesh Tour Packages
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
              Experience the divine radiance of the evening Ganga Aarti at Har Ki Pauri and the adrenaline rush of white-water rafting in Rishikesh. Seamless ground transfers, comfortable stays, and personalized itineraries.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> Best Time: Sep – Jun</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-400" /> Duration: 2N/3D to 4N/5D</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> Hubs: Haridwar, Shivpuri & Rishikesh</span>
            </div>
          </div>
        </section>

        {/* High-Impact Kumbh Mela Event Sprint Banner */}
        <section className="py-6 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20 border-b border-amber-500/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-slate-900/90 border border-amber-500/40 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center md:text-left">
                <Badge className="bg-amber-500 text-slate-950 font-black text-xs uppercase px-2.5 py-0.5">
                  ★ Date-Critical Event Sprint
                </Badge>
                <h2 className="text-xl md:text-2xl font-black text-white">
                  Haridwar Kumbh Mela 2027 (Jan 14 – Apr 20)
                </h2>
                <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
                  Attending the sacred snan festivals? Explore official snan dates, Amrit Snan schedules, luxury Swiss tent stays, and dedicated community/group packages.
                </p>
              </div>
              <Link to="/kumbh-mela-2027" className="shrink-0">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 shadow-lg">
                  Explore Kumbh Event Hub <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Packages Section */}
        <section className="py-14 container mx-auto px-4 max-w-5xl space-y-12">
          <div>
            <div className="text-center mb-10">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Curated Travel Plans</span>
              <h2 className="text-2xl md:text-4xl font-black text-white mt-1">Haridwar &amp; Rishikesh Packages</h2>
              <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
                All packages include verified hotel/campsite accommodation, private AC vehicle transfers, breakfast, and dedicated ground coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Package 1 */}
              <Card className="bg-slate-900/90 border-slate-800 flex flex-col justify-between hover:border-amber-500/50 transition">
                <CardContent className="p-6 space-y-4">
                  <Badge className="bg-slate-800 text-slate-300 text-xs">2 Nights / 3 Days</Badge>
                  <h3 className="text-lg font-bold text-white">Haridwar Spiritual Darshan</h3>
                  <div className="text-2xl font-black text-amber-400">
                    ₹6,499 <span className="text-xs font-normal text-slate-400">/ person (twin sharing)</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                    <li>• 2 Nights 3-star hotel stay in Bhupatwala</li>
                    <li>• Reserved view for Har Ki Pauri evening Ganga Aarti</li>
                    <li>• Mansa Devi &amp; Chandi Devi ropeway cable car passes</li>
                    <li>• Station pickup &amp; drop in private AC car</li>
                    <li>• Daily breakfast included</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent('Hello Rudraksh Safar, I am interested in the Haridwar Spiritual Darshan (2N/3D) package. Please share dates and pricing.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs">
                      Enquire on WhatsApp
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Package 2 */}
              <Card className="bg-slate-900/90 border-amber-500/30 flex flex-col justify-between hover:border-amber-500 transition relative">
                <div className="absolute -top-3 right-4 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  Most Popular
                </div>
                <CardContent className="p-6 space-y-4">
                  <Badge className="bg-amber-500/20 text-amber-400 text-xs">3 Nights / 4 Days</Badge>
                  <h3 className="text-lg font-bold text-white">Haridwar &amp; Rishikesh Combo</h3>
                  <div className="text-2xl font-black text-amber-400">
                    ₹9,999 <span className="text-xs font-normal text-slate-400">/ person (twin sharing)</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                    <li>• 1N Haridwar stay + 2N Rishikesh riverside resort</li>
                    <li>• 16 km white water rafting from Shivpuri with cliff jump</li>
                    <li>• Ram Jhula, Laxman Jhula &amp; Beatles Ashram tour</li>
                    <li>• Har Ki Pauri Ganga Aarti darshan escort</li>
                    <li>• Private AC Sedan for all transfers between towns</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent('Hello Rudraksh Safar, I am interested in the Haridwar & Rishikesh Combo (3N/4D) package. Please share details.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs">
                      Book Combo Package
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Package 3 */}
              <Card className="bg-slate-900/90 border-slate-800 flex flex-col justify-between hover:border-amber-500/50 transition">
                <CardContent className="p-6 space-y-4">
                  <Badge className="bg-slate-800 text-slate-300 text-xs">4 Nights / 5 Days</Badge>
                  <h3 className="text-lg font-bold text-white">Rishikesh Adventure &amp; Camping</h3>
                  <div className="text-2xl font-black text-amber-400">
                    ₹12,499 <span className="text-xs font-normal text-slate-400">/ person (twin sharing)</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                    <li>• 2N Luxury Alpine Riverside Camp with swimming pool</li>
                    <li>• 2N Boutique Resort overlooking the Ganges</li>
                    <li>• 26 km Marine Drive rafting expedition + Bungee jumping assistance</li>
                    <li>• Bonfire, acoustic music, BBQ &amp; all meals at campsite</li>
                    <li>• Neelkanth Mahadev temple forest drive</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent('Hello Rudraksh Safar, I am interested in the Rishikesh Adventure & Camping (4N/5D) package. Please share itinerary.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs">
                      Enquire on WhatsApp
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* How to Reach & Transit Guidance */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              How to Reach Haridwar &amp; Rishikesh from Chhattisgarh &amp; Central India
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-slate-300">
              <div className="space-y-2">
                <strong className="text-white block font-bold text-base">Direct Train Connectivity</strong>
                <p>• <strong>From Durg / Raipur / Bilaspur</strong>: The daily <em>Chhattisgarh Express</em> and <em>Kalinga Utkal Express</em> connect Durg Junction (DURG) and Raipur (R) directly to Haridwar (HW) and Yog Nagari Rishikesh (YNRK).</p>
                <p>• <strong>From Delhi</strong>: Multiple daily trains including the <em>Vande Bharat Express</em> (3.5 hours) and <em>Dehradun Shatabdi</em> run directly from New Delhi (NDLS) to Haridwar.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-white block font-bold text-base">Flight &amp; Road Transit</strong>
                <p>• <strong>By Air</strong>: Fly from Raipur (RPR) with 1 stop to Dehradun Jolly Grant Airport (DED). Dehradun Airport is just 35 km (45 mins) from Haridwar and 20 km (30 mins) from Rishikesh.</p>
                <p>• <strong>By Road</strong>: Delhi to Haridwar is a smooth 4-lane highway drive via the Delhi-Meerut Expressway (approx. 4.5 to 5 hours / 225 km).</p>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqSchema.mainEntity.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-1">
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Conversion Box */}
          <div className="bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 p-8 rounded-2xl border border-amber-500/30 text-center space-y-4">
            <h2 className="text-2xl font-black text-white">Plan Your Sacred &amp; Adventure Yatra Today</h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Our travel specialists in Bhilai coordinate customized family yatra plans, elderly devotee escorts, and adventure camp bookings across Haridwar and Rishikesh.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a href={`tel:${contactPhone}`}>
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5">
                  <Phone className="w-4 h-4 mr-2" /> Call 9713057086
                </Button>
              </a>
              <Link to="/kumbh-mela-2027">
                <Button variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 font-bold">
                  Kumbh Mela 2027 Event Hub →
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

export default HaridwarRishikeshMaster;
