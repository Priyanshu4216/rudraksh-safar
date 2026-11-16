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
        <meta name="description" content="Detailed Cancellation Policy for Rudraksh Safar covering tour packages, visa, flights, hotels, and all travel services." />
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
                <p className="text-muted-foreground text-sm">Last Updated: September 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
                  <strong>IMPORTANT:</strong> Cancellation charges are primarily determined by airlines, hotels, tour operators, and other third-party service providers. Rudraksh Safar facilitates the cancellation process on your behalf but does not set or control third-party refund amounts. Our service fees and coordination charges are non-refundable in all cases.
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. How to Submit a Cancellation Request</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>All cancellation requests must be submitted exclusively in writing via:
                  <ul className="mt-2 ml-4">
                    <li>— Email: <strong>rudrakshsafar@gmail.com</strong> (Subject: "Cancellation Request – [Booking ID]")</li>
                    <li>— WhatsApp message to: <strong>+91 92036 50311</strong> (with booking ID clearly stated)</li>
                  </ul>
                </li>
                <li><strong>Verbal cancellation requests — by phone call or in person — will not be accepted or processed.</strong> Only written requests are valid.</li>
                <li>Cancellation is effective only from the date and time Rudraksh Safar issues a written acknowledgement of the request.</li>
                <li>Customers must receive a written cancellation acknowledgement from Rudraksh Safar. If not received within 48 hours, customers should follow up to confirm receipt.</li>
                <li>Failure to follow the prescribed cancellation procedure may result in additional charges or treatment as a no-show.</li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Tour Package Cancellation Charges</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 font-semibold text-foreground">Days Before Departure</th>
                      <th className="text-left py-3 font-semibold text-foreground">Domestic Package Charges</th>
                      <th className="text-left py-3 font-semibold text-foreground">International Package Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3">60+ days</td>
                      <td className="py-3">Non-refundable deposit only</td>
                      <td className="py-3">Non-refundable deposit only</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">30–59 days</td>
                      <td className="py-3">25% of package cost + deposit</td>
                      <td className="py-3">30–40% of package cost + deposit</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">15–29 days</td>
                      <td className="py-3">40–50% of package cost</td>
                      <td className="py-3">50–60% of package cost</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">7–14 days</td>
                      <td className="py-3">60–75% of package cost</td>
                      <td className="py-3">70–80% of package cost</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3">Less than 7 days</td>
                      <td className="py-3">75–100% of package cost</td>
                      <td className="py-3">85–100% of package cost</td>
                    </tr>
                    <tr>
                      <td className="py-3">No-show / Day of Travel</td>
                      <td className="py-3">100% forfeiture</td>
                      <td className="py-3">100% forfeiture</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                * These are indicative charges. Actual charges depend on supplier-specific cancellation policies at the time of cancellation. Additionally, Rudraksh Safar's non-refundable service coordination fee applies in all cases.
              </p>

              {/* Section 3 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Flight Ticket Cancellations</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Flight ticket cancellation charges are set entirely by the respective airline and are governed by the fare rules of the specific ticket purchased.</li>
                <li>Low-cost carriers typically operate on fully non-refundable fares. Customers should verify fare rules before booking.</li>
                <li>Rudraksh Safar will submit cancellation requests to airlines on the customer's behalf but cannot guarantee any specific refund amount or timeline.</li>
                <li>Airline refunds, where applicable, will only be processed after the airline has remitted the refundable amount to Rudraksh Safar. This may take 30–90 business days depending on the airline.</li>
                <li>A non-refundable Rudraksh Safar service coordination fee applies to all flight cancellations regardless of the airline's refund decision.</li>
                <li><strong>Date Changes on Flights:</strong> Fare difference, change fees, and Rudraksh Safar handling charges apply. Changes are subject to seat availability on the new date and the applicable fare rules.</li>
                <li><strong>Name Corrections on Tickets:</strong> Minor corrections may be permitted by airlines subject to their individual policies and applicable fees. Complete name changes are generally not permitted after ticketing.</li>
                <li><strong>Missed Flights / No-Show:</strong> No refund will be provided by Rudraksh Safar or the airline for missed flights where the no-show is due to the customer's own fault.</li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Hotel &amp; Accommodation Cancellations</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Hotel cancellation policies vary significantly by property and booking rate type. Each hotel's cancellation window and penalty schedule is communicated at the time of booking.</li>
                <li>Many hotels operate on fully non-refundable rates for promotional or advance-purchase bookings. Customers should confirm the rate type before payment.</li>
                <li>Rudraksh Safar will endeavor to process hotel cancellations as per the hotel's policy but cannot override hotel-imposed cancellation charges.</li>
                <li>Hotel refunds are processed after receipt of the refundable amount from the hotel. This typically takes 7–21 business days.</li>
                <li>Early check-out from a hotel does not entitle any refund for unused nights unless the hotel's policy specifically provides for it.</li>
                <li>Hotel overbooking situations handled by the hotel (not Rudraksh Safar) — customers will be assisted with alternative arrangements but Rudraksh Safar cannot be held liable for hotel overbooking decisions.</li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Visa Service Cancellation</h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <p className="text-red-800 dark:text-red-200 text-sm font-semibold">VISA SERVICE — NON-REFUNDABLE:</p>
                <ul className="text-red-800 dark:text-red-200 text-sm mt-2 space-y-1">
                  <li>• All visa application fees, embassy fees, VFS/BLS charges, service charges, and courier fees are strictly non-refundable once the application has been submitted to the embassy or consulate — irrespective of whether the visa is approved, rejected, or still pending.</li>
                  <li>• Rudraksh Safar's visa assistance service fee is non-refundable once documentation work has commenced, regardless of the visa outcome.</li>
                  <li>• Withdrawal of a visa application after submission does not entitle any refund of fees paid to the embassy or to Rudraksh Safar.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Passport Assistance Service Cancellation</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Rudraksh Safar's passport assistance service fee is non-refundable once documentation work or form-filling has commenced.</li>
                <li>Government fees paid to Passport Seva Kendra or any official authority are non-refundable as per government policy.</li>
                <li>Cancellation of passport assistance requested before any work commences may be eligible for a partial refund of Rudraksh Safar's service fee at our discretion.</li>
              </ul>

              {/* Section 7 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Transport &amp; Ground Services Cancellation</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Cancellation charges for cab, coach, transfer, and other ground transport services depend on the operator's policy and the lead time of the cancellation.</li>
                <li>Generally: cancellations within 24 hours of scheduled service attract 100% charges. Cancellations 48–72 hours in advance may attract 50%–75% charges.</li>
                <li>No refund is applicable for no-show situations on any ground transport.</li>
              </ul>

              {/* Section 8 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Travel Insurance Cancellation</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Travel insurance premiums paid are non-refundable once the policy has been issued, as per insurance regulatory guidelines.</li>
                <li>Short-period (Free-Look) cancellation options, if available under your policy, must be exercised directly with the insurer within the stipulated time.</li>
              </ul>

              {/* Section 9 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Absolutely Non-Refundable Items (All Categories)</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Rudraksh Safar service and coordination fees (all bookings)</li>
                <li>Visa application fees (embassy / VFS / BLS)</li>
                <li>Visa service charges</li>
                <li>Travel insurance premiums</li>
                <li>Non-refundable airline ticket fares</li>
                <li>Special event, festival, or attraction entry tickets</li>
                <li>Cruise non-refundable deposits</li>
                <li>Peak season promotional deposits</li>
                <li>Passport government fees</li>
                <li>Any courier or document processing charges</li>
                <li>Transaction/payment gateway fees</li>
              </ul>

              {/* Section 10 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Peak Season &amp; Special Event Cancellations</h2>
              <p className="text-muted-foreground">
                Bookings during peak seasons (Diwali, Christmas, New Year, school holidays, long weekends, pilgrimage seasons) or for special events (weddings, sporting events, exhibitions) are subject to significantly stricter cancellation policies as individually determined by suppliers. These may include 100% non-refundable deposits regardless of cancellation lead time. Customers will be specifically advised of peak season policies at the time of booking.
              </p>

              {/* Section 11 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">11. Booking Amendments</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>All amendments to confirmed bookings (travel dates, passenger names, destinations, accommodation, or services) are subject to availability and supplier policies.</li>
                <li>Amendment requests must be submitted in writing to Rudraksh Safar.</li>
                <li>Amendments may attract fare/rate differences, amendment fees charged by suppliers, and a Rudraksh Safar handling charge.</li>
                <li>Rudraksh Safar cannot guarantee that requested amendments will be possible, particularly within 7 days of departure.</li>
                <li>If an amendment results in a lower-priced service, any price difference is not refundable.</li>
              </ul>

              {/* Section 12 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">12. Cancellation Due to Force Majeure</h2>
              <p className="text-muted-foreground">
                In the event that a trip must be cancelled due to force majeure events including but not limited to natural disasters, government-imposed travel bans, pandemics, war, terrorism, civil unrest, embassy closures, or border restrictions, the following applies:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>Refunds will be limited to amounts recoverable from third-party suppliers after deducting their cancellation charges.</li>
                <li>Rudraksh Safar's service coordination fees are non-refundable under all circumstances including force majeure.</li>
                <li>Rudraksh Safar will make best-effort attempts to recover supplier refunds but cannot guarantee specific amounts or timelines.</li>
                <li>Customers with travel insurance are strongly advised to file a claim under their policy for force majeure situations.</li>
              </ul>

              {/* Section 13 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">13. Cancellation by Rudraksh Safar</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Rudraksh Safar reserves the right to cancel any booking if: minimum group size is not met; supplier fails to deliver the contracted service; safety concerns arise; or force majeure events prevent service delivery.</li>
                <li>In such cases, Rudraksh Safar will offer: a full refund of amounts directly paid to Rudraksh Safar (excluding third-party non-refundable charges); or an alternative itinerary or travel date of comparable value.</li>
                <li>Rudraksh Safar's liability in case of a Rudraksh Safar-initiated cancellation is strictly limited to a refund of amounts directly received by Rudraksh Safar.</li>
              </ul>

              {/* Section 14 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">14. Contact for Cancellations</h2>
              <p className="text-muted-foreground">
                <strong>Email:</strong> rudrakshsafar@gmail.com (Subject: "Cancellation Request – [Booking ID]")<br />
                <strong>WhatsApp:</strong> +91 92036 50311<br />
                <strong>Response Time:</strong> Within 24–48 working hours
              </p>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Strong Recommendation:</strong> We urge all customers to purchase comprehensive travel insurance that includes trip cancellation, interruption, and curtailment cover before making any travel booking. This significantly reduces financial risk from unforeseen cancellation situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CancellationPolicy;
