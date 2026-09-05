import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const galleryImages = [
  { src: '/gallery/image.webp', alt: 'Riddhi Siddhi Health Care - Gallery 1' },
  { src: '/gallery/image2.webp', alt: 'Riddhi Siddhi Health Care - Gallery 2' },
  { src: '/gallery/image3.webp', alt: 'Riddhi Siddhi Health Care - Gallery 3' },
  { src: '/gallery/image4.webp', alt: 'Riddhi Siddhi Health Care - Gallery 4' },
  { src: '/gallery/image5.webp', alt: 'Riddhi Siddhi Health Care - Gallery 5' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Gallery = () => {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () =>
    setLightboxIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const nextImage = () =>
    setLightboxIdx((prev) => (prev + 1) % galleryImages.length);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  return (
    <>
      <SEOHead
        title="Gallery | Riddhi Siddhi Health Care Pvt. Ltd."
        description="Explore our gallery showcasing Riddhi Siddhi Health Care's facilities, team, and patient care moments in Kathmandu, Nepal."
        keywords="gallery, Riddhi Siddhi Health Care, photos, healthcare, Kathmandu"
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#faf5ff] via-[#f5f3ff] to-[#f3e8ff]/30 py-12 md:py-16 border-b border-[#e9d5ff]">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <span className="text-xs font-heading font-extrabold text-[#8b5cf6] tracking-widest uppercase mb-2 block">
              Our Gallery
            </span>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#111827] mb-3">
              A Glimpse Into Our Healthcare World
            </h1>
            <p className="text-[#6b7280] text-base">
              Explore our facilities, dedicated team, and the compassionate care we provide to every patient at Riddhi Siddhi Health Care.
            </p>
          </div>
        </section>

        {/* Masonry Gallery Grid */}
        <section className="container mx-auto max-w-[1400px] px-4 lg:px-16 xl:px-24 py-16 sm:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ columns: 'var(--gallery-cols, 3)', gap: '1.25rem' }}
            className="[--gallery-cols:1] sm:[--gallery-cols:2] lg:[--gallery-cols:3]"
          >
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="break-inside-avoid mb-5 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-slate-100 border border-white/60"
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.alt} in full screen`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-auto object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-end p-5">
                  <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/40 flex items-center justify-center shrink-0 hover:bg-black/50 transition-colors">
                    <ZoomIn className="w-4.5 h-4.5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/92 backdrop-blur-md z-[9999] flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            role="dialog"
            aria-label="Image lightbox"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIdx].src}
                alt={galleryImages[lightboxIdx].alt}
                className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-white/40 text-xs">
                  {lightboxIdx + 1} / {galleryImages.length}
                </p>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2 mt-4">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${i === lightboxIdx ? 'bg-[#a78bfa] scale-125' : 'bg-white/30 hover:bg-white/60'
                      }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
