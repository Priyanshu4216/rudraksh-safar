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
  Sparkles,
  HeartHandshake
} from 'lucide-react';

const PilgrimagePackages = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/pilgrimage-packages';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Domestic Packages', url: '/domestic-packages' },
    { name: 'Pilgrimage Packages', url: '/pilgrimage-packages' }
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Pilgrimage Tour Packages & Sacred Tirtha Yatra | Rudraksh Safar',
    'description': 'Handcrafted sacred pilgrimage tour packages across India. Char Dham Yatra, Haridwar Kumbh Mela 2027, Puri Jagannath Dham, Ayodhya-Kashi, and Jyotirlinga circuits with senior-citizen pacing and pure vegetarian satvik meals.',
    'url': canonicalUrl
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What arrangements are made for elderly and senior citizen pilgrims?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'All our pilgrimage tours feature ground-floor or elevator-equipped hotels, relaxed non-rushed pacing, comfortable AC vehicles with courteous drivers who assist with luggage, pure vegetarian satvik food, and pre-arranged wheelchair or pony assistance where needed.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is pure vegetarian (Satvik) food guaranteed on all pilgrimage tours?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, 100%. All meals served during our pilgrimage circuits (Char Dham, Kumbh Mela, Puri, Ayodhya, Kashi) are prepared in pure vegetarian kitchens with no onion-garlic or customized Jain options available upon prior request.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I book the Char Dham and Haridwar Kumbh Mela packages from Chhattisgarh?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Direct overnight trains like the Kalinga Utkal Express run directly from Durg, Raipur, and Bilaspur to Haridwar Junction. Our team meets you directly on the platform at Haridwar with private transfers, camp allocations, and darshan assistance.'
        }
      }
    ]
  };

  const pilgrimageCircuits = [
    {
      title: 'Char Dham Sacred Yatra (Complete 4-Dham)',
      route: 'Yamunotri, Gangotri, Kedarnath & Badrinath',
      duration: '10 Days / 9 Nights',
      price: '₹36,999',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800',
      link: '/chardham',
      tag: 'Sacred Himalayan Yatra',
      highlight: 'Haridwar pickup, GMVN route hotels, all vegetarian meals & biometric registration.'
    },
    {
      title: 'Haridwar Ardh Kumbh Mela 2027',
      route: 'Haridwar, Rishikesh & Sacred Snan Camps',
      duration: '4 Days / 3 Nights',
      price: '₹7,499',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800',
      link: '/kumbh-mela-2027',
      tag: 'Date-Critical 2027 Event',
      highlight: 'VIP Ghat access, pre-booked luxury Swiss tents, shuttle transfers & satvik langar.'
    },
    {
      title: 'Kedarnath & Badrinath (Do Dham Yatra)',
      route: 'Guptkashi, Kedarnath Temple & Badrinath',
      duration: '6 Days / 5 Nights',
      price: '₹20,999',
      image: 'https://images.unsplash.com/photo-1598091383021-1437651cfa36?q=80&w=800',
      link: '/chardham/bhilai-to-kedarnath',
      tag: 'Himalayan Shiva & Vishnu',
      highlight: 'Helicopter shuttle assistance option, priority temple darshan & heated stays.'
    },
    {
      title: 'Puri Jagannath Dham & Konark',
      route: 'Puri, Konark Sun Temple & Chilika Lake',
      duration: '4 Days / 3 Nights',
      price: '₹8,199',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
      link: '/domestic-tours/puri-jagannath-dham',
      tag: 'Eastern Char Dham',
      highlight: 'Temple panda escort, Ananda Bazar Mahaprasad & Blue Flag Golden Beach.'
    },
    {
      title: 'Haridwar & Rishikesh Spiritual Retreat',
      route: 'Har Ki Pauri, Triveni Ghat & Neelkanth Mahadev',
      duration: '4 Days / 3 Nights',
      price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1585255474641-628d689623e5?q=80&w=800',
      link: '/domestic-tours/haridwar-rishikesh',
      tag: 'Ganga Aarti Special',
      highlight: 'Ganga Aarti boat seating, ashram stays, yoga sessions & private AC transfers.'
    },
    {
      title: 'Ayodhya, Varanasi & Prayagraj Sangam',
      route: 'Ram Mandir Ayodhya, Kashi Vishwanath & Triveni Sangam',
      duration: '5 Days / 4 Nights',
      price: '₹12,999',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800',
      link: '/domestic-packages',
      tag: 'Sacred Uttar Pradesh Circuit',
      highlight: 'Ram Janmabhoomi VIP line pass, private Kashi Ganga boat, and Sangam holy snan.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      <Helmet>
        <title>Pilgrimage Tour Packages & Sacred Tirtha Yatra 2026-2027 | Rudraksh Safar</title>
        <meta
          name="description"
          content="Book sacred pilgrimage tour packages across India. Char Dham Yatra, Haridwar Kumbh Mela 2027, Puri Jagannath Dham & Ayodhya Kashi. Pure satvik food & senior-citizen care."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-12 w-full space-y-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-amber-600/20 text-amber-400 border-amber-500/30 text-xs font-semibold px-2.5 py-1">
              Sanatan Tirtha Yatra Silo
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              100% Satvik Pure Veg Meals
            </Badge>
            <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 text-xs">
              Senior-Citizen Pacing & Lift Hotels
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Pilgrimage Tour Packages: Sacred Tirtha Yatra Across India
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Embark on a soul-enriching journey to India's holiest dhams. From the mist-shrouded peaks of Kedarnath and Badrinath to the sacred Ganga bathing ghats of Haridwar Kumbh Mela 2027 and the spiritual ocean shores of Puri Jagannath Dham, Rudraksh Safar manages your yatra with devotion, comfort, and transparent pricing.
          </p>
        </header>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-amber-400" /> Devotee Care
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Senior-Friendly</div>
              <p className="text-xs text-slate-400 mt-1">Ground floor / elevator hotels, wheelchair guidance, and slow pacing.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-emerald-400" /> Satvik Dining
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">100% Pure Veg</div>
              <p className="text-xs text-slate-400 mt-1">Freshly cooked satvik food, no onion-garlic, and Jain dining on request.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-rose-400" /> Darshan Assistance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Verified Pandas</div>
              <p className="text-xs text-slate-400 mt-1">Authentic temple priests and smooth puja / anusthan coordination.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-blue-400" /> Direct Rail Feeder
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Durg/Raipur Pickup</div>
              <p className="text-xs text-slate-400 mt-1">Direct trains to Haridwar (Utkal) and Puri (Intercity) with platform meet.</p>
            </CardContent>
          </Card>
        </div>

        {/* Pilgrimage Packages Grid */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-400" /> Featured Sacred Yatra Circuits
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Complete itemized packages with transparent tariffs, verified ashrams & 3-star stays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilgrimageCircuits.map((pkg, idx) => (
              <Card key={idx} className="bg-slate-900 border-slate-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    <Badge className="absolute top-3 left-3 bg-amber-600 text-white font-bold text-xs">{pkg.tag}</Badge>
                  </div>
                  <CardHeader className="p-4 pb-2 space-y-1">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {pkg.duration}
                    </span>
                    <CardTitle className="text-lg font-bold text-white leading-snug">{pkg.title}</CardTitle>
                    <p className="text-xs text-amber-300 font-medium">{pkg.route}</p>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-xs text-slate-300 leading-relaxed">{pkg.highlight}</p>
                  </CardContent>
                </div>
                <div className="p-4 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-3">
                  <div>
                    <span className="text-xs text-slate-400 block">Starting from</span>
                    <span className="text-xl font-black text-amber-400">{pkg.price}</span>
                    <span className="text-xs text-slate-400">/person</span>
                  </div>
                  <Link to={pkg.link}>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-slate-950 font-bold text-xs">
                      View Yatra Plan <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
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

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-amber-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Plan a Peaceful Tirtha Yatra for Your Family</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with our pilgrimage desk. We customize travel dates, arrange helicopter shuttle bookings for Kedarnath, and ensure verified senior-care assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I want to book a pilgrimage tour package. Please share itinerary details and quotes.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-600 hover:bg-amber-700 text-slate-950 font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Pilgrimage Desk
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

export default PilgrimagePackages;
