"use client";
import React, { useState } from "react";

import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="con max-w-[980px] flex-col lg:flex-row pt-4 lg:pt-10 flex">
      <div className="flex flex-col flex-[3] gap-2 lg:gap-5 lg:mr-10">
        <h3 className="text-lg font-bold mb-2">Корзина </h3>
        {cartItems.length > 0 ? (
          <React.Fragment>
            {cartItems.map((product, i) => (
              <CartItem key={i} {...product} />
            ))}
          </React.Fragment>
        ) : (
          <h2>Корзина пустая</h2>
        )}
        {/* <h3 className="text-lg font-bold mb-2">Корзина </h3>
        {cartItems.map((product, i) => (
          <CartItem key={i} {...product} />
        ))} */}
      </div>
      {cartItems.length > 0 && (
        <div className="flex-1 ">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-2">Детали заказа: </h3>
            <p className=" pb-2 border-b border-neutral-400">
              Цена: {totalPrice} руб
            </p>
            <p className=" pb-2 border-b border-neutral-400">Скидка:</p>
            <p className="font-bold text-lg pb-2 border-b border-neutral-400">
              Итоговая цена: {totalPrice} руб
            </p>
            <button className="mt-4 btn btn--out-black">Заказать</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
