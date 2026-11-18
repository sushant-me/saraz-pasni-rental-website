import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeaturesSection from '../components/FeaturesSection';
import TraditionSection from '../components/TraditionSection';
import GoogleReviewsSection from '../components/GoogleReviewsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TraditionSection />
      <FeaturesSection />
      <GoogleReviewsSection />
      <Footer />
    </>
  );
}
