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
      <section className="bg-gradient-to-b from-[#faf5ff] via-[#f5f3ff] to-[#f3e8ff]/30 py-12 md:py-16 border-b border-[#e9d5ff]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-xs font-heading font-extrabold text-[#8b5cf6] tracking-widest uppercase mb-2 block">
            REACH OUT TO US
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#111827] mb-3">
            Contact Information & Inquiry
          </h1>
          <p className="text-[#6b7280] text-base">
            We are here to answer your questions, schedule appointments, and provide immediate healthcare guidance.
          </p>
        </div>
      </section>

      {/* Contact Section matching prompt: Dark Purple Theme #2e1065 */}
      <section className="py-16 md:py-24 bg-[#2e1065] text-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Contact Card */}
            <div className="lg:col-span-5">
              <ContactCard />
            </div>

            {/* Right Column: Shop Image */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-xl border border-white/10 h-full min-h-[380px]">
              <img
                src="/assets/riddhisiddhishop.jpeg"
                alt="Riddhi Siddhi Shop"
                className="w-full h-full object-cover"
                style={{ minHeight: '380px' }}
              />
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-extrabold text-xl text-[#111827] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#8b5cf6]" />
                <span>Our Physical Location</span>
              </h3>
              <p className="text-[#6b7280] text-xs sm:text-sm mt-0.5">
                Riddhi Siddhi Polyclinic Pvt. Ltd., Gokarneshwor-5, Nayabasti, Kathmandu
              </p>
            </div>

            <a
              href={companyInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        <div className="w-full h-[450px] border-t border-[#e9d5ff]">
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
      </section>

    </PageTransition>
  );
};

export default Contact;
