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

const About = ({ onOpenAppointment }) => {
  return (
    <PageTransition>
      <SEOHead 
        title="About Us" 
        description={`Learn more about ${companyInfo.name}, our mission, vision, and leadership team in Gokarneshwor-5, Kathmandu.`}
        path="/about"
      />

      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-[#f7fbfb] via-[#eef8f8] to-[#dceff4]/30 py-12 md:py-16 border-b border-[#dce8e9]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-block text-xs font-heading font-extrabold text-[#1f8a86] tracking-widest uppercase mb-2">
            OUR STORY & VALUES
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#16353a] mb-3">
            About Riddhi Siddhi Health Care
          </h1>
          <p className="text-[#647b80] text-base">
            Discover the commitment, vision, and leadership behind {companyInfo.name}.
          </p>
        </div>
      </section>

      {/* Main About Overview */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <div className="text-xs font-heading font-extrabold text-[#1f8a86] tracking-widest uppercase">
                ABOUT US
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-[#16353a] leading-tight">
                Providing Exceptional Healthcare for All
              </h2>
              <p className="text-[#647b80] leading-relaxed text-sm sm:text-base">
                {companyInfo.name} was established with a singular focus: to bring accessible, professional, and trustworthy healthcare services to Gokarneshwor-5 and the surrounding areas of Kathmandu.
              </p>
              
              <p className="text-[#647b80] leading-relaxed text-sm sm:text-base">
                We understand that healthcare is a deeply personal experience. That is why our clinic is designed to prioritize patient comfort, accurate laboratory diagnostics, and genuine medicine dispensing. Every aspect of our center is managed by registered, qualified healthcare professionals.
              </p>

              <div className="pt-4 border-t border-[#dce8e9] flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#dceff4]/50 px-4 py-2.5 rounded-xl border border-[#dce8e9]">
                  <FileText className="w-4 h-4 text-[#1f8a86]" />
                  <span className="text-xs font-bold text-[#16353a]">PAN: {companyInfo.pan}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#dceff4]/50 px-4 py-2.5 rounded-xl border border-[#dce8e9]">
                  <ShieldCheck className="w-4 h-4 text-[#1f8a86]" />
                  <span className="text-xs font-bold text-[#16353a]">Regd. No.: {companyInfo.registration}</span>
                </div>
              </div>
            </div>

            {/* Visual Card with Light Teal/Sky Palette */}
            <div className="relative rounded-2xl overflow-hidden bg-[#eef8f8] p-8 md:p-10 border border-[#dce8e9] shadow-sm">
              <div className="relative z-10">
                <SafeImage
                  src={imageConfig.chairman}
                  alt={leadershipNote.author}
                  className="w-20 h-20 object-cover rounded-full border-2 border-white shadow-md mb-5"
                  isAvatar={true}
                />
                <h3 className="font-heading font-extrabold text-xl text-[#16353a] mb-1">
                  {leadershipNote.title}
                </h3>
                <h4 className="text-xs font-bold text-[#1f8a86] mb-4 uppercase tracking-wider">
                  {leadershipNote.subtitle}
                </h4>
                <blockquote className="text-[#647b80] text-sm sm:text-base italic leading-relaxed mb-6 border-l-3 border-[#1f8a86] pl-3">
                  "{leadershipNote.quote}"
                </blockquote>
                <div>
                  <div className="font-heading font-bold text-[#16353a] text-sm">{leadershipNote.author}</div>
                  <div className="text-xs text-[#647b80] font-medium">{leadershipNote.designation}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-[#f7fbfb] border-t border-[#dce8e9]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-heading font-extrabold text-[#1f8a86] tracking-widest uppercase mb-2 block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#16353a]">
              Dedicated to Clinical Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#dce8e9] shadow-sm">
              <div className="w-12 h-12 bg-[#dceff4] rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#1f8a86]" />
              </div>
              <h3 className="font-heading font-extrabold text-lg mb-3 text-[#16353a]">Our Mission</h3>
              <p className="text-[#647b80] leading-relaxed text-xs sm:text-sm">
                To provide comprehensive, reliable, and accessible healthcare solutions, including medical consultation, pharmacy, and laboratory services, with an unwavering focus on patient well-being and clinical accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#dce8e9] shadow-sm">
              <div className="w-12 h-12 bg-[#dceff4] rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-[#1f8a86]" />
              </div>
              <h3 className="font-heading font-extrabold text-lg mb-3 text-[#16353a]">Our Vision</h3>
              <p className="text-[#647b80] leading-relaxed text-xs sm:text-sm">
                To become the most trusted and preferred local healthcare destination in Gokarneshwor, recognized for our ethical practices, professional integrity, and compassionate patient relationships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#dce8e9] shadow-sm">
              <div className="w-12 h-12 bg-[#dceff4] rounded-xl flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-[#1f8a86]" />
              </div>
              <h3 className="font-heading font-extrabold text-lg mb-3 text-[#16353a]">Our Values</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#647b80]">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1f8a86] rounded-full"></span> Integrity & Transparency</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1f8a86] rounded-full"></span> Patient-First Care</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1f8a86] rounded-full"></span> Quality Excellence</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1f8a86] rounded-full"></span> Compassion & Safety</li>
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
