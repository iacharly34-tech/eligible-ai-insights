// Compatibility marker: TanStack leaf head() owns metadata during SSR and navigation.
// Do not mutate document.head here: it creates conflicting client-only metadata.
interface SEOHeadProps {
  noindex?: boolean;
  titleOverride?: string;
  descriptionOverride?: string;
  canonicalOverride?: string;
}

export const SEOHead = (_props: SEOHeadProps) => null;
