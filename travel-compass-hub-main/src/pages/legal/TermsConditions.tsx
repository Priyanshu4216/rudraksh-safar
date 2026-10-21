import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';

const TermsConditions = () => {
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
        <title>Terms &amp; Conditions | Rudraksh Safar - Travel Agency Bhilai</title>
        <meta name="description" content="Comprehensive Terms and Conditions for Rudraksh Safar travel services covering visa, flights, hotels, packages, and all disputes." />
        <link rel="canonical" href="https://rudrakshsafar.com/terms-conditions" />
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
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Terms &amp; Conditions</h1>
                <p className="text-muted-foreground text-sm">Last Updated: September 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
                  <strong>PLEASE READ CAREFULLY:</strong> By accessing this website, making any inquiry, or booking any service through Rudraksh Safar, you unconditionally agree to be legally bound by these Terms &amp; Conditions in their entirety. If you do not agree with any part of these terms, you must immediately cease use of our website and services.
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Role of Rudraksh Safar — Intermediary Declaration</h2>
              <p className="text-muted-foreground">
                Rudraksh Safar ("Company", "we", "us", "our") is a travel agency operating as a <strong>facilitator and intermediary</strong> between customers and independent third-party service providers including but not limited to: airlines, hotels, resorts, homestays, transport operators, coach services, cruise lines, tour operators, activity providers, visa processing agencies, and passport assistance services.
              </p>
              <p className="text-muted-foreground">
                We do not own, operate, control, inspect, or manage any of these third-party services. All services booked through us are subject to the respective supplier's own terms, conditions, policies, and limitations. Rudraksh Safar expressly disclaims any and all liability arising from the quality, safety, legality, availability, or performance of services provided by third-party suppliers.
              </p>
              <p className="text-muted-foreground">
                Our liability is limited strictly to the service of arranging and facilitating bookings on your behalf. Any contractual relationship for service delivery is directly between you and the respective supplier.
              </p>

              {/* Section 2 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Booking &amp; Confirmation</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>All verbal, written, or digital inquiries are non-binding expressions of interest and do not constitute a confirmed booking.</li>
                <li>A booking is only confirmed when: (a) the required deposit or full payment has been received by Rudraksh Safar; (b) written confirmation has been issued by Rudraksh Safar via email or official communication; and (c) availability has been confirmed by the respective service provider(s).</li>
                <li>Rudraksh Safar reserves the right to reject or cancel any booking at its sole discretion without providing a reason, with a full refund of amounts paid directly to us (excluding third-party non-refundable charges).</li>
                <li>All prices quoted verbally, via WhatsApp, email, or on the website are <strong>indicative only</strong> and subject to change until issuance of a written booking confirmation.</li>
                <li>Rudraksh Safar reserves the right to correct any pricing error, typographical mistake, or system error in quoted prices at any time, even after a booking confirmation has been issued.</li>
                <li>Group bookings (5 or more persons) require a separate written agreement and are subject to additional terms communicated at the time of booking.</li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Payment Terms</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>A non-refundable token advance (minimum 25%–50% of total package value) is required to initiate any booking process.</li>
                <li>Full payment must be completed:
                  <ul className="mt-2 ml-4">
                    <li>— At least <strong>30 days before departure</strong> for domestic travel packages</li>
                    <li>— At least <strong>45 days before departure</strong> for international travel packages</li>
                    <li>— At least <strong>60 days before departure</strong> for cruise bookings or peak-season international packages</li>
                  </ul>
                </li>
                <li>Failure to complete payment by the stipulated deadline may result in automatic cancellation of the booking without liability to Rudraksh Safar.</li>
                <li>All payments must be made via the payment methods specified at the time of booking. Payments made through unofficial or unverified channels are not the responsibility of Rudraksh Safar.</li>
                <li>Rudraksh Safar is not responsible for any transaction failures, duplicate charges, or errors caused by third-party payment gateways or banks.</li>
                <li>Currency conversion charges, bank processing fees, or international transaction fees are borne solely by the customer.</li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Visa Services — Important Limitations &amp; Disclaimers</h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <p className="text-red-800 dark:text-red-200 text-sm font-semibold">CRITICAL NOTICE REGARDING VISA SERVICES:</p>
                <ul className="text-red-800 dark:text-red-200 text-sm mt-2 space-y-1">
                  <li>• Visa approval is solely at the discretion of the respective embassy, consulate, or immigration authority. Rudraksh Safar does not guarantee visa approval under any circumstances.</li>
                  <li>• Rudraksh Safar is not responsible for visa rejections, delays, additional document requests, or interview requirements imposed by immigration authorities.</li>
                  <li>• Visa processing fees, service charges, and courier charges paid are strictly non-refundable regardless of the outcome.</li>
                  <li>• Processing timelines provided are estimates based on general embassy guidelines and may vary significantly. Rudraksh Safar is not liable for delays caused by embassy processing backlogs, holidays, or policy changes.</li>
                </ul>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Visa Application Assistance:</strong> We assist in compiling and submitting visa applications. Final responsibility for the accuracy and completeness of all submitted documents lies solely with the applicant.</li>
                <li><strong>Visa Rejection:</strong> In the event of visa rejection, all fees paid to embassies, consulates, or VFS/BLS centers are non-refundable. Our service fee is also non-refundable. Trip costs subject to supplier-specific cancellation policies.</li>
                <li><strong>Visa Delay:</strong> If a visa is delayed beyond the expected processing time, Rudraksh Safar is not responsible for consequential losses including flight changes, hotel amendments, or missed departures. Travel insurance is strongly advised.</li>
                <li><strong>Late Visa Submission:</strong> Rudraksh Safar shall not be liable for any visa delays or rejections arising from late submission of required documents by the applicant.</li>
                <li><strong>Change in Visa Rules:</strong> Visa regulations, fee structures, document requirements, and processing times can change without notice. The customer is advised to verify current requirements with the official embassy or consulate website.</li>
                <li><strong>Visa-on-Arrival &amp; e-Visa:</strong> Approval of visa-on-arrival or e-Visa is subject to immigration authority discretion. We do not guarantee entry even if an e-Visa has been obtained. Denied entry at port does not entitle any refund from Rudraksh Safar.</li>
                <li><strong>Multiple-Entry / Transit Visas:</strong> Customers must ensure the correct visa type is applied for. Rudraksh Safar is not liable if the customer obtains an incorrect visa category.</li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Passport Services — Limitations</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Rudraksh Safar offers assistance with passport applications, renewals, tatkal applications, and document compilation on a best-effort basis only.</li>
                <li>Passport issuance is the exclusive authority of the Government of India / Passport Seva Kendra. Rudraksh Safar does not guarantee or control the issuance, processing time, or approval of any passport application.</li>
                <li>Our passport service fee is non-refundable regardless of the outcome of the application.</li>
                <li>All government fees, courier charges, and official processing fees paid are non-refundable.</li>
                <li>Rudraksh Safar is not liable for passport delays, errors in government records, police verification delays, or rejection by passport authorities.</li>
                <li>Customers must ensure that their passport has a minimum of <strong>6 months validity</strong> remaining beyond the travel end date and must have at least <strong>2 blank visa pages</strong>. Failure to comply with destination entry requirements due to passport issues is entirely the customer's responsibility.</li>
                <li>Rudraksh Safar is not responsible for any losses, missed travel, or costs incurred due to passport-related delays or rejections.</li>
              </ul>

              {/* Section 6 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Flight Bookings — Terms &amp; Limitations</h2>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Airline Responsibility:</strong> Rudraksh Safar acts only as a booking agent for airline tickets. The airline is solely responsible for the carriage of passengers and baggage under the airline's conditions of carriage.</li>
                <li><strong>Schedule Changes:</strong> Airlines may change flight schedules, routes, aircraft types, or times without prior notice. Rudraksh Safar is not responsible for such changes and cannot guarantee specific departure times or connections.</li>
                <li><strong>Flight Cancellations by Airline:</strong> In the event of flight cancellation by an airline, the airline's own policies shall apply regarding refund, rebooking, or compensation. Rudraksh Safar shall assist in facilitating such claims but does not guarantee any specific outcome.</li>
                <li><strong>Flight Delays:</strong> Rudraksh Safar is not liable for any loss, expense, or inconvenience arising from flight delays whether caused by weather, technical issues, air traffic control, or any other reason.</li>
                <li><strong>Missed Flights:</strong> Rudraksh Safar is not responsible if a customer misses a flight due to passport/visa issues, late arrival at the airport, or any personal reason. No refund or compensation will be provided by Rudraksh Safar for missed flights.</li>
                <li><strong>Baggage:</strong> Baggage allowances, policies, and restrictions are set by the airline. Rudraksh Safar is not liable for lost, damaged, or delayed baggage. Claims must be filed directly with the airline.</li>
                <li><strong>Seat Allocation:</strong> Specific seat requests are not guaranteed unless confirmed in writing by the airline. Rudraksh Safar cannot guarantee specific seating arrangements.</li>
                <li><strong>Name Changes:</strong> Airlines typically do not permit name changes after ticketing. Any name corrections, if permitted, will attract airline-imposed fees which are the customer's responsibility.</li>
                <li><strong>No-Show:</strong> Failure to check in for a confirmed flight (no-show) will result in 100% forfeiture of the ticket value as per airline policy.</li>
                <li><strong>Domestic Flights:</strong> Customer must check-in at least 90 minutes before departure; <strong>International Flights:</strong> at least 3 hours before departure. Rudraksh Safar is not responsible for missed flights due to late check-in.</li>
                <li><strong>Fuel Surcharges &amp; Taxes:</strong> Airline fuel surcharges, government taxes, and airport charges are subject to change and may be collected additionally at time of travel.</li>
              </ul>

              {/* Section 7 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Hotel &amp; Accommodation Bookings</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Hotel categories (star ratings) are as classified by the respective hotel and local tourism bodies and may differ from international standards.</li>
                <li>Rudraksh Safar does not guarantee specific room types, views, floor levels, or amenities unless confirmed in writing by the hotel. Room allocation is at the hotel's discretion.</li>
                <li>Early check-in or late check-out is subject to hotel availability and may incur additional charges payable directly to the hotel.</li>
                <li>Hotel facilities, services, and amenities described are as provided by the hotel and may be subject to maintenance, seasonal availability, or other circumstances.</li>
                <li>Rudraksh Safar is not liable for hotel overbooking situations. In such cases, Rudraksh Safar will endeavor to arrange alternative accommodation of similar or better standard, but cannot guarantee identical properties or rates.</li>
                <li>Any damage caused to hotel property by the customer shall be the sole financial responsibility of the customer.</li>
                <li>Rudraksh Safar is not responsible for theft, loss of personal belongings, or security incidents at hotel premises.</li>
              </ul>

              {/* Section 8 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Tour Packages — Terms</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Package inclusions and exclusions are as described in the written itinerary provided at the time of booking. Any verbal representations not included in the written itinerary are not binding.</li>
                <li>Itineraries are subject to change due to weather, road conditions, flight schedule changes, local circumstances, or force majeure events. Rudraksh Safar will endeavor to provide comparable alternatives.</li>
                <li>Tourist spots, activities, and entry to certain areas may be restricted without prior notice by local authorities. Rudraksh Safar is not responsible for such closures.</li>
                <li>Package prices do not include personal expenses, gratuities, laundry, room service, and other personal charges unless explicitly stated.</li>
                <li>Minimum group size requirements may apply for certain group packages. If the minimum is not met, Rudraksh Safar reserves the right to cancel or modify the tour with full refund or alternative options provided.</li>
                <li>Tour leaders/guides are provided for operational guidance only and do not constitute a guarantee of personal safety or security.</li>
              </ul>

              {/* Section 9 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Cancellation &amp; Refund Policy Reference</h2>
              <p className="text-muted-foreground">
                All cancellations and refunds are governed strictly by our separate <strong>Cancellation Policy</strong> and <strong>Refund Policy</strong> published on our website. Those policies form an integral part of these Terms &amp; Conditions and must be read in conjunction with them.
              </p>
              <p className="text-muted-foreground mt-2">
                Refund timelines are dependent on supplier processing timelines and may take 7–21 working days from the date of approval. Rudraksh Safar is not responsible for delays by banks, payment gateways, or suppliers.
              </p>

              {/* Section 10 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Customer Responsibilities</h2>
              <p className="text-muted-foreground">The customer is solely and exclusively responsible for:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Holding a valid passport with a minimum of 6 months validity beyond the travel end date</li>
                <li>Obtaining all required visas, permits, and entry approvals for all countries on the itinerary including transit countries</li>
                <li>Carrying all necessary health certificates, vaccination records, and medical documentation as required by destination countries</li>
                <li>Purchasing comprehensive travel insurance before departure</li>
                <li>Complying fully with all immigration, customs, quarantine, and local laws of all countries visited</li>
                <li>Declaring any pre-existing medical conditions or physical limitations that may affect travel to Rudraksh Safar before booking</li>
                <li>Ensuring that all travel documents, including passports and visas, bear the correct name matching air tickets exactly</li>
                <li>Arriving at airports, hotels, and departure points on time as per itinerary schedules</li>
                <li>Keeping personal belongings, money, and travel documents safe at all times</li>
                <li>Behaving in accordance with local laws, cultural norms, and respecting other travelers and service providers</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Rudraksh Safar shall not be liable for denied boarding, denied entry at immigration, deportation, detention, or trip disruption arising from the customer's failure to meet any of the above responsibilities.
              </p>

              {/* Section 11 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">11. Travel Insurance — Mandatory Advisory</h2>
              <p className="text-muted-foreground">Rudraksh Safar <strong>strongly recommends</strong> — and for international travel effectively requires — that all customers purchase comprehensive travel insurance prior to departure. Recommended coverage includes:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Trip cancellation and curtailment</li>
                <li>Emergency medical expenses and hospitalization</li>
                <li>Medical evacuation and repatriation</li>
                <li>Baggage loss, theft, and delay</li>
                <li>Flight delay and missed connection</li>
                <li>Passport loss and emergency travel documents</li>
                <li>Personal accident cover</li>
                <li>COVID-19 related coverage where applicable</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Rudraksh Safar assumes absolutely no financial responsibility for losses, medical expenses, or any damages arising from the customer's failure to obtain adequate travel insurance coverage. Any travel insurance arranged through Rudraksh Safar is subject to the terms of the insurance provider and any claims must be filed directly with the insurer.
              </p>

              {/* Section 12 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">12. Force Majeure</h2>
              <p className="text-muted-foreground">
                Rudraksh Safar shall not be held liable for any failure, delay, cancellation, or modification of services resulting from circumstances beyond our reasonable control including, but not limited to: acts of God, natural disasters, earthquakes, floods, cyclones, tsunamis, volcanic eruptions, pandemics, epidemics, war, armed conflict, terrorism, civil unrest, riots, government restrictions, embassy or consulate closures, strikes, lockouts, labor disputes, airport or border closures, or any other event constituting force majeure.
              </p>
              <p className="text-muted-foreground mt-2">
                In force majeure situations, refunds will be limited to whatever amounts are recoverable from third-party suppliers. Rudraksh Safar's own service fees are non-refundable.
              </p>

              {/* Section 13 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">13. Supplier Changes &amp; Substitutions</h2>
              <p className="text-muted-foreground">
                Airlines, hotels, tour operators, and other service providers reserve the right to change schedules, routes, services, facilities, aircraft, accommodation, or any other component of a confirmed booking without prior notice. Rudraksh Safar is not responsible for such changes and will endeavor to communicate changes as soon as possible upon being notified.
              </p>
              <p className="text-muted-foreground mt-2">
                In cases of significant supplier changes, Rudraksh Safar will offer alternatives where possible. Acceptance or rejection of alternatives is at the customer's discretion, and applicable refund policies will govern any amounts owed.
              </p>

              {/* Section 14 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">14. Special Requirements &amp; Medical Conditions</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Customers with physical disabilities, medical conditions, dietary requirements, or special needs must disclose this information in writing at the time of booking.</li>
                <li>While we will make reasonable efforts to communicate these requirements to suppliers, we cannot guarantee that all special requests will be accommodated.</li>
                <li>Rudraksh Safar is not liable for any medical emergency arising during travel. All customers are advised to carry their own medications and consult their medical practitioners before travel.</li>
                <li>Pregnant travelers must obtain a medical certificate of fitness to travel and comply with all airline policies regarding pregnancy. Rudraksh Safar assumes no liability for any complications.</li>
              </ul>

              {/* Section 15 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">15. Children &amp; Minor Travelers</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Children traveling without one or both parents may require additional documentation (e.g., notarized parental consent letters). Requirements vary by country and airline. The customer is solely responsible for ensuring compliance.</li>
                <li>Age-based pricing, child policies, and discounts are applied as per individual supplier policies and are subject to change.</li>
                <li>Rudraksh Safar is not responsible if a minor is denied boarding or entry due to missing documentation.</li>
              </ul>

              {/* Section 16 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">16. Limitation of Liability</h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-200 text-sm font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
                <ul className="text-red-800 dark:text-red-200 text-sm mt-2 space-y-1">
                  <li>• Rudraksh Safar's maximum aggregate liability to any customer shall under no circumstances exceed the total amount actually paid by that customer to Rudraksh Safar for the specific service in dispute.</li>
                  <li>• Rudraksh Safar is not liable for acts, omissions, errors, or failures of any third-party airline, hotel, transport operator, visa agency, or other supplier.</li>
                  <li>• Rudraksh Safar is not liable for visa rejections, passport delays, or denied immigration entry.</li>
                  <li>• Rudraksh Safar is not liable for force majeure events as described in Section 12.</li>
                  <li>• Rudraksh Safar is not liable for indirect, incidental, consequential, punitive, or special damages of any kind whatsoever.</li>
                  <li>• Rudraksh Safar is not liable for any personal injury, death, property damage, theft, or loss during travel.</li>
                  <li>• Rudraksh Safar is not liable for any emotional distress, loss of enjoyment, or other non-economic damages.</li>
                </ul>
              </div>

              {/* Section 17 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">17. Complaints &amp; Dispute Resolution</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Any complaint regarding our services must be submitted in writing via email to rudrakshsafar@gmail.com within <strong>30 days</strong> of the completion of the travel service in question.</li>
                <li>Complaints received after 30 days of service completion may not be entertained.</li>
                <li>Rudraksh Safar will acknowledge complaints within 5 business days and endeavor to resolve them within 21 business days.</li>
                <li>Disputes that cannot be resolved amicably shall be subject to mediation/arbitration before initiating formal legal proceedings.</li>
                <li>All disputes are subject to the exclusive jurisdiction of courts in <strong>Durg, Chhattisgarh, India</strong>, and shall be governed by the laws of India.</li>
              </ul>

              {/* Section 18 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">18. Website Usage &amp; Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on the Rudraksh Safar website, including but not limited to text, images, logos, graphics, itineraries, and design elements, is the intellectual property of Rudraksh Safar or licensed to it. Unauthorized copying, reproduction, redistribution, scraping, data mining, or commercial exploitation of any website content is strictly prohibited and may attract legal action.
              </p>

              {/* Section 19 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">19. Modification of Terms</h2>
              <p className="text-muted-foreground">
                Rudraksh Safar reserves the right to update, amend, or modify these Terms &amp; Conditions at any time without prior individual notice. The updated Terms shall be posted on the website with a revised "Last Updated" date. Continued use of the website or services after the posting of changes constitutes your unconditional acceptance of the revised Terms.
              </p>

              {/* Section 20 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">20. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms &amp; Conditions is found to be invalid, unlawful, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
              </p>

              {/* Section 21 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">21. Governing Law &amp; Jurisdiction</h2>
              <p className="text-muted-foreground">
                These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India. Any disputes, claims, or controversies arising out of or in connection with these Terms, or any bookings or services provided by Rudraksh Safar, shall be subject to the exclusive jurisdiction of the competent courts in <strong>Durg, Chhattisgarh, India</strong>.
              </p>

              {/* Section 22 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">22. Contact Information</h2>
              <p className="text-muted-foreground">
                For any questions, clarifications, or formal notices regarding these Terms &amp; Conditions:<br />
                <strong>Rudraksh Safar</strong><br />
                GE Road, Bhilai 3, Chhattisgarh – 490021<br />
                Email: rudrakshsafar@gmail.com<br />
                Phone / WhatsApp: +91 92036 50311
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TermsConditions;
