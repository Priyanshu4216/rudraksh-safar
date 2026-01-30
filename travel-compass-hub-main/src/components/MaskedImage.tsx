import { useRef } from 'react';
import { useMaskedReveal } from '@/hooks/useMaskedReveal';
import { cn } from '@/lib/utils';

type MaskType = 'circle' | 'diagonal' | 'horizontal' | 'vertical' | 'organic';

interface MaskedImageProps {
  src: string;
  alt: string;
  className?: string;
  maskType?: MaskType;
  duration?: number;
  delay?: number;
  overlayColor?: string;
  children?: React.ReactNode;
}

/**
 * Editorial-style masked image component
 * Reveals images through various mask shapes on scroll
 */
const MaskedImage = ({
  src,
  alt,
  className,
  maskType = 'circle',
  duration = 1200,
  delay = 0,
  overlayColor = 'hsl(var(--secondary))',
  children,
}: MaskedImageProps) => {
  const { ref, isVisible, maskStyle, overlayStyle } = useMaskedReveal({
    type: maskType,
    duration,
    delay,
    threshold: 0.2,
    once: true,
  });

  return (
    <div 
      ref={ref}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Main image with mask */}
      <div 
        className="relative w-full h-full"
        style={maskStyle}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        {children}
      </div>

      {/* Colored overlay that fades out */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          ...overlayStyle,
          backgroundColor: overlayColor,
        }}
      />

      {/* Optional decorative border that appears after reveal */}
      <div 
        className={cn(
          'absolute inset-0 border-2 border-secondary/30 pointer-events-none transition-opacity duration-500',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        style={{ transitionDelay: `${duration}ms` }}
      />
    </div>
  );
};

export default MaskedImage;
