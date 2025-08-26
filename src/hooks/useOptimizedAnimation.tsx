import { useEffect, useState } from 'react';
import { ResourceOptimizer } from '@/utils/resourceOptimizer';

export const useOptimizedAnimation = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const optimizer = ResourceOptimizer.getInstance();
    const shouldReduce = optimizer.shouldReduceAnimations();
    
    setShouldAnimate(!shouldReduce);
    setIsReducedMotion(shouldReduce);

    // Listen for preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
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