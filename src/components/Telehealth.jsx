import React from 'react';

export default function Telehealth() {
  return (
    <section className="telehealth-strip" aria-labelledby="telehealth-title">
      <div className="container">
        <div className="telehealth-inner">
          <div className="telehealth-text">
            <span className="section-tag">Convenient Care</span>
            <h3 id="telehealth-title">Online &amp; Telephone Therapy Across Ontario</h3>
            <p>
              Psychotherapy is offered virtually and by telephone to provide accessibility and comfort from your home or private space anywhere in Ontario.
            </p>
            <div className="telehealth-points">
              <span className="telehealth-pill">Encrypted &amp; Secure</span>
              <span className="telehealth-pill">No Commute</span>
              <span className="telehealth-pill">Flexible Scheduling</span>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.7', borderLeft: '2px solid var(--color-border)', paddingLeft: '20px' }}>
              <strong>Session Requirements:</strong> Clients are asked to have a reliable internet connection and a private, quiet space free from interruptions. Sessions will not proceed if there are concerns regarding safety or confidentiality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
