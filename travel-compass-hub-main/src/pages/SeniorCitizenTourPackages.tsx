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
  Heart,
  Hotel,
  Utensils,
  Car,
  HelpCircle,
  Sparkles,
  Accessibility
} from 'lucide-react';

const SeniorCitizenTourPackages = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/senior-citizen-tour-packages';
  const contactPhone = '9229150311';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Domestic Packages', path: '/domestic-packages' },
    { label: 'Senior Citizen Packages', path: '/senior-citizen-tour-packages' }
  ];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Senior Citizen Tour Packages | Comfortable Holidays for Parents | Rudraksh Safar',
    'description': 'Thoughtfully designed senior citizen tour packages across India. Ground-floor/lift hotels, gentle pacing, pure vegetarian satvik food, dedicated luggage assistance, and 24/7 care.',
    'url': canonicalUrl
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How are senior citizen tour packages different from regular tours?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our senior citizen tours prioritize comfort above all: driving is restricted to 3–4 hours per day with frequent restroom and tea breaks. Hotels are guaranteed to have operational elevators or ground-floor rooms. Food is mild, homestyle pure vegetarian, and drivers are trained to assist with luggage and boarding.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can wheelchair assistance and temple battery cars be arranged?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We pre-book wheelchairs, temple electric carts (e-rickshaws), and palanquin/pony services at major pilgrimage spots like Jagannath Temple Puri, Har Ki Pauri, and Kedarnath.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What medical precautions are taken during the journey?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'All vehicles carry basic first-aid supplies and portable emergency oxygen for high-altitude sectors. Our 24/7 support desk has verified doctor-on-call networks across our hotel partners.'
        }
      }
    ]
  };

  const seniorPackages = [
    {
      title: 'Puri Jagannath Dham Peaceful Tirtha',
      destinations: 'Puri, Konark & Golden Beach Promenade',
      duration: '4 Days / 3 Nights',
      price: '₹8,199',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800',
      link: '/domestic-tours/puri-jagannath-dham',
      tag: 'Gentle Pilgrimage',
      features: 'Sea-facing lift hotel, guided temple darshan, Ananda Bazar Mahaprasad, flat walking paths.'
    },
    {
      title: 'Haridwar & Rishikesh Ganga Aarti Retreat',
      destinations: 'Har Ki Pauri, Parmarth Niketan & Triveni Ghat',
      duration: '4 Days / 3 Nights',
      price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1585255474641-628d689623e5?q=80&w=800',
      link: '/domestic-tours/haridwar-rishikesh',
      tag: 'Spiritual Peace',
      features: 'Direct Utkal Express train connectivity, seated evening Ganga Aarti, serene ashram grounds.'
    },
    {
      title: 'Kerala Backwaters & Tea Country Holiday',
      destinations: 'Munnar & Private Alleppey Houseboat',
      duration: '5 Days / 4 Nights',
      price: '₹19,999',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800',
      link: '/domestic-tours/kerala',
      tag: 'Relaxed Leisure',
      features: 'Exclusive private AC houseboat, mild tea valley climate, pure vegetarian chef on deck.'
    },
    {
      title: 'Kashmir Paradise in Comfort',
      destinations: 'Srinagar Dal Lake Houseboat & Mughal Gardens',
      duration: '5 Days / 4 Nights',
      price: '₹18,999',
      image: 'https://images.unsplash.com/photo-1598091383021-1437651cfa36?q=80&w=800',
      link: '/domestic-tours/kashmir',
      tag: 'Slow Mountain Holiday',
      features: 'Heated luxury houseboat with electric blankets, flat Shikara boat ride, wheelchair garden tours.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      <Helmet>
        <title>Senior Citizen Tour Packages | Comfortable Holidays for Parents | Rudraksh Safar</title>
        <meta
          name="description"
          content="Specialized senior citizen tour packages across India. Lift hotels, slow unhurried pacing, pure vegetarian satvik meals, wheelchair support & 24/7 care for elders."
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
            <Badge className="bg-teal-600/20 text-teal-400 border-teal-500/30 text-xs font-semibold px-2.5 py-1">
              Elder Care & Family Travel Silo
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Zero-Rush Itineraries
            </Badge>
            <Badge variant="outline" className="border-amber-500/30 text-amber-300 text-xs">
              Verified Lift / Ground-Floor Hotels
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Senior Citizen Tour Packages: Thoughtful, Comfortable Travel for Parents
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Travel should bring relaxation and joy, never exhaustion. Our senior-citizen tour packages are customized with relaxed daytime pacing, verified ground-floor rooms or elevators, homestyle mild vegetarian meals, and patient, respectful drivers who assist with luggage every step of the way.
          </p>
        </header>

        {/* The 4 Elder Care Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-400" /> Gentle Pacing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">No Midnight Travel</div>
              <p className="text-xs text-slate-400 mt-1">Short 3–4 hour daytime drives with pleasant tea & washroom stops.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Accessibility className="w-4 h-4 text-amber-400" /> Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Guaranteed Lift</div>
              <p className="text-xs text-slate-400 mt-1">Ground floor rooms or verified operational lifts at every hotel.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-emerald-400" /> Mild Dining
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Homestyle Veg</div>
              <p className="text-xs text-slate-400 mt-1">Light, non-spicy vegetarian dishes, dal-khichdi & satvik preparations.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-rose-400" /> Health Safety
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Doctor on Call</div>
              <p className="text-xs text-slate-400 mt-1">Emergency first-aid, oxygen cylinders, and 24/7 medical network access.</p>
            </CardContent>
          </Card>
        </div>

        {/* Package Offerings */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-teal-400" /> Handpicked Senior Citizen Holiday Plans
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Proven routes with high comfort ratings and seamless door-to-door transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seniorPackages.map((pkg, idx) => (
              <Card key={idx} className="bg-slate-900 border-slate-800 overflow-hidden flex flex-col justify-between hover:border-teal-500/50 transition">
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    <Badge className="absolute top-3 left-3 bg-teal-600 text-white font-bold text-xs">{pkg.tag}</Badge>
                  </div>
                  <CardHeader className="p-5 pb-2 space-y-1">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal-400" /> {pkg.duration}
                    </span>
                    <CardTitle className="text-xl font-bold text-white leading-snug">{pkg.title}</CardTitle>
                    <p className="text-xs text-teal-300 font-medium">{pkg.destinations}</p>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <p className="text-xs text-slate-300 leading-relaxed">{pkg.features}</p>
                  </CardContent>
                </div>
                <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-3">
                  <div>
                    <span className="text-xs text-slate-400 block">Starting from</span>
                    <span className="text-2xl font-black text-teal-400">{pkg.price}</span>
                    <span className="text-xs text-slate-400">/person</span>
                  </div>
                  <Link to={pkg.link}>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs">
                      View Tour Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
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

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-950/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-teal-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Gift Your Parents a Peaceful & Comfortable Vacation</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Discuss medical needs, preferred train routes, or hotel floor preferences with our dedicated elder care holiday coordinator.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I want to book a senior-friendly tour package for my parents. Please guide me with options.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Senior Care Desk
              </Button>
            </a>
            <a href={`tel:+91${contactPhone}`}>
              <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                <Phone className="w-4 h-4 mr-2" /> Call +91 9229150311
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

export default SeniorCitizenTourPackages;
