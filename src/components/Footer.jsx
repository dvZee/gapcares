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
              <li><Link to="/book" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Schedule Consultation</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/individual">Individual Therapy</Link></li>
              <li><Link to="/services/couples">Couples &amp; Family</Link></li>
              <li><Link to="/services/anxiety">Anxiety &amp; Stress</Link></li>
              <li><Link to="/services/depression">Depression Care</Link></li>
              <li><Link to="/services/trauma">Trauma &amp; PTSD</Link></li>
              <li><Link to="/services/relationships">Relationship Challenges</Link></li>
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
              <div style={{ fontSize: '0.84rem', marginTop: '2px', color: 'var(--color-text-title)' }}>
                <span style={{ fontWeight: 600 }}>e-Transfer:</span>{' '}
                <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>{siteConfig.eTransferEmail || siteConfig.email}</span>
              </div>
              <div style={{ marginTop: '6px', fontSize: '0.84rem' }}>
                Virtual &amp; Telephone Sessions Across Ontario
              </div>
              <div style={{ fontSize: '0.88rem', marginTop: '4px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Book By Appointment
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div>
            &copy; {currentYear} {siteConfig.brandName} {siteConfig.brandSubtitle} ({siteConfig.domain}). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span>Regulated CRPO #{siteConfig.crpoNumber}</span>
            <span>•</span>
            <Link to="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" style={{ textDecoration: 'underline' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
