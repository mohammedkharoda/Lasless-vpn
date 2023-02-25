import React, { FC } from "react";

interface CTATitle {
  title: string;
}

const CTAButtons: FC<CTATitle> = ({ title }) => {
  return (
    <div className="bg-orange-lz rounded-[10px]">
      <div className="text-center font-bold text-[16] leading-6 py-[18px] px-[78px] text-white-lz cursor-pointer">
        {title}
      </div>
    </div>
  );
};

export default CTAButtons;
