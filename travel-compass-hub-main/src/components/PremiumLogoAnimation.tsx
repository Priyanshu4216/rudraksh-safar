import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';
import logoReferenceDark from '@/assets/logo-reference-dark.png';

type PremiumLogoAnimationProps = {
  /** Called once the full intro animation finishes (about 2s). */
  onComplete?: () => void;
  className?: string;
};

/**
 * Premium cinematic logo animation:
 * - Gold swoosh draws L->R with an airplane leading
 * - Rudraksh fades/scales in
 * - Safar appears with handwriting stroke animation
 * - Subtle glow pulse, then settles
 */
export default function PremiumLogoAnimation({ onComplete, className }: PremiumLogoAnimationProps) {
  const reduceMotion = useReducedMotion();
  const [replayKey, setReplayKey] = useState(0);
  const [settled, setSettled] = useState(false);

  // Curved swoosh path (kept stable for offset-path + svg stroke drawing)
  // Tuned to match the uploaded logo: low left start, gentle dip, then a rising tail to the plane.
  const swooshPath = useMemo(
    // Pixel-tuned closer to the uploaded mark: deeper left dip + longer rising tail
    () => 'M18 104 C 126 134, 260 130, 346 102 S 420 48, 452 46',
    []
  );

  const safarText = useMemo(() => 'Safar', []);

  const handleReplay = useCallback(() => {
    // Short replay: just the swoosh + airplane cue
    setSettled(false);
    setReplayKey((k) => k + 1);
  }, []);

  if (reduceMotion) {
    // Respect reduced motion: show a static, clean logo state.
    return (
      <div className={className}>
        <div className="flex flex-col items-center gap-2">
          <svg width="420" height="92" viewBox="0 0 420 92" className="max-w-full">
            <defs>
              <linearGradient id="goldGradientStatic" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--secondary))" />
                <stop offset="55%" stopColor="hsl(var(--gold-light))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
            </defs>
            <path d={swooshPath} fill="none" stroke="url(#goldGradientStatic)" strokeWidth="6" strokeLinecap="round" />
          </svg>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-foreground">Rudraksh</div>
            <div className="text-secondary text-sm font-semibold tracking-[0.3em] uppercase">Safar</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleReplay}
      className={
        'group relative inline-flex select-none items-center justify-center overflow-hidden rounded-[2rem] px-8 py-10 ' +
        // Dark cinematic plaque so the dark-mode logo + white "Safar" always reads correctly
        'bg-foreground/95 text-background border border-border/20 shadow-[0_18px_60px_hsl(var(--foreground)/0.35)] ' +
        'outline-none ' +
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ' +
        (className ?? '')
      }
      aria-label="Rudraksh Safar logo animation. Click to replay swoosh."
    >
      <div className="relative w-[520px] max-w-[86vw]">
        {import.meta.env.DEV ? (
          <img
            src={logoReferenceDark}
            alt=""
            className="pointer-events-none absolute inset-0 z-0 w-full h-auto opacity-[0.10]"
            aria-hidden="true"
            draggable={false}
          />
        ) : null}
        {/* Final settled frame: fade to the exact uploaded logo for 1:1 match */}
        <motion.img
          key={`final-${replayKey}`}
          src={logoReferenceDark}
          alt="Rudraksh Safar"
          className="pointer-events-none relative z-20 select-none w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: settled ? 1 : 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          draggable={false}
          loading="eager"
        />

        {/* Animated build-up frame (overlays and fades out when settled) */}
        <motion.div
          key={`animated-${replayKey}`}
          className="absolute inset-0 z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: settled ? 0 : 1 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
      {/* Glow halo (pulses once near the end, then settles) */}
      <motion.div
        key={`glow-${replayKey}`}
        className="pointer-events-none absolute -inset-10 rounded-[2.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.55, 0.18] }}
        transition={{ duration: 2.0, times: [0, 0.6, 0.82, 1], ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(closest-side, hsl(var(--secondary) / 0.35), hsl(var(--accent) / 0.10), transparent 70%)',
          filter: 'blur(18px)',
        }}
      />

      {/* Layout wrapper (no logo slices to avoid grey rectangle artifacts) */}
      <div className="relative mx-auto w-full h-[190px]">
        {/* Wordmark: Rudraksh */}
        <motion.div
          key={`rudraksh-${replayKey}`}
          className="absolute left-0 right-0 top-2 text-center text-5xl md:text-6xl font-serif font-bold italic"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.72, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundImage: 'var(--gradient-gold)' as any,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0 10px 30px hsl(var(--secondary) / 0.25))',
          }}
        >
          Rudraksh
        </motion.div>

        {/* Swoosh under Rudraksh */}
        <svg
          width="520"
          height="140"
          viewBox="0 0 460 140"
          className="absolute left-1/2 top-[82px] w-full -translate-x-1/2"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`goldGradient-${replayKey}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--secondary))" />
              <stop offset="55%" stopColor="hsl(var(--gold-light))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>

            <filter id={`softGlow-${replayKey}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.65 0"
                result="glow"
              />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* subtle shadow/ghost stroke for cinematic depth */}
          <motion.path
            key={`swoosh-ghost-${replayKey}`}
            d={swooshPath}
            fill="none"
            stroke="hsl(var(--secondary) / 0.18)"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 0.8, 0.25] }}
            transition={{ duration: 0.9, times: [0, 0.65, 1], ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.path
            key={`swoosh-${replayKey}`}
            d={swooshPath}
            fill="none"
            stroke={`url(#goldGradient-${replayKey})`}
            strokeWidth="6"
            strokeLinecap="round"
            filter={`url(#softGlow-${replayKey})`}
            initial={{ pathLength: 0, opacity: 0.0 }}
            animate={{ pathLength: [0, 1], opacity: [0.0, 1, 1] }}
            transition={{ duration: 0.95, times: [0, 0.25, 1], ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => {
              // this completes earlier than the full sequence; final completion handled below
            }}
          />

          {/* Thinner tail near the airplane (overlay last segment) */}
          <motion.path
            key={`swoosh-tail-${replayKey}`}
            d={swooshPath}
            fill="none"
            stroke={`url(#goldGradient-${replayKey})`}
            strokeWidth="3.6"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.84 0.16"
            strokeDashoffset="0"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1] }}
            transition={{ delay: 0.55, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        {/* Airplane “drawing tip” using offset-path for performance */}
        <motion.div
          key={`plane-${replayKey}`}
          className="absolute left-1/2 top-[82px] -translate-x-1/2"
          // Framer Motion's TS types don't include offset-* motion props; we intentionally cast.
          initial={{ opacity: 0, offsetDistance: '0%' } as any}
          animate={{ opacity: [0, 1, 1, 0], offsetDistance: '100%' } as any}
          whileHover={{ offsetDistance: '104%' } as any}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: 24,
            height: 24,
            offsetPath: `path('${swooshPath}')`,
            // Slight upward bias to match the brand plane silhouette
            offsetRotate: 'auto 14deg',
          } as React.CSSProperties}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ transform: 'rotate(-8deg) scale(1.05)' }}
          >
            {/* Minimal, angled-up brand-like plane */}
            <path
              d="M2 13.2L22 3.2l-7.1 18.2-3.4-6.6-9.5-1.6Z"
              fill="hsl(var(--secondary))"
            />
            <path
              d="M22 3.2 11.6 14.8"
              stroke="hsl(var(--secondary-foreground))"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M11.6 14.8 14.9 21.4"
              stroke="hsl(var(--secondary-foreground))"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.35"
            />
          </svg>
        </motion.div>
        {/* Safar (forced white, positioned like the reference) */}
        <motion.svg
          key={`safar-${replayKey}`}
          width="292"
          height="86"
          viewBox="0 0 320 110"
          className="absolute right-6 top-[104px] z-[3] w-[292px] max-w-[62%]"
          aria-label="Safar"
        >
          {/* stroke draw */}
          <motion.text
            x="160"
            y="78"
            textAnchor="middle"
            fontFamily="'Great Vibes', cursive"
            fontSize="80"
            fill="transparent"
            stroke="hsl(var(--logo-ink))"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0, strokeDasharray: 520, strokeDashoffset: 520 } as any}
            animate={{ opacity: 1, strokeDashoffset: 0 } as any}
            transition={{ delay: 1.0, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {safarText}
          </motion.text>

          {/* fill in */}
          <motion.text
            x="160"
            y="78"
            textAnchor="middle"
            fontFamily="'Great Vibes', cursive"
            fontSize="80"
            fill="hsl(var(--logo-ink))"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.42, duration: 0.22, ease: 'easeOut' }}
            style={{ filter: 'drop-shadow(0 10px 18px hsl(var(--foreground) / 0.55))' } as any}
          >
            {safarText}
          </motion.text>
        </motion.svg>

        {/* Finish: after glow pulse, settle into the full exact logo */}
        <motion.div
          key={`settle-${replayKey}`}
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.7, duration: 0.01 }}
          onAnimationComplete={() => {
            setSettled(true);
            onComplete?.();
          }}
        />
      </div>

      {/* Small hint (kept subtle) */}
      <motion.div
        className="mt-2 text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: 2, times: [0, 0.6, 0.85, 1] }}
      >
        Click to replay
      </motion.div>
        </motion.div>
      </div>
    </button>
  );
}
