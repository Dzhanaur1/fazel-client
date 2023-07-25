import React from "react";
import ProductPageSlider from "@/app/components/ProductPage/ProductPageSlider";
import ProductTabs from "@/app/components/ProductPage/ProductTabs";
import Slider from "@/app/components/HomeSlider";

const sizes = [1500, 2500, 3000];
const colors = ["Тик", "Палисандр", "Махагон"];
const ItemPage = ({ params }) => {
  //   const [activeSize, setActiveSize] = useState(null);
  //   const [activeColor, setActiveColor] = useState(null);
  console.log(params.id);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductPageSlider />
        <div className="flex h-full flex-col justify-center shadow-2xl p-5 ">
          <h1 className="text-4xl  font-bold mb-4">Скамейка "Альфа"</h1>
          <p className="text-lg max-w-[500px] font-medium mb-4">
            This park bench is perfect for relaxing and enjoying the outdoors.
            Made from high-quality materials, it is durable and comfortable.
          </p>
          <ul className="mb-4">
            <li>
              <div>
                <p>
                  <span>Высота:</span> 860мм
                </p>
                <p>
                  <span>Ширина:</span> 460мм
                </p>
              </div>
            </li>
            <li>Материалы: Дерево и металл</li>
          </ul>
          <p className=" text-lg font-medium mb-4">Модель:</p>

          <ProductTabs items={sizes} />
          <p className=" text-lg font-medium mb-4">Цвет:</p>
          <ProductTabs items={colors} />

          <span className="text-2xl font-bold">$199.99</span>
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
