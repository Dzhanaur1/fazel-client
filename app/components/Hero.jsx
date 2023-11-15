import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="  bg-[url('/hero.webp')] bg-cover bg-no-repeat h-[400px] md:h-[600px] lg:h-[100vh]  ">
      <div className=" w-[100%] mx-auto h-[100%] max-sm:backdrop-blur-sm ">
        <div className="con h-full flex justify-center">
          <div className=" px-2  h-[100%] flex justify-center  items-center  flex-col max-w-2xl text-center ">
            <h1 className=" text-2xl last-of-type: sm:text-5xl leading-relaxed font-bold text-white">
              Детские спортивные и игровые площадки
            </h1>
            <p className="mt-4  text-neutral-100 text-sm  sm:text-base">
              Широкий выбор высококачественного оборудования для детских
              площадок благоустройства высокого качества по привлекательным
              ценам.
            </p>
            <div className="mt-8">
              <Link href="/category" className="btn btn--out-light">
                Перейти в каталог
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
