import { useEffect, useRef } from 'react';

/**
 * Hook optimisé pour l'écoconception - évite les re-renders inutiles
 * Utilise la technique d'optimisation des performances pour réduire l'impact carbone
 */
export const useEcoOptimizedEffect = (
  effect: () => void | (() => void),
  deps: React.DependencyList | undefined,
  shouldRun: boolean = true
) => {
  const prevDepsRef = useRef<React.DependencyList | undefined>();
  const cleanupRef = useRef<(() => void) | void>();

  useEffect(() => {
    // Éviter les exécutions inutiles pour l'écoconception
    if (!shouldRun) return;

    // Comparaison shallow optimisée
    const depsChanged = !prevDepsRef.current || 
      !deps || 
      prevDepsRef.current.length !== deps.length ||
      deps.some((dep, index) => dep !== prevDepsRef.current![index]);

    if (depsChanged) {
      // Nettoyer l'effet précédent
      if (cleanupRef.current) {
        cleanupRef.current();
      }

      // Exécuter le nouvel effet
      cleanupRef.current = effect();
      prevDepsRef.current = deps;
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, deps);
};

/**
 * Hook pour optimiser les animations en fonction de la préférence utilisateur
 * Respecte les paramètres d'accessibilité pour réduire l'impact énergétique
 */
export const useReducedMotion = () => {
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return prefersReducedMotion;
};