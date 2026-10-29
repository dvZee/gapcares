import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/therapyData';
import DaisyFlowerIcon from '../components/DaisyFlowerIcon';

export default function TermsPage() {
  return (
    <div className="page-transition">
      {/* Header */}
      <section style={{ background: 'var(--color-bg-subtle)', padding: '64px 0 48px', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <DaisyFlowerIcon size={24} color="var(--color-primary)" />
            <span className="section-tag" style={{ margin: 0 }}>Practice Guidelines</span>
          </div>
          <h1 style={{ marginBottom: '16px' }}>Practice Policies &amp; Terms</h1>
          <p className="lead" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Clear clinical guidelines, fee structures, cancellation protocols, and mutual commitments for clients of George &amp; Assenoth Psychotherapy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container container-narrow">
        <article className="policy-doc-wrap">

          <div style={{ padding: '16px 20px', background: 'var(--color-primary-soft)', borderLeft: '4px solid var(--color-primary)', borderRadius: 'var(--radius-sm)', marginBottom: '32px' }}>
            <strong style={{ display: 'block', color: 'var(--color-text-title)', marginBottom: '4px' }}>
              Professional Regulatory Status
            </strong>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-body)' }}>
              Esther M. Broomfield is a Registered Psychotherapist (Qualifying) with the College of Registered Psychotherapists of Ontario (CRPO Reg. #{siteConfig.crpoNumber}). In accordance with CRPO regulations, Esther operates under active clinical supervision and adheres strictly to the Professional Practice Standards for Registered Psychotherapists.
            </p>
          </div>

          <h2>1. Service Delivery &amp; Ontario Eligibility</h2>
          <p>
            Psychotherapy services are provided exclusively via secure video telehealth and telephone sessions to residents physically located within the province of Ontario at the time of each appointment.
          </p>

          <h2>2. Appointments &amp; Office Hours</h2>
          <p>
            All consultations and therapy appointments are scheduled on an individual basis. Office hours are:
          </p>
          <div style={{ padding: '16px 20px', background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', marginBottom: '20px' }}>
            <strong style={{ color: 'var(--color-primary)', fontSize: '1.05rem', display: 'block' }}>
              Book By Appointment
            </strong>
            <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
              Inquiries and booking requests are answered promptly within one business day.
            </span>
          </div>

          <h2>3. Session Fees &amp; Payment Methods</h2>
          <p>
            Fees are transparent and agreed upon prior to beginning therapy:
          </p>
          <ul className="styled-bullets" style={{ marginBottom: '20px' }}>
            <li><strong>Standard 50-Minute Session:</strong> $160 (Individual) / $180 (Couples/Family)</li>
            <li><strong>Extended 75-Minute Session:</strong> $240 (Individual) / $260 (Couples/Family)</li>
            <li><strong>Intensive Double Session:</strong> $320 (Individual) / $360 (Couples/Family)</li>
            <li>Psychotherapy is an HST/GST-exempt healthcare service in Canada.</li>
          </ul>
          <p>
            Payment is due within <strong>24 hours</strong> of the completed session via Interac e-Transfer or major credit card. Promptly upon receipt of payment, an official psychotherapy receipt containing Esther's CRPO registration details will be provided for extended health benefits or income tax medical expense claims.
          </p>

          <h2>4. 48-Hour Cancellation &amp; Rescheduling Policy</h2>
          <p>
            Your session time is reserved exclusively for you. Please provide at least <strong>48 hours' notice</strong> if you need to cancel or reschedule an appointment. Without 48 hours' notice, the full session fee may be charged to compensate for reserved clinical time. Extenuating medical or family emergencies are evaluated compassionately on a case-by-case basis.
          </p>

          <h2>5. Punctuality and Late Arrivals</h2>
          <p>
            Sessions begin and end promptly at scheduled times. If you arrive late to a virtual or phone session, the session will still conclude at the scheduled end time in order to respect subsequent clients.
          </p>

          <h2>6. Professional Boundaries &amp; Social Media</h2>
          <p>
            In accordance with CRPO boundary guidelines, dual relationships (such as personal friendships or business associations with clients) are strictly avoided. Personal social media connections are not accepted to protect your privacy and ensure professional objectivity.
          </p>

          <h2>7. Emergency &amp; Crisis Disclaimer</h2>
          <div style={{ padding: '16px 20px', background: '#FFF8F6', border: '1px solid #F5C6CB', borderRadius: 'var(--radius-sm)', margin: '20px 0 28px' }}>
            <strong style={{ color: '#842029', display: 'block', marginBottom: '6px' }}>
              Not an Emergency or Crisis Service
            </strong>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#58151c', lineHeight: '1.65' }}>
              George &amp; Assenoth Psychotherapy does not offer 24/7 emergency or crisis intervention services. If you or someone you know is in acute danger, experiencing suicidal thoughts, or in mental health crisis, immediately call <strong>911</strong>, visit your nearest emergency room, or call/text the <strong>Suicide Crisis Helpline 24/7 at 9-8-8</strong>.
            </p>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '28px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <Link to="/fees-faq" className="btn btn-secondary">
              <span>← View Session Fees &amp; FAQs</span>
            </Link>
            <Link to="/book" className="btn btn-primary">
              <span>Book an Appointment</span>
            </Link>
          </div>

        </article>
      </section>
    </div>
  );
}
