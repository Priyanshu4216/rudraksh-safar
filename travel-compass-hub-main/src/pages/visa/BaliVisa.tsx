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
      "name": "Do Indians need a visa to visit Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Indian passport holders need a visa for Bali. You can get e-VOA (electronic Visa on Arrival) online before travel or VOA at the airport. Both allow 30-day stay, extendable by another 30 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Bali visa fee for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The e-VOA costs IDR 500,000 (approximately ₹2,700-2,900). Visa on Arrival at airport is also available for the same fee. Extension for 30 days also costs IDR 500,000."
      }
    },
    {
      "@type": "Question",
      "name": "How to apply for Bali e-VOA for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apply online at molina.imigrasi.go.id 7-14 days before travel. Fill the form, upload documents (passport, photo, return ticket), pay the fee, and receive approval via email."
      }
    },
    {
      "@type": "Question",
      "name": "Can Indians extend their stay in Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the 30-day VOA/e-VOA can be extended once for another 30 days within Indonesia. Visit a local immigration office before your visa expires."
      }
    },
    {
      "@type": "Question",
      "name": "Is Indian driving license valid in Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Indian driving license is NOT valid in Bali/Indonesia. You need an International Driving Permit (IDP) to rent and drive vehicles. Without IDP, insurance may be void in case of accidents."
      }
    }
  ]
};

const BaliVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hello Rudraksh Safar, I need expert assistance with my Bali Visa application (e-VOA). Please guide me through the process.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Bali Visa for Indians 2026 – e-VOA, Requirements & Fees | Rudraksh Safar</title>
        <meta name="description" content="Bali Indonesia visa for Indian citizens – updated 2026. Get e-VOA online or Visa on Arrival. 30-day stay, extendable. Check fees (~₹8,000), documents & travel tips." />
        <meta name="keywords" content="Bali visa for Indians, Indonesia visa for Indians, Bali e-VOA, Bali visa on arrival, Indonesia tourist visa India, Bali visa fees" />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/bali" />
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
              <span className="text-6xl mb-4 block">🇮🇩</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Bali Visa for Indians
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
                <p className="font-semibold">e-VOA / VOA</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Processing</p>
                <p className="font-semibold">3-5 Days</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Banknote className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">e-VOA Fee</p>
                <p className="font-semibold">~₹8,000</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Stay Duration</p>
                <p className="font-semibold">30 Days</p>
              </div>
            </div>
          </AnimatedSection>

          {/* e-VOA vs VOA */}
          <AnimatedSection delay={150}>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-3 text-green-800 dark:text-green-200">
                ✅ e-VOA Recommended for Indians
              </h2>
              <p className="text-green-700 dark:text-green-300 mb-4">
                While Visa on Arrival is available at Bali airport, we recommend applying for <strong>e-VOA (electronic Visa on Arrival)</strong> online before travel. It significantly reduces wait time at immigration.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-green-700 dark:text-green-300">
                <div>
                  <h3 className="font-semibold mb-2">e-VOA Benefits:</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Skip long queues at airport</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Apply 7-14 days before travel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Extendable for 30 more days</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Apply at:</h3>
                  <a
                    href="https://molina.imigrasi.go.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-green-800 dark:text-green-200 underline text-sm"
                  >
                    molina.imigrasi.go.id <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Pre-Arrival Formalities */}
          <AnimatedSection delay={200}>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-3 text-blue-800 dark:text-blue-200">
                📝 Complete These Before Arrival
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Save time at Bali airport by completing these formalities online before travel:
              </p>
              <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                <li className="flex items-start gap-3">
                  <span className="font-semibold">1.</span>
                  <div>
                    <span className="font-medium">e-VOA:</span>{' '}
                    <a href="https://molina.imigrasi.go.id/" target="_blank" rel="noopener noreferrer" className="underline">
                      molina.imigrasi.go.id
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold">2.</span>
                  <div>
                    <span className="font-medium">e-Customs Declaration:</span>{' '}
                    <a href="https://ecd.beacukai.go.id/" target="_blank" rel="noopener noreferrer" className="underline">
                      ecd.beacukai.go.id
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold">3.</span>
                  <div>
                    <span className="font-medium">Bali Tourist Levy:</span>{' '}
                    <a href="https://lovebali.baliprov.go.id/" target="_blank" rel="noopener noreferrer" className="underline">
                      lovebali.baliprov.go.id
                    </a>
                    {' '}(IDR 150,000 per person)
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Documents Required */}
          <AnimatedSection delay={300}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-secondary" />
                Documents Required for Bali Visa
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Valid Indian passport (minimum 6 months validity from arrival date)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Recent passport-size photograph (white background)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Confirmed return or onward flight ticket</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Proof of accommodation (hotel booking or villa reservation)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Proof of sufficient funds (may be asked by immigration)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>e-VOA approval (if applied online)</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Visa Fees */}
          <AnimatedSection delay={350}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Bali Visa Fees for Indians</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2">Visa Type</th>
                      <th className="text-left py-2 px-2">Fee</th>
                      <th className="text-left py-2 px-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-2">e-VOA (online)</td>
                      <td className="py-2 px-2">IDR 1,500,000 (~₹7,500-8,000)</td>
                      <td className="py-2 px-2">30 days</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-2">VOA at Airport</td>
                      <td className="py-2 px-2">IDR 500,000 (~₹2,700)</td>
                      <td className="py-2 px-2">30 days</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-2">Extension</td>
                      <td className="py-2 px-2">IDR 500,000 (~₹2,700)</td>
                      <td className="py-2 px-2">+30 days</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2">Bali Tourist Levy</td>
                      <td className="py-2 px-2">IDR 150,000 (~₹800)</td>
                      <td className="py-2 px-2">One-time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                *Fees are approximate and may vary based on exchange rate. e-VOA is more expensive but saves time.
              </p>
            </div>
          </AnimatedSection>

          {/* Entry Rules */}
          <AnimatedSection delay={400}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-secondary" />
                Bali Entry Rules for Indians
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Print e-VOA approval and carry with passport</li>
                <li>• Carry proof of funds (~$100/day recommended)</li>
                <li>• Dress modestly when visiting temples (cover shoulders & knees)</li>
                <li>• <strong>Strict drug laws</strong> - severe penalties including death</li>
                <li>• Be careful with belongings - petty theft in tourist areas</li>
                <li>• Check safety equipment before adventure activities</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Important Warning */}
          <AnimatedSection delay={450}>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4 text-red-800 dark:text-red-200">
                ⚠️ Important Warnings for Indians in Bali
              </h2>
              <ul className="space-y-3 text-red-700 dark:text-red-300">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span><strong>Indian Driving License NOT valid:</strong> You need International Driving Permit (IDP) for scooters/bikes. Without IDP, insurance is void in accidents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span><strong>Rental vehicles often uninsured:</strong> Check insurance before renting any vehicle including jet-skis, ATVs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span><strong>High medical costs:</strong> Take comprehensive travel health insurance before departure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span><strong>ATM skimming:</strong> Use bank branch ATMs and be cautious of card skimming.</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Best Time to Visit */}
          <AnimatedSection delay={500}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Best Time to Visit Bali</h2>
              <p className="text-muted-foreground mb-4">
                <strong>April to October</strong> is dry season - ideal for beaches, temples, and outdoor activities. November-March is rainy season with afternoon showers but still enjoyable.
              </p>
              <p className="text-muted-foreground">
                <strong>Peak Season:</strong> July-August, Christmas-New Year (book early, prices are higher).
              </p>
            </div>
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection delay={550}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4">FAQs – Bali Visa for Indians</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>Do Indians need a visa to visit Bali?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Indian passport holders need a visa for Bali. You can get e-VOA online before travel or VOA at the airport. Both allow 30-day stay, extendable by another 30 days.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger>What is the Bali visa fee for Indians?</AccordionTrigger>
                  <AccordionContent>
                    The e-VOA costs IDR 1,500,000 (approximately ₹7,500-8,000). VOA at airport is IDR 500,000 (~₹2,700). Extension costs IDR 500,000 for 30 more days.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger>How to apply for Bali e-VOA?</AccordionTrigger>
                  <AccordionContent>
                    Apply online at molina.imigrasi.go.id 7-14 days before travel. Fill the form, upload documents (passport, photo, return ticket), pay the fee, and receive approval via email.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger>Can Indians extend their stay in Bali?</AccordionTrigger>
                  <AccordionContent>
                    Yes, the 30-day VOA/e-VOA can be extended once for another 30 days. Visit a local immigration office before your visa expires.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5">
                  <AccordionTrigger>Is Indian driving license valid in Bali?</AccordionTrigger>
                  <AccordionContent>
                    No, Indian driving license is NOT valid in Bali/Indonesia. You need an International Driving Permit (IDP) to rent and drive vehicles. Without IDP, insurance may be void in accidents.
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
                      <td className="py-2 text-muted-foreground">e-VOA / VOA Required</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">Allowed Stay</td>
                      <td className="py-2 text-muted-foreground">30 days (extendable +30)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">e-VOA Fee</td>
                      <td className="py-2 text-muted-foreground">~₹8,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">Tourist Levy</td>
                      <td className="py-2 text-muted-foreground">IDR 150,000 (~₹800)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 font-medium">Passport Validity</td>
                      <td className="py-2 text-muted-foreground">Minimum 6 months</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Best Time to Visit</td>
                      <td className="py-2 text-muted-foreground">April to October</td>
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
                    Indonesia visa policies may change. Always verify current requirements on the official Indonesian Immigration website before travel.
                  </p>
                  <a
                    href="https://www.imigrasi.go.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-2"
                  >
                    Official Indonesian Immigration <ExternalLink className="w-3 h-3" />
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
              <span>✅ Subject to Indonesian immigration rules</span>
            </div>
          </AnimatedSection>

          {/* WhatsApp CTA */}
          <AnimatedSection delay={750}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Plan Your Bali Trip</h2>
              <p className="text-muted-foreground mb-6">
                Rudraksh Safar provides complete Bali packages with visa assistance, flights, hotels, and activities.
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

export default BaliVisa;
