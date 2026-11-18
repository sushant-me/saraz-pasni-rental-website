import React from 'react';
import Footer from '../components/Footer';
import './PackagesPage.css';
import basicPackageImage from '../assets/package-basic.webp';
import standardPackageImage from '../assets/package-standard.webp';
import fullPackageImage from '../assets/package-full.webp';
import basicBackdropImage from '../assets/backdrop.webp';
import fullBackdropImage from '../assets/backdrop2.webp';

const PASNI_PACKAGES = [
  {
    name: 'Basic',
    image: basicPackageImage,
    descriptor: 'Simple · Elegant · Perfect',
    description: 'Perfect for a simple and beautiful Pasni celebration.',
    price: '$60',
    items: ['Aasan Set', 'Tray 1', 'Annaprasan Banner', 'Velvet Kapada (Cloth)'],
  },
  {
    name: 'Standard',
    image: standardPackageImage,
    descriptor: 'Complete · Traditional · Popular',
    description: 'Our most popular package with all the traditional essentials.',
    price: '$80',
    featured: true,
    items: [
      'Aasan Set',
      'Dalo, Chata',
      'Tray 2',
      'Annaprasan Banner',
      'Velvet Kapada (Cloth)',
      '84 Bowl',
      'Theki',
    ],
  },
  {
    name: 'Full',
    image: fullPackageImage,
    descriptor: 'Grand · Traditional · Premium',
    description: 'A complete package for a grand Pasni celebration.',
    price: '$100',
    items: [
      'Aasan Set',
      'Dalo, Chata',
      'Tray 4',
      'Annaprasan Banner',
      'Velvet Kapada (Cloth)',
      '84 Bowl',
      'Theki',
      'Thali Set',
      'Karuwa',
      'Tikadani',
      'Khaakulo, Panas',
    ],
  },
];

const BACKDROP_PACKAGES = [
  {
    name: 'Basic Backdrop',
    image: fullBackdropImage,
    price: '$70',
    items: ['Tripod Stand', '6 Curtains (2 White, 2 Red, 2 Yellow)'],
  },
  {
    name: 'Full Backdrop',
    image: basicBackdropImage,
    price: '$100',
    items: ['Heavy Duty Stand', 'Velvet Curtains / Silk Curtains', 'Flower Garland'],
  },
];

const ADD_ONS = [
  'Baby Aashanchakati',
  'Kusan (x1)',
  'Velvet Kisti (x4)',
  'Velvet Dalo',
  '84 Bowl (White Metal)',
  'Silver Coating Karuwa',
  'Panas Set',
  'Parda Set',
  'Madal Pillow (x2)',
  'Large Size Floor Cover (x1)',
  'Velvet Umbrella',
  'Subhan Annaprasan Board',
  'Silver Coating Khadkulo',
  'Tika Thaali (x1)',
  'Theki Set',
];

function CheckList({ items }) {
  return (
    <ul className="package-checklist">
      {items.map((item) => (
        <li key={item}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m3 8 3.1 3.1L13 4.5" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PasniCard({ packageInfo }) {
  const { name, image, descriptor, description, price, featured = false, items } = packageInfo;

  return (
    <article className={`pasni-card${featured ? ' pasni-card--featured' : ''}`}>
      <div className="pasni-card__image-wrap">
        <img src={image} alt={`${name} traditional Pasni set`} className="pasni-card__image" />
        {featured && <span className="pasni-card__badge">Most loved</span>}
      </div>
      <div className="pasni-card__body">
        <p className="pasni-card__descriptor">{descriptor}</p>
        <h2 className="pasni-card__title">{name}</h2>
        <p className="pasni-card__description">{description}</p>
        <div className="pasni-card__price">
          <span>{price}</span>
          <small>from</small>
        </div>
        <CheckList items={items} />
        <a className="pasni-card__button" href="/contact">Choose {name}</a>
      </div>
    </article>
  );
}

function BackdropCard({ packageInfo }) {
  const { name, image, price, items } = packageInfo;

  return (
    <article className="backdrop-card">
      <div className="backdrop-card__image-wrap">
        <img
          src={image}
          alt={`${name} setup`}
          className="backdrop-card__image"
          loading="lazy"
        />
      </div>
      <div className="backdrop-card__body">
        <div className="backdrop-card__heading">
          <h3>{name}</h3>
          <span>{price}</span>
        </div>
        <CheckList items={items} />
      </div>
    </article>
  );
}

export default function PackagesPage() {
  return (
    <>
      <section className="packages-hero" aria-labelledby="packages-heading">
        <div className="packages-hero__ornament packages-hero__ornament--left" aria-hidden="true" />
        <div className="packages-hero__ornament packages-hero__ornament--right" aria-hidden="true" />
        <div className="packages-hero__content">
          <p className="packages-eyebrow">Traditional Nepali Pasni Sets</p>
          <h1 id="packages-heading">A package for every<br />celebration</h1>
          <p className="packages-hero__description">
            From a simple and beautiful Pasni to a grand traditional celebration,
            choose the set that feels right for your family.
          </p>
        </div>
      </section>

      <section className="pasni-packages" aria-label="Pasni set packages">
        <div className="pasni-packages__grid">
          {PASNI_PACKAGES.map((packageInfo) => (
            <PasniCard key={packageInfo.name} packageInfo={packageInfo} />
          ))}
        </div>
      </section>

      <section className="backdrop-section" aria-labelledby="backdrop-heading">
        <div className="section-heading">
          <p className="section-heading__eyebrow"><span />Complete the setting<span /></p>
          <h2 id="backdrop-heading">Backdrop packages</h2>
          <p>Add a beautiful, elegant backdrop to frame your baby’s special day.</p>
        </div>
        <div className="backdrop-section__grid">
          {BACKDROP_PACKAGES.map((packageInfo) => (
            <BackdropCard key={packageInfo.name} packageInfo={packageInfo} />
          ))}
        </div>
      </section>

      <section className="add-ons" aria-labelledby="add-ons-heading">
        <div className="add-ons__intro">
          <p className="add-ons__eyebrow"><span />Make it your own</p>
          <h2 id="add-ons-heading">Extra items &amp; add-ons</h2>
          <p>Add individual traditional pieces to complete your Pasni setup.</p>
          <a className="add-ons__button" href="/contact">
            Ask about add-ons
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
        </div>
        <ul className="add-ons__list">
          {ADD_ONS.map((item) => (
            <li key={item}>
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m3 8 3.1 3.1L13 4.5" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
}
