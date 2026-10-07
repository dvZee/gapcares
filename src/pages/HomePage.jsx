import React from 'react';
import { Link } from 'react-router-dom';
import Approaches from '../components/Approaches';
import { servicesData } from '../data/therapyData';

export default function HomePage({ onOpenBooking }) {
  return (
    <>
      {/* 1. Home (Hero Section) */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-tag">Registered Psychotherapist (Qualifying) • Ontario</span>
              
              <h1 id="hero-title" className="hero-title">
                Find Space to <em>Heal</em>, Grow &amp; <em>Reconnect</em>
              </h1>

              <div className="hero-narrative">
                <p>
                  At George &amp; Assenoth Psychotherapy, therapy is a space where you can feel heard, respected, and supported. Whether you are navigating anxiety, relationship challenges, difficult life experiences, or simply seeking a deeper understanding of yourself, you do not have to navigate it alone.
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
                <Link to="/services" className="btn btn-secondary">
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>

            <div className="hero-media-wrap">
              <div className="hero-media-card">
                <img
                  src="/assets/images/hero-sanctuary.jpg"
                  alt="A serene, sunlit therapy sanctuary"
                  width="600"
                  height="520"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="philosophy-section" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">Introduction</span>
          <h2 style={{ marginBottom: '24px' }}>Welcome to George &amp; Assenoth Psychotherapy</h2>
          <p className="lead" style={{ marginBottom: '20px' }}>
            At George &amp; Assenoth Psychotherapy, therapy is a space where you can feel heard, respected, and supported. Whether you are navigating anxiety, relationship challenges, difficult life experiences, or simply seeking a deeper understanding of yourself, you do not have to navigate it alone.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: '1.8' }}>
            <strong>Esther Broomfield</strong>, Registered Psychotherapist (Qualifying), provides compassionate, trauma-informed psychotherapy that recognizes the uniqueness of every individual, relationship, and life experience.
          </p>
          <div style={{ marginTop: '28px', fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontStyle: 'italic', color: 'var(--color-primary)' }}>
            "Your story matters. Your experiences matter. And change is possible."
          </div>
        </div>
      </section>

      {/* 3. Therapy Approach */}
      <section className="philosophy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Therapy Approach</span>
            <h2>A Compassionate &amp; Holistic Approach</h2>
            <p className="lead">
              Therapy is more than addressing symptoms. It can be an opportunity to rediscover your strengths, develop greater self-awareness, build healthier relationships, and reconnect with hope.
            </p>
            <p style={{ marginTop: '16px', color: 'var(--color-text-muted)' }}>
              Esther's approach is empathetic, trauma-informed, and grounded in an anti-oppressive framework. Therapy may incorporate evidence-based approaches while respecting your individual worldview, values, and faith perspective.
            </p>
          </div>

          {/* Interactive Evidence-Based Approaches Component */}
          <Approaches />
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="services-section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Services Overview</span>
            <h2>Support for the Challenges You Are Facing</h2>
            <p className="lead">
              Compassionate psychotherapy tailored to your unique circumstances and goals.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((svc) => (
              <article key={svc.id} className="service-card">
                <div className="service-img-wrap">
                  <img src={svc.image} alt={svc.alt} width="400" height="220" loading="lazy" />
                </div>
                <div className="service-body">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <Link to="/services" className="service-link">
                    <span>Learn more</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-secondary">
              <span>View All Therapy Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Free Consultation CTA */}
      <section className="consultation-section" style={{ background: '#FFFFFF' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">Take the First Step</span>
          <h2 style={{ marginBottom: '20px' }}>Beginning Therapy Can Feel Like a Significant Step</h2>
          <p className="lead" style={{ marginBottom: '24px' }}>
            A consultation provides an opportunity to discuss what you are experiencing, ask questions, and determine whether psychotherapy may be appropriate for your needs.
          </p>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-primary)', marginBottom: '36px' }}>
            "You deserve a space where you can be heard without judgment."
          </div>

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
    </>
  );
}
