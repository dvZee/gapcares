import React from 'react';
import { siteConfig } from '../data/therapyData';

export default function AboutTherapist({ onOpenBooking }) {
  return (
    <section id="about-preview" className="about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          
          {/* Clean Portrait */}
          <div className="about-portrait">
            <img
              src="/assets/images/esther-broomfield.jpg"
              alt="Esther Broomfield, Registered Psychotherapist (Qualifying) CRPO #20088"
              width="540"
              height="540"
              loading="lazy"
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
                Esther Broomfield is a Registered Psychotherapist (Qualifying) with the College of Registered Psychotherapists of Ontario (CRPO), registration number {siteConfig.crpoNumber}.
              </p>
              <p>
                She completed a Master of Divinity in Counselling (Clinical) at Tyndale University and a Bachelor of Arts in Social Science at York University.
              </p>
              <p>
                Esther brings more than 25 years of experience supporting individuals, children, and families in community settings, with a focus on their psychosocial and economic needs. Her professional experience has shaped an approach grounded in compassion, cultural sensitivity, and respect.
              </p>
            </div>

            <div className="credentials-list">
              <div className="credential-item">
                <strong>CRPO Registration</strong>
                <span>License #{siteConfig.crpoNumber}</span>
              </div>
              <div className="credential-item">
                <strong>M.Div Clinical Counselling</strong>
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
