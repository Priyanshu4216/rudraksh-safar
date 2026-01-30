import { useEffect, useRef } from 'react';

interface BreathingTypographyOptions {
  /** Base letter spacing in em units */
  baseLetterSpacing?: number;
  /** Amount to expand/contract in em units */
  breathingRange?: number;
  /** Animation duration in ms for one full breath cycle */
  cycleDuration?: number;
  /** Whether to also subtly shift font weight */
  enableWeightShift?: boolean;
  /** Base font weight (use variable font values like 400-700) */
  baseWeight?: number;
  /** Weight variation range */
  weightRange?: number;
}

export const useBreathingTypography = (options: BreathingTypographyOptions = {}) => {
  const {
    baseLetterSpacing = 0,
    breathingRange = 0.02,
    cycleDuration = 8000,
    enableWeightShift = true,
    baseWeight = 600,
    weightRange = 50,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Create a smooth sine wave for breathing effect
      const progress = (elapsed % cycleDuration) / cycleDuration;
      const sineValue = Math.sin(progress * Math.PI * 2);
      
      // Apply letter spacing breathing
      const letterSpacing = baseLetterSpacing + (sineValue * breathingRange);
      element.style.letterSpacing = `${letterSpacing}em`;
      
      // Apply subtle weight shift if enabled (requires variable font)
      if (enableWeightShift) {
        const weight = baseWeight + (sineValue * weightRange);
        element.style.fontWeight = String(Math.round(weight));
        // For fonts that support font-variation-settings
        element.style.fontVariationSettings = `'wght' ${weight}`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [baseLetterSpacing, breathingRange, cycleDuration, enableWeightShift, baseWeight, weightRange]);

  return ref;
};

export default useBreathingTypography;
