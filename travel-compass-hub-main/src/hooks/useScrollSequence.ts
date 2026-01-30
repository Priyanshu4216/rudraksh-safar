import { useRef, useEffect, useState, useCallback } from 'react';

interface ScrollSequenceOptions {
  /** Array of image URLs for the sequence */
  images: string[];
  /** Whether to preload all images */
  preload?: boolean;
  /** Callback when an image fails to load */
  onError?: (index: number, error: Error) => void;
}

interface ScrollSequenceResult {
  containerRef: React.RefObject<HTMLDivElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  currentFrame: number;
  progress: number;
  isLoading: boolean;
  loadedCount: number;
}

/**
 * Hook for scroll-scrubbed image sequences
 * Creates a cinematic effect where scroll controls a timeline of images
 */
export const useScrollSequence = ({
  images,
  preload = true,
  onError,
}: ScrollSequenceOptions): ScrollSequenceResult => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadedImages = useRef<HTMLImageElement[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  // Preload images
  useEffect(() => {
    if (!preload || images.length === 0) {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    let loaded = 0;
    const imageElements: HTMLImageElement[] = [];

    const loadImage = (src: string, index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          if (mounted) {
            loaded++;
            setLoadedCount(loaded);
          }
          resolve(img);
        };
        img.onerror = (e) => {
          const error = new Error(`Failed to load image: ${src}`);
          onError?.(index, error);
          reject(error);
        };
        img.src = src;
      });
    };

    Promise.all(images.map((src, i) => loadImage(src, i)))
      .then((imgs) => {
        if (mounted) {
          imageElements.push(...imgs);
          loadedImages.current = imgs;
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [images, preload, onError]);

  // Draw frame to canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = loadedImages.current[frameIndex];

    if (!canvas || !ctx || !img) return;

    // Match canvas to container size
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    }

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Cover fit the image
    const imgAspect = img.width / img.height;
    const canvasAspect = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (canvasAspect > imgAspect) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }
    
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Handle scroll
  useEffect(() => {
    if (isLoading || images.length === 0) return;

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on container position
      // Start when container enters viewport, end when it leaves
      const totalScrollDistance = rect.height + viewportHeight;
      const scrolled = viewportHeight - rect.top;
      const scrollProgress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      
      setProgress(scrollProgress);
      
      // Calculate which frame to show
      const frameIndex = Math.min(
        Math.floor(scrollProgress * images.length),
        images.length - 1
      );
      
      if (frameIndex !== currentFrame && frameIndex >= 0) {
        setCurrentFrame(frameIndex);
        drawFrame(frameIndex);
      }
    };

    // Initial draw
    if (loadedImages.current.length > 0) {
      drawFrame(0);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isLoading, images.length, currentFrame, drawFrame]);

  return {
    containerRef,
    canvasRef,
    currentFrame,
    progress,
    isLoading,
    loadedCount,
  };
};

export default useScrollSequence;
