import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface LazyOptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    priority?: boolean;
    className?: string;
    width?: number | string;
    height?: number | string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const LazyOptimizedImage: React.FC<LazyOptimizedImageProps> = ({
    src,
    alt,
    priority = false,
    className,
    width,
    height,
    objectFit = 'cover',
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Auto-optimize Unsplash URLs if no format is explicitly set
    const getOptimizedUrl = (url: string) => {
        if (url.includes('images.unsplash.com') && !url.includes('auto=format')) {
            // Append compression parameters for WebP/AVIF auto-negotiation
            const separator = url.includes('?') ? '&' : '?';
            return `${url}${separator}auto=format&fit=crop&q=80`;
        }
        return url;
    };

    const optimizedSrc = getOptimizedUrl(src);

    return (
        <div
            className={cn('relative overflow-hidden', className)}
            style={{ width: width || '100%', height: height || '100%' }}
        >
            {/* Blurred Skeleton Placeholder to prevent CLS */}
            {!isLoaded && (
                <Skeleton className="absolute inset-0 w-full h-full object-cover animate-pulse bg-gray-200 dark:bg-slate-800" />
            )}

            <img
                src={optimizedSrc}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                decoding={priority ? 'sync' : 'async'}
                onLoad={() => setIsLoaded(true)}
                className={cn(
                    'w-full h-full transition-opacity duration-500',
                    objectFit === 'cover' && 'object-cover',
                    objectFit === 'contain' && 'object-contain',
                    isLoaded ? 'opacity-100' : 'opacity-0',
                    !className?.includes('absolute') ? 'absolute top-0 left-0' : '',
                )}
                {...props}
            />
        </div>
    );
};

export default LazyOptimizedImage;
