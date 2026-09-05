import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Critical Layout Components (Loaded eagerly for first viewport)
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Deferred Below-the-fold / Modal Components (Lazy-loaded)
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const AppointmentModal = lazy(() => import('./components/AppointmentModal'));

// Route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Team = lazy(() => import('./pages/Team'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Lightweight fallback loader for route transitions
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center">
    <div className="w-10 h-10 border-3 border-[#8b5cf6]/20 border-t-[#8b5cf6] rounded-full animate-spin"></div>
    <span className="mt-3 text-xs font-semibold text-slate-400 tracking-wider uppercase">Loading...</span>
  </div>
);

function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => setIsAppointmentOpen(true);
  const handleCloseAppointment = () => setIsAppointmentOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenAppointment={handleOpenAppointment} />
        
        <Suspense fallback={<PageLoader />}>
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

        <Suspense fallback={null}>
          <Footer onOpenAppointment={handleOpenAppointment} />
        </Suspense>

        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>

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
