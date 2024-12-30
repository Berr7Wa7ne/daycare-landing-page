import React, { useRef, useState } from 'react';
import Khalifa from '../../assets/Khalifa.mp4';
import Stars from '../../assets/Stars.png';

const PlayPauseButton: React.FC<{ isPlaying: boolean; onClick: () => void }> = ({ isPlaying, onClick }) => (
  <div
    onClick={onClick}
    className="z-10 w-16 h-16 bg-white flex items-center justify-center rounded-full cursor-pointer"
  >
    {isPlaying ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-gray-700" viewBox="0 0 16 16">
        <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm5 0A.5.5 0 0 1 11 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-gray-700" viewBox="0 0 16 16">
        <path d="M11.596 8.697l-6-4A.5.5 0 0 0 5 5v6a.5.5 0 0 0 .796.403l6-4a.5.5 0 0 0 0-.806z" />
      </svg>
    )}
  </div>
);

const TestimonialSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="mt-10">
      <div className="container mx-auto text-center p-4">
        <h3 className="uppercase text-[14px] md:text-[18px] font-sf-pro-rounded text-[#7047EB]">Testimonials</h3>
        <h2 className="font-semibold font-sf-pro-rounded text-[32px] md:text-[56px]">
          Hear from Daycare Owners <br />Who Love Our{' '}
          <span className="font-semibold font-courgette text-[#7047EB]">Solution</span>
        </h2>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden mt-6 space-y-6">
        {/* Text Section */}
        <div className="bg-[#F9FAFB] p-4 rounded-[12px]">
          <img src={Stars} alt="Stars" />
          <h4 className="font-semibold text-[20px] font-sf-pro-rounded mt-4">
            Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.
          </h4>
          <p className="text-[16px] font-sf-pro-rounded font-semibold mt-4">— Renee Wells</p>
          <p className="text-[14px] font-sf-pro-rounded text-[#666D80] mt-2">Happy Days Daycare</p>
        </div>

        {/* Video Section */}
        <div className="relative w-full h-[200px] bg-black rounded-[12px]">
          <video ref={videoRef} src={Khalifa} className="absolute w-full h-full rounded-[12px] object-cover" />
          <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPause} />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center w-full mt-6">
        <div className="w-[1216px] h-[464px] bg-[#F9F9FB] border border-[#DFE1E6] rounded-[16px] p-2 relative">
          <div className="flex items-center w-full h-full rounded-[12px] bg-white p-[32px] border border-[#DFE1E6] relative">
            <div className="flex-[2] h-full bg-[#F9FAFB] rounded-l-[16px] flex flex-col justify-start items-start p-[34px]">
              <img src={Stars} alt="Stars" />
              <h4 className="font-semibold text-[36px] font-sf-pro-rounded mt-4">
                Love the simplicity of the service and <br />the prompt customer support. We can’t <br />imagine working without it.
              </h4>
              <p className="text-[18px] font-sf-pro-rounded font-semibold mt-4">— Renee Wells</p>
              <p className="text-[16px] font-sf-pro-rounded text-[#666D80] mt-2">Happy Days Daycare</p>
            </div>
            <div className="flex-[1] relative w-full h-full rounded-r-[16px] bg-black flex items-center justify-center">
              <video ref={videoRef} src={Khalifa} className="absolute w-full h-full rounded-r-[16px] object-cover" />
              <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPause} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
