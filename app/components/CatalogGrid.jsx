"use client";
import React, { useEffect, useState } from "react";
import CatalogItem from "./CatalogItem";
import { fetchData } from "@/utils/getData";
import { useSelector } from "react-redux";

const CatalogGrid = () => {
  const [products, setProducts] = useState([]);
  const search = useSelector((state) => state.filter.searchValue);
  useEffect(() => {
    fetchData(search ? search : undefined)
      .then((response) => {
        setProducts(response.currentProducts);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(search);
  }, [search]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-8 items-center">
      {products.map((product, i) => (
        <CatalogItem key={i} {...product} />
      ))}
    </div>
  );
};

export default CatalogGrid;
