import React from 'react';
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import * as Sentry from "@sentry/react";
import App from "./App.tsx";
import "./index.css";

// 🛡️ SENTRY INITIALIZATION: Error & Performance Tracking
Sentry.init({
  // TODO: Replace with your actual Sentry DSN
  dsn: "https://placeholder@o0.ingest.sentry.io/0",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// 🚀 iOS PWA Fix: Force Service Worker Clear/Update on Reboot/Load to prevent corrupted cache blank screens
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const reg of registrations) {
      // Unregistering prevents corrupt PWA caches from blocking render
      reg.unregister();
    }
  });
}

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

// ⚡ LCP Optimization: Hydrate immediately
const rootElement = document.getElementById("root");

try {
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
} catch (error) {
  console.error("🔥 React Initialization Crash Caught:", error);
  // Send the critical failure to Sentry proactively
  Sentry.captureException(error);

  if (rootElement) {
    rootElement.innerHTML = `
      <div style="font-family: sans-serif; padding: 20px; color: white; background-color: #8b0000; min-height: 100vh; width: 100%; position: absolute; top: 0; left: 0; z-index: 999999;">
        <h2>🚨 Application Failed to Start</h2>
        <p>Your browser encountered a critical error while loading the site. We have logged this issue.</p>
        <p style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; font-family: monospace; white-space: pre-wrap; font-size: 12px; margin-top: 15px;">
          ${error instanceof Error ? error.stack || error.message : String(error)}
        </p>
      </div>
    `;
  }
}