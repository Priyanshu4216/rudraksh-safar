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
        <meta name="description" content="Privacy Policy of Rudraksh Safar. Learn how we collect, use, and protect your personal information when you use our travel services." />
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
                 <p className="text-muted-foreground text-sm">Last Updated: January 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Rudraksh Safar (“we”, “us”, “our”), located at GE Road, Bhilai 3, Chhattisgarh – 490021, India, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our website or services, you agree to the terms of this Privacy Policy.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">We may collect the following types of information:</p>
              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">a) Personal &amp; Identity Information</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Passport details (for travel bookings only)</li>
              </ul>
              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">b) Contact Information</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Email address</li>
                <li>Phone number</li>
                <li>Residential address</li>
              </ul>
              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">c) Travel Information</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Travel preferences</li>
                <li>Dietary or special requirements</li>
                <li>Booking history with us</li>
              </ul>
              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">d) Financial Information</h3>
              <p className="text-muted-foreground">
                Payment details processed only through secure third-party payment gateways (We do not store card or banking details on our servers.)
              </p>
              <h3 className="text-base font-semibold text-foreground mt-4 mb-2">e) Technical Information</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Cookies and usage data</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">We use your data to:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Process and manage bookings and inquiries</li>
                <li>Send booking confirmations, updates, and itinerary details</li>
                <li>Assist with visa and documentation processes</li>
                <li>Process payments and generate invoices</li>
                <li>Provide customer support and complaint resolution</li>
                <li>Improve our services and website experience</li>
                <li>Send promotional communication only with your consent</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Data Sharing</h2>
              <p className="text-muted-foreground">We may share your information only with:</p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> Airlines, hotels, transport operators, tour partners</li>
                <li><strong>Government Authorities:</strong> Immigration, customs, or regulatory bodies as required by law</li>
                <li><strong>Payment Processors:</strong> Secure third-party gateways for transaction processing</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>We do not sell, rent, or trade your personal data to any third party.</strong>
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Data Retention</h2>
              <p className="text-muted-foreground">We retain your personal information for:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Up to 7 years from your last transaction, or</li>
                <li>As required by applicable laws and regulations</li>
              </ul>
              <p className="text-muted-foreground">After this period, data is securely deleted or anonymized.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground">Subject to applicable Indian laws, you have the right to:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion (subject to legal obligations)</li>
                <li>Withdraw consent for marketing communication</li>
              </ul>
              <p className="text-muted-foreground">Requests can be made using the contact details below.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, loss, or misuse.
              </p>
              <p className="text-muted-foreground">
                However, please note that no method of online transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Cookies</h2>
              <p className="text-muted-foreground">
                Our website may use cookies to improve user experience, analyze traffic, and personalize content. You may disable cookies through your browser settings if you choose.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Policy Updates</h2>
              <p className="text-muted-foreground">
                This Privacy Policy may be updated periodically. Any changes will be posted on this page. Continued use of our website or services after updates constitutes acceptance of the revised policy.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground">
                For any privacy-related questions or requests, please contact:<br />
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

export default PrivacyPolicy;
