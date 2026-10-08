import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { feeOptions, faqsList, siteConfig } from '../data/therapyData';

export default function FeesFaqPage({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <div className="page-transition">
      {/* Page Header */}
      <section style={{ background: 'var(--color-bg-subtle)', padding: '64px 0 48px', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">Transparency &amp; Care</span>
          <h1 style={{ marginBottom: '16px' }}>Session Fees &amp; FAQs</h1>
          <p className="lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Clear, transparent pricing and helpful answers so you feel completely at ease before beginning therapy.
          </p>
        </div>
      </section>

      {/* 1. Session Fees */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Investment in Your Wellbeing</span>
            <h2>Psychotherapy Session Fees</h2>
            <p className="lead">
              Receipts are provided promptly after each session for reimbursement under extended health benefit plans.
            </p>
          </div>

          <div className="fees-grid" style={{ marginTop: '48px' }}>
            {feeOptions.map((fee, idx) => (
              <div key={idx} className={`fee-card ${fee.popular ? 'featured' : ''}`}>
                <span className="fee-type">{fee.duration}</span>
                <h3>{fee.title}</h3>

                <div className="fee-rates">
                  <div className="rate-row">
                    <span className="rate-label">Individual Therapy:</span>
                    <span className="rate-price">{fee.individualPrice}</span>
                  </div>
                  <div className="rate-row">
                    <span className="rate-label">Couples / Family:</span>
                    <span className="rate-price">{fee.couplesPrice}</span>
                  </div>
                </div>

                <ul className="fee-features">
                  {fee.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                  <li>Secure PHIPA-compliant teletherapy</li>
                  <li>No tax added (psychotherapy is GST/HST exempt)</li>
                </ul>

                <button
                  type="button"
                  className={`btn ${fee.popular ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                  onClick={() => onOpenBooking(fee.title)}
                >
                  <span>Select This Session</span>
                </button>
              </div>
            ))}
          </div>

          {/* 2. Session Details & Coverage Notice */}
          <div style={{ marginTop: '64px', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '40px', boxShadow: 'var(--shadow-soft)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              
              <div>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📋</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Insurance &amp; Benefits</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
                  While direct third-party billing is not available, official receipts with Esther's CRPO Registration (#{siteConfig.crpoNumber}) and supervisor credentials are sent immediately after each session. Most extended health plans cover Registered Psychotherapists.
                </p>
              </div>

              <div>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💳</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Payment Methods</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
                  Payments can be made via Interac e-Transfer or major credit card. Payments are due within 24 hours of your scheduled session to ensure smooth account standing.
                </p>
              </div>

              <div>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>⏱️</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Cancellation Policy</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
                  Your appointment time is reserved exclusively for you. Please provide at least <strong>48 hours' notice</strong> if you need to reschedule or cancel to avoid being charged the full session fee.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Visual Break with Client Photo */}
      <section style={{ background: 'var(--color-bg-subtle)', padding: '64px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Care &amp; Confidentiality</span>
              <h2 style={{ marginBottom: '16px' }}>A Space Created for True Peace of Mind</h2>
              <p style={{ color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '16px' }}>
                All consultations and therapy sessions follow strict Ontario privacy standards (PHIPA). Whether joining by encrypted video or telephone from your quiet room, your personal life and records remain completely confidential.
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--color-primary)' }}>
                "We protect your comfort and trust at every stage of the process."
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
              <img
                src="/assets/images/counselling-session-notes.jpg"
                alt="Therapist with notes creating a welcoming, confidential clinical session"
                style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Common Questions (FAQs) */}
      <section style={{ padding: '80px 0' }}>
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag">Helpful Clarifications</span>
            <h2>Frequently Asked Questions</h2>
            <p className="lead">
              Have questions about how therapy works? Find clear answers below.
            </p>
          </div>

          <div className="faq-wrap" style={{ marginTop: '40px' }}>
            {faqsList.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-btn"
                  aria-expanded={openFaq === idx}
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Need more help? */}
          <div style={{ marginTop: '54px', textAlign: 'center', padding: '36px', background: 'var(--color-primary-soft)', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Have a question that isn't answered here?</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
              Esther is always happy to clarify questions before you book. Reach out directly or book a free 15-minute call.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenBooking()}
              >
                <span>Book Free Consultation</span>
              </button>
              <Link to="/contact" className="btn btn-secondary">
                <span>Contact Esther</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
