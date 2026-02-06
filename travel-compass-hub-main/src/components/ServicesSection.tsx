import { Plane, Train, Hotel, Bus, FileText, Stamp, Ship } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: Plane,
    title: 'Flight Tickets',
    description: 'Domestic & international flight bookings at best prices',
    schemaDescription: "Authorized flight booking agent in Bhilai for domestic and international airlines.",
    link: '/flight-booking-bhilai',
    serviceType: "FlightReservation"
  },
  {
    icon: Train,
    title: 'Train Tickets',
    description: 'Hassle-free train reservations across India',
    schemaDescription: "IRCTC authorized train ticket booking agent in Bhilai and Raipur for Tatkal and general quota.",
    link: '/train-booking-bhilai',
    serviceType: "TrainReservation"
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description: 'Premium hotels & resorts at competitive rates',
    schemaDescription: "Hotel and resort booking service for domestic and international destinations.",
    link: '/hotel-booking',
    serviceType: "LodgingReservation"
  },
  {
    icon: Bus,
    title: 'Bus & Cab Booking',
    description: 'Comfortable road travel solutions',
    schemaDescription: "Intercity bus and taxi booking service provider in Chhattisgarh.",
    link: '/cab-rental',
    serviceType: "TaxiService"
  },
  {
    icon: Ship,
    title: 'Cruise Booking',
    description: 'Luxury cruise packages for unforgettable voyages',
    schemaDescription: "Booking agent for luxury cruises including Cordelia and international liners.",
    link: '/cruise-booking',
    serviceType: "TravelAgency"
  },
  {
    icon: FileText,
    title: 'Visa Consultancy',
    description: 'Expert guidance for all visa applications',
    schemaDescription: "Visa consultant in Bhilai for tourist, student, and business visas.",
    link: '/visa-guide',
    serviceType: "AdministrativeService"
  },
  {
    icon: Stamp,
    title: 'Passport Consultancy',
    description: 'Quick passport services & renewals',
    schemaDescription: "Passport application and renewal assistance service in Durg and Bhilai.",
    link: '/passport-guide',
    serviceType: "AdministrativeService"
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Header 3D reveal
  const headerY = useTransform(scrollYProgress, [0, 0.2], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  // Schema Generation
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Travel Services in Bhilai & Raipur",
    "description": "Comprehensive travel management services provided by Rudraksh Safar for residents of Chhattisgarh.",
    "numberOfItems": services.length,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.schemaDescription,
        "provider": {
          "@type": "TravelAgency",
          "@id": "https://rudrakshsafar.com/#travelagency",
          "name": "Rudraksh Safar",
          "url": "https://rudrakshsafar.com",
          "areaServed": [
            { "@type": "City", "name": "Bhilai" },
            { "@type": "City", "name": "Raipur" },
            { "@type": "AdministrativeArea", "name": "Chhattisgarh" }
          ]
        },
        "serviceType": service.serviceType,
        "url": `https://rudrakshsafar.com${service.link}`
      }
    }))
  };

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-muted/30 relative overflow-hidden" aria-labelledby="services-heading">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* AI Context Summary (Hidden but Crawlable) */}
      <div className="sr-only">
        <h2>Our Travel Services for Chhattisgarh</h2>
        <p>
          Rudraksh Safar provides a complete range of travel services for residents of Bhilai, Durg, and Raipur.
          From confirmed IRCTC train ticket bookings to international flight reservations and visa consultancy,
          our local office ensures seamless travel management. We also specialize in luxury cruise bookings and
          road travel solutions across Chhattisgarh.
        </p>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      >
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </motion.div>

      <div className="container relative z-10">
        {/* Header with 3D zoom effect */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          style={{ y: headerY, opacity: headerOpacity, scale: headerScale }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-secondary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.span
              className="text-secondary font-medium tracking-widest uppercase text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.span>
            <motion.div
              className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-secondary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Complete Travel <span className="text-secondary">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From tickets to visas, we handle everything for your seamless travel experience
          </p>
        </motion.div>

        {/* Services Grid with 3D card effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <Link
                to={service.link}
                className="block h-full"
                aria-label={`Book ${service.title} in Bhilai & Raipur`}
              >
                <div className="glass-card p-8 h-full group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-pointer">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
