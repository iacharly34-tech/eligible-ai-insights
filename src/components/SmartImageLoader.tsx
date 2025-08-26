import React, { useState, useRef, useEffect, memo, useCallback } from 'react';

interface SmartImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  webpSrc?: string;
  avifSrc?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const SmartImageLoader = memo<SmartImageLoaderProps>(({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMCAzMEMxNi42ODYzIDMwIDEzLjU5NDUgMjguNjc1NSAxMS4zMTM3IDI2LjI2MzJDOS4wMjk0NCAyMy44NDgxIDggMjAuNTI5NCA4IDE3LjJDOCAxMy44NzA2IDkuMDI5NDQgMTAuNTUxOSAxMS4zMTM3IDguMTM2ODNDMTMuNTk0NSA1LjcyNDUgMTYuNjg2MyA0LjQgMjAgNC40QzIzLjMxMzcgNC40IDI2LjQwNTUgNS43MjQ1IDI4LjY4NjMgOC4xMzY4M0MzMC45NzA2IDEwLjU1MTkgMzIgMTMuODcwNiAzMiAxNy4yQzMyIDIwLjUyOTQgMzAuOTcwNiAyMy44NDgxIDI4LjY4NjMgMjYuMjYzMkMyNi40MDU1IDI4LjY3NTUgMjMuMzEzNyAzMCAyMCAzMFoiIGZpbGw9IiNFNUU1RTUiLz4KPC9zdmc+',
  webpSrc,
  avifSrc,
  sizes = '100vw',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection observer setup
  const setRef = useCallback((element: HTMLImageElement | null) => {
    imgRef.current = element;
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (element && !priority) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      );

      observerRef.current.observe(element);
    }
  }, [priority]);

  // Cleanup observer
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || hasError) return;

    // Try to load the best format first
    const loadImage = async () => {
      const formats = [
        { src: avifSrc, type: 'image/avif' },
        { src: webpSrc, type: 'image/webp' },
        { src, type: 'image/jpeg' }
      ].filter(format => format.src);

      for (const format of formats) {
        try {
          // Check if browser supports the format
          if (format.type === 'image/avif' && !await supportsAvif()) continue;
          if (format.type === 'image/webp' && !await supportsWebp()) continue;

          // Preload the image
          const img = new Image();
          img.src = format.src!;
          
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });

          setCurrentSrc(format.src!);
          break;
        } catch {
          continue;
        }
      }
    };

    loadImage();
  }, [isVisible, src, webpSrc, avifSrc, hasError]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    if (currentSrc !== src) {
      // Fallback to original format
      setCurrentSrc(src);
    } else {
      setHasError(true);
      onError?.();
    }
  };

  return (
    <div className="relative overflow-hidden">
      <img
        ref={setRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <span className="text-sm">Image non disponible</span>
        </div>
      )}
    </div>
  );
});

SmartImageLoader.displayName = 'SmartImageLoader';

// Helper functions for format support detection
async function supportsWebp(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  return new Promise((resolve) => {
    const webp = new Image();
    webp.onload = webp.onerror = () => resolve(webp.height === 2);
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

async function supportsAvif(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => resolve(avif.height === 2);
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
}