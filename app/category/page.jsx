import React from "react";
import data from "./categories.json";
import Link from "next/link";
import Title from "../components/Title";

const CategoriesList = () => {
  const categories = data.categories || [];
  console.log(data);
  const topCategories = categories.slice(0, 2);
  const bottomCategories = categories.slice(2);
  return (
    <div className="container mx-auto  ">
      <Title text={"Каталог"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-white">
        {topCategories.map((category, i) => (
          <div
            key={i}
            className=" bg-black relative overflow-hidden  w-full h-[400px] lg:h-[400px]"
          >
            <img
              className=" hover:scale-125 transition-all duration-300 object-cover w-full h-full opacity-60"
              src={category.image}
              alt=""
            />

            <div className=" absolute bottom-8 left-5 flex flex-col gap-5">
              <h2 className=" text-base lg:text-lg font-semibold uppercase">
                {category.name}
              </h2>
              <div>
                <Link
                  href={"category/" + category.id}
                  className="btn btn--out-light"
                >
                  Перейти
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-3 grid  grid-cols-1 lg:grid-cols-3 gap-3 text-white">
        {bottomCategories.map((category, i) => (
          <div
            key={i}
            className="  overflow-hidden bg-black relative  w-full h-[400px] lg:h-[400px]"
          >
            <img
              className="hover:scale-125 transition-all duration-300 object-cover w-full h-full  opacity-60"
              src={category.image}
              alt=""
            />

            <div className=" absolute bottom-8 left-5 flex flex-col gap-5">
              <h2 className=" text-base lg:text-lg font-semibold uppercase">
                {category.name}
              </h2>
              <div>
                <Link
                  href={"category/" + category.id}
                  className="btn btn--out-light "
                >
                  Перейти
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
