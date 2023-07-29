import Link from "next/link";
import React from "react";

const CatalogItem = ({ id, name, category, price, images }) => {
  return (
    <Link
      href="catalog/item/1"
      className=" relative flex w-full h-full items-center flex-col justify-center hover:shadow-lg p-3 border border-neutral-300 rounded-lg scalesImg  "
    >
      <img src={images} className="" />
      <div className="w-full flex flex-col">
        <h3 className=" text-base lg:text-lg font-medium">{name}</h3>
        <div className="my-1 lg:my-3 flex flex-col gap-1">
          <p className=" text-sm lg:text-base text-gray-400">
            Материал: сталь,дерево
          </p>
          <p className="text-sm lg:text-base text-gray-400">
            Размеры: 1500-3000х600х860 мм
          </p>
        </div>

        <p className=" lg:text-2xl font-medium ">от {price}</p>
      </div>
    </Link>
  );
};

export default CatalogItem;
