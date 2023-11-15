"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";
import CatalogFilter from ".";
const MobileFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="fixed bottom-10  left-4 ">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden rounded-full p-[10px] border bg-white border-neutral-300 shadow-xl inline-flex justify-center items-center"
        >
          <FunnelIcon className="h-8 w-8 text-neutral-400  " />
        </button>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`z-[300] fixed top-0 left-0  bg-black bg-opacity-60  w-full h-full ${
          isOpen ? " visible" : " collapse"
        }`}
      ></div>
      <div
        className={`w-[70%] fixed py-3 top-0 left-0 z-[400] bg-white h-full flex flex-col shadow-2xl duration-200 trainsition  ${
          isOpen ? " translate-x-0" : " -translate-x-[100%]"
        }`}
      >
        <div className="flex items-center gap-1 border-b border-neutral-200">
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className=" ml-2 w-5 h-5" />
          </button>
          <p className="">Скрыть</p>
        </div>
        <div className="mt-4 px-3">
          <CatalogFilter />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileFilter;
