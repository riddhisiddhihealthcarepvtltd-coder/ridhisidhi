import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ThumbsUp } from 'lucide-react';

const Hero = ({ onOpenAppointment }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-[#f8f7fc] to-[#f1eff7] min-h-[550px] flex items-center">
      <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="max-w-2xl lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-sans font-bold text-black leading-[1.1] tracking-tight mb-6">
                Expert Medical Care <br />
                And Resources For A <br />
                Healthier Life
              </h1>

              <p className="text-base sm:text-lg text-[#374151] leading-relaxed mb-10 max-w-xl font-medium">
                Facilisis scelerisque commodo laoreet lacus felis dictum; nisl inceptos
                nascetur. Ornare natoque nisi vel erat aliquet pulvinar. Non penatibus lectus
                tempor; risus tellus aptent.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={onOpenAppointment}
                  className="px-8 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-[15px] transition-all duration-300 active:scale-95"
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
          <div className="relative flex items-end justify-center lg:justify-end h-full mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-lg"
            >
              
              {/* Doctor Image */}
              <img
                src="/assets/male-doctorbg.png"
                alt="Expert Doctor"
                className="w-full h-auto object-contain relative z-10"
              />

              {/* Floating Certified Badge Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-16 -right-4 sm:-right-8 lg:-right-12 z-20 w-[240px] shadow-2xl"
              >
                <div className="bg-[#8b5cf6] text-white p-5 rounded-[20px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-[42px] h-[42px] shrink-0">
                       <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M50 5L61.6496 16.6496L78.1066 16.6496L78.1066 33.1066L89.7562 44.7562L85 50L89.7562 55.2438L78.1066 66.8934L78.1066 83.3504L61.6496 83.3504L50 95L38.3504 83.3504L21.8934 83.3504L21.8934 66.8934L10.2438 55.2438L15 50L10.2438 44.7562L21.8934 33.1066L21.8934 16.6496L38.3504 16.6496L50 5Z" stroke="white" strokeWidth="4" strokeLinejoin="round"/>
                         <path d="M35 50L45 60L65 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </div>
                    <h4 className="font-semibold text-[17px] leading-tight">Certified Care</h4>
                  </div>
                  <p className="text-[13px] text-white/90 leading-snug">
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
