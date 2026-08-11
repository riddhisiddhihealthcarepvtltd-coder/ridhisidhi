import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/9779851157228?text=${encodeURIComponent(
    'Hello! I would like to inquire about healthcare services at Riddhi Siddhi Health Care.'
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 0.5,
        type: 'spring',
        stiffness: 180,
        damping: 12,
      }}
      className="
        fixed
        right-6
        bottom-6
        sm:right-6
        sm:bottom-6
        max-sm:right-4
        max-sm:bottom-5
        z-[9999]

        w-[58px]
        h-[58px]

        rounded-full

        bg-[#25D366]
        hover:bg-[#20BD5A]

        text-white

        flex
        items-center
        justify-center

        shadow-xl
        shadow-[#25D366]/30

        active:scale-95
        hover:scale-105

        transition-all
        duration-300

        group
      "
      aria-label="Chat on WhatsApp"
    >
      {/* Subtle Ripple Effect */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-[#25D366]
          opacity-50
          animate-ping
        "
        style={{
          animationDuration: '3s',
        }}
      />

      {/* WhatsApp Logo */}
      <svg
        viewBox="0 0 24 24"
        className="
          relative
          z-10
          w-8
          h-8
          group-hover:scale-110
          transition-transform
          duration-300
        "
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.198-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />

        <path d="M20.52 3.449A11.79 11.79 0 0 0 12.04 0C5.495 0 .16 5.335.16 11.88c0 2.093.546 4.137 1.584 5.93L.054 24l6.34-1.663a11.89 11.89 0 0 0 5.646 1.436h.005c6.542 0 11.88-5.335 11.88-11.88a11.82 11.82 0 0 0-3.405-8.444zM12.045 21.75h-.004a9.86 9.86 0 0 1-5.03-1.377l-.36-.214-3.764.987 1.005-3.67-.234-.377a9.84 9.84 0 0 1-1.51-5.219c0-5.42 4.414-9.834 9.84-9.834a9.78 9.78 0 0 1 6.965 2.888 9.82 9.82 0 0 1 2.88 6.974c-.004 5.42-4.418 9.842-9.838 9.842z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;