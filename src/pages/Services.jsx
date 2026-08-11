import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import CTA from '../components/CTA';
import { servicesData, quickActions } from '../data/services';
import { companyInfo } from '../data/company';

const Services = ({ onOpenAppointment }) => {
  return (
    <PageTransition>
      <SEOHead 
        title="Healthcare Services" 
        description="Explore the comprehensive healthcare services provided by Riddhi Siddhi Health Care, including general consultations, pharmacy, and diagnostic laboratory testing."
        path="/services"
      />

      {/* Services Page Hero Header */}
      <section className="bg-gradient-to-b from-[#f7fbfb] via-[#eef8f8] to-[#dceff4]/30 py-12 md:py-16 border-b border-[#dce8e9]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-flex px-3.5 py-1 bg-white border border-[#dce8e9] text-[#1f8a86] text-xs font-heading font-extrabold uppercase tracking-wider rounded-full mb-3 shadow-sm">
            WHAT WE OFFER
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#16353a] mb-3 leading-tight">
            Comprehensive <span className="text-[#1f8a86]">Healthcare Services</span>
          </h1>
          <p className="text-[#647b80] text-base leading-relaxed max-w-2xl mx-auto">
            Providing a reliable, patient-centered approach to medical consultation, medicine dispensing, and diagnostic laboratory testing in Gokarneshwor-5, Kathmandu.
          </p>
        </div>
      </section>

      {/* Full Detailed Services Grid */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="scroll-mt-32 border border-[#dce8e9] rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#dceff4] text-[#1f8a86] flex items-center justify-center font-heading font-extrabold text-xl shadow-sm border border-[#1f8a86]/20">
                      {service.number}
                    </div>
                    <span className="px-3 py-1 bg-[#eef8f8] text-[#12635f] text-xs font-heading font-extrabold uppercase tracking-wider rounded-full border border-[#dce8e9]">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl text-[#16353a] mb-3 leading-snug">
                    {service.title}
                  </h2>
                  
                  <p className="text-[#647b80] leading-relaxed text-sm mb-6">
                    {service.fullDesc}
                  </p>
                  
                  {service.features && (
                    <div className="bg-[#f7fbfb] p-5 rounded-xl border border-[#dce8e9] mb-6">
                      <h4 className="text-xs font-heading font-extrabold text-[#16353a] uppercase tracking-wider mb-3 border-b border-[#dce8e9] pb-2">
                        Key Service Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#16353a] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#1f8a86] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#dce8e9]">
                  <button
                    onClick={onOpenAppointment}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f8a86] hover:bg-[#12635f] text-white font-heading font-bold text-xs shadow-sm transition-all duration-300 active:scale-95"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions / Support Grid */}
      <section className="py-16 md:py-24 bg-[#f7fbfb] border-t border-[#dce8e9]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-heading font-extrabold text-[#1f8a86] tracking-widest uppercase mb-2 block">
              PATIENT SUPPORT
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#16353a]">
              How We Help You Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.slice(0, 4).map((action, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#dce8e9] shadow-sm">
                <h4 className="font-heading font-extrabold text-base text-[#16353a] mb-2">{action.title}</h4>
                <p className="text-xs text-[#647b80] mb-4 leading-relaxed">{action.description}</p>
                <button
                  onClick={onOpenAppointment}
                  className="text-xs font-bold text-[#1f8a86] hover:text-[#12635f] flex items-center gap-1 transition-colors"
                >
                  <span>{action.actionText}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Need Healthcare Support Today?" 
        subtitle={`Reach out to ${companyInfo.name} for immediate guidance or to schedule a consultation at our facility.`} 
        onOpenAppointment={onOpenAppointment}
      />
    </PageTransition>
  );
};

export default Services;
