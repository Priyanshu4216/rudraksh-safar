import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/", // Ensure absolute path for assets
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'iOS >= 12']
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.png", "favicon.ico", "og-image.png"],
      manifest: {
        name: "Rudraksh Safar - Best Travel Agency Bhilai",
        short_name: "Rudraksh Safar",
        description: "Bhilai's #1 trusted travel agency. Book cheapest tour packages from Bhilai, Raipur & Chhattisgarh.",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/favicon.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/favicon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        skipWaiting: true, // ⚡ Critical for iOS
        clientsClaim: true, // ⚡ Critical for iOS
        navigateFallback: "/index.html", // SPA Fallback for PWA
        cleanupOutdatedCaches: true, // Keep this for hygiene
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff,woff2,xml}"],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        // Import Firebase Messaging logic into the main Service Worker
        importScripts: ["/firebase-messaging-sw.js"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "unsplash-images",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets"
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          }
        ]
      }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(new Date().toISOString()),
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'generate-version-file',
          // @ts-ignore
          generateBundle(options, bundle) {
            // @ts-ignore
            this.emitFile({
              type: 'asset',
              fileName: 'version.json',
              source: JSON.stringify({ version: new Date().toISOString() })
            });
          }
        }
      ]
    }
  }
}));
// Force restart