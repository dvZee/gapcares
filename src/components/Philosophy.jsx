import React from 'react';

const pillars = [
  {
    num: "01",
    title: "Empathetic Presence",
    desc: "Creating a calm, non-judgmental space where you feel genuinely heard, respected, and validated in whatever you are experiencing."
  },
  {
    num: "02",
    title: "Trauma-Informed",
    desc: "Recognizing how past experiences shape your emotions, relationships, and nervous system, with safety and gentle pacing at the center."
  },
  {
    num: "03",
    title: "Holistic & Strength-Based",
    desc: "Considering the whole person while supporting your self-efficacy, rediscovery of strengths, resilience, and hope."
  },
  {
    num: "04",
    title: "Anti-Oppressive",
    desc: "Recognizing social, cultural, and relational contexts while honoring your personal worldview, heritage, and values without judgment."
  }
];

export default function Philosophy() {
  return (
    <section id="approach-philosophy" className="philosophy-section" aria-labelledby="philosophy-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Approach</span>
          <h2 id="philosophy-title">A Compassionate &amp; Holistic Foundation</h2>
          <p className="lead">
            Therapy is more than addressing symptoms. It can be an opportunity to rediscover your strengths, develop greater self-awareness, build healthier relationships, and reconnect with hope.
          </p>
        </div>

        <div className="philosophy-grid">
          {pillars.map((item) => (
            <div key={item.num} className="philosophy-item">
              <span className="philosophy-number">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
