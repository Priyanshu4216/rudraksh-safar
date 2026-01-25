import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, FileText, CheckCircle, Clock, Shield, Globe, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VisaAgentBhilai = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rudraksh Safar - Visa Agent in Bhilai",
    "image": "https://rudrakshsafar.com/og-image.png",
    "url": "https://rudrakshsafar.com/visa-agent-bhilai",
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
    "makesOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dubai Visa" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thailand Visa" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Singapore Visa" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schengen Visa" } }
    ]
  };

  const visaServices = [
    { country: "Dubai / UAE", time: "3-5 days", link: "/visa/dubai" },
    { country: "Thailand", time: "2-3 days", link: "/visa/thailand" },
    { country: "Singapore", time: "3-5 days", link: "/visa/singapore" },
    { country: "Bali / Indonesia", time: "3-4 days", link: "/visa/bali" },
    { country: "Malaysia", time: "3-5 days", link: "/visa/malaysia" },
    { country: "Sri Lanka", time: "1-2 days", link: "/visa/sri-lanka" },
    { country: "Turkey", time: "5-7 days", link: "/visa/turkey" },
    { country: "Schengen (Europe)", time: "15-20 days", link: "/visa/schengen" },
  ];

  const processSteps = [
    { step: "1", title: "Free Consultation", desc: "Discuss your travel plans and visa requirements" },
    { step: "2", title: "Document Collection", desc: "We guide you on required documents" },
    { step: "3", title: "Application Filing", desc: "Expert team handles your visa application" },
    { step: "4", title: "Visa Delivery", desc: "Receive your approved visa hassle-free" },
  ];

  return (
    <>
      <Helmet>
        <title>Visa Agent in Bhilai | Visa Consultancy Services | Rudraksh Safar</title>
        <meta name="description" content="Best visa agent in Bhilai for Dubai, Thailand, Singapore, Schengen & more. Fast visa processing, document assistance & high approval rate. Call +91 94061 82174." />
        <meta name="keywords" content="visa agent bhilai, visa consultancy bhilai, dubai visa bhilai, thailand visa bhilai, singapore visa agent bhilai, schengen visa bhilai, passport agent bhilai, visa services chhattisgarh" />
        <link rel="canonical" href="https://rudrakshsafar.com/visa-agent-bhilai" />
        <meta property="og:title" content="Visa Agent in Bhilai | Rudraksh Safar" />
        <meta property="og:description" content="Expert visa consultancy services in Bhilai. Fast processing for Dubai, Thailand, Singapore, Schengen visas." />
        <meta property="og:url" content="https://rudrakshsafar.com/visa-agent-bhilai" />
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
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Trusted Visa Consultancy in Bhilai</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Visa Agent in <span className="text-primary">Bhilai</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Expert visa consultancy services for Dubai, Thailand, Singapore, Schengen & 50+ countries. 
                High approval rate with hassle-free documentation support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="https://wa.me/919406182174?text=Hi, I need visa assistance" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Visa Assistance
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/visa-guide">View Visa Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Visa Services We Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fast & reliable visa processing for popular destinations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {visaServices.map((visa, index) => (
                <Link key={index} to={visa.link}>
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {visa.time}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground">{visa.country}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Tourist & Business Visa</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Visa Process
              </h2>
              <p className="text-muted-foreground">Simple 4-step visa application process</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {processSteps.map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why Choose Our Visa Services?
                  </h2>
                  <div className="space-y-4">
                    {[
                      { icon: CheckCircle, text: "High visa approval rate" },
                      { icon: Clock, text: "Fast processing time" },
                      { icon: Shield, text: "Complete document assistance" },
                      { icon: Star, text: "Transparent pricing, no hidden charges" },
                      { icon: Globe, text: "50+ countries visa support" },
                      { icon: MapPin, text: "Local office in Bhilai for easy access" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-center">Get Free Visa Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Not sure about visa requirements? Our experts will guide you through the entire process.
                    </p>
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/919406182174?text=Hi, I need visa consultation for my trip" target="_blank" rel="noopener noreferrer">
                        WhatsApp: +91 94061 82174
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">Available 10 AM - 9 PM, Every Day</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
              <h2>Best Visa Agent in Bhilai - Rudraksh Safar</h2>
              <p>
                Looking for a reliable visa agent in Bhilai? Rudraksh Safar is your trusted visa consultancy 
                partner in the Bhilai-Durg-Raipur region. We specialize in tourist visas, business visas, 
                and travel documentation for all major international destinations.
              </p>
              <h3>Our Visa Expertise</h3>
              <p>
                With years of experience in visa processing, our team understands the specific requirements 
                of each embassy and consulate. We provide end-to-end support from document preparation to 
                visa stamping, ensuring a smooth and stress-free experience for our clients.
              </p>
              <h3>Serving All of Chhattisgarh</h3>
              <p>
                While based in Bhilai, we serve clients from across Chhattisgarh including Raipur, Durg, 
                Rajnandgaon, Bilaspur, and Korba. Our online consultation and doorstep document pickup 
                services make visa processing convenient for everyone.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default VisaAgentBhilai;
