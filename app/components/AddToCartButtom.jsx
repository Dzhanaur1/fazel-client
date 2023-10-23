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
    console.log(cartItems);
  };

  return (
    <React.Fragment>
      {findItem ? (
        <div className="flex gap-3  my-4 items-center">
          <button
            onClick={() => dispatch(reduceItem(product))}
            className="btn btn--fill-black w-8 h-8 inline-flex justify-center items-center"
          >
            -
          </button>
          <p>{findItem.count}</p>
          <button
            onClick={addToCart}
            className="btn btn--fill-black w-8 h-8  inline-flex  justify-center items-center"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={addToCart}
          className="btn btn--fill-black max-w-[220px] my-4"
        >
          Добавить в корзину
        </button>
      )}
    </React.Fragment>
  );
};
export default Button;
