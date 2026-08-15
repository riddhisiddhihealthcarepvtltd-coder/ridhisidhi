import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, MapPin, MessageSquare, Phone, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { companyInfo } from '../data/company';
import { navLinks } from '../data/navigation';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-50 flex flex-col md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-brand-sky-light">
              <div className="flex items-center gap-3">
                <img src="/assets/logo.webp" alt="Logo" className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow-sm" />
                <div>
                  <div className="font-heading font-bold text-sm text-brand-ink">Riddhi Siddhi</div>
                  <div className="text-[11px] text-brand-muted">Health Care Pvt. Ltd.</div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-200/60 text-slate-600 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="py-6 px-4 flex-1 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl font-heading font-semibold text-base transition-all ${
                      isActive
                        ? 'bg-brand-teal text-white shadow-md'
                        : 'text-slate-700 hover:bg-brand-sky hover:text-brand-teal-dark'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </NavLink>
              ))}
            </div>

            {/* Quick Contact & Info */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Quick Contact</div>

              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-center gap-3 text-xs text-slate-700 font-medium hover:text-[#8b5cf6]"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">Telephone</div>
                  <div>{companyInfo.phone}</div>
                </div>
              </a>

              <a
                href={`tel:${companyInfo.mobileRaw}`}
                className="flex items-center gap-3 text-xs text-slate-700 font-medium hover:text-[#8b5cf6]"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">Mobile</div>
                  <div>{companyInfo.mobile}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-600 leading-tight">
                  {companyInfo.address.full}
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="flex-1 text-center py-2.5 bg-[#8b5cf6] text-white rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform"
                >
                  Call Now
                </a>
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 bg-[#7c3aed] text-white rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
