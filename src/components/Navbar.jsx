import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { siteConfig } from '../data/therapyData';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* Clean Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="George & Assenoth Psychotherapy Homepage" onClick={closeMenu}>
          <img
            src="/assets/images/logo-green.jpg"
            alt="George & Assenoth Psychotherapy"
            className="header-logo-img"
          />
        </Link>

        {/* Multi-Page Navigation - 5 Pages */}
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Therapy Services
          </NavLink>
          <NavLink
            to="/fees-faq"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Fees &amp; FAQs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact &amp; Book
          </NavLink>
          <NavLink
            to="/book"
            className={({ isActive }) => `nav-link mobile-only-nav ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
            style={{ fontWeight: 600, color: 'var(--color-primary)' }}
          >
            📅 Schedule Consultation
          </NavLink>
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
