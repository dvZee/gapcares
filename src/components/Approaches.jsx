import React, { useState } from 'react';
import { therapyApproaches } from '../data/therapyData';

export default function Approaches() {
  const [activeTab, setActiveTab] = useState(therapyApproaches[0].id);

  const currentApproach = therapyApproaches.find(a => a.id === activeTab) || therapyApproaches[0];

  return (
    <section id="approaches" className="approaches-section" aria-labelledby="approaches-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Clinical Modalities</span>
          <h2 id="approaches-title">Therapy Approaches</h2>
          <p className="lead">
            Therapy approaches will be tailored to your individual needs and goals.
          </p>
        </div>

        {/* Minimal Pill Selector */}
        <div className="approaches-nav" role="tablist">
          {therapyApproaches.map((app) => (
            <button
              key={app.id}
              type="button"
              role="tab"
              aria-selected={activeTab === app.id}
              className={`approach-pill ${activeTab === app.id ? 'active' : ''}`}
              onClick={() => setActiveTab(app.id)}
            >
              {app.title.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Clean Spacious Detail Card */}
        <div className="approach-card">
          <span className="approach-badge">{currentApproach.badge}</span>
          <h3>{currentApproach.title}</h3>
          <p className="lead-desc">{currentApproach.lead}</p>

          <ul className="approach-list">
            {currentApproach.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>

          <div className="approach-note">
            {currentApproach.callout}
          </div>
        </div>
      </div>
    </section>
  );
}
