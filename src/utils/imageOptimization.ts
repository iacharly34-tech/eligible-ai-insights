/**
 * Image optimization utilities
 */

export const isWebPSupported = async (): Promise<boolean> => {
  try {
    return await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    });
  } catch {
    return false;
  }
};

export const getOptimalImageSrc = async (originalSrc: string, webpSrc?: string): Promise<string> => {
  if (!webpSrc) return originalSrc;
  
  const webpSupported = await isWebPSupported();
  return webpSupported ? webpSrc : originalSrc;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const generateSrcSet = (basePath: string, sizes: number[], format: 'webp' | 'jpg' | 'png' = 'webp'): string => {
  return sizes
    .map(size => `${basePath}-${size}w.${format} ${size}w`)
    .join(', ');
};

export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.onerror = reject;
    img.src = src;
  });
};