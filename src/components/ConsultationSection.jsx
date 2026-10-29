import React, { useState } from 'react';
import { siteConfig } from '../data/therapyData';

export default function ConsultationSection({ onSubmitSuccess }) {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      onSubmitSuccess("Thank you! Your inquiry has been sent to Esther. You will receive a response within 1 business day.");
    }, 900);
  };

  return (
    <section id="contact" className="consultation-section" aria-labelledby="consultation-heading">
      <div className="container">
        <div className="consultation-grid">
          
          {/* Left Info */}
          <div className="consultation-info">
            <span className="section-tag">Take the First Step</span>
            <h2 id="consultation-heading">Find Space to Heal &amp; Reconnect</h2>
            <p className="lead">
              Choosing therapy can feel difficult. A consultation provides an opportunity to discuss what you are experiencing, ask questions, and determine whether psychotherapy may be appropriate for your needs.
            </p>

            <div className="contact-quick">
              <div className="contact-quick-item">
                <strong>Phone</strong>
                <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>
              </div>

              <div className="contact-quick-item">
                <strong>Email &amp; Interac e-Transfer</strong>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>

              <div className="contact-quick-item">
                <strong>Consultations &amp; Office Hours</strong>
                <span>Book By Appointment • Inquiries returned within 1 business day</span>
              </div>
            </div>

            <div className="crisis-minimal">
              <strong>Emergency / Crisis Notice:</strong> Psychotherapy services are not an emergency service. If you are in immediate distress, call 911 or Crisis Service Canada 24/7 at <a href={`tel:${siteConfig.crisisPhoneTel}`}>{siteConfig.crisisPhone}</a>.
            </div>
          </div>

          {/* Right Clean Form */}
          <div className="form-card">
            <h3>Book a Consultation</h3>
            <p className="subtitle">Please complete the form below and Esther will be in touch shortly.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-fname">First Name</label>
                  <input
                    type="text"
                    id="c-fname"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="c-lname">Last Name</label>
                  <input
                    type="text"
                    id="c-lname"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-email">Email</label>
                  <input
                    type="email"
                    id="c-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="c-phone">Phone</label>
                  <input
                    type="tel"
                    id="c-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="740-873-1603"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-pref">Preferred Contact</label>
                  <select
                    id="c-pref"
                    name="contactPref"
                    value={formData.contactPref}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="c-support">Area of Support</label>
                  <select
                    id="c-support"
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
                <label htmlFor="c-time">Preferred Appointment Timing</label>
                <input
                  type="text"
                  id="c-time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Weekdays morning, Tuesday afternoons"
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-msg">Message (Optional)</label>
                <textarea
                  id="c-msg"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Briefly share what you would like support with..."
                ></textarea>
              </div>

              <p className="form-privacy">
                Please do not include highly sensitive medical details in this form. Confidentiality is maintained throughout your care.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>{isSubmitting ? 'Sending...' : 'Submit Consultation Inquiry'}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
