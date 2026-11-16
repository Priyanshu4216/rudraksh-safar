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
        <meta name="description" content="Comprehensive Refund Policy for Rudraksh Safar covering tour packages, visa, flights, hotels, and all travel services." />
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
                <p className="text-muted-foreground text-sm">Last Updated: September 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                Rudraksh Safar acts solely as an intermediary between customers and independent third-party service providers including airlines, hotels, transport operators, visa processing agencies, and tour suppliers. <strong>All refunds are governed primarily by the refund policies of the respective third-party suppliers.</strong> Rudraksh Safar facilitates the refund process on your behalf but does not control refund approvals, amounts, or timelines.
              </p>

              {/* Section 1 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. General Refund Principles</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Rudraksh Safar's own service and coordination fees are <strong>strictly non-refundable</strong> under all circumstances once work has commenced on a booking.</li>
                <li>Refunds from third-party suppliers are processed only after those suppliers have remitted the refundable amount to Rudraksh Safar.</li>
                <li>Rudraksh Safar does not advance refunds from its own funds pending recovery from suppliers.</li>
                <li>All refund amounts are subject to deduction of applicable cancellation charges, supplier penalties, administrative fees, and bank/payment gateway charges.</li>
                <li>Refunds are processed to the <strong>original payment method</strong> used at the time of booking only. Refunds to alternate bank accounts or payment methods will not be processed.</li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Refund Eligibility Conditions</h2>
              <p className="text-muted-foreground">Refunds may be considered only when:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>The cancellation is submitted in accordance with our published Cancellation Policy, and within the applicable cancellation window.</li>
                <li>Services were demonstrably not delivered as confirmed in the written booking confirmation issued by Rudraksh Safar.</li>
                <li>A duplicate or excess payment was made due to a verifiable technical or processing error, supported by documentary evidence.</li>
                <li>The trip was cancelled by Rudraksh Safar due to reasons within our control (excluding force majeure).</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                All refund eligibility is subject to verification and supplier approval. Submission of a refund request does not guarantee a refund will be issued.
              </p>

              {/* Section 3 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Category-wise Refund Rules</h2>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">a) Tour Package Refunds</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Refunds for tour packages are calculated as per the cancellation timeline specified in the Cancellation Policy.</li>
                <li>Land package components (hotels, transport, activities) are refunded based on individual supplier policies.</li>
                <li>Non-refundable components within a package (visa fees, special event tickets, etc.) are not included in any refund calculation.</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">b) Flight Ticket Refunds</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Flight refunds are subject entirely to the fare rules of the specific airline ticket purchased.</li>
                <li>Non-refundable fare tickets will attract zero refund of the base fare. Applicable taxes may be partially refundable as per airline policy.</li>
                <li>Airline refunds may take 30–90 business days to process depending on the airline's internal procedures.</li>
                <li>Rudraksh Safar will initiate the refund request with the airline within 5 business days of receiving the customer's written cancellation request.</li>
                <li>For cancelled flights (cancelled by the airline), refunds or rebooking are subject to the airline's applicable policy. Rudraksh Safar will assist in filing the claim.</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">c) Hotel Refunds</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Hotel refunds are governed by the specific cancellation policy of the hotel and rate type booked.</li>
                <li>Fully refundable rate bookings: Refund processed within 7–14 business days after hotel approval.</li>
                <li>Non-refundable rate bookings: No refund is applicable regardless of the lead time of cancellation.</li>
                <li>Early check-out does not entitle any refund for unused nights unless hotel policy specifically provides for it.</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">d) Visa Service Refunds</h3>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                  <li>• <strong>No refund</strong> on embassy/consulate/VFS/BLS application fees under any circumstances.</li>
                  <li>• <strong>No refund</strong> on Rudraksh Safar's visa service fee once documentation work has commenced — irrespective of visa approval, rejection, or delay.</li>
                  <li>• <strong>No refund</strong> on courier or document procurement charges.</li>
                  <li>• In the rare event that a visa application is withdrawn before any submission to the embassy, a partial refund of Rudraksh Safar's service fee may be considered at our sole discretion.</li>
                </ul>
              </div>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">e) Passport Assistance Refunds</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Government fees paid to Passport Seva Kendra are non-refundable as per Government of India policy.</li>
                <li>Rudraksh Safar's service fee for passport assistance is non-refundable once service commencement has begun.</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">f) Transport &amp; Ground Service Refunds</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Ground transport cancellation refunds depend on the operator's policy and cancellation lead time.</li>
                <li>No-show situations for any transport services will result in 100% forfeiture.</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">g) Travel Insurance Refunds</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Insurance premiums are non-refundable once the policy is issued.</li>
                <li>Any claims under insurance must be filed directly with the insurance provider. Rudraksh Safar has no role in insurance claim decisions or payments.</li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Refund Process — Step by Step</h2>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Step 1:</strong> Customer submits a written cancellation/refund request via email or WhatsApp with booking ID and reason.</li>
                <li><strong>Step 2:</strong> Rudraksh Safar acknowledges the request in writing within 48 working hours.</li>
                <li><strong>Step 3:</strong> Rudraksh Safar verifies booking details, supplier policies, and applicable charges.</li>
                <li><strong>Step 4:</strong> Refund request is formally initiated with the concerned third-party suppliers.</li>
                <li><strong>Step 5:</strong> Once supplier remits the refundable amount to Rudraksh Safar, the net refund (after applicable deductions) is processed to the customer's original payment method.</li>
                <li><strong>Step 6:</strong> Customer is notified of the refund processing with reference details.</li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Refund Processing Timelines</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-semibold text-foreground">Service Category</th>
                      <th className="text-left py-3 font-semibold text-foreground">Indicative Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Domestic Tour Package</td>
                      <td className="py-3">7–14 business days after supplier approval</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">International Tour Package</td>
                      <td className="py-3">14–21 business days after supplier approval</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Flight Ticket (Domestic Airline)</td>
                      <td className="py-3">15–30 business days after airline processing</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Flight Ticket (International Airline)</td>
                      <td className="py-3">30–90 business days after airline processing</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Hotel (Refundable Rate)</td>
                      <td className="py-3">7–14 business days after hotel approval</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Ground Transport</td>
                      <td className="py-3">5–10 business days after operator confirmation</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Credit / Debit Card Reversal</td>
                      <td className="py-3">7–14 business days (additional bank processing)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">UPI / Net Banking</td>
                      <td className="py-3">5–10 business days after initiation</td>
                    </tr>
                    <tr>
                      <td className="py-3">Forex Card</td>
                      <td className="py-3">14–21 business days after initiation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                These timelines are indicative and may vary based on supplier response, banking system processing cycles, and public holidays. Rudraksh Safar is not responsible for delays caused by banks, payment gateways, or suppliers.
              </p>

              {/* Section 6 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Absolutely Non-Refundable Items</h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-200 text-sm font-semibold">The following are non-refundable under all circumstances:</p>
                <ul className="text-red-800 dark:text-red-200 text-sm mt-2 space-y-1">
                  <li>• Rudraksh Safar service and coordination fees</li>
                  <li>• Visa application fees (embassy, consulate, VFS, BLS)</li>
                  <li>• Visa processing service charges</li>
                  <li>• Passport government fees</li>
                  <li>• Travel insurance premiums</li>
                  <li>• Non-refundable airline ticket base fares</li>
                  <li>• Special event / attraction / activity tickets</li>
                  <li>• Non-refundable hotel promotional rates</li>
                  <li>• Cruise non-refundable deposits</li>
                  <li>• Courier and document handling charges</li>
                  <li>• Payment gateway / bank transaction charges</li>
                  <li>• Currency conversion differences</li>
                </ul>
              </div>

              {/* Section 7 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Partial Refunds</h2>
              <p className="text-muted-foreground">
                If only a portion of a booking is cancelled or affected, refunds will be calculated on a proportionate basis for the cancelled component(s) only, subject to applicable supplier refund rules for each service component. The remaining components of the booking continue under their original terms.
              </p>

              {/* Section 8 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Currency &amp; Exchange Rate Differences</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Refunds are processed in the same currency in which the original payment was made.</li>
                <li>Rudraksh Safar does not compensate for any currency conversion losses, exchange rate differences between the time of payment and time of refund, or bank charges on refund transactions.</li>
                <li>For international packages paid in foreign currency, refunds will be remitted at the prevailing exchange rate at the time of refund processing.</li>
              </ul>

              {/* Section 9 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Refund Disputes</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>If a customer believes their refund has been incorrectly calculated, they must notify Rudraksh Safar in writing within <strong>30 days of receiving the refund</strong>.</li>
                <li>The dispute notice must include: booking ID, date of original transaction, amount received, and reason for dispute with supporting documentation.</li>
                <li>Rudraksh Safar will review the dispute and respond within <strong>10 business days</strong>.</li>
                <li>Disputes raised after 30 days of refund receipt will not be entertained.</li>
                <li>All unresolved disputes are subject to the governing law and jurisdiction specified in our Terms &amp; Conditions.</li>
              </ul>

              {/* Section 10 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Force Majeure Refunds</h2>
              <p className="text-muted-foreground">
                In cases of cancellation due to force majeure events (natural disasters, pandemics, war, government travel restrictions, embassy closures, etc.), refunds will be limited to amounts actually recoverable from third-party suppliers after deducting their applicable charges. Rudraksh Safar's service fee is non-refundable even in force majeure situations. Customers with travel insurance are strongly advised to make a claim under their policy.
              </p>

              {/* Section 11 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">11. Important Disclaimer on Refunds</h2>
              <p className="text-muted-foreground">
                <strong>Rudraksh Safar does not guarantee the approval, amount, or timeline of any refund</strong>, as these are primarily dependent on third-party suppliers' policies and decisions. Our role and responsibility is strictly limited to facilitating communication and the refund process. We are not financially liable for refunds not approved by suppliers.
              </p>

              {/* Section 12 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">12. Contact for Refund Requests</h2>
              <p className="text-muted-foreground">
                <strong>Email:</strong> rudrakshsafar@gmail.com<br />
                <strong>Subject Line:</strong> Refund Request – [Booking ID]<br />
                <strong>WhatsApp:</strong> +91 92036 50311<br />
                <strong>Response Time:</strong> Within 48 working hours of request receipt
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RefundPolicy;
