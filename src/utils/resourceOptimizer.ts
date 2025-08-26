// Resource Optimizer - Intelligent preloading and caching
export class ResourceOptimizer {
  private static instance: ResourceOptimizer;
  private preloadedResources = new Set<string>();
  private observers = new Map<Element, IntersectionObserver>();
  
  static getInstance(): ResourceOptimizer {
    if (!ResourceOptimizer.instance) {
      ResourceOptimizer.instance = new ResourceOptimizer();
    }
    return ResourceOptimizer.instance;
  }

  // Intelligent preloading based on user behavior
  preloadCriticalResources(): void {
    const criticalPaths = [
      '/demo',
      '/produit',
      '/tarifs'
    ];

    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        criticalPaths.forEach(path => this.preloadRoute(path));
      });
    }
  }

  private preloadRoute(path: string): void {
    if (this.preloadedResources.has(path)) return;
    
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = path;
    document.head.appendChild(link);
    
    this.preloadedResources.add(path);
  }

  // Smart image lazy loading with intersection observer
  observeImage(img: HTMLImageElement, callback?: () => void): void {
    if (this.observers.has(img)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }
          callback?.();
          observer.unobserve(image);
          this.observers.delete(image);
        }
      });
    }, {
      rootMargin: '50px',
      threshold: 0.1
    });

    observer.observe(img);
    this.observers.set(img, observer);
  }

  // Memory cleanup
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }

  // Optimize animations based on device capabilities
  shouldReduceAnimations(): boolean {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    
    // Check for low-end device indicators
    const connection = (navigator as any).connection;
    if (connection && (connection.saveData || connection.effectiveType === '2g')) {
      return true;
    }
    
    // Check battery level (if available)
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        return battery.level < 0.2 && !battery.charging;
      });
    }
    
    return false;
  }
}

// Performance monitoring utility
export const performanceMonitor = {
  measureComponentRender: (componentName: string, startTime: number) => {
    const duration = performance.now() - startTime;
    if (duration > 16) { // More than one frame
      console.warn(`${componentName} render took ${duration.toFixed(2)}ms`);
    }
  },

  measureAsyncOperation: async <T>(
    operation: () => Promise<T>, 
    operationName: string
  ): Promise<T> => {
    const start = performance.now();
    try {
      const result = await operation();
      const duration = performance.now() - start;
      if (duration > 100) {
        console.warn(`${operationName} took ${duration.toFixed(2)}ms`);
      }
      return result;
    } catch (error) {
      console.error(`${operationName} failed:`, error);
      throw error;
    }
  }
};