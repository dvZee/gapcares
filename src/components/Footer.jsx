import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/therapyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link to="/" aria-label="George & Assenoth Psychotherapy Homepage">
              <img src="/assets/images/logo-transparent.png" alt="George & Assenoth Psychotherapy" className="footer-logo-img" />
            </Link>
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Esther</Link></li>
              <li><Link to="/services">Therapy Services</Link></li>
              <li><Link to="/fees-faq">Fees &amp; FAQs</Link></li>
              <li><Link to="/contact">Contact &amp; Book</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Individual Therapy</Link></li>
              <li><Link to="/services">Couples &amp; Family</Link></li>
              <li><Link to="/services">Anxiety &amp; Stress</Link></li>
              <li><Link to="/services">Depression Care</Link></li>
              <li><Link to="/services">Trauma &amp; PTSD</Link></li>
              <li><Link to="/services">Relationship Challenges</Link></li>
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
