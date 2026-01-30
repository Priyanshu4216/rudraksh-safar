import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import SecurityProvider from "./components/SecurityProvider";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import Index from "./pages/Index";
import CookieConsent from "./components/CookieConsent";
import ScrollProgressBar from "./components/ScrollProgressBar";

// Traveller Guide Pages

// Route-level code splitting (improves initial load on slow networks)
const DomesticPackages = lazy(() => import("./pages/DomesticPackages"));
const InternationalPackages = lazy(() => import("./pages/InternationalPackages"));
const HoneymoonPackages = lazy(() => import("./pages/HoneymoonPackages"));
const FamilyPackages = lazy(() => import("./pages/FamilyPackages"));
const AdventurePackages = lazy(() => import("./pages/AdventurePackages"));
const LuxuryPackages = lazy(() => import("./pages/LuxuryPackages"));
const PackageDetails = lazy(() => import("./pages/PackageDetails"));
const ForTravellers = lazy(() => import("./pages/ForTravellers"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Traveller Guide Pages
const VisaGuide = lazy(() => import("./pages/VisaGuide"));
const PassportGuide = lazy(() => import("./pages/PassportGuide"));
const VisaFreeCountries = lazy(() => import("./pages/VisaFreeCountries"));
const TravelChecklist = lazy(() => import("./pages/TravelChecklist"));
const CurrencyGuide = lazy(() => import("./pages/CurrencyGuide"));
const BestTimeToVisit = lazy(() => import("./pages/BestTimeToVisit"));
const TravelHealth = lazy(() => import("./pages/TravelHealth"));
const TravelTips = lazy(() => import("./pages/TravelTips"));
const HotDeals = lazy(() => import("./pages/HotDeals"));
const DestinationContent = lazy(() => import("./pages/DestinationContent"));

// Visa Country Pages
const DubaiVisa = lazy(() => import("./pages/visa/DubaiVisa"));
const ThailandVisa = lazy(() => import("./pages/visa/ThailandVisa"));
const SingaporeVisa = lazy(() => import("./pages/visa/SingaporeVisa"));
const BaliVisa = lazy(() => import("./pages/visa/BaliVisa"));
const MaldivesVisa = lazy(() => import("./pages/visa/MaldivesVisa"));
const TurkeyVisa = lazy(() => import("./pages/visa/TurkeyVisa"));
const SchengenVisa = lazy(() => import("./pages/visa/SchengenVisa"));
const SriLankaVisa = lazy(() => import("./pages/visa/SriLankaVisa"));
const NepalVisa = lazy(() => import("./pages/visa/NepalVisa"));
const MalaysiaVisa = lazy(() => import("./pages/visa/MalaysiaVisa"));

// Legal Pages
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/legal/TermsConditions"));
const CancellationPolicy = lazy(() => import("./pages/legal/CancellationPolicy"));
const RefundPolicy = lazy(() => import("./pages/legal/RefundPolicy"));
const Disclaimer = lazy(() => import("./pages/legal/Disclaimer"));

// Local SEO Pages
const TravelAgentBhilai = lazy(() => import("./pages/local/TravelAgentBhilai"));
const VisaAgentBhilai = lazy(() => import("./pages/local/VisaAgentBhilai"));
const TourPackagesBhilai = lazy(() => import("./pages/local/TourPackagesBhilai"));
const InternationalPackagesBhilai = lazy(() => import("./pages/local/InternationalPackagesBhilai"));
const IndiaPackagesBhilai = lazy(() => import("./pages/local/IndiaPackagesBhilai"));
const WeekendGetawaysBhilai = lazy(() => import("./pages/local/WeekendGetawaysBhilai"));

const queryClient = new QueryClient();

const SpaRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If the user hit Netlify's 404 fallback (public/404.html), we store the
    // intended URL in sessionStorage and land on '/'. Rehydrate it here.
    try {
      const target = sessionStorage.getItem("spa:redirect");
      if (!target) return;
      sessionStorage.removeItem("spa:redirect");

      // Avoid loops; only navigate if it's a non-root route.
      if (target !== "/") navigate(target, { replace: true });
    } catch {
      // noop
    }
  }, [navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="rudraksh-safar-theme">
      <SecurityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SpaRedirectHandler />
            <ScrollProgressBar />
            <ScrollToTop />
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/domestic-packages" element={<DomesticPackages />} />
                <Route path="/international-packages" element={<InternationalPackages />} />
                <Route path="/honeymoon-packages" element={<HoneymoonPackages />} />
                <Route path="/family-packages" element={<FamilyPackages />} />
                <Route path="/adventure-packages" element={<AdventurePackages />} />
                <Route path="/luxury-packages" element={<LuxuryPackages />} />
                <Route path="/for-travellers" element={<ForTravellers />} />
                <Route path="/package/:packageId" element={<PackageDetails />} />

                {/* Traveller Guide Routes */}
                <Route path="/visa-guide" element={<VisaGuide />} />
                <Route path="/passport-guide" element={<PassportGuide />} />
                <Route path="/visa-free-countries" element={<VisaFreeCountries />} />
                <Route path="/travel-checklist" element={<TravelChecklist />} />
                <Route path="/currency-guide" element={<CurrencyGuide />} />
                <Route path="/best-time-to-visit" element={<BestTimeToVisit />} />
                <Route path="/travel-health" element={<TravelHealth />} />
                <Route path="/travel-tips" element={<TravelTips />} />
                <Route path="/hot-deals" element={<HotDeals />} />

                {/* Destination SEO Pages (Top brand style) */}
                <Route path="/:destinationSlug/:pageSlug" element={<DestinationContent />} />

                {/* Visa Country Routes */}
                <Route path="/visa/dubai" element={<DubaiVisa />} />
                <Route path="/visa/thailand" element={<ThailandVisa />} />
                <Route path="/visa/singapore" element={<SingaporeVisa />} />
                <Route path="/visa/bali" element={<BaliVisa />} />
                <Route path="/visa/maldives" element={<MaldivesVisa />} />
                <Route path="/visa/turkey" element={<TurkeyVisa />} />
                <Route path="/visa/schengen" element={<SchengenVisa />} />
                <Route path="/visa/sri-lanka" element={<SriLankaVisa />} />
                <Route path="/visa/nepal" element={<NepalVisa />} />
                <Route path="/visa/malaysia" element={<MalaysiaVisa />} />

                {/* Legal Routes */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/cancellation-policy" element={<CancellationPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />

                {/* Local SEO Routes */}
                <Route path="/travel-agent-bhilai" element={<TravelAgentBhilai />} />
                <Route path="/visa-agent-bhilai" element={<VisaAgentBhilai />} />
                <Route path="/tour-packages-bhilai" element={<TourPackagesBhilai />} />
                <Route path="/international-tour-packages-bhilai" element={<InternationalPackagesBhilai />} />
                <Route path="/india-tour-packages-bhilai" element={<IndiaPackagesBhilai />} />
                <Route path="/weekend-getaways-bhilai" element={<WeekendGetawaysBhilai />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <CookieConsent />
            <PWAInstallPrompt />
          </BrowserRouter>
        </TooltipProvider>
      </SecurityProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
