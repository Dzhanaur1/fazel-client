import CatalogFilter from "../components/CatalogFilter";
import CatalogGrid from "../components/CatalogGrid";
import MobileFilter from "../components/CatalogFilter/MobileFilter";

const CatalogPage = () => {
  return (
    <div className="con relative flex flex-col pt-5 lg:pt-9">
      <div className="w-full flex justify-between">
        <h1 className="text-lg font-bold lg:text-2xl ">Каталог</h1>
      </div>
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
  );
};
export default CatalogPage;
