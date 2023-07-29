"use client";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { fetchData } from "@/utils/getData";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "@/redux/filter/slice";

const CatalogFilter = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const url = useSelector((state) => state.filter.searchValue);
  console.log(url);
  window.history.pushState({ path: url }, "", url);
  useEffect(() => {
    fetchData(url ? url : undefined)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  const categories = data?.categories;
  const filters = [
    {
      id: "back",
      name: "Спинка",
      options: [
        { value: "true", label: "Со спинкой", checked: false },
        { value: "false", label: "Без спинки", checked: false },
      ],
    },
    {
      id: "category",
      name: "Категория",
      options: [
        { value: "new-arrivals", label: "Минимализм", checked: false },
        { value: "sale", label: "Классические", checked: false },
        { value: "travel", label: "Парковые", checked: true },
        { value: "organization", label: "Чугунные", checked: false },
        { value: "accessories", label: "Кованные", checked: false },
      ],
    },
    {
      id: "",
      name: "Материал",
      options: [
        { value: "wood", label: "Дерево", checked: false },
        { value: "metal", label: "Металл", checked: false },
        { value: "concrete", label: "Бетон", checked: false },
        { value: "plastic", label: "Пластик", checked: false },
        { value: "stone", label: "Камень", checked: true },
      ],
    },
  ];
  return (
    <form className="block">
      <h3 className="sr-only">Категории</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
      >
        {categories?.map((category) => (
          <li key={category?.name}>
            <a onClick={() => dispatch(setSearchValue(category.href))}>
              {category?.name}
            </a>
          </li>
        ))}
      </ul>

      {filters.map((section) => (
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
                  {section.options.map((option, optionIdx) => (
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
    </form>
  );
};

export default CatalogFilter;
