"use client";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryValue } from "@/redux/filter/slice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import Link from "next/link";
const data = [
  {
    id: 1,
    name: "Скамейки",
    query: "bench",
    href: "category=banches",
  },
  {
    id: 2,
    name: "Урны",
    query: "urn",
    href: "category=urns",
  },
  {
    id: 3,
    name: "Столы",
    query: "table",
    href: "category=tables",
  },
  {
    id: 4,
    name: "Беседки",
    query: "gazebo",
    href: "category=gazebos",
  },
];
const CatalogFilter = () => {
  const router = useRouter();
  const [selectedCategoryId, setIdSelectedCategory] = useState();

  const { orderValue } = useSelector((state) => state.filter);

  const updateURLParams = (category, order) => {
    router.push(
      `/catalog?${category.length > 0 ? `category=${category}` : ""}${
        order.length > 0
          ? `${category.length > 0 ? "&" : ""}order=${order}`
          : ""
      }`
    );
  };
  const dispatch = useDispatch();
  const selectFilter = (category) => {
    setIdSelectedCategory(category.id);
    dispatch(setCategoryValue(category.query));
    updateURLParams(category.query, orderValue);
  };
  const removeFilter = () => {
    setIdSelectedCategory(null);
    dispatch(setCategoryValue(""));
    updateURLParams("", orderValue);
  };
  const categories = data;

  return (
    <form className="flex flex-col">
      <h3 className="sr-only">Категории</h3>
      <ul
        role="list"
        className=" border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
      >
        {categories?.map((category) => (
          <li
            className={` cursor-pointer flex items-center justify-between p-2 transition-all duration-200 ${
              selectedCategoryId === category.id
                ? " bg-neutral-200 rounded-lg"
                : ""
            }`}
            key={category?.name}
          >
            <a
              className="w-full h-full text-base"
              onClick={() => selectFilter(category)}
            >
              {category?.name}
            </a>
            <a onClick={removeFilter}>
              <XMarkIcon
                className={`  hidden w-4 h-4 text-neutral-600 ${
                  selectedCategoryId === category.id ? "!block" : ""
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default CatalogFilter;
