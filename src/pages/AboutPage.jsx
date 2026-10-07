import React from 'react';
import AboutTherapist from '../components/AboutTherapist';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div style={{ paddingTop: '40px' }}>
      <AboutTherapist onOpenBooking={onOpenBooking} />
    </div>
  );
}
