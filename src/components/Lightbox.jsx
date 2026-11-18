import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Lightbox.css';

const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function Close() {
  return <svg viewBox="0 0 24 24" {...iconProps}><path d="M6 6l12 12M18 6 6 18" /></svg>;
}

function ChevronLeft() {
  return <svg viewBox="0 0 24 24" {...iconProps}><path d="M15 5 8 12l7 7" /></svg>;
}

function ChevronRight() {
  return <svg viewBox="0 0 24 24" {...iconProps}><path d="m9 5 7 7-7 7" /></svg>;
}

export default function Lightbox({ images = [], index, onClose, onNavigate }) {
  const open = index !== null && index >= 0 && index < images.length;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    document.body.classList.add('is-locked');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('is-locked');
      window.removeEventListener('keydown', onKey);
    };
  }, [open, index, images.length, onClose, onNavigate]);

  if (!open) return null;
  const image = images[index];

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close image viewer">
        <Close />
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={() => onNavigate((index - 1 + images.length) % images.length)}
        aria-label="Previous image"
      >
        <ChevronLeft />
      </button>

      <figure className="lightbox__figure">
        <img src={image.src} alt={image.alt} />
        <figcaption className="lightbox__caption">
          {image.tag && <span className="lightbox__tag">{image.tag}</span>}
          <span className="lightbox__title">{image.caption}</span>
          <span className="lightbox__count">{index + 1} / {images.length}</span>
        </figcaption>
      </figure>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={() => onNavigate((index + 1) % images.length)}
        aria-label="Next image"
      >
        <ChevronRight />
      </button>
    </div>,
    document.body,
  );
}
