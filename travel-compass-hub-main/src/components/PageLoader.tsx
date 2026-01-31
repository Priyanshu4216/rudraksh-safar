import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PageLoaderProps {
  type:
  | 'domestic'
  | 'international'
  | 'honeymoon'
  | 'family'
  | 'adventure'
  | 'luxury'
  | 'traveller'
  | 'legal'
  | 'visa'
  | 'passport'
  | 'tips'
  | 'health'
  | 'currency'
  | 'deals'
  | 'hub'
  | 'season'
  | 'visaFree'
  | 'checklist'
  | 'train'
  | 'flight'
  | 'cab'
  | 'bus';
  onLoadComplete?: () => void;
}

const QUICK_LOADER_MS = 450;

const LegalLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />

      <motion.div
        className="relative"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: [0.96, 1, 0.96], opacity: 1 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="84" height="84" viewBox="0 0 84 84" className="text-foreground">
          <rect x="18" y="14" width="40" height="56" rx="10" fill="hsl(var(--card))" stroke="currentColor" strokeWidth="2" />
          <rect x="26" y="26" width="24" height="2" rx="1" fill="currentColor" opacity="0.6" />
          <rect x="26" y="34" width="20" height="2" rx="1" fill="currentColor" opacity="0.5" />
          <rect x="26" y="42" width="22" height="2" rx="1" fill="currentColor" opacity="0.5" />
          <rect x="26" y="50" width="18" height="2" rx="1" fill="currentColor" opacity="0.5" />
          <path d="M58 24 L68 14" stroke="hsl(var(--secondary))" strokeWidth="4" strokeLinecap="round" />
          <path d="M62 36 L72 26" stroke="hsl(var(--secondary))" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        </svg>
      </motion.div>
    </div>

    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Loading policy…
    </motion.p>
  </div>
);

const VisaLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        className="relative"
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: [6, 0, 6], opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x="10" y="14" width="100" height="52" rx="14" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
        <rect x="20" y="26" width="42" height="6" rx="3" fill="hsl(var(--foreground))" opacity="0.6" />
        <rect x="20" y="38" width="30" height="6" rx="3" fill="hsl(var(--foreground))" opacity="0.45" />
        <motion.circle
          cx="86"
          cy="40"
          r="14"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="4"
          strokeDasharray="6 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '86px 40px' }}
        />
      </motion.svg>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Preparing visa info…
    </motion.p>
  </div>
);

const PassportLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.svg
        width="104"
        height="84"
        viewBox="0 0 104 84"
        className="relative"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: [0.96, 1, 0.96], opacity: 1 }}
        transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M26 12 h46 a12 12 0 0 1 12 12 v36 a12 12 0 0 1-12 12H26 a10 10 0 0 0-10 10V22a10 10 0 0 1 10-10Z" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
        <path d="M26 12 h10 v60 h-10" fill="hsl(var(--muted))" opacity="0.5" />
        <circle cx="58" cy="44" r="10" fill="none" stroke="hsl(var(--secondary))" strokeWidth="3" opacity="0.9" />
        <path d="M58 32 v24 M46 44 h24" stroke="hsl(var(--secondary))" strokeWidth="3" opacity="0.7" />
      </motion.svg>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Checking passport rules…
    </motion.p>
  </div>
);

const TipsLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        className="relative"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: [6, 0, 6] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.circle
          cx="45"
          cy="38"
          r="20"
          fill="hsl(var(--secondary) / 0.18)"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <path d="M45 18c-10 0-18 8-18 18 0 7 4 13 10 16v6h16v-6c6-3 10-9 10-16 0-10-8-18-18-18Z" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
        <rect x="34" y="60" width="22" height="8" rx="4" fill="hsl(var(--foreground))" opacity="0.5" />
        <rect x="36" y="70" width="18" height="6" rx="3" fill="hsl(var(--foreground))" opacity="0.35" />
      </motion.svg>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Loading travel tips…
    </motion.p>
  </div>
);

const HealthLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.svg
        width="120"
        height="70"
        viewBox="0 0 120 70"
        className="relative text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <path
          d="M10 40h18l6-14 10 28 10-22 7 8h49"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="140"
          strokeDashoffset="140"
        >
          <animate attributeName="stroke-dashoffset" values="140;0;140" dur="2.2s" repeatCount="indefinite" />
        </path>
      </motion.svg>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Loading health guide…
    </motion.p>
  </div>
);

const CurrencyLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.div
        className="relative flex items-end gap-3"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {[18, 32, 24, 38].map((h, i) => (
          <motion.div
            key={i}
            className="w-4 rounded-full bg-secondary/70"
            style={{ height: h }}
            animate={{ height: [h * 0.7, h, h * 0.8, h] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </motion.div>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Loading currency guide…
    </motion.p>
  </div>
);

const DealsLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.svg
        width="110"
        height="70"
        viewBox="0 0 110 70"
        className="relative"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: [0.96, 1, 0.96] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M20 18h60l10 17-10 17H20L10 35 20 18Z" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
        <circle cx="28" cy="35" r="3" fill="hsl(var(--secondary))" />
        <path d="M40 28h26" stroke="hsl(var(--foreground))" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
        <path d="M40 42h18" stroke="hsl(var(--foreground))" strokeWidth="3" opacity="0.45" strokeLinecap="round" />
      </motion.svg>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Loading hot deals…
    </motion.p>
  </div>
);

const HubLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.div
        className="relative"
        animate={{ rotate: [0, 6, -6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="90" height="90" viewBox="0 0 90 90" className="text-foreground">
          <circle cx="45" cy="45" r="26" fill="hsl(var(--secondary) / 0.12)" />
          <circle cx="45" cy="45" r="22" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
          <path d="M23 45h44" stroke="currentColor" strokeWidth="2" opacity="0.5" />
          <path d="M45 23v44" stroke="currentColor" strokeWidth="2" opacity="0.5" />
          <motion.path
            d="M45 45 L63 35"
            stroke="hsl(var(--secondary))"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '45px 45px' }}
          />
        </svg>
      </motion.div>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Loading traveller hub…
    </motion.p>
  </div>
);

const SeasonLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <div className="relative flex items-center gap-3">
        {[
          { c: 'hsl(var(--secondary))', d: 0 },
          { c: 'hsl(var(--primary))', d: 0.2 },
          { c: 'hsl(var(--muted-foreground))', d: 0.4 },
        ].map((x, i) => (
          <motion.div
            key={i}
            className="w-10 h-10 rounded-full"
            style={{ background: x.c, opacity: 0.6 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: x.d }}
          />
        ))}
      </div>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Loading season guide…
    </motion.p>
  </div>
);

const VisaFreeLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.svg
        width="110"
        height="80"
        viewBox="0 0 110 80"
        className="relative text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <circle cx="55" cy="40" r="24" fill="hsl(var(--secondary) / 0.12)" />
        <circle cx="55" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.7" />
        <motion.path
          d="M55 18v44"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <motion.path
          d="M33 40h44"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [0.9, 0.2, 0.9] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </motion.svg>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Loading visa-free list…
    </motion.p>
  </div>
);

const ChecklistLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <div className="relative flex flex-col gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          >
            <div className="w-5 h-5 rounded border border-border bg-card" />
            <div className="h-2 w-44 rounded bg-muted" />
          </motion.div>
        ))}
      </div>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Loading checklist…
    </motion.p>
  </div>
);

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
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 300 140"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={50 + i * 35}
                    cy={100}
                    r={3 + Math.random() * 3}
                    fill="hsl(var(--secondary))"
                    opacity={0.4}
                    initial={{ translateY: 0 }}
                    animate={{ translateY: -80, opacity: [0.4, 0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </motion.svg>

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

// Honeymoon Loader - Romantic theme with birds, hearts, sunset
const HoneymoonLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Scene Container with sunset gradient */}
      <div className="relative w-72 h-44 overflow-hidden rounded-2xl bg-gradient-to-b from-rose-400/30 via-pink-300/20 to-purple-400/30 border border-rose-200/30">

        {/* Sunset sun */}
        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-b from-amber-300 to-rose-400"
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Sunset glow */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500/20 to-transparent" />

        {/* Heart-shaped flight path (dotted) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 176">
          <motion.path
            d="M144 140 C144 140 80 100 80 60 C80 30 110 20 144 50 C178 20 208 30 208 60 C208 100 144 140 144 140"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        </svg>

        {/* Two birds flying together on heart path */}
        <motion.svg
          className="absolute"
          width="40"
          height="20"
          viewBox="0 0 40 20"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            offsetPath: "path('M144 140 C144 140 80 100 80 60 C80 30 110 20 144 50 C178 20 208 30 208 60 C208 100 144 140 144 140')",
            offsetRotate: "0deg"
          }}
        >
          {/* Bird 1 */}
          <motion.path
            d="M5 10 Q10 5 15 10 Q10 8 5 10"
            fill="hsl(var(--foreground))"
            animate={{ d: ["M5 10 Q10 5 15 10 Q10 8 5 10", "M5 10 Q10 3 15 10 Q10 12 5 10", "M5 10 Q10 5 15 10 Q10 8 5 10"] }}
            transition={{ duration: 0.3, repeat: Infinity }}
          />
          {/* Bird 2 */}
          <motion.path
            d="M25 12 Q30 7 35 12 Q30 10 25 12"
            fill="hsl(var(--foreground))"
            animate={{ d: ["M25 12 Q30 7 35 12 Q30 10 25 12", "M25 12 Q30 5 35 12 Q30 14 25 12", "M25 12 Q30 7 35 12 Q30 10 25 12"] }}
            transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
          />
        </motion.svg>

        {/* Floating hearts */}
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className="absolute text-rose-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            initial={{
              x: 50 + i * 45,
              y: 150,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              y: [150, 20],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut"
            }}
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </motion.svg>
        ))}

        {/* Couple silhouette */}
        <motion.svg
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          width="50"
          height="40"
          viewBox="0 0 50 40"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Person 1 */}
          <circle cx="18" cy="12" r="6" fill="hsl(var(--foreground))" />
          <path d="M12 18 Q18 35 18 38 L24 38 Q24 35 18 18" fill="hsl(var(--foreground))" />
          {/* Person 2 */}
          <circle cx="32" cy="10" r="5" fill="hsl(var(--foreground))" />
          <path d="M27 16 Q32 32 32 38 L37 38 Q37 32 32 16" fill="hsl(var(--foreground))" />
          {/* Holding hands heart */}
          <motion.path
            d="M22 25 Q25 22 28 25"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            fill="none"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.svg>
      </div>

      {/* Romantic text */}
      <motion.p
        className="text-lg font-serif italic text-rose-400"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✨ Creating your romantic escape… ✨
      </motion.p>

      {/* Heart progress indicator */}
      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="12"
            height="12"
            viewBox="0 0 24 24"
            className="text-rose-400"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.3
            }}
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </motion.svg>
        ))}
      </div>
    </div>
  );
};

