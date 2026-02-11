import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
// @ts-ignore
// import prerender from 'vite-plugin-prerender';
// @ts-ignore
// import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
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
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true, // Keep this for hygiene
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff,woff2,xml}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
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
    // @ts-ignore
    /*
    // @ts-ignore
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/', 
        '/travel-agent-bhilai', 
        '/travel-agent-raipur', 
        '/travel-agent-durg',
        '/domestic-packages',
        '/international-packages'
      ],
      // @ts-ignore
      renderer: new PuppeteerRenderer({
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      }),
    })
    */
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));