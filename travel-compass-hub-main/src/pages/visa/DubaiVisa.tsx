import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileCheck, Clock, Banknote, AlertCircle, FileText, Plane, Calendar, MessageCircle, ExternalLink, CheckCircle2, XCircle } from 'lucide-react';

const PHONE_NUMBER = '919406182174';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do Indians need a visa to visit Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Indian passport holders require a visa to enter Dubai/UAE. However, Indians with valid USA visa, UK residence, or EU residence can get Visa on Arrival for 14 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Dubai visa fee for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dubai e-visa fees for Indians: 30-day single entry costs approximately ₹7,500-8,500, 60-day single entry costs ₹15,000-18,000. Fees vary by visa type and processing speed."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Dubai visa processing take for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard processing takes 3-4 working days. Express processing is available in 24-36 hours for an additional fee."
      }
    },
    {
      "@type": "Question",
      "name": "Can Indians get Visa on Arrival in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Indians with a valid USA visa (6+ months validity), USA Green Card, UK residence card, or EU residence permit from select countries can get a 14-day Visa on Arrival for USD 63."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required for Dubai visa for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Required documents include: passport with 6+ months validity, passport-size photo with white background, confirmed return flight, hotel booking, and bank statement showing sufficient funds."
      }
    }
  ]
};

const DubaiVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hi! I need assistance with Dubai visa application. Please help.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Dubai Visa for Indians 2026 – e-Visa, VOA & Requirements | Rudraksh Safar</title>
        <meta name="description" content="Dubai visa for Indian citizens – updated 2026. Apply for e-visa online or get Visa on Arrival with USA/UK/EU residence. Check fees, processing time, documents & travel tips." />
        <meta name="keywords" content="Dubai visa for Indians, UAE visa for Indians, Dubai e-visa, Dubai visa on arrival, Dubai tourist visa India, Dubai visa requirements" />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/dubai" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🇦🇪</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Dubai Visa for Indians
              </h1>
              <p className="text-muted-foreground text-lg">
                Latest & Updated Information (2026)
              </p>
            </div>
          </AnimatedSection>

          {/* Quick Info Cards */}
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <FileCheck className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Type</p>
                <p className="font-semibold">e-Visa / VOA</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Processing</p>
                <p className="font-semibold">3-4 Days</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Banknote className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Fee</p>
                <p className="font-semibold">₹7,500+</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Stay Duration</p>
                <p className="font-semibold">30-90 Days</p>
              </div>
            </div>
          </AnimatedSection>

          {/* VOA Eligibility */}
          <AnimatedSection delay={150}>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-3 text-green-800 dark:text-green-200">
                ✅ Visa on Arrival for Eligible Indians
              </h2>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Since January 2024, eligible Indian nationals can get a <strong>14-day Visa on Arrival</strong> for <strong>USD 63</strong>. This is extendable for another 14 days.
              </p>
              <div className="space-y-2 text-green-700 dark:text-green-300">
                <p className="font-semibold">Eligibility (must have one of the following with 6+ months validity):</p>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Valid USA Visa or USA Green Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>UK Residence Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>EU Residence Permit (France, Germany, Italy, Spain, etc.)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Residence permit from Australia, Canada, Japan, Singapore, etc.</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* e-Visa Options */}
          <AnimatedSection delay={200}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">
                Dubai e-Visa Options for Indians
              </h2>
              <p className="text-muted-foreground mb-4">
                Indians without VOA eligibility must apply for an e-visa before travel. Various options available:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2">Visa Type</th>
                      <th className="text-left py-2 px-2">Duration</th>
                      <th className="text-left py-2 px-2">Approx. Fee</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-2">Transit Visa</td>
                      <td className="py-2 px-2">48-96 hours</td>
                      <td className="py-2 px-2">₹800 - ₹4,000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-2">Tourist (Single Entry)</td>
                      <td className="py-2 px-2">30 days</td>
                      <td className="py-2 px-2">₹7,500 - ₹8,500</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-2">Tourist (Single Entry)</td>
                      <td className="py-2 px-2">60 days</td>
                      <td className="py-2 px-2">₹15,000 - ₹18,000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-2">Tourist (Multiple Entry)</td>
                      <td className="py-2 px-2">30 days</td>
                      <td className="py-2 px-2">₹11,000 - ₹13,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2">Tourist (Multiple Entry)</td>
                      <td className="py-2 px-2">60 days</td>
                      <td className="py-2 px-2">₹19,000 - ₹22,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                *Fees are approximate and may vary based on service provider and processing speed.
              </p>
            </div>
          </AnimatedSection>

          {/* Documents Required */}
          <AnimatedSection delay={300}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-secondary" />
                Documents Required for Dubai Visa
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Valid Indian passport (minimum 6 months validity, machine-readable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Color passport-size photograph (white background, 35x45mm)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Confirmed return or onward flight tickets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Hotel booking confirmation or host accommodation proof</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Bank statement (last 3 months) showing ₹1,00,000+ balance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>For VOA: Valid USA/UK/EU visa or residence permit</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Processing Time */}
          <AnimatedSection delay={350}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">
                Dubai Visa Processing Time
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Standard Processing</h3>
                  <p className="text-muted-foreground">3-4 working days</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Express Processing</h3>
                  <p className="text-muted-foreground">24-36 hours (extra fee applies)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Peak season (November-February) may take 5-7 days. Apply at least 1 week before travel.
              </p>
            </div>
          </AnimatedSection>

          {/* Entry Rules */}
          <AnimatedSection delay={400}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-secondary" />
                Dubai Entry Rules for Indians
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Carry printed copy of e-visa approval</li>
                <li>• Hotel booking must match visa application details</li>
                <li>• Recommended to carry $500+ or equivalent in cash</li>
                <li>• Immigration may ask about purpose and duration of stay</li>
                <li>• Dress modestly and respect local customs</li>
                <li>• Prohibited: pork products, drugs, excessive alcohol</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Common Rejection Reasons */}
          <AnimatedSection delay={450}>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4 text-red-800 dark:text-red-200">
                Common Dubai Visa Rejection Reasons
              </h2>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Insufficient bank balance or funds proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Incomplete or blurry documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Passport validity less than 6 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Previous visa violations in UAE or GCC countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Poor quality or non-compliant passport photo</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Best Time to Visit */}
          <AnimatedSection delay={500}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Best Time to Visit Dubai</h2>
              <p className="text-muted-foreground mb-4">
                <strong>November to March</strong> is ideal with pleasant weather (20-30°C). Avoid June-August due to extreme heat (40°C+). December-January sees peak tourist season with higher prices.
              </p>
              <p className="text-muted-foreground">
                <strong>Peak Events:</strong> Dubai Shopping Festival (Jan-Feb), Dubai Food Festival (Feb-Mar), New Year celebrations.
              </p>
            </div>
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection delay={550}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">FAQs – Dubai Visa for Indians</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>Do Indians need a visa to visit Dubai?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Indian passport holders require a visa to enter Dubai/UAE. However, Indians with valid USA visa, UK residence, or EU residence can get Visa on Arrival for 14 days (USD 63).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger>What is the Dubai visa fee for Indians?</AccordionTrigger>
                  <AccordionContent>
                    Dubai e-visa fees for Indians: 30-day single entry costs approximately ₹7,500-8,500, 60-day single entry costs ₹15,000-18,000. Fees vary by visa type and processing speed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger>How long does Dubai visa processing take?</AccordionTrigger>
                  <AccordionContent>
                    Standard processing takes 3-4 working days. Express processing is available in 24-36 hours for an additional fee.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger>Can Indians get Visa on Arrival in Dubai?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Indians with a valid USA visa (6+ months validity), USA Green Card, UK residence card, or EU residence permit from select countries can get a 14-day Visa on Arrival for USD 63.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5">
                  <AccordionTrigger>What documents are required for Dubai visa?</AccordionTrigger>
                  <AccordionContent>
                    Required documents include: passport with 6+ months validity, passport-size photo with white background, confirmed return flight, hotel booking, and bank statement showing sufficient funds.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </AnimatedSection>

          {/* Quick Summary Table */}
          <AnimatedSection delay={600}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4">📌 Quick Summary</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">Visa for Indians</td>
                      <td className="py-2 text-muted-foreground">Required (e-Visa or VOA)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">VOA Eligibility</td>
                      <td className="py-2 text-muted-foreground">With USA/UK/EU visa/residence</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">Processing Time</td>
                      <td className="py-2 text-muted-foreground">3-4 working days</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">Passport Validity</td>
                      <td className="py-2 text-muted-foreground">Minimum 6 months</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Best Time to Visit</td>
                      <td className="py-2 text-muted-foreground">November to March</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* Disclaimer */}
          <AnimatedSection delay={650}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200">Important Advisory</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    UAE visa policies are subject to change. Always verify current requirements on the official UAE ICP portal before applying. Rudraksh Safar provides guidance only and is not responsible for visa decisions.
                  </p>
                  <a 
                    href="https://icp.gov.ae/en/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-2"
                  >
                    Official UAE ICP Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Internal Links */}
          <AnimatedSection delay={700}>
            <div className="text-center text-sm text-muted-foreground mb-6">
              <p>
                Explore our{' '}
                <Link to="/international-packages" className="text-secondary underline hover:text-secondary/80">
                  International Tour Packages
                </Link>{' '}
                with complete travel support.
              </p>
            </div>
          </AnimatedSection>

          {/* Trust Signals */}
          <AnimatedSection delay={720}>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground mb-6">
              <span>✅ Information updated: January 2026</span>
              <span>✅ Subject to UAE immigration rules</span>
            </div>
          </AnimatedSection>

          {/* WhatsApp CTA */}
          <AnimatedSection delay={750}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Need Dubai Visa Assistance?</h2>
              <p className="text-muted-foreground mb-6">
                Rudraksh Safar provides complete assistance for Dubai visa application, documentation, and travel planning.
              </p>
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default DubaiVisa;
