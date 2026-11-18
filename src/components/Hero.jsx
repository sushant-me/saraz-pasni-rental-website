import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.webp';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero__content">

        {/* Location tag */}
        <div className="hero__location" aria-label="Location: Melbourne, Australia">
          <span className="hero__location-line" aria-hidden="true" />
          MELBOURNE, AUSTRALIA
        </div>

        {/* Heading */}
        <h1 className="hero__heading" id="hero-heading">
          <span className="hero__heading-main">
            <span className="hero__word">A</span>{' '}
            <span className="hero__word">sacred</span><br />
            <span className="hero__word">beginning,</span>
          </span>
          <span className="hero__heading-italic">
            {' '}<span className="hero__word">made</span>{' '}
            <span className="hero__word">effortless.</span>
          </span>
        </h1>

        {/* Description */}
        <p className="hero__description">
          Beautiful, authentic and{' '}
          <strong className="hero__description-highlight">affordable</strong>{' '}
          traditional Nepali Pasni sets and elegant backdrop packages—now
          available across Melbourne.
        </p>

        {/* CTA Buttons */}
        <div className="hero__actions">
          <a href="/packages" className="hero__btn hero__btn--primary" id="hero-explore-btn">
            Explore Packages
            <svg
              className="hero__btn-arrow"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="/gallery" className="hero__btn hero__btn--outline" id="hero-gallery-btn">
            View Our Gallery
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero__image-wrapper" aria-hidden="true">
        <img
          src={heroImage}
          alt="Traditional Nepali Pasni ceremony setup with red velvet cushions and gold embroidery"
          className="hero__image"
          loading="eager"
          fetchpriority="high"
          onError={(e) => {
            // Fallback: hide broken img and show a gradient placeholder
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.classList.add('hero__image-wrapper--fallback');
          }}
        />
        <div className="hero__image-overlay" />
      </div>
    </section>
  );
}
