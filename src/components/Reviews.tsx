import Card from "@/atoms/Card";
import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="[text-align-last:center] mt-5">
        <p className="font-rubik text-[35px] leading-[50px] text-dark-blue-lz font-medium">
          Trusted by Thousand of
          <span className="font-rubik text-[35px] leading-[50px] text-dark-blue-lz block font-medium">
            Happy Customer
          </span>
        </p>
        <p className="font-rubik font-normal text-[16px] leading-[30px] text-dark-blue-lz mt-5">
          These are the stories of our customers who have joined us with great
          <span className="block font-rubik font-normal text-[16px] leading-[30px] text-dark-blue-lz">
            pleasure when using this crazy feature.
          </span>
        </p>
      </div>
      <Card />
    </>
  );
};

export default Reviews;
