
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
    serviceType: "FlightReservation",
    color: "from-blue-500 to-cyan-400 shadow-blue-500/30"
  },
  {
    icon: Train,
    title: 'Rail Reservations',
    description: 'Confirmed Tatkal & general tickets with IRCTC authorization.',
    schemaDescription: "IRCTC authorized train ticket booking agent in Bhilai and Raipur for Tatkal and general quota.",
    link: '/train-booking-bhilai',
    serviceType: "TrainReservation",
    color: "from-orange-500 to-amber-400 shadow-orange-500/30"
  },
  {
    icon: Hotel,
    title: 'Premium Stays',
    description: 'Handpicked luxury hotels and resorts for your comfort.',
    schemaDescription: "Hotel and resort booking service for domestic and international destinations.",
    link: '/travel-services/hotel-booking',
    serviceType: "LodgingReservation",
    color: "from-purple-500 to-pink-400 shadow-purple-500/30"
  },
  {
    icon: Bus,
    title: 'Luxury Transfers',
    description: 'Premium cabs and volatility buses for seamless travel.',
    schemaDescription: "Intercity bus and taxi booking service provider in Chhattisgarh.",
    link: '/travel-services/cab-rental',
    serviceType: "TaxiService",
    color: "from-emerald-500 to-teal-400 shadow-emerald-500/30"
  },
  {
    icon: Ship,
    title: 'Cruise Voyages',
    description: 'Experience the ocean like never before with our cruise packages.',
    schemaDescription: "Booking agent for luxury cruises including Cordelia and international liners.",
    link: '/travel-services/cruise-booking',
    serviceType: "TravelAgency",
    color: "from-cyan-500 to-blue-400 shadow-cyan-500/30"
  },
  {
    icon: FileText,
    title: 'Visa Assistance',
    description: 'Hassle-free visa processing for all major countries.',
    schemaDescription: "Visa consultant in Bhilai for tourist, student, and business visas.",
    link: '/travel-services/visa-assistance',
    serviceType: "AdministrativeService",
    color: "from-rose-500 to-red-400 shadow-rose-500/30"
  },
  {
    icon: Stamp,
    title: 'Passport Services',
    description: 'Expedited passport application and renewal support.',
    schemaDescription: "Passport application and renewal assistance service in Durg and Bhilai.",
    link: '/travel-services/passport-assistance',
    serviceType: "AdministrativeService",
    color: "from-indigo-500 to-purple-400 shadow-indigo-500/30"
  },
  {
    icon: MapPin,
    title: 'Visit Our Lounge',
    description: 'Plan your trip over coffee at our Bhilai office.',
    schemaDescription: "Physical travel agency office in Bhilai for face-to-face consultation.",
    link: '/travel-agent-bhilai',
    serviceType: "TravelAgency",
    color: "from-yellow-500 to-amber-500 shadow-yellow-500/30"
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
    <section ref={sectionRef} id="services" className="py-12 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4 block">
            Comprehensive Travel Solutions
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors">
            Everything You Need <span className="text-primary italic">for Your Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed transition-colors">
            We go beyond just bookings. We provide end-to-end travel management to ensure your peace of mind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="block h-full group outline-none"
              >
                <div className="h-full bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl dark:shadow-2xl hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">

                  {/* Subtle Top Border Glow */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Glow Behind the Icon */}
                  <div className={`absolute top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full blur-[50px] opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-white shadow-lg`}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 flex-grow transition-colors">
                    {service.description}
                  </p>

                  <div className="flex items-center text-xs font-bold text-primary uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity mt-auto">
                    Details <ArrowUpRight className="ml-1 w-4 h-4" />
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

