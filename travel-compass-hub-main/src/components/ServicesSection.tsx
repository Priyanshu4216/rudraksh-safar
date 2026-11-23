import { Plane, Train, Hotel, Bus, FileText, Stamp, Ship, MapPin, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Domestic & international flights at corporate rates.',
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
    description: 'Handpicked luxury hotels and premium resorts.',
    schemaDescription: "Hotel and resort booking service for domestic and international destinations.",
    link: '/travel-services/hotel-booking',
    serviceType: "LodgingReservation",
    color: "from-purple-500 to-pink-400 shadow-purple-500/30"
  },
  {
    icon: Bus,
    title: 'Luxury Transfers',
    description: 'Premium cabs and luxury buses for travel.',
    schemaDescription: "Intercity bus and taxi booking service provider in Chhattisgarh.",
    link: '/travel-services/cab-rental',
    serviceType: "TaxiService",
    color: "from-emerald-500 to-teal-400 shadow-emerald-500/30"
  },
  {
    icon: Ship,
    title: 'Cruise Voyages',
    description: 'Luxury cruise packages & ocean holiday voyages.',
    schemaDescription: "Booking agent for luxury cruises including Cordelia and international liners.",
    link: '/travel-services/cruise-booking',
    serviceType: "TravelAgency",
    color: "from-cyan-500 to-blue-400 shadow-cyan-500/30"
  },
  {
    icon: FileText,
    title: 'Visa Assistance',
    description: 'Hassle-free visa processing for all countries.',
    schemaDescription: "Visa consultant in Bhilai for tourist, student, and business visas.",
    link: '/travel-services/visa-assistance',
    serviceType: "AdministrativeService",
    color: "from-rose-500 to-red-400 shadow-rose-500/30"
  },
  {
    icon: Stamp,
    title: 'Passport Services',
    description: 'Expedited passport application & renewal support.',
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
    <section ref={sectionRef} id="services" className="py-10 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
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

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-2 block">
            Comprehensive Travel Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-3 leading-tight transition-colors">
            Everything You Need <span className="text-primary italic">for Your Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-light leading-relaxed transition-colors">
            We go beyond just bookings. We provide end-to-end travel management to ensure your peace of mind.
          </p>
        </motion.div>

        {/* Services in One Single Line (8-column on desktop, horizontal scroll on mobile) */}
        <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-2.5 sm:gap-3 pb-2 pt-1 lg:pb-0 lg:grid lg:grid-cols-8 lg:gap-2 xl:gap-3 snap-x">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="h-full min-w-[130px] sm:min-w-[140px] lg:min-w-0 flex-1 snap-start"
            >
              <Link
                to={service.link}
                className="block h-full group outline-none"
              >
                <div className="h-full bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-2xl p-3.5 sm:p-4 lg:p-2.5 xl:p-3.5 shadow-md hover:shadow-xl dark:shadow-2xl hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">

                  {/* Subtle Top Border Glow */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Glow Behind the Icon */}
                  <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br ${service.color} rounded-full blur-[25px] opacity-10 dark:opacity-20 group-hover:opacity-25 dark:group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

                  {/* Icon Box */}
                  <div className={`w-10 h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-2.5 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-white shadow-md`}>
                    <service.icon className="w-5 h-5 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5" />
                  </div>

                  <h3 className="text-xs sm:text-sm lg:text-[12px] xl:text-[13px] font-serif font-bold text-slate-900 dark:text-white mb-1.5 leading-snug group-hover:text-primary transition-colors text-center line-clamp-1">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-[11px] lg:text-[10px] xl:text-[11px] leading-tight mb-2.5 flex-grow transition-colors text-center line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-center text-[10px] xl:text-[11px] font-bold text-primary uppercase tracking-wider opacity-75 group-hover:opacity-100 transition-opacity mt-auto">
                    <span>Details</span> <ArrowUpRight className="ml-0.5 w-3 h-3" />
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
