import React, { useState } from 'react';
import { siteConfig } from '../data/therapyData';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* Clean Logo Only (No duplicate text, since text is already part of the logo graphic) */}
        <a href="#home" className="brand-logo" aria-label="George & Assenoth Psychotherapy Homepage">
          <img
            src="/assets/images/logo-transparent.png"
            alt="George & Assenoth Psychotherapy"
            className="header-logo-img"
          />
        </a>

        {/* Center Nav - Zero underlines */}
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Main Navigation">
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#about-preview" className="nav-link" onClick={closeMenu}>About Esther</a>
          <a href="#approaches" className="nav-link" onClick={closeMenu}>Approaches</a>
          <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
          <a href="#fees-faq" className="nav-link" onClick={closeMenu}>Fees &amp; FAQ</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
        </nav>

        {/* Right Action */}
        <div className="header-right">
          <a href={`tel:${siteConfig.phoneTel}`} className="header-phone-link">
            <span>{siteConfig.phone}</span>
          </a>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => onOpenBooking()}
          >
            <span>Book Consultation</span>
          </button>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
