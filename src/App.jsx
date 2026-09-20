import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Static site with local data only — pages and layout load eagerly so
// there is no empty-content flash while lazy chunks resolve.
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// On-demand Modal (only mounts when opened, so lazy loading is safe here)
const AppointmentModal = lazy(() => import('./components/AppointmentModal'));


function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => setIsAppointmentOpen(true);
  const handleCloseAppointment = () => setIsAppointmentOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenAppointment={handleOpenAppointment} />
        
        <Suspense fallback={null}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/about" element={<About onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/services" element={<Services onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/team" element={<Team onOpenAppointment={handleOpenAppointment} />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact onOpenAppointment={handleOpenAppointment} />} />
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>

        <Footer onOpenAppointment={handleOpenAppointment} />

        <WhatsAppButton />

        {isAppointmentOpen && (
          <Suspense fallback={null}>
            <AppointmentModal 
              isOpen={isAppointmentOpen} 
              onClose={handleCloseAppointment} 
            />
          </Suspense>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
