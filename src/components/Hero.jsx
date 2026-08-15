import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Hero = ({ onOpenAppointment }) => {
  return (
    <section className="relative w-full pt-10 pb-4 sm:pt-14 sm:pb-6 lg:pt-6 xl:pt-8 lg:pb-8 bg-gradient-to-br from-[#f8f7fc] to-[#f1eff7] overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <div className="w-full relative z-20 pl-3 sm:pl-0 lg:-mt-6 xl:-mt-8">
            <h1 className="text-[#001847] font-poppins font-bold leading-[1.15] sm:leading-[1.1] tracking-normal sm:tracking-relaxed mb-2 sm:mb-5 select-text" style={{ fontSize: 'clamp(15px, 4.5vw, 56px)' }}>
              <motion.span
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline sm:inline-block"
              >
                Expert Medical Care
              </motion.span>{' '}<br className="hidden sm:block" />{/**/}<motion.span
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="inline sm:inline-block"
              >
                And Resources For A
              </motion.span>{' '}<br className="hidden sm:block" />{/**/}<motion.span
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="inline sm:inline-block bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] bg-clip-text text-transparent"
              >
                Healthier Life
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-[10px] xs:text-[12px] sm:text-base text-[#374151] leading-tight sm:leading-relaxed mb-3 sm:mb-8 max-w-xl font-medium"
            >
              Trusted medical care, pharmacy, laboratory, and healthcare services, focused on safety, guidance, and compassionate care.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap items-center gap-2 sm:gap-4"
            >
              <button
                onClick={onOpenAppointment}
                onMouseEnter={() => import('./AppointmentModal')}
                onTouchStart={() => import('./AppointmentModal')}
                className="px-3 py-2 sm:px-8 sm:py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-[11px] sm:text-[15px] transition-all duration-300 active:scale-95 shadow-md shadow-[#8b5cf6]/20 hover:animate-pulse-ring"
              >
                Book Appointment
              </button>

              <a
                href="tel:+9779851157228"
                className="px-2.5 py-2 sm:px-8 sm:py-3.5 rounded-full bg-transparent hover:bg-[#8b5cf6] border border-[#8b5cf6] text-[#8b5cf6] hover:text-white font-semibold text-[10px] sm:text-[15px] transition-all duration-300 flex items-center gap-1 sm:gap-2 active:scale-95 shadow-xs hover:shadow-md"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                <span>+977-9851157228</span>
              </a>
            </motion.div>
          </div>

          {/* Right Image/Logo Card Content */}
          <div className="relative flex items-center justify-center lg:justify-end h-full overflow-visible">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-[220px] xs:max-w-[280px] sm:max-w-md lg:max-w-lg"
            >

              {/* Background Organic Unshaped SVG Backdrop */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <motion.svg
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[105%] h-[105%] max-h-[220px] xs:max-h-[300px] sm:max-h-[540px] drop-shadow-xl"
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
                src="/assets/male-doctorbg.webp"
                alt="Expert Doctor"
                width="500"
                height="500"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto max-h-[220px] xs:max-h-[280px] sm:max-h-[480px] lg:max-h-[520px] object-contain relative z-10 mx-auto"
              />

              {/* Floating Certified Badge Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-1 -right-2 xs:bottom-2 xs:-right-3 sm:bottom-6 sm:-right-6 lg:-right-8 z-20 w-[110px] xs:w-[140px] sm:w-[240px] shadow-2xl"
              >
                <div className="bg-[#8b5cf6] text-white p-2 xs:p-3 sm:p-5 rounded-[12px] sm:rounded-[20px]">
                  <div className="flex items-center gap-1.5 sm:gap-3 mb-1 sm:mb-3">
                    <div className="w-[20px] h-[20px] xs:w-[26px] xs:h-[26px] sm:w-[42px] sm:h-[42px] shrink-0">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 5L61.6496 16.6496L78.1066 16.6496L78.1066 33.1066L89.7562 44.7562L85 50L89.7562 55.2438L78.1066 66.8934L78.1066 83.3504L61.6496 83.3504L50 95L38.3504 83.3504L21.8934 83.3504L21.8934 66.8934L10.2438 55.2438L15 50L10.2438 44.7562L21.8934 33.1066L21.8934 16.6496L38.3504 16.6496L50 5Z" stroke="white" strokeWidth="4" strokeLinejoin="round" />
                        <path d="M35 50L45 60L65 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[10px] xs:text-[12px] sm:text-[17px] leading-tight text-white">
                      Certified Care
                    </h4>

                  </div>
                  <p className="text-[8px] xs:text-[9px] sm:text-[13px] text-white leading-snug">
                    Professional care you can trust, always.
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
