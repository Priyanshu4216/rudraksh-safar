import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileCheck, Clock, Banknote, AlertCircle, FileText, Plane, Calendar, MessageCircle, ExternalLink, XCircle } from 'lucide-react';

const PHONE_NUMBER = '919406182174';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do Indians need a visa to visit Singapore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Indian passport holders require an e-Visa to visit Singapore. There is no Visa on Arrival for Indian tourists. Apply through an authorized agent or Singaporean local contact."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Singapore visa fee for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ICA processing fee is SGD 30 (~₹1,950). With agent service charges, total cost is approximately ₹3,000-5,000."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Singapore visa processing take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Singapore visa processing typically takes 3-5 working days. During peak season, it may take up to 7 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is SG Arrival Card and is it mandatory?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all travelers including Indians must submit the SG Arrival Card (SGAC) with Electronic Health Declaration within 3 days before arrival. Submit via ICA website or MyICA app."
      }
    },
    {
      "@type": "Question",
      "name": "How long can Indians stay in Singapore with tourist visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indians can typically stay up to 30 days per visit. The visa is often issued as a multiple-entry visa valid for up to 2 years, subject to ICA discretion."
      }
    }
  ]
};

const SingaporeVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hello Rudraksh Safar, I need expert assistance with my Singapore e-Visa application. Please guide me through the documentation and process.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Singapore Visa for Indians 2026 – e-Visa Requirements & Fees | Rudraksh Safar</title>
        <meta name="description" content="Singapore visa for Indian citizens – updated 2026. Apply for e-Visa through authorized agents. Check fees (₹3,000-5,000), processing time, SGAC requirement & documents needed." />
        <meta name="keywords" content="Singapore visa for Indians, Singapore e-visa, Singapore tourist visa India, SG arrival card, Singapore visa requirements, Singapore visa fees" />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/singapore" />
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
              <span className="text-6xl mb-4 block">🇸🇬</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Singapore Visa for Indians
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
                <p className="font-semibold">e-Visa</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Processing</p>
                <p className="font-semibold">3-5 Days</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Banknote className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Fee</p>
                <p className="font-semibold">₹3,000-5,000</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Stay Duration</p>
                <p className="font-semibold">Up to 30 Days</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Visa Requirement Notice */}
          <AnimatedSection delay={150}>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-3 text-blue-800 dark:text-blue-200">
                📋 Singapore e-Visa Required for Indians
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-3">
                Indian passport holders must apply for a Singapore e-Visa before travel. <strong>There is no Visa on Arrival</strong> for Indian tourists.
              </p>
              <p className="text-blue-700 dark:text-blue-300">
                Apply through an <strong>authorized visa agent</strong> or a <strong>Singaporean local contact/sponsor</strong>. Direct application by Indians is not allowed.
              </p>
            </div>
          </AnimatedSection>

          {/* Mandatory SG Arrival Card */}
          <AnimatedSection delay={200}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-3 text-amber-800 dark:text-amber-200">
                📝 Mandatory SG Arrival Card (SGAC)
              </h2>
              <p className="text-amber-700 dark:text-amber-300 mb-3">
                All travelers entering Singapore must complete the <strong>SG Arrival Card with Electronic Health Declaration</strong>.
              </p>
              <ul className="space-y-2 text-amber-700 dark:text-amber-300">
                <li>• Mandatory for all foreign nationals including Indians</li>
                <li>• Must be submitted online within <strong>3 days before arrival</strong></li>
                <li>• Submit via official ICA website or MyICA mobile app</li>
                <li>• Free of charge</li>
              </ul>
              <p className="text-amber-800 dark:text-amber-200 font-semibold mt-3">
                ⚠️ Entry may be delayed if SGAC is not completed before arrival.
              </p>
            </div>
          </AnimatedSection>

          {/* Documents Required */}
          <AnimatedSection delay={300}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-secondary" />
                Documents Required for Singapore Visa
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Valid Indian passport (minimum 6 months validity from entry date)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Duly filled Form 14A (visa application form)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Recent passport-size photo (white background, taken within 3 months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Confirmed return/onward flight tickets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Hotel booking confirmation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Bank statement (3 months) showing sufficient funds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Cover letter stating purpose of visit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>For employed: Leave letter and salary slips</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>For self-employed: ITR (2 years) and business registration</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Visa Fees */}
          <AnimatedSection delay={350}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Singapore Visa Fees for Indians</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2">Component</th>
                      <th className="text-left py-2 px-2">Fee</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-2">ICA Processing Fee</td>
                      <td className="py-2 px-2">SGD 30 (~₹1,950)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-2">Agent Service Fee</td>
                      <td className="py-2 px-2">₹500 - ₹2,500</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 font-semibold">Total Cost</td>
                      <td className="py-2 px-2 font-semibold">₹3,000 - ₹5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                *Fees may vary based on agent and processing type. Express processing costs extra.
              </p>
            </div>
          </AnimatedSection>

          {/* Entry Rules */}
          <AnimatedSection delay={400}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-secondary" />
                Singapore Entry Rules for Indians
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Print e-visa approval and carry with passport</li>
                <li>• Complete SG Arrival Card within 3 days before arrival</li>
                <li>• Carry proof of funds (SGD 100/day recommended)</li>
                <li>• <strong>Chewing gum is banned</strong> - do not carry it</li>
                <li>• Strict laws on drugs - severe penalties including death</li>
                <li>• No smoking in public places - heavy fines (SGD 200+)</li>
                <li>• Keep city clean - littering fines up to SGD 1,000</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Common Rejection Reasons */}
          <AnimatedSection delay={450}>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4 text-red-800 dark:text-red-200">
                Common Singapore Visa Rejection Reasons
              </h2>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Insufficient bank balance or funds proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Incomplete or inconsistent documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Weak travel history (no previous international travel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Previous visa rejections (any country)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>No clear purpose of visit or travel itinerary</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Best Time to Visit */}
          <AnimatedSection delay={500}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Best Time to Visit Singapore</h2>
              <p className="text-muted-foreground mb-4">
                Singapore is a <strong>year-round destination</strong> with consistent tropical climate (25-32°C). <strong>February to April</strong> is slightly drier with less rainfall.
              </p>
              <p className="text-muted-foreground">
                <strong>Major Events:</strong> Chinese New Year (Jan/Feb), Singapore Food Festival (July), Formula 1 Grand Prix (September), New Year celebrations.
              </p>
            </div>
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection delay={550}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">FAQs – Singapore Visa for Indians</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>Do Indians need a visa to visit Singapore?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Indian passport holders require an e-Visa to visit Singapore. There is no Visa on Arrival for Indian tourists. Apply through an authorized agent or Singaporean local contact.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger>What is the Singapore visa fee for Indians?</AccordionTrigger>
                  <AccordionContent>
                    The ICA processing fee is SGD 30 (~₹1,950). With agent service charges, total cost is approximately ₹3,000-5,000.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger>How long does Singapore visa processing take?</AccordionTrigger>
                  <AccordionContent>
                    Singapore visa processing typically takes 3-5 working days. During peak season, it may take up to 7 days.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger>What is SG Arrival Card and is it mandatory?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all travelers including Indians must submit the SG Arrival Card (SGAC) with Electronic Health Declaration within 3 days before arrival. Submit via ICA website or MyICA app. It's free.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5">
                  <AccordionTrigger>How long can Indians stay in Singapore?</AccordionTrigger>
                  <AccordionContent>
                    Indians can typically stay up to 30 days per visit. The visa is often issued as a multiple-entry visa valid for up to 2 years, subject to ICA discretion.
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
                      <td className="py-2 text-muted-foreground">e-Visa Required</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">Visa on Arrival</td>
                      <td className="py-2 text-muted-foreground">Not Available</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">Allowed Stay</td>
                      <td className="py-2 text-muted-foreground">Up to 30 days</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">SGAC Required</td>
                      <td className="py-2 text-muted-foreground">Yes (within 3 days before arrival)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">Passport Validity</td>
                      <td className="py-2 text-muted-foreground">Minimum 6 months</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Best Time to Visit</td>
                      <td className="py-2 text-muted-foreground">Year-round (Feb-Apr driest)</td>
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
                    Singapore visa policies may change. Always verify current requirements on the official ICA Singapore website before applying.
                  </p>
                  <a
                    href="https://www.ica.gov.sg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-2"
                  >
                    Official ICA Singapore <ExternalLink className="w-3 h-3" />
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
              <span>✅ Subject to Singapore ICA rules</span>
            </div>
          </AnimatedSection>

          {/* WhatsApp CTA */}
          <AnimatedSection delay={750}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Need Singapore Visa Assistance?</h2>
              <p className="text-muted-foreground mb-6">
                Rudraksh Safar provides complete assistance for Singapore visa application and travel planning.
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

export default SingaporeVisa;
