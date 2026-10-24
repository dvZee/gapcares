import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData, siteConfig, feeOptions } from '../data/therapyData';
import DaisyFlowerIcon from '../components/DaisyFlowerIcon';

export default function ServiceDetailPage({ onOpenBooking }) {
  const { serviceId } = useParams();

  // Find matching service
  const service = servicesData.find(
    (s) => s.id === serviceId || s.slug === serviceId
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Recommended fee
  const standardFee = feeOptions[0];

  return (
    <div className="page-transition">
      {/* Service Header Banner */}
      <section className="service-detail-hero">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="section-tag" style={{ margin: 0 }}>{service.badge}</span>
              <span style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)' }}>• Ontario Telehealth &amp; Phone</span>
            </div>
            
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-text-title)' }}>
              {service.title}
            </h1>

            <p className="lead" style={{ fontSize: '1.18rem', color: 'var(--color-text-body)', lineHeight: '1.8' }}>
              {service.desc}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '28px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenBooking(service.title)}
              >
                <span>Book Consultation for {service.title}</span>
              </button>
              <Link to="/services" className="btn btn-secondary">
                <span>← All Therapy Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section style={{ padding: '60px 0 90px' }}>
        <div className="container">
          <div className="service-detail-grid">

            {/* Left Main Editorial Body */}
            <div>
              {/* Featured Visual */}
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', marginBottom: '40px' }}>
                <img
                  src={service.image}
                  alt={service.alt}
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* In-depth Overview */}
              <article className="service-detail-card">
                <h3>Understanding {service.title}</h3>
                <div style={{ fontSize: '1.04rem', lineHeight: '1.85', color: 'var(--color-text-body)', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {service.fullDesc.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} style={{ margin: 0 }}>{para}</p>
                  ))}
                </div>

                <div style={{ padding: '20px 24px', background: 'var(--color-primary-soft)', borderLeft: '4px solid var(--color-primary)', borderRadius: 'var(--radius-sm)', margin: '28px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <DaisyFlowerIcon size={22} color="var(--color-primary)" />
                    <strong style={{ color: 'var(--color-text-title)', fontSize: '0.98rem' }}>Clinical Practice Framework</strong>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', margin: 0, lineHeight: '1.65' }}>
                    Sessions are grounded in safety, trauma-informed care, and cultural humility. We move collaboratively at your pace, honoring your personal worldview, history, and goals.
                  </p>
                </div>
              </article>

              {/* Who This Is For - Clean Bullet Points */}
              {service.whoItsFor && (
                <article className="service-detail-card">
                  <h3>Who Can Benefit from {service.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
                    This therapy focus is especially supportive for individuals and partners encountering:
                  </p>
                  <ul className="styled-bullets">
                    {service.whoItsFor.map((item, idx) => (
                      <li key={idx}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {/* What We Focus On - Clean Bullet Points */}
              {service.coreFocus && (
                <article className="service-detail-card">
                  <h3>What We Focus on in Sessions</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
                    Together with Esther, sessions emphasize compassionate exploration and concrete progress:
                  </p>
                  <ul className="styled-bullets">
                    {service.coreFocus.map((focusItem, idx) => (
                      <li key={idx}>
                        <span>{focusItem}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              {/* Evidence-Based Modalities */}
              {service.methods && (
                <article className="service-detail-card">
                  <h3>Evidence-Based Approaches Incorporated</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px', fontSize: '0.95rem' }}>
                    Therapy blends tailored modalities backed by contemporary psychotherapy research:
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {service.methods.map((method, mIdx) => (
                      <span
                        key={mIdx}
                        style={{
                          background: 'var(--color-bg-subtle)',
                          color: 'var(--color-primary)',
                          border: '1px solid var(--color-border)',
                          padding: '8px 18px',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '0.9rem',
                          fontWeight: 500
                        }}
                      >
                        ✓ {method}
                      </span>
                    ))}
                  </div>
                </article>
              )}

              {/* Expected Outcomes - Clean Bullet Points */}
              {service.outcomes && (
                <article className="service-detail-card">
                  <h3>What You Can Expect to Experience</h3>
                  <ul className="styled-bullets">
                    {service.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx}>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )}

            </div>

            {/* Right Sticky Sidebar */}
            <div>
              <aside className="service-sidebar-card">
                <span className="section-tag" style={{ marginBottom: '12px' }}>Session Details</span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '18px', color: 'var(--color-text-title)' }}>
                  Service Summary
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.92rem', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '20px', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', letterSpacing: '0.06em' }}>
                      Session Format
                    </span>
                    <strong style={{ color: 'var(--color-text-title)' }}>Virtual Video &amp; Telephone</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Across Ontario (PHIPA Compliant)</div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', letterSpacing: '0.06em' }}>
                      Session Duration
                    </span>
                    <strong style={{ color: 'var(--color-text-title)' }}>50 Minutes / 75 Minutes</strong>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', letterSpacing: '0.06em' }}>
                      Session Investment
                    </span>
                    <strong style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>
                      {service.id === 'couples' ? standardFee.couplesPrice : standardFee.individualPrice}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block' }}>
                      Per 50-minute standard session • No tax
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', letterSpacing: '0.06em' }}>
                      Consultations &amp; Office Hours
                    </span>
                    <strong style={{ color: 'var(--color-primary)' }}>Book By Appointment</strong>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block', letterSpacing: '0.06em' }}>
                      Extended Health Coverage
                    </span>
                    <span style={{ color: 'var(--color-text-body)', fontSize: '0.86rem' }}>
                      Official receipts provided for Registered Psychotherapist insurance claims.
                    </span>
                  </div>
                </div>

                {/* Primary CTA */}
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%', marginBottom: '12px' }}
                  onClick={() => onOpenBooking(service.title)}
                >
                  <span>Request Free 15-Min Consultation</span>
                </button>

                <Link
                  to="/fees-faq"
                  className="btn btn-secondary"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <span>View All Fee Options &amp; FAQs</span>
                </Link>

                {/* CRPO Badge Card Matching Client Feedback */}
                <div className="crpo-badge-card" style={{ marginTop: '28px' }}>
                  <div className="crpo-badge-flower">
                    <DaisyFlowerIcon size={36} color="var(--color-primary)" />
                  </div>
                  <div className="crpo-badge-title">CRPO Reg.</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px' }}>
                    #{siteConfig.crpoNumber}
                  </div>
                  <div className="crpo-badge-subtitle">
                    College of Registered Psychotherapists
                  </div>
                </div>

              </aside>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Cross-Navigation */}
      <section style={{ background: 'var(--color-bg-subtle)', padding: '60px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="section-tag">Explore More</span>
            <h2>Other Areas of Practice</h2>
          </div>

          <div className="services-crossnav-grid">
            {servicesData
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((other) => (
                <div
                  key={other.id}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {other.badge}
                  </span>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{other.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '16px', flexGrow: 1 }}>
                    {other.desc}
                  </p>
                  <Link to={`/services/${other.id}`} className="service-link">
                    <span>Explore details →</span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
