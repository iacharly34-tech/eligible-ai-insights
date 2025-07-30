import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.1) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { elementRef, isVisible };
};

// Scroll reveal component wrapper
export const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const { elementRef, isVisible } = useScrollReveal();

  const getTransformClass = () => {
    switch (direction) {
      case "up": return "translate-y-10";
      case "down": return "-translate-y-10";
      case "left": return "translate-x-10";
      case "right": return "-translate-x-10";
      default: return "translate-y-10";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-x-0 translate-y-0 opacity-100' 
          : `${getTransformClass()} opacity-0`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};