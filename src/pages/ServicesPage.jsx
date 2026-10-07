import React from 'react';
import Services from '../components/Services';
import DiversitySpotlight from '../components/DiversitySpotlight';
import Telehealth from '../components/Telehealth';

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '40px' }}>
      <Services onOpenBooking={onOpenBooking} />
      <DiversitySpotlight />
      <Telehealth />
    </div>
  );
}
