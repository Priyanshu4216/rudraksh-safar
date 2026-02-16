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
const CabRental = lazy(() => import("./pages/CabRental"));
const CruiseBooking = lazy(() => import("./pages/CruiseBooking"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const TravelDocuments = lazy(() => import("./pages/TravelDocuments"));
const TravelSafety = lazy(() => import("./pages/TravelSafety"));
const TravelInspiration = lazy(() => import("./pages/TravelInspiration"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const TravelGuideBhilai = lazy(() => import("./pages/local/TravelGuideBhilai"));
const LegalDisclaimer = lazy(() => import("./pages/LegalDisclaimer"));
const HotelBooking = lazy(() => import("./pages/HotelBooking"));

// New High Reach SEO Pages
const TourPackagesFromBhilai = lazy(() => import("./pages/local/TourPackagesFromBhilai"));
const TourPackagesFromRaipur = lazy(() => import("./pages/local/TourPackagesFromRaipur"));
const InternationalToursFromRaipur = lazy(() => import("./pages/local/InternationalToursFromRaipur"));
const InternationalToursFromBhilai = lazy(() => import("./pages/local/InternationalToursFromBhilai"));
const HoneymoonPackagesFromBhilai = lazy(() => import("./pages/local/HoneymoonPackagesFromBhilai"));
const GoaTourPackageFromBhilai = lazy(() => import("./pages/local/GoaTourPackageFromBhilai"));
const GoaPackageFromRaipur = lazy(() => import("./pages/local/GoaPackageFromRaipur"));
const GoaPackageFromDurg = lazy(() => import("./pages/local/GoaPackageFromDurg"));
const GoaTripFromSupela = lazy(() => import("./pages/local/GoaTripFromSupela"));
const GoaTripUnder10000 = lazy(() => import("./pages/local/GoaTripUnder10000"));
const GoaCheapTripGuide = lazy(() => import("./pages/local/GoaCheapTripGuide"));
const GoaBudgetItinerary = lazy(() => import("./pages/local/GoaBudgetItinerary"));
const TrainVsFlightGoa = lazy(() => import("./pages/local/TrainVsFlightGoa"));
const NorthVsSouthGoa = lazy(() => import("./pages/local/NorthVsSouthGoa"));
const ManaliTourPackageFromBhilai = lazy(() => import("./pages/local/ManaliTourPackageFromBhilai"));
const KeralaTourPackageFromBhilai = lazy(() => import("./pages/local/KeralaTourPackageFromBhilai"));
const KashmirTourPackageFromBhilai = lazy(() => import("./pages/local/KashmirTourPackageFromBhilai"));
const ThailandTourPackageFromRaipur = lazy(() => import("./pages/local/ThailandTourPackageFromRaipur"));
const DubaiTourPackageFromRaipur = lazy(() => import("./pages/local/DubaiTourPackageFromRaipur"));
const ThailandTourPackageFromBhilai = lazy(() => import("./pages/local/ThailandTourPackageFromBhilai"));
const DubaiTourPackageFromBhilai = lazy(() => import("./pages/local/DubaiTourPackageFromBhilai"));
const ChardhamYatraPackageFromBhilai = lazy(() => import("./pages/local/ChardhamYatraPackageFromBhilai"));
const RajasthanTourPackageFromBhilai = lazy(() => import("./pages/local/RajasthanTourPackageFromBhilai"));
const SingaporeTourPackageFromBhilai = lazy(() => import("./pages/local/SingaporeTourPackageFromBhilai"));
const NepalTourPackageFromBhilai = lazy(() => import("./pages/local/NepalTourPackageFromBhilai"));
const BaliTourPackageFromRaipur = lazy(() => import("./pages/local/BaliTourPackageFromRaipur"));
const BaliTourPackageFromBhilai = lazy(() => import("./pages/local/BaliTourPackageFromBhilai"));
const SriLankaTourPackageFromBhilai = lazy(() => import("./pages/local/SriLankaTourPackageFromBhilai"));
const SriLankaTourPackageFromRaipur = lazy(() => import("./pages/local/SriLankaTourPackageFromRaipur"));
const AndamanTourPackageFromBhilai = lazy(() => import("./pages/local/AndamanTourPackageFromBhilai"));

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
const ThailandPillar = lazy(() => import("./pages/thailand/ThailandPillar"));
const ThailandFromRaipur = lazy(() => import("./pages/thailand/ThailandFromRaipur"));
const ThailandCityGuide = lazy(() => import("./pages/thailand/ThailandCityGuide"));
const ThailandPlanner = lazy(() => import("./pages/thailand/ThailandPlanner"));

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
const LadakhFromRaipur = lazy(() => import("./pages/ladakh/LadakhFromRaipur"));
const LadakhFromBhilai = lazy(() => import("./pages/ladakh/LadakhFromBhilai"));
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
                  <Route path="/visa-guide" element={<VisaGuide />} />
                  <Route path="/passport-guide" element={<PassportGuide />} />
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
                  <Route path="/why-choose-us" element={<WhyChooseUs />} />
                  <Route path="/visa/nepal" element={<NepalVisa />} />
                  <Route path="/visa/malaysia" element={<MalaysiaVisa />} />
                  <Route path="/cab-rental" element={<CabRental />} />
                  <Route path="/cruise-booking" element={<CruiseBooking />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/travel-documents" element={<TravelDocuments />} />
                  <Route path="/travel-safety" element={<TravelSafety />} />
                  <Route path="/travel-inspiration" element={<TravelInspiration />} />
                  <Route path="/about-rudraksh-safar" element={<AboutUs />} />
                  <Route path="/travel-guide-from-bhilai" element={<TravelGuideBhilai />} />
                  <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
                  <Route path="/hotel-booking" element={<HotelBooking />} />

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

                  {/* Thailand Dominance */}
                  <Route path="/thailand-tour-packages" element={<ThailandPillar />} />
                  <Route path="/thailand-tour-packages-from-raipur" element={<ThailandFromRaipur />} />
                  <Route path="/thailand-tour-packages/:cityId" element={<ThailandCityGuide />} />
                  <Route path="/plan-your-thailand-trip" element={<ThailandPlanner />} />

                  {/* Phase 10: UAE Domination (Attraction Engine) */}
                  <Route path="/dubai-travel-guide" element={<DubaiTravelGuide />} />
                  <Route path="/dubai-tour-packages" element={<PackageDetails packageIdOverride="dubai" />} />
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
                  <Route path="/ladakh-tour-packages-from-delhi" element={<LadakhPillar />} />
                  <Route path="/ladakh-tour-via-srinagar" element={<LadakhViaSrinagar />} />
                  <Route path="/ladakh-tour-via-manali" element={<LadakhViaManali />} />
                  <Route path="/manali-vs-srinagar-route-ladakh" element={<ManaliVsSrinagar />} />
                  <Route path="/ladakh-trip-cost" element={<LadakhTripCost />} />
                  <Route path="/best-time-to-visit-ladakh" element={<BestTimeLadakh />} />
                  <Route path="/ladakh-bike-trip-packages" element={<LadakhBikePackages />} />
                  <Route path="/ladakh-ultimate-expedition" element={<LadakhUltimateExpedition />} />
                  <Route path="/ladakh-tour-packages-from-raipur" element={<LadakhFromRaipur />} />
                  <Route path="/ladakh-tour-packages-from-bhilai" element={<LadakhFromBhilai />} />
                  <Route path="/ladakh-tour-packages-from-chhattisgarh" element={<LadakhFromChhattisgarh />} />
                  <Route path="/ladakh-travel-safety-tips" element={<LadakhSafety />} />
                  <Route path="/ladakh-packing-checklist" element={<LadakhPackingList />} />
                  <Route path="/places-to-visit-in-ladakh/pangong-lake" element={<PangongLake />} />

                  {/* Legal Routes */}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/cancellation-policy" element={<CancellationPolicy />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
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

                  {/* 301 Redirects (Client-Side Fallback) */}
                  <Route path="/international-packages-bhilai" element={<Navigate to="/tour-packages-from-bhilai/international-tours" replace />} />
                  <Route path="/corporate-tour-packages-bhilai" element={<Navigate to="/tour-packages-from-bhilai/corporate-tours" replace />} />

                  <Route path="/passport-agent-bhilai" element={<PassportAgentBhilai />} />

                  {/* New High Reach SEO Routes - SILO STRUCTURE */}
                  <Route path="/tour-packages-from-bhilai" element={<TourPackagesFromBhilai />} />
                  <Route path="/tour-packages-from-raipur" element={<TourPackagesFromRaipur />} />
                  <Route path="/dubai-tour-packages-from-bhilai" element={<DubaiFromBhilai />} />

                  {/* Raipur Silo Children */}
                  <Route path="/tour-packages-from-raipur/international-tours" element={<InternationalToursFromRaipur />} />

                  {/* Bhilai Silo Children */}
                  <Route path="/tour-packages-from-bhilai/international-tours" element={<InternationalToursFromBhilai />} />
                  <Route path="/tour-packages-from-bhilai/honeymoon-packages" element={<HoneymoonPackagesFromBhilai />} />

                  {/* Phase 1: Goa Search Monopoly */}
                  <Route path="/goa-tour-package-from-bhilai" element={<GoaTourPackageFromBhilai />} />
                  <Route path="/goa-package-from-raipur" element={<GoaPackageFromRaipur />} />
                  <Route path="/goa-package-from-durg" element={<GoaPackageFromDurg />} />
                  <Route path="/goa-trip-from-supela" element={<GoaTripFromSupela />} />
                  <Route path="/goa-trip-under-10000-from-bhilai" element={<GoaTripUnder10000 />} />
                  <Route path="/goa-cheap-trip-guide" element={<GoaCheapTripGuide />} />
                  <Route path="/goa-budget-itinerary-from-bhilai" element={<GoaBudgetItinerary />} />
                  <Route path="/train-vs-flight-goa-from-cg" element={<TrainVsFlightGoa />} />
                  <Route path="/north-vs-south-goa-from-cg" element={<NorthVsSouthGoa />} />
                  <Route path="/manali-tour-package-from-bhilai" element={<ManaliTourPackageFromBhilai />} />
                  <Route path="/kerala-tour-package-from-bhilai" element={<KeralaTourPackageFromBhilai />} />
                  <Route path="/kashmir-tour-package-from-bhilai" element={<KashmirTourPackageFromBhilai />} />
                  <Route path="/thailand-tour-package-from-raipur" element={<ThailandTourPackageFromRaipur />} />
                  <Route path="/dubai-tour-package-from-raipur" element={<DubaiTourPackageFromRaipur />} />
                  <Route path="/thailand-tour-package-from-bhilai" element={<ThailandTourPackageFromBhilai />} />
                  <Route path="/dubai-tour-package-from-bhilai" element={<DubaiTourPackageFromBhilai />} />
                  <Route path="/chardham-yatra-package-from-bhilai" element={<ChardhamYatraPackageFromBhilai />} />
                  <Route path="/rajasthan-tour-package-from-bhilai" element={<RajasthanTourPackageFromBhilai />} />
                  <Route path="/singapore-tour-package-from-bhilai" element={<SingaporeTourPackageFromBhilai />} />
                  <Route path="/nepal-tour-package-from-bhilai" element={<NepalTourPackageFromBhilai />} />
                  <Route path="/bali-tour-package-from-raipur" element={<BaliTourPackageFromRaipur />} />
                  <Route path="/bali-tour-package-from-bhilai" element={<BaliTourPackageFromBhilai />} />
                  <Route path="/sri-lanka-tour-package-from-bhilai" element={<SriLankaTourPackageFromBhilai />} />
                  <Route path="/sri-lanka-tour-package-from-raipur" element={<SriLankaTourPackageFromRaipur />} />
                  <Route path="/andaman-tour-package-from-bhilai" element={<AndamanTourPackageFromBhilai />} />

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
