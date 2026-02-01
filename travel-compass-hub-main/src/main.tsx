import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Force service worker update and clear old caches for returning users
// Force service worker update and clear old caches for returning users
if ('serviceWorker' in navigator) {
  // Unregister existing SWs to force fresh install if needed
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.update();
      console.log('SW Updated');
    });
  });

  // Clear old caches that might have stale assets
  if ('caches' in window) {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        // Clear caches older than current build or unknown caches
        // We only keep workbox-precache if we are sure it's fresh, but to be safe for this fix:
        // We will remove anything NOT matching specific expected patterns if needed.
        // For now, removing non-workbox is good, but let's log it.
        if (!cacheName.includes('workbox-precache')) {
          console.log('Deleting old cache:', cacheName);
          caches.delete(cacheName);
        }
      });
    });
  }
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);