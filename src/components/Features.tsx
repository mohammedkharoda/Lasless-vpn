import React from "react";

const Features = () => {
  const features = [
    {
      feature: "powerful online protection",
    },
    {
      feature: "Internet without borders.",
    },
    {
      feature: "Supercharged VPN",
    },
    {
      feature: "No specific time limits.",
    },
  ];
  return (
    <div className="flex justify-between  gap-10">
      <div id="feature-image">
        <img src="/Images/Features.svg" alt="Illustration-2" />
      </div>
      <div className="mx-auto">
        <p className="text-[35px] font-medium font-rubik text-dark-blue-lz">
          We Provide Many
          <span className="block">Features You Can Use</span>
        </p>
        <p className="text-[16px] leading-[30px] font-normal font-rubik my-[20px]">
          You can explore the features that we provide with fun{" "}
          <span className="block">
            {" "}
            and have their own functions each feature.
          </span>
        </p>
        <div className="flex flex-col gap-5">
          {features.map((feat) => {
            return (
              <>
                <div className="flex gap-5">
                  <img src="/Images/check-circle.svg" alt="check-circle" />
                  <p className="text-[14px] leading-[30px] text-gray-lz font-normal font-rubik">
                    {feat.feature}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
