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
        <title>Terms & Conditions | Rudraksh Safar - Travel Agency Bhilai</title>
        <meta name="description" content="Terms and Conditions for Rudraksh Safar travel services. Understand your rights and responsibilities when booking with us." />
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
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Terms & Conditions</h1>
                 <p className="text-muted-foreground text-sm">Last Updated: January 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
                  By accessing this website or booking any service through Rudraksh Safar, you agree to be bound by the following Terms &amp; Conditions. Please read them carefully before proceeding.
                </p>
              </div>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Role of Rudraksh Safar</h2>
              <p className="text-muted-foreground">
                Rudraksh Safar acts solely as an intermediary between customers and third-party service providers such as airlines, hotels, transport operators, cruise lines, and tour operators.
              </p>
              <p className="text-muted-foreground">
                We do not own, operate, or control these services. All services are provided directly by the respective suppliers under their own terms and conditions.
              </p>
              <p className="text-muted-foreground">
                Rudraksh Safar is not responsible for any changes, deficiencies, delays, or failures in services provided by third-party suppliers.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Booking &amp; Confirmation</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>All inquiries are non-binding expressions of interest.</li>
                <li>
                  Bookings are confirmed only after:
                  <ul>
                    <li>Receipt of required deposit/payment</li>
                    <li>Written confirmation from Rudraksh Safar</li>
                    <li>Availability confirmation from service providers</li>
                  </ul>
                </li>
                <li>All prices quoted are indicative and subject to change until final confirmation.</li>
                <li>Rudraksh Safar reserves the right to correct any pricing or typographical errors.</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Payment Terms</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>A non-refundable deposit (typically 25%–50%) is required to initiate bookings.</li>
                <li>
                  Full payment must be completed:
                  <ul>
                    <li>30 days before domestic travel</li>
                    <li>45 days before international travel</li>
                  </ul>
                </li>
                <li>Failure to make timely payment may result in automatic cancellation without liability to Rudraksh Safar.</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Cancellations &amp; Refunds</h2>
              <p className="text-muted-foreground">
                All cancellations and refunds are governed strictly by our Cancellation Policy and Refund Policy available on our website.
              </p>
              <p className="text-muted-foreground">
                Refund timelines depend on supplier processing and may take 7–21 working days after approval.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Your Responsibilities</h2>
              <p className="text-muted-foreground">You are solely responsible for:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Holding a valid passport with minimum 6 months validity</li>
                <li>Obtaining required visas, permits, and approvals</li>
                <li>Carrying necessary health certificates and travel insurance</li>
                <li>Complying with immigration, customs, and local laws</li>
                <li>Declaring any medical conditions affecting travel</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Rudraksh Safar shall not be liable for denied boarding, denied entry, or trip disruption due to documentation or compliance failures.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Travel Insurance</h2>
              <p className="text-muted-foreground">We strongly recommend comprehensive travel insurance covering:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Trip cancellation</li>
                <li>Medical emergencies</li>
                <li>Evacuation</li>
                <li>Baggage loss</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Rudraksh Safar assumes no responsibility for losses arising from lack of insurance coverage.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Supplier Changes</h2>
              <p className="text-muted-foreground">
                Airlines, hotels, and service providers may change schedules, services, routes, or facilities without prior notice. Rudraksh Safar is not responsible for such operational changes.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Limitation of Liability</h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>To the maximum extent permitted by law:</strong>
                </p>
                <ul className="text-red-800 dark:text-red-200 text-sm mt-2 space-y-1">
                  <li>• Rudraksh Safar is not liable for acts or omissions of third-party suppliers.</li>
                  <li>• Rudraksh Safar is not liable for force majeure events including natural disasters, pandemics, strikes, or civil unrest.</li>
                  <li>• Maximum liability shall not exceed the amount paid for the specific service booked.</li>
                  <li>• Rudraksh Safar is not liable for indirect, incidental, or consequential damages.</li>
                </ul>
              </div>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Website Usage</h2>
              <p className="text-muted-foreground">
                Unauthorized copying, scraping, reproduction, or commercial use of website content, images, or text is strictly prohibited.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Modification of Terms</h2>
              <p className="text-muted-foreground">
                Rudraksh Safar reserves the right to update or modify these Terms &amp; Conditions at any time without prior notice. Continued use of the website constitutes acceptance of revised terms.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">11. Governing Law &amp; Jurisdiction</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in Durg, Chhattisgarh, India.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground">
                <strong>Rudraksh Safar</strong><br />
                GE Road, Bhilai 3, Chhattisgarh – 490021<br />
                Email: rudrakshsafar@gmail.com<br />
                Phone: +91 94061 82174
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TermsConditions;
