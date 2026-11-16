import React, { forwardRef, useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { CurrencySelector } from './CurrencySelector';
import { useTheme } from './ThemeProvider';
import logoTransparent from '@/assets/dark_mode_web_logo_crop-removebg-preview.png';
import { Helmet } from 'react-helmet-async';

const navLinks = [
  { name: 'Home', href: '/', isRoute: true },
  { name: 'AI Generator', href: '#ai-planner', isRoute: false, isAi: true },
  { name: 'Flights', href: '/flights', isRoute: true, highlight: 'premium' },
  { name: 'Hotel Booking', href: '/hotels', isRoute: true, highlight: 'premium' },
  {
    name: 'Services',
    href: '#services',
    dropdown: [
      { name: 'Flight Booking', href: '/flight-booking-bhilai', isRoute: true },
      { name: 'Hotel Booking', href: '/travel-services/hotel-booking', isRoute: true },
      { name: 'Visa Assistance', href: '/travel-services/visa-assistance', isRoute: true },
      { name: 'Cab Rental', href: '/travel-services/cab-rental', isRoute: true },
      { name: 'Cruise Booking', href: '/travel-services/cruise-booking', isRoute: true },
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
      { name: 'Honeymoon', href: '/honeymoon-packages', isRoute: true },
      { name: 'Family', href: '/family-packages', isRoute: true },
      { name: 'Adventure', href: '/adventure-packages', isRoute: true },
      { name: 'Luxury', href: '/luxury-packages', isRoute: true },
      { name: 'Kumbh 2027 Packages', href: '/kumbh-mela-2027/packages', isRoute: true },
    ],
  },
  { name: 'My Bookings', href: '/bookings', isRoute: true },
  { name: 'B2B Partners', href: '/b2b-travel-partners', isRoute: true, highlight: 'premium' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { theme } = useTheme();

  // Determine which logo to use and ensure it's visible
  const getLogo = () => {
    return logoTransparent;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isHomePage) {
        const sections = navLinks.map((link) => link.href.replace('#', '')).filter(s => !s.startsWith('/'));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (!isHomePage) {
        window.location.href = '/' + href;
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

  // Schema for SiteNavigationElement
  const navSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": navLinks.map((link, index) => ({
      "@type": "SiteNavigationElement",
      "position": index + 1,
      "name": link.name,
      "url": `https://rudrakshsafar.com${link.href.startsWith('#') ? '/' + link.href : link.href}`
    }))
  };

  return (
    <header ref={ref}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(navSchema)}
        </script>
      </Helmet>

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${isScrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl py-3 border-white/10 translate-y-0 opacity-100'
          : isHomePage
            ? 'bg-transparent py-5 border-transparent translate-y-0 opacity-100'
            : 'bg-black/20 backdrop-blur-sm py-4 border-white/5 translate-y-0 opacity-100'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 relative">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group z-10"
            aria-label="Rudraksh Safar Home"
          >
            <img
              src={getLogo()}
              alt="Rudraksh Safar Logo"
              className="h-[30px] md:h-[40px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              width="150"
              height="50"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${isHomePage && !isScrolled ? 'opacity-0 translate-y-[-10px] pointer-events-none' : 'opacity-100 translate-y-0'}`}>
            <ul className={`flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${isScrolled
              ? 'bg-muted/80'
              : isHomePage
                ? 'bg-background/10 backdrop-blur-md border border-white/10'
                : 'bg-muted/80'
              }`}>
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.href.replace('#', '')
                          ? 'bg-secondary text-secondary-foreground shadow-md'
                          : isScrolled || !isHomePage
                            ? 'text-foreground hover:bg-secondary/10'
                            : 'text-primary-foreground/90 hover:bg-white/10'
                          }`}
                        aria-expanded={openDropdown === link.name}
                        aria-haspopup="true"
                      >
                        {link.name}
                        {(link as any).badge && (
                          <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded bg-orange-600 text-white leading-none">
                            {(link as any).badge}
                          </span>
                        )}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <ul className="bg-background/95 backdrop-blur-xl rounded-2xl p-2 min-w-[200px] border border-border shadow-xl">
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              {item.isRoute ? (
                                <Link
                                  to={item.href}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-secondary/10 hover:text-secondary transition-all duration-200"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="w-2 h-2 rounded-full bg-secondary/50" />
                                  {item.name}
                                </Link>
                              ) : (
                                <a
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                  }}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-secondary/10 hover:text-secondary transition-all duration-200"
                                >
                                  <div className="w-2 h-2 rounded-full bg-secondary/50" />
                                  {item.name}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (link as any).isAi ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm hover:shadow-orange-500/25 transition-all transform active:scale-95"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
                      <span>{link.name}</span>
                    </button>
                  ) : link.isRoute ? (
                    <Link
                      to={link.href}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${link.highlight
                        ? `hot-deals-fire relative overflow-hidden ${(link.href === '/' && isHomePage && activeSection === 'home')
                          ? 'bg-secondary text-secondary-foreground shadow-md'
                          : isScrolled || !isHomePage
                            ? 'text-foreground hover:bg-secondary/10'
                            : 'text-primary-foreground/90 hover:bg-white/10'
                        }`
                        : (link.href === '/' && isHomePage && activeSection === 'home')
                          ? 'bg-secondary text-secondary-foreground shadow-md'
                          : isScrolled || !isHomePage
                            ? 'text-foreground hover:bg-secondary/10'
                            : 'text-primary-foreground/90 hover:bg-white/10'
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
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${activeSection === link.href.replace('#', '')
                        ? 'bg-secondary text-secondary-foreground shadow-md'
                        : isScrolled || !isHomePage
                          ? 'text-foreground hover:bg-secondary/10'
                          : 'text-primary-foreground/90 hover:bg-white/10'
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
          <div className={`hidden lg:flex items-center gap-3 transition-all duration-500 z-10 ${isHomePage && !isScrolled ? 'opacity-0 translate-y-[-10px] pointer-events-none' : 'opacity-100 translate-y-0'}`}>
            <CurrencySelector />
            <ThemeToggle />
          </div>

          {/* Mobile Header Controls */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Direct AI Plan Button on Mobile */}
            <button
              onClick={() => handleNavClick('#ai-planner')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-bold text-xs shadow-sm active:scale-95 border border-white/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
              <span>AI Plan</span>
            </button>

            {/* Currency & Theme */}
            <div className={`flex items-center gap-1.5 transition-all duration-500 ${isHomePage && !isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <CurrencySelector />
              <ThemeToggle />
            </div>

            {/* Hamburger - ALWAYS visible & clickable */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${isScrolled || !isHomePage
                ? 'bg-muted text-foreground'
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
                }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (full-screen overlay so it always opens on mobile/tablet) */}
        <div
          className={`lg:hidden fixed inset-0 z-[101] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          aria-hidden={!isMobileMenuOpen}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/30 backdrop-blur-sm"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative mt-[72px]">
            <div className="bg-background/95 backdrop-blur-xl mx-4 rounded-2xl p-5 max-h-[80vh] overflow-y-auto border border-border shadow-xl">
              
              {/* Feature AI Banner at top of Mobile Menu */}
              <button
                onClick={() => handleNavClick('#ai-planner')}
                className="w-full mb-3.5 p-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-bold text-sm flex items-center justify-between shadow-lg shadow-orange-500/20 active:scale-98 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Sparkles className="w-5 h-5 text-amber-100 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="font-extrabold text-sm flex items-center gap-1.5">
                      AI Trip Generator
                      <span className="px-1.5 py-0.5 text-[9px] font-black uppercase rounded bg-white text-orange-600">NEW</span>
                    </div>
                    <div className="text-[11px] font-normal text-white/90">Instant custom itinerary & expert quote</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/90" />
              </button>

              <ul className="flex flex-col">
                {navLinks.filter(l => !(l as any).isAi).map((link) => (
                  <li key={link.name} className="border-b border-border/30 last:border-0">
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                          className="flex items-center justify-between w-full py-4 min-h-[44px] font-medium text-foreground"
                          aria-expanded={openDropdown === link.name}
                        >
                          <span className="flex items-center gap-2">
                            {link.name}
                            {(link as any).badge && (
                              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-orange-600 text-white leading-none">
                                {(link as any).badge}
                              </span>
                            )}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                        <ul
                          className={`overflow-hidden transition-all duration-300 ${openDropdown === link.name ? 'max-h-[300px] pb-2' : 'max-h-0'
                            }`}
                        >
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              {item.isRoute ? (
                                <Link
                                  to={item.href}
                                  className="flex items-center gap-3 py-3 pl-4 text-muted-foreground hover:text-secondary transition-colors"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                                  {item.name}
                                </Link>
                              ) : (
                                <a
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                  }}
                                  className="flex items-center gap-3 py-3 pl-4 text-muted-foreground hover:text-secondary transition-colors"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                                  {item.name}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (link as any).isAi ? (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="flex items-center justify-between w-full py-3.5 font-bold text-orange-600 dark:text-orange-400"
                      >
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                          {link.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 text-[10px] font-bold">
                          AI PLANNER
                        </span>
                      </button>
                    ) : link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={`block py-4 font-medium transition-colors ${link.highlight
                          ? 'text-foreground'
                          : link.href === '/' && isHomePage
                            ? 'text-secondary'
                            : 'text-foreground'
                          }`}
                        aria-current={location.pathname === link.href ? 'page' : undefined}
                      >
                        {link.highlight ? (
                          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-secondary/10 px-3 py-1">
                            <span className="inline-block h-2 w-2 rounded-full bg-secondary shadow-[0_0_14px_hsl(var(--secondary)/0.7)]" />
                            {link.name}
                          </span>
                        ) : (
                          link.name
                        )}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className={`block py-4 font-medium transition-colors ${activeSection === link.href.replace('#', '') ? 'text-secondary' : 'text-foreground'
                          }`}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
