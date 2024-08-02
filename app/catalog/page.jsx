import CatalogFilter from "../components/CatalogFilter";
import CatalogGrid from "../components/Catalog";
import MobileFilter from "../components/CatalogFilter/MobileFilter";
import CatalogSort from "../components/CatalogSort";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "Каталог продукции",
  description:
    "Каталог детских игровых и спортивных комплексов, элементов благоустройства от компании Fazel",
  keywords:
    "детские площадки, спортивные площадки, игровые комплексы, наш двор, детская площадка купить, детские площадки купить, детские игровые площадки, качели, карусели, песочницы, горки, беседки, воркаут, вазоны, скамейки, урны, ограждения, веранды",
  openGraph: {
    images: [`https://fazel-client.vercel.app/home/ik.webp`],
    title: "Каталог продукции",
    description:
      "Каталог детских игровых и спортивных комплексов, элементов благоустройства от компании Fazel.",
    url: "https://fazel-client.vercel.app/catalog",
    siteName: "Fazel",
    locale: "ru_RU",
    type: "website",
  },
};
const CatalogPage = () => {
  
  return (
    <React.Fragment>
      <div className="con relative flex flex-col pt-5 lg:pt-9">
        <div className="w-full flex justify-between">
          <h1 className="text-lg font-bold lg:text-2xl ">Каталог</h1>
        </div>
        <CatalogSort />
        <div className="flex gap-10 mt-6 ">
          <div className="hidden md:block flex-1 ">
            <CatalogFilter />
          </div>
          <div className="flex-[4]">
            <CatalogGrid />
          </div>
        </div>
        <MobileFilter />
      </div>
    </React.Fragment>
  );
};
export default CatalogPage;
