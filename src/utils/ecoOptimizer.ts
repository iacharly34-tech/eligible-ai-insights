// Eco-design utilities for carbon footprint reduction
export class EcoOptimizer {
  private static instance: EcoOptimizer;
  private isDarkModePreferred = false;
  private isLowPowerMode = false;

  static getInstance(): EcoOptimizer {
    if (!EcoOptimizer.instance) {
      EcoOptimizer.instance = new EcoOptimizer();
    }
    return EcoOptimizer.instance;
  }

  constructor() {
    this.detectUserPreferences();
    this.detectLowPowerMode();
  }

  // Detect user preferences for eco-friendly design
  private detectUserPreferences(): void {
    if (typeof window === 'undefined') return;

    // Dark mode preference (saves battery on OLED screens)
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkModePreferred = darkModeQuery.matches;

    darkModeQuery.addEventListener('change', (e) => {
      this.isDarkModePreferred = e.matches;
      this.adjustForEcoMode();
    });
  }

  // Detect low power mode or battery status
  private detectLowPowerMode(): void {
    if (typeof navigator === 'undefined') return;

    // Check for battery API
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        this.isLowPowerMode = battery.level < 0.2 && !battery.charging;
        
        battery.addEventListener('levelchange', () => {
          this.isLowPowerMode = battery.level < 0.2 && !battery.charging;
          this.adjustForEcoMode();
        });
      });
    }

    // Check for connection type (slow connections = lower quality)
    const connection = (navigator as any).connection;
    if (connection) {
      this.isLowPowerMode = this.isLowPowerMode || 
        connection.saveData || 
        connection.effectiveType === '2g' ||
        connection.effectiveType === 'slow-2g';
    }
  }

  // Adjust interface for eco mode
  private adjustForEcoMode(): void {
    if (this.isLowPowerMode) {
      // Reduce animations
      document.documentElement.style.setProperty('--transition-smooth', 'none');
      document.documentElement.style.setProperty('--transition-fast', 'none');
      
      // Reduce visual effects
      const root = document.documentElement;
      root.classList.add('eco-mode');
    }
  }

  // Optimize images for eco-design
  getOptimizedImageUrl(src: string, options: {
    width?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpeg';
  } = {}): string {
    const { width = 800, quality = this.isLowPowerMode ? 60 : 85, format = 'webp' } = options;
    
    // In a real implementation, this would connect to an image optimization service
    // For now, we'll return the original src with query parameters
    const url = new URL(src, window.location.origin);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('f', format);
    
    return url.toString();
  }

  // Monitor and reduce energy consumption
  measureEnergyImpact(): {
    animations: number;
    images: number;
    requests: number;
  } {
    const animations = document.querySelectorAll('[class*="animate-"]').length;
    const images = document.querySelectorAll('img').length;
    const requests = performance.getEntriesByType('resource').length;

    return { animations, images, requests };
  }

  // Generate eco-design report
  generateEcoReport(): {
    score: number;
    recommendations: string[];
    metrics: ReturnType<typeof this.measureEnergyImpact>;
  } {
    const metrics = this.measureEnergyImpact();
    let score = 100;
    const recommendations: string[] = [];

    // Penalize excessive animations
    if (metrics.animations > 10) {
      score -= Math.min(30, metrics.animations * 2);
      recommendations.push('Réduire le nombre d\'animations pour économiser la batterie');
    }

    // Penalize too many images without optimization
    if (metrics.images > 20) {
      score -= Math.min(20, metrics.images);
      recommendations.push('Optimiser et lazy-loader les images');
    }

    // Penalize excessive requests
    if (metrics.requests > 50) {
      score -= Math.min(25, metrics.requests);
      recommendations.push('Réduire le nombre de requêtes réseau');
    }

    return {
      score: Math.max(0, score),
      recommendations,
      metrics
    };
  }

  // Apply eco-friendly defaults
  applyEcoDefaults(): void {
    if (this.isDarkModePreferred) {
      document.documentElement.classList.add('dark');
    }

    // Reduce motion if user prefers it or in low power mode
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || this.isLowPowerMode) {
      document.documentElement.style.setProperty('--transition-smooth', 'none');
      document.documentElement.style.setProperty('--transition-fast', 'none');
    }

    // Enable eco mode styles
    if (this.isLowPowerMode) {
      document.documentElement.classList.add('eco-mode');
    }
  }
}