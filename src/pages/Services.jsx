import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';

import { servicesData, quickActions } from '../data/services';
import { companyInfo } from '../data/company';

// Only services that have images
const serviceImages = servicesData.filter((s) => s.image);

const Services = ({ onOpenAppointment }) => {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () =>
    setLightboxIdx((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
  const nextImage = () =>
    setLightboxIdx((prev) => (prev + 1) % serviceImages.length);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  return (
    <PageTransition>
      <SEOHead 
        title="Healthcare Services" 
        description="Explore the comprehensive healthcare services provided by Riddhi Siddhi Health Care, including general consultations, pharmacy, and diagnostic laboratory testing."
        path="/services"
      />

      {/* Services Page Hero Header */}
      <section className="bg-gradient-to-b from-[#faf5ff] via-[#f5f3ff] to-[#f3e8ff]/30 py-12 md:py-16 border-b border-[#e9d5ff]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-flex px-3.5 py-1 bg-white border border-[#e9d5ff] text-[#8b5cf6] text-xs font-heading font-extrabold uppercase tracking-wider rounded-full mb-3 shadow-sm">
            WHAT WE OFFER
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#111827] mb-3 leading-tight">
            Comprehensive <span className="text-[#8b5cf6]">Healthcare Services</span>
          </h1>
          <p className="text-[#6b7280] text-base leading-relaxed max-w-2xl mx-auto">
            Providing a reliable, patient-centered approach to medical consultation, medicine dispensing, and diagnostic laboratory testing in Gokarneshwor-5, Kathmandu.
          </p>
        </div>
      </section>

      {/* Full Detailed Services Grid */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 px-3.5 sm:px-0">
            {servicesData.map((service, index) => {
              // Find this service's index within serviceImages array (for lightbox)
              const imgIdx = serviceImages.findIndex((s) => s.id === service.id);

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="scroll-mt-32 border border-[#e9d5ff] hover:border-[#6d28d9] rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Service Image — clickable */}
                  {service.image && (
                    <div
                      className="w-full h-64 overflow-hidden relative group cursor-zoom-in"
                      onClick={() => openLightbox(imgIdx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View full image for ${service.title}`}
                      onKeyDown={(e) => e.key === 'Enter' && openLightbox(imgIdx)}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Zoom hint overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d95]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                          <ZoomIn className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#f3e8ff] text-[#8b5cf6] flex items-center justify-center font-heading font-extrabold text-xl shadow-sm border border-[#8b5cf6]/20">
                        {service.number}
                      </div>
                      <span className="px-3 py-1 bg-[#faf5ff] text-[#7c3aed] text-xs font-heading font-extrabold uppercase tracking-wider rounded-full border border-[#e9d5ff]">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="font-heading font-extrabold text-2xl text-[#111827] mb-3 leading-snug">
                      {service.title}
                    </h2>
                    
                    <p className="text-[#6b7280] leading-relaxed text-sm mb-6">
                      {service.fullDesc}
                    </p>
                    
                    {service.features && (
                      <div className="bg-[#faf5ff] p-5 rounded-xl border border-[#e9d5ff] mb-6">
                        <h4 className="text-xs font-heading font-extrabold text-[#111827] uppercase tracking-wider mb-3 border-b border-[#e9d5ff] pb-2">
                          Key Service Highlights
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#111827] font-medium">
                              <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-[#e9d5ff]">
                      <button
                        onClick={onOpenAppointment}
                        onMouseEnter={() => import('../components/AppointmentModal')}
                        onTouchStart={() => import('../components/AppointmentModal')}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-heading font-bold text-xs shadow-sm transition-all duration-300 active:scale-95"
                      >
                        <span>Book Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions / Support Grid */}
      <section className="py-16 md:py-24 bg-[#faf5ff] border-t border-[#e9d5ff]">
        <div className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-heading font-extrabold text-[#8b5cf6] tracking-widest uppercase mb-2 block">
              PATIENT SUPPORT
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#111827]">
              How We Help You Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-3.5 sm:px-0">
            {quickActions.slice(0, 4).map((action, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white p-6 rounded-2xl border border-[#e9d5ff] hover:border-[#6d28d9] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-heading font-extrabold text-base text-[#111827] mb-2">{action.title}</h4>
                  <p className="text-xs text-[#6b7280] mb-4 leading-relaxed">{action.description}</p>
                </div>
                <button
                  onClick={onOpenAppointment}
                  className="text-xs font-bold text-[#8b5cf6] hover:text-[#7c3aed] flex items-center gap-1 transition-colors pt-2"
                >
                  <span>{action.actionText}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            key="services-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/92 backdrop-blur-md z-[9999] flex items-center justify-center p-4 sm:p-10"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            role="dialog"
            aria-label="Service image lightbox"
            aria-modal="true"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            {serviceImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next */}
            {serviceImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={serviceImages[lightboxIdx].image}
                alt={serviceImages[lightboxIdx].title}
                className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-sm">
                  {serviceImages[lightboxIdx].title}
                </p>
                {serviceImages.length > 1 && (
                  <p className="text-white/40 text-xs mt-1">
                    {lightboxIdx + 1} / {serviceImages.length}
                  </p>
                )}
              </div>

              {/* Dot indicators */}
              {serviceImages.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {serviceImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        i === lightboxIdx ? 'bg-[#a78bfa] scale-125' : 'bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </PageTransition>
  );
};

export default Services;

