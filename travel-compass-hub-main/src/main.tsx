import React from 'react';
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// SEO-Critical: Explicit Helmet Context for Metadata Hydration
const helmetContext = {};

/* 
  🤖 BOT-SAFE SERVICE WORKER STRATEGY 
  - We strictly prevent aggressive cache clearing when Googlebot/Crawlers are detected.
  - This ensures search engines always get the full, fresh page without 404s on assets.
*/
const isCrawler = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('googlebot') || ua.includes('bingbot') || ua.includes('linkedinbot') || ua.includes('whatsapp') || ua.includes('twitterbot') || ua.includes('facebookexternalhit');
};

if ('serviceWorker' in navigator && !isCrawler()) {
  // Safe SW Registration for Real Users
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      // Check for updates on load
      registration.update();

      // Check for updates every hour
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1000);
    }).catch(error => {
      console.log('SW registration failed:', error);
    });
  });

  // Garbage Collect Old Caches (ONLY for real users, NEVER for bots)
  if ('caches' in window) {
    caches.keys().then((names) => {
      names.forEach((name) => {
        // Remove legacy caches that don't match current versioning if necessary
        // Keeping this minimal to avoid "Deleting effective assets" issues
        if (!name.includes('workbox') && !name.includes('images') && !name.includes('fonts')) {
          console.debug('Cleaning stale cache:', name);
          caches.delete(name);
        }
      });
    });
  }
}

// ⚡ LCP Optimization: Hydrate immediately
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  console.error("Critical: Root element not found. SEO rendering failed.");
}