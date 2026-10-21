import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';

const Disclaimer = () => {
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
        <title>Disclaimer | Rudraksh Safar - Travel Agency Bhilai</title>
        <meta name="description" content="Comprehensive legal disclaimer for Rudraksh Safar covering visa, passport, flights, hotels, tour packages and all travel services." />
        <link rel="canonical" href="https://rudrakshsafar.com/disclaimer" />
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
                <AlertTriangle className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Disclaimer</h1>
                <p className="text-muted-foreground text-sm">Last Updated: September 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
                  <strong>IMPORTANT LEGAL NOTICE:</strong> Please read this Disclaimer carefully and in its entirety before using the Rudraksh Safar website or services. By accessing or using our website or services in any manner, you unconditionally accept and agree to every term stated in this Disclaimer.
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. General Information Disclaimer</h2>
              <p className="text-muted-foreground">
                All information, content, materials, and data provided on the Rudraksh Safar website (rudrakshsafar.com) — including destination guides, travel tips, itineraries, package descriptions, pricing, visa information, and blog posts — are for <strong>general informational and illustrative purposes only</strong>.
              </p>
              <p className="text-muted-foreground">
                While we endeavor to maintain accuracy, Rudraksh Safar makes <strong>no warranties or representations</strong>, express or implied, regarding the completeness, accuracy, timeliness, reliability, suitability, or availability of any information, products, or services on this website. Any reliance placed on such information is strictly at your own risk.
              </p>

              {/* Section 2 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Intermediary Role — Comprehensive Disclaimer</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Rudraksh Safar operates exclusively as a <strong>travel planning and booking facilitation intermediary</strong>. We are not a principal service provider. All actual travel services — including flights, accommodation, ground transportation, activities, visa processing, passport assistance, and tour operations — are delivered by independent third-party suppliers under their own terms, conditions, and policies. Rudraksh Safar expressly disclaims all liability for the acts, omissions, errors, negligence, misrepresentations, breaches, or failures of any such third-party supplier.
                </p>
              </div>

              {/* Section 3 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Visa Disclaimer</h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <p className="text-red-800 dark:text-red-200 text-sm font-semibold">VISA-SPECIFIC DISCLAIMERS — READ CAREFULLY:</p>
                <ul className="text-red-800 dark:text-red-200 text-sm mt-2 space-y-1">
                  <li>• <strong>No Guarantee of Visa Approval:</strong> Rudraksh Safar does not guarantee visa approval, grant, or any specific processing outcome under any circumstances whatsoever. Visa decisions are entirely at the discretion of the respective embassy, consulate, high commission, or government authority.</li>
                  <li>• <strong>Visa Rejection:</strong> Rudraksh Safar is not responsible for visa refusals, rejections, or denials. All embassy fees, service charges, and processing fees paid are non-refundable on rejection.</li>
                  <li>• <strong>Visa Delay:</strong> Processing times are estimates only. Rudraksh Safar is not liable for embassy delays, additional processing requirements, interview summons, or any consequential losses resulting from visa delays.</li>
                  <li>• <strong>Late Visa:</strong> If a visa is issued after the intended departure date due to embassy processing timelines, Rudraksh Safar is not liable for any losses, trip amendments, or rebooking costs.</li>
                  <li>• <strong>Incorrect Visa Category:</strong> Ensuring the correct visa type, category, and duration is the sole responsibility of the applicant. Rudraksh Safar is not liable for travel disruption due to incorrect visa types.</li>
                  <li>• <strong>Visa Rule Changes:</strong> Visa requirements, fees, and procedures can change at any time without notice. Customers must verify current requirements with official embassy sources before travel.</li>
                  <li>• <strong>Entry Denial Despite Valid Visa:</strong> Holding a valid visa does not guarantee entry into any country. Immigration officers retain the right to deny entry at their discretion. Rudraksh Safar bears no liability in such cases.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Passport Disclaimer</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Rudraksh Safar provides passport application assistance as a convenience service only. Passport issuance is exclusively the authority of the Government of India through the Ministry of External Affairs / Passport Seva Kendra.</li>
                <li>Rudraksh Safar does not guarantee passport issuance timelines, processing outcomes, or approval of tatkal applications.</li>
                <li>We are not responsible for delays in passport issuance due to police verification, government backlogs, incorrect information provided by the applicant, or any other reason.</li>
                <li>Our service fees for passport assistance are strictly non-refundable regardless of the outcome.</li>
                <li>Customers are solely responsible for ensuring their passport has adequate validity for travel and meets all destination country requirements.</li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Flight &amp; Airline Disclaimer</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Rudraksh Safar acts solely as a booking intermediary for airline tickets. The airline is the carrier responsible for all aspects of the flight journey under its conditions of carriage.</li>
                <li>We do not control, operate, or supervise any airline. We are not responsible for flight cancellations, delays, schedule changes, route modifications, diversions, or any operational decisions made by airlines.</li>
                <li>Rudraksh Safar is not liable for baggage loss, theft, or damage. All such claims must be lodged directly with the airline.</li>
                <li>We are not liable for missed connections, denied boarding, overbooking situations, or any consequential losses arising from flight-related issues.</li>
                <li>Seat allocations, meal requests, and special assistance requests are communicated to the airline but cannot be guaranteed by Rudraksh Safar.</li>
                <li>Airline loyalty points, frequent flyer miles, or other airline-specific benefits are subject to individual airline programs and are not guaranteed by Rudraksh Safar.</li>
              </ul>

              {/* Section 6 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Hotel &amp; Accommodation Disclaimer</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Hotel star ratings, descriptions, and photographs provided on our website are sourced from suppliers and may not always reflect current property conditions.</li>
                <li>Rudraksh Safar is not liable for hotel overbooking, sub-standard conditions, maintenance issues, or discrepancies between described and actual facilities.</li>
                <li>We are not responsible for theft, loss of valuables, or security incidents at accommodation premises.</li>
                <li>Room allocations, upgrades, and special amenities are at the hotel's sole discretion and are not guaranteed by Rudraksh Safar.</li>
              </ul>

              {/* Section 7 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Travel Information &amp; Advisory Disclaimer</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Travel advisories, safety warnings, health requirements, entry regulations, and visa rules are subject to frequent change. Travelers must verify all such information with official government, embassy, or health authority sources before travel.</li>
                <li>Prices, availability, and itinerary details are subject to change without prior notice.</li>
                <li>Images on the website are for illustrative purposes only and may not accurately depict actual accommodations, transport, landscapes, or destinations.</li>
                <li>Weather conditions, seasonal information, and best travel periods are indicative and cannot be guaranteed by Rudraksh Safar.</li>
                <li>Information about local laws, customs, and regulations is provided as general guidance only. Compliance with local laws is entirely the traveler's responsibility.</li>
              </ul>

              {/* Section 8 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Health &amp; Medical Disclaimer</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Nothing on this website constitutes medical advice. Travelers with health conditions must consult their physician before undertaking any travel.</li>
                <li>Rudraksh Safar is not responsible for medical emergencies, illness, injury, or death occurring during travel.</li>
                <li>Vaccination requirements and health regulations are subject to change. Travelers must verify current requirements with their doctor and relevant embassies.</li>
              </ul>

              {/* Section 9 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. No Professional Advice</h2>
              <p className="text-muted-foreground">
                Content on this website does not constitute and should not be construed as legal, financial, immigration, medical, or any other form of professional advice.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>For visa or immigration matters, consult the relevant embassy, consulate, or a qualified immigration advisor.</li>
                <li>For health-related travel advice, consult a qualified medical professional.</li>
                <li>For financial or insurance advice, consult a licensed financial advisor.</li>
              </ul>
              <p className="text-muted-foreground">Rudraksh Safar is not responsible for any decisions made based on content appearing on this website.</p>

              {/* Section 10 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Third-Party Links Disclaimer</h2>
              <p className="text-muted-foreground">
                Our website may contain links to external websites, government portals, or third-party platforms for user convenience. Rudraksh Safar has no control over the content, privacy practices, accuracy, or availability of such external sites. The inclusion of any external link does not imply endorsement, recommendation, or approval by Rudraksh Safar. We accept no responsibility for the content or practices of any linked third-party website.
              </p>

              {/* Section 11 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">11. Limitation of Liability</h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-200 text-sm font-semibold">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW:</p>
                <ul className="text-red-800 dark:text-red-200 text-sm mt-2 space-y-1">
                  <li>• Rudraksh Safar shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising from use of this website or any of our services.</li>
                  <li>• We are not responsible for acts, omissions, delays, or failures of any third-party service provider.</li>
                  <li>• We are not liable for losses caused by force majeure events including natural disasters, pandemics, war, terrorism, civil unrest, government restrictions, or embassy closures.</li>
                  <li>• We are not liable for visa rejections, passport delays, or denied immigration entry.</li>
                  <li>• We are not liable for flight cancellations, delays, missed connections, or airline overbooking.</li>
                  <li>• Travelers are solely responsible for their personal safety, travel insurance coverage, and compliance with all applicable laws.</li>
                  <li>• Maximum aggregate liability of Rudraksh Safar shall not exceed the amount actually paid by the customer directly to Rudraksh Safar for the specific service in dispute.</li>
                </ul>
              </div>

              {/* Section 12 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">12. User Responsibility</h2>
              <p className="text-muted-foreground">All users and customers are responsible for:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Independently verifying all travel requirements with official government and embassy sources</li>
                <li>Ensuring validity and correctness of all travel documents before departure</li>
                <li>Reading and understanding all supplier terms and conditions before confirming bookings</li>
                <li>Obtaining comprehensive travel insurance for every trip</li>
                <li>Complying fully with local laws, customs, immigration rules, and health regulations</li>
                <li>Carrying all required documentation during travel</li>
              </ul>

              {/* Section 13 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">13. Trademarks &amp; Copyright</h2>
              <p className="text-muted-foreground">
                All trademarks, logos, brand names, and service marks of airlines, hotels, cruise lines, and other third parties referenced on this website remain the property of their respective owners and are used for identification purposes only. Such references do not imply any affiliation, partnership, sponsorship, or endorsement by Rudraksh Safar unless explicitly stated in writing.
              </p>

              {/* Section 14 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">14. Changes to Disclaimer</h2>
              <p className="text-muted-foreground">
                Rudraksh Safar reserves the right to modify, update, or revise this Disclaimer at any time without prior notice. Changes take immediate effect upon posting to the website. Continued use of the website or our services after any such changes constitutes your acceptance of the revised Disclaimer.
              </p>

              {/* Section 15 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">15. Governing Law &amp; Jurisdiction</h2>
              <p className="text-muted-foreground">
                This Disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with this Disclaimer shall be subject to the exclusive jurisdiction of the competent courts in <strong>Durg, Chhattisgarh, India</strong>.
              </p>

              {/* Section 16 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">16. Contact Information</h2>
              <p className="text-muted-foreground">
                For any questions regarding this Disclaimer, please contact:<br />
                <strong>Rudraksh Safar</strong><br />
                GE Road, Bhilai 3, Chhattisgarh – 490021<br />
                Email: rudrakshsafar@gmail.com<br />
                Phone / WhatsApp: +91 92036 50311
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Disclaimer;
