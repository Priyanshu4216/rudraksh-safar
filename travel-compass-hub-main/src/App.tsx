import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import SecurityProvider from "./components/SecurityProvider";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import Index from "./pages/Index";
import DomesticPackages from "./pages/DomesticPackages";
import InternationalPackages from "./pages/InternationalPackages";
import HoneymoonPackages from "./pages/HoneymoonPackages";
import FamilyPackages from "./pages/FamilyPackages";
import AdventurePackages from "./pages/AdventurePackages";
import LuxuryPackages from "./pages/LuxuryPackages";
import PackageDetails from "./pages/PackageDetails";
import ForTravellers from "./pages/ForTravellers";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="rudraksh-safar-theme">
      <SecurityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
            <PWAInstallPrompt />
          </BrowserRouter>
        </TooltipProvider>
      </SecurityProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
