import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { XCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';

const CancellationPolicy = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader type="legal" />;
  }

  return (
    <>
      <Helmet>
        <title>Cancellation Policy | Rudraksh Safar - Travel Agency Bhilai</title>
        <meta name="description" content="Cancellation Policy for Rudraksh Safar travel bookings. Understand cancellation procedures and timelines." />
        <link rel="canonical" href="https://rudrakshsafar.com/cancellation-policy" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Cancellation Policy</h1>
                <p className="text-muted-foreground text-sm">Last Updated: January 14, 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
                  <strong>Important:</strong> Cancellation charges are determined by hotels, airlines, and other service providers. Rudraksh Safar facilitates the cancellation process but does not set refund amounts.
                </p>
              </div>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Cancellation Request</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>All cancellation requests must be submitted in writing via email to rudrakshsafar@gmail.com or WhatsApp (+91 94061 82174).</li>
                <li>Cancellation is effective from the date we receive and acknowledge your request.</li>
                <li>Verbal cancellation requests will not be processed.</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Standard Cancellation Timeline</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-semibold text-foreground">Time Before Departure</th>
                      <th className="text-left py-3 font-semibold text-foreground">Indicative Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3">30+ days</td>
                      <td className="py-3">Deposit forfeiture + supplier charges</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">15-29 days</td>
                      <td className="py-3">25-50% of package cost + supplier charges</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">7-14 days</td>
                      <td className="py-3">50-75% of package cost + supplier charges</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Less than 7 days</td>
                      <td className="py-3">75-100% of package cost</td>
                    </tr>
                    <tr>
                      <td className="py-3">No-show</td>
                      <td className="py-3">100% forfeiture</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                * These are indicative charges. Actual charges depend on supplier policies at the time of cancellation.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Non-Refundable Components</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Visa fees and processing charges</li>
                <li>Travel insurance premiums</li>
                <li>Non-refundable airline tickets (as per airline policy)</li>
                <li>Special event tickets or attraction passes</li>
                <li>Administrative and service fees</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Peak Season & Special Bookings</h2>
              <p className="text-muted-foreground">
                Bookings during peak seasons (Diwali, Christmas, New Year, school holidays) or for special events may have stricter cancellation policies as determined by suppliers.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Amendment Charges</h2>
              <p className="text-muted-foreground">
                Changes to confirmed bookings (dates, names, destinations) are subject to supplier availability and may incur additional charges.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Force Majeure</h2>
              <p className="text-muted-foreground">
                In case of cancellation due to Force Majeure (natural disasters, pandemics, war, government restrictions), refunds will be subject to what we recover from suppliers. We are not liable for any non-refundable amounts.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Contact for Cancellations</h2>
              <p className="text-muted-foreground">
                <strong>Email:</strong> rudrakshsafar@gmail.com<br />
                <strong>WhatsApp:</strong> +91 94061 82174<br />
                <strong>Response Time:</strong> Within 24-48 hours
              </p>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Recommendation:</strong> We strongly advise purchasing comprehensive travel insurance that covers trip cancellation for unforeseen circumstances.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CancellationPolicy;
