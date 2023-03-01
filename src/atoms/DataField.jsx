import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
const DataField = () => {
  return (
    <div>
      <div className="bg-white drop-shadow-lg w-full  py-[37px] px-[90px] mt-10">
        {/* users */}
        <div className="flex gap-8">
          <div className="bg-orange-light-lz w-fit p-[16px] rounded-full">
            <BsFillPersonFill className="text-orange-lz" size={20} />
          </div>
          <div>
            <div className="text-[25px] text-dark-blue-lz leading-7 font-bold">
              90+
            </div>
            <div className="font-normal text-[20px] leading-7">Users</div>
          </div>
          <div className="rotate-90">
            <AiOutlineLine size={55} className="text-gray-lz" />
          </div>
          {/* server */}
          <div className="bg-orange-light-lz w-fit p-[16px] rounded-full">
            <FaServer className="text-orange-lz" size={20} />
          </div>
          <div>
            <div className="text-[25px] text-dark-blue-lz leading-7 font-bold">
              50+ 
            </div>
            <div className="font-normal text-[20px] leading-7">Server</div>
          </div>
          <div className="rotate-90">
            <AiOutlineLine size={55} className="text-gray-lz" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataField;
