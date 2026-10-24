import React from 'react';
import { Link } from 'react-router-dom';
import Approaches from '../components/Approaches';
import { servicesData, siteConfig } from '../data/therapyData';
import DaisyFlowerIcon from '../components/DaisyFlowerIcon';

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
                Providing Space to <em>Heal</em> &amp; <em>Grow</em>
              </h1>

              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '-8px', marginBottom: '18px' }}>
                Welcome to George &amp; Assenoth Psychotherapy
              </div>

              <div className="hero-narrative">
                <p>
                  At George &amp; Assenoth Psychotherapy, therapy offers a safe, non-judgmental space to pause, reflect, explore difficult emotions, and gain a fresh perspective. It’s an opportunity to reconnect with yourself, rediscover your strengths, and move forward with greater clarity and confidence.
                </p>
                <p style={{ marginTop: '14px' }}>
                  <strong>Esther M Broomfield</strong>, Registered Psychotherapist (Qualifying), provides compassionate, trauma-informed psychotherapy that recognizes the uniqueness of every individual, relationship, and life experience.
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
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--color-primary)' }}>✓</span> Virtual &amp; Phone Across Ontario
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <DaisyFlowerIcon size={18} color="var(--color-primary)" />
                  <strong style={{ color: 'var(--color-text-title)' }}>CRPO Reg. #{siteConfig.crpoNumber}</strong>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--color-primary)' }}>✓</span> Book By Appointment
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
          <div className="home-intro-grid">
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
                At George &amp; Assenoth Psychotherapy, therapy offers a safe, non-judgmental space to pause, reflect, explore difficult emotions, and gain a fresh perspective.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '18px' }}>
                It’s an opportunity to reconnect with yourself, rediscover your strengths, and move forward with greater clarity and confidence. Esther M Broomfield, Registered Psychotherapist (Qualifying), provides compassionate, trauma-informed psychotherapy that recognizes the uniqueness of every individual, relationship, and life experience.
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-primary)', marginBottom: '24px' }}>
                "Your story matters. Your experiences matter. And change is possible."
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
            <p className="lead" style={{ marginBottom: '16px' }}>
              Therapy is more than addressing symptoms. It can be an opportunity to rediscover your strengths, develop greater self-awareness, build healthier relationships, and reconnect with hope.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', maxWidth: '820px', margin: '0 auto 24px', lineHeight: '1.8' }}>
              Esther's approach is empathetic, trauma-informed, and grounded in an anti-oppressive framework. Therapy may incorporate evidence-based approaches while respecting your individual worldview, values, and faith perspective.
            </p>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-pill)', fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.95rem' }}>
              Therapy Approaches • Depending on your needs and goals, therapy may incorporate:
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

      {/* 4. Services Overview Section */}
      <section className="services-section" style={{ background: 'var(--color-bg-subtle)' }}>
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

      {/* 5. Free Consultation CTA Section */}
      <section className="consultation-section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">Take the First Step</span>
          <h2 style={{ marginBottom: '20px' }}>Take the First Step</h2>
          <p className="lead" style={{ marginBottom: '24px' }}>
            Beginning therapy can feel like a significant step. A consultation provides an opportunity to discuss what you are experiencing, ask questions, and determine whether psychotherapy may be appropriate for your needs.
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
