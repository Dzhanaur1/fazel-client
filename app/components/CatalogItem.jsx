import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatalogItem = (props) => {
  console.log(props.index);
  return (
    <Link
      href={`/catalog/item/${props.index}`}
      className=" relative flex w-full h-full items-center flex-col hover:shadow-lg p-3 border border-neutral-300 rounded-lg scalesImg  "
    >
      <Image
        width={400}
        height={400}
        src={props.image}
        className=" object-contain h-[209px] w-auto"
      />
      <div className=" my-3 w-full flex flex-col h-full justify-between">
        <h3 className=" text-base lg:text-xl mt-2 ">{props.name}</h3>

        <p className=" lg:text-2xl  mt-4 font-semibold">
          {props.price == 0
            ? "По запросу"
            : `от ${new Intl.NumberFormat("ru-RU").format(props.price)} руб`}
        </p>
      </div>
    </Link>
  );
};

export default CatalogItem;
