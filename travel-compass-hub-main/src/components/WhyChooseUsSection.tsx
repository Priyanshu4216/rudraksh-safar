
import { Compass, Shield, Sparkles, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: Sparkles,
    title: 'Curated Excellence',
    description: 'Handpicked experiences that meet our strict luxury standards.',
  },
  {
    icon: Shield,
    title: 'Uncompromising Safety',
    description: 'Verified partners and 24/7 support for your peace of mind.',
  },
  {
    icon: Users,
    title: 'Personalized Care',
    description: 'Dedicated travel designers crafting your unique journey.',
  },
  {
    icon: Award,
    title: 'Best-in-Class Value',
    description: 'Premium experiences at transparent, competitive prices.',
  },
  {
    icon: Compass,
    title: 'Local Expertise',
    description: 'Deep knowledge of Chhattisgarh connectivity for seamless logistics.',
  },
  {
    icon: Clock,
    title: 'Time-Saving Logistics',
    description: 'We handle every detail so you can focus on the experience.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-depth-2 relative overflow-hidden" aria-labelledby="why-us-heading">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            The Rudraksh Difference
          </span>
          <h2 id="why-us-heading" className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Why Discerning Travelers <br /><span className="text-secondary italic">Choose Us</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            We don't just book trips; we architect memories. Experience the difference of traveling with true professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-4 md:p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-navy-light flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-gold/30">
                <reason.icon className="w-5 h-5 md:w-7 md:h-7 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-base md:text-xl font-serif font-bold text-white mb-2 md:mb-3 group-hover:text-gold transition-colors">
                {reason.title}
              </h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed group-hover:text-white/80 transition-colors line-clamp-3 md:line-clamp-none">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

