import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import SecurityProvider from "./components/SecurityProvider";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import AutoUpdateController from "./components/AutoUpdateController";
import Index from "./pages/Index";
import HomeRedesign from "./pages/HomeRedesign";
import SearchExperience from "./pages/SearchExperience";
import CookieConsent from "./components/CookieConsent";
import ScrollProgressBar from "./components/ScrollProgressBar";
import GlobalLoader from "./components/GlobalLoader"; // Fixed loader path
import HomeLoader from "./components/HomeLoader";
import GlobalError from "./components/GlobalError";
import GlobalSchema from "./components/seo/GlobalSchema";
import AuthorPage from './pages/blog/AuthorPage';
import Contact from './pages/Contact';
// Traveller Guide Pages

// Route-level code splitting (improves initial load on slow networks)
const DomesticPackages = lazy(() => import("./pages/DomesticPackages"));
const InternationalPackages = lazy(() => import("./pages/InternationalPackages"));
const LadakhMaster = lazy(() => import("./pages/domestic/ladakh/LadakhMaster"));
const HoneymoonPackages = lazy(() => import("./pages/HoneymoonPackages"));
const FamilyPackages = lazy(() => import("./pages/FamilyPackages"));
const AdventurePackages = lazy(() => import("./pages/AdventurePackages"));
const LuxuryPackages = lazy(() => import("./pages/LuxuryPackages"));
const KashmirMaster = lazy(() => import("./pages/domestic/kashmir/KashmirMaster"));
const ManaliMaster = lazy(() => import("./pages/domestic/manali/ManaliMaster"));
const KeralaMaster = lazy(() => import("./pages/domestic/kerala/KeralaMaster"));
const ThailandMaster = lazy(() => import("./pages/international/thailand/ThailandMaster"));
const DubaiMaster = lazy(() => import("./pages/international/dubai/DubaiMaster"));
const SingaporeMaster = lazy(() => import('./pages/international/singapore/SingaporeMaster'));
const BaliMaster = lazy(() => import('./pages/international/bali/BaliMaster'));
const SriLankaMaster = lazy(() => import('./pages/international/srilanka/SriLankaMaster'));
const AndamanMaster = lazy(() => import('./pages/domestic/andaman/AndamanMaster'));
const GoaMaster = lazy(() => import('./pages/domestic/goa/GoaMaster'));
const PackageDetails = lazy(() => import("./pages/PackageDetails"));
const ForTravellers = lazy(() => import("./pages/ForTravellers"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Traveller Guide Pages
// Traveller Guide Pages - Moved to Services
const VisaGuide = lazy(() => import("./pages/services/VisaGuide"));
const PassportGuide = lazy(() => import("./pages/services/PassportGuide"));
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
const IndiaPackagesBhilai = lazy(() => import("./pages/local/IndiaPackagesBhilai"));
const WeekendGetawaysBhilai = lazy(() => import("./pages/local/WeekendGetawaysBhilai"));
const TicketBookingBhilai = lazy(() => import("./pages/local/TicketBookingBhilai"));
const TrainBookingBhilai = lazy(() => import("./pages/local/TrainBookingBhilai"));
const FlightBookingBhilai = lazy(() => import("./pages/local/FlightBookingBhilai"));
const CheapestTripsFromBhilai = lazy(() => import("./pages/local/CheapestTripsFromBhilai"));
const BusBookingBhilai = lazy(() => import("./pages/local/BusBookingBhilai"));
const PicnicSpotsBhilai = lazy(() => import("./pages/local/PicnicSpotsBhilai"));
const PassportAgentBhilai = lazy(() => import("./pages/local/PassportAgentBhilai"));
const TravelAgentRaipur = lazy(() => import("./pages/local/TravelAgentRaipur"));
const TravelAgentDurg = lazy(() => import("./pages/local/TravelAgentDurg"));
const TourPackagesRaipur = lazy(() => import("./pages/local/TourPackagesRaipur"));
const WeekendGetawaysRaipur = lazy(() => import("./pages/local/WeekendGetawaysRaipur"));
const CorporateTourPackagesBhilai = lazy(() => import("./pages/local/CorporateTourPackagesBhilai"));

const CabRental = lazy(() => import("./pages/services/CabRental"));
const CruiseBooking = lazy(() => import("./pages/services/CruiseBooking"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const TravelDocuments = lazy(() => import("./pages/TravelDocuments"));
const TravelSafety = lazy(() => import("./pages/TravelSafety"));
const TravelInspiration = lazy(() => import("./pages/TravelInspiration"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const TravelGuideBhilai = lazy(() => import("./pages/local/TravelGuideBhilai"));
const LegalDisclaimer = lazy(() => import("./pages/LegalDisclaimer"));
const HotelBooking = lazy(() => import("./pages/services/HotelBooking"));

// New High Reach SEO Pages
const TourPackagesFromBhilai = lazy(() => import("./pages/local/TourPackagesFromBhilai"));
const TourPackagesFromRaipur = lazy(() => import("./pages/local/TourPackagesFromRaipur"));
const InternationalToursFromRaipur = lazy(() => import("./pages/local/InternationalToursFromRaipur"));
const InternationalToursFromBhilai = lazy(() => import("./pages/local/InternationalToursFromBhilai"));
const HoneymoonPackagesFromBhilai = lazy(() => import("./pages/local/HoneymoonPackagesFromBhilai"));
const GoaTourPackageFromBhilai = lazy(() => import('./pages/domestic/goa/GoaTourPackageFromBhilai'));
const GoaPackageFromRaipur = lazy(() => import('./pages/domestic/goa/GoaPackageFromRaipur'));
const GoaPackageFromDurg = lazy(() => import('./pages/domestic/goa/GoaPackageFromDurg'));
const GoaTripFromSupela = lazy(() => import('./pages/domestic/goa/GoaTripFromSupela'));
const GoaTripUnder10000 = lazy(() => import('./pages/domestic/goa/GoaTripUnder10000'));
const GoaCheapTripGuide = lazy(() => import('./pages/domestic/goa/GoaCheapTripGuide'));
const GoaBudgetItinerary = lazy(() => import('./pages/domestic/goa/GoaBudgetItinerary'));
const NorthVsSouthGoa = lazy(() => import('./pages/domestic/goa/NorthVsSouthGoa'));
const TrainVsFlightGoa = lazy(() => import('./pages/domestic/goa/TrainVsFlightGoa'));
const ManaliTourPackageFromBhilai = lazy(() => import("./pages/domestic/manali/ManaliTourPackageFromBhilai"));
const KeralaTourPackageFromBhilai = lazy(() => import("./pages/domestic/kerala/KeralaTourPackageFromBhilai"));
const KashmirTourPackageFromBhilai = lazy(() => import("./pages/domestic/kashmir/KashmirTourPackageFromBhilai"));
const ThailandTourPackageFromRaipur = lazy(() => import("./pages/international/thailand/ThailandTourPackageFromRaipur"));
const DubaiTourPackageFromRaipur = lazy(() => import("./pages/international/dubai/DubaiTourPackageFromRaipur"));
const ThailandTourPackageFromBhilai = lazy(() => import("./pages/international/thailand/ThailandTourPackageFromBhilai"));
const DubaiTourPackageFromBhilai = lazy(() => import("./pages/international/dubai/DubaiTourPackageFromBhilai"));
const ChardhamYatraPackageFromBhilai = lazy(() => import("./pages/local/ChardhamYatraPackageFromBhilai"));
const RajasthanTourPackageFromBhilai = lazy(() => import("./pages/local/RajasthanTourPackageFromBhilai"));
const SingaporeTourPackageFromBhilai = lazy(() => import("./pages/international/singapore/SingaporeTourPackageFromBhilai"));
const NepalTourPackageFromBhilai = lazy(() => import("./pages/local/NepalTourPackageFromBhilai"));
const BaliTourPackageFromRaipur = lazy(() => import("./pages/international/bali/BaliTourPackageFromRaipur"));
const BaliTourPackageFromBhilai = lazy(() => import("./pages/international/bali/BaliTourPackageFromBhilai"));
const SriLankaTourPackageFromBhilai = lazy(() => import("./pages/international/srilanka/SriLankaTourPackageFromBhilai"));
const SriLankaTourPackageFromRaipur = lazy(() => import("./pages/international/srilanka/SriLankaTourPackageFromRaipur"));
const AndamanTourPackageFromBhilai = lazy(() => import("./pages/domestic/andaman/AndamanTourPackageFromBhilai"));

// Blog System (Top-1% Architecture)
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const CategoryPage = lazy(() => import("./pages/blog/CategoryPage"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));

const BudgetTourPackages = lazy(() => import("./pages/BudgetTourPackages"));

// FAQ Hub & Silos
const FAQHub = lazy(() => import("./pages/faqs/index"));
const TrainBookingFAQ = lazy(() => import("./pages/faqs/train-booking/index"));
const FlightBookingFAQ = lazy(() => import("./pages/faqs/flight-booking/index"));
const TourPackageFAQ = lazy(() => import("./pages/faqs/tour-packages/index"));
const InternationalToursFAQ = lazy(() => import("./pages/faqs/international-tours/index"));
const HotelBookingFAQ = lazy(() => import("./pages/faqs/hotel-booking/index"));
const CabBookingFAQ = lazy(() => import("./pages/faqs/cab-booking/index"));
const VisaServicesFAQ = lazy(() => import("./pages/faqs/visa-services/index"));
const PassportServicesFAQ = lazy(() => import("./pages/faqs/passport-services/index"));
const CruiseBookingFAQ = lazy(() => import("./pages/faqs/cruise-booking/index"));
const CruiseBookingBhilaiFAQ = lazy(() => import("./pages/faqs/cruise-booking-bhilai/index"));
// const VisaServicesFAQ = lazy(() => import("./pages/faqs/services/VisaServicesFAQ"));
// const PassportServicesFAQ = lazy(() => import("./pages/faqs/passport-services/index"));
// const InternationalToursFAQ = lazy(() => import("./pages/faqs/services/InternationalToursFAQ"));
// const DomesticToursFAQ = lazy(() => import("./pages/faqs/services/DomesticToursFAQ"));
// const CruiseBookingFAQ = lazy(() => import("./pages/faqs/services/CruiseBookingFAQ"));
const BhilaiFAQ = lazy(() => import("./pages/faqs/local/BhilaiFAQ"));
const RaipurFAQ = lazy(() => import("./pages/faqs/local/RaipurFAQ"));
const DurgFAQ = lazy(() => import("./pages/faqs/local/DurgFAQ"));
const SummerHolidayPackages = lazy(() => import("./pages/SummerHolidayPackages"));
const GroupTourPackages = lazy(() => import("./pages/GroupTourPackages"));
const BeachHolidayPackages = lazy(() => import("./pages/BeachHolidayPackages"));
const MountainHolidayPackages = lazy(() => import("./pages/MountainHolidayPackages"));
const SummerSpecialPackages = lazy(() => import("./pages/SummerSpecialPackages"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const WhereToGoFromBhilai = lazy(() => import("./pages/guides/WhereToGoFromBhilai"));
const AfterBookingGuide = lazy(() => import("./pages/guides/AfterBookingGuide"));
const CheckPNRStatus = lazy(() => import("./pages/guides/CheckPNRStatus"));
const GoaVsManali = lazy(() => import("./pages/comparisons/GoaVsManali"));
const PattayaVsPhuket = lazy(() => import("./pages/comparisons/PattayaVsPhuket"));
const CharDhamPillar = lazy(() => import("./pages/CharDhamPillar"));
const KedarnathTemple = lazy(() => import("./pages/chardham/KedarnathTemple"));
const BadrinathTemple = lazy(() => import("./pages/chardham/BadrinathTemple"));
const GangotriTemple = lazy(() => import("./pages/chardham/GangotriTemple"));
const YamunotriTemple = lazy(() => import("./pages/chardham/YamunotriTemple"));
const IsCharDhamSafe = lazy(() => import("./pages/chardham/IsCharDhamSafe"));
const CharDhamRouteMap = lazy(() => import("./pages/chardham/CharDhamRouteMap"));
const CharDhamPrice = lazy(() => import("./pages/chardham/CharDhamPrice"));
const CharDhamSeniors = lazy(() => import("./pages/chardham/CharDhamSeniors"));
const CharDhamFromBhilai = lazy(() => import('./pages/chardham/CharDhamFromBhilai'));
const CharDhamFromRaipur = lazy(() => import('./pages/chardham/CharDhamFromRaipur'));
const CharDhamPacking = lazy(() => import("./pages/chardham/CharDhamPacking"));
const CharDhamRegistration = lazy(() => import("./pages/chardham/CharDhamRegistration"));
const CharDhamPackageBuilder = lazy(() => import("./pages/chardham/CharDhamPackageBuilder"));
const BhilaiToKedarnath = lazy(() => import("./pages/chardham/BhilaiToKedarnath"));

// Phase 7: Thailand Prominence
// Phase 7: Thailand Prominence
const ThailandCityGuide = lazy(() => import('./pages/international/thailand/ThailandCityGuide'));
const ThailandPlanner = lazy(() => import('./pages/international/thailand/ThailandPlanner'));

// Panch Kedar Pages
const Tungnath = lazy(() => import("./pages/chardham/Tungnath"));
const Rudranath = lazy(() => import("./pages/chardham/Rudranath"));
const Madhyamaheshwar = lazy(() => import("./pages/chardham/Madhyamaheshwar"));
const Kalpeshwar = lazy(() => import("./pages/chardham/Kalpeshwar"));

const DownloadTicket = lazy(() => import("./pages/booking/DownloadTicket"));
const YatraStatus = lazy(() => import("./pages/booking/YatraStatus"));

// UAE
const AttractionPage = lazy(() => import("./pages/uae/AttractionPage"));
const DubaiTravelGuide = lazy(() => import("./pages/uae/DubaiTravelGuide"));
const DubaiPackages = lazy(() => import("./pages/uae/DubaiPackages"));
const DubaiVisaGuide = lazy(() => import("./pages/uae/DubaiVisaGuide"));
const DubaiItinerary4Days = lazy(() => import("./pages/uae/DubaiItinerary4Days"));
const DubaiItinerary5Days = lazy(() => import("./pages/uae/DubaiItinerary5Days"));
const DubaiFromRaipur = lazy(() => import("./pages/uae/DubaiFromRaipur"));
const DubaiFromBhilai = lazy(() => import("./pages/uae/DubaiFromBhilai"));
const DubaiVsAbuDhabi = lazy(() => import("./pages/comparisons/DubaiVsAbuDhabi"));

// Ladakh SEO Pages - Lazy Loaded
const LadakhPillar = lazy(() => import("./pages/ladakh/LadakhPillar"));
const LadakhViaSrinagar = lazy(() => import("./pages/ladakh/LadakhViaSrinagar"));
const LadakhViaManali = lazy(() => import("./pages/ladakh/LadakhViaManali"));
const ManaliVsSrinagar = lazy(() => import("./pages/ladakh/ManaliVsSrinagar"));
const LadakhTripCost = lazy(() => import("./pages/ladakh/LadakhTripCost"));
const BestTimeLadakh = lazy(() => import("./pages/ladakh/BestTimeLadakh"));
const LadakhBikePackages = lazy(() => import("./pages/ladakh/LadakhBikePackages"));
const LadakhUltimateExpedition = lazy(() => import("./pages/ladakh/LadakhUltimateExpedition"));
const LadakhFromRaipur = lazy(() => import("./pages/domestic/ladakh/LadakhFromRaipur"));
const LadakhFromBhilai = lazy(() => import("./pages/domestic/ladakh/LadakhFromBhilai"));

// Summer Specials
const KashmirSummerSpecial = lazy(() => import("./pages/domestic/kashmir/KashmirSummerSpecial"));
const ManaliSummerSpecial = lazy(() => import("./pages/domestic/manali/ManaliSummerSpecial"));
const SpitiSummerSpecial = lazy(() => import("./pages/summer/SpitiSummerSpecial"));
const SikkimSummerSpecial = lazy(() => import("./pages/summer/SikkimSummerSpecial"));
const MunsiyariSummerSpecial = lazy(() => import("./pages/summer/MunsiyariSummerSpecial"));
const LadakhFromChhattisgarh = lazy(() => import("./pages/ladakh/LadakhFromChhattisgarh"));
const LadakhSafety = lazy(() => import("./pages/ladakh/LadakhSafety"));
const LadakhPackingList = lazy(() => import("./pages/ladakh/LadakhPackingList"));
const PangongLake = lazy(() => import("./pages/ladakh/PangongLake"));

const queryClient = new QueryClient();


import NotificationPermission from "@/components/notifications/NotificationPermission";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="rudraksh-safar-theme">
      <SecurityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Sonner />
          <AutoUpdateController />
          <NotificationPermission />
          <BrowserRouter>
            <ScrollProgressBar />
            <HomeLoader />
            <ScrollToTop />
            <GlobalSchema />
            <GlobalError>
              <Suspense fallback={<GlobalLoader />}>
                <Routes>
                  <Route path="/" element={<HomeRedesign />} />
                  <Route path="/search" element={<SearchExperience />} />
                  <Route path="/old-home" element={<Index />} />
                  <Route path="/domestic-packages" element={<DomesticPackages />} />
                  <Route path="/international-packages" element={<InternationalPackages />} />
                  <Route path="/honeymoon-packages" element={<HoneymoonPackages />} />
                  <Route path="/family-packages" element={<FamilyPackages />} />
                  <Route path="/adventure-packages" element={<AdventurePackages />} />
                  <Route path="/luxury-packages" element={<LuxuryPackages />} />
                  <Route path="/for-travellers" element={<ForTravellers />} />
                  <Route path="/package/:packageId" element={<PackageDetails />} />

                  {/* Traveller Guide Routes */}
                  <Route path="/travel-services/visa-assistance" element={<VisaGuide />} />
                  <Route path="/travel-services/passport-assistance" element={<PassportGuide />} />

                  <Route path="/visa-free-countries" element={<VisaFreeCountries />} />
                  <Route path="/travel-checklist" element={<TravelChecklist />} />
                  <Route path="/currency-guide" element={<CurrencyGuide />} />
                  <Route path="/best-time-to-visit" element={<BestTimeToVisit />} />

                  {/* FAQ Silos - Phase 29 */}
                  <Route path="/faqs" element={<FAQHub />} />
                  <Route path="/faqs/train-booking" element={<TrainBookingFAQ />} />
                  <Route path="/faqs/flight-booking" element={<FlightBookingFAQ />} />
                  <Route path="/faqs/tour-packages" element={<TourPackageFAQ />} />
                  <Route path="/faqs/international-tours" element={<InternationalToursFAQ />} />
                  <Route path="/faqs/hotel-booking" element={<HotelBookingFAQ />} />
                  <Route path="/faqs/cab-booking" element={<CabBookingFAQ />} />
                  <Route path="/faqs/visa-services" element={<VisaServicesFAQ />} />
                  <Route path="/faqs/passport-services" element={<PassportServicesFAQ />} />
                  <Route path="/faqs/cruise-booking" element={<CruiseBookingFAQ />} />
                  {/* <Route path="/faqs/passport-services" element={<PassportServicesFAQ />} />
                  <Route path="/faqs/international-tours" element={<InternationalToursFAQ />} />
                  <Route path="/faqs/domestic-tours" element={<DomesticToursFAQ />} />
                  <Route path="/faqs/cruise-booking" element={<CruiseBookingFAQ />} /> */}
                  <Route path="/faqs/bhilai" element={<BhilaiFAQ />} />
                  <Route path="/faqs/raipur" element={<RaipurFAQ />} />
                  <Route path="/faqs/durg" element={<DurgFAQ />} />

                  <Route path="/travel-health" element={<TravelHealth />} />
                  <Route path="/travel-tips" element={<TravelTips />} />
                  <Route path="/hot-deals" element={<HotDeals />} />

                  {/* Destination SEO Pages moved to bottom */}

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
                  <Route path="/travel-agent-durg" element={<TravelAgentDurg />} />
                  <Route path="/tour-packages-raipur" element={<TourPackagesRaipur />} />

                  <Route path="/tour-packages-from-raipur/weekend-getaways" element={<WeekendGetawaysRaipur />} />
                  <Route path="/tour-packages-from-bhilai/corporate-tours" element={<CorporateTourPackagesBhilai />} />

                  {/* Thematic SEO Pages */}
                  <Route path="/budget-tour-packages" element={<BudgetTourPackages />} />
                  <Route path="/summer-holiday-packages" element={<SummerHolidayPackages />} />
                  <Route path="/group-tour-packages" element={<GroupTourPackages />} />
                  <Route path="/beach-holiday-packages" element={<BeachHolidayPackages />} />
                  <Route path="/mountain-holiday-packages" element={<MountainHolidayPackages />} />
                  <Route path="/summer-special-packages" element={<SummerSpecialPackages />} />
                  <Route path="/why-choose-us" element={<WhyChooseUs />} />
                  <Route path="/visa/nepal" element={<NepalVisa />} />
                  <Route path="/visa/malaysia" element={<MalaysiaVisa />} />
                  <Route path="/travel-services/cab-rental" element={<CabRental />} />
                  <Route path="/travel-services/cruise-booking" element={<CruiseBooking />} />
                  <Route path="/cruise-booking" element={<Navigate to="/travel-services/cruise-booking" replace />} />
                  <Route path="/visa-guide" element={<Navigate to="/travel-services/visa-assistance" replace />} />
                  <Route path="/cab-rental" element={<Navigate to="/travel-services/cab-rental" replace />} />
                  <Route path="/hotel-booking" element={<Navigate to="/travel-services/hotel-booking" replace />} />

                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/travel-documents" element={<TravelDocuments />} />
                  <Route path="/travel-safety" element={<TravelSafety />} />
                  <Route path="/travel-inspiration" element={<TravelInspiration />} />
                  <Route path="/about-rudraksh-safar" element={<AboutUs />} />
                  <Route path="/travel-guide-from-bhilai" element={<TravelGuideBhilai />} />
                  <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
                  <Route path="/travel-services/hotel-booking" element={<HotelBooking />} />

                  {/* Char Dham Yatra Pillar (Phase 1) */}
                  <Route path="/chardham-yatra-package" element={<CharDhamPillar />} />
                  <Route path="/kedarnath-temple" element={<KedarnathTemple />} />
                  <Route path="/badrinath-temple" element={<BadrinathTemple />} />
                  <Route path="/gangotri-temple" element={<GangotriTemple />} />
                  <Route path="/yamunotri-temple" element={<YamunotriTemple />} />

                  {/* Panch Kedar */}
                  <Route path="/tungnath-temple" element={<Tungnath />} />
                  <Route path="/rudranath-temple" element={<Rudranath />} />
                  <Route path="/madhyamaheshwar-temple" element={<Madhyamaheshwar />} />
                  <Route path="/kalpeshwar-temple" element={<Kalpeshwar />} />
                  <Route path="/is-chardham-yatra-safe" element={<IsCharDhamSafe />} />
                  <Route path="/chardham-yatra-route-map" element={<CharDhamRouteMap />} />
                  <Route path="/chardham-yatra-price" element={<CharDhamPrice />} />
                  <Route path="/chardham-yatra-for-seniors" element={<CharDhamSeniors />} />
                  <Route path="/chardham-yatra-from-bhilai" element={<CharDhamFromBhilai />} />
                  <Route path="/what-to-pack-for-chardham-yatra" element={<CharDhamPacking />} />
                  <Route path="/chardham-yatra-registration-process" element={<CharDhamRegistration />} />
                  <Route path="/plan-your-yatra" element={<CharDhamPackageBuilder />} />
                  <Route path="/bhilai-to-kedarnath-yatra-package-2026" element={<BhilaiToKedarnath />} />

                  {/* Thailand Dominance - MOVED TO MASTER SILO */}
                  <Route path="/thailand-tour-packages" element={<Navigate to="/international-tours/thailand" replace />} />
                  <Route path="/thailand-tour-packages-from-raipur" element={<Navigate to="/international-tours/thailand-from-raipur" replace />} />
                  <Route path="/thailand-tour-packages/bangkok" element={<Navigate to="/international-tours/thailand/bangkok" replace />} />
                  <Route path="/thailand-tour-packages/pattaya" element={<Navigate to="/international-tours/thailand/pattaya" replace />} />
                  <Route path="/thailand-tour-packages/phuket" element={<Navigate to="/international-tours/thailand/phuket" replace />} />
                  <Route path="/thailand-tour-packages/krabi" element={<Navigate to="/international-tours/thailand/krabi" replace />} />
                  <Route path="/thailand-tour-packages/:cityId" element={<Navigate to="/international-tours/thailand" replace />} />
                  {/* <Route path="/plan-your-thailand-trip" element={<ThailandPlanner />} /> */}

                  {/* Phase 10: UAE Domination (Attraction Engine) */}
                  <Route path="/dubai-travel-guide" element={<DubaiTravelGuide />} />

                  <Route path="/dubai-all-packages" element={<DubaiPackages />} />
                  <Route path="/dubai-visa-for-indians" element={<DubaiVisaGuide />} />
                  <Route path="/dubai-4-day-itinerary" element={<DubaiItinerary4Days />} />
                  <Route path="/dubai-5-day-itinerary" element={<DubaiItinerary5Days />} />
                  <Route path="/dubai-tour-packages-from-raipur" element={<DubaiFromRaipur />} />
                  <Route path="/dubai/:slug" element={<AttractionPage />} />
                  <Route path="/abu-dhabi/:slug" element={<AttractionPage />} />
                  {/* Redirect Legacy if needed or just keep /uae as fallback if links exist */}
                  <Route path="/uae/:slug" element={<Navigate to="/dubai/:slug" replace />} />

                  {/* Ladakh SEO Pages */}
                  {/* NEW MASTER SILO */}
                  <Route path="/domestic-tours/ladakh" element={<LadakhMaster />} />

                  {/* Kashmir Master Silo */}
                  <Route path="/domestic-tours/kashmir" element={<KashmirMaster />} />
                  <Route path="/domestic-tours/kashmir-from-bhilai" element={<KashmirTourPackageFromBhilai />} />

                  {/* Manali Master Silo */}
                  <Route path="/domestic-tours/manali" element={<ManaliMaster />} />
                  <Route path="/domestic-tours/manali-from-bhilai" element={<ManaliTourPackageFromBhilai />} />

                  {/* Kerala Master Silo */}
                  <Route path="/domestic-tours/kerala" element={<KeralaMaster />} />
                  <Route path="/domestic-tours/kerala-from-bhilai" element={<KeralaTourPackageFromBhilai />} />

                  {/* Thailand Master Silo */}
                  <Route path="/international-tours/thailand" element={<ThailandMaster />} />
                  <Route path="/international-tours/thailand-from-raipur" element={<ThailandTourPackageFromRaipur />} />
                  <Route path="/international-tours/thailand-from-bhilai" element={<ThailandTourPackageFromBhilai />} />

                  {/* Thailand Prominence Routes */}
                  <Route path="/international-tours/thailand/:cityId" element={<ThailandCityGuide />} />
                  <Route path="/plan-your-thailand-trip" element={<ThailandPlanner />} />

                  {/* Dubai Master Silo */}
                  <Route path="/international-tours/dubai" element={<DubaiMaster />} />
                  <Route path="/international-tours/dubai-from-raipur" element={<DubaiTourPackageFromRaipur />} />
                  <Route path="/international-tours/dubai-from-bhilai" element={<DubaiTourPackageFromBhilai />} />

                  {/* Singapore Master Silo */}
                  <Route path="/international-tours/singapore" element={<SingaporeMaster />} />
                  <Route path="/international-tours/singapore-from-bhilai" element={<SingaporeTourPackageFromBhilai />} />

                  {/* Bali Master Silo */}
                  <Route path="/international-tours/bali" element={<BaliMaster />} />
                  <Route path="/international-tours/bali-from-raipur" element={<BaliTourPackageFromRaipur />} />
                  <Route path="/international-tours/bali-from-bhilai" element={<BaliTourPackageFromBhilai />} />

                  {/* Sri Lanka Master Silo */}
                  <Route path="/international-tours/srilanka" element={<SriLankaMaster />} />
                  <Route path="/international-tours/srilanka-from-raipur" element={<SriLankaTourPackageFromRaipur />} />
                  <Route path="/international-tours/srilanka-from-bhilai" element={<SriLankaTourPackageFromBhilai />} />

                  {/* Andaman Master Silo */}
                  <Route path="/domestic-tours/andaman" element={<AndamanMaster />} />
                  <Route path="/domestic-tours/andaman-from-bhilai" element={<AndamanTourPackageFromBhilai />} />

                  {/* Goa Master Silo */}
                  <Route path="/domestic-tours/goa" element={<GoaMaster />} />
                  <Route path="/domestic-tours/goa-from-bhilai" element={<GoaTourPackageFromBhilai />} />
                  <Route path="/domestic-tours/goa-from-raipur" element={<GoaPackageFromRaipur />} />
                  <Route path="/domestic-tours/goa-from-durg" element={<GoaPackageFromDurg />} />

                  <Route path="/domestic-tours/goa-trip-from-supela" element={<GoaTripFromSupela />} />

                  <Route path="/domestic-tours/goa-trip-under-10000" element={<GoaTripUnder10000 />} />
                  <Route path="/goa-trip-under-10000-from-bhilai" element={<GoaTripUnder10000 />} />

                  <Route path="/domestic-tours/goa-cheap-trip-guide" element={<GoaCheapTripGuide />} />

                  <Route path="/domestic-tours/goa-budget-itinerary" element={<GoaBudgetItinerary />} />
                  <Route path="/goa-budget-itinerary-from-bhilai" element={<GoaBudgetItinerary />} />

                  <Route path="/domestic-tours/north-vs-south-goa" element={<NorthVsSouthGoa />} />

                  <Route path="/domestic-tours/train-vs-flight-goa" element={<TrainVsFlightGoa />} />

                  <Route path="/ladakh-tour-via-srinagar" element={<LadakhViaSrinagar />} />
                  <Route path="/ladakh-tour-via-manali" element={<LadakhViaManali />} />
                  <Route path="/manali-vs-srinagar-route-ladakh" element={<ManaliVsSrinagar />} />
                  <Route path="/ladakh-trip-cost" element={<LadakhTripCost />} />
                  <Route path="/best-time-to-visit-ladakh" element={<BestTimeLadakh />} />
                  <Route path="/ladakh-bike-trip-packages" element={<LadakhBikePackages />} />
                  <Route path="/ladakh-ultimate-expedition" element={<LadakhUltimateExpedition />} />
                  <Route path="/domestic-tours/ladakh-from-raipur" element={<LadakhFromRaipur />} />

                  <Route path="/domestic-tours/ladakh-from-bhilai" element={<LadakhFromBhilai />} />

                  <Route path="/ladakh-tour-packages-from-chhattisgarh" element={<LadakhFromChhattisgarh />} />

                  <Route path="/is-ladakh-safe" element={<LadakhSafety />} />

                  <Route path="/ladakh-packing-list" element={<LadakhPackingList />} />

                  <Route path="/pangong-lake-guide" element={<PangongLake />} />

                  {/* Summer Special Routes */}
                  <Route path="/kashmir-tour-package-from-bhilai" element={<KashmirSummerSpecial />} />
                  <Route path="/manali-tour-package-from-bhilai" element={<ManaliSummerSpecial />} />
                  <Route path="/spiti-valley-tour-package" element={<SpitiSummerSpecial />} />
                  <Route path="/sikkim-tour-package" element={<SikkimSummerSpecial />} />
                  <Route path="/munsiyari-tour-package" element={<MunsiyariSummerSpecial />} />

                  {/* Legal Routes */}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/cancellation-policy" element={<CancellationPolicy />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />

                  {/* Booking Management (Phase 8) */}
                  <Route path="/download-ticket" element={<DownloadTicket />} />
                  <Route path="/yatra-status" element={<YatraStatus />} />

                  {/* Local SEO Routes */}
                  <Route path="/travel-agent-bhilai" element={<TravelAgentBhilai />} />
                  <Route path="/visa-agent-bhilai" element={<VisaAgentBhilai />} />
                  <Route path="/tour-packages-bhilai" element={<Navigate to="/tour-packages-from-bhilai" replace />} />
                  <Route path="/india-tour-packages-bhilai" element={<IndiaPackagesBhilai />} />
                  <Route path="/tour-packages-from-bhilai/weekend-getaways" element={<WeekendGetawaysBhilai />} />
                  <Route path="/ticket-booking-bhilai" element={<TicketBookingBhilai />} />
                  <Route path="/train-booking-bhilai" element={<TrainBookingBhilai />} />
                  <Route path="/flight-booking-bhilai" element={<FlightBookingBhilai />} />
                  <Route path="/tour-packages-from-bhilai/cheapest-trips" element={<CheapestTripsFromBhilai />} />
                  <Route path="/bus-booking-bhilai" element={<BusBookingBhilai />} />
                  <Route path="/tour-packages-from-bhilai/picnic-spots" element={<PicnicSpotsBhilai />} />

                  {/* BLOG SYSTEM ROUTES */}
                  <Route path="/blog" element={<BlogIndex />} />
                  <Route path="/blog/:category" element={<CategoryPage />} />
                  <Route path="/blog/:category/:slug" element={<BlogPost />} />
                  <Route path="/authors/:slug" element={<AuthorPage />} />

                  <Route path="/tour-packages-from-bhilai" element={<TourPackagesFromBhilai />} />
                  <Route path="/tour-packages-from-raipur" element={<TourPackagesFromRaipur />} />
                  <Route path="/dubai-tour-packages-from-bhilai" element={<DubaiFromBhilai />} />

                  {/* Raipur Silo Children */}
                  <Route path="/tour-packages-from-raipur/international-tours" element={<InternationalToursFromRaipur />} />
                  <Route path="/tour-packages-from-raipur/weekend-getaways" element={<WeekendGetawaysRaipur />} />

                  {/* Bhilai Silo Children */}
                  <Route path="/tour-packages-from-bhilai/international-tours" element={<InternationalToursFromBhilai />} />
                  <Route path="/tour-packages-from-bhilai/honeymoon-packages" element={<HoneymoonPackagesFromBhilai />} />

                  {/* Phase 1: Goa Search Monopoly */}
                  <Route path="/chardham-yatra-package-from-bhilai" element={<ChardhamYatraPackageFromBhilai />} />
                  <Route path="/rajasthan-tour-package-from-bhilai" element={<RajasthanTourPackageFromBhilai />} />
                  <Route path="/nepal-tour-package-from-bhilai" element={<NepalTourPackageFromBhilai />} />


                  {/* Sitemap */}
                  <Route path="/sitemap" element={<Sitemap />} />

                  {/* New Content Hub Routes - Phase 9 */}
                  <Route path="/guides/where-to-go-from-bhilai" element={<WhereToGoFromBhilai />} />
                  <Route path="/guides/after-booking-guide" element={<AfterBookingGuide />} />
                  <Route path="/comparisons/goa-vs-manali-from-chhattisgarh" element={<GoaVsManali />} />
                  <Route path="/comparisons/pattaya-vs-phuket" element={<PattayaVsPhuket />} />
                  <Route path="/comparisons/dubai-vs-abu-dhabi" element={<DubaiVsAbuDhabi />} />
                  <Route path="/how-to-check-pnr-status" element={<CheckPNRStatus />} />
                  <Route path="/contact" element={<Contact />} />

                  {/* FAQ Silos - Phase 29 */}
                  <Route path="/faqs/train-booking" element={<TrainBookingFAQ />} />

                  {/* Generic Package Route */}
                  <Route path="/package/:packageId" element={<PackageDetails />} />

                  {/* Destination SEO Pages (Top brand style) - Moved here to prevent catching static routes */}
                  <Route path="/:destinationSlug/:pageSlug" element={<DestinationContent />} />

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
