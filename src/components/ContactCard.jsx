import React from 'react';
import { Phone, Mail, MapPin, Globe, Check, FileText, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';

const ContactCard = () => {
  return (
    <div className="bg-[#2e1065] text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-white/10 space-y-8">
      <div>
        <h3 className="font-heading font-extrabold text-2xl text-white mb-2">Contact Information</h3>
        <p className="text-[#ddd6fe] text-xs sm:text-sm leading-relaxed">
          Reach out directly to our healthcare team for appointments, medicine inquiries, or diagnostic testing services.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/10">
            <Phone className="w-5 h-5 text-[#f3e8ff]" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#ddd6fe]">Phone Numbers</div>
            <a href={`tel:${companyInfo.phoneRaw}`} className="text-sm sm:text-base font-bold text-white block hover:text-[#f3e8ff] transition-colors">
              {companyInfo.phone}
            </a>
            <div className="text-xs text-[#ddd6fe] mt-0.5">Mobile / WhatsApp: {companyInfo.mobile}</div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/10">
            <Mail className="w-5 h-5 text-[#f3e8ff]" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#ddd6fe]">Email Address</div>
            <a href={`mailto:${companyInfo.email}`} className="text-sm font-bold text-white block hover:text-[#f3e8ff] transition-colors">
              {companyInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/10">
            <MapPin className="w-5 h-5 text-[#f3e8ff]" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#ddd6fe]">Official Location</div>
            <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{companyInfo.address.full}</div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/10">
            <FileText className="w-5 h-5 text-[#f3e8ff]" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#ddd6fe]">Registration Details</div>
            <div className="text-xs font-semibold text-white mt-0.5">PAN: {companyInfo.pan}</div>
            <div className="text-xs text-[#ddd6fe]">Reg No: {companyInfo.registration}</div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#ddd6fe]">
        <span>Gokarneshwor-5, Nayabasti, Kathmandu</span>
        <span className="flex items-center gap-1 font-bold text-white">
          <Check className="w-4 h-4 text-[#a78bfa]" /> Verified
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
