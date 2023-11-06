import React from "react";
import ProductPageSlider from "@/app/components/ProductPage/ProductPageSlider";
import ProductTabs from "@/app/components/ProductPage/ProductTabs";
import Slider from "@/app/components/HomeSlider";
import { getAllProducts, getProductByID } from "@/utils/getData";
import Button from "@/app/components/AddToCartButtom";
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
export async function generateMetadata({ params, searchParams }) {
  // read route params
  const id = params.id;

  // fetch data
  const product = await getProductByID(id);

  return {
    title: product.name,
    description: `${product.name} от произовдителя. Купите от ${product.price} руб`,
    openGraph: {
      images: [product?.image],
      title: product.name,
      description: `${product.name} от произовдителя. Купите от ${product.price} руб`,
      url: `https://fazel-client.vercel.app/item/${id}`,
      siteName: "Fazel",
    },
  };
}

const ItemPage = async ({ params: { id } }) => {
  const product = await getProductByID(id);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductPageSlider image={product?.image} />
        <div className="flex h-full flex-col py-10 justify-center gap-5 shadow-2xl px-5 ">
          <h1 className="text-4xl  font-bold mb-8">{product?.name}</h1>

          <ul className="mb-4">
            <li>
              <div>
                <p>
                  <span>Высота: </span> {product?.Description?.height}
                </p>
                <p>
                  <span>Ширина:</span>
                  {product?.Description?.width}мм
                </p>
                <p>
                  <span>Вес:</span>
                  {product?.Description?.weight}кг
                </p>
              </div>
            </li>
            <li>Материалы: Дерево и металл</li>
          </ul>
          {/* <p className=" text-lg font-medium mb-4">Длина (в мм):</p>

          <ProductTabs items={sizes} />
          <p className=" text-lg font-medium mb-4">Цвет:</p>
          <ProductTabs items={colors} /> */}

          <span className="text-2xl font-bold">от {product?.price} руб</span>
          <Button {...product} />
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-lg font-bold mb-4">Похожие продукты</h2>
        <Slider />
      </div>
    </div>
  );
};

export default ItemPage;
