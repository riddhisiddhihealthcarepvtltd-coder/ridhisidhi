import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Target, Eye, Heart } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import CTA from '../components/CTA';
import SafeImage from '../components/SafeImage';
import { companyInfo, imageConfig } from '../data/company';
import { leadershipNote } from '../data/team';

// Simple animated counter for the badge
const AnimatedCounter = ({ value, suffix = '' }) => <span>{value}{suffix}</span>;

const About = ({ onOpenAppointment }) => {
  return (
    <PageTransition>
      <SEOHead
        title="About Us"
        description={`Learn more about ${companyInfo.name}, our mission, vision, and leadership team in Gokarneshwor-5, Kathmandu.`}
        path="/about"
      />

      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-[#faf5ff] via-[#f5f3ff] to-[#f3e8ff]/30 py-12 md:py-16 border-b border-[#e9d5ff]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-block text-xs font-heading font-extrabold text-[#8b5cf6] tracking-widest uppercase mb-2">
            OUR STORY & VALUES
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#111827] mb-3">
            About Riddhi Siddhi Health Care
          </h1>
          <p className="text-[#647b80] text-base">
            Discover the commitment, vision, and leadership behind {companyInfo.name}.
          </p>
        </div>
      </section>

      {/* Main About Overview */}
      <section className="py-16 md:py-24 pb-28 md:pb-36 bg-white relative overflow-visible">
        <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-7"
            >
              <div className="font-sans font-semibold text-[#8b5cf6] tracking-widest uppercase text-[13px] mb-2">
                ABOUT OUR LEADERSHIP
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold text-[#202020] leading-[1.15] mb-6">
                Dileep Kumar Mahaseth,<br />Chairman &amp; Registered Pharmacist
              </h2>
              <p className="text-[#6b7280] text-[15px] leading-relaxed mb-8 max-w-lg">
                Dileep Kumar Mahaseth is the Owner, Chairman &amp; Registered Pharmacist of Riddhi Siddhi Health Care Pvt. Ltd. Under his dedicated vision, our polyclinic strives to deliver ethical, compassionate, and reliable healthcare services to every patient in Gokarneshwor and beyond.
              </p>

              {/* 2-Column Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Registered Pharmacy &amp; Guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Patient-Centered Healthcare</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">High Precision Laboratory</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Ethical &amp; Transparent Care</span>
                </div>
              </div>

              <div className="h-[1px] w-[90%] bg-[#8b5cf6]/30 my-8"></div>

              {/* Leadership Quote Card */}
              <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 xl:gap-8 mb-8">
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-[#8b5cf6]">
                    <SafeImage src={imageConfig.owner} alt="Dileep Kumar Mahaseth" className="w-full h-full object-cover object-top scale-125" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[17px] text-[#202020] mb-0.5">Dileep Kumar Mahaseth</h4>
                    <p className="text-[13px] text-[#8b5cf6] font-medium">Chairman &amp; Registered Pharmacist (Owner)</p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[#6b7280] italic text-[15px] font-serif leading-relaxed pr-4">
                    "At Riddhi Siddhi Health Care, our daily effort is centered around trust, genuine care, and prompt service for every individual who walks through our doors."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right About Image Grid - copied from Home */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative mt-16 lg:mt-0 lg:pl-10"
            >
              <div className="relative rounded-[20px] overflow-hidden bg-white ml-auto w-full sm:w-[82%] lg:w-[76%] h-[320px] sm:h-[460px] lg:h-[520px]">
                <SafeImage
                  src={imageConfig.owner}
                  alt="Riddhi Siddhi Health Care Owner"
                  className="w-full h-full object-cover object-top scale-125 -translate-y-8 transform origin-top"
                />
              </div>

              {/* 10 Years Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.04 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 left-0 sm:left-4 lg:left-8 z-20 cursor-pointer"
              >
                <div className="bg-[#8b5cf6] text-white p-4 sm:p-7 lg:p-12 rounded-[12px] sm:rounded-[22px] sm:rounded-br-[80px] shadow-2xl flex items-center gap-3 sm:gap-5 lg:gap-6">
                  <div className="font-sans font-bold text-white flex flex-col items-center">
                    <span className="text-[42px] sm:text-[64px] lg:text-[76px] leading-[0.9]">
                      <AnimatedCounter value={10} />
                    </span>
                    <span className="text-[14px] sm:text-[20px] lg:text-[22px] font-semibold mt-1 sm:mt-2">Years</span>
                  </div>
                  <div className="w-[1px] sm:w-[2px] h-12 sm:h-20 bg-white/40"></div>
                  <div className="text-[12px] sm:text-[17px] lg:text-[19px] font-semibold leading-[1.35] tracking-wide">
                    Already<br />Experienced In<br />Health Care
                  </div>
                </div>
              </motion.div>

              {/* Overlapping Smaller Image Card */}
              <div className="absolute -bottom-6 sm:-bottom-10 right-0 sm:-right-4 lg:-right-8 w-[120px] sm:w-[160px] md:w-[220px] lg:w-[260px] aspect-square rounded-[12px] sm:rounded-[20px] bg-white p-1 sm:p-2 shadow-2xl z-40">
                <div className="w-full h-full rounded-[8px] sm:rounded-[12px] overflow-hidden">
                  <SafeImage
                    src={imageConfig.labTechnician}
                    alt="Doctor with Patient"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-[#faf5ff] border-t border-[#e9d5ff]">
        <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-heading font-extrabold text-[#8b5cf6] tracking-widest uppercase mb-2 block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#111827]">
              Dedicated to Clinical Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#e9d5ff] shadow-sm">
              <div className="w-12 h-12 bg-[#f3e8ff] rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="font-heading font-extrabold text-lg mb-3 text-[#111827]">Our Mission</h3>
              <p className="text-[#647b80] leading-relaxed text-xs sm:text-sm">
                To provide comprehensive, reliable, and accessible healthcare solutions, including medical consultation, pharmacy, and laboratory services, with an unwavering focus on patient well-being and clinical accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e9d5ff] shadow-sm">
              <div className="w-12 h-12 bg-[#f3e8ff] rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="font-heading font-extrabold text-lg mb-3 text-[#111827]">Our Vision</h3>
              <p className="text-[#647b80] leading-relaxed text-xs sm:text-sm">
                To become the most trusted and preferred local healthcare destination in Gokarneshwor, recognized for our ethical practices, professional integrity, and compassionate patient relationships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e9d5ff] shadow-sm">
              <div className="w-12 h-12 bg-[#f3e8ff] rounded-xl flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="font-heading font-extrabold text-lg mb-3 text-[#111827]">Our Values</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#6b7280]">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full"></span> Integrity & Transparency</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full"></span> Patient-First Care</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full"></span> Quality Excellence</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full"></span> Compassion & Safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA onOpenAppointment={onOpenAppointment} />
    </PageTransition>
  );
};

export default About;
