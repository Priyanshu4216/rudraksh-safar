import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Plane, Globe, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const InternationalPackagesBhilai = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Rudraksh Safar",
    "url": "https://rudrakshsafar.com",
    "telephone": "+91-9406182174",
    "email": "rudrakshsafar@gmail.com",
    "priceRange": "₹₹",
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
    "areaServed": ["Bhilai", "Durg", "Raipur", "Chhattisgarh"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which international destinations can I book from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From Bhilai, you can book international tour packages to Thailand, Dubai, Bali, Singapore, Malaysia, Maldives, Sri Lanka, Vietnam, Europe, and more through Rudraksh Safar."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of international tour packages from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "International tour packages from Bhilai start from ₹25,000 per person for budget destinations like Thailand and Bali. Dubai packages start from ₹45,000. Prices include flights, hotels, and sightseeing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide visa assistance for international trips from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Rudraksh Safar provides complete visa assistance for all international destinations including documentation, application filing, and interview preparation if required."
        }
      }
    ]
  };

  const destinations = [
    { name: "Thailand", price: "₹25,000", days: "5N/6D", image: "🇹🇭", highlights: ["Bangkok", "Pattaya", "Phi Phi Islands"] },
    { name: "Dubai", price: "₹45,000", days: "5N/6D", image: "🇦🇪", highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"] },
    { name: "Bali", price: "₹35,000", days: "5N/6D", image: "🇮🇩", highlights: ["Ubud", "Kuta Beach", "Temples"] },
    { name: "Singapore", price: "₹55,000", days: "4N/5D", image: "🇸🇬", highlights: ["Marina Bay", "Sentosa", "Gardens"] },
    { name: "Maldives", price: "₹65,000", days: "4N/5D", image: "🇲🇻", highlights: ["Beach Villa", "Snorkeling", "Sunset"] },
    { name: "Malaysia", price: "₹40,000", days: "5N/6D", image: "🇲🇾", highlights: ["KL Tower", "Langkawi", "Genting"] },
    { name: "Vietnam", price: "₹35,000", days: "6N/7D", image: "🇻🇳", highlights: ["Ha Long Bay", "Ho Chi Minh", "Hanoi"] },
    { name: "Sri Lanka", price: "₹30,000", days: "5N/6D", image: "🇱🇰", highlights: ["Colombo", "Kandy", "Sigiriya"] },
  ];

  const faqs = [
    {
      question: "Which international destinations can I book from Bhilai?",
      answer: "From Bhilai, you can book international tour packages to Thailand, Dubai, Bali, Singapore, Malaysia, Maldives, Sri Lanka, Vietnam, Europe, and more through Rudraksh Safar."
    },
    {
      question: "What is the cost of international tour packages from Bhilai?",
      answer: "International tour packages from Bhilai start from ₹25,000 per person for budget destinations like Thailand and Bali. Dubai packages start from ₹45,000. Prices include flights, hotels, and sightseeing."
    },
    {
      question: "Do you provide visa assistance for international trips from Bhilai?",
      answer: "Yes, Rudraksh Safar provides complete visa assistance for all international destinations including documentation, application filing, and interview preparation if required."
    },
    {
      question: "Can I customize my international tour package?",
      answer: "Absolutely! We offer fully customizable international tour packages based on your budget, preferences, travel dates, and interests. Contact us on WhatsApp for personalized itineraries."
    },
    {
      question: "What is included in international tour packages from Bhilai?",
      answer: "Our international packages typically include return flights, airport transfers, hotel accommodation, daily breakfast, sightseeing tours, and travel insurance. Visa fees are usually extra."
    }
  ];

  return (
    <>
      <Helmet>
        <title>International Tour Packages from Bhilai | Thailand Dubai Bali | Rudraksh Safar</title>
        <meta name="description" content="Book international tour packages from Bhilai to Thailand, Dubai, Bali, Singapore, Maldives & more. Starting ₹25,000. Visa assistance included. Call +91 94061 82174." />
        <meta name="keywords" content="international tour packages bhilai, thailand package from bhilai, dubai tour from bhilai, bali package bhilai, singapore tour bhilai, foreign tour from bhilai" />
        <link rel="canonical" href="https://rudrakshsafar.com/international-tour-packages-bhilai" />
        
        <meta property="og:title" content="International Tour Packages from Bhilai | Rudraksh Safar" />
        <meta property="og:description" content="Book international holidays from Bhilai. Thailand, Dubai, Bali, Singapore & more from ₹25,000." />
        <meta property="og:url" content="https://rudrakshsafar.com/international-tour-packages-bhilai" />
        <meta property="og:type" content="website" />
        
        <meta name="geo.region" content="IN-CT" />
        <meta name="geo.placename" content="Bhilai, Chhattisgarh" />
        <meta name="geo.position" content="21.206181;81.424916" />
        
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">International Tours from Bhilai</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                International Tour Packages from <span className="text-primary">Bhilai</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Book international holiday packages from Bhilai to Thailand, Dubai, Bali, Singapore, Maldives, and Europe. 
                Complete visa assistance and end-to-end travel support from Rudraksh Safar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="https://wa.me/919406182174?text=Hi, I want to book an international tour package from Bhilai" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Quote on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Popular International Destinations from Bhilai
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {destinations.map((dest, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4 text-center">{dest.image}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2 text-center">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground text-center mb-3">{dest.days}</p>
                    <p className="text-2xl font-bold text-primary text-center mb-4">From {dest.price}</p>
                    <ul className="space-y-1 mb-4">
                      {dest.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant="outline">
                      <a href={`https://wa.me/919406182174?text=Hi, I want ${dest.name} tour package from Bhilai`} target="_blank" rel="noopener noreferrer">
                        Enquire Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                What's Included in Our International Packages
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Return Flights</h4>
                      <p className="text-sm text-muted-foreground">From Raipur/Nagpur with baggage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Hotel Accommodation</h4>
                      <p className="text-sm text-muted-foreground">3-star to 5-star options available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Airport Transfers</h4>
                      <p className="text-sm text-muted-foreground">Private AC vehicle transfers</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Sightseeing Tours</h4>
                      <p className="text-sm text-muted-foreground">All major attractions covered</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Visa Assistance</h4>
                      <p className="text-sm text-muted-foreground">Complete documentation support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">24/7 Support</h4>
                      <p className="text-sm text-muted-foreground">WhatsApp assistance during trip</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                FAQs – International Tours from Bhilai
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

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your International Trip from Bhilai
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get the best deals on international tour packages. Contact us for customized itineraries.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://wa.me/919406182174?text=Hi, I want to plan an international trip from Bhilai" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +91 94061 82174
              </a>
            </Button>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Related Pages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/travel-agent-bhilai" className="text-primary hover:underline font-medium">
                  Best Travel Agent in Bhilai
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/india-tour-packages-bhilai" className="text-primary hover:underline font-medium">
                  National Tour Packages from Bhilai
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/visa-agent-bhilai" className="text-primary hover:underline font-medium">
                  Visa Agent in Bhilai
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

export default InternationalPackagesBhilai;
