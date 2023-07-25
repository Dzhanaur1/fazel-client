"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const GallerySlider = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Устанавливаем начальное значение для активного слайда

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };
  const slides = [
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
  ];
  //   slides.map((slides) => {
  //     console.log(slides);
  //   });
  return (
    <Swiper
      slidesPerView={1.3}
      spaceBetween={10}
      breakpoints={{
        640: {
          centeredSlides: true,
        },
      }}
      centeredSlides={true}
      initialSlide={1}
      parallax={true}
      onSlideChange={handleSlideChange}
      className="con" // Обработчик события onSlideChange
    >
      {slides.map((image, i) => (
        <SwiperSlide
          key={i}
          className={`w-full max-h-[300px] lg:max-h-[600px] flex  blur-[3px] ${
            i === activeSlide ? "slide-active" : ""
          } `}
        >
          <img src={image} className="w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
