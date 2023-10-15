"use client";
import React, { useEffect, useState } from "react";
import CatalogItem from "./CatalogItem";
import { getAllProducts } from "@/utils/getData";
import { useSelector } from "react-redux";

const CatalogGrid = () => {
  const [products, setProducts] = useState([]);
  const currentQuery = useSelector((state) => state.filter.queryValue);

  useEffect(() => {
    getAllProducts(currentQuery)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentQuery]);
  console.log(products);
  return (
    <div className="grid min-[480px]:grid-cols-2   lg:grid-cols-3  gap-x-8 gap-y-8 items-center">
      {products?.map((product, i) => (
        <CatalogItem key={i} {...product} />
      ))}
    </div>
  );
};

export default CatalogGrid;
