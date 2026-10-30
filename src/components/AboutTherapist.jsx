import React from 'react';
import { siteConfig } from '../data/therapyData';
import DaisyFlowerIcon from './DaisyFlowerIcon';

export default function AboutTherapist({ onOpenBooking }) {
  return (
    <section id="about-preview" className="about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          
          {/* Clean Logo Card */}
          <div className="about-portrait" style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 28px',
            minHeight: '380px',
            boxShadow: 'var(--shadow-soft)'
          }}>
            <img
              src="/assets/images/logo-transparent.png"
              alt="George & Assenoth Psychotherapy Logo"
              style={{ maxWidth: '360px', width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>

          {/* Bio & Content */}
          <div className="about-content">
            <span className="section-tag">About Esther</span>
            <h2 id="about-heading">A Therapist Who Believes in Your Capacity for Growth</h2>
            <div className="about-subtitle">
              {siteConfig.therapist}, {siteConfig.credentials}
            </div>

            <div className="about-bio">
              <p>
                Esther M. Broomfield is a Registered Psychotherapist (Qualifying) with the College of Registered Psychotherapists of Ontario (CRPO), registration number {siteConfig.crpoNumber}.
              </p>
              <p>
                Esther’s lived experience, years of community service, and clinical preparation have fostered a grounded presence that honors the intersections of your personal history, individual needs, cultural identity, and faith. She believes therapy is not about fitting people into diagnostic boxes. It is about restoring hope, building resilience, developing coping skills, and the confidence needed to thrive.
              </p>
              <p>
                She holds a Master of Divinity in Clinical Counselling from Tyndale University. With over 25 years of compassionate service across diverse community settings, Esther has supported individuals, youth, and families. She brings deep psychosocial insight and warmth to every therapeutic encounter.
              </p>
            </div>

            <div className="credentials-list">
              <div className="credential-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <DaisyFlowerIcon size={18} color="var(--color-primary)" />
                  <strong>CRPO Registration</strong>
                </div>
                <span>License #{siteConfig.crpoNumber}</span>
              </div>
              <div className="credential-item">
                <strong>MDiv Clinical Counselling</strong>
                <span>Tyndale University</span>
              </div>
              <div className="credential-item">
                <strong>B.A. Social Science</strong>
                <span>York University</span>
              </div>
              <div className="credential-item">
                <strong>ICEEFT / NZCEFT</strong>
                <span>EFT Externship Training</span>
              </div>
            </div>

            <div className="about-quote">
              "Your worldview and faith perspective may be an important part of your identity. Where appropriate and with your consent, therapy can make space for these perspectives as part of the therapeutic process."
            </div>

            <div style={{ marginTop: '36px' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenBooking()}
              >
                <span>Book a Consultation with Esther</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
