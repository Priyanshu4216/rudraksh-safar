import { useRef, useEffect, useState } from 'react';

type MaskType = 'circle' | 'diagonal' | 'horizontal' | 'vertical' | 'organic';

interface MaskedRevealOptions {
  /** Type of mask animation */
  type?: MaskType;
  /** Duration of reveal animation in ms */
  duration?: number;
  /** Delay before animation starts in ms */
  delay?: number;
  /** Intersection observer threshold */
  threshold?: number;
  /** Whether to trigger only once */
  once?: boolean;
}

interface MaskedRevealResult {
  ref: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
  progress: number;
  maskStyle: React.CSSProperties;
  overlayStyle: React.CSSProperties;
}

/**
 * Hook for scroll-revealed masked imagery
 * Creates editorial-style image reveals through various mask shapes
 */
export const useMaskedReveal = (options: MaskedRevealOptions = {}): MaskedRevealResult => {
  const {
    type = 'circle',
    duration = 1200,
    delay = 0,
    threshold = 0.3,
    once = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(1); // Start fully visible to prevent hidden state

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            
            if (!prefersReducedMotion) {
              // Animate progress from 0 to 1
              const startTime = performance.now();
              const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const newProgress = Math.min(elapsed / duration, 1);
                setProgress(newProgress);
                
                if (newProgress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              requestAnimationFrame(animate);
            } else {
              setProgress(1);
            }
          }, delay);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
          setProgress(0);
        }
      },
      { threshold, rootMargin: '0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, duration, once, threshold]);

  // Generate mask styles based on type and progress
  const getMaskStyle = (): React.CSSProperties => {
    // Eased progress for smoother animation
    const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

    switch (type) {
      case 'circle':
        // Ensure minimum visibility even at start
        const circleSize = Math.max(5, easedProgress * 150); // Min 5% to 150% of container
        return {
          clipPath: `circle(${circleSize}% at 50% 50%)`,
          transition: 'none',
        };

      case 'diagonal':
        // Start with a small visible sliver
        const diagonalPos = Math.max(-95, easedProgress * 200 - 100); // -95% to 100%
        return {
          clipPath: `polygon(${diagonalPos}% 0%, ${diagonalPos + 100}% 0%, ${diagonalPos + 100}% 100%, ${diagonalPos}% 100%)`,
          transition: 'none',
        };

      case 'horizontal':
        const horizontalPos = easedProgress * 100;
        return {
          clipPath: `inset(0 ${100 - horizontalPos}% 0 0)`,
          transition: 'none',
        };

      case 'vertical':
        const verticalPos = easedProgress * 100;
        return {
          clipPath: `inset(${100 - verticalPos}% 0 0 0)`,
          transition: 'none',
        };

      case 'organic':
        // Create an organic blob shape that expands
        const blobSize = easedProgress * 200;
        const wobble = Math.sin(easedProgress * Math.PI * 2) * 5;
        return {
          clipPath: `ellipse(${blobSize + wobble}% ${blobSize - wobble}% at 50% 50%)`,
          transition: 'none',
        };

      default:
        return {};
    }
  };

  // Overlay for dramatic reveal effect
  const getOverlayStyle = (): React.CSSProperties => {
    const easedProgress = 1 - Math.pow(1 - progress, 2);
    
    return {
      opacity: 1 - easedProgress,
      transition: 'none',
    };
  };

  return {
    ref,
    isVisible,
    progress,
    maskStyle: getMaskStyle(),
    overlayStyle: getOverlayStyle(),
  };
};

export default useMaskedReveal;
