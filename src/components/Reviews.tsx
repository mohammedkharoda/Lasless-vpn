import Card from "@/atoms/Card";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Reviews = () => {
  const data = [
    {
      reviewText:
        "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems”.",
      name: "Viezh Robert",
      img: `/Images/user-1.svg`,
      address: "Warsaw, Poland",
      rating: "4.5",
    },
    {
      reviewText:
        "“I like it because I like to travel far and still can connect with high speed.",
      name: "Yessica Christy",
      img: `/Images/user-2.svg`,
      address: "Shanxi, China",
      rating: "4.5",
    },
    {
      reviewText:
        "“This is very unusual for my business that currently requires a virtual private network that has high security.” ",
      name: "Kim Young Jou",
      img: `/Images/user-3.svg`,
      address: "Seoul, South Korea",
      rating: "4.5",
    },
    {
      reviewText:
        "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.”",
      name: "Esther Howard",
      img: `/Images/user-4.svg`,
      address: "New York, USA",
      rating: "4.1",
    },
    {
      reviewText:
        "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam”.",
      name: "Ronald Richards",
      img: `/Images/user-5.svg`,
      address: "Sydeny,Austraila",
      rating: "4.5",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      setActiveIndex(nextIndex);
      swiperRef.current?.swiper.slideTo(nextIndex);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [activeIndex, data.length, swiperRef]);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex - 1);
  };

  return (
    <>
      <div className="[text-align-last:center] mt-5">
        <p className="font-rubik text-[35px] leading-[50px] text-dark-blue-lz font-medium">
          Trusted by Thousand of
          <span className="font-rubik text-[35px] leading-[50px] text-dark-blue-lz block font-medium">
            Happy Customer
          </span>
        </p>
        <p className="font-rubik font-normal text-[16px] leading-[30px] text-dark-blue-lz mt-5">
          These are the stories of our customers who have joined us with great
          <span className="block font-rubik font-normal text-[16px] leading-[30px] text-dark-blue-lz">
            pleasure when using this crazy feature.
          </span>
        </p>
      </div>
      <div className="flex justify-between my-10">
        {/*Swiper Handler*/}
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          centeredSlides={true}
          centeredSlidesBounds={true}
        >
          {data.map((internalUser, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  reviewText={internalUser.reviewText}
                  name={internalUser.name}
                  address={internalUser.address}
                  rating={internalUser.rating}
                  img={internalUser.img}
                  active={activeIndex === index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
