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
      <div className="flex gap-5">
        {Plans.map((plans) => {
          return (
            <div className="border-[2px] rounded-xl w-fit py-[60px] px-[70px] mt-5 border-gray-lz">
              <div className="flex flex-col gap-10 items-center">
                <div>
                  <img src={plans.image} />
                </div>
                <div className="flex flex-col gap-10">
                  <p className="text-[18px] font-rubik leading-[30px] font-medium text-center">
                    {plans.currentPlan}
                  </p>
                  <div className="flex gap-5">
                    <img src={plans.tick} />
                    <p className="w-full">{plans.features}</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-8 flex flex-col gap-5">
                <p className="text-center font-rubik font-medium text-[25px] leading-[30px]">
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
