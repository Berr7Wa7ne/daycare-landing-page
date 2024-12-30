import React from "react";
import Check from '../../assets/Check.png';

interface PricingCardProps {
  price: string;
  planName: string;
  description: string;
  features: string[];
  onGetStarted: () => void;
  onChatToSales: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  price,
  planName,
  description,
  features,
  onGetStarted,
  onChatToSales,
}) => {
  return (
    <div className="w-full sm:w-[408px] border border-[#DFE1E6] rounded-2xl bg-white p-4 shadow-lg flex flex-col gap-4">
      <div className="text-center">
        <h4 className="text-[32px] sm:text-[48px] font-sf-pro-rounded font-semibold">{price}</h4>
        <p className="text-[16px] sm:text-[20px] font-sf-pro-rounded font-semibold mt-2">{planName}</p>
        <p className="text-[14px] sm:text-[16px] font-sf-pro-rounded text-[#666D80] mt-2">{description}</p>
      </div>
      {/* Features */}
      <div className="mt-4 flex flex-col space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img src={Check} className="w-[20px] h-[20px]" alt="Check" />
            <p className="text-[14px] sm:text-[16px] font-sf-pro-rounded text-[#666D80]">{feature}</p>
          </div>
        ))}
      </div>
      {/* Buttons */}
      <button
        onClick={onGetStarted}
        className="mt-4 bg-[#7047EB] text-white py-3 px-4 font-sf-pro-rounded font-semibold text-[14px] sm:text-[16px] rounded-lg"
      >
        Get Started
      </button>
      <button
        onClick={onChatToSales}
        className="mt-2 bg-[#F9F9FB] border border-[#DFE1E6] text-black py-3 px-4 font-sf-pro-rounded font-semibold text-[14px] sm:text-[16px] rounded-lg"
      >
        Chat to Sales
      </button>
    </div>
  );
};

export default PricingCard;
