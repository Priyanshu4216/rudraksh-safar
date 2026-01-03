import { Plane, Train, Hotel, Bus, FileText, Stamp, Ship } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: Plane,
    title: 'Flight Tickets',
    description: 'Domestic & international flight bookings at best prices',
  },
  {
    icon: Train,
    title: 'Train Tickets',
    description: 'Hassle-free train reservations across India',
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description: 'Premium hotels & resorts at competitive rates',
  },
  {
    icon: Bus,
    title: 'Bus & Cab Booking',
    description: 'Comfortable road travel solutions',
  },
  {
    icon: Ship,
    title: 'Cruise Booking',
    description: 'Luxury cruise packages for unforgettable voyages',
  },
  {
    icon: FileText,
    title: 'Visa Consultancy',
    description: 'Expert guidance for all visa applications',
  },
  {
    icon: Stamp,
    title: 'Passport Consultancy',
    description: 'Quick passport services & renewals',
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

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-muted/30 relative overflow-hidden" aria-labelledby="services-heading">
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
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">
              Our Services
            </span>
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
              initial={{ opacity: 0, y: 80, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5, 
                z: 50,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="glass-card p-8 h-full group hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Animated hover gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-secondary" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Animated corner accent */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-secondary/20 to-transparent rounded-tl-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
