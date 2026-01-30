import { useCallback, useState, forwardRef } from "react";

type SmartImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "onError"
> & {
  src: string;
  fallbackSrc?: string;
};

/**
 * A tiny <img> wrapper that swaps to a local fallback if the primary image fails.
 * Useful when using external CDN images (Unsplash) on slow/blocked networks.
 */
const SmartImage = forwardRef<HTMLImageElement, SmartImageProps>(({
  src,
  fallbackSrc = "/placeholder.svg",
  ...props
}, ref) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = useCallback(() => {
    // Prevent infinite loop in case fallback also fails
    setCurrentSrc((prev) => (prev === fallbackSrc ? prev : fallbackSrc));
  }, [fallbackSrc]);

  return <img ref={ref} {...props} src={currentSrc} onError={handleError} />;
});

SmartImage.displayName = 'SmartImage';

export default SmartImage;
