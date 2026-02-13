import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, FileText, CheckCircle2, Clock, Shield, Globe, Plane, GraduationCap, AlertTriangle, Briefcase, HelpCircle, XCircle, ArrowRight, UserCheck, Star, BookOpen, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import FAQsSection from '@/components/FAQsSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import BookingCTA from '@/components/BookingCTA';
import ContentSection from '@/components/ContentSection';
import TLDRSection from '@/components/TLDRSection';
import LastUpdated from '@/components/LastUpdated';
import TravelReality from '@/components/TravelReality';
import RelatedServices from '@/components/RelatedServices';

const VisaAgentBhilai = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rudraksh Safar - Best Visa Agent In Bhilai",
    "image": "https://rudrakshsafar.com/og-image.png",
    "url": "https://rudrakshsafar.com/visa-agent-bhilai",
    "telephone": "+919406182174",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhilai",
      "addressRegion": "Chhattisgarh",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "21:00"
    }
  };

  const visaMatrix = [
    { country: "Dubai (UAE)", type: "Tourist (30 Days)", time: "1-2 Days", price: "₹6,500*", note: "E-Visa (Paper)" },
    { country: "Thailand", type: "Tourist (60 Days)", time: "3-4 Days", price: "₹3,500*", note: "Sticker / E-Visa" },
    { country: "Singapore", type: "Tourist (30 Days)", time: "4-5 Days", price: "₹4,200*", note: "E-Visa (Paper)" },
    { country: "Malaysia", type: "Tourist (30 Days)", time: "2-3 Days", price: "₹3,800*", note: "E-Visa" },
    { country: "Sri Lanka", type: "Tourist (30 Days)", time: "24 Hours", price: "₹2,500*", note: "ETA (Online)" },
    { country: "Schengen", type: "Tourist (Europe)", time: "15-20 Days", price: "₹12,000* + Ins", note: "Physical Appointment" },
    { country: "USA", type: "B1/B2 (10 Years)", time: "Variable", price: "₹16,500*", note: "Interview Mandatory" },
    { country: "Turkey", type: "Tourist (E-Visa)", time: "24 Hours", price: "₹4,500*", note: "Valid US/UK Visa Required" },
  ];

  const processSteps = [
    { step: "1", title: "Free Consultation", desc: "Discuss your travel plans and visa requirements" },
    { step: "2", title: "Document Collection", desc: "We guide you on required documents" },
    { step: "3", title: "Application Filing", desc: "Expert team handles your visa application" },
    { step: "4", title: "Visa Delivery", desc: "Receive your approved visa hassle-free" },
  ];

  return (
    <>
      <Helmet>
        <title>Visa Agent in Bhilai | 99% Approval Rate for Dubai, US, Schengen</title>
        <meta name="description" content="Trusted Visa Consultant in Bhilai (Since 2010). Express Dubai Visa in 24hrs, Schengen Appointment Assistance, and Student Visa Guidance. Home pickup available in Durg-Bhilai." />
        <meta name="keywords" content="visa agent bhilai, dubai visa agent bhilai, schengen visa consultant durg, us visa appointment raipur, thailand visa fees bhilai, visa consultancy chhattisgarh" />
        <link rel="canonical" href="https://rudrakshsafar.com/visa-agent-bhilai" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-slate-50">

        {/* HERO SECTION */}
        <section className="relative py-20 bg-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1974')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Visa Agent', path: '/visa-agent-bhilai' }]} />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Globe className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Bhilai's #1 Visa Consultancy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get Your Visa Approved <br /><span className="text-yellow-400">Without the Headache.</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              We handle the boring paperwork, embassy appointments, and cover letters so you can focus on packing your bags.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-14 px-8 text-lg" asChild>
                <a href="https://wa.me/919406182174?text=I need visa assistance">
                  <Phone className="w-5 h-5 mr-2" /> Start Visa Process
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 h-14 px-8 text-lg" asChild>
                <Link to="#price-matrix">View 2026 Rates</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* TL;DR & Updated Signal (Restored) */}
        <section className="bg-background -mt-8 relative z-20 container mx-auto px-4">
          <LastUpdated className="justify-center mb-6" />
          <TLDRSection
            title="TL;DR: Visa Services Overview"
            summary="We provide Express Visa processing for Dubai (UAE), Thailand, Singapore, and 50+ countries. Our services include End-to-End Documentation, Appointment Booking, and Travel Insurance with a 99% success rate."
            areasServed={["Bhilai", "Durg", "Raipur", "Chhattisgarh"]}
          />
        </section>

        {/* INTRO: The Local Problem Solver */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Bhilai Travelers Trust Us?</h2>
                <div className="prose text-slate-600">
                  <p className="mb-4">
                    Applying for a visa from a Tier-2 city like Bhilai used to mean endless trips to Mumbai or Delhi. Not anymore.
                    <strong>Rudraksh Safar</strong> brings the embassy to your doorstep.
                  </p>
                  <p className="mb-6">
                    Whether you are a student from <strong>BIT Durg</strong> going for MS, a business owner from <strong>Nehru Nagar</strong> attending a Dubai expo, or a family planning a Euro trip – we verify your documents locally before they reach the embassy.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-700 mt-1"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Pre-Check Guarantee</h4>
                      <p className="text-sm text-slate-600">We don't submit until we are sure. We audit bank statements and photos to catch errors that cause rejection.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700 mt-1"><MapPin className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Home Doc Pickup</h4>
                      <p className="text-sm text-slate-600">Live in Bhilai or Durg? We pick up your passports and drop them back safely.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Restored Travel Reality Component */}
              <div>
                <TravelReality
                  title="Visa Reality Check: Why Rejections Happen"
                  items={[
                    { type: 'negative', text: "Using dummy flight tickets? Embassies are now stricter and can detect fake PNRS." },
                    { type: 'positive', text: "We create genuine confirmed flight itineraries for visa purposes to ensure safety." },
                    { type: 'neutral', text: "Bank statements must be attested by the bank. Online printouts often get rejected." },
                    { type: 'positive', text: "For Schengen visas, we write a personalized cover letter explaining your strong ties to India." }
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESTORED: Essential Document Checker */}
        <section className="py-12 bg-blue-50/50 dark:bg-blue-900/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Essential Document Checker</h2>
              <p className="text-muted-foreground text-sm">Do not apply without these ready.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Original Passport (Min 6 months validity)",
                "2 Recent Photographs (White background, Matt finish)",
                "Last 6 Months Bank Statement (Updated)",
                "ITR Acknowledgement (Last 3 Years)",
                "Leave Sanction Letter (from Employer)",
                "Hotel Confirmation Voucher"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-card p-3 rounded-lg border shadow-sm">
                  <FileText className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground italic">* Additional documents needed for business/student visas.</p>
            </div>
          </div>
        </section>

        {/* PRICE MATRIX SECTION (NEW AUTHORITY CONTENT) */}
        <section id="price-matrix" className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Visa Fees & Timelines (2026 Guide)</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Transparent pricing. No hidden "service charges" added later. <br /> <span className="text-xs italic">*Embassy fees subject to change based on forex rates.</span></p>
            </div>

            <Card className="overflow-hidden bg-white shadow-md max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-slate-200">
                    <TableRow>
                      <TableHead className="font-bold text-slate-900 min-w-[150px]">Country</TableHead>
                      <TableHead className="font-bold text-slate-900">Visa Type</TableHead>
                      <TableHead className="font-bold text-slate-900">Processing Time</TableHead>
                      <TableHead className="font-bold text-slate-900">Approx Cost</TableHead>
                      <TableHead className="font-bold text-slate-900">Requirement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {visaMatrix.map((visa, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-bold">{visa.country}</TableCell>
                        <TableCell>{visa.type}</TableCell>
                        <TableCell className="text-green-600 font-medium">{visa.time}</TableCell>
                        <TableCell className="font-bold text-indigo-600">{visa.price}</TableCell>
                        <TableCell className="text-xs text-slate-500">{visa.note}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-slate-600 mb-4">Don't see your country? We cover 50+ destinations.</p>
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50" asChild>
                <a href="https://wa.me/919406182174?text=Visa enquiry for other country">Check Other Rates</a>
              </Button>
            </div>
          </div>
        </section>

        {/* RESTORED: Process Steps (Visual Timeline) */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What is our visa application process?
              </h2>
              <p className="text-muted-foreground">Simple 4-step visa application process</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {processSteps.map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STUDENT VISA SECTION (NEW DIFFERENTIATION) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-bold mb-4">
                    <GraduationCap className="w-4 h-4" /> For Students
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Study Abroad Dreams? <br />We Sort the Visa.</h2>
                  <p className="text-slate-600 mb-6">
                    Students from <strong>CSIT, BIT, and SSIPMT</strong> trust us for their student visa filings. Whether it's USA (F1), UK (Tier 4), or Canada, we handle the complex financial documentation parents struggle with.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3 p-3 bg-white rounded border border-indigo-100">
                      <Briefcase className="w-5 h-5 text-indigo-600" />
                      <div>
                        <h4 className="font-bold text-sm">SOP Assistance</h4>
                        <p className="text-xs text-slate-500">We review your Statement of Purpose to ensure it aligns with visa officer expectations.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 bg-white rounded border border-indigo-100">
                      <Shield className="w-5 h-5 text-indigo-600" />
                      <div>
                        <h4 className="font-bold text-sm">Financial Proof</h4>
                        <p className="text-xs text-slate-500">Guidance on showing liquid funds, education loans, and CA reports.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000" alt="Indian Student in Airport" className="rounded-xl shadow-lg rotate-2 hover:rotate-0 transition duration-500" />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 max-w-xs">
                    <p className="text-xs italic text-slate-600">"Got my UK Student Visa in 15 days! Rudraksh team helped me arrange my father's bank documents perfectly."</p>
                    <p className="text-xs font-bold mt-2">- Anjali V., Smriti Nagar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REJECTION RESCUE (NEW AUTHORITY) */}
        <section className="py-16 bg-red-50/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Visa Rejected? Don't Panic.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              A rejection stamp isn't the end. 30% of our clients come to us <em>after</em> a rejection from DIY attempts. We specialize in "Re-application with Explanation".
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white border-red-100">
                <CardHeader>
                  <CardTitle className="text-lg">Step 1: Analysis</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">We analyze the refusal letter code (e.g., 214b for USA) to find the <em>real</em> reason.</CardContent>
              </Card>
              <Card className="bg-white border-red-100">
                <CardHeader>
                  <CardTitle className="text-lg">Step 2: Correction</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">We fix the gap (e.g., adding a solid cover letter or showing better home ties).</CardContent>
              </Card>
              <Card className="bg-white border-red-100">
                <CardHeader>
                  <CardTitle className="text-lg">Step 3: Re-Submission</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">We re-file with a "Refusal Note" explaining why the previous decision was incorrect.</CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Passport Services - SEO Boost (Restored Cross-linking) */}
        <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>Passport Services</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Need a Passport first?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  You can't get a visa without a passport depending on country rules (min 6 months validity). We provide complete assistance for the <strong>Raipur Passport Seva Kendra (PSK)</strong> process.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">New Passport & Renewal</h4>
                      <p className="text-sm text-muted-foreground">Form filling & appointment booking.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Police Verification Guide</h4>
                      <p className="text-sm text-muted-foreground">Guidance on required documents.</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-6" variant="outline" asChild>
                  <Link to="/passport-agent-bhilai">View Passport Services</Link>
                </Button>
              </div>
              <Card className="border-blue-200 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">Passport Service Charges</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span>Consultation & Form Filling</span>
                      <span className="font-bold text-primary">₹500</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Appointment Booking</span>
                      <span className="font-bold text-primary">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Document Verification</span>
                      <span className="font-bold text-primary">Included</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <a href="https://wa.me/919406182174?text=I need passport help">Book Appointment</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQsSection
          faqs={[
            { question: "How long does a Dubai Visa take from Bhilai?", answer: "Dubai visas are fastest. We usually get the approved E-Visa on your WhatsApp within 24-48 hours of document submission." },
            { question: "Do I need to visit Embassy in Delhi for Schengen?", answer: "Yes, for biometrics (fingerprinting), you must visit the VFS center. The nearest ones are in Mumbai, Delhi, or Kolkata. We handle the appointment booking and file preparation so your visit is smooth." },
            { question: "Can I get a visa without income proof?", answer: "For some countries like Thailand or Dubai, income proof is lenient. However, for Schengen/UK/USA, bank statements are mandatory. If you are sponsored by a parent/spouse, we can use their documents." },
            { question: "Is Travel Insurance mandatory?", answer: "For Schengen (Europe) and Dubai, yes. It's highly recommended for all trips to cover medical emergencies. We issue instant policies starting @ ₹49/day." },
            { question: "What if my passport is expiring in 4 months?", answer: "Most countries require 6 months validity on the date of return. You MUST renew your passport first. We can help with Tatkal Passport renewal in Bhilai." },
            { question: "What are the visa-free countries for Indians in 2026?", answer: "Popular visa-free or visa-on-arrival countries for Indians include Thailand, Malaysia, Sri Lanka, Nepal, Maldives (free on arrival), and Kenya. Regulations update frequently, so check with us before booking." },
            { question: "Do you serve clients outside Bhilai?", answer: "Absolutely. While our office is in Bhilai, we serve clients from Raipur, Durg, Bilaspur, Korba, and Jagdalpur. We can handle the entire process via WhatsApp and Email for E-Visas, and courier physical passports for sticker visas if needed." }
          ]}
        />

        <RelatedServices mode="booking" />

        <BookingCTA
          text="Get Professional Visa Advice"
          subText="Stop Googling. Call us for a 5-minute free consultation."
        />

        {/* Local SEO Content (Restored) */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
              <h2>Who is the best visa agent in Bhilai?</h2>
              <p>
                Looking for a reliable visa agent in Bhilai? Rudraksh Safar is your trusted visa consultancy
                partner in the Bhilai-Durg-Raipur region. We specialize in tourist visas, business visas,
                and travel documentation for all major international destinations.
              </p>
              <h3>Our Visa Expertise</h3>
              <p>
                With years of experience in visa processing, our team understands the specific requirements
                of each embassy and consulate. We provide end-to-end support from document preparation to
                visa stamping, ensuring a smooth and stress-free experience for our clients.
              </p>
              <h3>Serving All of Chhattisgarh</h3>
              <p>
                While based in Bhilai, we serve clients from across Chhattisgarh including Raipur, Durg,
                Rajnandgaon, Bilaspur, and Korba. Our online consultation and doorstep document pickup
                services make visa processing convenient for everyone.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default VisaAgentBhilai;
