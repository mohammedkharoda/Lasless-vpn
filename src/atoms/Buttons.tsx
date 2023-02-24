import React, { FC } from "react";

interface Props {
  label: string;
  outline?: boolean;
}

const Button: FC<Props> = ({ label, outline }) => {
  return (
    <button
      className={`${
        outline
          ? `border-orange-lz border-2 text-[16px] text-pinkish-lz font-normal font-rubik py-2 px-6 rounded-[50px] md:ml-8 hover:bg-orange-light-lz
      duration-500`
          : `text-dark-blue-lz font-normal text-[16px] leading-1 font-rubik  py-2 px-2 md:ml-8 `
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
