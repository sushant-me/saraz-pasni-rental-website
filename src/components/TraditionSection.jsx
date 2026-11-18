import React from 'react';
import traditionImage from '../assets/about.webp';
import './TraditionSection.css';

export default function TraditionSection() {
  return (
    <section className="tradition" id="tradition">
      <div className="tradition__inner">

        {/* ── Left: Image + Floating Card ── */}
        <div className="tradition__image-col">
          <div className="tradition__image-wrapper">
            <img
              src={traditionImage}
              alt="A baby being fed rice during a Nepali Pasni ceremony"
              className="tradition__image"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.classList.add('tradition__image-wrapper--fallback');
              }}
            />
          </div>

          {/* Floating card */}
          <div className="tradition__card">
            <div className="tradition__card-icon" aria-hidden="true">
              {/* Heart icon */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 21C12 21 3 14.5 3 8.5C3 6 5 4 7.5 4C9.24 4 10.91 5.01 12 6.5C13.09 5.01 14.76 4 16.5 4C19 4 21 6 21 8.5C21 14.5 12 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="tradition__card-text">
              Every detail, <em>steeped in meaning.</em>
            </p>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="tradition__content">
          <div className="tradition__label" aria-label="Section: The Tradition">
            <span className="tradition__label-line" aria-hidden="true" />
            THE TRADITION
          </div>

          <h2 className="tradition__heading">
            The first taste of a beautiful journey
          </h2>

          <p className="tradition__text">
            Pasni, or the rice-feeding ceremony, is one of the most cherished
            milestones in a Nepali child's life. Usually celebrated around six
            months, it welcomes a baby to solid food with blessings, family,
            and joy.
          </p>

          <p className="tradition__text">
            We bring together every meaningful element—from traditional
            brassware and ceremonial seating to florals and backdrops—so you
            can be fully present for the moment.
          </p>

          <a href="/about" className="tradition__link" id="tradition-our-story-link">
            Our story
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.75"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
