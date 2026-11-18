import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SELECT = {
  heroWords: '.hero__word',
  heroCopy: '.hero__location, .hero__description, .hero__actions',
  heroImage: '.hero__image-wrapper',
};

function isReduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** GSAP + ScrollTrigger choreography for the whole site. */
export function initScrollAnimations() {
  if (isReduced()) return () => {};

  const ctx = gsap.context(() => {
    /* ── Hero intro + parallax ── */
    if (document.querySelector('.hero')) {
      gsap.from(SELECT.heroWords, {
        yPercent: 120,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.07,
        delay: 0.15,
      });
      gsap.from(SELECT.heroCopy, {
        y: 26,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.12,
        delay: 0.45,
      });
      gsap.from(SELECT.heroImage, {
        opacity: 0,
        scale: 1.04,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.2,
      });
      gsap.to('.hero__image', {
        yPercent: 9,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }

    /* ── Sections that rise together ── */
    const staggered = (selector, vars = {}) => {
      const elements = gsap.utils.toArray(selector);
      if (!elements.length) return;
      gsap.from(elements, {
        y: 34,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: elements[0].parentElement || elements[0],
          start: 'top 86%',
          once: true,
        },
        ...vars,
      });
    };

    staggered('.features__card');
    staggered('.google-reviews__card');
    staggered('.pasni-card');
    staggered('.backdrop-card');
    staggered('.add-ons__list li', { stagger: 0.04, duration: 0.6 });
    staggered('.gallery-page__item', { y: 40 });
    staggered('.cta__inner > *');
    staggered('.subpage__header > *', { y: 26 });
    staggered('.packages-hero__content > *', { y: 30 });
    staggered('.about-page__content > *', { y: 26 });
    staggered('.contact-social', { y: 26 });

    /* two-column editorial sections */
    [
      ['.tradition__image-col', { x: -34, y: 0, opacity: 0 }],
      ['.tradition__content', { x: 34, y: 0, opacity: 0 }],
      ['.about-page__image', { x: -30, y: 0, opacity: 0 }],
    ].forEach(([selector, vars]) => {
      const el = document.querySelector(selector);
      if (!el) return;
      gsap.from(el, {
        ...vars,
        duration: 1.05,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 84%', once: true },
      });
    });

    /* ── Parallax on photography ── */
    gsap.utils.toArray('.tradition__image, .about-page__image img, .gallery-page__item img').forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('.tradition__image-wrapper, .about-page__image, .gallery-page__item') || img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.7,
          },
        },
      );
    });

    /* ── Subtle image scale while scrolling ── */
    gsap.utils.toArray('.gallery-page__item, .pasni-card__image-wrap, .backdrop-card__image-wrap').forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.985 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'center center', scrub: 0.6 },
        },
      );
    });

    /* ── Card section headings draw in ── */
    gsap.utils.toArray('.features__heading, .google-reviews__heading, .cta__heading, .tradition__heading').forEach((heading) => {
      gsap.from(heading, {
        y: 22,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
      });
    });
  });

  ScrollTrigger.refresh();

  return () => ctx.revert();
}
