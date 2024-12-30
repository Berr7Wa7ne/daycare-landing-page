import React from 'react';
import PearShaped2 from '../../assets/PearShaped2.jpg';

const AuthSideDesign: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <img
        src={PearShaped2}
        alt="Image"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default AuthSideDesign;
