import React from 'react';
import { servicesData } from '../data/therapyData';

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Therapy Services</span>
          <h2 id="services-title">Support for the Challenges You Are Facing</h2>
          <p className="lead">
            Psychotherapy provides a confidential, supportive environment to explore your emotions, relationships, and goals.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((svc) => (
            <article key={svc.id} className="service-card">
              <div className="service-img-wrap">
                <img src={svc.image} alt={svc.alt} width="400" height="220" loading="lazy" />
              </div>
              <div className="service-body">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <button
                  type="button"
                  className="service-link"
                  onClick={() => onOpenBooking(svc.title)}
                >
                  <span>Book Consultation</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
