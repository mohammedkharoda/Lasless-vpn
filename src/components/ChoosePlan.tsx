import Button from "@/atoms/Buttons";
import React from "react";

const ChoosePlan = () => {
  const Plans = [
    {
      currentPlan: "Free Plan",
      price: "Free",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      image: "/Images/free.svg",
      tick: "/Images/ticks.svg",
    },
    {
      currentPlan: "Standard Plan",
      price: "$9 / mo",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      image: "/Images/Standard.svg",
      tick: "/Images/ticks.svg",
    },
    {
      currentPlan: "Premium Plan",
      price: "$12 / mo",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      image: "/Images/Standard.svg",
      tick: "/Images/ticks.svg",
    },
  ];
  // display: flex;
  // flex-direction: column;
  // align-items: baseline;
  // justify-content: space-between;
  // width: 100%;
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
      <div className="flex gap-5 justify-center max-h-[760px]">
        {Plans.map((plans) => {
          return (
            <div className="border-[2px] rounded-xl py-[60px]  mt-5 border-gray-lz flex flex-col justify-between w-full">
              <div className="flex flex-col gap-10 items-center">
                <div>
                  <img src={plans.image} />
                </div>
                <div className="w-full flex flex-col gap-5 items-center">
                  {plans.features.map((plan) => {
                    return (
                      <>
                        <div className="flex gap-5">
                          <img src={plans.tick} />
                          <p key={plan.length}>{plan}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="mx-auto flex flex-col gap-5">
                <p className="text-center font-rubik font-medium text-[25px] leading-[30px] mt-8">
                  {plans.price}
                </p>
                <Button label="Select" outline={true} navbar={false} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChoosePlan;
