import { Shield, Award, Heart, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Your safety and peace of mind are our top priorities on every journey.',
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Experienced travel professionals dedicated to curating unforgettable journeys.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every trip is tailored to your preferences, interests, and travel style.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance ensures you\'re never alone on your adventures.',
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
  const imageRotateY = useTransform(scrollYProgress, [0, 0.5], [-15, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Content reveal
  const contentX = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Staggered feature cards
  const featureY = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-muted/30 overflow-hidden" aria-labelledby="about-heading">
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
                <div className="image-zoom rounded-2xl overflow-hidden h-48 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Travelers exploring nature"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="image-zoom rounded-2xl overflow-hidden h-64 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop"
                    alt="Beautiful beach destination"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="image-zoom rounded-2xl overflow-hidden h-64 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                    alt="Road trip adventure"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="image-zoom rounded-2xl overflow-hidden h-48 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop"
                    alt="Cultural experience"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
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
                  <p className="text-sm text-muted-foreground">Creating dream vacations</p>
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
              Since 2015, Rudraksh Safar has been crafting extraordinary travel experiences for adventurers, 
              families, and dreamers alike. We believe that travel should be transformative — not just a 
              destination, but a journey that enriches your soul and creates lifelong memories.
            </motion.p>
            <motion.p 
              className="text-muted-foreground mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our team of passionate travel experts personally curates each itinerary, ensuring every detail 
              is thoughtfully planned. From hidden gems to iconic landmarks, we open doors to experiences 
              that most travelers never discover.
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
