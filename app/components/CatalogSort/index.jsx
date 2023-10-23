"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { setOrderValue } from "@/redux/filter/slice";
import { useDispatch, useSelector } from "react-redux";

const CatalogSort = () => {
  const sortOrders = [
    { name: " возрастанию", href: "ASC", current: true },
    { name: "убыванию", href: "DSC", current: false },
  ];
  const dispatch = useDispatch();
  const orderSelector = useSelector((state) => state.filter.orderValue);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     const _event = event;

  //     if (sortRef.current && !_event.path.includes(sortRef.current)) {
  //       setOpen(false);
  //     }
  //   };

  //   document.body.addEventListener("click", handleClickOutside);

  //   return () => document.body.removeEventListener("click", handleClickOutside);
  // }, []);
  const [selectedOrder, setSelectedOrder] = useState("");
  const sortRef = useRef();
  const orderOnCLick = (order) => {
    setSelectedOrder(order.name);
    dispatch(setOrderValue(order.href));
    setOpen(!isOpen);
    console.log(orderSelector);
  };
  const [isOpen, setOpen] = useState(false);
  return (
    <div ref={sortRef} className="flex justify-end ">
      <div className="flex flex-column relative">
        <div className={`flex  items-center gap-2 `}>
          <b
            onClick={() => setOpen(!isOpen)}
            className=" cursor-pointer text-sm lg:text-base"
          >
            Сортировка по:
          </b>
          {selectedOrder == "" && (
            <svg
              className={` duration-75 transition-all ${
                isOpen ? "rotate-180" : ""
              }`}
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
          )}

          <span onClick={() => setOpen(!isOpen)} className=" cursor-pointer">
            {selectedOrder}
          </span>
        </div>
        {isOpen && (
          <div className=" z-50 absolute top-[40px] right-0 py-2 rounded-lg bg-white shadow-lg">
            <ul className=" flex flex-col gap-1 p-3 ">
              {sortOrders.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => orderOnCLick(obj)}
                  className={`py-1 px-3 rounded-md transition-all duration-150 cursor-pointer hover:bg-neutral-100 ${
                    selectedOrder === obj.name ? " !bg-neutral-300" : ""
                  }`}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogSort;
