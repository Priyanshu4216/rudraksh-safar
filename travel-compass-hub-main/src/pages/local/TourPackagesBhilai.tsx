import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Plane, Hotel, Users, Heart, Mountain, Crown, ArrowRight, Star, Car, Utensils, Camera, FileCheck, ShieldCheck, Headphones } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RelatedServices from '@/components/RelatedServices';

const TourPackagesBhilai = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Rudraksh Safar - Tour Packages from Bhilai",
    "image": "https://rudrakshsafar.com/og-image.png",
    "url": "https://rudrakshsafar.com/tour-packages-bhilai",
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
    "areaServed": ["Bhilai", "Durg", "Raipur", "Chhattisgarh"],
    "makesOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Domestic Tour Packages" } },
      { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "International Tour Packages" } },
      { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Honeymoon Packages" } },
      { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Family Packages" } }
    ]
  };

  const packageCategories = [
    {
      icon: Plane,
      title: "Domestic Packages",
      desc: "Explore India's best destinations - Goa, Kerala, Rajasthan, Kashmir & more",
      link: "/domestic-packages",
      price: "Starting ₹8,999"
    },
    {
      icon: Hotel,
      title: "International Packages",
      desc: "Thailand, Dubai, Singapore, Bali, Maldives & Europe tours",
      link: "/international-packages",
      price: "Starting ₹29,999"
    },
    {
      icon: Heart,
      title: "Honeymoon Packages",
      desc: "Romantic getaways for newlyweds - Maldives, Bali, Switzerland",
      link: "/honeymoon-packages",
      price: "Starting ₹35,999"
    },
    {
      icon: Users,
      title: "Family Packages",
      desc: "Fun-filled family vacations with kids-friendly activities",
      link: "/family-packages",
      price: "Starting ₹12,999"
    },
    {
      icon: Mountain,
      title: "Adventure Packages",
      desc: "Trekking, camping, water sports & thrilling experiences",
      link: "/adventure-packages",
      price: "Starting ₹15,999"
    },
    {
      icon: Crown,
      title: "Luxury Packages",
      desc: "Premium 5-star experiences with exclusive services",
      link: "/luxury-packages",
      price: "Starting ₹75,999"
    },
  ];

  const popularDestinations = [
    { name: "Goa", type: "Beach", duration: "3N/4D", price: "₹9,999" },
    { name: "Kerala", type: "Backwaters", duration: "4N/5D", price: "₹14,999" },
    { name: "Rajasthan", type: "Heritage", duration: "5N/6D", price: "₹16,999" },
    { name: "Kashmir", type: "Mountains", duration: "5N/6D", price: "₹19,999" },
    { name: "Thailand", type: "International", duration: "4N/5D", price: "₹29,999" },
    { name: "Dubai", type: "International", duration: "4N/5D", price: "₹45,999" },
  ];

  return (
    <>
      <Helmet>
        <title>Tour Packages from Bhilai | Best Holiday Packages | Rudraksh Safar</title>
        <meta name="description" content="Book affordable tour packages from Bhilai. Domestic & international holiday packages for family, honeymoon & groups. Goa, Kerala, Thailand, Dubai tours. Call +91 94061 82174." />
        <meta name="keywords" content="tour packages bhilai, holiday packages bhilai, travel packages from bhilai, goa package from bhilai, thailand package bhilai, honeymoon packages bhilai, family tour bhilai, best tour operator bhilai" />
        <link rel="canonical" href="https://rudrakshsafar.com/tour-packages-bhilai" />
        <meta property="og:title" content="Tour Packages from Bhilai | Rudraksh Safar" />
        <meta property="og:description" content="Affordable domestic & international tour packages from Bhilai. Family, honeymoon & adventure trips." />
        <meta property="og:url" content="https://rudrakshsafar.com/tour-packages-bhilai" />
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
                <span className="text-sm font-medium">Tour Packages from Bhilai, CG</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Best Tour Packages from <span className="text-primary">Bhilai</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover amazing holiday packages for every budget. From weekend getaways to international
                adventures - we plan it all for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="https://wa.me/919406182174?text=Hi, I want to book a tour package" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Custom Quote
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/hot-deals">View Hot Deals</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Package Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Explore Our Packages
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our wide range of tour packages designed for every type of traveler
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {packageCategories.map((category, index) => (
                <Link key={index} to={category.link}>
                  <Card className="h-full hover:shadow-xl transition-all hover:border-primary/50 cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-primary">{category.price}</span>
                      </div>
                      <CardTitle className="mt-4">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{category.desc}</p>
                      <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Packages <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Destinations from Bhilai
              </h2>
              <p className="text-muted-foreground">Most booked packages by our Bhilai customers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {popularDestinations.map((dest, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{dest.name}</h3>
                        <span className="text-sm text-muted-foreground">{dest.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{dest.duration}</span>
                      <span className="text-lg font-bold text-primary">{dest.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Package Inclusions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What's Included in Our Packages?
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <Hotel className="w-8 h-8 mb-2 text-primary mx-auto" />, label: "Hotels" },
                  { icon: <Car className="w-8 h-8 mb-2 text-primary mx-auto" />, label: "Transfers" },
                  { icon: <Utensils className="w-8 h-8 mb-2 text-primary mx-auto" />, label: "Meals" },
                  { icon: <Camera className="w-8 h-8 mb-2 text-primary mx-auto" />, label: "Sightseeing" },
                  { icon: <Plane className="w-8 h-8 mb-2 text-primary mx-auto" />, label: "Flights*" },
                  { icon: <FileCheck className="w-8 h-8 mb-2 text-primary mx-auto" />, label: "Visa Help" },
                  { icon: <ShieldCheck className="w-8 h-8 mb-2 text-primary mx-auto" />, label: "Insurance*" },
                  { icon: <Headphones className="w-8 h-8 mb-2 text-primary mx-auto" />, label: "24/7 Support" },
                ].map((item, index) => (
                  <div key={index} className="bg-background rounded-xl p-4 text-center shadow-sm">
                    {item.icon}
                    <span className="font-medium text-foreground block">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                *Optional add-ons available. Package inclusions vary based on selected itinerary.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Dream Vacation?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get personalized tour packages tailored to your preferences and budget.
              Free consultation available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/919406182174?text=Hi, I want to plan a tour package from Bhilai" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +91 94061 82174
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Local SEO Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
              <h2>Book Tour Packages from Bhilai with Rudraksh Safar</h2>
              <p>
                Planning a holiday from Bhilai? Rudraksh Safar offers the best tour packages for travelers
                from Bhilai, Durg, Raipur, and across Chhattisgarh. Whether you're looking for a relaxing
                beach vacation in Goa, a spiritual journey to Varanasi, or an international adventure in
                Thailand or Dubai, we have packages to suit every need.
              </p>
              <h3>Why Book with Us?</h3>
              <ul>
                <li>Customized itineraries based on your preferences</li>
                <li>Best prices guaranteed - we match or beat any quote</li>
                <li>Local office in Bhilai for easy communication</li>
                <li>Experienced travel consultants who understand your needs</li>
                <li>24/7 support during your trip</li>
              </ul>
              <h3>Popular Packages from Bhilai</h3>
              <p>
                Our most popular packages include Goa beach holidays, Kerala backwater tours, Rajasthan
                heritage circuits, Kashmir valley trips, and international destinations like Thailand,
                Dubai, Singapore, and Bali. We also specialize in honeymoon packages, family vacations,
                group tours, and corporate travel.
              </p>
              <p>
                Contact us today at <strong>+91 94061 82174</strong> or visit our office in Bhilai to
                discuss your travel plans. We're open 10 AM to 9 PM, every day.
              </p>
            </div>
          </div>
        </section>
        <RelatedServices mode="packages" />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default TourPackagesBhilai;
