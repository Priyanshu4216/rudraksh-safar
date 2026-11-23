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
  ExternalLink
} from 'lucide-react';

const CantonFairVisaGuide = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/guides/canton-fair-visa-for-indians';
  const contactPhone = '9713057086';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'International Packages', path: '/international-packages' },
    { label: 'Canton Fair China', path: '/international-tours/canton-fair-china' },
    { label: 'China Business Visa Guide', path: '/guides/canton-fair-visa-for-indians' }
  ];

  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    'headline': 'China Business M Visa for Canton Fair 2027: Indian Passport Application Guide',
    'description': 'Complete step-by-step China Business (M) Visa procedure for Indian business owners attending Canton Fair Guangzhou. Official invitation letters, CVASC biometrics, documents checklist, and processing timelines.',
    'image': 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200',
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
        'name': 'Which visa category is required for Indian citizens attending Canton Fair?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Indian business travelers require a Chinese Category M (Commercial/Trade) Visa. An official invitation letter generated from the Canton Fair BEST platform or a registered Chinese supplier is mandatory.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does it take for an Indian passport holder to get a Chinese M Visa?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Regular processing through Chinese Visa Application Service Centers (CVASC New Delhi, Mumbai, Kolkata) takes 4 to 5 working days post-biometrics submission. Express service takes 2 to 3 working days.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is biometric submission mandatory at Chinese visa centres in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, ten-finger biometric submission is required for applicants aged 14 to 70 years at CVASC centres in New Delhi, Mumbai, or Kolkata, unless exempted by recent temporary bilateral policy waivers.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does Rudraksh Safar assist with China M Visa documentation for Canton Fair?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We assist Indian business delegations with official Canton Fair Invitation Letter generation, appointment booking at CVASC, itinerary voucher preparation, GST documentation, and hotel/flight confirm reservations.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>China Business Visa (M Visa) for Canton Fair 2027: Indian Guide</title>
        <meta
          name="description"
          content="Complete step-by-step Chinese Business (M) Visa guide for Indian entrepreneurs attending Canton Fair 2027. Official invitation letters, CVASC centers, documents checklist & fees."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(guideSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 md:py-12 w-full space-y-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Title */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs font-semibold px-2.5 py-1">
              B2B Trade Advisory
            </Badge>
            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
              Last Verified: November 2026
            </Badge>
            <Badge variant="outline" className="border-amber-500/30 text-amber-300 text-xs">
              Chinese M Visa Category
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            China Business M Visa for Canton Fair 2027: Indian Citizen Step-by-Step Guide
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Attending the China Import and Export Fair (Canton Fair) in Guangzhou requires an official Chinese Business (M) Visa. Here is the verified document checklist, official invitation letter workflow, and processing timeline for Indian manufacturers and traders.
          </p>
        </header>

        {/* Key Takeaways Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" /> Processing Window
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl font-bold text-white">4 – 5 Working Days</div>
              <p className="text-xs text-slate-400 mt-1">Express service: 2–3 days. Apply 30–45 days before fair.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-400" /> Submission Centres
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl font-bold text-white">CVASC Hubs</div>
              <p className="text-xs text-slate-400 mt-1">New Delhi, Mumbai, and Kolkata (Biometrics required).</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-amber-400" /> Key Prerequisite
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xl font-bold text-white">Official BEST Invite</div>
              <p className="text-xs text-slate-400 mt-1">Canton Fair Official Invitation Letter or Chinese partner invite.</p>
            </CardContent>
          </Card>
        </div>

        {/* Section 1: Step-by-Step Procedure */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-blue-400" /> Step-by-Step Chinese Business (M) Visa Procedure
          </h2>
          <div className="space-y-4">
            <div className="p-5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-400 text-sm">
                <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-xs">1</span>
                Obtain the Canton Fair Official Invitation Letter
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                Register on the Canton Fair Buyer E-Service Tool (BEST) portal (cantonfair.org.cn). Once your business buyer account is approved, request a formal <em>Invitation Letter for Chinese Visa</em>. Alternatively, an official invitation from a registered mainland Chinese enterprise is also acceptable.
              </p>
            </div>

            <div className="p-5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-400 text-sm">
                <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-xs">2</span>
                Fill Out the Online Visa Application (COVA)
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                Complete the China Online Visa Application form (cova.mfa.gov.cn) with exact company credentials, flight routes, Indian company GST/incorporation details, and Guangzhou hotel accommodation details. Print the completed form and confirmation barcode page.
              </p>
            </div>

            <div className="p-5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-400 text-sm">
                <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-xs">3</span>
                Schedule Appointment at CVASC (AVAS)
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                Book an appointment through the Appointment for Visa Application Submission (AVAS) system at your designated Chinese Visa Application Service Centre (New Delhi for North/Central India including Chhattisgarh, Mumbai for West/South, or Kolkata for East).
              </p>
            </div>

            <div className="p-5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-400 text-sm">
                <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-xs">4</span>
                Submit Documents & Record Biometrics
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pl-8">
                Attend the center on your appointment date. Submit physical documents, complete 10-finger biometrics capture, and pay the visa and service fees. Passports are generally returned via courier or in-person pickup in 4–5 business days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Comprehensive Documents Checklist */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-emerald-400" /> Mandatory Document Checklist for Indian Applicants
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-800/80 text-xs font-bold text-slate-200 uppercase">
                <tr>
                  <th className="p-3.5">Document</th>
                  <th className="p-3.5">Specific Requirement</th>
                  <th className="p-3.5">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="p-3.5 font-semibold text-white">Original Passport</td>
                  <td className="p-3.5">Minimum 6 months validity from travel date with at least 2 blank visa pages.</td>
                  <td className="p-3.5 text-slate-400">Previous passports must be submitted if held.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-white">Canton Fair Invitation Letter</td>
                  <td className="p-3.5">Official letter generated via Canton Fair BEST portal or Chinese company invite.</td>
                  <td className="p-3.5 text-blue-400 font-medium">Rudraksh Safar assists with generation.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-white">Indian Company Letter (Dispatch)</td>
                  <td className="p-3.5">Formal letter on company letterhead introducing the traveler, designation, purpose, and financial guarantee.</td>
                  <td className="p-3.5 text-slate-400">Signed by Managing Director or authorized partner.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-white">Company Registration / GST</td>
                  <td className="p-3.5">GST Certificate, Certificate of Incorporation, or Udyam MSME Registration.</td>
                  <td className="p-3.5 text-slate-400">Proves legitimate commercial trade in India.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-white">Bank Statements</td>
                  <td className="p-3.5">Last 6 months current/savings bank statements with original bank seal and signature.</td>
                  <td className="p-3.5 text-slate-400">Healthy operating balance recommended.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-white">Flight & Hotel Reservations</td>
                  <td className="p-3.5">Roundtrip flight itineraries and confirmed hotel booking voucher in Guangzhou.</td>
                  <td className="p-3.5 text-emerald-400 font-medium">Included in our Canton Fair delegate package.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-white">Photographs</td>
                  <td className="p-3.5">2 recent passport photographs (33mm × 48mm, white background, no eyeglasses/white shirts).</td>
                  <td className="p-3.5 text-slate-400">Strict adherence to Chinese Embassy photo specs.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Important Travel Tips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white">Crucial Advisory for Indian Delegates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-2">
              <h3 className="font-bold text-amber-300 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Apply At Least 45 Days in Advance
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                During March (for Spring edition) and September (for Autumn edition), appointment slots at CVASC New Delhi and Mumbai fill up rapidly due to high commercial demand. Avoid last-minute rush fees or missing Phase 1.
              </p>
            </div>

            <div className="p-5 bg-blue-950/20 border border-blue-500/30 rounded-xl space-y-2">
              <h3 className="font-bold text-blue-300 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Transit & Connectivity Requirements
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Most flights from India connect via Bangkok (BKK), Kuala Lumpur (KUL), Singapore (SIN), or Hong Kong (HKG). Ensure transit visa exemptions are noted if stepping out of transit terminals during stopovers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
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

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900/60 to-slate-900 p-8 rounded-2xl border border-blue-500/30 space-y-4 text-center">
          <h2 className="text-2xl font-black text-white">Need End-to-End Canton Fair Delegation Support?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            From official Canton Fair invitation letters and CVASC appointment facilitation to 4-star Pazhou hotels with fair shuttles, Hindi-speaking business guides, and Indian meals — Rudraksh Safar manages your entire trade trip.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/international-tours/canton-fair-china">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5">
                View Canton Fair Tour Packages (From ₹30,999)
              </Button>
            </Link>
            <a
              href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent(
                'Hello Rudraksh Safar, I need assistance with China Business Visa and Canton Fair package for Indian delegates.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-950/40">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Trade Desk
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

export default CantonFairVisaGuide;
