import { useMemo } from 'react';

interface PhysicsCardProps {
  index: number;
  total?: number;
}

interface PhysicsStyle {
  initial: {
    opacity: number;
    y: number;
    rotate: number;
    scale: number;
  };
  animate: {
    opacity: number;
    y: number;
    rotate: number;
    scale: number;
  };
  transition: {
    type: 'spring';
    stiffness: number;
    damping: number;
    mass: number;
    delay: number;
  };
  whileHover: {
    scale: number;
    rotate: number;
    y: number;
    transition: {
      type: 'spring';
      stiffness: number;
      damping: number;
    };
  };
}

/**
 * Hook that returns physics-based animation properties for cards
 * Creates the effect of cards being "tossed" onto a table with natural motion
 */
export const usePhysicsCard = ({ index, total = 6 }: PhysicsCardProps): PhysicsStyle => {
  return useMemo(() => {
    // Seed random values based on index for consistency
    const seed = (index * 1337) % 100;
    
    // Random initial rotation (-8 to +8 degrees)
    const initialRotation = ((seed % 17) - 8.5) * 1.2;
    
    // Final rotation is smaller (-3 to +3 degrees) for a settled look
    const finalRotation = ((seed % 7) - 3.5) * 0.8;
    
    // Stagger delay based on position
    const baseDelay = 0.08 * index;
    
    // Vary the spring properties slightly for each card
    const stiffnessVariation = 70 + (seed % 30); // 70-100
    const dampingVariation = 10 + (seed % 8); // 10-18
    
    return {
      initial: {
        opacity: 0,
        y: 120 + (seed % 40), // Random drop height 120-160px
        rotate: initialRotation + ((seed % 20) - 10), // More exaggerated initial rotation
        scale: 0.85 + (seed % 10) * 0.01, // Slight scale variation
      },
      animate: {
        opacity: 1,
        y: 0,
        rotate: finalRotation,
        scale: 1,
      },
      transition: {
        type: 'spring' as const,
        stiffness: stiffnessVariation,
        damping: dampingVariation,
        mass: 0.8 + (seed % 4) * 0.1, // Mass 0.8-1.2 for varied bounce
        delay: baseDelay,
      },
      whileHover: {
        scale: 1.04,
        rotate: 0, // Straighten on hover
        y: -8, // Lift slightly
        transition: {
          type: 'spring' as const,
          stiffness: 400,
          damping: 20,
        },
      },
    };
  }, [index, total]);
};

/**
 * Generate CSS custom properties for staggered physics animation
 */
export const getPhysicsCardStyle = (index: number) => ({
  '--card-delay': `${index * 0.08}s`,
  '--card-rotation': `${((index * 1337) % 7) - 3.5}deg`,
} as React.CSSProperties);

export default usePhysicsCard;
