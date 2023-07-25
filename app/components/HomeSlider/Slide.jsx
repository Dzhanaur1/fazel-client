import Link from "next/link";
import React from "react";

const Slide = (slide) => {
  return (
    <div className=" bg-neutral-100 flex flex-col items-center gap-2 justify-center">
      <img
        src={slide.src}
        alt=""
        className="w-full lg: h-[300px] lg:h-[400px] object-contain "
      />
      <h3 className="text-xl font-bold mt-4">{slide.title}</h3>
      <p className="text-gray-900 text-lg mt-2">от {slide.price} руб</p>
      <Link href="/catalog/item/1" className="btn btn--fill-black btn--lx my-4">
        Перейти
      </Link>
    </div>
  );
};

export default Slide;
