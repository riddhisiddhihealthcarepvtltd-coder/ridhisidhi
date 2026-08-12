import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, User, Phone, Stethoscope, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/company';
import { servicesData } from '../data/services';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: servicesData[0]?.title || 'General Consultation',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct formatted WhatsApp message
    const message = `🏥 *APPOINTMENT BOOKING REQUEST*%0A%0A` +
      `👤 *Patient Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone Number:* ${encodeURIComponent(formData.phone)}%0A` +
      `⚕️ *Service:* ${encodeURIComponent(formData.service)}%0A` +
      `📅 *Preferred Date:* ${encodeURIComponent(formData.date || 'As soon as possible')}%0A` +
      `📝 *Notes:* ${encodeURIComponent(formData.notes || 'None')}%0A%0A` +
      `Sent via ${companyInfo.name} Website`;

    // Target WhatsApp raw number: 9851157228
    const whatsappUrl = `https://wa.me/9779851157228?text=${message}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#111827]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e9d5ff] z-10 my-8"
        >
          {/* Solid Purple Header */}
          <div className="bg-[#8b5cf6] p-6 text-white relative border-b border-[#7c3aed]">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-[#f3e8ff] text-xs font-bold uppercase tracking-wider mb-2 border border-white/20">
              <Calendar className="w-3.5 h-3.5 text-[#f3e8ff]" />
              <span>Easy Online Booking</span>
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-white">
              Book an Appointment
            </h3>
            <p className="text-[#f3e8ff] text-xs mt-1 font-medium">
              Fill in your details below to send an appointment request directly to our WhatsApp support team.
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#111827] flex items-center gap-1.5 ml-1">
                <User className="w-3.5 h-3.5 text-[#8b5cf6]" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-[#faf5ff] border border-[#e9d5ff] text-sm text-[#111827] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-[#8b5cf6] transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#111827] flex items-center gap-1.5 ml-1">
                <Phone className="w-3.5 h-3.5 text-[#8b5cf6]" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="98XXXXXXXX"
                className="w-full bg-[#faf5ff] border border-[#e9d5ff] text-sm text-[#111827] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-[#8b5cf6] transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#111827] flex items-center gap-1.5 ml-1">
                  <Stethoscope className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  Required Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#faf5ff] border border-[#e9d5ff] text-sm text-[#111827] rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-[#8b5cf6] transition-all appearance-none"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Pharmacy Inquiry">Pharmacy / Medicines</option>
                  <option value="Lab Test">Laboratory / Testing</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#111827] flex items-center gap-1.5 ml-1">
                  <Calendar className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#faf5ff] border border-[#e9d5ff] text-sm text-[#111827] rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-[#8b5cf6] transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#111827] flex items-center gap-1.5 ml-1">
                <MessageSquare className="w-3.5 h-3.5 text-[#8b5cf6]" />
                Additional Note (Optional)
              </label>
              <textarea
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Briefly describe your medical requirement or inquiry..."
                className="w-full bg-[#faf5ff] border border-[#e9d5ff] text-sm text-[#111827] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-[#8b5cf6] transition-all resize-none"
              ></textarea>
            </div>

            <div className="pt-3">
              {/* Solid High-Contrast WhatsApp Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-heading font-extrabold text-sm shadow-md shadow-[#8b5cf6]/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 text-white" />
                <span className="text-white">Send Request via WhatsApp (9851157228)</span>
              </button>

              <p className="text-[11px] text-center text-[#647b80] mt-2 font-medium">
                Clicking will open WhatsApp with your pre-filled appointment request.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AppointmentModal;
