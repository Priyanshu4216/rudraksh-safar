import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PageLoaderProps {
  type: 'domestic' | 'international';
}

const DomesticLoader = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const scenes = ['yak', 'bike', 'boat'];
  const sceneLabels = ['Himalayan Trails', 'Mountain Adventures', 'Goan Waters'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Scene Container */}
      <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30">
        {/* Ground/Water line */}
        <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        
        <AnimatePresence mode="wait">
          {/* Scene 1: Yak Walking in Himalayas */}
          {currentScene === 0 && (
            <motion.div
              key="yak"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mountains background */}
              <svg className="absolute bottom-8 left-0 w-full h-24 text-primary/30" viewBox="0 0 300 100">
                <polygon points="0,100 40,40 80,70 120,20 160,60 200,30 240,50 280,25 300,60 300,100" fill="currentColor" />
              </svg>
              
              {/* Snow caps */}
              <svg className="absolute bottom-8 left-0 w-full h-24 text-secondary/40" viewBox="0 0 300 100">
                <polygon points="115,20 120,20 125,30 115,28" fill="currentColor" />
                <polygon points="195,30 200,30 205,38 195,36" fill="currentColor" />
                <polygon points="275,25 280,25 285,35 275,32" fill="currentColor" />
              </svg>

              {/* Animated Yak */}
              <motion.svg
                className="absolute bottom-6 text-foreground"
                width="60"
                height="40"
                viewBox="0 0 60 40"
                animate={{ x: [-30, 300] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                {/* Yak body */}
                <ellipse cx="30" cy="22" rx="18" ry="12" fill="currentColor" opacity="0.9" />
                {/* Yak head */}
                <circle cx="48" cy="16" r="8" fill="currentColor" />
                {/* Horns */}
                <path d="M52 10 Q58 4 54 8" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M50 8 Q54 2 52 6" stroke="currentColor" strokeWidth="2" fill="none" />
                {/* Legs - animated */}
                <motion.g
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                  style={{ transformOrigin: '20px 28px' }}
                >
                  <rect x="18" y="28" width="4" height="10" rx="2" fill="currentColor" />
                </motion.g>
                <motion.g
                  animate={{ rotate: [10, -10, 10] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                  style={{ transformOrigin: '28px 28px' }}
                >
                  <rect x="26" y="28" width="4" height="10" rx="2" fill="currentColor" />
                </motion.g>
                <motion.g
                  animate={{ rotate: [10, -10, 10] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                  style={{ transformOrigin: '36px 28px' }}
                >
                  <rect x="34" y="28" width="4" height="10" rx="2" fill="currentColor" />
                </motion.g>
                <motion.g
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                  style={{ transformOrigin: '42px 28px' }}
                >
                  <rect x="40" y="28" width="4" height="10" rx="2" fill="currentColor" />
                </motion.g>
                {/* Tail */}
                <motion.path
                  d="M12 20 Q6 22 8 28"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  animate={{ d: ["M12 20 Q6 22 8 28", "M12 20 Q4 20 6 26", "M12 20 Q6 22 8 28"] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </motion.svg>
            </motion.div>
          )}

          {/* Scene 2: Bike in Mountains (Ladakh) */}
          {currentScene === 1 && (
            <motion.div
              key="bike"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mountains */}
              <svg className="absolute bottom-8 left-0 w-full h-28 text-primary/40" viewBox="0 0 300 120">
                <polygon points="0,120 50,50 100,80 150,30 200,70 250,40 300,80 300,120" fill="currentColor" />
              </svg>

              {/* Road */}
              <div className="absolute bottom-6 left-0 right-0 h-4 bg-gradient-to-r from-muted/50 via-muted to-muted/50" />
              <div className="absolute bottom-7 left-0 right-0 h-0.5 bg-secondary/50" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, hsl(var(--secondary)) 10px, hsl(var(--secondary)) 20px)' }} />

              {/* Animated Motorcycle */}
              <motion.svg
                className="absolute bottom-6 text-secondary"
                width="70"
                height="45"
                viewBox="0 0 70 45"
                animate={{ x: [-40, 320] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              >
                {/* Back wheel */}
                <motion.circle
                  cx="15" cy="35" r="10"
                  stroke="currentColor" strokeWidth="3" fill="none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '15px 35px' }}
                />
                <circle cx="15" cy="35" r="3" fill="currentColor" />
                
                {/* Front wheel */}
                <motion.circle
                  cx="55" cy="35" r="10"
                  stroke="currentColor" strokeWidth="3" fill="none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '55px 35px' }}
                />
                <circle cx="55" cy="35" r="3" fill="currentColor" />
                
                {/* Body frame */}
                <path d="M15 35 L25 20 L45 20 L55 35" stroke="currentColor" strokeWidth="3" fill="none" />
                <path d="M25 20 L30 10 L40 10 L45 20" stroke="currentColor" strokeWidth="2" fill="hsl(var(--primary))" />
                
                {/* Rider */}
                <circle cx="32" cy="5" r="5" fill="hsl(var(--foreground))" />
                <path d="M32 10 L32 20 L28 28 M32 20 L36 28 M32 14 L38 18 M32 14 L26 20" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />
                
                {/* Handlebars */}
                <path d="M42 12 L48 8" stroke="currentColor" strokeWidth="2" />
              </motion.svg>
            </motion.div>
          )}

          {/* Scene 3: Banana Boat in Goa */}
          {currentScene === 2 && (
            <motion.div
              key="boat"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Sun */}
              <motion.div
                className="absolute top-4 right-8 w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/70"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Water waves */}
              <motion.svg
                className="absolute bottom-0 left-0 w-full h-16 text-primary/40"
                viewBox="0 0 300 60"
                animate={{ x: [-20, 0, -20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M0 30 Q25 20 50 30 T100 30 T150 30 T200 30 T250 30 T300 30 T350 30 L350 60 L0 60 Z" fill="currentColor" />
              </motion.svg>
              <motion.svg
                className="absolute bottom-0 left-0 w-full h-12 text-primary/30"
                viewBox="0 0 300 50"
                animate={{ x: [0, -20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M0 25 Q25 15 50 25 T100 25 T150 25 T200 25 T250 25 T300 25 T350 25 L350 50 L0 50 Z" fill="currentColor" />
              </motion.svg>

              {/* Speed boat pulling */}
              <motion.svg
                className="absolute bottom-10 text-foreground"
                width="40"
                height="25"
                viewBox="0 0 40 25"
                animate={{ x: [-20, 320] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <path d="M0 15 L35 15 L40 20 L0 20 Z" fill="hsl(var(--primary))" />
                <rect x="15" y="8" width="12" height="7" rx="2" fill="hsl(var(--foreground))" />
                {/* Rope */}
                <motion.path
                  d="M0 17 L-30 17"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                />
              </motion.svg>

              {/* Banana Boat */}
              <motion.svg
                className="absolute bottom-8"
                width="80"
                height="35"
                viewBox="0 0 80 35"
                animate={{ x: [-80, 280], y: [0, -2, 0, 2, 0] }}
                transition={{ 
                  x: { duration: 3, repeat: Infinity, ease: "linear" },
                  y: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Banana shape */}
                <ellipse cx="40" cy="25" rx="35" ry="8" fill="hsl(var(--secondary))" />
                <ellipse cx="40" cy="23" rx="32" ry="5" fill="hsl(var(--secondary) / 0.7)" />
                
                {/* People on banana */}
                {[0, 1, 2, 3].map((i) => (
                  <g key={i}>
                    <circle cx={18 + i * 16} cy="14" r="4" fill="hsl(var(--foreground))" />
                    <rect x={16 + i * 16} y="18" width="4" height="6" rx="1" fill="hsl(var(--foreground))" />
                  </g>
                ))}
                
                {/* Splash effect */}
                <motion.g
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                >
                  <circle cx="75" cy="28" r="2" fill="hsl(var(--secondary))" opacity="0.6" />
                  <circle cx="78" cy="25" r="1.5" fill="hsl(var(--secondary))" opacity="0.4" />
                </motion.g>
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scene Label */}
      <motion.p
        key={currentScene}
        className="text-secondary font-medium text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {sceneLabels[currentScene]}
      </motion.p>

      {/* Progress dots */}
      <div className="flex gap-2">
        {scenes.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${currentScene === index ? 'bg-secondary' : 'bg-muted-foreground/30'}`}
            animate={{ scale: currentScene === index ? 1.3 : 1 }}
          />
        ))}
      </div>

      <motion.p
        className="text-muted-foreground text-sm tracking-widest uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Discovering India...
      </motion.p>
    </div>
  );
};

const InternationalLoader = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const scenes = ['camel', 'snorkel', 'skydive'];
  const sceneLabels = ['Dubai Desert Safari', 'Maldives Snorkeling', 'Thailand Skydiving'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Scene Container */}
      <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30">
        
        <AnimatePresence mode="wait">
          {/* Scene 1: Camel in Dubai Desert */}
          {currentScene === 0 && (
            <motion.div
              key="camel"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Sun */}
              <div className="absolute top-4 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/60 opacity-80" />
              
              {/* Sand dunes */}
              <svg className="absolute bottom-0 left-0 w-full h-20 text-secondary/40" viewBox="0 0 300 80">
                <path d="M0 40 Q50 20 100 40 T200 35 T300 45 L300 80 L0 80 Z" fill="currentColor" />
              </svg>
              <svg className="absolute bottom-0 left-0 w-full h-16 text-secondary/30" viewBox="0 0 300 60">
                <path d="M0 30 Q75 15 150 30 T300 25 L300 60 L0 60 Z" fill="currentColor" />
              </svg>

              {/* Animated Camel */}
              <motion.svg
                className="absolute bottom-10 text-primary"
                width="80"
                height="55"
                viewBox="0 0 80 55"
                animate={{ x: [-50, 320] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                {/* Camel body */}
                <ellipse cx="40" cy="30" rx="22" ry="14" fill="currentColor" />
                {/* Humps */}
                <ellipse cx="30" cy="20" rx="8" ry="10" fill="currentColor" />
                <ellipse cx="50" cy="22" rx="7" ry="8" fill="currentColor" />
                {/* Neck */}
                <path d="M58 28 Q70 20 68 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                {/* Head */}
                <ellipse cx="70" cy="6" rx="8" ry="5" fill="currentColor" />
                {/* Legs */}
                <motion.rect x="25" y="40" width="5" height="14" rx="2" fill="currentColor"
                  animate={{ rotate: [-8, 8, -8] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                  style={{ transformOrigin: '27px 40px' }}
                />
                <motion.rect x="35" y="40" width="5" height="14" rx="2" fill="currentColor"
                  animate={{ rotate: [8, -8, 8] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                  style={{ transformOrigin: '37px 40px' }}
                />
                <motion.rect x="45" y="40" width="5" height="14" rx="2" fill="currentColor"
                  animate={{ rotate: [-8, 8, -8] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                  style={{ transformOrigin: '47px 40px' }}
                />
                <motion.rect x="55" y="40" width="5" height="14" rx="2" fill="currentColor"
                  animate={{ rotate: [8, -8, 8] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                  style={{ transformOrigin: '57px 40px' }}
                />
                {/* Rider */}
                <circle cx="40" cy="10" r="5" fill="hsl(var(--foreground))" />
                <rect x="38" y="14" width="4" height="8" fill="hsl(var(--foreground))" />
              </motion.svg>
            </motion.div>
          )}

          {/* Scene 2: Snorkeling in Maldives */}
          {currentScene === 1 && (
            <motion.div
              key="snorkel"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Water surface */}
              <motion.div
                className="absolute top-8 left-0 right-0 h-1 bg-primary/30"
                animate={{ scaleX: [1, 1.02, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              
              {/* Bubbles */}
              {[...Array(6)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={50 + i * 35}
                  cy={100}
                  r={3 + Math.random() * 3}
                  fill="hsl(var(--secondary))"
                  opacity={0.4}
                  initial={{ y: 0 }}
                  animate={{ y: -80, opacity: [0.4, 0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  style={{ position: 'absolute' }}
                />
              ))}

              {/* Coral */}
              <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 300 60">
                <path d="M20 60 Q25 40 30 60 Q35 35 40 60" stroke="hsl(var(--secondary))" strokeWidth="4" fill="none" />
                <path d="M80 60 Q90 30 100 60" stroke="hsl(var(--primary))" strokeWidth="5" fill="none" />
                <path d="M150 60 Q155 45 160 60 Q165 40 170 60 Q175 45 180 60" stroke="hsl(var(--secondary))" strokeWidth="3" fill="none" />
                <path d="M230 60 Q240 35 250 60" stroke="hsl(var(--primary))" strokeWidth="4" fill="none" />
              </svg>

              {/* Fish */}
              <motion.svg
                className="absolute"
                width="30"
                height="20"
                viewBox="0 0 30 20"
                animate={{ x: [280, -30], y: [60, 70, 60] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <ellipse cx="15" cy="10" rx="12" ry="7" fill="hsl(var(--secondary))" />
                <polygon points="27,10 35,5 35,15" fill="hsl(var(--secondary))" />
                <circle cx="8" cy="8" r="2" fill="hsl(var(--foreground))" />
              </motion.svg>

              {/* Snorkeler */}
              <motion.svg
                className="absolute text-foreground"
                width="60"
                height="40"
                viewBox="0 0 60 40"
                animate={{ x: [-40, 320], y: [50, 55, 50] }}
                transition={{ 
                  x: { duration: 4, repeat: Infinity, ease: "linear" },
                  y: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Body */}
                <ellipse cx="30" cy="20" rx="15" ry="8" fill="hsl(var(--primary))" />
                {/* Head with mask */}
                <circle cx="48" cy="18" r="8" fill="hsl(var(--foreground))" />
                <rect x="44" y="14" width="10" height="6" rx="2" fill="hsl(var(--primary))" opacity="0.8" />
                {/* Snorkel */}
                <path d="M54 12 L54 2 L58 2" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                {/* Fins */}
                <motion.path
                  d="M10 20 L-5 15 L-5 25 Z"
                  fill="hsl(var(--secondary))"
                  animate={{ rotate: [-15, 15, -15] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  style={{ transformOrigin: '10px 20px' }}
                />
                {/* Arms */}
                <motion.path
                  d="M35 24 L45 30"
                  stroke="hsl(var(--foreground))"
                  strokeWidth="3"
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ transformOrigin: '35px 24px' }}
                />
              </motion.svg>
            </motion.div>
          )}

          {/* Scene 3: Skydiving in Thailand */}
          {currentScene === 2 && (
            <motion.div
              key="skydive"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Clouds */}
              <motion.div
                className="absolute top-4 left-10 w-16 h-8 bg-muted/60 rounded-full"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-12 right-16 w-12 h-6 bg-muted/40 rounded-full"
                animate={{ x: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Ground below */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-primary/40 to-transparent" />

              {/* Skydiver */}
              <motion.svg
                className="absolute text-foreground"
                width="80"
                height="100"
                viewBox="0 0 80 100"
                animate={{ 
                  x: [140, 100],
                  y: [-20, 60],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeIn"
                }}
              >
                {/* Parachute */}
                <motion.path
                  d="M10 0 Q40 -20 70 0 Q40 30 40 40"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="2"
                  fill="hsl(var(--secondary))"
                  opacity="0.7"
                  animate={{ d: ["M10 0 Q40 -20 70 0 Q40 30 40 40", "M10 0 Q40 -15 70 0 Q40 25 40 40", "M10 0 Q40 -20 70 0 Q40 30 40 40"] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                {/* Strings */}
                <line x1="15" y1="5" x2="38" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <line x1="65" y1="5" x2="42" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <line x1="40" y1="10" x2="40" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                
                {/* Person */}
                <circle cx="40" cy="55" r="6" fill="currentColor" />
                <rect x="35" y="60" width="10" height="15" rx="3" fill="hsl(var(--primary))" />
                {/* Arms spread */}
                <motion.line x1="35" y1="65" x2="20" y2="60" stroke="currentColor" strokeWidth="3"
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  style={{ transformOrigin: '35px 65px' }}
                />
                <motion.line x1="45" y1="65" x2="60" y2="60" stroke="currentColor" strokeWidth="3"
                  animate={{ rotate: [5, -5, 5] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  style={{ transformOrigin: '45px 65px' }}
                />
                {/* Legs */}
                <line x1="38" y1="75" x2="35" y2="88" stroke="currentColor" strokeWidth="3" />
                <line x1="42" y1="75" x2="45" y2="88" stroke="currentColor" strokeWidth="3" />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scene Label */}
      <motion.p
        key={currentScene}
        className="text-secondary font-medium text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {sceneLabels[currentScene]}
      </motion.p>

      {/* Country flags */}
      <div className="flex items-center gap-3">
        {['🇦🇪', '🇲🇻', '🇹🇭'].map((flag, index) => (
          <motion.span
            key={flag}
            className={`text-2xl transition-all ${currentScene === index ? 'scale-125' : 'opacity-50'}`}
            animate={{ y: currentScene === index ? [0, -5, 0] : 0 }}
            transition={{ duration: 0.5, repeat: currentScene === index ? Infinity : 0 }}
          >
            {flag}
          </motion.span>
        ))}
      </div>

      <motion.p
        className="text-muted-foreground text-sm tracking-widest uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Exploring the World...
      </motion.p>
    </div>
  );
};

const PageLoader = ({ type }: PageLoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {type === 'domestic' ? <DomesticLoader /> : <InternationalLoader />}
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
