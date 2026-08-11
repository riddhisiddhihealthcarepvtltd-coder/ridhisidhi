import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { companyInfo } from '../data/company';

const Navbar = ({ onOpenAppointment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <div className="w-full bg-[#8b5cf6] text-white text-xs sm:text-sm py-2.5 font-medium tracking-wide">
        <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            <span>{companyInfo.phone} / {companyInfo.mobile}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5" />
            <span>{companyInfo.email}</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{companyInfo.address.full}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100/80 transition-all duration-300 py-3 sm:py-3.5">
        <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/assets/logo.png"
              alt="Riddhi Siddhi Health Care Logo"
              className="h-11 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-xl text-[#111827] leading-tight tracking-tight">
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
              <div key={link.name} className="flex items-center gap-1 cursor-pointer">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-semibold text-[15px] transition-colors duration-200 ${isActive
                      ? 'text-[#8b5cf6]'
                      : 'text-[#111827] hover:text-[#8b5cf6]'
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
    </>
  );
};

export default Navbar;
