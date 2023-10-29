import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ContentLoader
        speed={2}
        width={"100%"}
        height={600}
        viewBox="0 0 100% 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="600" />
      </ContentLoader>
      <div className="flex h-full flex-col py-10 justify-center gap-5  px-5">
        <ContentLoader
          speed={2}
          width={250}
          height={60}
          viewBox="0 0 250 60"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="0" ry="0" width="250" height="60" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={350}
          height={110}
          viewBox="0 0 350 110"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="0" ry="0" width="350" height="20" />
          <rect x="0" y="30" rx="0" ry="0" width="350" height="20" />
          <rect x="0" y="60" rx="0" ry="0" width="350" height="20" />
          <rect x="0" y="90" rx="0" ry="0" width="350" height="20" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={200}
          height={30}
          viewBox="0 0 200 30"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="0" ry="0" width="200" height="30" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={200}
          height={45}
          viewBox="0 0 200 45"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="0" ry="0" width="200" height="45" />
        </ContentLoader>

        {/* <rect x="0" y="80" rx="0" ry="0" width="300" height="20" />
          <rect x="0" y="105" rx="0" ry="0" width="300" height="20" />
          <rect x="0" y="130" rx="0" ry="0" width="300" height="20" />
          <rect x="0" y="155" rx="0" ry="0" width="300" height="20" />
          <rect x="0" y="210" rx="0" ry="0" width="150" height="60" />
          <rect x="160" y="200" rx="0" ry="0" width="150" height="40" /> */}
      </div>
    </div>
    <div className="my-8">
      <h2 className="text-lg font-bold mb-4">Похожие продукты</h2>
      <ContentLoader
        speed={2}
        width={600}
        height={200}
        viewBox="0 0 600 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="200" height="200" />
        <rect x="220" y="0" rx="0" ry="0" width="200" height="200" />
        <rect x="440" y="0" rx="0" ry="0" width="200" height="200" />
      </ContentLoader>
    </div>
  </div>
);
export default Skeleton;
