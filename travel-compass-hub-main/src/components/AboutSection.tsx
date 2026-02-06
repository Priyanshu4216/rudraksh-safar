import { Shield, Award, Heart, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const features = [
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Your safety and peace of mind are our top priorities on every journey.',
    schemaType: "EthicsPolicy"
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Experienced travel professionals dedicated to curating unforgettable journeys.',
    schemaType: "knowsAbout"
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every trip is tailored to your preferences, interests, and travel style.',
    schemaType: "CustomerSupport"
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance ensures you\'re never alone on your adventures.',
    schemaType: "AvailableService"
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // 3D transforms for images
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Content reveal
  const contentX = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Staggered feature cards
  const featureY = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  // Entity Schema
  const entitySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://rudrakshsafar.com/#travelagency",
    "name": "Rudraksh Safar",
    "foundingDate": "2015",
    "knowsAbout": ["Domestic Tours", "International Packages", "Visa Consultation", "Train Booking"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhilai",
      "addressRegion": "Chhattisgarh",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Bhilai" },
      { "@type": "City", "name": "Durg" },
      { "@type": "City", "name": "Raipur" }
    ],
    "description": "Rudraksh Safar is a trusted travel agency in Bhilai, Chhattisgarh, established in 2015. We specialize in domestic and international tour packages, flight bookings, and visa services."
  };

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-muted/30 overflow-hidden" aria-labelledby="about-heading">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(entitySchema)}
        </script>
      </Helmet>

      {/* AI Entity Summary (Hidden) */}
      <div className="sr-only">
        <h2>Who is Rudraksh Safar?</h2>
        <p>
          Rudraksh Safar is Bhilai’s premier travel agency, serving the Chhattisgarh region since 2015.
          Located in the heart of Bhilai-Durg, we specialize in personalized domestic and international holiday packages,
          connecting travelers from Raipur Airport to destinations worldwide.
          Our expert team provides end-to-end travel management, including visa assistance and train bookings.
        </p>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid with 3D Effect */}
          <motion.div
            className="relative"
            style={{
              scale: imageScale,
              opacity: imageOpacity,
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Travelers exploring nature"
                    loading="lazy"
                    className="rounded-2xl h-48 w-full object-cover shadow-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop"
                    alt="Beautiful beach destination"
                    loading="lazy"
                    className="rounded-2xl h-64 w-full object-cover shadow-xl"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                    alt="Road trip adventure"
                    loading="lazy"
                    className="rounded-2xl h-64 w-full object-cover shadow-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop"
                    alt="Cultural experience"
                    loading="lazy"
                    className="rounded-2xl h-48 w-full object-cover shadow-xl"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass-card p-6 max-w-xs hidden lg:block shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-foreground">10+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Years of Excellence</p>
                  <p className="text-sm text-muted-foreground">Trusted in Bhilai since 2015</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content with slide-in effect */}
          <motion.div
            style={{ x: contentX, opacity: contentOpacity }}
          >
            <motion.span
              className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Rudraksh Safar
            </motion.span>
            <motion.h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Your Journey Begins with Trust & Expertise
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Since 2015, Rudraksh Safar has been the most trusted travel partner for families in Bhilai and Durg.
              We believe that travel is not just about destinations, but about seamless journeys crafted with local expertise
              and global standards.
            </motion.p>
            <motion.p
              className="text-muted-foreground mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our expert team in Bhilai personally curates each itinerary, ensuring every detail — from flight connections
              out of Raipur to visa approvals — is handled with precision. We open doors to experiences that turn vacations into lifelong memories.
            </motion.p>

            {/* Feature Grid with 3D cards */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              style={{ y: featureY }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-colors"
                  initial={{ opacity: 0, y: 40, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
