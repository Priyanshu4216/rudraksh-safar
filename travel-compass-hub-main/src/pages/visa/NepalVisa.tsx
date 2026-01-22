import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';
import { FileCheck, Clock, Banknote, AlertCircle, FileText, Plane, Calendar, MessageCircle, ExternalLink } from 'lucide-react';

const PHONE_NUMBER = '919406182174';

const NepalVisa = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message = "Hi! I want to plan a Nepal trip. Please help.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isLoading) {
    return <PageLoader type="visa" />;
  }

  return (
    <>
      <Helmet>
        <title>Nepal Visa for Indians 2026 - NO VISA Required! | Rudraksh Safar</title>
        <meta name="description" content="Indians don't need visa for Nepal! Travel freely with just an ID proof. Check entry requirements, documents needed & travel tips for Nepal trip from India." />
        <link rel="canonical" href="https://rudrakshsafar.com/visa/nepal" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🇳🇵</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Nepal Visa for Indians
              </h1>
              <p className="text-muted-foreground text-lg">
                NO VISA Required for Indian Citizens!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <FileCheck className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Type</p>
                <p className="font-semibold text-green-600">NOT REQUIRED</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Processing</p>
                <p className="font-semibold">N/A</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Banknote className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Visa Fee</p>
                <p className="font-semibold text-green-600">FREE</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Stay Duration</p>
                <p className="font-semibold">Unlimited</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-3 text-green-800 dark:text-green-200">
                🎉 Visa-Free Travel!
              </h2>
              <p className="text-green-700 dark:text-green-300">
                Indians can travel to Nepal without a visa! Thanks to the India-Nepal Friendship Treaty, citizens of both countries can freely travel, work, and stay in each other's country. Just carry a valid ID proof.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-secondary" />
                Documents Required
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">By Air:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Valid Indian Passport</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">By Road/Land:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Valid Indian Passport, OR</li>
                    <li>• Voter ID Card, OR</li>
                    <li>• Aadhaar Card (with photo)</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Note: Passport is recommended as it's universally accepted at all entry points.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-secondary" />
                Entry Points & Tips
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong>By Air:</strong> Tribhuvan Airport, Kathmandu</li>
                <li>• <strong>By Road:</strong> Raxaul-Birgunj, Sunauli-Bhairahawa, Kakarbhitta</li>
                <li>• Indian Rupees up to ₹25,000 can be carried</li>
                <li>• Indian currency (₹) widely accepted except ₹500 and ₹2000 notes</li>
                <li>• Nepali Rupee (NPR) is local currency; 1 INR ≈ 1.6 NPR</li>
                <li>• Indian mobile networks work near border areas</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-serif font-bold mb-4">Best Time to Visit Nepal</h2>
              <p className="text-muted-foreground mb-4">
                <strong>October to December</strong> for trekking and clear mountain views. <strong>March to May</strong> for spring blooms and moderate weather. Monsoon (June-September) brings heavy rains.
              </p>
              <p className="text-muted-foreground">
                <strong>Must Visit:</strong> Kathmandu Valley, Pokhara, Everest Base Camp, Chitwan National Park, Lumbini.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200">Important Notes</h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    While no visa is needed, always carry valid ID. For trekking in restricted areas (like Upper Mustang, Manaslu), permits are required. Check Nepal Tourism Board for latest updates.
                  </p>
                  <a 
                    href="https://www.tourism.gov.np/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-200 underline text-sm mt-2"
                  >
                    Nepal Tourism Board <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={700}>
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border border-secondary/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Plan Your Nepal Adventure</h2>
              <p className="text-muted-foreground mb-6">
                From spiritual journeys to mountain treks, explore Nepal with our curated packages.
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

export default NepalVisa;
