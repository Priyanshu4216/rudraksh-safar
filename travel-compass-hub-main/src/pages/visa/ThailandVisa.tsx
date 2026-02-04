import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileCheck, Clock, AlertCircle, FileText, Calendar, MessageCircle, ExternalLink, CheckCircle, XCircle, Info, Plane } from 'lucide-react';

const PHONE_NUMBER = '919406182174';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Thailand visa free for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Indian passport holders can enter Thailand visa-free for up to 60 days for tourism and short business purposes."
      }
    },
    {
      "@type": "Question",
      "name": "How long can Indians stay in Thailand without a visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indian citizens are allowed to stay in Thailand for up to 60 days under the current visa-free entry policy."
      }
    },
    {
      "@type": "Question",
      "name": "Is Thailand Digital Arrival Card (TDAC) mandatory for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Indian travelers must complete the Thailand Digital Arrival Card (TDAC) online before arrival, even under visa-free entry."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required for Thailand entry for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Travelers must carry a valid passport with at least 6 months validity, return or onward ticket, hotel booking, proof of funds, and an approved TDAC."
      }
    },
    {
      "@type": "Question",
      "name": "Can Indians extend their stay in Thailand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visa-free stay extensions are subject to approval by Thai immigration authorities and depend on current regulations."
      }
    }
  ]
};

const ThailandVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hello Rudraksh Safar, I am planning a trip to Thailand and need assistance with travel arrangements/visa guidance. Please help me plan my trip.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Thailand Visa for Indians 2026 – Visa Free Entry & Requirements | Rudraksh Safar</title>
        <meta name="description" content="Thailand visa for Indian citizens – updated 2026. Indians can travel visa-free to Thailand for up to 60 days. Check entry rules, TDAC requirement, documents & travel assistance by Rudraksh Safar." />
        <meta name="keywords" content="Thailand visa for Indians, Thailand visa free for Indians, Thailand entry requirements, Thailand digital arrival card, Thailand travel visa India, Thailand tourist visa" />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/thailand" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Thailand Visa Assistance",
            "provider": {
              "@type": "TravelAgency",
              "name": "Rudraksh Safar"
            },
            "serviceType": "Visa Consulting",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "description": "Expert guidance for Thailand Visa-Free entry requirements and TDAC filing for Indian citizens."
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Hero Section */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🇹🇭</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Thailand Visa for Indians – Latest Updates (2026)
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Thailand is one of the most popular international destinations for Indian travelers. The good news is that Indian passport holders currently enjoy visa-free entry to Thailand, making travel easier and faster.
              </p>
            </div>
          </AnimatedSection>

          {/* Quick Stats */}
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <FileCheck className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Requirement</p>
                <p className="font-semibold text-green-600 dark:text-green-400">Visa-Free</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Maximum Stay</p>
                <p className="font-semibold">60 Days</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Plane className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Entry Mode</p>
                <p className="font-semibold">Air/Land/Sea</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Purpose</p>
                <p className="font-semibold">Tourism/Business</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Visa-Free Entry Section */}
          <AnimatedSection delay={200}>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 text-green-800 dark:text-green-200 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Is Thailand Visa Free for Indian Citizens?
              </h2>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Indian passport holders are eligible for <strong>visa-free travel</strong> to Thailand for tourism and short business purposes.
              </p>
              <div className="bg-white/50 dark:bg-black/20 rounded-xl p-4">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Key Highlights:</h3>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-green-600" />
                    <span><strong>Visa Requirement:</strong> Not required (Visa-Free)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span><strong>Maximum Stay:</strong> Up to 60 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span><strong>Purpose:</strong> Tourism / Short business visits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span><strong>Entry Mode:</strong> Air, land, or sea</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-green-600 dark:text-green-400 font-medium">
                  This visa-free policy is currently active and valid for Indian nationals.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* TDAC Section */}
          <AnimatedSection delay={300}>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Thailand Digital Arrival Card (TDAC) – Mandatory
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                All travelers entering Thailand must complete the <strong>Thailand Digital Arrival Card (TDAC)</strong> before travel.
              </p>
              <div className="bg-white/50 dark:bg-black/20 rounded-xl p-4 mb-4">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Important Points:</h3>
                <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Mandatory for all foreign nationals, including Indians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Must be submitted online prior to arrival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Replaces the earlier paper arrival form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Required even for visa-free travelers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg p-3">
                <p className="text-red-700 dark:text-red-300 text-sm font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Entry may be delayed or denied if TDAC is not completed.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Documents Required */}
          <AnimatedSection delay={400}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-secondary" />
                Documents Required for Thailand Entry
              </h2>
              <p className="text-muted-foreground mb-4">
                Travelers should carry the following documents for immigration clearance:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Valid Indian passport (minimum 6 months validity)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Confirmed return or onward flight ticket</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Proof of accommodation (hotel booking or invitation)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Proof of sufficient funds (may be asked by immigration)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Approved Thailand Digital Arrival Card (TDAC)</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Duration & Extension */}
          <AnimatedSection delay={500}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-secondary" />
                Thailand Visa Duration & Extension Rules
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Visa-free stay is up to <strong>60 days</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Extension policies are subject to Thai immigration discretion</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Overstaying may lead to fines or penalties</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Important Advisory */}
          <AnimatedSection delay={600}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 text-amber-800 dark:text-amber-200 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                Important Travel Advisory for Indians
              </h2>
              <ul className="space-y-3 text-amber-700 dark:text-amber-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Thailand visa policies are subject to change by Thai authorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                  <span>While discussions about future policy changes may appear in the news, no official reduction of the 60-day visa-free stay has been announced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Travelers are advised to follow current official rules only</span>
                </li>
              </ul>
              <a
                href="https://www.thaiembassy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-4 font-medium"
              >
                Verify on Official Thai Embassy Website <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </AnimatedSection>

          {/* Quick Summary Table */}
          <AnimatedSection delay={650}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6 overflow-x-auto">
              <h2 className="text-2xl font-serif font-bold mb-4">Quick Summary</h2>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 font-semibold">Category</th>
                    <th className="py-3 px-4 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Visa for Indians</td>
                    <td className="py-3 px-4 font-medium text-green-600 dark:text-green-400">Visa-Free</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Allowed Stay</td>
                    <td className="py-3 px-4 font-medium">Up to 60 days</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">TDAC Required</td>
                    <td className="py-3 px-4 font-medium">Yes</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Passport Validity</td>
                    <td className="py-3 px-4 font-medium">Minimum 6 months</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted-foreground">Extension</td>
                    <td className="py-3 px-4 font-medium">As per immigration rules</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* Why Book With Us */}
          <AnimatedSection delay={700}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 text-center">Why Book Thailand Travel with Rudraksh Safar?</h2>
              <p className="text-muted-foreground mb-6 text-center">
                Rudraksh Safar provides complete assistance for:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Thailand tour packages</span>
                </div>
                <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Flight bookings</span>
                </div>
                <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Hotel reservations</span>
                </div>
                <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Travel planning & documentation support</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
                <Link
                  to="/international-packages"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Explore Thailand Packages
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQs Section */}
          <AnimatedSection delay={800}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-6">FAQs – Thailand Visa for Indians</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left">Is Thailand visa free for Indians?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Indian passport holders can enter Thailand visa-free for up to 60 days for tourism or short business visits.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left">How long can Indians stay in Thailand without a visa?</AccordionTrigger>
                  <AccordionContent>
                    Indians can stay up to 60 days under the current visa-free policy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left">Is TDAC mandatory for Indians?</AccordionTrigger>
                  <AccordionContent>
                    Yes. All Indian travelers must submit the Thailand Digital Arrival Card (TDAC) online before travel.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-left">What documents are required for Thailand entry?</AccordionTrigger>
                  <AccordionContent>
                    A valid passport (6 months validity), return ticket, hotel booking, proof of funds, and approved TDAC.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5">
                  <AccordionTrigger className="text-left">Can Indians extend their stay in Thailand?</AccordionTrigger>
                  <AccordionContent>
                    Extensions depend on Thai immigration authorities and are subject to approval.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </AnimatedSection>

          {/* Trust Signals */}
          <AnimatedSection delay={900}>
            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Information updated regularly
              </p>
              <p className="flex items-center justify-center gap-2">
                <Info className="w-4 h-4 text-secondary" />
                Subject to Thai immigration rules
              </p>
              <p className="mt-4">
                <strong>Rudraksh Safar</strong> | Bhilai, Chhattisgarh |
                <a href="tel:+919406182174" className="text-secondary hover:underline ml-1">+91 94061 82174</a> |
                <a href="mailto:rudrakshsafar@gmail.com" className="text-secondary hover:underline ml-1">rudrakshsafar@gmail.com</a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default ThailandVisa;
