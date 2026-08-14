import { Activity, ChevronRight, FileText, FlaskConical, Heart, Home, Mail, MapPin, Phone, ShieldCheck, Stethoscope, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/company';
import { navLinks } from '../data/navigation';
import { servicesData } from '../data/services';

const Footer = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-[#1e1b4b] text-[#ddd6fe] relative overflow-hidden pt-14 pb-8 border-t border-white/10">
      <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24 relative z-10">


        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">

          {/* Col 1: Official Business Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shrink-0 border border-white/20">
                <img
                  src={companyInfo.logo}
                  alt={companyInfo.name}
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-white text-sm leading-snug">
                  Riddhi Siddhi Health Care Pvt. Ltd.
                </h4>
                {/* <p className="text-[11px] text-[#8b5cf6] font-bold">Gokarneshwor-5, Kathmandu</p> */}
              </div>
            </div>

            <p className="text-[14px] leading-relaxed text-[8b5cf6]">
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
          <div className="pt-0 md:pt-14">
            <h4 className="font-heading font-bold text-white text-[14.5px] uppercase tracking-wider mb-4 border-l-2 border-[#8b5cf6] pl-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-[14px]">
              {servicesData.map((svc) => {
                const iconMap = {
                  'opd-service': <Stethoscope className="w-4 h-4 text-[#8b5cf6] shrink-0" />,
                  'pathology-service': <FlaskConical className="w-4 h-4 text-[#8b5cf6] shrink-0" />,
                  'xray-service': <Activity className="w-4 h-4 text-[#8b5cf6] shrink-0" />,
                  'emergency-service': <Zap className="w-4 h-4 text-[#8b5cf6] shrink-0" />,
                  'ecg-service': <Heart className="w-4 h-4 text-[#8b5cf6] shrink-0" />,
                  'home-service': <Home className="w-4 h-4 text-[#8b5cf6] shrink-0" />,
                };
                return (
                  <li key={svc.id}>
                    <Link to="/services" className="flex items-center gap-2 hover:text-[#8b5cf6] transition-colors">
                      {iconMap[svc.id] ?? <ChevronRight className="w-4 h-4 text-[#8b5cf6] shrink-0" />}
                      {svc.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="pt-0 md:pt-14">
            <h4 className="font-heading font-bold text-white text-[14.5px] uppercase tracking-wider mb-4 border-l-2 border-[#8b5cf6] pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-[14px]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center gap-1.5 hover:text-[#8b5cf6] transition-colors">
                    <ChevronRight className="w-4 h-4 text-[#8b5cf6] shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="pt-0 md:pt-14">
            <h4 className="font-heading font-bold text-white text-[14.5px] uppercase tracking-wider mb-4 border-l-2 border-[#8b5cf6] pl-2">
              Contact Details
            </h4>
            <div className="space-y-3 text-[14px]">
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
                <a href={`mailto:${companyInfo.email}`} className="font-sans break-all sm:break-normal hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white gap-3">
          <p>© {new Date().getFullYear()} Riddhi Siddhi Health Care Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4 ">
            <span>Design & Developed by: <a href='https://kreativemandu.com' className='hover:text-[#8b5cf6] transition-colors' >Kreativemandu Technologies</a></span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
