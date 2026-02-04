import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, CheckCircle, Palmtree, Sailboat, MountainSnow, Landmark, Mountain, TreePine, Waves, Info, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import RelatedServices from '@/components/RelatedServices';

const IndiaPackagesBhilai = () => {
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
        "name": "What are the best India tour packages from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Popular India tour packages from Bhilai include Goa (₹9,999), Kerala (₹14,999), Kashmir (₹17,999), Rajasthan (₹12,999), Himachal (₹11,999), and North-East (₹19,999). All packages include accommodation, transport, and sightseeing."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Goa trip cost from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Goa tour packages from Bhilai start from ₹9,999 per person for 3N/4D including hotel stay, beach tours, and transfers. Flight packages start from ₹15,999."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer Kashmir packages from Bhilai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer Kashmir tour packages from Bhilai starting ₹17,999 for 5N/6D covering Srinagar, Gulmarg, Pahalgam, and Sonmarg with hotel, houseboat stay, and sightseeing."
        }
      }
    ]
  };

  const destinations = [
    { name: "Goa", price: "₹9,999", days: "3N/4D", image: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/package/goa", highlights: ["Beaches", "Nightlife", "Water Sports"] },
    { name: "Kerala", price: "₹14,999", days: "5N/6D", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", link: "/package/kerala-family", highlights: ["Backwaters", "Munnar", "Alleppey"] },
    { name: "Kashmir", price: "₹17,999", days: "5N/6D", image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/package/kashmir", highlights: ["Srinagar", "Gulmarg", "Pahalgam"] },
    { name: "Rajasthan", price: "₹12,999", days: "5N/6D", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800", link: "/package/rajasthan-family", highlights: ["Jaipur", "Udaipur", "Jaisalmer"] },
    { name: "Himachal", price: "₹11,999", days: "5N/6D", image: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "/package/shimla-manali", highlights: ["Manali", "Shimla", "Dharamshala"] },
    { name: "Ladakh", price: "₹24,999", days: "6N/7D", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=800", link: "/package/ladakh", highlights: ["Leh", "Pangong", "Nubra"] },
    { name: "North-East", price: "₹19,999", days: "6N/7D", image: "https://images.unsplash.com/photo-1596482855174-8b067332da2f?auto=format&fit=crop&q=80&w=800", link: "/package/gangtok-darjeeling", highlights: ["Shillong", "Kaziranga", "Tawang"] },
    { name: "Andaman", price: "₹22,999", days: "5N/6D", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80&w=800", link: "/package/andaman", highlights: ["Havelock", "Neil Island", "Scuba"] },
  ];

  const faqs = [
    {
      question: "Are India tour packages customizable?",
      answer: "Yes, tours can be customized based on duration, destination, and preferences. Whether you need a relaxing leisure trip or an action-packed adventure, we tailor it for you."
    },
    {
      question: "Do India tours include transport?",
      answer: "Transport inclusion depends on the selected package. Most of our packages include private cab transfers for sightseeing, but flight/train tickets can be added as per your choice."
    },
    {
      question: "Are India tours suitable for families?",
      answer: "Yes, family-friendly itineraries are commonly planned with comfortable hotels, easy pace, and activities suitable for all age groups."
    },
    {
      question: "What are the best India tour packages from Bhilai?",
      answer: "Popular India tour packages from Bhilai include Goa (₹9,999), Kerala (₹14,999), Kashmir (₹17,999), Rajasthan (₹12,999), Himachal (₹11,999), and North-East (₹19,999). All packages include accommodation, transport, and sightseeing."
    },
    {
      question: "How much does a Goa trip cost from Bhilai?",
      answer: "Goa tour packages from Bhilai start from ₹9,999 per person for 3N/4D including hotel stay, beach tours, and transfers. Flight packages start from ₹15,999."
    },
    {
      question: "Do you offer Kashmir packages from Bhilai?",
      answer: "Yes, we offer Kashmir tour packages from Bhilai starting ₹17,999 for 5N/6D covering Srinagar, Gulmarg, Pahalgam, and Sonmarg with hotel, houseboat stay, and sightseeing."
    },
  ];

  return (
    <>
      <Helmet>
        <title>India Tour Packages from Bhilai | Goa Kashmir Kerala | Rudraksh Safar</title>
        <meta name="description" content="Book national tour packages from Bhilai to Goa, Kashmir, Kerala, Rajasthan, Himachal & more. Starting ₹9,999. Family & honeymoon packages available. Call +91 94061 82174." />
        <meta name="keywords" content="india tour packages bhilai, goa package from bhilai, kashmir tour from bhilai, kerala package bhilai, domestic tour from bhilai, national tour packages bhilai" />
        <link rel="canonical" href="https://rudrakshsafar.com/india-tour-packages-bhilai" />

        <meta property="og:title" content="India Tour Packages from Bhilai | Rudraksh Safar" />
        <meta property="og:description" content="Book domestic holidays from Bhilai. Goa, Kashmir, Kerala & more from ₹9,999." />
        <meta property="og:url" content="https://rudrakshsafar.com/india-tour-packages-bhilai" />
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
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Domestic Tours from Bhilai</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                India Tour Packages from <span className="text-primary">Bhilai</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Explore India with our national tour packages from Bhilai covering Goa, Kashmir, Kerala, Rajasthan,
                Himachal, Ladakh, and North-East India. Complete travel support from Rudraksh Safar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="https://wa.me/919406182174?text=Hi, I want to book an India tour package from Bhilai" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Quote on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR Summary */}
        <section className="py-12 relative z-20">
          <div className="container mx-auto px-4">
            <Card className="bg-background/95 backdrop-blur shadow-xl border-t-4 border-t-primary max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0 hidden md:block">
                    <Info className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="md:hidden"><Info className="w-6 h-6 text-primary" /></span>
                      TL;DR (AI Summary)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      India tour packages are planned travel itineraries covering popular destinations like hill stations, heritage cities, spiritual locations, beaches, and cultural regions. We assist travellers with domestic tour planning, accommodation, transport coordination, and sightseeing arrangements for smooth and memorable journeys.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Discover India & Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Discover India */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Discover India Through Well-Planned Tour Packages</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  India offers a diverse range of travel experiences — from mountains and beaches to heritage sites and spiritual destinations. Tour packages are designed to reduce planning effort and ensure smooth travel flow.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-none shadow-none bg-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">Why Packages?</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary" /> Cover important attractions efficiently</li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary" /> Balance comfort, time, and budget</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Types of Packages */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Types of India Tour Packages</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl border hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                    <div className="font-medium">Family Holiday</div>
                  </div>
                  <div className="p-4 rounded-xl border hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">💍</div>
                    <div className="font-medium">Honeymoon Tours</div>
                  </div>
                  <div className="p-4 rounded-xl border hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">🌄</div>
                    <div className="font-medium">Adventure Trips</div>
                  </div>
                  <div className="p-4 rounded-xl border hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">🕉️</div>
                    <div className="font-medium">Spiritual Tours</div>
                  </div>
                  <div className="p-4 rounded-xl border hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">🏰</div>
                    <div className="font-medium">Heritage Tours</div>
                  </div>
                  <div className="p-4 rounded-xl border hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="font-medium">Group Travel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Popular India Destinations from Bhilai
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {destinations.map((dest, index) => (
                <Link to={dest.link} key={index} className="group h-full">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-foreground mb-2 text-center">{dest.name}</h3>
                      <p className="text-sm text-muted-foreground text-center mb-3">{dest.days}</p>
                      <p className="text-2xl font-bold text-primary text-center mb-4">From {dest.price}</p>
                      <ul className="space-y-1 mb-6 flex-1">
                        {dest.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                            <CheckCircle className="w-3 h-3 text-primary" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-auto" variant="outline">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                What's Included in Our India Packages
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Hotel Accommodation</h4>
                      <p className="text-sm text-muted-foreground">2-star to 5-star hotels with breakfast</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Transport</h4>
                      <p className="text-sm text-muted-foreground">AC car/bus for all transfers & sightseeing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Sightseeing</h4>
                      <p className="text-sm text-muted-foreground">All major attractions & local experiences</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Meals</h4>
                      <p className="text-sm text-muted-foreground">Breakfast included, full board optional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Permits & Taxes</h4>
                      <p className="text-sm text-muted-foreground">All required permits & GST included</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">24/7 Support</h4>
                      <p className="text-sm text-muted-foreground">WhatsApp assistance throughout trip</p>
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
                FAQs – India Tours from Bhilai
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

              <p className="mt-8 text-sm text-center text-muted-foreground">
                <strong>Important Information:</strong> Tour itineraries, pricing, and services depend on third-party providers and are subject to availability and seasonal conditions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your India Trip from Bhilai
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get the best deals on national tour packages. Family, honeymoon & group packages available.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://wa.me/919406182174?text=Hi, I want to plan an India trip from Bhilai" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +91 94061 82174
              </a>
            </Button>
          </div>
        </section>

        {/* Internal Links */}
        <RelatedServices mode="packages" />
      </main >

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default IndiaPackagesBhilai;
