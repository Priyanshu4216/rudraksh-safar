import { Sparkles, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '@/assets/hero-video.mp4';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // 3D Parallax transforms
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);
  
  // Content parallax - moves faster than video
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  // 3D perspective rotation
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 15]);
  
  // Stats parallax - different speeds for depth effect
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Badge parallax
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const badgeScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Video Background with 3D Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          scale: videoScale,
          y: videoY,
          opacity: videoOpacity,
        }}
      >
        <motion.div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        >
          <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-hidden="true"
  title="Rudraksh Safar - Beautiful travel destinations background video"
  onCanPlay={() => setVideoLoaded(true)}
  className={`w-full h-full object-cover scale-110 transition-opacity duration-500 ${
    videoLoaded ? 'opacity-100' : 'opacity-0'
  }`}
>
  <source src={heroVideo} type="video/mp4" />
</video>

        </motion.div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/5" />
      </motion.div>

      {/* Animated Glow Orbs with parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      >
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
      </motion.div>

      {/* Animated Grid Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--secondary) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          y: useTransform(scrollYProgress, [0, 1], [0, 50])
        }}
      />

      {/* Main Content with 3D Transform */}
      <motion.div 
        className="container relative z-10 text-center pt-20"
        style={{ 
          y: contentY,
          opacity: contentOpacity,
          scale: contentScale,
          rotateX: rotateX,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Animated Badge with separate parallax */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-10 border border-white/20 group hover:border-secondary/60 transition-all duration-500 cursor-default"
            style={{ y: badgeY, scale: badgeScale }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                <div className="absolute inset-0 w-5 h-5 bg-secondary/30 blur-md animate-pulse" />
              </div>
              <span className="text-sm font-medium text-white tracking-wide">Premium Travel Experiences</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-secondary/80 animate-spin" style={{ animationDuration: '15s' }} />
              <span className="text-sm text-white/80">Since 2015</span>
            </div>
          </motion.div>

          {/* Main Headline with Staggered 3D Animation */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[0.9] drop-shadow-2xl"
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span 
              className="block overflow-hidden"
              initial={{ opacity: 0, y: 60, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore
            </motion.span>
            <motion.span 
              className="block overflow-hidden mt-2"
              initial={{ opacity: 0, y: 60, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Beyond{' '}
              <span className="relative inline-block">
                <span className="text-secondary drop-shadow-[0_0_30px_hsl(var(--secondary)/0.5)]">Horizons</span>
              </span>
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Discover handcrafted journeys to India's sacred destinations and exotic international escapes. 
            <span className="text-secondary font-medium"> Your adventure awaits.</span>
          </motion.p>

          {/* CTA Buttons with 3D hover effect */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, z: 20 }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button
                onClick={() => handleScroll('#packages')}
                className="btn-gold text-base px-10 py-7 group relative overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3 text-lg font-semibold">
                  Explore Packages
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </motion.div>
            
          </motion.div>

          {/* Stats Row with Staggered 3D Animation */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
            style={{ y: statsY, opacity: statsOpacity }}
          >
            {[
              { value: '50+', label: 'Destinations', delay: 0 },
              { value: '10+', label: 'Years Experience', delay: 0.1 },
              { value: '1000+', label: 'Happy Travelers', delay: 0.2 },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center group cursor-default relative"
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + stat.delay }}
                whileHover={{ scale: 1.1, z: 30 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 backdrop-blur-sm" />
                <p className="text-4xl md:text-5xl font-serif font-bold text-secondary group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_20px_hsl(var(--secondary)/0.4)]">
                  {stat.value}
                </p>
                <p className="text-sm text-white/80 mt-2 tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
