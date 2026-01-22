import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';

const RefundPolicy = () => {
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
        <title>Refund Policy | Rudraksh Safar - Travel Agency Bhilai</title>
        <meta name="description" content="Refund Policy for Rudraksh Safar. Understand how refunds are processed for travel bookings." />
        <link rel="canonical" href="https://rudrakshsafar.com/refund-policy" />
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
                <RefreshCw className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Refund Policy</h1>
                 <p className="text-muted-foreground text-sm">Last Updated: January 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                Rudraksh Safar acts solely as an intermediary between customers and third-party service providers such as airlines, hotels, transport operators, and tour suppliers. All refunds are governed primarily by the refund policies of these respective suppliers.
              </p>
              <p className="text-muted-foreground">
                We facilitate the refund process on your behalf but do not control refund approvals, amounts, or timelines.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Refund Eligibility</h2>
              <p className="text-muted-foreground">Refunds may be applicable only under the following circumstances:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Cancellation is made in accordance with our Cancellation Policy.</li>
                <li>Services were not delivered as confirmed in writing.</li>
                <li>Duplicate or excess payment was made due to technical or processing error.</li>
              </ul>
              <p className="text-muted-foreground">
                Refund eligibility is always subject to supplier approval.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Refund Process</h2>
              <p className="text-muted-foreground">The refund process follows these steps:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Customer submits a cancellation or refund request via email or WhatsApp.</li>
                <li>Rudraksh Safar verifies booking details and applicable supplier refund rules.</li>
                <li>Refund request is formally initiated with the concerned suppliers.</li>
                <li>Once refund is received from suppliers, the amount is transferred to the original payment method used by the customer.</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Refund Timeline</h2>
              <p className="text-muted-foreground">Refund timelines depend on supplier processing and banking systems. Indicative timelines are:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-semibold text-foreground">Payment Method</th>
                      <th className="text-left py-3 font-semibold text-foreground">Processing Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Credit / Debit Card</td>
                      <td className="py-3">7–14 business days</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">UPI / Net Banking</td>
                      <td className="py-3">5–10 business days</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Bank Transfer</td>
                      <td className="py-3">7–14 business days</td>
                    </tr>
                    <tr>
                      <td className="py-3">Forex Card</td>
                      <td className="py-3">14–21 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">These timelines are approximate and may vary based on supplier response and bank processing cycles.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Non-Refundable Items</h2>
              <p className="text-muted-foreground">The following are generally non-refundable:</p>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                  <li>• Visa processing fees</li>
                  <li>• Travel insurance premiums</li>
                  <li>• Non-refundable airline tickets</li>
                  <li>• Special event or attraction tickets</li>
                  <li>• Service, convenience, and administrative fees</li>
                  <li>• Peak season or promotional booking deposits (as per supplier policy)</li>
                </ul>
              </div>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Partial Refunds</h2>
              <p className="text-muted-foreground">
                If only part of a booking is cancelled or affected, refunds will be calculated proportionately based on supplier refund rules for each service component.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Currency &amp; Charges</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Refunds are processed in the same currency as the original payment.</li>
                <li>Any currency conversion differences or bank charges are not compensated by Rudraksh Safar.</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Refund Disputes</h2>
              <p className="text-muted-foreground">If you believe your refund has been incorrectly calculated:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Contact us within 30 days of refund receipt.</li>
                <li>Provide your booking ID and supporting documentation.</li>
                <li>We will review and respond within 7 business days.</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Important Disclaimer</h2>
              <p className="text-muted-foreground">
                Rudraksh Safar does not guarantee refund approval, refund amount, or refund timelines, as these depend entirely on third-party suppliers. Our responsibility is limited to facilitating communication and refund processing.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Contact for Refund Requests</h2>
              <p className="text-muted-foreground">
                Email: rudrakshsafar@gmail.com<br />
                WhatsApp: +91 94061 82174
              </p>
              <p className="text-muted-foreground">
                <strong>Subject Line:</strong> Refund Request- [Booking ID]
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RefundPolicy;
