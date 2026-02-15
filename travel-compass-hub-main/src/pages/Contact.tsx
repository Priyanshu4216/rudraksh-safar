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
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact Rudraksh Safar",
                        "description": "Get in touch with Rudraksh Safar, the best travel agency in Bhilai.",
                        "url": "https://rudrakshsafar.com/contact",
                        "mainEntity": {
                            "@type": "TravelAgency",
                            "name": "Rudraksh Safar",
                            "image": "https://rudrakshsafar.com/logo.png",
                            "telephone": "+919406182174",
                            "email": "rudrakshsafar@gmail.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "GE Road, In Front of Petrol Pump",
                                "addressLocality": "Bhilai 3",
                                "addressRegion": "Chhattisgarh",
                                "postalCode": "490021",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "21.2120",
                                "longitude": "81.3733"
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday"
                                ],
                                "opens": "10:00",
                                "closes": "21:00"
                            }
                        }
                    })}
                </script>
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
