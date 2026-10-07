import React from 'react';
import { diversityStages } from '../data/therapyData';

export default function DiversitySpotlight() {
  return (
    <section id="diversity" className="diversity-section" aria-labelledby="diversity-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Inclusive Care</span>
          <h2 id="diversity-title">Support Across Life Stages &amp; Backgrounds</h2>
          <p className="lead">
            With more than 25 years of experience, Esther provides culturally sensitive, respectful care honoring every person's uniqueness.
          </p>
        </div>

        <div className="diversity-grid">
          {diversityStages.map((stage, idx) => (
            <div key={idx} className="diversity-item">
              <div className="diversity-img">
                <img src={stage.image} alt={stage.alt} width="300" height="180" loading="lazy" />
              </div>
              <div className="diversity-text">
                <span className="diversity-label">{stage.tag}</span>
                <h4>{stage.title}</h4>
                <p>{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
