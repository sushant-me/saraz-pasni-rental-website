import React from 'react';
import './Footer.css';

const EXPLORE_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* ── Column 1: Brand ── */}
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="Saraz Pasni Rental Home">
            <div className="footer__logo-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.15)"/>
                <circle cx="20" cy="20" r="6" fill="rgba(255,255,255,0.9)" opacity="0.9"/>
                <ellipse cx="20" cy="11" rx="2.5" ry="5" fill="rgba(255,255,255,0.7)" opacity="0.7"/>
                <ellipse cx="20" cy="29" rx="2.5" ry="5" fill="rgba(255,255,255,0.7)" opacity="0.7"/>
                <ellipse cx="11" cy="20" rx="5" ry="2.5" fill="rgba(255,255,255,0.7)" opacity="0.7"/>
                <ellipse cx="29" cy="20" rx="5" ry="2.5" fill="rgba(255,255,255,0.7)" opacity="0.7"/>
                <ellipse cx="14" cy="14" rx="2" ry="4.5" fill="rgba(255,255,255,0.5)" opacity="0.5"
                  transform="rotate(-45 14 14)"/>
                <ellipse cx="26" cy="26" rx="2" ry="4.5" fill="rgba(255,255,255,0.5)" opacity="0.5"
                  transform="rotate(-45 26 26)"/>
                <ellipse cx="26" cy="14" rx="2" ry="4.5" fill="rgba(255,255,255,0.5)" opacity="0.5"
                  transform="rotate(45 26 14)"/>
                <ellipse cx="14" cy="26" rx="2" ry="4.5" fill="rgba(255,255,255,0.5)" opacity="0.5"
                  transform="rotate(45 14 26)"/>
                <circle cx="20" cy="20" r="3" fill="#C4832A"/>
              </svg>
            </div>
            <div className="footer__logo-text">
              <span className="footer__logo-name">Saraz</span>
              <span className="footer__logo-tagline">PASNI RENTAL</span>
            </div>
          </a>

          <p className="footer__desc">
            Beautiful, authentic and affordable Pasni sets with elegant
            backdrop decorations, available across Melbourne.
          </p>

          <p className="footer__tagline">TRADITION · CULTURE · LOVE</p>
        </div>

        {/* ── Column 2: Explore Links ── */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <h3 className="footer__nav-title">EXPLORE</h3>
          <ul className="footer__nav-list">
            {EXPLORE_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="footer__nav-link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Column 3: Contact ── */}
        <div className="footer__contact">
          <h3 className="footer__nav-title">CONTACT</h3>
          <ul className="footer__contact-list">
            <li>
              <a href="tel:0404294948" className="footer__contact-link">
                0404 294 948
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sarazrental/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-link"
              >
                @sarazrental
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/MNK9DCka4Q74Gwer7?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__map-link"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <span>Find Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 Saraz Pasni Rental. Made with respect for tradition.
        </p>
      </div>
    </footer>
  );
}
