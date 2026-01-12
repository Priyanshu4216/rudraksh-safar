import { MapPin, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PHONE_NUMBER = '919229150311';

const domesticPackages = [
  {
    id: 1,
    title: 'Kashmir Paradise',
    location: 'Jammu & Kashmir, India',
    duration: '6 Days / 5 Nights',
    price: '₹22,999',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop',
    tag: 'Romantic',
    slug: 'kashmir',
  },
  {
    id: 2,
    title: 'Andaman Beach Holiday',
    location: 'Andaman Islands, India',
    duration: '6 Days / 5 Nights',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    tag: 'Beach',
    slug: 'andaman',
  },
  {
    id: 3,
    title: 'Shimla Manali Adventure',
    location: 'Himachal Pradesh, India',
    duration: '7 Days / 6 Nights',
    price: '₹15,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    tag: 'Hill Station',
    slug: 'shimla-manali',
  },
];

const internationalPackages = [
  {
    id: 4,
    title: 'Phuket Beach Paradise',
    location: 'Phuket, Thailand',
    duration: '5 Days / 4 Nights',
    price: '₹42,999',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2001&auto=format&fit=crop',
    tag: 'Beach Escape',
    slug: 'phuket',
  },
  {
    id: 5,
    title: 'Singapore City Explorer',
    location: 'Singapore',
    duration: '5 Days / 4 Nights',
    price: '₹58,999',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop',
    tag: 'City Break',
    slug: 'singapore',
  },
  {
    id: 6,
    title: 'Dubai Extravaganza',
    location: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    price: '₹54,999',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
    tag: 'Luxury',
    slug: 'dubai',
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof domesticPackages[0]; index: number }) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hi! I'm interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.price}. Please share more details.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Link to={`/package/${pkg.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.7, 
          delay: index * 0.15,
          type: "spring",
          stiffness: 80
        }}
        whileHover={{ 
          scale: 1.02, 
          rotateY: 3,
          z: 30,
          transition: { duration: 0.3 }
        }}
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        <div className="group glass-card overflow-hidden hover:shadow-elevated transition-all duration-500 cursor-pointer">
          {/* Image with 3D tilt */}
          <motion.div 
            className="relative h-64 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={pkg.image}
              alt={`${pkg.title} - ${pkg.location} travel package, ${pkg.duration}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <motion.span 
              className="absolute top-4 left-4 bg-secondary px-3 py-1 rounded-full text-sm font-medium text-secondary-foreground"
              whileHover={{ scale: 1.1 }}
            >
              {pkg.tag}
            </motion.span>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-serif font-bold text-primary-foreground mb-1">
                {pkg.title}
              </h3>
              <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4" />
                {pkg.location}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {pkg.duration}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Starting from</p>
                <motion.p 
                  className="text-2xl font-serif font-bold text-secondary"
                  whileHover={{ scale: 1.05 }}
                >
                  {pkg.price}
                </motion.p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleWhatsApp}
                  className="btn-ocean px-6 py-3 text-sm"
                >
                  Inquire
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const PackagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [80, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section ref={sectionRef} id="packages" className="section-padding overflow-hidden" aria-labelledby="packages-heading">
      <div className="container">
        {/* Header with 3D reveal */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <motion.span 
            className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Our Packages
          </motion.span>
          <motion.h2 
            id="packages-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Curated Journeys for Every Explorer
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From serene backwaters to majestic mountains, discover handpicked travel experiences 
            designed to inspire and delight.
          </motion.p>
        </motion.div>

        {/* Tabs with animation */}
        <Tabs defaultValue="domestic" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TabsList className="flex justify-center gap-2 mb-12 bg-transparent">
              <TabsTrigger
                value="domestic"
                className="px-8 py-3 rounded-full text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                Domestic Tours
              </TabsTrigger>
              <TabsTrigger
                value="international"
                className="px-8 py-3 rounded-full text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                International Tours
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="domestic" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domesticPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="international" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All CTA with 3D effect */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link to="/domestic-packages">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                className="px-8 py-6 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                View Domestic Packages
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
          <Link to="/international-packages">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="btn-gold px-8 py-6 text-base group">
                View International Packages
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
