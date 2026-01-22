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
        <meta name="description" content="Legal disclaimer for Rudraksh Safar website and travel services. Important information about our role and limitations." />
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
                 <p className="text-muted-foreground text-sm">Last Updated: January 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 prose prose-sm max-w-none">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
                  Please read this Disclaimer carefully before using the Rudraksh Safar website or services. By accessing or using our website, you agree to the terms stated below.
                </p>
              </div>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. General Information</h2>
              <p className="text-muted-foreground">
                All information provided on this website is for general informational purposes only. While we strive to keep content accurate and up to date, Rudraksh Safar makes no warranties or representations, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics.
              </p>
              <p className="text-muted-foreground">Any reliance you place on such information is strictly at your own risk.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Role as an Intermediary</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Rudraksh Safar acts solely as an intermediary between travelers and third-party service providers, including but not limited to airlines, hotels, transport operators, tour operators, and visa processing agencies. We do not own, operate, manage, or control these services. All services are provided directly by the respective suppliers under their own terms and conditions.
                </p>
              </div>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Travel Information Disclaimer</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>Visa requirements, travel advisories, health regulations, and entry rules are subject to frequent change. Travelers must verify requirements with official government or embassy sources before travel.</li>
                <li>Prices, availability, and itineraries are subject to change without prior notice.</li>
                <li>Images on the website are for illustrative purposes only and may not reflect actual accommodations, transport, or destinations.</li>
                <li>Weather conditions, seasonal information, and best travel periods are indicative and may vary.</li>
              </ul>
              <p className="text-muted-foreground">
                Rudraksh Safar shall not be responsible for discrepancies arising from such variations.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. No Professional Advice</h2>
              <p className="text-muted-foreground">
                Content on this website does not constitute legal, financial, medical, immigration, or professional advice.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>For visa or immigration matters, consult the relevant embassy or authorized professionals.</li>
                <li>For health-related travel advice, consult qualified medical professionals.</li>
              </ul>
              <p className="text-muted-foreground">Rudraksh Safar is not responsible for decisions made based on website content.</p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to external websites for user convenience. Rudraksh Safar has no control over the content, policies, or practices of such websites and accepts no responsibility for them. Inclusion of any external link does not imply endorsement.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>To the fullest extent permitted by law:</strong>
                </p>
                <ul className="text-red-800 dark:text-red-200 text-sm mt-2 space-y-1">
                  <li>• Rudraksh Safar shall not be liable for any loss, damage, or inconvenience arising from the use of this website or services.</li>
                  <li>• We are not responsible for acts, omissions, delays, or failures of third-party service providers.</li>
                  <li>• We are not liable for losses caused by force majeure events including natural disasters, pandemics, war, terrorism, strikes, or government actions.</li>
                  <li>• Travelers are solely responsible for their safety, insurance coverage, and compliance with local laws.</li>
                </ul>
              </div>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. User Responsibility</h2>
              <p className="text-muted-foreground">Users are responsible for:</p>
              <ul className="text-muted-foreground space-y-2">
                <li>Verifying travel requirements with official sources</li>
                <li>Ensuring valid travel documents</li>
                <li>Reading supplier terms and conditions before booking</li>
                <li>Obtaining comprehensive travel insurance</li>
                <li>Respecting local laws, customs, and regulations</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Changes to Disclaimer</h2>
              <p className="text-muted-foreground">
                Rudraksh Safar reserves the right to modify this Disclaimer at any time without prior notice. Changes take effect immediately upon posting. Continued use of the website or services constitutes acceptance of the revised Disclaimer.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Governing Law &amp; Jurisdiction</h2>
              <p className="text-muted-foreground">
                This Disclaimer shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Durg, Chhattisgarh, India.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground">
                For any questions regarding this Disclaimer, please contact:<br />
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

export default Disclaimer;
