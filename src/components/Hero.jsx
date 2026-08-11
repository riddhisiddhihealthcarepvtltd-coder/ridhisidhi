import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ThumbsUp } from 'lucide-react';

const Hero = ({ onOpenAppointment }) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-110px)] flex items-center py-6 sm:py-8 lg:py-10 overflow-hidden bg-gradient-to-br from-[#f8f7fc] to-[#f1eff7]">
      <div className="container mx-auto max-w-[1400px] px-6 lg:px-16 xl:px-24 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <div className="max-w-2xl lg:pr-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] font-sans font-semibold text-black leading-[1.1] tracking-tight mb-5">
                Expert Medical Care <br />
                And Resources For A <br />
                Healthier Life
              </h1>

              <p className="text-sm sm:text-base text-[#374151] leading-relaxed mb-8 max-w-xl font-medium">
                Facilisis scelerisque commodo laoreet lacus felis dictum; nisl inceptos
                nascetur. Ornare natoque nisi vel erat aliquet pulvinar. Non penatibus lectus
                tempor; risus tellus aptent.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAppointment}
                  className="px-8 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-[15px] transition-all duration-300 active:scale-95 shadow-md shadow-[#8b5cf6]/20"
                >
                  Get Started
                </button>

                <a
                  href="tel:+1234567891123"
                  className="px-8 py-3.5 rounded-full bg-transparent hover:bg-[#8b5cf6]/5 border border-[#8b5cf6] text-[#8b5cf6] font-semibold text-[15px] transition-all duration-300 flex items-center gap-2 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>+(12)345-6789-1123</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Logo Card Content */}
          <div className="relative flex items-center justify-center lg:justify-end h-full mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-md lg:max-w-lg"
            >

              {/* Background Organic Unshaped SVG Backdrop */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <motion.svg
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[105%] h-[105%] max-h-[540px] drop-shadow-xl"
                >
                  <defs>
                    <linearGradient id="hero-doctor-bg-shape" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.85" />
                      <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#hero-doctor-bg-shape)"
                    d="M428.5,316.5Q413,383,354,417.5Q295,452,229.5,441.5Q164,431,114.5,385.5Q65,340,54.5,275Q44,210,87.5,158.5Q131,107,185.5,73Q240,39,303.5,58.5Q367,78,405.5,134Q444,190,428.5,316.5Z"
                  />
                </motion.svg>
              </div>

              {/* Doctor Image */}
              <img
                src="/assets/male-doctorbg.png"
                alt="Expert Doctor"
                className="w-full h-auto max-h-[440px] sm:max-h-[480px] lg:max-h-[520px] object-contain relative z-10 mx-auto"
              />

              {/* Floating Certified Badge Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-6 -right-2 sm:-right-6 lg:-right-8 z-20 w-[210px] sm:w-[240px] shadow-2xl"
              >
                <div className="bg-[#8b5cf6] text-white p-4 sm:p-5 rounded-[20px]">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] shrink-0">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 5L61.6496 16.6496L78.1066 16.6496L78.1066 33.1066L89.7562 44.7562L85 50L89.7562 55.2438L78.1066 66.8934L78.1066 83.3504L61.6496 83.3504L50 95L38.3504 83.3504L21.8934 83.3504L21.8934 66.8934L10.2438 55.2438L15 50L10.2438 44.7562L21.8934 33.1066L21.8934 16.6496L38.3504 16.6496L50 5Z" stroke="white" strokeWidth="4" strokeLinejoin="round" />
                        <path d="M35 50L45 60L65 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[15px] sm:text-[17px] leading-tight">Certified Care</h4>
                  </div>
                  <p className="text-[12px] sm:text-[13px] text-white/90 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
