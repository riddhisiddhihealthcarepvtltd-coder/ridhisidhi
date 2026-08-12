import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Stethoscope } from 'lucide-react';
import SafeImage from './SafeImage';

const TeamCard = ({ member, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl overflow-hidden border border-[#e9d5ff] shadow-sm hover:shadow-md hover:border-[#8b5cf6]/60 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Member Photo Container */}
        <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-100">
          <SafeImage
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            isAvatar={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

          {/* Badge Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="text-[11px] font-heading font-extrabold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#8b5cf6] shadow-sm">
              {member.badge}
            </span>
            {member.isLeadership && (
              <span className="bg-[#8b5cf6] text-white p-1.5 rounded-full shadow-md">
                <ShieldCheck className="w-4 h-4" />
              </span>
            )}
          </div>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs font-medium text-purple-300 flex items-center gap-1 mb-0.5">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{member.role}</span>
            </div>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug">
              {member.name}
            </h3>
          </div>
        </div>

        {/* Details & Description */}
        <div className="p-5 sm:p-6 space-y-3">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {member.description}
          </p>

          {member.isPlaceholder && (
            <div className="text-[11px] text-purple-800 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200 font-medium">
              * Visiting/Consultant position profile
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
