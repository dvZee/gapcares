import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FeesFaqPage from './pages/FeesFaqPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Individual Therapy');
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenBooking = (serviceName = 'Individual Therapy') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Navbar onOpenBooking={handleOpenBooking} />

      <main id="main-content" style={{ minHeight: 'calc(100vh - 160px)' }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/fees-faq" element={<FeesFaqPage onOpenBooking={handleOpenBooking} />} />
          <Route
            path="/contact"
            element={
              <ContactPage
                onOpenBooking={handleOpenBooking}
                onSubmitSuccess={handleShowToast}
              />
            }
          />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
        onSubmitSuccess={handleShowToast}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </BrowserRouter>
  );
}
