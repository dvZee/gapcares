import React from 'react';

export default function ConsentBanner({ onOpenBooking }) {
  return (
    <div className="brand-strip-banner" role="region" aria-label="Virtual and Telephone Accessibility">
      <div className="container">
        <div className="brand-strip-inner">
          <div className="brand-strip-text">
            <h3>Support When &amp; Where You Need It Most</h3>
            <p>
              Psychotherapy is offered virtually and by telephone across Ontario, providing you with compassionate, confidential care from the privacy and comfort of your home.
            </p>
          </div>
          <div className="brand-strip-cta">
            <button
              type="button"
              className="btn btn-white btn-md"
              onClick={() => onOpenBooking()}
            >
              <span>Schedule Initial Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
