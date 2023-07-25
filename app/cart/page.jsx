import React from "react";
import { BsTrash, BsTrash2Fill } from "react-icons/bs";

const ProductItem = () => {
  return (
    <div className="flex items-center  justify-between mb-6">
      <div className="flex-2">
        <img
          src="slider/alpha.png"
          alt="Product Image"
          className="w-24 h-24 object-cover rounded"
        />
      </div>
      <div className=" flex-2 pl-4">
        <h2 className="text-lg font-semibold mb-2">Лавочка "Альфа"</h2>
        <p className="text-gray-600 text-sm mb-1">Длина: 1500мм</p>
        <p className="text-gray-600 text-sm mb-1">Цвет: Таль</p>
      </div>
      <div className=" flex flex-1 justify-center gap-2 lg:gap-4 items-center">
        <button className=" btn btn--out-black !py-1">-</button>
        <p className="px-4 py-1 rounded-lg  bg-neutral-300">2</p>
        <button className=" !py-1 btn btn--out-black">+</button>
      </div>
      <button>
        <BsTrash />
      </button>
    </div>
  );
};

const ShoppingCart = () => {
  return (
    <div className="con max-w-[980px] flex-col lg:flex-row pt-4 lg:pt-10 flex">
      <div className="flex flex-col flex-[3] gap-2 lg:gap-5 lg:mr-10">
        <h3 className="text-lg font-bold mb-2">Корзина </h3>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="flex-1 ">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold mb-2">Детали заказа: </h3>
          <p className=" pb-2 border-b border-neutral-400">Цена:</p>
          <p className=" pb-2 border-b border-neutral-400">Скидка:</p>
          <p className="font-bold text-lg pb-2 border-b border-neutral-400">
            Итоговая цена:
          </p>
          <button className="mt-4 btn btn--out-black">Заказать</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
