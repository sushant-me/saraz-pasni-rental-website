import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './index.css';
import './App.css';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { initScrollAnimations } from './animations';

const PAGES = {
  '/': HomePage,
  '/packages': PackagesPage,
  '/gallery': GalleryPage,
  '/about': AboutPage,
  '/contact': ContactPage,
};

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const Page = PAGES[path] || HomePage;

  useEffect(() => {
    let cleanup;
    const timer = setTimeout(() => {
      cleanup = initScrollAnimations();
    }, 90);
    const onLoad = () => window.dispatchEvent(new Event('resize'));
    window.addEventListener('load', onLoad);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', onLoad);
      if (cleanup) cleanup();
    };
  }, [path]);

  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />
      <main>
        <Page />
      </main>
    </div>
  );
}
