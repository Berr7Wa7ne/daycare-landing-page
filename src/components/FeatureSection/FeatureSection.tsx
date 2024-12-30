import React from 'react';
import container1 from '../../assets/container1.jpg';
import container2 from '../../assets/container2.jpg';
import container3 from '../../assets/container3.jpg';
import ElementUI_1 from '../../assets/ElementUI_1.jpg';
import ElementUI_2 from '../../assets/ElementUI_2.jpg';
import Vector from '../../assets/Vector.png';

const FeatureSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen"> {/* Centering the container */}
      <div className="container mx-auto text-center p-4"> {/* Inner container for content */}
        {/* Section Title */}
        <h3 className="uppercase text-[16px] md:text-[18px] font-sf-pro-rounded text-[#7047EB]">Features</h3>
        <div>
          <h2 className="font-semibold font-sf-pro-rounded text-[46px] md:text-[56px]">
            Simplify Your Daily <br />
            Operations with <span className="font-semibold font-courgette text-[#7047EB]">Ease</span>
          </h2>
        </div>

        {/* Feature Boxes 1 */}
        <div className="md:flex md:justify-between justify-center items-center mt-4 gap-20">
          {/* Feature Box 1 */}
          <div className="relative w-[405px] h-[473px] mb-10">
            <img src={container1} alt="container1" className="object-cover" />
            <div className="absolute top-[58%] left-6 transform -translate-y-1/2 text-left ">
              <h4 className="text-[38px] md:text-[48px] font-semibold font-quicksand text-black">Track </h4>
              <h4 className="font-courgette text-black text-[38px] md:text-[48px] font-semibold">Attendance</h4>
              <p className="text-[17px] md:text-[18px] mt-2 text-black font-sf-pro-rounded">
                Keep track of every child's attendance <br />with just a few clicks. Check-ins and 
                <br />check-outs are updated instantly, giving <br /> you more time to focus on your kids.
              </p>
            </div>
          </div>

          {/* Feature Box 2 */}
          <div className="relative w-[405px] h-[473px] mb-10">
            <img src={container2} alt="container2" className="object-cover" />
            <div className="absolute top-[60%] left-6 transform -translate-y-1/2 text-left text-black">
              <h4 className="text-[38px] md:text-[48px] font-semibold font-quicksand text-black">Send Instant </h4>
              <h4 className="font-courgette text-black text-[38px] md:text-[48px] font-semibold">Updates</h4>
              <p className="text-[17px] md:text-[18px] mt-2 font-sf-pro-rounded">
                Stay connected with parents by sending <br />real-time updates about their child's <br />activities, meals, naps, and more, right <br />from your dashboard.
              </p>
            </div>
          </div>

          {/* Feature Box 3 */}
          <div className="relative w-[405px] h-[473px] mb-10">
            <img src={container3} alt="container3" className="object-cover" />
            <div className="absolute top-[57%] left-6 transform -translate-y-1/2 text-left text-black">
              <h4 className="text-[38px] md:text-[48px] font-semibold font-quicksand text-black">Automate </h4>
              <h4 className="font-courgette text-black text-[38px] md:text-[48px] font-semibold mt-0">Payments</h4>
              <p className="text-[17px] md:text-[18px] mt-2 font-sf-pro-rounded">
                Never worry about chasing payments <br />again. Our system automatically <br />generates bills, send reminders, and <br />processes payments, saving you time and <br />effort.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <h3 className="uppercase text-[16px] md:text-[18px] font-sf-pro-rounded text-[#7047EB]">Features</h3>
        <div>
          <h2 className="font-semibold font-sf-pro-rounded text-[38px] md:text-[48px]">
            Simplify Your Daily <br />
            Operations with <span className="font-semibold font-courgette text-[#7047EB]">Ease</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[1198px] h-auto lg:h-[717px] mt-14 gap-6">
  {/* Text Container */}
  <div className="bg-[#F1EDFD] w-full lg:w-[589px] h-auto lg:h-[717px] text-left p-5 flex flex-col justify-between rounded-[16px]">
    {/* Title */}
    <div>
      <h3 className="text-[#7047EB] text-[18px] font-sf-pro-rounded uppercase mt-6">
        Building Trust Through Seamless Communication
      </h3>
      <h2 className="text-[32px] lg:text-[48px] font-sf-pro-rounded font-semibold mt-6">
        Keep Parents Connected Every Step of the Way
      </h2>
      <p className="font-sf-pro-rounded text-[16px] lg:text-[18px] mt-6 text-[#666D80]">
        With our system, parents can stay informed with real-time <br />
        notifications, daily reports, and photos of their child’s activities. <br />
        Whether it's nap time, snack time, or a special moment, they’ll <br />
        never miss a thing.
      </p>
    </div>

    {/* Download Link */}
    <div className="flex items-center space-x-3 mt-auto mb-10">
      <p className="font-sf-pro-rounded text-[16px] lg:text-[18px] text-[#7047EB]">
        Download the Parent App
      </p>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img src={Vector} alt="Vector" className="w-[24px] h-[24px]" />
      </a>
    </div>
  </div>

  {/* Image Container */}
  <div className="hidden lg:flex w-[589px] h-[717px] items-center justify-center">
    <img
      src={ElementUI_1}
      alt="ElementUI_1"
      className="w-[576px] h-[602px]"
    />
  </div>
</div>

<div className="flex flex-col lg:flex-row-reverse justify-between items-start w-full lg:w-[1198px] h-auto lg:h-[717px] mt-14 gap-6">
  {/* Text Container */}
  <div className="bg-[#F1EDFD] w-full lg:w-[589px] h-auto lg:h-[717px] text-left p-5 flex flex-col justify-between rounded-[16px]">
    {/* Title */}
    <div>
      <h3 className="text-[#7047EB] text-[18px] font-sf-pro-rounded uppercase mt-6">
        Overline
      </h3>
      <h2 className="text-[32px] lg:text-[48px] font-sf-pro-rounded font-semibold mt-6">
        Manage Your Staff and Schedules Without the Hassle
      </h2>
      <p className="font-sf-pro-rounded text-[16px] lg:text-[18px] mt-6 text-[#666D80]">
        Create staff schedules, and track availability with just a few clicks.
        Our easy-to-use calendar lets you manage your team efficiently, ensuring everyone is where they need to be.
      </p>
    </div>

    {/* Download Link */}
    <div className="flex items-center space-x-3 mt-auto mb-10">
      <p className="font-sf-pro-rounded text-[16px] lg:text-[18px] text-[#7047EB]">
        Create an Account
      </p>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img src={Vector} alt="Vector" className="w-[24px] h-[24px]" />
      </a>
    </div>
  </div>

  {/* Image Container */}
  <div className="hidden lg:flex w-[589px] h-[717px] items-center justify-center">
    <img
      src={ElementUI_2}
      alt="ElementUI_2"
      className="w-[576px] h-[602px]"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default FeatureSection;
