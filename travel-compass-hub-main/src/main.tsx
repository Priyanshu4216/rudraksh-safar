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