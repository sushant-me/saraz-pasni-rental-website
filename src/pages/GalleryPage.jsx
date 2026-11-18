import React, { useState } from 'react';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';
import pasniSet from '../assets/hero-image.webp';
import gallery11 from '../assets/gallery-11.webp';
import gallery22 from '../assets/gallery-22.webp';
import gallery33 from '../assets/gallery-33.webp';
import gallery44 from '../assets/gallery-44.webp';
import gallery55 from '../assets/gallery-55.webp';
import './SubPages.css';

const GALLERY_IMAGES = [
  { src: pasniSet, alt: 'Burgundy velvet traditional Pasni seating set with brass pieces', caption: 'Traditional Pasni set' },
  { src: gallery11, alt: 'Blue and purple Pasni ceremony setup with traditional arrangements', caption: 'Blue celebration setup' },
  { src: gallery22, alt: 'Red and gold Pasni backdrop with traditional ceremony items', caption: 'Red and gold backdrop' },
  { src: gallery33, alt: 'Red velvet Pasni setup with ceremonial food offerings', caption: 'A traditional ceremony' },
  { src: gallery44, alt: 'Red and cream Pasni backdrop arranged in a family home', caption: 'A family celebration' },
  { src: gallery55, alt: 'Gold and burgundy Pasni seating with traditional offerings', caption: 'Gold and burgundy details' },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="subpage">
        <header className="subpage__header">
          <p className="subpage__eyebrow">A glimpse of the celebration</p>
          <h1>Our Gallery</h1>
          <p>Traditional details and thoughtful Pasni setups, prepared with care.</p>
        </header>
        <section className="gallery-page__grid" aria-label="Pasni rental gallery">
          {GALLERY_IMAGES.map((image, index) => (
            <figure className="gallery-page__item" key={image.src}>
              <button
                type="button"
                className="gallery-page__button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open ${image.caption}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span className="gallery-page__zoom" aria-hidden="true">+</span>
              </button>
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </section>
        <p className="gallery-page__note">
          Follow <a href="https://instagram.com/sarazpasnirental" target="_blank" rel="noopener noreferrer">@sarazpasnirental</a> to see more of our setups.
        </p>
      </div>
      <Footer />
      <Lightbox
        images={GALLERY_IMAGES}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
