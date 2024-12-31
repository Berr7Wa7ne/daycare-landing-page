import React from "react";
import HeroPic from "../../assets/Heropic.jpg";

const HeroSection: React.FC = () => {
  return (
    <div className="relative md:w-full w-[100%] mt-40">
      {/* Background Image */}
      <div className="hidden md:block">
        <img src={HeroPic} alt="Daycare Hero" className="md:w-full w-[100%] h-auto object-cover" />
      </div>

      {/* Overlay Section */}
      <div className="md:absolute top-1 left-0 right-0 flex flex-col items-center justify-center px-4 text-center mx-auto">
        {/* Large Headline */}
        <h1 className="text-[48px] md:text-[112px] font-bold leading-tight text-black font-sf-pro-rounded">
          Managing your<br />
          <span className="text-purple-600 font-courgette">Daycare</span> has never<br />
          been this <span className="text-yellow-500 font-courgette">Easy</span>
        </h1>

        {/* Small Subtitle */}
        <p className="mt-10 text-base md:text-[18px] text-[#DFE1E6] font-sf-pro-rounded">
          Streamline your daycare’s daily operations, keep parents <br />connected, and focus more on what matters—caring for the kids.
        </p>

        {/* Buttons */}
        <div className="md:mt-20 mt-5 mb-5 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-2">
          <button className="w-[129px] h-[64px] bg-[#F9F9FB] text-black border border-[#DFE1E6] rounded-[12px] shadow-md 
          hover:bg-purple-700 transition gap-2 text-[16px] font-bold font-sf-pro-rounded">
            Book a Demo
          </button>
          <button className="w-[151px] h-[64px] bg-[#7047EB] text-white rounded-[12px] shadow-md hover:bg-gray-300 transition font-sf-pro-rounded
          font-bold gap-2 text-[16px]">
            Start a Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
