import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldAlert, Info, Scale, FileText, Globe, Plane, Hotel, CreditCard, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LegalDisclaimer = () => {
    return (
        <>
            <Helmet>
                <title>Legal Disclaimer &amp; Terms of Use | Rudraksh Safar</title>
                <meta name="description" content="Comprehensive legal disclaimers for Rudraksh Safar covering visa, passport, flights, hotels, packages, and all travel service liabilities." />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background pt-24 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Legal Disclaimer</h1>
                        <p className="text-muted-foreground text-lg">Comprehensive legal notices covering all services provided by Rudraksh Safar.</p>
                        <p className="text-muted-foreground text-sm mt-2">Last Updated: September 2026</p>
                    </div>

                    <div className="space-y-8">

                        {/* Service Intermediary */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    Service Intermediary Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    Rudraksh Safar acts exclusively as a <strong>travel planning, booking facilitation, and intermediary agency</strong>. We are not a principal service provider. Actual services including flights, accommodation, ground transportation, cruise services, activities, tours, visa processing, and passport assistance are delivered by independent third-party suppliers and government authorities.
                                </p>
                                <p>
                                    Rudraksh Safar expressly disclaims all responsibility for the acts, errors, omissions, representations, warranties, breaches, negligence, or failures of any third-party supplier. We are not responsible for any personal injuries, death, property damage, theft, loss, or other damages resulting from services provided by third-party suppliers.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Visa Disclaimer */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <ShieldAlert className="w-6 h-6 text-red-600" />
                                    Visa Services Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                    <p className="text-red-800 dark:text-red-200 text-sm font-semibold mb-2">CRITICAL VISA DISCLAIMERS:</p>
                                    <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
                                        <li>• <strong>No Guarantee:</strong> Rudraksh Safar does not guarantee visa approval. Visa decisions are solely at the discretion of the respective embassy, consulate, or immigration authority.</li>
                                        <li>• <strong>Visa Rejection:</strong> We are not responsible for visa refusals. All fees paid (embassy fees, VFS/BLS fees, service charges, courier charges) are strictly non-refundable on rejection.</li>
                                        <li>• <strong>Visa Delay:</strong> Processing timelines are estimates only. We are not liable for embassy delays or consequential losses (flight changes, hotel amendments, etc.) arising from visa delays.</li>
                                        <li>• <strong>Late Visa:</strong> If a visa is issued after the travel date due to embassy processing, we are not liable for any resulting losses or costs.</li>
                                        <li>• <strong>Entry Denial:</strong> A valid visa does not guarantee immigration entry. Officers may deny entry at their discretion. We are not liable for denied entry.</li>
                                        <li>• <strong>Rule Changes:</strong> Visa rules, fees, and requirements may change without notice. Customers must verify with official embassy websites before travel.</li>
                                        <li>• <strong>Wrong Visa Type:</strong> Responsibility for applying for the correct visa category lies with the applicant. We are not liable for travel disruption due to incorrect visa types.</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Passport Disclaimer */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <FileText className="w-6 h-6 text-purple-600" />
                                    Passport Services Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    Rudraksh Safar offers passport application and renewal assistance as a facilitation service only. Passport issuance is exclusively the authority of the Government of India through the Ministry of External Affairs and Passport Seva Kendra. We do not control, guarantee, or influence passport processing timelines or issuance decisions.
                                </p>
                                <ul className="text-muted-foreground space-y-2">
                                    <li>• We are not responsible for delays due to police verification, government backlogs, or incorrect information submitted by the applicant.</li>
                                    <li>• Our service fee for passport assistance is non-refundable once work commences, regardless of the outcome.</li>
                                    <li>• All government fees paid are non-refundable as per Government of India policy.</li>
                                    <li>• Customers must ensure their passport has minimum 6 months validity beyond travel end date and at least 2 blank pages.</li>
                                    <li>• We are not liable for losses arising from passport delays, rejection, or expiry-related travel disruptions.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Flight Disclaimer */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Plane className="w-6 h-6 text-blue-600" />
                                    Flight &amp; Airline Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    Rudraksh Safar is a booking intermediary for airline tickets only. The airline is the carrier responsible for all aspects of travel under its conditions of carriage. We do not operate, control, or supervise any airline.
                                </p>
                                <ul className="text-muted-foreground space-y-2">
                                    <li>• <strong>Flight Cancellation by Airline:</strong> Airline's own policies apply. We assist in filing claims but cannot guarantee outcomes.</li>
                                    <li>• <strong>Flight Delays:</strong> We are not liable for any losses arising from flight delays caused by weather, technical issues, or air traffic control.</li>
                                    <li>• <strong>Missed Flights:</strong> We are not responsible for flights missed due to customer's late arrival, documentation issues, or any personal reason. No refund from Rudraksh Safar applies.</li>
                                    <li>• <strong>Baggage:</strong> All baggage claims must be filed directly with the airline. We are not liable for lost, damaged, or delayed baggage.</li>
                                    <li>• <strong>Schedule Changes:</strong> Airlines may change schedules, routes, or aircraft without notice. We are not responsible for such changes.</li>
                                    <li>• <strong>Check-in:</strong> Domestic – minimum 90 minutes before departure; International – minimum 3 hours before departure. Late arrival is entirely the customer's responsibility.</li>
                                    <li>• <strong>No-Show:</strong> 100% forfeiture per airline policy. No compensation from Rudraksh Safar.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Hotel Disclaimer */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Hotel className="w-6 h-6 text-amber-600" />
                                    Hotel &amp; Accommodation Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    Rudraksh Safar books hotels on behalf of customers as an intermediary. We do not own, manage, operate, or inspect any accommodation property.
                                </p>
                                <ul className="text-muted-foreground space-y-2">
                                    <li>• Hotel star ratings are as classified by the property and local tourism bodies, which may differ from international rating standards.</li>
                                    <li>• We are not liable for overbooking situations, sub-standard facilities, maintenance issues, or discrepancies between described and actual conditions.</li>
                                    <li>• Room allocations, views, floor levels, and upgrades are at the hotel's sole discretion.</li>
                                    <li>• We are not responsible for theft, loss of valuables, or security incidents at any accommodation property.</li>
                                    <li>• Any damage caused to hotel property by the customer is the customer's sole financial responsibility.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Pricing Disclaimer */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Scale className="w-6 h-6 text-green-600" />
                                    Pricing &amp; Payments Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    All prices mentioned on the website, in quotations, or in communications are <strong>indicative only</strong> and subject to change based on availability, season, supplier policies, currency fluctuations, and demand at time of booking. Final confirmed prices are only those documented in the official booking confirmation issued by Rudraksh Safar in writing.
                                </p>
                                <ul className="text-muted-foreground space-y-2">
                                    <li>• Rudraksh Safar reserves the right to correct typographical pricing errors at any time, including after booking confirmation.</li>
                                    <li>• Currency conversion charges and bank fees are borne by the customer.</li>
                                    <li>• Government taxes, airport charges, and fuel surcharges may be subject to change and collected additionally.</li>
                                    <li>• We are not responsible for payment failures, duplicate charges, or errors by third-party payment gateways.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Timing & Late Coming */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                    Timing, Delays &amp; Schedule Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    Rudraksh Safar is not responsible for delays in any service, including but not limited to: visa processing, passport issuance, flight departure, hotel check-in, transport pick-up, tour commencement, or any other scheduled service.
                                </p>
                                <ul className="text-muted-foreground space-y-2">
                                    <li>• <strong>Visa Late Issuance:</strong> If a visa is issued after the planned departure due to embassy delays, Rudraksh Safar bears no financial liability for rebooking, refunds, or associated losses.</li>
                                    <li>• <strong>Passport Delays:</strong> Delays in passport processing by government authorities do not entitle any refund or compensation from Rudraksh Safar.</li>
                                    <li>• <strong>Flight Delays by Airline:</strong> Compensation, meals, and accommodation for flight delays are entirely the airline's responsibility per DGCA/applicable aviation regulations.</li>
                                    <li>• <strong>Late Document Submission by Customer:</strong> If delays are caused by the customer's late submission of required documents, Rudraksh Safar is not liable for any resulting consequences.</li>
                                    <li>• <strong>Ground Transport Delays:</strong> Traffic, weather, or operational delays in ground transport are beyond our control. We are not liable for consequential losses.</li>
                                    <li>• Customers are solely responsible for arriving at airports, hotel check-ins, tour departure points, and all appointments on time as per the itinerary.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* No Guarantee */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <AlertTriangle className="w-6 h-6 text-red-600" />
                                    No Guarantee &amp; Limitation of Liability
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                    <p className="text-red-800 dark:text-red-200 text-sm font-semibold mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                                    <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                                        <li>• Rudraksh Safar does not guarantee availability, specific pricing, visa approval, passport issuance, or approval of any permit or service unless confirmed in writing.</li>
                                        <li>• Rudraksh Safar's maximum aggregate liability shall never exceed the amount directly paid by the customer to Rudraksh Safar for the specific service in dispute.</li>
                                        <li>• Rudraksh Safar is not liable for indirect, incidental, consequential, or punitive damages of any kind.</li>
                                        <li>• Rudraksh Safar is not liable for force majeure events including natural disasters, pandemics, war, strikes, government restrictions, or any act of God.</li>
                                        <li>• Rudraksh Safar is not liable for personal injury, death, or property damage during travel.</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Information Accuracy */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <Info className="w-6 h-6 text-blue-600" />
                                    Information Accuracy Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    Information provided on this website including travel guides, destination descriptions, visa information, blog posts, tips, health advisories, and package details is for general guidance only and may change without notice. It does not constitute professional legal, medical, immigration, or financial advice.
                                </p>
                                <ul className="text-muted-foreground space-y-2">
                                    <li>• Visa and immigration information must be verified with the official embassy or consulate before travel.</li>
                                    <li>• Health and vaccination requirements must be confirmed with a qualified medical practitioner.</li>
                                    <li>• Images on the website are for illustrative purposes only and may not accurately represent actual destinations, accommodations, or facilities.</li>
                                    <li>• Weather information and travel period recommendations are indicative and not guaranteed.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Payment & Financial */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <CreditCard className="w-6 h-6 text-indigo-600" />
                                    Financial &amp; Payment Disclaimer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
                                <ul className="text-muted-foreground space-y-2">
                                    <li>• Rudraksh Safar does not store, retain, or have access to customer credit/debit card or bank account data. Payments are processed through secure, certified third-party gateways.</li>
                                    <li>• We are not responsible for payment gateway failures, internet connectivity issues during transactions, or bank-side delays.</li>
                                    <li>• All refunds are processed as per our published Refund Policy and are dependent on supplier recovery.</li>
                                    <li>• We do not advance refunds from our own funds pending supplier recovery.</li>
                                    <li>• Currency conversion losses and bank fees on refund transactions are not compensated by Rudraksh Safar.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Trademark */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <FileText className="w-6 h-6 text-purple-600" />
                                    Trademarks, Copyrights &amp; Third-Party Brands
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground leading-relaxed">
                                All trademarks, logos, brand names, and service marks of airlines, hotels, cruise lines, car rental companies, visa service providers, and other third parties referenced on this website remain the exclusive property of their respective owners and are used solely for identification and informational purposes. Such references do not imply any affiliation, partnership, sponsorship, authorization, or endorsement by Rudraksh Safar unless explicitly confirmed in writing. All content on the Rudraksh Safar website is protected by copyright. Unauthorized reproduction or commercial use is strictly prohibited.
                            </CardContent>
                        </Card>

                        <div className="text-center text-sm text-muted-foreground pt-8">
                            <p>This disclaimer was last updated in <strong>September 2026</strong>. All disputes are subject to the exclusive jurisdiction of courts in <strong>Durg, Chhattisgarh, India</strong> and are governed by Indian law.</p>
                            <p className="mt-2">For queries: <strong>rudrakshsafar@gmail.com</strong> | <strong>+91 92036 50311</strong></p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default LegalDisclaimer;
