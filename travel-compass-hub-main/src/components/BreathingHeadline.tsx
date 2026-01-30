import { forwardRef, useEffect, useRef, memo, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BreathingHeadlineProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  /** Base letter spacing in em units */
  baseLetterSpacing?: number;
  /** Amount to expand/contract in em units */
  breathingRange?: number;
  /** Animation duration in ms for one full breath cycle */
  cycleDuration?: number;
  /** Whether to also subtly shift font weight */
  enableWeightShift?: boolean;
  /** Base font weight */
  baseWeight?: number;
  /** Weight variation range */
  weightRange?: number;
}

/**
 * Typography that subtly "breathes" - letter spacing and weight
 * shift almost imperceptibly for an editorial luxury feel
 */
const BreathingHeadline = memo(forwardRef<HTMLElement, BreathingHeadlineProps>(({
  children,
  className,
  as: Component = 'h1',
  baseLetterSpacing = 0.02,
  breathingRange = 0.015,
  cycleDuration = 10000,
  enableWeightShift = true,
  baseWeight = 600,
  weightRange = 30,
  ...restProps
}, forwardedRef) => {
  const innerRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = innerRef.current;
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
      
      // Apply subtle weight shift if enabled
      if (enableWeightShift) {
        const weight = baseWeight + (sineValue * weightRange);
        element.style.fontWeight = String(Math.round(weight));
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

  const Comp = Component as React.ElementType;

  return (
    <Comp
      ref={(node: HTMLElement | null) => {
        innerRef.current = node;
        if (!forwardedRef) return;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={cn('will-change-[letter-spacing,font-weight]', className)}
      style={{
        letterSpacing: `${baseLetterSpacing}em`,
        fontWeight: baseWeight,
      }}
      {...restProps}
    >
      {children}
    </Comp>
  );
}));

BreathingHeadline.displayName = 'BreathingHeadline';

export default BreathingHeadline;
