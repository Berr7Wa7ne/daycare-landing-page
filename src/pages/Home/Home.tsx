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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
