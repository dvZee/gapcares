import React from 'react';
import { siteConfig } from '../data/therapyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <img src="/assets/images/logo-transparent.png" alt="George & Assenoth Psychotherapy" className="footer-logo-img" />
            <p>
              Compassionate, trauma-informed, and anti-oppressive psychotherapy for individuals, couples, and families across Ontario.
            </p>
            <p style={{ marginTop: '12px', fontSize: '0.85rem' }}>
              <strong>{siteConfig.therapist}</strong>, {siteConfig.credentials}<br />
              CRPO License #{siteConfig.crpoNumber}
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about-preview">About Esther</a></li>
              <li><a href="#approaches">Therapy Approaches</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#fees-faq">Fees &amp; FAQs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Individual Therapy</a></li>
              <li><a href="#services">Couples &amp; Family</a></li>
              <li><a href="#services">Anxiety &amp; Stress</a></li>
              <li><a href="#services">Depression Care</a></li>
              <li><a href="#services">Trauma &amp; PTSD</a></li>
              <li><a href="#services">Relationships</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              <div>
                <a href={`tel:${siteConfig.phoneTel}`} style={{ color: 'var(--color-text-title)', fontWeight: 600 }}>{siteConfig.phone}</a>
              </div>
              <div>
                <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--color-text-title)' }}>{siteConfig.email}</a>
              </div>
              <div style={{ marginTop: '8px', fontSize: '0.84rem' }}>
                Virtual &amp; Telephone Sessions Across Ontario
              </div>
              <div style={{ fontSize: '0.82rem', marginTop: '4px' }}>
                Mon – Fri: By Appointment
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div>
            &copy; {currentYear} {siteConfig.brandName} {siteConfig.brandSubtitle} ({siteConfig.domain}). All rights reserved.
          </div>
          <div>
            Regulated by the College of Registered Psychotherapists of Ontario (CRPO #{siteConfig.crpoNumber}).
          </div>
        </div>
      </div>
    </footer>
  );
}
