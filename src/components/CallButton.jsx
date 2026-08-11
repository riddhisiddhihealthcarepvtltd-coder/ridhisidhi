import React from 'react';
import { Phone } from 'lucide-react';
import { companyInfo } from '../data/company';

const CallButton = () => {
  return (
    <div className="fixed left-4 bottom-5 z-40 md:hidden">
      <a
        href={`tel:${companyInfo.phoneRaw}`}
        className="w-13 h-13 rounded-full bg-figma-purple text-white shadow-xl flex items-center justify-center relative pulse-ring active:scale-95 transition-transform"
        aria-label="Call Us Directly"
      >
        <Phone className="w-6 h-6 animate-bounce" />
      </a>
    </div>
  );
};

export default CallButton;
