import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/therapyData';
import DaisyFlowerIcon from '../components/DaisyFlowerIcon';

export default function PrivacyPage() {
  return (
    <div className="page-transition">
      {/* Header */}
      <section style={{ background: 'var(--color-bg-subtle)', padding: '64px 0 48px', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <DaisyFlowerIcon size={24} color="var(--color-primary)" />
            <span className="section-tag" style={{ margin: 0 }}>CRPO Regulatory Compliance</span>
          </div>
          <h1 style={{ marginBottom: '16px' }}>Privacy &amp; Confidentiality Policy</h1>
          <p className="lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
            How George &amp; Assenoth Psychotherapy protects your personal health information under the Ontario Personal Health Information Protection Act (PHIPA, 2004).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container container-narrow">
        <article className="policy-doc-wrap">
          
          <div style={{ padding: '16px 20px', background: 'var(--color-primary-soft)', borderLeft: '4px solid var(--color-primary)', borderRadius: 'var(--radius-sm)', marginBottom: '32px' }}>
            <strong style={{ display: 'block', color: 'var(--color-text-title)', marginBottom: '4px' }}>
              Practice Commitment to Confidentiality
            </strong>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-body)' }}>
              George &amp; Assenoth Psychotherapy, operating through Esther Broomfield, Registered Psychotherapist (Qualifying) CRPO #20088, is dedicated to upholding the strictest ethical and legal standards regarding client privacy and the safekeeping of clinical records.
            </p>
          </div>

          <h2>1. Collection of Personal Health Information</h2>
          <p>
            We collect personal health information directly from you during consultations, intake assessments, and ongoing psychotherapy sessions. This information may include:
          </p>
          <ul className="styled-bullets" style={{ marginBottom: '24px' }}>
            <li>Your contact details (name, phone number, email address, emergency contact).</li>
            <li>Pertinent psychological, emotional, medical, and developmental history.</li>
            <li>Session progress notes, treatment plans, and clinical observations.</li>
            <li>Billing records, fee receipts, and payment transactions.</li>
          </ul>

          <h2>2. How Your Information Is Used</h2>
          <p>
            Your personal health information is collected and maintained solely to:
          </p>
          <ul className="styled-bullets" style={{ marginBottom: '24px' }}>
            <li>Provide you with safe, competent, and ethical psychotherapy care.</li>
            <li>Collaborate with you in developing personalized therapeutic goals and interventions.</li>
            <li>Maintain compliant clinical documentation as mandated by the College of Registered Psychotherapists of Ontario (CRPO).</li>
            <li>Issue official receipts suitable for insurance and tax reimbursement.</li>
          </ul>

          <h2>3. Legal and Ethical Limits to Confidentiality</h2>
          <p>
            All communications between client and therapist are strictly private and confidential. In accordance with Ontario law and the CRPO Code of Ethics, confidential information will never be shared without your explicit written consent, except in specific statutory circumstances:
          </p>
          <ul className="styled-bullets" style={{ marginBottom: '24px' }}>
            <li>
              <strong>Imminent Harm:</strong> If there is clear and immediate risk of serious bodily harm or suicide to yourself or another identified person.
            </li>
            <li>
              <strong>Child Abuse or Neglect:</strong> If there is reason to believe that a child under the age of 16 is experiencing physical abuse, sexual abuse, emotional harm, or neglect.
            </li>
            <li>
              <strong>Elder Abuse in Long-Term Care:</strong> If there is suspected abuse or neglect of a vulnerable resident in a long-term care or retirement facility.
            </li>
            <li>
              <strong>Sexual Abuse by a Regulated Health Professional:</strong> If you disclose that another regulated healthcare practitioner has sexually abused a patient or client.
            </li>
            <li>
              <strong>Court Subpoena or Warrant:</strong> If clinical records are ordered released by a judge or court of law.
            </li>
          </ul>

          <h2>4. Virtual Therapy &amp; Telehealth Security</h2>
          <p>
            Telehealth and telephone psychotherapy sessions are conducted using encrypted, secure, PHIPA-compliant platforms. Clients are encouraged to ensure they participate from a private, soundproof location where they cannot be overheard.
          </p>

          <h2>5. Record Retention &amp; Safekeeping</h2>
          <p>
            In compliance with CRPO regulations, clinical records are retained securely for a minimum of <strong>10 years</strong> following the last clinical contact (or 10 years following a minor client's 18th birthday). Records are stored using multi-factor authentication, enterprise encryption, and physical safeguards.
          </p>

          <h2>6. Your Rights and Access to Records</h2>
          <p>
            Under PHIPA, you have the right to request access to your personal health record and to request corrections if you believe an error exists. Requests must be submitted in writing to Esther Broomfield.
          </p>

          <h2>7. Questions or Privacy Inquiries</h2>
          <p>
            If you have questions, feedback, or concerns regarding your privacy rights, please contact Esther Broomfield directly at <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{siteConfig.email}</a> or call <a href={`tel:${siteConfig.phoneTel}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{siteConfig.phone}</a>. You may also contact the Information and Privacy Commissioner of Ontario (IPC) at 1-800-387-0073.
          </p>

          <div style={{ marginTop: '40px', paddingTop: '28px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <Link to="/contact" className="btn btn-secondary">
              <span>← Back to Contact Page</span>
            </Link>
            <Link to="/book" className="btn btn-primary">
              <span>Schedule a Consultation</span>
            </Link>
          </div>

        </article>
      </section>
    </div>
  );
}
