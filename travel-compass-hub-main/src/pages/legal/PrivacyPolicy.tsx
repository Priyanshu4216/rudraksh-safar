import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import AnimatedSection from '@/components/AnimatedSection';

const PrivacyPolicy = () => {
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
        <title>Privacy Policy | Rudraksh Safar - Travel Agency Bhilai</title>
        <meta name="description" content="Privacy Policy of Rudraksh Safar. Learn how we collect, use, and protect your personal information including passport and visa data." />
        <link rel="canonical" href="https://rudrakshsafar.com/privacy-policy" />
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
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Privacy Policy</h1>
                <p className="text-muted-foreground text-sm">Last Updated: September 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Rudraksh Safar ("we", "us", "our"), located at GE Road, Bhilai 3, Chhattisgarh – 490021, India, is committed to protecting your privacy and the security of your personal information. This Privacy Policy explains in detail how we collect, use, store, share, and protect your personal data when you use our website or services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our website, making an inquiry, or booking any service with Rudraksh Safar, you consent to the collection and use of your personal information as described in this Privacy Policy.
              </p>

              {/* Section 1 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">We may collect the following categories of personal information:</p>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">a) Personal &amp; Identity Information</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Full legal name (as per government-issued ID)</li>
                <li>Date of birth and gender</li>
                <li>Nationality and country of residence</li>
                <li>Passport number, issue date, expiry date, and country of issue</li>
                <li>Visa information and immigration status (where relevant)</li>
                <li>Photograph (where required for visa applications)</li>
                <li>PAN card / Aadhaar details (where required by law)</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">b) Contact Information</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Email address(es)</li>
                <li>Phone and WhatsApp number(s)</li>
                <li>Residential and mailing address</li>
                <li>Emergency contact details</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">c) Travel &amp; Booking Information</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Travel preferences and interests</li>
                <li>Itinerary details, travel dates, and destinations</li>
                <li>Dietary requirements and meal preferences</li>
                <li>Special assistance needs or accessibility requirements</li>
                <li>Health declarations required for specific destinations</li>
                <li>Booking history with Rudraksh Safar</li>
                <li>Frequent flyer or loyalty program numbers (if provided)</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">d) Financial Information</h3>
              <p className="text-muted-foreground">
                Payment details are processed only through secure third-party payment gateways (such as Razorpay, PhonePe, or equivalent). <strong>Rudraksh Safar does not store, retain, or have access to your credit/debit card numbers, bank account details, or any sensitive financial data on our systems.</strong> We retain only transaction reference numbers and payment confirmation records for accounting and dispute resolution purposes.
              </p>

              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">e) Technical &amp; Usage Information</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>IP address and geolocation data</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on website</li>
                <li>Referring website or search query</li>
                <li>Cookie data and session identifiers</li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Purpose &amp; Legal Basis for Data Processing</h2>
              <p className="text-muted-foreground">We collect and use your personal data for the following specific purposes:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Processing and managing travel bookings, inquiries, and service requests</li>
                <li>Issuing booking confirmations, invoices, and itinerary documents</li>
                <li>Submitting visa and passport applications on your behalf (with your explicit consent)</li>
                <li>Coordinating with airlines, hotels, transport providers, and other suppliers to fulfill your booking</li>
                <li>Processing payments and maintaining financial records</li>
                <li>Providing customer support, handling complaints, and resolving disputes</li>
                <li>Sending operational communications related to your booking (schedule changes, reminders, etc.)</li>
                <li>Sending promotional and marketing communications — only with your explicit consent and with opt-out available at any time</li>
                <li>Complying with applicable legal, regulatory, and tax obligations</li>
                <li>Improving our website, services, and customer experience through analytics</li>
                <li>Fraud detection, security monitoring, and protection of our legal interests</li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Data Sharing &amp; Disclosure</h2>
              <p className="text-muted-foreground">We share your personal information only in the following circumstances and with the following categories of recipients:</p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Service Suppliers:</strong> Airlines, hotels, tour operators, transport companies, cruise lines, activity providers — only the data necessary to fulfill your booking.</li>
                <li><strong>Visa &amp; Immigration Authorities:</strong> Embassies, consulates, VFS/BLS centers — for the purpose of processing visa applications on your behalf.</li>
                <li><strong>Government Authorities:</strong> Immigration, customs, tax, and regulatory bodies — where required by applicable law.</li>
                <li><strong>Payment Processors:</strong> Secure third-party payment gateways — only transaction-relevant data for payment processing.</li>
                <li><strong>Technology &amp; Analytics Providers:</strong> Website analytics, email platforms — only anonymized or pseudonymized data where possible.</li>
                <li><strong>Legal &amp; Dispute Resolution:</strong> Courts, arbitrators, or legal advisors — where required to protect our legal interests or comply with legal proceedings.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>We do not sell, rent, lease, or trade your personal data to any third party for commercial or marketing purposes.</strong>
              </p>

              {/* Section 4 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Sensitive Personal Data</h2>
              <p className="text-muted-foreground">
                Certain data we may collect — such as passport details, health information, dietary preferences indicating religious beliefs, and disability information — constitutes sensitive personal data under applicable Indian privacy laws. Such data is collected only where strictly necessary for fulfilling your service request and with your explicit consent. It is handled with enhanced security measures and shared only with authorized parties directly involved in delivering your travel services.
              </p>

              {/* Section 5 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Data Retention</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Booking records and related personal data: Retained for <strong>7 years</strong> from the date of the last transaction or as required by applicable Indian tax and accounting laws.</li>
                <li>Visa and passport application data: Retained for <strong>5 years</strong> after completion of service for legal compliance purposes.</li>
                <li>Marketing communications consent records: Retained until consent is withdrawn.</li>
                <li>Website analytics data: Retained in anonymized form for up to <strong>2 years</strong>.</li>
              </ul>
              <p className="text-muted-foreground">After applicable retention periods, data is securely deleted, destroyed, or anonymized in a manner that prevents its recovery or reconstruction.</p>

              {/* Section 6 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Your Data Rights</h2>
              <p className="text-muted-foreground">Subject to applicable Indian privacy laws and regulations, you have the following rights regarding your personal data:</p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal retention obligations and ongoing service needs).</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing communications at any time without affecting other services.</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data for specific purposes.</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data in a commonly used format where technically feasible.</li>
              </ul>
              <p className="text-muted-foreground">To exercise any of these rights, contact us at rudrakshsafar@gmail.com. We will respond within <strong>30 days</strong> of receiving your request.</p>

              {/* Section 7 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate and reasonable technical, administrative, and organizational security measures to protect your personal information against unauthorized access, disclosure, alteration, loss, or destruction. These measures include:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>Secure encrypted communication (HTTPS/SSL) on our website</li>
                <li>Access controls limiting data access to authorized personnel only</li>
                <li>Third-party payment gateways with PCI-DSS compliance</li>
                <li>Regular review of data security practices</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                However, no method of data transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security. In the event of a data breach affecting your rights, we will notify you as required by applicable law.
              </p>

              {/* Section 8 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Cookies &amp; Tracking Technologies</h2>
              <p className="text-muted-foreground">
                Our website uses cookies and similar tracking technologies to improve user experience, analyze website traffic, and personalize content. Types of cookies used include:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly. Cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements. Only placed with consent.</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                You may control or disable cookies through your browser settings. Disabling essential cookies may affect website functionality. Disabling analytics or marketing cookies will not affect your ability to book services.
              </p>

              {/* Section 9 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Third-Party Links &amp; Services</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites, government portals, or partner services. Rudraksh Safar is not responsible for the privacy practices or content of those external websites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>

              {/* Section 10 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our website and services are not directed to children under the age of 18. We do not knowingly collect personal data from minors without verifiable parental or guardian consent. If we become aware that personal data of a minor has been collected without appropriate consent, we will take steps to delete it.
              </p>

              {/* Section 11 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">11. International Data Transfers</h2>
              <p className="text-muted-foreground">
                In the course of arranging international travel bookings, your personal data may be transferred to and processed by service providers and authorities in countries outside India. By booking international travel services, you consent to such cross-border transfer of your personal data where necessary to fulfill your booking. We ensure that such transfers are conducted with appropriate safeguards in compliance with applicable laws.
              </p>

              {/* Section 12 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">12. Policy Updates</h2>
              <p className="text-muted-foreground">
                This Privacy Policy may be updated periodically to reflect changes in our practices, services, or applicable laws. Any material changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically. Continued use of our website or services after updates constitutes your acceptance of the revised Privacy Policy.
              </p>

              {/* Section 13 */}
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">13. Grievance Officer</h2>
              <p className="text-muted-foreground">
                In accordance with the Information Technology Act, 2000, and rules made thereunder, and applicable privacy regulations, you may contact our Grievance Officer for any privacy-related complaints or concerns:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Rudraksh Safar — Grievance Officer</strong><br />
                GE Road, Bhilai 3, Chhattisgarh – 490021<br />
                Email: rudrakshsafar@gmail.com<br />
                Phone / WhatsApp: +91 92036 50311<br />
                <em>Response Time: Within 30 days of complaint receipt</em>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
