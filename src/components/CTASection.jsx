import React from 'react';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta" id="contact" aria-labelledby="cta-heading">
      <div className="cta__inner">

        <div className="cta__label" aria-label="Section: Your date is special">
          YOUR DATE IS SPECIAL
        </div>

        <h2 className="cta__heading" id="cta-heading">
          Let us prepare the details,<br />
          so you can hold the moment.
        </h2>

        <p className="cta__subtext">
          Popular dates are reserved early. Tell us when you're celebrating
          and we'll take it from there.
        </p>

        <a href="mailto:hello@sarazpasnirental.com.au" className="cta__btn" id="cta-check-date-btn">
          Check your date
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.75"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
