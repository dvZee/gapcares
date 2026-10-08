import React from 'react';
import { Link } from 'react-router-dom';
import Approaches from '../components/Approaches';
import { servicesData, siteConfig } from '../data/therapyData';

export default function HomePage({ onOpenBooking }) {
  return (
    <div className="page-transition">
      {/* 1. Hero Section */}
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
                  At George &amp; Assenoth Psychotherapy, therapy is a safe, compassionate space where you can feel truly heard, respected, and supported. Whether you are navigating anxiety, relationship challenges, difficult life experiences, or simply seeking deeper inner peace, you do not have to carry it alone.
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

              <div style={{ marginTop: '28px', display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--color-primary)' }}>✓</span> Virtual &amp; Phone Across Ontario
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--color-primary)' }}>✓</span> CRPO Reg. #{siteConfig.crpoNumber}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: 'var(--color-primary)' }}>✓</span> 25+ Years Experience
                </span>
              </div>
            </div>

            <div className="hero-media-wrap">
              <div className="hero-media-card">
                <img
                  src="/assets/images/therapy-consultation.png"
                  alt="Therapist and client in a warm, welcoming psychotherapy consultation"
                  width="600"
                  height="520"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="philosophy-section" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
              <img
                src="/assets/images/mindfulness-reflection.png"
                alt="Mindfulness, self-compassion, and inner peace in gentle sunlight"
                style={{ width: '100%', height: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
            
            <div>
              <span className="section-tag">Introduction</span>
              <h2 style={{ marginBottom: '20px' }}>Welcome to George &amp; Assenoth Psychotherapy</h2>
              <p className="lead" style={{ marginBottom: '18px' }}>
                Life can bring moments of overwhelming emotion, relationship rupture, or quiet stagnation. Therapy offers an unhurried, non-judgmental space to pause and regain your footing.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '20px' }}>
                Led by <strong>Esther Broomfield</strong>, Registered Psychotherapist (Qualifying) with over 25 years of community and psychosocial care, our practice recognizes the sacred uniqueness of every individual's story, culture, and personal values.
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-primary)', marginBottom: '24px' }}>
                "We work collaboratively at your pace, honoring your innate strengths and emotional safety."
              </div>
              <Link to="/about" className="btn btn-secondary">
                <span>Meet Esther &amp; Her Background →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Therapy Approach Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Therapy Approach</span>
            <h2>A Compassionate &amp; Holistic Approach</h2>
            <p className="lead">
              Therapy is more than addressing symptoms. It is an opportunity to rediscover your strengths, build emotional safety, repair relationships, and reconnect with hope.
            </p>
            <p style={{ marginTop: '14px', color: 'var(--color-text-muted)' }}>
              Esther integrates evidence-based modalities—including Emotionally Focused Therapy (EFT/EFIT), Dialectical Behavior Therapy (DBT), Cognitive Behavioral Therapy (CBT), and Internal Family Systems (IFS)—all grounded in trauma-informed and anti-oppressive care.
            </p>
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

      {/* 4. Services Overview Section */}
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
                  <img src={svc.image} alt={svc.alt} width="400" height="240" loading="lazy" />
                  <span className="service-badge">{svc.badge}</span>
                </div>
                <div className="service-body">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/services" className="service-link">
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
              <span>View In-Depth Therapy Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Free Consultation CTA Section */}
      <section className="consultation-section" style={{ background: '#FFFFFF', borderTop: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">Free Consultation</span>
          <h2 style={{ marginBottom: '20px' }}>Beginning Therapy Can Feel Like a Significant Step</h2>
          <p className="lead" style={{ marginBottom: '24px' }}>
            A complimentary 15-minute consultation provides an opportunity to discuss what you are experiencing, ask questions, and determine whether psychotherapy with Esther is the right fit for you.
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
              <span>Book a Free Consultation</span>
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
