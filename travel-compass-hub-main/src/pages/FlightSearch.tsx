import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SEOHead from '@/components/SEOHead';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const FlightSearch = () => {

  useEffect(() => {
    // ── Inject the Travelpayouts White Label script directly into <head> ──
    // Using the same pattern as the official TP docs (no iframe, direct embed).
    const existingScript = document.getElementById('tp-wl-script');
    if (existingScript) return; // already injected

    const script = document.createElement('script');
    script.id = 'tp-wl-script';
    script.async = true;
    script.type = 'module';
    script.src = 'https://tpwgt.com/wl_web/main.js?wl_id=20971';
    document.head.appendChild(script);

    // Cleanup: remove script on unmount so it re-inits if user navigates away and back
    return () => {
      const el = document.getElementById('tp-wl-script');
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: '#0f172a' }}
    >
      <SEOHead
        title="Search Flights — Rudraksh Safar"
        description="Find the best flight deals from Raipur, Bhilai & across India. Compare prices from 100+ airlines with Rudraksh Safar's metasearch engine. Book in seconds."
        keywords="cheap flights India, flight search Bhilai, flights from Raipur, best airfare deals, Rudraksh Safar flights"
        canonicalUrl="https://rudrakshsafar.com/flights"
      />

      <Navbar />

      {/*
        ── Travelpayouts White Label — direct page embed (NO iframe) ──
        The TP docs require the divs to be directly in the page DOM, not in an iframe.
        The script (injected above via useEffect) finds these divs and renders into them.
      */}
      <div
        style={{
          paddingTop: '72px', /* clear the fixed navbar */
          minHeight: '100vh',
          background: '#0f172a',
        }}
      >
        {/* Search form renders here */}
        <div id="tpwl-search" />

        {/* Search results render here */}
        <div id="tpwl-tickets" />
      </div>

      <FloatingWhatsApp />
    </div>
  );
};

export default FlightSearch;
