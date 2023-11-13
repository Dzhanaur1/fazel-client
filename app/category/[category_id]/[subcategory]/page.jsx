"use client";

import { getAllProducts } from "@/utils/getData";
import CatalogItemSkeleton from "@/app/components/Catalog/Sceleton";
import CatalogItem from "@/app/components/CatalogItem";
import React, { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Page({ params }) {
  const sortOrders = [
    { name: " возрастанию", value: "asc" },
    { name: "убыванию", value: "desc" },
  ];
  const sortRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { subcategory } = params;
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts(subcategory, order);
        setProducts(response);
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [order]);
  const orderOnCLick = (order) => {
    setOpen(!isOpen);
    setOrder(order.value);
    setSelectedOrder(order.name);
  };
  const resetOrder = () => {
    setSelectedOrder(null);
    setOrder(null);
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="con relative flex flex-col pt-5 lg:pt-9">
        <div className="w-full flex justify-between">
          <h1 className="text-lg font-bold lg:text-2xl ">Каталог</h1>
        </div>
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

              <span className=" cursor-pointer">
                <div className="flex  justify-center items-center gap-1">
                  <p onClick={() => setOpen(!isOpen)}>{selectedOrder}</p>
                  {selectedOrder && (
                    <XMarkIcon
                      className=" w-4 h-4 text-black font-bold "
                      onClick={() => resetOrder()}
                    />
                  )}
                </div>
              </span>
            </div>
            {isOpen && (
              <div className=" z-50 absolute top-[40px] right-0 py-2 rounded-lg bg-white shadow-lg">
                <ul className=" flex flex-col gap-1 p-3 ">
                  {sortOrders.map((obj, i) => (
                    <li
                      key={i}
                      onClick={() => orderOnCLick(obj)}
                      className={` py-1 px-3 rounded-md transition-all duration-150 cursor-pointer hover:bg-neutral-100 ${
                        selectedOrder === obj.name ? " !bg-neutral-300" : ""
                      }`}
                    >
                      {/* <div className="flex  justify-center items-center gap-1">
                        {selectedOrder === obj.name && (
                          
                        )} */}

                      <p> {obj.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-10 mt-6 ">
          <div className="hidden md:block flex-1 "></div>
          <div className="flex-[4]">
            <div className="grid min-[480px]:grid-cols-2   lg:grid-cols-3  gap-x-8 gap-y-8 items-center">
              {isLoading ? (
                <React.Fragment>
                  <CatalogItemSkeleton />
                  <CatalogItemSkeleton />
                  <CatalogItemSkeleton />
                  <CatalogItemSkeleton />
                  <CatalogItemSkeleton />
                  <CatalogItemSkeleton />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {products?.map((product, i) => (
                    <CatalogItem key={i} {...product} />
                  ))}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
