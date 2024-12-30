import React from 'react';
import Path1 from '../../assets/Path1.jpg';
import Path2 from '../../assets/Path2.jpg';
import Image1 from '../../assets/image1.png';

const FooterSection: React.FC = () => {
  console.log('Rendering FooterSection Component');
  return (
    <div className="md:mt-72 flex flex-col items-center mt-40">
      <div
        className="relative md:h-[824px] h-[300px] w-[1440px]"
      >
        {/* Flex container for images */}
        <div className="md:flex md:flex-wrap flex-nowrap">
          <img
            src={Path2}
            alt="Path 2"
            className="hidden md:block md:w-[700px] md:h-[702px] object-cover w-[350px] h-[351px]"
          />
          <img
            src={Path1}
            alt="Path 1"
            className="hidden md:block md:w-[700px] md:h-[702px] object-cover w-[350px] h-[351px]"
          />
        </div>

        {/* Absolute overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bottom-[620px] sm:bottom-[310px]">
          {/* Centered image */}
          <img
            src={Image1}
            alt="Center Icon"
            className="md:w-[139px] md:h-[139px] mb-5 w-[50px] h-[50px]"
          />
          {/* Centered text */}
          <h3 className="ml-20 text-center font-sf-pro-rounded font-semibold md:text-[56px] leading-tight mb-5 text-[25px] sm:leading-tight">
            Ready to Get Started? Let’s Make <br />
            Daycare Management Easy for You!
          </h3>
          <p className="text-center font-sf-pro-rounded md:text-[18px] text-[#666D80] leading-tight mb-5 text-[15px]">
            Manage your daycare effortlessly with our all-in-one system. From <br />
            attendance tracking to staff management, we’ve got you covered.
          </p>
          <button className="md:w-[220px] md:h-[52px] rounded-[12px] md:px-2 md:py-4 py-1 px-1 bg-[#7047EB] gap-2 text-center md:text-[16px] font-sf-pro-rounded leading-tight text-white font-semibold w-[160px] h-[40px] text-[15px]">
            Start Your Free Trial<span className='hidden sm:block'>🚀</span> 
          </button>
        </div>
      </div>

      {/* Navigation Links Section */}
      <div className="md:mt-10 flex flex-col items-center mt-2">
        <div className="flex space-x-2 items-center mb-5">
          <img
            src={Image1}
            alt="Center Icon"
            className="md:w-[28.39px] md:h-[28.39px] w-[14px] h-[14px]"
          />
          <h3 className="font-sf-pro-rounded font-semibold md:text-[21.29px] text-[16px]">
            Daycare.
          </h3>
        </div>
        <nav className="md:flex md:gap-8 gap-4 flex-wrap justify-center">
          <a href="#about" className="text-gray-900 hover:text-gray-600 font-sf-pro-rounded md:text-[16px] text-[14px]">
            About
          </a>
          <a href="#features" className="text-gray-900 hover:text-gray-600 font-sf-pro-rounded md:text-[16px] text-[14px]">
            Features
          </a>
          <a href="#pricing" className="text-gray-900 hover:text-gray-600 font-sf-pro-rounded md:text-[16px] text-[14px]">
            Pricing
          </a>
          <a href="#faqs" className="text-gray-900 hover:text-gray-600 font-sf-pro-rounded md:text-[16px] text-[14px]">
            FAQ's
          </a>
          <a href="#contact" className="text-gray-900 hover:text-gray-600 font-sf-pro-rounded md:text-[16px] text-[14px]">
            Contact
          </a>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="md:mt-10 w-full md:px-10 flex justify-between items-center border-t border-[#EAECF0] pt-[32px] gap-4 px-5 mt-5">
        <p className="font-sf-pro-rounded md:text-[16px] text-[#666D80] leading-tight text-[14px]">
          © 2077 Daycaremanagement. All rights reserved.
        </p>
        <nav className="flex md:gap-8 gap-4 sm:flex-wrap sm:justify-center">
          <a href="#terms" className="text-gray-900 hover:text-gray-600 font-sf-pro-rounded md:text-[16px] text-[14px]">
            Terms
          </a>
          <a href="#privacy" className="text-gray-900 hover:text-gray-600 font-sf-pro-rounded md:text-[16px] text-[14px]">
            Privacy
          </a>
          <a href="#cookies" className="text-gray-900 hover:text-gray-600 font-sf-pro-rounded md:text-[16px] text-[14px]">
            Cookies
          </a>
        </nav>
      </div>
    </div>
  );
};

export default FooterSection;
