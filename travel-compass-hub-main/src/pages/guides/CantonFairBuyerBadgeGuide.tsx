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
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Briefcase,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  HelpCircle,
  QrCode,
  Award
} from 'lucide-react';

const CantonFairBuyerBadgeGuide = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/guides/canton-fair-buyer-registration-guide';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'International Packages', path: '/international-packages' },
    { label: 'Canton Fair China', path: '/international-tours/canton-fair-china' },
    { label: 'Buyer Badge Registration Guide', path: '/guides/canton-fair-buyer-registration-guide' }
  ];

  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    'headline': 'Canton Fair Buyer Badge (BEST) Pre-Registration Guide 2027: Indian Tutorial',
    'description': 'How Indian business visitors can register for the Canton Fair Overseas Buyer Badge via BEST portal for free. Avoid on-site queues and 150 RMB fees. Step-by-step document and pickup guide.',
    'image': 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200',
    'author': {
      '@type': 'Organization',
      'name': 'Rudraksh Safar',
      'url': 'https://rudrakshsafar.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Rudraksh Safar',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://rudrakshsafar.com/logo-dark.png'
      }
    },
    'datePublished': '2026-11-19',
    'dateModified': '2026-11-19'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is the Canton Fair Overseas Buyer Badge free for Indian visitors?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Pre-registering online via the official BEST platform (Buyer E-Service Tool) on cantonfair.org.cn is completely free. Registering on-site without pre-registration incurs a service fee of 100 to 150 RMB (~₹1,200 to ₹1,800).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is the Canton Fair Buyer Badge valid for multiple sessions?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. The IC card Overseas Buyer Badge is multi-session and permanent. Once obtained, it can be re-used directly for all future Canton Fair sessions without re-applying.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Where can Indian buyers collect their physical badge in Guangzhou?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can collect your badge at Guangzhou Baiyun International Airport (CAN) Arrival Terminals 1 & 2 counters, partner hotel registration counters across Guangzhou, or the on-site Overseas Buyer Registration Offices at the Pazhou Complex.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What documents are required to pick up the Canton Fair Buyer Badge?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You need your original Indian passport, a physical corporate business card, and the BEST Pre-registration Return Receipt (digital barcode or printed paper).'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>Canton Fair Buyer Badge Registration Guide 2027: BEST Online Tutorial</title>
        <meta
          name="description"
          content="Step-by-step tutorial to register for the Canton Fair Overseas Buyer Badge via BEST portal. Free pre-registration, required documents, and airport/hotel pickup desks."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(guideSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 md:py-12 w-full space-y-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 text-xs font-semibold px-2.5 py-1">
              BEST System Tutorial
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              100% Free Pre-Registration
            </Badge>
            <Badge variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
              Lifetime Permanent Badge
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Canton Fair Buyer Badge Pre-Registration: Indian Buyer Guide 2027
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Entering the Pazhou Exhibition Complex requires an official Overseas Buyer Badge (IC Card). Pre-registering online through BEST saves you 150 RMB in registration fees and eliminates 2-hour waiting lines at the gates.
          </p>
        </header>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" /> Cost Advantage
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl font-bold text-emerald-400">100% Free Online</div>
              <p className="text-xs text-slate-400 mt-1">On-site walk-in charge: 100–150 RMB (~₹1,200–₹1,800).</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" /> Badge Validity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl font-bold text-white">Permanent / Multi-Year</div>
              <p className="text-xs text-slate-400 mt-1">Valid across all subsequent Spring & Autumn sessions.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-amber-400" /> Easy Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl font-bold text-white">Airport & Hotels</div>
              <p className="text-xs text-slate-400 mt-1">Collect directly at Baiyun Airport or 40+ partner hotels.</p>
            </CardContent>
          </Card>
        </div>

        {/* Step-by-step registration walkthrough */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" /> 5 Steps to Register Your Overseas Buyer Badge Online
          </h2>

          <div className="space-y-4">
            <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-600/30 text-emerald-300 flex items-center justify-center text-xs">1</span>
                Visit the Official BEST Portal
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                Go to the official Canton Fair website (<strong>cantonfair.org.cn</strong>) and select <strong>Buyer E-Service Tool (BEST)</strong>. Click on <em>"Register / Log In"</em> and choose <em>"Overseas Buyer"</em>.
              </p>
            </div>

            <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-600/30 text-emerald-300 flex items-center justify-center text-xs">2</span>
                Create Your Company & Buyer Profile
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                Enter your Indian business details: Company name, country (India), business category, company website, and contact number. Next, set up your individual buyer account using your corporate email address.
              </p>
            </div>

            <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-600/30 text-emerald-300 flex items-center justify-center text-xs">3</span>
                Upload Identity Verification Documents
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                Upload clear color scans of:
                <br />• Your Indian passport information page (valid for 6+ months).
                <br />• Your physical business card (name, designation, and company name must match passport).
                <br />• A recent passport-style front-facing portrait photo (this photo is printed directly onto your physical IC card).
              </p>
            </div>

            <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-600/30 text-emerald-300 flex items-center justify-center text-xs">4</span>
                Obtain Approval & Buyer Return Receipt
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                The Canton Fair organizers review submissions within 2 to 3 business days. Once verified, you will receive an email confirmation. Download and print the <strong>Buyer Return Receipt</strong> containing your buyer barcode and registration QR code.
              </p>
            </div>

            <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-600/30 text-emerald-300 flex items-center justify-center text-xs">5</span>
                Collect Your Physical Badge in Guangzhou
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                Upon arrival in Guangzhou, present your original Indian passport, physical business card, and the printed/digital Return Receipt at any designated collection desk. Your badge will be printed within 2 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Collection Desks */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">Where to Pick Up Your Badge Without Fairground Lines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-400" /> Guangzhou Baiyun Airport (CAN)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Collection desks are situated in both Terminal 1 and Terminal 2 international arrival halls. Operating from 8:00 AM to 11:00 PM during fair opening days. Pick up your badge right after clearing immigration!
              </p>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400" /> Official Partner Hotel Lobbies
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Over 40 premier business hotels across Guangzhou (including Westin Pazhou, Shangri-La, and Crowne Plaza) operate on-site buyer registration counters for guests. Rudraksh Safar delegates stay in verified hotels with dedicated collection counters.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-400" /> Frequently Asked Questions
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
        <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-8 rounded-2xl border border-emerald-500/30 space-y-4 text-center">
          <h2 className="text-2xl font-black text-white">Let Us Handle Your Canton Fair Registration</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Our trade desk assists Indian business delegates with BEST buyer pre-registration, official visa invitations, 4-star hotel bookings, and private transfers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/international-tours/canton-fair-china">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5">
                Explore Canton Fair Tour Packages
              </Button>
            </Link>
            <Link to="/guides/canton-fair-visa-for-indians">
              <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                China Business Visa Requirements →
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default CantonFairBuyerBadgeGuide;
