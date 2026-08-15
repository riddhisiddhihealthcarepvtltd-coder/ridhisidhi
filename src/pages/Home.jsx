import { motion, useInView } from 'framer-motion';
import { Award, Building2, Quote, Star, Stethoscope, Users } from 'lucide-react';
import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';
import SafeImage from '../components/SafeImage';
import SEOHead from '../components/SEOHead';
import ServiceCard from '../components/ServiceCard';
import { imageConfig } from '../data/company';
import { servicesData } from '../data/services';

// Lazy load below-the-fold CTA component
const CTA = lazy(() => import('../components/CTA'));

const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * (value - startValue) + startValue);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const statsBannerData = [
  {
    icon: Award,
    value: 10,
    suffix: "+ Years",
    label: "Of Healthcare Experience"
  },
  {
    icon: Stethoscope,
    value: 15,
    suffix: "+",
    label: "Doctors & Staff"
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Satisfied Patients"
  },
  {
    icon: Building2,
    value: 100,
    suffix: "%",
    label: "Genuine Medicines"
  }
];

const Home = ({ onOpenAppointment }) => {
  return (
    <PageTransition>
      <SEOHead path="/" />

      {/* 1. Hero Section */}
      <Hero onOpenAppointment={onOpenAppointment} />

      {/* 2. About Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#f3e8ff] via-[#faf5ff] to-[#f5f3ff] relative overflow-hidden">

        {/* Decorative background waves/curves (abstract approximation) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <svg className="absolute top-[-20%] left-[-10%] w-[80%] h-[120%] text-[#8b5cf6]/5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M45.7,-76.3C58.9,-70.5,69.1,-57.4,78.2,-43.5C87.3,-29.6,95.3,-14.8,96.5,0.7C97.6,16.1,91.9,32.2,81.3,44.9C70.6,57.6,55,67,40.1,73.6C25.2,80.3,11,84.2,-3,89.1C-17,94,-31.6,100.1,-43.7,94.9C-55.8,89.7,-65.4,73.2,-73.4,57.7C-81.4,42.2,-87.8,27.7,-89.9,12.3C-91.9,-3.1,-89.6,-19.4,-82.7,-33.5C-75.8,-47.6,-64.3,-59.5,-51,-65.2C-37.7,-70.9,-22.6,-70.4,-7,-69.1C8.6,-67.8,25.8,-65.7,45.7,-76.3Z" transform="translate(100 100) scale(1.1)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left About Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-7"
            >
              <div className="font-sans font-semibold text-[#8b5cf6] tracking-widest uppercase text-[13px] mb-2">
                ABOUT US
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold text-[#202020] leading-[1.15] mb-6">
                Providing Exceptional<br />Healthcare for All
              </h2>
              <p className=" text-[15px] leading-relaxed mb-8 max-w-lg">
                We are committed to providing compassionate, reliable, and high-quality healthcare for every patient. Our experienced medical team focuses on understanding each patient's needs and delivering personalized care in a safe and welcoming environment.
              </p>

              {/* 2-Column Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Disease Prevention</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Improved Quality of Life</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Early Diagnosis & Treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b5cf6] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Emergency Care & Trauma Services</span>
                </div>
              </div>

              <div className="h-[1px] w-[90%] bg-[#8b5cf6]/30 my-8"></div>

              {/* Testimonial / Quote */}
              <div className="flex flex-col gap-3.5 mb-8">
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden border-2 border-transparent">
                    <SafeImage src={imageConfig.chairman} alt="Emma Stone" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[17px] text-[#202020] mb-0.5">Emma Stone</h4>
                    <p className="text-[13px] text-[#000000]">General Practitioner</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#000000] italic text-[15px] font-serif leading-relaxed pr-4 pt-1">
                    "तपाईंको स्वास्थ्य हाम्रो प्राथमिकता हो। तपाईंको स्वास्थ्य यात्राको हरेक चरणमा हामी
                    विश्वसनीय उपचार, सहयोग र आवश्यक हेरचाह प्रदान गर्न सधैं प्रतिबद्ध छौं।"
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-block px-7 py-3.5 rounded bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-sans font-bold text-[13px] tracking-wide uppercase transition-colors"
                >
                  MORE ABOUT US
                </Link>
              </div>
            </motion.div>

            {/* Right About Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative mt-10 lg:mt-0 lg:pl-10"
            >
              {/* Self-contained wrapper — reserves space for overlapping elements on mobile */}
              <div className="relative pb-[80px] sm:pb-[150px] lg:pb-0">

                {/* Main doctor/lab image */}
                <div className="relative rounded-[20px] overflow-hidden bg-gray-200 ml-auto mt-5 sm:mt-0 w-full sm:w-[82%] lg:w-[76%] h-[340px] sm:h-[460px] lg:h-[520px]">
                  <SafeImage
                    src={imageConfig.labTechnologist}
                    alt="Healthcare Team"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* 10 Years Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.15, ease: "easeOut" } }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute -bottom-2 left-0 sm:bottom-0 sm:left-2 lg:-bottom-16 lg:left-0 z-20 cursor-pointer max-w-[calc(100%-80px)] sm:max-w-none"
                >
                  <div className="bg-[#8b5cf6] text-white py-3.5 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8 pr-[110px] sm:pr-[145px] md:pr-[175px] lg:pr-[210px] rounded-[16px] sm:rounded-[22px] sm:rounded-br-[80px] shadow-2xl flex items-center gap-3 sm:gap-4 lg:gap-6">
                    <div className="font-sans font-bold text-white flex flex-col items-center shrink-0">
                      <span className="text-[44px] sm:text-[58px] lg:text-[70px] leading-[0.9]">
                        <AnimatedCounter value={10} />
                      </span>
                      <span className="text-[13px] sm:text-[18px] lg:text-[20px] font-semibold mt-1">Years</span>
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

      {/* 3. Services Grid Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-heading font-extrabold text-[#8b5cf6] tracking-widest uppercase mb-2">
              SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111827]">
              We Provide Various Health Services
            </h2>
            <p className="text-[#6b7280] text-sm mt-3">
              Comprehensive medical care, diagnostic testing, and pharmacy services under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} onOpenAppointment={onOpenAppointment} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Section - Clean Typography without Box Containers */}
      <section className="py-14 sm:py-16 bg-[#faf5ff]">
        <div className="container mx-auto max-w-[1400px] px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsBannerData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-2 cursor-default"
              >
                <div className="group w-12 h-12 rounded-full bg-white border border-[#e9d5ff] shadow-sm text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white hover:border-[#8b5cf6] hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-center mb-3 cursor-pointer">
                  <stat.icon className="w-6 h-6 transition-colors duration-300" />
                </div>

                <div className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl mb-1 text-[#111827] tracking-relaxed">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-xs sm:text-sm text-[#6b7280] uppercase tracking-wider font-extrabold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Patient Stories & Experiences (TESTIMONIAL SECTION) */}
      <section className="py-20 md:py-28 bg-white border-b border-[#e9d5ff]">
        <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-heading font-extrabold text-[#8b5cf6] tracking-widest uppercase mb-2">
              TESTIMONIAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111827]">
              Patient Stories & Experiences
            </h2>
            <p className="text-[#6b7280] text-sm mt-2">
              Read what our local patients in Gokarneshwor-5 have to say about our clinic and pharmacy services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-[#e9d5ff] hover:border-[#6d28d9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-1 text-[#8b5cf6] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8b5cf6]" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-[#8b5cf6]/30 mb-3" />

                <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 text-[#111827] leading-snug">
                  "The doctors and staff are professional, compassionate, and attentive to my needs."
                </h3>

                <p className="text-[#6b7280] text-sm leading-relaxed mb-8">
                  Riddhi Siddhi Health Care provided me with quick diagnostic lab results and accurate medication. Their pharmacy team explained the dosage and guidance thoroughly.
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#e9d5ff]">
                <div className="w-11 h-11 rounded-full bg-[#f3e8ff] text-[#8b5cf6] flex items-center justify-center font-heading font-extrabold text-sm border border-[#8b5cf6]/20">
                  MT
                </div>
                <div>
                  <div className="font-heading font-extrabold text-sm text-[#111827]">Mark Thompson</div>
                  <div className="text-xs text-[#8b5cf6] font-bold">Local Patient • Gokarneshwor</div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-[#e9d5ff] hover:border-[#6d28d9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-1 text-[#8b5cf6] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8b5cf6]" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-[#8b5cf6]/30 mb-3" />

                <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 text-[#111827] leading-snug">
                  "The medical team made me feel comfortable and confident throughout the entire process."
                </h3>

                <p className="text-[#6b7280] text-sm leading-relaxed mb-8">
                  I visit Riddhi Siddhi for regular general consultations and pharmacy needs. The clinic environment is clean, and the staff is extremely respectful and helpful.
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#e9d5ff]">
                <div className="w-11 h-11 rounded-full bg-[#f3e8ff] text-[#8b5cf6] flex items-center justify-center font-heading font-extrabold text-sm border border-[#8b5cf6]/20">
                  SJ
                </div>
                <div>
                  <div className="font-heading font-extrabold text-sm text-[#111827]">Sarah Jackson</div>
                  <div className="text-xs text-[#8b5cf6] font-bold">Patient • Kathmandu</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <CTA onOpenAppointment={onOpenAppointment} />
      </Suspense>
    </PageTransition>
  );
};

export default Home;
