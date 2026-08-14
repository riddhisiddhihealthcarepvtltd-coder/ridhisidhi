import { motion } from 'framer-motion';
import { Eye, Heart, Target } from 'lucide-react';

import PageTransition from '../components/PageTransition';
import SafeImage from '../components/SafeImage';
import SEOHead from '../components/SEOHead';
import { companyInfo, imageConfig } from '../data/company';

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
      <section className="py-14 md:py-24 pb-28 md:pb-36 bg-white relative overflow-visible">
        <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-7 px-3.5 sm:px-0"
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
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-[#8b5cf6]">
                    <SafeImage src={imageConfig.owner} alt="Dileep Kumar Mahaseth" className="w-full h-full object-cover object-top scale-125" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[17px] text-[#202020] mb-0.5">Dileep Kumar Mahaseth</h4>
                    <p className="text-[13px] text-[#8b5cf6] font-medium">Chairman &amp; Registered Pharmacist (Owner)</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#6b7280] italic text-[15px] font-serif leading-relaxed">
                    "At Riddhi Siddhi Health Care, our daily effort is centered around trust, genuine care, and prompt service for every individual who walks through our doors."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right About Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative mt-0 lg:pl-10"
            >
              {/* Self-contained wrapper — reserves space for overlapping elements on mobile */}
              <div className="relative pb-[80px] sm:pb-[150px] lg:pb-0">

                {/* Main owner image */}
                <div className="relative rounded-[20px] overflow-hidden bg-white ml-auto mt-5 sm:mt-0 w-full sm:w-[82%] lg:w-[76%] h-[340px] sm:h-[460px] lg:h-[600px]">
                  <SafeImage
                    src={imageConfig.owner}
                    alt="Riddhi Siddhi Health Care Owner"
                    className="w-full h-full object-cover object-top sm:object-top lg:object-center scale-150 lg:scale-125"
                  />
                </div>

                {/* 10 Years Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.15, ease: "easeOut" } }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute -bottom-2 left-0 sm:bottom-0 sm:left-2 lg:-bottom-14 lg:left-0 z-20 cursor-pointer max-w-[calc(100%-80px)] sm:max-w-none"
                >
                  <div className="bg-[#8b5cf6] text-white py-3.5 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8 pr-[110px] sm:pr-[145px] md:pr-[175px] lg:pr-[210px] rounded-[16px] sm:rounded-[22px] sm:rounded-br-[80px] shadow-2xl flex items-center gap-3 sm:gap-4 lg:gap-6">
                    <div className="font-sans font-bold text-white flex flex-col items-center shrink-0">
                      <span className="text-[44px] sm:text-[58px] lg:text-[70px] leading-[0.9]">
                        <AnimatedCounter value={10} />
                      </span>
                      <span className="text-[13px] sm:text-[18px] lg:text-[20px] font-semibold mt-1">
                        Years
                      </span>
                    </div>
                    <div className="w-[2px] h-12 sm:h-16 lg:h-20 bg-white/40 shrink-0"></div>
                    <div className="text-[12px] sm:text-[15px] lg:text-[18px] font-semibold leading-[1.3] tracking-wide shrink-0 whitespace-nowrap">
                      Already<br />Experienced In<br />Health Care
                    </div>
                  </div>
                </motion.div>

                {/* Overlapping Smaller Image Card */}
                <div className="absolute bottom-0 right-0 sm:-right-2 lg:-bottom-10 lg:-right-6 w-[120px] sm:w-[150px] md:w-[200px] lg:w-[240px] aspect-square rounded-[14px] sm:rounded-[20px] bg-white p-1.5 sm:p-2 shadow-2xl z-40">
                  <div className="w-full h-full rounded-[10px] sm:rounded-[12px] overflow-hidden">
                    <SafeImage
                      src={imageConfig.labTechnician}
                      alt="Doctor with Patient"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3.5 sm:px-0">
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white p-6 rounded-2xl border border-[#e9d5ff] hover:border-[#6d28d9] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#f3e8ff] rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="font-heading font-extrabold text-lg mb-3 text-[#111827]">Our Mission</h3>
              <p className="text-[#647b80] leading-relaxed text-xs sm:text-sm">
                To provide comprehensive, reliable, and accessible healthcare solutions, including medical consultation, pharmacy, and laboratory services, with an unwavering focus on patient well-being and clinical accuracy.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white p-6 rounded-2xl border border-[#e9d5ff] hover:border-[#6d28d9] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#f3e8ff] rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="font-heading font-extrabold text-lg mb-3 text-[#111827]">Our Vision</h3>
              <p className="text-[#647b80] leading-relaxed text-xs sm:text-sm">
                To become the most trusted and preferred local healthcare destination in Gokarneshwor, recognized for our ethical practices, professional integrity, and compassionate patient relationships.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white p-6 rounded-2xl border border-[#e9d5ff] hover:border-[#6d28d9] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
};

export default About;
