import React, { useRef, useState } from 'react';
import PearShaped from '../../assets/PearShaped.jpg';
import Khalifa from '../../assets/Khalifa.mp4';

const PlayPauseButton: React.FC<{ isPlaying: boolean; onClick: () => void }> = ({ isPlaying, onClick }) => (
  <div
    onClick={onClick}
    className="absolute w-16 h-16 bg-white flex items-center justify-center rounded-full cursor-pointer z-50 border-2 border-red-500"
    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
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

const NewsletterSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log('Rendering PlayPauseButton, isPlaying:', isPlaying);

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
    <div className="hidden md:block relative bg-purple-100 mx-auto rounded-xl overflow-hidden mt-72">
      {/* Background Image */}
      <img
        src={PearShaped}
        alt="Newsletter Background"
        className="w-full h-full object-cover"
      />

      {/* Text Section */}
      <div className="absolute top-[220px] left-[120px] z-10">
        <h2 className="text-[40px] font-semibold font-sf-pro-rounded leading-snug">
          Subscribe to our{" "}
          <span className="font-semibold font-courgette">Newsletter</span> <br /> for
          daily updates
        </h2>
      </div>

      {/* Pear-shaped Video */}
      <div
        className="absolute top-7 left-[59%] w-[120%] h-[120%] z-10"
        style={{
          clipPath: `path('M197.996 9.92375C131.872 17.9097 106.158 45.3855 89.4802 125.63C80.937 166.842 79.91295 169.194 50.1411 216.534C4.96643 288.527 -3.11777 350.495 25.3137 407.18C59.9566 476.332 131.635 509.351 241.057 506.676C432.333 501.964 524.634 373.504 444.658 223.383C435.456 206.109 428.103 194.444 400.536 153.234C393.037 141.882 380.891 121.662 373.647 108.211C335.719 37.9016 301.279 12.6005 238.335 8.64852C219.241 7.43733 217.692 7.47736 197.996 9.92375Z')`,
        }}
      >
        <div className="relative w-full h-full">
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            controls
          >
            <source src={Khalifa} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Play/Pause Button */}
          <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPause} />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
