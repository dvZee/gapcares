import React from 'react';
import { siteConfig } from '../data/therapyData';

export default function Hero({ onOpenBooking }) {
  return (
    <>
      <section id="home" className="hero-section" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-grid">
            
            {/* Left Content */}
            <div className="hero-content">
              <h1 id="hero-title" className="hero-title">
                Find Space to <em>Heal</em>, Grow &amp; <em>Reconnect</em>
              </h1>

              <div className="hero-narrative">
                <p>
                  George &amp; Assenoth Psychotherapy is a space where you can feel heard, respected, and supported. Whether you are navigating anxiety, relationship challenges, difficult life experiences, or simply seeking a deeper understanding of yourself, you do not have to navigate it alone.
                </p>
                <p>
                  <strong>Esther M. Broomfield</strong> provides compassionate, trauma-informed psychotherapy that recognizes the uniqueness of every individual, relationship, and life experience.
                </p>
                <span className="quote-line">
                  "Your story matters. Your experiences matter. And change is possible."
                </span>
              </div>

              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenBooking()}
                >
                  <span>Book a Consultation</span>
                </button>
                
                <a href="#services" className="btn btn-secondary">
                  <span>Explore Services</span>
                </a>
              </div>
            </div>

            {/* Right Media - Clean, Uncluttered, Pure Sanctuary */}
            <div className="hero-media-wrap">
              <div className="hero-media-card">
                <img
                  src="/assets/images/hero-sanctuary.jpg"
                  alt="A peaceful, sunlit therapy sanctuary"
                  width="600"
                  height="520"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Minimal Trust Strip */}
      <section className="trust-strip" aria-label="Credentials & Qualifications">
        <div className="container">
          <div className="trust-strip-inner">
            <div className="trust-item">
              <strong>CRPO #{siteConfig.crpoNumber}</strong>
              <span>Registered Psychotherapist (Q)</span>
            </div>
            <div className="trust-item">
              <strong>25+ Years Experience</strong>
              <span>Community &amp; Psychosocial Care</span>
            </div>
            <div className="trust-item">
              <strong>M Div Clinical Counselling</strong>
              <span>Tyndale University</span>
            </div>
            <div className="trust-item">
              <strong>EFT &amp; DBT Trained</strong>
              <span>Evidence-Based Modalities</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
