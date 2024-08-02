"use client";
import { addItem, reduceItem } from "@/redux/cart/slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Button = (product) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const findItem = cartItems.find((obj) => obj.id === product.id);
  const addToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <React.Fragment>
      {findItem ? (
        <div className="flex gap-3  items-center">
          <button
            onClick={() => dispatch(reduceItem(product))}
            className="items-center text-sm active:bg-gray-100 active:text-black/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-2 transition w-full lg:w-auto rounded-lg bg-black border-white/20 hover:bg-gray-600 text-white"
          >
            -
          </button>
          <p>{findItem.count}</p>
          <button
            onClick={addToCart}
            className="items-center text-sm active:bg-gray-100 active:text-black/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-2 transition w-full lg:w-auto rounded-lg bg-black border-white/20 hover:bg-gray-600 text-white"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={addToCart}
          className="items-center text-sm active:bg-gray-100 active:text-black/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-3 transition w-full lg:w-auto rounded-lg bg-black border-white/20 hover:bg-gray-600 text-white"
        >
          Добавить в корзину
        </button>
      )}
    </React.Fragment>
  );
};
export default Button;
