import React, { forwardRef, useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { CurrencySelector } from './CurrencySelector';
import { useTheme } from './ThemeProvider';
import logoTransparent from '@/assets/dark_mode_web_logo_crop-removebg-preview.png';
import { Helmet } from 'react-helmet-async';

// Clean, uncluttered navigation links (Flights, Hotel Booking, My Bookings moved into Services/clean dropdowns)
const navLinks = [
  { name: 'AI Planner', href: '#ai-planner', isRoute: false, isAi: true },
  {
    name: 'Services',
    href: '#services',
    dropdown: [
      { name: 'Flight Booking', href: '/flight-booking-bhilai', isRoute: true },
      { name: 'Hotel Booking', href: '/travel-services/hotel-booking', isRoute: true },
      { name: 'Visa Assistance', href: '/travel-services/visa-assistance', isRoute: true },
      { name: 'Cab Rental', href: '/travel-services/cab-rental', isRoute: true },
      { name: 'Cruise Booking', href: '/travel-services/cruise-booking', isRoute: true },
      { name: 'Train Booking (IRCTC)', href: '/train-booking-bhilai', isRoute: true },
    ],
  },
  {
    name: 'Kumbh 2027',
    href: '/kumbh-mela-2027',
    isRoute: true,
    badge: '2027',
    dropdown: [
      { name: 'Haridwar Kumbh Hub', href: '/kumbh-mela-2027', isRoute: true },
      { name: 'Snan Dates & Calendar', href: '/kumbh-mela-2027/snan-dates', isRoute: true },
      { name: 'Tour Packages', href: '/kumbh-mela-2027/packages', isRoute: true },
      { name: 'Kumbh: From Chhattisgarh', href: '/kumbh-mela-2027/packages/chhattisgarh', isRoute: true },
      { name: '  • From Raipur', href: '/kumbh-mela-2027/packages/from-raipur', isRoute: true },
      { name: '  • From Bhilai', href: '/kumbh-mela-2027/packages/from-bhilai', isRoute: true },
      { name: '  • From Bilaspur', href: '/kumbh-mela-2027/packages/from-bilaspur', isRoute: true },
      { name: '  • From Durg', href: '/kumbh-mela-2027/packages/from-durg', isRoute: true },
      { name: '  • From Rajnandgaon', href: '/kumbh-mela-2027/packages/from-rajnandgaon', isRoute: true },
      { name: 'How to Reach', href: '/kumbh-mela-2027/how-to-reach', isRoute: true },
      { name: 'Stay & Tents', href: '/kumbh-mela-2027/stay', isRoute: true },
      { name: 'Parking & Traffic', href: '/kumbh-mela-2027/parking-and-traffic', isRoute: true },
      { name: 'Senior & Family Guide', href: '/kumbh-mela-2027/senior-family-guide', isRoute: true },
      { name: 'Live Updates', href: '/kumbh-mela-2027/live-updates', isRoute: true },
    ],
  },
  {
    name: 'Packages',
    href: '#packages',
    dropdown: [
      { name: 'Domestic Tours', href: '/domestic-packages', isRoute: true },
      { name: 'International Tours', href: '/international-packages', isRoute: true },
      { name: 'Char Dham Yatra', href: '/chardham-yatra-package', isRoute: true },
      { name: 'Honeymoon Packages', href: '/honeymoon-packages', isRoute: true },
      { name: 'Family Packages', href: '/family-packages', isRoute: true },
      { name: 'Adventure Packages', href: '/adventure-packages', isRoute: true },
      { name: 'Luxury Packages', href: '/luxury-packages', isRoute: true },
      { name: 'Kumbh 2027 Packages', href: '/kumbh-mela-2027/packages', isRoute: true },
    ],
  },
  { name: 'B2B Partners', href: '/b2b-travel-partners', isRoute: true, highlight: 'premium' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const { theme } = useTheme();

  const getLogo = () => logoTransparent;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (isHomePage) {
        const sections = navLinks.map((link) => link.href.replace('#', '')).filter((s) => !s.startsWith('/'));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 160) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Reliable AI Planner navigation & smooth scrolling
  const handleAiPlanClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    if (!isHomePage) {
      navigate('/#ai-planner');
      return;
    }

    const plannerEl = document.getElementById('ai-planner');
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      plannerEl.classList.add('ring-4', 'ring-orange-500/50', 'transition-all');
      setTimeout(() => {
        plannerEl.classList.remove('ring-4', 'ring-orange-500/50');
      }, 2500);
    } else {
      // Fallback
      window.location.hash = '#ai-planner';
    }
  };

  const handleNavClick = (href: string) => {
    if (href === '#ai-planner') {
      handleAiPlanClick();
      return;
    }

    if (href.startsWith('#')) {
      if (!isHomePage) {
        navigate('/' + href);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const navSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: navLinks.map((link, index) => ({
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: link.name,
      url: `https://rudrakshsafar.com${link.href.startsWith('#') ? '/' + link.href : link.href}`,
    })),
  };

  return (
    <header ref={ref} className="fixed top-0 left-0 right-0 z-[100]">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(navSchema)}</script>
      </Helmet>

      {/* Topmost Utility Bar: Phone Numbers & Live Status (Above Logo) */}
      <div className="w-full bg-gradient-to-r from-[#8c1d2f] via-[#a8253a] to-[#c2392b] text-white text-[11px] sm:text-xs py-1 px-3 sm:px-6 border-b border-white/10 shadow-xs">
        <div className="container mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-white/95">
              Planners Online · Call{' '}
              <a href="tel:+919203650311" className="font-bold underline hover:text-amber-200">
                +91 92036 50311
              </a>{' '}
              /{' '}
              <a href="tel:+919713057086" className="font-bold underline hover:text-amber-200">
                +91 97130 57086
              </a>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] font-medium text-amber-100">
            <span>✓ Enquire First</span>
            <span>✓ No Online Payment Required</span>
            <span>✓ Custom Quote in 10 Mins</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-xl py-2 sm:py-2.5 border-b border-amber-500/20 shadow-2xl'
            : 'bg-slate-950/85 backdrop-blur-md py-2 sm:py-3 border-b border-white/10 shadow-lg'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
          
          {/* Logo on Left - Spacious, Uncluttered, Crisp */}
          <Link
            to="/"
            className="flex items-center gap-2 group shrink-0 py-0.5 z-20"
            aria-label="Rudraksh Safar - Home"
          >
            <div className="relative flex items-center">
              <img
                src={getLogo()}
                alt="Rudraksh Safar"
                className="h-[36px] sm:h-[42px] md:h-[48px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(217,119,6,0.3)]"
                width="160"
                height="48"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered Capsule with ample room */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <ul className="flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-white/10 dark:bg-white/5 border border-white/15 dark:border-white/10 backdrop-blur-md shadow-inner text-white">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  {/* AI Planner Dedicated Action Button */}
                  {link.isAi ? (
                    <button
                      onClick={handleAiPlanClick}
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-100 animate-pulse" />
                      <span>{link.name}</span>
                    </button>
                  ) : link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                          activeSection === link.href.replace('#', '')
                            ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                            : 'text-slate-100 hover:text-white hover:bg-white/15'
                        }`}
                        aria-expanded={openDropdown === link.name}
                        aria-haspopup="true"
                      >
                        {link.name}
                        {(link as any).badge && (
                          <span className="ml-1 px-1.5 py-0.5 text-[9px] font-black uppercase rounded bg-orange-600 text-white leading-none shadow-xs">
                            {(link as any).badge}
                          </span>
                        )}
                        <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 opacity-80" aria-hidden="true" />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 z-50">
                        <ul className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-2 min-w-[220px] border border-amber-500/30 shadow-2xl space-y-0.5">
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              {item.isRoute ? (
                                <Link
                                  to={item.href}
                                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-white/10 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                                  <span>{item.name}</span>
                                </Link>
                              ) : (
                                <a
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                  }}
                                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-200 hover:text-amber-400 hover:bg-white/10 transition-colors"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                                  <span>{item.name}</span>
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : link.isRoute ? (
                    <Link
                      to={link.href}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 block ${
                        link.highlight
                          ? 'text-amber-300 hover:text-amber-200 hover:bg-white/10'
                          : 'text-slate-100 hover:text-white hover:bg-white/15'
                      }`}
                      aria-current={location.pathname === link.href ? 'page' : undefined}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 block ${
                        activeSection === link.href.replace('#', '')
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                          : 'text-slate-100 hover:text-white hover:bg-white/15'
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Right Side Controls */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0 z-20">
            <CurrencySelector />
            <ThemeToggle />
            <a
              href="https://wa.me/919203650311?text=Hi%20Rudraksh%20Safar%2C%20I%20would%20like%20to%20plan%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md transition-all active:scale-95 ml-1"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex lg:hidden items-center gap-2 z-20">
            <button
              onClick={handleAiPlanClick}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-bold text-xs shadow-sm active:scale-95 border border-white/20"
            >
              <Sparkles className="w-3 h-3 text-amber-200 animate-pulse" />
              <span>AI Plan</span>
            </button>

            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white border border-white/15 active:scale-95 transition-all"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Overlay Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-[101] transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative mt-[94px] mx-4">
            <div className="bg-slate-950/98 backdrop-blur-2xl rounded-3xl p-5 max-h-[82vh] overflow-y-auto border border-amber-500/30 shadow-2xl text-white">
              
              {/* Feature AI Banner at top of Mobile Menu */}
              <button
                onClick={handleAiPlanClick}
                className="w-full mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-bold text-sm flex items-center justify-between shadow-lg shadow-orange-500/25 active:scale-98 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Sparkles className="w-5 h-5 text-amber-100 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-sm flex items-center gap-1.5">
                      AI Trip Architect
                      <span className="px-1.5 py-0.5 text-[9px] font-black uppercase rounded bg-white text-orange-600">NEW</span>
                    </div>
                    <div className="text-[11px] font-normal text-white/90">Instant custom itinerary & pricing</div>
                  </div>
                </div>
              </button>

              <ul className="flex flex-col space-y-1">
                {navLinks.filter((l) => !l.isAi).map((link) => (
                  <li key={link.name} className="border-b border-white/10 last:border-0 pb-2 pt-1">
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                          className="flex items-center justify-between w-full py-2.5 font-semibold text-slate-100"
                          aria-expanded={openDropdown === link.name}
                        >
                          <span className="flex items-center gap-2 text-sm">
                            {link.name}
                            {(link as any).badge && (
                              <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-orange-600 text-white leading-none">
                                {(link as any).badge}
                              </span>
                            )}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              openDropdown === link.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <ul
                          className={`overflow-hidden transition-all duration-200 ${
                            openDropdown === link.name ? 'max-h-[320px] pb-2' : 'max-h-0'
                          }`}
                        >
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              {item.isRoute ? (
                                <Link
                                  to={item.href}
                                  className="flex items-center gap-2.5 py-2 pl-4 text-xs text-slate-300 hover:text-amber-400 transition-colors"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                                  <span>{item.name}</span>
                                </Link>
                              ) : (
                                <a
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                  }}
                                  className="flex items-center gap-2.5 py-2 pl-4 text-xs text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                                  <span>{item.name}</span>
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block py-2.5 text-sm font-semibold text-slate-100 hover:text-amber-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="block py-2.5 text-sm font-semibold text-slate-100 hover:text-amber-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Quick Contacts Footer */}
              <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href="https://wa.me/919203650311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+919203650311"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/15 text-white font-bold text-xs border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
