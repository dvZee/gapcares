import React, { useState } from 'react';
import { siteConfig } from '../data/therapyData';
import DaisyFlowerIcon from '../components/DaisyFlowerIcon';
import ETransferUploadSection from '../components/ETransferUploadSection';

export default function ContactPage({ onOpenBooking, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactPref: 'Email',
    supportArea: 'Individual Therapy',
    preferredTime: '',
    message: ''
  });
  const [eTransferFile, setETransferFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone) {
      alert("Please enter your name, email, and phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSubmitSuccess) {
        onSubmitSuccess("Thank you! Your inquiry has been sent to Esther. You will receive a response within 1 business day.");
      }
    }, 800);
  };

  return (
    <div className="page-transition">
      {/* Page Header */}
      <section style={{ background: 'var(--color-bg-subtle)', padding: '64px 0 48px', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-tag">Reach Out in Confidence</span>
          <h1 style={{ marginBottom: '16px' }}>Contact &amp; Booking</h1>
          <p className="lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Book a complimentary 15-minute consultation or send an inquiry. You will receive a warm, thoughtful response within one business day.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="consultation-grid">
            
            {/* Left Column: Direct Details & Context */}
            <div className="consultation-info">
              <span className="section-tag">Take the First Step</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>
                We Are Here to Support You
              </h2>
              <p className="lead" style={{ marginBottom: '24px' }}>
                Whether you have questions about therapy, wish to discuss fees, or are ready to schedule your first session, reaching out is simple and pressure-free.
              </p>

              {/* Direct Details Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Direct</div>
                  <a href={`mailto:${siteConfig.email}`} style={{ fontSize: '1.15rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    {siteConfig.email}
                  </a>
                </div>

                <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone / Voicemail</div>
                  <a href={`tel:${siteConfig.phoneTel}`} style={{ fontSize: '1.15rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    {siteConfig.phone}
                  </a>
                </div>

                <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Practice Location &amp; Format</div>
                  <div style={{ fontSize: '1.02rem', color: 'var(--color-text-title)', fontWeight: 600, marginTop: '2px' }}>
                    Virtual &amp; Telephone Sessions
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    Available to clients across Ontario • Website: {siteConfig.domain}
                  </div>
                </div>

                <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Office Hours</div>
                  <div style={{ fontSize: '1.02rem', color: 'var(--color-text-title)', fontWeight: 600, marginTop: '2px' }}>
                    Book By Appointment
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    Inquiries returned within 1 business day
                  </div>
                </div>

                <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Interac e-Transfer</div>
                    <span style={{ fontSize: '0.74rem', background: 'var(--color-primary-light)', color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '999px', fontWeight: 600 }}>Auto-Deposit</span>
                  </div>
                  <div style={{ fontSize: '1.02rem', color: 'var(--color-primary)', fontWeight: 600, marginTop: '2px' }}>
                    {siteConfig.eTransferEmail || siteConfig.email}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    Session fees &amp; retainer payments
                  </div>
                </div>

                {/* CRPO Trust Card with Green Daisy Flower */}
                <div className="crpo-badge-card" style={{ padding: '24px 20px', textAlign: 'center' }}>
                  <div className="crpo-badge-flower" style={{ marginBottom: '12px' }}>
                    <DaisyFlowerIcon size={36} color="var(--color-primary)" />
                  </div>
                  <div className="crpo-badge-title" style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--color-text-title)' }}>
                    CRPO Reg.
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px' }}>
                    #{siteConfig.crpoNumber}
                  </div>
                  <div className="crpo-badge-subtitle" style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
                    College of Registered Psychotherapists
                  </div>
                </div>
              </div>

              {/* Quick Booking Button */}
              <div style={{ marginBottom: '32px' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => onOpenBooking()}
                >
                  <span>Open Quick Booking Modal</span>
                </button>
              </div>

              {/* Crisis Notice */}
              <div className="crisis-minimal" style={{ background: '#FFFDF5', border: '1px solid #F0E6D2', padding: '16px 20px', borderRadius: 'var(--radius-sm)', fontSize: '0.86rem', color: '#6A5837' }}>
                <strong>Crisis / Emergency Notice:</strong> Psychotherapy services are not an emergency service. <strong>Suicide Crisis Helpline:</strong> If you or someone you know is experiencing a suicidal crisis, you can call or text <a href="tel:988" style={{ textDecoration: 'underline !important', color: 'inherit', fontWeight: 600 }}>9-8-8</a>, the Suicide Crisis Helpline, 24/7.
              </div>
            </div>

            {/* Right Column: Contact & Consultation Form */}
            <div className="form-card" style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-soft)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
                    <DaisyFlowerIcon size={48} color="var(--color-primary)" />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Thank You for Reaching Out</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '24px' }}>
                    Your consultation inquiry has been received by Esther M. Broomfield. She will review your details and contact you via your preferred method ({formData.contactPref}) within 1 business day.
                  </p>
                  {eTransferFile && (
                    <div style={{ background: 'var(--color-primary-light)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', margin: '0 auto 20px', maxWidth: '420px', fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                      ✓ e-Transfer Screenshot Attached: {eTransferFile.name}
                    </div>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        contactPref: 'Email',
                        supportArea: 'Individual Therapy',
                        preferredTime: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Book a Consultation</h3>
                  <p className="subtitle" style={{ color: 'var(--color-text-muted)', marginBottom: '28px' }}>
                    Please fill out the form below and Esther will be in touch shortly.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="p-fname">First Name *</label>
                        <input
                          type="text"
                          id="p-fname"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="p-lname">Last Name</label>
                        <input
                          type="text"
                          id="p-lname"
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
                        <label htmlFor="p-email">Email Address *</label>
                        <input
                          type="email"
                          id="p-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="p-phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="p-phone"
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
                        <label htmlFor="p-pref">Preferred Contact Method</label>
                        <select
                          id="p-pref"
                          name="contactPref"
                          value={formData.contactPref}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="Email">Email</option>
                          <option value="Phone">Phone Call</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="p-support">Area of Support</label>
                        <select
                          id="p-support"
                          name="supportArea"
                          value={formData.supportArea}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="Individual Therapy">Individual Therapy</option>
                          <option value="Couples Therapy">Couples &amp; Family Therapy</option>
                          <option value="Anxiety & Stress">Anxiety &amp; Stress</option>
                          <option value="Depression">Depression &amp; Mood</option>
                          <option value="Trauma & PTSD">Trauma &amp; PTSD</option>
                          <option value="Relationship Challenges">Relationship Challenges</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="p-time">Preferred Appointment Timing</label>
                      <input
                        type="text"
                        id="p-time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. Weekday mornings, Tuesday afternoons, etc."
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="p-msg">Message (Optional)</label>
                      <textarea
                        id="p-msg"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        rows="4"
                        placeholder="Briefly describe what brings you to therapy or any questions you have..."
                      ></textarea>
                    </div>

                    {/* Optional e-Transfer Screenshot Attachment */}
                    <ETransferUploadSection
                      onFileSelect={setETransferFile}
                      compact={true}
                      optional={true}
                      title="e-Transfer Payment Screenshot (Optional)"
                      description="If you have already sent a session payment or retainer, you can attach your confirmation screenshot below:"
                    />

                    <p className="form-privacy" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                      Please do not include sensitive medical history in this form. Confidentiality is maintained throughout your care.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'Submit Consultation Request'}</span>
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Relaxing Reassurance Section with Image */}
      <section style={{ background: 'var(--color-surface)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="contact-reassurance-grid">
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
              <img
                src="/assets/images/therapy-consultation.png"
                alt="Therapist and client in a supportive, empathetic therapy session"
                style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
            <div>
              <span className="section-tag">Ontario-Wide Telehealth</span>
              <h2 style={{ marginBottom: '16px' }}>Accessible From the Comfort of Home</h2>
              <p style={{ color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '16px' }}>
                With secure virtual and phone appointments, you can access experienced, compassionate therapy wherever you are in Ontario—without the stress of commuting or waiting rooms.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                <span>🔒 Encrypted Video (PHIPA)</span>
                <span>📞 Telephone Sessions</span>
                <span>🏡 Relax in Your Own Space</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
