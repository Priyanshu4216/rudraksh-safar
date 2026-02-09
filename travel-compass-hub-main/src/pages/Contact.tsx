import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Rudraksh Safar - Travel Agency in Bhilai</title>
                <meta name="description" content="Get in touch with Rudraksh Safar, the best travel agency in Bhilai. Call us, WhatsApp us, or visit our office for flight bookings, tour packages, and visa services." />
                <link rel="canonical" href="https://rudrakshsafar.com/contact" />
            </Helmet>

            <Navbar />

            <main className="min-h-screen bg-background">
                <section className="pt-28 pb-10 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }]} />
                    </div>
                </section>

                <ContactSection />
            </main>

            <Footer />
        </>
    );
};

export default Contact;
