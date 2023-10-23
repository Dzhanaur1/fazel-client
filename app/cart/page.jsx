"use client";
import React from "react";

import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="con max-w-[980px] flex-col lg:flex-row pt-4 lg:pt-10 flex">
      <div className="flex flex-col flex-[3] gap-2 lg:gap-5 lg:mr-10">
        {/* {cartItems.lenght > 0 ? (
          <React.Fragment>
            <h3 className="text-lg font-bold mb-2">Корзина </h3>
            {cartItems.map((product, i) => {
              <ProductItem key={i} {...product} />;
            })}
          </React.Fragment>
        ) : (
          <h2>Корзина пустая</h2>
        )} */}
        <h3 className="text-lg font-bold mb-2">Корзина </h3>
        {cartItems.map((product, i) => (
          <CartItem key={i} {...product} />
        ))}
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
