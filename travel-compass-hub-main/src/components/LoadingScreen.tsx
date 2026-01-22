import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import logoDark from '@/assets/logo-dark.png';
import logoLight from '@/assets/logo-light.png';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const completedRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();

  // Brand rule: use light logo on dark theme, dark logo on light theme.
  const logoSrc = useMemo(
    () => (resolvedTheme === 'dark' ? logoLight : logoDark),
    [resolvedTheme]
  );

  const safeComplete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsExiting(true);
    setTimeout(onComplete, 250);
  };

  useEffect(() => {
    // Hard safety cap so the loader never traps the user.
    const t = window.setTimeout(() => safeComplete(), 1800);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      initial={false}
      animate={
        isExiting
          ? { opacity: 0, scale: 1.06, filter: 'blur(2px)' }
          : { opacity: 1, scale: 1, filter: 'blur(0px)' }
      }
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 text-center">
        <div className="relative mx-auto w-fit">
          {/* Halo ring */}
          {!reduceMotion ? (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 rounded-full"
              style={{
                background:
                  'radial-gradient(closest-side, hsl(var(--secondary) / 0.28), hsl(var(--accent) / 0.10), transparent 72%)',
                filter: 'blur(18px)',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: [0.15, 0.55, 0.2], scale: [0.98, 1.05, 1.0] }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          ) : null}

          <motion.img
            src={logoSrc}
            alt="Rudraksh Safar"
            className="mx-auto h-14 md:h-16 w-auto object-contain"
            draggable={false}
            loading="eager"
            initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Subtle shimmer line */}
          {!reduceMotion ? (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-20%] right-[-20%] top-1/2 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, hsl(var(--secondary) / 0.55), transparent)',
                opacity: 0.45,
              }}
              initial={{ x: '-40%' }}
              animate={{ x: '40%' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : null}
        </div>

        {!reduceMotion ? (
          <motion.p
            className="mt-5 text-xs tracking-[0.28em] uppercase text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, times: [0, 0.4, 1] }}
          >
            Journeys made beautiful
          </motion.p>
        ) : null}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
