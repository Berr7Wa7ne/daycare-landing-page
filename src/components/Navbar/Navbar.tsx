import React, { useState } from 'react';
import Logo from '../../assets/image1.png';

const Navbar: React.FC = () => {
  console.log('Rendering Navbar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 md:w-[835px] md:h-[90px] w-[450px] h-[45px] bg-[#F9F9FB] border border-[#DFE1E6] rounded-[16px] flex items-center justify-center z-50 ">
      {/* Inner Nav */}
      <nav className="w-[818px] h-[72px] bg-white shadow-md border border-[#DFE1E6] rounded-[12px] flex items-center justify-between px-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Daycare Logo"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-2xl font-bold text-black font-sf-pro-rounded">Daycare.</span>
        </div>

                {/* Hamburger Icon */}
          <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/*Desktop Navigation Links */}
        <div className="hidden md:flex gap-6">
          <a href="#about" className="text-black hover:text-gray-600 font-sf-pro-rounded text-[16px]">
            About
          </a>
          <a href="#features" className="text-black hover:text-gray-600 font-sf-pro-rounded text-[16px]">
            Features
          </a>
          <a href="#pricing" className="text-black hover:text-gray-600 font-sf-pro-rounded text-[16px]">
            Pricing
          </a>
          <a href="#faqs" className="text-black hover:text-gray-600 font-sf-pro-rounded text-[16px]">
            FAQ's
          </a>
          <a href="#contact" className="text-black hover:text-gray-600 font-sf-pro-rounded text-[16px]">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-[#DFE1E6] rounded-[10px] hover:bg-gray-100 bg-[#F9F9FB] font-sf-pro-rounded">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-[#7047EB] rounded-[10px] hover:bg-purple-700 font-sf-pro-rounded">
            Get Started
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full h-screen bg-white z-40 flex flex-col items-center py-6">
          <a href="#about" className="py-2 px-4 text-black hover:bg-gray-100 font-sf-pro-rounded w-full text-center">
            About
          </a>
          <a href="#features" className="py-2 px-4 text-black hover:bg-gray-100 font-sf-pro-rounded w-full text-center">
            Features
          </a>
          <a href="#pricing" className="py-2 px-4 text-black hover:bg-gray-100 font-sf-pro-rounded w-full text-center">
            Pricing
          </a>
          <a href="#faqs" className="py-2 px-4 text-black hover:bg-gray-100 font-sf-pro-rounded w-full text-center">
            FAQ's
          </a>
          <a href="#contact" className="py-2 px-4 text-black hover:bg-gray-100 font-sf-pro-rounded w-full text-center">
            Contact
          </a>
          <div className="flex flex-col gap-2 w-full px-4 mt-4">
            <button className="w-full py-2 border border-[#DFE1E6] rounded-[10px] hover:bg-gray-100 bg-[#F9F9FB] font-sf-pro-rounded">
              Login
            </button>
            <button className="w-full py-2 text-white bg-[#7047EB] rounded-[10px] hover:bg-purple-700 font-sf-pro-rounded">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

