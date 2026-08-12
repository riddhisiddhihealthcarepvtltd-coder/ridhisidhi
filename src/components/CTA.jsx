import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';

const CTA = ({
  title = "Ready to Prioritize Your Health?",
  subtitle = "Contact Riddhi Siddhi Health Care today or schedule an appointment with our healthcare professionals.",
  onOpenAppointment
}) => {
  return (
    <section className="py-20 bg-[#8b5cf6] text-white relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6d28d9]/40 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Trusted Healthcare In Kathmandu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-tight text-white drop-shadow-sm">
            {title}
          </h2>

          <p className="text-[#f3e8ff] text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenAppointment}
              className="px-8 py-4 rounded-full bg-white hover:bg-[#faf5ff] text-[#6d28d9] font-heading font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#8b5cf6]" />
              <span>Book Appointment Now</span>
            </button>

            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-heading font-bold text-sm transition-all duration-300 flex items-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Us: {companyInfo.phone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
