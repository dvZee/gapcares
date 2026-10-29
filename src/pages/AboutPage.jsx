import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, trustBadges } from '../data/therapyData';
import DaisyFlowerIcon from '../components/DaisyFlowerIcon';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="about-header-section" style={{ background: 'var(--color-bg-subtle)', padding: '64px 0 48px', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">About George &amp; Assenoth Psychotherapy</span>
          <h1 style={{ marginBottom: '16px' }}>Meet Esther Broomfield</h1>
          <p className="lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Registered Psychotherapist (Qualifying) • Tyndale M.Div Clinical Counselling • CRPO Reg. #{siteConfig.crpoNumber}
          </p>
        </div>
      </section>

      {/* 1. Therapist Profile */}
      <section className="about-section" aria-labelledby="profile-heading" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="about-grid">
            {/* Portrait Card */}
            <div className="about-portrait-wrap" style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 16px',
                  boxShadow: 'var(--shadow-soft)',
                  border: '4px solid var(--color-surface)'
                }}
              >
                <img
                  src="/assets/images/esther-broomfield.jpg"
                  alt="Esther Broomfield, Registered Psychotherapist (Qualifying)"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Tagline underneath circle picture */}
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  color: 'var(--color-primary)',
                  marginBottom: '28px',
                  textAlign: 'center'
                }}
              >
                Providing a Space to Heal &amp; Grow
              </div>

              {/* Trust badges below portrait */}
              <div className="about-trust-mini-grid" style={{ textAlign: 'left' }}>
                {trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px',
                      fontSize: '0.85rem'
                    }}
                  >
                    <div style={{ height: '32px', marginBottom: '6px', display: 'flex', alignItems: 'center' }}>
                      {badge.iconType === 'daisy' || badge.title.includes('CRPO') ? (
                        <DaisyFlowerIcon size={28} color="var(--color-primary)" />
                      ) : (
                        <span style={{ fontSize: '1.25rem' }}>{badge.icon}</span>
                      )}
                    </div>
                    <strong style={{ display: 'block', color: 'var(--color-text-title)' }}>{badge.title}</strong>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem' }}>{badge.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Bio */}
            <div className="about-content">
              <span className="section-tag">Therapist Profile</span>
              <h2 id="profile-heading" style={{ marginBottom: '24px' }}>
                A Therapist Who Believes in Your Inherent Capacity for Growth
              </h2>

              <div className="about-bio" style={{ display: 'flex', flexDirection: 'column', gap: '16px', lineHeight: '1.8', color: 'var(--color-text-body)' }}>
                <p>
                  Esther’s lived experience, years of community service, and clinical preparation have fostered a grounded presence that honors the intersections of your personal history, individual needs, cultural identity, and faith. She believes therapy is not about fitting people into diagnostic boxes. It is about restoring hope, building resilience, developing coping skills, and the confidence needed to thrive.
                </p>
                <p>
                  She holds a <strong>Master of Divinity in Clinical Counselling</strong> from Tyndale University. With over 25 years of compassionate service across diverse community settings, Esther has supported individuals, youth, and families. She brings deep psychosocial insight and warmth to every therapeutic encounter.
                </p>
              </div>

              <div className="about-quote" style={{ marginTop: '28px', padding: '24px', background: 'var(--color-primary-soft)', borderLeft: '4px solid var(--color-primary)', borderRadius: 'var(--radius-sm)' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--color-text-title)', margin: 0 }}>
                  "Your worldview and faith perspective may be an important part of your identity. Where appropriate and with your consent, therapy can make space for these perspectives as part of your healing journey."
                </p>
              </div>

              {/* Added underneath the quote tab */}
              <p style={{ marginTop: '24px', fontSize: '1.02rem', lineHeight: '1.8', color: 'var(--color-text-body)' }}>
                Esther Broomfield is a Registered Psychotherapist (Qualifying) with the <strong>College of Registered Psychotherapists of Ontario (CRPO)</strong>, license #{siteConfig.crpoNumber}.
              </p>

              <div style={{ marginTop: '32px' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenBooking()}
                >
                  <span>Book a Consultation with Esther</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Qualifications & NZEFT/ICEEFT Training */}
      <section className="philosophy-section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Clinical Standards</span>
            <h2>Qualifications &amp; Training</h2>
            <p className="lead">
              Grounded in academic rigor and professional standards.
            </p>
          </div>

          <div className="about-certs-grid">
            
            <div style={{ background: 'var(--color-bg)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center' }}>
                <DaisyFlowerIcon size={34} color="var(--color-primary)" />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>CRPO Registration &amp; Ethics</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: '1.7' }}>
                Regulated by the College of Registered Psychotherapists of Ontario (Registration #20088). Esther adheres strictly to the Professional Practice Standards, ongoing clinical supervision, and rigorous code of ethics prescribed by Ontario law.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '12px' }}>🕊️</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>ICEEFT &amp; NZCEFT Externship</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: '1.7' }}>
                Esther has completed specialized clinical externship training in <strong>Emotionally Focused Therapy (EFT)</strong> through ICEEFT and the New Zealand Centre for Emotionally Focused Therapy (NZCEFT). EFT is recognized internationally as an evidence-based model for relationship repair and emotional restructuring.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '12px' }}>🎓</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Academic Foundations</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: '1.7' }}>
                Holds a Master of Divinity in Clinical Counselling from <strong>Tyndale University</strong> and a Bachelor of Arts in Social Science from <strong>York University</strong>.
              </p>
            </div>

          </div>

          {/* Visual Reassurance with client image */}
          <div className="about-clinical-card">
            <div className="about-clinical-text">
              <span className="section-tag">Clinical Practice</span>
              <h3 style={{ marginBottom: '16px' }}>Clinical Supervision &amp; Professional Standards</h3>
              <p style={{ color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '16px' }}>
                Esther works in ongoing collaboration with registered clinical supervisors to support ethical, thoughtful, and evidence-informed care. This collaborative approach provides additional clinical oversight, promotes careful treatment planning, and prioritizes client safety and well-being.
              </p>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                Official receipts are provided promptly after each session and may be eligible for reimbursement under many Canadian extended health benefit plans, subject to individual policy coverage.
              </div>
            </div>
            <div className="about-clinical-img">
              <img
                src="/assets/images/counselling-session-notes.jpg"
                alt="Therapist reviewing notes during attentive clinical consultation"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Approach to Therapy */}
      <section className="philosophy-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Therapeutic Philosophy</span>
            <h2>How Esther Approaches Your Care</h2>
            <p className="lead">
              A collaborative partnership where you remain in the driver's seat of your healing journey.
            </p>
          </div>

          <div className="about-philosophy-grid">
            <div>
              <img
                src="/assets/images/heartfelt-healing.png"
                alt="Client feeling heard, safe, and emotionally grounded in therapy"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)', display: 'block' }}
                loading="lazy"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-primary)' }}>1. Safe &amp; Empathetic Presence</h3>
                <p style={{ color: 'var(--color-text-body)', lineHeight: '1.7' }}>
                  There is no rush to fix or analyze. First and foremost, you will find a gentle, compassionate space where you can share vulnerable thoughts without fear of judgment or rejection.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-primary)' }}>2. Trauma-Informed Nervous System Care</h3>
                <p style={{ color: 'var(--color-text-body)', lineHeight: '1.7' }}>
                  We work with sensitivity to your nervous system. Esther ensures sessions proceed with consent, predictability, and practical tools to self-regulate when memories or emotions feel intense.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-primary)' }}>3. Culturally Sensitive &amp; Anti-Oppressive</h3>
                <p style={{ color: 'var(--color-text-body)', lineHeight: '1.7' }}>
                  Your lived realities—including race, cultural heritage, socioeconomic factors, and community—are respected as fundamental contexts of your human experience.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-primary)' }}>4. Welcoming Faith &amp; Worldview</h3>
                <p style={{ color: 'var(--color-text-body)', lineHeight: '1.7' }}>
                  If spirituality or personal faith is an anchor in your life, Esther can integrate these values seamlessly into your therapy. If not, sessions remain purely psychological and person-centered.
                </p>
              </div>
            </div>
          </div>

          {/* Gentle closing card with flower image */}
          <div style={{ marginTop: '64px', textAlign: 'center', padding: '48px 32px', background: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
            <img
              src="/assets/images/hope-healing-flower.png"
              alt="Hands holding daisy against open sky representing hope and renewal"
              style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px', display: 'block', boxShadow: 'var(--shadow-soft)' }}
              loading="lazy"
            />
            <h3 style={{ marginBottom: '12px' }}>"Change is Possible, and You Do Not Have to Walk Alone"</h3>
            <p className="lead" style={{ maxWidth: '640px', margin: '0 auto 28px' }}>
              Whenever you feel ready to take the next step, Esther invites you to schedule a complimentary 15-minute consultation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenBooking()}
              >
                <span>Book a Consultation with Esther</span>
              </button>
              <Link to="/contact" className="btn btn-secondary">
                <span>Send a Message</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
