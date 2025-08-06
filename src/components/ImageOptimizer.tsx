import React, { useState, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

export const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  webpSrc,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (webpSrc) {
      // Test WebP support
      const testWebP = async () => {
        try {
          const webpSupported = await new Promise<boolean>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
          });
          
          if (webpSupported) {
            setImageSrc(webpSrc);
          }
        } catch (error) {
          // Keep original src
        }
      };
      
      testWebP();
    }
  }, [webpSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (webpSrc && imageSrc === webpSrc) {
      // Fallback to original format if WebP fails
      setImageSrc(src);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading={loading}
      width={width}
      height={height}
      onLoad={handleLoad}
      onError={handleError}
      decoding="async"
    />
  );
};
