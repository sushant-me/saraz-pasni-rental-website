import React, { useState, useEffect, useRef } from 'react';
import whatsappIcon from '../assets/whatsapp.png';
import facebookIcon from '../assets/facebook.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const currentPage = NAV_LINKS.find(({ href }) => href === currentPath)?.label || 'Home';
  const [active, setActive] = useState(currentPage);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [shareMessage, setShareMessage] = useState('');
  const shareDialog = useRef(null);
  const shareUrl = `${window.location.origin}/`;
  const shareText = `Take a look at Saraz Pasni Rental: ${shareUrl}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const dialog = shareDialog.current;
    if (!dialog) return;

    if (shareOpen && !dialog.open) {
      dialog.showModal();
    } else if (!shareOpen && dialog.open) {
      dialog.close();
    }
  }, [shareOpen]);

  async function copyWebsiteLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareMessage('Website link copied. Share it with a friend!');
    } catch {
      setShareMessage('Could not copy the link. Please try another sharing option.');
    }
  }

  async function shareWithDevice() {
    try {
      await navigator.share({
        title: 'Saraz Pasni Rental',
        text: 'Take a look at Saraz Pasni Rental.',
        url: shareUrl,
      });
      setShareOpen(false);
    } catch (error) {
      if (error.name !== 'AbortError') {
        setShareMessage('Unable to open the device share menu. Please choose another option.');
      }
    }
  }

  function openShareDialog() {
    setShareMessage('');
    setShareOpen(true);
    setMenuOpen(false);
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* ── Logo ── */}
        <a href="/" className="navbar__logo" aria-label="Saraz Pasni Rental Home">
          <div className="navbar__logo-icon" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#7B1B2E"/>
              {/* Decorative mandala-style lotus */}
              <circle cx="20" cy="20" r="6" fill="#FAF5EE" opacity="0.9"/>
              <ellipse cx="20" cy="11" rx="2.5" ry="5" fill="#FAF5EE" opacity="0.7"/>
              <ellipse cx="20" cy="29" rx="2.5" ry="5" fill="#FAF5EE" opacity="0.7"/>
              <ellipse cx="11" cy="20" rx="5" ry="2.5" fill="#FAF5EE" opacity="0.7"/>
              <ellipse cx="29" cy="20" rx="5" ry="2.5" fill="#FAF5EE" opacity="0.7"/>
              <ellipse cx="14" cy="14" rx="2" ry="4.5" fill="#FAF5EE" opacity="0.5"
                transform="rotate(-45 14 14)"/>
              <ellipse cx="26" cy="26" rx="2" ry="4.5" fill="#FAF5EE" opacity="0.5"
                transform="rotate(-45 26 26)"/>
              <ellipse cx="26" cy="14" rx="2" ry="4.5" fill="#FAF5EE" opacity="0.5"
                transform="rotate(45 26 14)"/>
              <ellipse cx="14" cy="26" rx="2" ry="4.5" fill="#FAF5EE" opacity="0.5"
                transform="rotate(45 14 26)"/>
              <circle cx="20" cy="20" r="3" fill="#C4832A"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Saraz</span>
            <span className="navbar__logo-tagline">PASNI RENTAL</span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              id={`nav-${label.toLowerCase()}`}
              className={`navbar__link ${active === label ? 'navbar__link--active' : ''}`}
              onClick={() => setActive(label)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── Share + primary CTA ── */}
        <button
          className="navbar__share"
          id="nav-share-btn"
          type="button"
          onClick={openShareDialog}
          aria-label="Share this website"
          title="Share"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.5 3.5h4v4M16.5 3.5l-7 7" />
            <path d="M9 5H5.5A1.5 1.5 0 0 0 4 6.5v8A1.5 1.5 0 0 0 5.5 16h8a1.5 1.5 0 0 0 1.5-1.5V11" />
          </svg>
        </button>
        <a className="navbar__cta" href="/contact">
          Book your date
        </a>
        {/* ── Mobile Hamburger ── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`navbar__mobile-link ${active === label ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => { setActive(label); setMenuOpen(false); }}
          >
            {label}
          </a>
        ))}
        <button type="button" className="navbar__mobile-share" onClick={openShareDialog}>
          Share with a friend
        </button>
        <a className="navbar__mobile-cta" href="/contact" onClick={() => setMenuOpen(false)}>
          Book your date
        </a>
      </div>
      <dialog
        className="share-dialog"
        ref={shareDialog}
        aria-labelledby="share-dialog-title"
        onClose={() => setShareOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setShareOpen(false);
        }}
      >
        <div className="share-dialog__content">
          <button
            className="share-dialog__close"
            type="button"
            aria-label="Close sharing options"
            onClick={() => setShareOpen(false)}
          >
            ×
          </button>
          <p className="share-dialog__eyebrow">Spread the joy</p>
          <h2 id="share-dialog-title">Share with a friend</h2>
          <p className="share-dialog__description">Choose how you’d like to share Saraz Pasni Rental.</p>
          <div className="share-dialog__options">
            <a
              className="share-option"
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShareOpen(false)}
            >
              <span className="share-option__icon share-option__icon--whatsapp" aria-hidden="true">
                <img src={whatsappIcon} alt="" />
              </span>
              WhatsApp
            </a>
            <a
              className="share-option"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShareOpen(false)}
            >
              <span className="share-option__icon share-option__icon--facebook" aria-hidden="true">
                <img src={facebookIcon} alt="" />
              </span>
              Facebook
            </a>
            <button className="share-option share-option--copy" type="button" onClick={copyWebsiteLink}>
              <span className="share-option__icon share-option__icon--copy" aria-hidden="true">↗</span>
              Copy link
            </button>
            {typeof navigator.share === 'function' && (
              <button className="share-option share-option--device" type="button" onClick={shareWithDevice}>
                <span className="share-option__icon share-option__icon--device" aria-hidden="true">•••</span>
                More options
              </button>
            )}
          </div>
          {shareMessage && <p className="share-dialog__message" role="status">{shareMessage}</p>}
        </div>
      </dialog>
    </header>
  );
}
