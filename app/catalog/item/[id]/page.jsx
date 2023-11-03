import React from "react";
import ProductPageSlider from "@/app/components/ProductPage/ProductPageSlider";
import ProductTabs from "@/app/components/ProductPage/ProductTabs";
import Slider from "@/app/components/HomeSlider";
import { getAllProducts, getProductByID } from "@/utils/getData";
import Button from "@/app/components/AddToCartButtom";
import axios from "axios";
export async function generateStaticParams() {
  const { data } = await axios.get(
    "https://fazel-server.vercel.app/api/catalog"
  );
  const porducts = data;
  return porducts.map((product) => {
    slug: product.id.toString();
  });
}

const ItemPage = async ({ params: { id } }) => {
  const product = await getProductByID(1);

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
