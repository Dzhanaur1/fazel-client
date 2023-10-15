import Link from "next/link";
import React from "react";
import { getProductByID } from "@/utils/getData";

const CatalogItem = (props) => {
  return (
    <Link
      href="catalog/item/1"
      className=" relative flex w-full h-full items-center flex-col hover:shadow-lg p-3 border border-neutral-300 rounded-lg scalesImg  "
    >
      <img src={props.img} className=" object-contain h-[209px] w-auto" />
      <div className=" my-3 w-full flex flex-col h-full justify-between">
        <h3 className=" text-base lg:text-xl mt-2 ">{props.name}</h3>

        <p className=" lg:text-2xl  mt-4 font-semibold">
          {props.price == 0 ? "По запросу" : `от ${props.price} руб`}
        </p>
      </div>
    </Link>
  );
};

export default CatalogItem;
