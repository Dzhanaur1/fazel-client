"use client";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { fetchData } from "@/utils/getData";
import { useDispatch, useSelector } from "react-redux";
// import data from "../../api/catalog/data.json";
import { setCategoryValue, setQueryValue } from "@/redux/filter/slice";
import { XMarkIcon } from "@heroicons/react/24/outline";
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
  const [selectedCategoryId, setIdSelectedCategory] = useState();
  const dispatch = useDispatch();
  const selectFilter = (category) => {
    setIdSelectedCategory(category.id);
    dispatch(setCategoryValue(category.query));
    dispatch(setQueryValue());
    console.log(category.query);
  };
  const selectedFilter = useSelector((state) => state.filter.queryValue);
  console.log(selectedFilter);
  const removeFilter = () => {
    setIdSelectedCategory(null);
    console.log("remove");
  };
  const categories = data;
  const subCategories = [];

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

      {subCategories?.map((section) => (
        <Disclosure
          as="div"
          key={section.id}
          className="border-b border-gray-200 py-6"
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {section.options?.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
      <button className="btn btn--out-black px-4 py-5">Отправить</button>
    </form>
  );
};

export default CatalogFilter;
