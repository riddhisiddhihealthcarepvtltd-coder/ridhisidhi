import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MapPin, Navigation, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import ContactCard from '../components/ContactCard';
import { companyInfo } from '../data/company';

const Contact = ({ onOpenAppointment }) => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      e.target.reset();
      setTimeout(() => setFormState('idle'), 3000);
    }, 1000);
  };

  return (
    <PageTransition>
      <SEOHead 
        title="Contact Us" 
        description="Get in touch with Riddhi Siddhi Health Care in Gokarneshwor-5, Kathmandu. Find phone numbers, WhatsApp, email, and Google Maps directions."
        path="/contact"
      />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#f7fbfb] via-[#eef8f8] to-[#dceff4]/30 py-12 md:py-16 border-b border-[#dce8e9]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-xs font-heading font-extrabold text-[#1f8a86] tracking-widest uppercase mb-2 block">
            REACH OUT TO US
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#16353a] mb-3">
            Contact Information & Inquiry
          </h1>
          <p className="text-[#647b80] text-base">
            We are here to answer your questions, schedule appointments, and provide immediate healthcare guidance.
          </p>
        </div>
      </section>

      {/* Contact Section matching prompt: Dark Healthcare Theme #123f43 */}
      <section className="py-16 md:py-24 bg-[#123f43] text-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Contact Card */}
            <div className="lg:col-span-5">
              <ContactCard />
            </div>

            {/* Right Column: Form Box in #0d3033 Deeper Area */}
            <div className="lg:col-span-7 bg-[#0d3033] rounded-2xl p-8 sm:p-10 shadow-xl border border-white/10 text-white">
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">Send Us A Message</h3>
              <p className="text-xs text-[#b8cfd1] mb-8">Fill out your information below and our clinic team will respond promptly.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name *"
                    className="w-full bg-[#123f43] border border-white/15 text-sm text-white placeholder:text-[#b8cfd1] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1f8a86] focus:border-[#1f8a86] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="email" 
                      required
                      placeholder="Your Email *"
                      className="w-full bg-[#123f43] border border-white/15 text-sm text-white placeholder:text-[#b8cfd1] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1f8a86] focus:border-[#1f8a86] transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      required
                      placeholder="Phone / Subject *"
                      className="w-full bg-[#123f43] border border-white/15 text-sm text-white placeholder:text-[#b8cfd1] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1f8a86] focus:border-[#1f8a86] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Message *"
                    className="w-full bg-[#123f43] border border-white/15 text-sm text-white placeholder:text-[#b8cfd1] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1f8a86] focus:border-[#1f8a86] transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState !== 'idle'}
                  className={`w-full py-3.5 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider text-white shadow-md transition-all flex items-center justify-center gap-2 ${
                    formState === 'success' 
                      ? 'bg-emerald-600' 
                      : 'bg-[#1f8a86] hover:bg-[#12635f] active:scale-[0.98]'
                  }`}
                >
                  {formState === 'idle' && (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {formState === 'submitting' && <span>SENDING...</span>}
                  {formState === 'success' && (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>MESSAGE SENT</span>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Prominent Google Maps Location Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading font-extrabold text-xl text-[#16353a] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1f8a86]" />
                <span>Our Physical Location</span>
              </h3>
              <p className="text-[#647b80] text-xs sm:text-sm mt-0.5">
                Riddhi Siddhi Polyclinic Pvt. Ltd., Gokarneshwor-5, Nayabasti, Kathmandu
              </p>
            </div>

            <a
              href={companyInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f8a86] hover:bg-[#12635f] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-sm border border-[#dce8e9]">
            <iframe 
              title="Riddhi Siddhi Polyclinic Pvt. Ltd. Location"
              src={companyInfo.embedMapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </PageTransition>
  );
};

export default Contact;
