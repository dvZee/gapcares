import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData, diversityStages } from '../data/therapyData';
import Telehealth from '../components/Telehealth';

export default function ServicesPage({ onOpenBooking }) {
  return (
    <div className="page-transition">
      {/* Page Header */}
      <section style={{ background: 'var(--color-bg-subtle)', padding: '64px 0 48px', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">Areas of Clinical Focus</span>
          <h1 style={{ marginBottom: '16px' }}>Therapy Services</h1>
          <p className="lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Compassionate, trauma-informed psychotherapy tailored to your personal goals, relationship dynamics, and emotional wellbeing.
          </p>
        </div>
      </section>

      {/* Quick Anchor Bar */}
      <section style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {servicesData.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{
                fontSize: '0.88rem',
                color: 'var(--color-text-body)',
                background: 'var(--color-bg)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--color-border)'
              }}
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Detailed Services Sections (Alternating Clean Layout) */}
      <section style={{ padding: '64px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {servicesData.map((svc, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={svc.id}
                id={svc.id}
                className={`service-full-card ${isReversed ? 'reversed' : ''}`}
              >
                {/* Image */}
                <div className="service-img-col" style={{ order: isReversed ? 2 : 1 }}>
                  <img
                    src={svc.image}
                    alt={svc.alt}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="service-text-col" style={{ order: isReversed ? 1 : 2 }}>
                  <span className="section-tag" style={{ marginBottom: '8px' }}>{svc.badge}</span>
                  <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-text-title)' }}>
                    {svc.title}
                  </h2>
                  <p className="lead" style={{ fontSize: '1.05rem', marginBottom: '16px', color: 'var(--color-primary)' }}>
                    {svc.desc}
                  </p>
                  <p style={{ color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '20px' }}>
                    {svc.fullDesc || svc.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                    {svc.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          background: 'var(--color-primary-soft)',
                          color: 'var(--color-primary)',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '0.82rem',
                          fontWeight: 500
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points Preview */}
                  {svc.whoItsFor && (
                    <ul className="styled-bullets" style={{ marginBottom: '22px' }}>
                      {svc.whoItsFor.slice(0, 2).map((item, i) => (
                        <li key={i} style={{ fontSize: '0.92rem' }}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Link
                      to={`/services/${svc.slug || svc.id}`}
                      className="btn btn-primary"
                    >
                      <span>In-Depth Guide &amp; Details →</span>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => onOpenBooking(svc.title)}
                    >
                      <span>Book Consultation</span>
                    </button>
                    <Link to="/fees-faq" className="service-link" style={{ marginLeft: '4px' }}>
                      <span>Fees &amp; Coverage</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Life Stages & Diversity Section */}
      <section style={{ background: 'var(--color-bg-subtle)', padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Inclusivity &amp; Life Stages</span>
            <h2>Care Across Every Stage of Life</h2>
            <p className="lead">
              Honoring the unique transitions, societal pressures, and relationships of every generation.
            </p>
          </div>

          <div className="services-overview-grid">
            {diversityStages.map((stage, sIdx) => (
              <div
                key={sIdx}
                style={{
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    {stage.tag}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{stage.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telehealth & Ontario Accessibility */}
      <Telehealth />

      {/* Bottom CTA */}
      <section style={{ background: 'var(--color-surface)', padding: '64px 0', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
        <div className="container container-narrow">
          <span className="section-tag">Get Started</span>
          <h2 style={{ marginBottom: '16px' }}>Ready to Begin Your Healing Journey?</h2>
          <p className="lead" style={{ marginBottom: '28px' }}>
            Take advantage of a free 15-minute consultation to ask questions and see how Esther can support your goals.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onOpenBooking()}
            >
              <span>Book a Consultation</span>
            </button>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
