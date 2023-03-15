import Button from "@/atoms/Buttons";
import React from "react";

const ChoosePlan = () => {
  const FreePlan = [
    {
      feature: "Unlimited Bandwitch",
    },
    {
      feature: "Encrypted Connection",
    },
    {
      feature: "No Traffic Logs",
    },
    {
      feature: "Works on All Devices",
    },
  ];
  return (
    <div>
      <div className="mt-16">
        <p className="text-center font-rubik font-medium text-[35px] leading-[50px]">
          Choose Your Plan
        </p>
        <p className="text-center font-rubik font-medium text-[16px] leading-[30px]">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="border-2 rounded-xl w-fit py-[60px] px-[70px] mt-5">
        <div className="flex flex-col gap-10 items-center">
          <div>
            <img src="/Images/free.svg" />
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-[18px] font-rubik leading-[30px] font-medium text-center">
              Free Plan
            </p>
            {FreePlan.map((freePlan) => {
              return (
                <div className="flex gap-5">
                  <img src="/Images/ticks.svg" />
                  <p>{freePlan.feature}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto mt-8 flex flex-col gap-5">
          <p className="text-center font-rubik font-medium text-[25px] leading-[30px]">
            Free
          </p>
          <Button label="Select" outline={true} navbar={false} />
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
