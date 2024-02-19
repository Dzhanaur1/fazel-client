"use client";
import React, { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem";
import { getAllProducts } from "@/utils/getData";
import CatalogItemSkeleton from "./Sceleton";
import { useSearchParams } from "next/navigation";

export const revalidate = 20;
const CatalogGrid = () => {
  const searchParams = useSearchParams();
  const fiterCategory = searchParams.get("category");
  const sortOrder = searchParams.get("order");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts(fiterCategory, sortOrder);
        setProducts(response);
        console.log("fetch");
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
