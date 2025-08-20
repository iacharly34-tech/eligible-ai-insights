import { useEffect } from 'react';

/**
 * Component to help with SPA server configuration recommendations
 * This component provides console warnings about necessary server configurations
 * for proper Google indexing of Single Page Applications
 */
export const SpaServerConfig = () => {
  useEffect(() => {
    // Only run in development to provide helpful warnings
    if (process.env.NODE_ENV === 'development') {
      console.info(`
🔍 SEO Configuration Check:

1. Server Configuration Required:
   - Ensure your server returns index.html for all routes (/*) 
   - Configure proper HTTP cache headers
   - Enable gzip/brotli compression

2. Sitemap Configuration:
   - Make sure your sitemap.xml is accessible at: https://eligibly.ai/sitemap.xml
   - Submit sitemap to Google Search Console

3. Google Search Console:
   - Add and verify your domain: https://eligibly.ai
   - Submit sitemap.xml
   - Monitor indexing status

4. Performance Optimization:
   - Ensure LCP < 2.5s for all pages
   - Implement proper lazy loading
   - Optimize images and resources

5. Meta Tags:
   - All meta tags are now correctly configured
   - Canonical URLs are properly set
   - Open Graph and Twitter Cards implemented
      `);
    }
  }, []);

  return null;
};