import { useState, useEffect, useCallback } from 'react';

interface DemoCounters {
  opportunities: number;
  pagesAnalyzed: number;
  totalWeight: number;
  aiScore: number;
  sources: number;
}

interface UseDemoAnimationReturn {
  counters: DemoCounters;
  resetCounters: () => void;
  startAnimation: (step: number) => void;
  isAnimating: boolean;
}

export const useDemoAnimation = (): UseDemoAnimationReturn => {
  const [counters, setCounters] = useState<DemoCounters>({
    opportunities: 0,
    pagesAnalyzed: 0,
    totalWeight: 0,
    aiScore: 0,
    sources: 0
  });
  
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationIntervals, setAnimationIntervals] = useState<NodeJS.Timeout[]>([]);

  const resetCounters = useCallback(() => {
    // Clear all intervals
    animationIntervals.forEach(interval => clearInterval(interval));
    setAnimationIntervals([]);
    
    setCounters({
      opportunities: 0,
      pagesAnalyzed: 0,
      totalWeight: 0,
      aiScore: 0,
      sources: 0
    });
    setIsAnimating(false);
  }, [animationIntervals]);

  const startAnimation = useCallback((step: number) => {
    setIsAnimating(true);
    
    // Clear existing intervals
    animationIntervals.forEach(interval => clearInterval(interval));
    const newIntervals: NodeJS.Timeout[] = [];

    switch (step) {
      case 1: // Connexion multi-sources
        {
          const sourcesInterval = setInterval(() => {
            setCounters(prev => ({
              ...prev,
              sources: Math.min(prev.sources + 1, 8),
              pagesAnalyzed: Math.min(prev.pagesAnalyzed + Math.floor(Math.random() * 5) + 3, 150)
            }));
          }, 300);
          newIntervals.push(sourcesInterval);
          
          setTimeout(() => clearInterval(sourcesInterval), 2000);
        }
        break;

      case 2: // Extraction & Parsing
        {
          const extractionInterval = setInterval(() => {
            setCounters(prev => ({
              ...prev,
              opportunities: Math.min(prev.opportunities + Math.floor(Math.random() * 3) + 1, 45),
              pagesAnalyzed: Math.min(prev.pagesAnalyzed + Math.floor(Math.random() * 8) + 5, 340),
              totalWeight: Math.min(prev.totalWeight + Math.floor(Math.random() * 200) + 100, 2800)
            }));
          }, 250);
          newIntervals.push(extractionInterval);
          
          setTimeout(() => clearInterval(extractionInterval), 2500);
        }
        break;

      case 3: // Analyse IA Multi-LLM
        {
          const analysisInterval = setInterval(() => {
            setCounters(prev => ({
              ...prev,
              opportunities: Math.min(prev.opportunities + Math.floor(Math.random() * 4) + 2, 89),
              aiScore: Math.min(prev.aiScore + Math.floor(Math.random() * 8) + 5, 94),
              pagesAnalyzed: Math.min(prev.pagesAnalyzed + Math.floor(Math.random() * 12) + 8, 650),
              totalWeight: Math.min(prev.totalWeight + Math.floor(Math.random() * 300) + 150, 5200)
            }));
          }, 200);
          newIntervals.push(analysisInterval);
          
          setTimeout(() => clearInterval(analysisInterval), 2500);
        }
        break;

      case 4: // Scoring Algorithmique
        {
          const scoringInterval = setInterval(() => {
            setCounters(prev => ({
              ...prev,
              opportunities: Math.min(prev.opportunities + Math.floor(Math.random() * 2) + 1, 127),
              aiScore: Math.min(prev.aiScore + Math.floor(Math.random() * 3) + 1, 96),
              pagesAnalyzed: Math.min(prev.pagesAnalyzed + Math.floor(Math.random() * 6) + 4, 890),
              totalWeight: Math.min(prev.totalWeight + Math.floor(Math.random() * 180) + 90, 7100)
            }));
          }, 300);
          newIntervals.push(scoringInterval);
          
          setTimeout(() => {
            clearInterval(scoringInterval);
            setIsAnimating(false);
          }, 2000);
        }
        break;
    }

    setAnimationIntervals(newIntervals);
  }, [animationIntervals]);

  useEffect(() => {
    return () => {
      // Cleanup intervals on unmount
      animationIntervals.forEach(interval => clearInterval(interval));
    };
  }, [animationIntervals]);

  return {
    counters,
    resetCounters,
    startAnimation,
    isAnimating
  };
};