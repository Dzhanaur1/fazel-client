import React from "react";
import CatalogItem from "./CatalogItem";

const CatalogGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-8 items-center">
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
    </div>
  );
};

export default CatalogGrid;
