import React, { useState } from 'react';
import Footer from '../components/Footer';
import whatsappIcon from '../assets/whatsapp.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import tiktokIcon from '../assets/tiktok.png';
import './SubPages.css';

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/61404294948',
    ariaLabel: 'Chat with Saraz Rental on WhatsApp at 0404 294 948',
    icon: whatsappIcon,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Sarahzdecor',
    ariaLabel: 'Visit Saraz Rental on Facebook',
    icon: facebookIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sarazrental/',
    ariaLabel: 'Visit @sarazrental on Instagram',
    icon: instagramIcon,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@sarazrental?_r=1&_t=ZS-9BE5vu2SgMu',
    ariaLabel: 'Visit @sarazrental on TikTok',
    icon: tiktokIcon,
  },
];


function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Pasni enquiry — ${data.get('name') || 'Website'}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Phone: ${data.get('phone') || ''}`,
        `Event date: ${data.get('event-date') || ''}`,
        `Interested in: ${data.get('interest') || ''}`,
        '',
        data.get('message') || '',
      ].join('\n'),
    );
    window.location.href = `mailto:hello@sarazpasnirental.com.au?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__grid">
        <label className="field">
          <span>Your name</span>
          <input type="text" name="name" placeholder="Full name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" name="email" placeholder="you@email.com" required autoComplete="email" />
        </label>
        <label className="field">
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="04xx xxx xxx" autoComplete="tel" />
        </label>
        <label className="field">
          <span>Event date</span>
          <input type="date" name="event-date" />
        </label>
        <label className="field field--full">
          <span>I’m interested in</span>
          <select name="interest" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            <option>Basic Pasni set</option>
            <option>Standard Pasni set</option>
            <option>Full Pasni set</option>
            <option>Backdrop package</option>
            <option>Add-ons</option>
          </select>
        </label>
        <label className="field field--full">
          <span>Tell us about your celebration</span>
          <textarea name="message" rows="4" placeholder="Date, location, and anything you’d like us to know…" />
        </label>
      </div>

      <button type="submit" className="subpage__button booking-form__submit">
        Send enquiry
      </button>

      {sent ? (
        <p className="booking-form__note" role="status">
          Opening your email app with the details filled in. If it doesn’t open,
          email us at hello@sarazpasnirental.com.au.
        </p>
      ) : (
        <p className="booking-form__note">
          This opens your email app so the enquiry reaches us directly. Prefer to
          chat? Message us on WhatsApp instead.
        </p>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <div className="subpage">
        <header className="subpage__header">
          <p className="subpage__eyebrow">Your date is special</p>
          <h1>Let’s plan your Pasni</h1>
          <p>Get in touch to ask about availability, packages, or individual items.</p>
        </header>

        <section className="booking" aria-labelledby="booking-heading">
          <div className="booking__intro">
            <p className="subpage__eyebrow">Enquiries</p>
            <h2 id="booking-heading">Tell us about your day</h2>
            <p>
              Send your date, the set you’re interested in and your suburb.
              We’ll reply with what’s available and the price.
            </p>
            <div className="booking__quick">
              <a href="https://wa.me/61404294948" target="_blank" rel="noopener noreferrer">
                WhatsApp — 0404 294 948
              </a>
              <a href="tel:0404294948">Call or text</a>
              <a href="mailto:hello@sarazpasnirental.com.au">hello@sarazpasnirental.com.au</a>
            </div>
          </div>
          <BookingForm />
        </section>
        <section className="contact-social" aria-labelledby="contact-social-heading">
          <h2 className="contact-social__heading" id="contact-social-heading">Connect with us on</h2>
          <nav className="contact-social__links" aria-label="Connect with Saraz Rental">
            {SOCIAL_LINKS.map(({ name, href, ariaLabel, icon }) => (
              <a
                className={`contact-social__link contact-social__link--${name.toLowerCase()}`}
                href={href}
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
              >
                <span className="contact-social__icon">
                  <img src={icon} alt="" />
                </span>
                <span>{name}</span>
              </a>
            ))}
          </nav>
        </section>
        <p className="contact-page__location">Serving families across Melbourne, Australia.</p>
      </div>
      <Footer />
    </>
  );
}
