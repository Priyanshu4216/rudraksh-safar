import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Compass } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '/', isRoute: true },
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
    ],
  },
  { name: 'For Travellers', href: '/for-travellers', isRoute: true },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

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

  return (
<header>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl shadow-lg py-2 border-b border-border/50' 
            : 'bg-transparent py-4'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
              <Compass className="w-6 h-6 text-secondary-foreground" aria-hidden="true" />
            </div>
            <div className="absolute -inset-1 bg-secondary/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'
            }`}>
              Rudraksh
            </span>
            <span className="text-secondary text-[10px] font-semibold tracking-[0.3em] uppercase -mt-1">
              Safar
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Moved to right */}
        <div className="hidden lg:flex items-center gap-4">
          <div className={`flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${
            isScrolled 
              ? 'bg-muted/80' 
              : isHomePage 
                ? 'bg-background/10 backdrop-blur-md border border-white/10'
                : 'bg-muted/80'
          }`}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-secondary text-secondary-foreground shadow-md'
                        : isScrolled || !isHomePage
                          ? 'text-foreground hover:bg-secondary/10'
                          : 'text-primary-foreground/90 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                  </button>
                ) : link.isRoute ? (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${
                      (link.href === '/' && isHomePage && activeSection === 'home')
                        ? 'bg-secondary text-secondary-foreground shadow-md'
                        : isScrolled || !isHomePage
                          ? 'text-foreground hover:bg-secondary/10'
                          : 'text-primary-foreground/90 hover:bg-white/10'
                    }`}
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
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-secondary text-secondary-foreground shadow-md'
                        : isScrolled || !isHomePage
                          ? 'text-foreground hover:bg-secondary/10'
                          : 'text-primary-foreground/90 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-background/95 backdrop-blur-xl rounded-2xl p-2 min-w-[200px] border border-border shadow-xl">
                      {link.dropdown.map((item) => (
                        item.isRoute ? (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-secondary/10 hover:text-secondary transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="w-2 h-2 rounded-full bg-secondary/50" />
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            key={item.name}
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
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled || !isHomePage
                ? 'bg-muted text-foreground' 
                : 'glass text-primary-foreground'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-full transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl mx-4 mt-2 rounded-2xl p-5 max-h-[80vh] overflow-y-auto border border-border shadow-xl">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-border/30 last:border-0">
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className="flex items-center justify-between w-full py-4 font-medium text-foreground"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === link.name ? 'max-h-[300px] pb-2' : 'max-h-0'
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      item.isRoute ? (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center gap-3 py-3 pl-4 text-muted-foreground hover:text-secondary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          key={item.name}
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
                      )
                    ))}
                  </div>
                </div>
              ) : link.isRoute ? (
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 font-medium transition-colors ${
                    link.href === '/' && isHomePage
                      ? 'text-secondary'
                      : 'text-foreground'
                  }`}
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
                  className={`block py-4 font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-secondary'
                      : 'text-foreground'
                  }`}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
