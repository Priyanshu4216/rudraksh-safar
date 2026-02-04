import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, FileText, CheckCircle, Clock, Shield, Globe, Star, BookOpen, Calendar, Info, AlertTriangle, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FAQsSection from '@/components/FAQsSection';
import TLDRSection from '@/components/TLDRSection';
import TravelReality from '@/components/TravelReality';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import LastUpdated from '@/components/LastUpdated';
import RelatedServices from '@/components/RelatedServices';

const VisaAgentBhilai = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rudraksh Safar - Visa Agent in Bhilai",
    "image": "https://rudrakshsafar.com/og-image.png",
    "url": "https://rudrakshsafar.com/visa-agent-bhilai",
    "telephone": "+919406182174",
    "email": "rudrakshsafar@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhilai",
      "addressRegion": "Chhattisgarh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.2094",
      "longitude": "81.4285"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "21:00"
    },
    "areaServed": ["Bhilai", "Durg", "Raipur", "Chhattisgarh"],
    "makesOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dubai Visa" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thailand Visa" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Singapore Visa" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schengen Visa" } }
    ]
  };

  const visaServices = [
    { country: "Dubai / UAE", time: "3-5 days", link: "/visa/dubai" },
    { country: "Thailand", time: "2-3 days", link: "/visa/thailand" },
    { country: "Singapore", time: "3-5 days", link: "/visa/singapore" },
    { country: "Bali / Indonesia", time: "3-4 days", link: "/visa/bali" },
    { country: "Malaysia", time: "3-5 days", link: "/visa/malaysia" },
    { country: "Sri Lanka", time: "1-2 days", link: "/visa/sri-lanka" },
    { country: "Turkey", time: "5-7 days", link: "/visa/turkey" },
    { country: "Schengen (Europe)", time: "15-20 days", link: "/visa/schengen" },
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
        <title>Visa Agent in Bhilai | Visa Consultancy Services | Rudraksh Safar</title>
        <meta name="description" content="Best visa agent in Bhilai for Dubai, Thailand, Singapore, Schengen & more. Fast visa processing, document assistance & high approval rate. Call +91 94061 82174." />
        <meta name="keywords" content="visa agent bhilai, visa consultancy bhilai, dubai visa bhilai, thailand visa bhilai, singapore visa agent bhilai, schengen visa bhilai, passport agent bhilai, visa services chhattisgarh" />
        <link rel="canonical" href="https://rudrakshsafar.com/visa-agent-bhilai" />
        <meta property="og:title" content="Visa Agent in Bhilai | Rudraksh Safar" />
        <meta property="og:description" content="Expert visa consultancy services in Bhilai. Fast processing for Dubai, Thailand, Singapore, Schengen visas." />
        <meta property="og:url" content="https://rudrakshsafar.com/visa-agent-bhilai" />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="IN-CT" />
        <meta name="geo.placename" content="Bhilai, Chhattisgarh" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Visa Agent', path: '/visa-agent-bhilai' }]} />
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Trusted Visa Consultancy in Bhilai</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Visa Agent in <span className="text-primary">Bhilai</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Expert visa consultancy services for Dubai, Thailand, Singapore, Schengen & 50+ countries.
                High approval rate with hassle-free documentation support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="https://wa.me/919406182174?text=Hi, I need visa assistance" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Visa Assistance
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/visa-guide">View Visa Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR & Updated Signal */}
        <section className="bg-background -mt-8 relative z-20 container mx-auto px-4">
          <LastUpdated className="justify-center mb-6" />
          <TLDRSection
            title="TL;DR: Visa Services Overview"
            summary="We provide Express Visa processing for Dubai (UAE), Thailand, Singapore, and 50+ countries. Our services include End-to-End Documentation, Appointment Booking, and Travel Insurance with a 99% success rate."
            areasServed={["Bhilai", "Durg", "Raipur", "Chhattisgarh"]}
          />
        </section>

        {/* Power-Up: Visa Reality Check */}
        <div className="container mx-auto px-4 mt-8 mb-12">
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

        {/* Power-Up: Document Checklist Preview */}
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

        {/* Visa Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Which visa services do we offer?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fast & reliable visa processing for popular destinations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {visaServices.map((visa, index) => (
                <Link key={index} to={visa.link}>
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {visa.time}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground">{visa.country}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Tourist & Business Visa</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
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

        {/* Passport Services - SEO Boost */}
        <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>Passport Services</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Do we provide passport services in Bhilai?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Need a new passport or renewal? We provide complete assistance for the <strong>Raipur Passport Seva Kendra (PSK)</strong> process.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">New Passport Application</h4>
                      <p className="text-sm text-muted-foreground">Form filling & appointment booking.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Passport Renewal / Re-issue</h4>
                      <p className="text-sm text-muted-foreground">For expired or damaged passports.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Police Verification Guide</h4>
                      <p className="text-sm text-muted-foreground">Guidance on required documents.</p>
                    </div>
                  </div>
                </div>
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
          title="Common Questions About Visa Services"
          description="Get answers to your queries about visa processing, timelines, and requirements."
          faqs={[
            {
              question: "Which travel agent provides visa service in Bhilai?",
              answer: "Rudraksh Safar is a specialized visa agent in Bhilai providing services for Dubai, Thailand, Singapore, Schengen, US, and UK visas. We handle the entire process from documentation to submission."
            },
            {
              question: "What documents are required for Dubai visa from India?",
              answer: "For a Dubai visa, you generally need: 1. Scanned color copy of Passport (First & Last Page). 2. Passport size photograph (white background). 3. Pan Card copy. 4. Confirmed return flight ticket (optional but recommended)."
            },
            {
              question: "What are the visa-free countries for Indians in 2026?",
              answer: "Popular visa-free or visa-on-arrival countries for Indians include Thailand, Malaysia, Sri Lanka, Nepal, Maldives (free on arrival), and Kenya. Regulations update frequently, so check with us before booking."
            },
            {
              question: "What countries do you provide visa services for?",
              answer: "We provide visa assistance for over 50 countries including popular destinations like Dubai (UAE), Thailand, Singapore, Malaysia, Bali (Indonesia), Schengen countries (Europe), USA, UK, Canada, Australia, and Turkey."
            },
            {
              question: "How much time does it take to get a Dubai visa?",
              answer: "Dubai (UAE) tourist visas are typically processed very quickly. We usually get approvals within 24 to 72 hours (1-3 working days). We also handle urgent or express visa requests."
            },
            {
              question: "Do I need to visit the embassy for my visa interview?",
              answer: "It depends on the country. For Dubai, Thailand, Sri Lanka, and many Southeast Asian countries, the process is completely online (E-Visa) and no interview is needed. For USA and Schengen visas, personal appearance for biometrics and interview is mandatory. We guide you through the appointment booking."
            },
            {
              question: "Can you help with passport renewal in Bhilai?",
              answer: "Yes, we are a full-service passport agent in Bhilai. We assist with online form filling, document verification, and appointment booking for the Passport Seva Kendra (PSK) in Raipur. We help with Fresh Passports, Renewals, and Tatkaal applications."
            },
            {
              question: "What documents are needed for a Schengen visa?",
              answer: "Schengen visas require a strict set of documents: Original Passport, Photos, Flight Itinerary, Hotel Bookings, Travel Insurance, 6 months bank statement, ITR for last 3 years, and employment proof. We prioritize arranging these correctly to maximize approval chances."
            },
            {
              question: "Is the visa fee refundable if my application is rejected?",
              answer: "No, embassy visa fees are generally non-refundable once the application has been submitted, regardless of the outcome. This is a standard policy of all consulates. However, our service fee covers the expertise to ensure your application is error-free to minimize rejection risk."
            },
            {
              question: "Do you provide travel insurance along with the visa?",
              answer: "Yes, travel insurance is mandatory for many visas (like Schengen) and highly recommended for others. We provide comprehensive travel insurance that covers comprehensive medical emergencies, trip cancellations, and lost baggage at very competitive rates."
            },
            {
              question: "Can you handle visas for urgent travel needs?",
              answer: "Yes, for countries that offer 'Express' or 'Priority' processing (like UK, Dubai), we can expedite your application. Please inform us immediately about your travel dates so we can choose the fastest processing channel."
            },
            {
              question: "Do you serve clients outside Bhilai?",
              answer: "Absolutely. While our office is in Bhilai, we serve clients from Raipur, Durg, Bilaspur, Korba, and Jagdalpur. We can handle the entire process via WhatsApp and Email for E-Visas, and courier physical passports for sticker visas if needed."
            },
            {
              question: "What is your success rate for visa approvals?",
              answer: "We have a success rate of over 95% for tourist visas. Our team reviews every document minutely before submission to ensure it meets the strict embassy standards, significantly reducing the chances of rejection due to technical errors."
            }
          ]}
        />

        <RelatedServices mode="booking" />

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why choose our visa services?
                  </h2>
                  <div className="space-y-4">
                    {[
                      { icon: CheckCircle, text: "High visa approval rate" },
                      { icon: Clock, text: "Fast processing time" },
                      { icon: Shield, text: "Complete document assistance" },
                      { icon: Star, text: "Transparent pricing, no hidden charges" },
                      { icon: Globe, text: "50+ countries visa support" },
                      { icon: MapPin, text: "Local office in Bhilai for easy access" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-center">Get Free Visa Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Not sure about visa requirements? Our experts will guide you through the entire process.
                    </p>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/919406182174?text=Hi, I need visa consultation for my trip" target="_blank" rel="noopener noreferrer">
                        WhatsApp: +91 94061 82174
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">Available 10 AM - 9 PM, Every Day</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="bg-background pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto opacity-70">
              <p className="text-xs text-muted-foreground text-center">
                <strong>Disclaimer:</strong> Rudraksh Safar acts as a visa consultancy agent. We assist with documentation and filing. The final decision to grant or reject a visa lies solely with the respective Embassy/Consulate. Visa fees are non-refundable once applied.
              </p>
            </div>
          </div>
        </section>

        {/* Local SEO Content */}
        <section className="py-12">
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
      </main >

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default VisaAgentBhilai;
