import Link from "next/link";
import React from "react";

const Feature = () => {
  return (
    <div className=" con  md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3 px-2">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            Современнный дизайн
          </h1>
          <p className="text-sm md:text-base leading-6 mt-4  text-gray-600">
            Наша продукция отличается не только высоким качеством и надежностью,
            но и уникальным дизайном, который привлекает внимание и создает
            уютную атмосферу на улицах. Если вы хотите, чтобы ваш город был не
            только функциональным, но и красивым, то наши изделия - это именно
            то, что вам нужно.
          </p>
          <Link
            href={"/catalog"}
            aria-label="view catalogue"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline"
          >
            Посмотреть каталог
            <svg
              className="ml-2 mt-1"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33325 4H10.6666"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6.66667L10.6667 4"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 1.33398L10.6667 4.00065"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="flex w-full h-full max-h-[200px] md:max-h-[350px] bg-red-200">
            <img
              src="feature/bench.webp"
              alt="apartment design"
              className=" object-cover"
            />
          </div>
          <div className="flex  gap-2 md:gap-5 mt-2 md:mt-5">
            <div className=" flex  flex-1 max-h-[300px] md:max-h-[350px] ">
              <img
                src="feature/bench-2.webp"
                className=" object-cover object-bottom"
                alt="kitchen"
              />
            </div>
            <div className=" flex  flex-1  max-h-[350px]">
              <img
                src="feature/urn.webp"
                className="object-cover object-bottom"
                alt="sitting room"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
