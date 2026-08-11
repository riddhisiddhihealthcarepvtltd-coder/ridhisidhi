import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = ({ onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', active: true },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      {/* Top Header Bar */}
      <div className="bg-[#8b5cf6] text-white text-sm py-2.5 font-medium tracking-wide">
        <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24 flex flex-col sm:flex-row items-center justify-center gap-10">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>(+12)345-6789-1123</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Avida@Mail.Com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Somewhere, Earth</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-transparent py-5">
        <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 shrink-0">
             <div className="flex items-center justify-center text-[#8b5cf6] mr-1">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2V7H6V11H11V16H15V11H20V7H15V2H11Z" />
               </svg>
             </div>
             <span className="font-sans font-bold text-3xl text-black tracking-tight">
               AVIDA
             </span>
             <svg className="w-10 h-10 text-[#a78bfa] ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((link) => (
              <div key={link.name} className="flex items-center gap-1 cursor-pointer">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-semibold text-[15px] transition-colors duration-200 ${link.active
                      ? 'text-[#a78bfa]'
                      : 'text-[#111827] hover:text-[#a78bfa]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-[#111827]" />
                )}
              </div>
            ))}
          </nav>

          {/* Social Icons & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#a78bfa] hover:bg-[#8b5cf6] text-white flex items-center justify-center transition-colors shadow-sm">
                <span className="font-serif italic font-bold text-lg leading-none">P</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#a78bfa] hover:bg-[#8b5cf6] text-white flex items-center justify-center transition-colors shadow-sm">
                <span className="font-sans font-bold text-sm leading-none">X</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#a78bfa] hover:bg-[#8b5cf6] text-white flex items-center justify-center transition-colors shadow-sm">
                <span className="font-sans font-bold text-sm leading-none">in</span>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#333] hover:bg-[#f3f4f6] transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenAppointment={onOpenAppointment}
      />
    </div>
  );
};

export default Navbar;
