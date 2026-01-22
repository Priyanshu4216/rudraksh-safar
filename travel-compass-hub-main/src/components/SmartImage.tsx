import { useCallback, useState } from "react";

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
export default function SmartImage({
  src,
  fallbackSrc = "/placeholder.svg",
  ...props
}: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = useCallback(() => {
    // Prevent infinite loop in case fallback also fails
    setCurrentSrc((prev) => (prev === fallbackSrc ? prev : fallbackSrc));
  }, [fallbackSrc]);

  return <img {...props} src={currentSrc} onError={handleError} />;
}
