
import { Plane, Train, Hotel, Bus, FileText, Stamp, Ship, MapPin, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Domestic & international flights at unbeatable corporate rates.',
    schemaDescription: "Authorized flight booking agent in Bhilai for domestic and international airlines.",
    link: '/flight-booking-bhilai',
    serviceType: "FlightReservation"
  },
  {
    icon: Train,
    title: 'Rail Reservations',
    description: 'Confirmed Tatkal & general tickets with IRCTC authorization.',
    schemaDescription: "IRCTC authorized train ticket booking agent in Bhilai and Raipur for Tatkal and general quota.",
    link: '/train-booking-bhilai',
    serviceType: "TrainReservation"
  },
  {
    icon: Hotel,
    title: 'Premium Stays',
    description: 'Handpicked luxury hotels and resorts for your comfort.',
    schemaDescription: "Hotel and resort booking service for domestic and international destinations.",
    link: '/hotel-booking',
    serviceType: "LodgingReservation"
  },
  {
    icon: Bus,
    title: 'Luxury Transfers',
    description: 'Premium cabs and volatility buses for seamless travel.',
    schemaDescription: "Intercity bus and taxi booking service provider in Chhattisgarh.",
    link: '/cab-rental',
    serviceType: "TaxiService"
  },
  {
    icon: Ship,
    title: 'Cruise Voyages',
    description: 'Experience the ocean like never before with our cruise packages.',
    schemaDescription: "Booking agent for luxury cruises including Cordelia and international liners.",
    link: '/cruise-booking',
    serviceType: "TravelAgency"
  },
  {
    icon: FileText,
    title: 'Visa Assistance',
    description: 'Hassle-free visa processing for all major countries.',
    schemaDescription: "Visa consultant in Bhilai for tourist, student, and business visas.",
    link: '/visa-guide',
    serviceType: "AdministrativeService"
  },
  {
    icon: Stamp,
    title: 'Passport Services',
    description: 'Expedited passport application and renewal support.',
    schemaDescription: "Passport application and renewal assistance service in Durg and Bhilai.",
    link: '/passport-guide',
    serviceType: "AdministrativeService"
  },
  {
    icon: MapPin,
    title: 'Visit Our Lounge',
    description: 'Plan your trip over coffee at our Bhilai office.',
    schemaDescription: "Physical travel agency office in Bhilai for face-to-face consultation.",
    link: '/travel-agent-bhilai',
    serviceType: "TravelAgency"
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

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
    <section ref={sectionRef} id="services" className="section-padding bg-depth-2 relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            Comprehensive Travel Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Everything You Need <span className="text-secondary italic">for Your Journey</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            We go beyond just bookings. We provide end-to-end travel management to ensure your peace of mind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link
                to={service.link}
                className="block h-full group"
              >
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-4 md:p-8 hover:bg-white/10 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Centered Content Container */}
                    <div className="flex-grow flex flex-col items-center text-center justify-center">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-navy-light flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 text-gold shadow-lg shadow-black/20">
                        <service.icon className="w-5 h-5 md:w-7 md:h-7" />
                      </div>

                      <h3 className="text-base md:text-xl font-serif font-bold text-white mb-2 md:mb-3 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 max-w-[250px]">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Link - Centered */}
                    <div className="flex items-center justify-center text-[10px] md:text-xs font-bold text-gold uppercase tracking-wider opacity-80 md:opacity-60 group-hover:opacity-100 transition-opacity pt-2 border-t border-white/5 w-full">
                      Details <ArrowUpRight className="ml-1 w-3 h-3" />
                    </div>
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

