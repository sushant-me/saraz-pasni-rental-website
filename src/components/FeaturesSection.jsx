import React from 'react';
import './FeaturesSection.css';

const FEATURES = [
  {
    id: 'curated',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l1.8 5.4H19l-4.6 3.4 1.8 5.4L12 13l-4.2 3.2 1.8-5.4L5 7.4h5.2L12 2z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Curated with care',
    description:
      'Authentic, polished pieces selected to feel cohesive, elegant, and true to tradition.',
  },
  {
    id: 'delivery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="9" width="13" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 12h4l3 3v5h-7V12z" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Melbourne delivery',
    description:
      'We coordinate timely delivery and pickup across Melbourne, with setup available for an easy celebration.',
  },
  {
    id: 'family',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 21C12 21 3 14.5 3 8.5C3 6 5 4 7.5 4C9.24 4 10.91 5.01 12 6.5C13.09 5.01 14.76 4 16.5 4C19 4 21 6 21 8.5C21 14.5 12 21 12 21Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Made for your family',
    description:
      'Flexible packages and personal guidance make every celebration feel uniquely yours.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="features" id="packages" aria-labelledby="features-heading">
      {/* ── Section Header ── */}
      <div className="features__header">
        <div className="features__label" aria-label="Section: Rent with Ease">
          <span className="features__label-line" aria-hidden="true" />
          RENT WITH EASE
          <span className="features__label-line" aria-hidden="true" />
        </div>
        <h2 className="features__heading" id="features-heading">
          Everything your celebration needs
        </h2>
        <p className="features__subheading">
          Choose a thoughtfully assembled collection or let us create one just for your family.
        </p>
      </div>

      {/* ── Feature Cards ── */}
      <div className="features__grid">
        {FEATURES.map(({ id, icon, title, description }) => (
          <div key={id} className="features__card" id={`feature-${id}`}>
            <div className="features__card-icon" aria-hidden="true">
              {icon}
            </div>
            <h3 className="features__card-title">{title}</h3>
            <p className="features__card-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
