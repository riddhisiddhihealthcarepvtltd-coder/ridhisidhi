import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import ScrollToTop from './components/ScrollToTop';
import AppointmentModal from './components/AppointmentModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => setIsAppointmentOpen(true);
  const handleCloseAppointment = () => setIsAppointmentOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenAppointment={handleOpenAppointment} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/about" element={<About onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/services" element={<Services onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/team" element={<Team onOpenAppointment={handleOpenAppointment} />} />
            <Route path="/contact" element={<Contact onOpenAppointment={handleOpenAppointment} />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>

        <Footer onOpenAppointment={handleOpenAppointment} />
        <WhatsAppButton onOpenAppointment={handleOpenAppointment} />
        <CallButton />

        <AppointmentModal 
          isOpen={isAppointmentOpen} 
          onClose={handleCloseAppointment} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
