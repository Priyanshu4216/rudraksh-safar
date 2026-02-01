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
import GlobalLoader from "./components/GlobalLoader"; // Fixed loader path
import GlobalError from "./components/GlobalError";

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
const TicketBookingBhilai = lazy(() => import("./pages/local/TicketBookingBhilai"));
const TrainBookingBhilai = lazy(() => import("./pages/local/TrainBookingBhilai"));
const FlightBookingBhilai = lazy(() => import("./pages/local/FlightBookingBhilai"));
const BusBookingBhilai = lazy(() => import("./pages/local/BusBookingBhilai"));
const PassportAgentBhilai = lazy(() => import("./pages/local/PassportAgentBhilai"));
const TravelAgentRaipur = lazy(() => import("./pages/local/TravelAgentRaipur"));
const TourPackagesRaipur = lazy(() => import("./pages/local/TourPackagesRaipur"));
const WeekendGetawaysRaipur = lazy(() => import("./pages/local/WeekendGetawaysRaipur"));
const CorporateTourPackagesBhilai = lazy(() => import("./pages/local/CorporateTourPackagesBhilai"));
const CabRental = lazy(() => import("./pages/CabRental"));
const CruiseBooking = lazy(() => import("./pages/CruiseBooking"));

// New High Reach SEO Pages
const TourPackagesFromBhilai = lazy(() => import("./pages/local/TourPackagesFromBhilai"));
const TourPackagesFromRaipur = lazy(() => import("./pages/local/TourPackagesFromRaipur"));
const InternationalToursFromRaipur = lazy(() => import("./pages/local/InternationalToursFromRaipur"));
const InternationalToursFromBhilai = lazy(() => import("./pages/local/InternationalToursFromBhilai"));
const HoneymoonPackagesFromBhilai = lazy(() => import("./pages/local/HoneymoonPackagesFromBhilai"));

const BudgetTourPackages = lazy(() => import("./pages/BudgetTourPackages"));
const SummerHolidayPackages = lazy(() => import("./pages/SummerHolidayPackages"));
const GroupTourPackages = lazy(() => import("./pages/GroupTourPackages"));
const BeachHolidayPackages = lazy(() => import("./pages/BeachHolidayPackages"));
const MountainHolidayPackages = lazy(() => import("./pages/MountainHolidayPackages"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="rudraksh-safar-theme">
      <SecurityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollProgressBar />
            <ScrollToTop />
            <GlobalError>
              <Suspense fallback={<GlobalLoader />}>
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

                  {/* Local SEO Pages - Raipur & Bhilai */}
                  <Route path="/travel-agent-raipur" element={<TravelAgentRaipur />} />
                  <Route path="/tour-packages-raipur" element={<TourPackagesRaipur />} />
                  <Route path="/weekend-getaways-raipur" element={<WeekendGetawaysRaipur />} />
                  <Route path="/corporate-tour-packages-bhilai" element={<CorporateTourPackagesBhilai />} />

                  {/* Thematic SEO Pages */}
                  <Route path="/budget-tour-packages" element={<BudgetTourPackages />} />
                  <Route path="/summer-holiday-packages" element={<SummerHolidayPackages />} />
                  <Route path="/group-tour-packages" element={<GroupTourPackages />} />
                  <Route path="/beach-holiday-packages" element={<BeachHolidayPackages />} />
                  <Route path="/mountain-holiday-packages" element={<MountainHolidayPackages />} />
                  <Route path="/why-choose-us" element={<WhyChooseUs />} />
                  <Route path="/visa/nepal" element={<NepalVisa />} />
                  <Route path="/visa/malaysia" element={<MalaysiaVisa />} />
                  <Route path="/cab-rental" element={<CabRental />} />
                  <Route path="/cruise-booking" element={<CruiseBooking />} />

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
                  <Route path="/ticket-booking-bhilai" element={<TicketBookingBhilai />} />
                  <Route path="/train-booking-bhilai" element={<TrainBookingBhilai />} />
                  <Route path="/flight-booking-bhilai" element={<FlightBookingBhilai />} />
                  <Route path="/bus-booking-bhilai" element={<BusBookingBhilai />} />
                  <Route path="/passport-agent-bhilai" element={<PassportAgentBhilai />} />

                  {/* New High Reach SEO Routes */}
                  <Route path="/tour-packages-from-bhilai" element={<TourPackagesFromBhilai />} />
                  <Route path="/tour-packages-from-raipur" element={<TourPackagesFromRaipur />} />
                  <Route path="/international-tours-from-raipur" element={<InternationalToursFromRaipur />} />
                  <Route path="/international-tours-from-bhilai" element={<InternationalToursFromBhilai />} />
                  <Route path="/honeymoon-packages-from-bhilai" element={<HoneymoonPackagesFromBhilai />} />

                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </GlobalError>
            <CookieConsent />
            <PWAInstallPrompt />
          </BrowserRouter >
        </TooltipProvider >
      </SecurityProvider >
    </ThemeProvider >
  </QueryClientProvider >
);

export default App;
