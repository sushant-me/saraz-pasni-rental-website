import React from 'react';
import './GoogleReviewsSection.css';

const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/MNK9DCka4Q74Gwer7?g_st=ic';

const REVIEWS = [
  {
    name: 'Vineet',
    quote: '“Awesome and homely service … highly recommend Saraz Pasni Rentals.”',
  },
  {
    name: 'Sushma',
    quote: '“Everything was beautiful, well-presented, and perfect for our girls’ special day.”',
  },
  {
    name: 'Shilpa',
    quote: '“Amazing service and beautiful Pasni rental items!”',
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="google-reviews" aria-labelledby="google-reviews-heading">
      <div className="google-reviews__inner">
        <div className="google-reviews__header">
          <div className="google-reviews__label">GOOGLE REVIEWS</div>
          <h2 className="google-reviews__heading" id="google-reviews-heading">
            Kind words from our families
          </h2>
          <a
            className="google-reviews__rating"
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rated 5 out of 5 on Google from 11 reviews. Read all reviews on Google."
          >
            <span className="google-reviews__stars" aria-hidden="true">★★★★★</span>
            <span><strong>5.0</strong> on Google · 11 reviews</span>
            <span className="google-reviews__link">Read all reviews</span>
          </a>
        </div>

        <div className="google-reviews__grid">
          {REVIEWS.map(({ name, quote }) => (
            <article className="google-reviews__card" key={name}>
              <span className="google-reviews__card-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
              <blockquote className="google-reviews__quote">{quote}</blockquote>
              <p className="google-reviews__author">{name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
