"use client";
import React, { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem";
import { getAllProducts } from "@/utils/getData";
import { useSelector } from "react-redux";
import CatalogItemSkeleton from "./Sceleton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CatalogGrid = () => {
  const searchParams = useSearchParams();
  const fiterCategory = searchParams.get("category");
  const sortOrder = searchParams.get("order");
  const [products, setProducts] = useState([]);
  // const order = useSelector((state) => state.filter.orderValue);
  const [isLoading, setIsLoading] = useState(true);
  // const category = useSelector((state) => state.filter.categoryValue);

  console.log(fiterCategory, sortOrder);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // const cachedData = localStorage.getItem("allProducts");
        // if (cachedData) {
        //   setProducts(JSON.parse(cachedData));
        // } else {
        const response = await getAllProducts(fiterCategory, sortOrder);
        setProducts(response);
        // }
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [fiterCategory, sortOrder]);

  return (
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
  );
};

export default CatalogGrid;
