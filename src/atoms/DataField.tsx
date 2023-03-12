import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
const DataField = () => {
  const infoGraphics = [
    {
      icon: <BsFillPersonFill />,
      text: "90+",
      desc: "Users",
    },
    {
      icon: <FaServer />,
      text: "50+",
      desc: "Server",
    },
  ];
  return (
    <div>
      <div className="bg-white drop-shadow-lg w-full  py-[37px] px-[90px] mt-10">
        <div className="flex gap-4">
          {infoGraphics.map((info) => {
            return (
              <>
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
                <div className="rotate-90">
                  <AiOutlineLine size={55} className="text-gray-lz" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataField;
