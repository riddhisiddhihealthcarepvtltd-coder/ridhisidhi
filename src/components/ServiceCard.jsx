import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Pill, TestTube, Activity, Users, HeartPulse, ArrowRight } from 'lucide-react';

const iconMap = {
  Stethoscope,
  Pill,
  TestTube,
  Activity,
  Users,
  HeartPulse
};

const ServiceCard = ({ service, index = 0, onOpenAppointment }) => {
  const IconComponent = iconMap[service.icon] || Stethoscope;

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e9d5ff] hover:border-[#6d28d9] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] flex flex-col justify-between group cursor-pointer">
      <div>
        {/* Soft Sky Circular Icon Accent Area */}
        <div className="w-14 h-14 rounded-xl bg-[#f3e8ff] text-[#8b5cf6] flex items-center justify-center mb-5 group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors duration-300">
          <IconComponent className="w-7 h-7 stroke-[1.75]" />
        </div>

        <h3 className="font-heading font-extrabold text-lg text-[#111827] mb-2.5 group-hover:text-[#8b5cf6] transition-colors">
          {service.title}
        </h3>

        <p className="text-[#647b80] text-sm leading-relaxed mb-6">
          {service.shortDesc}
        </p>
      </div>

      <div className="pt-4 border-t border-[#e9d5ff] flex items-center justify-between">
        <button
          onClick={onOpenAppointment}
          onMouseEnter={() => import('./AppointmentModal')}
          onTouchStart={() => import('./AppointmentModal')}
          className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#8b5cf6] hover:text-[#7c3aed] group-hover:translate-x-0.5 transition-all"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
