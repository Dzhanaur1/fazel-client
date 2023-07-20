"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Slider = () => {
  const slider = [
    {
      title: 'Скамейка "Мимимум"',
      price: 35000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "slider/minimal.png",
    },
    {
      title: 'Урна "Альфа"',
      price: 20000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "slider/alpha.png",
    },
    {
      title: 'Скамейка "Сигма"',
      price: 37000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "slider/sigma.png",
    },
    {
      title: 'Скамейка "Мимимум"',
      price: 35000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "slider/minimal.png",
    },
    {
      title: 'Урна "Альфа"',
      price: 20000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "slider/alpha.png",
    },
    {
      title: 'Скамейка "Сигма"',
      price: 37000,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      src: "slider/sigma.png",
    },
  ];

  return (
    <div className="con mb-20">
      <h3 className="font-semibold text-base md:text-2xl my-6">
        Популярные товары
      </h3>
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
            <div className=" bg-neutral-100 flex flex-col items-center gap-2 justify-center">
              <img
                src={slide.src}
                alt=""
                className="w-full lg: h-[300px] lg:h-[400px] object-contain "
              />
              <h3 className="text-xl font-bold mt-4">{slide.title}</h3>
              <p className="text-gray-900 text-lg mt-2">от {slide.price} руб</p>

              <Link href="" className="btn btn--fill-black btn--lx my-4">
                Перейти
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
