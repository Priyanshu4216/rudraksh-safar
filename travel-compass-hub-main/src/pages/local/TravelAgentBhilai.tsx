import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, CheckCircle, Users, Shield, Award, Mail, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TravelAgentBhilai = () => {
  // LocalBusiness Schema - Optimized for Google Local Pack
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Rudraksh Safar",
    "url": "https://rudrakshsafar.com",
    "telephone": "+91-9406182174",
    "email": "rudrakshsafar@gmail.com",
    "priceRange": "₹₹",
    "image": "https://rudrakshsafar.com/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GE Road, In Front of Petrol Pump, Bhilai 3",
      "addressLocality": "Bhilai",
      "addressRegion": "Chhattisgarh",
      "postalCode": "490021",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.206181",
      "longitude": "81.424916"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "21:00"
    }],
    "sameAs": [
      "https://www.facebook.com/people/Rudraksh-Safar/pfbid0iAvSgkmW94itABRQ4h3f8kSkkyT16Kn7ocq97wUWVY35GWgj61YjdQNBeLy2nVTtl/",
      "https://www.instagram.com/rudrakshsafar",
      "https://www.youtube.com/@RudrakshSafar"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Bhilai", "Durg", "Supela", "Smriti Nagar", "Power House", "Raipur", "Chhattisgarh"]
    }
  };

  // FAQ Schema for Local Searches
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best travel agent in Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rudraksh Safar is a trusted travel agent in Bhilai offering national and international tour packages with customized travel planning. Located on GE Road, we provide complete travel solutions including visa assistance, hotel booking, and 24/7 trip support."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide international tour packages from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Rudraksh Safar provides international tour packages from Bhilai including Thailand, Dubai, Bali, Singapore, Malaysia, Maldives, and Europe. We handle visa processing, flight booking, and complete itinerary planning."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer India tour packages from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer national tour packages from Bhilai covering Goa, Kerala, Kashmir, Rajasthan, Himachal Pradesh, North-East India, and other popular destinations across India."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Rudraksh Safar office located in Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rudraksh Safar office is located at GE Road, In Front of Petrol Pump, Bhilai 3, Chhattisgarh – 490021. We are open from 10:00 AM to 9:00 PM every day."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Rudraksh Safar for travel booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Rudraksh Safar via WhatsApp at +91 94061 82174, email at rudrakshsafar@gmail.com, or visit our office on GE Road, Bhilai. We offer both office visits and online consultation."
        }
      }
    ]
  };

  const services = [
    { icon: "✈️", title: "Flight Booking", desc: "Domestic & international flights at best prices" },
    { icon: "🏨", title: "Hotel Reservations", desc: "Budget to luxury accommodations worldwide" },
    { icon: "📋", title: "Visa Assistance", desc: "Complete visa documentation support for all countries" },
    { icon: "🌍", title: "International Tours", desc: "Thailand, Dubai, Bali, Singapore, Maldives & more" },
    { icon: "🇮🇳", title: "India Tours", desc: "Goa, Kerala, Kashmir, Rajasthan, Himachal & more" },
    { icon: "💒", title: "Honeymoon Packages", desc: "Romantic getaways for couples" },
  ];

  const whyChooseUs = [
    { icon: Users, title: "Local Expertise", desc: "Trusted travel agent serving Bhilai-Durg-Raipur region" },
    { icon: Shield, title: "Personalized Service", desc: "Customized itineraries for every traveler" },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock travel assistance" },
    { icon: Award, title: "Best Prices", desc: "Competitive rates on all packages" },
  ];

  const faqs = [
    {
      question: "Which is the best travel agent in Bhilai?",
      answer: "Rudraksh Safar is a trusted travel agent in Bhilai offering national and international tour packages with customized travel planning. Located on GE Road, we provide complete travel solutions including visa assistance, hotel booking, and 24/7 trip support."
    },
    {
      question: "Do you provide international tour packages from Bhilai?",
      answer: "Yes, Rudraksh Safar provides international tour packages from Bhilai including Thailand, Dubai, Bali, Singapore, Malaysia, Maldives, and Europe. We handle visa processing, flight booking, and complete itinerary planning."
    },
    {
      question: "Do you offer India tour packages from Bhilai?",
      answer: "Yes, we offer national tour packages from Bhilai covering Goa, Kerala, Kashmir, Rajasthan, Himachal Pradesh, North-East India, and other popular destinations across India."
    },
    {
      question: "Where is Rudraksh Safar office located in Bhilai?",
      answer: "Rudraksh Safar office is located at GE Road, In Front of Petrol Pump, Bhilai 3, Chhattisgarh – 490021. We are open from 10:00 AM to 9:00 PM every day."
    },
    {
      question: "How can I contact Rudraksh Safar for travel booking?",
      answer: "You can contact Rudraksh Safar via WhatsApp at +91 94061 82174, email at rudrakshsafar@gmail.com, or visit our office on GE Road, Bhilai. We offer both office visits and online consultation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Travel Agent in Bhilai | Rudraksh Safar – Trusted Tour Operator</title>
        <meta name="description" content="Rudraksh Safar is a trusted travel agency in Bhilai specializing in national and international tour packages. Office visit available on GE Road. Call +91 94061 82174." />
        <meta name="keywords" content="travel agent bhilai, travel agency bhilai, tour operator bhilai, best travel agent in bhilai, international tour packages bhilai, india tour packages bhilai, visa agent bhilai" />
        <link rel="canonical" href="https://rudrakshsafar.com/travel-agent-bhilai" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Best Travel Agent in Bhilai | Rudraksh Safar" />
        <meta property="og:description" content="Trusted travel agent in Bhilai offering national & international tour packages. Office on GE Road, Bhilai." />
        <meta property="og:url" content="https://rudrakshsafar.com/travel-agent-bhilai" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rudrakshsafar.com/og-image.png" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-CT" />
        <meta name="geo.placename" content="Bhilai, Chhattisgarh" />
        <meta name="geo.position" content="21.206181;81.424916" />
        <meta name="ICBM" content="21.206181, 81.424916" />
        
        {/* Schemas */}
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
                Best Travel Agent in <span className="text-primary">Bhilai</span> – Rudraksh Safar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Rudraksh Safar is a trusted travel agency in Bhilai specializing in national and international tour packages. 
                We help families, couples, and groups plan memorable holidays with customized itineraries and complete travel support. 
                Serving Bhilai and Durg with office visit and WhatsApp assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="https://wa.me/919406182174?text=Hi, I need travel assistance" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp: +91 94061 82174
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/international-packages">International Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* International Tour Packages Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                International Tour Packages from Bhilai
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                We offer international holiday packages from Bhilai including Thailand, Dubai, Bali, Singapore, 
                Malaysia, Maldives, and Europe with customized planning and end-to-end support.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Thailand', 'Dubai', 'Bali', 'Singapore', 'Malaysia', 'Maldives', 'Europe', 'Sri Lanka'].map((dest) => (
                  <div key={dest} className="bg-background rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow border">
                    <CheckCircle className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="font-medium text-foreground">{dest}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/international-packages">View All International Packages →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* National Tour Packages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                National Tour Packages from Bhilai
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                Explore India with our national tour packages from Bhilai covering destinations like Goa, Kashmir, 
                Kerala, Rajasthan, Himachal, and North-East India.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Goa', 'Kashmir', 'Kerala', 'Rajasthan', 'Himachal', 'North-East', 'Ladakh', 'Andaman'].map((dest) => (
                  <div key={dest} className="bg-muted/50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow border">
                    <CheckCircle className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="font-medium text-foreground">{dest}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/domestic-packages">View All Domestic Packages →</Link>
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
                Why Choose Rudraksh Safar in Bhilai?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
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
            {/* Key Points List */}
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">Trusted local travel agent in Bhilai</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">Customized national & international tour packages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">Office visit available on GE Road</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">Dedicated WhatsApp & call support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* NAP Block + Google Map */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Our Office Location in Bhilai
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* NAP Block - Critical for Local SEO */}
                <div className="bg-background rounded-xl p-8 shadow-lg border" itemScope itemType="https://schema.org/TravelAgency">
                  <h3 className="text-2xl font-bold text-foreground mb-6" itemProp="name">Rudraksh Safar</h3>
                  <p className="text-primary font-medium mb-4">Travel Agent in Bhilai, Chhattisgarh</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span className="text-foreground">
                        <span itemProp="streetAddress">GE Road, In Front of Petrol Pump, Bhilai 3</span>, 
                        <span itemProp="addressLocality"> Bhilai</span>, 
                        <span itemProp="addressRegion"> Chhattisgarh</span> – 
                        <span itemProp="postalCode"> 490021</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <a href="tel:+919406182174" className="text-foreground hover:text-primary transition-colors" itemProp="telephone">
                        +91 94061 82174
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                      <a href="https://wa.me/919406182174" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                        WhatsApp: 94061 82174
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <a href="mailto:rudrakshsafar@gmail.com" className="text-foreground hover:text-primary transition-colors" itemProp="email">
                        rudrakshsafar@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">Open: 10:00 AM – 9:00 PM (All Days)</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <Button asChild className="w-full">
                      <a href="https://wa.me/919406182174?text=Hi, I want to visit your office in Bhilai" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book Appointment
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                  <iframe
                    src="https://www.google.com/maps?q=21.206181,81.424916&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rudraksh Safar Office Location - Bhilai"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                FAQs – Travel Agent in Bhilai
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Plan Your Trip from Bhilai?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact Bhilai's most trusted travel agent today. We're available 10 AM - 9 PM, every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/919406182174?text=Hi, I want to plan a trip" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="mailto:rudrakshsafar@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Internal Links Section - SEO */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Explore More</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/international-packages" className="text-primary hover:underline font-medium">
                  International Tour Packages from Bhilai
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/domestic-packages" className="text-primary hover:underline font-medium">
                  National Tour Packages from Bhilai
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/visa-agent-bhilai" className="text-primary hover:underline font-medium">
                  Visa Agent in Bhilai
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/tour-packages-bhilai" className="text-primary hover:underline font-medium">
                  Tour Packages from Bhilai
                </Link>
              </div>
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
