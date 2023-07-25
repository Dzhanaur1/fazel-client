"use client";
import React, { useState } from "react";

const ProductTabs = ({ items }) => {
  console.log(items);
  items.map((item) => {
    console.log(item);
  });
  const [activeItem, setActiveItem] = useState(null);
  return (
    <ul className="flex w-full gap-3 mb-6">
      {items.map((item, i) => (
        <li>
          <button
            onClick={() => setActiveItem(i)}
            className={`btn btn--out-black long  ${
              activeItem === i ? "active " : ""
            }`}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductTabs;
