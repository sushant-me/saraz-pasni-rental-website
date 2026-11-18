import React from 'react';
import Footer from '../components/Footer';
import aboutImage from '../assets/about.webp';
import './SubPages.css';

export default function AboutPage() {
  return (
    <>
      <div className="subpage">
        <header className="subpage__header">
          <p className="subpage__eyebrow">The meaning behind the moment</p>
          <h1>About Saraz</h1>
          <p>Thoughtful Pasni rentals that bring tradition, family, and celebration together.</p>
        </header>
        <section className="about-page">
          <div className="about-page__image">
            <img src={aboutImage} alt="Pasni celebration setup" />
          </div>
          <div className="about-page__content">
            <p className="subpage__eyebrow">Tradition · Culture · Love</p>
            <h2>A beautiful beginning, made easier.</h2>
            <p>
              Pasni, the traditional rice-feeding ceremony, is a cherished milestone
              for Nepali families. We help families in Melbourne celebrate it with
              authentic ceremonial pieces and elegant backdrops.
            </p>
            <p>
              From the seating and traditional details to the finishing touches,
              our rental packages make it easier to create a meaningful day and
              spend more time with the people you love.
            </p>
            <a className="subpage__button" href="/packages">Explore our packages</a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
