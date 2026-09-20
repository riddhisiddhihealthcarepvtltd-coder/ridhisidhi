import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import TeamCard from '../components/TeamCard';

import { teamMembers } from '../data/team';

const Team = ({ onOpenAppointment }) => {
  return (
    <PageTransition>
      <SEOHead 
        title="Our Team" 
        description="Meet the dedicated healthcare professionals, pharmacists, and lab technologists at Riddhi Siddhi Health Care."
        path="/team"
      />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#faf5ff] via-[#f5f3ff] to-[#f3e8ff]/30 py-12 md:py-16 border-b border-[#e9d5ff]">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex px-3.5 py-1 bg-white border border-[#e9d5ff] text-[#8b5cf6] text-xs font-heading font-extrabold uppercase tracking-wider rounded-full mb-3 shadow-sm"
          >
            Professionals
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-extrabold text-[#111827] mb-3 leading-tight"
          >
            The Team Behind <span className="text-[#8b5cf6]">Your Care</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#6b7280] text-base leading-relaxed max-w-2xl mx-auto"
          >
            Our dedicated team is committed to delivering accurate, professional, and compassionate healthcare to every patient.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24">
          <SectionHeader
            centered
            kicker="Our Staff"
            title="Qualified Healthcare Providers"
            subtitle="Meet the individuals ensuring your health and safety at our facility."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-3.5 sm:px-0">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
};

export default Team;
