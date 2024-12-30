import React from 'react';
import mail from '../../assets/mail.png';
import key from '../../assets/key.png';
import user from '../../assets/user.png';
import google from '../../assets/google.png';

const SignUp: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full h-full px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="w-full max-w-[496px]">
        <h2 className="text-center font-sf-pro-rounded font-semibold text-[24px] sm:text-[32px] mb-1">
          Create account
        </h2>
        <p className="text-center text-[#666D80] font-sf-pro-rounded text-[12px] sm:text-[14px] mb-7">
          Start your 30-day free trial. Cancel anytime.
        </p>
        {/* Sign In / Sign Up Toggle Buttons */}
        <div className="flex bg-[#F9F9FB] rounded-[12px] w-full h-[56px] p-[4px] gap-[4px] mb-7">
          <button className="flex-1 h-[48px] rounded-[8px] py-3 px-4 text-[#666D80]">
            Sign In
          </button>
          <button className="flex-1 h-[48px] rounded-[8px] py-3 px-4 bg-white border border-[#DFE1E6]">
            Sign Up
          </button>
        </div>
        {/* Input Fields */}
        <form className="flex flex-col space-y-4">
          {/* Full Name */}
          <div>
            <p className="font-sf-pro-rounded font-semibold text-[#666D80] text-[14px]">
              Full name
            </p>
            <div className="w-full h-[56px] flex items-center border border-gray-300 rounded-lg">
              <div className="flex items-center justify-center w-[50px] h-full border-r border-gray-300">
                <img src={user} alt="User Icon" className="w-[20px] h-[20px]" />
              </div>
              <input
                type="text"
                placeholder="John Doe"
                className="flex-1 p-2 text-[16px] font-sf-pro-rounded text-gray-600 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <p className="font-sf-pro-rounded font-semibold text-[#666D80] text-[14px]">
              Email
            </p>
            <div className="w-full h-[56px] flex items-center border border-gray-300 rounded-lg">
              <div className="flex items-center justify-center w-[50px] h-full border-r border-gray-300">
                <img src={mail} alt="Mail Icon" className="w-[20px] h-[20px]" />
              </div>
              <input
                type="email"
                placeholder="johndoe@mail.com"
                className="flex-1 p-2 text-[16px] font-sf-pro-rounded text-gray-600 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <p className="font-sf-pro-rounded font-semibold text-[#666D80] text-[14px]">
              Password
            </p>
            <div className="w-full h-[56px] flex items-center border border-gray-300 rounded-lg">
              <div className="flex items-center justify-center w-[50px] h-full border-r border-gray-300">
                <img src={key} alt="Key Icon" className="w-[20px] h-[20px]" />
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="flex-1 p-2 text-[16px] font-sf-pro-rounded text-gray-600 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <p className="font-sf-pro-rounded text-[#808897] text-[12px]">
            Must be at least 8 characters
          </p>
        </form>

        {/* Terms and Conditions */}
        <div className="flex items-center space-x-2 mt-4 mb-4">
          <input
            type="checkbox"
            id="terms"
            className="w-5 h-5 text-[#7047EB] border border-gray-300 rounded-[6px] focus:ring-[#7047EB]"
          />
          <label
            htmlFor="terms"
            className="text-[14px] text-[#666D80] font-sf-pro-rounded"
          >
            By proceeding, you agree to the{' '}
            <span className="text-[#7047EB]">Terms and Conditions</span>
          </label>
        </div>

        {/* Create Account Button */}
        <button className="w-full h-[56px] flex justify-center items-center bg-[#7047EB] text-white text-[16px] font-sf-pro-rounded font-semibold rounded-lg focus:outline-none hover:bg-[#5c38cc] transition-colors">
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <div className="flex-1 h-[2px] bg-gray-300"></div>
          <p className="px-4 text-[#666D80] text-[14px] font-sf-pro-rounded">
            Or
          </p>
          <div className="flex-1 h-[2px] bg-gray-300"></div>
        </div>

        {/* Sign Up with Google */}
        <div className="flex items-center justify-center gap-1">
          <img src={google} alt="Google Icon" className="w-[20px] h-[20px]" />
          <p className="text-[16px] font-sf-pro-rounded font-semibold text-center">
            Sign Up with Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
