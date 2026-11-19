import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Briefcase,
  Building2,
  Calendar,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Train,
  Plane,
  FileCheck,
  MapPin,
  Users,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

const CantonFairMaster = () => {
  const canonicalUrl = 'https://rudrakshsafar.com/international-tours/canton-fair-china';
  const contactPhone = '9713057086';

  const [b2bFormData, setB2bFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    city: 'Raipur',
    phase: 'Phase 1 (Electronics & Machinery: Apr 15-19)',
    delegates: '2',
    category: 'Electronics & Appliances',
    gstin: '',
    notes: ''
  });

  const handleB2bSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Canton Fair 2027 Trade Inquiry:*\n` +
      `• *Company:* ${b2bFormData.companyName}\n` +
      `• *Contact:* ${b2bFormData.contactPerson}\n` +
      `• *Phone:* ${b2bFormData.phone}\n` +
      `• *City:* ${b2bFormData.city}\n` +
      `• *Phase / Dates:* ${b2bFormData.phase}\n` +
      `• *Delegates:* ${b2bFormData.delegates}\n` +
      `• *Industry / Sector:* ${b2bFormData.category}\n` +
      (b2bFormData.gstin ? `• *GSTIN:* ${b2bFormData.gstin}\n` : '') +
      (b2bFormData.notes ? `• *Note:* ${b2bFormData.notes}\n` : '') +
      `Please share customized trade package quote and China M-Visa assistance.`;
    window.open(`https://wa.me/91${contactPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'International Packages', url: '/international-packages' },
    { name: 'Canton Fair China', url: '/international-tours/canton-fair-china' }
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${canonicalUrl}#touristtrip`,
    'name': 'Canton Fair 2027 Business Tour Packages from India (Guangzhou)',
    'description': 'Comprehensive business travel packages for Indian traders, importers and MSMEs attending the 141st and 142nd Canton Fair in Guangzhou, China. 4-star hotel near Pazhou, buyer badge pre-registration, China M-visa invitation support, Indian dinners, and Shenzhen sourcing extensions.',
    'touristType': ['Traders', 'Importers', 'Manufacturers', 'Wholesalers', 'Corporate Delegations'],
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
        'name': 'When is the next Canton Fair in 2027?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The 141st Spring Canton Fair takes place in three phases: Phase 1 (April 15–19, 2027), Phase 2 (April 23–27, 2027), and Phase 3 (May 1–5, 2027) at the China Import and Export Fair Complex in Guangzhou.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What visa is required for Indian citizens attending Canton Fair?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Indian citizens must apply for a Commercial M-Visa (Business Visa). Requirements include an official Canton Fair buyer invitation letter or Chinese business invitation, valid passport with 6+ months validity, company cover letter, and 6 months bank statements.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does Rudraksh Safar assist Indian trade delegates?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We arrange 4-star business hotel stays near the Pazhou Complex, daily dedicated shuttle transfers, official Overseas Buyer Badge pre-registration, China M-Visa invitation letters, daily Indian dinner arrangements, and optional high-speed train sourcing extensions to Shenzhen and Yiwu.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Helmet>
        <title>Canton Fair 2027 Tour Packages from India: Dates, M-Visa & Trade Stays | Guangzhou</title>
        <meta
          name="description"
          content="Book Canton Fair 2027 business tour packages from India. 4-star hotel near Pazhou, China M-Visa invitation, Buyer Badge pre-registration, Indian meals, and Shenzhen extensions."
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
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3.5 py-1 mb-4 text-xs font-semibold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 mr-1.5 inline-block" />
              China Trade &amp; Sourcing Travel Hub
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Canton Fair 2027 Business Tour Packages
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
              Empowering Indian traders, importers, and MSMEs to source directly from global manufacturers at the China Import &amp; Export Fair (Pazhou Complex, Guangzhou). Complete end-to-end travel logistics with verified M-Visa invitation support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> Spring: Apr 15 – May 5 | Autumn: Oct 15 – Nov 4</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> Pazhou Complex, Guangzhou</span>
              <span className="flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-emerald-400" /> China M-Visa Assistance</span>
            </div>
          </div>
        </section>

        {/* Phase Breakdown Grid */}
        <section className="py-12 bg-slate-900/50 border-b border-slate-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Know Your Sourcing Dates</span>
              <h2 className="text-2xl md:text-3xl font-black text-white mt-1">Canton Fair 2027 Schedule &amp; Industry Phases</h2>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl mx-auto">
                Verified against official Canton Fair organizers (CFTC). The fair spans 1.55 million sq meters across 3 distinct product phases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-800 p-5 hover:border-blue-500/50 transition">
                <Badge className="bg-blue-500/20 text-blue-400 mb-2 text-xs">Phase 1: Advanced Manufacturing</Badge>
                <div className="text-sm font-bold text-white mb-1">April 15 – 19, 2027 / Oct 15 – 19, 2027</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Consumer electronics, home appliances, machining machinery, hardware &amp; tools, renewable energy equipment, industrial automation, and vehicle spare parts.
                </p>
              </Card>

              <Card className="bg-slate-900 border-slate-800 p-5 hover:border-amber-500/50 transition">
                <Badge className="bg-amber-500/20 text-amber-400 mb-2 text-xs">Phase 2: Quality Home Life</Badge>
                <div className="text-sm font-bold text-white mb-1">April 23 – 27, 2027 / Oct 23 – 27, 2027</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building and decoration materials, sanitary &amp; bathroom hardware, home furniture, kitchenware &amp; tableware, daily-use ceramics, gifts, and home decor items.
                </p>
              </Card>

              <Card className="bg-slate-900 border-slate-800 p-5 hover:border-emerald-500/50 transition">
                <Badge className="bg-emerald-500/20 text-emerald-400 mb-2 text-xs">Phase 3: Better Life</Badge>
                <div className="text-sm font-bold text-white mb-1">May 1 – 5, 2027 / Oct 31 – Nov 4, 2027</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Apparel, garments &amp; textiles, shoes, luggage, bags &amp; suitcases, toys, children's products, medicines, health products, medical equipment, and food products.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Curated B2B Packages */}
        <section className="py-14 container mx-auto px-4 max-w-5xl space-y-12">
          <div>
            <div className="text-center mb-10">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Business Travel Tiers</span>
              <h2 className="text-2xl md:text-4xl font-black text-white mt-1">Curated Canton Fair Packages</h2>
              <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
                Carefully structured to maximize your trade sourcing efficiency with comfortable 4-star stays, seamless daily fair shuttles, and authentic Indian meals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Package 1 */}
              <Card className="bg-slate-900/90 border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/50 transition">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-blue-500/20 text-blue-400 text-xs mb-1">Essential 4N/5D</Badge>
                      <h3 className="text-xl font-bold text-white">Canton Fair Essential Trade Tour</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-amber-400">₹30,999</div>
                      <span className="text-[10px] text-slate-400">/ person (twin sharing)</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300">
                    Structured for traders attending a single dedicated phase. Hotel located in Haizhu / Tianhe with fast access to Pazhou Complex.
                  </p>
                  <ul className="text-xs text-slate-300 space-y-2 pt-3 border-t border-slate-800">
                    <li>• 4 Nights in verified 4-star business hotel in Guangzhou</li>
                    <li>• Daily dedicated private shuttle to and from Pazhou Exhibition Complex</li>
                    <li>• Official Overseas Buyer Badge online pre-registration assistance (Save $25 on-site fee)</li>
                    <li>• Daily international breakfast + Indian dinner vouchers near Pazhou</li>
                    <li>• Guangzhou Baiyun Airport (CAN) private pickup and drop</li>
                    <li>• China M-Visa commercial invitation documentation guidance</li>
                  </ul>
                  <div className="text-[11px] text-slate-400 pt-2">
                    <em>Disclosures: International airfare, China M-Visa fee, 5% GST &amp; 5% TCS extra.</em>
                  </div>
                </div>
                <div className="pt-6">
                  <a
                    href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent('Hello Rudraksh Safar, I am interested in the Canton Fair Essential 4N/5D Trade Tour. Please share details.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs">
                      Enquire for 4N/5D Trade Package
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Package 2 */}
              <Card className="bg-slate-900/90 border-amber-500/30 p-6 flex flex-col justify-between hover:border-amber-500 transition relative">
                <div className="absolute -top-3 right-4 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  High Demand Sourcing
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-amber-500/20 text-amber-400 text-xs mb-1">Extended 6N/7D</Badge>
                      <h3 className="text-xl font-bold text-white">Canton Fair + Shenzhen Electronics Extension</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-amber-400">₹48,999</div>
                      <span className="text-[10px] text-slate-400">/ person (twin sharing)</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300">
                    Combine Canton Fair manufacturing sourcing with Shenzhen's world-famous Huaqiangbei electronics and hardware markets.
                  </p>
                  <ul className="text-xs text-slate-300 space-y-2 pt-3 border-t border-slate-800">
                    <li>• 4 Nights 4-star stay in Guangzhou + 2 Nights 4-star stay in Shenzhen (Futian)</li>
                    <li>• High-speed bullet train (CRH) transfer: Guangzhou South to Shenzhen North</li>
                    <li>• Buyer badge pre-registration &amp; China M-Visa invitation support</li>
                    <li>• Guided introduction to Huaqiangbei electronics wholesale markets</li>
                    <li>• Daily breakfast + Indian dinner vouchers in Guangzhou &amp; Shenzhen</li>
                    <li>• All high-speed rail and airport transfers included</li>
                  </ul>
                  <div className="text-[11px] text-slate-400 pt-2">
                    <em>Disclosures: International airfare, China M-Visa fee, 5% GST &amp; 5% TCS extra.</em>
                  </div>
                </div>
                <div className="pt-6">
                  <a
                    href={`https://wa.me/91${contactPhone}?text=${encodeURIComponent('Hello Rudraksh Safar, I am interested in the Canton Fair + Shenzhen 6N/7D package. Please share details.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs">
                      Enquire for 6N/7D Extension Tour
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Sourcing & Travel Logistics Guides */}
          <div>
            <div className="text-center mb-8">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Business Resources</span>
              <h2 className="text-2xl font-black text-white mt-1">Official Canton Fair Guides for Indian Delegates</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Link to="/guides/canton-fair-visa-for-indians" className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase">Visa Roadmap</span>
                  <h3 className="font-bold text-white text-sm mt-1">China M-Visa for Indians</h3>
                  <p className="text-xs text-slate-400 mt-2">Document requirements, CFTC invitation letter process, and processing timelines.</p>
                </div>
                <span className="text-xs font-bold text-amber-400 mt-4 flex items-center gap-1">Read Visa Guide →</span>
              </Link>

              <Link to="/guides/canton-fair-dates-and-phases" className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase">Fair Calendar</span>
                  <h3 className="font-bold text-white text-sm mt-1">2027 Dates &amp; Phases Schedule</h3>
                  <p className="text-xs text-slate-400 mt-2">Spring &amp; Autumn phase breakdowns, opening hours, and venue layout.</p>
                </div>
                <span className="text-xs font-bold text-amber-400 mt-4 flex items-center gap-1">Read Dates Guide →</span>
              </Link>

              <Link to="/guides/canton-fair-buyer-registration-guide" className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 transition flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase">Buyer Badge</span>
                  <h3 className="font-bold text-white text-sm mt-1">Buyer Badge Registration Guide</h3>
                  <p className="text-xs text-slate-400 mt-2">Step-by-step pre-registration on official BEST portal to avoid on-site queues.</p>
                </div>
                <span className="text-xs font-bold text-amber-400 mt-4 flex items-center gap-1">Read Badge Guide →</span>
              </Link>
            </div>
          </div>

          {/* B2B Trade Lead Capture Form */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 p-8 rounded-2xl shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <Badge className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs mb-2">Corporate &amp; MSME Quotation</Badge>
              <h3 className="text-2xl font-black text-white">Request a Customized Trade Delegation Quote</h3>
              <p className="text-xs md:text-sm text-slate-400 mt-1">
                Share your sourcing requirements. Our international trade desk coordinates visa invitations, private vans, high-speed rail, and GST-compliant corporate invoices.
              </p>
            </div>

            <form onSubmit={handleB2bSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company / Firm Name *</label>
                <Input
                  required
                  placeholder="e.g. Acme Industrial Traders"
                  value={b2bFormData.companyName}
                  onChange={(e) => setB2bFormData({ ...b2bFormData, companyName: e.target.value })}
                  className="bg-slate-950 border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Contact Person Name *</label>
                <Input
                  required
                  placeholder="e.g. Rajesh Agarwal"
                  value={b2bFormData.contactPerson}
                  onChange={(e) => setB2bFormData({ ...b2bFormData, contactPerson: e.target.value })}
                  className="bg-slate-950 border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">WhatsApp / Mobile Number *</label>
                <Input
                  required
                  placeholder="e.g. 9827100000"
                  value={b2bFormData.phone}
                  onChange={(e) => setB2bFormData({ ...b2bFormData, phone: e.target.value })}
                  className="bg-slate-950 border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">City / Origin *</label>
                <Input
                  required
                  placeholder="e.g. Raipur / Bhilai / Delhi"
                  value={b2bFormData.city}
                  onChange={(e) => setB2bFormData({ ...b2bFormData, city: e.target.value })}
                  className="bg-slate-950 border-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Target Canton Fair Phase *</label>
                <select
                  value={b2bFormData.phase}
                  onChange={(e) => setB2bFormData({ ...b2bFormData, phase: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-md p-2"
                >
                  <option value="Phase 1 (Electronics & Machinery: Apr 15-19)">Phase 1: Electronics, Machinery & Hardware (Apr 15–19)</option>
                  <option value="Phase 2 (Building & Furniture: Apr 23-27)">Phase 2: Building, Sanitaryware & Furniture (Apr 23–27)</option>
                  <option value="Phase 3 (Textiles & Medical: May 1-5)">Phase 3: Textiles, Bags, Medical & Toys (May 1–5)</option>
                  <option value="Combined Phase 1 & 2">Combined Phase 1 &amp; Phase 2</option>
                  <option value="Autumn Session 2027 (October)">Autumn Session 2027 (October)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Number of Travelling Delegates</label>
                <Input
                  type="number"
                  min="1"
                  max="50"
                  value={b2bFormData.delegates}
                  onChange={(e) => setB2bFormData({ ...b2bFormData, delegates: e.target.value })}
                  className="bg-slate-950 border-slate-800 text-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-slate-300 font-semibold mb-1">Industry / Primary Sourcing Category</label>
                <Input
                  placeholder="e.g. Electrical Switches, Stainless Steel Hardware, Solar Panels"
                  value={b2bFormData.category}
                  onChange={(e) => setB2bFormData({ ...b2bFormData, category: e.target.value })}
                  className="bg-slate-950 border-slate-800 text-white"
                />
              </div>

              <div className="md:col-span-2 text-center pt-3">
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-8 py-3 text-sm shadow-xl">
                  <Briefcase className="w-4 h-4 mr-2" /> Submit Business Quote Request via WhatsApp
                </Button>
                <p className="text-[11px] text-slate-500 mt-2">
                  Prefer direct phone conversation? Call our business travel lead at <a href={`tel:${contactPhone}`} className="text-amber-400 font-bold hover:underline">9713057086</a>.
                </p>
              </div>
            </form>
          </div>

          {/* FAQs */}
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
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default CantonFairMaster;
