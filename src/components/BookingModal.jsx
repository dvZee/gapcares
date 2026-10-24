import React, { useState, useEffect } from 'react';
import ETransferUploadSection from './ETransferUploadSection';

export default function BookingModal({ isOpen, onClose, initialService, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    supportArea: initialService || 'Individual Therapy',
    contactPref: 'Email',
    message: ''
  });
  const [eTransferFile, setETransferFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, supportArea: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
      onClose();
      const fileNotice = eTransferFile ? ` (e-transfer screenshot "${eTransferFile.name}" attached)` : "";
      onSubmitSuccess(`Thank you! Your consultation request${fileNotice} has been received. Esther will respond within 1 business day.`);
    }, 1000);
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content-box">
        <div className="modal-header">
          <h3 id="modal-title">Book a Free Consultation</h3>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
            Connect with Esther M Broomfield, Registered Psychotherapist (Qualifying). Complete this brief form and Esther will reply within one business day.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="m-fname">First Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="m-fname"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="First name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="m-lname">Last Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="m-lname"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="m-email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="m-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="m-phone">Phone Number <span className="required">*</span></label>
                <input
                  type="tel"
                  id="m-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="740-873-1603"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="m-service">Service You Are Interested In</label>
              <select
                id="m-service"
                name="supportArea"
                value={formData.supportArea}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Individual Therapy">Individual Therapy</option>
                <option value="Couples Therapy">Couples &amp; Family Therapy</option>
                <option value="Anxiety & Stress">Anxiety &amp; Stress</option>
                <option value="Depression">Depression</option>
                <option value="Trauma & PTSD">Trauma &amp; PTSD</option>
                <option value="Relationship Challenges">Relationship Challenges</option>
                <option value="General Consultation">General Consultation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="m-contact-pref">Preferred Contact Method</label>
              <select
                id="m-contact-pref"
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
              <label htmlFor="m-message">Brief Note (Optional)</label>
              <textarea
                id="m-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="How can Esther best assist you?"
              ></textarea>
            </div>

            {/* Optional e-Transfer Upload Section */}
            <ETransferUploadSection
              onFileSelect={setETransferFile}
              compact={true}
              optional={true}
              title="e-Transfer Payment / Deposit (Optional)"
              description="If you have already sent a session payment or retainer, you can attach your confirmation screenshot below:"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
