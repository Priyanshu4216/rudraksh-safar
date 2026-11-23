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
  ShieldCheck,
  Plane,
  HeartPulse,
  Luggage,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Phone,
  MessageCircle,
  HelpCircle,
  FileCheck,
  FileText
} from 'lucide-react';

const TravelInsurance = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/travel-services/travel-insurance';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Travel Services', path: '/travel-services/visa-assistance' },
    { label: 'Travel Insurance', path: '/travel-services/travel-insurance' }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'International & Domestic Travel Insurance',
    'serviceType': 'Travel Medical & Trip Cancellation Insurance',
    'provider': {
      '@type': 'TravelAgency',
      'name': 'Rudraksh Safar',
      'telephone': '+919713057086',
      'url': 'https://rudrakshsafar.com'
    },
    'description': 'Comprehensive international and domestic travel insurance plans for Indian travelers. Cashless hospitalization abroad, Schengen €30,000 visa compliance, flight delay, baggage loss, and emergency medical evacuation.'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is travel insurance mandatory for international trips from India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Travel insurance is strictly mandatory for all Schengen countries (minimum €30,000 cover), Turkey, and several other global destinations. Even for countries where it is optional (like Thailand, Dubai, or Bali), travel insurance is strongly advised because foreign medical treatment can cost 10 to 50 times more than in India.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does cashless hospitalization work abroad?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'In case of an emergency illness or accident, you contact the 24/7 international assistance toll-free number provided on your policy card. The insurer guarantees direct payment to the network hospital without you having to pay cash out-of-pocket.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does the policy cover pre-existing diseases (PED)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Most travel insurance plans cover emergency life-saving medical stabilization for sudden acute flare-ups of pre-existing conditions during overseas travel.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How fast can Rudraksh Safar issue an international travel insurance policy?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Policies are issued instantly online within 15 to 30 minutes upon submitting passport copies and flight dates. The digital policy copy is emailed and sent on WhatsApp directly for visa submission.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      <Helmet>
        <title>International & Domestic Travel Insurance for Indians | Rudraksh Safar</title>
        <meta
          name="description"
          content="Get instant travel insurance for your holiday. Cashless hospitalization up to $500k, Schengen €30,000 visa compliant, flight delay & baggage loss. 15-minute digital issuance."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-12 w-full space-y-10">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-xs font-semibold px-2.5 py-1">
              Travel Protection Desk
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Schengen €30,000 Compliant
            </Badge>
            <Badge variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
              Instant 15-Min Digital Policy
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            International & Domestic Travel Insurance Assistance
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Travel the world with complete financial security. From cashless overseas medical hospitalization and emergency medical evacuation to compensation for lost baggage, passport loss, and flight cancellations — Rudraksh Safar partners with leading IRDAI-registered insurers to issue policy certificates in minutes.
          </p>
        </header>

        {/* Coverage Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-rose-400" /> Cashless Hospitalization
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">$50k to $500k USD</div>
              <p className="text-xs text-slate-400 mt-1">Direct cashless settlement with leading international hospital networks.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Luggage className="w-4 h-4 text-amber-400" /> Baggage & Passport Loss
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">Reimbursement Cover</div>
              <p className="text-xs text-slate-400 mt-1">Covers lost baggage, flight delays over 6 hours, and passport reissue fees.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-400" /> Schengen Visa Approved
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">€30,000 Mandatory</div>
              <p className="text-xs text-slate-400 mt-1">100% compliant with VFS and European embassy visa prerequisites.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" /> Rapid Turnaround
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-base font-bold text-white">15 Minutes</div>
              <p className="text-xs text-slate-400 mt-1">Immediate PDF policy delivery via email and WhatsApp.</p>
            </CardContent>
          </Card>
        </div>

        {/* Coverage Plans Table */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" /> Recommended Travel Insurance Tiers
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select the plan matching your destination, age bracket, and activity requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
              <Badge className="bg-blue-600 text-white font-bold text-xs">Asian Leisure</Badge>
              <h3 className="text-xl font-bold text-white">Southeast Asia & Gulf</h3>
              <p className="text-xs text-slate-300">Thailand, Dubai, Vietnam, Bali, Singapore, Malaysia.</p>
              <ul className="text-xs text-slate-300 space-y-2 border-y border-slate-800 py-3">
                <li>• Medical Cover: $50,000 USD</li>
                <li>• Baggage Delay / Loss: up to $1,000 USD</li>
                <li>• Personal Accident: $25,000 USD</li>
                <li>• Emergency Dental Treatment: $250 USD</li>
                <li>• Cashless hospital admission</li>
              </ul>
              <div>
                <span className="text-xs text-slate-400 block">Premium starts from</span>
                <span className="text-xl font-black text-emerald-400">₹650</span>
                <span className="text-xs text-slate-400"> for 7 days</span>
              </div>
            </Card>

            <Card className="bg-slate-900 border-emerald-500/50 p-6 space-y-4 relative">
              <Badge className="bg-emerald-600 text-white font-bold text-xs">Visa Essential</Badge>
              <h3 className="text-xl font-bold text-white">Schengen & Europe</h3>
              <p className="text-xs text-slate-300">France, Switzerland, Italy, Germany, Austria (All 29 states).</p>
              <ul className="text-xs text-slate-300 space-y-2 border-y border-slate-800 py-3">
                <li>• Medical Cover: €30,000 / $100,000 USD (Zero Deductible)</li>
                <li>• Repatriation of Remains: Included</li>
                <li>• Trip Cancellation: up to $1,000 USD</li>
                <li>• Emergency Evacuation: Included</li>
                <li>• 100% Embassy Visa Approval Guarantee</li>
              </ul>
              <div>
                <span className="text-xs text-slate-400 block">Premium starts from</span>
                <span className="text-xl font-black text-emerald-400">₹1,150</span>
                <span className="text-xs text-slate-400"> for 10 days</span>
              </div>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6 space-y-4">
              <Badge className="bg-amber-600 text-white font-bold text-xs">High Altitude & Senior</Badge>
              <h3 className="text-xl font-bold text-white">Domestic & Pilgrimage</h3>
              <p className="text-xs text-slate-300">Char Dham, Kedarnath, Ladakh, Amarnath Yatra.</p>
              <ul className="text-xs text-slate-300 space-y-2 border-y border-slate-800 py-3">
                <li>• Accidental Medical Cover: ₹2,00,000 to ₹5,00,000</li>
                <li>• Emergency Helicopter Evacuation Assistance</li>
                <li>• Accidental Death / Permanent Disability: ₹10,00,000</li>
                <li>• Trip Interruption due to landslides / weather</li>
                <li>• Senior citizen options available up to 75 years</li>
              </ul>
              <div>
                <span className="text-xs text-slate-400 block">Premium starts from</span>
                <span className="text-xl font-black text-emerald-400">₹350</span>
                <span className="text-xs text-slate-400"> per yatri</span>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQs */}
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

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-emerald-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Secure Your Travel Insurance in 15 Minutes</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Send your travel dates and passenger passport copies to our WhatsApp insurance desk. We issue certified policy PDFs directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I need travel insurance for my upcoming trip. Please share quotes and plan details.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Insurance Desk
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

export default TravelInsurance;
