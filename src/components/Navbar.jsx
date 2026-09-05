import { Facebook, Mail, MapPin, Menu, Phone } from 'lucide-react';
import { useState, lazy, Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { companyInfo } from '../data/company';

// Lazy-loaded Mobile Navigation Drawer
const MobileMenu = lazy(() => import('./MobileMenu'));

const Navbar = ({ onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Header Bar - Scrolling Ticker */}
      <div className="w-full bg-[#8b5cf6] text-white text-xs sm:text-sm py-2.5 font-medium tracking-wide overflow-hidden">
        <div className="flex w-max whitespace-nowrap animate-ticker">
          {/* Repeated twice for seamless loop */}
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center shrink-0 gap-12 px-8 tracking-widest">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{companyInfo.phone} / {companyInfo.mobile}</span>
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="font-sans tracking-widest">{companyInfo.email}</span>
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{companyInfo.address.full}</span>
              </span>
              <span className="text-white/40">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100/80 transition-all duration-300 py-3 sm:py-3.5">
        <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/assets/logo.webp"
              alt="Riddhi Siddhi Health Care Logo"
              width="56"
              height="56"
              decoding="async"
              className="h-11 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base sm:text-xl text-[#111827] leading-tight tracking-wide">
                Riddhi Siddhi
              </span>
              <span className="text-[10px] sm:text-xs text-[#8b5cf6] font-bold tracking-wider uppercase">
                Health Care Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-1.5 font-semibold text-[15px] tracking-wide transition-colors duration-200 group flex items-center gap-1.5 ${isActive ? 'text-[#8b5cf6]' : 'text-[#111827] hover:text-[#8b5cf6]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>

                    {/* Smooth Slide Underline */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#8b5cf6] rounded-full origin-left transition-transform duration-300 ease-out ${isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Social Icons & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={companyInfo.facebookUrl || "https://www.facebook.com/profile.php?id=100078727410108"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook Page"
                className="w-9 h-9 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
              >
                <Facebook className="w-4.5 h-4.5 fill-current" />
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              onMouseEnter={() => import('./MobileMenu')}
              onTouchStart={() => import('./MobileMenu')}
              className="lg:hidden p-2 rounded-xl text-[#333] hover:bg-[#f3f4f6] transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu (Loaded on-demand) */}
      {mobileMenuOpen && (
        <Suspense fallback={null}>
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenAppointment={onOpenAppointment}
          />
        </Suspense>
      )}
    </>
  );
};

export default Navbar;
