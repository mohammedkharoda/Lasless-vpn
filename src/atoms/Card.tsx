import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface Props {
  name: string;
  img: string;
  rating: string;
  reviewText: string;
  address: string;
  active: boolean;
}

const Card: React.FC<Props> = ({
  name,
  img,
  rating,
  reviewText,
  address,
  active,
}) => {
  return (
    <>
      <div
        className={`border-[2px] border-gray-lz ${
          active ? "border-orange-lz" : ""
        } w-[400px] rounded-[10px] gap-4 p-[30px] h-[230px]`}
      >
        <div className="flex gap-4 items-center justify-around">
          {/* user image */}
          <img src={img} alt="user-image" />
          {/* designation */}
          <p className="font-rubik font-medium text-[18px] [text-align-last:left] text-dark-blue-lz leading-[20px]">
            {name}
            <span className="font-rubik font-normal text-[14px] leading-[30px] text-gray-lz block [text-align-last:center">
              {address}
            </span>
          </p>
          {/* rating */}
          <p className="font-rubik font-normal text-[16px] leading-[30px] text-dark-blue-lz">
            {rating}
          </p>
          {/* start */}
          <img src="/Images/star.svg" />
        </div>
        <div>
          <p className="font-rubik font-normal text-[18px] leading-[30px] text-dark-blue-lz my-[20px]">
            {reviewText}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
