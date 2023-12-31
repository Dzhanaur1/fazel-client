import Link from "next/link";
import React from "react";

const HomeGrid = () => {
  return (
    <div className=" con my-3 lg:my-10 grid grid-cols-1 lg:grid-rows-[repeat(2,minmax(100px,300px))] md:grid-rows-[repeat(4,minmax(100px,200px))] gap-[10px] lg:grid-cols-3 grid-rows-[repeat(4,minmax(100px,150px))] lg:gap-[15px] ">
      <Link
        href="/catalog?category=bench"
        className=" relative bg-gray-100 rounded-lg  flex flex-col justify-between"
      >
        <h3 className=" absolute bottom-4 left-4 lg:text-lg font-semibold">
          Лавочки
          <span className=" ml-2">&#8594;</span>
        </h3>
        <img
          className=" absolute right-0 bottom-0 max-h-[150px] md:max-h-[100%]"
          src="home/bench.webp"
          alt=""
        ></img>
      </Link>
      <Link
        href="/catalog?category=urn"
        className=" relative bg-gray-100 rounded-lg  flex flex-col justify-between"
      >
        <h3 className=" absolute bottom-4 left-4 lg:text-lg font-semibold">
          Урны
          <span className=" ml-2">&#8594;</span>
        </h3>
        <img
          className=" absolute right-0 bottom-0 max-h-[120px] md:max-h-[100%]"
          src="home/urn.webp"
          alt=""
        ></img>
      </Link>
      <Link
        href="/catalog?category=igra"
        className=" relative bg-gray-100 rounded-lg  flex flex-col justify-between lg:row-start-2 lg:col-span-2"
      >
        <h3 className=" absolute bottom-4 left-4 lg:text-lg font-semibold">
          Игровое оборудование
          <span className=" ml-2">&#8594;</span>
        </h3>
        <img
          className=" max-w-[50%] absolute bottom-0 right-0 lg:right-5  max-h-[100%]"
          src="home/ik.webp"
          alt=""
        ></img>
      </Link>
      <Link
        href="/catalog?category=sport"
        className="relative bg-gray-100 rounded-lg  flex flex-col justify-between lg:row-start-1 lg:col-start-3 lg:row-span-2"
      >
        <h3 className=" max-w-[50%] md:max-w-none absolute bottom-4 left-4 lg:text-lg font-semibold">
          Спортивные оборудование
          <span className=" ml-2">&#8594;</span>
        </h3>
        <img
          className=" absolute right-0 bottom-[50%] translate-y-1/2 max-h-[100%]"
          src="home/sk.webp"
          alt=""
        ></img>
      </Link>
    </div>
  );
};

export default HomeGrid;
