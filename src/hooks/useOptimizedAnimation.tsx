import { useEffect, useState } from 'react';

export const useOptimizedAnimation = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    setShouldAnimate(!mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      setShouldAnimate(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    shouldAnimate,
    isReducedMotion,
    getAnimationClass: (animationClass: string) => 
      shouldAnimate ? animationClass : '',
    getTransition: (transition: string) => 
      shouldAnimate ? transition : 'none'
  };
};

export const useIntersectionAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const { shouldAnimate } = useOptimizedAnimation();
  
  const ref = (element: HTMLElement | null) => {
    if (!element || !shouldAnimate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  };

  return { ref, isVisible: shouldAnimate ? isVisible : true };
};