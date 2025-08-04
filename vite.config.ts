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
    // Optimisations de performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les vendors pour un meilleur cache
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          icons: ['lucide-react'],
        },
      },
    },
    // Réduire la limite de taille des chunks
    chunkSizeWarningLimit: 1000,
    // Optimiser les assets
    assetsInlineLimit: 4096,
  },
  // Préchargement des dépendances critiques
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
}));
