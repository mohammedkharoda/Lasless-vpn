import React from "react";

const Partners = () => {
  const partnerLogo = [
    "/Images/hulu.svg",
    "/Images/netflix.svg",
    "/Images/discord.svg",
    "/Images/reddit.svg",
    "/Images/spotify.svg",
  ];
  return (
    <div className="flex mt-[15px]">
      {partnerLogo.map((logos) => {
        return (
          <div className=" justify-center items-center mx-auto my-auto grayscale">
            <img src={logos} className="w-fit h-[130px]" />
          </div>
        );
      })}
    </div>
  );
};

export default Partners;
