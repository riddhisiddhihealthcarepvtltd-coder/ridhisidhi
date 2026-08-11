import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Stethoscope, Users, Building2, Quote, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import SafeImage from '../components/SafeImage';
import { servicesData } from '../data/services';
import { companyInfo, imageConfig } from '../data/company';

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
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#dcefea] via-[#f1f8f7] to-[#f9fbfb] relative overflow-hidden">

        {/* Decorative background waves/curves (abstract approximation) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <svg className="absolute top-[-20%] left-[-10%] w-[80%] h-[120%] text-[#00897b]/5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
              <div className="font-sans font-bold text-[#00897b] tracking-widest uppercase text-[13px] mb-2">
                ABOUT US
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#202020] leading-[1.15] mb-6">
                Providing Exceptional<br />Healthcare for All
              </h2>
              <p className="text-[#6b7280] text-[15px] leading-relaxed mb-8 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae commodo
                ipsum, eu ullamcorper magna. Nam non posuere lacus, eget viverra massa.
                Sed magna ligula, lacinia sit amet bibendum eu, porta nec ante.
              </p>

              {/* 2-Column Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00897b] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Disease Prevention</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00897b] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Improved Quality of Life</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00897b] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Early Diagnosis & Treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00897b] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#374151]">Emergency Care & Trauma Services</span>
                </div>
              </div>

              <div className="h-[1px] w-[90%] bg-[#00897b]/30 my-8"></div>

              {/* Testimonial / Quote */}
              <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 xl:gap-8 mb-8">
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-transparent">
                    <SafeImage src={imageConfig.chairman} alt="Emma Stone" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[17px] text-[#202020] mb-0.5">Emma Stone</h4>
                    <p className="text-[13px] text-[#6b7280]">General Practitioner</p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[#6b7280] italic text-[15px] font-serif leading-relaxed pr-4">
                    "Fusce vitae commodo ipsum, eu ullam<br className="hidden sm:block" />
                    corper magna nam non posuere."
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-block px-7 py-3.5 rounded bg-[#00897b] hover:bg-[#00796b] text-white font-sans font-bold text-[13px] tracking-wide uppercase transition-colors"
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
              className="lg:col-span-6 relative mt-16 lg:mt-0 lg:pl-10"
            >
              <div className="relative rounded-[20px] overflow-hidden bg-gray-200 ml-auto w-full sm:w-[82%] lg:w-[76%] h-[320px] sm:h-[460px] lg:h-[520px]">
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
                whileHover={{ scale: 1.04 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 left-0 sm:left-4 lg:left-8 z-20 cursor-pointer"
              >
                <div className="bg-[#00897b] text-white p-4 sm:p-7 lg:p-12 rounded-[12px] sm:rounded-[22px] sm:rounded-br-[80px] shadow-2xl flex items-center gap-3 sm:gap-5 lg:gap-6">
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

      {/* 3. Services Grid Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-heading font-extrabold text-[#1f8a86] tracking-widest uppercase mb-2">
              SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#16353a]">
              We Provide Various Health Services
            </h2>
            <p className="text-[#647b80] text-sm mt-3">
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

      {/* 4. Solid Teal Stats Banner */}
      <section className="py-16 sm:py-20 bg-[#1f8a86] text-white relative overflow-hidden shadow-inner">
        {/* Animated background radial glows */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto max-w-[1400px] px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {statsBannerData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer"
              >
                {/* Shimmer highlight effect on hover */}
                <div className="absolute -inset-x-full inset-y-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-white/15 group-hover:bg-white group-hover:text-[#1f8a86] text-white flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-inner group-hover:scale-110 group-hover:rotate-6">
                  <stat.icon className="w-7 h-7 transition-colors duration-300" />
                </div>

                <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-2 text-white tracking-tight drop-shadow-sm">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-xs sm:text-sm text-[#dceff4] group-hover:text-white uppercase tracking-wider font-extrabold transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Patient Stories & Experiences (TESTIMONIAL SECTION - High Contrast & High Legibility) */}
      <section className="py-20 md:py-28 bg-[#f4f9fa] border-t border-[#dce8e9]">
        <div className="container mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-24">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-heading font-extrabold text-[#1f8a86] tracking-widest uppercase mb-2">
              TESTIMONIAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#16353a]">
              Patient Stories & Experiences
            </h2>
            <p className="text-[#647b80] text-sm mt-2">
              Read what our local patients in Gokarneshwor-5 have to say about our clinic and pharmacy services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 - Pure White High Contrast Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-[#dce8e9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#1f8a86] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#1f8a86]" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-[#1f8a86]/30 mb-3" />

                <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 text-[#16353a] leading-snug">
                  "The doctors and staff are professional, compassionate, and attentive to my needs."
                </h3>

                <p className="text-[#647b80] text-sm leading-relaxed mb-8">
                  Riddhi Siddhi Health Care provided me with quick diagnostic lab results and accurate medication. Their pharmacy team explained the dosage and guidance thoroughly.
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#dce8e9]">
                <div className="w-11 h-11 rounded-full bg-[#dceff4] text-[#1f8a86] flex items-center justify-center font-heading font-extrabold text-sm border border-[#1f8a86]/20">
                  MT
                </div>
                <div>
                  <div className="font-heading font-extrabold text-sm text-[#16353a]">Mark Thompson</div>
                  <div className="text-xs text-[#1f8a86] font-bold">Local Patient • Gokarneshwor</div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Pure White High Contrast Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-[#dce8e9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#1f8a86] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#1f8a86]" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-[#1f8a86]/30 mb-3" />

                <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 text-[#16353a] leading-snug">
                  "The medical team made me feel comfortable and confident throughout the entire process."
                </h3>

                <p className="text-[#647b80] text-sm leading-relaxed mb-8">
                  I visit Riddhi Siddhi for regular general consultations and pharmacy needs. The clinic environment is clean, and the staff is extremely respectful and helpful.
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#dce8e9]">
                <div className="w-11 h-11 rounded-full bg-[#dceff4] text-[#1f8a86] flex items-center justify-center font-heading font-extrabold text-sm border border-[#1f8a86]/20">
                  SJ
                </div>
                <div>
                  <div className="font-heading font-extrabold text-sm text-[#16353a]">Sarah Jackson</div>
                  <div className="text-xs text-[#1f8a86] font-bold">Patient • Kathmandu</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <CTA onOpenAppointment={onOpenAppointment} />
    </PageTransition>
  );
};

export default Home;
