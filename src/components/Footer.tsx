import React from "react";

const Footer = () => {
  const currentYear = new Date();
  const presentYear = currentYear.getFullYear();
  return (
    <div>
      {/* outer div */}
      <div>
        {/* for the brand logo and other description */}
        <div className="flex flex-col gap-4">
          {/* img*/}
          <img src="/Images/Logo.svg" alt="footer-logo" className="w-[149px]" />
          <p className="font-rubik font-medium text-[16px] leading-[30px] text-gray-lz max-w-[340px] ">
            LaslessVPN is a private virtual network that has unique features and
            has high security.
          </p>
          {/*  icons*/}
          <p className="font-rubik font-normal text-[16px] leading-[30px] text-gray-lz">
            {presentYear}©LaslesVPN
          </p>
        </div>
        {/* for the 3 section that is being after the logo and description */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
