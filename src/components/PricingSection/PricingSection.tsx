import React from "react";
import { useMediaQuery } from "react-responsive";
import PricingSectionDesktop from "../PricingSectionDesktop/PricingSectionDesktop";
import PricingSectionMobile from "../PricingSectionMobile/PrincingSectionMobile";

const PricingSection: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Define breakpoint for mobile

  return isMobile ? <PricingSectionMobile /> : <PricingSectionDesktop />;
};

export default PricingSection;