// Family Loader - Friendly theme with walking family, suitcases, camera
const FamilyLoader = () => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 150);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Scene Container with friendly gradient */}
      <div className="relative w-80 h-44 overflow-hidden rounded-2xl bg-gradient-to-b from-cyan-100/30 via-sky-200/20 to-blue-300/30 border border-cyan-200/30">

        {/* Camera flash effect */}
        <AnimatePresence>
          {flash && (
            <motion.div
              className="absolute inset-0 bg-white z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
          )}
        </AnimatePresence>

        {/* Background - simple landscape */}
        <svg className="absolute bottom-8 left-0 w-full h-16 text-emerald-500/30" viewBox="0 0 320 60">
          <path d="M0 60 Q40 40 80 50 T160 45 T240 50 T320 45 L320 60 Z" fill="currentColor" />
        </svg>

        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-amber-200/40 to-transparent" />

        {/* Walking family */}
        <motion.g
          initial={{ x: -100 }}
          animate={{ x: 400 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <motion.svg
            className="absolute bottom-6"
            width="120"
            height="60"
            viewBox="0 0 120 60"
          >
            {/* Dad */}
            <g>
              <circle cx="20" cy="15" r="7" fill="hsl(var(--primary))" />
              <motion.rect
                x="16" y="22" width="8" height="20" rx="2"
                fill="hsl(var(--primary))"
              />
              <motion.rect
                x="15" y="40" width="4" height="12" rx="1"
                fill="hsl(var(--foreground))"
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 0.4, repeat: Infinity }}
                style={{ transformOrigin: '17px 40px' }}
              />
              <motion.rect
                x="21" y="40" width="4" height="12" rx="1"
                fill="hsl(var(--foreground))"
                animate={{ rotate: [15, -15, 15] }}
                transition={{ duration: 0.4, repeat: Infinity }}
                style={{ transformOrigin: '23px 40px' }}
              />
            </g>

            {/* Mom */}
            <g>
              <circle cx="45" cy="18" r="6" fill="hsl(var(--secondary))" />
              <path d="M39 24 L45 45 L51 24 Z" fill="hsl(var(--secondary))" />
              <motion.rect
                x="41" y="43" width="3" height="10" rx="1"
                fill="hsl(var(--foreground))"
                animate={{ rotate: [-12, 12, -12] }}
                transition={{ duration: 0.4, repeat: Infinity }}
                style={{ transformOrigin: '42px 43px' }}
              />
              <motion.rect
                x="46" y="43" width="3" height="10" rx="1"
                fill="hsl(var(--foreground))"
                animate={{ rotate: [12, -12, 12] }}
                transition={{ duration: 0.4, repeat: Infinity }}
                style={{ transformOrigin: '47px 43px' }}
              />
            </g>

            {/* Kid 1 */}
            <g>
              <circle cx="70" cy="28" r="5" fill="hsl(var(--primary))" />
              <rect x="67" y="33" width="6" height="12" rx="2" fill="hsl(var(--primary))" />
              <motion.rect
                x="67" y="44" width="2.5" height="8" rx="1"
                fill="hsl(var(--foreground))"
                animate={{ rotate: [-20, 20, -20] }}
                transition={{ duration: 0.3, repeat: Infinity }}
                style={{ transformOrigin: '68px 44px' }}
              />
              <motion.rect
                x="70.5" y="44" width="2.5" height="8" rx="1"
                fill="hsl(var(--foreground))"
                animate={{ rotate: [20, -20, 20] }}
                transition={{ duration: 0.3, repeat: Infinity }}
                style={{ transformOrigin: '72px 44px' }}
              />
            </g>

            {/* Kid 2 (smaller) */}
            <g>
              <circle cx="90" cy="32" r="4" fill="hsl(var(--secondary))" />
              <rect x="87" y="36" width="6" height="10" rx="2" fill="hsl(var(--secondary))" />
              <motion.rect
                x="87" y="45" width="2" height="7" rx="1"
                fill="hsl(var(--foreground))"
                animate={{ rotate: [-20, 20, -20] }}
                transition={{ duration: 0.25, repeat: Infinity }}
                style={{ transformOrigin: '88px 45px' }}
              />
              <motion.rect
                x="91" y="45" width="2" height="7" rx="1"
                fill="hsl(var(--foreground))"
                animate={{ rotate: [20, -20, 20] }}
                transition={{ duration: 0.25, repeat: Infinity }}
                style={{ transformOrigin: '92px 45px' }}
              />
            </g>
          </motion.svg>
        </motion.g>

        {/* Rolling suitcases */}
        <motion.svg
          className="absolute bottom-4"
          width="40"
          height="30"
          viewBox="0 0 40 30"
          animate={{ x: [-60, 420] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0.3 }}
        >
          {/* Suitcase 1 */}
          <rect x="5" y="5" width="12" height="18" rx="2" fill="hsl(var(--primary))" />
          <rect x="9" y="2" width="4" height="4" rx="1" fill="hsl(var(--foreground))" />
          <motion.circle
            cx="8" cy="24" r="3"
            fill="hsl(var(--foreground))"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="14" cy="24" r="3"
            fill="hsl(var(--foreground))"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
          />

          {/* Suitcase 2 */}
          <rect x="22" y="8" width="10" height="14" rx="2" fill="hsl(var(--secondary))" />
          <rect x="25" y="5" width="4" height="4" rx="1" fill="hsl(var(--foreground))" />
          <motion.circle
            cx="25" cy="23" r="2.5"
            fill="hsl(var(--foreground))"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="29" cy="23" r="2.5"
            fill="hsl(var(--foreground))"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
          />
        </motion.svg>

        {/* Camera icon with flash */}
        <motion.svg
          className="absolute top-4 right-4"
          width="30"
          height="24"
          viewBox="0 0 30 24"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x="3" y="6" width="24" height="16" rx="3" fill="hsl(var(--foreground))" />
          <rect x="10" y="2" width="10" height="5" rx="1" fill="hsl(var(--foreground))" />
          <circle cx="15" cy="14" r="5" fill="hsl(var(--primary))" />
          <circle cx="15" cy="14" r="3" fill="hsl(var(--secondary))" />
          <motion.circle
            cx="23" cy="9" r="2"
            fill="hsl(var(--secondary))"
            animate={{ opacity: flash ? 1 : 0.3 }}
          />
        </motion.svg>
      </div>

      {/* Friendly text */}
      <motion.p
        className="text-lg font-medium text-cyan-600"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        📸 Finding perfect family memories…
      </motion.p>

      {/* Progress - family icons */}
      <div className="flex gap-4 text-2xl">
        {['👨', '👩', '👧', '👦'].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: i * 0.15
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// Adventure Loader - Rugged theme with mountain, compass, backpack
const AdventureLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Scene Container with rugged texture */}
      <div className="relative w-80 h-48 overflow-hidden rounded-xl bg-gradient-to-b from-orange-900/20 via-amber-800/15 to-stone-700/20 border-2 border-amber-600/30">

        {/* Rough texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />

        {/* Mountain silhouette being drawn */}
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 320 120">
          <motion.path
            d="M0 120 L40 80 L80 100 L120 50 L160 70 L200 30 L240 60 L280 40 L320 80 L320 120 Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 120 L40 80 L80 100 L120 50 L160 70 L200 30 L240 60 L280 40 L320 80 L320 120 Z"
            fill="hsl(var(--primary) / 0.2)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          {/* Snow caps */}
          <motion.path
            d="M115 50 L120 50 L125 60 Z M195 30 L200 30 L210 45 Z M275 40 L280 40 L288 55 Z"
            fill="hsl(var(--secondary))"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </svg>

        {/* Rotating compass */}
        <motion.svg
          className="absolute top-4 left-4"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <circle cx="25" cy="25" r="22" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" />
          <circle cx="25" cy="25" r="18" fill="hsl(var(--background))" stroke="hsl(var(--secondary))" strokeWidth="1" />

          {/* Cardinal directions */}
          <text x="25" y="10" textAnchor="middle" fill="hsl(var(--secondary))" fontSize="6" fontWeight="bold">N</text>
          <text x="25" y="44" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="5">S</text>
          <text x="8" y="27" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="5">W</text>
          <text x="42" y="27" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="5">E</text>

          {/* Rotating needle */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '25px 25px' }}
          >
            <polygon points="25,8 22,25 25,22 28,25" fill="hsl(var(--destructive))" />
            <polygon points="25,42 22,25 25,28 28,25" fill="hsl(var(--foreground))" />
          </motion.g>

          <circle cx="25" cy="25" r="3" fill="hsl(var(--secondary))" />
        </motion.svg>

        {/* Bouncing backpack */}
        <motion.svg
          className="absolute bottom-16 right-8"
          width="40"
          height="50"
          viewBox="0 0 40 50"
          animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Backpack body */}
          <rect x="8" y="15" width="24" height="30" rx="4" fill="hsl(var(--primary))" />
          <rect x="12" y="20" width="16" height="10" rx="2" fill="hsl(var(--secondary))" />

          {/* Top flap */}
          <path d="M8 15 Q20 5 32 15" fill="hsl(var(--primary))" />

          {/* Straps */}
          <rect x="10" y="12" width="4" height="8" rx="1" fill="hsl(var(--foreground))" />
          <rect x="26" y="12" width="4" height="8" rx="1" fill="hsl(var(--foreground))" />

          {/* Side pockets */}
          <rect x="4" y="25" width="6" height="12" rx="2" fill="hsl(var(--primary) / 0.8)" />
          <rect x="30" y="25" width="6" height="12" rx="2" fill="hsl(var(--primary) / 0.8)" />

          {/* Buckle */}
          <rect x="17" y="32" width="6" height="4" rx="1" fill="hsl(var(--secondary))" />
        </motion.svg>

        {/* Climbing rope animation */}
        <motion.svg
          className="absolute top-8 right-24"
          width="60"
          height="80"
          viewBox="0 0 60 80"
        >
          <motion.path
            d="M30 0 Q35 20 25 40 Q20 60 30 80"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="5 5"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          {/* Carabiner */}
          <motion.circle
            cx="30"
            cy="40"
            r="6"
            fill="none"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.svg>
      </div>

      {/* Adventure text */}
      <motion.p
        className="text-xl font-bold uppercase tracking-widest text-amber-500"
        animate={{
          opacity: [0.7, 1, 0.7],
          letterSpacing: ['0.1em', '0.15em', '0.1em']
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ⚡ Adventure loading… ⚡
      </motion.p>

      {/* Progress - adventure icons */}
      <div className="flex gap-4 text-xl">
        {['🏔️', '🧗', '🎒', '🧭'].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// Luxury Loader - Elegant black and gold theme
const LuxuryLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Scene Container - black with gold accents */}
      <div className="relative w-80 h-48 overflow-hidden rounded-xl bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 border border-amber-500/30">

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--secondary)) 0, hsl(var(--secondary)) 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px'
        }} />

        {/* Golden line forming elegant logo/shape */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 192">
          {/* Outer elegant frame being drawn */}
          <motion.rect
            x="40"
            y="30"
            width="240"
            height="132"
            rx="8"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Inner decorative lines */}
          <motion.path
            d="M60 50 L260 50 M60 142 L260 142"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Crown forming */}
          <motion.path
            d="M130 85 L140 65 L150 80 L160 55 L170 80 L180 65 L190 85 L185 95 L135 95 Z"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Diamond accents */}
          <motion.path
            d="M80 96 L90 86 L100 96 L90 106 Z"
            fill="url(#goldGradient)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            style={{ transformOrigin: '90px 96px' }}
          />
          <motion.path
            d="M220 96 L230 86 L240 96 L230 106 Z"
            fill="url(#goldGradient)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
            style={{ transformOrigin: '230px 96px' }}
          />

          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F5E6A3" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>

        {/* Sparkle effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 50}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24">
              <path
                d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
                fill="#D4AF37"
              />
            </svg>
          </motion.div>
        ))}

        {/* Slow moving golden particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-amber-400"
            style={{ left: `${10 + i * 20}%` }}
            animate={{
              y: [192, -10],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Luxury text - elegant and slow */}
      <motion.p
        className="text-lg font-serif tracking-[0.3em] uppercase"
        style={{ color: '#D4AF37' }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Curating luxury experiences…
      </motion.p>

      {/* Elegant progress - golden dots */}
      <div className="flex gap-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#D4AF37' }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Traveller Loader - Globe with passport stamps, compass, and travel icons
const TravellerLoader = () => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % 3);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Scene Container */}
      <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-blue-500/10 via-background to-cyan-500/10">
        <AnimatePresence mode="wait">
          {/* Scene 1: Rotating Globe with Flight Path */}
          {currentScene === 0 && (
            <motion.div
              key="globe"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Globe */}
              <motion.svg
                className="text-cyan-500"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" fill="none" />
                <ellipse cx="40" cy="40" rx="35" ry="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <ellipse cx="40" cy="40" rx="15" ry="35" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <line x1="5" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth="1" />
              </motion.svg>

              {/* Flying Airplane */}
              <motion.svg
                className="absolute text-secondary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                animate={{
                  x: [-60, 60],
                  y: [20, -20, 20],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                  fill="currentColor"
                />
              </motion.svg>
            </motion.div>
          )}

          {/* Scene 2: Passport with Stamps */}
          {currentScene === 1 && (
            <motion.div
              key="passport"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Passport */}
              <motion.div
                className="relative w-20 h-28 bg-gradient-to-b from-blue-800 to-blue-900 rounded-lg shadow-lg"
                animate={{ rotateY: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {/* Gold emblem */}
                <div className="absolute inset-x-0 top-4 flex justify-center">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                    </svg>
                  </motion.div>
                </div>
                <div className="absolute bottom-3 inset-x-0 text-center text-[8px] text-white/60 font-semibold tracking-wider">
                  PASSPORT
                </div>
              </motion.div>

              {/* Stamp animations */}
              <motion.div
                className="absolute w-12 h-12 border-4 border-red-500/60 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.6] }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ top: '20%', right: '25%' }}
              />
              <motion.div
                className="absolute w-10 h-10 border-4 border-green-500/60 rounded-lg rotate-12"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.6] }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{ bottom: '25%', left: '20%' }}
              />
            </motion.div>
          )}

          {/* Scene 3: Compass & Map */}
          {currentScene === 2 && (
            <motion.div
              key="compass"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Map background */}
              <div className="absolute inset-4 bg-gradient-to-br from-amber-100/20 to-amber-200/10 rounded-lg" />

              {/* Map lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <line x1="10%" y1="30%" x2="90%" y2="70%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="20%" y1="60%" x2="80%" y2="40%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Compass */}
              <motion.svg
                className="text-foreground"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <circle cx="35" cy="35" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="35" cy="35" r="25" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                {/* Compass needle */}
                <motion.g
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '35px 35px' }}
                >
                  <polygon points="35,10 38,35 35,38 32,35" fill="#ef4444" />
                  <polygon points="35,60 38,35 35,32 32,35" fill="#3b82f6" />
                </motion.g>
                <circle cx="35" cy="35" r="4" fill="currentColor" />
                {/* Cardinal directions */}
                <text x="35" y="8" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="bold">N</text>
                <text x="35" y="66" textAnchor="middle" fontSize="6" fill="currentColor">S</text>
                <text x="6" y="37" textAnchor="middle" fontSize="6" fill="currentColor">W</text>
                <text x="64" y="37" textAnchor="middle" fontSize="6" fill="currentColor">E</text>
              </motion.svg>

              {/* Location pins */}
              <motion.div
                className="absolute w-3 h-3 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ top: '25%', right: '30%' }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-secondary rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                style={{ bottom: '30%', left: '25%' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <motion.p
          className="text-lg font-medium text-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Preparing your travel guide…
        </motion.p>

        {/* Travel icons row */}
        <div className="flex items-center justify-center gap-4 mt-4">
          {['✈️', '🧳', '🗺️', '📱', '💳'].map((icon, i) => (
            <motion.span
              key={i}
              className="text-xl"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            >
              {icon}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrainLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center bg-background">
      {/* Tracks and motion */}
      <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end overflow-hidden">
        <motion.div
          className="flex w-[200%] h-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 0.5, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 border-r-8 border-transparent border-l-8 border-muted h-2 mt-auto" />
          ))}
        </motion.div>
      </div>

      {/* Train SVG */}
      <motion.div
        className="relative mb-2"
        animate={{ y: [0, 1, 0] }}
        transition={{ duration: 0.2, repeat: Infinity }}
      >
        <svg width="100" height="50" viewBox="0 0 100 50" className="text-primary">
          <path d="M10 20 h60 v20 h-60 z" fill="currentColor" />
          <path d="M70 30 h20 v10 h-20 z" fill="currentColor" />
          <path d="M15 20 v-10 h30 v10" fill="currentColor" />
          <rect x="20" y="13" width="8" height="5" fill="hsl(var(--background))" />
          <rect x="32" y="13" width="8" height="5" fill="hsl(var(--background))" />
          <circle cx="20" cy="45" r="5" fill="hsl(var(--foreground))" />
          <circle cx="40" cy="45" r="5" fill="hsl(var(--foreground))" />
          <circle cx="60" cy="45" r="5" fill="hsl(var(--foreground))" />
          <rect x="75" y="20" width="10" height="10" fill="currentColor" />
        </svg>
        {/* Steam */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute -top-4 right-2 w-3 h-3 rounded-full bg-muted-foreground/50"
            initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
            animate={{ opacity: [0, 0.8, 0], scale: 2, x: 20, y: -20 }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </motion.div>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Confirming seats...
    </motion.p>
  </div>
);

const FlightLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center bg-sky-50 dark:bg-sky-950/20">
      <motion.svg
        width="60" height="60" viewBox="0 0 24 24"
        className="text-primary relative z-10"
        initial={{ rotate: -5 }}
        animate={{ y: [-5, 5, -5], rotate: [-5, 0, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1l3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </motion.svg>
      {/* Clouds */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/40 dark:bg-white/10"
          style={{ width: 40, height: 20, top: 30 + i * 40 }}
          initial={{ x: 200 }}
          animate={{ x: -200 }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1.5 }}
        />
      ))}
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Looking for best fares...
    </motion.p>
  </div>
);

const CabLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center bg-background">
      <div className="absolute bottom-4 left-0 right-0 h-20 bg-muted/10 flex items-end">
        <div className="w-full h-1 bg-foreground/10 mb-2" />
      </div>
      <motion.svg
        width="80" height="40" viewBox="0 0 80 40"
        className="text-primary relative z-10 mb-2"
        animate={{ y: [0, 1, 0] }}
        transition={{ duration: 0.3, repeat: Infinity }}
      >
        <path d="M10 20 L20 10 H50 L60 20 H70 V30 H10 V20 Z" fill="currentColor" />
        <circle cx="20" cy="30" r="6" fill="hsl(var(--foreground))" />
        <circle cx="60" cy="30" r="6" fill="hsl(var(--foreground))" />
        <rect x="25" y="14" width="25" height="6" fill="hsl(var(--background))" />
      </motion.svg>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Finding nearest rides...
    </motion.p>
  </div>
);

const BusLoader = () => (
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="relative w-72 h-40 overflow-hidden rounded-2xl border border-border/30 flex items-center justify-center bg-background">
      <div className="absolute bottom-4 left-0 right-0 h-2 bg-foreground/10" />
      <motion.svg
        width="100" height="50" viewBox="0 0 100 50"
        className="text-primary relative z-10 mb-2"
        animate={{ y: [0, 0.5, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      >
        <path d="M10 10 H90 V35 H10 Z" fill="currentColor" rx="4" />
        <rect x="15" y="15" width="15" height="10" fill="hsl(var(--background))" />
        <rect x="35" y="15" width="15" height="10" fill="hsl(var(--background))" />
        <rect x="55" y="15" width="15" height="10" fill="hsl(var(--background))" />
        <circle cx="25" cy="35" r="6" fill="hsl(var(--foreground))" />
        <circle cx="75" cy="35" r="6" fill="hsl(var(--foreground))" />
      </motion.svg>
    </div>
    <motion.p
      className="text-muted-foreground text-sm tracking-widest uppercase"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      Checking seat availability...
    </motion.p>
  </div>
);

const PageLoader = ({ type, onLoadComplete }: PageLoaderProps) => {
  useEffect(() => {
    let loadTime = 1600;
    if (['visa', 'passport', 'tips', 'health', 'currency', 'deals', 'hub', 'season', 'visaFree', 'checklist'].includes(type as string)) {
      loadTime = QUICK_LOADER_MS;
    }
    const timer = setTimeout(() => {
      onLoadComplete?.();
    }, loadTime);
    return () => clearTimeout(timer);
  }, [type, onLoadComplete]);

  const renderLoader = () => {
    switch (type) {
      case 'domestic':
        return <DomesticLoader />;
      case 'international':
        return <InternationalLoader />;
      case 'honeymoon':
        return <HoneymoonLoader />;
      case 'family':
        return <FamilyLoader />;
      case 'adventure':
        return <AdventureLoader />;
      case 'luxury':
        return <LuxuryLoader />;
      case 'traveller':
        return <LuxuryLoader />;
      case 'legal':
        return <LegalLoader />;
      case 'visa':
        return <VisaLoader />;
      case 'passport':
        return <PassportLoader />;
      case 'tips':
        return <TipsLoader />;
      case 'health':
        return <HealthLoader />;
      case 'currency':
        return <CurrencyLoader />;
      case 'deals':
        return <DealsLoader />;
      case 'hub':
        return <HubLoader />;
      case 'season':
        return <SeasonLoader />;
      case 'visaFree':
        return <VisaFreeLoader />;
      case 'checklist':
        return <ChecklistLoader />;
      case 'train':
        return <TrainLoader />;
      case 'flight':
        return <FlightLoader />;
      case 'cab':
        return <CabLoader />;
      case 'bus':
        return <BusLoader />;
      default:
        return <DomesticLoader />;
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {renderLoader()}
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
