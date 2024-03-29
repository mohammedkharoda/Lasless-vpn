import React, { useState } from "react";
import Button from "./Buttons";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
const Navigation = () => {
  let Links = [
    { name: "About", link: "/" },
    { name: "Features", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Testimonials", link: "/" },
    { name: "Help", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full relative top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="cursor-pointer flex items-center">
            <span className=" mr-1 pt-2">
              <img src="/Images/Logo.svg" alt="logo" />
            </span>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <HiOutlineX /> : <HiMenu />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="duration-500 font-normal text-[16px] leading-1 font-rubik text-gray-lz hover:text-black"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${
              open ? "top-[620%] right-[20%]" : "top-[-490px]"
            }`}
          >
            <div
              className={`flex flex-col justify-center items-start gap-4 md:block`}
            >
              <Button label="Sign In" outline={false} navbar={true} />
              <Button label="Sign Up" outline={true} navbar={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
