import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisations de performance avancées
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les vendors pour un meilleur cache
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-navigation-menu'],
          icons: ['lucide-react'],
          router: ['react-router-dom'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
        // Optimiser les noms de fichiers pour le cache
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
    // Configuration terser pour une compression optimale
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
    },
    // Réduire la limite de taille des chunks
    chunkSizeWarningLimit: 1000,
    // Optimiser les assets - inliner les petits fichiers
    assetsInlineLimit: 8192,
  },
  // Préchargement des dépendances critiques
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
}));
