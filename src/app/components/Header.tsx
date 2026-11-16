import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';

const navigation = [
  { name: 'Home', path: '/' },
  {
    name: 'Company',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Infrastructure', path: '/infrastructure' },
      { name: 'B2B Supply', path: '/b2b' },
    ],
  },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
];

const mobileNavigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'B2B Supply', path: '/b2b' },
  { name: 'Quality', path: '/quality' },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/products'
      ? location.pathname === '/products' || location.pathname.startsWith('/products/')
      : location.pathname === path;
  const isCompanyActive = () =>
    location.pathname === '/about' || location.pathname === '/infrastructure' || location.pathname === '/b2b';

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const headerBg = scrolled || !isHomePage || mobileMenuOpen
    ? 'bg-white/95 backdrop-blur-xl border-b border-stone-200/60 shadow-sm'
    : 'bg-transparent border-b border-transparent';

  const textColor = scrolled || !isHomePage
    ? 'text-slate-800'
    : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative z-10 rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/35 focus-visible:ring-offset-2" aria-label="Dairy Power home">
            <img
              src="/images/logo/dairy-power-logo.png"
              alt="Dairy Power"
              className="h-12 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            {navigation.map((item) =>
              'children' in item && item.children ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    aria-label="Open company menu"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      isCompanyActive()
                        ? scrolled || !isHomePage
                          ? 'text-emerald-700 font-semibold bg-emerald-50'
                          : 'text-white font-semibold bg-white/15'
                          : `${textColor} hover:bg-black/5 font-medium focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30`
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      strokeWidth={2.5}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-stone-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                    className={`block px-5 py-3 text-sm transition-colors focus-visible:outline-none focus-visible:bg-emerald-50 focus-visible:text-emerald-800 ${
                            isActive(child.path)
                              ? 'text-emerald-700 font-semibold bg-emerald-50'
                              : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/50 font-medium'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path!}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    isActive(item.path!)
                      ? scrolled || !isHomePage
                        ? 'text-emerald-700 font-semibold bg-emerald-50'
                        : 'text-white font-semibold bg-white/15'
                      : `${textColor} hover:bg-black/5 font-medium focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30`
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918010900630"
              className={`flex items-center gap-2 rounded-full px-2 py-2 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 ${textColor}`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">080109 00630</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-md shadow-emerald-600/20 text-sm font-semibold flex items-center gap-2 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className={`lg:hidden min-h-11 min-w-11 rounded-xl p-2 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={2.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-stone-100 animate-in fade-in slide-in-from-top-2 duration-200 bg-white rounded-b-2xl">
            <div className="flex flex-col gap-1">
              {mobileNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-11 px-4 py-3.5 text-base rounded-xl transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/25 ${
                    isActive(item.path)
                      ? 'bg-emerald-50 text-emerald-700 font-semibold'
                      : 'text-slate-700 hover:bg-stone-50 font-medium'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-stone-100 space-y-3 px-4">
                <a
                  href="tel:+918010900630"
                  className="flex items-center gap-2 py-3 text-slate-700"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">080109 00630</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3.5 bg-emerald-600 text-white text-center rounded-xl hover:bg-emerald-700 transition-all font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
