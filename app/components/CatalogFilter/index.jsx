"use client";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryValue } from "@/redux/filter/slice";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Categorydata from "@/app/category/categories.json";
<<<<<<< HEAD

=======
import { GoPlus } from "react-icons/go";
>>>>>>> parent of 52374a8 (fix header)
const CatalogFilter = () => {
  const categories = Categorydata.categories;
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(
        expandedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  const isCategoryExpanded = (categoryId) => {
    return expandedCategories.includes(categoryId);
  };
  const router = useRouter();
  const [selectedCategoryId, setIdSelectedCategory] = useState("");

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

  return (
    <form className="flex flex-col">
      <h3 className="sr-only">Категории</h3>
      <ul className="flex flex-col gap-6">
        {categories.map((category, i) => (
          <li key={category.id}>
            <div className=" cursor-pointer flex justify-between  items-center ">
              <h2 className=" font-semibold max-w-[70%]">{category.name}</h2>
              {isCategoryExpanded(category.id) ? (
                <MinusIcon
                  onClick={() => toggleCategory(category.id)}
                  width={24}
                  height={24}
                />
              ) : (
                <PlusIcon
                  onClick={() => toggleCategory(category.id)}
                  width={20}
                  height={20}
                />
              )}
            </div>
            {isCategoryExpanded(category.id) && (
              <ul
                role="list"
                className={` opacity-0 border-b transition-all duration-300  border-gray-200 pb-6 text-sm font-medium text-gray-900 ${
                  isCategoryExpanded(category.id) ? " opacity-100" : ""
                }`}
              >
                {category.subcategories?.map((subcategory) => (
                  <li
                    className={` cursor-pointer flex items-center justify-between p-2 transition-all duration-200 ${
                      selectedCategoryId === subcategory.id
                        ? " bg-neutral-200 rounded-lg"
                        : ""
                    }`}
                    key={category?.name}
                  >
                    <a
                      className="w-full h-full text-base"
                      onClick={() => selectFilter(subcategory)}
                    >
                      {subcategory?.name}
                    </a>
                    <a onClick={removeFilter}>
                      <XMarkIcon
                        className={`  hidden w-4 h-4 text-neutral-600 ${
                          selectedCategoryId === subcategory.id ? "!block" : ""
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default CatalogFilter;
