import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Approaches from './components/Approaches';
import Services from './components/Services';
import DiversitySpotlight from './components/DiversitySpotlight';
import AboutTherapist from './components/AboutTherapist';
import Telehealth from './components/Telehealth';
import FeesFaq from './components/FeesFaq';
import ConsultationSection from './components/ConsultationSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';

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
    <>
      <Navbar onOpenBooking={handleOpenBooking} />

      <main id="main-content">
        <Hero onOpenBooking={handleOpenBooking} />
        <Philosophy />
        <Approaches />
        <Services onOpenBooking={handleOpenBooking} />
        <DiversitySpotlight />
        <AboutTherapist onOpenBooking={handleOpenBooking} />
        <Telehealth />
        <FeesFaq onOpenBooking={handleOpenBooking} />
        <ConsultationSection onSubmitSuccess={handleShowToast} />
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
    </>
  );
}
