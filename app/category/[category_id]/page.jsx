import React from "react";
import data from "../categories.json";
import Link from "next/link";
import Title from "@/app/components/Title";
const Category = ({ params: { category_id } }) => {
  const [category] = data.categories.filter((obj) => obj.id === category_id);
  console.log(category.subcategories);

  return (
    <div className="container mx-auto">
      <Title text={category.name} />
      <div className=" text-white grid grid-cols-1 lg:grid-cols-2 gap-3">
        {category.subcategories.map((subCategory, i) => (
          <div
            key={i}
            className=" bg-black relative overflow-hidden  w-full h-[400px] lg:h-[400px]"
          >
            <img
              className=" hover:scale-125 transition-all duration-300 object-cover w-full h-full opacity-60"
              src={category?.image}
              alt=""
            />

            <div className=" absolute bottom-8 left-5 flex flex-col gap-5">
              <h2 className=" text-base lg:text-lg font-semibold uppercase">
                {subCategory.name}
              </h2>
              <div>
                <Link
                  href={category_id + "/" + subCategory.id}
                  className="btn btn--out-light"
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

export default Category;
