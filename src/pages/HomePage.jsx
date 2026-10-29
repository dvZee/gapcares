import React from 'react';
import { Link } from 'react-router-dom';
import Approaches from '../components/Approaches';
import { servicesData, siteConfig } from '../data/therapyData';
import DaisyFlowerIcon from '../components/DaisyFlowerIcon';

export default function HomePage({ onOpenBooking }) {
  return (
    <div className="page-transition">
      {/* 1. Hero / Welcome Section */}
      <section className="hero-section" aria-labelledby="hero-title" style={{ padding: '56px 0 64px', background: '#FFFFFF' }}>
        <div className="container">
          <div className="home-intro-grid" style={{ alignItems: 'center', gap: '56px' }}>
            {/* Left Image: Brown-haired girl reflecting peacefully */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
              <img
                src="/assets/images/mindfulness-reflection.png"
                alt="Mindfulness, self-compassion, and inner peace in gentle sunlight"
                style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'cover', display: 'block' }}
                loading="eager"
              />
            </div>

            {/* Right Content */}
            <div className="hero-content" style={{ maxWidth: '100%' }}>
              {/* Providing a Space to Heal Grow (14 size) */}
              <span
                className="section-tag"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'none',
                  color: 'var(--color-primary)',
                  marginBottom: '10px',
                  display: 'inline-block'
                }}
              >
                Providing a Space to Heal Grow
              </span>

              {/* Welcome to George & Assenoth Psychotherapy (Large heading as in reference) */}
              <h1
                id="hero-title"
                style={{
                  fontSize: 'clamp(2.1rem, 3.2vw, 2.75rem)',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: '1.22',
                  marginTop: 0,
                  marginBottom: '22px'
                }}
              >
                Welcome to George &amp; Assenoth Psychotherapy
              </h1>

              <div className="hero-narrative">
                <p style={{ fontSize: '1.08rem', lineHeight: '1.8', color: 'var(--color-text-body)', marginBottom: '16px' }}>
                  George &amp; Assenoth Psychotherapy offers a safe, non-judgmental space to pause, reflect, explore difficult emotions, and gain a fresh perspective.
                </p>
                <p style={{ fontSize: '1.04rem', lineHeight: '1.8', color: 'var(--color-text-body)', marginBottom: '16px' }}>
                  It’s an opportunity to reconnect with yourself, rediscover your strengths, and move forward with greater clarity and confidence. <strong>Esther M. Broomfield</strong>, Registered Psychotherapist (Qualifying), provides compassionate, trauma-informed psychotherapy that recognizes the uniqueness of every individual, relationship, and life experience.
                </p>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-primary)', marginBottom: '24px' }}>
                  "Your story matters. Your experiences matter. And change is possible."
                </div>
              </div>

              {/* Action buttons (Third image) */}
              <div className="hero-actions" style={{ marginTop: '32px', marginBottom: '24px' }}>
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

              {/* Trust Badges (Third image) */}
              <div className="hero-trust-badges">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.98rem' }}>✓</span>
                  <span>Virtual &amp; Phone Across Ontario</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <DaisyFlowerIcon size={20} color="var(--color-primary)" />
                  <strong style={{ color: 'var(--color-text-title)', fontWeight: 700 }}>CRPO Reg. #{siteConfig.crpoNumber}</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.98rem' }}>✓</span>
                  <span>Book By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Overview Section */}
      <section className="services-section" style={{ background: 'var(--color-bg-subtle)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Services Overview</span>
            <h2>Services</h2>
            <p className="lead">
              A compassionate, non-judgmental space tailored to your unique challenges and personal goals.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((svc) => (
              <article key={svc.id} className="service-card">
                <div className="service-img-wrap">
                  <img src={svc.image} alt={svc.alt} width="400" height="240" loading="lazy" />
                  <span className="service-badge">{svc.badge}</span>
                </div>
                <div className="service-body">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to={`/services/${svc.slug}`} className="service-link">
                      <span>Learn more</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      onClick={() => onOpenBooking(svc.title)}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-primary btn-lg">
              <span>View All Therapy Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Therapy Approach Section */}
      <section className="philosophy-section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          {/* 2-Column Intro: Left Image (Therapy Consultation) & Right Content */}
          <div className="home-intro-grid" style={{ alignItems: 'center', gap: '52px', marginBottom: '48px' }}>
            {/* Left Image: Woman with hand on chin in supportive consultation */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
              <img
                src="/assets/images/therapy-consultation.png"
                alt="Supportive psychotherapy consultation session"
                style={{ width: '100%', height: 'auto', maxHeight: '460px', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>

            {/* Right Content */}
            <div>
              <span className="section-tag" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Therapy Approach
              </span>
              <h2 style={{ marginBottom: '18px', textAlign: 'left' }}>
                A Compassionate &amp; Holistic Approach
              </h2>
              <p className="lead" style={{ marginBottom: '16px', textAlign: 'left' }}>
                Therapy is more than addressing symptoms. It can be an opportunity to rediscover your strengths, develop greater self-awareness, build healthier relationships, and reconnect with hope.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '22px', textAlign: 'left' }}>
                Esther's approach is empathetic, trauma-informed, and grounded in an anti-oppressive framework. Therapy may incorporate evidence-based approaches while respecting your individual worldview, values, and faith perspective.
              </p>
              <div style={{ display: 'inline-block', padding: '8px 20px', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-pill)', fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.95rem' }}>
                Therapy approaches will be tailored to your individual needs and goals.
              </div>
            </div>
          </div>

          {/* Interactive Evidence-Based Approaches Component */}
          <Approaches />

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/about" className="btn btn-secondary">
              <span>Read More About Esther's Approach &amp; Qualifications →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Free Consultation CTA Section */}
      <section className="consultation-section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">Take the First Step</span>
          <h2 style={{ marginBottom: '20px' }}>Take the First Step</h2>
          <p className="lead" style={{ marginBottom: '24px' }}>
            Choosing therapy can feel difficult. A consultation provides an opportunity to discuss what you are experiencing, ask questions, and determine whether psychotherapy may be appropriate for your needs.
          </p>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--color-primary)', marginBottom: '36px' }}>
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
              <span>Contact Us Directly</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
