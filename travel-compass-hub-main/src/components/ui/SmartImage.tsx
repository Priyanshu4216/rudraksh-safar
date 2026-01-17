import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ImageOff } from 'lucide-react';

import placeholderImg from '@/assets/placeholder.svg';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    containerClassName?: string;
    aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
}

const SmartImage = ({
    src,
    alt,
    className,
    containerClassName,
    fallbackSrc = placeholderImg,
    aspectRatio = 'auto',
    ...props
}: SmartImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState<string | undefined>(undefined);

    useEffect(() => {
        // Reset state when src changes
        setIsLoading(true);
        setError(false);
        setCurrentSrc(src);

        if (!src) {
            setError(true);
            setIsLoading(false);
            return;
        }

        const img = new Image();
        img.src = src;

        img.onload = () => {
            setIsLoading(false);
        };

        img.onerror = () => {
            setError(true);
            setIsLoading(false);
        };

        // Safety timeout to prevent infinite loading state
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [src]);

    const getAspectRatioClass = () => {
        switch (aspectRatio) {
            case 'square': return 'aspect-square';
            case 'video': return 'aspect-video';
            case 'portrait': return 'aspect-[3/4]';
            default: return '';
        }
    };

    return (
        <div className={cn("relative overflow-hidden bg-muted/20", getAspectRatioClass(), containerClassName)}>
            {/* Skeleton Loading State */}
            {isLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/30 animate-pulse">
                    <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                </div>
            )}

            {/* Error State */}
            {error ? (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-muted text-muted-foreground p-4 text-center">
                    <ImageOff className="w-8 h-8 mb-2 opacity-50" />
                    <span className="text-xs">Failed to load image</span>
                </div>
            ) : (
                /* Actual Image */
                <img
                    src={currentSrc}
                    alt={alt}
                    className={cn(
                        "w-full h-full object-cover transition-all duration-700 ease-in-out",
                        isLoading ? "scale-105 blur-lg opacity-0" : "scale-100 blur-0 opacity-100",
                        className
                    )}
                    loading="lazy"
                    {...props}
                />
            )}
        </div>
    );
};

export default SmartImage;
