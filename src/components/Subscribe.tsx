import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-orange-light-lz rounded-[15px] border-gray-lz drop-shadow-2xl mb-16">
      <div className="flex justify-around w-full px-[70px] py-[60px] items-center">
        {/* Outer subscribe div */}
        <div className="flex flex-col">
          {/* subscribe */}
          <div className="font-rubik font-medium text-[35px] leading-[45px] text-dark-blue-lz">
            Subscribe Now for
            <span className="block font-rubik font-normal text-[35px]">
              Get Special Features!
            </span>
          </div>
          {/* subscribe-below-text */}
          <div className="font-rubik font-normal text-[16px] leading-[45px] text-gray-lz">
            Let's subscribe with us and find the fun.
          </div>
        </div>
        {/* Button of Subscirbe */}
        <button
          type="submit"
          className="bg-orange-lz h-[60px] w-[250px] rounded-[15px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
        >
          <p className="font-rubik font-bold text-white-lz text-[16px] leading-[25px]">
            Subscribe
          </p>
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
