import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, servicesData } from '../data/therapyData';
import DaisyFlowerIcon from '../components/DaisyFlowerIcon';
import ETransferUploadSection from '../components/ETransferUploadSection';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Individual Therapy',
    sessionFormat: 'Virtual Video (PHIPA Compliant)',
    preferredTime: 'Weekday Morning',
    message: '',
    consent: false
  });
  const [eTransferFile, setETransferFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone) {
      alert("Please provide your first name, email address, and phone number.");
      return;
    }
    if (!formData.consent) {
      alert("Please confirm you understand psychotherapy services are confidential and not for crisis emergencies.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 900);
  };

  return (
    <div className="page-transition">
      {/* Header */}
      <section style={{ background: 'var(--color-bg-subtle)', padding: '64px 0 48px', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">Take the First Step</span>
          <h1 style={{ marginBottom: '16px' }}>Schedule a Consultation</h1>
          <p className="lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Book a complimentary 15-minute consultation with Esther M. Broomfield, Registered Psychotherapist (Qualifying). Discuss your goals and determine whether psychotherapy is the right fit.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ padding: '60px 0 90px' }}>
        <div className="container">
          <div className="booking-page-grid">
            
            {/* Left Form */}
            <div>
              <div className="booking-form-wrap">
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <DaisyFlowerIcon size={52} color="var(--color-primary)" />
                    </div>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-title)', marginBottom: '16px' }}>
                      Thank You, {formData.firstName}!
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: '1.8', maxWidth: '520px', margin: '0 auto 24px' }}>
                      Your consultation inquiry has been safely received. Esther M. Broomfield will review your details and contact you via {formData.email} or {formData.phone} within one business day.
                    </p>
                    {eTransferFile && (
                      <div style={{ background: 'var(--color-primary-light)', padding: '12px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', margin: '0 auto 28px', maxWidth: '440px', fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                        ✓ e-Transfer Screenshot Attached: {eTransferFile.name}
                      </div>
                    )}
                    <div style={{ display: 'inline-flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <Link to="/" className="btn btn-primary">
                        <span>Return to Home</span>
                      </Link>
                      <Link to="/about" className="btn btn-secondary">
                        <span>Read About Esther's Approach</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Consultation Request Form</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', marginBottom: '32px' }}>
                      Please provide your contact information and scheduling preferences.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="b-fname">First Name *</label>
                          <input
                            type="text"
                            id="b-fname"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Your first name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="b-lname">Last Name</label>
                          <input
                            type="text"
                            id="b-lname"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="b-email">Email Address *</label>
                          <input
                            type="email"
                            id="b-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="name@example.com"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="b-phone">Phone Number *</label>
                          <input
                            type="tel"
                            id="b-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="e.g. 740-873-1603"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="b-service">Primary Focus Area</label>
                          <select
                            id="b-service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="form-select"
                          >
                            {servicesData.map((svc) => (
                              <option key={svc.id} value={svc.title}>
                                {svc.title}
                              </option>
                            ))}
                            <option value="General Exploration">General Exploration / Life Transition</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="b-format">Preferred Session Format</label>
                          <select
                            id="b-format"
                            name="sessionFormat"
                            value={formData.sessionFormat}
                            onChange={handleChange}
                            className="form-select"
                          >
                            <option value="Virtual Video (PHIPA Compliant)">Virtual Video (Telehealth Across Ontario)</option>
                            <option value="Telephone Session">Telephone Session</option>
                            <option value="Open to Either Format">Open to Either Format</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="b-time">Preferred Appointment Window</label>
                        <select
                          id="b-time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="Weekday Morning">Weekday Morning (9:00 AM – 12:00 PM)</option>
                          <option value="Weekday Afternoon">Weekday Afternoon (12:00 PM – 4:00 PM)</option>
                          <option value="Weekday Late Afternoon">Weekday Late Afternoon (4:00 PM – 6:00 PM)</option>
                          <option value="Flexible / By Arrangement">Flexible / By Scheduled Arrangement</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="b-msg">How can Esther support you? (Optional brief note)</label>
                        <textarea
                          id="b-msg"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-textarea"
                          rows="3"
                          placeholder="Feel free to share what you are experiencing or any questions you have prior to our call."
                        ></textarea>
                      </div>

                      {/* Interac e-Transfer with Screenshot Upload Option */}
                      <ETransferUploadSection
                        onFileSelect={setETransferFile}
                        optional={true}
                        title="Payment & Deposit via Interac e-Transfer"
                        description="If you are confirming a booked appointment or pre-paying your session fee, send your Interac e-Transfer to the official practice email:"
                      />

                      <div style={{ margin: '20px 0 28px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <input
                          type="checkbox"
                          id="b-consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          style={{ marginTop: '4px', accentColor: 'var(--color-primary)', width: '18px', height: '18px' }}
                          required
                        />
                        <label htmlFor="b-consent" style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                          I understand that psychotherapy communications are strictly confidential under Ontario law, and that this consultation is not a crisis or emergency service. If in acute crisis, I will call 911 or call/text 9-8-8 (Suicide Crisis Helpline).
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ width: '100%' }}
                        disabled={isSubmitting}
                      >
                        <span>{isSubmitting ? 'Sending Request...' : 'Submit Consultation Request'}</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Right Information Sidebar */}
            <div>
              <aside style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                
                {/* Daisy Flower CRPO Card matching client feedback */}
                <div className="crpo-badge-card" style={{ padding: '32px 24px' }}>
                  <div className="crpo-badge-flower" style={{ marginBottom: '14px' }}>
                    <DaisyFlowerIcon size={42} color="var(--color-primary)" />
                  </div>
                  <div className="crpo-badge-title" style={{ fontSize: '1.25rem' }}>CRPO Reg.</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '6px' }}>
                    #{siteConfig.crpoNumber}
                  </div>
                  <div className="crpo-badge-subtitle" style={{ fontSize: '0.92rem' }}>
                    College of Registered Psychotherapists
                  </div>
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border-light)', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    {siteConfig.therapist}, {siteConfig.credentials}
                  </div>
                </div>

                {/* What to Expect in 15-Minute Consultation */}
                <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '32px 28px', boxShadow: 'var(--shadow-soft)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-text-title)' }}>
                    What to Expect in Your Consultation
                  </h3>
                  <ul className="styled-bullets">
                    <li>
                      <span><strong>Unhurried Connection:</strong> A safe, warm conversation with Esther to share what brings you to therapy.</span>
                    </li>
                    <li>
                      <span><strong>Ask Any Questions:</strong> Clarify modalities, fees, scheduling, or therapeutic fit.</span>
                    </li>
                    <li>
                      <span><strong>Zero Obligation:</strong> No pressure to book further sessions unless you feel genuinely comfortable.</span>
                    </li>
                    <li>
                      <span><strong>Next Steps Guidance:</strong> Clear directions on booking, intake forms, and preparation.</span>
                    </li>
                  </ul>
                </div>

                {/* Office Hours & Response */}
                <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px', boxShadow: 'var(--shadow-soft)' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    Consultation &amp; Practice Hours
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '8px' }}>
                    Book By Appointment
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    All sessions and consultations are arranged by scheduled appointment. Inquiries are answered within one business day.
                  </div>
                  <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--color-border-light)', fontSize: '0.86rem' }}>
                    Direct line: <a href={`tel:${siteConfig.phoneTel}`} style={{ color: 'var(--color-text-title)', fontWeight: 600 }}>{siteConfig.phone}</a>
                  </div>
                  <div style={{ marginTop: '8px', fontSize: '0.86rem', color: 'var(--color-text-title)' }}>
                    e-Transfer: <strong style={{ color: 'var(--color-primary)' }}>{siteConfig.eTransferEmail || siteConfig.email}</strong>
                  </div>
                </div>

              </aside>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
