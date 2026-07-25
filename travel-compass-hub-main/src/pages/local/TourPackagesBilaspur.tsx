import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Plane, Hotel, Users, Heart, Mountain, Crown, ArrowRight, Star, Car, Utensils, Camera, FileCheck, ShieldCheck, Headphones } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RelatedServices from '@/components/RelatedServices';

import FAQsSection from '@/components/FAQsSection';
import { getPrice, formatPrice } from '@/utils/getPrice';

const TourPackagesBilaspur = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Tour Packages from Bilaspur - Rudraksh Safar",
    "description": "Premium domestic and international tour packages from Bilaspur. Seamless train connections from BSP and AC cab transfers to Raipur airport.",
    "url": "https://rudrakshsafar.com/tour-packages-from-bilaspur",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Bilaspur" },
      { "@type": "AdministrativeArea", "name": "Chhattisgarh" }
    ],
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "TouristTrip",
            "name": "Domestic Tour Packages",
            "description": "Kashmir, Kerala, and Goa tours starting from Bilaspur Junction.",
            "offeredBy": { "@id": "https://rudrakshsafar.com/#travelagency" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "TouristTrip",
            "name": "International Tour Packages",
            "description": "Thailand and Dubai packages via Raipur airport.",
            "offeredBy": { "@id": "https://rudrakshsafar.com/#travelagency" }
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I book international tour packages from Bilaspur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! While Bilaspur's airport has limited routes, we arrange private AC cab transfers from your home to Raipur Airport for your international flights." }
      },
      {
        "@type": "Question",
        "name": "What are the best domestic trips from Bilaspur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Leveraging Bilaspur Junction (BSP) as a SECR hub, our Durg-MCTM Udhampur SF Express packages are a highly recommended gateway route toward Jammu & Kashmir and North India." }
      }
    ]
  };

  const packageCategories = [
    {
      icon: Plane,
      title: "Domestic Escapes",
      desc: "Explore Goa, Kerala, and Kashmir seamlessly from Bilaspur",
      link: "/domestic-packages",
      price: "Starting ₹9,999"
    },
    {
      icon: Hotel,
      title: "Global Holidays",
      desc: "Thailand, Dubai, and Singapore tours with airport transfers",
      link: "/international-packages",
      price: "Starting ₹29,999"
    },
    {
      icon: Mountain,
      title: "Himalayan Adventures",
      desc: "Manali, Leh, and Spiti Valley packages",
      link: "/adventure-packages",
      price: "Starting ₹15,999"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tour Packages from Bilaspur | Premium Holidays | Rudraksh Safar</title>
        <meta name="description" content="Book affordable tour packages from Bilaspur. Domestic train tours from BSP & international holidays via Raipur. Thailand, Kashmir, Dubai tours." />
        <meta name="keywords" content="tour packages bilaspur, holiday packages bilaspur, travel packages from bilaspur, kashmir tour from bilaspur" />
        <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-from-bilaspur" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Exclusive Packages from <span className="text-primary">Bilaspur</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Customized holiday planning from the heart of Chhattisgarh. From direct train routes at Bilaspur Junction (BSP) to private transfers for international flights, we handle everything for residents of Sarkanda, Vyapar Vihar, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="https://wa.me/919203650311?text=Hi, I want a package quote from Bilaspur" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Logistics Mastered for Bilaspur</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                We understand that Bilasa Devi Kevat Airport doesn't fly everywhere. That's why our international packages include comfortable cab transfers to Raipur Airport (RPR). For domestic trips, we capitalize on Bilaspur's incredible train connectivity via SECR.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {packageCategories.map((category, index) => (
                <Link key={index} to={category.link}>
                  <Card className="h-full hover:shadow-xl transition-all cursor-pointer">
                    <CardHeader>
                      <category.icon className="w-8 h-8 text-primary mb-4" />
                      <CardTitle>{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{category.desc}</p>
                      <span className="text-primary font-medium text-sm">{category.price}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQsSection
          title="Questions about Bilaspur Packages"
          description="We've got the answers for local departures."
          faqs={[
            {
              question: "How do you handle flights from Bilaspur?",
              answer: "We seamlessly connect Bilaspur clients to Raipur Airport for major domestic and international flights via private AC transfers."
            },
            {
              question: "What is the best route to Kashmir from Bilaspur?",
              answer: "We recommend boarding the Durg - MCTM Udhampur SF Express (20847) from Bilaspur Junction (BSP). This serves as an excellent gateway route toward Jammu & Kashmir, from where we arrange onward travel."
            }
          ]}
        />
        
        <RelatedServices mode="packages" />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default TourPackagesBilaspur;
