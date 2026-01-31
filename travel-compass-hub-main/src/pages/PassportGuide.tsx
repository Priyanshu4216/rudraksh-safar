import React, { useState, useEffect } from 'react';
import { FileCheck, AlertTriangle, Clock, CheckCircle, XCircle, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedSection from '@/components/AnimatedSection';
import SEOHead from '@/components/SEOHead';
import PageLoader from '@/components/PageLoader';

const PassportGuide = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="passport" />;
  }

  return (
    <>
      <SEOHead
        title="Indian Passport Rules 2026 - Validity, Damage & Renewal Guide | Rudraksh Safar"
        description="Essential guide to Indian passport regulations. Verify your passport's validity, understand the '6-month rule', check for damage that could bar travel, and learn about blank page requirements."
        keywords="Indian passport rules 2026, passport validity check, damaged passport rules India, minimum 6 months validity, passport blank pages requirement, name mismatch in passport and ticket"
        canonicalUrl="https://rudrakshsafar.com/passport-guide"
      />

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <FileCheck className="w-4 h-4" />
                Travel Documents
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Essential Indian Passport Rules
              </h1>
              <p className="text-muted-foreground">
                Don't let a document error ruin your trip. Master the critical passport regulations—from validity dates to physical condition—required for seamless international travel.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="bg-muted/30 border border-border rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-semibold text-foreground">Disclaimer</h2>
                  <p className="text-sm text-muted-foreground">
                    This content is for general travel information only and is not legal advice. Passport rules can change—always confirm requirements with the official Passport Seva portal and the airline/embassy (if applicable).
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Validity Requirements */}
          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-serif font-bold">Passport Validity Rules</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <h3 className="font-semibold mb-2">6-Month Validity Rule</h3>
                  <p className="text-muted-foreground">
                    Most countries require your passport to be valid for at least 6 months from your date of entry or return date. This is a universal requirement for over 90% of international destinations including Dubai, Thailand, Singapore, USA, UK, and Schengen countries.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <h3 className="font-semibold mb-2">3-Month Validity Countries</h3>
                  <p className="text-muted-foreground">
                    Some countries like South Africa and a few others require only 3 months validity. However, always aim for 6 months to avoid any complications.
                  </p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200">Pro Tip</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        Renew your passport when it has less than 12 months validity remaining to ensure hassle-free travel planning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Blank Pages */}
          <AnimatedSection delay={150}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-serif font-bold">Blank Pages Requirement</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Blank pages are required for visa stamps, entry/exit stamps, and endorsements. Here's what you need:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-4">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Minimum Required</h4>
                    <p className="text-green-700 dark:text-green-300">2 blank pages for most countries</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Recommended</h4>
                    <p className="text-blue-700 dark:text-blue-300">4+ blank pages for frequent travellers</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  USA, Schengen, and several countries require minimum 2 blank visa pages (not endorsement pages). If running low on pages, consider passport re-issue.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Damaged Passport */}
          <AnimatedSection delay={200}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-500" />
                <h2 className="text-2xl font-serif font-bold">Damaged Passport Policy</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  A damaged passport may be considered invalid and can result in denied boarding or entry. Your passport may be rejected if:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Pages are torn, cut, or missing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Cover is severely damaged or detached</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Photo page is laminated poorly or peeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Water damage affecting personal details or photo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Stamps or details are illegible</span>
                  </li>
                </ul>
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4">
                  <p className="text-red-700 dark:text-red-300">
                    <strong>Action Required:</strong> If your passport shows any damage, apply for a new passport immediately before planning any international travel.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Name Mismatch */}
          <AnimatedSection delay={250}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-serif font-bold">Name Mismatch Rules</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Your name on airline tickets, visa, and passport must match exactly. Common issues and solutions:
                </p>
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-1">Minor Spelling Differences</h4>
                    <p className="text-sm text-muted-foreground">
                      Small variations (e.g., "SHARMA" vs "SHARMAS") may be acceptable with supporting documents. Carry original ID proof.
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-1">First Name / Last Name Order</h4>
                    <p className="text-sm text-muted-foreground">
                      Indian passports often have different name formats. Ensure flight bookings match passport exactly - surname in surname field, given name in given name field.
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-1">Name Change After Marriage</h4>
                    <p className="text-sm text-muted-foreground">
                      If name changed after marriage, update passport first before booking international travel. Carry marriage certificate as backup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Checklist */}
          <AnimatedSection delay={300}>
            <div className="bg-secondary/10 rounded-2xl p-6">
              <h2 className="text-2xl font-serif font-bold mb-4">Quick Passport Checklist</h2>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Valid for 6+ months from travel date</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Minimum 2 blank visa pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No physical damage or water stains</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Name matches tickets exactly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Photo clearly visible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>All pages intact and bound</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default PassportGuide;
