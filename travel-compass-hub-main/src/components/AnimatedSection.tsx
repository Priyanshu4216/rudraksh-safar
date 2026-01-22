import { ReactNode, forwardRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur';
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
}, forwardedRef) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animations = {
    'fade-up': {
      hidden: 'opacity-0 translate-y-12',
      visible: 'opacity-100 translate-y-0',
    },
    'fade-left': {
      hidden: 'opacity-0 -translate-x-12',
      visible: 'opacity-100 translate-x-0',
    },
    'fade-right': {
      hidden: 'opacity-0 translate-x-12',
      visible: 'opacity-100 translate-x-0',
    },
    'scale': {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
    'blur': {
      hidden: 'opacity-0 blur-sm scale-105',
      visible: 'opacity-100 blur-0 scale-100',
    },
  };

  return (
    <div
      ref={(node) => {
        ref.current = node;
        if (!forwardedRef) return;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else forwardedRef.current = node;
      }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? animations[animation].visible : animations[animation].hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
