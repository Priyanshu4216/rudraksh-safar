import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Star, CheckCircle, Users, Shield, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TravelAgentBhilai = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Rudraksh Safar - Travel Agent in Bhilai",
    "image": "https://rudrakshsafar.com/og-image.png",
    "url": "https://rudrakshsafar.com/travel-agent-bhilai",
    "telephone": "+919406182174",
    "email": "rudrakshsafar@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhilai",
      "addressRegion": "Chhattisgarh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.2094",
      "longitude": "81.4285"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "21:00"
    },
    "areaServed": ["Bhilai", "Durg", "Raipur", "Chhattisgarh"],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "250"
    }
  };

  const services = [
    { icon: "✈️", title: "Flight Booking", desc: "Domestic & international flights at best prices" },
    { icon: "🏨", title: "Hotel Reservations", desc: "Budget to luxury accommodations worldwide" },
    { icon: "🚌", title: "Bus & Cab Booking", desc: "Comfortable ground transportation" },
    { icon: "🚂", title: "Train Tickets", desc: "Tatkal & regular bookings with confirmation" },
    { icon: "📋", title: "Visa Assistance", desc: "Complete visa documentation support" },
    { icon: "🛳️", title: "Cruise Packages", desc: "Luxury cruise experiences" },
  ];

  const whyChooseUs = [
    { icon: Users, title: "Local Expertise", desc: "Serving Bhilai-Durg-Raipur region since years" },
    { icon: Shield, title: "Trusted Service", desc: "Verified by 250+ happy travellers" },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock travel assistance" },
    { icon: Award, title: "Best Prices", desc: "Guaranteed lowest rates in Chhattisgarh" },
  ];

  return (
    <>
      <Helmet>
        <title>Best Travel Agent in Bhilai | Rudraksh Safar - Trusted Tour Operator</title>
        <meta name="description" content="Looking for a reliable travel agent in Bhilai? Rudraksh Safar offers flight booking, hotel reservations, visa assistance & complete tour packages. Call +91 94061 82174." />
        <meta name="keywords" content="travel agent bhilai, travel agency bhilai, tour operator bhilai, flight booking bhilai, hotel booking bhilai, visa agent bhilai, best travel agent in bhilai, bhilai travel agency" />
        <link rel="canonical" href="https://rudrakshsafar.com/travel-agent-bhilai" />
        <meta property="og:title" content="Best Travel Agent in Bhilai | Rudraksh Safar" />
        <meta property="og:description" content="Trusted travel agent in Bhilai offering flights, hotels, visas & tour packages. Serving Bhilai-Durg-Raipur region." />
        <meta property="og:url" content="https://rudrakshsafar.com/travel-agent-bhilai" />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="IN-CT" />
        <meta name="geo.placename" content="Bhilai, Chhattisgarh" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Serving Bhilai, Durg & Raipur</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Best Travel Agent in <span className="text-primary">Bhilai</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your trusted travel partner in Chhattisgarh. We specialize in domestic & international tours, 
                flight bookings, hotel reservations, and complete visa assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="https://wa.me/919406182174?text=Hi, I need travel assistance" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +91 94061 82174
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#packages">View Tour Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Travel Services in Bhilai
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive travel solutions for individuals, families, and corporate clients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Rudraksh Safar?
              </h2>
              <p className="text-muted-foreground">Bhilai's most trusted travel agency</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Destinations from Bhilai
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['Goa', 'Kerala', 'Rajasthan', 'Kashmir', 'Thailand', 'Dubai', 'Bali', 'Singapore'].map((dest) => (
                <div key={dest} className="bg-background rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="font-medium text-foreground">{dest}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Plan Your Trip?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact Bhilai's most trusted travel agent today. We're available 10 AM - 9 PM, every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/919406182174?text=Hi, I want to plan a trip" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="mailto:rudrakshsafar@gmail.com">Email: rudrakshsafar@gmail.com</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Local SEO Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
              <h2>About Rudraksh Safar - Your Local Travel Agent in Bhilai</h2>
              <p>
                Rudraksh Safar is a leading travel agency based in Bhilai, Chhattisgarh, serving the entire 
                Bhilai-Durg-Raipur region. As a trusted travel agent in Bhilai, we understand the unique 
                travel needs of our local community and provide personalized travel solutions.
              </p>
              <p>
                Whether you're planning a family vacation, honeymoon trip, corporate travel, or group tour, 
                our experienced team ensures hassle-free bookings and memorable travel experiences. We offer 
                competitive prices on flights, hotels, and complete tour packages to destinations across India 
                and internationally.
              </p>
              <h3>Areas We Serve</h3>
              <ul>
                <li>Bhilai - Sector 1 to Sector 10</li>
                <li>Durg City</li>
                <li>Raipur</li>
                <li>Rajnandgaon</li>
                <li>Bilaspur</li>
                <li>All of Chhattisgarh</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default TravelAgentBhilai;
