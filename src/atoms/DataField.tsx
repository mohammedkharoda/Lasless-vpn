import React from "react";
import { UilServer } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
const DataField = () => {
  const infoGraphics = [
    {
      icon: <UilUser />,
      text: "90+",
      desc: "Users",
    },
    {
      icon: <UilServer />,
      text: "50+",
      desc: "Server",
    },
    {
      icon: <UilLocationPoint />,
      text: "30+",
      desc: "Locations",
    },
  ];
  return (
    <div className="bg-white drop-shadow-lg w-full  py-[37px] px-[90px] mt-10">
      <div className="flex justify-between">
        {infoGraphics.map((info) => {
          return (
            <>
              <div className="flex gap-5">
                <div className="bg-orange-light-lz w-fit flex items-center p-5 rounded-full">
                  <div className="text-orange-lz">{info.icon}</div>
                </div>
                <div>
                  <div className="text-[25px] text-dark-blue-lz leading-7 font-bold">
                    {info.text}
                  </div>
                  <div className="font-normal text-[20px] leading-7">
                    {info.desc}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DataField;
