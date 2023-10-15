import React from "react";
import ProductPageSlider from "@/app/components/ProductPage/ProductPageSlider";
import ProductTabs from "@/app/components/ProductPage/ProductTabs";
import Slider from "@/app/components/HomeSlider";
import { getProductByID } from "@/utils/getData";

const ItemPage = async ({ params: { id } }) => {
  const [product] = await getProductByID(id);
  const sizes = [1500, 2500, 3000];
  const colors = ["Тик", "Палисандр", "Махагон"];
  console.log(product);
  //   const [activeSize, setActiveSize] = useState(null);
  //   const [activeColor, setActiveColor] = useState(null);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductPageSlider image={product.img} />
        <div className="flex h-full flex-col justify-center shadow-2xl p-5 ">
          <h1 className="text-4xl  font-bold mb-4">Скамейка {product?.name}</h1>

          <ul className="mb-4">
            <li>
              <div>
                <p>
                  <span>Высота: </span> {product?.height}
                </p>
                <p>
                  <span>Ширина:</span>
                  {product?.width}мм
                </p>
                <p>
                  <span>Вес:</span>
                  {product?.weight}кг
                </p>
                <p>
                  <span>Вес:</span>
                  {product?.weight}кг
                </p>
              </div>
            </li>
            <li>Материалы: Дерево и металл</li>
          </ul>
          <p className=" text-lg font-medium mb-4">Длина (в мм):</p>

          <ProductTabs items={sizes} />
          <p className=" text-lg font-medium mb-4">Цвет:</p>
          <ProductTabs items={colors} />

          <span className="text-2xl font-bold">от {product.price} руб</span>
          <button className="btn btn--fill-black max-w-[220px] my-4">
            Добавить в корзину
          </button>
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
