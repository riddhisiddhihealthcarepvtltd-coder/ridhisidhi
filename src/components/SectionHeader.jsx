import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({
  kicker,
  title,
  subtitle,
  centered = false,
  className = ""
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {kicker && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal-dark text-xs font-heading font-extrabold uppercase tracking-wider mb-3 shadow-2xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
          {kicker}
        </motion.span>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink tracking-tight leading-tight mb-3"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 text-sm sm:text-base leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
