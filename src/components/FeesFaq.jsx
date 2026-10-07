import React, { useState } from 'react';
import { feeOptions, faqsList } from '../data/therapyData';

export default function FeesFaq({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <section id="fees-faq" className="fees-section" aria-labelledby="fees-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Investment &amp; Details</span>
          <h2 id="fees-heading">Session Fees &amp; FAQs</h2>
          <p className="lead">
            Transparent pricing for your care. Receipts are provided after each session for extended health benefits reimbursement.
          </p>
        </div>

        {/* Minimal Fee Cards */}
        <div className="fees-grid">
          {feeOptions.map((fee, idx) => (
            <div key={idx} className={`fee-card ${fee.popular ? 'featured' : ''}`}>
              <span className="fee-type">{fee.duration}</span>
              <h3>{fee.title.split(' ')[0]} Session</h3>

              <div className="fee-rates">
                <div className="rate-row">
                  <span className="rate-label">Individual:</span>
                  <span className="rate-price">{fee.individualPrice}</span>
                </div>
                <div className="rate-row">
                  <span className="rate-label">Couples / Family:</span>
                  <span className="rate-price">{fee.couplesPrice}</span>
                </div>
              </div>

              <ul className="fee-features">
                {fee.features.map((feat, fIdx) => (
                  <li key={fIdx}>{feat}</li>
                ))}
              </ul>

              <button
                type="button"
                className={`btn ${fee.popular ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                onClick={() => onOpenBooking(fee.title)}
              >
                <span>Book This Format</span>
              </button>
            </div>
          ))}
        </div>

        {/* Clean Line FAQs */}
        <div className="faq-wrap">
          <h3 style={{ textAlign: 'center', marginBottom: '32px' }}>Common Questions</h3>

          {faqsList.slice(0, 5).map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button
                type="button"
                className="faq-btn"
                aria-expanded={openFaq === idx}
                onClick={() => toggleFaq(idx)}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
              </button>
              {openFaq === idx && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
