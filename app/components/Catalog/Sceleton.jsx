import React from "react";
import ContentLoader from "react-content-loader";

const CatalogItemSkeleton = () => {
  return (
    <div className="relative flex w-full h-full  flex-col  ">
      <ContentLoader
        speed={2}
        width={"100%"}
        height={300}
        viewBox="0 0 100% 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="object-contain"
      >
        <rect x="0" y="0" rx="10" ry="10" width="100%" height="300" />
      </ContentLoader>

      <ContentLoader
        speed={2}
        width={170}
        height={15}
        viewBox="0 0 170 15"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="mt-2"
      >
        <rect x="0" y="0" rx="5" ry="5" width="170" height="15" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={120}
        height={15}
        viewBox="0 0 120 15"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="mt-4 font-semibold"
      >
        <rect x="0" y="0" rx="5" ry="5" width="120" height="15" />
      </ContentLoader>
    </div>
  );
};

export default CatalogItemSkeleton;
