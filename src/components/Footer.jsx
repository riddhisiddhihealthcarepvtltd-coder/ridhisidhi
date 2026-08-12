import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Calendar, FileText, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';
import { navLinks } from '../data/navigation';
import { servicesData } from '../data/services';

const Footer = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-[#1e1b4b] text-[#ddd6fe] relative overflow-hidden pt-14 pb-8 border-t border-white/10">
      <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24 relative z-10">
        
        {/* Top Info Banner Box */}
        <div className="bg-[#2e1065] rounded-2xl p-6 mb-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-[#8b5cf6]" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-white text-base sm:text-lg">
                Need Healthcare Assistance or Appointment?
              </h3>
              <p className="text-xs text-[#b8cfd1]">
                Reach out to our Gokarneshwor-5 clinic or send a message via WhatsApp.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAppointment}
            className="px-6 py-3 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors duration-300 shrink-0 shadow-md"
          >
            Book Appointment
          </button>
        </div>

        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Official Business Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shrink-0 border border-white/20">
                <img 
                  src={companyInfo.logo} 
                  alt={companyInfo.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-white text-sm leading-snug">
                  Riddhi Siddhi Health Care Pvt. Ltd.
                </h4>
                <p className="text-[11px] text-[#8b5cf6] font-bold">Gokarneshwor-5, Kathmandu</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed">
              Providing professional healthcare, registered pharmacy, and laboratory diagnostics in Nayabasti, Kathmandu.
            </p>

            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span className="font-semibold text-white">PAN:</span> 600624763
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span className="font-semibold text-white">Regd. No.:</span> 93778/068/069
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4 border-l-2 border-[#8b5cf6] pl-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link to="/services" className="hover:text-[#8b5cf6] transition-colors">
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4 border-l-2 border-[#8b5cf6] pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-[#8b5cf6] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4 border-l-2 border-[#8b5cf6] pl-2">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8b5cf6] shrink-0 mt-0.5" />
                <span>Gokarneshwor-5, Nayabasti, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8b5cf6] shrink-0" />
                <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-white transition-colors">
                  {companyInfo.phone} / {companyInfo.mobile}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8b5cf6] shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#b8cfd1] gap-3">
          <p>© {new Date().getFullYear()} Riddhi Siddhi Health Care Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Gokarneshwor-5, Nayabasti, Kathmandu</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
