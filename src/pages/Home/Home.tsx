import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';
import FooterSection from '../../components/FooterSection/FooterSection';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default Home;