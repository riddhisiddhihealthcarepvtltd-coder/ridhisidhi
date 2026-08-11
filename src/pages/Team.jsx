import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import TeamCard from '../components/TeamCard';
import CTA from '../components/CTA';
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
      <section className="bg-figma-purple-tint py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex px-3.5 py-1 bg-white border border-figma-purple/20 text-figma-purple text-xs font-heading font-extrabold uppercase tracking-wider rounded-full mb-4 shadow-sm"
          >
            Professionals
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-4 leading-tight tracking-tight"
          >
            The Team Behind <span className="text-figma-purple">Your Care</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Our dedicated team is committed to delivering accurate, professional, and compassionate healthcare to every patient.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            centered
            kicker="Our Staff"
            title="Qualified Healthcare Providers"
            subtitle="Meet the individuals ensuring your health and safety at our facility."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Consult With Our Professionals" 
        subtitle="Schedule a meeting with our medical consultants or pharmacists today for proper healthcare guidance." 
        onOpenAppointment={onOpenAppointment}
      />
    </PageTransition>
  );
};

export default Team;
