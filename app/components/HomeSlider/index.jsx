"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Slide from "./Slide";

const Slider = () => {
  const slider = [
    {
      title: 'Скамейка "Мимимум"',
      price: 35000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "/slider/minimal.png",
    },
    {
      title: 'Урна "Альфа"',
      price: 20000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "/slider/alpha.png",
    },
    {
      title: 'Скамейка "Сигма"',
      price: 37000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "/slider/sigma.png",
    },
    {
      title: 'Скамейка "Мимимум"',
      price: 35000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "/slider/minimal.png",
    },
    {
      title: 'Урна "Альфа"',
      price: 20000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "/slider/alpha.png",
    },
    {
      title: 'Скамейка "Сигма"',
      price: 37000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "/slider/sigma.png",
    },
  ];

  return (
    <div className="con mb-4 ">
      {/* <h3 className="font-semibold text-base md:text-2xl my-6">
        Популярные товары
      </h3> */}
      <Swiper
        modules={[Navigation, Scrollbar]}
        breakpoints={{
          640: {
            slidesPerView: 2,

            scrollbar: {
              draggable: false,
              hide: false,
            },
          },
          1024: {
            slidesPerView: 3.3,
          },
        }}
        spaceBetween={15}
        slidesPerView={1.3}
        scrollbar={{ draggable: true, hide: true }}
      >
        {slider.map((slide, i) => (
          <SwiperSlide key={i}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
